▶ cache
  ▶ getCacheKey
    ✔ should return a SHA256 hex string (1.8867ms)
    ✔ should produce different keys for different hashes (0.3469ms)
    ✔ should produce different keys for different prompts (0.2238ms)
  ✔ getCacheKey (3.3177ms)
  ▶ get/set
    ✔ should return cached value after set (2.7758ms)
    ✔ should return null for missing key (0.4469ms)
    ✔ should return null for expired entry (13.1727ms)
    ✔ should respect custom TTL (1113.8464ms)
  ✔ get/set (1131.7257ms)
  ▶ invalidate
    ✔ should remove a cached entry (0.4835ms)
  ✔ invalidate (0.7481ms)
  ▶ getStats
    ✔ should track hits and misses (0.6111ms)
  ✔ getStats (0.7819ms)
  ▶ clear
    ✔ should remove all entries (0.3341ms)
  ✔ clear (0.425ms)
✔ cache (1138.5995ms)
{"timestamp":"2026-05-28T07:52:56.106Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T07:52:56.110Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-28T07:52:56.111Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T07:52:56.111Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-28T07:52:56.112Z","level":"info","module":"mimo","event":"api_call_start","model":"mimo-v2.5","mode":"describe"}
Assertion failed: !(handle->flags & UV_HANDLE_CLOSING), file src\win\async.c, line 76
{"timestamp":"2026-05-28T07:52:57.590Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T07:52:57.593Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-28T07:52:57.593Z","level":"info","module":"orchestrator","event":"processing_image","path":"D:\\nonexistent\\file.png","mode":"describe"}
❌ 错误：文件不存在: D:\nonexistent\file.png
解决建议：请检查文件路径是否正确
{"timestamp":"2026-05-28T07:52:58.281Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T07:52:58.284Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
❌ 错误：未知的分析模式: invalid-mode
解决建议：支持的模式: describe, ocr, ui-review, chart-data, object-detect
{"timestamp":"2026-05-28T07:52:58.823Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T07:52:58.829Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
无效模型: invalid-model
可用模型: mimo-v2.5, mimo-v2-omni
▶ CLI
  ✔ should run health check (1470.0249ms)
  ✔ should print usage when no arguments (392.2796ms)
  ✔ should fail for non-existent file (381.2643ms)
  ✔ should fail for unsupported mode (694.0523ms)
  ✔ should show config (551.6713ms)
  ✔ should reject invalid model (738.9356ms)
✔ CLI (4230.0779ms)
{"timestamp":"2026-05-28T07:52:55.389Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T07:52:55.391Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-28T07:52:55.395Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T07:52:55.395Z","level":"info","module":"config","event":"loaded","model":"mimo-v2-omni","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-28T07:52:55.400Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T07:52:55.400Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
▶ config
  ✔ should return defaults when settings.json has no relevant fields (7.1092ms)
  ✔ should read user-set values (3.3124ms)
  ✔ should warn when maxImageSize > 20MB (2.6697ms)
  ✔ should apply maxImageSize default if not set (2.1598ms)
✔ config (18.6163ms)
▶ credentialManager
  ▶ getBaseUrl
    ✔ should detect token-plan URL for tp- keys (2.1249ms)
    ✔ should detect api URL for sk- keys (0.2039ms)
    ✔ should return token-plan URL as default for unknown prefix (0.1336ms)
    ✔ should return empty string for empty key (0.2757ms)
  ✔ getBaseUrl (3.7289ms)
  ▶ getApiKey
    ✔ should read from MIMO_API_KEY env (0.2455ms)
    ✔ should return empty string if not set (0.1304ms)
  ✔ getApiKey (0.5347ms)
✔ credentialManager (4.727ms)
▶ errorHandler
  ✔ ClientError should contain type, reason, suggestion (0.811ms)
  ✔ ServerError should contain type and statusCode (0.1874ms)
  ✔ NetworkError should contain type (1.1908ms)
  ✔ formatError should produce Chinese user-facing message (0.2947ms)
✔ errorHandler (3.5218ms)
{"timestamp":"2026-05-28T07:52:55.401Z","level":"info","module":"imageProcessor","event":"image_processed","path":"ntaz\\AppData\\Local\\Temp\\test-unblind.png","sizeMB":"0.00","mimeType":"image/png"}
▶ imageProcessor
  ▶ validateFormat
    ✔ should accept jpg/png/gif/webp/bmp/svg (0.9652ms)
    ✔ should reject unsupported formats (0.225ms)
  ✔ validateFormat (2.299ms)
  ▶ processImage
    ✔ should encode a valid PNG to base64 data URL (5.4912ms)
    ✔ should throw ClientError for non-existent file (1.0141ms)
    ✔ should throw ClientError for empty file (1.2516ms)
    ✔ should throw ClientError for unsupported format (1.1393ms)
  ✔ processImage (9.2495ms)
✔ imageProcessor (11.9564ms)
▶ logger
  ✔ should output valid JSON Lines to stderr (1.6605ms)
  ✔ should filter by log level (0.1721ms)
  ✔ should handle undefined data (0.1309ms)
✔ logger (2.9196ms)
{"timestamp":"2026-05-28T07:52:55.407Z","level":"info","module":"mimo","event":"api_call_start","model":"mimo-v2.5","mode":"describe"}
▶ MimoProvider
  ✔ should pass interface validation (1.0073ms)
  ✔ should have name 'mimo' (0.2056ms)
  ✔ should throw ClientError when API key is missing (0.4744ms)
  ﹣ healthCheck should return true with valid key (0.0826ms) # SKIP
  ﹣ should return valid result for describe mode (0.1352ms) # SKIP
✔ MimoProvider (3.0102ms)
{"timestamp":"2026-05-28T07:52:55.422Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T07:52:55.423Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-28T07:52:55.423Z","level":"info","module":"orchestrator","event":"processing_image","path":"Local\\Temp\\test-orch-probe.png","mode":"describe"}
{"timestamp":"2026-05-28T07:52:55.424Z","level":"info","module":"imageProcessor","event":"image_processed","path":"z\\AppData\\Local\\Temp\\test-orch-probe.png","sizeMB":"0.00","mimeType":"image/png"}
{"timestamp":"2026-05-28T07:52:55.424Z","level":"info","module":"orchestrator","event":"calling_provider","provider":"mimo","mode":"describe"}
{"timestamp":"2026-05-28T07:52:55.425Z","level":"info","module":"mimo","event":"api_call_start","model":"mimo-v2.5","mode":"describe"}
{"timestamp":"2026-05-28T07:52:55.810Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T07:52:55.810Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-28T07:52:55.810Z","level":"info","module":"orchestrator","event":"processing_image","path":"/nonexistent/file.png","mode":"describe"}
{"timestamp":"2026-05-28T07:52:55.813Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T07:52:55.813Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
▶ orchestrator
  ✔ should reject non-existent file (1.8565ms)
  ✔ should reject unsupported mode (2.8795ms)
  ﹣ should analyze a real image end-to-end (0.1237ms) # SKIP
✔ orchestrator (6.0886ms)
{"timestamp":"2026-05-28T07:52:55.424Z","level":"warn","module":"retry","event":"attempt_failed","attempt":1,"maxAttempts":3,"error":"暂时不可用"}
▶ retry
  ✔ should return result on first success (1.6313ms)
{"timestamp":"2026-05-28T07:52:55.450Z","level":"warn","module":"retry","event":"attempt_failed","attempt":2,"maxAttempts":3,"error":"暂时不可用"}
{"timestamp":"2026-05-28T07:52:55.482Z","level":"warn","module":"retry","event":"attempt_failed","attempt":1,"maxAttempts":2,"error":"持续失败"}
  ✔ should retry on ServerError and eventually succeed (57.0146ms)
{"timestamp":"2026-05-28T07:52:55.497Z","level":"warn","module":"retry","event":"attempt_failed","attempt":2,"maxAttempts":2,"error":"持续失败"}
{"timestamp":"2026-05-28T07:52:55.500Z","level":"warn","module":"retry","event":"attempt_failed","attempt":1,"maxAttempts":3,"error":"fail"}
  ✔ should throw after max attempts (17.0249ms)
  ✔ should NOT retry on ClientError (0.5882ms)
{"timestamp":"2026-05-28T07:52:55.512Z","level":"warn","module":"retry","event":"attempt_failed","attempt":2,"maxAttempts":3,"error":"fail"}
{"timestamp":"2026-05-28T07:52:55.528Z","level":"warn","module":"retry","event":"attempt_failed","attempt":3,"maxAttempts":3,"error":"fail"}
{"timestamp":"2026-05-28T07:52:55.528Z","level":"error","module":"retry","event":"circuit_open","failureCount":5,"timeoutSeconds":60}
  ✔ should use exponential backoff (29.185ms)
  ▶ circuit breaker
    ✔ should start in CLOSED state (0.5226ms)
  ✔ circuit breaker (0.7969ms)
✔ retry (107.9525ms)
ℹ tests 53
ℹ suites 20
ℹ pass 50
ℹ fail 0
ℹ cancelled 0
ℹ skipped 3
ℹ todo 0
ℹ duration_ms 4370.88
