# Content Coverage Matrix (`SY0-701`)

เอกสารกลางสำหรับตรวจสอบความเชื่อมโยงครบวงจร:
**Official Objective (`1.1`–`5.6`) → Lesson (`L1-01`–`L5-07`) → Question Bank (`Q1-001`–`Q5-060`) → PBQ (`PBQ-D1-01`–`PBQ-D5-03`) → Mock Exam Forms (`A`, `B`, `C`)**

---

## 1. สรุปการจัดสรรระดับ Domain

| Domain | น้ำหนัก | Objectives | บทเรียน (42) | MCQ/MSQ (300) | PBQ (15) | Form A (90) | Form B (90) | Form C (90) | คลังเสริม Practice/Random |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **D1 (1.0)** General Security Concepts | 12% | `1.1`–`1.4` | 6 | 36 | 3 | 10 Q + 1 PBQ | 10 Q + 1 PBQ | 10 Q + 1 PBQ | 6 Q |
| **D2 (2.0)** Threats, Vulnerabilities, and Mitigations | 22% | `2.1`–`2.5` | 9 | 66 | 3 | 19 Q + 1 PBQ | 19 Q + 1 PBQ | 19 Q + 1 PBQ | 9 Q |
| **D3 (3.0)** Security Architecture | 18% | `3.1`–`3.4` | 8 | 54 | 3 | 15 Q + 1 PBQ | 15 Q + 1 PBQ | 15 Q + 1 PBQ | 9 Q |
| **D4 (4.0)** Security Operations | 28% | `4.1`–`4.9` | 12 | 84 | 3 | 24 Q + 1 PBQ | 24 Q + 1 PBQ | 24 Q + 1 PBQ | 12 Q |
| **D5 (5.0)** Security Program Management and Oversight | 20% | `5.1`–`5.6` | 7 | 60 | 3 | 17 Q + 1 PBQ | 17 Q + 1 PBQ | 17 Q + 1 PBQ | 9 Q |
| **รวมทั้งหมด** | **100%** | **28** | **42** | **300** | **15** | **85 + 5 = 90** | **85 + 5 = 90** | **85 + 5 = 90** | **45 Q** |

---

## 2. Objective-by-Objective Coverage Plan

### Domain 1.0 — General Security Concepts (12%)
| Objective | หัวข้อหลัก | Lesson IDs | Question IDs (36 Qs) | PBQ IDs (3) | Mock Exam Coverage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `1.1` | Categories & Control Types | `L1-01` | `Q1-001`..`Q1-009` (9) | `PBQ-D1-01` | Form A, B, C (≥3 Q/form) |
| `1.2` | CIA, Non-repudiation, AAA, Gap Analysis, Zero Trust, Physical, Deception | `L1-02`, `L1-03` | `Q1-010`..`Q1-018` (9) | `PBQ-D1-02` | Form A, B, C (≥2 Q/form) |
| `1.3` | Change Management Processes, Technical Implications, Docs, Version Control | `L1-04` | `Q1-019`..`Q1-027` (9) | — | Form A, B, C (≥2 Q/form) |
| `1.4` | PKI, Encryption Levels, Crypto Tools (TPM/HSM/KMS), Obfuscation, Hashing, Certificates | `L1-05`, `L1-06` | `Q1-028`..`Q1-036` (9) | `PBQ-D1-03` | Form A, B, C (≥3 Q/form) |

### Domain 2.0 — Threats, Vulnerabilities, and Mitigations (22%)
| Objective | หัวข้อหลัก | Lesson IDs | Question IDs (66 Qs) | PBQ IDs (3) | Mock Exam Coverage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `2.1` | Threat Actors, Attributes & Motivations | `L2-01` | `Q2-001`..`Q2-013` (13) | — | Form A, B, C (≥3 Q/form) |
| `2.2` | Threat Vectors, Attack Surfaces, Supply Chain & Social Engineering | `L2-02`, `L2-03` | `Q2-014`..`Q2-026` (13) | `PBQ-D2-01` | Form A, B, C (≥4 Q/form) |
| `2.3` | Application, Web, OS, Hardware, Virtualization, Cloud, Mobile & Zero-day Vulnerabilities | `L2-04`, `L2-05` | `Q2-027`..`Q2-039` (13) | — | Form A, B, C (≥4 Q/form) |
| `2.4` | Indicators of Malicious Activity (Malware, Physical, Network, App, Crypto, Password, IOCs) | `L2-06`, `L2-07`, `L2-08` | `Q2-040`..`Q2-053` (14) | `PBQ-D2-02` | Form A, B, C (≥4 Q/form) |
| `2.5` | Mitigation Techniques & Enterprise Hardening | `L2-09` | `Q2-054`..`Q2-066` (13) | `PBQ-D2-03` | Form A, B, C (≥4 Q/form) |

### Domain 3.0 — Security Architecture (18%)
| Objective | หัวข้อหลัก | Lesson IDs | Question IDs (54 Qs) | PBQ IDs (3) | Mock Exam Coverage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `3.1` | Architecture Models (On-prem, Cloud, Containers, IaC, Serverless, IoT, ICS/SCADA, SDN) | `L3-01`, `L3-02` | `Q3-001`..`Q3-014` (14) | — | Form A, B, C (≥4 Q/form) |
| `3.2` | Securing Enterprise Infrastructure (Placement, Zones, Failure Modes, Firewalls, 802.1X, SASE) | `L3-03`, `L3-04` | `Q3-015`..`Q3-028` (14) | `PBQ-D3-01` | Form A, B, C (≥4 Q/form) |
| `3.3` | Data Protection Strategies (Types, Classifications, States, Sovereignty, Tokenization/Masking) | `L3-05`, `L3-06` | `Q3-029`..`Q3-041` (13) | `PBQ-D3-02` | Form A, B, C (≥3 Q/form) |
| `3.4` | Resilience & Recovery (HA, Hot/Warm/Cold Sites, Testing, Backups, Power) | `L3-07`, `L3-08` | `Q3-042`..`Q3-054` (13) | `PBQ-D3-03` | Form A, B, C (≥4 Q/form) |

### Domain 4.0 — Security Operations (28%)
| Objective | หัวข้อหลัก | Lesson IDs | Question IDs (84 Qs) | PBQ IDs (3) | Mock Exam Coverage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `4.1` | Computing Resource Security (Baselines, Hardening Targets, WPA3/RADIUS, MDM/BYOD) | `L4-01`, `L4-02` | `Q4-001`..`Q4-010` (10) | — | Form A, B, C (≥3 Q/form) |
| `4.2` | Hardware, Software & Data Asset Management (Procurement, Sanitization, Disposal, Tracking) | `L4-03` | `Q4-011`..`Q4-019` (9) | — | Form A, B, C (≥2 Q/form) |
| `4.3` | Vulnerability Management (Scans, SAST/DAST, Feeds, CVSS/CVE, Response, Validation) | `L4-04` | `Q4-020`..`Q4-028` (9) | — | Form A, B, C (≥3 Q/form) |
| `4.4` | Security Alerting & Monitoring (Log Aggregation, SIEM, SCAP, NetFlow, Alert Tuning) | `L4-05` | `Q4-029`..`Q4-037` (9) | — | Form A, B, C (≥2 Q/form) |
| `4.5` | Modifying Enterprise Security Capabilities (Firewall/ACL, IDS/IPS, Proxy, SPF/DKIM/DMARC, GPO/SELinux, EDR/NAC/UBA) | `L4-06`, `L4-07` | `Q4-038`..`Q4-047` (10) | `PBQ-D4-01` | Form A, B, C (≥3 Q/form) |
| `4.6` | Identity & Access Management (Provisioning, Passwords, SSO/SAML/OAuth, MAC/DAC/RBAC/ABAC, MFA, PAM) | `L4-08`, `L4-09` | `Q4-048`..`Q4-056` (9) | — | Form A, B, C (≥3 Q/form) |
| `4.7` | Automation & Orchestration (Use cases, Benefits, Considerations) | `L4-10` | `Q4-057`..`Q4-065` (9) | — | Form A, B, C (≥2 Q/form) |
| `4.8` | Incident Response Process, Tabletop/Simulations, RCA, Threat Hunting & Digital Forensics | `L4-11` | `Q4-066`..`Q4-075` (10) | `PBQ-D4-02` | Form A, B, C (≥3 Q/form) |
| `4.9` | Using Data Sources to Support Investigations (Logs, Vulnerability Scans, PCAPs, Dashboards) | `L4-12` | `Q4-076`..`Q4-084` (9) | `PBQ-D4-03` | Form A, B, C (≥3 Q/form) |

### Domain 5.0 — Security Program Management and Oversight (20%)
| Objective | หัวข้อหลัก | Lesson IDs | Question IDs (60 Qs) | PBQ IDs (3) | Mock Exam Coverage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `5.1` | Effective Security Governance (Guidelines, Policies, Standards, Procedures, Structures, Roles) | `L5-01` | `Q5-001`..`Q5-010` (10) | — | Form A, B, C (≥3 Q/form) |
| `5.2` | Risk Management Process & BIA (SLE/ALE/ARO, Strategies, Risk Register, RTO/RPO/MTTR/MTBF) | `L5-02`, `L5-03` | `Q5-011`..`Q5-020` (10) | `PBQ-D5-01` | Form A, B, C (≥3 Q/form) |
| `5.3` | Third-Party Risk Assessment & Management (Due Diligence, Agreements: SLA/MSA/NDA/MOU/MOA) | `L5-04` | `Q5-021`..`Q5-030` (10) | `PBQ-D5-02` | Form A, B, C (≥3 Q/form) |
| `5.4` | Security Compliance & Privacy (Reporting, Penalties, Due Diligence/Care, Controller/Processor, RTBF) | `L5-05` | `Q5-031`..`Q5-040` (10) | — | Form A, B, C (≥2 Q/form) |
| `5.5` | Audits & Assessments (Internal/External Audits, Attestation, Pentest Environments & Recon) | `L5-06` | `Q5-041`..`Q5-050` (10) | — | Form A, B, C (≥3 Q/form) |
| `5.6` | Security Awareness Practices (Phishing Campaigns, Anomalous Behavior, User Training, OPSEC) | `L5-07` | `Q5-051`..`Q5-060` (10) | `PBQ-D5-03` | Form A, B, C (≥3 Q/form) |

---

## 3. รายการบทเรียนครบทั้ง 42 บท (Lesson Register)

| ID | Domain | Objectives | ชื่อบทเรียน (ไทย / อังกฤษ) |
| :--- | :---: | :---: | :--- |
| `L1-01` | D1 | `1.1` | หมวดหมู่และประเภทของ Security Controls (`Security Control Categories & Types`) |
| `L1-02` | D1 | `1.2` | หลักการ CIA Triad, Non-repudiation, AAA และ Gap Analysis (`Core Security Principles & AAA`) |
| `L1-03` | D1 | `1.2` | สถาปัตยกรรม Zero Trust, Physical Security และ Deception Tech (`Zero Trust, Physical & Deception`) |
| `L1-04` | D1 | `1.3` | กระบวนการ Change Management และผลกระทบด้านความปลอดภัย (`Change Management & Security Impact`) |
| `L1-05` | D1 | `1.4` | พื้นฐานการเข้ารหัส Hashing, Salting, Key Stretching และ Blockchain (`Cryptography Foundations & Integrity`) |
| `L1-06` | D1 | `1.4` | PKI ใบรับรองดิจิทัล Hardware Crypto Tools และ Obfuscation (`PKI, Certificates, HSM/TPM & Obfuscation`) |
| `L2-01` | D2 | `2.1` | Threat Actors คุณลักษณะ และแรงจูงใจในการโจมตี (`Threat Actors, Attributes & Motivations`) |
| `L2-02` | D2 | `2.2` | ช่องทางภัยคุกคามทางเทคนิคและ Supply Chain Attack Surfaces (`Technical Vectors & Supply Chain`) |
| `L2-03` | D2 | `2.2` | Social Engineering และ Human Threat Vectors (`Human Vectors & Social Engineering`) |
| `L2-04` | D2 | `2.3` | ช่องโหว่ระดับ Application, Web และ Operating System (`Application, Web & OS Vulnerabilities`) |
| `L2-05` | D2 | `2.3` | ช่องโหว่ Hardware, Virtualization, Cloud, Mobile และ Zero-Day (`Infra, Cloud, Mobile & Zero-Day Vulns`) |
| `L2-06` | D2 | `2.4` | การวิเคราะห์มัลแวร์และการโจมตีทางกายภาพ (`Malware & Physical Attack Indicators`) |
| `L2-07` | D2 | `2.4` | การโจมตีเครือข่าย ไร้สาย การเข้ารหัส และรหัสผ่าน (`Network, Wireless, Crypto & Password Attacks`) |
| `L2-08` | D2 | `2.4` | การโจมตีแอปพลิเคชันและ Indicators of Compromise (`Application Attacks & System IOCs`) |
| `L2-09` | D2 | `2.5` | เทคนิค Mitigation และการทำ Enterprise Hardening (`Mitigation & Hardening Techniques`) |
| `L3-01` | D3 | `3.1` | สถาปัตยกรรม On-Premises, Cloud, Containers, IaC และ Serverless (`Enterprise & Cloud Architecture Models`) |
| `L3-02` | D3 | `3.1` | IoT, ICS/SCADA, Embedded, RTOS และ Network Segmentation (`OT/IoT, Embedded & Network Isolation`) |
| `L3-03` | D3 | `3.2` | การออกแบบโครงสร้างเครือข่ายปลอดภัย Security Zones และ Failure Modes (`Infrastructure Placement & Failure Modes`) |
| `L3-04` | D3 | `3.2` | Firewalls, Port Security (802.1X) และ Secure Access (VPN/SD-WAN/SASE) (`Firewalls, 802.1X & SASE`) |
| `L3-05` | D3 | `3.3` | การจำแนกข้อมูล ระดับชั้นความลับ และสถานะของข้อมูล (`Data Types, Classification & States`) |
| `L3-06` | D3 | `3.3` | กลยุทธ์ปกป้องข้อมูล: Encryption, Tokenization, Masking และ Data Sovereignty (`Data Protection & Sovereignty`) |
| `L3-07` | D3 | `3.4` | High Availability, DR Sites (Hot/Warm/Cold) และ Power/Capacity (`HA, DR Sites & Capacity Planning`) |
| `L3-08` | D3 | `3.4` | กลยุทธ์ Backup, Replication และ Resilience Testing (`Backups & Resilience Testing`) |
| `L4-01` | D4 | `4.1` | Secure Baselines และการ Hardening อุปกรณ์และโครงสร้างพื้นฐาน (`Baselines & Hardening Targets`) |
| `L4-02` | D4 | `4.1` | ความปลอดภัยเครือข่ายไร้สาย (WPA3/RADIUS) และ Mobile Solutions (MDM) (`Wireless & Mobile Security`) |
| `L4-03` | D4 | `4.2` | การจัดการสินทรัพย์ฮาร์ดแวร์ ซอฟต์แวร์ และข้อมูล (`Asset Management & Sanitization`) |
| `L4-04` | D4 | `4.3` | การบริหารจัดการช่องโหว่ (Vulnerability Management Lifecycle) (`Vulnerability Scanning, CVSS & Remediation`) |
| `L4-05` | D4 | `4.4` | ระบบเฝ้าระวังและแจ้งเตือนความปลอดภัย (SIEM, SCAP, NetFlow, Alert Tuning) (`Security Monitoring & Alerting`) |
| `L4-06` | D4 | `4.5` | การเสริมแกร่ง Firewall, IDS/IPS, DNS/Web Filter และ Email Security (`Perimeter, Filtering & Email Auth`) |
| `L4-07` | D4 | `4.5` | การเสริมแกร่ง OS (GPO/SELinux), FIM, DLP, NAC, EDR/XDR และ UBA (`Endpoint, OS Controls & Detection`) |
| `L4-08` | D4 | `4.6` | Identity Lifecycle, Password Best Practices, Federation และ SSO (`Identity Lifecycle, Federation & SSO`) |
| `L4-09` | D4 | `4.6` | Access Control Models (MAC/DAC/RBAC/ABAC), MFA และ PAM (`Access Controls, MFA & PAM`) |
| `L4-10` | D4 | `4.7` | Automation และ Orchestration ใน Security Operations (`Security Automation & Orchestration`) |
| `L4-11` | D4 | `4.8` | กระบวนการ Incident Response, Threat Hunting และ Digital Forensics (`Incident Response & Forensics`) |
| `L4-12` | D4 | `4.9` | การใช้แหล่งข้อมูล Log และ Telemetry สนับสนุนการสืบสวน (`Investigative Logs & Data Sources`) |
| `L5-01` | D5 | `5.1` | ธรรมาภิบาลความปลอดภัย นโยบาย มาตรฐาน ขั้นตอน และบทบาท (`Security Governance & Data Roles`) |
| `L5-02` | D5 | `5.2` | การระบุ ประเมิน และวิเคราะห์ความเสี่ยง (Qualitative & SLE/ALE/ARO) (`Risk Assessment & Quantitative Analysis`) |
| `L5-03` | D5 | `5.2` | กลยุทธ์จัดการความเสี่ยง, Risk Register และ BIA (RTO/RPO/MTTR/MTBF) (`Risk Response, Register & BIA`) |
| `L5-04` | D5 | `5.3` | การประเมินและบริหารความเสี่ยงบุคคลที่สาม (TPRM & Agreements) (`Third-Party Risk & Vendor Agreements`) |
| `L5-05` | D5 | `5.4` | การปฏิบัติตามข้อกำหนด ความเป็นส่วนตัว และ Due Diligence/Due Care (`Security Compliance & Privacy`) |
| `L5-06` | D5 | `5.5` | การตรวจสอบภายใน/ภายนอก Attestation และ Penetration Testing (`Audits, Attestation & Pentesting`) |
| `L5-07` | D5 | `5.6` | โครงการสร้างความตระหนักรู้ Phishing Campaigns และ OPSEC (`Security Awareness & Phishing Defense`) |

---

## 4. สถานะการตรวจสอบ Coverage จริง

ตรวจสอบผ่าน `npm.cmd run validate:content` (โหมด Production เข้มงวด) เมื่อ `2026-11-24`:

- **Lessons:** `42 / 42` (`L1-01`–`L5-07`) — ครบทั้ง 28 Objectives และแต่ละบทมี Knowledge Checks `>= 3` ข้อ
- **MCQ / MSQ Bank:** `300 / 300` (`Q1-001`–`Q5-060`) — ทุก Objective มีอย่างน้อย 5 ข้อ และกระจายตำแหน่งคำตอบที่ถูกต้องสมดุล (`<= 40%` ต่อ choice ID)
- **Interactive PBQs:** `15 / 15` (`PBQ-D1-01`–`PBQ-D5-03`) — ครบ 5 รูปแบบ template, น้ำหนัก rubric รวมเท่ากับ `1.0` และผ่านการตรวจ expected IDs จริงทุกข้อ
- **Mock Exam Forms (`A`, `B`, `C`):** ครบ 3 ฟอร์ม (`src/data/mockForms.ts`)
  - **Form A (`form-a`):** `85 MCQ/MSQ + 5 PBQ = 90 ข้อ`, 90 นาที, ครอบคลุม `28/28 Objectives`, สัดส่วน Domain `D1:11, D2:20, D3:16, D4:25, D5:18`
  - **Form B (`form-b`):** `85 MCQ/MSQ + 5 PBQ = 90 ข้อ`, 90 นาที, ครอบคลุม `28/28 Objectives`, สัดส่วน Domain `D1:11, D2:20, D3:16, D4:25, D5:18`
  - **Form C (`form-c`):** `85 MCQ/MSQ + 5 PBQ = 90 ข้อ`, 90 นาที, ครอบคลุม `28/28 Objectives`, สัดส่วน Domain `D1:11, D2:20, D3:16, D4:25, D5:18`
  - **ความไม่ซ้ำข้อ (Disjointness):** `A ∩ B = B ∩ C = A ∩ C = ∅` (ใช้ 255 MCQ/MSQ + 15 PBQ และเหลือ 45 MCQ/MSQ ในคลังสำหรับ Practice และ Random Mock)
- **Glossary & Acronyms:** `190` รายการ / **Flashcards:** `87` ใบ / **Study Plan:** `30` วัน
- **Errors:** `0 errors` (`validate:content`, `typecheck`, `lint`, `vitest`, `build`, `playwright test:e2e`)
