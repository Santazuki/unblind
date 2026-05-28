{"timestamp":"2026-05-28T03:46:40.320Z","level":"info","module":"credentialManager","event":"module_loaded"}
{"timestamp":"2026-05-28T03:46:40.321Z","level":"info","module":"errorHandler","event":"module_loaded"}
{"timestamp":"2026-05-28T03:46:40.321Z","level":"info","module":"imageProcessor","event":"module_loaded"}
{"timestamp":"2026-05-28T03:46:40.321Z","level":"info","module":"retry","event":"module_loaded"}
{"timestamp":"2026-05-28T03:46:40.321Z","level":"info","module":"mimo","event":"module_loaded"}
{"timestamp":"2026-05-28T03:46:40.325Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T03:46:40.325Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-28T03:46:40.325Z","level":"info","module":"orchestrator","event":"processing_image","path":"/nonexistent/file.png","mode":"describe"}
{"timestamp":"2026-05-28T03:46:40.327Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T03:46:40.327Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-28T03:46:40.327Z","level":"warn","module":"config","event":"large_max_image_size","maxImageSizeMB":"50","advisory":"大于 20MB 的图片可能导致 API 调用耗时增加和 token 消耗上升"}
⚠️ 性能提示：当前图片大小上限 50MB，超过 20MB 可能导致处理变慢。可在 settings.json 中设置 MIMO_MAX_IMAGE_SIZE 调整。
{"timestamp":"2026-05-28T03:46:40.327Z","level":"info","module":"config","event":"loaded","model":"mimo-v2.5","maxImageSizeMB":"50.0"}
{"timestamp":"2026-05-28T03:46:40.327Z","level":"info","module":"orchestrator","event":"processing_image","path":"\\Local\\Temp\\test-orch-real.png","mode":"describe"}
{"timestamp":"2026-05-28T03:46:40.329Z","level":"info","module":"imageProcessor","event":"image_processed","path":"az\\AppData\\Local\\Temp\\test-orch-real.png","sizeMB":"0.00","mimeType":"image/png"}
{"timestamp":"2026-05-28T03:46:40.329Z","level":"info","module":"orchestrator","event":"calling_provider","provider":"mimo","mode":"describe"}
{"timestamp":"2026-05-28T03:46:40.329Z","level":"info","module":"mimo","event":"api_call_start","model":"mimo-v2.5","mode":"describe"}
▶ orchestrator
  ✔ should reject non-existent file (1.1952ms)
  ✔ should reject unsupported mode (0.9508ms)
{"timestamp":"2026-05-28T03:46:47.142Z","level":"info","module":"mimo","event":"api_call_success","model":"mimo-v2.5","mode":"describe","durationMs":6813}
{"timestamp":"2026-05-28T03:46:47.142Z","level":"info","module":"orchestrator","event":"analysis_complete","mode":"describe","durationMs":6813}
  ✔ should analyze a real image end-to-end (6815.4088ms)
✔ orchestrator (6818.2198ms)
ℹ tests 3
ℹ suites 1
ℹ pass 3
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 6881.2941
