import { log, setLogLevel } from "./logger.js";
import { loadConfig } from "./config.js";
import { getApiKey, getBaseUrl } from "./credentialManager.js";
import { processImage } from "./imageProcessor.js";
import { withRetry, getCircuitState } from "./retry.js";
import { MimoProvider } from "./providers/mimo.js";
import { ClientError } from "./errorHandler.js";
import { VALID_MODES } from "./providers/provider.js";

/**
 * 分析图片 — 完整调度流程
 * @param {string} imagePath
 * @param {string} mode - describe|ocr|ui-review|chart-data|object-detect
 * @returns {Promise<string>} 分析结果文本
 */
export async function analyze(imagePath, mode = "describe") {
  // 1. 加载配置
  const config = loadConfig();
  setLogLevel(config.logging.level);

  // 2. 模式校验
  if (!VALID_MODES.includes(mode)) {
    throw new ClientError(`未知的分析模式: ${mode}`, {
      suggestion: `支持的模式: ${VALID_MODES.join(", ")}`,
    });
  }

  // 3. 凭据
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new ClientError("API Key 未配置", {
      suggestion: "请设置 MIMO_API_KEY 环境变量或在 ~/.claude/settings.json 的 env 段中配置",
    });
  }

  // 4. 图片预处理
  log("info", "orchestrator", "processing_image", { path: imagePath.slice(-30), mode });
  const { base64 } = await processImage(imagePath, {
    maxImageSize: config.maxImageSize,
  });

  // 5. 主 Provider
  const primaryProvider = new MimoProvider({
    apiKey,
    baseUrl: getBaseUrl(apiKey),
    model: config.model,
    timeoutMs: config.requestTimeoutMs,
  });

  try {
    log("info", "orchestrator", "calling_provider", { provider: "mimo", mode });
    const retryOptions = {
      ...config.retry,
      circuitBreaker: config.circuitBreaker,
    };
    const result = await withRetry(
      () => primaryProvider.analyzeImage({ image: base64, options: { mode } }),
      retryOptions
    );

    log("info", "orchestrator", "analysis_complete", {
      mode,
      durationMs: result.processingTimeMs,
    });

    return result.content;
  } catch (err) {
    // 熔断时尝试降级（无备选则直接抛）
    if (err.name === "CircuitBreakerOpenError") {
      throw new ClientError("Mimo 服务暂不可用（熔断保护中）", {
        suggestion: "当前无备选 Provider，请等待恢复后重试。系统将自动恢复。",
      });
    }
    throw err;
  }
}
