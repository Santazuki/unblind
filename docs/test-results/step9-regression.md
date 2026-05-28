{"timestamp":"2026-05-28T03:49:59.652Z","level":"info","module":"credentialManager","event":"module_loaded"}
{"timestamp":"2026-05-28T03:49:59.654Z","level":"info","module":"errorHandler","event":"module_loaded"}
{"timestamp":"2026-05-28T03:49:59.654Z","level":"info","module":"imageProcessor","event":"module_loaded"}
{"timestamp":"2026-05-28T03:49:59.654Z","level":"info","module":"retry","event":"module_loaded"}
{"timestamp":"2026-05-28T03:49:59.654Z","level":"info","module":"mimo","event":"module_loaded"}
{"timestamp":"2026-05-28T03:49:59.943Z","level":"info","module":"credentialManager","event":"module_loaded"}
{"timestamp":"2026-05-28T03:49:59.944Z","level":"info","module":"errorHandler","event":"module_loaded"}
{"timestamp":"2026-05-28T03:49:59.944Z","level":"info","module":"imageProcessor","event":"module_loaded"}
{"timestamp":"2026-05-28T03:49:59.944Z","level":"info","module":"retry","event":"module_loaded"}
{"timestamp":"2026-05-28T03:49:59.944Z","level":"info","module":"mimo","event":"module_loaded"}
{"timestamp":"2026-05-28T03:49:59.945Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T03:49:59.945Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-28T03:49:59.945Z","level":"info","module":"orchestrator","event":"processing_image","path":"/nonexistent/file.png","mode":"describe"}
❌ 错误：文件不存在: /nonexistent/file.png
解决建议：请检查文件路径是否正确
{"timestamp":"2026-05-28T03:50:00.439Z","level":"info","module":"credentialManager","event":"module_loaded"}
{"timestamp":"2026-05-28T03:50:00.441Z","level":"info","module":"errorHandler","event":"module_loaded"}
{"timestamp":"2026-05-28T03:50:00.441Z","level":"info","module":"imageProcessor","event":"module_loaded"}
{"timestamp":"2026-05-28T03:50:00.441Z","level":"info","module":"retry","event":"module_loaded"}
{"timestamp":"2026-05-28T03:50:00.441Z","level":"info","module":"mimo","event":"module_loaded"}
{"timestamp":"2026-05-28T03:50:00.441Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T03:50:00.441Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
❌ 错误：未知的分析模式: invalid-mode
解决建议：支持的模式: describe, ocr, ui-review, chart-data, object-detect
▶ CLI
  ✔ should print usage when no arguments (519.2412ms)
  ✔ should fail for non-existent file (290.2347ms)
  ✔ should fail for unsupported mode (496.142ms)
✔ CLI (1306.4441ms)
{"timestamp":"2026-05-28T03:49:59.150Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T03:49:59.151Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-28T03:49:59.153Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T03:49:59.153Z","level":"info","module":"config","event":"loaded","model":"mimo-v2-omni","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-28T03:49:59.157Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T03:49:59.157Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
▶ config
  ✔ should return defaults when settings.json has no relevant fields (3.6025ms)
  ✔ should read user-set values (1.8945ms)
  ✔ should warn when maxImageSize > 20MB (1.7451ms)
  ✔ should apply maxImageSize default if not set (1.8535ms)
✔ config (11.3944ms)
{"timestamp":"2026-05-28T03:49:59.147Z","level":"info","module":"credentialManager","event":"module_loaded"}
▶ credentialManager
  ▶ getBaseUrl
    ✔ should detect token-plan URL for tp- keys (1.1863ms)
    ✔ should detect api URL for sk- keys (0.0967ms)
    ✔ should return token-plan URL as default for unknown prefix (0.0739ms)
    ✔ should return empty string for empty key (0.0908ms)
  ✔ getBaseUrl (1.9148ms)
  ▶ getApiKey
    ✔ should read from MIMO_API_KEY env (0.1506ms)
    ✔ should return empty string if not set (0.0889ms)
  ✔ getApiKey (0.3303ms)
✔ credentialManager (2.567ms)
{"timestamp":"2026-05-28T03:49:59.153Z","level":"info","module":"errorHandler","event":"module_loaded"}
▶ errorHandler
  ✔ ClientError should contain type, reason, suggestion (0.475ms)
  ✔ ServerError should contain type and statusCode (0.1004ms)
  ✔ NetworkError should contain type (0.8091ms)
  ✔ formatError should produce Chinese user-facing message (0.1469ms)
✔ errorHandler (2.1509ms)
{"timestamp":"2026-05-28T03:49:59.161Z","level":"info","module":"errorHandler","event":"module_loaded"}
{"timestamp":"2026-05-28T03:49:59.162Z","level":"info","module":"imageProcessor","event":"module_loaded"}
{"timestamp":"2026-05-28T03:49:59.170Z","level":"info","module":"imageProcessor","event":"image_processed","path":"ntaz\\AppData\\Local\\Temp\\test-unblind.png","sizeMB":"0.00","mimeType":"image/png"}
▶ imageProcessor
  ▶ validateFormat
    ✔ should accept jpg/png/gif/webp/bmp/svg (0.5702ms)
    ✔ should reject unsupported formats (0.1045ms)
  ✔ validateFormat (1.349ms)
  ▶ processImage
    ✔ should encode a valid PNG to base64 data URL (2.7338ms)
    ✔ should throw ClientError for non-existent file (0.6407ms)
    ✔ should throw ClientError for empty file (0.9089ms)
    ✔ should throw ClientError for unsupported format (0.6804ms)
  ✔ processImage (5.1964ms)
✔ imageProcessor (6.9945ms)
▶ logger
  ✔ should output valid JSON Lines to stderr (1.2279ms)
  ✔ should filter by log level (0.1188ms)
  ✔ should handle undefined data (0.0881ms)
✔ logger (2.0004ms)
{"timestamp":"2026-05-28T03:49:59.173Z","level":"info","module":"credentialManager","event":"module_loaded"}
{"timestamp":"2026-05-28T03:49:59.174Z","level":"info","module":"errorHandler","event":"module_loaded"}
{"timestamp":"2026-05-28T03:49:59.174Z","level":"info","module":"mimo","event":"module_loaded"}
{"timestamp":"2026-05-28T03:49:59.182Z","level":"info","module":"mimo","event":"api_call_start","model":"mimo-v2.5","mode":"describe"}
▶ MimoProvider
  ✔ should pass interface validation (0.484ms)
  ✔ should have name 'mimo' (0.0995ms)
  ✔ should throw ClientError when API key is missing (0.4438ms)
{"timestamp":"2026-05-28T03:50:03.820Z","level":"info","module":"mimo","event":"api_call_success","model":"mimo-v2.5","mode":"describe","durationMs":4638}
{"timestamp":"2026-05-28T03:50:03.821Z","level":"info","module":"mimo","event":"api_call_start","model":"mimo-v2.5","mode":"describe"}
  ✔ healthCheck should return true with valid key (4638.6752ms)
{"timestamp":"2026-05-28T03:50:10.002Z","level":"info","module":"mimo","event":"api_call_success","model":"mimo-v2.5","mode":"describe","durationMs":6181}
  ✔ should return valid result for describe mode (6181.8231ms)
✔ MimoProvider (10822.3027ms)
{"timestamp":"2026-05-28T03:49:59.179Z","level":"info","module":"credentialManager","event":"module_loaded"}
{"timestamp":"2026-05-28T03:49:59.179Z","level":"info","module":"errorHandler","event":"module_loaded"}
{"timestamp":"2026-05-28T03:49:59.180Z","level":"info","module":"imageProcessor","event":"module_loaded"}
{"timestamp":"2026-05-28T03:49:59.180Z","level":"info","module":"retry","event":"module_loaded"}
{"timestamp":"2026-05-28T03:49:59.180Z","level":"info","module":"mimo","event":"module_loaded"}
{"timestamp":"2026-05-28T03:49:59.184Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T03:49:59.184Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-28T03:49:59.184Z","level":"info","module":"orchestrator","event":"processing_image","path":"/nonexistent/file.png","mode":"describe"}
{"timestamp":"2026-05-28T03:49:59.186Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T03:49:59.186Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-28T03:49:59.186Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T03:49:59.186Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-28T03:49:59.186Z","level":"info","module":"orchestrator","event":"processing_image","path":"\\Local\\Temp\\test-orch-real.png","mode":"describe"}
{"timestamp":"2026-05-28T03:49:59.188Z","level":"info","module":"imageProcessor","event":"image_processed","path":"az\\AppData\\Local\\Temp\\test-orch-real.png","sizeMB":"0.00","mimeType":"image/png"}
{"timestamp":"2026-05-28T03:49:59.188Z","level":"info","module":"orchestrator","event":"calling_provider","provider":"mimo","mode":"describe"}
{"timestamp":"2026-05-28T03:49:59.188Z","level":"info","module":"mimo","event":"api_call_start","model":"mimo-v2.5","mode":"describe"}
▶ orchestrator
  ✔ should reject non-existent file (1.4467ms)
  ✔ should reject unsupported mode (0.9598ms)
{"timestamp":"2026-05-28T03:50:08.970Z","level":"info","module":"mimo","event":"api_call_success","model":"mimo-v2.5","mode":"describe","durationMs":9782}
{"timestamp":"2026-05-28T03:50:08.970Z","level":"info","module":"orchestrator","event":"analysis_complete","mode":"describe","durationMs":9782}
  ✔ should analyze a real image end-to-end (9784.3736ms)
✔ orchestrator (9787.4523ms)
{"timestamp":"2026-05-28T03:49:59.182Z","level":"info","module":"errorHandler","event":"module_loaded"}
{"timestamp":"2026-05-28T03:49:59.183Z","level":"info","module":"retry","event":"module_loaded"}
{"timestamp":"2026-05-28T03:49:59.188Z","level":"warn","module":"retry","event":"attempt_failed","attempt":1,"maxAttempts":3,"error":"暂时不可用"}
▶ retry
  ✔ should return result on first success (1.1497ms)
{"timestamp":"2026-05-28T03:49:59.207Z","level":"warn","module":"retry","event":"attempt_failed","attempt":2,"maxAttempts":3,"error":"暂时不可用"}
{"timestamp":"2026-05-28T03:49:59.238Z","level":"warn","module":"retry","event":"attempt_failed","attempt":1,"maxAttempts":2,"error":"持续失败"}
  ✔ should retry on ServerError and eventually succeed (50.0306ms)
{"timestamp":"2026-05-28T03:49:59.254Z","level":"warn","module":"retry","event":"attempt_failed","attempt":2,"maxAttempts":2,"error":"持续失败"}
{"timestamp":"2026-05-28T03:49:59.254Z","level":"warn","module":"retry","event":"attempt_failed","attempt":1,"maxAttempts":3,"error":"fail"}
  ✔ should throw after max attempts (15.6627ms)
  ✔ should NOT retry on ClientError (0.2284ms)
{"timestamp":"2026-05-28T03:49:59.269Z","level":"warn","module":"retry","event":"attempt_failed","attempt":2,"maxAttempts":3,"error":"fail"}
{"timestamp":"2026-05-28T03:49:59.284Z","level":"warn","module":"retry","event":"attempt_failed","attempt":3,"maxAttempts":3,"error":"fail"}
{"timestamp":"2026-05-28T03:49:59.284Z","level":"error","module":"retry","event":"circuit_open","failureCount":5,"timeoutSeconds":60}
  ✔ should use exponential backoff (30.2676ms)
  ▶ circuit breaker
    ✔ should start in CLOSED state (0.1907ms)
  ✔ circuit breaker (0.3062ms)
✔ retry (98.4863ms)
ℹ tests 40
ℹ suites 14
ℹ pass 40
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 10952.6885
