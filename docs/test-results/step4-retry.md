{"timestamp":"2026-05-28T03:37:50.402Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T03:37:50.403Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-28T03:37:50.405Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T03:37:50.405Z","level":"info","module":"config","event":"loaded","model":"mimo-v2-omni","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-28T03:37:50.408Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T03:37:50.409Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
▶ config
  ✔ should return defaults when settings.json has no relevant fields (3.676ms)
  ✔ should read user-set values (1.8979ms)
  ✔ should warn when maxImageSize > 20MB (1.5841ms)
  ✔ should apply maxImageSize default if not set (1.65ms)
✔ config (11.0026ms)
{"timestamp":"2026-05-28T03:37:50.398Z","level":"info","module":"credentialManager","event":"module_loaded"}
▶ credentialManager
  ▶ getBaseUrl
    ✔ should detect token-plan URL for tp- keys (1.1859ms)
    ✔ should detect api URL for sk- keys (0.0928ms)
    ✔ should return token-plan URL as default for unknown prefix (0.0766ms)
    ✔ should return empty string for empty key (0.0909ms)
  ✔ getBaseUrl (1.8806ms)
  ▶ getApiKey
    ✔ should read from MIMO_API_KEY env (0.3179ms)
    ✔ should return empty string if not set (0.1185ms)
  ✔ getApiKey (0.536ms)
✔ credentialManager (2.7098ms)
{"timestamp":"2026-05-28T03:37:50.403Z","level":"info","module":"errorHandler","event":"module_loaded"}
▶ errorHandler
  ✔ ClientError should contain type, reason, suggestion (0.4828ms)
  ✔ ServerError should contain type and statusCode (0.0965ms)
  ✔ NetworkError should contain type (0.6938ms)
  ✔ formatError should produce Chinese user-facing message (0.1304ms)
✔ errorHandler (1.9867ms)
▶ logger
  ✔ should output valid JSON Lines to stderr (1.3238ms)
  ✔ should filter by log level (0.1547ms)
  ✔ should handle undefined data (0.0983ms)
✔ logger (2.3369ms)
{"timestamp":"2026-05-28T03:37:50.420Z","level":"info","module":"errorHandler","event":"module_loaded"}
{"timestamp":"2026-05-28T03:37:50.421Z","level":"info","module":"retry","event":"module_loaded"}
{"timestamp":"2026-05-28T03:37:50.426Z","level":"warn","module":"retry","event":"attempt_failed","attempt":1,"maxAttempts":3,"error":"暂时不可用"}
▶ retry
  ✔ should return result on first success (1.1059ms)
{"timestamp":"2026-05-28T03:37:50.443Z","level":"warn","module":"retry","event":"attempt_failed","attempt":2,"maxAttempts":3,"error":"暂时不可用"}
{"timestamp":"2026-05-28T03:37:50.475Z","level":"warn","module":"retry","event":"attempt_failed","attempt":1,"maxAttempts":2,"error":"持续失败"}
  ✔ should retry on ServerError and eventually succeed (48.9454ms)
{"timestamp":"2026-05-28T03:37:50.490Z","level":"warn","module":"retry","event":"attempt_failed","attempt":2,"maxAttempts":2,"error":"持续失败"}
{"timestamp":"2026-05-28T03:37:50.491Z","level":"warn","module":"retry","event":"attempt_failed","attempt":1,"maxAttempts":3,"error":"fail"}
  ✔ should throw after max attempts (15.5617ms)
  ✔ should NOT retry on ClientError (0.2325ms)
{"timestamp":"2026-05-28T03:37:50.505Z","level":"warn","module":"retry","event":"attempt_failed","attempt":2,"maxAttempts":3,"error":"fail"}
{"timestamp":"2026-05-28T03:37:50.521Z","level":"warn","module":"retry","event":"attempt_failed","attempt":3,"maxAttempts":3,"error":"fail"}
{"timestamp":"2026-05-28T03:37:50.521Z","level":"error","module":"retry","event":"circuit_open","failureCount":5,"timeoutSeconds":60}
  ✔ should use exponential backoff (30.7739ms)
  ▶ circuit breaker
    ✔ should start in CLOSED state (0.3364ms)
  ✔ circuit breaker (0.5325ms)
✔ retry (98.1023ms)
ℹ tests 23
ℹ suites 8
ℹ pass 23
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 182.0851
