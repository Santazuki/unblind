import { getBaseUrl, getAuthHeader } from "../credentialManager.js";
import { ClientError } from "../errorHandler.js";
import { MODE_PROMPTS } from "./provider.js";
import { apiRequest, apiLog } from "../httpClient.js";
import { log } from "../logger.js";

export class MimoProvider {
  constructor({ apiKey, baseUrl, model = "mimo-v2.5", timeoutMs = 30_000 }) {
    this._apiKey = apiKey;
    this._baseUrl = baseUrl || getBaseUrl(apiKey);
    this._model = model;
    this._timeoutMs = timeoutMs;
  }

  get name() { return "mimo"; }

  async analyzeImage({ image, prompt, options = {} }) {
    if (!this._apiKey) throw new ClientError("API Key 未配置");
    const mode = options.mode || "describe";
    if (!MODE_PROMPTS[mode]) throw new ClientError(`未知模式: ${mode}`);

    const startTime = Date.now();
    const body = {
      model: this._model, max_tokens: options.maxSize || 2048,
      messages: [{ role: "user", content: [
        { type: "image", source: { type: "base64", media_type: this._extractMimeType(image), data: this._extractBase64(image) } },
        { type: "text", text: prompt || MODE_PROMPTS[mode] }
      ]}]
    };

    apiLog("info", "mimo", "api_call_start", { model: this._model, mode });
    const res = await apiRequest(`${this._baseUrl}/v1/messages`, {
      body, headers: { "anthropic-version": "2023-06-01", ...getAuthHeader(this._apiKey) },
      timeoutMs: this._timeoutMs, providerName: "Mimo"
    });

    const result = await res.json();
    const textBlock = result.content?.find(c => c.type === "text");
    const content = textBlock?.text || JSON.stringify(result, null, 2);
    apiLog("info", "mimo", "api_call_success", { model: this._model, mode, durationMs: Date.now() - startTime });
    return { content, model: this._model, processingTimeMs: Date.now() - startTime };
  }

  async healthCheck() {
    try {
      const miniPng = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==";
      const r = await this.analyzeImage({ image: miniPng, options: { mode: "describe", maxSize: 50 } });
      return r.content.length > 0;
    } catch { return false; }
  }

  _extractBase64(d) { const i = d.indexOf(";base64,"); return i >= 0 ? d.slice(i + 8) : d; }
  _extractMimeType(d) { const m = d.match(/^data:(.+?);base64,/); return m ? m[1] : "image/png"; }
}
log("debug", "mimo", "module_loaded");
