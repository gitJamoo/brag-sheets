---
type: experience
title: Founder / AI Automation Consultant — production AI quoting agent for a lumber manufacturer
org: Independent (client: a lumber manufacturer's sales desk; client name withheld)
role: Founder / AI Automation Consultant (freelance AI engineer)
location: Portland, OR (remote)
dates: 2026-05 → 2026-07
---

# Independent AI Consulting — AI Quoting Agent

## 1. Snapshot
A freelance engagement between graduating and joining Magical. James designed, built, secured and deployed a **production AI quoting agent** for a lumber manufacturer's sales desk. It reads inbound request-for-quote emails, queries **live pricing and inventory from the client's ERP (SQL Server)**, and drafts **Outlook-ready quote replies** for the traders, with an operations dashboard on top. He owned all of it: architecture, prompts, SQL grounding, the security audit, tests and deployment.

Stack: **N8N** on a self-managed Linux server (**Cloudflare Tunnel** ingress, SSH port-forwarded DB access), **Claude Sonnet via OpenRouter with Zero Data Retention**, **SQL Server / T-SQL**, **Microsoft Graph API** (Outlook threading).

## 2. Headline numbers
| Number | Tag | Source |
|---|---|---|
| **5-layer** pipeline with a single canonical pricing unit (MBF) enforced across every layer | 🟢 | résumé |
| Corrected price-floor errors of **up to 3×** against wholesale market benchmarks | 🟢 | résumé |
| Security audit: **7 findings remediated** | 🟢 | résumé |
| **9-fixture** regression suite (multi-item, unknown customer, unparseable input, injection, below-cost) | 🟢 | résumé |
| Time on the engagement: ~2–3 months (May → Jul 2026) | 🟢 | |

## 3. Accomplishments
1. **End-to-end quoting agent.** Inbound RFQ email → parse line items → SQL agent queries live ERP pricing and stock → draft quote → Outlook-ready reply in the original thread (Microsoft Graph message threading). Traders review and send; nothing goes out unreviewed.
2. **Grounding the SQL agent.** Gave the agent a confirmed database schema so it stopped inventing table references, and enforced one pricing unit (**MBF**, thousand board feet) through all five layers. That fixed price floors that had been off by **up to 3×**.
3. **Operations dashboard.** Per-quote deal strips (order value, margin vs floor, customer history), price-position and stock-coverage charts, incoming purchase-order matching, a collapsible **AI reasoning trail**, and one-click "Add to Outlook".
4. **Security audit (7 findings fixed).** Found and fixed unauthenticated webhooks, **database write-gate bypasses** (`SELECT … INTO`, stored-procedure regex gaps), silent failure paths and provider data-privacy risk. The last one was fixed by moving to OpenRouter with **Zero Data Retention**.
5. **Adversarial testing.** Built a 9-fixture regression suite that includes **prompt-injection and SQL-injection** cases and below-cost pricing traps.
6. **Ops.** Runs on a self-managed Linux box: Cloudflare Tunnel ingress, SSH-forwarded DB access, no inbound ports.

## 4. Resume-ready bullets
- Designed, built and deployed a production AI quoting agent for a lumber manufacturer's sales desk: it ingests RFQ emails, queries live ERP (SQL Server) inventory and pricing, and drafts Outlook-ready replies for traders.
- Architected the pipeline in N8N on a self-managed Linux server (Cloudflare Tunnel, SSH-forwarded DB) with Claude Sonnet via OpenRouter under Zero Data Retention.
- Grounded the SQL agent in a confirmed schema and enforced a canonical pricing unit (MBF) across five layers, correcting price-floor errors of up to 3×.
- Ran a security audit and remediated **7 findings** (unauthenticated webhooks, DB write-gate bypasses, silent failures, provider privacy), backed by a 9-fixture prompt/SQL-injection regression suite.

**Short:** Freelance: shipped a production AI quoting agent (N8N + Claude + SQL Server + Outlook) for a lumber manufacturer.

## 5. Keywords
AI agents, LLM orchestration, N8N, OpenRouter, Claude Sonnet, Zero Data Retention, SQL Server, T-SQL, text-to-SQL, ERP integration, Microsoft Graph API, Outlook, email automation, prompt injection, SQL injection, security audit, webhook authentication, Cloudflare Tunnel, Linux, dashboards, B2B, manufacturing, client delivery.

## 6. Soundbites
- "The bug that mattered wasn't the model. Prices came in per piece, per foot and per MBF, and the floor was off by three times until I forced one unit through every layer."
- "Anything that writes SQL from an email gets treated like an attacker. I tested it like one."

## 7. Artifacts
Client code is private. Logo used on the portfolio: `assets/logo.png`.
