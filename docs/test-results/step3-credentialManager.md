{"timestamp":"2026-05-28T03:36:15.074Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T03:36:15.075Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-28T03:36:15.078Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T03:36:15.078Z","level":"info","module":"config","event":"loaded","model":"mimo-v2-omni","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-28T03:36:15.081Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T03:36:15.082Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
▶ config
  ✔ should return defaults when settings.json has no relevant fields (3.1292ms)
  ✔ should read user-set values (2.8264ms)
  ✔ should warn when maxImageSize > 20MB (1.5352ms)
  ✔ should apply maxImageSize default if not set (1.8441ms)
✔ config (11.3332ms)
{"timestamp":"2026-05-28T03:36:15.071Z","level":"info","module":"credentialManager","event":"module_loaded"}
▶ credentialManager
  ▶ getBaseUrl
    ✔ should detect token-plan URL for tp- keys (0.9898ms)
    ✔ should detect api URL for sk- keys (0.0793ms)
    ✔ should return token-plan URL as default for unknown prefix (0.0805ms)
    ✔ should return empty string for empty key (0.0932ms)
  ✔ getBaseUrl (1.6546ms)
  ▶ getApiKey
    ✔ should read from MIMO_API_KEY env (0.1632ms)
    ✔ should return empty string if not set (0.0885ms)
  ✔ getApiKey (0.3323ms)
✔ credentialManager (2.2425ms)
{"timestamp":"2026-05-28T03:36:15.075Z","level":"info","module":"errorHandler","event":"module_loaded"}
▶ errorHandler
  ✔ ClientError should contain type, reason, suggestion (0.5239ms)
  ✔ ServerError should contain type and statusCode (0.1261ms)
  ✔ NetworkError should contain type (0.7402ms)
  ✔ formatError should produce Chinese user-facing message (0.1533ms)
✔ errorHandler (2.2397ms)
▶ logger
  ✔ should output valid JSON Lines to stderr (1.2923ms)
  ✔ should filter by log level (0.1247ms)
  ✔ should handle undefined data (0.0899ms)
✔ logger (2.0689ms)
ℹ tests 17
ℹ suites 6
ℹ pass 17
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 72.2231
