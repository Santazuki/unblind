#!/usr/bin/env node
import { readFileSync } from "fs";
import { basename, extname } from "path";

const MIMO_API_KEY = process.env.MIMO_API_KEY || "";
const MIMO_BASE_URL = process.env.MIMO_BASE_URL || "https://token-plan-cn.xiaomimimo.com/anthropic";
const MIMO_MODEL = process.env.MIMO_VISION_MODEL || "mimo-v2.5";

const SUPPORTED_EXTS = new Set([
  ".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp", ".svg"
]);

const MIME_MAP = {
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".png": "image/png", ".gif": "image/gif",
  ".webp": "image/webp", ".bmp": "image/bmp",
  ".svg": "image/svg+xml"
};

function usage() {
  console.log(`Usage: node mimo-vision.mjs <image-path> [mode]

Modes:
  describe     (default) Detailed image description
  ocr          Extract all text from image
  ui-review    UI/UX design critique
  chart-data   Extract data from charts/graphs
  object-detect List objects, people, activities

Env vars:
  MIMO_API_KEY       Required - your Mimo API key
  MIMO_BASE_URL      Default: https://token-plan-cn.xiaomimimo.com/anthropic
  MIMO_VISION_MODEL  Default: claude-haiku-4-5-20251001`);
  process.exit(1);
}

const PROMPTS = {
  describe: "Provide a detailed description of this image. Include: main subject, setting/background, colors/style, any text visible, notable objects, and overall composition.",
  ocr: "Extract all text visible in this image verbatim. Preserve structure and formatting (headers, lists, columns). If no text is found, say so.",
  "ui-review": "You are a UI/UX design reviewer. Analyze this interface mockup or design. Provide: (1) Strengths — what works well, (2) Issues — usability or design problems, (3) Specific, actionable suggestions for improvement. Be constructive and detailed.",
  "chart-data": "Extract all data from this chart or graph. List: chart title, axis labels, all data points/series with values if readable, and a brief summary of the trend.",
  "object-detect": "List all distinct objects, people, and activities you can identify. For each, describe what it is and its approximate location in the image."
};

async function main() {
  const args = process.argv.slice(2);
  if (args.length < 1) usage();

  const imagePath = args[0];
  const mode = args[1] || "describe";

  if (!PROMPTS[mode]) {
    console.error(`Unknown mode: ${mode}`);
    usage();
  }

  if (!MIMO_API_KEY) {
    console.error("Error: MIMO_API_KEY environment variable is required");
    process.exit(1);
  }

  const ext = extname(imagePath).toLowerCase();
  if (!SUPPORTED_EXTS.has(ext)) {
    console.error(`Unsupported file extension: ${ext}`);
    console.error(`Supported: ${[...SUPPORTED_EXTS].join(", ")}`);
    process.exit(1);
  }

  const mimeType = MIME_MAP[ext];
  let imageData;
  try {
    imageData = readFileSync(imagePath);
    // Convert to base64 data URL
    const base64 = imageData.toString("base64");
    const dataUrl = `data:${mimeType};base64,${base64}`;

    const requestBody = {
      model: MIMO_MODEL,
      max_tokens: 2048,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: {
                type: "base64",
                media_type: mimeType,
                data: base64
              }
            },
            {
              type: "text",
              text: PROMPTS[mode]
            }
          ]
        }
      ]
    };

    const url = `${MIMO_BASE_URL}/v1/messages`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": MIMO_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error(`API error (${response.status}): ${errText}`);
      process.exit(1);
    }

    const result = await response.json();
    // v2.5-pro returns thinking blocks first; extract the first text block
    const textBlock = result.content?.find(c => c.type === "text");
    const content = textBlock?.text || JSON.stringify(result, null, 2);
    console.log(content);

  } catch (err) {
    if (err.code === "ENOENT") {
      console.error(`File not found: ${imagePath}`);
    } else {
      console.error(`Error: ${err.message}`);
    }
    process.exit(1);
  }
}

main();
