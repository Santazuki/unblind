/**
 * 协议定义 — v3.0 协议驱动 Provider
 * Dev #1 将在此填充实际实现。
 * 当前为最小桩，使并行开发可测试。
 */

export const PROTOCOLS = {
  "openai-chat-completions": {
    buildBody(model, content, opts) {
      return { model, messages: [{ role: "user", content }], max_tokens: 4096 };
    },
    parseError(data, status) {
      if (data?.error?.code === "invalid_api_key") return { category: "auth" };
      if (status === 429) return { category: "rate_limit" };
      if (status >= 500) return { category: "server" };
      return { category: "client", message: data?.error?.message || "openai-chat-completions error" };
    },
    extractContent(response) {
      return response?.choices?.[0]?.message?.content || "";
    },
  },
  "anthropic-messages": {
    buildBody(model, content, opts) {
      const messages = Array.isArray(content)
        ? [{ role: "user", content }]
        : [{ role: "user", content: [{ type: "text", text: content }] }];
      return { model, messages, max_tokens: 4096 };
    },
    parseError(data, status) {
      if (data?.error?.type === "authentication_error") return { category: "auth" };
      if (status === 429) return { category: "rate_limit" };
      if (status >= 500) return { category: "server" };
      return { category: "client", message: data?.error?.message || "anthropic error" };
    },
    extractContent(response) {
      return response?.content?.[0]?.text || "";
    },
  },
  "google-generative-ai": {
    buildBody(model, content, opts) {
      return { contents: [{ parts: [{ text: content }] }] };
    },
    parseError(data, status) {
      if (status === 401 || status === 403) return { category: "auth" };
      if (status === 429) return { category: "rate_limit" };
      if (status >= 500) return { category: "server" };
      return { category: "client", message: data?.error?.message || "gemini error" };
    },
    extractContent(response) {
      return response?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    },
  },
};
