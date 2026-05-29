# Phase 5 测试报告

## 测试结果

| 指标 | 数值 |
|------|------|
| 总数 | 93 |
| 通过 | 91 |
| 失败 | 0 |
| 跳过 | 2 (API 依赖: healthCheck / describe 真实调用) |
| 耗时 | 12,535 ms |

### 按模块分布

| 模块 | 通过 | 跳过 | 说明 |
|------|------|------|------|
| cache | 10 | 0 | SHA256、TTL、LRU、invalidate、stats |
| CLI (单图) | 6 | 0 | health、usage、missing file、bad mode、config、set-model |
| config | 4 | 0 | 默认值、用户值、大图片警告、上限默认值 |
| credentialManager | 6 | 0 | URL 检测 (tp-/sk-)、key 读取 |
| documented commands | 6 | 0 | 静态/模板命令验证、手动测试关键命令 |
| errorHandler | 4 | 0 | ClientError/ServerError/NetworkError、中文格式 |
| imageProcessor | 6 | 0 | 格式校验、base64 编码、空文件/不存在/不支持格式 |
| install.sh | 3 | 0 | 文件存在性、bash 语法、临时部署 |
| install.js | 3 | 0 | 语法、存在性、未引用已删除文件 |
| logger | 3 | 0 | JSON Lines、级别过滤、undefined 处理 |
| MimoProvider (单图) | 3 | 2 | 接口校验、名称、缺 key、API 调用 (skip) |
| **multi-image CLI** | **6** | **0** | usage、1图compare拒绝、2图compare缺文件、2图无mode、3图、单图向后兼容 |
| **multi-image Mimo _buildRequest** | **4** | **0** | N+1 content 数组、3图、单字符串向后兼容、mime 类型保留 |
| **multi-image OpenAI _buildRequest** | **2** | **0** | N+1 content 数组、单字符串向后兼容 |
| **multi-image 缓存 key** | **4** | **0** | a+b vs b+a 不同、单元素数组 == 字符串、不同prompt不同key、不同图片集不同key |
| **compare mode prompt** | **2** | **0** | MODE_PROMPTS 有定义、VALID_MODES 自动包含 |
| orchestrator | 3 | 0 | 缺文件拒绝、模式拒绝、真实图片端到端 (含缓存) |
| registry | 7 | 0 | 空key、部分启用、顺序、跳过未列名、ollama、忽略未知名、空order |
| retry | 9 | 0 | 首次成功、重试后成功、超过最大次数、ClientError不重试、指数退避、Circuit Breaker 4项 |

**新加测试 (Phase 5 新增 test-multi-image.js): 18 个，全部通过。**

---

## 新功能验证

### 1. `--format <json|yaml|csv>` 结构化输出

#### CLI 参数解析 (unblind.mjs)

- `--format json` 正确解析到 `options.format = "json"` -- 通过
- `--format yaml` 正确解析 -- 通过
- `--format csv` 正确解析 -- 通过
- 不传 `--format` 时 `format = ""` (falsy) -- 通过
- `--format html` (无效值) 显示警告 `"未知格式: html，将使用默认纯文本输出。支持: json, yaml, csv"` 不崩溃 -- 通过

#### Format 指令追加到 prompt (orchestrator.js)

- `FORMAT_PROMPTS` 定义在 orchestrator.js 第 12-16 行，为 json/yaml/csv 分别定义结构化输出指令
- 拼接触发: `apiPrompt = cachePrompt + (options.format ? (FORMAT_PROMPTS[options.format] || "") : "")` (第 94 行)
- 无效 format 时 (`FORMAT_PROMPTS[options.format]` 为 undefined) 拼接空字符串，prompt 不变 -- 通过
- 缓存键使用 `cachePrompt` (不含格式指令)，同一 mode 下 JSON/YAML/CSV 共享缓存 -- 设计正确

#### 已知问题: BUG-01 -- format 值泄露到位置参数

**严重程度: 中**

当使用 `--format json|yaml|csv` 时，其值 (如 "json") 会被包含在 `positional` 数组中，因为 `positional = args.filter(a => !a.startsWith("--"))` 仅过滤 `--` 开头参数，不过滤 flag 值。

**复现**:
```bash
node unblind.mjs /img.png describe --format json
```
`positional` = `["/img.png", "describe", "json"]`，其中 "json" 被当作第 3 个文件路径。

**影响**:
- 如果 `--format` 值在位置参数末尾且不是合法 mode，所有位置参数（包括 mode）被当作文件路径，mode 回退为默认 "describe"
- 不影响 format 值本身的解析（`options.format` 正确设置为 "json"/"yaml"/"csv"）
- 不影响 `--format` 在位置参数前或无 mode 参数时的常规使用

**建议修复**: 在构建 `positional` 时排除 `--format` 的值:
```js
const formatIdx = args.indexOf("--format");
const positional = args.filter((a, i) =>
  !a.startsWith("--") && (formatIdx < 0 || i !== formatIdx + 1)
);
```

---

### 2. 多图 compare 功能

#### CLI 多图解析

| 场景 | 预期 | 结果 |
|------|------|------|
| 无参 | 显示用法 | 通过 |
| 1 图 + compare mode | 报错 "compare 模式需要至少 2 张图片" | 通过 |
| 2 图 + compare mode | analyze 收到 paths=[a,b], mode=compare | 通过 |
| 2 图无 mode | mode 默认 describe, paths=[a,b] | 通过 |
| 3 图 | mode 默认 describe, paths=[a,b,c] | 通过 |
| 1 图 + ocr (向后兼容) | 单图正常处理 | 通过 |

#### Provider 多图请求体构建

**Mimo (Anthropic-compatible API)**:
- `content` 数组包含 N 个 `{type:"image", source:{type:"base64", media_type, data}}` + 1 个 `{type:"text", text: prompt}` -- 通过
- 3 图 + 1 text = 4 个 content 元素 -- 通过
- 单字符串向后兼容: 1 图 + 1 text = 2 个 content 元素 -- 通过
- mime type 从 image 对象保留 (image/jpeg, image/webp) -- 通过

**OpenAI (Chat Completions API)**:
- `content` 数组包含 N 个 `{type:"image_url", image_url:{url}}` + 1 个 `{type:"text", text: prompt}` -- 通过
- 单字符串向后兼容 -- 通过

#### 缓存 key

- `a.png + b.png` != `b.png + a.png` (图片顺序敏感) -- 通过
- 单元素数组 key == 旧单字符串 key (向后兼容) -- 通过
- 不同 prompt 不同 key -- 通过
- 不同图片集不同 key -- 通过

#### compare mode prompt

- `MODE_PROMPTS.compare` 已定义，内容为三段式结构 (独立描述 -> 相似点 -> 差异点 -> 总结) -- 通过
- `VALID_MODES` 自动包含 `"compare"` (由 `Object.keys(MODE_PROMPTS)` 生成) -- 通过

---

## 回归验证

### 单图 describe/ocr/ui-review 不受影响

| 场景 | 方法 | 结果 |
|------|------|------|
| 单图无 mode | `node unblind.mjs solo.png` | 通过: mode=describe, 1 path |
| 单图 + mode | `node unblind.mjs solo.png ocr` | 通过: mode=ocr, 1 path |
| 单图 + flag | `node unblind.mjs solo.png --no-cache` | 通过: flags 解析不变 |
| analyze(string path) | `analyze("/path", "describe")` | 通过: 自动包装为 `["/path"]` |
| Provider 单字符串 image | `_buildRequest("data:..., "prompt", ...)` | 通过: 走旧分支 (单图 content) |
| 现有 CLI 测试 | 6 个 CLI 测试全部通过 | 通过 |
| 现有 orchestrator 测试 | 3 个测试全部通过 | 通过 |
| 现有文档化命令测试 | 6 个测试全部通过 | 通过 |

**缓存的向后兼容**: 单图缓存 key 在数组路径下与旧字符串路径一致 (`[img].join("::") === img`)，缓存命中不受影响 -- 通过

---

## 结论

### 总体评价

Phase 5 两个新功能测试结果整体良好。

**`--format` 结构化输出**: 核心功能（参数解析、无效值警告、prompt 追加、缓存共享）全部正常。存在一个中优先级 BUG (format 值泄漏到位置参数)，不影响 format 值的正确解析。

**多图 compare**: 全部 18 个新增测试用例通过。CLI 解析、Provider 请求体构建、缓存 key、compare prompt 均按设计实现。多图和单图的缓存 key 兼容。

**向后兼容**: 单图 describe/ocr/ui-review 不受影响，所有 75 个存量测试 (不含 2 API-skip + 18 新增) 全部通过。

### 建议

1. **修复 BUG-01** — 在 `scripts/unblind.mjs` 中构建 `positional` 数组时排除 `--format` 的值，约 2 行改动。
2. **补充 `--format` 单元测试** — 当前无 format 相关的测试用例，建议在 `test-cli.js` 中增加覆盖：
   - `--format json` 解析到 `options.format === "json"`
   - 无效 format 显示警告但不崩溃
   - 不传 `--format` 时 `format` 为 falsy
3. **缓存共享测试** — 验证同一图片同一 mode 的 JSON/YAML 输出共享缓存。
