import type { ExamMetadata } from '../types/exam';

export const EXAM_METADATA: ExamMetadata = {
  examCode: 'SY0-701',
  examVersion: 'Security+ V7 (Exam Objectives v5.0)',
  certificationName: 'CompTIA Security+',
  launchDate: '2023-11-07',
  status: 'active',
  retirementDateEn: '2027-06-11',
  retirementDateTh: '2027-08-13',
  newerVersionNote:
    'CompTIA เปิดตัว SY0-801 (V8) เมื่อ 2026-11-17 แต่ SY0-701 ยังเปิดสอบอยู่จนถึง 2027-06-11 (ภาษาอังกฤษ) และ 2027-08-13 (ภาษาไทย/ญี่ปุ่น/โปรตุเกส/สเปน) เว็บไซต์นี้ยึดตามขอบเขต SY0-701 อย่างเคร่งครัด',
  verifiedDate: '2026-11-24',
  officialSources: [
    {
      title: 'CompTIA Security+ Official Certification Page',
      url: 'https://www.comptia.org/en-us/certifications/security'
    },
    {
      title: 'CompTIA Security+ SY0-701 Exam Objectives (Version 5.0)',
      url: 'https://www.comptia.org/en-us/certifications/security'
    }
  ],
  maxQuestions: 90,
  durationMinutes: 90,
  officialPassingScore: 750,
  officialScoreScale: '100-900',
  practiceTargetPercent: 80,
  mockFormStructureNote:
    'ชุดสอบจำลอง A, B และ C ออกแบบเป็น 85 MCQ/MSQ + 5 Interactive PBQ (รวม 90 ข้อ เวลา 90 นาที) เพื่อฝึกครบทั้งปรนัยและสถานการณ์จำลอง โดย 5 PBQ เป็นการออกแบบชุดฝึก ไม่ใช่การรับรองจำนวน PBQ ในการสอบจริงของ CompTIA',
  disclaimerTh:
    'เว็บไซต์นี้เป็นสื่อเตรียมสอบอิสระ ไม่ได้เป็นพันธมิตรหรือได้รับการรับรองจาก CompTIA ข้อสอบทั้งหมดเป็นข้อสอบฝึกที่สร้างขึ้นใหม่ ไม่ใช่ข้อสอบจริงหรือ exam dumps และผลการฝึกไม่รับประกันผลการสอบ',
  domains: [
    {
      id: 'D1',
      number: '1.0',
      titleEn: 'General Security Concepts',
      titleTh: 'แนวคิดพื้นฐานด้านความมั่นคงปลอดภัย',
      weightPercent: 12,
      descriptionTh:
        'ประเภทของ security controls, หลัก CIA/AAA/Zero Trust/Physical Security/Deception, กระบวนการ Change Management และพื้นฐาน Cryptography & PKI',
      objectives: [
        {
          id: '1.1',
          domainId: 'D1',
          titleEn: 'Compare and contrast various types of security controls',
          titleTh: 'เปรียบเทียบประเภทและหมวดหมู่ของ Security Controls',
          subtopics: [
            'Categories: Technical, Managerial, Operational, Physical',
            'Control types: Preventive, Deterrent, Detective, Corrective, Compensating, Directive'
          ]
        },
        {
          id: '1.2',
          domainId: 'D1',
          titleEn: 'Summarize fundamental security concepts',
          titleTh: 'สรุปแนวคิดพื้นฐานด้านความมั่นคงปลอดภัย (CIA, AAA, Zero Trust, Physical, Deception)',
          subtopics: [
            'Confidentiality, Integrity, Availability (CIA) & Non-repudiation',
            'AAA (Authenticating people, Authenticating systems, Authorization models)',
            'Gap analysis',
            'Zero Trust (Control Plane: Adaptive identity, Threat scope reduction, Policy-driven access control, Policy Administrator, Policy Engine; Data Plane: Implicit trust zones, Subject/System, Policy Enforcement Point)',
            'Physical security (Bollards, Access control vestibule, Fencing, Video surveillance, Security guard, Access badge, Lighting, Sensors: Infrared/Pressure/Microwave/Ultrasonic)',
            'Deception and disruption technology (Honeypot, Honeynet, Honeyfile, Honeytoken)'
          ]
        },
        {
          id: '1.3',
          domainId: 'D1',
          titleEn: 'Explain the importance of change management processes and the impact to security',
          titleTh: 'อธิบายความสำคัญของกระบวนการ Change Management และผลกระทบต่อความปลอดภัย',
          subtopics: [
            'Business processes (Approval, Ownership, Stakeholders, Impact analysis, Test results, Backout plan, Maintenance window, SOP)',
            'Technical implications (Allow/deny lists, Restricted activities, Downtime, Service/app restart, Legacy applications, Dependencies)',
            'Documentation (Updating diagrams, Updating policies/procedures)',
            'Version control'
          ]
        },
        {
          id: '1.4',
          domainId: 'D1',
          titleEn: 'Explain the importance of using appropriate cryptographic solutions',
          titleTh: 'อธิบายการเลือกใช้โซลูชันการเข้ารหัสและ PKI อย่างเหมาะสม',
          subtopics: [
            'Public key infrastructure (PKI: Public key, Private key, Key escrow)',
            'Encryption (Levels: Full-disk, Partition, File, Volume, Database, Record; Transport/communication; Asymmetric/Symmetric; Key exchange; Algorithms; Key length)',
            'Tools (TPM, HSM, KMS, Secure enclave, Root of trust)',
            'Obfuscation (Steganography, Tokenization, Data masking)',
            'Hashing, Salting, Digital signatures, Key stretching',
            'Blockchain (Open public ledger)',
            'Certificates (CA, CRL, OCSP, Self-signed, Third-party, Wildcard, Root of trust, CSR generation)'
          ]
        }
      ]
    },
    {
      id: 'D2',
      number: '2.0',
      titleEn: 'Threats, Vulnerabilities, and Mitigations',
      titleTh: 'ภัยคุกคาม ช่องโหว่ และการลดความเสี่ยง',
      weightPercent: 22,
      descriptionTh:
        'ผู้โจมตีและแรงจูงใจ, ช่องทางและพื้นผิวการโจมตี, ประเภทของช่องโหว่, การวิเคราะห์ตัวบ่งชี้การโจมตี และเทคนิคการป้องกันและลดความเสี่ยง',
      objectives: [
        {
          id: '2.1',
          domainId: 'D2',
          titleEn: 'Compare and contrast common threat actors and motivations',
          titleTh: 'เปรียบเทียบ Threat Actors คุณลักษณะ และแรงจูงใจในการโจมตี',
          subtopics: [
            'Threat actors (Nation-state, Unskilled attacker, Hacktivist, Insider threat, Organized crime, Shadow IT)',
            'Attributes (Internal/external, Resources/funding, Level of sophistication/capability)',
            'Motivations (Data exfiltration, Espionage, Service disruption, Blackmail, Financial gain, Philosophical/political beliefs, Ethical, Revenge, Disruption/chaos, War)'
          ]
        },
        {
          id: '2.2',
          domainId: 'D2',
          titleEn: 'Explain common threat vectors and attack surfaces',
          titleTh: 'อธิบาย Threat Vectors และ Attack Surfaces ที่พบบ่อย',
          subtopics: [
            'Message-based (Email, SMS, IM), Image-based, File-based, Voice call, Removable device',
            'Vulnerable software (Client-based vs. agentless), Unsupported systems and applications',
            'Unsecure networks (Wireless, Wired, Bluetooth), Open service ports, Default credentials',
            'Supply chain (MSPs, vendors, suppliers)',
            'Human vectors/social engineering (Phishing, Vishing, Smishing, Misinformation/disinformation, Impersonation, BEC, Pretexting, Watering hole, Brand impersonation, Typosquatting)'
          ]
        },
        {
          id: '2.3',
          domainId: 'D2',
          titleEn: 'Explain various types of vulnerabilities',
          titleTh: 'อธิบายประเภทของช่องโหว่ในระบบ แอปพลิเคชัน คลาวด์ และฮาร์ดแวร์',
          subtopics: [
            'Application (Memory injection, Buffer overflow, Race conditions TOC/TOU, Malicious update)',
            'OS-based, Web-based (SQLi, XSS)',
            'Hardware (Firmware, End-of-life, Legacy)',
            'Virtualization (VM escape, Resource reuse) & Cloud-specific',
            'Supply chain (Service/Hardware/Software provider)',
            'Cryptographic, Misconfiguration, Zero-day',
            'Mobile device (Side loading, Jailbreaking)'
          ]
        },
        {
          id: '2.4',
          domainId: 'D2',
          titleEn: 'Given a scenario, analyze indicators of malicious activity',
          titleTh: 'วิเคราะห์ตัวบ่งชี้กิจกรรมประสงค์ร้ายจากสถานการณ์จำลอง',
          subtopics: [
            'Malware attacks (Ransomware, Trojan, Worm, Spyware, Bloatware, Virus, Keylogger, Logic bomb, Rootkit)',
            'Physical attacks (Brute force, RFID cloning, Environmental)',
            'Network attacks (DDoS amplified/reflected, DNS attacks, Wireless, On-path, Credential replay, Malicious code)',
            'Application attacks (Injection, Buffer overflow, Replay, Privilege escalation, Directory traversal, Forgery, Reflected/Stored)',
            'Cryptographic attacks (Downgrade, Collision, Birthday) & Password attacks (Spraying, Brute force)',
            'Indicators (Account lockout, Concurrent session usage, Blocked content, Impossible travel, Resource consumption, Resource inaccessibility, Out-of-cycle logging, Missing logs)'
          ]
        },
        {
          id: '2.5',
          domainId: 'D2',
          titleEn: 'Explain the purpose of mitigation techniques used to secure the enterprise',
          titleTh: 'อธิบายวัตถุประสงค์ของเทคนิค Mitigation และ Hardening ในองค์กร',
          subtopics: [
            'Segmentation, Decommissioning, Access control, Isolation, Patching, Encryption, Monitoring, Least privilege, Configuration enforcement',
            'Hardening techniques (ACL, Permissions, Endpoint protection, Host-based firewall, Application allow list, HIPS, Disabling ports/protocols, Default password changes, Removal of unnecessary software)'
          ]
        }
      ]
    },
    {
      id: 'D3',
      number: '3.0',
      titleEn: 'Security Architecture',
      titleTh: 'สถาปัตยกรรมความมั่นคงปลอดภัย',
      weightPercent: 18,
      descriptionTh:
        'รูปแบบสถาปัตยกรรมระบบและคลาวด์, การออกแบบโครงสร้างพื้นฐานที่ปลอดภัย, กลยุทธ์การปกป้องข้อมูล และความทนทานและการกู้คืนระบบ',
      objectives: [
        {
          id: '3.1',
          domainId: 'D3',
          titleEn: 'Compare and contrast security implications of different architecture models',
          titleTh: 'เปรียบเทียบผลกระทบด้านความปลอดภัยของรูปแบบสถาปัตยกรรมต่าง ๆ',
          subtopics: [
            'Architecture/infrastructure (On-premises, Centralized vs. decentralized, Cloud responsibility matrix/hybrid/third-party, Containerization, Virtualization, IoT, ICS/SCADA, RTOS, Embedded, High availability, Compute, Power, IaC, Serverless, Microservices)',
            'Network infrastructure (Physical isolation/Air-gapped, Logical segmentation, SDN)',
            'Considerations (Cost, Responsiveness, Scalability, Ease of deployment, Risk transference, Ease of recovery, Patch availability, Inability to patch)'
          ]
        },
        {
          id: '3.2',
          domainId: 'D3',
          titleEn: 'Given a scenario, apply security principles to secure enterprise infrastructure',
          titleTh: 'ประยุกต์หลักความปลอดภัยกับโครงสร้างพื้นฐานและอุปกรณ์เครือข่ายองค์กร',
          subtopics: [
            'Infrastructure considerations (Device placement, Security zones, Attack surface, Connectivity, Failure modes: Fail-open/Fail-closed, Device attributes: Active/passive, Inline/tap-monitor)',
            'Network appliances (Jump server, Proxy server, IPS/IDS, Load balancer, Sensors)',
            'Port security (802.1X, EAP)',
            'Firewall types (WAF, UTM, NGFW, Layer 4 / Layer 7)',
            'Secure communication/access (VPN, IPsec, TLS, Secure remote access, SD-WAN, SASE)',
            'Selection of effective controls'
          ]
        },
        {
          id: '3.3',
          domainId: 'D3',
          titleEn: 'Compare and contrast concepts and strategies to protect data',
          titleTh: 'เปรียบเทียบแนวคิดและกลยุทธ์ในการจำแนกและปกป้องข้อมูล',
          subtopics: [
            'Data types (Regulated, Trade secret, IP, Legal, Financial, Human/non-human-readable)',
            'Data classifications (Sensitive, Confidential, Public, Restricted)',
            'Consequences of data leak/loss (Reputation, Fines, Identity theft, IP theft)',
            'General considerations (Data states: At rest, In transit, In use; Data sovereignty; Geolocation)',
            'Methods to secure data (Encryption, Hashing, Masking, Tokenization, Obfuscation, Segmentation, Access restrictions)'
          ]
        },
        {
          id: '3.4',
          domainId: 'D3',
          titleEn: 'Explain the importance of resilience and recovery in security architecture',
          titleTh: 'อธิบายความสำคัญของความยืดหยุ่นทางระบบ (Resilience) และการกู้คืนระบบ',
          subtopics: [
            'High availability (Load balancing, Clustering)',
            'Site considerations (Hot, Warm, Cold, Geographic dispersion)',
            'Platform diversity, Multi-cloud systems, Continuity of operations',
            'Capacity planning (People, Technology, Infrastructure)',
            'Testing (Tabletop exercises, Failover, Simulation, Parallel processing)',
            'Backups (Onsite/offsite, Frequency, Encryption, Snapshots, Replication, Journaling)',
            'Power (Generators, UPS)'
          ]
        }
      ]
    },
    {
      id: 'D4',
      number: '4.0',
      titleEn: 'Security Operations',
      titleTh: 'การปฏิบัติการด้านความมั่นคงปลอดภัย',
      weightPercent: 28,
      descriptionTh:
        'การทำให้ระบบปลอดภัย, การจัดการสินทรัพย์, ช่องโหว่, การเฝ้าระวังและแจ้งเตือน, การปรับปรุงการป้องกัน, IAM, Automation, Incident Response และการสืบสวนจากหลักฐานข้อมูล',
      objectives: [
        {
          id: '4.1',
          domainId: 'D4',
          titleEn: 'Given a scenario, apply common security techniques to computing resources',
          titleTh: 'ประยุกต์เทคนิค Hardening, Wireless และ Mobile Security กับทรัพยากรคอมพิวเตอร์',
          subtopics: [
            'Secure baselines (Establish, Deploy, Maintain)',
            'Hardening targets (Mobile, Workstations, Switches, Routers, Cloud, Servers, ICS/SCADA, Embedded, RTOS, IoT)',
            'Wireless devices (Site surveys, Heat maps, WPA3, AAA/RADIUS, Cryptographic/Authentication protocols)',
            'Mobile solutions (MDM, Deployment models: BYOD/COPE/CYOD, Connections: Cellular/Wi-Fi/Bluetooth)'
          ]
        },
        {
          id: '4.2',
          domainId: 'D4',
          titleEn: 'Explain the security implications of proper hardware, software, and data asset management',
          titleTh: 'อธิบายผลกระทบด้านความปลอดภัยของการจัดการสินทรัพย์ตลอดวงจรชีวิต',
          subtopics: [
            'Acquisition/procurement process',
            'Disposal/decommissioning (Sanitization, Destruction, Certification, Data retention)',
            'Assignment/accounting (Ownership, Classification)',
            'Monitoring/asset tracking (Inventory, Enumeration)'
          ]
        },
        {
          id: '4.3',
          domainId: 'D4',
          titleEn: 'Explain various activities associated with vulnerability management',
          titleTh: 'อธิบายกิจกรรมในกระบวนการ Vulnerability Management ครบวงจร',
          subtopics: [
            'Identification (Vulnerability scan, Static/Dynamic analysis, Package monitoring, Threat feeds: OSINT/Proprietary/Info-sharing/Dark web, Pentest, Responsible disclosure/Bug bounty, Audit)',
            'Analysis (False positive/negative, CVSS, CVE, Classification, Exposure factor, Environmental variables, Impact, Risk tolerance)',
            'Response (Patching, Insurance, Segmentation, Compensating controls, Exceptions/exemptions)',
            'Validation of remediation (Rescanning, Audit, Verification) & Reporting'
          ]
        },
        {
          id: '4.4',
          domainId: 'D4',
          titleEn: 'Explain security alerting and monitoring concepts and tools',
          titleTh: 'อธิบายแนวคิดและเครื่องมือสำหรับการเฝ้าระวังและแจ้งเตือนความปลอดภัย',
          subtopics: [
            'Monitoring computing resources (Systems, Applications, Infrastructure)',
            'Activities (Log aggregation, Alerting, Scanning, Reporting, Archiving, Quarantine, Alert tuning)',
            'Tools (SCAP, Benchmarks, Agents/agentless, SIEM, Antivirus, DLP, SNMP traps, NetFlow, Vulnerability scanners)'
          ]
        },
        {
          id: '4.5',
          domainId: 'D4',
          titleEn: 'Given a scenario, modify enterprise capabilities to enhance security',
          titleTh: 'ปรับแต่งความสามารถของระบบองค์กรเพื่อยกระดับการป้องกัน',
          subtopics: [
            'Firewall (Rules, ACLs, Ports/protocols, Screened subnets) & IDS/IPS (Signatures, Trends, Transport method)',
            'DNS filtering & Web filter (Centralized proxy, URL scanning, Categorization, Block rules, Reputation)',
            'OS security (Group Policy, SELinux) & Secure protocols (Protocol/Port selection)',
            'Email security (DMARC, DKIM, SPF, Gateway)',
            'FIM, DLP, NAC, EDR/XDR, User behavior analytics'
          ]
        },
        {
          id: '4.6',
          domainId: 'D4',
          titleEn: 'Given a scenario, implement and maintain identity and access management',
          titleTh: 'ออกแบบและดูแลระบบ Identity and Access Management (IAM)',
          subtopics: [
            'Provisioning/de-provisioning, Permission assignments, Password concepts (Length, Complexity, Reuse, Expiration, Age, Password managers, Passwordless)',
            'Identity proofing, Federation, SSO (LDAP, OAuth, SAML), Interoperability, Attestation',
            'Access controls (MAC, DAC, RBAC, Rule-based, ABAC, Time-of-day, Least privilege)',
            'MFA (Biometrics, Hard/soft tokens, Security keys; Factors: know, have, are, somewhere)',
            'PAM tools (Just-in-time permissions, Password vaulting, Ephemeral credentials)'
          ]
        },
        {
          id: '4.7',
          domainId: 'D4',
          titleEn: 'Explain the importance of automation and orchestration related to secure operations',
          titleTh: 'อธิบายความสำคัญ ข้อดี และข้อควรระวังของ Automation และ Orchestration',
          subtopics: [
            'Use cases (User/resource provisioning, Guard rails, Security groups, Ticket creation, Escalation, Enabling/disabling services/access, CI/testing, Integrations/APIs)',
            'Benefits (Efficiency/time saving, Enforcing baselines, Standard configs, Secure scaling, Employee retention, Reaction time, Workforce multiplier)',
            'Considerations (Complexity, Cost, Single point of failure, Technical debt, Ongoing supportability)'
          ]
        },
        {
          id: '4.8',
          domainId: 'D4',
          titleEn: 'Explain appropriate incident response activities',
          titleTh: 'อธิบายกระบวนการ Incident Response และพื้นฐาน Digital Forensics',
          subtopics: [
            'Process (Preparation, Detection, Analysis, Containment, Eradication, Recovery, Lessons learned)',
            'Training, Testing (Tabletop exercise, Simulation), Root cause analysis, Threat hunting',
            'Digital forensics (Legal hold, Chain of custody, Acquisition, Reporting, Preservation, E-discovery)'
          ]
        },
        {
          id: '4.9',
          domainId: 'D4',
          titleEn: 'Given a scenario, use data sources to support an investigation',
          titleTh: 'ใช้ข้อมูล Log และ Telemetry จากหลายแหล่งในการสืบสวนเหตุการณ์',
          subtopics: [
            'Log data (Firewall, Application, Endpoint, OS-specific security, IPS/IDS, Network, Metadata)',
            'Data sources (Vulnerability scans, Automated reports, Dashboards, Packet captures)'
          ]
        }
      ]
    },
    {
      id: 'D5',
      number: '5.0',
      titleEn: 'Security Program Management and Oversight',
      titleTh: 'การกำกับดูแลและบริหารโครงการความมั่นคงปลอดภัย',
      weightPercent: 20,
      descriptionTh:
        'ธรรมาภิบาลความปลอดภัย, การบริหารความเสี่ยงและ BIA, ความเสี่ยงจากบุคคลที่สาม, การปฏิบัติตามข้อกำหนดและความเป็นส่วนตัว, การตรวจสอบและ Pentest, และการสร้างความตระหนักรู้',
      objectives: [
        {
          id: '5.1',
          domainId: 'D5',
          titleEn: 'Summarize elements of effective security governance',
          titleTh: 'สรุปองค์ประกอบของ Security Governance และบทบาทหน้าที่ต่อข้อมูล',
          subtopics: [
            'Guidelines, Policies (AUP, InfoSec, BC, DR, IR, SDLC, Change management), Standards, Procedures',
            'External considerations (Regulatory, Legal, Industry, Local/regional/national/global), Monitoring and revision',
            'Governance structures (Boards, Committees, Government entities, Centralized/decentralized)',
            'Roles/responsibilities (Owners, Controllers, Processors, Custodians/stewards)'
          ]
        },
        {
          id: '5.2',
          domainId: 'D5',
          titleEn: 'Explain elements of the risk management process',
          titleTh: 'อธิบายกระบวนการบริหารความเสี่ยงและการวิเคราะห์ผลกระทบทางธุรกิจ (BIA)',
          subtopics: [
            'Risk identification (Impact, Probability, Likelihood, Exposure factor)',
            'Risk assessment (Ad hoc, Recurring, One-time, Continuous) & Analysis (Qualitative, Quantitative: SLE, ALE, ARO)',
            'Strategies (Transfer, Accept: Exemption/Exception, Avoid, Mitigate)',
            'Risk reporting, Risk register (KRIs, Risk owners, Risk threshold), Risk tolerance, Risk appetite (Expansionary, Conservative, Neutral)',
            'Business impact analysis (RTO, RPO, MTTR, MTBF)'
          ]
        },
        {
          id: '5.3',
          domainId: 'D5',
          titleEn: 'Explain the processes associated with third-party risk assessment and management',
          titleTh: 'อธิบายการประเมินและจัดการความเสี่ยงจากผู้ให้บริการภายนอก (Third-Party Risk)',
          subtopics: [
            'Vendor assessment (Pentest, Right-to-audit, Evidence of internal audits, Independent assessments, Supply chain analysis)',
            'Vendor selection (Due diligence, Conflict of interest)',
            'Agreement types (SLA, MOA, MOU, MSA, WO/SOW, NDA, BPA)',
            'Vendor monitoring, Questionnaires, Rules of engagement'
          ]
        },
        {
          id: '5.4',
          domainId: 'D5',
          titleEn: 'Summarize elements of effective security compliance',
          titleTh: 'สรุปองค์ประกอบของ Security Compliance และข้อกำหนดด้านความเป็นส่วนตัว',
          subtopics: [
            'Compliance reporting (Internal, External)',
            'Consequences of non-compliance (Fines, Sanctions, Reputational damage, Loss of license, Contractual impacts)',
            'Compliance monitoring (Due diligence/care, Attestation & acknowledgement, Automation)',
            'Privacy (Legal implications, Local/regional/national/global, Data subject, Controller vs. processor, Ownership, Data inventory & retention, Right to be forgotten)'
          ]
        },
        {
          id: '5.5',
          domainId: 'D5',
          titleEn: 'Explain types and purposes of audits and assessments',
          titleTh: 'อธิบายประเภทและวัตถุประสงค์ของการตรวจสอบ (Audits) และ Penetration Testing',
          subtopics: [
            'Attestation',
            'Internal (Compliance, Audit committee, Self-assessments) & External (Regulatory, Examinations, Assessment, Independent third-party audit)',
            'Penetration testing (Physical, Offensive, Defensive, Integrated; Environments: Known, Partially known, Unknown; Reconnaissance: Passive, Active)'
          ]
        },
        {
          id: '5.6',
          domainId: 'D5',
          titleEn: 'Given a scenario, implement security awareness practices',
          titleTh: 'วางแผนและดำเนินโครงการสร้างความตระหนักรู้ด้านความปลอดภัย (Security Awareness)',
          subtopics: [
            'Phishing (Campaigns, Recognizing phishing, Responding to reported suspicious messages)',
            'Anomalous behavior recognition (Risky, Unexpected, Unintentional)',
            'User guidance & training (Policy/handbooks, Situational awareness, Insider threat, Password management, Removable media/cables, Social engineering, OPSEC, Hybrid/remote work)',
            'Reporting and monitoring (Initial, Recurring), Development, Execution'
          ]
        }
      ]
    }
  ]
};
