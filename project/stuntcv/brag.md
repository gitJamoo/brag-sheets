---
type: project
title: StuntCV — computer-vision analysis for cheerleading stunts
dates: 2025-08-03 → 2026-07-02 (v1 Tkinter+MediaPipe Aug–Sep 2025; StuntCV2 Next.js Mar–Apr 2026; YOLOv8+ByteTrack rewrite + FastAPI web UI Apr–Jul 2026)
repos: gitJamoo/stunt-cv (29 commits) · StuntCV2 (20) · StuntCV-V2 (1) · STUNTigami (2) — all 100% James
role: Solo builder (and subject-matter expert: NCAA D1 base/stunt athlete)
---

# StuntCV

## 1. Snapshot
A tool James built because he *needed it as a college cheerleader*: upload a stunt video, automatically **track the base and flyer**, compute **height/velocity/acceleration/shakiness/weak-point** metrics, show **skeleton overlays**, produce **rule-based coaching insights**, and chat with an **AI coach** about the analysis. Three generations: (1) **Tkinter + MediaPipe** desktop app (33 landmarks), (2) **StuntCV2** in-browser Next.js/MediaPipe/IndexedDB, (3) **YOLOv8-pose + ByteTrack** (persistent IDs, sticky roles) behind a **FastAPI** web UI with frame-accurate overlays.

## 2. Headline numbers
| Number | Tag | Note |
|---|---|---|
| **50 commits** across 4 repos, Aug 2025 → Jul 2026 | ✅ | |
| ≈**1,100 lines** in the core tracking/analysis modules (`tracking` 181, `stats` 97, `insights` 178, `server` 443, `pose_data` 200) + `main.py` Tk UI; ≈**2.2K lines** Python total | ✅ | |
| Analyzes full video at **15 FPS** (StuntCV2) | ✅ commit | |
| 4 sample analyses cached (`analyses/*.json`), **12+ test/demo videos** rendered (`edited_videos/`) | ✅ | |
| `tests/smoke_test.py` headless end-to-end check | ✅ | |
| Accuracy / % identity swaps eliminated | ❓ | no measured number — consider measuring on your 12 videos |

## 3. Accomplishments
- **v1 (Aug 2025):** dual-person tracking (flyer first, then base), **ROI-based tracking**, smoothing, triple-screen view (original · overlay · mocap-only), video slider, **velocity tracking**, **CSV export** (frame, person, landmark idx, x/y/z, visibility), data-visualization output, video export (with mocap or mocap-only).
- **StuntCV2 (Mar 2026):** designed from a written spec + implementation plan; Next.js/TS/Tailwind app with **drag-and-drop upload + validation**, **IndexedDB (Dexie)** storage, **in-browser MediaPipe Pose** processing, **comprehensive stunt scoring system**, stunt identification + feedback generator, progress/stage indicators.
- **Rewrite (Apr–Jul 2026):** switched detector **MediaPipe → YOLOv8-pose**; **ByteTrack persistent IDs with sticky roles** (roles follow track IDs, never silently reassigned by geometry); `conf=0.1` + `iou=0.7` tuning so low-confidence boxes hold tracks through occlusion and NMS doesn't merge the stacked pair; **re-bind** of dead tracks by box overlap; **height bias** and `pose_bottom_y` (ankle/hip) to decide flyer vs base so an occluded base isn't mistaken as "higher"; **role correction** (swap button, right-click reassign, click-to-assign in web player); **spotters shown grey, stats only on the stunt pair**; headless modules + UI-only `main.py`; **role-agnostic `tracks` + editable `role_map`** so corrections recompute metrics without re-running inference; group-stunt plan (`GROUP_STUNT_PLAN.md`).
- **Analysis layer:** post-run metrics DataFrame (CoM height/velocity/acceleration, torso-length normalization), rule-based coaching insights, **Plotly** report, LLM context summarizer + **DeepSeek** chat proxy; FastAPI endpoints (`/api/upload`, `/api/analyze` background job, cancellable; `/api/reassign`, `/api/swap_roles`, `/api/frame/{video}/{i}`) with versioned cache (`ANALYSIS_VERSION`).
- **Spin-offs:** `CV-Gestures` (OpenCV+MediaPipe posture/focus monitor), `Face-Bounding-Box-Video`, `Screen-Reader-Near-Webcam` (all Dec 2025), `STUNTigami`; became the seed for **OVERSEER**.

## 4. Resume-ready bullets
- Built **StuntCV**, a computer-vision application for cheerleading stunt analysis: YOLOv8-pose detection with **ByteTrack persistent identity tracking**, occlusion-robust height signals, and gap-bridging smoothing that eliminated role/identity swaps through lifts (qualitatively, across 12+ test videos).
- Computes per-performer **center-of-mass height, velocity, acceleration, shakiness, and weak points**, exports frame-level CSVs, and generates coaching insights and Plotly reports; AI chat tab (DeepSeek) explains results.
- Shipped three generations — Tkinter/MediaPipe desktop, in-browser Next.js/IndexedDB, and a FastAPI web UI with frame-accurate overlays and click-to-assign role relabeling; designed role-agnostic tracks so corrections recompute metrics without re-running inference.
**Short:** Solo-built CV tool for cheer stunt analysis (YOLOv8-pose, ByteTrack, FastAPI) — born from my own D1 stunting.

## 5. Keywords
Computer vision, pose estimation, YOLOv8-pose (Ultralytics), ByteTrack multi-object tracking, MediaPipe Pose, OpenCV, NumPy, pandas, Plotly, FastAPI, Tkinter, Next.js, IndexedDB/Dexie, DeepSeek API, sports analytics, biomechanics, data visualization, CSV pipelines, occlusion handling, video processing.

## 6. Soundbites
- "I'm a base. The hard CV problem is *me* — the base's upper body is occluded by the flyer, so naive 'who's higher' logic swaps us. I used ankle/hip height and sticky ByteTrack IDs instead of mean keypoint y."
- "Corrections are cheap: tracks are role-agnostic, so relabeling just recomputes metrics from cached keypoints."

## 7. Artifacts & screenshots
Repos are listed above. Demo frames are kept private because they show other athletes.
