# Unblind 多 Agent 协作开发 — 使用证明

> 本文档记录 Unblind 项目中 Agentic Subagent-Driven Development 的实际使用情况。

## 总览

| 统计项 | 数值 |
|--------|------|
| Subagent 调用总数 | 25+ |
| 涉及 Phase | Phase 1, 2, 3, 5 |
| 使用角色 | Architect, Developer, Reviewer, Tester |
| 并发最大 Agent 数 | 5 |
| 模型使用 | haiku (机械实现), sonnet (评审) |

## 各 Phase Agent 使用记录

### Phase 1 — 模块化重构

| Agent | 角色 | 任务 |
|-------|------|------|
| Subagent ×9 | Developer | 逐个实现 10 个模块（logger, errorHandler, config, credentialManager, retry, imageProcessor, provider, mimo, orchestrator, CLI） |
| Subagent ×2 | Reviewer | 每模块两阶段审查（spec compliance + code quality） |

### Phase 2 — 稳定性增强

| Agent | 角色 | 任务 |
|-------|------|------|
| Subagent | Developer | 文件持久化缓存实现 |
| Subagent | Developer | 健康检查 CLI 标志 |

### Phase 3 — 多 Provider 链式轮换

| Agent | 角色 | 任务 |
|-------|------|------|
| Subagent ×3 | Architect | Phase 0 静默、缓存粒度、OpenAI Provider 设计（并行） |
| Subagent ×2 | Reviewer | 缓存粒度审查、OpenAI Provider 交叉审查 |

### Phase 5 — 结构化输出 + 多图对比

| Agent | 角色 | 任务 |
|-------|------|------|
| Subagent ×2 | Architect | `--format json` 设计 + 多图设计（并行） |
| Subagent ×2 | Developer | 结构化输出实现 + 多图对比实现（并行） |
| Subagent ×2 | Reviewer | 交叉审查（审查员 A 审开发者 B，审查员 B 审开发者 A） |
| Subagent | Tester | 全量回归测试 + 测试报告 + BUG 发现 |

### 安全审计

| Agent | 角色 | 任务 |
|-------|------|------|
| Subagent ×3 | 审计员 | Round 1: API Key 泄露 / 注入验证 / 日志数据泄露（并行） |
| Subagent | 审计员 | Round 2: 验证修复 |
| Subagent | 审计员 | Round 3: 最终确认 → CLEAN |

### 简历与评审

| Agent | 角色 | 任务 |
|-------|------|------|
| Subagent | Agent 工程+HR 专家 | 简历三件套生成 |
| Subagent | Agent 工程专家 | 项目简历资格评审（20/25） |

## 核心模式

### 交叉审查（Cross-Review）

```
Developer A (--format json)        Developer B (多图对比)
      ↓                                   ↓
Reviewer B 审查 Developer A         Reviewer A 审查 Developer B
```

避免同一 Agent 既写代码又审自己的代码，消除"自己人审自己人"的偏见。

### 并行架构师

```
Architect A (结构化输出)  +  Architect B (多图)  +  Architect C (Phase 0 静默)
        ↓                        ↓                       ↓
       设计文档 A               设计文档 B              设计文档 C
```

独立需求同时设计，互不阻塞。

### Tester 串行收尾

```
Developer A+B + Reviewer A+B（并行）→ 全部完成 → Tester（串行，全量回归）
```

确保改动全部就位后再测试，避免虚假通过。

## 与行业实践的对应

| 行业模式 | 本项目实践 |
|---------|-----------|
| AgentMesh Blackboard | `docs/` + `memory/` 共享文件记忆 |
| ChatDev 交叉审查 | Reviewer A⇄Developer B 交叉审查 |
| Copilot Orchestra TDD | 每步 `node --test` 验证 |
| Harness JIT 上下文 | SKILL.md 三级渐进披露 |
| Model Tiering | haiku(机械) + sonnet(评审) |
