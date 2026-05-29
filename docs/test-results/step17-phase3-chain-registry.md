▶ cache
  ▶ getCacheKey
    ✔ should return a SHA256 hex string (4.9617ms)
    ✔ should produce different keys for different hashes (0.812ms)
    ✔ should produce different keys for different prompts (0.4965ms)
  ✔ getCacheKey (7.0422ms)
  ▶ get/set
    ✔ should return cached value after set (19.2926ms)
    ✔ should return null for missing key (5.4911ms)
    ✔ should return null for expired entry (59.8098ms)
    ✔ should respect custom TTL (1117.9505ms)
  ✔ get/set (1203.3438ms)
  ▶ invalidate
    ✔ should remove a cached entry (2.5881ms)
  ✔ invalidate (2.8361ms)
  ▶ getStats
    ✔ should track hits and misses (13.3522ms)
  ✔ getStats (13.4964ms)
  ▶ clear
    ✔ should remove all entries (4.0512ms)
  ✔ clear (4.1721ms)
✔ cache (1231.4766ms)
{"timestamp":"2026-05-29T14:35:48.843Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-29T14:35:48.845Z","level":"info","module":"config","event":"loaded","model":"mimo-v2-omni","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-29T14:35:48.846Z","level":"info","module":"mimo","event":"api_call_start","model":"mimo-v2-omni","mode":"describe"}
{"timestamp":"2026-05-29T14:36:01.978Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-29T14:36:01.979Z","level":"info","module":"config","event":"loaded","model":"mimo-v2-omni","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-29T14:36:01.980Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-29T14:36:01.980Z","level":"info","module":"config","event":"loaded","model":"mimo-v2-omni","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-29T14:36:01.980Z","level":"info","module":"orchestrator","event":"processing_image","path":"D:\\nonexistent\\file.png","mode":"describe"}
❌ 错误：文件不存在
解决建议：请检查文件路径是否正确
{"timestamp":"2026-05-29T14:36:02.044Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-29T14:36:02.046Z","level":"info","module":"config","event":"loaded","model":"mimo-v2-omni","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-29T14:36:02.046Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-29T14:36:02.046Z","level":"info","module":"config","event":"loaded","model":"mimo-v2-omni","maxImageSizeMB":"50.0"}
❌ 错误：未知的分析模式: invalid-mode
解决建议：支持的模式: describe, ocr, ui-review, chart-data, object-detect
{"timestamp":"2026-05-29T14:36:02.112Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-29T14:36:02.114Z","level":"info","module":"config","event":"loaded","model":"mimo-v2-omni","maxImageSizeMB":"50.0"}
无效模型: invalid-model
可用模型: mimo-v2.5, mimo-v2-omni
▶ CLI
  ✔ should run health check (13086.3096ms)
  ✔ should print usage when no arguments (70.6784ms)
  ✔ should fail for non-existent file (67.9298ms)
  ✔ should fail for unsupported mode (66.6935ms)
  ✔ should show config (67.8368ms)
  ✔ should reject invalid model (63.3748ms)
✔ CLI (13424.2843ms)
{"timestamp":"2026-05-29T14:35:48.782Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-29T14:35:48.783Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-29T14:35:48.785Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-29T14:35:48.786Z","level":"info","module":"config","event":"loaded","model":"mimo-v2-omni","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-29T14:35:48.791Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-29T14:35:48.791Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
▶ config
  ✔ should return defaults when settings.json has no relevant fields (4.6806ms)
  ✔ should read user-set values (2.0582ms)
  ✔ should warn when maxImageSize > 20MB (1.805ms)
  ✔ should apply maxImageSize default if not set (3.3487ms)
✔ config (14.9242ms)
▶ credentialManager
  ▶ getBaseUrl
    ✔ should detect token-plan URL for tp- keys (1.2997ms)
    ✔ should detect api URL for sk- keys (0.1037ms)
    ✔ should return token-plan URL as default for unknown prefix (0.0879ms)
    ✔ should return empty string for empty key (0.0933ms)
  ✔ getBaseUrl (2.0808ms)
  ▶ getApiKey
    ✔ should read from MIMO_API_KEY env (0.1624ms)
    ✔ should return empty string if not set (0.0824ms)
  ✔ getApiKey (0.3344ms)
✔ credentialManager (2.7879ms)
{"timestamp":"2026-05-29T14:36:01.546Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-29T14:36:01.548Z","level":"info","module":"config","event":"loaded","model":"mimo-v2-omni","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-29T14:36:01.548Z","level":"info","module":"mimo","event":"api_call_start","model":"mimo-v2-omni","mode":"describe"}
{"timestamp":"2026-05-29T14:36:05.164Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-29T14:36:05.166Z","level":"info","module":"config","event":"loaded","model":"mimo-v2-omni","maxImageSizeMB":"50.0"}
无效模型: invalid-model
可用模型: mimo-v2.5, mimo-v2-omni
▶ documented commands
  ✔ should have 2 static commands that are syntactically valid (12705.9362ms)
  ✔ should have 0 templated commands with valid base structure (0.1271ms)
  ✔ --health should output diagnostic info (even on failure) (3610.8012ms)
  ✔ --config should show model info (71.8208ms)
  ✔ --cache-stats should show cache info (66.821ms)
  ✔ --set-model with invalid model should error cleanly (70.9849ms)
✔ documented commands (16527.5262ms)
▶ errorHandler
  ✔ ClientError should contain type, reason, suggestion (0.5338ms)
  ✔ ServerError should contain type and statusCode (0.1438ms)
  ✔ NetworkError should contain type (0.9766ms)
  ✔ formatError should produce Chinese user-facing message (0.2206ms)
✔ errorHandler (3.1375ms)
▶ imageProcessor
  ▶ validateFormat
    ✔ should accept jpg/png/gif/webp/bmp/svg (0.431ms)
    ✔ should reject unsupported formats (0.0919ms)
  ✔ validateFormat (0.9543ms)
{"timestamp":"2026-05-29T14:35:48.804Z","level":"info","module":"imageProcessor","event":"image_processed","path":"ntaz\\AppData\\Local\\Temp\\test-unblind.png","sizeMB":"0.00","mimeType":"image/png"}
  ▶ processImage
    ✔ should encode a valid PNG to base64 data URL (6.7084ms)
    ✔ should throw ClientError for non-existent file (0.5684ms)
    ✔ should throw ClientError for empty file (1.2433ms)
    ✔ should throw ClientError for unsupported format (1.859ms)
  ✔ processImage (10.6888ms)
✔ imageProcessor (11.9636ms)
▶ install.sh
  ✔ should reference only files that exist in dev (1.606ms)
  ✔ should run syntax check (bash -n) (56.2506ms)
  ✔ should deploy to a temp dir (543.2974ms)
✔ install.sh (601.8197ms)
▶ install.js
  ✔ should be syntactically valid (45.4587ms)
  ✔ should exist in dev directory (0.1995ms)
  ✔ FILES_TO_COPY should not include deleted files (0.9031ms)
✔ install.js (46.7404ms)
▶ logger
  ✔ should output valid JSON Lines to stderr (1.8296ms)
  ✔ should filter by log level (0.2023ms)
  ✔ should handle undefined data (0.1446ms)
✔ logger (3.0015ms)
{"timestamp":"2026-05-29T14:35:48.831Z","level":"info","module":"mimo","event":"api_call_start","model":"mimo-v2.5","mode":"describe"}
▶ MimoProvider
  ✔ should pass interface validation (0.3159ms)
  ✔ should have name 'mimo' (0.1003ms)
  ✔ should throw ClientError when API key is missing (0.2972ms)
  ﹣ healthCheck should return true with valid key (0.0775ms) # SKIP
  ﹣ should return valid result for describe mode (0.051ms) # SKIP
✔ MimoProvider (1.4037ms)
{"timestamp":"2026-05-29T14:35:48.844Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-29T14:35:48.845Z","level":"info","module":"config","event":"loaded","model":"mimo-v2-omni","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-29T14:35:48.846Z","level":"info","module":"orchestrator","event":"processing_image","path":"Local\\Temp\\test-orch-probe.png","mode":"describe"}
{"timestamp":"2026-05-29T14:35:48.847Z","level":"info","module":"imageProcessor","event":"image_processed","path":"z\\AppData\\Local\\Temp\\test-orch-probe.png","sizeMB":"0.00","mimeType":"image/png"}
{"timestamp":"2026-05-29T14:35:48.848Z","level":"info","module":"orchestrator","event":"calling_provider","provider":"mimo","mode":"describe"}
{"timestamp":"2026-05-29T14:35:48.849Z","level":"info","module":"mimo","event":"api_call_start","model":"mimo-v2-omni","mode":"describe"}
{"timestamp":"2026-05-29T14:36:10.232Z","level":"info","module":"mimo","event":"api_call_success","model":"mimo-v2-omni","mode":"describe","durationMs":21384}
{"timestamp":"2026-05-29T14:36:10.232Z","level":"info","module":"orchestrator","event":"analysis_complete","mode":"describe","durationMs":21384,"provider":"mimo"}
{"timestamp":"2026-05-29T14:36:10.240Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-29T14:36:10.241Z","level":"info","module":"config","event":"loaded","model":"mimo-v2-omni","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-29T14:36:10.241Z","level":"info","module":"orchestrator","event":"processing_image","path":"/nonexistent/file.png","mode":"describe"}
{"timestamp":"2026-05-29T14:36:10.244Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-29T14:36:10.244Z","level":"info","module":"config","event":"loaded","model":"mimo-v2-omni","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-29T14:36:10.245Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-29T14:36:10.245Z","level":"info","module":"config","event":"loaded","model":"mimo-v2-omni","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-29T14:36:10.245Z","level":"info","module":"orchestrator","event":"processing_image","path":"\\Local\\Temp\\test-orch-real.png","mode":"describe"}
▶ orchestrator
  ✔ should reject non-existent file (2.947ms)
  ✔ should reject unsupported mode (1.2506ms)
{"timestamp":"2026-05-29T14:36:10.247Z","level":"info","module":"imageProcessor","event":"image_processed","path":"az\\AppData\\Local\\Temp\\test-orch-real.png","sizeMB":"0.00","mimeType":"image/png"}
{"timestamp":"2026-05-29T14:36:10.248Z","level":"info","module":"orchestrator","event":"cache_hit","path":"\\Local\\Temp\\test-orch-real.png","mode":"describe","stats":{"hits":1,"misses":1,"size":1}}
  ✔ should analyze a real image end-to-end (4.2958ms)
✔ orchestrator (10.17ms)
▶ registry
  ▶ loadProviders
    ✔ should return empty array when no keys configured (0.6341ms)
    ✔ should return only providers with keys set (0.2192ms)
    ✔ should respect provider order (0.2139ms)
    ✔ should skip providers not in order list (0.166ms)
    ✔ should handle ollama with base URL (0.1545ms)
    ✔ should ignore unknown names in order (0.124ms)
    ✔ should handle empty order string gracefully (0.14ms)
  ✔ loadProviders (2.3026ms)
✔ registry (2.6241ms)
{"timestamp":"2026-05-29T14:35:48.845Z","level":"warn","module":"retry","event":"attempt_failed","attempt":1,"maxAttempts":3,"error":"暂时不可用"}
▶ retry
  ✔ should return result on first success (0.601ms)
{"timestamp":"2026-05-29T14:35:48.869Z","level":"warn","module":"retry","event":"attempt_failed","attempt":2,"maxAttempts":3,"error":"暂时不可用"}
{"timestamp":"2026-05-29T14:35:48.899Z","level":"warn","module":"retry","event":"attempt_failed","attempt":1,"maxAttempts":2,"error":"持续失败"}
  ✔ should retry on ServerError and eventually succeed (53.9798ms)
{"timestamp":"2026-05-29T14:35:48.914Z","level":"warn","module":"retry","event":"attempt_failed","attempt":2,"maxAttempts":2,"error":"持续失败"}
{"timestamp":"2026-05-29T14:35:48.915Z","level":"warn","module":"retry","event":"attempt_failed","attempt":1,"maxAttempts":3,"error":"fail"}
  ✔ should throw after max attempts (15.434ms)
  ✔ should NOT retry on ClientError (0.2524ms)
{"timestamp":"2026-05-29T14:35:48.930Z","level":"warn","module":"retry","event":"attempt_failed","attempt":2,"maxAttempts":3,"error":"fail"}
{"timestamp":"2026-05-29T14:35:48.945Z","level":"warn","module":"retry","event":"attempt_failed","attempt":3,"maxAttempts":3,"error":"fail"}
{"timestamp":"2026-05-29T14:35:48.946Z","level":"warn","module":"retry","event":"attempt_failed","attempt":1,"maxAttempts":1,"error":"fail"}
{"timestamp":"2026-05-29T14:35:48.946Z","level":"warn","module":"retry","event":"attempt_failed","attempt":1,"maxAttempts":1,"error":"fail"}
{"timestamp":"2026-05-29T14:35:48.946Z","level":"warn","module":"retry","event":"attempt_failed","attempt":1,"maxAttempts":1,"error":"fail"}
{"timestamp":"2026-05-29T14:35:48.946Z","level":"error","module":"retry","event":"circuit_open","failures":3,"threshold":3,"timeout":60,"state":"OPEN"}
{"timestamp":"2026-05-29T14:35:48.946Z","level":"warn","module":"retry","event":"attempt_failed","attempt":1,"maxAttempts":1,"error":"fail"}
{"timestamp":"2026-05-29T14:35:48.946Z","level":"warn","module":"retry","event":"attempt_failed","attempt":1,"maxAttempts":1,"error":"fail"}
{"timestamp":"2026-05-29T14:35:48.946Z","level":"error","module":"retry","event":"circuit_open","failures":2,"threshold":2,"timeout":60,"state":"OPEN"}
{"timestamp":"2026-05-29T14:35:48.947Z","level":"warn","module":"retry","event":"attempt_failed","attempt":1,"maxAttempts":3,"error":"fail"}
  ✔ should use exponential backoff (30.5813ms)
  ▶ circuit breaker
    ✔ should start in CLOSED state (0.1979ms)
    ✔ should open after threshold failures (0.3291ms)
    ✔ should isolate between instances (0.2063ms)
{"timestamp":"2026-05-29T14:35:48.948Z","level":"warn","module":"retry","event":"attempt_failed","attempt":2,"maxAttempts":3,"error":"fail"}
    ✔ should reset on success (13.9963ms)
  ✔ circuit breaker (15.149ms)
✔ retry (116.9683ms)
ℹ tests 75
ℹ suites 25
ℹ pass 73
ℹ fail 0
ℹ cancelled 0
ℹ skipped 2
ℹ todo 0
ℹ duration_ms 21555.6449
## 本轮改动
- Provider 链式轮换：Mimo→OpenAI→Ollama
- UNBLIND_PROVIDER_ORDER 用户自定义顺序
- 注册表模式：3个if→1个循环+1个数组
- +7 registry 测试
