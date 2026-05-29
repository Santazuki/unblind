/**
 * GenericProvider — v3.0 协议驱动 Provider
 * Dev #2 将在此填充实际实现。
 * 当前为最小桩，使并行开发可测试。
 */

import { apiRequest } from "../httpClient.js";

export class GenericProvider {
  constructor({ name, protocol, baseUrl, apiKey, model, timeoutMs, overrides = {} }) {
    this.name = name;
    this.protocol = protocol;
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
    this.model = model;
    this.timeoutMs = timeoutMs || 30000;
    this.overrides = overrides;
  }

  _buildHeaders() {
    return {};
  }

  async analyzeImage({ image, prompt, options = {} }) {
    const body = this.overrides.buildBody
      ? this.overrides.buildBody(this.protocol, this.model, prompt, {})
      : this.protocol.buildBody(this.model, prompt, {});

    const res = await apiRequest(this.baseUrl + "/messages", {
      body,
      headers: this._buildHeaders(),
      timeoutMs: this.timeoutMs,
      providerName: this.name,
      parseError: (...args) => this.protocol.parseError(...args),
    });

    const data = await res.json();
    return {
      content: this.protocol.extractContent(data),
      processingTimeMs: 0,
      provider: this.name,
    };
  }

  async healthCheck() {
    return true;
  }
}
