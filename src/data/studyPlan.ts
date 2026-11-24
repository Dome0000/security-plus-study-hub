import type { StudyPlanDay } from '../types';

export const STUDY_PLAN_DAYS: StudyPlanDay[] = [
  {
    day: 1,
    phaseTh: 'ช่วงที่ 1: ปูพื้นฐานและกรอบแนวคิด (D1 & D2)',
    titleTh: 'หมวดหมู่ Security Controls, CIA Triad, Non-repudiation และ AAA',
    dayType: 'study',
    estimatedMinutes: 80,
    lessonIds: ['L1-01', 'L1-02'],
    objectiveIds: ['1.1', '1.2'],
    practiceTargetCount: 15,
    tasksTh: [
      'อ่านบทเรียน L1-01 เพื่อจำแนก 4 Control Categories และ 6 Control Types ให้แม่นยำ',
      'อ่านบทเรียน L1-02 ทำความเข้าใจ CIA Triad, Non-repudiation, AAA และ Gap Analysis',
      'ทบทวนคำศัพท์ CIA, AAA, Non-repudiation และ Compensating Control ในคลังคำศัพท์',
      'ทำข้อสอบฝึกหัด Objective 1.1–1.2 จำนวน 15 ข้อ พร้อมอ่านคำอธิบายตัวลวงทุกข้อ'
    ],
    focusTipTh:
      'แยกให้ออกระหว่าง Control Category (กลไกทำงานอย่างไร: Technical/Physical/Operational/Managerial) กับ Control Type (ทำหน้าที่ช่วงใด: Preventive/Deterrent/Detective/Corrective/Compensating/Directive)'
  },
  {
    day: 2,
    phaseTh: 'ช่วงที่ 1: ปูพื้นฐานและกรอบแนวคิด (D1 & D2)',
    titleTh: 'Zero Trust, Physical Security, Deception และ Change Management',
    dayType: 'study',
    estimatedMinutes: 85,
    lessonIds: ['L1-03', 'L1-04'],
    objectiveIds: ['1.2', '1.3'],
    practiceTargetCount: 15,
    tasksTh: [
      'อ่านบทเรียน L1-03 เจาะลึก Zero Trust Control Plane (PE/PA) vs Data Plane (PEP), Physical Controls และ Deception Tech',
      'อ่านบทเรียน L1-04 ทำความเข้าใจกระบวนการ Change Management, Backout Plan, Maintenance Window และ Version Control',
      'ฝึก Flashcards หมวด D1 เพื่อแยกความแตกต่างระหว่าง PE, PA, PEP และ Honeypot/Honeytoken',
      'ทำข้อสอบฝึกหัด Objective 1.2–1.3 จำนวน 15 ข้อ'
    ],
    focusTipTh:
      'ข้อสอบมักหลอกว่า Policy Enforcement Point (PEP) อยู่ใน Control Plane แต่ความจริง PEP อยู่ใน Data Plane ส่วน Policy Engine และ Policy Administrator อยู่ใน Control Plane'
  },
  {
    day: 3,
    phaseTh: 'ช่วงที่ 1: ปูพื้นฐานและกรอบแนวคิด (D1 & D2)',
    titleTh: 'Cryptography Foundations, PKI, TPM/HSM/KMS และ Obfuscation',
    dayType: 'study',
    estimatedMinutes: 90,
    lessonIds: ['L1-05', 'L1-06'],
    objectiveIds: ['1.4'],
    practiceTargetCount: 15,
    tasksTh: [
      'อ่านบทเรียน L1-05 เปรียบเทียบ Symmetric vs Asymmetric, Hashing, Salting, Key Stretching และ Digital Signatures',
      'อ่านบทเรียน L1-06 เจาะลึก PKI, ใบรับรองดิจิทัล (CA/CRL/OCSP/CSR), TPM, HSM, KMS, Tokenization และ Data Masking',
      'ทบทวนเปรียบเทียบ CRL vs OCSP และ Tokenization vs Encryption vs Masking ใน Flashcards',
      'ทำข้อสอบฝึกหัด Objective 1.4 จำนวน 15 ข้อ'
    ],
    focusTipTh:
      'จำจุดต่างให้ชัด: TPM เป็นชิปบนเมนบอร์ดผูกกับเครื่องเดียว ส่วน HSM เป็นอุปกรณ์เฉพาะจัดการคีย์ระดับองค์กร และ CRL เช็กแบบรายการย้อนหลัง ขณะที่ OCSP เช็กสถานะใบรับรองแบบเรียลไทม์'
  },
  {
    day: 4,
    phaseTh: 'ช่วงที่ 1: ปูพื้นฐานและกรอบแนวคิด (D1 & D2)',
    titleTh: 'Threat Actors, Threat Vectors, Supply Chain และ Social Engineering',
    dayType: 'study',
    estimatedMinutes: 105,
    lessonIds: ['L2-01', 'L2-02', 'L2-03'],
    objectiveIds: ['2.1', '2.2'],
    practiceTargetCount: 15,
    tasksTh: [
      'อ่านบทเรียน L2-01 วิเคราะห์คุณลักษณะและแรงจูงใจของ Nation-State, Organized Crime, Hacktivist, Insider และ Shadow IT',
      'อ่านบทเรียน L2-02 ทำความเข้าใจช่องทางโจมตีทางเทคนิค (Open Ports, Default Creds, Agentless vs Client-based) และ Supply Chain',
      'อ่านบทเรียน L2-03 แยกแยะเทคนิค Social Engineering (Phishing, Vishing, Smishing, BEC, Pretexting, Watering Hole, Typosquatting)',
      'ทำข้อสอบฝึกหัด Objective 2.1–2.2 จำนวน 15 ข้อ'
    ],
    focusTipTh:
      'สังเกตความต่างระหว่าง Typosquatting (จดโดเมนปลอมให้คล้ายของจริง) กับ Watering Hole (แฮกเว็บจริงที่กลุ่มเป้าหมายเข้าประจำ) และจำลักษณะของ BEC ที่มักใช้การสวมรอยผู้บริหารหรือคู่ค้า'
  },
  {
    day: 5,
    phaseTh: 'ช่วงที่ 1: ปูพื้นฐานและกรอบแนวคิด (D1 & D2)',
    titleTh: 'ทบทวน Domain 1 ครบชุด + D2 (2.1–2.2) และฝึก PBQ ชุดแรก',
    dayType: 'review',
    estimatedMinutes: 80,
    lessonIds: ['L1-01', 'L1-03', 'L1-06', 'L2-03'],
    objectiveIds: ['1.1', '1.2', '1.3', '1.4', '2.1', '2.2'],
    practiceTargetCount: 20,
    tasksTh: [
      'ทบทวน Flashcards ทั้งหมดใน Domain 1 และคัดการ์ดที่กด Again มาทำความเข้าใจซ้ำ',
      'ฝึกทำ Interactive PBQ ของ Domain 1 (จำแนก Controls, Zero Trust/Physical, PKI/Crypto)',
      'สรุป Mind Map เปรียบเทียบ Social Engineering และ Supply Chain Threat Vectors',
      'ทำข้อสอบทบทวนแบบคละหัวข้อ D1 และ D2 (2.1–2.2) จำนวน 20 ข้อ'
    ],
    focusTipTh:
      'อย่าเพิ่งรีบจำศัพท์แบบท่องจำ ให้ฝึกตั้งคำถามว่า "ถ้าเหตุการณ์เกิดในบริษัทจริง ควรเลือก Control หรือแนวทางใดก่อน"'
  },
  {
    day: 6,
    phaseTh: 'ช่วงที่ 1: ปูพื้นฐานและกรอบแนวคิด (D1 & D2)',
    titleTh: 'ช่องโหว่ระดับ App, Web, OS, Cloud, Mobile และมัลแวร์/กายภาพ',
    dayType: 'study',
    estimatedMinutes: 110,
    lessonIds: ['L2-04', 'L2-05', 'L2-06'],
    objectiveIds: ['2.3', '2.4'],
    practiceTargetCount: 15,
    tasksTh: [
      'อ่านบทเรียน L2-04 ทำความเข้าใจ SQLi, XSS, Buffer Overflow และ Race Condition (TOC/TOU)',
      'อ่านบทเรียน L2-05 วิเคราะห์ VM Escape, Resource Reuse, Firmware/EOL, Cloud, Mobile (Side Loading/Jailbreaking) และ Zero-Day',
      'อ่านบทเรียน L2-06 แยกแยะ Ransomware, Rootkit, Logic Bomb, Worm, Trojan และการโจมตีทางกายภาพ (RFID Cloning)',
      'ทำข้อสอบฝึกหัด Objective 2.3–2.4 จำนวน 15 ข้อ'
    ],
    focusTipTh:
      'เชื่อมโยงช่องโหว่กับวิธีป้องกันเสมอ เช่น SQLi แก้ด้วย Parameterized Queries, TOC/TOU แก้ด้วย Locking/Atomic Operations และ Firmware/EOL แก้ด้วย Patching หรือ Isolation/Decommissioning'
  },
  {
    day: 7,
    phaseTh: 'ช่วงที่ 1: ปูพื้นฐานและกรอบแนวคิด (D1 & D2)',
    titleTh: 'การโจมตีเครือข่าย/แอปพลิเคชัน, IOCs และการทำ Enterprise Hardening',
    dayType: 'study',
    estimatedMinutes: 110,
    lessonIds: ['L2-07', 'L2-08', 'L2-09'],
    objectiveIds: ['2.4', '2.5'],
    practiceTargetCount: 20,
    tasksTh: [
      'อ่านบทเรียน L2-07 เจาะลึก DDoS (Amplified/Reflected), DNS Attacks, On-Path, Downgrade/Collision และ Password Spraying vs Brute Force',
      'อ่านบทเรียน L2-08 วิเคราะห์ Application Attacks (CSRF/SSRF/Directory Traversal/Privilege Escalation) และ IOCs (Impossible Travel/Missing Logs)',
      'อ่านบทเรียน L2-09 สรุปเทคนิค Mitigation และ Enterprise Hardening (Segmentation, Allow-listing, HIPS, Least Privilege)',
      'ทำข้อสอบฝึกหัด Objective 2.4–2.5 จำนวน 20 ข้อ'
    ],
    focusTipTh:
      'Password Spraying ใช้รหัสผ่านยอดนิยมไม่กี่คำลองกับหลายบัญชีเพื่อเลี่ยง Account Lockout ต่างจาก Brute Force ที่ยิงหลายรหัสผ่านใส่บัญชีเดียว'
  },
  {
    day: 8,
    phaseTh: 'ช่วงที่ 2: สถาปัตยกรรมและความทนทาน (D3)',
    titleTh: 'Cloud, Containers, IaC, OT/ICS/SCADA และ Security Zones',
    dayType: 'study',
    estimatedMinutes: 105,
    lessonIds: ['L3-01', 'L3-02', 'L3-03'],
    objectiveIds: ['3.1', '3.2'],
    practiceTargetCount: 15,
    tasksTh: [
      'อ่านบทเรียน L3-01 เปรียบเทียบ On-Prem, Cloud Responsibility Matrix, Containerization, IaC และ Serverless',
      'อ่านบทเรียน L3-02 เจาะลึก IoT, ICS/SCADA, RTOS, Embedded Systems, Air-Gapped และ SDN',
      'อ่านบทเรียน L3-03 เข้าใจ Device Placement, Screened Subnet, Fail-Open vs Fail-Closed และ Inline vs Passive Tap',
      'ทำข้อสอบฝึกหัด Objective 3.1–3.2 จำนวน 15 ข้อ'
    ],
    focusTipTh:
      'ระบบ ICS/SCADA และ RTOS ให้ความสำคัญกับ Availability และ Safety สูงสุด มักแพตช์ทันทีไม่ได้ จึงนิยมใช้ Physical/Logical Isolation และ Compensating Controls'
  },
  {
    day: 9,
    phaseTh: 'ช่วงที่ 2: สถาปัตยกรรมและความทนทาน (D3)',
    titleTh: 'Firewalls, 802.1X, VPN/SD-WAN/SASE และการปกป้องข้อมูล',
    dayType: 'study',
    estimatedMinutes: 105,
    lessonIds: ['L3-04', 'L3-05', 'L3-06'],
    objectiveIds: ['3.2', '3.3'],
    practiceTargetCount: 15,
    tasksTh: [
      'อ่านบทเรียน L3-04 เปรียบเทียบ WAF, NGFW, UTM, L4/L7 Firewall, 802.1X/EAP และ VPN/IPsec/TLS/SD-WAN/SASE',
      'อ่านบทเรียน L3-05 แยกประเภทข้อมูล ระดับชั้นความลับ (Public/Sensitive/Confidential/Restricted) และ Data States (Rest/Transit/Use)',
      'อ่านบทเรียน L3-06 สรุปกลยุทธ์ปกป้องข้อมูล: Encryption, Hashing, Masking, Tokenization และ Data Sovereignty/Geolocation',
      'ทำข้อสอบฝึกหัด Objective 3.2–3.3 จำนวน 15 ข้อ'
    ],
    focusTipTh:
      'จำบทบาทของเครื่องมือป้องกันข้อมูลตามสถานะ: Data at Rest ใช้ Full-Disk/DB Encryption, Data in Transit ใช้ TLS/IPsec และ Data in Use ใช้ Secure Enclave หรือ Confidential Computing'
  },
  {
    day: 10,
    phaseTh: 'ช่วงที่ 2: สถาปัตยกรรมและความทนทาน (D3)',
    titleTh: 'High Availability, DR Sites (Hot/Warm/Cold), Backup และ Testing',
    dayType: 'study',
    estimatedMinutes: 80,
    lessonIds: ['L3-07', 'L3-08'],
    objectiveIds: ['3.4'],
    practiceTargetCount: 15,
    tasksTh: [
      'อ่านบทเรียน L3-07 เปรียบเทียบ Clustering/Load Balancing, Hot/Warm/Cold Sites, Geographic Dispersion และ UPS vs Generator',
      'อ่านบทเรียน L3-08 ทำความเข้าใจ Backup (Onsite/Offsite/Snapshots/Replication/Journaling) และ Resilience Testing (Tabletop/Failover/Parallel)',
      'ทบทวน Flashcards ใน Domain 3 เพื่อเปรียบเทียบต้นทุนและเวลาฟื้นตัวของ Hot, Warm และ Cold Sites',
      'ทำข้อสอบฝึกหัด Objective 3.4 จำนวน 15 ข้อ'
    ],
    focusTipTh:
      'UPS ให้พลังงานสำรองชั่วคราวทันทีเพื่อป้องกันไฟกระชากและให้เวลาระบบปิดตัวอย่างปลอดภัยหรือรอ Generator ติดเครื่อง ไม่ใช่แหล่งจ่ายไฟระยะยาวหลายวัน'
  },
  {
    day: 11,
    phaseTh: 'ช่วงที่ 2: สถาปัตยกรรมและความทนทาน (D3)',
    titleTh: 'ทบทวนเข้ม Domain 2 & Domain 3 พร้อมฝึก PBQ สถาปัตยกรรม',
    dayType: 'review',
    estimatedMinutes: 90,
    lessonIds: ['L2-07', 'L2-09', 'L3-03', 'L3-04', 'L3-07'],
    objectiveIds: ['2.4', '2.5', '3.1', '3.2', '3.3', '3.4'],
    practiceTargetCount: 20,
    tasksTh: [
      'ทบทวน Flashcards ของ Domain 2 และ Domain 3 ทั้งหมด โดยเน้นการ์ดที่ยังไม่แม่นยำ',
      'ฝึกทำ Interactive PBQ ของ Domain 2 และ Domain 3 (Firewall Rules, Network Placement, Data Protection & DR)',
      'เปรียบเทียบ Forward Proxy vs Reverse Proxy vs WAF vs NGFW vs UTM และ Fail-open vs Fail-closed',
      'ทำข้อสอบฝึกหัดคละหัวข้อ D2–D3 จำนวน 20 ข้อ'
    ],
    focusTipTh:
      'เวลาทำโจทย์ Placement ใน PBQ ให้ดูทิศทางทราฟฟิกเสมอ: ผู้ใช้ภายในออกเน็ตผ่าน Forward Proxy, แอปเว็บจากภายนอกผ่าน WAF/Reverse Proxy, ผู้ดูแลเข้าจัดการเซิร์ฟเวอร์ผ่าน Jump Server'
  },
  {
    day: 12,
    phaseTh: 'ช่วงที่ 3: ปฏิบัติการความปลอดภัย (D4 - 28%)',
    titleTh: 'Secure Baselines, Wireless (WPA3/RADIUS), MDM และ Asset Lifecycle',
    dayType: 'study',
    estimatedMinutes: 105,
    lessonIds: ['L4-01', 'L4-02', 'L4-03'],
    objectiveIds: ['4.1', '4.2'],
    practiceTargetCount: 15,
    tasksTh: [
      'อ่านบทเรียน L4-01 ทำความเข้าใจการจัดทำ ปรับใช้ และบำรุงรักษา Secure Baselines สำหรับอุปกรณ์ทุกประเภท',
      'อ่านบทเรียน L4-02 เจาะลึก Site Surveys/Heat Maps, WPA3/RADIUS และ Mobile Deployment Models (MDM, BYOD, COPE, CYOD)',
      'อ่านบทเรียน L4-03 เรียนรู้วงจรชีวิตสินทรัพย์: การจัดซื้อ การติดตาม (Inventory/Enumeration) และ Sanitization/Destruction/Retention',
      'ทำข้อสอบฝึกหัด Objective 4.1–4.2 จำนวน 15 ข้อ'
    ],
    focusTipTh:
      'BYOD เป็นเครื่องส่วนตัวพนักงานจึงต้องใช้ Containerization แยกข้อมูลองค์กรเพื่อทำ Selective Wipe ได้ ขณะที่ COPE เป็นเครื่องที่บริษัทซื้อให้และอนุญาตให้ใช้ส่วนตัวได้ภายใต้การควบคุมเต็มรูปแบบ'
  },
  {
    day: 13,
    phaseTh: 'ช่วงที่ 3: ปฏิบัติการความปลอดภัย (D4 - 28%)',
    titleTh: 'Vulnerability Management, SIEM/SCAP Monitoring และ Filtering/Email Auth',
    dayType: 'study',
    estimatedMinutes: 110,
    lessonIds: ['L4-04', 'L4-05', 'L4-06'],
    objectiveIds: ['4.3', '4.4', '4.5'],
    practiceTargetCount: 15,
    tasksTh: [
      'อ่านบทเรียน L4-04 ไล่เรียง Vulnerability Management: SAST/DAST, Threat Feeds (OSINT/Dark Web), CVSS/CVE, False Positive/Negative และ Rescanning',
      'อ่านบทเรียน L4-05 เข้าใจ Log Aggregation, SIEM, SCAP, NetFlow, SNMP Traps และ Alert Tuning',
      'อ่านบทเรียน L4-06 เจาะลึก Firewall ACL, IDS/IPS, DNS/Web Filtering และ Email Security (SPF, DKIM, DMARC)',
      'ทำข้อสอบฝึกหัด Objective 4.3–4.5 จำนวน 15 ข้อ'
    ],
    focusTipTh:
      'จำความสัมพันธ์ของ Email Auth: SPF ตรวจ IP เมลเซิร์ฟเวอร์ผู้ส่ง, DKIM ตรวจลายเซ็นดิจิทัลรับรองความไม่ถูกแก้ไข และ DMARC กำหนดนโยบาย (none/quarantine/reject) พร้อมส่งรายงานเมื่อ SPF/DKIM ล้มเหลว'
  },
  {
    day: 14,
    phaseTh: 'ช่วงที่ 3: ปฏิบัติการความปลอดภัย (D4 - 28%)',
    titleTh: 'Endpoint Controls (EDR/NAC/DLP/FIM) และระบบ IAM (SSO/Access Models/PAM)',
    dayType: 'study',
    estimatedMinutes: 110,
    lessonIds: ['L4-07', 'L4-08', 'L4-09'],
    objectiveIds: ['4.5', '4.6'],
    practiceTargetCount: 15,
    tasksTh: [
      'อ่านบทเรียน L4-07 แยกหน้าที่ของ GPO, SELinux, FIM, DLP, NAC, EDR/XDR และ UBA',
      'อ่านบทเรียน L4-08 เข้าใจ Identity Lifecycle, Password Policies, Federation และ SSO (LDAP, OAuth, SAML)',
      'อ่านบทเรียน L4-09 เปรียบเทียบ MAC, DAC, RBAC, ABAC, Rule-based, MFA Factors และ PAM (JIT, Vaulting, Ephemeral Credentials)',
      'ทำข้อสอบฝึกหัด Objective 4.5–4.6 จำนวน 15 ข้อ'
    ],
    focusTipTh:
      'SAML ส่งข้อมูลยืนยันตัวตน (Authentication Assertion) แบบ XML สำหรับ Enterprise SSO ส่วน OAuth 2.0 ออก Access Token เพื่ออนุญาตให้แอปเข้าถึงทรัพยากรแทนผู้ใช้ (Delegated Authorization)'
  },
  {
    day: 15,
    phaseTh: 'ช่วงที่ 3: ปฏิบัติการความปลอดภัย (D4 - 28%)',
    titleTh: 'Automation/SOAR, Incident Response, Forensics และ Log Investigation',
    dayType: 'study',
    estimatedMinutes: 110,
    lessonIds: ['L4-10', 'L4-11', 'L4-12'],
    objectiveIds: ['4.7', '4.8', '4.9'],
    practiceTargetCount: 20,
    tasksTh: [
      'อ่านบทเรียน L4-10 วิเคราะห์ Use Cases, ประโยชน์ (Guardrails/Workforce Multiplier) และความเสี่ยง (Single Point of Failure/Technical Debt) ของ Automation',
      'อ่านบทเรียน L4-11 จำลำดับ Incident Response (Preparation -> Detection & Analysis -> Containment -> Eradication -> Recovery -> Lessons Learned) และ Digital Forensics',
      'อ่านบทเรียน L4-12 ฝึกเชื่อมโยงข้อมูลจาก Firewall Logs, Auth Logs, Endpoint Logs, Metadata และ Packet Captures (PCAP)',
      'ทำข้อสอบฝึกหัด Objective 4.7–4.9 จำนวน 20 ข้อ'
    ],
    focusTipTh:
      'ระหว่าง Incident Response อย่าดึงปลั๊กไฟหรือ Reimage เครื่องทันทีก่อนเก็บหลักฐาน เพราะข้อมูลใน RAM (Volatile Memory) และเซสชันที่กำลังทำงานจะหายไป ควรใช้ EDR Network Isolation แทน'
  },
  {
    day: 16,
    phaseTh: 'ช่วงที่ 3: ปฏิบัติการความปลอดภัย (D4 - 28%)',
    titleTh: 'ทบทวนใหญ่ Domain 4 (น้ำหนักสูงสุด 28%) + ฝึก Log & IR PBQs',
    dayType: 'review',
    estimatedMinutes: 95,
    lessonIds: ['L4-04', 'L4-05', 'L4-08', 'L4-11', 'L4-12'],
    objectiveIds: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9'],
    practiceTargetCount: 20,
    tasksTh: [
      'ทบทวน Flashcards ใน Domain 4 ทั้งหมด เน้นการแยกแยะ EDR/XDR/SIEM/SOAR และ MAC/DAC/RBAC/ABAC',
      'ฝึกทำ Interactive PBQ ของ Domain 4 ครบทุกข้อ (IR Sequence, Cross-Source Log Investigation, Security Capabilities)',
      'ทบทวนความต่างระหว่าง Legal Hold, Chain of Custody, Preservation และ E-Discovery',
      'ทำข้อสอบฝึกหัด Domain 4 แบบคละ Objective 4.1–4.9 จำนวน 20 ข้อ'
    ],
    focusTipTh:
      'Domain 4 คิดเป็น 28% ของข้อสอบทั้งหมด การอ่าน Log ให้เป็นและแยกแยะเครื่องมือ IAM/Endpoint ให้ขาด จะช่วยเก็บคะแนนได้มากที่สุดในการสอบจริง'
  },
  {
    day: 17,
    phaseTh: 'ช่วงที่ 4: ธรรมาภิบาล ความเสี่ยง และข้อกำหนด (D5)',
    titleTh: 'Security Governance, บทบาทข้อมูล และ Quantitative Risk (SLE/ALE/ARO)',
    dayType: 'study',
    estimatedMinutes: 105,
    lessonIds: ['L5-01', 'L5-02'],
    objectiveIds: ['5.1', '5.2'],
    practiceTargetCount: 15,
    tasksTh: [
      'อ่านบทเรียน L5-01 แยกแยะ Policies, Standards, Procedures, Guidelines และบทบาท Owner, Controller, Processor, Custodian',
      'อ่านบทเรียน L5-02 ฝึกคำนวณ Quantitative Risk Analysis (SLE = AV × EF, ALE = SLE × ARO) และเปรียบเทียบกับ Qualitative',
      'ทบทวนคำศัพท์ Governance และสูตรคำนวณความเสี่ยงในคลังคำศัพท์',
      'ทำข้อสอบฝึกหัด Objective 5.1–5.2 จำนวน 15 ข้อ'
    ],
    focusTipTh:
      'เวลาคำนวณ ARO จากข้อความเช่น "เกิด 1 ครั้งในทุก 5 ปี" ให้แปลงเป็น 1/5 = 0.20 ต่อปี และถ้าเกิด "4 ครั้งต่อปี" ARO จะเท่ากับ 4 อย่าสับสนระหว่าง SLE (ต่อครั้ง) กับ ALE (ต่อปี)'
  },
  {
    day: 18,
    phaseTh: 'ช่วงที่ 4: ธรรมาภิบาล ความเสี่ยง และข้อกำหนด (D5)',
    titleTh: 'Risk Response, BIA (RTO/RPO/MTTR/MTBF) และ Third-Party Agreements',
    dayType: 'study',
    estimatedMinutes: 110,
    lessonIds: ['L5-03', 'L5-04'],
    objectiveIds: ['5.2', '5.3'],
    practiceTargetCount: 15,
    tasksTh: [
      'อ่านบทเรียน L5-03 สรุป Risk Strategies (Transfer/Accept/Avoid/Mitigate), Risk Appetite/Tolerance, Risk Register และ BIA Metrics',
      'อ่านบทเรียน L5-04 แยกแยะเอกสารสัญญาผู้ให้บริการ: NDA, SLA, MSA, SOW, MOU, MOA และ BPA รวมถึง Right-to-Audit',
      'ทบทวน Flashcards เปรียบเทียบ RTO vs RPO vs MTTR vs MTBF และข้อตกลงแต่ละประเภท',
      'ทำข้อสอบฝึกหัด Objective 5.2–5.3 จำนวน 15 ข้อ'
    ],
    focusTipTh:
      'จำง่าย ๆ: RPO มองย้อนหลัง (ข้อมูลหายได้มากสุดกี่ชั่วโมง — กำหนดความถี่ Backup) ส่วน RTO มองไปข้างหน้า (ระบบต้องกู้คืนกลับมาทำงานภายในกี่ชั่วโมง — กำหนดสถาปัตยกรรม DR)'
  },
  {
    day: 19,
    phaseTh: 'ช่วงที่ 4: ธรรมาภิบาล ความเสี่ยง และข้อกำหนด (D5)',
    titleTh: 'Compliance, Privacy (GDPR/RTBF), Audits และ Penetration Testing',
    dayType: 'study',
    estimatedMinutes: 105,
    lessonIds: ['L5-05', 'L5-06'],
    objectiveIds: ['5.4', '5.5'],
    practiceTargetCount: 15,
    tasksTh: [
      'อ่านบทเรียน L5-05 เข้าใจ Compliance Monitoring, Due Diligence vs Due Care, Privacy Roles และ Right to Be Forgotten (RTBF)',
      'อ่านบทเรียน L5-06 เปรียบเทียบ Internal vs External Audit, Attestation (SOC 2) และ Pentest Environments (Known/Partially Known/Unknown)',
      'ทบทวนความแตกต่างระหว่าง Passive vs Active Reconnaissance และ Physical/Offensive/Defensive/Integrated Pentest',
      'ทำข้อสอบฝึกหัด Objective 5.4–5.5 จำนวน 15 ข้อ'
    ],
    focusTipTh:
      'Due Diligence คือการตรวจสอบและประเมินความเสี่ยงล่วงหน้า (รู้ว่าต้องทำอะไร) ส่วน Due Care คือการลงมือปฏิบัติและดูแลรักษาความปลอดภัยอย่างเหมาะสมต่อเนื่อง'
  },
  {
    day: 20,
    phaseTh: 'ช่วงที่ 4: ธรรมาภิบาล ความเสี่ยง และข้อกำหนด (D5)',
    titleTh: 'Security Awareness, Phishing Campaigns, OPSEC และเก็บครบทั้ง 42 บทเรียน',
    dayType: 'study',
    estimatedMinutes: 75,
    lessonIds: ['L5-07'],
    objectiveIds: ['5.1', '5.2', '5.3', '5.4', '5.5', '5.6'],
    practiceTargetCount: 20,
    tasksTh: [
      'อ่านบทเรียน L5-07 ศึกษาการจัดทำ Phishing Campaigns, การสังเกต Anomalous Behavior, Insider Threat Awareness และ OPSEC',
      'ตรวจสอบสถานะการเรียนในหน้าหลักสูตรว่าเรียนครบทั้ง 42 บทเรียน (L1-01 ถึง L5-07) เรียบร้อยแล้ว',
      'ทบทวนคำศัพท์หมวด Domain 5 ทั้งหมดในหน้า Glossary',
      'ทำข้อสอบฝึกหัด Objective 5.6 และคละ Domain 5 จำนวน 20 ข้อ'
    ],
    focusTipTh:
      'OPSEC คือการคุ้มครองข้อมูลพฤติกรรมหรือรายละเอียดเล็กน้อยที่ไม่เป็นความลับในตัวมันเอง แต่เมื่อนำไปปะติดปะต่ออาจเปิดเผยแผนงานหรือจุดอ่อนให้ผู้โจมตีใช้ประโยชน์ได้'
  },
  {
    day: 21,
    phaseTh: 'ช่วงที่ 4: ธรรมาภิบาล ความเสี่ยง และข้อกำหนด (D5)',
    titleTh: 'ทบทวน Domain 5 ครบชุด + ฝึก PBQ Risk/BIA และ Vendor Agreements',
    dayType: 'review',
    estimatedMinutes: 85,
    lessonIds: ['L5-02', 'L5-03', 'L5-04', 'L5-05'],
    objectiveIds: ['5.1', '5.2', '5.3', '5.4', '5.5', '5.6'],
    practiceTargetCount: 20,
    tasksTh: [
      'ทบทวน Flashcards ของ Domain 5 ทั้งหมด โดยเฉพาะคู่เปรียบเทียบ MSA vs SOW, MOU vs MOA, Controller vs Processor',
      'ฝึกทำ Interactive PBQ ของ Domain 5 ครบทุกข้อ พร้อมตรวจสอบเหตุผลในเฉลย',
      'ซ้อมโจทย์คำนวณ SLE/ALE/ARO และเลือกกลยุทธ์ Risk Response ตามระดับ Risk Appetite',
      'ทำข้อสอบฝึกหัดคละ Domain 5 จำนวน 20 ข้อ'
    ],
    focusTipTh:
      'ถ้าข้อสอบถามว่าข้อตกลงใดแสดงเจตนารมณ์และกรอบความร่วมมือเบื้องต้นโดยไม่มีผลผูกพันทางกฎหมายหรือการเงินเข้มงวดให้เลือก MOU, กรอบสัญญาแม่บทระยะยาวให้เลือก MSA และรายละเอียดขอบเขตงานเฉพาะโครงการให้เลือก SOW'
  },
  {
    day: 22,
    phaseTh: 'ช่วงที่ 5: ซ้อมสอบจำลองและปิดจุดอ่อน (Mock & Mastery)',
    titleTh: 'ทบทวนภาพรวม D1–D5 และเตรียมกลยุทธ์บริหารเวลาก่อนสอบ Mock Form A',
    dayType: 'review',
    estimatedMinutes: 90,
    lessonIds: ['L1-06', 'L2-08', 'L3-04', 'L4-09', 'L5-03'],
    objectiveIds: ['1.4', '2.4', '3.2', '4.6', '5.2'],
    practiceTargetCount: 20,
    tasksTh: [
      'ทบทวน Flashcards ที่สถานะเป็น Again หรือยังไม่เคยประเมินจากทุก Domain',
      'ซ้อมกลยุทธ์ทำข้อสอบจริง: Flag ข้อ PBQ ไว้ทำช่วงท้ายหรือจัดสรรไม่เกิน 3–4 นาทีต่อ PBQ เพื่อไม่ให้เวลาหมด',
      'ทบทวนจุดอ่อนเฉพาะบุคคลจากสถิติ Domain Mastery บนหน้า Dashboard',
      'ทำข้อสอบฝึกหัดแบบ Random Mix ทุก Domain จำนวน 20 ข้อเพื่อวอร์มอัพ'
    ],
    focusTipTh:
      'ในการสอบ CompTIA Security+ เวลา 90 นาทีต่อข้อสอบสูงสุด 90 ข้อ แปลว่าคุณมีเวลาเฉลี่ย 1 นาทีต่อข้อ อย่าจมอยู่กับข้อเดียวเกิน 90 วินาที ให้ Flag ไว้แล้วเดินหน้าต่อ'
  },
  {
    day: 23,
    phaseTh: 'ช่วงที่ 5: ซ้อมสอบจำลองและปิดจุดอ่อน (Mock & Mastery)',
    titleTh: 'สอบจำลองชุดที่ 1 (Mock Exam Form A — 90 ข้อ / 90 นาที)',
    dayType: 'mock-exam',
    estimatedMinutes: 120,
    lessonIds: [],
    objectiveIds: ['1.1', '2.4', '3.2', '4.5', '5.2'],
    practiceTargetCount: 0,
    mockFormId: 'form-a',
    tasksTh: [
      'เข้าสู่โหมด Mock Exam Form A ในสภาพแวดล้อมเงียบสงบและตั้งใจทำต่อเนื่อง 90 นาทีรวดเดียว',
      'ทำข้อสอบครบทั้ง 85 MCQ/MSQ และ 5 Interactive PBQ โดยไม่เปิดดูเฉลยหรือเอกสารระหว่างทำ',
      'บันทึกภาพรวมคะแนนราย Domain ในหน้าผลสอบเพื่อวางแผนเจาะลึกในวันถัดไป'
    ],
    focusTipTh:
      'อ่านคีย์เวิร์ดท้ายคำถามให้ดี เช่น MOST likely, BEST, FIRST หรือ LEAST เพราะตัวเลือกหลายข้ออาจถูกต้องทางเทคนิค แต่มีเพียงข้อเดียวที่ตรงเงื่อนไขของสถานการณ์ที่สุด'
  },
  {
    day: 24,
    phaseTh: 'ช่วงที่ 5: ซ้อมสอบจำลองและปิดจุดอ่อน (Mock & Mastery)',
    titleTh: 'Error Review หลังสอบ Form A และปิดช่องว่างราย Objective',
    dayType: 'review',
    estimatedMinutes: 90,
    lessonIds: [],
    objectiveIds: ['1.2', '2.2', '3.3', '4.6', '5.3'],
    practiceTargetCount: 15,
    tasksTh: [
      'ตรวจทานข้อที่ตอบผิดและข้อที่ Flag ไว้ใน Mock Exam Form A ทุกข้อ อ่านทั้ง Rationale และ Misconception',
      'จดบันทึกสาเหตุที่ผิด: ไม่รู้จักศัพท์, อ่านโจทย์พลาดคีย์เวิร์ด, หรือจำหลักการเปรียบเทียบสลับกัน',
      'กลับไปอ่านบทเรียนเฉพาะข้อที่คะแนนต่ำกว่า 75% และทบทวน Flashcards ที่เกี่ยวข้อง',
      'ทำข้อสอบซ่อมเสริมเฉพาะ Domain ที่คะแนนต่ำสุดใน Form A จำนวน 15 ข้อ'
    ],
    focusTipTh:
      'การทบทวนข้อที่ตอบผิดสำคัญกว่าการทำโจทย์ใหม่จำนวนมาก เพราะช่วยให้เห็นกับดักความคิดที่ทำให้เราเลือกตัวลวงซ้ำ ๆ'
  },
  {
    day: 25,
    phaseTh: 'ช่วงที่ 5: ซ้อมสอบจำลองและปิดจุดอ่อน (Mock & Mastery)',
    titleTh: 'เจาะลึก Domain น้ำหนักสูง: Security Operations (28%) & Threats (22%)',
    dayType: 'review',
    estimatedMinutes: 95,
    lessonIds: ['L2-06', 'L2-07', 'L4-05', 'L4-06', 'L4-11'],
    objectiveIds: ['2.4', '4.4', '4.5', '4.8', '4.9'],
    practiceTargetCount: 20,
    tasksTh: [
      'ทบทวนรูปแบบ Log และ IOCs ที่พบบ่อย: Impossible Travel, Data Exfiltration, Legacy Auth Bypass และ DDoS',
      'ทบทวนความแตกต่างของเครื่องมือป้องกัน: SIEM, SOAR, EDR, XDR, NAC, DLP, FIM และ UBA',
      'ฝึกอ่านโจทย์ Incident Response และ Digital Forensics เพื่อแยกขั้นตอน Containment vs Eradication',
      'ทำข้อสอบเจาะเฉพาะ Domain 2 และ Domain 4 รวม 20 ข้อ'
    ],
    focusTipTh:
      'D4 (28%) + D2 (22%) รวมกันเท่ากับครึ่งหนึ่งของข้อสอบทั้งฉบับ หากทำสองส่วนนี้ได้แม่นยำ โอกาสสอบผ่านตามเป้าหมายจะสูงขึ้นมาก'
  },
  {
    day: 26,
    phaseTh: 'ช่วงที่ 5: ซ้อมสอบจำลองและปิดจุดอ่อน (Mock & Mastery)',
    titleTh: 'สอบจำลองชุดที่ 2 (Mock Exam Form B — 90 ข้อ / 90 นาที)',
    dayType: 'mock-exam',
    estimatedMinutes: 120,
    lessonIds: [],
    objectiveIds: ['1.4', '2.3', '3.1', '4.8', '5.4'],
    practiceTargetCount: 0,
    mockFormId: 'form-b',
    tasksTh: [
      'ทำ Mock Exam Form B (ชุดข้อสอบใหม่ทั้งหมดไม่ซ้ำ Form A) จับเวลาจริง 90 นาที',
      'ทดลองปรับจังหวะการแบ่งเวลาทำ PBQ และข้อสอบหลายตัวเลือก (MSQ) ที่ต้องเลือก 2–3 คำตอบ',
      'เปรียบเทียบเปอร์เซ็นต์ราย Domain กับ Form A เพื่อตรวจเช็กพัฒนาการของจุดอ่อนเดิม'
    ],
    focusTipTh:
      'สำหรับข้อ MSQ (Choose two / Choose three) ให้ใช้วิธีตัดตัวเลือกที่ผิดหลักการหรือผิดบริบทออกก่อน แล้วตรวจสอบว่าตัวเลือกที่เหลือตอบโจทย์ครบทุกเงื่อนไข'
  },
  {
    day: 27,
    phaseTh: 'ช่วงที่ 5: ซ้อมสอบจำลองและปิดจุดอ่อน (Mock & Mastery)',
    titleTh: 'Error Review หลังสอบ Form B และเจาะลึก D3 Architecture + D5 Governance',
    dayType: 'review',
    estimatedMinutes: 90,
    lessonIds: [],
    objectiveIds: ['3.1', '3.4', '5.1', '5.4', '5.5'],
    practiceTargetCount: 15,
    tasksTh: [
      'วิเคราะห์ข้อผิดพลาดจาก Mock Exam Form B ทุกข้อ โดยเน้นจุดที่ยังลังเลระหว่าง 2 ตัวเลือกสุดท้าย',
      'ทบทวนสถาปัตยกรรม D3 (SASE, SD-WAN, 802.1X, Cloud Matrix, Hot/Warm/Cold Sites) และ D5 (Governance, Privacy, Audits)',
      'ฝึกทำ PBQ หมวด D3 และ D5 ซ้ำเพื่อลดเวลาการคิดและเพิ่มความแม่นยำ',
      'ทำข้อสอบซ่อมเสริมใน Objective ที่ยังมีจุดอ่อนจาก Form B จำนวน 15 ข้อ'
    ],
    focusTipTh:
      'อย่าละเลย Domain 3 (18%) และ Domain 5 (20%) เพราะเป็นส่วนที่โจทย์มักวัดความเข้าใจเชิงธุรกิจและความรับผิดชอบตามกฎหมายมากกว่าการจำเทคนิค'
  },
  {
    day: 28,
    phaseTh: 'ช่วงที่ 5: ซ้อมสอบจำลองและปิดจุดอ่อน (Mock & Mastery)',
    titleTh: 'สปรินต์ทบทวนคำศัพท์ ตัวย่อ และคู่แนวคิดที่มักสับสนในข้อสอบ',
    dayType: 'review',
    estimatedMinutes: 85,
    lessonIds: [],
    objectiveIds: ['1.4', '3.2', '4.5', '4.6', '5.3'],
    practiceTargetCount: 15,
    tasksTh: [
      'กวาดสายตาเช็ก Glossary ตัวย่อทั้งหมดให้มั่นใจว่าเข้าใจหน้าที่และบริบทการใช้งานจริง (เช่น SAML/OAuth/LDAP, SPF/DKIM/DMARC, SLE/ALE/ARO)',
      'ทำ Flashcards แบบกรองเฉพาะ Good และ Again เพื่อยกระดับเป็น Mastered ให้ได้มากที่สุด',
      'ทบทวนพอร์ตมาตรฐานและโปรโตคอลปลอดภัยทดแทนโปรโตคอลเดิม (เช่น SSH/SFTP, HTTPS, LDAPS, SNMPv3, TLS)',
      'ทำข้อสอบฝึกหัดความเร็ว 15 ข้อ โดยจำกัดเวลาไม่เกินข้อละ 45 วินาที'
    ],
    focusTipTh:
      'ข้อสอบ CompTIA มักใส่ตัวย่อหลายตัวปนกันในตัวเลือก การรู้ทันทีว่าตัวย่อแต่ละตัวอยู่ Layer ใดหรือแก้ปัญหาอะไร จะช่วยตัดตัวลวงได้ภายในไม่กี่วินาที'
  },
  {
    day: 29,
    phaseTh: 'ช่วงที่ 5: ซ้อมสอบจำลองและปิดจุดอ่อน (Mock & Mastery)',
    titleTh: 'สอบจำลองชุดที่ 3 (Mock Exam Form C — 90 ข้อ / 90 นาที)',
    dayType: 'mock-exam',
    estimatedMinutes: 120,
    lessonIds: [],
    objectiveIds: ['1.1', '2.5', '3.4', '4.9', '5.6'],
    practiceTargetCount: 0,
    mockFormId: 'form-c',
    tasksTh: [
      'ทำ Mock Exam Form C เป็นสนามซ้อมใหญ่ครั้งสุดท้ายภายใต้กติกาเสมือนสอบจริง 100%',
      'ฝึกควบคุมสมาธิและการจัดการความเครียดเมื่อพบข้อสอบที่สถานการณ์ซับซ้อน',
      'ประเมินผลคะแนนรวมเทียบกับเกณฑ์เป้าหมายการฝึก (80%+) และตรวจเช็กความสม่ำเสมอครบทั้ง 5 Domains'
    ],
    focusTipTh:
      'ใช้ Form C ยืนยันความพร้อมทั้งด้านความรู้และการบริหารเวลา หากมีข้อที่มั่นใจระดับ 80% แล้ว ไม่ควรเปลี่ยนคำตอบไปมาในช่วงนาทีสุดท้ายโดยไม่มีเหตุผลชัดเจน'
  },
  {
    day: 30,
    phaseTh: 'ช่วงที่ 5: ซ้อมสอบจำลองและปิดจุดอ่อน (Mock & Mastery)',
    titleTh: 'ทบทวนโค้งสุดท้ายหลัง Form C และเตรียมความพร้อมก่อนเข้าห้องสอบจริง',
    dayType: 'review',
    estimatedMinutes: 70,
    lessonIds: [],
    objectiveIds: ['1.2', '2.4', '3.2', '4.8', '5.2'],
    practiceTargetCount: 10,
    tasksTh: [
      'ตรวจสอบข้อที่ตอบผิดใน Mock Exam Form C เพื่อเก็บตกจุดเล็ก ๆ น้อย ๆ ที่อาจพลาดได้ง่าย',
      'ทบทวนสรุปสูตรคำนวณ (SLE/ALE/ARO), ลำดับ Incident Response (PICERL) และ Zero Trust Components รอบสุดท้าย',
      'ทำข้อสอบวอร์มสมองเบา ๆ 10 ข้อ แล้วพักผ่อนให้เพียงพอก่อนวันสอบจริง',
      'เตรียมเอกสารยืนยันตัวตนและตรวจสอบกติกาของศูนย์สอบหรือระบบสอบออนไลน์ให้เรียบร้อย'
    ],
    focusTipTh:
      'วันสุดท้ายก่อนสอบจริงไม่ควรอัดเนื้อหาใหม่หนักเกินไป การนอนหลับให้เพียงพอและรักษาสมองให้ปลอดโปร่งช่วยให้วิเคราะห์โจทย์สถานการณ์ยาว ๆ ได้แม่นยำกว่ามาก'
  }
];
