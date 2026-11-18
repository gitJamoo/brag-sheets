---
type: project
title: Insider-exfiltration forensic investigation & expert-witness report (CS 473 / BIS 482, Spring 2026)
dates: Mar–Apr 2026 (multi-week)
role: Individual analyst/report author (course project) — OSU Cybersecurity minor
evidence_level: 🟢 documented in vault notes (no report PDF located — attach it!)
---

# Digital Forensics — Expert-Witness Report ("Everest" insider-threat case)

## 1. Snapshot
Authored a **multi-week expert-witness report** on a simulated insider data-exfiltration case from a **forensic disk image**: reconstructed a **UTC-normalized cross-source timeline** from NTFS `$MFT`, Windows registry hives, SRUM, Prefetch, email artifacts, and EVTX logs; detected **steganography** (JPEG appended payloads), **privilege escalation**, **anti-forensics** (Defender/firewall disabled, ~**26,000 Security events cleared**), and **USB data staging**; documented limitations the way an expert has to survive cross-examination.

## 2. Evidence & numbers
| Item | Detail | Tag |
|---|---|---|
| Tools | FTK Imager, Autopsy, HxD, SrumECmd, PECmd, EvtxECmd/Chainsaw/Hayabusa/DeepBlueCLI (triage options), binwalk/foremost, exiftool | 🟢 |
| Techniques | NTFS boot-sector → `$MFT` location (LCN hex→decimal→sector), `FILE` magic bytes; registry: SAM (F-value semantics: *most recent* failed logon only), SYSTEM (TimeZoneInformation), NTUSER.DAT, USBSTOR; SRUM/Prefetch execution evidence; email artifacts (Thunderbird drafts as covert comms); **JPEG FFD9 EOF trick** (file size vs last FFD9 offset) → appended payload; EXIF/timestamp triage in Autopsy; file carving by trailer/header signatures | 🟢 |
| Findings | Account created 2025-03-05 19:34:48 → added to Administrators 2025-03-06 23:08:22 (privilege escalation); AutoAdminLogon enabled; staged 10-folder project tree; 41-second gap between two accounts suggests shared operator | 🟢 |
| Scale | 26,000+ Security-log events (cleared) — triage strategy: narrow window first, filter high-signal Event IDs (1102, 4624/4625, 4648, 4672, 4688, 4697/4698/4702, 4720/4732/4728, 4719, 4768/4769/4776) | 🟢 |
| Report craft | Structure (What was discovered → external comms, privilege/access, recon, data staging, steganography, malware, anti-forensics); explicit **limitations framework** (circumstantial evidence; malware ≠ attribution; encrypted data not decrypted); consistent UTC timestamps; wrong-hostname copy/paste error caught (credibility lesson) | 🟢 |
| Course grade | not recorded | ❓ add |

## 3. Resume-ready bullets
- Authored a multi-week **expert-witness report** on a simulated insider data-exfiltration case: NTFS `$MFT` analysis in FTK Imager, registry artifact analysis (USBSTOR, SAM, NTUSER.DAT, timezone normalization), SRUM/Prefetch execution evidence, steganography detection via JPEG end-of-file markers, email-artifact recovery, and a UTC-normalized cross-source timeline.
- Triaged 26,000+ Windows Security events to isolate log-clearing, privilege-escalation, and anti-forensic activity; wrote an explicit limitations section distinguishing what each artifact does and does not prove.
**Short:** Forensic expert-witness report: MFT/registry/SRUM/stego timeline for an insider-exfiltration case (FTK, Autopsy).

## 4. Keywords
Digital forensics, DFIR, FTK Imager, Autopsy, NTFS/MFT, Windows registry forensics, SRUM, Prefetch, EVTX/Windows event logs, steganography, file carving, timeline analysis, chain of custody, expert-witness reporting, legal frameworks (4th Amendment, CFAA, ECPA).

## 5. Soundbite
"I learned the most from my own mistakes: a copy-pasted hostname in a draft would've wrecked my credibility on cross — so every claim carries its source artifact and every limit is stated."
