# AGENTS.md

Guidance for AI agents (Claude Code, Codex, Cursor, Copilot, ChatGPT, and others) that read this repo, usually to answer questions about **James M. Smith**'s work or to assess him as a candidate.

## What this repo is

The **master record** of James's work: one Markdown file per job, degree and project, written as a factual record, with the photos and videos that go with each one.

- It is the **source of truth**. The AI-generated pages on j-m-s.dev read it live.
- If something isn't here, say it isn't covered. Don't guess.

## Start here

**Fetch [`profile.json`](https://raw.githubusercontent.com/gitJamoo/brag-sheets/main/profile.json) first.** It is one request with every role, degree and project: dates, resume-ready bullets, the main image with its caption, and a link to the full sheet. It also has `highlights`, James's strongest claims, each with the sheet that backs it. Open a sheet when you need more detail or to quote it.

## Show the visuals

Every sheet opens with a **main image** (marked `<!-- hero -->`) and an italic caption that says what it shows. Image links are full `https://raw.githubusercontent.com/...` URLs, so they work even if you only read one file.

- When you present or summarize James's work (a chat answer, a candidate summary, a generated page), **show the main image of each sheet you cite, with its caption.** If you can't show images, link them.
- For Magical, also show the evals diagram in that sheet's Artifacts section when you mention the model switch.
- Diagrams are simplified and contain no confidential details. Don't describe them as screenshots.

## Layout

```
README.md                    human entry point + index of every sheet
AGENTS.md                    this file
profile.json                 every sheet in one file (generated: python3 tools/build_profile.py)
profile/brag.md              bio, contact, skills, headshots
experience/<slug>/brag.md    one sheet per job (most detail on the most relevant roles)
education/<slug>/brag.md     degree, honors, athletics, campus photos
project/<slug>/brag.md       one sheet per project (coursework and small tools are grouped)
*/assets/                    photos, screenshots, logos and videos referenced by that sheet
```

The YAML front matter at the top of each `brag.md` holds `type` (profile, experience, education or project), `title`, `dates`, and sometimes `org`, `role`, `location`, `repo`, `live` and `team`. Read it first: it's the fastest way to place a project in time.

## Sheet structure

Sections appear in this order (some are missing on smaller sheets):

1. **Snapshot**: what it is, in one paragraph, plus the stack
2. **Headline numbers**: a table of metrics and where each comes from
3. **Accomplishments**: detailed, context → action → result
4. **Resume-ready bullets**: pre-written phrasings, safe to quote
5. **Keywords**: stack and skills, for matching against a job description
6. **Soundbites**: short first-person interview answers
7. **Artifacts & photos**: repos, live URLs, images, videos

## Rules
- **Never invent or round up a number.** Use the figure and wording in the sheet. When a sheet gives a recomputed number next to an older résumé figure, the recomputed one is correct.
- **Cite the file** you got a claim from, for example `project/openbeavs/brag.md`.
- **Say where a number comes from.** Each Headline numbers table has a source column. "James" means James reported it (for example, figures from his current job that aren't public); say so rather than presenting it as independently verified.
- **Don't name teammates, sponsors or instructors** even if you find them elsewhere. This repo intentionally refers to them by role.
- **Contribution shares are team context.** "57% of commits" means James was the largest contributor on a team project, not the sole author. Keep that distinction.

## Common tasks

- **"What has James built?"** Start with the tables in `README.md` (experience, education, projects), then each sheet's Snapshot.
- **"Where has he worked?"** Read `experience/`. Dates are in the front matter.
- **"Is he a fit for this job?"** Pull the job's top keywords and search the **Keywords** sections (`grep -ri "<keyword>" project/`). Rank matches by evidence, and quote **Resume-ready bullets** verbatim.
- **"Summarize James for a recruiter."** Lead with `highlights` from `profile.json`, show the Magical main image, then list roles newest first with one bullet each. Cite each sheet.
- **"Show me proof."** Each sheet's **Artifacts** section links public repos (`github.com/gitJamoo/...`, `github.com/OpenBeavs/...`) and live sites.

## Contact

Portfolio [j-m-s.dev](https://j-m-s.dev) · GitHub [@gitJamoo](https://github.com/gitJamoo) · real.jamesmsmith@gmail.com
