# CompTIA Security+ (`SY0-701`) — Independent QA Content Audit & Remediation Report

## 1. Review Methodology & Blueprint Scope

Prior to final build and deployment, five independent read-only QA subagents audited 100% of authored Thai and English learning materials against [`docs/exam-blueprint.md`](file:///c:/Users/Windows/Documents/Education/Comptia-Security+/docs/exam-blueprint.md) (CompTIA Security+ `SY0-701` V7, Exam Objectives v5.0). Every lesson, knowledge check, question item, PBQ scenario, mock exam form, glossary entry, flashcard, and 30-day study plan entry was inspected for:

- **Exam Blueprint Fidelity (`SY0-701` v5.0):** Strict isolation from legacy `SY0-601` terminology (`Mantrap` used strictly as historical note if referenced, `Screened subnet` preferred over `DMZ`, `On-path attack`, `Unskilled attacker`, `Allow/deny list`, `Business Partners Agreement`, `4.8` IR activities vs `4.9` data sources) and zero `SY0-801` leakage.
- **Technical Accuracy & Answer-Key Soundness:** Single unambiguous best answer (`selectCount === 1`) or exact multi-select matching (`selectCount === correctChoiceIds.length`, EN `Choose two/three` paired with TH `เลือก 2/3 ข้อ`), accurate quantitative risk math (`SLE = AV × EF`, `ALE = SLE × ARO`, Net Benefit), and valid PBQ rubrics (`sum === 1.0`).
- **Pedagogical Clarity & UI Rendering Safety:** Alignment between `choiceRationales` polarity (`ถูกต้อง:` / `ไม่ถูกต้อง:`) and `correctChoiceIds`, removal of internal schema IDs (`c1..c5`) from student-facing `explanationTh` prose (because Mock Exams shuffle choice presentation order into `A`–`E`), removal of literal Markdown `**` or LaTeX `$...$` tokens in plain-text React components, and avoidance of term-echo giveaways across UI strings (`labelTh`, `roleHint`, synthetic log keys).
- **Cross-Reference Integrity:** Alignment of `relatedLessonIds` against actual lesson topic coverage (`L1-01`..`L5-07`) rather than confusing objective numbers with sequential lesson IDs.

---

## 2. Audited Inventory Summary

| Scope | Subagent | Lessons (`KCs`) | MCQ / MSQ | PBQs | Other Audited Assets | Severity Tally (`Crit / Mod / Min`) |
| --- | --- | --- | --- | --- | --- | --- |
| Domain 1 (`1.1`–`1.4`, 12%) | `bf137345` | 6 (`18` KCs) | 36 (`27` MCQ, `9` MSQ) | 3 | `d1-lessons.ts`, `q-d1.ts`, `pbq-d1.ts` | `0 / 5 / 4` |
| Domain 2 (`2.1`–`2.5`, 22%) | `0896e13a` | 9 (`36` KCs) | 66 (`50` MCQ, `16` MSQ) | 3 | `d2-batch1.ts`, `d2-batch2.ts`, `q-d2-b1.ts`, `q-d2-b2.ts`, `pbq-d2.ts` | `0 / 2 / 10` |
| Domain 3 (`3.1`–`3.4`, 18%) | `891a4d4b` | 8 (`32` KCs) | 54 (`40` MCQ, `14` MSQ) | 3 | `d3-batch1.ts`, `d3-batch2.ts`, `q-d3-b1.ts`, `q-d3-b2.ts`, `pbq-d3.ts` | `0 / 3 / 4` |
| Domain 4 (`4.1`–`4.9`, 28%) | `97f360f5` | 12 (`48` KCs) | 84 | 3 | `d4-batch1.ts`, `d4-batch2.ts`, `q-d4-b1.ts`, `q-d4-b2.ts`, `q-d4-b3.ts`, `pbq-d4.ts` | `0 / 4 / 5` |
| Domain 5 (`5.1`–`5.6`, 20%) + Study Aids | `111896f2` | 7 (`28` KCs) | 60 (`44` MCQ, `16` MSQ) | 3 | `d5-lessons.ts`, `q-d5-b1.ts`, `q-d5-b2.ts`, `pbq-d5.ts`, `glossary.ts` (185→190 terms, 87 cards), `studyPlan.ts` (30 days) | `0 / 2 / 11` |
| **Total** | **5 independent auditors** | **42 (`162` KCs)** | **300** | **15** | **3 Disjoint Mock Forms (`90` items each)** | **`0 / 16 / 34`** |

Across all 300 questions, 162 lesson knowledge checks, 15 PBQs, 185→190 glossary entries, 87 flashcards, and 30 study plan days, **zero critical answer-key or `SY0-701` blueprint scope defects** were found.

---

## 3. Domain-by-Domain Findings & Applied Remediations

### Domain 1 — General Security Concepts (`1.1`–`1.4`)

- **Files:** `src/data/lessons/d1-lessons.ts`, `src/data/questions/q-d1.ts`, `src/data/pbqs/pbq-d1.ts`
- **Confirmed Defects Fixed:**
  1. **Moderate — Inverted Thai explanation & Managerial/Operational SOP ambiguity (`d1-lessons.ts`, `L1-01`):** Fixed inverted parenthetical `"(ใน SY0-701 ใช้คำว่า Managerial แทนการมุ่งเน้น...)"` to clarify `Managerial` focuses on governance, policy, and oversight, while drafting policies/standards is Managerial and executing day-to-day SOPs is Operational.
  2. **Moderate — Lesson KC vs. Question Bank clones (`d1-lessons.ts`, `L1-01-KC1..3`, `L1-02-KC2`, `L1-03-KC2`, `L1-04-KC1..3`, `L1-05-KC1..3`, `L1-06-KC3`):** Rewrote 11 overlapping lesson knowledge checks using distinct industries, scenarios, and distractors so learners completing D1 lessons do not recognize identical stems in `q-d1.ts` or Mock Exam Form A.
  3. **Moderate — 4-choice MSQs & strawman distractors (`q-d1.ts`, `Q1-023`, `Q1-025`, `Q1-027`):** Expanded `Q1-023` and `Q1-027` from 4 to 5 choices and replaced obvious deletion/ban strawmen across `Q1-023`, `Q1-025`, and `Q1-027` with plausible wrong-phase Change Management actions.
  4. **Moderate — UI `labelEn`/`labelTh` duplication in `MatchingMatrixPbq` (`pbq-d1.ts`, `PBQ-D1-01`, `PBQ-D1-03`):** Updated `PBQ-D1-01` `labelTh` to pure Thai role descriptions (eliminating `Preventive — Preventive (...)`) and aligned `PBQ-D1-03` `labelTh` (`TPM`, `OCSP`, `HSM`) cleanly without echoing duplicate English headers.
  5. **Moderate — Zero Trust PBQ cues & weak 5th distractor (`pbq-d1.ts`, `PBQ-D1-02`):** Removed direct keyword echoes from `zoneLabelEn`/`zoneLabelTh` (`Slot C`/`Slot D`), removed redundant English prefix from `adaptive-identity.labelTh`, and replaced the legacy `Flat Implicit Trust Subnet` distractor with plausible Zero Trust concepts.
  6. **Minor (Items 6–9) — Classical PFS, CIA clarity, rationales & Thai typography (`q-d1.ts`, `d1-lessons.ts`):** Updated `Q1-035` away from PQC ambiguity (`"retroactive decryption if long-term key compromised"`), clarified `Q1-010` non-confidential headers, enriched `Q1-033` `c2` and `Q1-025` `c4` rationales, fixed `อัปเกรด` in `Q1-026` and `"จากข้อมูลสำรอง"` classifier in `Q1-004`, clarified CompTIA's 4 core MFA factors in `L1-02`, and replaced `DMZ จำลอง` with `Screened Subnet (DMZ)` in `L1-03`. (Historical `Mantrap` parenthetical note in `L1-03` was intentionally retained as benign exam context.)

### Domain 2 — Threats, Vulnerabilities, and Mitigations (`2.1`–`2.5`)

- **Files:** `src/data/lessons/d2-batch1.ts`, `src/data/lessons/d2-batch2.ts`, `src/data/questions/q-d2-b1.ts`, `src/data/questions/q-d2-b2.ts`, `src/data/pbqs/pbq-d2.ts`
- **Confirmed Defects Fixed:**
  1. **Moderate — Wrong cross-domain lesson link (`q-d2-b2.ts`, `Q2-044`):** Fixed `relatedLessonIds` from `['L2-06', 'L3-04']` to `['L2-06', 'L3-03', 'L1-03']` (connecting environmental fail-open/fail-closed controls to `L3-03` instead of firewalls/SASE).
  2. **Moderate + Minor Items 5–6 — Pre-labeled telemetry & weak distractors (`pbq-d2.ts`, `PBQ-D2-01`, `PBQ-D2-02`):** Overhauled synthetic logs to use realistic raw indicators rather than pre-labeled answer taxonomies (`tactic=executive-impersonation`, `behavior=covert-channel-indicator`, `pattern=parent-path-traversal`), fixed `pattern=homoglyph` → `pattern=char-substitution`, neutralized Thai BEC choice text (`"ผู้บริหาร"` removed), expanded every finding to 4 same-domain choices, and decoupled the `missing-logs` distractor from out-of-cycle logging.
  3. **Minor Item 3 — Plain-text formatting markers (`d2-batch1.ts`, `d2-batch2.ts`, `q-d2-b2.ts`):** Stripped literal `**` markers in `L2-03` and `L2-04`, replaced `$2^n$` / `$2^{n/2}$` / `$2^{64}$` LaTeX strings with plain text in `L2-07`, and replaced backticks with double quotes in `Q2-052`.
  4. **Minor Item 4 — Legacy `DMZ` term & SSRF egress description (`d2-batch2.ts`, `L2-08`):** Replaced `(DMZ)` and `"Web Proxy"` cloud metadata wording with `"ระบบ Egress filtering"` and `"ในโซน Screened subnet"`.
  5. **Minor Items 7–11 (`pbq-d2.ts`, `q-d2-b1.ts`, `q-d2-b2.ts`):** Clarified `PBQ-D2-03` VIP context row as `External-Facing Application VIP (NAT/Screened Subnet)`, changed `Q2-043` `"บัตรสมาร์ทแบบไร้สัมผัส"` to `"บัตรผ่านประตูแบบไร้สัมผัส"`, clarified `Q2-032` `c5` TLS certificate pinning rationale, fixed `"the researcher's actions"` typo in `Q2-008`, and expanded `relatedLessonIds` on `Q2-025` (`+L4-09`), `Q2-030` (`+L1-05`), and `Q2-062` (`+L4-01`).
  - *Note on Minor Item 12:* Three thematic similarities between lesson examples and distinct questions (`Q2-002`/`Q2-012`/`L2-01`, `Q2-017`/`L2-02-KC3`, `Q2-031`/`L2-04`) test distinct skills in separate mock forms (`Form B` vs `Form C`) and were intentionally kept with zero scoring overlap.

### Domain 3 — Security Architecture (`3.1`–`3.4`)

- **Files:** `src/data/lessons/d3-batch2.ts`, `src/data/questions/q-d3-b1.ts`, `src/data/questions/q-d3-b2.ts`, `src/data/pbqs/pbq-d3.ts`
- **Confirmed Defects Fixed:**
  1. **Moderate — Near-duplicate SASE scenario (`q-d3-b2.ts`, `Q3-028` vs. `Q3-026`):** Retained `Q3-026` for SASE (`45` offices) and rewrote `Q3-028` into a distinct Objective `3.2` **SD-WAN dynamic application-aware path selection & link failover** scenario across 18 branch plants (`MPLS`/`Fiber`/`LTE`, real-time VoIP/ERP jitter steering, sub-second failover).
  2. **Moderate + Minor Item 7 — Confused Objective/Lesson ID links (`q-d3-b1.ts`, `q-d3-b2.ts`, `d3-batch2.ts`):** Corrected `Q3-003` (`L4-06` → `L4-09`), `Q3-005` (`L4-07` → `L4-10, L4-01`), `Q3-007` (`L5-02` → `L5-03`), `Q3-024` (`L1-04` → `L1-05`), removed unrelated `L5-02` from `L3-07`, added `L4-07` to `Q3-025`, and expanded `Q3-031` to `['L3-05', 'L4-03', 'L5-01']`.
  3. **Moderate — Hardcoded `c1..c5` IDs in `explanationTh` (`q-d3-b2.ts`, `Q3-028`..`Q3-054`):** Eliminated all 27 internal ID references from `explanationTh` prose across `Q3-028`..`Q3-054` (replacing them with explicit concept names compatible with shuffled `A`–`E` UI display) and removed accidental bold markers in `Q3-028`.
  4. **Minor Items 4–6 (`q-d3-b1.ts`, `q-d3-b2.ts`, `pbq-d3.ts`):** Fixed contradictory `"encrypted plaintext password files"` wording in `Q3-005` `c3`, corrected `"Regional"` → `"ระดับภูมิภาค"` in `Q3-031` `c3.textTh`, removed `"bastion host"` and `"offsite"` term echoes in `PBQ-D3-01` / `PBQ-D3-03`, and added missing possessive apostrophe (`users'`) in `PBQ-D3-01`.

### Domain 4 — Security Operations (`4.1`–`4.9`)

- **Files:** `src/data/lessons/d4-batch1.ts`, `src/data/lessons/d4-batch2.ts`, `src/data/questions/q-d4-b1.ts`, `src/data/questions/q-d4-b2.ts`, `src/data/questions/q-d4-b3.ts`, `src/data/pbqs/pbq-d4.ts`
- **Confirmed Defects Fixed:**
  1. **Moderate — Dictionary-style rationales (`q-d4-b3.ts`, `Q4-057`..`Q4-084`):** Systematically rewrote all 28 `choiceRationales` objects in `q-d4-b3.ts` with consistent `ถูกต้อง:` / `ไม่ถูกต้อง:` polarity prefixes, sorted `c1..c5` keys, and concrete scenario-grounded explanations (explicitly explaining why *Workforce multiplier* / *Employee retention* fail in `Q4-064` and why *DHCP lease assignments* fail the SQLi investigation in `Q4-082`).
  2. **Moderate — Hardcoded `c1..c6` IDs in `explanationTh` (`q-d4-b2.ts`, `Q4-029`..`Q4-056`):** Removed all internal `c1..c6` choice ID references across all 28 `explanationTh` strings in `q-d4-b2.ts`, leaving zero schema-ID leakage in explanatory prose.
  3. **Moderate — Neutral/awkward rationales (`q-d4-b1.ts`, `Q4-001`, `Q4-004`, `Q4-013`, `Q4-018`, `Q4-024`):** Rewrote weak distractor rationales to clearly reject factory defaults widening attack surface (`Q4-001`), hourly active scans disrupting RTOS determinism (`Q4-004`), media sanitization vs. asset discovery (`Q4-013`), annual spreadsheets failing ephemeral containers (`Q4-018`), and backported-patch false positives (`Q4-024`).
  4. **Moderate — Dropdown answer bias (`pbq-d4.ts`, `PBQ-D4-01`):** Balanced all 12 dropdown `choices` arrays evenly across indices `0`, `1`, and `2` (`4/4/4`) instead of placing 11/12 correct options at index `0`.
  5. **Minor Items 5–9 (`pbq-d4.ts`, `q-d4-b3.ts`, `q-d4-b1.ts`, `d4-batch1.ts`, `d4-batch2.ts`):** Moved `http_uri="/plugin/upload"` from encrypted `PCAP_META` into the `edr` IIS server log in `PBQ-D4-03` so `PCAP_META` faithfully reflects encrypted TLS 1.3 handshake metadata only; clarified broad `Rule 101` removal alongside rule ordering in `PBQ-D4-01`; changed `Q4-058` `c1` from `"Tabletop simulation"` to `"Tabletop exercise"`; de-clustered `Q4-010` MSQ correct answers (`c1, c3, c5`); fixed redundant acronyms in `L4-01`/`L4-02`, English lead-in in `L4-02`, missing space in `L4-06-KC3`, and `"เมื่อไร"` tone mark in `L4-07`.

### Domain 5 — Security Program Management & Oversight (`5.1`–`5.6`), Glossary & 30-Day Study Plan

- **Files:** `src/data/glossary.ts`, `src/data/studyPlan.ts`, `src/data/lessons/d5-lessons.ts`, `src/data/questions/q-d5-b1.ts`, `src/data/questions/q-d5-b2.ts`, `src/data/pbqs/pbq-d5.ts`
- **Confirmed Defects Fixed:**
  1. **Moderate — Conflation of `Data Custodian` vs. `Data Steward` (`glossary.ts`, `g-data-roles`, `fc-075`):** Separated the two roles cleanly so `Data Custodian` covers technical SysAdmin/DBA operations (`ACLs`, encryption, backups) while `Data Steward` covers operational data quality, accuracy, definitions, and metadata labeling, matching `L5-01` and `Q5-010`.
  2. **Moderate — `MOU` mischaracterized as long-term (`studyPlan.ts`, Day 21):** Updated Day 21 `focusTipTh` so `MOU` accurately denotes preliminary mutual intent (`กรอบความร่วมมือเบื้องต้น`) and `MSA` denotes the long-term master framework.
  3. **Minor Item 3 — Rounding variance in `PBQ-D5-01` (`pbq-d5.ts`):** Changed `r1` frequency from `"once every 3 years (ARO = 0.33)"` (`~$20,000`) to exact `"once every 4 years (ARO = 0.25)"` (`SLE = $60,000`, `ALE = $15,000`, exact Net Benefit `+$7,500/year`).
  4. **Minor Item 4 — Official `SY0-701` `BPA` acronym (`glossary.ts`, `d5-lessons.ts`, `q-d5-b1.ts`):** Standardized all `BPA` titles and choices to **`Business Partners Agreement`** (preserving a parenthetical note in `g-bpa`).
  5. **Minor Items 5–8 — Glossary precision & coverage (`glossary.ts`):** Corrected `RPO` backward-from-outage directionality in `fc-079`, updated `g-mttr` to `Mean Time to Repair / Recover`, trimmed extra suffixes on `fullNameEn` for `g-snmp-traps` and `g-incident-response`, added `'5.4'` to `g-data-retention`, and added 5 standalone Domain 5 glossary entries (`g-exposure-factor`, `g-exception-vs-exemption`, `g-conflict-of-interest`, `g-rules-of-engagement`, `g-data-inventory` — expanding `GLOSSARY_ENTRIES` from 185 to 190).
  6. **Minor Items 9–12 (`q-d5-b1.ts`, `q-d5-b2.ts`, `pbq-d5.ts`):** Replaced awkward `"แนวป้องกันภาคประชาชน"` with `"ด่านตรวจจับโดยบุคลากร (Human sensor)"` (`Q5-056`); clarified `"maintain a suppression record until backups expire"` (`Q5-040`) and expanded `c1` rationale (`Q5-060`); removed `(c1..c5)` ID citations in `Q5-040`, `Q5-053`, `Q5-056`, and `Q5-060`; removed unordered `"respective"` / `"ตามลำดับ"` phrasing in `Q5-024`; added plausible 5th distractors to `Q5-018`, `Q5-044`, and `Q5-053`; and broadened `PBQ-D5-03` step `p2-initial` to cover initial all-staff baseline rollout plus new-hire onboarding.
  7. **Minor Item 13 — Study Plan pacing & objectives (`studyPlan.ts`):** Increased `estimatedMinutes` on Days 17, 18, and 19 (`80` → `105`/`110`/`105` min) to accommodate two full lessons plus flashcards and 15 questions; expanded `objectiveIds` on Day 16 (`4.1`–`4.9`) and Day 20 (`5.1`–`5.6`). (Mock Exam Days 23, 26, and 29 intentionally retain 5 representative `objectiveIds` highlights per card while labeling `mockFormId` covering all 28 objectives.)

---

## 4. Verification Status After Remediation

- **Strict Schema & Integrity Validation (`npm.cmd run validate:content`):** Re-executed after remediation batches (`Lessons: 42`, `MCQ/MSQ: 300`, `PBQs: 15`, `Mock Forms: 3`, `Glossary: 190`, `Flashcards: 87`, `Study Days: 30`) — **0 errors**.
- **Full Release Gate Execution:** Executed immediately afterward in the Phase 7 release check (`validate:content`, `lint`, `typecheck`, `test`, production `build`, and Playwright `test:e2e` against the subpath bundle) and recorded in [`PROGRESS.md`](file:///c:/Users/Windows/Documents/Education/Comptia-Security+/PROGRESS.md).
