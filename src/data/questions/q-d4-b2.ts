import type { Question } from '../../types';

export const Q_D4_B2: Question[] = [
  // =========================================================================
  // Objective 4.4: Explain security alerting and monitoring concepts and tools
  // =========================================================================
  {
    id: 'Q4-029',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A SOC team suspects compromised internal hosts are exfiltrating data overnight and beaconing to external command-and-control servers at regular intervals. Due to strict privacy rules and limited retention storage, the network team cannot capture packet payloads on core egress routers, yet still needs source/destination IP pairs, ports, byte counts, and session durations. Which monitoring tool BEST meets this requirement?',
    promptTh:
      'ทีม SOC สงสัยว่าโฮสต์ภายในที่ถูกบุกรุกกำลังลักลอบส่งข้อมูลออกนอกองค์กรในช่วงกลางคืนและติดต่อเซิร์ฟเวอร์ควบคุมและสั่งการเป็นจังหวะสม่ำเสมอ แต่ด้วยข้อจำกัดด้านความเป็นส่วนตัวและพื้นที่จัดเก็บข้อมูล ทีมเครือข่ายไม่สามารถบันทึกเนื้อหา Payload ของแพ็กเก็ตบนเราเตอร์ขาออกหลักได้ ทว่ายังคงต้องการข้อมูลคู่ IP ต้นทาง/ปลายทาง พอร์ต ปริมาณไบต์ และระยะเวลาการเชื่อมต่อ เครื่องมือเฝ้าระวังใดตอบโจทย์นี้ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Full packet capture (PCAP)',
        textTh: 'การจับแพ็กเก็ตเต็มรูปแบบ (PCAP)'
      },
      {
        id: 'c2',
        textEn: 'SCAP configuration scanner',
        textTh: 'เครื่องมือสแกนการตั้งค่าตามมาตรฐาน SCAP'
      },
      {
        id: 'c3',
        textEn: 'NetFlow',
        textTh: 'NetFlow'
      },
      {
        id: 'c4',
        textEn: 'Host-based antivirus',
        textTh: 'Antivirus บนเครื่องปลายทาง'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'NetFlow (รวมถึงมาตรฐานใกล้เคียงอย่าง IPFIX และ sFlow) เป็นตัวเลือกที่เหมาะสมที่สุด เพราะบันทึกเฉพาะ Metadata ของการจราจรเครือข่าย เช่น IP ต้นทาง-ปลายทาง พอร์ต โปรโตคอล ปริมาณไบต์ และระยะเวลาการเชื่อมต่อ โดยไม่เก็บเนื้อหา Payload จึงประหยัดพื้นที่จัดเก็บ เคารพข้อจำกัดด้านความเป็นส่วนตัว และตรวจจับ Beaconing หรือปริมาณข้อมูลออกผิดปกติได้อย่างแม่นยำ',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Full packet capture (PCAP) เก็บเนื้อหา Payload ทั้งหมดซึ่งขัดต่อข้อจำกัดด้านความเป็นส่วนตัวและสิ้นเปลืองพื้นที่จัดเก็บสูงมาก โดย PCAP จะเหมาะสำหรับการสืบสวนเชิงนิติวิทยาศาสตร์ย้อนหลังเมื่อต้องอ่านคำสั่งหรือไฟล์ที่ส่งผ่านเครือข่ายจริง',
      c2: 'ไม่ถูกต้อง: SCAP scanner ใช้ตรวจสอบความสอดคล้องของค่าคอนฟิกและช่องโหว่เทียบกับ Benchmark เช่น CIS แต่ไม่ได้บันทึกสถิติการไหลของทราฟฟิกเครือข่าย โดย SCAP จะเหมาะกับการตรวจ Configuration drift บนเซิร์ฟเวอร์',
      c3: 'ถูกต้อง: NetFlow จัดเก็บเพียง Traffic flow metadata โดยไม่เก็บ Payload จึงใช้พื้นที่น้อย ปลอดภัยต่อความเป็นส่วนตัว และแสดงรูปแบบการส่งข้อมูลปริมาณมากหรือการติดต่อซ้ำเป็นจังหวะได้ชัดเจน',
      c4: 'ไม่ถูกต้อง: Host-based antivirus ตรวจจับไฟล์หรือพฤติกรรมมัลแวร์บนเครื่องปลายทางเท่านั้น ไม่ได้รวมสถิติการจราจรบนเราเตอร์ขาออกหลัก โดย Antivirus จะเหมาะกับการสกัดและกักกันไฟล์อันตรายบนโฮสต์'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนระหว่าง NetFlow กับ Full packet capture (PCAP) โดยเข้าใจผิดว่าเครื่องมือวิเคราะห์การจราจรเครือข่ายทุกชนิดต้องบันทึกเนื้อหา Payload ของแพ็กเก็ตด้วย',
    relatedLessonIds: ['L4-05', 'L4-12'],
    tags: ['netflow', 'monitoring-tools', 'beaconing', 'metadata']
  },
  {
    id: 'Q4-030',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'While investigating a multi-stage intrusion across firewall, VPN, and Windows domain controller logs aggregated in a SIEM, an analyst discovers that event timestamps differ by up to 38 minutes across systems and that IP fields use inconsistent names such as client_addr and SrcIP. Which configuration should the security engineering team implement FIRST to enable reliable cross-system correlation?',
    promptTh:
      'ระหว่างการสืบสวนการบุกรุกหลายขั้นตอนจาก Log ของไฟร์วอลล์ VPN และ Windows Domain Controller ที่รวบรวมไว้ใน SIEM นักวิเคราะห์พบว่าเวลาของเหตุการณ์ในแต่ละระบบคลาดเคลื่อนกันสูงสุดถึง 38 นาที และชื่อฟิลด์ IP ไม่ตรงกัน เช่น client_addr กับ SrcIP ทีมวิศวกรรมความปลอดภัยควรปรับแต่งค่าใดเป็นอันดับแรกเพื่อให้เชื่อมโยงเหตุการณ์ข้ามระบบได้อย่างแม่นยำ?',
    choices: [
      {
        id: 'c1',
        textEn: 'Enforce centralized NTP time synchronization and log normalization parsers',
        textTh: 'บังคับใช้การซิงโครไนซ์เวลาผ่าน NTP จากศูนย์กลางร่วมกับตัวแยกวิเคราะห์ Log Normalization'
      },
      {
        id: 'c2',
        textEn: 'Extend SIEM log archiving retention from 90 days to three years across cold storage tiers',
        textTh: 'ขยายอายุการจัดเก็บ Log (Archiving) ใน SIEM จาก 90 วันเป็นสามปีบนพื้นที่จัดเก็บระยะยาว'
      },
      {
        id: 'c3',
        textEn: 'Switch firewall and domain controller forwarding from Syslog to SNMPv1 traps',
        textTh: 'เปลี่ยนการส่งข้อมูลจากไฟร์วอลล์และ Domain Controller จาก Syslog มาใช้ SNMPv1 Traps'
      },
      {
        id: 'c4',
        textEn: 'Deploy full packet capture (PCAP) appliances on the core switch without modifying log ingestion',
        textTh: 'ติดตั้งอุปกรณ์จับแพ็กเก็ตเต็มรูปแบบ (PCAP) บนสวิตช์หลักโดยไม่ปรับปรุงการรับข้อมูล Log'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'การบังคับใช้การซิงโครไนซ์เวลาผ่าน NTP จากศูนย์กลางร่วมกับตัวแยกวิเคราะห์ Log Normalization เป็นสิ่งแรกที่ต้องดำเนินการ เพราะการทำ Correlation ข้ามระบบใน SIEM จะล้มเหลวทันทีหากนาฬิกาของอุปกรณ์ต้นทางไม่ตรงกันและโครงสร้างฟิลด์ Log ต่างรูปแบบกัน การตั้งค่า NTP ให้ทุกโฮสต์อ้างอิงเวลาสากลเดียวกันควบคู่กับการทำ Normalization ให้ชื่อฟิลด์เป็นมาตรฐานเดียวจึงเป็นรากฐานที่ต้องทำก่อนการเขียนกฎหรือสืบสวน',
    choiceRationales: {
      c1: 'ถูกต้อง: NTP ช่วยให้ลำดับเวลาเหตุการณ์ข้าม Firewall, VPN และ AD สอดคล้องกันจริง ส่วน Normalization จัดโครงสร้างฟิลด์ที่หลากหลายให้เป็น Schema เดียวกันเพื่อให้ SIEM เชื่อมโยงเหตุการณ์ได้',
      c2: 'ไม่ถูกต้อง: การขยายอายุ Archiving ไม่ได้แก้ปัญหานาฬิกาคลาดเคลื่อนหรือชื่อฟิลด์ไม่ตรงกันในขณะวิเคราะห์ โดยการปรับ Log archiving จะเหมาะเมื่อต้องปฏิบัติตามข้อกำหนดการเก็บหลักฐานระยะยาว',
      c3: 'ไม่ถูกต้อง: SNMPv1 Traps ส่งข้อมูลแบบ Plaintext และไม่ได้ออกแบบมาแทน Audit logs ที่มีรายละเอียดบัญชีและคำสั่ง โดย SNMPv3 Traps จะเหมาะกับการแจ้งเตือนสถานะฮาร์ดแวร์และพอร์ตเครือข่าย',
      c4: 'ไม่ถูกต้อง: PCAP ช่วยบันทึกข้อมูลแพ็กเก็ตเครือข่าย แต่ไม่ได้แก้ปัญหา Log ใน SIEM ที่มีเวลาไม่ตรงกันและฟิลด์ต่างกัน โดย PCAP จะเหมาะกับการสืบสวนเนื้อหา Payload ในระดับเครือข่าย'
    },
    misconceptionTh:
      'ผู้เรียนมักมองข้ามความสำคัญของ NTP Time Synchronization และ Log Normalization โดยคิดว่าการรวม Log เข้า SIEM เพียงอย่างเดียวก็เพียงพอต่อการทำ Correlation แล้ว',
    relatedLessonIds: ['L4-05', 'L4-12'],
    tags: ['siem', 'log-aggregation', 'normalization', 'ntp']
  },
  {
    id: 'Q4-031',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A newly deployed SIEM triggers more than 6,500 daily alerts, roughly 85% of which are caused by an authorized nightly enterprise backup service account querying file shares. Because analysts are overwhelmed closing repetitive benign tickets, they failed to notice an actual privilege escalation alert during the same shift. What should the SOC team do to resolve this problem WITHOUT creating detection blind spots?',
    promptTh:
      'ระบบ SIEM ที่เพิ่งติดตั้งสร้างการแจ้งเตือนมากกว่า 6,500 รายการต่อวัน โดยราว 85% เกิดจากบัญชีบริการสำรองข้อมูลอัตโนมัติที่ได้รับอนุญาตซึ่งเข้าสืบค้นโฟลเดอร์แชร์ในเวลากลางคืน ทำให้นักวิเคราะห์เหนื่อยล้าจากการปิดทิกเก็ตซ้ำซากจนมองข้ามการแจ้งเตือนการยกระดับสิทธิ์จริงในกะเดียวกัน ทีม SOC ควรดำเนินการอย่างไรเพื่อแก้ปัญหานี้โดยไม่ทำให้เกิดจุดบอดในการตรวจจับ?',
    choices: [
      {
        id: 'c1',
        textEn: 'Disable all file-access alerting rules in the SIEM during overnight shifts',
        textTh: 'ปิดกฎการแจ้งเตือนการเข้าถึงไฟล์ทั้งหมดใน SIEM ในช่วงกะกลางคืน'
      },
      {
        id: 'c2',
        textEn: 'Replace SIEM log correlation with periodic monthly vulnerability scans',
        textTh: 'เปลี่ยนจากการเชื่อมโยง Log ใน SIEM มาใช้การสแกนช่องโหว่รายเดือนแทน'
      },
      {
        id: 'c3',
        textEn: 'Automatically quarantine the backup server whenever file-query volume spikes',
        textTh: 'ตั้งค่าให้ระบบสั่งกักกันเซิร์ฟเวอร์สำรองข้อมูลอัตโนมัติทุกครั้งที่ปริมาณการสืบค้นไฟล์พุ่งสูง'
      },
      {
        id: 'c4',
        textEn: 'Perform alert tuning by refining thresholds and scoping verified benign backup exclusions',
        textTh: 'ทำ Alert Tuning โดยปรับแต่งค่า Threshold และกำหนดข้อยกเว้นเฉพาะพฤติกรรมที่ยืนยันแล้วว่าปลอดภัยของบัญชีสำรองข้อมูล'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'การทำ Alert Tuning โดยปรับแต่งค่า Threshold และกำหนดข้อยกเว้นเฉพาะพฤติกรรมที่ยืนยันแล้วว่าปลอดภัยของบัญชีสำรองข้อมูลเป็นวิธีแก้ที่เหมาะสมที่สุด เพราะสถานการณ์นี้แสดงอาการ Alert Fatigue จาก False positives จำนวนมาก การปรับแต่งเงื่อนไขกฎอย่างเฉพาะเจาะจงช่วยลดการแจ้งเตือนขยะโดยยังคงตรวจจับพฤติกรรมผิดปกติอื่นของบัญชีเดิมและบัญชีอื่นได้ครบถ้วน',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การปิดกฎทั้งหมดช่วงกลางคืนจะสร้างจุดบอดร้ายแรงเปิดโอกาสให้แรนซัมแวร์หรือผู้โจมตีอ่านไฟล์ได้อย่างอิสระ การปิดกฎทำได้เฉพาะเมื่อกฎนั้นซ้ำซ้อนและมีกฎที่แม่นยำกว่าครอบคลุมอยู่แล้ว',
      c2: 'ไม่ถูกต้อง: Vulnerability scanning ตรวจหาจุดอ่อนและแพตช์ล้าสมัยแบบเป็นรอบเวลา ไม่ได้ตรวจจับพฤติกรรมการเข้าถึงไฟล์หรือการยกระดับสิทธิ์แบบเรียลไทม์ โดย Vulnerability scan จะเหมาะกับการบริหารจัดการช่องโหว่เชิงป้องกัน',
      c3: 'ไม่ถูกต้อง: การกักกันเซิร์ฟเวอร์สำรองข้อมูลจริงจะทำให้แผนความต่อเนื่องทางธุรกิจและงานสำรองข้อมูลล้มเหลวโดยไร้เหตุอันควร โดย Quarantine เหมาะกับการแยกโฮสต์ที่มีหลักฐานการบุกรุกจริง',
      c4: 'ถูกต้อง: Alert tuning ช่วยลดการแจ้งเตือนขยะจากพฤติกรรมปกติที่ยืนยันแล้ว แก้ปัญหา Alert fatigue และยังรักษาความสามารถในการตรวจจับการโจมตีจริงในช่วงเวลานั้นไว้ได้'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนสับสนว่าการแก้ปัญหา Alert Fatigue คือการปิด Rule แจ้งเตือนหรือลดระดับ Log ที่ส่งเข้า SIEM ทั้งหมด ซึ่งจะก่อให้เกิดจุดบอด (False Negative) แทน',
    relatedLessonIds: ['L4-05', 'L4-04'],
    tags: ['alert-tuning', 'alert-fatigue', 'siem', 'false-positives']
  },
  {
    id: 'Q4-032',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A government contractor operates servers from three different OS vendors and must continuously verify system configurations against published CIS Benchmarks using automated, vendor-neutral scanning tools that produce standardized compliance reports. Which protocol suite is specifically designed to enable this capability?',
    promptTh:
      'ผู้รับเหมาหน่วยงานภาครัฐแห่งหนึ่งใช้งานเซิร์ฟเวอร์จากผู้ผลิตรายใหญ่ 3 ราย และต้องตรวจสอบค่าคอนฟิกของระบบเทียบกับเกณฑ์ CIS Benchmarks อย่างต่อเนื่องด้วยเครื่องมือสแกนอัตโนมัติที่ไม่ผูกขาดกับผู้ผลิตรายใดและออกรายงานผลเป็นมาตรฐานเดียวกัน ชุดโปรโตคอลใดถูกออกแบบมาเพื่อรองรับความสามารถนี้โดยเฉพาะ?',
    choices: [
      {
        id: 'c1',
        textEn: 'NetFlow',
        textTh: 'NetFlow'
      },
      {
        id: 'c2',
        textEn: 'SCAP',
        textTh: 'SCAP'
      },
      {
        id: 'c3',
        textEn: 'SNMP',
        textTh: 'SNMP'
      },
      {
        id: 'c4',
        textEn: 'SAML',
        textTh: 'SAML'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'SCAP (Security Content Automation Protocol) เป็นชุดโปรโตคอลมาตรฐานเปิดจาก NIST (ครอบคลุม XCCDF, OVAL, CVE, CCE, CPE และ CVSS) ที่ออกแบบมาให้เครื่องมือสแกนต่างยี่ห้อสามารถนำ Benchmarks อย่าง CIS หรือ DISA STIGs ไปตรวจสอบค่าคอนฟิกและรายงานผลอัตโนมัติในรูปแบบเดียวกันได้',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: NetFlow ใช้เก็บสถิติการไหลของทราฟฟิกเครือข่าย ไม่ได้ใช้ตรวจสอบค่าคอนฟิกระบบปฏิบัติการเทียบกับ Benchmark โดย NetFlow เหมาะกับการวิเคราะห์ปริมาณการเชื่อมต่อและการส่งข้อมูลออก',
      c2: 'ถูกต้อง: SCAP เป็นชุดโปรโตคอลมาตรฐานเปิดที่เชื่อม Benchmarks ด้านการตั้งค่าปลอดภัยเข้ากับเครื่องมือสแกนและระบบรายงานอัตโนมัติข้ามแพลตฟอร์ม',
      c3: 'ไม่ถูกต้อง: SNMP ใช้จัดการและรับแจ้งเตือนสถานะอุปกรณ์เครือข่าย เช่น CPU หรือพอร์ตล่ม ไม่ใช่กรอบมาตรฐานสำหรับตรวจประเมินค่าคอนฟิกตาม CIS Benchmark โดย SNMPv3 เหมาะกับการมอนิเตอร์โครงสร้างพื้นฐานเครือข่าย',
      c4: 'ไม่ถูกต้อง: SAML เป็นมาตรฐานแลกเปลี่ยนข้อมูลยืนยันตัวตนแบบ XML สำหรับ Web SSO และ Federation ไม่เกี่ยวกับการสแกนความสอดคล้องของระบบปฏิบัติการ'
    },
    misconceptionTh:
      'ผู้เรียนมักจำสับสนว่า SCAP เป็นซอฟต์แวร์ยี่ห้อหนึ่ง หรือคิดว่าเป็นคำเดียวกับ CIS Benchmarks ทั้งที่ Benchmarks คือเนื้อหามาตรฐาน ส่วน SCAP คือโปรโตคอลที่ใช้ประมวลผลและรายงานผลโดยอัตโนมัติ',
    relatedLessonIds: ['L4-05', 'L4-01'],
    tags: ['scap', 'benchmarks', 'compliance-monitoring', 'configuration-drift']
  },
  {
    id: 'Q4-033',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.4'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'A healthcare provider needs unified visibility into two asset groups: (1) clinician laptops that frequently operate off-network without VPN and require granular process, registry, and USB telemetry, and (2) legacy bedside infusion pumps and managed access switches that prohibit installing third-party software. Which TWO monitoring architectures should the provider combine? (Choose two.)',
    promptTh:
      'ผู้ให้บริการด้านสาธารณสุขต้องการการมองเห็นด้านความปลอดภัยแบบครบวงจรสำหรับสินทรัพย์ 2 กลุ่ม ได้แก่ (1) โน้ตบุ๊กของแพทย์ที่มักใช้งานนอกเครือข่ายโดยไม่ต่อ VPN และต้องเก็บข้อมูลเชิงลึกระดับโปรเซส รีจิสทรี และ USB และ (2) เครื่องให้สารน้ำรุ่นเก่าและสวิตช์เครือข่ายที่ห้ามติดตั้งซอฟต์แวร์ภายนอกเพิ่มเติม สถาปัตยกรรมการเฝ้าระวังใด 2 รูปแบบที่ควรนำมาใช้งานร่วมกัน? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Full packet capture stored locally on every clinician laptop',
        textTh: 'การจับแพ็กเก็ตเต็มรูปแบบแล้วจัดเก็บบนเครื่องโน้ตบุ๊กของแพทย์ทุกเครื่อง'
      },
      {
        id: 'c2',
        textEn: 'Agent-based monitoring installed on clinician laptops',
        textTh: 'การเฝ้าระวังแบบติดตั้ง Agent บนเครื่องโน้ตบุ๊กของแพทย์'
      },
      {
        id: 'c3',
        textEn: 'Monthly uncredentialed vulnerability scans across the hospital subnet for both groups',
        textTh: 'การสแกนช่องโหว่แบบ Non-credentialed รายเดือนบนซับเน็ตโรงพยาบาลสำหรับอุปกรณ์ทั้งสองกลุ่ม'
      },
      {
        id: 'c4',
        textEn: 'Persistent EDR agents installed directly onto bedside infusion pumps and access switches',
        textTh: 'การติดตั้ง EDR Agent แบบถาวรลงในเครื่องให้สารน้ำข้างเตียงและสวิตช์เครือข่ายโดยตรง'
      },
      {
        id: 'c5',
        textEn: 'Agentless monitoring using network protocols and passive collection for switches and pumps',
        textTh: 'การเฝ้าระวังแบบ Agentless ผ่านโปรโตคอลเครือข่ายและการดักฟังแบบ Passive สำหรับสวิตช์และเครื่องให้สารน้ำ'
      }
    ],
    correctChoiceIds: ['c2', 'c5'],
    explanationTh:
      'การเฝ้าระวังแบบติดตั้ง Agent บนเครื่องโน้ตบุ๊กของแพทย์ร่วมกับการเฝ้าระวังแบบ Agentless สำหรับสวิตช์และเครื่องให้สารน้ำตอบโจทย์ระบบ 2 กลุ่มที่มีข้อจำกัดต่างกันได้ครบถ้วน โดยโน้ตบุ๊กแพทย์ที่ออกนอกเครือข่ายและต้องเห็นข้อมูลระดับโปรเซส รีจิสทรี และ USB จำเป็นต้องใช้ Agent-based monitoring เพื่อเก็บและส่ง Telemetry แม้ไม่อยู่ใน LAN ส่วนสวิตช์และเครื่องมือแพทย์ที่ลงซอฟต์แวร์ไม่ได้ต้องใช้ Agentless monitoring ผ่านโปรโตคอลเครือข่ายและการดักฟังแบบ Passive เพื่อดึงสถานะและทราฟฟิกจากภายนอกโดยไม่กระทบเสถียรภาพอุปกรณ์',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การอัด Full PCAP ลงดิสก์ของโน้ตบุ๊กทุกเครื่องทำให้เครื่องช้า พื้นที่เต็มเร็ว และไม่ให้ข้อมูลระดับรีจิสทรีหรือ Process execution tree โดย PCAP เหมาะกับการวิเคราะห์ทราฟฟิกที่จุดรวมเครือข่าย',
      c2: 'ถูกต้อง: Agent-based monitoring ทำงานบน OS ของโน้ตบุ๊กโดยตรง จึงมองเห็นโปรเซส รีจิสทรี และ USB รวมถึงบันทึกเหตุการณ์ขณะออฟไลน์นอกเครือข่ายองค์กรได้',
      c3: 'ไม่ถูกต้อง: การสแกนแบบ Non-credentialed รายเดือนมองไม่เห็นการทำงานระดับโปรเซส/USB ของโน้ตบุ๊กเมื่ออยู่นอกโรงพยาบาล โดย Vulnerability scan เหมาะกับการค้นหาช่องโหว่จากแพตช์และพอร์ตเปิดตามรอบเวลา',
      c4: 'ไม่ถูกต้อง: การลงซอฟต์แวร์ Agent บนเครื่องมือแพทย์หรือสวิตช์ถูกห้ามโดยผู้ผลิตและอาจทำให้ระบบเรียลไทม์ค้างหรือหลุดการรับรอง โดย EDR agent เหมาะกับเวิร์กสเตชันและเซิร์ฟเวอร์ IT ทั่วไป',
      c5: 'ถูกต้อง: Agentless monitoring ใช้การดึงข้อมูลผ่านเครือข่าย (เช่น SNMPv3/API/Passive sensing) โดยไม่ต้องติดตั้งโปรแกรมบนเป้าหมาย จึงปลอดภัยต่ออุปกรณ์ OT/IoT และสวิตช์'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจผิดว่าต้องเลือกอย่างใดอย่างหนึ่งระหว่าง Agent-based กับ Agentless ทั้งองค์กร ทั้งที่ในสถาปัตยกรรมจริงต้องผสมผสานทั้งสองแบบตามขีดความสามารถและข้อจำกัดของอุปกรณ์เป้าหมาย',
    relatedLessonIds: ['L4-05', 'L4-01'],
    tags: ['agent-based', 'agentless', 'monitoring-architecture', 'ot-iot']
  },
  {
    id: 'Q4-034',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'An infrastructure engineer needs core switches and uninterruptible power supply (UPS) units to push immediate asynchronous notifications to a central management platform whenever a redundant power supply fails, a link drops, or repeated invalid management logins occur. The management traffic traverses a shared transit network where packet sniffing is possible. Which monitoring configuration BEST satisfies these requirements?',
    promptTh:
      'วิศวกรโครงสร้างพื้นฐานต้องการให้สวิตช์หลักและเครื่องสำรองไฟ (UPS) ส่งข้อความแจ้งเตือนแบบไม่ประสานเวลา (Asynchronous) เข้าสู่ระบบจัดการศูนย์กลางทันทีที่แหล่งจ่ายไฟสำรองขัดข้อง ลิงก์เชื่อมต่อหลุด หรือมีการพยายามล็อกอินหน้าตั้งค่าผิดพลาดซ้ำ ๆ โดยทราฟฟิกจัดการต้องวิ่งผ่านเครือข่ายส่งต่อที่ใช้ร่วมกันซึ่งอาจมีการดักจับแพ็กเก็ตได้ การตั้งค่าเฝ้าระวังใดตอบโจทย์ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'SNMPv2c polling every 15 minutes using a custom read-only community string',
        textTh: 'SNMPv2c Polling ทุก 15 นาทีโดยใช้ Community String แบบ Read-only ที่ตั้งชื่อเอง'
      },
      {
        id: 'c2',
        textEn: 'SCAP OVAL checks scheduled nightly over unencrypted HTTP',
        textTh: 'การตรวจสอบ SCAP OVAL รายคืนผ่านโปรโตคอล HTTP ที่ไม่เข้ารหัส'
      },
      {
        id: 'c3',
        textEn: 'NetFlow v9 exports configured on the UPS serial management interface',
        textTh: 'การส่งออก NetFlow v9 บนอินเทอร์เฟซจัดการแบบอนุกรมของเครื่อง UPS'
      },
      {
        id: 'c4',
        textEn: 'SNMPv3 traps configured with authentication and encryption',
        textTh: 'SNMPv3 Traps ที่ตั้งค่าการยืนยันตัวตนและการเข้ารหัสข้อมูล'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'SNMPv3 Traps ที่ตั้งค่าการยืนยันตัวตนและการเข้ารหัสข้อมูลตอบโจทย์นี้ได้ดีที่สุด เพราะครอบคลุม 2 เงื่อนไขสำคัญในสถานการณ์นี้ ได้แก่ (1) การส่งแจ้งเตือนทันทีแบบ Asynchronous Push เมื่อเกิดเหตุขัดข้องหรือพอร์ตล่ม ซึ่งเป็นบทบาทของ SNMP Traps (ไม่ใช่การ Poll รอทุก 15 นาที) และ (2) ความเสี่ยงจากการดักฟังบนเครือข่ายร่วม ซึ่งมีเพียง SNMPv3 เท่านั้นที่รองรับทั้ง Authentication และ Encryption',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: SNMP Polling ต้องรอตามรอบ 15 นาทีจึงไม่แจ้งเตือนทันที อีกทั้ง SNMPv2c ส่ง Community string เป็น Plaintext แม้เปลี่ยนชื่อเองก็ยังถูกดักอ่านได้ง่าย โดย Polling ใช้เมื่อต้องการดึงค่าสถิติตามรอบเวลาบนเครือข่ายจัดการที่แยกขาดปลอดภัย',
      c2: 'ไม่ถูกต้อง: SCAP OVAL ตรวจสอบค่าคอนฟิกและสถานะแพตช์ ไม่ใช่การแจ้งเตือนเหตุการณ์ฮาร์ดแวร์ล่มทันที และไม่มีการเข้ารหัสผ่าน HTTP โดย SCAP เหมาะกับการตรวจ Configuration compliance บนเซิร์ฟเวอร์',
      c3: 'ไม่ถูกต้อง: NetFlow รายงานสถิติการไหลของ IP traffic เท่านั้น ไม่สามารถรายงานเหตุการณ์ฮาร์ดแวร์ของ UPS เช่น แหล่งจ่ายไฟขัดข้องได้ โดย NetFlow เหมาะกับการวิเคราะห์ Traffic metadata บนเราเตอร์หรือสวิตช์',
      c4: 'ถูกต้อง: SNMP Traps ส่งข้อความแจ้งเตือนอัตโนมัติทันทีที่เหตุการณ์เกิด และ SNMPv3 ปกป้องข้อความจากการดักฟังและการปลอมแปลงด้วยการยืนยันตัวตนและการเข้ารหัส'
    },
    misconceptionTh:
      'ผู้เรียนมักมองข้ามความแตกต่างระหว่าง SNMP Polling (รอถามตามรอบเวลา) กับ SNMP Trap (อุปกรณ์ส่งเตือนทันที) และมักลืมว่าการเปลี่ยนชื่อ Community string ใน SNMPv2c ยังคงส่งข้อมูลเป็น Plaintext',
    relatedLessonIds: ['L4-05', 'L4-06'],
    tags: ['snmpv3', 'snmp-traps', 'infrastructure-monitoring', 'secure-protocols']
  },
  {
    id: 'Q4-035',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A SOC monitoring dashboard raises a high-confidence alert showing an active finance workstation communicating with a known ransomware command server and rapidly renaming local documents. Which alert response action should the analyst execute FIRST to stop spread across shared network drives before performing forensic validation and remediation?',
    promptTh:
      'แดชบอร์ดเฝ้าระวังของ SOC แจ้งเตือนความเชื่อมั่นสูงว่าเครื่องเวิร์กสเตชันฝ่ายการเงินกำลังสื่อสารกับเซิร์ฟเวอร์สั่งการของแรนซัมแวร์และกำลังเปลี่ยนชื่อเอกสารในเครื่องอย่างรวดเร็ว นักวิเคราะห์ควรดำเนินการตอบสนองต่อการแจ้งเตือนข้อใดเป็นอันดับแรกเพื่อหยุดการแพร่กระจายไปยังไดรฟ์แชร์ในเครือข่ายก่อนทำการตรวจสอบและแก้ไข?',
    choices: [
      {
        id: 'c1',
        textEn: 'Quarantine the workstation by isolating it from the production network',
        textTh: 'สั่งกักกันเครื่องเวิร์กสเตชัน (Quarantine) โดยแยกออกจากเครือข่ายหลักทันที'
      },
      {
        id: 'c2',
        textEn: 'Tune the SIEM correlation rule to suppress outbound connections from the finance subnet',
        textTh: 'ทำ Alert Tuning กฎ SIEM เพื่อระงับการแจ้งเตือนการเชื่อมต่อขาออกจากซับเน็ตฝ่ายการเงิน'
      },
      {
        id: 'c3',
        textEn: 'Schedule an uncredentialed vulnerability scan of the finance VLAN for the weekend',
        textTh: 'ตั้งเวลาสแกนช่องโหว่แบบ Non-credentialed ใน VLAN ฝ่ายการเงินช่วงสุดสัปดาห์'
      },
      {
        id: 'c4',
        textEn: 'Archive the workstation event logs and wait for daily executive reporting',
        textTh: 'จัดเก็บ Log ของเครื่องเข้าคลัง Archiving และรอรายงานสรุปประจำวันให้ผู้บริหาร'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'การสั่งกักกันเครื่องเวิร์กสเตชัน (Quarantine) เพื่อแยกออกจากเครือข่ายหลักทันทีเป็นขั้นตอนแรกที่ต้องดำเนินการ เพราะเครื่องกำลังเข้ารหัสและมีโอกาสลุกลามไปยังไฟล์แชร์บนเครือข่ายหรือโฮสต์อื่น การแยกกักกันผ่าน Host isolation (EDR) หรือ Quarantine VLAN (NAC) ช่วยตัดช่องทาง Lateral movement ได้ในไม่กี่วินาที ก่อนดำเนินการเก็บหลักฐาน ล้างมัลแวร์ และตรวจสอบยืนยัน (Validation) เพื่อนำกลับมาใช้งาน',
    choiceRationales: {
      c1: 'ถูกต้อง: Quarantine หยุดการสื่อสารกับ C2 และการแพร่กระจายของแรนซัมแวร์ไปยังไฟล์แชร์ได้ทันทีโดยยังคงเก็บหลักฐานในเครื่องไว้ตรวจสอบได้',
      c2: 'ไม่ถูกต้อง: Alert tuning ใช้ลดการแจ้งเตือนเท็จ (False positives) ที่ยืนยันแล้วว่าปลอดภัย ไม่ใช่ปิดบังเหตุโจมตีจริงที่มีความมั่นใจสูง โดย Alert tuning เหมาะกับการแก้ปัญหา Alert fatigue จากทราฟฟิกปกติ',
      c3: 'ไม่ถูกต้อง: การรอสแกนช่องโหว่ช่วงสุดสัปดาห์ปล่อยให้แรนซัมแวร์เข้ารหัสเครือข่ายต่อไปจนเกิดความเสียหายร้ายแรง โดย Vulnerability scan เป็นมาตรการค้นหาจุดอ่อนเชิงรุกก่อนเกิดเหตุ',
      c4: 'ไม่ถูกต้อง: การทำ Archiving และ Reporting เป็นกิจกรรมบันทึกหลักฐานและการสื่อสาร ไม่ใช่การควบคุมเพื่อหยุดความเสียหายที่กำลังเกิดขึ้นตรงหน้า โดย Archiving และ Reporting เหมาะกับการเก็บรักษา Log ระยะยาวและการสรุปผลหลังจบเหตุการณ์'
    },
    misconceptionTh:
      'ผู้เรียนบางคนเข้าใจว่าการพบการแจ้งเตือนภัยคุกคามรุนแรงต้องรอทำรายงานหรือสแกนช่องโหว่ก่อนกักกันเครื่อง ทั้งที่ในการตอบสนองเหตุการณ์ต้องทำ Quarantine เพื่อหยุดการแพร่กระจายทันที',
    relatedLessonIds: ['L4-05', 'L4-07', 'L4-11'],
    tags: ['quarantine', 'alert-response', 'ransomware', 'containment']
  },
  {
    id: 'Q4-036',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'During a regulatory investigation into a suspected insider breach from eight months earlier, auditors discover that active SIEM correlation worked properly at the time, but local systems administrators manually deleted 90-day-old authentication logs from central storage to reclaim disk space—violating a three-year legal retention mandate. Which security monitoring activity control was missing?',
    promptTh:
      'ระหว่างการตรวจสอบตามข้อกำหนดเกี่ยวกับเหตุการณ์ละเมิดโดยคนในที่เกิดขึ้นเมื่อแปดเดือนก่อน ผู้ตรวจสอบพบว่าระบบเชื่อมโยงเหตุการณ์ SIEM ทำงานได้ถูกต้องในเวลานั้น แต่ผู้ดูแลระบบภายในได้ลบ Log การยืนยันตัวตนที่มีอายุเกิน 90 วันออกจากพื้นที่จัดเก็บส่วนกลางด้วยตนเองเพื่อเพิ่มพื้นที่ดิสก์ ซึ่งละเมิดข้อกำหนดทางกฎหมายที่บังคับเก็บไว้สามปี การควบคุมในกิจกรรมเฝ้าระวังข้อใดที่ขาดหายไป?',
    choices: [
      {
        id: 'c1',
        textEn: 'Real-time alert tuning for failed login thresholds',
        textTh: 'การทำ Alert Tuning แบบเรียลไทม์สำหรับเกณฑ์การล็อกอินล้มเหลว'
      },
      {
        id: 'c2',
        textEn: 'Automated endpoint antivirus quarantine actions',
        textTh: 'การสั่งกักกันอัตโนมัติของโปรแกรม Antivirus บนเครื่องปลายทาง'
      },
      {
        id: 'c3',
        textEn: 'Immutable log archiving with enforced retention policies',
        textTh: 'การจัดเก็บ Log ระยะยาวแบบแก้ไขไม่ได้ (Archiving) พร้อมบังคับใช้นโยบายอายุการจัดเก็บ'
      },
      {
        id: 'c4',
        textEn: 'Scheduled SCAP benchmark compliance reporting',
        textTh: 'การออกรายงานความสอดคล้องเทียบมาตรฐาน SCAP ตามรอบเวลา'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'การจัดเก็บ Log ระยะยาวแบบแก้ไขไม่ได้ (Immutable Log Archiving) พร้อมบังคับใช้นโยบายอายุการจัดเก็บ (Retention) เป็นการควบคุมที่ขาดหายไป เพราะปัญหาในโจทย์ไม่ได้เกิดจากการขาด Alert หรือการตรวจจับในขณะเกิดเหตุ แต่เกิดจากการไม่มีกลไกเก็บรักษา Log ระยะยาวที่ป้องกันการแก้ไขหรือลบก่อนครบกำหนด 3 ปี (เช่น การใช้ WORM storage และการแยกสิทธิ์การลบ)',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Alert tuning ช่วยลดเสียงรบกวนของ Alert ในขณะเฝ้าระวังประจำวัน แต่ไม่ได้ปกป้องไม่ให้ Log เก่าอายุเกิน 90 วันถูกลบออกจากคลังเก็บ โดย Alert tuning เหมาะกับการลด False positives ใน SIEM',
      c2: 'ไม่ถูกต้อง: Antivirus quarantine แยกไฟล์หรือเครื่องที่ติดมัลแวร์ชั่วคราว ไม่เกี่ยวข้องกับนโยบายเก็บรักษา Log ย้อนหลังหลายปี โดย Quarantine เหมาะกับการกักกันโฮสต์ที่ติดเชื้อ',
      c3: 'ถูกต้อง: Archiving ที่ออกแบบด้วยพื้นที่เก็บแบบ Write-Once-Read-Many (WORM) และการเข้ารหัสพร้อมกฎ Retention 3 ปี ป้องกันไม่ให้ผู้ดูแลระบบลบหลักฐานก่อนเวลาอันควร',
      c4: 'ไม่ถูกต้อง: SCAP reporting ตรวจสอบและรายงานค่าคอนฟิกของระบบเทียบกับ Benchmark ไม่ได้ทำหน้าที่เก็บรักษาประวัติ Log การยืนยันตัวตนระยะยาว โดย SCAP เหมาะกับการตรวจ Compliance ของการตั้งค่า OS'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจว่าเพียงแค่ส่ง Log เข้า SIEM ก็เท่ากับมีหลักฐานพร้อมตรวจสอบย้อนหลังหลายปีแล้ว โดยลืมว่าต้องแยกชั้น Log Archiving ที่มีความจุ นโยบาย Retention และความสามารถป้องกันการลบ/แก้ไข (Immutability) อย่างชัดเจน',
    relatedLessonIds: ['L4-05', 'L5-05', 'L4-12'],
    tags: ['log-archiving', 'retention', 'immutability', 'compliance']
  },
  {
    id: 'Q4-037',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.4'],
    type: 'msq',
    selectCount: 3,
    difficulty: 'exam-ready',
    promptEn:
      'An internal security review notes that an organization\'s current monitoring program collects only workstation antivirus alerts, leaving major visibility gaps across applications, infrastructure, sensitive data movement, and known software flaws. Which THREE monitoring enhancements BEST address these gaps across computing resources and tools? (Select three.)',
    promptTh:
      'การทบทวนความปลอดภัยภายในระบุว่าโครงการเฝ้าระวังในปัจจุบันขององค์กรเก็บข้อมูลเฉพาะการแจ้งเตือนจาก Antivirus บนเครื่องลูกข่ายเท่านั้น ทำให้เกิดช่องว่างด้านการมองเห็นในระดับแอปพลิเคชัน โครงสร้างพื้นฐาน การเคลื่อนย้ายข้อมูลอ่อนไหว และจุดอ่อนซอฟต์แวร์ การยกระดับระบบเฝ้าระวังใด 3 ข้อที่ช่วยปิดช่องว่างเหล่านี้ข้ามชั้นทรัพยากรและเครื่องมือได้ดีที่สุด? (เลือก 3 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Deploy DLP monitoring across endpoints and egress gateways to detect unauthorized sensitive data transfers',
        textTh: 'ติดตั้งการเฝ้าระวัง DLP ทั้งบนปลายทางและเกตเวย์ขาออกเพื่อตรวจจับการส่งออกข้อมูลอ่อนไหวโดยไม่ได้รับอนุญาต'
      },
      {
        id: 'c2',
        textEn: 'Deploy physical security guards and mantrap vestibules at branch office entrances',
        textTh: 'จัดจ้างเจ้าหน้าที่รักษาความปลอดภัยและติดตั้งประตู Access Control Vestibule ที่ทางเข้าสาขา'
      },
      {
        id: 'c3',
        textEn: 'Forward web server, API gateway, database audit, and core firewall logs into a centralized SIEM',
        textTh: 'ส่งต่อ Log จากเว็บเซิร์ฟเวอร์ API Gateway การตรวจสอบฐานข้อมูล และไฟร์วอลล์หลักเข้าสู่ SIEM ส่วนกลาง'
      },
      {
        id: 'c4',
        textEn: 'Restrict source-code scanning to annual pre-release static checks without runtime telemetry',
        textTh: 'จำกัดการตรวจสแกนโค้ดไว้เฉพาะการวิเคราะห์แบบ Static ปีละครั้งก่อนปล่อยเวอร์ชันโดยไม่เก็บ Telemetry ขณะทำงานจริง'
      },
      {
        id: 'c5',
        textEn: 'Replace SNMPv3 traps with SNMPv1 polling across core network switches',
        textTh: 'เปลี่ยนจาก SNMPv3 Traps มาใช้ SNMPv1 Polling บนสวิตช์เครือข่ายหลัก'
      },
      {
        id: 'c6',
        textEn: 'Run scheduled credentialed vulnerability scans across servers and infrastructure devices',
        textTh: 'ดำเนินการสแกนช่องโหว่แบบ Credentialed ตามรอบเวลาบนเซิร์ฟเวอร์และอุปกรณ์โครงสร้างพื้นฐาน'
      }
    ],
    correctChoiceIds: ['c1', 'c3', 'c6'],
    explanationTh:
      'การติดตั้งการเฝ้าระวัง DLP, การส่งต่อ Log แอปพลิเคชันและโครงสร้างพื้นฐานเข้าสู่ SIEM ส่วนกลาง และการสแกนช่องโหว่แบบ Credentialed ตามรอบเวลาช่วยปิดช่องว่างครบทั้ง 4 ด้านที่ขาดหายไป ได้แก่ (1) การเคลื่อนย้ายข้อมูลอ่อนไหวปิดด้วย DLP ทั้งบนปลายทางและเกตเวย์ขาออก, (2) การเฝ้าระวังชั้น Applications และ Infrastructure ปิดด้วยการส่ง Web/API/DB/Firewall Logs เข้า SIEM และ (3) การค้นหาจุดอ่อนซอฟต์แวร์บนเซิร์ฟเวอร์และอุปกรณ์ปิดด้วย Credentialed Vulnerability Scanner',
    choiceRationales: {
      c1: 'ถูกต้อง: DLP ทำหน้าที่เฝ้าระวังและแจ้งเตือน/ยับยั้งการรั่วไหลของข้อมูลอ่อนไหวทั้งในระดับเครื่องปลายทางและช่องทางออกเครือข่าย',
      c2: 'ไม่ถูกต้อง: เจ้าหน้าที่รักษาความปลอดภัยและ Access control vestibule เป็นการควบคุมทางกายภาพ ไม่ได้ให้ทัศนวิสัยการเฝ้าระวังระบบไอที แอปพลิเคชัน หรือข้อมูลดิจิทัล โดยมาตรการนี้เหมาะกับการป้องกันการลักลอบเข้าอาคาร',
      c3: 'ถูกต้อง: การรวม Log จากแอปพลิเคชัน (Web/API/DB) และโครงสร้างพื้นฐาน (Firewall) เข้า SIEM ช่วยเติมเต็มชั้น Applications และ Infrastructure ที่ขาดหายไป',
      c4: 'ไม่ถูกต้อง: การตรวจโค้ดปีละครั้งโดยไม่เก็บ Telemetry ขณะใช้งานจริงไม่สามารถเฝ้าระวังการโจมตีแอปพลิเคชันที่รันอยู่ต่อเนื่องได้ โดย SAST เหมาะกับการตรวจจุดอ่อนโค้ดในระยะพัฒนา CI/CD',
      c5: 'ไม่ถูกต้อง: SNMPv1 ไม่มีการยืนยันตัวตนและการเข้ารหัส จึงลดความปลอดภัยและไม่ตอบโจทย์การมองเห็นระดับแอปพลิเคชันหรือช่องโหว่ โดยการเฝ้าระวังสถานะฮาร์ดแวร์เครือข่ายควรใช้ SNMPv3 traps',
      c6: 'ถูกต้อง: Vulnerability scanner แบบ Credentialed ตรวจสอบแพ็กเกจซอฟต์แวร์ แพตช์ และค่าคอนฟิกที่บกพร่องบนระบบและโครงสร้างพื้นฐานได้อย่างแม่นยำ'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนคิดว่าการเฝ้าระวังความปลอดภัยหมายถึงการดูเฉพาะ Antivirus บนเครื่องพนักงานเท่านั้น ทั้งที่ตามกรอบ 4.4 ต้องเฝ้าระวังครบทั้ง Systems, Applications และ Infrastructure ควบคู่กับการตรวจช่องโหว่และ DLP',
    relatedLessonIds: ['L4-05', 'L4-04'],
    tags: ['monitoring-layers', 'siem', 'dlp', 'vulnerability-scanner']
  },

  // =========================================================================
  // Objective 4.5: Given a scenario, modify enterprise capabilities to enhance security
  // =========================================================================
  {
    id: 'Q4-038',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A firewall engineer reviews the following ordered ACL on an internal segment interface:\n1. Permit TCP Any to 10.20.30.0/24 Port 443\n2. Permit TCP Any to 10.20.30.0/24 Any\n3. Deny TCP Any to 10.20.30.15 Port 23\n4. Implicit Deny Any Any\nDuring testing, an unauthorized host reaches 10.20.30.15 on port 23. Why did the connection succeed, and how should the engineer modify the ACL?',
    promptTh:
      'วิศวกรไฟร์วอลล์ตรวจสอบรายการ ACL ที่เรียงลำดับไว้บนอินเทอร์เฟซเครือข่ายภายในดังนี้:\n1. Permit TCP Any to 10.20.30.0/24 Port 443\n2. Permit TCP Any to 10.20.30.0/24 Any\n3. Deny TCP Any to 10.20.30.15 Port 23\n4. Implicit Deny Any Any\nระหว่างการทดสอบ พบว่าโฮสต์ที่ไม่ได้รับอนุญาตสามารถเชื่อมต่อกับ 10.20.30.15 บนพอร์ต 23 ได้ เหตุใดการเชื่อมต่อจึงสำเร็จ และวิศวกรควรแก้ไข ACL อย่างไร?',
    choices: [
      {
        id: 'c1',
        textEn: 'Rule 4 overrides rule 3; move rule 3 below rule 4 so the explicit deny entry executes',
        textTh: 'กฎข้อ 4 เขียนทับกฎข้อ 3; ให้ย้ายกฎข้อ 3 ไปไว้ใต้กฎข้อ 4 เพื่อให้รายการ Explicit Deny ทำงาน'
      },
      {
        id: 'c2',
        textEn: 'Rule 2 matches first during top-down evaluation; remove or narrow rule 2 and place specific deny rules above broad permits',
        textTh: 'กฎข้อ 2 ตรงเงื่อนไขก่อนในการประมวลผลจากบนลงล่าง; ให้ลบหรือจำกัดขอบเขตกฎข้อ 2 และวางกฎ Deny เฉพาะเจาะจงไว้เหนือกฎ Permit ที่กว้าง'
      },
      {
        id: 'c3',
        textEn: 'Rule 1 covers the entire /24 subnet and allows port 23; restrict rule 1 to a /32 host mask',
        textTh: 'กฎข้อ 1 ครอบคลุมทั้งซับเน็ต /24 และอนุญาตพอร์ต 23; ให้จำกัดกฎข้อ 1 เป็นหน้ากากโฮสต์ /32'
      },
      {
        id: 'c4',
        textEn: 'Rule 3 lacks an explicit protocol state tag; keep the current order and enable stateless inspection',
        textTh: 'กฎข้อ 3 ขาดแท็กสถานะโปรโตคอล; ให้คงลำดับเดิมไว้แล้วเปิดใช้การตรวจสอบแบบ Stateless'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'กฎข้อ 2 ตรงเงื่อนไขก่อนในการประมวลผลจากบนลงล่าง เนื่องจาก Firewall ACL ทำงานแบบ Top-down (First match wins) เมื่อแพ็กเก็ตปลายทาง 10.20.30.15 พอร์ต 23 วิ่งมา ไม่ตรงกฎข้อ 1 (พอร์ต 443) แต่ตรงกับกฎข้อ 2 (`Permit TCP Any to 10.20.30.0/24 Any`) ทันที จึงถูกอนุญาตและหยุดอ่านกฎข้อ 3 (Shadowed rule) วิธีแก้คือลบหรือจำกัดขอบเขตกฎอนุญาตทุกพอร์ตในบรรทัดที่ 2 ออก และวางกฎ Deny ที่เฉพาะเจาะจงไว้เหนือกฎ Permit ที่กว้างเสมอ',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: กฎข้อ 4 (Implicit Deny) อยู่ท้ายสุดของ ACL เพื่อปฏิเสธทราฟฟิกที่ไม่ตรงกับกฎด้านบนเลย และ ACL ประมวลผลจากบนลงล่าง การย้ายกฎไปไว้ใต้ Implicit Deny ทำให้กฎนั้นไม่ถูกอ่าน โดย Implicit Deny มีหน้าที่บล็อกทราฟฟิกที่เหลือทั้งหมดเมื่อไม่มีกฎด้านบนตรงเงื่อนไข',
      c2: 'ถูกต้อง: กฎอนุญาตแบบกว้าง (`Any` port) ในบรรทัดที่ 2 จับคู่แพ็กเก็ตพอร์ต 23 ได้ก่อนกฎข้อ 3 การจำกัดกฎที่กว้างเกินไปและจัดลำดับ Specific ก่อน General จึงแก้ปัญหาได้ตรงจุด',
      c3: 'ไม่ถูกต้อง: กฎข้อ 1 ระบุชัดเจนเฉพาะพอร์ต 443 จึงไม่ตรงกับทราฟฟิกพอร์ต 23 โดยการจำกัดซับเน็ตเป็น /32 จะเหมาะเมื่อต้องการเปิด HTTPS ให้เพียงเซิร์ฟเวอร์เดียวแทนทั้งซับเน็ต',
      c4: 'ไม่ถูกต้อง: ปัญหาไม่ได้เกิดจาก Stateful vs Stateless แต่เกิดจากลำดับกฎบนลงล่างที่บรรทัด 2 ปล่อยผ่านทุกพอร์ต โดย Stateless inspection เหมาะกับเราเตอร์ขอบที่ต้องการความเร็วสูงแต่ไม่ติดตามสถานะเซสชัน'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจผิดว่ากฎ Deny ที่เฉพาะเจาะจงจะชนะกฎ Permit ที่กว้างกว่าไม่ว่าจะวางไว้บรรทัดใด ทั้งที่ไฟร์วอลล์ประมวลผลแบบ Top-down (First match wins)',
    relatedLessonIds: ['L4-06', 'L3-04'],
    tags: ['firewall-rules', 'acl-ordering', 'implicit-deny', 'ports-protocols']
  },
  {
    id: 'Q4-039',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'During a post-incident review, investigators determine that attackers exploited a public-facing customer portal server located on the same flat VLAN as the internal payroll database, allowing immediate lateral movement over TCP port 1433. Which network capability modification MOST effectively isolates public services from internal corporate assets?',
    promptTh:
      'ระหว่างการทบทวนหลังเกิดเหตุการณ์ เจ้าหน้าที่สืบสวนพบว่าผู้โจมตีเจาะเซิร์ฟเวอร์พอร์ทัลลูกค้าที่เปิดรับการเชื่อมต่อสาธารณะซึ่งตั้งอยู่ใน VLAN เดียวกับฐานข้อมูลเงินเดือนภายใน ทำให้เคลื่อนที่แนวขวางผ่านพอร์ต TCP 1433 ได้ทันที การปรับปรุงขีดความสามารถเครือข่ายข้อใดแยกบริการสาธารณะออกจากสินทรัพย์ภายในองค์กรได้อย่างมีประสิทธิภาพมากที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Keep the portal on the internal VLAN and configure NAT port forwarding on the perimeter router',
        textTh: 'คงพอร์ทัลไว้ใน VLAN ภายในและตั้งค่า NAT Port Forwarding บนเราเตอร์ขอบนอก'
      },
      {
        id: 'c2',
        textEn: 'Enable SNMPv3 traps on the internal switch without changing VLAN or firewall boundaries',
        textTh: 'เปิดใช้งาน SNMPv3 Traps บนสวิตช์ภายในโดยไม่เปลี่ยนแปลงขอบเขต VLAN หรือไฟร์วอลล์'
      },
      {
        id: 'c3',
        textEn: 'Deploy a forward web proxy for internal employees browsing external websites',
        textTh: 'ติดตั้ง Forward Web Proxy สำหรับพนักงานภายในที่เข้าชมเว็บไซต์ภายนอก'
      },
      {
        id: 'c4',
        textEn: 'Relocate the portal to a screened subnet separated from the internal LAN by stateful firewall rules',
        textTh: 'ย้ายพอร์ทัลไปยัง Screened Subnet ที่คั่นกลางจาก LAN ภายในด้วยกฎของ Stateful Firewall'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'การย้ายพอร์ทัลไปยัง Screened Subnet (DMZ) ที่คั่นกลางจาก LAN ภายในด้วยกฎของ Stateful Firewall เป็นวิธีที่เหมาะสมที่สุด เพราะเซิร์ฟเวอร์ที่ต้องเปิดรับทราฟฟิกจากอินเทอร์เน็ตต้องวางแยกไว้ในโซนที่มีไฟร์วอลล์กั้นทั้งฝั่งอินเทอร์เน็ตและฝั่ง LAN ภายใน พร้อมจำกัดพอร์ตที่อนุญาตให้เชื่อมต่อไปยังฐานข้อมูลหรือบล็อกการเชื่อมต่อตรงเข้าเครือข่ายภายใน เพื่อลดความเสียหายหากหน้าบ้านถูกยึด',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การใช้เพียง NAT port forwarding บนเราเตอร์ขอบนอกยังปล่อยให้พอร์ทัลอยู่ร่วม VLAN กับฐานข้อมูลภายใน เมื่อหน้าบ้านถูกยึดผู้โจมตีก็ยังติดต่อพอร์ต 1433 ได้ตรง โดย NAT เหมาะกับการแปล IP สาธารณะเป็น IP ส่วนตัวเท่านั้น',
      c2: 'ไม่ถูกต้อง: SNMPv3 Traps ใช้แจ้งเตือนเหตุขัดข้องของอุปกรณ์เครือข่าย ไม่ได้กั้นเส้นทางการเชื่อมต่อระหว่างพอร์ทัลกับฐานข้อมูลภายใน โดย SNMPv3 เหมาะกับการมอนิเตอร์โครงสร้างพื้นฐาน',
      c3: 'ไม่ถูกต้อง: Forward web proxy กรองทราฟฟิกเว็บขาออกของพนักงาน ไม่ได้แยก Public-facing server ออกจากเครือข่ายภายใน โดย Forward proxy เหมาะกับการทำ URL scanning และ Web filtering ให้ผู้ใช้ภายใน',
      c4: 'ถูกต้อง: การแยก Public server ออกไปไว้ใน Screened subnet และกำหนดกฎ Stateful firewall ควบคุมเฉพาะการเชื่อมต่อที่จำเป็นช่วยสกัด Lateral movement เข้าสู่ระบบการเงินภายใน'
    },
    misconceptionTh:
      'ผู้เรียนบางคนเข้าใจผิดว่าการใช้ NAT หรือการอยู่หลัง Firewall ขอบนอกตัวเดียวก็เพียงพอแล้ว โดยละเลยการแบ่ง Screened Subnet แยกบริการสาธารณะออกจากเครือข่ายภายใน',
    relatedLessonIds: ['L4-06', 'L3-03'],
    tags: ['screened-subnet', 'firewall', 'lateral-movement', 'segmentation']
  },
  {
    id: 'Q4-040',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'A high-throughput financial trading link (40 Gbps) requires passive intrusion detection capable of catching low-and-slow zero-day reconnaissance without introducing latency, becoming a single point of failure, or dropping packets during switch CPU spikes experienced earlier with SPAN. Which IDS configuration BEST satisfies these requirements?',
    promptTh:
      'ลิงก์ซื้อขายทางการเงินความเร็วสูง (40 Gbps) ต้องการระบบตรวจจับการบุกรุกแบบ Passive ที่สามารถจับการสอดแนมแบบค่อยเป็นค่อยไปของ Zero-day ได้ โดยไม่เพิ่มความหน่วง ไม่กลายเป็น Single Point of Failure และไม่เกิดแพ็กเก็ตตกหล่นช่วง CPU ของสวิตช์ทำงานหนักเหมือนที่เคยพบกับ SPAN การตั้งค่า IDS ใดตอบโจทย์เหล่านี้ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Inline fail-closed IPS using signature-only detection',
        textTh: 'IPS แบบ Inline โหมด Fail-closed ที่ใช้การตรวจจับด้วย Signature เพียงอย่างเดียว'
      },
      {
        id: 'c2',
        textEn: 'SPAN port mirroring paired with static port-blocking firewall rules',
        textTh: 'การทำ SPAN Port Mirroring ร่วมกับกฎไฟร์วอลล์บล็อกพอร์ตแบบคงที่'
      },
      {
        id: 'c3',
        textEn: 'Hardware network TAP feeding an anomaly and trend-based IDS sensor',
        textTh: 'Hardware Network TAP ที่ส่งสำเนาทราฟฟิกไปยังเซ็นเซอร์ IDS แบบวิเคราะห์แนวโน้มและความผิดปกติ (Trend/Anomaly)'
      },
      {
        id: 'c4',
        textEn: 'DNS sinkholing configured on external recursive resolvers only',
        textTh: 'การตั้งค่า DNS Sinkholing บนตัวแปลงชื่อ Recursive ภายนอกเท่านั้น'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'Hardware Network TAP ที่ส่งสำเนาทราฟฟิกไปยังเซ็นเซอร์ IDS แบบวิเคราะห์แนวโน้มและความผิดปกติ (Trend/Anomaly) ตอบโจทย์ครบทั้ง 2 ด้านของ IDS/IPS ในสถานการณ์นี้ ได้แก่ (1) Transport method แบบ Hardware Network TAP คัดลอกสัญญาณเชิงกายภาพให้เซ็นเซอร์ Out-of-band จึงไม่เพิ่ม Latency ไม่เป็น Single point of failure หากเซ็นเซอร์ล่ม และไม่ Drop packet เหมือน SPAN ช่วงสวิตช์โหลดสูง และ (2) Trend/Anomaly detection ที่จับพฤติกรรมผิดปกติแบบ Low-and-slow และ Zero-day ที่ยังไม่มี Signature ได้',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การวางแบบ Inline fail-closed จะเพิ่ม Latency เป็น Single point of failure (ล่มแล้วสายหลักตัดทันที) และ Signature-only จับ Zero-day ที่ยังไม่รู้จักไม่ได้ โดย Inline IPS เหมาะกับจุดที่ต้องบล็อกการโจมตีที่รู้จักทันทีและยอมรับผลต่อทราฟฟิกได้',
      c2: 'ไม่ถูกต้อง: โจทย์ระบุชัดเจนว่า SPAN เคยเกิด Packet drop ช่วง CPU สูงมาก่อน และกฎบล็อกพอร์ตแบบคงที่ไม่ได้จับพฤติกรรม Zero-day โดย SPAN เหมาะกับลิงก์ความเร็วไม่สูงมากที่เน้นประหยัดงบฮาร์ดแวร์',
      c3: 'ถูกต้อง: Hardware TAP มอบสำเนาทราฟฟิกเต็มอัตราแบบ Out-of-band โดยไม่กระทบสายหลัก 40 Gbps และ Trend/Anomaly IDS จับความผิดปกติเชิงพฤติกรรมที่ไม่มีลายเซ็นได้',
      c4: 'ไม่ถูกต้อง: DNS sinkholing สกัดเฉพาะการแปลงชื่อโดเมนอันตราย ไม่ได้ตรวจสอบแพ็กเก็ตทราฟฟิกการซื้อขายบนลิงก์หลัก โดย DNS filtering เหมาะกับการบล็อกโดเมนฟิชชิงหรือ C2 ตั้งแต่ขั้นตอนแปลงชื่อ'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนระหว่าง Transport method ของ IDS/IPS ทั้ง 3 แบบ (Inline, TAP, SPAN) และมักคิดว่า Signature-based สามารถตรวจจับการโจมตีแบบ Zero-day ได้ด้วยตนเอง',
    relatedLessonIds: ['L4-06', 'L3-03'],
    tags: ['ids-ips', 'network-tap', 'trend-analysis', 'transport-method']
  },
  {
    id: 'Q4-041',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'Employees are downloading malicious PowerShell payloads hidden inside encrypted HTTPS sessions via newly registered file-sharing subdomains. Although DNS filtering already blocks known malicious domains, it cannot inspect full URL paths, file extensions, or content categories inside TLS traffic. Which capability should the security architect deploy NEXT?',
    promptTh:
      'พนักงานกำลังดาวน์โหลด Payload PowerShell อันตรายที่ซ่อนอยู่ภายในเซสชัน HTTPS ที่เข้ารหัสผ่านซับโดเมนแชร์ไฟล์ที่เพิ่งจดทะเบียนใหม่ แม้ว่า DNS Filtering จะบล็อกโดเมนอันตรายที่รู้จักแล้ว แต่ไม่สามารถตรวจสอบ URL Path เต็มรูปแบบ นามสกุลไฟล์ หรือหมวดหมู่เนื้อหาภายในทราฟฟิก TLS ได้ สถาปนิกความปลอดภัยควรติดตั้งขีดความสามารถใดเพิ่มเติมเป็นลำดับถัดไป?',
    choices: [
      {
        id: 'c1',
        textEn: 'Centralized web proxy with TLS inspection, URL scanning, content categorization, reputation checks, and file block rules',
        textTh: 'Centralized Web Proxy ที่รองรับ TLS Inspection, URL Scanning, Content Categorization, การตรวจ Reputation และกฎบล็อกไฟล์'
      },
      {
        id: 'c2',
        textEn: 'Secondary internal DNS resolver configured without sinkholing rules',
        textTh: 'ตัวแปลงชื่อ DNS ภายในสำรองที่ตั้งค่าโดยไม่ใส่กฎ Sinkholing'
      },
      {
        id: 'c3',
        textEn: 'Layer 4 stateless packet filter allowing outbound TCP port 443 to any destination',
        textTh: 'ตัวกรองแพ็กเก็ตแบบ Stateless Layer 4 ที่อนุญาตพอร์ต TCP 443 ขาออกไปยังทุกปลายทาง'
      },
      {
        id: 'c4',
        textEn: 'Secure Email Gateway URL rewriting for inbound SMTP messages only',
        textTh: 'Secure Email Gateway ที่ทำ URL Rewriting สำหรับข้อความ SMTP ขาเข้าเพียงอย่างเดียว'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'Centralized Web Proxy (Web Filter) ที่รองรับ TLS Inspection, URL Scanning, Content Categorization, การตรวจ Reputation และกฎบล็อกไฟล์เป็นตัวเลือกที่เหมาะสมที่สุด เพราะทำหน้าที่เป็นจุดตรวจกลางที่สามารถถอดตรวจ TLS/HTTPS เพื่อมองเห็น URL เต็มรูปแบบ วิเคราะห์หมวดหมู่เนื้อหา (เช่น Newly Registered Domains / File Sharing) ตรวจสอบชื่อเสียง (Reputation) และตั้ง Block rules ปิดกั้นการดาวน์โหลดไฟล์สคริปต์อันตรายอย่าง `.ps1` ได้ ซึ่งเป็นจุดที่ DNS Filtering ทำไม่ได้',
    choiceRationales: {
      c1: 'ถูกต้อง: Centralized web proxy มอบการตรวจสอบระดับ Layer 7 ทั้ง URL path, เนื้อหา, หมวดหมู่, Reputation และชนิดไฟล์ภายในทราฟฟิกเว็บ HTTPS',
      c2: 'ไม่ถูกต้อง: การเพิ่ม DNS resolver ที่ไม่มีกฎกรองยิ่งไม่ช่วยตรวจ URL path หรือเนื้อหาในเซสชัน TLS เลย โดย Internal DNS resolver เหมาะกับการทำ High availability สำหรับการแปลงชื่อภายใน',
      c3: 'ไม่ถูกต้อง: ตัวกรอง Layer 4 ดูเฉพาะ IP และเลขพอร์ต (443) จึงปล่อยผ่านเว็บแชร์ไฟล์และไฟล์ `.ps1` ทั้งหมดโดยมองไม่เห็น URL หรือชนิดไฟล์ โดยตัวกรอง Layer 4 เหมาะกับการกั้นทราฟฟิกตาม IP และ Port พื้นฐาน',
      c4: 'ไม่ถูกต้อง: Secure Email Gateway ตรวจจับเฉพาะลิงก์ที่ส่งมาทางอีเมล ไม่ได้ตรวจสอบทราฟฟิกเว็บที่ผู้ใช้เปิดเข้าถึงโดยตรงผ่านเบราว์เซอร์ โดย SEG เหมาะกับการกรองไฟล์แนบและลิงก์ฟิชชิงในอีเมล'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนระหว่าง DNS Filtering (ตรวจระดับชื่อโดเมนตอน Resolve ชื่อเท่านั้น) กับ Web Filter / Centralized Proxy (ตรวจระดับ URL path, หมวดหมู่, Reputation และไฟล์ภายใน HTTPS)',
    relatedLessonIds: ['L4-06', 'L3-04'],
    tags: ['web-proxy', 'url-scanning', 'reputation', 'content-categorization']
  },
  {
    id: 'Q4-042',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'foundation',
    promptEn:
      'During a secure protocol hardening review, an engineer identifies legacy cleartext remote management sessions on TCP port 23 and unencrypted directory queries on TCP port 389. Which TWO modifications represent proper secure protocol and port selection? (Choose two.)',
    promptTh:
      'ระหว่างการทบทวนการเสริมแกร่งโปรโตคอลปลอดภัย วิศวกรพบเซสชันการจัดการระยะไกลแบบไม่เข้ารหัสรุ่นเก่าบนพอร์ต TCP 23 และการสืบค้นสารบบแบบไม่เข้ารหัสบนพอร์ต TCP 389 การแก้ไขใด 2 ข้อที่สะท้อนการเลือกใช้ Secure Protocol และ Port Selection ได้อย่างถูกต้อง? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Replace Telnet (TCP 23) with SSHv2 (TCP 22) for encrypted remote administration',
        textTh: 'แทนที่ Telnet (TCP 23) ด้วย SSHv2 (TCP 22) สำหรับการจัดการระยะไกลแบบเข้ารหัส'
      },
      {
        id: 'c2',
        textEn: 'Rebind the existing Telnet daemon from TCP port 23 to TCP port 2323',
        textTh: 'ย้ายพอร์ตบริการ Telnet เดิมจากพอร์ต TCP 23 ไปเป็นพอร์ต TCP 2323'
      },
      {
        id: 'c3',
        textEn: 'Replace Telnet (TCP 23) with FTPS (TCP 990) for interactive switch command-line sessions',
        textTh: 'แทนที่ Telnet (TCP 23) ด้วย FTPS (TCP 990) สำหรับเซสชันบรรทัดคำสั่งแบบโต้ตอบบนสวิตช์'
      },
      {
        id: 'c4',
        textEn: 'Migrate LDAP (TCP 389) traffic to LDAPS (TCP 636) using TLS encryption',
        textTh: 'ย้ายทราฟฟิก LDAP (TCP 389) ไปใช้ LDAPS (TCP 636) ด้วยการเข้ารหัส TLS'
      },
      {
        id: 'c5',
        textEn: 'Enable DNS over TLS (TCP 853) on resolvers while retaining directory binds on TCP port 389',
        textTh: 'เปิดใช้ DNS over TLS (TCP 853) บนตัวแปลงชื่อโดยยังคงการเชื่อมต่อสารบบไว้บนพอร์ต TCP 389'
      }
    ],
    correctChoiceIds: ['c1', 'c4'],
    explanationTh:
      'การแทนที่ Telnet (TCP 23) ด้วย SSHv2 (TCP 22) และการย้าย LDAP (TCP 389) ไปใช้ LDAPS (TCP 636) ด้วยการเข้ารหัส TLS เป็นการเลือกใช้ Secure protocol และ port selection ที่ถูกต้อง เพราะเป็นการเปลี่ยนจากโปรโตคอล Plaintext มาเป็นโปรโตคอลที่เข้ารหัสและยืนยันตัวตน พร้อมปิดพอร์ตไม่ปลอดภัยเดิมทิ้ง',
    choiceRationales: {
      c1: 'ถูกต้อง: SSHv2 บน TCP 22 เข้ารหัสทั้งข้อมูลรับรองและคำสั่งการจัดการระยะไกลแทน Telnet (TCP 23) ที่ส่งเป็น Plaintext',
      c2: 'ไม่ถูกต้อง: การย้ายพอร์ต Telnet ไปเป็น 2323 เป็นเพียง Security through obscurity ซึ่งผู้โจมตีสแกนเจอได้ง่ายและข้อมูลยังคงเป็น Plaintext เช่นเดิม โดยการเปลี่ยนเลขพอร์ตไม่ช่วยเข้ารหัสทราฟฟิกเลย',
      c3: 'ไม่ถูกต้อง: FTPS (TCP 990) เป็นโปรโตคอลเข้ารหัสสำหรับการโอนย้ายไฟล์ (แทน FTP) ไม่ใช่โปรโตคอลจัดการบรรทัดคำสั่งระยะไกลบนอุปกรณ์เครือข่าย',
      c4: 'ถูกต้อง: LDAPS (TCP 636) ห่อหุ้มการสื่อสารสารบบและรหัสผ่านด้วย TLS แทน LDAP เดิมบนพอร์ต 389',
      c5: 'ไม่ถูกต้อง: DNS over TLS (DoT พอร์ต 853) เข้ารหัสเฉพาะคำขอ DNS ไม่ได้เข้ารหัสการสืบค้น Directory บนพอร์ต 389 โดย DoT เหมาะกับการป้องกันการดักฟังคำถาม DNS'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนสับสนว่าการเปลี่ยนหมายเลขพอร์ตของโปรโตคอลเก่าที่ไม่เข้ารหัส (เช่น ย้าย Telnet ไปพอร์ต 2323) ถือเป็นการทำ Secure port selection แล้ว ทั้งที่ต้องเปลี่ยนเป็นโปรโตคอลที่เข้ารหัสจริงเท่านั้น',
    relatedLessonIds: ['L4-06', 'L4-01'],
    tags: ['secure-protocols', 'ports', 'ssh', 'ldaps']
  },
  {
    id: 'Q4-043',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'An enterprise already enforces a strict SPF record (-all) and signs outbound messages with DKIM. For the past 60 days, its DMARC record has been set to p=none with an aggregate reporting address configured, and analysis confirms that all legitimate corporate and third-party marketing mail streams now pass alignment. Which modification BEST stops attackers from spoofing the visible From: domain to external customers?',
    promptTh:
      'องค์กรแห่งหนึ่งบังคับใช้เรกคอร์ด SPF (-all) และลงลายเซ็นอีเมลขาออกด้วย DKIM อยู่แล้ว ตลอด 60 วันที่ผ่านมาได้ตั้งค่า DMARC เป็น p=none พร้อมกำหนดที่อยู่รับรายงานสรุป และผลการวิเคราะห์ยืนยันว่ากระแสอีเมลที่ถูกต้องทั้งหมดขององค์กรและระบบการตลาดภายนอกผ่านการตรวจสอบ Alignment แล้ว การแก้ไขใดหยุดผู้โจมตีจากการปลอมโดเมนในช่อง From: ที่มองเห็นได้ถึงลูกค้าภายนอกได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Keep DMARC at p=none while changing the SPF qualifier from -all to ~all',
        textTh: 'คงค่า DMARC ไว้ที่ p=none พร้อมเปลี่ยนตัวระบุ SPF จาก -all เป็น ~all'
      },
      {
        id: 'c2',
        textEn: 'Update the DMARC policy tag from p=none to p=reject while retaining alignment and reporting',
        textTh: 'ปรับแท็กนโยบาย DMARC จาก p=none เป็น p=reject โดยคงการตรวจสอบ Alignment และการส่งรายงานไว้'
      },
      {
        id: 'c3',
        textEn: 'Configure the internal Secure Email Gateway to sandbox inbound attachments without modifying DMARC',
        textTh: 'ตั้งค่า Secure Email Gateway ภายในให้ทำ Sandboxing ไฟล์แนบขาเข้าโดยไม่แก้ไข DMARC'
      },
      {
        id: 'c4',
        textEn: 'Remove DKIM signing and rely strictly on SPF IP matching without identifier alignment',
        textTh: 'นำการลงลายเซ็น DKIM ออกและอาศัยการเทียบ IP ของ SPF เพียงอย่างเดียวโดยไม่ตรวจ Alignment'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'การปรับแท็กนโยบาย DMARC จาก `p=none` เป็น `p=reject` โดยคงการตรวจสอบ Alignment และการส่งรายงานไว้เป็นแนวทางที่เหมาะสมที่สุด เพราะ `p=none` เป็นเพียงโหมดเฝ้าสังเกตและเก็บรายงานโดยไม่สั่งให้เซิร์ฟเวอร์ปลายทางปฏิเสธอีเมลปลอม เมื่อทดสอบ 60 วันและยืนยันว่าอีเมลแท้ทั้งหมดผ่าน Alignment แล้ว การเปลี่ยนเป็น `p=reject` จึงเป็นการบังคับให้เมลเซิร์ฟเวอร์ของผู้รับปฏิเสธอีเมลที่ปลอมชื่อโดเมนองค์กรใน Header `From:` ทันที (เข้มงวดและปลอดภัยกว่า `p=quarantine` ที่แค่ย้ายลงโฟลเดอร์ขยะ)',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การคง `p=none` ยังไม่สั่งให้ผู้รับปฏิเสธอีเมลปลอม และการเปลี่ยนเป็น `~all` (SoftFail) ยิ่งผ่อนปรนความเข้มงวดของ SPF โดย `~all` มักใช้ชั่วคราวระหว่างรวบรวมรายชื่อ Mail server ก่อนปรับเป็น `-all`',
      c2: 'ถูกต้อง: `p=reject` ใน DMARC สั่งให้ปลายทางปฏิเสธอีเมลที่ไม่ผ่าน SPF/DKIM alignment ทันที จึงหยุดแคมเปญ Domain spoofing ต่อลูกค้าได้อย่างเด็ดขาด',
      c3: 'ไม่ถูกต้อง: Secure Email Gateway ช่วยกรองอีเมลอันตรายที่ส่งเข้ามาหาพนักงานภายใน แต่ไม่สามารถป้องกันคนภายนอกปลอมชื่อโดเมนองค์กรส่งตรงถึงลูกค้าได้ โดย SEG เหมาะกับการสแกน Phishing, Sandbox และ Email DLP ในองค์กร',
      c4: 'ไม่ถูกต้อง: SPF เพียงอย่างเดียวไม่ได้ตรวจ Header `From:` ที่ผู้ใช้เห็นและอาจล้มเหลวเมื่อถูก Forward โดย DKIM ช่วยยืนยันความสมบูรณ์ของเนื้อหาและความแท้จริงของโดเมนแม้มีการ Forward'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจว่าเพียงแค่ประกาศ SPF, DKIM และตั้ง DMARC เป็น p=none ก็สามารถหยุดอีเมลปลอมแปลงโดเมนได้แล้ว ทั้งที่ p=none เป็นเพียงโหมดเก็บรายงานโดยไม่บล็อกอีเมลปลอม',
    relatedLessonIds: ['L4-06', 'L2-02'],
    tags: ['dmarc', 'spf', 'dkim', 'email-security']
  },
  {
    id: 'Q4-044',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'After migrating a custom invoicing service onto a hardened Linux server, the administrator notices the service cannot write logs to a newly created directory even though standard UNIX ownership and read/write permissions are correctly assigned. The administrator must inspect kernel denial events, fix the labeling mismatch, and maintain mandatory access controls long term. Which action is BEST?',
    promptTh:
      'หลังจากย้ายบริการออกใบแจ้งหนี้แบบปรับแต่งเองขึ้นเซิร์ฟเวอร์ Linux ที่เสริมแกร่งแล้ว ผู้ดูแลระบบพบว่าบริการไม่สามารถเขียน Log ลงในไดเรกทอรีที่สร้างใหม่ได้ แม้จะกำหนดความเป็นเจ้าของและสิทธิ์อ่าน/เขียนแบบ UNIX มาตรฐานถูกต้องแล้วก็ตาม ผู้ดูแลระบบต้องตรวจสอบบันทึกการปฏิเสธระดับ Kernel แก้ไขป้ายกำกับที่ไม่ตรงกัน และคงการควบคุมสิทธิ์แบบ Mandatory ไว้ในระยะยาว การดำเนินการใดดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Switch SELinux temporarily to Permissive mode to audit denials, apply the proper security context label, and return to Enforcing mode',
        textTh: 'สลับ SELinux เป็นโหมด Permissive ชั่วคราวเพื่อตรวจ Log การปฏิเสธ ปรับป้าย Security Context ให้ถูกต้อง แล้วสลับกลับเป็นโหมด Enforcing'
      },
      {
        id: 'c2',
        textEn: 'Set SELinux permanently to Disabled on the billing server while retaining standard UNIX permissions',
        textTh: 'ตั้งค่า SELinux เป็น Disabled ถาวรบนเซิร์ฟเวอร์ออกใบแจ้งหนี้โดยยังคงสิทธิ์ UNIX มาตรฐานไว้'
      },
      {
        id: 'c3',
        textEn: 'Apply an Active Directory Group Policy Object (GPO) to override the Linux kernel DAC permissions',
        textTh: 'ปรับใช้ Active Directory Group Policy Object (GPO) เพื่อเขียนทับสิทธิ์ DAC ของ Linux Kernel'
      },
      {
        id: 'c4',
        textEn: 'Disable File Integrity Monitoring (FIM) so the service can create new files freely',
        textTh: 'ปิดการทำงานของ File Integrity Monitoring (FIM) เพื่อให้บริการสร้างไฟล์ใหม่ได้อย่างอิสระ'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'การสลับ SELinux เป็นโหมด `Permissive` ชั่วคราวเพื่อตรวจ Log การปฏิเสธ ปรับป้าย Security Context ให้ถูกต้อง แล้วสลับกลับเป็นโหมด `Enforcing` เป็นการดำเนินการที่เหมาะสมที่สุด เพราะอาการสิทธิ์ UNIX ปกติถูกต้องแต่โปรเซสยังเขียนไม่ได้เกิดจาก SELinux บังคับใช้ Mandatory Access Control (MAC) ระดับ Kernel โดยใช้ Security Context โหมด `Permissive` ชั่วคราวช่วยให้บริการทำงานได้พร้อมบันทึก Audit Log เพื่อนำไปแก้ Context ให้ถูกต้อง ก่อนเปิดกลับเป็น `Enforcing` โดยไม่เสียการป้องกันถาวร',
    choiceRationales: {
      c1: 'ถูกต้อง: โหมด Permissive เปิดทางให้เก็บ Log การละเมิดนโยบาย MAC เพื่อนำไปปรับแก้ Security Context ได้แม่นยำ แล้วกลับสู่โหมด Enforcing เพื่อคงการคุ้มครองระดับ Kernel',
      c2: 'ไม่ถูกต้อง: การปิด SELinux ถาวร (Disabled) ทำลายการควบคุมแบบ MAC ระดับ Kernel หากโปรเซสถูกโจมตีจะอ่านเขียนไฟล์อื่นตามสิทธิ์บัญชีได้กว้างขึ้น โดยโหมด Enforcing ควรใช้บนระบบผลิตจริงเสมอเมื่อปรับป้ายครบแล้ว',
      c3: 'ไม่ถูกต้อง: Group Policy (GPO) เป็นเครื่องมือบริหารตั้งค่าความปลอดภัยแบบรวมศูนย์สำหรับระบบ Windows Active Directory ไม่ใช่กลไกปรับ Security Context ใน Linux Kernel',
      c4: 'ไม่ถูกต้อง: FIM ทำหน้าที่ตรวจจับและแจ้งเตือนการเปลี่ยนแปลงไฟล์เทียบกับแฮชอ้างอิง ไม่ได้บล็อกการทำงานของโปรเซสระดับ Kernel เหมือน SELinux โดย FIM จะใช้เมื่อต้องการเฝ้าระวังการถูกแก้ไขไฟล์โดยไม่ได้รับอนุญาต'
    },
    misconceptionTh:
      'ผู้เรียนบางคนเข้าใจว่าเมื่อ SELinux บล็อกแอปพลิเคชัน วิธีแก้ที่ถูกต้องคือตั้งเป็น Disabled ถาวร หรือเข้าใจผิดว่าสิทธิ์ Linux ปกติ (chmod/chown) สำคัญกว่านโยบาย MAC ของ SELinux',
    relatedLessonIds: ['L4-07', 'L4-01'],
    tags: ['selinux', 'os-security', 'mac', 'hardening']
  },
  {
    id: 'Q4-045',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'Following a compliance audit of Windows domain workstations and critical application servers, leadership mandates two improvements: (1) centrally prohibit USB removable storage and enforce uniform screen-lock settings across all domain-joined Windows endpoints, and (2) immediately detect unauthorized tampering with critical system binaries and configuration files against cryptographic baselines. Which TWO enterprise capabilities should be deployed? (Choose two.)',
    promptTh:
      'ภายหลังการตรวจสอบความสอดคล้องของเครื่องเวิร์กสเตชันในโดเมน Windows และเซิร์ฟเวอร์แอปพลิเคชันสำคัญ ฝ่ายบริหารสั่งปรับปรุง 2 ด้าน ได้แก่ (1) ห้ามใช้งานสื่อจัดเก็บข้อมูล USB แบบพกพาและบังคับตั้งค่าล็อกหน้าจอมาตรฐานจากศูนย์กลางบนเครื่อง Windows ที่เข้าโดเมนทั้งหมด และ (2) ตรวจจับการแก้ไขดัดแปลงไฟล์ไบนารีระบบและไฟล์ตั้งค่าสำคัญโดยไม่ได้รับอนุญาตเทียบกับค่าฐานการเข้ารหัสทันที ขีดความสามารถองค์กรใด 2 ข้อที่ควรนำไปติดตั้ง? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'SELinux in Enforcing mode across domain workstations',
        textTh: 'SELinux ในโหมด Enforcing บนเครื่องเวิร์กสเตชันในโดเมน'
      },
      {
        id: 'c2',
        textEn: 'DNS filtering with threat intelligence sinkholing',
        textTh: 'DNS Filtering พร้อมการทำ Sinkholing จากข่าวกรองภัยคุกคาม'
      },
      {
        id: 'c3',
        textEn: 'Active Directory Group Policy Objects (GPO)',
        textTh: 'Active Directory Group Policy Objects (GPO)'
      },
      {
        id: 'c4',
        textEn: 'Network DLP deployed at the SMTP email gateway',
        textTh: 'Network DLP ที่ติดตั้งบริเวณเกตเวย์อีเมล SMTP'
      },
      {
        id: 'c5',
        textEn: 'File Integrity Monitoring (FIM)',
        textTh: 'File Integrity Monitoring (FIM)'
      }
    ],
    correctChoiceIds: ['c3', 'c5'],
    explanationTh:
      'Active Directory Group Policy Objects (GPO) และ File Integrity Monitoring (FIM) เป็นคู่ขีดความสามารถที่ตอบโจทย์ทั้งสองข้อ โดย GPO คือกลไกศูนย์กลางของ Windows Active Directory สำหรับบังคับใช้ Baseline ด้าน USB และ Screen lock บนเครื่องในโดเมนอย่างสม่ำเสมอ ส่วน FIM คำนวณ Cryptographic Hash ของไฟล์ระบบและไฟล์ตั้งค่าสำคัญไว้เป็น Baseline แล้วแจ้งเตือนทันทีหากเกิดการดัดแปลงโดยไม่ได้รับอนุญาต',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: SELinux เป็นโมดูลความปลอดภัยระดับ Kernel สำหรับระบบปฏิบัติการ Linux ไม่สามารถนำไปใช้กับเครื่อง Windows ในโดเมน AD ได้ โดย SELinux เหมาะกับการจำกัดขอบเขตโปรเซสบนเซิร์ฟเวอร์ Linux',
      c2: 'ไม่ถูกต้อง: DNS filtering บล็อกการแปลงชื่อโดเมนอันตราย ไม่ได้บังคับนโยบายฮาร์ดแวร์ USB หรือตรวจสอบความสมบูรณ์ของไฟล์ระบบ โดย DNS filtering เหมาะกับการสกัดกั้นการเชื่อมต่อไปยังโดเมนฟิชชิงหรือ C2',
      c3: 'ถูกต้อง: Group Policy (GPO) กระจายและบังคับใช้การตั้งค่าความปลอดภัยบน Windows endpoints ทั้งองค์กรจากศูนย์กลาง',
      c4: 'ไม่ถูกต้อง: Network DLP ที่เกตเวย์อีเมลตรวจจับเนื้อหาข้อมูลลับที่ส่งออกทาง SMTP แต่ไม่ได้บังคับค่า OS baseline บน Windows หรือตรวจ Hash tampering ของไฟล์ไบนารีระบบ โดย Endpoint DLP เหมาะกับการสกัดการคัดลอกข้อมูลอ่อนไหวลง USB',
      c5: 'ถูกต้อง: FIM เปรียบเทียบค่าแฮชและ Metadata ของไฟล์สำคัญกับ Baseline เพื่อตรวจจับการแก้ไขที่ไม่ได้รับอนุมัติทันที'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนระหว่าง FIM (ตรวจจับการเปลี่ยนแปลงของไฟล์เทียบแฮชอ้างอิง) กับ DLP (ป้องกันการนำข้อมูลอ่อนไหวออกนอกขอบเขต) และสับสนแพลตฟอร์มระหว่าง GPO (Windows AD) กับ SELinux (Linux)',
    relatedLessonIds: ['L4-07', 'L4-01'],
    tags: ['group-policy', 'fim', 'os-security', 'integrity']
  },
  {
    id: 'Q4-046',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'Visiting contractors frequently connect personal laptops to corporate conference-room switch ports and internal Wi-Fi while missing critical OS security patches or running disabled endpoint agents. Management wants the network to authenticate devices, verify endpoint health status automatically before granting production access, and divert non-compliant machines to an isolated remediation subnet where only the patch server is reachable. Which capability BEST fulfills this goal?',
    promptTh:
      'ผู้รับเหมาที่มาปฏิบัติงานมักนำโน้ตบุ๊กส่วนตัวมาเสียบพอร์ตสวิตช์ในห้องประชุมและเชื่อมต่อ Wi-Fi ภายใน ทั้งที่ขาดแพตช์ความปลอดภัยสำคัญของระบบปฏิบัติการหรือปิดตัวแทนป้องกันบนเครื่องปลายทางไว้ ฝ่ายบริหารต้องการให้เครือข่ายตรวจสอบตัวตนอุปกรณ์ ประเมินสุขภาพความปลอดภัยของเครื่องโดยอัตโนมัติก่อนให้สิทธิ์เข้าถึงระบบผลิตจริง และเบี่ยงเครื่องที่ไม่ผ่านเกณฑ์ไปยังซับเน็ตแก้ไขแยกส่วนที่ติดต่อได้เฉพาะเซิร์ฟเวอร์อัปเดตแพตช์เท่านั้น ขีดความสามารถใดตอบโจทย์นี้ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Network Access Control (NAC) performing posture assessment and dynamic Quarantine VLAN assignment',
        textTh: 'Network Access Control (NAC) ที่ทำ Posture Assessment และจัดสรร Quarantine VLAN แบบไดนามิก'
      },
      {
        id: 'c2',
        textEn: 'File Integrity Monitoring (FIM) validating local system binaries after login',
        textTh: 'File Integrity Monitoring (FIM) เพื่อตรวจยืนยันไฟล์ไบนารีระบบท้องถิ่นหลังล็อกอิน'
      },
      {
        id: 'c3',
        textEn: 'A perimeter stateful firewall inspecting inbound internet traffic at the corporate WAN edge',
        textTh: 'Stateful Firewall ที่ขอบเครือข่ายสำหรับตรวจสอบทราฟฟิกขาเข้าจากอินเทอร์เน็ตบริเวณ WAN Edge'
      },
      {
        id: 'c4',
        textEn: 'Standard 802.1X port authentication verifying only user directory credentials without posture checks',
        textTh: 'การยืนยันตัวตนพอร์ต 802.1X มาตรฐานที่ตรวจสอบเฉพาะบัญชีผู้ใช้ในสารบบโดยไม่มีการตรวจสุขภาพเครื่อง'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'Network Access Control (NAC) ที่ทำ Posture Assessment และจัดสรร Quarantine VLAN แบบไดนามิกตอบโจทย์นี้ได้ดีที่สุด เพราะจุดเด่นของ NAC คือการผสานการยืนยันตัวตน (เช่น 802.1X/RADIUS) เข้ากับ Posture Assessment (ตรวจระดับแพตช์และสถานะ Agent) และบังคับสิทธิ์แบบมีเงื่อนไขโดยส่งเครื่องที่ไม่ผ่านเกณฑ์ไปยัง Quarantine/Remediation VLAN เพื่ออัปเดตให้ครบก่อนเข้าเครือข่ายผลิตจริง',
    choiceRationales: {
      c1: 'ถูกต้อง: NAC ประเมินความพร้อมด้านความปลอดภัยของเครื่องปลายทางก่อนให้สิทธิ์และกักกันเครื่องขาดแพตช์เข้า Remediation VLAN อัตโนมัติ',
      c2: 'ไม่ถูกต้อง: FIM ตรวจการเปลี่ยนแปลงไฟล์บนเครื่องที่ติดตั้งไว้ ไม่สามารถประเมินสุขภาพของโน้ตบุ๊กผู้รับเหมาบนพอร์ตสวิตช์หรือย้าย VLAN ได้ โดย FIM เหมาะกับการเฝ้าระวังการแก้ไขไฟล์ระบบบนเซิร์ฟเวอร์',
      c3: 'ไม่ถูกต้อง: ไฟร์วอลล์ที่ WAN edge มองไม่เห็นเครื่องผู้รับเหมาที่นำมาเสียบสาย LAN หรือต่อ Wi-Fi ภายในหลังแนวไฟร์วอลล์แล้ว โดย Perimeter firewall เหมาะกับการกรองทราฟฟิกระหว่างอินเทอร์เน็ตและ Screened subnet',
      c4: 'ไม่ถูกต้อง: 802.1X เพียงอย่างเดียวตรวจสอบเฉพาะตัวตนของบัญชีหรือใบรับรอง แต่ไม่สามารถประเมินสถานะแพตช์หรือ EDR และไม่สามารถสั่งย้ายเข้า Remediation VLAN ตามสุขภาพเครื่องได้'
    },
    misconceptionTh:
      'ผู้เรียนบางคนเข้าใจว่า 802.1X เพียงอย่างเดียวสามารถตรวจระดับแพตช์ OS และสถานะ Antivirus ของเครื่องลูกข่ายได้ ทั้งที่การทำ Posture Assessment และ Quarantine VLAN เป็นขีดความสามารถหลักของ NAC',
    relatedLessonIds: ['L4-07', 'L3-04'],
    tags: ['nac', 'posture-assessment', 'quarantine-vlan', 'network-control']
  },
  {
    id: 'Q4-047',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    type: 'msq',
    selectCount: 3,
    difficulty: 'exam-ready',
    promptEn:
      'During a stealthy breach, an attacker phishes an HR specialist, authenticates with valid stolen credentials at 02:40 AM from an anomalous ASN without dropping malware executables, downloads thousands of employee tax records, and attempts to upload them to an external personal cloud drive. Signature-based antivirus never alerts. Which THREE enterprise capabilities BEST close these detection and enforcement gaps? (Select three.)',
    promptTh:
      'ในการเจาะระบบแบบแนบเนียน ผู้โจมตีหลอกขโมยข้อมูลรับรองของเจ้าหน้าที่ฝ่ายบุคคล ล็อกอินด้วยสิทธิ์ที่ถูกต้องในเวลา 02:40 น. จาก ASN ที่ผิดปกติโดยไม่ได้วางไฟล์มัลแวร์ใด ๆ ดาวน์โหลดเอกสารภาษีพนักงานหลายพันรายการ และพยายามอัปโหลดขึ้นคลาวด์ส่วนตัวภายนอก ซึ่ง Antivirus แบบใช้ลายเซ็นไม่แจ้งเตือนเลย ขีดความสามารถองค์กรใด 3 ข้อที่ปิดช่องโหว่ด้านการตรวจจับและยับยั้งเหตุการณ์นี้ได้ดีที่สุด? (เลือก 3 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Legacy signature-only antivirus scanning executable files on disk',
        textTh: 'Antivirus แบบดั้งเดิมที่ใช้เฉพาะลายเซ็นสแกนไฟล์โปรแกรมบนดิสก์'
      },
      {
        id: 'c2',
        textEn: 'User Behavior Analytics (UBA) scoring off-hours access and abnormal download volumes',
        textTh: 'User Behavior Analytics (UBA) เพื่อประเมินความผิดปกติของการเข้าใช้งานนอกเวลาและปริมาณการดาวน์โหลด'
      },
      {
        id: 'c3',
        textEn: 'Passive hardware network TAP without analytics or enforcement integrations',
        textTh: 'Hardware Network TAP แบบ Passive ที่ไม่มีระบบวิเคราะห์หรือเชื่อมโยงการบังคับใช้'
      },
      {
        id: 'c4',
        textEn: 'Extended Detection and Response (XDR) correlating email, identity, and endpoint telemetry for automated containment',
        textTh: 'Extended Detection and Response (XDR) เพื่อเชื่อมโยง Telemetry ข้ามชั้นอีเมล ตัวตน และปลายทางพร้อมตอบสนองอัตโนมัติ'
      },
      {
        id: 'c5',
        textEn: 'Data Loss Prevention (DLP) inspecting content and blocking sensitive uploads to unapproved cloud drives',
        textTh: 'Data Loss Prevention (DLP) เพื่อตรวจสอบเนื้อหาและบล็อกการอัปโหลดข้อมูลอ่อนไหวไปยังคลาวด์ที่ไม่ได้รับอนุญาต'
      },
      {
        id: 'c6',
        textEn: 'DNSSEC zone signing on the organization\'s public authoritative DNS server',
        textTh: 'การลงลายเซ็นโซน DNS ด้วย DNSSEC บนเซิร์ฟเวอร์ DNS สาธารณะขององค์กร'
      }
    ],
    correctChoiceIds: ['c2', 'c4', 'c5'],
    explanationTh:
      'User Behavior Analytics (UBA), Extended Detection and Response (XDR) และ Data Loss Prevention (DLP) เป็น 3 ขีดความสามารถที่ปิดช่องโหว่ของเหตุการณ์ที่ไม่มีไฟล์มัลแวร์ให้ Antivirus จับได้ดีที่สุด: (1) การสวมรอยบัญชีที่ถูกต้องนอกเวลาและดึงข้อมูลปริมาณมากต้องใช้ UBA เทียบกับ Baseline พฤติกรรม, (2) การเชื่อมโยงอีเมลฟิชชิง การล็อกอินผิดปกติ และกิจกรรมบนเครื่องพร้อมสั่งระงับข้ามชั้นต้องใช้ XDR และ (3) การสกัดกั้นการอัปโหลดเอกสารภาษีออกนอกองค์กรต้องใช้ DLP',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การโจมตีครั้งนี้ใช้ข้อมูลรับรองที่ขโมยมาโดยไม่ได้วางไฟล์มัลแวร์บนดิสก์ Antivirus แบบลายเซ็นจึงไม่มีวันตรวจพบ โดย Signature AV เหมาะกับการสกัดกั้นไฟล์มัลแวร์ที่เป็นที่รู้จักทั่วไป',
      c2: 'ถูกต้อง: UBA สร้างแบบจำลอง Baseline ของผู้ใช้แต่ละราย จึงตรวจจับความเบี่ยงเบนเช่นการเข้าถึงเวลา 02:40 น. และการดาวน์โหลดไฟล์ภาษีจำนวนผิดปกติได้แม้ใช้บัญชีจริง',
      c3: 'ไม่ถูกต้อง: Hardware TAP เพียงอย่างเดียวเป็นแค่อุปกรณ์แยกสัญญาณเครือข่าย ไม่ได้วิเคราะห์พฤติกรรมบัญชีหรือบล็อกการอัปโหลดข้อมูลลับ โดย TAP เหมาะกับการส่งสำเนาทราฟฟิกให้เซ็นเซอร์ IDS',
      c4: 'ถูกต้อง: XDR ผสานสัญญาณจากชั้น Email, Identity และ Endpoint เพื่อร้อยเรียงเป็น Incident เดียวและสั่งระงับบัญชีหรือกักกันเครื่องอัตโนมัติได้ทันที',
      c5: 'ถูกต้อง: DLP ตรวจสอบทั้งเนื้อหาข้อมูลภาษี (PII) และบริบทการอัปโหลดไปยังคลาวด์ส่วนตัวเพื่อบล็อกการรั่วไหลทันที',
      c6: 'ไม่ถูกต้อง: DNSSEC ปกป้องความถูกต้องของเรกคอร์ด DNS จากการปลอมแปลงแคช ไม่เกี่ยวข้องกับการตรวจจับการสวมรอยบัญชีหรือการอัปโหลดไฟล์ภาษี โดย DNSSEC เหมาะกับการป้องกัน DNS cache poisoning'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนคิดว่าการป้องกันการเจาะระบบมีเพียง Antivirus หรือ Firewall ก็เพียงพอแล้ว โดยมองข้ามว่าภัยคุกคามที่ใช้บัญชีจริง (Living-off-the-Land / Compromised Credentials) ต้องอาศัย UBA, XDR และ DLP ร่วมกัน',
    relatedLessonIds: ['L4-07', 'L4-05', 'L4-11'],
    tags: ['uba', 'xdr', 'dlp', 'compromised-credentials']
  },

  // =========================================================================
  // Objective 4.6: Given a scenario, implement and maintain identity and access management
  // =========================================================================
  {
    id: 'Q4-048',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A compliance audit uncovers two recurring IAM failures: 11 former contractors whose agreements ended four months ago still retain active SaaS project accounts, and several employees who transferred from Customer Support to Marketing still hold database permissions from their previous roles. Which pair of IAM lifecycle practices BEST resolves both issues systematically?',
    promptTh:
      'การตรวจสอบความสอดคล้องพบความบกพร่องด้าน IAM สองประการที่เกิดซ้ำ: อดีตผู้รับเหมา 11 รายที่สิ้นสุดสัญญาไปสี่เดือนแล้วยังคงมีบัญชีใช้งานในระบบโครงการ SaaS และพนักงานหลายคนที่ย้ายจากฝ่ายสนับสนุนลูกค้าไปฝ่ายการตลาดยังคงถือสิทธิ์ฐานข้อมูลจากบทบาทเดิมอยู่ คู่แนวปฏิบัติวงจรชีวิต IAM ใดช่วยแก้ไขปัญหาทั้งสองอย่างเป็นระบบได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Enforcing password complexity symbols and lowering minimum password age',
        textTh: 'การบังคับใช้อักขระพิเศษในรหัสผ่านและลดอายุขั้นต่ำของรหัสผ่าน'
      },
      {
        id: 'c2',
        textEn: 'Manual help-desk account deletion upon email request combined with cloning peer permissions on transfer',
        textTh: 'การลบบัญชีด้วยมือโดย Help Desk เมื่อได้รับอีเมลแจ้งร่วมกับการคัดลอกสิทธิ์จากเพื่อนร่วมงานเมื่อย้ายแผนก'
      },
      {
        id: 'c3',
        textEn: 'Implementing passwordless FIDO2 login for contractors combined with longer password expiration intervals',
        textTh: 'การใช้การยืนยันตัวตนไร้รหัสผ่าน FIDO2 สำหรับผู้รับเหมาควบคู่กับการขยายระยะเวลาหมดอายุรหัสผ่าน'
      },
      {
        id: 'c4',
        textEn: 'Automated HR-integrated de-provisioning combined with periodic access attestation reviews',
        textTh: 'การเพิกถอนบัญชีอัตโนมัติที่เชื่อมโยงกับระบบ HR ร่วมกับการทบทวนรับรองสิทธิ์ตามรอบเวลา (Attestation)'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'การเพิกถอนบัญชีอัตโนมัติที่เชื่อมโยงกับระบบ HR ร่วมกับการทบทวนรับรองสิทธิ์ตามรอบเวลา (Access Attestation) แก้ปัญหาทั้งสองอย่างได้อย่างเป็นระบบที่สุด เพราะบัญชีค้างของอดีตผู้รับเหมา (Orphaned accounts) แก้ด้วย Automated De-provisioning ที่เชื่อม HRIS/สัญญาจ้างเพื่อปิดบัญชีและเพิกถอน Token ทันทีเมื่อพ้นสภาพ ส่วนการสะสมสิทธิ์เมื่อย้ายแผนก (Privilege creep) แก้ด้วย Access Attestation เพื่อตรวจทานและถอดสิทธิ์เดิมที่หมดความจำเป็น',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: นโยบายความซับซ้อนและอายุรหัสผ่านไม่ได้ลบหรือระงับบัญชีของอดีตผู้รับเหมา และไม่ได้ตัดสิทธิ์ฐานข้อมูลเดิมเมื่อพนักงานย้ายแผนก โดยนโยบายรหัสผ่านเหมาะกับการลดความเสี่ยง Brute force',
      c2: 'ไม่ถูกต้อง: การลบบัญชีด้วยมือมักล่าช้าหรือตกหล่นจนเกิด Orphaned accounts และการคัดลอกสิทธิ์จากเพื่อนร่วมงานโดยไม่ล้างสิทธิ์เดิมเป็นสาเหตุหลักของ Privilege creep โดยการให้สิทธิ์ควรผูกผ่าน RBAC/Group แทน',
      c3: 'ไม่ถูกต้อง: Passwordless FIDO2 ช่วยป้องกันฟิชชิงและ Credential stuffing ขณะล็อกอิน แต่หากยังไม่ทำ De-provisioning อดีตผู้รับเหมาก็ยังใช้บัญชีเดิมเข้าสู่ระบบได้อยู่ดี',
      c4: 'ถูกต้อง: Automated de-provisioning กำจัดบัญชีค้างหลังสิ้นสุดสัญญา และ Attestation บังคับให้หัวหน้างาน/เจ้าของข้อมูลตรวจสอบและตัดสิทธิ์ส่วนเกินจากการย้ายแผนกอย่างสม่ำเสมอ'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจว่าขั้นตอน Provisioning ตอนรับพนักงานใหม่สำคัญกว่าขั้นตอนหลังเลิกจ้างหรือย้ายงาน จึงละเลย De-provisioning และ Attestation จนเกิด Orphaned accounts และ Privilege creep',
    relatedLessonIds: ['L4-08', 'L4-10'],
    tags: ['de-provisioning', 'attestation', 'privilege-creep', 'iam-lifecycle']
  },
  {
    id: 'Q4-049',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'An organization mandates 8-character passwords with strict symbol complexity and forced 30-day password expiration. As a result, employees write passwords on sticky notes, rotate predictable suffixes such as "Winter2026!1", and reuse corporate passwords on external websites—triggering credential-stuffing alerts. Which password policy change MOST effectively improves security?',
    promptTh:
      'องค์กรแห่งหนึ่งบังคับใช้รหัสผ่านยาว 8 ตัวอักษรที่ต้องมีสัญลักษณ์ซับซ้อนและบังคับเปลี่ยนทุก 30 วัน ส่งผลให้พนักงานจดรหัสผ่านลงกระดาษโน้ต เปลี่ยนเฉพาะตัวเลขท้ายรูปแบบเดิมเช่น "Winter2026!1" และนำรหัสผ่านองค์กรไปใช้ซ้ำบนเว็บไซต์ภายนอกจนเกิดการแจ้งเตือน Credential Stuffing การปรับปรุงนโยบายรหัสผ่านข้อใดยกระดับความปลอดภัยได้อย่างมีประสิทธิภาพมากที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Require longer passphrases, eliminate arbitrary periodic expiration unless compromised, screen against breached passwords, and deploy an enterprise password manager with MFA',
        textTh: 'กำหนดให้ใช้ Passphrase ที่ยาวขึ้น ยกเลิกการบังคับหมดอายุตามรอบที่ไร้เหตุบ่งชี้ ตรวจสอบเทียบรายการรหัสที่เคยรั่วไหล และจัดหา Password Manager ร่วมกับ MFA'
      },
      {
        id: 'c2',
        textEn: 'Shorten password expiration to every 14 days while keeping the 8-character minimum length',
        textTh: 'ลดระยะเวลาหมดอายุรหัสผ่านให้สั้นลงเหลือทุก 14 วันโดยคงความยาวขั้นต่ำ 8 ตัวอักษรไว้'
      },
      {
        id: 'c3',
        textEn: 'Set minimum password age to zero days so users can cycle back to memorized favorites quickly',
        textTh: 'ตั้งค่า Minimum Password Age เป็น 0 วันเพื่อให้ผู้ใช้เปลี่ยนวนกลับมาใช้รหัสโปรดที่จำได้รวดเร็ว'
      },
      {
        id: 'c4',
        textEn: 'Enforce 12-character complexity rules with 30-day rotation while prohibiting enterprise password managers',
        textTh: 'บังคับใช้กฎความซับซ้อน 12 ตัวอักษรพร้อมเปลี่ยนทุก 30 วันโดยห้ามใช้ Password Manager องค์กร'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'การกำหนดให้ใช้ Passphrase ที่ยาวขึ้น ยกเลิกการบังคับหมดอายุตามรอบที่ไร้เหตุบ่งชี้ ตรวจสอบเทียบรายการรหัสที่เคยรั่วไหล และจัดหา Password Manager ร่วมกับ MFA สอดคล้องกับแนวปฏิบัติสมัยใหม่ (NIST SP 800-63B) มากที่สุด เพราะความยาว (Length/Passphrase) เพิ่มความต้านทานการแคร็กได้มากกว่า Complexity สั้น ๆ การไม่บังคับ Expiration บ่อยโดยไม่มีเหตุรั่วไหลช่วยลดการตั้งรหัสเดาง่าย และการเช็ก Breached lists ควบคู่กับ Password Manager และ MFA ช่วยป้องกัน Password reuse และ Credential stuffing ได้ตรงจุด',
    choiceRationales: {
      c1: 'ถูกต้อง: เน้นความยาวรหัสผ่าน เลิกบังคับหมดอายุถี่โดยไร้เหตุบ่งชี้ บล็อกรหัสที่เคยรั่ว และใช้ Password manager + MFA เพื่อป้องกัน Reuse และฟิชชิง',
      c2: 'ไม่ถูกต้อง: การบังคับเปลี่ยนถี่ขึ้นทุก 14 วันยิ่งทำให้พนักงานจดใส่กระดาษและตั้งรหัสคาดเดาง่ายกว่าเดิม โดยการเปลี่ยนรหัสทันทีควรทำเฉพาะเมื่อมีหลักฐานหรือข้อสงสัยว่ารั่วไหล',
      c3: 'ไม่ถูกต้อง: Minimum password age 0 วันเปิดช่องให้ผู้ใช้เปลี่ยนรหัสติด ๆ กันหลายครั้งภายในวันเดียวเพื่อหลบเลี่ยงการตรวจ Password history แล้ววนกลับมารหัสเดิม โดย Minimum password age อย่างน้อย 1 วันเหมาะกับการบังคับให้ Password history ทำงานได้จริง',
      c4: 'ไม่ถูกต้อง: การห้ามใช้ Password manager พร้อมบังคับเปลี่ยนทุก 30 วันยิ่งผลักดันให้พนักงานใช้รหัสซ้ำหรือจดใส่กระดาษ โดย Enterprise password manager เหมาะกับการสร้างรหัสเฉพาะที่ยาวและไม่ซ้ำกันในแต่ละระบบ'
    },
    misconceptionTh:
      'ผู้เรียนจำนวนมากยังยึดติดกับความเชื่อเดิมว่า "รหัสสั้นแต่มีสัญลักษณ์เยอะ + เปลี่ยนทุก 30 วัน" ปลอดภัยที่สุด ทั้งที่ความยาวรหัสผ่าน การห้ามใช้ซ้ำ และ MFA มีประสิทธิภาพสูงกว่ามาก',
    relatedLessonIds: ['L4-08', 'L2-07'],
    tags: ['password-policy', 'passphrase', 'password-manager', 'credential-stuffing']
  },
  {
    id: 'Q4-050',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'Before issuing a corporate digital account and hardware security key to a newly hired remote engineer, an organization requires a live video session to inspect government-issued photo identification and match it against verified HR onboarding records. The same verification standard is required before the help desk can re-enroll a lost authenticator. Which IAM process does this step represent?',
    promptTh:
      'ก่อนออกบัญชีดิจิทัลขององค์กรและ Hardware Security Key ให้แก่วิศวกรที่ทำงานระยะไกลซึ่งเพิ่งเข้าทำงานใหม่ องค์กรกำหนดให้ต้องมีการประชุมวิดีโอสดเพื่อตรวจสอบเอกสารยืนยันตัวตนที่มีภาพถ่ายซึ่งออกโดยรัฐเทียบกับข้อมูลการจ้างงานที่ผ่านการตรวจสอบจากฝ่ายบุคคล และใช้มาตรฐานเดียวกันนี้ก่อนที่ Help Desk จะลงทะเบียนตัวรับรองที่สูญหายให้ใหม่ ขั้นตอนดังกล่าวตรงกับกระบวนการ IAM ใด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Access attestation',
        textTh: 'การรับรองสิทธิ์ (Access Attestation)'
      },
      {
        id: 'c2',
        textEn: 'Identity proofing',
        textTh: 'การพิสูจน์อัตลักษณ์เบื้องต้น (Identity Proofing)'
      },
      {
        id: 'c3',
        textEn: 'Identity federation',
        textTh: 'การเชื่อมโยงอัตลักษณ์ข้ามระบบ (Identity Federation)'
      },
      {
        id: 'c4',
        textEn: 'Delegated authorization',
        textTh: 'การมอบอำนาจการเข้าถึง (Delegated Authorization)'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'การพิสูจน์อัตลักษณ์เบื้องต้น (Identity Proofing) เป็นกระบวนการที่ตรงกับสถานการณ์นี้ ซึ่งเป็นขั้นตอนการตรวจสอบและยืนยันตัวตนจริงในโลกกายภาพของบุคคล (เช่น บัตรประชาชน หนังสือเดินทาง ทะเบียน HR) ก่อนที่จะสร้างบัญชีดิจิทัล ออกกุญแจ หรือกู้คืนตัวตนให้ใหม่ เพื่อป้องกันการสวมรอยตั้งแต่ต้นทาง',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Access attestation เป็นการทบทวนและรับรองสิทธิ์ของบัญชีที่มีอยู่แล้วตามรอบเวลาโดยหัวหน้างานหรือเจ้าของข้อมูล ไม่ใช่การตรวจบัตรประจำตัวก่อนออกบัญชีใหม่ โดย Attestation เหมาะกับการตรวจสิทธิ์พนักงานประจำไตรมาส',
      c2: 'ถูกต้อง: Identity proofing ผูกตัวตนจริงตามกฎหมายเข้ากับบัญชีดิจิทัลก่อนออก Credential หรือรีเซ็ต MFA เพื่อป้องกันผู้โจมตีหลอก Help desk สวมรอย',
      c3: 'ไม่ถูกต้อง: Federation คือการสร้างความเชื่อใจระหว่าง IdP กับ SP ข้ามโดเมนหรือองค์กร เพื่อให้ใช้บัญชีเดิมล็อกอินข้ามบริการได้ โดย Federation เหมาะกับการทำ SSO ข้ามองค์กร',
      c4: 'ไม่ถูกต้อง: Delegated authorization (เช่น OAuth 2.0) เป็นการอนุญาตให้แอปพลิเคชันเข้าถึงทรัพยากรแทนผู้ใช้ในขอบเขตจำกัด ไม่ใช่การตรวจสอบบัตรประชาชนพนักงานใหม่ โดย OAuth เหมาะกับการมอบสิทธิ์ให้แอปเรียก API'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนระหว่าง Identity Proofing (การตรวจสอบตัวตนจริงครั้งแรกก่อนออกหรือกู้คืน Credential) กับ Authentication (การตรวจยืนยันทุกครั้งที่ล็อกอิน)',
    relatedLessonIds: ['L4-08', 'L1-02'],
    tags: ['identity-proofing', 'onboarding', 'account-recovery', 'iam']
  },
  {
    id: 'Q4-051',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'exam-ready',
    promptEn:
      'An enterprise maintains employee identities in an internal directory and is integrating two external services: (1) an external cloud HR SaaS portal requiring browser-based federated SSO via signed XML assertions from the corporate Identity Provider (IdP), and (2) a partner mobile application that must call an internal scheduling REST API with scoped read-only tokens without ever receiving employee passwords. Which TWO standards BEST address these integration requirements? (Choose two.)',
    promptTh:
      'องค์กรแห่งหนึ่งจัดเก็บอัตลักษณ์พนักงานไว้ในสารบบภายในและกำลังเชื่อมต่อบริการภายนอก 2 ระบบ ได้แก่ (1) พอร์ทัล HR SaaS บนคลาวด์ภายนอกที่ต้องทำ Federated SSO ผ่านเว็บเบราว์เซอร์ด้วย XML Assertion ที่ลงนามจาก Identity Provider (IdP) ขององค์กร และ (2) แอปพลิเคชันมือถือของคู่ค้าที่ต้องเรียกใช้ REST API ตารางงานภายในด้วยโทเคนที่มีขอบเขตอ่านอย่างเดียวโดยไม่ได้รับรหัสผ่านของพนักงาน มาตรฐานใด 2 ข้อที่ตอบโจทย์การเชื่อมต่อเหล่านี้ได้ดีที่สุด? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'SAML 2.0 for federated browser-based SSO with the HR SaaS portal',
        textTh: 'SAML 2.0 สำหรับทำ Federated SSO ผ่านเบราว์เซอร์กับพอร์ทัล HR SaaS'
      },
      {
        id: 'c2',
        textEn: 'Unencrypted LDAP over TCP port 389 exposed directly to the partner mobile app over the internet',
        textTh: 'LDAP แบบไม่เข้ารหัสบนพอร์ต TCP 389 ที่เปิดออกสู่แอปมือถือคู่ค้าผ่านอินเทอร์เน็ตโดยตรง'
      },
      {
        id: 'c3',
        textEn: 'OAuth 2.0 for scoped delegated authorization to the scheduling REST API',
        textTh: 'OAuth 2.0 สำหรับการมอบอำนาจการเข้าถึงแบบจำกัดขอบเขตไปยัง REST API ตารางงาน'
      },
      {
        id: 'c4',
        textEn: 'TACACS+ for browser-based SaaS federation assertions',
        textTh: 'TACACS+ สำหรับส่งข้อความยืนยันตัวตนข้ามระบบ SaaS บนเบราว์เซอร์'
      },
      {
        id: 'c5',
        textEn: 'SNMPv3 traps for token-based mobile API authorization',
        textTh: 'SNMPv3 Traps สำหรับการอนุญาตสิทธิ์โทเคนของแอปมือถือ'
      }
    ],
    correctChoiceIds: ['c1', 'c3'],
    explanationTh:
      'SAML 2.0 และ OAuth 2.0 เป็นมาตรฐานที่ตอบโจทย์การเชื่อมต่อทั้งสองระบบได้อย่างเหมาะสม โดย SAML 2.0 เป็นมาตรฐานเปิดแบบ XML ที่ออกแบบมาเพื่อแลกเปลี่ยน Authentication/Authorization Assertions ระหว่าง IdP กับ SP บนเบราว์เซอร์สำหรับ Enterprise Web SSO และ Federation ส่วน OAuth 2.0 เป็นกรอบมาตรฐานแบบ JSON/Token สำหรับ Delegated Authorization ที่ให้แอปคู่ค้าถือ Access Token จำกัด Scope อ่าน API ได้โดยไม่ต้องแตะต้องรหัสผ่านพนักงาน',
    choiceRationales: {
      c1: 'ถูกต้อง: SAML 2.0 ส่ง XML Assertion ที่ลงนามดิจิทัลจาก IdP ไปยัง SP (SaaS) ช่วยให้เกิด Enterprise Web SSO และ Federation อย่างมีมาตรฐาน Interoperability',
      c2: 'ไม่ถูกต้อง: LDAP เป็นโปรโตคอลสืบค้นสารบบภายใน (ควรใช้ LDAPS/636 ภายในองค์กรเท่านั้น) ไม่ใช่โปรโตคอลออก Token ข้ามอินเทอร์เน็ตให้แอปมือถือภายนอก โดย LDAPS เหมาะกับการเชื่อมต่อ IdP กับ Active Directory ภายในศูนย์ข้อมูล',
      c3: 'ถูกต้อง: OAuth 2.0 ออก Access Token ที่มี Scope จำกัดเฉพาะสิทธิ์อ่านตารางงานให้แอปคู่ค้าเรียกใช้ REST API โดยไม่ต้องขอรหัสผ่านผู้ใช้',
      c4: 'ไม่ถูกต้อง: TACACS+ เป็นโปรโตคอล AAA สำหรับบริหารจัดการอุปกรณ์เครือข่าย (Switch/Router) ไม่ใช่มาตรฐาน Federation บนเว็บเบราว์เซอร์ โดย TACACS+ เหมาะกับการควบคุมสิทธิ์ล็อกอินของวิศวกรเครือข่ายบนสวิตช์และเราเตอร์',
      c5: 'ไม่ถูกต้อง: SNMPv3 ใช้มอนิเตอร์และแจ้งเตือนอุปกรณ์เครือข่าย ไม่เกี่ยวข้องกับการอนุญาตสิทธิ์เรียกใช้ REST API โดย SNMPv3 เหมาะกับการติดตามสถานะโครงสร้างพื้นฐานเครือข่าย'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนบทบาทของ LDAP (Query สารบบภายใน), SAML (Enterprise Web SSO ด้วย XML) และ OAuth 2.0 (Delegated API Authorization ด้วย Token/Scope)',
    relatedLessonIds: ['L4-08', 'L4-06'],
    tags: ['saml', 'oauth', 'federation', 'sso', 'interoperability']
  },
  {
    id: 'Q4-052',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'In a defense research facility, every document carries a centrally assigned classification label (such as Confidential or Secret) and every employee holds a centrally assigned security clearance. Even the original author of a Secret report cannot share or modify permissions to grant access to a colleague who holds only Confidential clearance. Which access control model is enforced?',
    promptTh:
      'ในศูนย์วิจัยด้านกลาโหม เอกสารทุกฉบับมีป้ายระดับชั้นความลับที่กำหนดจากศูนย์กลาง (เช่น Confidential หรือ Secret) และพนักงานทุกคนมีระดับสิทธิ์ความไว้วางใจที่กำหนดจากศูนย์กลางเช่นกัน แม้แต่ผู้สร้างรายงานระดับ Secret เองก็ไม่สามารถแชร์หรือแก้ไขสิทธิ์เพื่อเปิดให้เพื่อนร่วมงานที่มีระดับสิทธิ์เพียง Confidential เข้าถึงเอกสารนั้นได้ โมเดลควบคุมการเข้าถึงใดกำลังถูกบังคับใช้อยู่?',
    choices: [
      {
        id: 'c1',
        textEn: 'Discretionary Access Control (DAC)',
        textTh: 'Discretionary Access Control (DAC)'
      },
      {
        id: 'c2',
        textEn: 'Mandatory Access Control (MAC)',
        textTh: 'Mandatory Access Control (MAC)'
      },
      {
        id: 'c3',
        textEn: 'Role-Based Access Control (RBAC)',
        textTh: 'Role-Based Access Control (RBAC)'
      },
      {
        id: 'c4',
        textEn: 'Rule-based Access Control',
        textTh: 'Rule-based Access Control'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'Mandatory Access Control (MAC) เป็นโมเดลที่กำลังถูกบังคับใช้อยู่ เพราะหัวใจของ MAC คือระบบกลางเป็นผู้กำหนดป้ายความลับของวัตถุ (Labels) และระดับความไว้วางใจของผู้ใช้ (Clearance) อย่างเข้มงวด โดยที่เจ้าของไฟล์หรือผู้สร้างเอกสารไม่สามารถปรับเปลี่ยนสิทธิ์หรือส่งต่อให้ผู้ที่ไม่มี Clearance ระดับเดียวกันเองได้',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: DAC ให้อิสระเจ้าของไฟล์หรือผู้สร้างในการกำหนดและแชร์สิทธิ์ให้ผู้อื่นได้เองซึ่งตรงข้ามกับโจทย์นี้ โดย DAC เหมาะกับการทำงานร่วมกันบนไฟล์เซิร์ฟเวอร์ทั่วไปที่ผู้ใช้จัดการสิทธิ์โฟลเดอร์เองได้',
      c2: 'ถูกต้อง: MAC บังคับใช้นโยบายผ่านป้ายความลับและระดับ Clearance จากศูนย์กลางโดยผู้ใช้ไม่สามารถเขียนทับหรือปลดล็อกสิทธิ์เองได้',
      c3: 'ไม่ถูกต้อง: RBAC จัดกลุ่มสิทธิ์ตามบทบาทหน้าที่งานในองค์กร ไม่ได้ตัดสินจากป้ายระดับชั้นความลับที่ห้ามผู้สร้างเปลี่ยนสิทธิ์ในระดับระบบ โดย RBAC เหมาะกับการจัดการสิทธิ์พนักงานจำนวนมากตามตำแหน่งงาน',
      c4: 'ไม่ถูกต้อง: Rule-based Access Control ใช้เงื่อนไขกฎตายตัว เช่น IP/Port ACL หรือเวลาเข้าใช้งาน ไม่ได้อาศัยป้าย Classification และ Clearance โดย Rule-based เหมาะกับการจำกัดเวลาหรือกฎเครือข่ายตายตัว'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนระหว่าง MAC (เจ้าของไฟล์เปลี่ยนสิทธิ์ไม่ได้ ระบบกลางบังคับผ่าน Label/Clearance) กับ DAC (เจ้าของไฟล์มีดุลพินิจแชร์สิทธิ์ได้เอง)',
    relatedLessonIds: ['L4-09', 'L1-02'],
    tags: ['mac', 'access-control-models', 'clearance', 'labels']
  },
  {
    id: 'Q4-053',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'A cloud financial platform must allow access to high-risk treasury transfer records only when ALL of the following conditions evaluate true simultaneously at the time of request: the requester holds the Senior Treasury Analyst job role, the record is tagged Financial-Restricted, the endpoint posture reports Compliant, the source IP originates within the headquarters country, and the timestamp falls within local business hours. Which access control model BEST supports evaluating all of these conditions dynamically together?',
    promptTh:
      'แพลตฟอร์มการเงินบนคลาวด์ต้องอนุญาตให้เข้าถึงข้อมูลการโอนเงินคลังความเสี่ยงสูงได้ก็ต่อเมื่อเงื่อนไขทั้งหมดต่อไปนี้เป็นจริงพร้อมกัน ณ เวลาที่ส่งคำขอ: ผู้ขอมีบทบาทงาน Senior Treasury Analyst เอกสารติดแท็ก Financial-Restricted สถานะความพร้อมของเครื่องปลายทางรายงานว่า Compliant ที่อยู่ IP ต้นทางมาจากประเทศที่ตั้งสำนักงานใหญ่ และเวลาที่ร้องขออยู่ในช่วงเวลาทำการท้องถิ่น โมเดลควบคุมการเข้าถึงใดรองรับการประเมินเงื่อนไขทั้งหมดเหล่านี้แบบไดนามิกร่วมกันได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Discretionary Access Control (DAC)',
        textTh: 'Discretionary Access Control (DAC)'
      },
      {
        id: 'c2',
        textEn: 'Role-Based Access Control (RBAC) only',
        textTh: 'Role-Based Access Control (RBAC) เพียงอย่างเดียว'
      },
      {
        id: 'c3',
        textEn: 'Mandatory Access Control (MAC) using static OS labels only',
        textTh: 'Mandatory Access Control (MAC) ที่ใช้เฉพาะป้ายกำกับระบบปฏิบัติการแบบคงที่'
      },
      {
        id: 'c4',
        textEn: 'Attribute-Based Access Control (ABAC)',
        textTh: 'Attribute-Based Access Control (ABAC)'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'Attribute-Based Access Control (ABAC) รองรับเงื่อนไขเหล่านี้ได้เหมาะสมที่สุด เพราะ ABAC ประเมินการตัดสินสิทธิ์แบบไดนามิกโดยรวม Attribute จากหลายมิติพร้อมกันในนโยบายเดียว ได้แก่ Subject attributes (บทบาทงาน), Resource attributes (แท็ก Financial-Restricted), Action และ Environmental/Context attributes (Device posture, Geolocation, Time) ซึ่ง RBAC หรือ MAC เพียงอย่างเดียวไม่สามารถประเมินเงื่อนไขเชิงสภาพแวดล้อมแบบไดนามิกทั้งหมดนี้ได้',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: DAC อาศัยดุลพินิจของเจ้าของทรัพยากรในการตั้ง ACL ไม่สามารถบังคับเงื่อนไขซับซ้อนด้านสถานะเครื่อง ประเทศต้นทาง และแท็กข้อมูลพร้อมกันได้ โดย DAC เหมาะกับไฟล์แชร์ทั่วไปภายในทีม',
      c2: 'ไม่ถูกต้อง: RBAC เพียงอย่างเดียวพิจารณาเฉพาะบทบาทหน้าที่ของพนักงาน ไม่สามารถตรวจจับว่าเครื่องปลายทาง Compliant หรือล็อกอินมาจากประเทศใดในขณะนั้น โดย RBAC เหมาะกับการกำหนดชุดสิทธิ์พื้นฐานตามตำแหน่งงาน',
      c3: 'ไม่ถูกต้อง: MAC แบบป้ายคงที่ในระดับ OS เปรียบเทียบเฉพาะ Label ของไฟล์กับ Clearance ของผู้ใช้ ไม่ได้ประเมิน Device posture จาก NAC/MDM หรือตำแหน่ง IP แบบไดนามิกบนคลาวด์ โดย MAC เหมาะกับระบบความมั่นคงภาครัฐหรือระดับ Kernel อย่าง SELinux',
      c4: 'ถูกต้อง: ABAC ประเมินคุณลักษณะของผู้ใช้ ทรัพยากร การกระทำ และสภาพแวดล้อมจริงแบบเรียลไทม์ตามหลัก Zero Trust'
    },
    misconceptionTh:
      'ผู้เรียนมักเลือก RBAC ทันทีเมื่อเห็นคำว่าตำแหน่งงาน (Job role) ในโจทย์ โดยมองข้ามว่าเมื่อมีเงื่อนไขด้านแท็กข้อมูล สถานะอุปกรณ์ สถานที่ และเวลามาประเมินร่วมกันแบบไดนามิก ต้องเลือก ABAC',
    relatedLessonIds: ['L4-09', 'L1-03'],
    tags: ['abac', 'access-control-models', 'zero-trust', 'context-aware']
  },
  {
    id: 'Q4-054',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'After investigating unauthorized payroll adjustments committed at 01:30 AM from branch terminals, a retail company implements a fixed policy denying all payroll modification requests outside 08:00 to 18:00 Monday through Friday regardless of the user\'s job title. Which access control mechanism is the company enforcing?',
    promptTh:
      'หลังจากสืบสวนพบการแก้ไขข้อมูลเงินเดือนโดยไม่ได้รับอนุญาตในเวลา 01:30 น. จากเครื่องเทอร์มินัลสาขา บริษัทค้าปลีกแห่งหนึ่งจึงตั้งนโยบายตายตัวปฏิเสธคำขอแก้ไขข้อมูลเงินเดือนทั้งหมดนอกช่วงเวลา 08:00 ถึง 18:00 น. วันจันทร์ถึงวันศุกร์โดยไม่คำนึงถึงตำแหน่งงานของผู้ร้องขอ บริษัทกำลังบังคับใช้กลไกควบคุมการเข้าถึงแบบใด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Discretionary access control based on file ownership',
        textTh: 'Discretionary Access Control ตามความเป็นเจ้าของไฟล์'
      },
      {
        id: 'c2',
        textEn: 'Mandatory access control using military clearance labels',
        textTh: 'Mandatory Access Control ที่ใช้ป้ายระดับชั้นความลับทางทหาร'
      },
      {
        id: 'c3',
        textEn: 'Rule-based access control implementing time-of-day restrictions',
        textTh: 'Rule-based Access Control ที่บังคับใช้การจำกัดช่วงเวลา (Time-of-day Restrictions)'
      },
      {
        id: 'c4',
        textEn: 'Password vaulting with ephemeral session certificates',
        textTh: 'Password Vaulting พร้อมใบรับรองเซสชันแบบชั่วคราว'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'Rule-based Access Control ที่บังคับใช้การจำกัดช่วงเวลา (Time-of-day Restrictions) เป็นกลไกที่ตรงกับนโยบายนี้ เนื่องจากการกำหนดเงื่อนไขตายตัวในระบบให้เข้าถึงได้เฉพาะวันจันทร์-ศุกร์ เวลา 08:00-18:00 น. โดยใช้เหมือนกันกับทุกคนไม่ขึ้นกับตำแหน่งเป็นตัวอย่างมาตรฐานของการควบคุมสิทธิ์ตามกฎเงื่อนไข',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: DAC เป็นการให้เจ้าของไฟล์มอบสิทธิ์อ่านเขียนให้ผู้อื่นตามดุลพินิจ ไม่ใช่การตั้งกฎบังคับเวลาการเข้าถึงทั้งระบบ โดย DAC เหมาะกับการควบคุมสิทธิ์เอกสารรายบุคคล',
      c2: 'ไม่ถูกต้อง: MAC ใช้ป้าย Classification และระดับ Clearance ไม่ใช่การจำกัดช่วงเวลาทำการแบบกฎตายตัว โดย MAC เหมาะกับสภาพแวดล้อมข้อมูลลับสูงสุดที่เจ้าของเปลี่ยนสิทธิ์เองไม่ได้',
      c3: 'ถูกต้อง: Rule-based Access Control บังคับใช้กฎเงื่อนไขที่กำหนดล่วงหน้า (เช่น ACL หรือ Time-of-day restrictions) อย่างเป็นมาตรฐานเดียวกันเมื่อตรงตามเงื่อนไขเวลา',
      c4: 'ไม่ถูกต้อง: Password vaulting และ Ephemeral credentials เป็นกลไกของ PAM สำหรับเก็บรหัสผ่านและออกโทเคนอายุสั้นให้บัญชี Admin ไม่ใช่กฎจำกัดเวลาของแอปเงินเดือน โดย PAM เหมาะกับการควบคุมสิทธิ์ผู้ดูแลระบบระดับสูง'
    },
    misconceptionTh:
      'ผู้เรียนมักจำสับสนระหว่าง RBAC (Role-Based — ตามบทบาทงาน) กับ Rule-Based Access Control (ตามกฎเงื่อนไขตายตัว เช่น Time-of-day Restrictions หรือ ACL)',
    relatedLessonIds: ['L4-09'],
    tags: ['rule-based', 'time-of-day', 'access-control-models', 'least-privilege']
  },
  {
    id: 'Q4-055',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'During a penetration test, adversaries tricked cloud administrators into visiting a real-time adversary-in-the-middle phishing proxy that captured their passwords and relayed SMS one-time passcodes, resulting in complete account takeover. Management wants to upgrade administrator MFA to a phishing-resistant possession factor that cryptographically binds authentication to the legitimate login domain. Which MFA implementation BEST achieves this?',
    promptTh:
      'ระหว่างการทดสอบเจาะระบบ ผู้ทดสอบได้ลวงผู้ดูแลระบบคลาวด์ให้เข้าเว็บฟิชชิงแบบ Real-time Adversary-in-the-Middle Proxy ซึ่งดักขโมยทั้งรหัสผ่านและรหัสผ่านครั้งเดียวที่ส่งผ่าน SMS จนสามารถยึดบัญชีได้สมบูรณ์ ฝ่ายบริหารต้องการอัปเกรด MFA ของผู้ดูแลระบบเป็นปัจจัย "สิ่งที่ถือครอง" ที่ต้านทานฟิชชิงได้โดยผูกการยืนยันตัวตนเชิงวิทยาการเข้ารหัสเข้ากับโดเมนล็อกอินจริง การติดตั้ง MFA รูปแบบใดบรรลุเป้าหมายนี้ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Requiring both a corporate passphrase and a personal 6-digit PIN at login',
        textTh: 'การบังคับใช้ทั้ง Passphrase ขององค์กรและรหัส PIN ส่วนตัว 6 หลักขณะล็อกอิน'
      },
      {
        id: 'c2',
        textEn: 'Adding IP geolocation checks while retaining SMS OTP as the possession factor',
        textTh: 'การเพิ่มการตรวจสอบตำแหน่ง IP ทางภูมิศาสตร์โดยยังคงใช้ SMS OTP เป็นปัจจัยสิ่งที่ถือครอง'
      },
      {
        id: 'c3',
        textEn: 'Hardware FIDO2/WebAuthn security keys',
        textTh: 'ฮาร์ดแวร์คีย์ความปลอดภัยมาตรฐาน FIDO2/WebAuthn (Security Keys)'
      },
      {
        id: 'c4',
        textEn: 'Six-digit time-based codes read manually from a soft authenticator app',
        textTh: 'รหัส 6 หลักตามเวลาที่ผู้ใช้อ่านแล้วพิมพ์เองจากแอป Authenticator แบบ Soft Token'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'ฮาร์ดแวร์คีย์ความปลอดภัยมาตรฐาน FIDO2/WebAuthn (Security Keys) เป็นปัจจัย Something you have ที่เหมาะสมที่สุด เพราะใช้การเข้ารหัสแบบอสมมาตรและตรวจสอบ Origin/Domain จริงในการลงนาม Challenge หากผู้ใช้หลงเข้าเว็บฟิชชิง Proxy ที่มีโดเมนปลอม ตัวคีย์จะปฏิเสธการลงนามทันที ทำให้ป้องกันทั้ง Real-time AiTM Proxy Phishing และ SIM Swapping ได้เหนือกว่า OTP แบบพิมพ์ตัวเลข',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Passphrase และรหัส PIN ต่างอยู่ในหมวด Something you know เหมือนกัน จึงไม่ใช่ MFA ที่แท้จริงและไม่สามารถป้องกัน Phishing proxy ได้ โดย PIN เหมาะกับการปลดล็อกอุปกรณ์ท้องถิ่นร่วมกับ TPM หรือ Hardware token',
      c2: 'ไม่ถูกต้อง: แม้ Location (Somewhere you are) ช่วยกรองการล็อกอินจากต่างประเทศ แต่ผู้โจมตีที่รัน AiTM proxy ในประเทศเดียวกันยังคงดัก SMS OTP และเสี่ยง SIM swapping ได้ โดย Geolocation เหมาะเป็นสัญญาณประกอบใน Adaptive MFA',
      c3: 'ถูกต้อง: FIDO2 Security Keys ผูกการลงนามเชิงวิทยาการเข้ารหัสกับโดเมนจริงของบริการ จึงต้านทานทั้ง Phishing proxy และ SIM swapping ได้อย่างแข็งแกร่ง',
      c4: 'ไม่ถูกต้อง: แม้ Soft token (TOTP) จะปลอดภัยกว่า SMS เพราะไม่เสี่ยง SIM swapping แต่รหัสตัวเลข 6 หลักที่ผู้ใช้พิมพ์ลงเว็บยังสามารถถูกเว็บฟิชชิง Proxy ดักนำไปกรอกต่อแบบเรียลไทม์ได้ โดย Soft token เหมาะกับการแทนที่ SMS สำหรับผู้ใช้ทั่วไป'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจผิดว่า OTP แบบพิมพ์รหัสตัวเลขทุกประเภท (SMS หรือ TOTP) ต้านทาน Phishing Proxy ได้เท่ากับ FIDO2 Security Key หรือเข้าใจผิดว่าคำถามกันลืมจัดเป็นอีกหนึ่งปัจจัยของ MFA',
    relatedLessonIds: ['L4-09', 'L4-08', 'L2-07'],
    tags: ['mfa', 'security-keys', 'fido2', 'phishing-resistant']
  },
  {
    id: 'Q4-056',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'exam-ready',
    promptEn:
      'A security assessment reveals that cloud administrators hold permanent 24/7 administrative privileges even during routine email work, and engineers share long-lived static SSH private keys stored on jump servers. The CISO directs the IAM team to eliminate standing privileges and ensure server access secrets automatically expire right after each approved maintenance session. Which TWO PAM capabilities directly satisfy these directives? (Choose two.)',
    promptTh:
      'การประเมินความปลอดภัยพบว่าผู้ดูแลระบบคลาวด์ถือครองสิทธิ์ผู้ดูแลระบบถาวรตลอด 24 ชั่วโมงแม้ขณะทำงานรับส่งอีเมลปกติ และวิศวกรใช้กุญแจส่วนตัว SSH แบบคงที่อายุยาวร่วมกันบน Jump Server ผู้บริหารความปลอดภัย (CISO) สั่งการให้ทีม IAM กำจัดสิทธิ์ถาวรและทำให้ข้อมูลรับรองเข้าถึงเซิร์ฟเวอร์หมดอายุโดยอัตโนมัติทันทีหลังจบเซสชันบำรุงรักษาที่ได้รับอนุมัติ ความสามารถ PAM ใด 2 ข้อที่ตอบสนองคำสั่งเหล่านี้โดยตรง? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Password vaulting alone for the shared root key while keeping permanent 24/7 administrator role assignments',
        textTh: 'การใช้ Password Vaulting เพียงอย่างเดียวสำหรับกุญแจ Root ร่วมโดยยังคงสิทธิ์ผู้ดูแลระบบถาวรตลอด 24 ชั่วโมง'
      },
      {
        id: 'c2',
        textEn: 'Just-in-time (JIT) permissions granting temporary elevation strictly for approved change windows',
        textTh: 'Just-in-Time (JIT) Permissions ที่ยกระดับสิทธิ์ชั่วคราวเฉพาะช่วงเวลาการเปลี่ยนแปลงที่ได้รับอนุมัติ'
      },
      {
        id: 'c3',
        textEn: 'Role-based access control (RBAC) with permanent administrator group memberships and annual attestation',
        textTh: 'Role-Based Access Control (RBAC) ที่ให้สิทธิ์สมาชิกกลุ่มแอดมินถาวรร่วมกับการทำ Attestation รายปี'
      },
      {
        id: 'c4',
        textEn: 'Ephemeral credentials issuing short-lived SSH certificates or session tokens that expire automatically',
        textTh: 'Ephemeral Credentials ที่ออกใบรับรอง SSH หรือโทเคนเซสชันอายุสั้นซึ่งหมดอายุโดยอัตโนมัติ'
      },
      {
        id: 'c5',
        textEn: 'Rule-based time-of-day restrictions while preserving permanent 24/7 administrator role bindings during work hours',
        textTh: 'Rule-based Time-of-day Restrictions โดยยังคงผูกสิทธิ์ผู้ดูแลระบบถาวรไว้ตลอดช่วงเวลาทำงาน'
      }
    ],
    correctChoiceIds: ['c2', 'c4'],
    explanationTh:
      'Just-in-Time (JIT) Permissions และ Ephemeral Credentials เป็น 2 ความสามารถ PAM ที่ตอบสนองคำสั่งเหล่านี้โดยตรง: (1) การขจัดสิทธิ์ Admin ถาวร (Zero standing privileges) ทำได้ด้วย Just-in-Time (JIT) Permissions ที่ยกระดับสิทธิ์ให้เฉพาะช่วงใบงานบำรุงรักษาแล้วลดสิทธิ์กลับทันที และ (2) การแทนที่กุญแจ SSH คงที่อายุยาวด้วยข้อมูลรับรองที่หมดอายุอัตโนมัติหลังจบเซสชันทำได้ด้วย Ephemeral Credentials',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: แม้ Password Vaulting จะช่วยเก็บและหมุนเวียนรหัส Root/Service account ได้ดี แต่การใช้เพียงอย่างเดียวโดยไม่ถอด Standing admin roles ยังปล่อยให้บัญชีแอดมินมีสิทธิ์สูงตลอด 24 ชั่วโมง โดย Vaulting เหมาะกับการปกป้องบัญชี Break-glass และ Service accounts แบบคงที่',
      c2: 'ถูกต้อง: JIT Permissions กำจัด Standing privileges โดยให้บัญชีแอดมินถือสิทธิ์ผู้ใช้ธรรมดาในเวลาปกติและยกระดับเฉพาะตอนได้รับอนุมัติตามใบงาน',
      c3: 'ไม่ถูกต้อง: การเป็นสมาชิกกลุ่มแอดมินถาวรแม้ตรวจทบทวนปีละครั้งยังคงทิ้งสิทธิ์ Admin ตลอดเวลาในระหว่างปี โดย RBAC + Attestation เหมาะกับการจัดการสิทธิ์ผู้ใช้ทั่วไปตามตำแหน่งงาน',
      c4: 'ถูกต้อง: Ephemeral Credentials ออกโทเคนหรือ SSH Certificate อายุสั้นเฉพาะเซสชันที่หมดอายุทันทีหลังใช้งาน ช่วยป้องกันการนำคีย์เก่าที่ตกค้างมาโจมตีซ้ำ',
      c5: 'ไม่ถูกต้อง: การคงสิทธิ์ผู้ดูแลระบบถาวรไว้ตลอดเวลาทำงานยังคงปล่อยให้มัลแวร์บนเครื่อง Admin ใช้สิทธิ์ระดับสูงโจมตีได้ตลอด 8 ชั่วโมง โดย Time-of-day restrictions เหมาะกับการควบคุมเวลาใช้งานระบบธุรกิจทั่วไป'
    },
    misconceptionTh:
      'ผู้เรียนบางคนสับสนระหว่าง Password Vaulting (เก็บรักษาและหมุนเวียนรหัสผ่านคงที่ที่มีอยู่) กับ JIT และ Ephemeral Credentials (ขจัดสิทธิ์ถาวรและออกโทเคน/ใบรับรองอายุสั้นใช้แล้วหมดอายุ)',
    relatedLessonIds: ['L4-09', 'L4-10'],
    tags: ['pam', 'jit', 'ephemeral-credentials', 'least-privilege']
  }
];
