# Unblind SKILL.md 优化规范

> 基于顶级 Claude Code Skill 的通用设计模式提取。每次迭代后对照本规范检查。

## 一、三级加载标准

| 层级 | 内容范围 | Token 上限 | 加载时机 | 包含内容 |
|------|---------|-----------|---------|---------|
| Level 1 | 元数据 | **<200** | 始终 | name, 1-2句描述, 触发关键词 |
| Level 2 | 指令 | **<1000** (从严) | Skill触发时 | Iron Rules, Phase 0-4 流程, 决策逻辑 |
| Level 3 | 资源 | 无限制 | 按需 | 详细命令, 配置参考, 故障排查, 代码示例 |

## 二、Level 1 规范（元数据）

```
✅ 正面示例:
description: >
  Give DeepSeek vision capability. Routes images to Mimo/OpenAI vision API.
  Self-healing setup on first run. Triggers on image paths, "analyze this",
  "what's in this picture", "OCR".

❌ 反面示例:
description: >
  Unblind — Give DeepSeek eyes. Self-contained + self-healing Claude Code
  Agent Skill. DeepSeek models (v4/v4-pro/v4-flash) lack multimodal capability
  — Unblind intercepts images and routes them to Mimo's Anthropic-compatible
  vision API (mimo-v2.5, 100/200 credits). Auto-detects missing config...
  (啰嗦，把 Level 2 的卖点塞进了 Level 1)
```

**规则：**
- 一句话说清做什么（不含技术细节）
- 触发关键词单独一行，不用完整句子包裹
- 版本号、credits 价格等细节放 Level 2 或 Level 3
- 不要在这里解释"为什么"——那是 Level 2 的事

## 三、Level 2 规范（指令）

```
✅ 正确做法:
## Phase 3: Execute
```bash
node ~/.claude/skills/unblind/scripts/unblind.mjs '<path>' <mode>
```
No preamble. Just run.

❌ 反面示例:
### 0.5 Repair Vision Model
...然后内联 15 行 bash 代码 + 2 段解释文字...
(修理性代码放 Level 3，只在 Level 2 留判断逻辑和一句"见 resources/xxx.md")
```

**规则：**
- Iron Rules 用编号列表，每条 ≤1 行
- Phase 描述用短句，不写段落
- 内联 bash 命令仅限 1-2 行的执行命令，修复性长命令移到 Level 3
- 判断逻辑用 if-else 一行表达
- 表格式数据（Models/Modes）移到 Level 3，Level 2 只留 1 行指针

## 四、Level 3 规范（资源）

**资源文件应包含的内容（从 Level 2 移出）：**
- 详细的修复命令（Phase 0.2-0.8）
- Models/Modes 完整表格
- 配置示例（settings.json 片段）
- 故障排查（常见错误码+解决方案）
- API 文档链接

**当前资源文件映射：**
| Level 2 提及 | 指向 | 状态 |
|-------------|------|------|
| Phase 0.5-0.8 详细步骤 | `resources/troubleshooting.md` | 📋 待补充 |
| Models & Modes 表格 | SKILL.md Level 3 内联 | 📋 可移到 `resources/models.md` |
| 配置指南 | `resources/best_practices.md` | ✅ 已有，需更新 |

## 五、优化检查清单

每次修改 SKILL.md 后对照：

- [ ] Level 1 描述 ≤2 句话，无技术细节
- [ ] Level 2 无超过 5 行的 bash 代码块
- [ ] Level 2 每个修复步骤 ≤3 行（1 判断 + 1 动作 + 1 指针）
- [ ] 表格数据不在 Level 2（移到 Level 3）
- [ ] 总行数 ≤120 行（资源部分不计）
- [ ] `wc -c` 总字节数 ≤5KB
- [ ] 新用户读 Level 2 能在 30 秒内理解全部流程

## 六、迭代记录

| 日期 | 版本 | Level 1 | Level 2 | 总行数 | 变更 |
|------|------|---------|---------|--------|------|
| 2026-05-28 | 2.1 | ~224 tok | ~839 tok | 112 | 当前版本 |
| 目标 | 2.2 | <200 tok | <800 tok | <100 | 按本规范优化 |
