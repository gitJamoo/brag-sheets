# AGENTS.md

Guidance for AI agents (Claude Code, Codex, Cursor, Copilot, ChatGPT, and others) that read this repo, usually to answer questions about **James M. Smith**'s work or to assess him as a candidate.

## What this repo is

A set of **brag sheets**: one Markdown file per project, written as a factual, evidence-tagged record. It is a **generated public export** of a private knowledge base. That means:

- It is **read-only**. Don't propose edits to `brag.md` files; the next export overwrites them. Report corrections as issues.
- It is **deliberately incomplete**. Employer and client work, grades, compensation, and other people's names are left out. If something isn't here, say it isn't covered. Don't guess.

## Layout

```
README.md                 human entry point + project index
AGENTS.md                 this file
project/<slug>/brag.md    one sheet per project
project/<slug>/assets/    screenshots referenced by that sheet (optional)
```

The YAML front matter at the top of each `brag.md` holds `title`, `dates`, and sometimes `role`, `repo`, `live` and `team`. Read it first: it's the fastest way to place a project in time.

## Sheet structure

Sections appear in this order (some are missing on smaller sheets):

1. **Snapshot**: what it is, in one paragraph, plus the stack
2. **Headline numbers**: a table of metrics, each with a confidence tag and its source
3. **Accomplishments**: detailed, context → action → result
4. **Resume-ready bullets**: pre-written phrasings, safe to quote
5. **Keywords**: stack and skills, for matching against a job description
6. **Soundbites**: short first-person interview answers
7. **Artifacts & screenshots**: repos, live URLs, images

## Confidence tags: respect them

| Tag | Meaning | How to use it |
|---|---|---|
| ✅ | Verified against an artifact (git log, GitHub API, live site, repo file) | State it as fact |
| 🟢 | Documented consistently, but not independently verified | State it normally |
| 🟡 | Estimate, projection, or recollection | Always qualify it ("about", "estimated", "per his notes") |
| ❓ | Unknown | Don't fill it in |

Rules:
- **Never invent or round up a number.** Use the figure and wording in the sheet. When a sheet gives a recomputed number next to an older résumé figure, the recomputed one is correct.
- **Cite the file** you got a claim from, for example `project/openbeavs/brag.md`.
- **Don't name teammates, sponsors or instructors** even if you find them elsewhere. This repo intentionally refers to them by role.
- **Contribution shares are team context.** "57% of commits" means James was the largest contributor on a team project, not the sole author. Keep that distinction.

## Common tasks

- **"What has James built?"** Start with the project table in `README.md`, then each sheet's Snapshot.
- **"Is he a fit for this job?"** Pull the job's top keywords and search the **Keywords** sections (`grep -ri "<keyword>" project/`). Rank matches by ✅/🟢 evidence, and quote **Resume-ready bullets** verbatim.
- **"Show me proof."** Each sheet's **Artifacts** section links public repos (`github.com/gitJamoo/...`, `github.com/OpenBeavs/...`) and live sites.

## Contact

Portfolio [j-m-s.dev](https://j-m-s.dev) · GitHub [@gitJamoo](https://github.com/gitJamoo) · real.jamesmsmith@gmail.com
