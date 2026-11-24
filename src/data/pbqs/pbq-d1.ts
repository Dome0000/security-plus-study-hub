import type { PbqQuestion } from '../../types';

export const PBQ_D1: PbqQuestion[] = [
  {
    id: 'PBQ-D1-01',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.1'],
    difficulty: 'intermediate',
    titleEn: 'Enterprise Security Control Classification',
    titleTh: 'การจำแนกประเภทมาตรการควบคุมความปลอดภัยในองค์กร',
    scenarioEn:
      'A security architect is auditing four safeguards deployed across a regional branch environment. Map each safeguard to the primary functional control type that best describes its intended role.',
    scenarioTh:
      'สถาปนิกความปลอดภัยกำลังตรวจสอบมาตรการป้องกัน 4 รายการที่ติดตั้งในสาขาภูมิภาค จงจับคู่แต่ละมาตรการเข้ากับประเภทการควบคุมหลักตามบทบาทหน้าที่ที่เหมาะสมที่สุด',
    instructionsEn: 'Select the best matching control type for each enterprise safeguard.',
    instructionsTh: 'เลือกประเภทของ Security Control ที่สอดคล้องกับมาตรการแต่ละรายการมากที่สุด',
    config: {
      template: 'matching-matrix',
      rows: [
        {
          id: 'r1',
          promptEn: 'Legal warning banner displayed prior to enterprise single sign-on authentication',
          promptTh: 'แบนเนอร์ข้อความเตือนทางกฎหมายที่แสดงก่อนหน้าจอยืนยันตัวตนแบบ Single Sign-On'
        },
        {
          id: 'r2',
          promptEn: 'Reverse-proxy virtual patching protecting an unpatchable legacy ERP server',
          promptTh: 'กฎ Virtual Patching บน Reverse Proxy เพื่อป้องกันเซิร์ฟเวอร์ ERP รุ่นเก่าที่อัปเดตแพตช์ไม่ได้'
        },
        {
          id: 'r3',
          promptEn: 'Two-door access control vestibule preventing unauthorized tailgating into the server room',
          promptTh: 'โถงทางเข้าสองชั้น (Access Control Vestibule) เพื่อสกัดกั้นการเดินตามเข้าห้องเซิร์ฟเวอร์'
        },
        {
          id: 'r4',
          promptEn: 'Automated endpoint network isolation triggered after a malicious process alert',
          promptTh: 'การแยกเครื่องปลายทางออกจากเครือข่ายอัตโนมัติหลังเกิดการแจ้งเตือนโพรเซสผิดปกติ'
        }
      ],
      options: [
        { id: 'preventive', labelEn: 'Preventive', labelTh: 'เชิงป้องกัน' },
        { id: 'deterrent', labelEn: 'Deterrent', labelTh: 'เชิงปราม' },
        { id: 'detective', labelEn: 'Detective', labelTh: 'เชิงตรวจจับ' },
        { id: 'corrective', labelEn: 'Corrective', labelTh: 'เชิงแก้ไขและฟื้นฟู' },
        { id: 'compensating', labelEn: 'Compensating', labelTh: 'เชิงชดเชย' },
        { id: 'directive', labelEn: 'Directive', labelTh: 'เชิงกำกับสั่งการ' }
      ],
      expectedMatches: {
        r1: 'deterrent',
        r2: 'compensating',
        r3: 'preventive',
        r4: 'corrective'
      }
    },
    rubric: [
      { id: 'r1', descriptionTh: 'จับคู่ Login warning banner กับ Deterrent ถูกต้อง', weight: 0.25 },
      { id: 'r2', descriptionTh: 'จับคู่ Virtual patching กับ Compensating ถูกต้อง', weight: 0.25 },
      { id: 'r3', descriptionTh: 'จับคู่ Access control vestibule กับ Preventive ถูกต้อง', weight: 0.25 },
      { id: 'r4', descriptionTh: 'จับคู่ Endpoint isolation หลังแจ้งเตือนกับ Corrective ถูกต้อง', weight: 0.25 }
    ],
    explanationTh:
      'การจำแนกประเภท Security Controls พิจารณาจากช่วงเวลาและบทบาทเชิงกลไก ได้แก่ การยับยั้งก่อนเกิดเหตุ การปรามเชิงจิตวิทยา การตอบสนองแก้ไขหลังเกิดเหตุ และการใช้มาตรการทดแทนเมื่อติดข้อจำกัดทางเทคนิค การวางมาตรการต่างประเภทซ้อนกันช่วยสร้างแนวป้องกันแบบ Defense-in-Depth ที่สมดุล',
    misconceptionTh:
      'มักสับสนระหว่างมาตรการที่เพียงเตือนให้ผู้บุกรุกลังเลกับมาตรการที่หยุดยั้งการเข้าถึงได้จริงในเชิงเทคนิคหรือกายภาพ',
    relatedLessonIds: ['L1-01'],
    tags: ['pbq', 'security-controls', 'objective-1.1']
  },
  {
    id: 'PBQ-D1-02',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    difficulty: 'exam-ready',
    titleEn: 'Zero Trust Control & Data Plane Architecture',
    titleTh: 'การกำหนดสถาปัตยกรรม Zero Trust Control Plane และ Data Plane',
    scenarioEn:
      'An enterprise is migrating away from implicit perimeter trust toward a Zero Trust Architecture. Assign the appropriate Zero Trust architectural components to the four logical plane roles.',
    scenarioTh:
      'องค์กรกำลังปรับเปลี่ยนสถาปัตยกรรมจากเครือข่ายที่เชื่อถือภายในโดยปริยายไปสู่ Zero Trust จงจัดวางองค์ประกอบของ Zero Trust ให้ตรงกับบทบาททั้ง 4 ตำแหน่ง',
    instructionsEn: 'Assign the appropriate Zero Trust component to each architectural slot.',
    instructionsTh: 'เลือกองค์ประกอบ Zero Trust ที่สอดคล้องกับหน้าที่ของแต่ละตำแหน่งบนแผนภาพ',
    config: {
      template: 'architecture-configurator',
      diagramTitle: 'Zero Trust Control Plane & Data Plane Flow',
      diagramType: 'zero-trust',
      slots: [
        {
          id: 's1',
          zoneLabelEn: 'Slot A: Access Authorization Engine',
          zoneLabelTh: 'ตำแหน่ง A: ศูนย์ประเมินความเสี่ยงและตัดสินใจสิทธิ์',
          roleHintEn: 'Evaluates contextual trust signals and policy to grant or deny access',
          roleHintTh: 'ประเมินสัญญาณความเสี่ยงและนโยบายเพื่ออนุมัติหรือปฏิเสธคำขอ',
          expectedOptionId: 'policy-engine'
        },
        {
          id: 's2',
          zoneLabelEn: 'Slot B: Session Path Orchestrator',
          zoneLabelTh: 'ตำแหน่ง B: ตัวประสานการเปิด-ปิดเส้นทางเซสชัน',
          roleHintEn: 'Issues session tokens and commands enforcement boundaries',
          roleHintTh: 'ออกโทเคนเซสชันและสั่งการจุดบังคับใช้นโยบาย',
          expectedOptionId: 'policy-admin'
        },
        {
          id: 's3',
          zoneLabelEn: 'Slot C: Inline Data-Plane Gateway',
          zoneLabelTh: 'ตำแหน่ง C: จุดควบคุมทราฟฟิกบนเส้นทางข้อมูลจริง',
          roleHintEn: 'Mediates subject-to-resource connections within the Data Plane',
          roleHintTh: 'ควบคุมและส่งต่อทราฟฟิกเข้าสู่ทรัพยากรในส่วน Data Plane',
          expectedOptionId: 'pep'
        },
        {
          id: 's4',
          zoneLabelEn: 'Slot D: Continuous Posture Signal',
          zoneLabelTh: 'ตำแหน่ง D: สัญญาณตัวตนและบริบทความเสี่ยงแบบต่อเนื่อง',
          roleHintEn: 'Supplies dynamic posture and behavioral signals to policy decisions',
          roleHintTh: 'ป้อนข้อมูลสถานะอุปกรณ์และพฤติกรรมต่อเนื่องให้ระบบตัดสินใจ',
          expectedOptionId: 'adaptive-identity'
        }
      ],
      options: [
        {
          id: 'policy-engine',
          labelEn: 'Policy Engine (PE)',
          labelTh: 'Policy Engine (PE)'
        },
        {
          id: 'policy-admin',
          labelEn: 'Policy Administrator (PA)',
          labelTh: 'Policy Administrator (PA)'
        },
        {
          id: 'pep',
          labelEn: 'Policy Enforcement Point (PEP)',
          labelTh: 'Policy Enforcement Point (PEP)'
        },
        {
          id: 'adaptive-identity',
          labelEn: 'Adaptive Identity & Risk Signal',
          labelTh: 'สัญญาณตัวตนและบริบทความเสี่ยงแบบไดนามิก'
        },
        {
          id: 'subject-system',
          labelEn: 'Subject / Requesting System',
          labelTh: 'ผู้ร้องขอสิทธิ์ / ระบบต้นทาง'
        }
      ]
    },
    rubric: [
      { id: 's1', descriptionTh: 'วาง Policy Engine ในตำแหน่ง A ถูกต้อง', weight: 0.25 },
      { id: 's2', descriptionTh: 'วาง Policy Administrator ในตำแหน่ง B ถูกต้อง', weight: 0.25 },
      { id: 's3', descriptionTh: 'วาง Policy Enforcement Point (PEP) ในตำแหน่ง C ถูกต้อง', weight: 0.25 },
      { id: 's4', descriptionTh: 'วาง Adaptive Identity & Risk Signal ในตำแหน่ง D ถูกต้อง', weight: 0.25 }
    ],
    explanationTh:
      'สถาปัตยกรรม Zero Trust แยกส่วน Control Plane ที่ประเมินบริบทความเสี่ยงและสั่งการสิทธิ์ออกจากส่วน Data Plane ที่ทำหน้าที่เป็นตัวกลางควบคุมทราฟฟิกจริง การแยกบทบาทนี้ช่วยลดพื้นที่ความเชื่อถือโดยปริยายและบังคับตรวจสิทธิ์ทุกคำขอแบบไดนามิก',
    misconceptionTh:
      'ผู้เรียนมักเข้าใจผิดว่าจุดบังคับใช้นโยบาย (PEP) อยู่ใน Control Plane เช่นเดียวกับตัวตัดสินใจและตัวประสานเซสชัน',
    relatedLessonIds: ['L1-03', 'L1-02'],
    tags: ['pbq', 'zero-trust', 'objective-1.2']
  },
  {
    id: 'PBQ-D1-03',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    difficulty: 'intermediate',
    titleEn: 'Cryptographic, PKI & Obfuscation Solutions',
    titleTh: 'การเลือกใช้โซลูชันการเข้ารหัส PKI และ Obfuscation',
    scenarioEn:
      'Review four enterprise security requirements involving hardware root of trust, certificate validation, sensitive data protection, and credential storage. Match each requirement to the appropriate solution.',
    scenarioTh:
      'พิจารณาข้อกำหนดด้านความปลอดภัย 4 ประการที่เกี่ยวข้องกับฮาร์ดแวร์เข้ารหัส การตรวจสอบใบรับรอง การปกปิดข้อมูล และการเก็บรหัสผ่าน จงจับคู่แต่ละข้อกำหนดกับโซลูชันที่เหมาะสม',
    instructionsEn: 'Select the best cryptographic, PKI, or obfuscation mechanism for each requirement.',
    instructionsTh: 'เลือกกลไกการเข้ารหัส PKI หรือ Obfuscation ที่ตรงกับข้อกำหนดแต่ละข้อ',
    config: {
      template: 'matching-matrix',
      rows: [
        {
          id: 'r1',
          promptEn: 'Hardware-bound platform attestation and full-disk key sealing on corporate endpoints',
          promptTh: 'การยืนยันความสมบูรณ์ของแพลตฟอร์มและผูกกุญแจเข้ารหัสดิสก์ในระดับฮาร์ดแวร์บนเครื่องผู้ใช้'
        },
        {
          id: 'r2',
          promptEn: 'Real-time certificate revocation status checking during TLS session establishment',
          promptTh: 'การตรวจสอบสถานะการเพิกถอนใบรับรองดิจิทัลแบบเรียลไทม์ระหว่างสร้างเซสชัน TLS'
        },
        {
          id: 'r3',
          promptEn: 'Replacing payment card numbers with non-sensitive surrogate identifiers backed by an isolated vault',
          promptTh: 'การแทนที่ข้อมูลสำคัญด้วยค่าตัวแทนที่ไม่เป็นความลับโดยเก็บความสัมพันธ์ไว้ในคลังแยก'
        },
        {
          id: 'r4',
          promptEn: 'Increasing computational cost against offline password cracking using configurable work factors',
          promptTh: 'การเพิ่มต้นทุนเวลาและหน่วยความจำเพื่อต้านทานการเจาะแฮชรหัสผ่านแบบออฟไลน์'
        }
      ],
      options: [
        { id: 'tpm', labelEn: 'Trusted Platform Module (TPM)', labelTh: 'ชิปฮาร์ดแวร์บนเมนบอร์ดสำหรับผูกกุญแจและยืนยันระบบ' },
        { id: 'ocsp', labelEn: 'Online Certificate Status Protocol (OCSP)', labelTh: 'โปรโตคอลตรวจสถานะการเพิกถอนใบรับรองแบบทันที' },
        { id: 'tokenization', labelEn: 'Tokenization', labelTh: 'การแทนข้อมูลอ่อนไหวด้วยค่าตัวแทนในคลังแยก' },
        { id: 'key-stretching', labelEn: 'Key Stretching (Argon2)', labelTh: 'การเพิ่มต้นทุนเวลาและหน่วยความจำให้แฮชรหัสผ่าน' },
        { id: 'hsm', labelEn: 'Hardware Security Module (HSM)', labelTh: 'อุปกรณ์ฮาร์ดแวร์ทนการงัดแงะสำหรับจัดการกุญแจระดับองค์กร' }
      ],
      expectedMatches: {
        r1: 'tpm',
        r2: 'ocsp',
        r3: 'tokenization',
        r4: 'key-stretching'
      }
    },
    rubric: [
      { id: 'r1', descriptionTh: 'จับคู่ Hardware attestation และ disk key sealing กับ TPM ถูกต้อง', weight: 0.25 },
      { id: 'r2', descriptionTh: 'จับคู่ Real-time certificate revocation check กับ OCSP ถูกต้อง', weight: 0.25 },
      { id: 'r3', descriptionTh: 'จับคู่การแทนที่เลขบัตรด้วยค่าตัวแทนในคลังแยกกับ Tokenization ถูกต้อง', weight: 0.25 },
      { id: 'r4', descriptionTh: 'จับคู่การเพิ่มต้นทุนการเจาะแฮชรหัสผ่านแบบออฟไลน์กับ Key Stretching (Argon2) ถูกต้อง', weight: 0.25 }
    ],
    explanationTh:
      'การเลือกเครื่องมือทางคริปโตกราฟีขึ้นอยู่กับระดับการคุ้มครองและวงจรชีวิตของข้อมูล ตั้งแต่ฮาร์ดแวร์รากฐานความเชื่อถือสำหรับเครื่องลูกข่าย การตรวจสถานะใบรับรองแบบทันที ไปจนถึงการหน่วงความเร็วแฮชรหัสผ่านและการแยกข้อมูลอ่อนไหวออกจากระบบประมวลผลหลัก',
    misconceptionTh:
      'มักสับสนระหว่าง Tokenization ที่อาศัยคลังข้อมูลแทนค่าจริงกับกลไกการเข้ารหัสหรือแฮชที่คำนวณทางคณิตศาสตร์โดยตรง',
    relatedLessonIds: ['L1-05', 'L1-06'],
    tags: ['pbq', 'cryptography', 'pki', 'objective-1.4']
  }
];
