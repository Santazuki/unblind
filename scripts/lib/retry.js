import { log } from "./logger.js";
import { isRetryable } from "./errorHandler.js";

const State = Object.freeze({ CLOSED: "CLOSED", OPEN: "OPEN", HALF_OPEN: "HALF_OPEN" });

/**
 * 熔断器 — 实例化，每个 Provider 独立状态
 * 单线程 Node.js 中无竞态风险
 */
export class CircuitBreaker {
  constructor({ failureThreshold = 5, timeoutSeconds = 60 } = {}) {
    this._threshold = failureThreshold;
    this._timeout = timeoutSeconds;
    this._state = State.CLOSED;
    this._failures = 0;
    this._openUntil = 0;
  }

  get state() { return this._state; }

  /** @returns {{ threshold: number, timeout: number, failures: number, state: string }} */
  getStats() {
    return { failures: this._failures, threshold: this._threshold, timeout: this._timeout, state: this._state };
  }

  reset() {
    this._state = State.CLOSED;
    this._failures = 0;
    this._openUntil = 0;
  }

  /**
   * 检查是否允许通过，不允许则抛出
   * @throws {Error} CircuitBreakerOpenError
   */
  _checkGate() {
    if (this._state === State.OPEN) {
      if (Date.now() < this._openUntil) {
        const remaining = Math.ceil((this._openUntil - Date.now()) / 1000);
        const err = new Error(`熔断保护中，${remaining}s 后自动恢复`);
        err.name = "CircuitBreakerOpenError";
        throw err;
      }
      this._state = State.HALF_OPEN;
      log("info", "retry", "circuit_half_open", this.getStats());
    }
  }

  /** 记录失败，达到阈值则打开熔断 */
  _recordFailure() {
    this._failures++;
    if (this._failures >= this._threshold) {
      this._state = State.OPEN;
      this._openUntil = Date.now() + this._timeout * 1000;
      log("error", "retry", "circuit_open", this.getStats());
    }
  }

  /** 记录成功，重置计数器 */
  _recordSuccess() {
    if (this._state === State.HALF_OPEN) {
      this._state = State.CLOSED;
      log("info", "retry", "circuit_closed_recovered");
    }
    this._failures = 0;
  }
}

/**
 * 执行带重试和熔断保护的异步操作
 * @param {() => Promise<any>} fn
 * @param {{ maxAttempts?: number, baseDelayMs?: number, maxDelayMs?: number, circuitBreaker?: CircuitBreaker }} options
 * @returns {Promise<any>}
 */
export async function withRetry(fn, options = {}) {
  const {
    maxAttempts = 3,
    baseDelayMs = 1000,
    maxDelayMs = 10000,
    circuitBreaker = new CircuitBreaker(),
  } = options;

  circuitBreaker._checkGate();

  let lastError;
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      const result = await fn();
      circuitBreaker._recordSuccess();
      return result;
    } catch (err) {
      lastError = err;
      if (!isRetryable(err)) throw err;

      log("warn", "retry", "attempt_failed", { attempt: attempt + 1, maxAttempts, error: err.message });
      circuitBreaker._recordFailure();

      if (circuitBreaker._state === State.OPEN) {
        const remaining = circuitBreaker._timeout;
        const msg = `熔断保护已触发（连续 ${circuitBreaker._failures} 次失败），${remaining}s 后自动恢复`;
        throw Object.assign(new Error(msg), { name: "CircuitBreakerOpenError" });
      }

      if (attempt < maxAttempts - 1) {
        const delay = Math.min(baseDelayMs * Math.pow(2, attempt), maxDelayMs);
        log("debug", "retry", "backoff", { delayMs: delay, attempt: attempt + 1 });
        await new Promise((r) => setTimeout(r, delay));
      }
    }
  }
  throw lastError;
}

log("debug", "retry", "module_loaded");
