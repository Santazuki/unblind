import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { getApiKey, getBaseUrl } from "../scripts/lib/credentialManager.js";

describe("credentialManager", () => {
  describe("getBaseUrl", () => {
    it("should detect token-plan URL for tp- keys", () => {
      const url = getBaseUrl("tp-test123");
      assert.ok(url.includes("token-plan-cn.xiaomimimo.com"));
      assert.ok(url.endsWith("/anthropic"));
    });

    it("should detect api URL for sk- keys", () => {
      const url = getBaseUrl("sk-ant-test");
      assert.ok(url.includes("api.xiaomimimo.com"));
    });

    it("should return token-plan URL as default for unknown prefix", () => {
      const url = getBaseUrl("unknown-key");
      assert.ok(url.includes("token-plan-cn"), "defaults to token-plan for unknown prefix");
    });

    it("should return empty string for empty key", () => {
      const url = getBaseUrl("");
      assert.equal(url, "");
    });
  });

  describe("getApiKey", () => {
    it("should read from MIMO_API_KEY env", () => {
      process.env.MIMO_API_KEY = "tp-env-test";
      const key = getApiKey();
      assert.equal(key, "tp-env-test");
      delete process.env.MIMO_API_KEY;
    });

    it("should return empty string if not set", () => {
      delete process.env.MIMO_API_KEY;
      const key = getApiKey();
      assert.equal(key, "");
    });
  });
});
