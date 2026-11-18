---
type: project
title: Second Brain Pipeline — LLM-conversation → Obsidian knowledge-base distiller
dates: 2026-07-07 → ongoing (this KB is downstream of it)
repo: local git `Documents/Second Brain` (2 commits; pipeline) · vault `Documents/Second-brain`
role: Solo
---

# Second Brain Pipeline

## 1. Snapshot
Python pipeline that **ingests every AI conversation export** (Claude.ai, ChatGPT, Gemini Takeout/MyActivity, live Claude Code JSONL sessions) via an **adapter pattern** into a normalized markdown archive tracked by a **content-hash manifest** (idempotent re-runs), then a **`/distill` Claude Code skill** turns un-distilled notes into topic/solution/decision/people/profile notes using **tiered models** (cheap Haiku-class subagents write per-conversation digests; a frontier model synthesizes). `PROFILE.md` is kept under ~3K tokens so it's pasteable into any LLM; other agents (Hermes, Claude Code) read the vault as working memory.

## 2. Numbers
| Number | Tag |
|---|---|
| **2,488** archived conversation files (Claude 237 · ChatGPT 1,057 · Gemini 1,189 · Claude Code 5 session dirs) | ✅ counted 2026-10-20 (résumé says 1,400+ → update to "2,400+") |
| **5 adapters** (`chatgpt_export`, `claude_export`, `claude_code`, `gemini_myactivity`, `gemini_takeout`) ≈ **1,230 lines** Python (core + adapters) | ✅ |
| Vault today: **29 Topics · 21 Solutions · 10 Decisions · 22 People** distilled notes + PROFILE/INDEX | ✅ |
| Initial backfill: 255 conversations + 16 Claude Code sessions in first pass | 🟢 Topic note |
| Cost design: small-model digests, frontier-model synthesis | 🟢 |

## 3. Accomplishments
Adapter architecture (add a source = add one file) · content-hash manifest (safe re-runs on full re-exports) · drop-zone `inbox/` autodetect · distill skill with batched subagents + checkpointed manifest · vault contract (`CLAUDE.md` working-memory rules: never edit `Sources/`, wikilink evidence, atomic notes) · profile maintenance rule (≤3K tokens) · downstream: powered LinkedIn "Projects overhaul", this brag-sheet KB, Hermes context.

## 4. Bullets
- Built a pipeline that ingests **2,400+ AI conversation exports** across four formats via an adapter pattern and distills them into a linked Obsidian knowledge base (topics, solutions, decisions, people, profile) that other agents consume as working memory.
- Cut inference cost by routing per-conversation digests to a small model and reserving a frontier model for synthesis; made ingestion idempotent with a content-hash manifest.
**Short:** Personal RAG-style knowledge base: 2,400+ chats → structured Obsidian vault via adapters + tiered LLM distillation.

## 5. Keywords
Python, adapter pattern, ETL, idempotency/content hashing, LLM pipelines, Claude Code skills/subagents, prompt/context engineering, knowledge management, Obsidian, markdown, personal knowledge graph, cost optimization.

## 6. Soundbite
"Every AI conversation I've had became searchable memory — and every agent I run starts by reading that memory, not from zero."

## 7. Screenshots to capture
Obsidian graph view (vault `Second-brain`) — top-priority visual per LinkedIn plan; before/after of a raw export vs a distilled note. *(No screenshot taken — Obsidian is a desktop app; capture manually.)*
