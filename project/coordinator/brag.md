---
type: project
title: COORDINATOR — agentic AI for real-time sports strategy (built at BVR ST CO)
role: Software Engineer, core contributor (company product, not sole author)
dates: 2025-10 → 2026-06
org: BVR ST CO
live: https://getcoordinator.ai/
related: ../../experience/bvr-st-co/brag.md
---

# COORDINATOR

## 1. Snapshot
COORDINATOR is **BVR ST CO's agentic AI for sports strategy**. James worked on the original version as a software engineer. It was a system for **real-time football game analysis** that:
- took in live play-by-play, video and schematic data, and surfaced tactical recommendations mid-game;
- used a **dual-mode reasoning** design: a fast path for in-game calls and a slow path for deeper analysis between possessions;
- ran **locally on NVIDIA hardware** (DGX Spark class) with **NVIDIA Nemotron**, so coaching data never left the facility;
- used **LoRA fine-tuning** to learn from verified game outcomes.

The product has kept evolving since. As of Nov 2026, getcoordinator.ai presents it as an always-on strategy agent for coaches, trainers, athletes and fantasy players, with model routing and shared memory.

## 2. Headline numbers
| Number |
| --- |
| James's share of the codebase — company repo, not public |

## 3. What James built
- Core components of the agentic framework for real-time game analysis (Nemotron for low-latency local reasoning; AutoGen-style multi-agent orchestration).
- LoRA fine-tuning for reinforcement-based learning from verified real-time game outcomes.
- Data paths for live play-by-play, video and schematic inputs.

## 4. Resume-ready bullets
- Developed core components of COORDINATOR, an agentic AI framework for real-time football strategy, with local NVIDIA Nemotron reasoning and LoRA fine-tuning on verified game outcomes.

## 5. Keywords
Agentic AI, multi-agent systems, AutoGen, NVIDIA Nemotron, DGX Spark, local inference, LoRA, reinforcement learning, sports analytics, real-time systems, Next.js.

## 6. Artifacts
- Live: https://getcoordinator.ai/ · launch post: https://bvrstco.com/blog/introducing-coordinator
- ![COORDINATOR portfolio card](assets/portfolio-thumbnail.png)
