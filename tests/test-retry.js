import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { withRetry, CircuitBreaker } from "../scripts/lib/retry.js";
import { ServerError, ClientError } from "../scripts/lib/errorHandler.js";

describe("retry", () => {
  it("should return result on first success", async () => {
    const fn = async () => "success";
    const result = await withRetry(fn, { maxAttempts: 3, baseDelayMs: 10 });
    assert.equal(result, "success");
  });

  it("should retry on ServerError and eventually succeed", async () => {
    let calls = 0;
    const fn = async () => {
      calls++;
      if (calls < 3) throw new ServerError("暂时不可用", { statusCode: 503 });
      return "recovered";
    };
    const result = await withRetry(fn, { maxAttempts: 3, baseDelayMs: 10 });
    assert.equal(result, "recovered");
    assert.equal(calls, 3);
  });

  it("should throw after max attempts", async () => {
    const fn = async () => { throw new ServerError("持续失败", { statusCode: 500 }); };
    await assert.rejects(
      () => withRetry(fn, { maxAttempts: 2, baseDelayMs: 10 }),
      (err) => err.message === "持续失败"
    );
  });

  it("should NOT retry on ClientError", async () => {
    let calls = 0;
    const fn = async () => {
      calls++;
      throw new ClientError("无效输入");
    };
    await assert.rejects(() => withRetry(fn, { maxAttempts: 3, baseDelayMs: 10 }));
    assert.equal(calls, 1, "ClientError should not be retried");
  });

  it("should use exponential backoff", async () => {
    const delays = [];
    const orig = setTimeout;
    globalThis.setTimeout = (fn, delay) => {
      delays.push(delay);
      return orig(fn, 0); // execute immediately for test speed
    };

    const fn = async () => { throw new ServerError("fail"); };
    try {
      await withRetry(fn, { maxAttempts: 3, baseDelayMs: 100, maxDelayMs: 1000 });
    } catch {}

    globalThis.setTimeout = orig;
    assert.equal(delays.length, 2); // 2 retries = 2 delays
    assert.equal(delays[0], 100);   // first retry: baseDelayMs
    assert.equal(delays[1], 200);   // second retry: baseDelayMs * 2
  });

  describe("circuit breaker", () => {
    it("should start in CLOSED state", () => {
      const cb = new CircuitBreaker();
      assert.equal(cb.state, "CLOSED");
    });

    it("should open after threshold failures", async () => {
      const cb = new CircuitBreaker({ failureThreshold: 3, timeoutSeconds: 60 });
      const fn = async () => { throw new ServerError("fail"); };
      for (let i = 0; i < 3; i++) {
        try { await withRetry(fn, { maxAttempts: 1, baseDelayMs: 1, circuitBreaker: cb }); } catch {}
      }
      assert.equal(cb.state, "OPEN");
    });

    it("should isolate between instances", async () => {
      const cb1 = new CircuitBreaker({ failureThreshold: 2, timeoutSeconds: 60 });
      const cb2 = new CircuitBreaker({ failureThreshold: 2, timeoutSeconds: 60 });
      const fail = async () => { throw new ServerError("fail"); };
      for (let i = 0; i < 2; i++) {
        try { await withRetry(fail, { maxAttempts: 1, baseDelayMs: 1, circuitBreaker: cb1 }); } catch {}
      }
      assert.equal(cb1.state, "OPEN");   // cb1 应该被触发
      assert.equal(cb2.state, "CLOSED");  // cb2 不受影响
    });

    it("should reset on success", async () => {
      const cb = new CircuitBreaker({ failureThreshold: 5, timeoutSeconds: 60 });
      let calls = 0;
      const fn = async () => { calls++; if (calls < 3) throw new ServerError("fail"); return "ok"; };
      await withRetry(fn, { maxAttempts: 3, baseDelayMs: 1, circuitBreaker: cb });
      assert.equal(cb.state, "CLOSED");
      assert.equal(cb.getStats().failures, 0);
    });
  });
});
