import { ClientError, ServerError, NetworkError } from "../errorHandler.js";
import { MODE_PROMPTS } from "./provider.js";
import { log } from "../logger.js";

export class OpenAIProvider {
  constructor({ apiKey, baseUrl = "https://api.openai.com/v1", model = "gpt-4o", timeoutMs = 30_000 }) {
    this._apiKey = apiKey;
    this._baseUrl = baseUrl;
    this._model = model;
    this._timeoutMs = timeoutMs;
  }

  get name() { return "openai"; }

  async analyzeImage({ image, prompt, options = {} }) {
    if (!this._apiKey) throw new ClientError("OpenAI API Key 未配置");
    const mode = options.mode || "describe";
    if (!MODE_PROMPTS[mode]) throw new ClientError(`未知模式: ${mode}`);
    const userPrompt = prompt || MODE_PROMPTS[mode];
    const startTime = Date.now();

    const body = {
      model: this._model, max_tokens: options.maxSize || 2048,
      messages: [{ role: "user", content: [
        { type: "image_url", image_url: { url: image } },
        { type: "text", text: userPrompt }
      ]}]
    };

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this._timeoutMs);
    try {
      log("info", "openai", "api_call_start", { model: this._model, mode });
      const res = await fetch(`${this._baseUrl}/chat/completions`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${this._apiKey}` },
        body: JSON.stringify(body), signal: controller.signal
      });
      clearTimeout(timer);
      if (!res.ok) {
        const t = await res.text();
        if (res.status === 401 || res.status === 403) throw new ClientError("OpenAI API Key 无效", { statusCode: res.status });
        if (res.status === 429) throw new ServerError("API 限流", { statusCode: res.status });
        if (res.status >= 500) throw new ServerError("OpenAI 服务异常", { statusCode: res.status });
        throw new ClientError("API 请求失败", { statusCode: res.status, suggestion: t.slice(0, 200) });
      }
      const data = await res.json();
      const content = data.choices?.[0]?.message?.content || JSON.stringify(data);
      log("info", "openai", "api_call_success", { model: this._model, mode, durationMs: Date.now() - startTime });
      return { content, model: this._model, processingTimeMs: Date.now() - startTime };
    } catch (err) {
      clearTimeout(timer);
      if (err instanceof ClientError || err instanceof ServerError) throw err;
      if (err.name === "AbortError") throw new NetworkError("请求超时");
      throw new NetworkError(`网络错误: ${err.message}`);
    }
  }

  async healthCheck() {
    try {
      const miniPng = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==";
      const result = await this.analyzeImage({ image: miniPng, options: { mode: "describe", maxSize: 50 } });
      return result.content.length > 0;
    } catch { return false; }
  }
}
log("debug", "openai", "module_loaded");
