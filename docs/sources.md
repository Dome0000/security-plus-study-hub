# แหล่งอ้างอิงและมาตรฐานประกอบการพัฒนาเนื้อหา (`SY0-701`)

> **วันที่ตรวจสอบแหล่งข้อมูลล่าสุด:** 2026-11-24  
> **คำชี้แจง:** เว็บไซต์นี้เป็นสื่อเตรียมสอบอิสระ ไม่ได้เป็นพันธมิตรหรือได้รับการรับรองจาก CompTIA เนื้อหาและข้อสอบฝึกหัดทั้งหมดเขียนขึ้นใหม่เพื่อการศึกษาและป้องกันเชิงรับเท่านั้น ไม่ได้คัดลอกจากหนังสือ คอร์ส หรือ exam dumps ใด ๆ

---

## 1. แหล่งข้อมูลหลักสำหรับโครงสร้างข้อสอบ (Primary Exam Authority)

1. **CompTIA Security+ Certification Official Page (`SY0-701`)**
   - URL: https://www.comptia.org/en-us/certifications/security
   - รายละเอียดที่ยืนยัน: Exam code `SY0-701` (Security+ V7), Launch date November 7, 2023, Max 90 questions, 90 minutes, Passing score 750 (scale 100–900), 5 domains and weights (12% / 22% / 18% / 28% / 20%)
   - Retirement schedule: English — June 11, 2027; Thai/Japanese/Portuguese/Spanish — August 13, 2027 (ตรวจสอบเมื่อ 2026-11-24)
2. **CompTIA Security+ (`SY0-701`) Certification Exam Objectives (Version 5.0)**
   - แหล่งอ้างอิง: CompTIA Security+ SY0-701 Exam Objectives PDF (Version 5.0)
   - ใช้เป็นแหล่งชี้ขาดหลักสำหรับ Domain IDs, Domain weights, 28 Numbered Objectives (`1.1`–`5.6`), subtopics และ official acronym list

---

## 2. แหล่งอ้างอิงมาตรฐานทางเทคนิคและการป้องกันเชิงรับ (Authoritative Defensive Standards)

ใช้ประกอบคำอธิบายเชิงแนวคิด การวิเคราะห์สถานการณ์ และเหตุผลเฉลยข้อสอบ:

1. **NIST Special Publications (National Institute of Standards and Technology)**
   - **NIST SP 800-53 Rev. 5** — Security and Privacy Controls for Information Systems and Organizations (Control categories/types, access controls, configuration management)
   - **NIST SP 800-207** — Zero Trust Architecture (Control Plane, Data Plane, Policy Engine, Policy Administrator, Policy Enforcement Point, Implicit trust zones)
   - **NIST SP 800-61 Rev. 2 / Rev. 3** — Computer Security Incident Handling Guide (Incident Response lifecycle, containment, eradication, recovery, lessons learned)
   - **NIST SP 800-86** — Guide to Integrating Forensic Techniques into Incident Response (Chain of custody, preservation, acquisition, e-discovery)
   - **NIST SP 800-88 Rev. 1** — Guidelines for Media Sanitization (Clearing, purging, destruction, certification)
   - **NIST SP 800-63B** — Digital Identity Guidelines: Authentication and Lifecycle Management (Passwords, MFA, federation, identity proofing)
   - **NIST SP 800-30 / SP 800-34** — Risk Management & Contingency Planning (BIA, SLE/ALE/ARO, RTO/RPO/MTTR/MTBF, DR sites)
   - **NIST SP 800-126** — Security Content Automation Protocol (SCAP)
2. **OWASP Foundation (Open Worldwide Application Security Project)**
   - **OWASP Top 10** — Web Application Security Risks (SQL injection, XSS, broken access control, security misconfiguration, SSRF/CSRF, cryptographic failures)
3. **MITRE ATT&CK® Framework**
   - ใช้ทำความเข้าใจ threat vectors, lateral movement, privilege escalation, persistence และ defense/detection indicators
4. **IETF RFCs & Internet Standards**
   - **RFC 8446 (TLS 1.3)**, **RFC 5280 (X.509 PKI / CRL)**, **RFC 6960 (OCSP)**
   - **RFC 7208 (SPF)**, **RFC 6376 (DKIM)**, **RFC 7489 (DMARC)**
   - **IEEE 802.1X / EAP** — Port-based Network Access Control
   - **Wi-Fi Alliance WPA3** — SAE & forward secrecy
5. **Governance, Risk & Compliance Frameworks**
   - **ISO/IEC 27001 & 27002** — Information Security Management Systems (ISMS) & Controls
   - **SOC 2 Trust Services Criteria (AICPA)** — Third-party audit attestation reports
   - **GDPR / PDPA Concepts** — Data Subject, Data Controller, Data Processor, Data Sovereignty, Right to be Forgotten
   - **FIRST CVSS v3.1 / v4.0** — Common Vulnerability Scoring System
6. **GitHub Actions & GitHub Pages Official Documentation**
   - URL: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
   - ใช้กำหนด CI/CD workflow (`actions/checkout@v4`, `actions/setup-node@v4`, `actions/configure-pages@v5`, `actions/upload-pages-artifact@v3`, `actions/deploy-pages@v4`)
