import type { Question } from '../../types';

export const Q_D3_B2: Question[] = [
  {
    id: 'Q3-028',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A regional manufacturing enterprise operates 18 branch plants that rely on latency-sensitive VoIP communications and internal ERP synchronization with headquarters. Each plant already maintains local next-generation firewalls and connects through a mix of leased MPLS circuits, broadband fiber, and cellular LTE backup links. Currently, static router configurations force all traffic over MPLS until complete circuit failure, causing packet loss during brownouts and forcing engineers to log into each branch router via CLI to adjust routing policies. Management wants a centrally orchestrated solution that aggregates all three WAN transports into encrypted overlays, dynamically steers VoIP and ERP flows onto the lowest-jitter link in real time, and provides automatic sub-second link failover. Which technology BEST meets these requirements?',
    promptTh:
      'องค์กรอุตสาหกรรมการผลิตระดับภูมิภาคมีโรงงานสาขา 18 แห่งที่พึ่งพาการสื่อสาร VoIP ซึ่งอ่อนไหวต่อความหน่วงและการซิงโครไนซ์ระบบ ERP ภายในกับสำนักงานใหญ่ แต่ละโรงงานมีไฟร์วอลล์ NGFW ประจำสาขาอยู่แล้วและเชื่อมต่อผ่านสายเช่า MPLS ควบคู่กับอินเทอร์เน็ต Broadband Fiber และลิงก์สำรอง LTE ปัจจุบันการตั้งค่า Routing แบบคงที่บังคับให้ทราฟฟิกทั้งหมดวิ่งผ่าน MPLS จนกว่าสายจะขาดสนิท ส่งผลให้เกิด Packet Loss ในช่วงสัญญาณเสื่อมคุณภาพและวิศวกรต้องล็อกอินเข้า CLI ของเราเตอร์แต่ละสาขาเพื่อปรับนโยบายเอง ฝ่ายบริหารต้องการโซลูชันที่ควบคุมจากศูนย์กลางเพื่อรวมท่อส่ง WAN ทั้งสามประเภทเข้าด้วยกันในอุโมงค์เข้ารหัส เลือกเส้นทางให้ VoIP และ ERP ตามคุณภาพ Jitter แบบเรียลไทม์ และทำ Link Failover อัตโนมัติในระดับต่ำกว่าวินาที เทคโนโลยีใดตอบโจทย์ข้างต้นได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Site-to-site IPsec VPN in full-tunnel mode using static default routes',
        textTh: 'Site-to-site IPsec VPN ในโหมด Full-tunnel โดยใช้เส้นทางแบบคงที่ (Static Default Routes)'
      },
      {
        id: 'c2',
        textEn: 'Layer 4 stateful packet-filtering firewall configured with manual policy-based routing',
        textTh: 'Layer 4 Stateful Packet-Filtering Firewall ที่ตั้งค่า Policy-based Routing ด้วยตนเอง'
      },
      {
        id: 'c3',
        textEn: 'Software-Defined WAN (SD-WAN) with centralized orchestration and dynamic application-aware path selection',
        textTh: 'Software-Defined WAN (SD-WAN) ที่ควบคุมจากศูนย์กลางและเลือกเส้นทางตามประสิทธิภาพแอปพลิเคชันแบบไดนามิก'
      },
      {
        id: 'c4',
        textEn: 'Traditional hub-and-spoke MPLS with active-passive BGP failover configured via per-branch CLI',
        textTh: 'โครงข่าย MPLS แบบ Hub-and-spoke ดั้งเดิมพร้อม Active-passive BGP Failover ที่ตั้งค่าผ่าน CLI แยกทีละสาขา'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'Software-Defined WAN (SD-WAN) แยก Control Plane ออกมาบริหารจากศูนย์กลาง ทำให้องค์กรสามารถรวมลิงก์หลายประเภท (MPLS, Broadband Fiber และ LTE) เข้าเป็นอุโมงค์เข้ารหัสเดียวกัน เลือกเส้นทางแบบไดนามิกตามคุณภาพลิงก์และประเภทแอปพลิเคชัน (Application-aware Path Selection) เพื่อส่งทราฟฟิก VoIP และ ERP ผ่านสายที่ Jitter ต่ำที่สุด รวมถึงสลับเส้นทางอัตโนมัติในระดับต่ำกว่าวินาทีเมื่อสายหลักเสื่อมคุณภาพโดยไม่ต้องเข้า CLI แก้ค่าทีละสาขา',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Site-to-site IPsec VPN แบบ Static Default Routes สร้างอุโมงค์เข้ารหัสได้แต่ไม่รองรับการรวมแบนด์วิดท์หลายสาย การสลับเส้นทางตามค่า Jitter แบบเรียลไทม์ หรือการบริหารนโยบายแบบรวมศูนย์ข้าม 18 สาขา จึงเหมาะกับการเชื่อมเครือข่ายจุดต่อจุดแบบคงที่มากกว่า',
      c2: 'ไม่ถูกต้อง: Layer 4 Stateful Firewall ดูเพียง IP, พอร์ต และสถานะเซสชัน ไม่ได้ตรวจสอบคุณภาพ WAN (Latency/Jitter/Packet Loss) แบบเรียลไทม์เพื่อย้ายทราฟฟิก VoIP/ERP อัตโนมัติระหว่างสาย MPLS, Fiber และ LTE จึงเหมาะกับการกรองการเชื่อมต่อระดับเครือข่ายตามกฎตายตัว',
      c3: 'ถูกต้อง: SD-WAN รวมสาย MPLS, Broadband Fiber และ LTE เป็น Overlay เข้ารหัสที่จัดการจากศูนย์กลาง ปรับเส้นทางตาม SLA ของแต่ละแอปพลิเคชันแบบเรียลไทม์ และทำ Link Failover ได้รวดเร็วระดับต่ำกว่าวินาที',
      c4: 'ไม่ถูกต้อง: Active-passive BGP Failover ที่ตั้งค่าผ่าน CLI แยกทีละเราเตอร์ยังต้องอาศัยการแก้ค่าแบบ Manual ในแต่ละสาขา ปล่อยให้สายสำรองว่างงานในช่วงปกติ และตอบสนองต่อภาวะสายเสื่อมคุณภาพ (Brownout) ช้ากว่าการวัดผลระดับแอปพลิเคชันของ SD-WAN จึงเหมาะกับระบบ Routing พื้นฐานที่ไม่ต้องการ Dynamic Application Steering'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนระหว่าง SD-WAN กับ Site-to-site IPsec VPN แบบเดิมหรือ SASE โดย SD-WAN เน้นการควบคุมการเชื่อมต่อ WAN แบบรวมศูนย์ การรวมหลายลิงก์ (MPLS/Broadband/LTE) และการจัดเส้นทางตามคุณภาพลิงก์ ส่วน SASE คือการต่อยอดนำ SD-WAN ไปผสานกับบริการ Cloud Security (ZTNA, SWG, CASB, FWaaS)',
    relatedLessonIds: ['L3-04'],
    tags: ['sd-wan', 'path-selection', 'link-failover', 'wan-orchestration']
  },
  {
    id: 'Q3-029',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A specialty beverage producer develops a unique botanical flavoring formula that generates 65% of its revenue. Executives deliberately choose not to file a patent so competitors cannot inspect the ingredient ratios after patent protection expires, storing the recipe inside an isolated encrypted vault accessible strictly to two master chemists. Which data type and classification BEST describe this formula?',
    promptTh:
      'ผู้ผลิตเครื่องดื่มเฉพาะทางคิดค้นสูตรผสมสารสกัดพฤกษศาสตร์ที่เป็นเอกลักษณ์ซึ่งสร้างรายได้ 65% ของบริษัท ผู้บริหารจงใจไม่ยื่นจดสิทธิบัตรเพื่อไม่ให้คู่แข่งเห็นสัดส่วนผสมเมื่อสิทธิบัตรหมดอายุ โดยจัดเก็บสูตรไว้ในคลังนิรภัยเข้ารหัสแบบแยกส่วนที่เข้าถึงได้เฉพาะนักเคมีอาวุโส 2 คนเท่านั้น ประเภทข้อมูลและระดับชั้นความลับใดอธิบายสูตรดังกล่าวได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Legal information / Public',
        textTh: 'Legal information / ระดับ Public'
      },
      {
        id: 'c2',
        textEn: 'Trade secret / Restricted',
        textTh: 'Trade secret / ระดับ Restricted'
      },
      {
        id: 'c3',
        textEn: 'Intellectual property (Patent) / Confidential',
        textTh: 'Intellectual property (Patent) / ระดับ Confidential'
      },
      {
        id: 'c4',
        textEn: 'Regulated data / Sensitive',
        textTh: 'Regulated data / ระดับ Sensitive'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'สูตรผสมที่ไม่เปิดเผยต่อสาธารณะและไม่ยื่นจดสิทธิบัตรเพื่อรักษาความได้เปรียบทางธุรกิจตลอดไปจัดเป็น **Trade secret** และเนื่องจากสร้างรายได้หลักถึง 65% พร้อมจำกัดสิทธิ์เฉพาะผู้ที่ต้องรู้เพียง 2 คน (Need-to-know) จึงต้องจัดอยู่ในชั้นความลับระดับ **Restricted** ซึ่งเป็นระดับเข้มงวดที่สุด',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: สูตรผสมนี้ไม่ใช่เอกสารข้อบังคับทางกฎหมายที่เปิดเผยทั่วไป และระดับ Public ใช้กับข้อมูลที่เผยแพร่ภายนอกได้โดยไม่เสียหาย เช่น โบรชัวร์ ส่วนคู่ Legal information / Public จะเหมาะกับประกาศข้อกำหนดการใช้งานหรือเอกสารกฎหมายที่ตั้งใจเผยแพร่สาธารณะ',
      c2: 'ถูกต้อง: การปิดเป็นความลับโดยไม่จดทะเบียนเพื่อให้คุ้มครองต่อเนื่องตราบที่ความลับไม่รั่วคือ Trade secret และผลกระทบวิกฤตต่อรายได้ประกอบกับการคุมสิทธิ์รายบุคคลตรงกับระดับ Restricted',
      c3: 'ไม่ถูกต้อง: บริษัทเลือกไม่จด Patent ซึ่งสิทธิบัตรต้องเปิดเผยรายละเอียดการประดิษฐ์และมีวันหมดอายุ ส่วนระดับ Confidential เหมาะกับข้อมูลภายในที่แชร์ตามบทบาทแผนก เช่น แผนงบประมาณ ไม่ใช่ความลับแกนหลักที่จำกัดเพียง 2 คน คู่ Patent / Confidential จึงเหมาะกับเทคโนโลยีที่จดสิทธิบัตรแล้วและใช้เอกสารภายในฝ่ายวิศวกรรม',
      c4: 'ไม่ถูกต้อง: สูตรเครื่องดื่มไม่ได้อยู่ภายใต้ข้อบังคับข้อมูลส่วนบุคคลหรือสุขภาพแบบ Regulated data และระดับ Sensitive เหมาะกับข้อมูลที่ต้องระวังเรื่องความเป็นส่วนตัวทั่วไปมากกว่าความลับเชิงยุทธศาสตร์สูงสุด คู่ Regulated / Sensitive จึงเหมาะกับข้อมูลส่วนบุคคลพื้นฐานที่อยู่ใต้กฎหมายคุ้มครองข้อมูล'
    },
    misconceptionTh:
      'ผู้เรียนมักจำสับสนระหว่าง Patent กับ Trade secret โดยคิดว่าทรัพย์สินทางปัญญาทุกชนิดต้องจดสิทธิบัตร และมักใช้ป้าย Confidential แทน Restricted สำหรับความลับที่จำกัดเฉพาะตัวบุคคล',
    relatedLessonIds: ['L3-05'],
    tags: ['data-types', 'trade-secret', 'data-classification', 'restricted']
  },
  {
    id: 'Q3-030',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'During a security architecture review of a connected hospital infusion pump platform, an engineer discovers that compressed binary telemetry dumps and serialized crash logs generated by the devices contain unredacted patient identifiers and active API session tokens. Standard keyword-matching email filters did not flag these attachments. How should the security architect treat these files?',
    promptTh:
      'ระหว่างการทบทวนสถาปัตยกรรมความปลอดภัยของแพลตฟอร์มเครื่องให้สารน้ำอัจฉริยะในโรงพยาบาล วิศวกรพบว่าไฟล์บันทึก Telemetry แบบไบนารีที่ถูกบีบอัดและไฟล์ Crash log แบบ Serialized ที่สร้างจากอุปกรณ์มีข้อมูลระบุตัวตนผู้ป่วยและ Session token ที่ยังไม่ถูกตัดทอนฝังอยู่ภายใน โดยตัวกรองอีเมลแบบตรวจจับคำหลักทั่วไปไม่พบความผิดปกติ สถาปนิกความปลอดภัยควรจัดการไฟล์เหล่านี้อย่างไร?',
    choices: [
      {
        id: 'c1',
        textEn: 'Classify them as Public because machine-generated binary files cannot be read directly by typical end users.',
        textTh: 'จัดชั้นเป็น Public เนื่องจากไฟล์ไบนารีที่สร้างโดยเครื่องจักรไม่สามารถอ่านเข้าใจได้โดยตรงจากผู้ใช้ทั่วไป'
      },
      {
        id: 'c2',
        textEn: 'Exclude them from healthcare privacy scope because regulatory mandates apply only to human-readable clinical documents.',
        textTh: 'ยกเว้นออกจากขอบเขตความเป็นส่วนตัวทางการแพทย์เนื่องจากข้อบังคับครอบคลุมเฉพาะเอกสารทางการแพทย์ที่มนุษย์อ่านออก'
      },
      {
        id: 'c3',
        textEn: 'Treat binary serialization as sufficient cryptographic protection while the files are transmitted.',
        textTh: 'ถือว่าการแปลงข้อมูลแบบ Binary serialization เป็นการป้องกันเชิงวิทยาการเข้ารหัสที่เพียงพอระหว่างการส่งผ่าน'
      },
      {
        id: 'c4',
        textEn: 'Classify them based on the sensitivity of the embedded data and apply parsing, sanitization, or encryption controls for non-human-readable data.',
        textTh: 'จัดระดับชั้นความลับตามความอ่อนไหวของข้อมูลที่ฝังอยู่และใช้การแยกวิเคราะห์ ล้างข้อมูล หรือเข้ารหัสสำหรับ Non-human-readable data'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'ตามหลักการปกป้องข้อมูล **Non-human-readable data** เช่น Binary dumps หรือ Serialized logs ยังคงจัดเป็นข้อมูลอ่อนไหวหรือ Regulated data (PHI) หากมีข้อมูลระบุตัวตนผู้ป่วยและโทเคนฝังอยู่ภายใน จึงต้องจัดระดับชั้นความลับตามความอ่อนไหวของข้อมูลที่ฝังอยู่และประยุกต์ใช้การแยกวิเคราะห์ (Parsing), การล้างข้อมูล (Sanitization) หรือการเข้ารหัสอย่างเหมาะสม',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การที่คนอ่านไม่ออกทันทีไม่ได้ลดความลับของข้อมูล ผู้โจมตีสามารถถอดรหัสโครงสร้างไบนารีได้ง่าย ระดับ Public ใช้ได้เฉพาะข้อมูลที่ตั้งใจเผยแพร่สาธารณะโดยไร้ข้อมูลลับปะปน',
      c2: 'ไม่ถูกต้อง: กฎหมายและมาตรฐานข้อมูลสุขภาพครอบคลุมข้อมูลผู้ป่วยในทุกรูปแบบไม่ว่าจะเป็นไฟล์ข้อความหรือไบนารี ข้อยกเว้นจากขอบเขตข้อบังคับจะใช้ได้ก็ต่อเมื่อข้อมูลผ่านการ De-identification อย่างสมบูรณ์แล้วเท่านั้น',
      c3: 'ไม่ถูกต้อง: การทำ Binary serialization หรือการบีบอัดเป็นเพียงรูปแบบจัดโครงสร้างข้อมูล ไม่ใช่การเข้ารหัส (Encryption) ซึ่งการทำ Serialization เหมาะกับการส่งข้อมูลให้เครื่องอ่านเร็วขึ้นเมื่อวิ่งอยู่ภายในช่องทางเข้ารหัสอย่าง TLS หรือ IPsec แล้วเท่านั้น',
      c4: 'ถูกต้อง: ข้อมูลที่เครื่องจักรอ่าน (Non-human-readable) ต้องได้รับการติดป้ายระดับชั้นความลับตามข้อมูลจริงที่บรรจุภายในและควบคุมด้วยการเข้ารหัสหรือ Sanitization ก่อนส่งต่อ'
    },
    misconceptionTh:
      'ผู้เรียนมักมองข้ามไฟล์ Crash dump, Telemetry หรือ PCAP โดยคิดว่าข้อมูลที่ไม่ใช่เอกสาร Word/PDF ไม่มีข้อมูลส่วนบุคคลหรือข้อมูลลับซ่อนอยู่',
    relatedLessonIds: ['L3-05', 'L5-05'],
    tags: ['non-human-readable', 'regulated-data', 'data-classification']
  },
  {
    id: 'Q3-031',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.3'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'A financial software provider is applying its four-tier data classification policy (Public, Sensitive, Confidential, Restricted). Which TWO assets MUST be classified as Restricted with strict need-to-know access controls and MFA? (Choose two.)',
    promptTh:
      'ผู้ให้บริการซอฟต์แวร์ทางการเงินกำลังปรับใช้นโยบายจำแนกชั้นความลับข้อมูล 4 ระดับ (Public, Sensitive, Confidential, Restricted) สินทรัพย์ข้อมูลใด 2 ข้อต่อไปนี้ที่ต้องจัดเป็นระดับ Restricted พร้อมการควบคุมสิทธิ์แบบ Need-to-know และ MFA อย่างเคร่งครัด? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Unannounced merger and acquisition valuation models accessible only to the executive steering committee',
        textTh: 'แบบจำลองประเมินมูลค่าการควบรวมกิจการที่ยังไม่ประกาศ ซึ่งเข้าถึงได้เฉพาะคณะกรรมการบริหารระดับสูง'
      },
      {
        id: 'c2',
        textEn: 'Published product user guides and API reference documentation hosted on the external support portal',
        textTh: 'คู่มือการใช้งานผลิตภัณฑ์และเอกสารอ้างอิง API ที่เผยแพร่บนพอร์ทัลสนับสนุนภายนอก'
      },
      {
        id: 'c3',
        textEn: 'Regional department budget summaries shared internally across finance and operations managers via role-based access',
        textTh: 'สรุปงบประมาณแผนกระดับภูมิภาคที่แชร์ภายในระหว่างผู้จัดการฝ่ายการเงินและปฏิบัติการผ่านสิทธิ์ตามบทบาท'
      },
      {
        id: 'c4',
        textEn: 'The organization’s offline Root CA private key material and bulk regulated payment cardholder databases',
        textTh: 'กุญแจส่วนตัวของ Root CA แบบออฟไลน์และฐานข้อมูลผู้ถือบัตรชำระเงินจำนวนมากภายใต้ข้อบังคับ'
      },
      {
        id: 'c5',
        textEn: 'Internal staff directory extensions and non-public office floor plans intended for basic employee discretion',
        textTh: 'รายชื่อเบอร์ภายในองค์กรและผังชั้นสำนักงานภายในที่จำกัดไว้เพื่อความระมัดระวังระดับพื้นฐานของพนักงาน'
      }
    ],
    correctChoiceIds: ['c1', 'c4'],
    explanationTh:
      'ชั้นความลับระดับ **Restricted** ใช้กับข้อมูลที่มีความอ่อนไหวสูงสุดซึ่งหากรั่วไหลจะสร้างความเสียหายระดับวิกฤตหรือผิดกฎหมายอย่างรุนแรง จึงต้องจำกัดสิทธิ์แบบ Need-to-know เฉพาะบุคคลและบังคับ MFA ได้แก่ **แบบจำลองประเมินมูลค่าการควบรวมกิจการที่ยังไม่ประกาศ (Unannounced M&A)** และ **กุญแจส่วนตัวของ Root CA แบบออฟไลน์รวมถึงฐานข้อมูลผู้ถือบัตรชำระเงินจำนวนมาก** ส่วนคู่มือบนพอร์ทัลสาธารณะคือ Public, รายชื่อเบอร์ภายใน/ผังสำนักงานคือ Sensitive และงบประมาณแผนกที่แชร์ตามบทบาท RBAC คือ Confidential',
    choiceRationales: {
      c1: 'ถูกต้อง: ข้อมูลการควบรวมกิจการที่ยังไม่เปิดเผยมีผลกระทบระดับวิกฤตต่อราคาหุ้นและกลยุทธ์องค์กร จึงต้องจัดเป็น Restricted และจำกัดเฉพาะคณะกรรมการที่เกี่ยวข้อง',
      c2: 'ไม่ถูกต้อง: คู่มือและเอกสารบนพอร์ทัลสาธารณะไม่มีความเสี่ยงด้านความลับ จึงเหมาะกับระดับ Public ซึ่งเน้นการรักษา Integrity และ Availability',
      c3: 'ไม่ถูกต้อง: สรุปงบประมาณที่แชร์ใช้ภายในระหว่างผู้จัดการหลายฝ่ายตามบทบาทหน้าที่ (RBAC) เหมาะกับระดับ Confidential ไม่ใช่ระดับ Restricted ที่ต้องล็อกรายบุคคลแบบวิกฤต',
      c4: 'ถูกต้อง: กุญแจส่วนตัวของ Root CA และฐานข้อมูล Regulated cardholder จำนวนมากหากรั่วไหลจะทำลายความน่าเชื่อถือทั้ง PKI และก่อให้เกิดค่าปรับมหาศาล จึงเป็น Restricted ชัดเจน',
      c5: 'ไม่ถูกต้อง: เบอร์ภายในและผังสำนักงานที่ไม่ใช่ความลับเชิงยุทธศาสตร์หรือความเสี่ยงวิกฤตเหมาะกับระดับ Sensitive เพื่อระมัดระวังไม่ให้หลุดไปข้างนอกโดยไม่จำเป็น'
    },
    misconceptionTh:
      'ผู้เรียนมักจำสลับระหว่าง Confidential (ข้อมูลธุรกิจภายในที่เข้าถึงได้ตามบทบาท) กับ Restricted (ความลับระดับวิกฤตที่ล็อกสิทธิ์เฉพาะรายบุคคลตาม Need-to-know)',
    relatedLessonIds: ['L3-05', 'L4-03', 'L5-01'],
    tags: ['data-classification', 'restricted', 'confidential', 'sensitive', 'public']
  },
  {
    id: 'Q3-032',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.3'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'foundation',
    promptEn:
      'Threat actors breach an engineering firm’s unsegmented file repository and exfiltrate unencrypted CAD schematics for an unreleased electric motor alongside tax records containing employee national ID numbers and bank routing details. Within six months, an overseas competitor releases a nearly identical motor design, and multiple employees discover fraudulent loan accounts opened in their names. Which TWO consequences of data loss are MOST directly demonstrated by these post-breach outcomes? (Choose two.)',
    promptTh:
      'ผู้โจมตีเจาะระบบคลังไฟล์ที่ไม่ได้แบ่งโซนของบริษัทวิศวกรรมแห่งหนึ่งและขโมยไฟล์แบบแปลน CAD ของมอเตอร์ไฟฟ้าที่ยังไม่เปิดตัว รวมถึงเอกสารภาษีที่มีเลขประจำตัวประชาชนและข้อมูลบัญชีธนาคารของพนักงาน ภายในหกเดือนต่อมา คู่แข่งในต่างประเทศเปิดตัวมอเตอร์ที่มีการออกแบบแทบเหมือนกัน และพนักงานหลายคนพบว่ามีการเปิดบัญชีสินเชื่อปลอมในชื่อของตนเอง ผลลัพธ์หลังเหตุการณ์รั่วไหลในสถานการณ์นี้แสดงถึงผลกระทบใด 2 ข้อโดยตรงที่สุด? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Regulatory fines',
        textTh: 'ค่าปรับตามข้อบังคับทางกฎหมาย (Regulatory fines)'
      },
      {
        id: 'c2',
        textEn: 'Intellectual property (IP) theft',
        textTh: 'การโจรกรรมทรัพย์สินทางปัญญา (IP theft)'
      },
      {
        id: 'c3',
        textEn: 'Identity theft',
        textTh: 'การโจรกรรมอัตลักษณ์ (Identity theft)'
      },
      {
        id: 'c4',
        textEn: 'Reputational damage',
        textTh: 'ความเสียหายต่อชื่อเสียงองค์กร (Reputational damage)'
      }
    ],
    correctChoiceIds: ['c2', 'c3'],
    explanationTh:
      'โจทย์ระบุผลลัพธ์ที่เกิดขึ้นจริงหลังเหตุการณ์อย่างชัดเจนสองประการ คือ คู่แข่งนำแบบแปลน CAD ไปผลิตสินค้าแข่งซึ่งสะท้อน **Intellectual property (IP) theft** โดยตรง และคนร้ายนำเลขประจำตัวประชาชนของพนักงานไปเปิดบัญชีสินเชื่อปลอมซึ่งสะท้อน **Identity theft** โดยตรง ส่วนผลกระทบด้าน Regulatory fines และ Reputational damage ยังไม่ได้ถูกระบุให้เกิดขึ้นในข้อเท็จจริงของโจทย์',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: แม้การรั่วไหลของข้อมูลพนักงานอาจนำไปสู่การสอบสวนได้ แต่ในโจทย์นี้ยังไม่ปรากฏคำสั่งลงโทษปรับจากหน่วยงานกำกับดูแล Regulatory fines จะตรงกับกรณีที่หน่วยงานรัฐหรือมาตรฐานอุตสาหกรรมสั่งปรับเป็นตัวเงินจากการไม่คุ้มครอง Regulated data',
      c2: 'ถูกต้อง: การที่แบบแปลน CAD ของผลิตภัณฑ์ใหม่ถูกขโมยและคู่แข่งนำไปผลิตตัดหน้าเป็นผลกระทบด้าน IP theft โดยตรง',
      c3: 'ถูกต้อง: การที่ข้อมูลประจำตัวและบัญชีของพนักงานถูกนำไปสวมรอยขอสินเชื่อโดยไม่ได้รับอนุญาตคือ Identity theft โดยตรง',
      c4: 'ไม่ถูกต้อง: ในโจทย์ไม่ได้ระบุถึงการสูญเสียลูกค้า การยกเลิกสัญญา หรือผลกระทบต่อแบรนด์ต่อสาธารณชน Reputational damage จะตรงกับกรณีที่ข่าวรั่วไหลทำลายความเชื่อมั่นลูกค้าและมูลค่าทางตลาดขององค์กร'
    },
    misconceptionTh:
      'ผู้เรียนมักตอบค่าปรับหรือชื่อเสียงจากความเคยชินเมื่อเห็นคำว่าข้อมูลรั่วไหล โดยไม่ได้พิจารณาหลักฐานผลลัพธ์เฉพาะเจาะจงที่โจทย์กำหนดไว้',
    relatedLessonIds: ['L3-05'],
    tags: ['data-loss-consequences', 'ip-theft', 'identity-theft']
  },
  {
    id: 'Q3-033',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'A payment processor encrypts all customer cardholder databases on storage arrays using AES-256 and enforces TLS 1.3 for every API call between microservices. However, an assessment reveals that malware with memory-read privileges on an application server can extract plaintext card numbers directly from RAM during transaction calculation. Which control BEST protects this exposed data state?',
    promptTh:
      'ผู้ประมวลผลการชำระเงินรายหนึ่งเข้ารหัสฐานข้อมูลผู้ถือบัตรทั้งหมดบนอุปกรณ์จัดเก็บด้วย AES-256 และบังคับใช้ TLS 1.3 สำหรับทุกการเรียก API ระหว่าง Microservices อย่างไรก็ตาม การประเมินความปลอดภัยพบว่ามัลแวร์ที่มีสิทธิ์อ่านหน่วยความจำบนเซิร์ฟเวอร์แอปพลิเคชันสามารถดึงหมายเลขบัตรแบบ Plaintext ออกจาก RAM ขณะกำลังคำนวณธุรกรรมได้โดยตรง มาตรการใดป้องกันสถานะข้อมูลที่กำลังเปิดช่องโหว่นี้ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Confidential computing with hardware-based secure enclaves to protect data in use',
        textTh: 'Confidential computing ร่วมกับ Secure enclave ระดับฮาร์ดแวร์เพื่อปกป้อง Data in use'
      },
      {
        id: 'c2',
        textEn: 'Full-disk encryption (FDE) with TPM-sealed keys on all database storage volumes',
        textTh: 'Full-disk encryption (FDE) ที่ผูกคีย์กับ TPM บนโวลุ่มจัดเก็บฐานข้อมูลทั้งหมด'
      },
      {
        id: 'c3',
        textEn: 'Mutual TLS (mTLS) authentication between the application tier and database tier',
        textTh: 'การยืนยันตัวตนด้วย Mutual TLS (mTLS) ระหว่างชั้นแอปพลิเคชันและชั้นฐานข้อมูล'
      },
      {
        id: 'c4',
        textEn: 'SHA-256 hashing of each transaction payload prior to API transmission',
        textTh: 'การทำ SHA-256 Hashing กับข้อมูลธุรกรรมแต่ละรายการก่อนส่งผ่าน API'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'ข้อมูลที่ถูกถอดรหัสเข้ามาคำนวณใน RAM อยู่ในสถานะ **Data in use** ซึ่งการเข้ารหัสบนดิสก์ (Data at rest) และบนเครือข่าย (Data in transit) ไม่สามารถป้องกันได้ **Confidential computing ร่วมกับ Secure enclave ระดับฮาร์ดแวร์** จะเข้ารหัสและแยกพื้นที่หน่วยความจำในระดับ CPU ทำให้แม้ซอฟต์แวร์หรือมัลแวร์บนโฮสต์เดียวกันก็ไม่สามารถอ่านข้อมูล Plaintext ใน RAM ของ Enclave ได้',
    choiceRationales: {
      c1: 'ถูกต้อง: Confidential computing / Secure enclave ออกแบบมาโดยเฉพาะเพื่อคุ้มครอง Data in use ในหน่วยความจำ RAM และ CPU จากการทำ Memory scraping',
      c2: 'ไม่ถูกต้อง: Full-disk encryption (FDE) ปกป้องเฉพาะ Data at rest ขณะเก็บนิ่งบนดิสก์ ไม่สามารถป้องกันข้อมูลที่ถูกโหลดและถอดรหัสขึ้นไปอยู่ใน RAM แล้ว จึงเหมาะกับการป้องกันกรณีฮาร์ดดิสก์หรือเครื่องถูกขโมย',
      c3: 'ไม่ถูกต้อง: mTLS ปกป้องเฉพาะ Data in transit ขณะวิ่งผ่านเครือข่ายและยืนยันตัวตนระหว่างบริการ แต่เมื่อข้อมูลเข้าสู่ RAM ของเซิร์ฟเวอร์แล้ว mTLS ไม่ได้คุ้มครองหน่วยความจำ จึงเหมาะเมื่อโจทย์เน้นป้องกันการดักฟังหรือปลอมแปลงตัวตนระหว่างสื่อสารข้ามเครือข่าย',
      c4: 'ไม่ถูกต้อง: SHA-256 Hashing ใช้ตรวจสอบ Integrity แบบทางเดียว ไม่ได้ซ่อนข้อมูลความลับใน RAM และไม่สามารถนำไปใช้คำนวณตัวเลขบัตรที่ต้องส่งต่อไปตัดเงินได้ จึงเหมาะกับการตรวจว่าข้อมูลไม่ถูกแก้ไขหรือเก็บรหัสผ่าน'
    },
    misconceptionTh:
      'ผู้เรียนจำนวนมากเข้าใจผิดว่าหากเปิด Full-disk encryption และ TLS แล้ว ข้อมูลจะปลอดภัยตลอดเวลา โดยลืมว่าข้อมูลใน RAM (Data in use) มักอยู่ในรูป Plaintext',
    relatedLessonIds: ['L3-05', 'L1-06'],
    tags: ['data-states', 'data-in-use', 'confidential-computing', 'secure-enclave']
  },
  {
    id: 'Q3-034',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A cloud architect needs to protect confidential legal contracts both while stored inside cloud object buckets and while transmitted between internal microservices over a shared virtual network. Which combination of controls addresses BOTH data at rest and data in transit?',
    promptTh:
      'สถาปนิกคลาวด์ต้องการปกป้องสัญญาทางกฎหมายระดับลับทั้งในขณะที่จัดเก็บอยู่ใน Object bucket บนคลาวด์และในขณะที่ส่งผ่านระหว่าง Microservices ภายในบนเครือข่ายเสมือนที่ใช้ร่วมกัน มาตรการคู่ใดที่ครอบคลุมทั้ง Data at rest และ Data in transit?',
    choices: [
      {
        id: 'c1',
        textEn: 'Dynamic data masking on the user portal and hardware RAID mirroring',
        textTh: 'Dynamic data masking บนหน้าเว็บพอร์ทัลและ Hardware RAID mirroring'
      },
      {
        id: 'c2',
        textEn: 'Code obfuscation in the client app and daily incremental snapshots',
        textTh: 'Code obfuscation ในแอปพลิเคชันลูกข่ายและ Snapshot แบบ Incremental รายวัน'
      },
      {
        id: 'c3',
        textEn: 'Server-side AES-256 encryption with KMS and mutual TLS (mTLS) on service links',
        textTh: 'การเข้ารหัสฝั่งเซิร์ฟเวอร์ด้วย AES-256 ร่วมกับ KMS และ Mutual TLS (mTLS) บนลิงก์ระหว่างบริการ'
      },
      {
        id: 'c4',
        textEn: 'One-way SHA-512 hashing of the files and IP allow-listing on the public gateway',
        textTh: 'One-way SHA-512 hashing ของไฟล์และ IP allow-listing บนเกตเวย์สาธารณะ'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'การปกป้องทั้งสองสถานะพร้อมกันต้องใช้ **Server-side AES-256 encryption ร่วมกับ KMS** เพื่อเข้ารหัสไฟล์สัญญาขณะจัดเก็บนิ่งใน Object bucket (**Data at rest**) ควบคู่กับ **Mutual TLS (mTLS)** เพื่อเข้ารหัสช่องทางสื่อสารและยืนยันตัวตนทั้งสองฝั่งระหว่าง Microservices (**Data in transit**)',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Dynamic data masking และ RAID ไม่ได้เข้ารหัสข้อมูลทั้งบนดิสก์และบนเครือข่าย โดย DDM เหมาะกับการพรางข้อมูลบนหน้าจอแสดงผลตามสิทธิ์ และ RAID mirroring เหมาะกับการป้องกันฮาร์ดดิสก์เสียเพื่อรักษา Availability',
      c2: 'ไม่ถูกต้อง: Code obfuscation และ Snapshot ไม่ใช่กลไกเข้ารหัสปกป้องความลับทั้ง At rest และ In transit โดย Code obfuscation เหมาะกับการชะลอการทำ Reverse engineering โค้ด และ Snapshot เหมาะกับการย้อนสถานะระบบชั่วคราวก่อนปรับปรุงระบบ',
      c3: 'ถูกต้อง: AES-256 ร่วมกับ KMS ป้องกัน Data at rest ใน Object storage และ mTLS ป้องกัน Data in transit ระหว่าง Microservices',
      c4: 'ไม่ถูกต้อง: SHA-512 และ IP allow-list ไม่ได้เข้ารหัสความลับของสัญญาขณะเก็บและส่งผ่าน โดย SHA-512 เหมาะกับการตรวจ Integrity ของไฟล์ และ IP allow-listing เหมาะกับการจำกัดต้นทางที่เชื่อมเข้าเกตเวย์'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนสับสนระหว่างกลไก Availability (เช่น RAID/Snapshot) หรือกลไก Integrity (เช่น Hashing) กับการเข้ารหัสเพื่อปกป้อง Confidentiality ทั้ง At rest และ In transit',
    relatedLessonIds: ['L3-05', 'L3-06', 'L1-05'],
    tags: ['data-at-rest', 'data-in-transit', 'encryption', 'mtls']
  },
  {
    id: 'Q3-035',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A European healthcare startup hosts its primary clinical database in Frankfurt to comply with strict national statutes requiring citizen medical records to remain exclusively under European Union legal authority. During a compliance audit, engineers discover that automated backup snapshots are replicating nightly to a cloud bucket in North America. Which principle defines the requirement that stored data is subject to the laws and jurisdiction of the territory where it resides?',
    promptTh:
      'สตาร์ตอัปด้านสุขภาพในยุโรปตั้งฐานข้อมูลเวชระเบียนหลักไว้ที่เมืองแฟรงก์เฟิร์ตเพื่อให้สอดคล้องกับกฎหมายที่กำหนดให้ข้อมูลการแพทย์ของพลเมืองอยู่ภายใต้ขอบเขตอำนาจทางกฎหมายของสหภาพยุโรปเท่านั้น ระหว่างการตรวจสอบความสอดคล้อง วิศวกรพบว่า Backup snapshot อัตโนมัติกำลังทำสำเนาทุกคืนไปยัง Cloud bucket ในทวีปอเมริกาเหนือ หลักการใดที่นิยามข้อกำหนดว่าข้อมูลที่จัดเก็บอยู่ภายใต้กฎหมายและเขตอำนาจศาลของดินแดนที่ข้อมูลนั้นตั้งอยู่?',
    choices: [
      {
        id: 'c1',
        textEn: 'Geolocation',
        textTh: 'Geolocation'
      },
      {
        id: 'c2',
        textEn: 'Data sovereignty',
        textTh: 'Data sovereignty'
      },
      {
        id: 'c3',
        textEn: 'Platform diversity',
        textTh: 'Platform diversity'
      },
      {
        id: 'c4',
        textEn: 'Data obfuscation',
        textTh: 'Data obfuscation'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      '**Data sovereignty** คือนิยามของหลักการที่ข้อมูลดิจิทัลอยู่ภายใต้กฎหมาย ข้อบังคับ และเขตอำนาจศาลของประเทศหรือดินแดนที่ข้อมูลนั้นถูกจัดเก็บหรือประมวลผล ส่วน Geolocation เป็นเพียงพิกัดสถานที่ตั้งทางกายภาพที่ใช้เป็นเครื่องมือบังคับให้สอดคล้องกับหลักการทางกฎหมายดังกล่าว',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Geolocation หมายถึงตำแหน่งพิกัดทางภูมิศาสตร์จริงของอุปกรณ์หรือผู้ใช้งาน จึงเหมาะเมื่อโจทย์ถามถึงพิกัดที่ตั้งของเซิร์ฟเวอร์ การเลือก Cloud region หรือการทำ Geofencing บล็อกตามประเทศ มากกว่านิยามหลักการทางกฎหมายเอง',
      c2: 'ถูกต้อง: Data sovereignty คือหลักการที่ข้อมูลดิจิทัลอยู่ภายใต้กฎหมาย ข้อบังคับ และอำนาจศาลของประเทศหรือภูมิภาคที่ข้อมูลนั้นถูกเก็บรวบรวม จัดเก็บ หรือประมวลผล',
      c3: 'ไม่ถูกต้อง: Platform diversity ไม่เกี่ยวข้องกับกฎหมายข้ามแดน แต่เหมาะกับการลดความเสี่ยง Monoculture ด้วยการใช้ฮาร์ดแวร์หรือซอฟต์แวร์หลากหลายผู้ผลิต',
      c4: 'ไม่ถูกต้อง: Data obfuscation ไม่ได้เปลี่ยนเขตอำนาจทางกฎหมายของสถานที่จัดเก็บข้อมูล แต่เหมาะกับการทำให้โค้ดหรือข้อมูลอ่านยากขึ้นเพื่อถ่วงเวลาวิเคราะห์'
    },
    misconceptionTh:
      'ผู้เรียนมักใช้คำว่า Geolocation และ Data sovereignty ปะปนกัน ทั้งที่ Geolocation คือ "พิกัดที่ตั้งทางกายภาพ" ส่วน Data sovereignty คือ "อำนาจทางกฎหมายที่ควบคุมข้อมูล ณ ที่ตั้งนั้น"',
    relatedLessonIds: ['L3-06', 'L5-05'],
    tags: ['data-sovereignty', 'geolocation', 'cloud-compliance']
  },
  {
    id: 'Q3-036',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A defense contractor prohibits employees from accessing its classified engineering repository while traveling abroad. The security architect configures the identity provider to evaluate the country of origin from each client IP address and automatically deny authentication requests from foreign territories, while also pinning cloud storage buckets to domestic data centers. Which data security consideration is the architect directly configuring?',
    promptTh:
      'ผู้รับเหมาด้านกลาโหมห้ามไม่ให้พนักงานเข้าถึงคลังข้อมูลวิศวกรรมลับขณะเดินทางไปต่างประเทศ สถาปนิกความปลอดภัยจึงตั้งค่าระบบ Identity provider ให้ตรวจสอบประเทศต้นทางของ IP ผู้ใช้และปฏิเสธคำขอล็อกอินจากต่างประเทศโดยอัตโนมัติ รวมถึงกำหนด Cloud storage bucket ให้อยู่เฉพาะศูนย์ข้อมูลในประเทศเท่านั้น ข้อพิจารณาด้านข้อมูลใดที่สถาปนิกกำลังตั้งค่าโดยตรง?',
    choices: [
      {
        id: 'c1',
        textEn: 'Geolocation',
        textTh: 'Geolocation'
      },
      {
        id: 'c2',
        textEn: 'Tokenization',
        textTh: 'Tokenization'
      },
      {
        id: 'c3',
        textEn: 'Hashing',
        textTh: 'Hashing'
      },
      {
        id: 'c4',
        textEn: 'Non-repudiation',
        textTh: 'Non-repudiation'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      '**Geolocation** คือข้อพิจารณาด้านความปลอดภัยที่ควบคุมการเข้าถึงและการจัดเก็บข้อมูลตามตำแหน่งทางภูมิศาสตร์โดยตรง ทั้งการตรวจจับประเทศจาก IP เพื่อทำ Geofencing บล็อกการล็อกอินจากต่างประเทศและการกำหนดพิกัดศูนย์ข้อมูล (Region pinning) ให้อยู่ภายในประเทศ',
    choiceRationales: {
      c1: 'ถูกต้อง: การควบคุมสิทธิ์เข้าถึงตามประเทศต้นทางของคำขอ (Geofencing) และการจำกัดพิกัดที่ตั้งทางกายภาพของ Cloud storage คือการใช้ Geolocation โดยตรง',
      c2: 'ไม่ถูกต้อง: Tokenization ไม่ได้ตรวจจับตำแหน่งประเทศของผู้ใช้หรือคุม Cloud region แต่เหมาะกับการแทนที่ข้อมูลอ่อนไหวด้วย Token สุ่มเพื่อลดขอบเขตการกำกับดูแล เช่น PCI DSS',
      c3: 'ไม่ถูกต้อง: Hashing ไม่สามารถใช้จำกัดตำแหน่งที่ตั้งของเซิร์ฟเวอร์หรือบล็อกทราฟฟิกตามประเทศได้ แต่เหมาะกับการตรวจสอบ Integrity หรือเก็บรหัสผ่านแบบทางเดียว',
      c4: 'ไม่ถูกต้อง: Non-repudiation ไม่ใช่กลไกกำหนดตำแหน่งทางภูมิศาสตร์ แต่เหมาะกับการใช้ลายเซ็นดิจิทัลพิสูจน์ตัวผู้กระทำธุรกรรมไม่ให้ปฏิเสธความรับผิดชอบ'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนคิดว่า Geolocation เกี่ยวข้องเฉพาะพิกัด GPS บนอุปกรณ์มือถือเท่านั้น แต่ในสถาปัตยกรรมความปลอดภัยยังครอบคลุม Cloud region placement และ IP-based geofencing ด้วย',
    relatedLessonIds: ['L3-06', 'L4-09'],
    tags: ['geolocation', 'geofencing', 'region-pinning']
  },
  {
    id: 'Q3-037',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A development team proposes protecting customers’ national identification numbers inside a billing database by applying SHA-256 before writing records to disk. The security architect rejects this proposal because customer service representatives and tax reporting jobs must retrieve and display the exact original ID numbers. Why was the proposal rejected, and which method should be used instead?',
    promptTh:
      'ทีมพัฒนาซอฟต์แวร์เสนอให้ปกป้องเลขประจำตัวประชาชนของลูกค้าในฐานข้อมูลการเรียกเก็บเงินด้วยการใช้ SHA-256 ก่อนบันทึกลงดิสก์ แต่สถาปนิกความปลอดภัยไม่อนุมัติข้อเสนอนี้ เนื่องจากเจ้าหน้าที่บริการลูกค้าและระบบออกรายงานภาษีจำเป็นต้องดึงเลขประจำตัวต้นฉบับที่ถูกต้องกลับมาแสดงผล เหตุใดข้อเสนอนี้จึงถูกปฏิเสธ และควรเปลี่ยนไปใช้วิธีใดแทน?',
    choices: [
      {
        id: 'c1',
        textEn: 'SHA-256 is easily reversed using public salts; use Base64 encoding for reversible protection.',
        textTh: 'SHA-256 สามารถคำนวณย้อนกลับได้ง่ายด้วย Salt สาธารณะ จึงควรเปลี่ยนเป็น Base64 encoding เพื่อความสะดวกในการแปลงกลับ'
      },
      {
        id: 'c2',
        textEn: 'SHA-256 increases storage overhead excessively; apply static data masking directly to production records.',
        textTh: 'SHA-256 สิ้นเปลืองพื้นที่จัดเก็บมากเกินไป ควรใช้ Static data masking บนข้อมูล Production โดยตรงแทน'
      },
      {
        id: 'c3',
        textEn: 'SHA-256 protects only data in transit; rely solely on TLS 1.3 without modifying database fields.',
        textTh: 'SHA-256 ปกป้องเฉพาะ Data in transit เท่านั้น จึงควรใช้เพียง TLS 1.3 โดยไม่ต้องปกป้องฟิลด์ในฐานข้อมูล'
      },
      {
        id: 'c4',
        textEn: 'Hashing is an irreversible one-way function; use symmetric encryption with KMS-managed keys so authorized services can decrypt the IDs.',
        textTh: 'Hashing เป็นฟังก์ชันทางเดียวที่ไม่สามารถถอดกลับเป็นค่าเดิมได้ ควรใช้การเข้ารหัสแบบสมมาตรร่วมกับคีย์ที่จัดการผ่าน KMS เพื่อให้ระบบที่ได้รับอนุญาตถอดรหัสกลับมาได้'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      '**Hashing** (เช่น SHA-256) เป็นฟังก์ชันทางเดียวที่ไม่สามารถคำนวณย้อนกลับเป็นค่าเดิมได้ (Irreversible) จึงเหมาะกับการตรวจสอบ Integrity หรือเก็บรหัสผ่านเพื่อเปรียบเทียบค่าเท่านั้น เมื่อระบบยังต้องถอดเลขประจำตัวประชาชนต้นฉบับกลับมาใช้งานจริง จึงต้องเปลี่ยนไปใช้ **การเข้ารหัสแบบสมมาตรร่วมกับคีย์ที่จัดการผ่าน KMS** เพื่อให้บริการที่ได้รับสิทธิ์สามารถถอดรหัสกลับมาได้',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: SHA-256 ไม่สามารถคำนวณย้อนกลับได้ และ Base64 เป็นเพียง Encoding เพื่อขนส่งข้อมูล ไม่ใช่การเข้ารหัสความลับจึงถอดอ่านได้โดยไม่ต้องใช้กุญแจ (เหมาะกับการแปลงไบนารีเป็นข้อความเพื่อส่งผ่านข้อความโปรโตคอล)',
      c2: 'ไม่ถูกต้อง: Static data masking ลบหรือแทนที่ค่าจริงอย่างถาวรเช่นเดียวกับที่กู้คืนค่าเดิมไม่ได้ จึงเหมาะกับการส่งสำเนาให้ทีม Dev/Test ไม่ใช่ฐานข้อมูล Production ที่ต้องใช้เลขจริงออกเอกสารภาษี',
      c3: 'ไม่ถูกต้อง: TLS 1.3 ป้องกันเฉพาะ Data in transit ระหว่างเครือข่าย แต่ไม่ป้องกันข้อมูลในฐานข้อมูลหากไฟล์ฐานข้อมูลถูกขโมย (Data at rest) การพึ่งพา TLS 1.3 เพียงอย่างเดียวเหมาะเฉพาะกรณีข้อมูลไม่ได้ถูกเก็บนิ่งลงสื่อจัดเก็บหรือมีการเข้ารหัส Storage แยกชั้นไว้แล้ว',
      c4: 'ถูกต้อง: Encryption เป็นกระบวนการสองทางที่ถอดรหัสกลับมาแสดงผลให้ระบบที่มีสิทธิ์ผ่าน KMS ได้ ขณะที่ Hashing ใช้เมื่อต้องการตรวจ Integrity หรือเก็บรหัสผ่านที่ไม่ต้องถอดกลับ'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนว่า Hashing และ Encryption ต่างเป็น "การเข้ารหัส" ที่ถอดรหัสกลับมาอ่านค่าต้นฉบับได้เหมือนกัน',
    relatedLessonIds: ['L3-06', 'L1-05'],
    tags: ['hashing', 'encryption', 'kms', 'reversible-vs-oneway']
  },
  {
    id: 'Q3-038',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'An e-commerce company processes millions of card payments across its storefront, analytics warehouse, and ERP servers. To minimize the number of systems inside its PCI DSS audit scope—while still enabling the payment gateway to exchange references back for real Primary Account Numbers (PANs) during settlement—the architect replaces the PAN upon ingestion with a random surrogate value that has no mathematical relationship to the original card number and stores the mapping inside a hardened central vault. Which method BEST matches this design?',
    promptTh:
      'บริษัทอีคอมเมิร์ซประมวลผลรายการชำระเงินด้วยบัตรหลายล้านรายการผ่านหน้าร้าน คลังวิเคราะห์ข้อมูล และเซิร์ฟเวอร์ ERP เพื่อลดจำนวนระบบที่ต้องเข้าเกณฑ์ตรวจสอบ PCI DSS ให้น้อยที่สุด ในขณะที่ยังให้ Payment gateway แลกค่าอ้างอิงกลับเป็นหมายเลขบัตรจริง (PAN) เพื่อเรียกเก็บเงินได้ สถาปนิกจึงแทนที่ PAN ทันทีที่รับเข้ามาด้วยค่าตัวแทนแบบสุ่มที่ไม่มีความสัมพันธ์ทางคณิตศาสตร์กับเลขบัตรเดิม และเก็บตารางจับคู่ไว้ในคลังนิรภัยส่วนกลางที่มีการป้องกันเข้มงวด วิธีการใดตรงกับสถาปัตยกรรมนี้มากที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Symmetric field-level encryption',
        textTh: 'Symmetric field-level encryption'
      },
      {
        id: 'c2',
        textEn: 'Tokenization',
        textTh: 'Tokenization'
      },
      {
        id: 'c3',
        textEn: 'Static data masking',
        textTh: 'Static data masking'
      },
      {
        id: 'c4',
        textEn: 'Salted key stretching',
        textTh: 'Salted key stretching'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      '**Tokenization** ตอบโจทย์เงื่อนไขสำคัญทั้งสองประการของโจทย์ ได้แก่ การแทนที่ PAN ด้วยค่าตัวแทนแบบสุ่มที่ไม่มีความสัมพันธ์ทางคณิตศาสตร์กับเลขบัตรจริง และการเก็บตารางจับคู่ไว้ใน Token Vault ส่วนกลาง ทำให้ระบบ ERP และคลังวิเคราะห์ข้อมูลพ้นจากขอบเขต PCI DSS ได้มาก ในขณะที่ Payment gateway ยังแลกค่าจริงกลับผ่าน Vault ได้เมื่อต้องตัดบัญชี',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Encryption แปลงข้อมูลด้วยอัลกอริทึมและคีย์ทางคณิตศาสตร์ ระบบที่ถือครองหรือประมวลผลคีย์และ Ciphertext มักยังอยู่ในขอบเขต Compliance การเลือก Encryption เหมาะเมื่อไม่ต้องการตั้ง Token Vault กลางแต่ต้องการปกป้องความลับด้วย KMS/HSM',
      c2: 'ถูกต้อง: Tokenization แทนที่ข้อมูลอ่อนไหวด้วย Token สุ่มผ่าน Token Vault ทำให้ระบบปลายทางที่ถือเฉพาะ Token ลดขอบเขต PCI DSS ได้มากและยังมีกลไกแลกกลับเพื่อชำระเงิน',
      c3: 'ไม่ถูกต้อง: Static data masking แทนที่ค่าจริงอย่างถาวรโดยไม่มี Vault สำหรับแลกคืน จึงไม่สามารถนำมาใช้ตัดเงินจริงในระบบ Settlement ได้ เหมาะกับการเตรียมข้อมูลจำลองสำหรับ Dev/Test',
      c4: 'ไม่ถูกต้อง: Salted key stretching (เช่น Argon2/bcrypt) ใช้สำหรับการเก็บรหัสผ่านแบบทางเดียวเพื่อชะลอ Brute force ไม่ได้ใช้แทนที่เลขบัตรเพื่อแลกกลับภายหลัง จึงเหมาะกับระบบยืนยันตัวตนในการล็อกอิน'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนระหว่าง Encryption กับ Tokenization โดยไม่ตระหนักว่า Token ไม่มีสูตรคณิตศาสตร์ถอดรหัสย้อนกลับได้เองและช่วยลด PCI DSS scope ได้เด่นชัดกว่า',
    relatedLessonIds: ['L3-06', 'L1-06'],
    tags: ['tokenization', 'pci-dss', 'token-vault', 'data-protection']
  },
  {
    id: 'Q3-039',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.3'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'A telecommunications provider must resolve two operational data-exposure concerns: (1) software engineers need a realistic copy of a 5-million-row production customer database for performance testing in staging without exposing real subscriber PII, and (2) live call-center agents using the CRM dashboard should see only the last four digits of a customer’s bank account number while full account values remain intact in the backend database. Which TWO methods BEST address these requirements? (Choose two.)',
    promptTh:
      'ผู้ให้บริการโทรคมนาคมต้องแก้ไขความเสี่ยงการเปิดเผยข้อมูลในสองสถานการณ์ปฏิบัติการ ได้แก่ (1) วิศวกรซอฟต์แวร์ต้องการสำเนาฐานข้อมูลลูกค้าจริงจำนวน 5 ล้านแถวเพื่อทดสอบสมรรถนะในสภาพแวดล้อม Staging โดยไม่ให้ข้อมูลส่วนบุคคลของลูกค้าจริงหลุดออกไป และ (2) เจ้าหน้าที่ Call center ที่ใช้หน้าจอ CRM ควรมองเห็นเฉพาะตัวเลข 4 หลักสุดท้ายของบัญชีธนาคารลูกค้าโดยที่ค่าจริงในฐานข้อมูลหลังบ้านยังคงอยู่ครบถ้วน วิธีการใด 2 ข้อต่อไปนี้ตอบโจทย์ทั้งสองได้อย่างเหมาะสมที่สุด? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Static data masking for the staging database copy',
        textTh: 'Static data masking สำหรับสำเนาฐานข้อมูลชุด Staging'
      },
      {
        id: 'c2',
        textEn: 'Code obfuscation applied to the CRM frontend binaries',
        textTh: 'Code obfuscation บนไฟล์ไบนารีส่วนหน้าของระบบ CRM'
      },
      {
        id: 'c3',
        textEn: 'One-way SHA-256 hashing of subscriber names in the production table',
        textTh: 'One-way SHA-256 hashing กับชื่อผู้ใช้งานในตาราง Production'
      },
      {
        id: 'c4',
        textEn: 'Steganography inside customer invoice PDF images',
        textTh: 'Steganography ซ่อนข้อความไว้ในไฟล์ภาพบนใบแจ้งหนี้ PDF'
      },
      {
        id: 'c5',
        textEn: 'Dynamic data masking on live CRM query results',
        textTh: 'Dynamic data masking บนผลลัพธ์คิวรีของหน้าจอ CRM จริง'
      }
    ],
    correctChoiceIds: ['c1', 'c5'],
    explanationTh:
      'เงื่อนไขแรกต้องการแทนที่ข้อมูล PII จริงในสำเนาชุด Staging อย่างถาวรแต่ยังคงโครงสร้างและปริมาณข้อมูลไว้ทดสอบสมรรถนะได้ ซึ่งตรงกับ **Static data masking** ส่วนเงื่อนไขที่สองต้องการพรางตัวเลขบางส่วนขณะแสดงผลให้เจ้าหน้าที่เห็นเฉพาะ 4 หลักท้ายตามสิทธิ์โดยไม่แก้ไขค่าจริงในฐานข้อมูลหลังบ้าน ซึ่งตรงกับ **Dynamic data masking**',
    choiceRationales: {
      c1: 'ถูกต้อง: Static data masking แทนที่ข้อมูลจริงด้วยข้อมูลเทียมอย่างถาวรในสำเนาเพื่อส่งให้ Dev/Test/Staging ใช้งานอย่างปลอดภัย',
      c2: 'ไม่ถูกต้อง: Code obfuscation ทำให้อ่านซอร์สโค้ดยากขึ้น ไม่ได้ปิดบังข้อมูล PII ที่ดึงมาจากฐานข้อมูลบนหน้าจอหรือในชุดทดสอบ เหมาะกับการชะลอการ Reverse engineer แอปพลิเคชัน',
      c3: 'ไม่ถูกต้อง: การทำ One-way hash ในตาราง Production จะทำให้ระบบเรียกเก็บเงินไม่สามารถแสดงชื่อลูกค้าจริงได้อีก Hashing เหมาะกับเก็บรหัสผ่านหรือตรวจ Integrity',
      c4: 'ไม่ถูกต้อง: Steganography ไม่ได้ช่วยพราง PII ในฐานข้อมูล Staging หรือปิดบังตัวเลขใน CRM แต่เหมาะกับการซ่อนการมีอยู่ของข้อความลับไว้ภายในไฟล์ภาพหรือเสียงเพื่ออำพรางการสื่อสาร',
      c5: 'ถูกต้อง: Dynamic data masking ปิดบังอักขระบางส่วนในผลลัพธ์การสืบค้นแบบเรียลไทม์ตามสิทธิ์ผู้ใช้โดยยังคงค่าจริงไว้ในฐานข้อมูล Production'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนระหว่าง Static กับ Dynamic data masking โดยลืมว่า Static ใช้ล้างค่าจริงถาวรสำหรับสภาพแวดล้อมทดสอบ ส่วน Dynamic ใช้ซ่อนการแสดงผลแบบเรียลไทม์ตามสิทธิ์บนระบบจริง',
    relatedLessonIds: ['L3-06'],
    tags: ['data-masking', 'static-masking', 'dynamic-masking', 'pii']
  },
  {
    id: 'Q3-040',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'During a source code security review, an architect discovers that a mobile banking application embeds hardcoded API credentials inside client-side scripts using variable renaming and Base64 encoding instead of secure token exchange. Why is relying solely on this approach inadequate for protecting sensitive secrets?',
    promptTh:
      'ระหว่างการตรวจสอบความปลอดภัยของซอร์สโค้ด สถาปนิกพบว่าแอปพลิเคชันธนาคารบนมือถือฝังข้อมูลรับรอง API ไว้ในสคริปต์ฝั่งไคลเอนต์โดยใช้วิธีเปลี่ยนชื่อตัวแปรให้สับสนและแปลงเป็น Base64 แทนการใช้ระบบแลกเปลี่ยนโทเคนฝั่งเซิร์ฟเวอร์ เหตุใดการพึ่งพาแนวทางนี้เพียงอย่างเดียวจึงไม่เพียงพอต่อการปกป้องความลับสำคัญ?',
    choices: [
      {
        id: 'c1',
        textEn: 'It prevents mobile operating systems from executing compiled application binaries.',
        textTh: 'วิธีนี้ทำให้ระบบปฏิบัติการมือถือไม่สามารถรันไฟล์ไบนารีที่คอมไพล์แล้วได้'
      },
      {
        id: 'c2',
        textEn: 'It permanently destroys the original credentials like a one-way cryptographic hash.',
        textTh: 'วิธีนี้ทำลายข้อมูลรับรองต้นฉบับอย่างถาวรเช่นเดียวกับการทำแฮชทางเดียว'
      },
      {
        id: 'c3',
        textEn: 'It triggers data sovereignty violations by automatically moving keys to foreign cloud regions.',
        textTh: 'วิธีนี้ทำให้ละเมิด Data sovereignty โดยการย้ายกุญแจไปยังภูมิภาคคลาวด์ต่างประเทศอัตโนมัติ'
      },
      {
        id: 'c4',
        textEn: 'It only delays reverse engineering and relies on security through obscurity rather than strong cryptography.',
        textTh: 'เทคนิคนี้เพียงช่วยถ่วงเวลาการทำ Reverse engineering และอาศัยหลัก Security through obscurity มากกว่าการเข้ารหัสที่แข็งแกร่ง'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'การเปลี่ยนชื่อตัวแปร (Code obfuscation) และการแปลง Base64 จัดเป็นเพียง Obfuscation และ Encoding ซึ่งไม่มีกุญแจลับทางคณิตศาสตร์ จึง**ช่วยเพียงถ่วงเวลาการทำ Reverse engineering และอาศัยหลัก Security through obscurity มากกว่าการเข้ารหัสที่แข็งแกร่ง** ผู้โจมตีที่แกะไฟล์แอปพลิเคชันสามารถถอด Base64 และสกัด API credentials ออกมาได้ทันที จึงห้ามใช้แทนการยืนยันตัวตนและจัดการความลับฝั่งเซิร์ฟเวอร์',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การทำ Obfuscation และ Base64 ยังคงรันบนมือถือได้ตามปกติ ปัญหาความเข้ากันได้ของไบนารีเกิดจากการคอมไพล์ผิดสถาปัตยกรรมหรือขาดลายเซ็นโค้ดที่ถูกต้อง',
      c2: 'ไม่ถูกต้อง: Base64 และ Obfuscation สามารถย้อนกลับเป็นข้อความเดิมได้ทั้งหมด (Reversible) ต่างจาก One-way hashing อย่าง SHA-256 หรือ Argon2 ซึ่งเหมาะกับการเก็บรหัสผ่านหรือตรวจ Integrity ของไฟล์',
      c3: 'ไม่ถูกต้อง: การอำพรางโค้ดในแอปไคลเอนต์ไม่ได้เป็นตัวกำหนด Cloud region ของการจัดเก็บข้อมูล Data sovereignty เกี่ยวข้องเมื่อข้อมูลถูกจัดเก็บหรือประมวลผลบนเซิร์ฟเวอร์ในเขตแดนต่างประเทศที่กฎหมายบังคับใช้ต่างกัน',
      c4: 'ถูกต้อง: Obfuscation ช่วยเพียงเพิ่มความยุ่งยากให้ผู้วิเคราะห์โค้ด แต่ไม่ถือเป็น Strong cryptography จึงต้องย้ายความลับไปเก็บและยืนยันตัวตนผ่านระบบที่ปลอดภัยฝั่งเซิร์ฟเวอร์'
    },
    misconceptionTh:
      'นักพัฒนามักเข้าใจผิดว่าการเข้ารูปแบบด้วย Base64 หรือ Code obfuscation ให้ความปลอดภัยเทียบเท่า Encryption จึงเผลอฝังรหัสผ่านหรือ API key ไว้ในโค้ดฝั่งไคลเอนต์',
    relatedLessonIds: ['L3-06', 'L1-06'],
    tags: ['obfuscation', 'security-through-obscurity', 'encoding']
  },
  {
    id: 'Q3-041',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.3'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'exam-ready',
    promptEn:
      'After an attacker exploits a flaw on a public-facing marketing web server in the DMZ, incident responders discover that the web application’s database service account has unrestricted network reachability and broad SELECT permissions across the internal Restricted HR and payroll database cluster. Which TWO architectural controls BEST limit the blast radius and block unauthorized lateral access to the Restricted database? (Choose two.)',
    promptTh:
      'หลังจากผู้โจมตีใช้ประโยชน์จากช่องโหว่บนเว็บเซิร์ฟเวอร์การตลาดที่เปิดสู่สาธารณะในโซน DMZ ทีมตอบสนองเหตุการณ์พบว่าบัญชีบริการฐานข้อมูลของเว็บแอปพลิเคชันสามารถเชื่อมต่อไปยังเครือข่ายภายในและมีสิทธิ์ SELECT แบบกว้างบนคลัสเตอร์ฐานข้อมูล HR และบัญชีเงินเดือนระดับ Restricted มาตรการเชิงสถาปัตยกรรมใด 2 ข้อต่อไปนี้ช่วยจำกัดรัศมีความเสียหายและสกัดกั้นการเข้าถึงฐานข้อมูลระดับ Restricted โดยมิชอบได้ดีที่สุด? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Reclassify the HR and payroll database tables from Restricted to Sensitive',
        textTh: 'ลดระดับชั้นความลับของตาราง HR และเงินเดือนจาก Restricted เป็น Sensitive'
      },
      {
        id: 'c2',
        textEn: 'Implement network and data segmentation isolating the DMZ web tier from internal restricted data zones via strict firewall rules',
        textTh: 'ดำเนินการ Segmentation แยกโซนเครือข่ายและข้อมูลระหว่างเว็บโซน DMZ ออกจากโซนข้อมูลลับภายในด้วยกฎไฟร์วอลล์ที่เข้มงวด'
      },
      {
        id: 'c3',
        textEn: 'Apply steganography to hide database backup filenames stored on the web server',
        textTh: 'ใช้ Steganography เพื่อซ่อนชื่อไฟล์สำรองฐานข้อมูลที่เก็บอยู่บนเว็บเซิร์ฟเวอร์'
      },
      {
        id: 'c4',
        textEn: 'Enforce access restrictions and least privilege so the web service account can query only required marketing schemas',
        textTh: 'บังคับใช้ Access restrictions ตามหลัก Least privilege เพื่อจำกัดให้บัญชีบริการเว็บคิวรีได้เฉพาะสคีมาการตลาดที่จำเป็นเท่านั้น'
      },
      {
        id: 'c5',
        textEn: 'Enable dynamic data masking only on HR workstations while leaving database service account privileges unchanged',
        textTh: 'เปิดใช้ Dynamic data masking เฉพาะบนเครื่องพนักงาน HR โดยคงสิทธิ์ของบัญชีบริการฐานข้อมูลไว้ตามเดิม'
      }
    ],
    correctChoiceIds: ['c2', 'c4'],
    explanationTh:
      'เหตุการณ์นี้เกิดจากสองช่องโหว่ประสานกัน คือ การที่โซน DMZ เชื่อมต่อข้ามมายังฐานข้อมูลลับภายในได้โดยไม่ถูกกั้น ซึ่งต้องแก้ไขด้วย **Segmentation** แยกโซนเครือข่ายและข้อมูลด้วยกฎไฟร์วอลล์ที่เข้มงวดเพื่อจำกัด Blast radius และการให้สิทธิ์บัญชีบริการเกินความจำเป็น ซึ่งต้องแก้ไขด้วย **Access restrictions ตามหลัก Least privilege** ให้คิวรีได้เฉพาะสคีมาการตลาดที่จำเป็นเท่านั้น',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การลดระดับป้ายกำกับไม่ได้ช่วยปิดกั้นการโจมตีทางเทคนิคและยิ่งทำให้มาตรฐานการป้องกันต่ำลง Data reclassification ใช้เฉพาะเมื่อประเมินความเสี่ยงจริงแล้วพบว่าข้อมูลมีความอ่อนไหวลดลง',
      c2: 'ถูกต้อง: Segmentation แยกโซนหน้าบ้าน (DMZ) ออกจากคลังข้อมูล Restricted หลังบ้าน ป้องกัน Lateral movement แม้เว็บเซิร์ฟเวอร์ถูกยึด',
      c3: 'ไม่ถูกต้อง: Steganography ไม่ได้ตัดสิทธิ์การเชื่อมต่อหรือคิวรีฐานข้อมูล (และไม่ควรเก็บไฟล์สำรองไว้บนเว็บเซิร์ฟเวอร์ตั้งแต่แรก) Steganography ใช้เมื่อต้องการซ่อนข้อมูลลับในสื่อดิจิทัล',
      c4: 'ถูกต้อง: Access restrictions ตามหลัก Least privilege ตัดสิทธิ์บัญชีบริการเว็บไม่ให้เข้าถึงตาราง HR/Payroll แม้ผู้โจมตีจะใช้ช่องโหว่จากฝั่งเว็บ',
      c5: 'ไม่ถูกต้อง: Dynamic data masking บนเครื่องพนักงาน HR ไม่ได้จำกัดสิทธิ์บัญชีบริการของเว็บเซิร์ฟเวอร์ DDM เหมาะกับการพรางข้อมูลบนหน้าจอแสดงผลของผู้ใช้งานปลายทางที่ได้รับสิทธิ์อ่านบางส่วน'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนคิดว่าการมีรหัสผ่านยาวหรือการเข้ารหัสดิสก์เพียงพอแล้ว โดยมองข้ามความเสี่ยงจาก Lateral movement ระหว่างโซนและบัญชีบริการที่ได้รับสิทธิ์เกินจำเป็น',
    relatedLessonIds: ['L3-06', 'L3-03', 'L4-09'],
    tags: ['segmentation', 'access-restrictions', 'least-privilege', 'blast-radius']
  },
  {
    id: 'Q3-042',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'An online ticketing platform experiences heavy traffic surges during major concert releases. To eliminate single points of failure, the architect places stateless web API nodes behind a traffic distributor that runs periodic HTTP health checks to bypass failed servers, while pairing two stateful database servers with shared storage and automatic active-passive failover to preserve ongoing transactions. Which pair of high availability mechanisms is implemented?',
    promptTh:
      'แพลตฟอร์มจำหน่ายตั๋วออนไลน์เผชิญทราฟฟิกพุ่งสูงในช่วงเปิดจองคอนเสิร์ตใหญ่ เพื่อขจัด Single point of failure สถาปนิกจึงวางโหนด Web API แบบ Stateless ไว้หลังอุปกรณ์กระจายทราฟฟิกที่ส่ง Health check ตรวจสอบผ่าน HTTP เป็นระยะเพื่อหลีกเลี่ยงเครื่องที่ล่ม พร้อมจับคู่เซิร์ฟเวอร์ฐานข้อมูลแบบ Stateful สองเครื่องที่ใช้ Storage กลางร่วมกันและสลับการทำงานอัตโนมัติแบบ Active-passive เพื่อรักษาธุรกรรมที่กำลังทำค้างไว้ กลไก High availability คู่ใดที่ถูกนำมาใช้งาน?',
    choices: [
      {
        id: 'c1',
        textEn: 'Load balancing for the web tier and clustering for the database tier',
        textTh: 'Load balancing สำหรับชั้น Web และ Clustering สำหรับชั้น Database'
      },
      {
        id: 'c2',
        textEn: 'Clustering for the web tier and cold site failover for the database tier',
        textTh: 'Clustering สำหรับชั้น Web และ Cold site failover สำหรับชั้น Database'
      },
      {
        id: 'c3',
        textEn: 'Geographic dispersion for the web tier and static data masking for the database tier',
        textTh: 'Geographic dispersion สำหรับชั้น Web และ Static data masking สำหรับชั้น Database'
      },
      {
        id: 'c4',
        textEn: 'Platform diversity for the web tier and tabletop testing for the database tier',
        textTh: 'Platform diversity สำหรับชั้น Web และ Tabletop testing สำหรับชั้น Database'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'การกระจายคำขอขาเข้าไปยังกลุ่มโหนด Web API แบบ Stateless พร้อมตรวจสอบ Health check เพื่อหลีกเลี่ยงเครื่องที่ล่มคือกลไก **Load balancing** สำหรับชั้น Web ส่วนการจับคู่เซิร์ฟเวอร์ฐานข้อมูลแบบ Stateful สองเครื่องให้แชร์ Storage ร่วมกันและสลับการทำงานอัตโนมัติแบบ Active-passive เพื่อรักษาธุรกรรมที่ค้างอยู่คือกลไก **Clustering** สำหรับชั้น Database',
    choiceRationales: {
      c1: 'ถูกต้อง: Load balancing กระจายคำขอ HTTP แบบ Stateless ข้าม Web pool ได้คล่องตัว ขณะที่ Clustering ช่วยรักษางานที่มีสถานะ (Stateful) ของฐานข้อมูลให้สืบต่อได้ไร้รอยต่อ',
      c2: 'ไม่ถูกต้อง: การแจกจ่ายทราฟฟิกด้วย Health check เป็นบทบาทของ Load balancer และ Cold site ใช้เวลาเตรียมฮาร์ดแวร์และกู้ข้อมูลหลายวันจึงไม่รองรับ Automatic failover สำหรับธุรกรรมค้างอยู่ เหมาะกับระบบไม่วิกฤตที่งบจำกัด',
      c3: 'ไม่ถูกต้อง: Geographic dispersion และ Static data masking ไม่ใช่กลไกทำ Web/Database HA ในศูนย์เดียวกัน โดย Geographic dispersion เหมาะกับการกันภัยพิบัติระดับภูมิภาค และ Static masking เหมาะกับการเตรียมข้อมูลจำลองสำหรับ Dev/Test',
      c4: 'ไม่ถูกต้อง: Platform diversity และ Tabletop testing ไม่ใช่กลไกสลับการทำงานของโหนดอัตโนมัติ โดย Platform diversity เหมาะกับการลดเสี่ยง Zero-day ข้ามผู้ผลิต และ Tabletop testing เหมาะกับการซ้อมแผนฉุกเฉินบนเอกสาร'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนว่า Load balancing กับ Clustering เป็นคำเดียวกัน ทั้งที่ Load balancing เน้นกระจายคำขอข้ามเซิร์ฟเวอร์ ส่วน Clustering เน้นประสานโหนดและแชร์สถานะหรือสตอเรจร่วมกัน',
    relatedLessonIds: ['L3-07'],
    tags: ['high-availability', 'load-balancing', 'clustering']
  },
  {
    id: 'Q3-043',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A manufacturing firm establishes a secondary facility 150 km from headquarters with leased rack space, power, cooling, network circuits, and pre-installed servers. However, the servers remain powered down without continuously synchronized databases; during an outage, IT staff must restore recent offsite backups before bringing ERP applications online within an approved 10-hour RTO. Which disaster recovery site type is the firm using?',
    promptTh:
      'บริษัทผู้ผลิตแห่งหนึ่งจัดตั้งศูนย์สำรองห่างจากสำนักงานใหญ่ 150 กิโลเมตร โดยเช่าพื้นที่ตู้แร็ก ระบบไฟฟ้า ระบบทำความเย็น วงจรเครือข่าย และติดตั้งเซิร์ฟเวอร์รอไว้เรียบร้อยแล้ว แต่เซิร์ฟเวอร์ยังปิดพักไว้และไม่ได้ซิงโครไนซ์ฐานข้อมูลอย่างต่อเนื่อง เมื่อเกิดเหตุขัดข้อง ทีมไอทีต้องนำ Backup นอกสถานที่ล่าสุดมากู้คืนก่อนเปิดแอปพลิเคชัน ERP ภายในเวลา RTO ที่อนุมัติไว้ 10 ชั่วโมง ศูนย์สำรองนี้เป็นประเภทใด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Hot site',
        textTh: 'Hot site'
      },
      {
        id: 'c2',
        textEn: 'Cold site',
        textTh: 'Cold site'
      },
      {
        id: 'c3',
        textEn: 'Warm site',
        textTh: 'Warm site'
      },
      {
        id: 'c4',
        textEn: 'Active-active mirror cluster',
        textTh: 'Active-active mirror cluster'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      '**Warm site** คือศูนย์สำรองที่มีโครงสร้างพื้นฐาน (พื้นที่แร็ก ไฟฟ้า แอร์ เครือข่าย) และฮาร์ดแวร์เซิร์ฟเวอร์ติดตั้งรอไว้แล้ว แต่ข้อมูลยังไม่ได้ซิงโครไนซ์แบบ Real-time จึงต้องเสียเวลา Restore backup และเปิดระบบในระดับหลายชั่วโมง (RTO 10 ชั่วโมง) ซึ่งอยู่กึ่งกลางระหว่าง Hot site ที่พร้อมใช้งานทันทีกับ Cold site ที่เป็นอาคารเปล่าไร้เซิร์ฟเวอร์',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Hot site มีข้อมูลซิงโครไนซ์ต่อเนื่องเกือบ Real-time และเปิดระบบพร้อมรับทราฟฟิกทันทีภายในไม่กี่นาทีโดยไม่ต้องรอ Restore backup จึงเหมาะกับระบบที่ต้องการ RTO ใกล้ศูนย์',
      c2: 'ไม่ถูกต้อง: Cold site มีเพียงพื้นที่อาคาร ไฟฟ้า และระบบปรับอากาศเปล่า ๆ โดยยังไม่มีฮาร์ดแวร์เซิร์ฟเวอร์ติดตั้งไว้ ทำให้ใช้เวลาจัดหา/ติดตั้งและกู้ระบบนานหลายวันหรือหลายสัปดาห์ เหมาะกับงานที่รอได้นานและงบต่ำที่สุด',
      c3: 'ถูกต้อง: Warm site มีอาคาร พลังงาน เครือข่าย และฮาร์ดแวร์หลักรอไว้ แต่ต้องกู้คืน Backup ล่าสุดเพื่อเปิดบริการภายในหลักหลายชั่วโมง',
      c4: 'ไม่ถูกต้อง: Active-active mirror cluster ประมวลผลและซิงโครไนซ์ข้อมูลพร้อมกันตลอดเวลาทั้งสองฝั่งเพื่อไม่ให้เกิด Downtime ไม่สอดคล้องกับเซิร์ฟเวอร์ที่ปิดรอการกู้คืน Backup'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนว่า Warm site มีข้อมูลซิงค์พร้อมใช้งานทันทีเหมือน Hot site หรือเข้าใจผิดว่า Warm site ไม่มีเครื่องเซิร์ฟเวอร์ติดตั้งไว้เหมือน Cold site',
    relatedLessonIds: ['L3-07', 'L5-03'],
    tags: ['dr-sites', 'warm-site', 'rto']
  },
  {
    id: 'Q3-044',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'A regional stock exchange operates a fully synchronized Hot site with an RTO of 90 seconds, yet an external resilience audit reveals that both the primary data center and the Hot site sit 2 kilometers apart on the same municipal power substation and river floodplain. To preserve Continuity of Operations (COOP) against a widespread natural disaster or local grid collapse, which architectural adjustment should the architect prioritize FIRST?',
    promptTh:
      'ตลาดหลักทรัพย์ระดับภูมิภาคมี Hot site ที่ซิงโครไนซ์ข้อมูลเต็มรูปแบบพร้อมค่า RTO 90 วินาที แต่การตรวจสอบความยืดหยุ่นจากภายนอกพบว่าทั้งศูนย์ข้อมูลหลักและ Hot site ตั้งอยู่ห่างกันเพียง 2 กิโลเมตร บนสถานีไฟฟ้าย่อยและเขตลุ่มน้ำท่วมถึงเดียวกัน เพื่อรักษา Continuity of Operations (COOP) รับมือภัยพิบัติทางธรรมชาติขนาดใหญ่หรือไฟฟ้าดับทั้งเขต สถาปนิกควรให้ความสำคัญกับการปรับปรุงใดเป็นลำดับแรก?',
    choices: [
      {
        id: 'c1',
        textEn: 'Downgrade the secondary facility to a Cold site in the same business district to reduce lease costs.',
        textTh: 'ลดระดับศูนย์สำรองเป็น Cold site ในย่านธุรกิจเดิมเพื่อประหยัดค่าเช่า'
      },
      {
        id: 'c2',
        textEn: 'Disable continuous replication and rely exclusively on local hourly snapshots.',
        textTh: 'ปิดการทำ Replication ต่อเนื่องและพึ่งพา Snapshot รายชั่วโมงภายในเครื่องเดิมเท่านั้น'
      },
      {
        id: 'c3',
        textEn: 'Install an additional diesel generator in the primary building without relocating the secondary site.',
        textTh: 'ติดตั้งเครื่องปั่นไฟดีเซลเพิ่มในอาคารหลักโดยไม่ต้องย้ายที่ตั้งศูนย์สำรอง'
      },
      {
        id: 'c4',
        textEn: 'Relocate the Hot site to an independent geographic region with separate utility grids and hazard zones.',
        textTh: 'ย้ายที่ตั้ง Hot site ไปยังภูมิภาคที่มีระยะห่างปลอดภัยซึ่งใช้โครงข่ายไฟฟ้าและเขตภัยพิบัติแยกขาดจากศูนย์หลัก'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'สิ่งที่ควรปรับปรุงเป็นอันดับแรกคือการทำ **Geographic dispersion** ด้วยการ**ย้ายที่ตั้ง Hot site ไปยังภูมิภาคที่มีระยะห่างปลอดภัยซึ่งใช้โครงข่ายไฟฟ้าและเขตภัยพิบัติแยกขาดจากศูนย์หลัก** เพราะความเสี่ยงวิกฤตที่สุดในโจทย์คือ Single point of failure เชิงพื้นที่จากการที่ทั้งสองศูนย์อยู่ห่างกันเพียง 2 กิโลเมตรในเขตรับน้ำและสายส่งไฟเดียวกัน การย้ายภูมิภาคช่วยคุ้มครอง Continuity of Operations (COOP) และยังคง RTO 90 วินาทีของ Hot site ไว้ได้',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การลดระดับเป็น Cold site ในย่านเดิมยิ่งทำให้ฟื้นระบบไม่ทัน RTO 90 วินาทีและยังคงพังจากภัยพิบัติเดียวกัน Cold site เหมาะกับระบบที่ยอมรับเวลาหยุดชะงักนานหลายวัน',
      c2: 'ไม่ถูกต้อง: การปิด Replication แล้วใช้แค่ Snapshot ท้องถิ่นทำให้ RPO แย่ลงและพังพร้อมอาคารหลัก Snapshot เหมาะใช้เป็นจุดย้อนสถานะชั่วคราวก่อนทำ Change บน Storage เดิม',
      c3: 'ไม่ถูกต้อง: เครื่องปั่นไฟช่วยแก้ปัญหาไฟฟ้าดับในอาคารหลักได้ แต่ไม่สามารถป้องกันเหตุอุทกภัยระดับลุ่มน้ำที่ท่วมทั้งสองศูนย์พร้อมกัน เครื่องปั่นไฟเหมาะกับการแก้ปัญหาไฟดับระยะยาวเฉพาะสถานที่',
      c4: 'ถูกต้อง: การย้าย Hot site ตามหลัก Geographic dispersion ข้ามเขตภัยพิบัติและโครงข่ายไฟฟ้าแก้จุดเสี่ยงล่มพร้อมกันโดยตรงและรักษา Continuity of Operations ได้อย่างแท้จริง'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนคิดว่าเพียงมี Hot site และทำ Replication แล้วก็เพียงพอต่อแผน DR โดยลืมตรวจสอบว่าทั้งสองศูนย์อยู่ในรัศมีภัยพิบัติเดียวกันหรือไม่',
    relatedLessonIds: ['L3-07', 'L5-03'],
    tags: ['geographic-dispersion', 'hot-site', 'coop', 'dr-planning']
  },
  {
    id: 'Q3-045',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.4'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'A global payment platform suffers two major incidents in one year: a defective vendor firmware update simultaneously disables all identical perimeter and internal firewalls, and a single cloud provider’s control-plane outage halts cloud-hosted APIs for 14 hours. Which TWO architectural strategies directly mitigate monoculture flaws and single-provider outages? (Choose two.)',
    promptTh:
      'แพลตฟอร์มการชำระเงินระดับโลกประสบเหตุขัดข้องใหญ่สองครั้งในปีเดียว ได้แก่ อัปเดตเฟิร์มแวร์ที่ผิดพลาดจากผู้ผลิตทำให้ไฟร์วอลล์รุ่นเดียวกันทั้งขอบนอกและภายในหยุดทำงานพร้อมกัน และเหตุระบบควบคุมของคลาวด์รายเดียวล่มส่งผลให้ API บนคลาวด์หยุดให้บริการนาน 14 ชั่วโมง กลยุทธ์เชิงสถาปัตยกรรมใด 2 ข้อต่อไปนี้ช่วยลดความเสี่ยงจากปัญหา Monoculture และการล่มของผู้ให้บริการรายเดียวได้โดยตรง? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Platform diversity across firewall vendors and operating system tiers',
        textTh: 'Platform diversity ด้วยการใช้ไฟร์วอลล์และระบบปฏิบัติการจากผู้ผลิตที่หลากหลายข้ามชั้นป้องกัน'
      },
      {
        id: 'c2',
        textEn: 'Consolidating every workload onto a single public cloud vendor for uniform APIs',
        textTh: 'รวมภาระงานทั้งหมดไว้บนผู้ให้บริการ Public cloud เพียงรายเดียวเพื่อให้ใช้ API รูปแบบเดียวกัน'
      },
      {
        id: 'c3',
        textEn: 'Multi-cloud architecture distributing critical workloads across independent cloud providers',
        textTh: 'สถาปัตยกรรม Multi-cloud กระจายภาระงานวิกฤตไปยังผู้ให้บริการคลาวด์อิสระมากกว่าหนึ่งราย'
      },
      {
        id: 'c4',
        textEn: 'Reducing the UPS battery health-check polling interval in headquarters server closets',
        textTh: 'ลดรอบเวลาการตรวจสอบสถานะแบตเตอรี่ UPS ในห้องเซิร์ฟเวอร์สำนักงานใหญ่'
      }
    ],
    correctChoiceIds: ['c1', 'c3'],
    explanationTh:
      'ปัญหาไฟร์วอลล์รุ่นเดียวกันล่มพร้อมกันทั้งองค์กรจากอัปเดตเฟิร์มแวร์ที่ผิดพลาดเป็นความเสี่ยงแบบ Monoculture ซึ่งแก้ไขได้โดยตรงด้วย **Platform diversity** (ใช้ไฟร์วอลล์และระบบปฏิบัติการหลากหลายผู้ผลิตข้ามชั้นป้องกัน) ส่วนปัญหาผู้ให้บริการคลาวด์รายเดียวล่มทั้งแพลตฟอร์มเป็นความเสี่ยง Single-provider outage ซึ่งแก้ไขได้ด้วยสถาปัตยกรรม **Multi-cloud** เพื่อกระจายภาระงานวิกฤตข้ามผู้ให้บริการอิสระ',
    choiceRationales: {
      c1: 'ถูกต้อง: Platform diversity ลดโอกาสที่บั๊กอัปเดตหรือช่องโหว่ Zero-day เพียงตัวเดียวจะกระทบอุปกรณ์ป้องกันหรือระบบปฏิบัติการทุกชั้นพร้อมกัน',
      c2: 'ไม่ถูกต้อง: การรวมศูนย์ไว้บนคลาวด์เดียวช่วยลดความซับซ้อนในการดูแล IAM และค่า Egress เมื่อองค์กรต้องการบริหารง่ายในงบจำกัด แต่ยิ่งเพิ่มความเสี่ยง Single-vendor outage มากขึ้น',
      c3: 'ถูกต้อง: Multi-cloud systems ช่วยให้ระบบย้ายหรือทำงานต่อบนคลาวด์อีกรายได้เมื่อผู้ให้บริการรายหนึ่งเกิดการล่มระดับแพลตฟอร์ม',
      c4: 'ไม่ถูกต้อง: การเช็กแบตเตอรี่ UPS ถี่ขึ้นไม่ได้ช่วยแก้ปัญหา Firmware bug ของไฟร์วอลล์หรือการล่มของผู้ให้บริการคลาวด์ แต่เหมาะกับการบำรุงรักษาระบบไฟฟ้าเพื่อป้องกันไฟดับฉับพลันภายในอาคารสำนักงานใหญ่'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจว่าการใช้ Vendor เดียวกันทุกจุดดีกว่าเสมอเพราะดูแลง่าย จนละเลยความเสี่ยงที่อัปเดตผิดพลาดหรือ Zero-day จะทำลายทุกชั้นพร้อมกัน',
    relatedLessonIds: ['L3-07', 'L3-01'],
    tags: ['platform-diversity', 'multi-cloud', 'resilience', 'coop']
  },
  {
    id: 'Q3-046',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.4'],
    type: 'msq',
    selectCount: 3,
    difficulty: 'exam-ready',
    promptEn:
      'During an unannounced disaster recovery cutover drill, an insurer fails to sustain operations at its secondary facility for three reasons: (1) backup cluster servers lack sufficient CPU and storage IOPS for peak transaction volume, (2) the secondary server room overheats within 40 minutes due to undersized HVAC cooling, and (3) only one senior engineer holds the knowledge required to reconfigure BGP routing and is unreachable. Which THREE capacity planning domains were neglected? (Choose three.)',
    promptTh:
      'ระหว่างการซ้อมสลับระบบฉุกเฉินแบบไม่แจ้งล่วงหน้า บริษัทประกันภัยไม่สามารถประคองการทำงานที่ศูนย์สำรองได้ด้วยเหตุผล 3 ประการ ได้แก่ (1) เซิร์ฟเวอร์คลัสเตอร์สำรองมีกำลัง CPU และ Storage IOPS ไม่เพียงพอสำหรับปริมาณธุรกรรมช่วงโหลดสูงสุด (2) ห้องเซิร์ฟเวอร์สำรองเกิดความร้อนสะสมสูงเกินขีดจำกัดภายใน 40 นาทีเนื่องจากระบบปรับอากาศ HVAC มีขนาดเล็กเกินไป และ (3) มีวิศวกรอาวุโสเพียงคนเดียวที่รู้วิธีปรับตั้งค่า BGP สำหรับสลับเส้นทางและไม่สามารถติดต่อได้ ด้านใด 3 ข้อต่อไปนี้ของ Capacity planning ที่ถูกละเลย? (เลือก 3 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Technology',
        textTh: 'ด้านเทคโนโลยี (Technology)'
      },
      {
        id: 'c2',
        textEn: 'Data sanitization',
        textTh: 'การล้างทำลายข้อมูล (Data sanitization)'
      },
      {
        id: 'c3',
        textEn: 'Infrastructure',
        textTh: 'ด้านโครงสร้างพื้นฐาน (Infrastructure)'
      },
      {
        id: 'c4',
        textEn: 'Code obfuscation',
        textTh: 'การอำพรางโค้ด (Code obfuscation)'
      },
      {
        id: 'c5',
        textEn: 'People',
        textTh: 'ด้านบุคลากร (People)'
      }
    ],
    correctChoiceIds: ['c1', 'c3', 'c5'],
    explanationTh:
      'ตามกรอบ SY0-701 Objective 3.4 กระบวนการ Capacity planning ครอบคลุม 3 เสาหลักที่ตรงกับสาเหตุทั้งสามประการในโจทย์ ได้แก่ **Technology** (กำลัง CPU และ Storage IOPS ของคลัสเตอร์สำรองไม่เพียงพอ), **Infrastructure** (ระบบปรับอากาศ HVAC ขนาดเล็กเกินไปจนห้องเซิร์ฟเวอร์ร้อนจัด) และ **People** (ความรู้การปรับ BGP กระจุกตัวอยู่ที่วิศวกรคนเดียว)',
    choiceRationales: {
      c1: 'ถูกต้อง: การประเมิน Compute CPU, RAM, Storage IOPS และ License ให้รองรับโหลดสูงสุดตอนสลับระบบอยู่ในเสาหลัก Technology ของ Capacity planning',
      c2: 'ไม่ถูกต้อง: Data sanitization เป็นขั้นตอนการลบข้อมูลอย่างถาวรก่อนปลดระวางหรือกำจัดสื่อจัดเก็บ (Objective 4.2) ไม่ใช่เสาหลักของ Capacity planning',
      c3: 'ถูกต้อง: ความพร้อมของระบบปรับอากาศ HVAC กำลังไฟ พื้นที่ตู้แร็ก และลิงก์สื่อสารเป็นส่วนของเสาหลัก Infrastructure ใน Capacity planning',
      c4: 'ไม่ถูกต้อง: Code obfuscation เป็นเทคนิคป้องกันการทำ Reverse engineering ซอร์สโค้ด (Objective 3.3) ไม่เกี่ยวข้องกับความจุศูนย์สำรอง',
      c5: 'ถูกต้อง: การมีจำนวนบุคลากรเพียงพอ การทำ Cross-training และการขจัด Single point of failure ด้านทักษะคนอยู่ในเสาหลัก People ของ Capacity planning'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจว่า Capacity planning ดูเฉพาะฮาร์ดแวร์ CPU/Disk (Technology) โดยลืมว่า SY0-701 รวมทั้งพื้นที่/HVAC (Infrastructure) และกำลังคน/Cross-training (People) ด้วย',
    relatedLessonIds: ['L3-07', 'L5-03'],
    tags: ['capacity-planning', 'people', 'technology', 'infrastructure']
  },
  {
    id: 'Q3-047',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A clinical laboratory operates diesel generators capable of sustaining its on-premises EHR servers for 72 hours during extended regional blackouts. However, during recent momentary voltage sags and the 25-second startup delay before the generator’s automatic transfer switch engages, database servers abruptly shut down and corrupt open transactions. Which component MUST be integrated inline with the generators to resolve this gap?',
    promptTh:
      'ห้องปฏิบัติการทางการแพทย์แห่งหนึ่งมีเครื่องกำเนิดไฟฟ้าดีเซลที่สามารถจ่ายไฟเลี้ยงเซิร์ฟเวอร์ EHR ภายในอาคารได้นานถึง 72 ชั่วโมงในช่วงไฟฟ้าดับเป็นบริเวณกว้าง อย่างไรก็ตาม ระหว่างเหตุไฟตกชั่วขณะและช่วงรอยต่อ 25 วินาทีก่อนเครื่องปั่นไฟจะสตาร์ตและสวิตช์สลับแหล่งจ่ายไฟทำงาน เซิร์ฟเวอร์ฐานข้อมูลกลับดับกะทันหันจนทำให้ธุรกรรมที่เปิดค้างอยู่เสียหาย ต้องติดตั้งอุปกรณ์ใดคั่นเสริมเข้ากับเครื่องปั่นไฟเพื่อแก้ช่องว่างนี้?',
    choices: [
      {
        id: 'c1',
        textEn: 'Dual-homed network load balancers on the core switch to redistribute database queries',
        textTh: 'Network load balancer แบบ Dual-homed บนสวิตช์หลักเพื่อกระจายคำขอฐานข้อมูล'
      },
      {
        id: 'c2',
        textEn: 'Uninterruptible Power Supply (UPS) units to deliver instant battery holdover and power conditioning',
        textTh: 'Uninterruptible Power Supply (UPS) เพื่อจ่ายไฟสำรองจากแบตเตอรี่ทันทีและปรับเสถียรภาพแรงดันไฟฟ้า'
      },
      {
        id: 'c3',
        textEn: 'An additional offsite Cold site facility provisioned with redundant HVAC and backup racks',
        textTh: 'ศูนย์สำรอง Cold site นอกสถานที่เพิ่มเติมที่เตรียมระบบปรับอากาศและตู้แร็กสำรองไว้พร้อม'
      },
      {
        id: 'c4',
        textEn: 'Automated differential backups scheduled nightly to an onsite network-attached storage array',
        textTh: 'Differential backup อัตโนมัติรายคืนที่บันทึกลงอุปกรณ์จัดเก็บข้อมูลเครือข่ายภายในอาคาร'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'ต้องติดตั้ง **Uninterruptible Power Supply (UPS)** คั่นเสริมเข้ากับเครื่องปั่นไฟ เพราะ Generator ต้องใช้เวลาสตาร์ตและสลับวงจรนาน 25 วินาทีจึงไม่สามารถป้องกันไฟตกฉับพลันได้ UPS จะจ่ายไฟจากแบตเตอรี่ทันทีแบบไร้รอยต่อ (ระดับมิลลิวินาที) พร้อมปรับเสถียรภาพแรงดันไฟฟ้าในช่วงรอยต่อก่อนที่เครื่องปั่นไฟจะรับช่วงจ่ายไฟระยะยาว',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Load balancer ไม่สามารถจ่ายพลังงานไฟฟ้าหรือแก้ปัญหาไฟตกในตู้แร็กได้ แต่เหมาะกับการกระจายทราฟฟิกระหว่างเซิร์ฟเวอร์หลายตัวเพื่อลด SPOF ด้านเครือข่ายและแอปพลิเคชัน',
      c2: 'ถูกต้อง: UPS ประคองไฟทันทีจากแบตเตอรี่ในช่วง 25 วินาทีที่ Generator กำลังสตาร์ตและช่วยกรองไฟตก (Brownout) ป้องกันฮาร์ดแวร์ดับกะทันหัน',
      c3: 'ไม่ถูกต้อง: Cold site ไม่ได้แก้ปัญหาไฟกระชากหรือดับช่วงสั้นในห้องเซิร์ฟเวอร์หลัก แต่เหมาะกับแผนฟื้นฟูระยะยาวเมื่อสถานที่หลักเสียหายทั้งหมดและรอได้หลายวัน',
      c4: 'ไม่ถูกต้อง: Differential backup ไม่ได้ป้องกันไม่ให้เซิร์ฟเวอร์ดับกลางคันระหว่างไฟตก แต่เหมาะกับการกู้คืนข้อมูลย้อนหลังเมื่อดิสก์พังหรือข้อมูลถูกทำลายแล้ว'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนเข้าใจว่าเครื่องปั่นไฟ (Generator) สลับไฟได้ทันทีโดยไม่จำเป็นต้องใช้ UPS หรือคิดว่า UPS ตัวเดียวแทนที่ Generator ได้ในไฟดับหลายวัน',
    relatedLessonIds: ['L3-07'],
    tags: ['power', 'ups', 'generators', 'availability']
  },
  {
    id: 'Q3-048',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'After updating its business continuity and disaster recovery plan, a municipal agency wants IT, legal, communications, and executive stakeholders to walk through their emergency roles, contact lists, and escalation decisions together in a conference room with minimal cost and zero risk of disrupting live systems. Which testing method is MOST appropriate?',
    promptTh:
      'หลังจากปรับปรุงแผนความต่อเนื่องทางธุรกิจและการกู้คืนภัยพิบัติ หน่วยงานเทศบาลต้องการให้ฝ่ายไอที ฝ่ายกฎหมาย ฝ่ายสื่อสารองค์กร และผู้บริหารมาร่วมทบทวนบทบาทฉุกเฉิน รายชื่อผู้ติดต่อ และขั้นตอนการตัดสินใจส่งต่อเหตุการณ์ในห้องประชุมร่วมกันด้วยต้นทุนต่ำที่สุดและไม่มีความเสี่ยงต่อระบบที่ใช้งานจริง ควรเลือกวิธีการทดสอบใด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Tabletop exercise',
        textTh: 'Tabletop exercise'
      },
      {
        id: 'c2',
        textEn: 'Failover testing',
        textTh: 'Failover testing'
      },
      {
        id: 'c3',
        textEn: 'Parallel processing',
        textTh: 'Parallel processing'
      },
      {
        id: 'c4',
        textEn: 'Simulation in an isolated lab enclave',
        textTh: 'Simulation ในพื้นที่ทดสอบแยกต่างหาก'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      '**Tabletop exercise** เหมาะสมที่สุดเพราะเป็นการฝึกซ้อมเชิงอภิปรายบนเอกสารร่วมกันระหว่างผู้มีส่วนได้ส่วนเสียหลายฝ่ายในห้องประชุม ใช้ต้นทุนต่ำมากและไม่กระทบระบบที่ใช้งานจริง 100% จึงช่วยตรวจสอบช่องว่างด้านบทบาท รายชื่อผู้ติดต่อ และขั้นตอนการส่งต่อเหตุการณ์ก่อนขยับไปซ้อมทางเทคนิค',
    choiceRationales: {
      c1: 'ถูกต้อง: Tabletop exercise เป็นการซ้อมแผนในห้องประชุมเพื่อทวนขั้นตอน การประสานงาน และอำนาจตัดสินใจโดยไม่แตะต้องระบบจริง',
      c2: 'ไม่ถูกต้อง: Failover testing เป็นการสลับทราฟฟิกจากระบบหลักไปยังระบบสำรองจริง ซึ่งเสี่ยงกระทบระบบบริการสาธารณะและใช้ทรัพยากรมากกว่า จึงเหมาะกับขั้นตอนหลังตรวจสอบความพร้อมแล้วในช่วง Maintenance window',
      c3: 'ไม่ถูกต้อง: Parallel processing เป็นการเดินระบบสำรองคู่ขนานกับระบบหลักเพื่อเทียบความถูกต้องของธุรกรรมซึ่งสิ้นเปลืองทรัพยากรสูง จึงเหมาะกับการทดสอบระบบประมวลผลคู่ขนานมากกว่าการซ้อมบทบาทข้ามฝ่ายในห้องประชุม',
      c4: 'ไม่ถูกต้อง: Simulation เป็นการลงมือฝึกปฏิบัติการเทคนิคตามเหตุการณ์จำลองซึ่งมีต้นทุนและแรงงานมากกว่าการพูดคุย จึงเหมาะกับขั้นถัดไปเมื่อต้องการทดสอบทีมปฏิบัติการและสคริปต์กู้คืนในพื้นที่แยก'
    },
    misconceptionTh:
      'ผู้เรียนมักมองว่า Tabletop exercise เป็นการทดสอบทางเทคนิคที่มีการรันสคริปต์จริง ทั้งที่เป็นการซ้อมเชิงพูดคุยตรวจสอบแผน บทบาท และช่องทางการสื่อสาร',
    relatedLessonIds: ['L3-08', 'L4-11'],
    tags: ['resilience-testing', 'tabletop-exercise', 'dr-testing']
  },
  {
    id: 'Q3-049',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'Having already completed a discussion-based review of its recovery playbook, a healthcare IT team wants engineers to perform hands-on technical execution—restoring encrypted patient databases from offsite backups inside an isolated test enclave and verifying script timings—under a realistic outage scenario without affecting live clinical traffic. Which testing approach BEST matches this stage?',
    promptTh:
      'หลังจากเสร็จสิ้นการซ้อมทบทวนแผนกู้คืนด้วยการอภิปรายบนเอกสารแล้ว ทีมไอทีด้านสุขภาพต้องการให้วิศวกรลงมือปฏิบัติจริงทางเทคนิค เช่น การกู้คืนฐานข้อมูลผู้ป่วยที่เข้ารหัสจาก Backup นอกสถานที่ลงในพื้นที่ทดสอบแยกต่างหากและจับเวลาสคริปต์ภายใต้สถานการณ์จำลองเหตุขัดข้องโดยไม่กระทบการรับส่งข้อมูลคลินิกจริง แนวทางการทดสอบใดสอดคล้องกับขั้นตอนนี้มากที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Tabletop exercise',
        textTh: 'Tabletop exercise'
      },
      {
        id: 'c2',
        textEn: 'Live failover testing',
        textTh: 'Live failover testing'
      },
      {
        id: 'c3',
        textEn: 'Parallel processing on live clinical workloads',
        textTh: 'Parallel processing บนภาระงานคลินิกจริง'
      },
      {
        id: 'c4',
        textEn: 'Simulation',
        textTh: 'Simulation'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      '**Simulation** สอดคล้องกับขั้นตอนนี้มากที่สุด เพราะทีมงานผ่านการซ้อมแบบ Tabletop มาแล้วและต้องการให้วิศวกรลงมือปฏิบัติทางเทคนิคจริงในการกู้คืนฐานข้อมูลจาก Backup และจับเวลาสคริปต์ภายใต้สถานการณ์จำลองในสภาพแวดล้อมทดสอบแยกต่างหาก (Isolated enclave) โดยไม่กระทบการรับส่งข้อมูลคลินิกจริง',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Tabletop exercise เป็นเพียงการพูดคุยไล่ขั้นตอนบนกระดาษ ไม่ได้ลงมือรันคำสั่งกู้คืนฐานข้อมูลจริง จึงเหมาะกับการซ้อมขั้นต้นก่อนลงมือปฏิบัติ',
      c2: 'ไม่ถูกต้อง: Live failover testing มีการสลับทราฟฟิกจริงจากระบบหลักไปยัง DR site ซึ่งเสี่ยงกระทบงานคลินิกจริง จึงเหมาะเมื่อผ่านการทดสอบย่อยแล้วและต้องวัด RTO จริงในช่วง Maintenance window',
      c3: 'ไม่ถูกต้อง: Parallel processing ต้องส่งข้อมูลธุรกรรมจริงของคลินิกไปประมวลผลคู่ขนานบนระบบสำรองด้วยทรัพยากรเต็มรูปแบบ ไม่ใช่การฝึกกู้ Backup ลงใน Sandbox แยก จึงเหมาะเมื่อต้องการตรวจเทียบความถูกต้องของธุรกรรมโดยไม่ตัดบริการหลัก',
      c4: 'ถูกต้อง: Simulation เปิดโอกาสให้ทีมปฏิบัติการลงมือแก้ปัญหาและกู้คืนข้อมูลตามสถานการณ์จำลองในขอบเขตที่ควบคุมได้เพื่อพิสูจน์ขั้นตอนและสคริปต์ทางเทคนิค'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนจำสับสนระหว่าง Tabletop กับ Simulation โดยคิดว่า Simulation เป็นแค่การนั่งคุยจำลองเหตุการณ์ ทั้งที่ Simulation เน้นการลงมือปฏิบัติในสถานการณ์จำลอง',
    relatedLessonIds: ['L3-08', 'L4-11'],
    tags: ['resilience-testing', 'simulation', 'backup-restore']
  },
  {
    id: 'Q3-050',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'A clearing bank has modernized its secondary processing center and needs proof that the DR site’s billing engine handles live financial transactions with exact output parity and adequate throughput—while strictly prohibiting any interruption or cutover of live customer traffic from the primary site. Which testing methodology BEST satisfies this constraint?',
    promptTh:
      'ธนาคารหักบัญชีแห่งหนึ่งปรับปรุงศูนย์ประมวลผลสำรองเสร็จสิ้นและต้องการหลักฐานยืนยันว่าแอปพลิเคชันประมวลผลรายการบน DR site สามารถจัดการธุรกรรมทางการเงินจริงได้ผลลัพธ์ตรงกัน 100% และรองรับปริมาณงานเพียงพอ โดยมีเงื่อนไขห้ามตัดการเชื่อมต่อหรือสลับทราฟฟิกผู้ใช้จากระบบหลักโดยเด็ดขาด ควรเลือกวิธีการทดสอบใดจึงจะตอบโจทย์นี้ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Full failover testing during operating hours',
        textTh: 'Full failover testing ในระหว่างเวลาทำการ'
      },
      {
        id: 'c2',
        textEn: 'Parallel processing',
        textTh: 'Parallel processing'
      },
      {
        id: 'c3',
        textEn: 'Tabletop walkthrough',
        textTh: 'Tabletop walkthrough'
      },
      {
        id: 'c4',
        textEn: 'Cold site infrastructure inspection',
        textTh: 'การตรวจสภาพโครงสร้างพื้นฐาน Cold site'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      '**Parallel processing** ตอบโจทย์ที่สุดเพราะเป็นวิธีที่เดินระบบประมวลผลสำรองควบคู่กับระบบหลักที่ยังคงให้บริการลูกค้าอยู่ตามปกติ โดยส่งข้อมูลธุรกรรมจริงไปประมวลผลเทียบความถูกต้องของผลลัพธ์และความจุพร้อมกันทั้งสองฝั่งโดยไม่มีความเสี่ยงเกิด Downtime จากการสลับทราฟฟิก',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Full failover testing ต้องตัดสลับทราฟฟิกจริงออกจากระบบหลักซึ่งฝ่าฝืนเงื่อนไขห้ามตัดบริการ Failover testing เหมาะใช้ในขั้นสุดท้ายช่วง Maintenance window เพื่อวัด RTO จริง',
      c2: 'ถูกต้อง: Parallel processing ประมวลผลธุรกรรมเทียบผลลัพธ์ระหว่างระบบหลักและระบบสำรองพร้อมกันโดยไม่ขัดจังหวะการให้บริการลูกค้าฝั่งหลัก',
      c3: 'ไม่ถูกต้อง: Tabletop walkthrough ไม่ได้เดินระบบซอฟต์แวร์จริงจึงพิสูจน์ไม่ได้ว่าผลลัพธ์ธุรกรรมตรงกันหรือไม่ เหมาะสำหรับทบทวนบทบาทและความเข้าใจของทีมงาน',
      c4: 'ไม่ถูกต้อง: การตรวจสภาพ Cold site ดูได้เพียงไฟฟ้าและระบบแอร์ของอาคารเปล่า ไม่สามารถรันทดสอบความถูกต้องของธุรกรรมทางการเงินได้ จึงเหมาะกับการตรวจความพร้อมทางกายภาพของศูนย์สำรองแบบอาคารเปล่า'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนระหว่าง Parallel processing (เดินคู่ขนานเทียบผลโดยไม่ตัดบริการหลัก) กับ Failover testing (ตัดสลับทราฟฟิกจริงเพื่อวัด RTO)',
    relatedLessonIds: ['L3-08', 'L5-03'],
    tags: ['resilience-testing', 'parallel-processing', 'failover-testing']
  },
  {
    id: 'Q3-051',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A database administrator executes a Full backup every Sunday at 02:00. Management specifies that Monday-through-Saturday nightly backups should avoid copying the entire database each night, while ensuring that recovering from a Friday morning failure requires ONLY Sunday’s Full backup plus Thursday night’s single backup set to minimize restore steps. Which nightly backup type should be configured Monday through Saturday?',
    promptTh:
      'ผู้ดูแลฐานข้อมูลทำการ Full backup ทุกวันอาทิตย์เวลา 02:00 น. ฝ่ายบริหารกำหนดให้การสำรองข้อมูลคืนวันจันทร์ถึงวันเสาร์หลีกเลี่ยงการคัดลอกฐานข้อมูลทั้งหมดทุกคืน แต่ต้องมั่นใจว่าหากระบบล่มในเช้าวันศุกร์ การกู้คืนต้องใช้เพียงชุด Full backup ของวันอาทิตย์ร่วมกับชุดสำรองของคืนวันพฤหัสบดีอีกเพียงชุดเดียวเพื่อลดขั้นตอนการกู้คืน ควรตั้งค่าการสำรองข้อมูลรายคืนวันจันทร์ถึงเสาร์เป็นแบบใด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Incremental backup',
        textTh: 'Incremental backup'
      },
      {
        id: 'c2',
        textEn: 'Full backup',
        textTh: 'Full backup'
      },
      {
        id: 'c3',
        textEn: 'Differential backup',
        textTh: 'Differential backup'
      },
      {
        id: 'c4',
        textEn: 'Local VM snapshot',
        textTh: 'Local VM snapshot'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      '**Differential backup** ตอบโจทย์เงื่อนไขทั้งสองข้อเพราะบันทึกข้อมูลที่เปลี่ยนแปลงทั้งหมดสะสมนับตั้งแต่ Full backup ครั้งล่าสุด (วันอาทิตย์) ดังนั้นในการกู้คืนเช้าวันศุกร์จึงใช้เพียง Full backup ของวันอาทิตย์ร่วมกับ Differential backup ของคืนวันพฤหัสบดีรวม 2 ชุดเท่านั้น ต่างจาก Incremental ที่ต้องไล่กู้ครบทุกวันตั้งแต่วันจันทร์ถึงพฤหัสบดี',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Incremental backup เก็บเฉพาะส่วนต่างจากการ Backup ล่าสุดทุกประเภท ทำให้เวลา Restore วันศุกร์ต้องใช้ Full วันอาทิตย์บวก Incremental ของวันจันทร์ อังคาร พุธ และพฤหัสบดีครบทั้งหมด (เหมาะเมื่อเน้นความเร็วในการสำรองและประหยัดพื้นที่สูงสุด)',
      c2: 'ไม่ถูกต้อง: การทำ Full backup ทุกคืนขัดต่อข้อกำหนดที่ต้องการหลีกเลี่ยงการคัดลอกทั้งฐานข้อมูลทุกวัน Full backup ใช้เฉพาะวันอาทิตย์หรือกรณีที่ต้องการกู้คืนด้วยชุดเดียวจบและมีเวลา/พื้นที่เหลือเฟือ',
      c3: 'ถูกต้อง: Differential backup สะสมการเปลี่ยนแปลงทั้งหมดนับจาก Full ล่าสุด ทำให้การกู้คืนใช้เพียง Full ล่าสุด + Differential ชุดล่าสุดเพียง 2 ชุด',
      c4: 'ไม่ถูกต้อง: Local VM snapshot พึ่งพาสตอเรจหลักเดิมและไม่ใช่รูปแบบรอบความถี่ Backup อิสระ Snapshots เหมาะกับการย้อนสถานะเครื่องอย่างรวดเร็วชั่วคราวก่อนอัปเดตหรือลงแพตช์'
    },
    misconceptionTh:
      'ผู้เรียนมักจำสลับกันระหว่าง Incremental และ Differential ในเรื่องจำนวนชุดข้อมูลที่ต้องใช้ตอนกู้คืน (Incremental ใช้ครบทุกชุดหลัง Full ส่วน Differential ใช้แค่ Full + ชุดล่าสุดชุดเดียว)',
    relatedLessonIds: ['L3-08'],
    tags: ['backup-frequency', 'differential-backup', 'incremental-backup']
  },
  {
    id: 'Q3-052',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'A SaaS provider encrypts its nightly PostgreSQL backups using AES-256 and uploads them to an offsite cloud object store. To simplify backup scripts, an engineer keeps the decryption key file inside the primary database server’s local configuration directory. After ransomware encrypts the primary server and wipes local volumes, engineers discover they cannot decrypt the intact offsite backups. What architectural flaw caused this recovery failure?',
    promptTh:
      'ผู้ให้บริการ SaaS เข้ารหัสไฟล์ Backup ของ PostgreSQL รายคืนด้วย AES-256 แล้วอัปโหลดไปเก็บยัง Object storage บนคลาวด์นอกสถานที่ เพื่อความสะดวกในการเขียนสคริปต์ วิศวกรจึงเก็บไฟล์กุญแจถอดรหัสไว้ในโฟลเดอร์ตั้งค่าภายในเซิร์ฟเวอร์ฐานข้อมูลหลัก เมื่อมัลแวร์ Ransomware เข้ารหัสเซิร์ฟเวอร์หลักและลบโวลุ่มภายในทั้งหมด ทีมงานพบว่าไม่สามารถถอดรหัสไฟล์สำรองนอกสถานที่ที่ยังสมบูรณ์อยู่ได้ จุดบกพร่องเชิงสถาปัตยกรรมใดเป็นสาเหตุของความล้มเหลวในการกู้คืนนี้?',
    choices: [
      {
        id: 'c1',
        textEn: 'Storing backup encryption keys within the same failure domain as the protected production host instead of isolating keys in an independent KMS or vault',
        textTh: 'การเก็บกุญแจเข้ารหัส Backup ไว้ในขอบเขตความเสี่ยงเดียวกับเซิร์ฟเวอร์หลักแทนที่จะแยกเก็บใน KMS หรือคลังอิสระ'
      },
      {
        id: 'c2',
        textEn: 'Uploading encrypted backup archives to an offsite cloud bucket instead of retaining them exclusively onsite',
        textTh: 'การอัปโหลดไฟล์ Backup ที่เข้ารหัสไปยัง Cloud bucket นอกสถานที่แทนที่จะเก็บไว้ในอาคารเดิมทั้งหมด'
      },
      {
        id: 'c3',
        textEn: 'Using AES-256 encryption on backup files rather than leaving offsite archives unencrypted for emergency access',
        textTh: 'การใช้การเข้ารหัส AES-256 กับไฟล์สำรองแทนที่จะเก็บเป็น Plaintext เพื่อความสะดวกในการกู้คืนฉุกเฉิน'
      },
      {
        id: 'c4',
        textEn: 'Enforcing TLS encryption while transmitting backup archives to the offsite cloud storage bucket',
        textTh: 'การบังคับใช้การเข้ารหัส TLS ระหว่างส่งไฟล์ Backup ไปยัง Cloud storage นอกสถานที่'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'ความล้มเหลวเกิดจาก**การเก็บกุญแจเข้ารหัส Backup ไว้ในขอบเขตความเสี่ยงเดียวกับเซิร์ฟเวอร์หลัก** แม้จะมี Offsite encrypted backup แล้ว แต่การวางคีย์ถอดรหัสไว้บนโฮสต์ Production ทำให้คีย์ถูก Ransomware เข้ารหัสหรือลบทิ้งไปพร้อมกับเครื่องหลัก ตามหลัก Backup Encryption ต้องแยกเก็บคีย์ไว้ต่างหากใน KMS, HSM หรือคลังอิสระและทดสอบการกู้คืนคีย์สม่ำเสมอ',
    choiceRationales: {
      c1: 'ถูกต้อง: กุญแจถอดรหัสไฟล์ Backup ต้องแยกเก็บคนละขอบเขตความล้มเหลวกับเซิร์ฟเวอร์ต้นทาง เพื่อไม่ให้สูญหายหรือถูกเข้ารหัสพร้อมระบบหลัก',
      c2: 'ไม่ถูกต้อง: การเก็บ Offsite backup เป็นแนวปฏิบัติที่ถูกต้องตามกฎ 3-2-1 เพื่อหนีภัยพิบัติและ Ransomware ภายในอาคาร ปัญหาเกิดจากการวางคีย์ผิดที่ (Onsite อย่างเดียวเสี่ยงพังพร้อมอาคารหลัก)',
      c3: 'ไม่ถูกต้อง: การเลิกเข้ารหัส Backup จะทำให้ข้อมูลทั้งองค์กรเสี่ยงรั่วไหลหาก Cloud bucket ถูกตั้งค่าผิดหรือถูกขโมยสื่อ การไม่เข้ารหัสจะยอมรับได้เฉพาะข้อมูลสาธารณะที่ไม่มีความลับเลยเท่านั้น',
      c4: 'ไม่ถูกต้อง: TLS ช่วยปกป้องไฟล์ Backup ขณะส่งผ่านเครือข่าย (Data in transit) ซึ่งเป็นสิ่งที่ถูกต้องและเหมาะกับการคุ้มครองข้อมูลระหว่างอัปโหลดข้ามอินเทอร์เน็ต แต่ไม่ได้แก้ปัญหาความล้มเหลวในการเก็บคีย์ถอดรหัส'
    },
    misconceptionTh:
      'ผู้เรียนมักเน้นเพียงว่าต้องเปิด Backup Encryption โดยลืมพิจารณาตำแหน่งการจัดเก็บ Encryption Key ว่าต้องแยกออกจากเซิร์ฟเวอร์ที่กำลังสำรองข้อมูลอย่างเด็ดขาด',
    relatedLessonIds: ['L3-08', 'L1-06'],
    tags: ['backup-encryption', 'offsite-backup', 'key-management']
  },
  {
    id: 'Q3-053',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.4'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'exam-ready',
    promptEn:
      'A logistics company relies exclusively on hourly SAN snapshots and continuous asynchronous replication to a secondary facility. During a cyberattack, adversaries compromise a domain administrator account, delete all SAN snapshots, and encrypt primary file shares; within minutes, the encrypted files replicate over and overwrite clean copies at the secondary site. Which TWO backup controls BEST ensure recoverable clean data in a repeat ransomware attack? (Choose two.)',
    promptTh:
      'บริษัทโลจิสติกส์แห่งหนึ่งพึ่งพาเพียง SAN Snapshot รายชั่วโมงและการทำ Asynchronous replication ต่อเนื่องไปยังศูนย์สำรองเพียงอย่างเดียว ระหว่างการโจมตีทางไซเบอร์ ผู้โจมตีเข้ายึดบัญชีผู้ดูแลโดเมน สั่งลบ SAN Snapshot ทั้งหมด และเข้ารหัสไฟล์แชร์หลัก ซึ่งภายในไม่กี่นาทีไฟล์ที่ถูกเข้ารหัสก็ถูก Replicate ไปทับสำเนาสะอาดที่ศูนย์สำรองทันที มาตรการสำรองข้อมูลใด 2 ข้อต่อไปนี้ช่วยรับประกันว่าจะยังมีข้อมูลสะอาดสำหรับกู้คืนเมื่อเกิดการโจมตี Ransomware ซ้ำได้ดีที่สุด? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Switching from asynchronous replication to synchronous replication between both storage arrays',
        textTh: 'เปลี่ยนจาก Asynchronous replication เป็น Synchronous replication ระหว่างอุปกรณ์จัดเก็บทั้งสองศูนย์'
      },
      {
        id: 'c2',
        textEn: 'Deploying offsite immutable backups governed by isolated credentials outside the primary identity domain',
        textTh: 'ใช้งาน Immutable backup นอกสถานที่ซึ่งควบคุมด้วยข้อมูลประจำตัวที่แยกอิสระจากโดเมนหลัก'
      },
      {
        id: 'c3',
        textEn: 'Increasing local SAN snapshot frequency from hourly to every 10 minutes on the same pool',
        textTh: 'เพิ่มความถี่การถ่าย SAN snapshot ภายในเป็นทุก 10 นาทีบน Storage pool เดิม'
      },
      {
        id: 'c4',
        textEn: 'Disabling encryption on backup volumes so administrators can inspect files faster',
        textTh: 'ปิดการเข้ารหัสบนโวลุ่มสำรองข้อมูลเพื่อให้ผู้ดูแลระบบตรวจสอบไฟล์ได้เร็วขึ้น'
      },
      {
        id: 'c5',
        textEn: 'Maintaining offline (air-gapped) backup copies verified periodically through isolated restore tests',
        textTh: 'จัดเก็บสำเนา Offline (Air-gapped) ที่ตัดขาดจากเครือข่ายพร้อมทดสอบการกู้คืนในพื้นที่แยกเป็นระยะ'
      }
    ],
    correctChoiceIds: ['c2', 'c5'],
    explanationTh:
      'เหตุการณ์นี้พิสูจน์ว่าทั้ง Snapshot และ Replication ไม่สามารถทดแทน Backup ที่ทนทานต่อ Ransomware ได้ เนื่องจากผู้โจมตีที่ยึดสิทธิ์โดเมนสามารถลบ Snapshot และ Replication ก็จะส่งต่อไฟล์ที่ถูกเข้ารหัสไปทับสำเนาฝั่งสำรองทันที จึงต้องเสริมด้วย **Immutable backup นอกสถานที่ที่ควบคุมด้วยข้อมูลประจำตัวแยกอิสระจากโดเมนหลัก** และ **สำเนา Offline (Air-gapped) ที่ตัดขาดจากเครือข่ายพร้อมทดสอบการกู้คืนเป็นระยะ**',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Synchronous replication ยิ่งส่งต่อการเข้ารหัสและการลบไฟล์จาก Ransomware ไปยังศูนย์สำรองแบบทันทีทันใดกว่าเดิม Synchronous replication ใช้เมื่อต้องการ RPO=0 สำหรับความพร้อมใช้งานระดับฮาร์ดแวร์ ไม่ใช่การกันมัลแวร์',
      c2: 'ถูกต้อง: Immutable (WORM) backups ป้องกันการแก้ไขหรือลบก่อนครบกำหนดเวลา และการใช้สิทธิ์แยกจาก Active Directory หลักกันไม่ให้บัญชีโดเมนที่ถูกยึดสั่งทำลาย Backup ได้',
      c3: 'ไม่ถูกต้อง: การถ่าย Snapshot ถี่ขึ้นบน Storage pool เดิมยังคงถูกลบทิ้งพร้อมกันหมดเมื่อผู้โจมตียึดสิทธิ์ผู้ดูแล Storage ได้ Snapshots เหมาะกับการ Rollback การเปลี่ยนแปลงระบบตามรอบปกติ',
      c4: 'ไม่ถูกต้อง: การปิด Encryption เพิ่มความเสี่ยงข้อมูลรั่วไหลโดยไม่ได้ป้องกันไม่ให้ Ransomware เข้ารหัสหรือลบไฟล์ การไม่เข้ารหัสจะพิจารณาได้เฉพาะข้อมูล Public ที่ไม่เป็นความลับเท่านั้น',
      c5: 'ถูกต้อง: Offline / air-gapped backups ที่ไม่ได้เชื่อมต่อออนไลน์ตลอดเวลาไม่สามารถถูกมัลแวร์บนเครือข่ายเข้าถึงได้ และการทดสอบ Restore ยืนยันความพร้อมใช้งานจริง'
    },
    misconceptionTh:
      'ผู้ดูแลระบบมักเข้าใจผิดว่าการมี Snapshot และ Replication ถือว่ามี Backup ครบถ้วนแล้ว ทั้งที่ทั้งสองกลไกไม่ได้ป้องกันการทำลายข้อมูลเชิงตรรกะหรือ Ransomware',
    relatedLessonIds: ['L3-08', 'L2-06'],
    tags: ['snapshots', 'replication', 'immutable-backup', 'air-gapped-backup', 'ransomware']
  },
  {
    id: 'Q3-054',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A high-volume banking ledger server experiences an abrupt hardware halt mid-transaction while updating customer balances across several tables. Upon reboot, the database engine automatically reads a sequential write-ahead transaction log to undo incomplete uncommitted writes and replay verified commits, restoring internal consistency within seconds without loading a nightly backup. Which mechanism enabled this rapid consistency recovery?',
    promptTh:
      'เซิร์ฟเวอร์บัญชีแยกประเภทธนาคารที่มีปริมาณธุรกรรมสูงเกิดอาการฮาร์ดแวร์หยุดทำงานกะทันหันกลางคันขณะที่กำลังอัปเดตยอดคงเหลือลูกค้าข้ามหลายตาราง เมื่อระบบรีบูตขึ้นมา Database engine อ่านบันทึกธุรกรรมต่อเนื่องแบบ Write-ahead โดยอัตโนมัติเพื่อย้อนรายการที่เขียนไม่สมบูรณ์และทวนซ้ำรายการที่ยืนยันแล้ว ส่งผลให้ข้อมูลกลับมาสอดคล้องสมบูรณ์ภายในไม่กี่วินาทีโดยไม่ต้องโหลด Backup รายคืน กลไกใดที่ทำให้การฟื้นฟูความสอดคล้องรวดเร็วนี้เกิดขึ้นได้?',
    choices: [
      {
        id: 'c1',
        textEn: 'Asynchronous replication',
        textTh: 'Asynchronous replication'
      },
      {
        id: 'c2',
        textEn: 'Differential backup restoration',
        textTh: 'Differential backup restoration'
      },
      {
        id: 'c3',
        textEn: 'Journaling',
        textTh: 'Journaling'
      },
      {
        id: 'c4',
        textEn: 'Cold site failover',
        textTh: 'Cold site failover'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      '**Journaling** คือกลไก Write-ahead transaction log ที่บันทึกการเปลี่ยนแปลงก่อนหรือพร้อมกับการเขียนลงฐานข้อมูลหรือระบบไฟล์ เมื่อระบบรีบูตหลังเหตุขัดข้อง กลไกนี้จะตรวจสอบสถานะธุรกรรมที่ค้างกลางคันเพื่อ Rollback รายการที่ไม่สมบูรณ์และ Replay รายการที่ยืนยันแล้ว ให้ข้อมูลกลับมาสอดคล้อง (Consistent) ทันทีโดยไม่ต้องโหลด Backup รายคืน',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Asynchronous replication ไม่ได้ใช้สำหรับฟื้นฟูความสอดคล้องของธุรกรรมที่เขียนค้างในระบบไฟล์หรือฐานข้อมูลเดิมหลังเครื่อง Crash แต่เหมาะกับการทำสำเนาข้อมูลข้ามศูนย์ข้อมูลระยะไกลเพื่อรองรับแผน DR โดยยอมรับ RPO เล็กน้อย',
      c2: 'ไม่ถูกต้อง: Differential backup ใช้กู้คืนข้อมูลทั้งหมดจากชุดสำรองล่าสุดเมื่อข้อมูลเสียหายหนักหรือสูญหาย ใช้เวลานานกว่าจึงเหมาะกับการกู้คืนหลังฮาร์ดแวร์พังหรือไฟล์ถูกลบ',
      c3: 'ถูกต้อง: Journaling บันทึกลำดับการเขียนธุรกรรมลง Journal log ทำให้ระบบกู้ความสอดคล้องหลังไฟดับหรือระบบค้างได้ทันทีโดยไม่ต้องกู้ทั้งฐานข้อมูล',
      c4: 'ไม่ถูกต้อง: Cold site failover ใช้เวลาหลายวันหรือหลายสัปดาห์ ไม่ใช่การฟื้นฟูธุรกรรมในเครื่องเดิม แต่เหมาะกับการย้ายไปติดตั้งอุปกรณ์และกู้คืนข้อมูลยังอาคารสำรองเมื่อศูนย์หลักเสียหายหนัก'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนเข้าใจว่า Journaling เป็นรูปแบบหนึ่งของ Backup เต็มระบบที่ใช้แทน Offsite backup ได้ ทั้งที่ Journaling ช่วยเรื่อง Transaction consistency และ Point-in-time recovery ควบคู่กับ Backup หลักเท่านั้น',
    relatedLessonIds: ['L3-08'],
    tags: ['journaling', 'consistency', 'point-in-time-recovery', 'backups']
  }
];
