import type { PbqQuestion } from '../../types';

export const PBQ_D3: PbqQuestion[] = [
  {
    id: 'PBQ-D3-01',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    difficulty: 'intermediate',
    titleEn: 'Enterprise Perimeter & DMZ Security Placement',
    titleTh: 'การวางตำแหน่งอุปกรณ์ความปลอดภัยใน Perimeter และ DMZ',
    scenarioEn:
      'An architect is segmenting a corporate network into untrusted internet, DMZ, and internal zones. Place the appropriate security appliance into each of the four topology slots.',
    scenarioTh:
      'สถาปนิกเครือข่ายกำลังแบ่งโซนความปลอดภัยระหว่างอินเทอร์เน็ต โซน DMZ และเครือข่ายภายในองค์กร จงเลือกอุปกรณ์ความปลอดภัยให้เหมาะสมกับตำแหน่งทั้ง 4 บนแผนภาพ',
    instructionsEn: 'Select the best matching network security appliance for each topology slot.',
    instructionsTh: 'เลือกอุปกรณ์ป้องกันเครือข่ายที่สอดคล้องกับบทบาทของแต่ละตำแหน่ง',
    config: {
      template: 'architecture-configurator',
      diagramTitle: 'Perimeter, DMZ & Internal Network Zone Placement',
      diagramType: 'perimeter-dmz',
      slots: [
        {
          id: 's1',
          zoneLabelEn: 'Slot A: Inline Perimeter Threat Prevention',
          zoneLabelTh: 'ตำแหน่ง A: จุดตรวจจับและบล็อกภัยคุกคามขอบเครือข่าย',
          roleHintEn: 'Inspects and blocks unauthorized traffic inline at the network edge',
          roleHintTh: 'ตรวจสอบและสกัดกั้นทราฟฟิกอันตรายแบบ Inline บริเวณขอบเครือข่าย',
          expectedOptionId: 'ngfw-ips'
        },
        {
          id: 's2',
          zoneLabelEn: 'Slot B: Public Web Application Filtering',
          zoneLabelTh: 'ตำแหน่ง B: จุดกรองคำขอ HTTP/HTTPS หน้าเว็บเซิร์ฟเวอร์ใน DMZ',
          roleHintEn: 'Protects Layer 7 web services from application-layer attacks',
          roleHintTh: 'ป้องกันบริการเว็บ Layer 7 จากการโจมตีระดับแอปพลิเคชัน',
          expectedOptionId: 'waf'
        },
        {
          id: 's3',
          zoneLabelEn: 'Slot C: Privileged Administrative Access Point',
          zoneLabelTh: 'ตำแหน่ง C: เครื่องตัวกลางสำหรับผู้ดูแลระบบเข้าจัดการเซิร์ฟเวอร์',
          roleHintEn: 'Hardened intermediary host mediating privileged administrative management sessions',
          roleHintTh: 'โฮสต์ตัวกลางที่เสริมแกร่งแล้วสำหรับควบคุมเซสชันการดูแลระบบ',
          expectedOptionId: 'jump-server'
        },
        {
          id: 's4',
          zoneLabelEn: 'Slot D: Outbound Client Web Mediation',
          zoneLabelTh: 'ตำแหน่ง D: ตัวกลางควบคุมการเข้าถึงเว็บขาออกของพนักงาน',
          roleHintEn: "Filters internal users' outbound HTTP/HTTPS requests by URL policy",
          roleHintTh: 'กลั่นกรองคำขอเว็บขาออกของผู้ใช้ภายในตามนโยบาย URL',
          expectedOptionId: 'forward-proxy'
        }
      ],
      options: [
        {
          id: 'ngfw-ips',
          labelEn: 'NGFW / Inline IPS',
          labelTh: 'NGFW / Inline IPS'
        },
        {
          id: 'waf',
          labelEn: 'Web Application Firewall (WAF)',
          labelTh: 'WAF (Web Application Firewall)'
        },
        {
          id: 'jump-server',
          labelEn: 'Jump Server (Bastion Host)',
          labelTh: 'Jump Server (Bastion Host)'
        },
        {
          id: 'forward-proxy',
          labelEn: 'Forward Proxy Server',
          labelTh: 'Forward Proxy Server'
        },
        {
          id: 'network-tap',
          labelEn: 'Passive Network TAP / IDS',
          labelTh: 'Passive Network TAP / IDS'
        }
      ]
    },
    rubric: [
      { id: 's1', descriptionTh: 'วาง NGFW / Inline IPS ที่ขอบเครือข่ายถูกต้อง', weight: 0.25 },
      { id: 's2', descriptionTh: 'วาง WAF หน้าบริการเว็บใน DMZ ถูกต้อง', weight: 0.25 },
      { id: 's3', descriptionTh: 'วาง Jump Server สำหรับผู้ดูแลระบบถูกต้อง', weight: 0.25 },
      { id: 's4', descriptionTh: 'วาง Forward Proxy สำหรับทราฟฟิกเว็บขาออกถูกต้อง', weight: 0.25 }
    ],
    explanationTh:
      'การออกแบบโซนเครือข่ายที่มั่นคงต้องวางอุปกรณ์ควบคุมตามทิศทางทราฟฟิกและระดับเลเยอร์ที่ตรวจสอบ โดยแยกการป้องกันขอบเครือข่าย การกรองเว็บแอปพลิเคชันขาเข้า การจำกัดทางผ่านผู้ดูแลระบบ และการควบคุมการออกเว็บของผู้ใช้ภายในออกจากกันอย่างชัดเจน',
    misconceptionTh:
      'มักสับสนระหว่างการวางอุปกรณ์ตรวจจับแบบ Passive TAP/IDS ที่เพียงเฝ้าระวัง กับอุปกรณ์แบบ Inline ที่สามารถสกัดกั้นทราฟฟิกได้ทันที',
    relatedLessonIds: ['L3-03', 'L3-04'],
    tags: ['pbq', 'perimeter', 'dmz', 'objective-3.2']
  },
  {
    id: 'PBQ-D3-02',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.3'],
    difficulty: 'intermediate',
    titleEn: 'Data Classification & State Protection Matrix',
    titleTh: 'การจับคู่กลยุทธ์ปกป้องข้อมูลตามประเภทและสถานะของข้อมูล',
    scenarioEn:
      'A data governance team must secure four organizational datasets across different data states and sensitivity classifications. Match each dataset scenario to the most effective protection strategy.',
    scenarioTh:
      'ทีมกำกับดูแลข้อมูลต้องกำหนดมาตรการปกป้องชุดข้อมูล 4 ประเภทที่มีระดับชั้นความลับและสถานะข้อมูลแตกต่างกัน จงจับคู่แต่ละชุดข้อมูลกับกลยุทธ์ปกป้องข้อมูลที่เหมาะสมที่สุด',
    instructionsEn: 'Select the best matching data protection strategy for each scenario.',
    instructionsTh: 'เลือกกลยุทธ์หรือระดับการปกป้องข้อมูลที่สอดคล้องกับแต่ละสถานการณ์',
    config: {
      template: 'matching-matrix',
      rows: [
        {
          id: 'r1',
          promptEn: 'Regulated patient health records (PHI) archived in cloud object storage (Data at Rest)',
          promptTh: 'ข้อมูลสุขภาพผู้ป่วยภายใต้ข้อกำกับ (PHI) ที่จัดเก็บในคลังคลาวด์ระยะยาว (At Rest)'
        },
        {
          id: 'r2',
          promptEn: 'Payment card primary account numbers (PAN) referenced in billing analytics without exposing raw digits',
          promptTh: 'หมายเลขบัตรชำระเงิน (PAN) ที่ระบบวิเคราะห์ใช้งานโดยไม่เปิดเผยเลขบัตรจริง'
        },
        {
          id: 'r3',
          promptEn: 'Proprietary R&D trade secret formula transferred between engineering enclaves (Data in Transit)',
          promptTh: 'สูตรวิจัยลับทางการค้าที่ส่งผ่านระหว่างหน่วยงานวิจัยและวิศวกรรม (In Transit)'
        },
        {
          id: 'r4',
          promptEn: 'Approved corporate marketing brochure hosted on the public website',
          promptTh: 'โบรชัวร์ประชาสัมพันธ์ผลิตภัณฑ์ที่ได้รับอนุมัติเผยแพร่บนเว็บไซต์สาธารณะ'
        }
      ],
      options: [
        {
          id: 'aes-kms',
          labelEn: 'AES-256 Encryption + KMS Controls',
          labelTh: 'AES-256 Encryption + KMS'
        },
        {
          id: 'tokenization',
          labelEn: 'Tokenization',
          labelTh: 'Tokenization'
        },
        {
          id: 'tls-access',
          labelEn: 'TLS 1.3 + Access Restrictions',
          labelTh: 'TLS 1.3 + การจำกัดสิทธิ์เข้าถึง'
        },
        {
          id: 'public-class',
          labelEn: 'Public Classification (Integrity Focus)',
          labelTh: 'ระดับชั้น Public (เน้น Integrity)'
        },
        {
          id: 'plaintext-copy',
          labelEn: 'Unencrypted Plaintext Replication',
          labelTh: 'การทำสำเนาแบบไม่เข้ารหัส'
        }
      ],
      expectedMatches: {
        r1: 'aes-kms',
        r2: 'tokenization',
        r3: 'tls-access',
        r4: 'public-class'
      }
    },
    rubric: [
      { id: 'r1', descriptionTh: 'จับคู่ PHI ที่จัดเก็บระยะยาว (At Rest) กับ AES-256 + KMS ถูกต้อง', weight: 0.25 },
      { id: 'r2', descriptionTh: 'จับคู่ PAN ในระบบวิเคราะห์กับ Tokenization ถูกต้อง', weight: 0.25 },
      { id: 'r3', descriptionTh: 'จับคู่ความลับทางการค้าขณะส่งผ่าน (In Transit) กับ TLS 1.3 + Access Restrictions ถูกต้อง', weight: 0.25 },
      { id: 'r4', descriptionTh: 'จับคู่โบรชัวร์สาธารณะกับระดับชั้น Public (เน้น Integrity) ถูกต้อง', weight: 0.25 }
    ],
    explanationTh:
      'การเลือกกลยุทธ์ปกป้องข้อมูลขึ้นอยู่กับระดับความอ่อนไหว ข้อบังคับทางกฎหมาย และสถานะของข้อมูลทั้งขณะจัดเก็บและขณะส่งผ่าน รวมถึงการแยกข้อมูลที่มีความลับต่ำซึ่งยังคงต้องรักษาความถูกต้องครบถ้วนจากการแก้ไขโดยมิชอบ',
    misconceptionTh:
      'ผู้เรียนมักเข้าใจผิดว่าข้อมูลระดับ Public ไม่จำเป็นต้องมีมาตรการควบคุมความปลอดภัยใด ๆ ทั้งที่ยังต้องป้องกันการปลอมแปลงแก้ไข (Integrity)',
    relatedLessonIds: ['L3-05', 'L3-06'],
    tags: ['pbq', 'data-protection', 'classification', 'objective-3.3']
  },
  {
    id: 'PBQ-D3-03',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.4'],
    difficulty: 'exam-ready',
    titleEn: 'Enterprise Resilience & Disaster Recovery Architecture',
    titleTh: 'สถาปัตยกรรมความยืดหยุ่นทางระบบและการกู้คืนภัยพิบัติ',
    scenarioEn:
      'A financial services firm is upgrading its continuity architecture to eliminate single points of failure and meet strict recovery objectives. Assign the appropriate resilience mechanism to each slot.',
    scenarioTh:
      'องค์กรบริการทางการเงินกำลังปรับปรุงสถาปัตยกรรมความต่อเนื่องทางธุรกิจเพื่อลดจุดล้มเหลวเดี่ยวและรองรับเป้าหมายการกู้คืน จงเลือกกลไกความทนทานให้ตรงกับตำแหน่งทั้ง 4 บนแผนภาพ',
    instructionsEn: 'Select the best resilience or disaster recovery control for each architectural slot.',
    instructionsTh: 'เลือกกลไกด้านความพร้อมใช้งานและการกู้คืนระบบที่เหมาะสมสำหรับแต่ละตำแหน่ง',
    config: {
      template: 'architecture-configurator',
      diagramTitle: 'Multi-Site High Availability & Disaster Recovery Stack',
      diagramType: 'resilience-dr',
      slots: [
        {
          id: 's1',
          zoneLabelEn: 'Slot A: Active Application Availability',
          zoneLabelTh: 'ตำแหน่ง A: ความพร้อมใช้งานต่อเนื่องระดับแอปพลิเคชัน',
          roleHintEn: 'Distributes workload across redundant active nodes to prevent single-host outages',
          roleHintTh: 'กระจายภาระงานข้ามโหนดสำรองหลายเครื่องเพื่อลดจุดล้มเหลวเดี่ยว',
          expectedOptionId: 'ha-lb-cluster'
        },
        {
          id: 's2',
          zoneLabelEn: 'Slot B: Regional Continuity Facility',
          zoneLabelTh: 'ตำแหน่ง B: ศูนย์สำรองต่างพื้นที่ทางภูมิศาสตร์',
          roleHintEn: 'Pre-provisioned remote recovery site enabling rapid operational failover',
          roleHintTh: 'ศูนย์สำรองต่างภูมิภาคที่เตรียมพร้อมโครงสร้างไว้รองรับการสลับระบบอย่างรวดเร็ว',
          expectedOptionId: 'warm-hot-site'
        },
        {
          id: 's3',
          zoneLabelEn: 'Slot C: Ransomware-Resistant Recovery Tier',
          zoneLabelTh: 'ตำแหน่ง C: ระบบสำรองข้อมูลที่ป้องกันการแก้ไขและอยู่คนละสถานที่',
          roleHintEn: 'Encrypted backup copies isolated from primary networks and protected by write-once retention locks',
          roleHintTh: 'สำเนาข้อมูลเข้ารหัสที่แยกจากเครือข่ายหลักและล็อกการเขียนทับ (WORM) เพื่อรองรับการกู้คืน',
          expectedOptionId: 'immutable-offsite'
        },
        {
          id: 's4',
          zoneLabelEn: 'Slot D: Facility Power Continuity Layer',
          zoneLabelTh: 'ตำแหน่ง D: ระบบสำรองพลังงานไฟฟ้าของศูนย์ข้อมูล',
          roleHintEn: 'Provides immediate battery ride-through and sustained backup power generation',
          roleHintTh: 'จ่ายไฟต่อเนื่องทันทีที่ไฟดับและผลิตไฟฟ้าสำรองในระยะยาว',
          expectedOptionId: 'ups-generator'
        }
      ],
      options: [
        {
          id: 'ha-lb-cluster',
          labelEn: 'HA Load Balancer & Clustering',
          labelTh: 'HA Load Balancer และ Clustering'
        },
        {
          id: 'warm-hot-site',
          labelEn: 'Geographic Warm / Hot DR Site',
          labelTh: 'ศูนย์สำรอง Warm / Hot Site ต่างพื้นที่'
        },
        {
          id: 'immutable-offsite',
          labelEn: 'Immutable Offsite Backup',
          labelTh: 'สำรองข้อมูลแบบ Immutable นอกสถานที่'
        },
        {
          id: 'ups-generator',
          labelEn: 'Dual UPS + Backup Generator',
          labelTh: 'ระบบ UPS คู่ + เครื่องกำเนิดไฟฟ้าสำรอง'
        },
        {
          id: 'local-single-disk',
          labelEn: 'Single Local Onsite Backup Drive',
          labelTh: 'ฮาร์ดดิสก์สำรองเดี่ยวภายในอาคาร'
        }
      ]
    },
    rubric: [
      { id: 's1', descriptionTh: 'วาง HA Load Balancer & Clustering ในตำแหน่ง A ถูกต้อง', weight: 0.25 },
      { id: 's2', descriptionTh: 'วาง Geographic Warm / Hot DR Site ในตำแหน่ง B ถูกต้อง', weight: 0.25 },
      { id: 's3', descriptionTh: 'วาง Immutable Offsite Backup ในตำแหน่ง C ถูกต้อง', weight: 0.25 },
      { id: 's4', descriptionTh: 'วาง Dual UPS + Backup Generator ในตำแหน่ง D ถูกต้อง', weight: 0.25 }
    ],
    explanationTh:
      'สถาปัตยกรรมความยืดหยุ่นของระบบผสานการทำซ้ำภายในศูนย์หลักเข้ากับการกระจายศูนย์สำรองต่างพื้นที่ การสำรองข้อมูลนอกสถานที่ที่ไม่สามารถแก้ไขทับได้ และระบบไฟฟ้าสำรองหลายระดับ เพื่อคงความต่อเนื่องในการให้บริการและรองรับการกู้คืนเมื่อเกิดภัยพิบัติ',
    misconceptionTh:
      'มักเข้าใจผิดว่า High Availability Clustering เพียงอย่างเดียวเพียงพอต่อการกู้คืนข้อมูลจากมัลแวร์เรียกค่าไถ่หรือภัยพิบัติระดับพื้นที่โดยไม่ต้องมีสำเนาแยกอิสระ',
    relatedLessonIds: ['L3-07', 'L3-08'],
    tags: ['pbq', 'resilience', 'disaster-recovery', 'objective-3.4']
  }
];
