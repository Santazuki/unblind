import { ClientError } from "../errorHandler.js";
import { MODE_PROMPTS } from "./provider.js";
import { apiRequest, apiLog } from "../httpClient.js";
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
    if (!this._apiKey) throw new ClientError("API Key 未配置");
    const mode = options.mode || "describe";
    if (!MODE_PROMPTS[mode]) throw new ClientError(`未知模式: ${mode}`);

    const startTime = Date.now();
    const body = {
      model: this._model, max_tokens: options.maxSize || 2048,
      messages: [{ role: "user", content: [
        { type: "image_url", image_url: { url: image } },
        { type: "text", text: prompt || MODE_PROMPTS[mode] }
      ]}]
    };

    apiLog("info", "openai", "api_call_start", { model: this._model, mode });
    const res = await apiRequest(`${this._baseUrl}/chat/completions`, {
      body, headers: { "Authorization": `Bearer ${this._apiKey}` },
      timeoutMs: this._timeoutMs, providerName: "OpenAI"
    });

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content || JSON.stringify(data);
    apiLog("info", "openai", "api_call_success", { model: this._model, mode, durationMs: Date.now() - startTime });
    return { content, model: this._model, processingTimeMs: Date.now() - startTime };
  }

  async healthCheck() {
    try {
      const miniPng = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==";
      const r = await this.analyzeImage({ image: miniPng, options: { mode: "describe", maxSize: 50 } });
      return r.content.length > 0;
    } catch { return false; }
  }
}
log("debug", "openai", "module_loaded");
