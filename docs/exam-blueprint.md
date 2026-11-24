# CompTIA Security+ (`SY0-701`) Verified Exam Blueprint

> **Verification Date:** 2026-11-24  
> **Primary Authority:** CompTIA Security+ (`SY0-701`) Official Certification Page & Exam Objectives Version 5.0  
> **Strict Isolation Rule:** เนื้อหา บทเรียน ข้อสอบ และ metadata ทั้งหมดในโครงการนี้อ้างอิงเฉพาะ **`SY0-701`** เท่านั้น ห้ามผสม domains, weights หรือ objective IDs จาก `SY0-601` หรือ `SY0-801`

---

## 1. Official Exam Metadata & Testing Status

| รายการ | ข้อมูลทางการที่ตรวจสอบแล้ว |
| :--- | :--- |
| **Certification Name** | CompTIA Security+ |
| **Exam Code / Series** | `SY0-701` (Security+ V7) |
| **Objectives Version** | Version 5.0 |
| **Launch Date** | November 7, 2023 |
| **Active Testing Status** | **Active** (ณ วันที่ตรวจสอบ `2026-11-24`) |
| **Official Retirement Dates** | **English:** June 11, 2027<br>**Japanese, Portuguese, Spanish, Thai:** August 13, 2027 |
| **Note on Newer Version** | CompTIA เปิดตัว `SY0-801` (V8) เมื่อ November 17, 2026 แต่ทั้งสองเวอร์ชันให้ credential Security+ เดียวกัน ผู้สอบสามารถเลือกสอบ `SY0-701` ได้จนถึงกำหนดเกษียณข้างต้น โครงการนี้ยึด **`SY0-701`** ตาม Project Configuration |
| **Maximum Questions** | สูงสุด **90 ข้อ** (ผสม Multiple-Choice และ Performance-Based Questions: PBQs) |
| **Exam Duration** | **90 นาที** |
| **Official Passing Score** | **750** (บนสเกล 100–900) — *เว็บไซต์นี้ไม่แปลงคะแนนเปอร์เซ็นต์เป็น scaled score และไม่รับประกันผลการสอบ* |
| **Official Languages** | English, Japanese, Portuguese, Spanish, Thai |
| **Recommended Experience** | CompTIA Network+ และประสบการณ์ทำงานด้าน IT Administration ที่เน้น Security ประมาณ 2 ปี (แนะนำ ไม่บังคับ) |

---

## 2. Official Domains & Weight Distribution

| Domain ID | Domain Name | Weight (%) | Numbered Objectives | Target Mock Exam Items (90 Qs, Largest-Remainder) |
| :--- | :--- | :---: | :---: | :---: |
| `D1` (`1.0`) | **General Security Concepts** | **12%** | `1.1` – `1.4` (4 objectives) | **11** (10 MCQ/MSQ + 1 PBQ) |
| `D2` (`2.0`) | **Threats, Vulnerabilities, and Mitigations** | **22%** | `2.1` – `2.5` (5 objectives) | **20** (19 MCQ/MSQ + 1 PBQ) |
| `D3` (`3.0`) | **Security Architecture** | **18%** | `3.1` – `3.4` (4 objectives) | **16** (15 MCQ/MSQ + 1 PBQ) |
| `D4` (`4.0`) | **Security Operations** | **28%** | `4.1` – `4.9` (9 objectives) | **25** (24 MCQ/MSQ + 1 PBQ) |
| `D5` (`5.0`) | **Security Program Management and Oversight** | **20%** | `5.1` – `5.6` (6 objectives) | **18** (17 MCQ/MSQ + 1 PBQ) |
| **Total** | | **100%** | **28 Objectives** | **90 Items** (85 MCQ/MSQ + 5 PBQ) |

> **หมายเหตุการออกแบบ Mock Exam:** สัดส่วน **85 MCQ/MSQ + 5 PBQ = 90 ข้อ** เป็นการออกแบบชุดฝึกหัดเพื่อฝึกทักษะทั้งแบบปรนัยและแบบลงมือปฏิบัติ (PBQ) ไม่ใช่การรับรองจำนวน PBQ ที่ผู้สอบจะพบในการสอบจริงของ CompTIA

---

## 3. Complete Official Objectives & Subtopics (`SY0-701` v5.0)

### Domain 1.0 — General Security Concepts (12%)

- **`1.1` Compare and contrast various types of security controls**
  - Categories: Technical, Managerial, Operational, Physical
  - Control types: Preventive, Deterrent, Detective, Corrective, Compensating, Directive
- **`1.2` Summarize fundamental security concepts**
  - Confidentiality, Integrity, and Availability (CIA)
  - Non-repudiation
  - Authentication, Authorization, and Accounting (AAA): Authenticating people, Authenticating systems, Authorization models
  - Gap analysis
  - Zero Trust:
    - Control Plane: Adaptive identity, Threat scope reduction, Policy-driven access control, Policy Administrator, Policy Engine
    - Data Plane: Implicit trust zones, Subject/System, Policy Enforcement Point (PEP)
  - Physical security: Bollards, Access control vestibule, Fencing, Video surveillance, Security guard, Access badge, Lighting, Sensors (Infrared, Pressure, Microwave, Ultrasonic)
  - Deception and disruption technology: Honeypot, Honeynet, Honeyfile, Honeytoken
- **`1.3` Explain the importance of change management processes and the impact to security**
  - Business processes impacting security operation: Approval process, Ownership, Stakeholders, Impact analysis, Test results, Backout plan, Maintenance window, Standard operating procedure (SOP)
  - Technical implications: Allow lists/deny lists, Restricted activities, Downtime, Service restart, Application restart, Legacy applications, Dependencies
  - Documentation: Updating diagrams, Updating policies/procedures
  - Version control
- **`1.4` Explain the importance of using appropriate cryptographic solutions**
  - Public key infrastructure (PKI): Public key, Private key, Key escrow
  - Encryption: Level (Full-disk, Partition, File, Volume, Database, Record), Transport/communication, Asymmetric, Symmetric, Key exchange, Algorithms, Key length
  - Tools: Trusted Platform Module (TPM), Hardware security module (HSM), Key management system (KMS), Secure enclave, Root of trust
  - Obfuscation: Steganography, Tokenization, Data masking
  - Hashing, Salting, Digital signatures, Key stretching
  - Blockchain: Open public ledger
  - Certificates: Certificate authorities (CAs), Certificate revocation lists (CRLs), Online Certificate Status Protocol (OCSP), Self-signed, Third-party, Wildcard, Root of trust, Certificate signing request (CSR) generation

---

### Domain 2.0 — Threats, Vulnerabilities, and Mitigations (22%)

- **`2.1` Compare and contrast common threat actors and motivations**
  - Threat actors: Nation-state, Unskilled attacker, Hacktivist, Insider threat, Organized crime, Shadow IT
  - Attributes of actors: Internal/external, Resources/funding, Level of sophistication/capability
  - Motivations: Data exfiltration, Espionage, Service disruption, Blackmail, Financial gain, Philosophical/political beliefs, Ethical, Revenge, Disruption/chaos, War
- **`2.2` Explain common threat vectors and attack surfaces**
  - Message-based (email, Short Message Service [SMS], instant messaging [IM]), Image-based, File-based, Voice call, Removable device
  - Vulnerable software (client-based vs. agentless), Unsupported systems and applications
  - Unsecure networks (wireless, wired, Bluetooth), Open service ports, Default credentials
  - Supply chain: Managed service providers (MSPs), vendors, suppliers
  - Human vectors/social engineering: Phishing, vishing, smishing, misinformation/disinformation, impersonation, business email compromise (BEC), pretexting, watering hole, brand impersonation, typosquatting
- **`2.3` Explain various types of vulnerabilities**
  - Application: Memory injection, Buffer overflow, Race conditions (time-of-check [TOC], time-of-use [TOU]), Malicious update
  - Operating system (OS)-based
  - Web-based: Structured Query Language injection (SQLi), Cross-site scripting (XSS)
  - Hardware: Firmware, End-of-life, Legacy
  - Virtualization: Virtual machine (VM) escape, Resource reuse
  - Cloud-specific
  - Supply chain: Service provider, Hardware provider, Software provider
  - Cryptographic, Misconfiguration, Zero-day
  - Mobile device: Side loading, Jailbreaking
- **`2.4` Given a scenario, analyze indicators of malicious activity**
  - Malware attacks: Ransomware, Trojan, Worm, Spyware, Bloatware, Virus, Keylogger, Logic bomb, Rootkit
  - Physical attacks: Brute force, Radio frequency identification (RFID) cloning, Environmental
  - Network attacks: Distributed denial-of-service (DDoS) (amplified, reflected), Domain Name System (DNS) attacks, Wireless, On-path, Credential replay, Malicious code
  - Application attacks: Injection, Buffer overflow, Replay, Privilege escalation, Directory traversal, Forgery, Reflected/Stored
  - Cryptographic attacks: Downgrade, Collision, Birthday
  - Password attacks: Spraying, Brute force
  - Indicators: Account lockout, Concurrent session usage, Blocked content, Impossible travel, Resource consumption, Resource inaccessibility, Out-of-cycle logging, Missing logs
- **`2.5` Explain the purpose of mitigation techniques used to secure the enterprise**
  - Segmentation, Decommissioning, Access control, Isolation, Patching, Encryption, Monitoring, Least privilege, Configuration enforcement
  - Hardening techniques: Access control list (ACL), Permissions, Installation of endpoint protection, Host-based firewall, Application allow list, Host-based intrusion prevention system (HIPS), Disabling ports/protocols, Default password changes, Removal of unnecessary software

---

### Domain 3.0 — Security Architecture (18%)

- **`3.1` Compare and contrast security implications of different architecture models**
  - Architecture and infrastructure concepts: On-premises, Centralized vs. decentralized, Cloud (Responsibility matrix, Hybrid considerations, Third-party vendors), Containerization, Virtualization, IoT, ICS/SCADA, RTOS, Embedded systems, High availability, Compute, Power, Infrastructure as Code (IaC), Serverless, Microservices
  - Network infrastructure: Physical isolation (Air-gapped), Logical segmentation, Software-defined networking (SDN)
  - Considerations: Cost, Responsiveness, Scalability, Ease of deployment, Risk transference, Ease of recovery, Patch availability, Inability to patch
- **`3.2` Given a scenario, apply security principles to secure enterprise infrastructure**
  - Infrastructure considerations: Device placement, Security zones, Attack surface, Connectivity, Failure modes (Fail-open, Fail-closed), Device attributes (Active vs. passive, Inline vs. tap/monitor)
  - Network appliances: Jump server, Proxy server, IPS/IDS, Load balancer, Sensors
  - Port security: 802.1X, Extensible Authentication Protocol (EAP)
  - Firewall types: Web application firewall (WAF), Unified threat management (UTM), Next-generation firewall (NGFW), Layer 4 / Layer 7
  - Secure communication/access: VPN, IPsec, TLS, Secure remote access, SD-WAN, Secure Access Service Edge (SASE)
  - Selection of effective controls
- **`3.3` Compare and contrast concepts and strategies to protect data**
  - Data types: Regulated, Trade secret, Intellectual property, Legal information, Financial information, Human- and non-human-readable
  - Data classifications: Sensitive, Confidential, Public, Restricted
  - Consequences of data leak/loss: Reputation, Fines, Identity theft, IP theft
  - General data considerations: Data states (At rest, In transit, In use), Data sovereignty, Geolocation
  - Methods to secure data: Encryption, Hashing, Masking, Tokenization, Obfuscation, Segmentation, Access restrictions
- **`3.4` Explain the importance of resilience and recovery in security architecture**
  - High availability: Load balancing, Clustering
  - Site considerations: Hot, Warm, Cold, Geographic dispersion
  - Platform diversity, Multi-cloud systems, Continuity of operations
  - Capacity planning: People, Technology, Infrastructure
  - Testing: Tabletop exercises, Failover, Simulation, Parallel processing
  - Backups: Onsite/offsite, Frequency, Encryption, Snapshots, Replication, Journaling
  - Power: Generators, Uninterruptible Power Supply (UPS)

---

### Domain 4.0 — Security Operations (28%)

- **`4.1` Given a scenario, apply common security techniques to computing resources**
  - Secure baselines: Establish, Deploy, Maintain
  - Hardening targets: Mobile devices, Workstations, Switches, Routers, Cloud infrastructure, Servers, ICS/SCADA, Embedded systems, RTOS, IoT devices
  - Wireless devices: Installation considerations (Site surveys, Heat maps), Wireless security settings (WPA3, AAA/RADIUS, Cryptographic protocols, Authentication protocols)
  - Mobile solutions: Mobile device management (MDM), Deployment models (BYOD, COPE, CYOD), Connection methods (Cellular, Wi-Fi, Bluetooth)
- **`4.2` Explain the security implications of proper hardware, software, and data asset management**
  - Acquisition/procurement process
  - Disposal/decommissioning: Sanitization, Destruction, Certification, Data retention
  - Assignment/accounting: Ownership, Classification
  - Monitoring/asset tracking: Inventory, Enumeration
- **`4.3` Explain various activities associated with vulnerability management**
  - Identification methods: Vulnerability scan, Application security (Static analysis, Dynamic analysis, Package monitoring), Threat feed (OSINT, Proprietary/third-party, Information-sharing organization, Dark web), Penetration testing, Responsible disclosure program (Bug bounty program), System/process audit
  - Analysis: Confirmation and remediation (False positive, False negative); Prioritize (CVSS, CVE, Vulnerability classification, Exposure factor, Environmental variables, Industry/organizational impact, Risk tolerance)
  - Vulnerability response: Patching, Insurance, Segmentation, Compensating controls, Exceptions and exemptions
  - Validation of remediation: Rescanning, Audit, Verification
  - Reporting
- **`4.4` Explain security alerting and monitoring concepts and tools**
  - Monitoring computing resources: Systems, Applications, Infrastructure
  - Activities: Log aggregation, Alerting, Scanning, Reporting, Archiving, Alert response and remediation/validation (Quarantine, Alert tuning)
  - Tools: SCAP, Benchmarks, Agents/agentless, SIEM, Antivirus, DLP, SNMP traps, NetFlow, Vulnerability scanners
- **`4.5` Given a scenario, modify enterprise capabilities to enhance security**
  - Firewall: Rules, Access lists, Ports/protocols, Screened subnets
  - IDS/IPS: Signatures, Trends, Transport method
  - DNS filtering, Web filter (Centralized proxy, URL scanning, Content categorization, Block rules, Reputation)
  - Operating system security: Group Policy, SELinux
  - Implementation of secure protocols: Protocol selection, Port selection
  - Email security: DMARC, DKIM, SPF, Gateway
  - File integrity monitoring (FIM), Data loss prevention (DLP), Network access control (NAC), EDR/XDR, User behavior analytics (UBA)
- **`4.6` Given a scenario, implement and maintain identity and access management**
  - Provisioning/de-provisioning user accounts, Permission assignments
  - Password concepts and implications: Best practices (Length, Complexity, Reuse, Expiration, Age), Password managers, Passwordless
  - Identity proofing, Federation, SSO (LDAP, OAuth, SAML), Interoperability, Attestation
  - Access controls: Mandatory (MAC), Discretionary (DAC), Role-based (RBAC), Rule-based, Attribute-based (ABAC), Time-of-day restrictions, Least privilege
  - Multifactor authentication (MFA): Implementations (Biometrics, Hard/soft authentication tokens, Security keys); Factors (Something you know, Something you have, Something you are, Somewhere you are)
  - Privileged access management (PAM) tools: Just-in-time permissions, Password vaulting, Ephemeral credentials
- **`4.7` Explain the importance of automation and orchestration related to secure operations**
  - Use cases of automation and scripting: User provisioning, Resource provisioning, Guard rails, Security groups, Ticket creation, Escalation, Enabling/disabling services and access, Continuous integration and testing, Integrations and APIs
  - Benefits: Efficiency/time saving, Enforcing baselines, Standard infrastructure configurations, Scaling in a secure manner, Employee retention, Reaction time, Workforce multiplier
  - Other considerations: Complexity, Cost, Single point of failure, Technical debt, Ongoing supportability
- **`4.8` Explain appropriate incident response activities**
  - Process: Preparation, Detection, Analysis, Containment, Eradication, Recovery, Lessons learned
  - Training, Testing (Tabletop exercise, Simulation), Root cause analysis, Threat hunting
  - Digital forensics: Legal hold, Chain of custody, Acquisition, Reporting, Preservation, E-discovery
- **`4.9` Given a scenario, use data sources to support an investigation**
  - Log data: Firewall logs, Application logs, Endpoint logs, OS-specific security logs, IPS/IDS logs, Network logs, Metadata
  - Data sources: Vulnerability scans, Automated reports, Dashboards, Packet captures

---

### Domain 5.0 — Security Program Management and Oversight (20%)

- **`5.1` Summarize elements of effective security governance**
  - Guidelines, Policies (AUP, Information security policies, BC, DR, IR, SDLC, Change management), Standards (Password, Access control, Physical, Encryption), Procedures (Change management, Onboarding/offboarding, Playbooks)
  - External considerations: Regulatory, Legal, Industry, Local/regional/national/global
  - Monitoring and revision
  - Types of governance structures: Boards, Committees, Government entities, Centralized/decentralized
  - Roles and responsibilities for systems and data: Owners, Controllers, Processors, Custodians/stewards
- **`5.2` Explain elements of the risk management process**
  - Risk identification: Impact, Probability, Likelihood, Exposure factor
  - Risk assessment: Ad hoc, Recurring, One-time, Continuous
  - Risk analysis: Qualitative, Quantitative (SLE, ALE, ARO)
  - Risk management strategies: Transfer, Accept (Exemption, Exception), Avoid, Mitigate
  - Risk reporting, Risk register (Key risk indicators, Risk owners, Risk threshold), Risk tolerance, Risk appetite (Expansionary, Conservative, Neutral)
  - Business impact analysis (BIA): RTO, RPO, MTTR, MTBF
- **`5.3` Explain the processes associated with third-party risk assessment and management**
  - Vendor assessment: Penetration testing, Right-to-audit clause, Evidence of internal audits, Independent assessments, Supply chain analysis
  - Vendor selection: Due diligence, Conflict of interest
  - Agreement types: SLA, MOA, MOU, MSA, WO/SOW, NDA, BPA
  - Vendor monitoring, Questionnaires, Rules of engagement
- **`5.4` Summarize elements of effective security compliance**
  - Compliance reporting: Internal, External
  - Consequences of non-compliance: Fines, Sanctions, Reputational damage, Loss of license, Contractual impacts
  - Compliance monitoring: Due diligence/care, Attestation and acknowledgement, Automation
  - Privacy: Legal implications (Local/regional/national/global), Data subject, Controller vs. processor, Ownership, Data inventory and retention, Right to be forgotten
- **`5.5` Explain types and purposes of audits and assessments**
  - Attestation
  - Internal: Compliance, Audit committee, Self-assessments
  - External: Regulatory, Examinations, Assessment, Independent third-party audit
  - Penetration testing: Physical, Offensive, Defensive, Integrated, Environments (Known, Partially known, Unknown), Reconnaissance (Passive, Active)
- **`5.6` Given a scenario, implement security awareness practices**
  - Phishing: Campaigns, Recognizing a phishing attempt, Responding to reported suspicious messages
  - Anomalous behavior recognition: Risky, Unexpected, Unintentional
  - User guidance and training: Policy/handbooks, Situational awareness, Insider threat, Password management, Removable media and cables, Social engineering, Operational security (OPSEC), Hybrid/remote work environments
  - Reporting and monitoring: Initial, Recurring
  - Development, Execution
