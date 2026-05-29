import { describe, it, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import { loadProviders } from "../scripts/lib/providers/registry.js";

// 保存原始 env，测试结束后恢复
function withEnv(vars, fn) {
  const orig = {};
  for (const k of Object.keys(vars)) {
    orig[k] = process.env[k];
    if (vars[k] === null) delete process.env[k];
    else process.env[k] = vars[k];
  }
  try { fn(); }
  finally {
    for (const k of Object.keys(orig)) {
      if (orig[k] === undefined) delete process.env[k];
      else process.env[k] = orig[k];
    }
  }
}

describe("registry", () => {
  describe("loadProviders", () => {
    it("should return empty array when no keys configured", () => {
      withEnv({ MIMO_API_KEY: null, OPENAI_API_KEY: null, OLLAMA_BASE_URL: null }, () => {
        const result = loadProviders("mimo,openai,ollama", { model: "test", timeoutMs: 5000 });
        assert.equal(result.length, 0, "no providers without keys");
      });
    });

    it("should return only providers with keys set", () => {
      withEnv({ MIMO_API_KEY: "tp-test", OPENAI_API_KEY: null, OLLAMA_BASE_URL: null }, () => {
        const result = loadProviders("mimo,openai,ollama", { model: "test", timeoutMs: 5000 });
        assert.equal(result.length, 1);
        assert.equal(result[0].name, "mimo");
      });
    });

    it("should respect provider order", () => {
      withEnv({ MIMO_API_KEY: "tp-test", OPENAI_API_KEY: "sk-test" }, () => {
        const a = loadProviders("mimo,openai", { model: "test", timeoutMs: 5000 });
        assert.equal(a[0].name, "mimo");
        assert.equal(a[1].name, "openai");

        const b = loadProviders("openai,mimo", { model: "test", timeoutMs: 5000 });
        assert.equal(b[0].name, "openai");
        assert.equal(b[1].name, "mimo");
      });
    });

    it("should skip providers not in order list", () => {
      withEnv({ MIMO_API_KEY: "tp-test", OPENAI_API_KEY: "sk-test" }, () => {
        const result = loadProviders("openai", { model: "test", timeoutMs: 5000 });
        assert.equal(result.length, 1);
        assert.equal(result[0].name, "openai");
      });
    });

    it("should handle ollama with base URL", () => {
      withEnv({ MIMO_API_KEY: null, OPENAI_API_KEY: null, OLLAMA_BASE_URL: "http://localhost:11434/v1" }, () => {
        const result = loadProviders("ollama,mimo", { model: "test", timeoutMs: 5000 });
        assert.equal(result.length, 1);
        assert.equal(result[0].name, "ollama");
      });
    });

    it("should ignore unknown names in order", () => {
      withEnv({ MIMO_API_KEY: "tp-test" }, () => {
        const result = loadProviders("gemini,mimo,unknown", { model: "test", timeoutMs: 5000 });
        assert.equal(result.length, 1);
        assert.equal(result[0].name, "mimo");
      });
    });

    it("should handle empty order string gracefully", () => {
      withEnv({ MIMO_API_KEY: "tp-test" }, () => {
        const result = loadProviders("", { model: "test", timeoutMs: 5000 });
        assert.equal(result.length, 0);
      });
    });
  });
});
