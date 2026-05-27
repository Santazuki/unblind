# Unblind

> **DeepSeek can seek. Unblind lets it see.**

DeepSeek is one of the most powerful reasoning models. But it cannot process images. Unblind is a self-healing Claude Code Agent Skill that intercepts images routed to DeepSeek and redirects them to Mimo's vision model (mimo-v2.5), returning text descriptions seamlessly.

## The Problem

DeepSeek models (v4, v4-pro, v4-flash) have no multimodal capability. When you paste an image into Claude Code backed by DeepSeek, it cannot see it. You get "Unsupported Image" — silence.

## The Solution

Unblind is a bundled agent skill. When an image appears in a message, the agent:

1. Detects the image path automatically
2. Routes it to Mimo's Anthropic-compatible vision API (mimo-v2.5)
3. Returns a detailed text description

To the user, it feels like DeepSeek just learned to see.

## Quick Install

```bash
git clone https://github.com/Santazuki/Unblind.git ~/.claude/skills/unblind
```

Then send any image to Claude Code. On first run, Unblind will detect missing config and guide you through setup automatically.

## Requirements

- Node.js >= 18
- [Mimo Token Plan](https://token-plan-cn.xiaomimimo.com) API key (~$6/month Lite plan)

## Models

| Model | Credits (1M tokens in/out) | Vision |
|---|---|---|
| **mimo-v2.5** (default) | 100 / 200 | Yes |
| mimo-v2-omni | 280 / 1400 | Yes |

mimo-v2.5 is the most cost-effective vision model on Mimo — 2.8x cheaper input and 7x cheaper output than v2-omni.

## Modes

| Mode | Use case |
|---|---|
| `describe` | General image understanding |
| `ocr` | Extract text from screenshots, documents |
| `ui-review` | UI/UX design critique |
| `chart-data` | Extract data from charts and graphs |
| `object-detect` | Identify objects, people, activities |

## How It Works

```
User sends image → Claude Code detects image path
  → Unblind agent self-checks config (Phase 0)
  → Encodes image as base64 → POSTs to Mimo Anthropic-compatible API
  → Returns text description to user
```

The self-healing setup (Phase 0) runs on every invocation:
- Missing API key → asks user → writes to settings.json
- Missing base URL → auto-fills default
- Missing permission rule → auto-adds to allowlist

## License

MIT
