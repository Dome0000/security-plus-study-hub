import type { PbqQuestion } from '../../types';

export const PBQ_D4: PbqQuestion[] = [
  {
    id: 'PBQ-D4-01',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    difficulty: 'exam-ready',
    titleEn: 'Enterprise Security Controls & Rule Modification',
    titleTh: 'ปรับแต่งกฎและมาตรการความปลอดภัยระดับองค์กร',
    scenarioEn:
      'Following an internal security review, an administrator must modify four enterprise controls: remediate an overly permissive database firewall ACL, enforce strict email anti-spoofing after completing DMARC monitoring, harden DNS and web egress filtering, and enforce 802.1X/NAC posture compliance on campus switch ports.',
    scenarioTh:
      'หลังการตรวจสอบความปลอดภัยภายใน ผู้ดูแลระบบต้องปรับปรุงมาตรการควบคุมองค์กร 4 ส่วน ได้แก่ แก้ไขกฎ Firewall ACL ของฐานข้อมูลที่เปิดกว้างเกินไป บังคับใช้นโยบายป้องกันการปลอมแปลงอีเมลหลังจบช่วงเฝ้าติดตาม เสริมแกร่งการกรอง DNS และเว็บขาออก และบังคับใช้ 802.1X/NAC บนพอร์ตสวิตช์ภายใน',
    instructionsEn:
      'Review the enterprise operations baseline table and select the required configuration values across all four rules.',
    instructionsTh:
      'ตรวจสอบตารางข้อมูลพื้นฐานการปฏิบัติงานขององค์กรแล้วเลือกค่าการตั้งค่าที่ถูกต้องในแต่ละกฎทั้ง 4 ข้อ',
    config: {
      template: 'rule-builder',
      contextTableTitle: 'Enterprise Security Operations Baseline',
      contextRows: [
        {
          label: 'Firewall ACL Issue',
          value: 'Rule 101 currently: Permit Any -> 10.40.2.0/24 TCP/Any; Finance DB: 10.40.2.15 (TCP/5432 from App Tier 10.40.1.0/24 only); FTP (TCP/21) prohibited'
        },
        {
          label: 'Email Authentication Status',
          value: 'Domain: siamfin-corp.example | SPF (~all) & DKIM active; sender inventory finalized; drop unauthenticated mail outright & collect daily aggregate XML reports'
        },
        {
          label: 'DNS & Web Egress Policy',
          value: 'Internal Protective DNS: 10.10.0.53; Forward Proxy: proxy.corp:8443; block C2 lookups, Newly Registered Domains (NRDs), and .exe/.ps1 downloads'
        },
        {
          label: 'NAC & 802.1X Switch Policy',
          value: 'EAP-TLS & RADIUS posture checks active; compliant laptops -> Production VLAN; missing EDR/OS patches -> isolated remediation; unknown devices -> blocked'
        }
      ],
      rules: [
        {
          id: 'rule1',
          titleEn: 'Rule 1: Firewall ACL & Database Tier Hardening',
          titleTh: 'กฎที่ 1: การแก้ไข Firewall ACL และจำกัดสิทธิ์ระดับฐานข้อมูล',
          fields: [
            {
              id: 'placement',
              labelEn: 'ACL Rule Ordering',
              labelTh: 'ลำดับการจัดวางกฎใน ACL',
              choices: [
                {
                  value: 'middle-after-permit',
                  labelEn: 'Insert below the existing Permit Any rule',
                  labelTh: 'แทรกไว้ใต้กฎ Permit Any เดิม'
                },
                {
                  value: 'top-before-broad',
                  labelEn: 'Place specific rules above general rules (and remove/replace broad Permit Any)',
                  labelTh: 'วางกฎเฉพาะเจาะจงไว้ด้านบนก่อนกฎทั่วไป (และลบ/แทนที่ Permit Any ที่กว้างเกินไป)'
                },
                {
                  value: 'bottom-after-deny',
                  labelEn: 'Append below the Implicit Deny rule',
                  labelTh: 'ต่อท้ายด้านล่างหลังกฎ Implicit Deny'
                }
              ]
            },
            {
              id: 'dbAccess',
              labelEn: 'Permitted DB Traffic',
              labelTh: 'ทราฟฟิกฐานข้อมูลที่อนุญาต',
              choices: [
                {
                  value: 'tcp-21-any',
                  labelEn: 'Allow TCP/21 from Any to 10.40.2.15',
                  labelTh: 'อนุญาต TCP/21 จาก Any ไปยัง 10.40.2.15'
                },
                {
                  value: 'tcp-any-any',
                  labelEn: 'Allow TCP/Any from 10.40.1.0/24 to Any',
                  labelTh: 'อนุญาต TCP/Any จาก 10.40.1.0/24 ไปยัง Any'
                },
                {
                  value: 'tcp-5432-app',
                  labelEn: 'Allow TCP/5432 from 10.40.1.0/24 to 10.40.2.15',
                  labelTh: 'อนุญาต TCP/5432 จาก 10.40.1.0/24 ไปยัง 10.40.2.15'
                }
              ]
            },
            {
              id: 'egressLegacy',
              labelEn: 'Legacy Protocol & Egress Control',
              labelTh: 'การควบคุมโปรโตคอลเก่าและทราฟฟิกขาออก',
              choices: [
                {
                  value: 'deny-ftp-restrict-egress',
                  labelEn: 'Deny TCP/21 and restrict egress to approved destinations',
                  labelTh: 'ปฏิเสธ TCP/21 และจำกัด Egress เฉพาะปลายทางที่อนุมัติ'
                },
                {
                  value: 'remap-ftp-2121',
                  labelEn: 'Relocate FTP listener from TCP/21 to TCP/2121',
                  labelTh: 'ย้ายพอร์ตบริการ FTP จาก TCP/21 ไปใช้ TCP/2121'
                },
                {
                  value: 'allow-all-egress',
                  labelEn: 'Allow all outbound ports and filter inbound only',
                  labelTh: 'อนุญาตทราฟฟิกขาออกทุกพอร์ตและกรองเฉพาะขาเข้า'
                }
              ]
            }
          ],
          expectedValues: {
            placement: 'top-before-broad',
            dbAccess: 'tcp-5432-app',
            egressLegacy: 'deny-ftp-restrict-egress'
          }
        },
        {
          id: 'rule2',
          titleEn: 'Rule 2: Email Authentication (SPF, DKIM & DMARC)',
          titleTh: 'กฎที่ 2: การตั้งค่าการยืนยันตัวตนอีเมล (SPF, DKIM และ DMARC)',
          fields: [
            {
              id: 'spfQualifier',
              labelEn: 'SPF All Mechanism',
              labelTh: 'กลไกส่วนท้ายของ SPF',
              choices: [
                {
                  value: 'passall',
                  labelEn: '+all (Pass)',
                  labelTh: '+all (Pass)'
                },
                {
                  value: 'hardfail',
                  labelEn: '-all (Fail)',
                  labelTh: '-all (Fail)'
                },
                {
                  value: 'neutral',
                  labelEn: '?all (Neutral)',
                  labelTh: '?all (Neutral)'
                }
              ]
            },
            {
              id: 'dmarcPolicy',
              labelEn: 'DMARC Policy Action',
              labelTh: 'นโยบายการจัดการของ DMARC',
              choices: [
                {
                  value: 'p-none',
                  labelEn: 'p=none',
                  labelTh: 'p=none'
                },
                {
                  value: 'p-quarantine',
                  labelEn: 'p=quarantine',
                  labelTh: 'p=quarantine'
                },
                {
                  value: 'p-reject',
                  labelEn: 'p=reject',
                  labelTh: 'p=reject'
                }
              ]
            },
            {
              id: 'dmarcReporting',
              labelEn: 'DMARC Aggregate Reporting',
              labelTh: 'การรับรายงานสรุป DMARC',
              choices: [
                {
                  value: 'ruf-only',
                  labelEn: 'ruf=mailto:forensic@siamfin-corp.example (failure samples only)',
                  labelTh: 'ruf=mailto:forensic@siamfin-corp.example (เฉพาะตัวอย่างที่ล้มเหลว)'
                },
                {
                  value: 'pct-0',
                  labelEn: 'pct=0',
                  labelTh: 'pct=0'
                },
                {
                  value: 'rua',
                  labelEn: 'rua=mailto:dmarc-agg@siamfin-corp.example',
                  labelTh: 'rua=mailto:dmarc-agg@siamfin-corp.example'
                }
              ]
            }
          ],
          expectedValues: {
            spfQualifier: 'hardfail',
            dmarcPolicy: 'p-reject',
            dmarcReporting: 'rua'
          }
        },
        {
          id: 'rule3',
          titleEn: 'Rule 3: DNS & Web Filtering Hardening',
          titleTh: 'กฎที่ 3: การตั้งค่า DNS Filtering และ Web Filtering',
          fields: [
            {
              id: 'dnsAction',
              labelEn: 'DNS Filtering Action',
              labelTh: 'การทำงานของ DNS Filtering',
              choices: [
                {
                  value: 'allow-doh-bypass',
                  labelEn: 'Allow client DoH directly to external public resolvers',
                  labelTh: 'อนุญาตให้เครื่องลูกข่ายใช้ DoH ตรงไปยัง Resolver สาธารณะ'
                },
                {
                  value: 'sinkhole',
                  labelEn: 'Sinkhole / NXDOMAIN via internal Protective DNS',
                  labelTh: 'ทำ Sinkhole / ตอบ NXDOMAIN ผ่าน Protective DNS ภายใน'
                },
                {
                  value: 'round-robin',
                  labelEn: 'Enable Round-Robin DNS resolution for external hosts',
                  labelTh: 'เปิดใช้ Round-Robin DNS สำหรับโฮสต์ภายนอก'
                }
              ]
            },
            {
              id: 'proxyMode',
              labelEn: 'Web Proxy & HTTPS Inspection',
              labelTh: 'การทำงานของ Web Proxy และ HTTPS',
              choices: [
                {
                  value: 'direct-egress',
                  labelEn: 'Permit direct outbound TCP/443 bypassing proxy inspection',
                  labelTh: 'อนุญาตทราฟฟิก TCP/443 ขาออกโดยตรงไม่ต้องผ่าน Proxy'
                },
                {
                  value: 'reverse-proxy-only',
                  labelEn: 'Deploy inbound Reverse Proxy without outbound filtering',
                  labelTh: 'ติดตั้งเฉพาะ Reverse Proxy ขาเข้าโดยไม่กรองขาออก'
                },
                {
                  value: 'central-proxy-tls',
                  labelEn: 'Enforce Centralized Forward Proxy with TLS inspection and URL scanning',
                  labelTh: 'บังคับใช้ Centralized Forward Proxy พร้อม TLS Inspection และ URL Scanning'
                }
              ]
            },
            {
              id: 'categoryBlock',
              labelEn: 'Reputation & Content Filtering',
              labelTh: 'การกรองตามชื่อเสียงและหมวดหมู่เนื้อหา',
              choices: [
                {
                  value: 'block-nrd-exe',
                  labelEn: 'Block Newly Registered Domains (NRDs) and .exe/.ps1 downloads',
                  labelTh: 'บล็อกโดเมน NRD และการดาวน์โหลดไฟล์ .exe/.ps1'
                },
                {
                  value: 'audit-only-nrd',
                  labelEn: 'Permit NRD access and executable downloads in audit-only mode',
                  labelTh: 'อนุญาตการเข้าถึง NRD และดาวน์โหลดไฟล์ปฏิบัติการในโหมด Audit-only'
                },
                {
                  value: 'static-ip-only',
                  labelEn: 'Filter by static IP lists without domain reputation feeds',
                  labelTh: 'กรองเฉพาะรายการ IP แบบคงที่โดยไม่ใช้ข้อมูล Reputation'
                }
              ]
            }
          ],
          expectedValues: {
            dnsAction: 'sinkhole',
            proxyMode: 'central-proxy-tls',
            categoryBlock: 'block-nrd-exe'
          }
        },
        {
          id: 'rule4',
          titleEn: 'Rule 4: NAC & 802.1X Switch Port Enforcement',
          titleTh: 'กฎที่ 4: การบังคับใช้สิทธิ์เครือข่ายด้วย NAC และ 802.1X',
          fields: [
            {
              id: 'authProtocol',
              labelEn: 'Managed Laptop Port Auth',
              labelTh: 'การยืนยันตัวตนพอร์ตสำหรับโน้ตบุ๊กองค์กร',
              choices: [
                {
                  value: 'mab-laptops',
                  labelEn: 'MAC Authentication Bypass (MAB) for employee laptops',
                  labelTh: 'ใช้ MAC Authentication Bypass (MAB) กับโน้ตบุ๊กพนักงาน'
                },
                {
                  value: 'dot1x-eap-tls',
                  labelEn: 'IEEE 802.1X with EAP-TLS & RADIUS posture check',
                  labelTh: 'IEEE 802.1X ร่วมกับ EAP-TLS และ RADIUS ตรวจสุขภาพเครื่อง'
                },
                {
                  value: 'static-vlan',
                  labelEn: 'Static Production VLAN assignment without authentication',
                  labelTh: 'กำหนด Production VLAN แบบคงที่โดยไม่ยืนยันตัวตน'
                }
              ]
            },
            {
              id: 'nonCompliantAction',
              labelEn: 'Out-of-Compliance Laptop Action',
              labelTh: 'การจัดการเครื่องที่ไม่ผ่านเกณฑ์ความปลอดภัย',
              choices: [
                {
                  value: 'production-vlan',
                  labelEn: 'Assign Production VLAN with email warning only',
                  labelTh: 'อนุญาตเข้า Production VLAN โดยส่งอีเมลเตือนเท่านั้น'
                },
                {
                  value: 'disable-posture',
                  labelEn: 'Skip posture assessment when certificate is valid',
                  labelTh: 'ข้ามการตรวจสุขภาพเครื่องเมื่อใบรับรองถูกต้อง'
                },
                {
                  value: 'quarantine-vlan',
                  labelEn: 'Assign Quarantine / Remediation VLAN (patch/EDR servers only)',
                  labelTh: 'ย้ายเข้า Quarantine / Remediation VLAN (เข้าถึงเฉพาะเซิร์ฟเวอร์อัปเดต)'
                }
              ]
            },
            {
              id: 'unknownDeviceAction',
              labelEn: 'Unrecognized / Rogue Device',
              labelTh: 'การจัดการอุปกรณ์แปลกปลอมที่ไม่รู้จัก',
              choices: [
                {
                  value: 'deny-port',
                  labelEn: 'Deny network access and alert SOC',
                  labelTh: 'ปฏิเสธการเข้าถึงเครือข่ายและแจ้งเตือน SOC'
                },
                {
                  value: 'corp-lan',
                  labelEn: 'Assign Corporate LAN VLAN for monitoring',
                  labelTh: 'กำหนดให้อยู่ใน Corporate LAN VLAN เพื่อเฝ้าสังเกต'
                },
                {
                  value: 'quarantine-internet',
                  labelEn: 'Grant unrestricted internet access in Quarantine VLAN',
                  labelTh: 'เปิดอินเทอร์เน็ตเต็มรูปแบบภายใน Quarantine VLAN'
                }
              ]
            }
          ],
          expectedValues: {
            authProtocol: 'dot1x-eap-tls',
            nonCompliantAction: 'quarantine-vlan',
            unknownDeviceAction: 'deny-port'
          }
        }
      ]
    },
    rubric: [
      {
        id: 'rule1',
        descriptionTh:
          'จัดวางกฎเฉพาะเหนือ Permit Broad, จำกัด TCP/5432 เฉพาะ App Tier ไป DB และปิด FTP/ควบคุม Egress ถูกต้อง',
        weight: 0.25
      },
      {
        id: 'rule2',
        descriptionTh:
          'กำหนด SPF -all, DMARC p=reject และแท็ก rua สำหรับรับรายงานสรุปรวมถูกต้อง',
        weight: 0.25
      },
      {
        id: 'rule3',
        descriptionTh:
          'กำหนด DNS Sinkhole, Centralized Forward Proxy พร้อม TLS Inspection และบล็อก NRD/ไฟล์ปฏิบัติการถูกต้อง',
        weight: 0.25
      },
      {
        id: 'rule4',
        descriptionTh:
          'กำหนด 802.1X EAP-TLS, Quarantine VLAN สำหรับเครื่องไม่ผ่าน Posture และ Deny สำหรับอุปกรณ์แปลกปลอมถูกต้อง',
        weight: 0.25
      }
    ],
    explanationTh:
      '1) Firewall ACL ประมวลผลแบบ Top-down (First match wins) และจบด้วย Implicit Deny จึงต้องวางกฎเฉพาะ (TCP/5432 จาก 10.40.1.0/24 ไป 10.40.2.15) เหนือกฎทั่วไป พร้อมลบหรือแทนที่กฎ Rule 101 (Permit Any) เดิมที่กว้างเกินไปและปฏิเสธ FTP (TCP/21) ที่ไม่เข้ารหัส รวมถึงจำกัด Egress แทนการย้ายพอร์ต (Security through Obscurity) 2) เมื่อรายการผู้ส่งครบแล้ว ต้องเปลี่ยน SPF เป็น -all (Fail), ตั้ง DMARC เป็น p=reject เพื่อทิ้งอีเมลปลอมทันที (ไม่ส่งเข้าสแปมแบบ quarantine และไม่เพียงเฝ้าดูแบบ none) และระบุ rua สำหรับรายงานสรุปรวม (ส่วน ruf ใช้สำหรับตัวอย่างล้มเหลวเฉพาะรายการ) 3) Protective DNS ทำ Sinkholing ก่อนเกิดการเชื่อมต่อ, Centralized Forward Proxy ทำ TLS Inspection และ URL Scanning ระดับเนื้อหา/ชื่อเสียงเพื่อบล็อก NRD และไฟล์ .exe/.ps1 4) 802.1X EAP-TLS + RADIUS ตรวจทั้งตัวตนและ Posture (MAB ใช้กับอุปกรณ์ที่ไม่มี Supplicant เช่น เครื่องพิมพ์เท่านั้น), เครื่องที่ไม่ผ่านแพตช์/EDR ต้องถูกแยกไป Quarantine VLAN เพื่อแก้ไข และอุปกรณ์แปลกปลอมต้องถูก Deny',
    misconceptionTh:
      'ความเข้าใจผิดที่พบบ่อยคือการแทรกกฎ Deny ใต้ Permit Any (ซึ่งไม่มีผลเพราะ First match wins), คิดว่าการย้ายพอร์ต FTP ไป 2121 ช่วยเพิ่มความปลอดภัยจริง, สับสนระหว่าง DMARC rua กับ ruf หรือ p=quarantine กับ p=reject และคิดว่า MAB เหมาะกับโน้ตบุ๊กองค์กรแทน 802.1X',
    relatedLessonIds: ['L4-06', 'L4-07'],
    tags: ['pbq', 'rule-builder', 'firewall', 'dmarc', 'dns-filtering', 'nac', '802.1x']
  },
  {
    id: 'PBQ-D4-02',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.8'],
    difficulty: 'exam-ready',
    titleEn: 'Incident Response Sequencing & Forensic Preservation Triage',
    titleTh: 'จัดลำดับกระบวนการตอบสนองเหตุการณ์และนิติวิทยาศาสตร์ดิจิทัล',
    scenarioEn:
      'During business hours, EDR telemetry triggers a high-severity alert on finance workstation FIN-WS-042 indicating suspected LSASS credential dumping and outbound C2 beaconing. Legal counsel warns that litigation and regulatory reporting may follow.',
    scenarioTh:
      'ในเวลาทำการ ระบบ EDR แจ้งเตือนระดับสูงบนเครื่อง FIN-WS-042 ของฝ่ายการเงินว่าพบพฤติกรรมต้องสงสัยในการดึงข้อมูลรับรองจาก LSASS และการสื่อสารไปยัง C2 ภายนอก โดยฝ่ายกฎหมายแจ้งว่าเหตุการณ์นี้อาจนำไปสู่การดำเนินคดีและการรายงานต่อหน่วยงานกำกับดูแล',
    instructionsEn:
      'First, arrange all five Incident Response and Digital Forensics steps in strict chronological execution order. Second, select the single best immediate triage action.',
    instructionsTh:
      'ขั้นที่ 1 เรียงลำดับการปฏิบัติงาน Incident Response และ Digital Forensics ทั้ง 5 ขั้นตอนตามลำดับเวลาที่ถูกต้อง ขั้นที่ 2 เลือกการตัดสินใจเฉพาะหน้าที่เหมาะสมที่สุด',
    config: {
      template: 'sequence-and-triage',
      sequencePromptEn:
        'Order the 5 Incident Response & Digital Forensics actions from FIRST (1) to LAST (5), adhering to Order of Volatility and evidence integrity:',
      sequencePromptTh:
        'เรียงลำดับขั้นตอน Incident Response และ Digital Forensics ทั้ง 5 ขั้นจากแรก (1) ไปท้ายสุด (5) โดยยึดหลัก Order of Volatility และความสมบูรณ์ของหลักฐาน:',
      steps: [
        {
          id: 'ir-disk-coc',
          labelEn:
            'Acquire a bit-for-bit forensic disk image using a hardware write blocker, record cryptographic hashes, and update Chain of Custody',
          labelTh:
            'สร้างสำเนา Forensic Image ของดิสก์แบบบิตต่อบิตผ่าน Hardware Write Blocker คำนวณค่า Hash และบันทึก Chain of Custody'
        },
        {
          id: 'ir-lessons',
          labelEn:
            'Complete forensic reporting, Root Cause Analysis (RCA), and Lessons Learned updates to IR playbooks',
          labelTh:
            'จัดทำรายงานทางนิติวิทยาศาสตร์ วิเคราะห์สาเหตุรากเหง้า (RCA) และอัปเดตบทเรียนลงใน IR Playbook'
        },
        {
          id: 'ir-detect-analyze',
          labelEn:
            'Validate the detection alert, determine affected scope, and issue Legal Hold to suspend automated data deletion',
          labelTh:
            'ตรวจสอบยืนยันสัญญาณแจ้งเตือน ประเมินขอบเขตที่ได้รับผลกระทบ และออกคำสั่ง Legal Hold เพื่อระงับการลบข้อมูลอัตโนมัติ'
        },
        {
          id: 'ir-eradicate-recover',
          labelEn:
            'Eradicate persistence mechanisms, reimage the workstation, reset compromised credentials, and restore validated clean backups',
          labelTh:
            'กำจัดกลไกฝังตัว ติดตั้งระบบปฏิบัติการใหม่จากอิมเมจที่สะอาด รีเซ็ตรหัสผ่านที่เกี่ยวข้อง และกู้คืนข้อมูลจาก Backup ที่ตรวจสอบแล้ว'
        },
        {
          id: 'ir-volatile',
          labelEn:
            'Capture volatile evidence (CPU state, RAM memory dump, and active network connections) before disk acquisition or shutdown',
          labelTh:
            'เก็บหลักฐานแบบผันผวน (สถานะ CPU, หน่วยความจำ RAM และเซสชันเครือข่ายที่เปิดอยู่) ก่อนการเก็บดิสก์หรือปิดเครื่อง'
        }
      ],
      expectedOrder: [
        'ir-detect-analyze',
        'ir-volatile',
        'ir-disk-coc',
        'ir-eradicate-recover',
        'ir-lessons'
      ],
      triageDecision: {
        promptEn:
          'Active lateral SMB probing from FIN-WS-042 is detected right now. Which immediate containment & preservation action should the CSIRT execute FIRST?',
        promptTh:
          'ตรวจพบการสแกน SMB เพื่อขยายผลจาก FIN-WS-042 อยู่ในขณะนี้ ทีม CSIRT ควรเลือกดำเนินการกักกันและรักษาหลักฐานข้อใดเป็นอันดับแรก?',
        choices: [
          {
            id: 'unplug-power',
            textEn: 'Immediately pull the workstation power cord to terminate malicious memory-resident processes',
            textTh: 'ดึงปลั๊กไฟของเครื่องลูกข่ายออกทันทีเพื่อหยุดโปรเซสอันตรายในหน่วยความจำ'
          },
          {
            id: 'edr-isolate',
            textEn:
              'Initiate EDR host network isolation while keeping the system powered on for volatile memory acquisition',
            textTh:
              'สั่งแยกเครือข่ายเครื่องผ่านคอนโซล EDR โดยคงสถานะเปิดเครื่องไว้เพื่อเก็บข้อมูลในหน่วยความจำ RAM'
          },
          {
            id: 'remote-reimage',
            textEn: 'Push an automated MDM/OS reimage task immediately to return the workstation to service',
            textTh: 'สั่งล้างเครื่องและติดตั้งระบบปฏิบัติการใหม่อัตโนมัติทันทีเพื่อให้กลับมาใช้งานได้เร็วที่สุด'
          },
          {
            id: 'delete-temp-files',
            textEn: 'Run a local cleanup script to delete suspicious executables directly on the original disk',
            textTh: 'รันสคริปต์ลบไฟล์ต้องสงสัยบนดิสก์ต้นฉบับโดยตรง'
          }
        ],
        expectedChoiceId: 'edr-isolate'
      }
    },
    rubric: [
      {
        id: 'pos-1',
        descriptionTh: 'ลำดับที่ 1: ตรวจสอบยืนยันเหตุการณ์ ประเมินขอบเขต และออก Legal Hold',
        weight: 0.15
      },
      {
        id: 'pos-2',
        descriptionTh: 'ลำดับที่ 2: เก็บหลักฐานผันผวน (RAM/Network State) ตาม Order of Volatility',
        weight: 0.15
      },
      {
        id: 'pos-3',
        descriptionTh: 'ลำดับที่ 3: เก็บ Forensic Disk Image ผ่าน Write Blocker, Hash และ Chain of Custody',
        weight: 0.15
      },
      {
        id: 'pos-4',
        descriptionTh: 'ลำดับที่ 4: Eradication, Reimage, Reset Credentials และ Recovery จาก Backup สะอาด',
        weight: 0.15
      },
      {
        id: 'pos-5',
        descriptionTh: 'ลำดับที่ 5: Forensic Reporting, RCA และ Lessons Learned',
        weight: 0.15
      },
      {
        id: 'triage',
        descriptionTh: 'เลือก EDR Host Network Isolation โดยไม่ตัดไฟเพื่อให้เก็บ RAM ได้ครบถ้วน',
        weight: 0.25
      }
    ],
    explanationTh:
      'กระบวนการตอบสนองเหตุการณ์และ Digital Forensics ต้องเรียงลำดับอย่างเคร่งครัด: (1) ยืนยันสัญญาณและออก Legal Hold เพื่อป้องกันการลบหลักฐานโดยอัตโนมัติ, (2) เก็บข้อมูลแบบผันผวนสูงที่สุดก่อนตาม Order of Volatility (CPU/RAM/เซสชันเครือข่าย) เพราะข้อมูลใน RAM จะหายทันทีเมื่อปิดเครื่อง, (3) เก็บ Forensic Disk Image แบบบิตต่อบิตด้วย Hardware Write Blocker คำนวณค่า Hash และบันทึก Chain of Custody อย่างต่อเนื่อง, (4) จึงค่อย Eradicate/Reimage/Reset Credentials และ Recovery จาก Clean Backup, และ (5) สรุปรายงาน วิเคราะห์ RCA และถอดบทเรียน (Lessons Learned) สำหรับการกักกันเฉพาะหน้า การสั่ง EDR Host Network Isolation หยุดการแพร่กระจาย Lateral Movement ได้ทันทีโดยยังรักษา RAM ไว้สำหรับนิติวิทยาศาสตร์ ต่างจากการดึงปลั๊กไฟ รีอิมเมจทันที หรือแก้ไฟล์บนดิสก์ต้นฉบับที่ทำลายหลักฐาน',
    misconceptionTh:
      'ผู้ปฏิบัติงานมักดึงปลั๊กไฟหรือรีบูตเครื่องทันทีเพื่อหยุดภัยคุกคาม ซึ่งทำให้ข้อมูลใน RAM หายหมด หรือสั่งเก็บ Disk Image ก่อนเก็บ RAM ซึ่งขัดหลัก Order of Volatility และทำลายความน่าเชื่อถือของหลักฐาน',
    relatedLessonIds: ['L4-11'],
    tags: ['pbq', 'sequence-and-triage', 'incident-response', 'digital-forensics', 'order-of-volatility']
  },
  {
    id: 'PBQ-D4-03',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.9'],
    difficulty: 'exam-ready',
    titleEn: 'Multi-Source Incident Investigation & Log Correlation',
    titleTh: 'สืบสวนเหตุการณ์ภัยคุกคามจากแหล่งข้อมูล Log หลายแหล่ง',
    scenarioEn:
      'A SIEM dashboard indicates an unexpected outbound data spike from a screened subnet web server. All network, endpoint, and scanning systems are NTP-synchronized to UTC. Inspect all three artifact tabs to determine the attack path, impact, and remediation priorities.',
    scenarioTh:
      'แดชบอร์ด SIEM แจ้งเตือนปริมาณทราฟฟิกขาออกสูงผิดปกติจากเว็บเซิร์ฟเวอร์ในโซน Screened Subnet โดยระบบทั้งหมดซิงค์เวลาด้วย NTP เป็น UTC จงตรวจสอบข้อมูลทั้ง 3 แท็บเพื่อระบุเส้นทางการโจมตี ผลกระทบ และลำดับความสำคัญในการแก้ไข',
    instructionsEn:
      'Switch between all three data source tabs and select the accurate investigation conclusion for each finding.',
    instructionsTh:
      'สลับดูข้อมูลในแท็บแหล่งข้อมูลทั้ง 3 แท็บแล้วเลือกข้อสรุปการสืบสวนที่ถูกต้องสำหรับแต่ละข้อค้นพบ',
    config: {
      template: 'log-investigator',
      artifactTabs: [
        {
          id: 'fw',
          title: 'Firewall & NetFlow Logs (UTC)',
          lines: [
            '2026-11-18T02:14:05Z FW-EXT ALLOW TCP src=198.51.100.88:54112 dst=172.16.10.20:443 rule=DMZ-HTTPS-IN',
            '2026-11-18T02:14:42Z FW-EXT DENY  TCP src=198.51.100.88:54190 dst=172.16.10.20:22 rule=IMPLICIT-DENY',
            '2026-11-18T02:16:10Z FW-INT ALLOW TCP src=172.16.10.20:49821 dst=10.30.5.40:1433 rule=TEMP-APP-TO-DB',
            '2026-11-18T02:19:30Z FW-EXT ALLOW TCP src=172.16.10.20:51004 dst=203.0.113.199:8443 bytes_out=312480000 bytes_in=14200 duration=145s rule=ANY-OUTBOUND-HTTPS',
            '2026-11-18T02:21:00Z FW-EXT DENY  UDP src=172.16.10.20:58211 dst=203.0.113.199:53 rule=DNS-EGRESS-BLOCK'
          ]
        },
        {
          id: 'edr',
          title: 'Endpoint / EDR & OS Security Logs (UTC)',
          lines: [
            '2026-11-18T02:14:05Z HOST=DMZ-WEB-01 IIS-HTTP method=POST uri="/plugin/upload" status=200 src=198.51.100.88',
            '2026-11-18T02:14:09Z HOST=DMZ-WEB-01 proc_parent=w3wp.exe proc_child=cmd.exe cmd="cmd.exe /c whoami && net user svc_backup P@ss!982 /add"',
            '2026-11-18T02:14:15Z HOST=DMZ-WEB-01 OS-SEC EventID=4720 action=Account_Created target_user=svc_backup actor=IIS_APPPOOL',
            '2026-11-18T02:14:18Z HOST=DMZ-WEB-01 OS-SEC EventID=4732 action=Added_To_Local_Administrators target_user=svc_backup',
            '2026-11-18T02:16:12Z HOST=DMZ-WEB-01 EDR_FILE action=Created path="C:\\Windows\\Temp\\db_dump.zip" size=312450112',
            '2026-11-18T02:19:28Z HOST=DMZ-WEB-01 EDR_NET proc=curl.exe dst=203.0.113.199:8443 file="db_dump.zip"'
          ]
        },
        {
          id: 'vuln_pcap',
          title: 'Vulnerability Scan & PCAP Metadata (UTC)',
          lines: [
            'SCAN_ID=VS-2026-11-17 HOST=DMZ-WEB-01 (172.16.10.20) CVE-2024-21410 CVSS_BASE=9.8 STATUS=OPEN desc="Unpatched RCE in web upload plugin"',
            'SCAN_ID=VS-2026-11-17 HOST=DMZ-WEB-01 (172.16.10.20) CVE-2023-44487 CVSS_BASE=7.5 STATUS=MITIGATED_BY_WAF',
            'SCAN_ID=VS-2026-11-17 HOST=INT-DB-01  (10.30.5.40)   CVE-2024-38063 CVSS_BASE=9.8 STATUS=PATCHED_VERIFIED',
            'PCAP_META 02:14:05Z src=198.51.100.88 dst=172.16.10.20:443 tls_sni="portal.siamfin.example" proto=TCP/TLS1.3 note="TLS 1.3 encrypted payload; no key escrow"',
            'PCAP_META 02:19:30Z src=172.16.10.20 dst=203.0.113.199:8443 proto=TCP/TLS ja3_match="curl/8.x" note="Encrypted outbound stream ~298 MiB"'
          ]
        }
      ],
      findings: [
        {
          id: 'f1',
          promptEn:
            'Correlating the Firewall, EDR, and Vulnerability Scan data, which entry vector and vulnerability MOST likely enabled initial code execution on DMZ-WEB-01?',
          promptTh:
            'เมื่อเชื่อมโยงข้อมูล Firewall, EDR และ Vulnerability Scan ช่องทางเข้าถึงและช่องโหว่ใดที่น่าจะเป็นจุดเริ่มต้นของการรันโค้ดบน DMZ-WEB-01 มากที่สุด?',
          choices: [
            {
              id: 'c1',
              textEn: 'SSH brute-force authentication over TCP/22 from 198.51.100.88',
              textTh: 'การโจมตีคาดเดารหัสผ่าน SSH ผ่าน TCP/22 จาก 198.51.100.88'
            },
            {
              id: 'c2',
              textEn: 'Exploitation of unpatched CVE-2024-21410 over TCP/443 causing w3wp.exe to spawn cmd.exe',
              textTh: 'การเจาะช่องโหว่ CVE-2024-21410 ที่ยังไม่ได้แพตช์ผ่าน TCP/443 ทำให้ w3wp.exe เรียก cmd.exe'
            },
            {
              id: 'c3',
              textEn: 'Direct remote exploitation of CVE-2024-38063 on INT-DB-01 from external IP 198.51.100.88',
              textTh: 'การเจาะช่องโหว่ CVE-2024-38063 บน INT-DB-01 โดยตรงจากภายนอกผ่าน 198.51.100.88'
            },
            {
              id: 'c4',
              textEn: 'Exploitation of CVE-2023-44487 bypassing WAF mitigation to run DNS tunneling',
              textTh: 'การใช้ช่องโหว่ CVE-2023-44487 ทะลุ WAF เพื่อทำ DNS tunneling'
            }
          ],
          expectedChoiceId: 'c2'
        },
        {
          id: 'f2',
          promptEn:
            'Which host-level persistence and privilege escalation event is confirmed in the Endpoint / OS Security Logs between 02:14:09Z and 02:14:18Z?',
          promptTh:
            'เหตุการณ์ฝังตัวและยกระดับสิทธิ์ระดับโฮสต์ใดที่ยืนยันได้จาก Endpoint และ OS Security Log ในช่วงเวลา 02:14:09Z ถึง 02:14:18Z?',
          choices: [
            {
              id: 'c1',
              textEn: 'Full-disk ransomware encryption initiated by a scheduled backup task',
              textTh: 'การเข้ารหัสเรียกค่าไถ่ทั้งดิสก์โดยงานสำรองข้อมูลตามกำหนดเวลา'
            },
            {
              id: 'c2',
              textEn: 'Unauthorized modification of firewall syslog settings via SNMP traps',
              textTh: 'การแก้ไขค่า Syslog ของไฟร์วอลล์โดยไม่ได้รับอนุญาตผ่าน SNMP trap'
            },
            {
              id: 'c3',
              textEn: 'Creation of local account "svc_backup" and addition to Local Administrators',
              textTh: 'การสร้างบัญชีท้องถิ่น "svc_backup" และเพิ่มเข้ากลุ่ม Local Administrators'
            },
            {
              id: 'c4',
              textEn: 'Legitimate database schema migration executed by the IIS service account',
              textTh: 'การปรับโครงสร้างฐานข้อมูลตามปกติโดยบัญชีบริการ IIS'
            }
          ],
          expectedChoiceId: 'c3'
        },
        {
          id: 'f3',
          promptEn:
            'What do the Firewall NetFlow counters, EDR network log, and PCAP metadata jointly establish about the 02:19:30Z outbound connection?',
          promptTh:
            'ข้อมูล NetFlow บนไฟร์วอลล์ บันทึกเครือข่ายของ EDR และ PCAP Metadata ร่วมกันยืนยันข้อเท็จจริงใดเกี่ยวกับการเชื่อมต่อขาออกเวลา 02:19:30Z?',
          choices: [
            {
              id: 'c1',
              textEn:
                'Approximately 312 MB (db_dump.zip) was exfiltrated via TLS to 203.0.113.199:8443, and PCAP cannot expose plaintext payload without decryption keys',
              textTh:
                'มีการส่งออกไฟล์ db_dump.zip (~312 MB) ผ่าน TLS ไปยัง 203.0.113.199:8443 โดย PCAP ไม่สามารถเปิดดูข้อมูล Plaintext ภายในได้หากไม่มีคีย์ถอดรหัส'
            },
            {
              id: 'c2',
              textEn:
                'Data exfiltration succeeded over UDP/53 because the firewall permitted outbound DNS queries to 203.0.113.199',
              textTh:
                'การส่งข้อมูลออกผ่านพอร์ต UDP/53 สำเร็จเนื่องจากไฟร์วอลล์อนุญาตทราฟฟิก DNS ขาออกไปยัง 203.0.113.199'
            },
            {
              id: 'c3',
              textEn:
                'The outbound stream was a false positive caused by the weekly vulnerability scanner VS-2026-11-17',
              textTh:
                'ทราฟฟิกขาออกดังกล่าวเป็น False Positive จากการสแกนช่องโหว่ประจำสัปดาห์ VS-2026-11-17'
            },
            {
              id: 'c4',
              textEn:
                'PCAP metadata reveals that inbound traffic (bytes_in) exceeded outbound traffic, ruling out data theft',
              textTh:
                'ข้อมูล PCAP Metadata แสดงปริมาณข้อมูลขาเข้าสูงกว่าขาออก จึงยืนยันว่าไม่มีการขโมยข้อมูล'
            }
          ],
          expectedChoiceId: 'c1'
        },
        {
          id: 'f4',
          promptEn:
            'Which remediation set directly addresses the persistence mechanism, the root vulnerability, and the permissive firewall control gap?',
          promptTh:
            'ชุดมาตรการแก้ไขใดจัดการทั้งบัญชีแฝง ช่องโหว่ต้นเหตุ และช่องโหว่ของการตั้งกฎไฟร์วอลล์ได้อย่างตรงจุด?',
          choices: [
            {
              id: 'c1',
              textEn:
                'Disable NTP time synchronization on DMZ hosts and switch the perimeter firewall to fail-open mode',
              textTh:
                'ปิดการซิงค์เวลา NTP บนโฮสต์ DMZ และเปลี่ยนไฟร์วอลล์ขอบเขตเป็นโหมด Fail-open'
            },
            {
              id: 'c2',
              textEn:
                'Permit outbound UDP/53 to 203.0.113.199 and disable EDR process telemetry to reduce SIEM alert volume',
              textTh:
                'อนุญาต UDP/53 ขาออกไปยัง 203.0.113.199 และปิดการเก็บ Telemetry ของ EDR เพื่อลดปริมาณการแจ้งเตือน'
            },
            {
              id: 'c3',
              textEn:
                'Relocate DMZ-WEB-01 directly into the 10.30.5.0/24 database subnet to remove firewall rule overhead',
              textTh:
                'ย้าย DMZ-WEB-01 เข้าสู่ซับเน็ตฐานข้อมูล 10.30.5.0/24 โดยตรงเพื่อลดภาระกฎไฟร์วอลล์'
            },
            {
              id: 'c4',
              textEn:
                'Disable/audit "svc_backup", patch CVE-2024-21410 with credentialed rescan verification, and replace ANY-OUTBOUND-HTTPS with strict egress allowlisting',
              textTh:
                'ระงับและตรวจสอบบัญชี "svc_backup" แพตช์ CVE-2024-21410 พร้อมสแกนยืนยันผล และแทนที่กฎ ANY-OUTBOUND-HTTPS ด้วย Egress Allowlist ที่เข้มงวด'
            }
          ],
          expectedChoiceId: 'c4'
        }
      ]
    },
    rubric: [
      {
        id: 'f1',
        descriptionTh:
          'เชื่อมโยง FW Allow 443 + EDR w3wp->cmd.exe + Vuln Scan CVE-2024-21410 (OPEN) ถูกต้อง',
        weight: 0.25
      },
      {
        id: 'f2',
        descriptionTh:
          'ระบุการสร้างบัญชีแฝง svc_backup และยกระดับสิทธิ์ Local Administrators (4720/4732) ถูกต้อง',
        weight: 0.25
      },
      {
        id: 'f3',
        descriptionTh:
          'ระบุการส่งออกข้อมูล ~312 MB (db_dump.zip) ผ่าน TLS/8443 และข้อจำกัดของ PCAP ต่อทราฟฟิกเข้ารหัสถูกต้อง',
        weight: 0.25
      },
      {
        id: 'f4',
        descriptionTh:
          'เลือกแนวทางแก้ไขครบทั้งปิดบัญชีแฝง แพตช์พร้อม Rescan Validation และจำกัด Egress Allowlist ถูกต้อง',
        weight: 0.25
      }
    ],
    explanationTh:
      'การเชื่อมโยง Log ข้ามแหล่งด้วยเวลา UTC (NTP) เผยลำดับเหตุการณ์ครบวงจร: เวลา 02:14:05Z ผู้โจมตี (198.51.100.88) เชื่อมต่อ TCP/443 เข้า /plugin/upload ซึ่งตรงกับช่องโหว่ CVE-2024-21410 (CVSS 9.8, STATUS=OPEN) บน DMZ-WEB-01 ทำให้ w3wp.exe เรียก cmd.exe สร้างบัญชี svc_backup และเพิ่มเข้า Local Administrators (EventID 4720/4732) ส่วน TCP/22 ถูกบล็อก (IMPLICIT-DENY), CVE-2023-44487 ถูก WAF กันไว้ และ INT-DB-01 แพตช์ CVE-2024-38063 แล้ว จากนั้น 02:16:10Z เซิร์ฟเวอร์เว็บดึงข้อมูลจากฐานข้อมูลมาสร้าง db_dump.zip (~312 MB) แล้วส่งออกผ่าน curl.exe ไปยัง 203.0.113.199:8443 ภายใต้กฎ ANY-OUTBOUND-HTTPS ในเวลา 02:19:30Z (ส่วน UDP/53 ถูกบล็อก) ทั้งนี้ PCAP บนทราฟฟิก TLS 1.3 บอกได้เฉพาะ Metadata เช่น SNI/JA3/ขนาดข้อมูล แต่ไม่สามารถอ่าน Payload ที่เข้ารหัสได้หากไม่มีคีย์ถอดรหัส การแก้ไขต้องปิดบัญชีแฝง แพตช์ CVE-2024-21410 พร้อมทำ Credentialed Rescan ยืนยัน และจำกัด Egress Allowlist จาก DMZ',
    misconceptionTh:
      'มักโฟกัสเฉพาะรายการ DENY บน Firewall (เช่น TCP/22 หรือ UDP/53) จนมองข้ามทราฟฟิก ALLOW ขาออกที่ส่งข้อมูล ~312 MB หรือหลงเชื่อว่า CVE-2024-38063 ที่แพตช์แล้วบน DB เป็นจุดเริ่มต้น รวมทั้งเข้าใจผิดว่า PCAP ถอดรหัส TLS 1.3 ได้โดยอัตโนมัติ',
    relatedLessonIds: ['L4-12', 'L4-04'],
    tags: ['pbq', 'log-investigator', 'correlation', 'vulnerability-scan', 'pcap', 'edr']
  }
];
