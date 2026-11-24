import type { PbqQuestion } from '../../types';

export const PBQ_D2: PbqQuestion[] = [
  {
    id: 'PBQ-D2-01',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    difficulty: 'intermediate',
    titleEn: 'Messaging, Domain Deception & Supply-Chain Vector Analysis',
    titleTh: 'การวิเคราะห์ช่องทางภัยคุกคามทางข้อความ โดเมนปลอม และ Supply Chain',
    scenarioEn:
      'Security analysts collected condensed gateway summaries covering corporate email, mobile messaging, and managed service provider (MSP) access. Review all three telemetry tabs to classify the primary threat vectors.',
    scenarioTh:
      'นักวิเคราะห์ความปลอดภัยรวบรวมสรุปข้อมูลจากเกตเวย์อีเมล ระบบข้อความมือถือ และการเข้าถึงของผู้ให้บริการภายนอก (MSP) จงตรวจสอบข้อมูลทั้ง 3 แท็บเพื่อจำแนกช่องทางภัยคุกคามหลัก',
    instructionsEn: 'Inspect each telemetry tab and select the best finding for all four questions.',
    instructionsTh: 'ตรวจสอบข้อมูลในแต่ละแท็บและเลือกคำตอบที่เหมาะสมที่สุดสำหรับข้อค้นพบทั้ง 4 ข้อ',
    config: {
      template: 'log-investigator',
      artifactTabs: [
        {
          id: 'email-gw',
          title: 'Email Gateway Summary',
          lines: [
            '2026-11-24T07:10Z relay=mx-gw01 spf=fail dkim=none dmarc=fail from="ceo@corp-billing.example" reply_to="wire-desk@corp-b1lling-pay.example"',
            '2026-11-24T07:12Z hdr_subj="URGENT: Confidential Wire Settlement Today" reply_mismatch=true sender_role_claim="Chief Financial Officer"'
          ]
        },
        {
          id: 'sms-url',
          title: 'Mobile & URL Telemetry',
          lines: [
            '2026-11-24T07:25Z channel=sms url="https://payro11-portal.example/auth/sso" lookalike_match="payroll-portal.example" note="char-substitution 1 for l"',
            '2026-11-24T07:27Z action=blocked destination_type=credential-harvesting source_channel=mobile-sms'
          ]
        },
        {
          id: 'msp-vendor',
          title: 'MSP Remote Access',
          lines: [
            '2026-11-24T07:40Z svc="vendor-rmm-agent" acct="msp-tier2-svc" session_time="03:40Z_off_hours" target_group="all-managed-workstations"',
            '2026-11-24T07:42Z cmd="whoami && net localgroup administrators svc_remote /add" status=flagged'
          ]
        }
      ],
      findings: [
        {
          id: 'f1',
          promptEn: 'Which social engineering vector is most strongly indicated by the Email Gateway summary?',
          promptTh: 'ช่องทาง Social Engineering ใดสอดคล้องกับสรุปจากเกตเวย์อีเมลมากที่สุด?',
          choices: [
            {
              id: 'bec',
              textEn: 'Business email compromise (BEC) via impersonation',
              textTh: 'การแอบอ้างตัวตนผ่านอีเมลธุรกิจ (BEC)'
            },
            {
              id: 'watering-hole',
              textEn: 'Watering hole compromise on a legitimate industry forum',
              textTh: 'การดักฝังมัลแวร์บนเว็บไซต์จริงที่เป้าหมายใช้งานประจำ (Watering hole)'
            },
            {
              id: 'pretexting-call',
              textEn: 'Voice-call pretexting (vishing) targeting the reception desk',
              textTh: 'การโทรศัพท์สร้างเรื่องสมมติเพื่อหลอกถามข้อมูล (Vishing/Pretexting)'
            },
            {
              id: 'spam-ad',
              textEn: 'Mass promotional spam mailing lacking spoofed sender alignment',
              textTh: 'สแปมโฆษณาทั่วไปที่ไม่ได้ปลอมแปลงตัวตนผู้บริหาร'
            }
          ],
          expectedChoiceId: 'bec'
        },
        {
          id: 'f2',
          promptEn: 'Which combination of message vector and domain deception appears in the mobile telemetry tab?',
          promptTh: 'รูปแบบช่องทางข้อความและการปลอมแปลงโดเมนใดปรากฏในแท็บข้อมูลมือถือ?',
          choices: [
            {
              id: 'smishing-typo',
              textEn: 'Smishing with lookalike domain typosquatting',
              textTh: 'Smishing ร่วมกับการจดโดเมนเลียนแบบ (Typosquatting)'
            },
            {
              id: 'watering-hole',
              textEn: 'Watering hole compromise of a legitimate partner portal',
              textTh: 'การโจมตีแบบ Watering hole บนเว็บไซต์จริงของพันธมิตร'
            },
            {
              id: 'vishing',
              textEn: 'Voice-call pretexting targeting the help desk',
              textTh: 'การหลอกถามข้อมูลผ่านโทรศัพท์ (Vishing)'
            },
            {
              id: 'qr-print',
              textEn: 'Physical QR code sticker tampering on conference room badges',
              textTh: 'การนำสติกเกอร์ QR code ปลอมไปแปะทับป้ายห้องประชุม'
            }
          ],
          expectedChoiceId: 'smishing-typo'
        },
        {
          id: 'f3',
          promptEn: 'Which enterprise attack surface is highlighted by the third-party remote administration tab?',
          promptTh: 'พื้นผิวการโจมตีใดปรากฏชัดในแท็บการบริหารจัดการจากผู้ให้บริการภายนอก?',
          choices: [
            {
              id: 'msp-supply',
              textEn: 'Supply-chain exposure through a trusted managed service provider',
              textTh: 'ความเสี่ยงด้าน Supply Chain ผ่านเครื่องมือของผู้ให้บริการ MSP'
            },
            {
              id: 'shadow-it',
              textEn: 'Unauthorized employee SaaS spreadsheet upload (Shadow IT)',
              textTh: 'การอัปโหลดไฟล์งานขึ้นคลาวด์ส่วนตัวโดยพลการของพนักงาน (Shadow IT)'
            },
            {
              id: 'usb-drop',
              textEn: 'Unencrypted removable USB drive found in the lobby',
              textTh: 'แฟลชไดรฟ์ไม่เข้ารหัสที่ถูกทิ้งไว้บริเวณล็อบบี้'
            },
            {
              id: 'legacy-os',
              textEn: 'Unsupported vendor end-of-life operating system kernel flaw',
              textTh: 'ช่องโหว่ในระบบปฏิบัติการรุ่นเก่าที่ผู้ผลิตหยุดสนับสนุนแล้ว'
            }
          ],
          expectedChoiceId: 'msp-supply'
        },
        {
          id: 'f4',
          promptEn: 'Which high-level mitigation addresses both spoofed executive messaging and third-party remote access risk?',
          promptTh: 'แนวทางลดความเสี่ยงระดับองค์กรใดช่วยรับมือได้ทั้งอีเมลแอบอ้างและการเข้าถึงของบุคคลที่สาม?',
          choices: [
            {
              id: 'auth-zt',
              textEn: 'Enforce strict mail authentication controls alongside least-privilege vendor access policies',
              textTh: 'บังคับใช้การยืนยันตัวตนอีเมลอย่างเข้มงวดร่วมกับสิทธิ์น้อยที่สุดสำหรับผู้ให้บริการภายนอก'
            },
            {
              id: 'disable-dns',
              textEn: 'Disable internal DNS resolution for all corporate workstations',
              textTh: 'ปิดการแปลงชื่อ DNS ภายในของเครื่องพนักงานทั้งหมด'
            },
            {
              id: 'open-relay',
              textEn: 'Permit unauthenticated SMTP relaying and shared domain admin credentials for vendors',
              textTh: 'อนุญาต SMTP Relay แบบไม่ยืนยันตัวตนและแชร์บัญชี Domain Admin ให้ผู้ให้บริการ'
            },
            {
              id: 'split-tunnel',
              textEn: 'Switch remote employees exclusively to split-tunnel VPN connections',
              textTh: 'ปรับให้พนักงานระยะไกลเชื่อมต่อผ่าน VPN แบบ Split Tunnel ทั้งหมด'
            }
          ],
          expectedChoiceId: 'auth-zt'
        }
      ]
    },
    rubric: [
      { id: 'f1', descriptionTh: 'ระบุ BEC impersonation จาก Email Gateway ถูกต้อง', weight: 0.25 },
      { id: 'f2', descriptionTh: 'ระบุ Smishing + Typosquatting จาก Mobile Telemetry ถูกต้อง', weight: 0.25 },
      { id: 'f3', descriptionTh: 'ระบุ Supply-chain exposure ผ่าน MSP ถูกต้อง', weight: 0.25 },
      { id: 'f4', descriptionTh: 'เลือกมาตรการป้องกันทั้งเมลและบุคคลที่สามถูกต้อง', weight: 0.25 }
    ],
    explanationTh:
      'ช่องทางภัยคุกคามยุคใหม่มักผสานการแอบอ้างทางจิตวิทยาผ่านข้อความและชื่อโดเมนเลียนแบบเข้ากับการใช้สิทธิ์ของคู่ค้าภายนอกเป็นทางผ่าน การตรวจสอบความน่าเชื่อถือของผู้ส่งควบคู่กับการจำกัดสิทธิ์ของซัพพลายเออร์จึงช่วยลดพื้นผิวการโจมตีได้พร้อมกัน',
    misconceptionTh:
      'ผู้เรียนมักสับสนระหว่างการจดโดเมนใหม่ให้คล้ายของจริง (Typosquatting) กับการแทรกแซงเว็บไซต์จริงที่กลุ่มเป้าหมายใช้งานประจำ (Watering Hole)',
    relatedLessonIds: ['L2-02', 'L2-03'],
    tags: ['pbq', 'threat-vectors', 'social-engineering', 'objective-2.2']
  },
  {
    id: 'PBQ-D2-02',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    difficulty: 'exam-ready',
    titleEn: 'Multi-Source Malicious Activity Indicator Triage',
    titleTh: 'การคัดแยกตัวบ่งชี้กิจกรรมประสงค์ร้ายจากหลายแหล่งข้อมูล',
    scenarioEn:
      'Review condensed behavioral summaries across DNS egress, identity authentication, and web gateway telemetry to classify the malicious activity indicators observed.',
    scenarioTh:
      'ตรวจสอบสรุปพฤติกรรมจากระบบ DNS ขาออก ระบบยืนยันตัวตน และเกตเวย์เว็บแอปพลิเคชัน เพื่อจำแนกตัวบ่งชี้กิจกรรมประสงค์ร้ายที่ตรวจพบ',
    instructionsEn: 'Examine all three telemetry tabs and identify the primary indicator for each finding.',
    instructionsTh: 'ตรวจสอบข้อมูลทั้ง 3 แท็บแล้วเลือกตัวบ่งชี้ที่ถูกต้องสำหรับข้อค้นพบทั้ง 4 ข้อ',
    config: {
      template: 'log-investigator',
      artifactTabs: [
        {
          id: 'dns-net',
          title: 'DNS & Egress Summary',
          lines: [
            '2026-11-24T08:05Z src=10.40.2.15 qtype=TXT qname="9f8a7c4d2e1b99a1c3f0.tx.cdn-update.example" label_len=61 entropy=4.7 qpm=145',
            '2026-11-24T08:07Z action=egress-alert dst=198.51.100.44 port=53 proto=UDP bytes_out=482100'
          ]
        },
        {
          id: 'idp-auth',
          title: 'Identity Provider Telemetry',
          lines: [
            '2026-11-24T08:10Z src=203.0.113.88 targeted_accounts=45 attempts_per_account=1 secret_pattern="Autumn2026!" lockouts=0',
            '2026-11-24T08:14Z user=acct-042 login_a="BKK 08:10Z (success)" login_b="FRA 08:14Z (success)" vpn_exit=none delta_minutes=4'
          ]
        },
        {
          id: 'web-app',
          title: 'Web Gateway Summary',
          lines: [
            '2026-11-24T08:18Z method=GET uri="/files/fetch?doc=../../../../etc/shadow" status=403 waf_action=blocked',
            '2026-11-24T08:20Z method=GET uri="/files/fetch?doc=%2e%2e%2f%2e%2e%2fwin.ini" status=403 waf_action=blocked'
          ]
        }
      ],
      findings: [
        {
          id: 'f1',
          promptEn: 'Which network attack indicator is illustrated by the high-entropy DNS telemetry?',
          promptTh: 'ตัวบ่งชี้การโจมตีเครือข่ายใดสอดคล้องกับข้อมูล DNS ที่มีความสุ่มและปริมาณผิดปกติ?',
          choices: [
            {
              id: 'dns-tunnel',
              textEn: 'DNS tunneling used for covert command or exfiltration traffic',
              textTh: 'DNS tunneling สำหรับการสื่อสารแฝงหรือลักลอบส่งออกข้อมูล'
            },
            {
              id: 'ddos-amp',
              textEn: 'Amplified reflection denial-of-service flood',
              textTh: 'การโจมตีปฏิเสธการให้บริการแบบขยายสัญญาณ (Amplified DDoS)'
            },
            {
              id: 'rogue-ap',
              textEn: 'Wireless evil twin access point spoofing',
              textTh: 'การปลอมจุดเชื่อมต่อไร้สายแบบ Evil Twin'
            },
            {
              id: 'dns-poison',
              textEn: 'Recursive resolver cache poisoning redirecting client browsers',
              textTh: 'การแทรกข้อมูลปลอมในแคช DNS เพื่อเบี่ยงเบนผู้ใช้ไปเว็บอื่น'
            }
          ],
          expectedChoiceId: 'dns-tunnel'
        },
        {
          id: 'f2',
          promptEn: 'Which credential attack technique matches single-attempt sweeps across many distinct accounts?',
          promptTh: 'เทคนิคการโจมตีรหัสผ่านใดตรงกับการลองรหัสผ่านเพียงไม่กี่ครั้งต่อบัญชีแต่กระจายหลายบัญชี?',
          choices: [
            {
              id: 'spraying',
              textEn: 'Password spraying designed to evade per-account lockout thresholds',
              textTh: 'Password spraying เพื่อหลบเลี่ยงเกณฑ์ล็อกบัญชีรายบุคคล'
            },
            {
              id: 'brute-force',
              textEn: 'High-rate single-account brute-force guessing causing account lockout',
              textTh: 'การเดารหัสผ่านความถี่สูงใส่บัญชีเดียวจนบัญชีถูกล็อก'
            },
            {
              id: 'cred-replay',
              textEn: 'Replaying previously captured session tokens without checking passwords',
              textTh: 'การส่งโทเคนเซสชันที่ดักจับไว้ซ้ำโดยไม่ผ่านการกรอกรหัสผ่าน'
            },
            {
              id: 'downgrade',
              textEn: 'TLS handshake protocol downgrade attack',
              textTh: 'การบังคับลดระดับโปรโตคอลการเข้ารหัส TLS'
            }
          ],
          expectedChoiceId: 'spraying'
        },
        {
          id: 'f3',
          promptEn: 'Which behavioral indicator is shown by logins from two distant countries within four minutes?',
          promptTh: 'ตัวบ่งชี้พฤติกรรมผิดปกติใดเกิดจากการเข้าสู่ระบบจากสองประเทศห่างไกลภายในเวลา 4 นาที?',
          choices: [
            {
              id: 'impossible-travel',
              textEn: 'Impossible travel indicating potential account or session compromise',
              textTh: 'Impossible travel ที่ชี้ถึงความเสี่ยงการยึดครองบัญชีหรือเซสชัน'
            },
            {
              id: 'out-of-cycle',
              textEn: 'Out-of-cycle scheduled log rotation during maintenance',
              textTh: 'การหมุนเวียน Log นอกรอบเวลาปกติในช่วงบำรุงรักษา'
            },
            {
              id: 'missing-logs',
              textEn: 'Missing audit logs caused by sudden syslog service termination',
              textTh: 'ช่องว่างบันทึก Log ที่ขาดหายจากการปิดบริการเก็บ Log กะทันหัน'
            },
            {
              id: 'lockout-ioc',
              textEn: 'Repeated account lockout alerts on local printer accounts',
              textTh: 'การแจ้งเตือนบัญชีถูกล็อกซ้ำๆ บนบัญชีเครื่องพิมพ์ภายใน'
            }
          ],
          expectedChoiceId: 'impossible-travel'
        },
        {
          id: 'f4',
          promptEn: 'Which application attack category was intercepted at the web gateway file endpoint?',
          promptTh: 'การโจมตีระดับแอปพลิเคชันประเภทใดถูกสกัดกั้นที่จุดบริการไฟล์ของเว็บเกตเวย์?',
          choices: [
            {
              id: 'dir-traversal',
              textEn: 'Directory traversal attempting unauthorized filesystem access',
              textTh: 'Directory traversal ที่พยายามเข้าถึงโครงสร้างไฟล์นอกขอบเขต'
            },
            {
              id: 'stored-xss',
              textEn: 'Stored cross-site scripting persisted in database fields',
              textTh: 'Stored cross-site scripting ที่ฝังในฐานข้อมูล'
            },
            {
              id: 'csrf',
              textEn: 'Cross-site request forgery abusing authenticated session cookies',
              textTh: 'Cross-site request forgery ที่หลอกใช้คุกกี้เซสชันของผู้ใช้'
            },
            {
              id: 'buffer-overflow',
              textEn: 'Memory buffer overflow crashing the web worker daemon',
              textTh: 'Buffer overflow ที่ทำให้โปรเซสเว็บเซิร์ฟเวอร์หยุดทำงาน'
            }
          ],
          expectedChoiceId: 'dir-traversal'
        }
      ]
    },
    rubric: [
      { id: 'f1', descriptionTh: 'ระบุตัวบ่งชี้ DNS tunneling จาก DNS Telemetry ถูกต้อง', weight: 0.25 },
      { id: 'f2', descriptionTh: 'ระบุเทคนิค Password spraying จากการกวาดลองหลายบัญชีถูกต้อง', weight: 0.25 },
      { id: 'f3', descriptionTh: 'ระบุพฤติกรรม Impossible travel จากการล็อกอินสองประเทศใน 4 นาทีถูกต้อง', weight: 0.25 },
      { id: 'f4', descriptionTh: 'ระบุ Directory traversal จาก Web Gateway Telemetry ถูกต้อง', weight: 0.25 }
    ],
    explanationTh:
      'การประมวลผลตัวบ่งชี้ข้ามหลายโดเมนช่วยแยกแยะรูปแบบการโจมตีเครือข่าย การกวาดลองรหัสผ่านเพื่อเลี่ยงการล็อกบัญชี และความพยายามเข้าถึงเส้นทางไฟล์นอกสิทธิ์ออกจากทราฟฟิกปกติ การรวมสัญญาณความผิดปกติจากระบบยืนยันตัวตนและเกตเวย์ช่วยให้จัดลำดับความสำคัญของการตอบสนองได้แม่นยำขึ้น',
    misconceptionTh:
      'มักเข้าใจผิดว่า Password Spraying คือการสุ่มรหัสผ่านจำนวนมากใส่บัญชีเดียว ซึ่งแท้จริงคือการลองรหัสผ่านยอดนิยมไม่กี่ค่ากับบัญชีจำนวนมากพร้อมกัน',
    relatedLessonIds: ['L2-07', 'L2-08'],
    tags: ['pbq', 'indicators', 'attack-analysis', 'objective-2.4']
  },
  {
    id: 'PBQ-D2-03',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.5'],
    difficulty: 'exam-ready',
    titleEn: 'Enterprise Hardening & Firewall ACL Rule Builder',
    titleTh: 'การกำหนดกฎ Firewall ACL และมาตรการ Hardening องค์กร',
    scenarioEn:
      'Configure three enterprise mitigation and hardening rules enforcing encrypted web access, removal of legacy plaintext remote management, and endpoint execution restrictions.',
    scenarioTh:
      'กำหนดกฎลดความเสี่ยงและเสริมแกร่งระบบจำนวน 3 ข้อ เพื่อให้รองรับการเข้าถึงเว็บแบบเข้ารหัส ปิดบริการจัดการระยะไกลที่ไม่ปลอดภัย และควบคุมการรันซอฟต์แวร์บนเครื่องปลายทาง',
    instructionsEn: 'Select the required setting for each of the three fields across all three rules.',
    instructionsTh: 'เลือกค่าตั้งค่าที่เหมาะสมครบทั้ง 3 ช่องในแต่ละกฎทั้ง 3 ข้อ',
    config: {
      template: 'rule-builder',
      contextTableTitle: 'Enterprise Hardening Baseline Context',
      contextRows: [
        { label: 'External-Facing Application VIP (NAT/Screened Subnet)', value: '10.50.10.20 (Encrypted HTTPS required)' },
        { label: 'Prohibited Legacy Service', value: 'Telnet (TCP/23) plaintext administration' },
        { label: 'Endpoint Execution Standard', value: 'Least privilege with application allow listing' }
      ],
      rules: [
        {
          id: 'rule1',
          titleEn: 'Rule 1: Inbound Encrypted Web Application Access',
          titleTh: 'กฎที่ 1: อนุญาตการเข้าถึงแอปพลิเคชันเว็บแบบเข้ารหัส',
          fields: [
            {
              id: 'action',
              labelEn: 'Action',
              labelTh: 'การกระทำ',
              choices: [
                { value: 'allow', labelEn: 'Allow', labelTh: 'Allow (อนุญาต)' },
                { value: 'deny', labelEn: 'Deny', labelTh: 'Deny (ปฏิเสธ)' }
              ]
            },
            {
              id: 'protocol',
              labelEn: 'Protocol / Port',
              labelTh: 'โปรโตคอล / พอร์ต',
              choices: [
                { value: 'tcp-443', labelEn: 'TCP/443 (HTTPS)', labelTh: 'TCP/443 (HTTPS)' },
                { value: 'tcp-80', labelEn: 'TCP/80 (HTTP)', labelTh: 'TCP/80 (HTTP)' },
                { value: 'tcp-23', labelEn: 'TCP/23 (Telnet)', labelTh: 'TCP/23 (Telnet)' }
              ]
            },
            {
              id: 'destination',
              labelEn: 'Destination Scope',
              labelTh: 'ขอบเขตปลายทาง',
              choices: [
                { value: '10.50.10.20', labelEn: '10.50.10.20 (App VIP)', labelTh: '10.50.10.20 (App VIP)' },
                { value: 'any-internal', labelEn: 'Any Internal Subnet', labelTh: 'Any Internal Subnet' },
                { value: 'mgmt-jump', labelEn: 'Admin Jump Subnet', labelTh: 'Admin Jump Subnet' }
              ]
            }
          ],
          expectedValues: {
            action: 'allow',
            protocol: 'tcp-443',
            destination: '10.50.10.20'
          }
        },
        {
          id: 'rule2',
          titleEn: 'Rule 2: Legacy Plaintext Management Restriction',
          titleTh: 'กฎที่ 2: ปิดกั้นบริการจัดการระยะไกลที่ไม่เข้ารหัส',
          fields: [
            {
              id: 'action',
              labelEn: 'Action',
              labelTh: 'การกระทำ',
              choices: [
                { value: 'allow', labelEn: 'Allow', labelTh: 'Allow (อนุญาต)' },
                { value: 'deny', labelEn: 'Deny', labelTh: 'Deny (ปฏิเสธ)' }
              ]
            },
            {
              id: 'protocol',
              labelEn: 'Protocol / Port',
              labelTh: 'โปรโตคอล / พอร์ต',
              choices: [
                { value: 'tcp-23', labelEn: 'TCP/23 (Telnet)', labelTh: 'TCP/23 (Telnet)' },
                { value: 'tcp-22', labelEn: 'TCP/22 (SSH)', labelTh: 'TCP/22 (SSH)' },
                { value: 'tcp-443', labelEn: 'TCP/443 (HTTPS)', labelTh: 'TCP/443 (HTTPS)' }
              ]
            },
            {
              id: 'logging',
              labelEn: 'Monitoring Option',
              labelTh: 'การบันทึกตรวจสอบ',
              choices: [
                { value: 'log-alert', labelEn: 'Log & Alert', labelTh: 'Log & Alert (บันทึกและแจ้งเตือน)' },
                { value: 'no-log', labelEn: 'Disable Logging', labelTh: 'ปิดการบันทึก Log' },
                { value: 'bypass', labelEn: 'Bypass Inspection', labelTh: 'ข้ามการตรวจสอบ' }
              ]
            }
          ],
          expectedValues: {
            action: 'deny',
            protocol: 'tcp-23',
            logging: 'log-alert'
          }
        },
        {
          id: 'rule3',
          titleEn: 'Rule 3: Host Execution & Configuration Hardening',
          titleTh: 'กฎที่ 3: การเสริมแกร่งการรันซอฟต์แวร์บนเครื่องปลายทาง',
          fields: [
            {
              id: 'scope',
              labelEn: 'Target Scope',
              labelTh: 'ขอบเขตเป้าหมาย',
              choices: [
                { value: 'managed-hosts', labelEn: 'Managed Endpoints', labelTh: 'เครื่องปลายทางองค์กร' },
                { value: 'guest-wifi', labelEn: 'Guest Wi-Fi Only', labelTh: 'เฉพาะ Guest Wi-Fi' },
                { value: 'unmanaged', labelEn: 'Public Kiosk Network', labelTh: 'เครือข่ายสาธารณะภายนอก' }
              ]
            },
            {
              id: 'control',
              labelEn: 'Hardening Control',
              labelTh: 'กลไกเสริมแกร่ง',
              choices: [
                { value: 'allow-list', labelEn: 'Application Allow List', labelTh: 'Application Allow List' },
                { value: 'default-creds', labelEn: 'Default Vendor Credentials', labelTh: 'คงค่ารหัสผ่านเริ่มต้น' },
                { value: 'permissive-acl', labelEn: 'Any-Any Inbound Rule', labelTh: 'เปิดพอร์ตขาเข้าทั้งหมด' }
              ]
            },
            {
              id: 'mode',
              labelEn: 'Enforcement State',
              labelTh: 'สถานะการบังคับใช้',
              choices: [
                { value: 'enforce', labelEn: 'Enforce', labelTh: 'Enforce (บังคับใช้จริง)' },
                { value: 'disabled', labelEn: 'Disabled', labelTh: 'ปิดการทำงาน' },
                { value: 'exception', labelEn: 'Permanent Exemption', labelTh: 'ยกเว้นถาวร' }
              ]
            }
          ],
          expectedValues: {
            scope: 'managed-hosts',
            control: 'allow-list',
            mode: 'enforce'
          }
        }
      ]
    },
    rubric: [
      { id: 'rule1', descriptionTh: 'กำหนดกฎอนุญาต HTTPS (TCP/443) ไปยัง 10.50.10.20 ถูกต้องครบทั้ง 3 ช่อง', weight: 0.34 },
      { id: 'rule2', descriptionTh: 'กำหนดกฎปฏิเสธ Telnet (TCP/23) พร้อมเปิด Log & Alert ถูกต้องครบทั้ง 3 ช่อง', weight: 0.33 },
      { id: 'rule3', descriptionTh: 'กำหนดกฎ Application Allow List แบบ Enforce บนเครื่องปลายทางองค์กรถูกต้องครบทั้ง 3 ช่อง', weight: 0.33 }
    ],
    explanationTh:
      'การเสริมแกร่งระดับเครือข่ายและโฮสต์อาศัยหลัก Least Privilege โดยอนุญาตเฉพาะโปรโตคอลที่เข้ารหัสไปยังปลายทางเฉพาะเจาะจง ปิดบริการที่ไม่ปลอดภัยพร้อมบันทึก Log การละเมิด และจำกัดการรันโปรแกรมบนเครื่องปลายทางให้อยู่ในรายการที่อนุมัติเท่านั้น',
    misconceptionTh:
      'ผู้เรียนมักมองข้ามการเปิดบันทึก Log เมื่อสร้างกฎปฏิเสธบริการเก่า ทำให้ทีมเฝ้าระวังไม่ทราบความพยายามสแกนหรือใช้งานโปรโตคอลต้องห้าม',
    relatedLessonIds: ['L2-09'],
    tags: ['pbq', 'hardening', 'firewall-acl', 'objective-2.5']
  }
];
