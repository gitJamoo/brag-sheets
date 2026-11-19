---
type: experience
title: Machine Learning Intern, AI & Innovations — The Estée Lauder Companies
org: The Estée Lauder Companies (Data Science & Analytics, global team)
role: Machine Learning Intern, AI & Innovations
location: New York, NY
dates: 2025-06 → 2025-08
---

# The Estée Lauder Companies — Machine Learning Intern

<!-- hero -->
![Giving the final presentation of the recommendation-chatbot work at The Estée Lauder Companies.](https://raw.githubusercontent.com/gitJamoo/brag-sheets/main/experience/estee-lauder/assets/elc-final-presentation.jpg)
*Giving the final presentation of the recommendation-chatbot work at The Estée Lauder Companies.*


## 1. Snapshot
Summer 2025 ML internship on Estée Lauder's global Data Science & Analytics team in New York. As an intern on the team, James **worked on** the data and agent layer behind a **customer-facing product-recommendation chatbot** (a team project he contributed to, not one he led): unifying **12,000 live SKUs from 30+ brand databases** into one searchable index, the microservice that feeds it, and a **vector-database cache** in front of the team's internal LLM calls. He also did the analysis that helped stakeholders commit to retiring a legacy catalog system, and built Google ADK + MCP agent tooling, sending bug reports back to Google's ADK team.

Stack: **Python, Google Agent Development Kit (ADK), Model Context Protocol (MCP), SQLite, vector database / embeddings, pandas, microservices.**

## 2. Headline numbers
| Number | Source |
| --- | --- |
| **12,000 live SKUs** across **30+ brand databases**, **50+ features per SKU** | résumé |
| **$1.5M projected annual revenue** and **2% global add-to-cart uplift** for the recommendation chatbot | business projection |
| Legacy "Broadcast" catalog ≈ **8,500 SKUs** vs ≈ **4,000** in the modern "Loki" system | résumé |
| Presented to **VP-level stakeholders**; work slated for global rollout | info notes |

## 3. Accomplishments
1. **Product data unification for the recommendation engine.** *Context:* product data lived in 30+ brand databases with inconsistent schemas, so a chatbot couldn't answer specific questions. *Action:* worked on normalizing 12,000 SKUs × 50+ features into a centralized **SQLite reverse-search index**, and on a **microservice** that pulls and normalizes data from all 30+ sources. *Result:* the chatbot could answer hyper-specific queries such as "eczema-safe products, no parabens, sustainably sourced".
2. **Agentic recommendation workflow.** Worked on the agentic AI workflow behind the customer-facing recommendation chatbot, which is projected at **$1.5M in revenue** and a **2% global add-to-cart uplift**.
3. **LLM cost control.** Worked on a **vector-database caching layer** over internal AI calls (the chatbot and internal coding assistants). It reuses existing embeddings instead of regenerating them to cut token spend.
4. **Catalog migration analysis.** Performed exploratory data analysis comparing the legacy Broadcast system (~8,500 SKUs) with the modern Loki system (~4,000 SKUs); his materials helped stakeholders commit to modernization.
5. **ADK + MCP agent tooling.** Built agent tooling with **Google ADK** and **MCP servers** for catalog queries and cross-system analysis. He filed bug reports and technical feedback to Google's ADK team, which influenced his team's adoption of the toolchain.
6. **Handoff.** Wrote documentation, tooling and architecture diagrams so the work could be supported after the internship ended.

## 4. Resume-ready bullets
- Worked on the agentic AI workflow powering a customer-facing product-recommendation chatbot projected to generate **$1.5M in revenue** and a **2% global add-to-cart uplift**.
- Unified **12,000 live SKUs** across **30+ brand databases** (50+ features each) into a centralized SQLite reverse-search index and the microservice that feeds it.
- Worked on a vector-database caching layer over internal LLM calls that cuts token costs by reusing embeddings.
- Performed EDA for a legacy-to-modern catalog migration (~8,500 vs ~4,000 SKUs), helping stakeholders commit to modernization.
- Built Google ADK + MCP agent tooling and filed bug reports to Google's ADK team that influenced toolchain adoption.

**Short:** ML intern at Estée Lauder: worked on a 12K-SKU recommendation chatbot ($1.5M projected) and an LLM cost cache.

## 5. Keywords
Agentic AI, LLM orchestration, recommendation systems, Google ADK, MCP, vector database, embeddings, semantic caching, SQLite, search index, data normalization, microservices, ETL, pandas, EDA, stakeholder presentation, enterprise retail, e-commerce.

## 6. Soundbites
- "The model wasn't the hard part. Twelve thousand SKUs in thirty databases that all disagreed about what a 'product' was — that was the hard part."
- "Caching embeddings is the cheapest model upgrade there is: you stop paying twice for the same answer."

## 7. Artifacts & photos
Code and internal docs are proprietary; nothing is public.

| | |
| --- | --- |
| ![In front of the Estée Lauder backdrop](https://raw.githubusercontent.com/gitJamoo/brag-sheets/main/experience/estee-lauder/assets/elc-in-front-of-backdrop.jpg) | ![Giving the final presentation](https://raw.githubusercontent.com/gitJamoo/brag-sheets/main/experience/estee-lauder/assets/elc-final-presentation.jpg) |
| ![LaunchIQ](https://raw.githubusercontent.com/gitJamoo/brag-sheets/main/experience/estee-lauder/assets/elc-launchiq.jpg) | ![On the rooftop with the intern cohort](https://raw.githubusercontent.com/gitJamoo/brag-sheets/main/experience/estee-lauder/assets/elc-rooftop-with-co-interns.jpg) |
| ![Name-tag collection from the summer](https://raw.githubusercontent.com/gitJamoo/brag-sheets/main/experience/estee-lauder/assets/elc-nametag-collection.jpg) | ![Featured in Estée Lauder's online content](https://raw.githubusercontent.com/gitJamoo/brag-sheets/main/experience/estee-lauder/assets/elc-online-candid.jpg) |

Logo: `assets/logo.png`
