import type { Question } from '../../types';

export const Q_D5_B1: Question[] = [
  // =========================================================================
  // Objective 5.1: Summarize elements of effective security governance
  // =========================================================================
  {
    id: 'Q5-001',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'An enterprise information security policy broadly mandates that all sensitive customer records be encrypted at rest. A newly hired cloud architect asks where to find the mandatory, measurable technical requirements specifying approved ciphers such as AES-256 and minimum key lengths. Which governance document BEST answers the architect\'s question?',
    promptTh:
      'นโยบายความมั่นคงปลอดภัยสารสนเทศขององค์กรกำหนดไว้ในภาพกว้างว่าข้อมูลลูกค้าที่มีความอ่อนไหวทั้งหมดต้องได้รับการเข้ารหัสขณะจัดเก็บ สถาปนิกคลาวด์ที่เพิ่งเริ่มงานต้องการทราบว่าต้องค้นหาข้อกำหนดทางเทคนิคที่บังคับใช้และวัดผลได้ เช่น อัลกอริทึม AES-256 และความยาวคีย์ขั้นต่ำ จากเอกสารใด เอกสารธรรมาภิบาลใดตอบคำถามของสถาปนิกได้ดีที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Guideline', textTh: 'แนวทางปฏิบัติ (Guideline)' },
      { id: 'c2', textEn: 'Procedure', textTh: 'ขั้นตอนปฏิบัติ (Procedure)' },
      { id: 'c3', textEn: 'Standard', textTh: 'มาตรฐาน (Standard)' },
      { id: 'c4', textEn: 'Acceptable Use Policy (AUP)', textTh: 'นโยบายการใช้งานที่เหมาะสม (AUP)' }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'Standard (มาตรฐาน) ทำหน้าที่แปลงเจตนารมณ์ระดับสูงของ Policy ให้เป็นเกณฑ์วัดผลเชิงตัวเลขหรือสเปกทางเทคนิคที่บังคับใช้ชัดเจน (Mandatory) เช่น อัลกอริทึม AES-256 และขนาดคีย์ขั้นต่ำ เพื่อให้ทีมวิศวกรนำไปตั้งค่าและตรวจสอบความสอดคล้องได้ตรงกัน',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Guideline เป็นเพียงคำแนะนำเชิงแนวทางที่ไม่บังคับตายตัว (Non-mandatory) ไม่ใช้กำหนดเกณฑ์เข้ารหัสภาคบังคับ โดย Guideline เหมาะสมเมื่อต้องการเสนอแนวทางยืดหยุ่น เช่น วิธีตั้งชื่อคีย์หรือการออกแบบโครงสร้างโฟลเดอร์',
      c2: 'ไม่ถูกต้อง: Procedure อธิบายลำดับขั้นตอนการทำงานทีละขั้น (Step-by-step) ไม่ใช่ตัวกำหนดสเปกอัลกอริทึม โดย Procedure เหมาะสมเมื่อต้องการคู่มือปฏิบัติ เช่น ขั้นตอนการขอและหมุนเวียนคีย์ผ่านระบบ KMS',
      c3: 'ถูกต้อง: Standard ระบุข้อกำหนดทางเทคนิคและตัวชี้วัดที่บังคับใช้เฉพาะเจาะจง เช่น Encryption Standard ที่กำหนด AES-256 และความยาวคีย์ขั้นต่ำ',
      c4: 'ไม่ถูกต้อง: AUP กำหนดพฤติกรรมที่อนุญาตและข้อห้ามสำหรับผู้ใช้งานทั่วไปต่อทรัพยากรไอที ไม่ใช่สเปกการเข้ารหัสฐานข้อมูล โดย AUP เหมาะสมเมื่อต้องการกำกับการใช้อีเมล อินเทอร์เน็ต และอุปกรณ์ของบริษัทโดยพนักงาน'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนระหว่าง Standard (เกณฑ์เทคนิคที่บังคับใช้) กับ Guideline (คำแนะนำที่ปรับใช้ยืดหยุ่น) หรือคิดว่าสเปกทางเทคนิคต้องเขียนรวมใน Policy ทั้งหมด',
    relatedLessonIds: ['L5-01'],
    tags: ['governance', 'standard', 'policy-hierarchy', 'encryption-standard']
  },
  {
    id: 'Q5-002',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'During an endpoint review, IT security discovers that several employees installed unauthorized peer-to-peer file-sharing applications and connected personal USB flash drives to corporate laptops. Human resources wants a binding governance document that defines permitted and prohibited user behaviors for corporate systems along with disciplinary consequences. Which policy BEST addresses this need?',
    promptTh:
      'ระหว่างการตรวจสอบเครื่องปลายทาง ทีมความปลอดภัยไอทีพบว่าพนักงานหลายคนติดตั้งโปรแกรมแชร์ไฟล์แบบ Peer-to-Peer ที่ไม่ได้รับอนุญาต และนำแฟลชไดรฟ์ส่วนตัวมาเชื่อมต่อกับแล็ปท็อปของบริษัท ฝ่ายทรัพยากรบุคคลต้องการเอกสารนโยบายที่มีผลผูกพันเพื่อกำหนดพฤติกรรมการใช้งานที่อนุญาตและข้อห้ามบนระบบขององค์กรพร้อมบทลงโทษทางวินัย นโยบายใดตอบโจทย์นี้ได้ดีที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Acceptable Use Policy (AUP)', textTh: 'นโยบายการใช้งานที่เหมาะสม (Acceptable Use Policy: AUP)' },
      { id: 'c2', textEn: 'Secure Software Development Lifecycle (SDLC) Policy', textTh: 'นโยบายวงจรการพัฒนาซอฟต์แวร์ปลอดภัย (Secure SDLC Policy)' },
      { id: 'c3', textEn: 'Disaster Recovery (DR) Policy', textTh: 'นโยบายการกู้คืนระบบจากภัยพิบัติ (Disaster Recovery Policy)' },
      { id: 'c4', textEn: 'Change Management Policy', textTh: 'นโยบายการบริหารจัดการการเปลี่ยนแปลง (Change Management Policy)' }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'Acceptable Use Policy (AUP) เป็นนโยบายหลักที่กำหนดขอบเขตสิ่งที่พนักงานทำได้และห้ามทำเมื่อใช้งานอุปกรณ์ เครือข่าย อีเมล ซอฟต์แวร์ และสื่อบันทึกข้อมูลขององค์กร รวมถึงรองรับการดำเนินการทางวินัยเมื่อฝ่าฝืน จึงตรงประเด็นที่สุดเหนือกว่านโยบายเฉพาะด้านอื่น',
    choiceRationales: {
      c1: 'ถูกต้อง: AUP มุ่งกำกับพฤติกรรมของผู้ใช้งานในการใช้ทรัพยากรไอทีของบริษัท เช่น การห้ามลงซอฟต์แวร์ไม่ได้รับอนุญาตหรือต่ออุปกรณ์ส่วนตัว',
      c2: 'ไม่ถูกต้อง: Secure SDLC Policy กำกับทีมพัฒนาซอฟต์แวร์ให้ฝังความปลอดภัยในกระบวนการออกแบบ เขียนโค้ด และทดสอบแอปพลิเคชัน โดย Secure SDLC Policy เหมาะสมเมื่อต้องการบังคับตรวจโค้ดก่อนปล่อยซอฟต์แวร์ขึ้นระบบจริง',
      c3: 'ไม่ถูกต้อง: DR Policy กำหนดแนวทางการกู้คืนระบบไอที โครงสร้างพื้นฐาน และข้อมูลหลังเกิดภัยพิบัติ ไม่ใช่กฎการใช้งานประจำวันของพนักงาน โดย DR Policy เหมาะสมเมื่อวางกรอบการฟื้นฟูศูนย์ข้อมูลหลังเหตุไฟดับหรือน้ำท่วม',
      c4: 'ไม่ถูกต้อง: Change Management Policy ควบคุมกระบวนการอนุมัติและทดสอบก่อนปรับปรุงระบบผลิตโดยฝ่ายไอที โดย Change Management Policy เหมาะสมเมื่อต้องการป้องกันการอัปเกรดเซิร์ฟเวอร์โดยไม่ผ่านการประเมินผลกระทบ'
    },
    misconceptionTh:
      'ผู้เรียนบางคนเข้าใจว่าทุกกฎที่เกี่ยวกับซอฟต์แวร์หรือการแก้ไขเครื่องต้องอยู่ใน Change Management Policy ทั้งที่กติกาพฤติกรรมผู้ใช้ปลายทางเป็นขอบเขตของ AUP',
    relatedLessonIds: ['L5-01', 'L1-01'],
    tags: ['governance', 'aup', 'policies', 'endpoint-behavior']
  },
  {
    id: 'Q5-003',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'Severe regional flooding renders a regional bank\'s headquarters inaccessible for five days. While IT engineers work separately to restore damaged data center servers, branch operations immediately relocate customer service staff to an alternate office and switch loan approvals to interim manual workflows so essential banking services keep running. Which policy PRIMARILY governs maintaining these critical business operations during the disruption?',
    promptTh:
      'เหตุการณ์น้ำท่วมรุนแรงระดับภูมิภาคทำให้สำนักงานใหญ่ของธนาคารแห่งหนึ่งไม่สามารถเข้าใช้งานได้เป็นเวลา 5 วัน ขณะที่ทีมวิศวกรไอทีกำลังเร่งซ่อมแซมเซิร์ฟเวอร์ในศูนย์ข้อมูล ฝ่ายปฏิบัติการสาขาได้ย้ายพนักงานบริการลูกค้าไปยังสำนักงานสำรองทันทีและปรับขั้นตอนอนุมัติสินเชื่อไปใช้แบบเอกสารชั่วคราวเพื่อให้บริการหลักของธนาคารเดินหน้าต่อไปได้ นโยบายใดกำกับดูแลการรักษาการดำเนินงานทางธุรกิจที่สำคัญระหว่างภาวะหยุดชะงักนี้เป็นหลัก?',
    choices: [
      { id: 'c1', textEn: 'Disaster Recovery (DR) Policy', textTh: 'นโยบายการกู้คืนระบบจากภัยพิบัติ (Disaster Recovery Policy)' },
      { id: 'c2', textEn: 'Incident Response (IR) Policy', textTh: 'นโยบายการตอบสนองต่อเหตุการณ์ความมั่นคงปลอดภัย (Incident Response Policy)' },
      { id: 'c3', textEn: 'Change Management Policy', textTh: 'นโยบายการบริหารจัดการการเปลี่ยนแปลง (Change Management Policy)' },
      { id: 'c4', textEn: 'Business Continuity (BC) Policy', textTh: 'นโยบายความต่อเนื่องทางธุรกิจ (Business Continuity Policy)' }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'Business Continuity (BC) Policy มุ่งรักษาให้กระบวนการธุรกิจสำคัญ (คน สถานที่ทำงาน และขั้นตอนบริการลูกค้า) ดำเนินต่อไปได้ระหว่างเกิดวิกฤต ส่วนการซ่อมแซมและกู้คืนโครงสร้างพื้นฐานไอทีที่เสียหายอยู่ในขอบเขตของ DR Policy',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: DR Policy มุ่งเน้นการกู้คืนระบบไอที เครือข่าย เซิร์ฟเวอร์ และข้อมูลให้กลับมาทำงานปกติหลังภัยพิบัติ ไม่ใช่การปรับกระบวนการทำงานของฝ่ายบริการลูกค้า โดย DR Policy จะเป็นคำตอบหลักเมื่อโจทย์เน้นการย้ายระบบไอทีไปยัง Warm Site หรือกู้คืนฐานข้อมูล',
      c2: 'ไม่ถูกต้อง: IR Policy กำหนดโครงสร้างการตรวจจับ กักกัน และกำจัดเหตุการณ์ละเมิดความปลอดภัยไซเบอร์ เช่น แรนซัมแวร์หรือการเจาะระบบ โดย IR Policy เหมาะสมเมื่อทีม SOC ต้องรับมือการบุกรุกเครือข่าย',
      c3: 'ไม่ถูกต้อง: Change Management Policy ใช้ควบคุมการปรับเปลี่ยนระบบหรือการตั้งค่าในสภาวะปกติอย่างเป็นระบบ โดย Change Management Policy เหมาะสมเมื่อต้องอนุมัติการอัปเดตแพตช์หรือเปลี่ยนกฎไฟร์วอลล์',
      c4: 'ถูกต้อง: การย้ายสถานที่ทำงานของบุคลากรและการปรับกระบวนการอนุมัติสินเชื่อชั่วคราวเพื่อให้ธุรกิจบริการลูกค้าเดินหน้าต่อระหว่างวิกฤตคือเป้าหมายหลักของ BC Policy'
    },
    misconceptionTh:
      'ผู้เรียนมักใช้คำว่า Business Continuity (BC) กับ Disaster Recovery (DR) สลับกัน โดยลืมว่า BC เน้นความต่อเนื่องของกระบวนการธุรกิจและบุคลากร ส่วน DR เน้นการกู้คืนระบบไอทีและข้อมูล',
    relatedLessonIds: ['L5-01', 'L3-07'],
    tags: ['governance', 'business-continuity', 'disaster-recovery', 'policies']
  },
  {
    id: 'Q5-004',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.1'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'A rapidly expanding SaaS provider wants to ensure IT operations teams execute repeatable, step-by-step account lifecycle tasks consistently while also enforcing strict, measurable authentication parameters across all corporate applications. Which TWO governance artifacts BEST fulfill these requirements? (Choose two.)',
    promptTh:
      'ผู้ให้บริการ SaaS ที่กำลังเติบโตอย่างรวดเร็วต้องการให้ทีมปฏิบัติการไอทีดำเนินงานวงจรชีวิตบัญชีผู้ใช้อย่างเป็นลำดับขั้นที่ทำซ้ำได้สม่ำเสมอ พร้อมทั้งบังคับใช้เกณฑ์การยืนยันตัวตนที่เข้มงวดและวัดผลได้กับทุกแอปพลิเคชันขององค์กร เอกสารธรรมาภิบาลใด 2 ข้อต่อไปนี้ตอบโจทย์ความต้องการทั้งสองประการได้ดีที่สุด? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'A high-level Information Security Policy stating executive commitment to protecting corporate assets',
        textTh: 'นโยบายความมั่นคงปลอดภัยสารสนเทศระดับสูงที่แสดงเจตนารมณ์ของฝ่ายบริหารในการปกป้องสินทรัพย์องค์กร'
      },
      {
        id: 'c2',
        textEn: 'An Onboarding and Offboarding Procedure detailing step-by-step account provisioning and revocation checklists',
        textTh: 'ขั้นตอนการรับพนักงานเข้าและพ้นสภาพ (Onboarding/Offboarding Procedure) ที่ระบุรายการตรวจสอบการเปิดและเพิกถอนบัญชีทีละขั้น'
      },
      {
        id: 'c3',
        textEn: 'A developer Guideline offering optional recommendations for code commenting styles',
        textTh: 'แนวทางปฏิบัติ (Guideline) สำหรับนักพัฒนาที่เสนอคำแนะนำแบบไม่บังคับเกี่ยวกับรูปแบบการเขียนคำอธิบายโค้ด'
      },
      {
        id: 'c4',
        textEn: 'A Business Continuity Policy outlining executive priorities during facility outages',
        textTh: 'นโยบายความต่อเนื่องทางธุรกิจที่สรุปลำดับความสำคัญระดับบริหารเมื่อเกิดเหตุอาคารใช้งานไม่ได้'
      },
      {
        id: 'c5',
        textEn: 'A Password and Access Control Standard mandating 14-character minimums, phishing-resistant MFA, and quarterly access reviews',
        textTh: 'มาตรฐานรหัสผ่านและการควบคุมการเข้าถึงที่บังคับความยาวขั้นต่ำ 14 ตัวอักษร การใช้ MFA ที่ต้านทานฟิชชิง และการทบทวนสิทธิ์รายไตรมาส'
      }
    ],
    correctChoiceIds: ['c2', 'c5'],
    explanationTh:
      'Onboarding/Offboarding Procedure ตอบโจทย์การทำงานแบบทีละขั้นที่ทำซ้ำได้สม่ำเสมอ (How-to) ส่วน Password and Access Control Standard ตอบโจทย์การกำหนดเกณฑ์ทางเทคนิคที่บังคับใช้และวัดผลได้จริง (เช่น 14 ตัวอักษรและรอบทบทวนสิทธิ์ทุกไตรมาส)',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Information Security Policy ระบุทิศทางกว้างๆ จากผู้บริหาร ไม่ได้ลงรายละเอียดทีละขั้นหรือสเปกตัวเลขการตั้งค่า โดยเอกสารนี้เหมาะสมเมื่อต้องการวางกรอบกติกาแม่บทและอำนาจหน้าที่ระดับองค์กร',
      c2: 'ถูกต้อง: Procedure มีบทบาทกำหนดขั้นตอนปฏิบัติทีละขั้นสำหรับงานประจำอย่างการเปิดสิทธิ์พนักงานใหม่และตัดสิทธิ์เมื่อลาออกเพื่อให้ได้ผลลัพธ์สม่ำเสมอ',
      c3: 'ไม่ถูกต้อง: Guideline เป็นข้อแนะนำที่ไม่บังคับใช้และไม่เกี่ยวกับการยืนยันตัวตนหรือวงจรบัญชี โดย Guideline เหมาะสมเมื่อต้องการให้ทีมเทคนิคมีกรอบยืดหยุ่นในการทำงานเฉพาะทาง',
      c4: 'ไม่ถูกต้อง: Business Continuity Policy มุ่งรับมือภาวะวิกฤตและการหยุดชะงักของธุรกิจ ไม่ใช่เกณฑ์การตั้งค่ารหัสผ่านหรือการเปิดปิดบัญชีประจำวัน โดย BC Policy เหมาะสมเมื่อวางแผนทำงานต่อเนื่องระหว่างภัยพิบัติ',
      c5: 'ถูกต้อง: Standard ใช้กำหนดข้อกำหนดเฉพาะเจาะจงที่บังคับใช้และตรวจสอบวัดผลได้ เช่น ความยาวรหัสผ่านขั้นต่ำ ข้อกำหนด MFA และความถี่การทบทวนสิทธิ์'
    },
    misconceptionTh:
      'ผู้เรียนบางคนเหมารวมให้ Policy ทำหน้าที่ทั้งเป็นคู่มือปฏิบัติทีละขั้นและตัวกำหนดค่าตัวเลขทางเทคนิค แทนที่จะแยกหน้าที่ให้ Procedure และ Standard',
    relatedLessonIds: ['L5-01', 'L4-08'],
    tags: ['governance', 'procedures', 'standards', 'onboarding-offboarding', 'access-control']
  },
  {
    id: 'Q5-005',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A multinational retailer processes payment cards globally and operates regional fulfillment centers in Germany, Singapore, and California. While revising its security governance framework, compliance officers must align internal policies with PCI DSS alongside statutory privacy rules such as GDPR and state-level data protection statutes. Which statement BEST characterizes these external governance considerations?',
    promptTh:
      'บริษัทค้าปลีกข้ามชาติแห่งหนึ่งรับชำระเงินผ่านบัตรเครดิตทั่วโลกและมีศูนย์กระจายสินค้าในเยอรมนี สิงคโปร์ และรัฐแคลิฟอร์เนีย ระหว่างทบทวนกรอบธรรมาภิบาลความปลอดภัย เจ้าหน้าที่กำกับดูแลต้องปรับนโยบายภายในให้สอดคล้องกับมาตรฐาน PCI DSS ควบคู่กับกฎเกณฑ์คุ้มครองข้อมูลส่วนบุคคล เช่น GDPR และกฎหมายระดับรัฐ ข้อความใดอธิบายปัจจัยภายนอกด้านธรรมาภิบาลเหล่านี้ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'PCI DSS is a criminal statute enacted by national legislatures, whereas GDPR is a voluntary industry guideline.',
        textTh: 'PCI DSS เป็นกฎหมายอาญาที่ออกโดยรัฐสภาระดับประเทศ ขณะที่ GDPR เป็นเพียงแนวทางอุตสาหกรรมแบบสมัครใจ'
      },
      {
        id: 'c2',
        textEn: 'PCI DSS represents an industry standard driven by contractual payment rules, while GDPR and state privacy acts reflect regional and local legal/regulatory mandates.',
        textTh: 'PCI DSS เป็นข้อกำหนดระดับอุตสาหกรรมที่ผูกพันผ่านสัญญาเครือข่ายบัตรชำระเงิน ขณะที่ GDPR และกฎหมายคุ้มครองข้อมูลระดับรัฐเป็นข้อบังคับทางกฎหมายและกฎระเบียบระดับภูมิภาคและระดับท้องถิ่น'
      },
      {
        id: 'c3',
        textEn: 'Complying with global treaties automatically exempts private enterprises from local and regional data privacy laws.',
        textTh: 'การปฏิบัติตามข้อตกลงสากลเพียงอย่างเดียวจะยกเว้นให้บริษัทเอกชนไม่ต้องปฏิบัติตามกฎหมายความเป็นส่วนตัวระดับท้องถิ่นและภูมิภาคโดยอัตโนมัติ'
      },
      {
        id: 'c4',
        textEn: 'Regional and local regulatory mandates apply exclusively to public government entities rather than commercial retailers.',
        textTh: 'ข้อกำหนดกำกับดูแลระดับภูมิภาคและท้องถิ่นมีผลบังคับใช้เฉพาะกับหน่วยงานภาครัฐเท่านั้น ไม่ครอบคลุมบริษัทค้าปลีกเอกชน'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'ปัจจัยภายนอกใน Objective 5.1 แยกเป็นกลุ่ม Regulatory, Legal และ Industry ในหลายระดับเขตอำนาจศาลตั้งแต่ Local, Regional, National จนถึง Global โดย PCI DSS เป็นข้อกำหนดของอุตสาหกรรมบัตรชำระเงิน ส่วน GDPR เป็นกฎหมายระดับภูมิภาคยุโรป และกฎหมายระดับรัฐเป็นข้อกำหนดระดับท้องถิ่น',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: PCI DSS ไม่ใช่กฎหมายอาญาแต่เป็นมาตรฐานอุตสาหกรรมที่บังคับผ่านสัญญาผู้ให้บริการบัตร และ GDPR เป็นกฎหมายบังคับที่มีโทษปรับสูงไม่ใช่แนวทางสมัครใจ โดยตัวอย่างกฎหมายระดับประเทศที่ถูกต้องคือกฎหมายคุ้มครองข้อมูลส่วนบุคคลแห่งชาติ (เช่น PDPA)',
      c2: 'ถูกต้อง: จำแนกความแตกต่างระหว่าง Industry Standard (PCI DSS) กับข้อบังคับทางกฎหมายและการกำกับดูแลในระดับภูมิภาค (GDPR) และระดับท้องถิ่น/รัฐ (เช่น กฎหมายรัฐแคลิฟอร์เนีย) ได้แม่นยำ',
      c3: 'ไม่ถูกต้อง: องค์กรข้ามชาติต้องปฏิบัติตามกฎเกณฑ์ที่เข้มงวดที่สุดในทุกเขตอำนาจศาลที่เข้าไปดำเนินธุรกิจหรือประมวลผลข้อมูลพลเมือง โดยการปฏิบัติตามกรอบสากลเหมาะใช้เป็นฐานโครงสร้างกลางแล้วเสริมด้วยข้อกำหนดเฉพาะถิ่น',
      c4: 'ไม่ถูกต้อง: กฎหมายคุ้มครองข้อมูลส่วนบุคคลระดับภูมิภาคและท้องถิ่นบังคับใช้กับทั้งภาคเอกชนและภาครัฐที่เก็บหรือประมวลผลข้อมูลพลเมืองในเขตอำนาจนั้น โดยกฎเฉพาะหน่วยงานรัฐจะพบในข้อบังคับภาครัฐโดยตรง'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนว่ามาตรฐานอุตสาหกรรมอย่าง PCI DSS เป็นกฎหมายที่ออกโดยรัฐบาล หรือคิดว่าการปฏิบัติตามกฎหมายประเทศแม่เพียงแห่งเดียวเพียงพอสำหรับธุรกิจข้ามชาติ',
    relatedLessonIds: ['L5-01', 'L5-05'],
    tags: ['governance', 'external-considerations', 'regulatory', 'industry-standards', 'jurisdiction']
  },
  {
    id: 'Q5-006',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'Six months after its annual policy review, an enterprise migrates its core financial ERP from on-premises servers to a multi-cloud SaaS model and experiences a misconfiguration incident involving exposed cloud APIs. Existing governance policies still reference only physical data center VPNs. What should the security governance committee do FIRST to restore effective oversight?',
    promptTh:
      'หกเดือนหลังการทบทวนนโยบายประจำปี องค์กรแห่งหนึ่งย้ายระบบ ERP ทางการเงินหลักจากเซิร์ฟเวอร์ภายในองค์กรไปสู่รูปแบบ Multi-cloud SaaS และประสบเหตุตั้งค่าผิดพลาดจนเปิดเผย Cloud API โดยนโยบายธรรมาภิบาลปัจจุบันยังคงอ้างอิงเฉพาะ VPN ของศูนย์ข้อมูลภายในองค์กรเท่านั้น คณะกรรมการธรรมาภิบาลความปลอดภัยควรดำเนินการใดเป็นอันดับแรกเพื่อฟื้นฟูการกำกับดูแลให้มีประสิทธิภาพ?',
    choices: [
      {
        id: 'c1',
        textEn: 'Perform an out-of-cycle policy and standard revision for cloud environments and establish ongoing compliance monitoring against the updated controls',
        textTh: 'ดำเนินการทบทวนและปรับปรุงนโยบายและมาตรฐานนอกรอบสำหรับสภาพแวดล้อมคลาวด์ พร้อมจัดตั้งการเฝ้าติดตามความสอดคล้องต่อมาตรการที่อัปเดตอย่างต่อเนื่อง'
      },
      {
        id: 'c2',
        textEn: 'Defer all policy updates until the next scheduled annual review cycle to preserve uniform audit documentation timestamps',
        textTh: 'ชะลอการแก้ไขนโยบายทั้งหมดไว้รอการทบทวนประจำปีรอบถัดไปเพื่อรักษารอบเวลาของเอกสารตรวจสอบให้สม่ำเสมอ'
      },
      {
        id: 'c3',
        textEn: 'Downgrade mandatory encryption and API access standards into non-binding guidelines so cloud engineers can deploy faster',
        textTh: 'ลดระดับมาตรฐานการเข้ารหัสและการเข้าถึง API ที่บังคับใช้ให้เป็นเพียงแนวทางปฏิบัติแบบไม่บังคับเพื่อให้วิศวกรคลาวด์นำระบบขึ้นใช้งานได้เร็วขึ้น'
      },
      {
        id: 'c4',
        textEn: 'Assign unilateral policy rewriting authority to individual cloud database administrators without committee approval',
        textTh: 'มอบอำนาจการแก้ไขนโยบายองค์กรโดยลำพังให้ผู้ดูแลฐานข้อมูลคลาวด์แต่ละรายโดยไม่ต้องผ่านการอนุมัติจากคณะกรรมการ'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'การเฝ้าติดตามและทบทวนเอกสาร (Monitoring and Revision) ไม่ได้ทำเฉพาะตามรอบปี แต่ต้องทบทวนนอกรอบทันทีเมื่อเกิดการเปลี่ยนแปลงโครงสร้างธุรกิจ/สถาปัตยกรรมครั้งใหญ่หรือเกิดเหตุการณ์ความปลอดภัย เพื่อปิดช่องว่างทางนโยบายก่อนลุกลามเป็นความเสี่ยงซ้ำ',
    choiceRationales: {
      c1: 'ถูกต้อง: การย้ายสู่ Multi-cloud และเหตุ API รั่วไหลเป็นเหตุกระตุ้นสำคัญให้ต้อง Revision เอกสารธรรมาภิบาลนอกรอบทันทีควบคู่กับการ Monitor ความสอดคล้องอย่างต่อเนื่อง',
      c2: 'ไม่ถูกต้อง: การรอให้ครบปีทั้งที่สถาปัตยกรรมเปลี่ยนและเกิดเหตุแล้วจะปล่อยให้องค์กรขาดกรอบบังคับบนคลาวด์ โดยรอบการทบทวนประจำปีเหมาะสมเมื่อสภาพแวดล้อมระบบและภัยคุกคามยังคงสอดคล้องกับนโยบายเดิม',
      c3: 'ไม่ถูกต้อง: การลดระดับ Standard เป็น Guideline จะยิ่งทำให้ขาดความสามารถในการบังคับใช้และตรวจสอบความปลอดภัย โดย Guideline เหมาะสมเฉพาะกับคำแนะนำเสริมในเรื่องที่ยังไม่ควรตั้งกฎตายตัว',
      c4: 'ไม่ถูกต้อง: ผู้ดูแลฐานข้อมูล (Data Custodian) ไม่มีอำนาจกำหนดนโยบายองค์กรแทนคณะกรรมการหรือฝ่ายบริหาร โดย Custodian เหมาะสมกับการนำมาตรฐานที่อนุมัติแล้วไปตั้งค่าทางเทคนิคในระบบ'
    },
    misconceptionTh:
      'ผู้เรียนบางคนคิดว่านโยบายความปลอดภัยทบทวนได้เฉพาะปีละครั้งตามปฏิทิน ทั้งที่การเปลี่ยนสถาปัตยกรรมใหญ่หรือเหตุการณ์ละเมิดเป็นตัวกระตุ้นให้ต้องทบทวนนอกรอบทันที',
    relatedLessonIds: ['L5-01', 'L1-04'],
    tags: ['governance', 'policy-revision', 'monitoring', 'cloud-transition']
  },
  {
    id: 'Q5-007',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A global conglomerate operates distinct healthcare, defense manufacturing, and consumer retail subsidiaries across 14 countries with sharply differing statutory privacy and sector mandates. Executive leadership wants each business unit to adapt operational security policies rapidly to local legal requirements while maintaining strategic visibility at the corporate board level. Which governance structure BEST supports this objective?',
    promptTh:
      'กลุ่มบริษัทข้ามชาติขนาดใหญ่ดำเนินธุรกิจด้านการแพทย์ การผลิตยุทโธปกรณ์ และค้าปลีกกระจายอยู่ใน 14 ประเทศที่มีกฎหมายคุ้มครองข้อมูลและข้อบังคับเฉพาะอุตสาหกรรมแตกต่างกันมาก ฝ่ายบริหารระดับสูงต้องการให้แต่ละหน่วยธุรกิจสามารถปรับนโยบายความปลอดภัยระดับปฏิบัติการให้สอดคล้องกับกฎหมายท้องถิ่นได้อย่างรวดเร็ว ขณะที่คณะกรรมการบริษัทยังคงมองเห็นภาพรวมเชิงยุทธศาสตร์ได้ โครงสร้างธรรมาภิบาลรูปแบบใดสนับสนุนเป้าหมายนี้ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Strictly centralized governance where one headquarters committee approves every regional operational procedure change',
        textTh: 'ธรรมาภิบาลแบบรวมศูนย์เบ็ดเสร็จที่คณะกรรมการสำนักงานใหญ่เพียงชุดเดียวต้องอนุมัติการปรับขั้นตอนปฏิบัติการในทุกภูมิภาค'
      },
      {
        id: 'c2',
        textEn: 'Eliminating all corporate security boards and oversight reporting across subsidiaries',
        textTh: 'ยกเลิกคณะกรรมการความปลอดภัยระดับกลุ่มบริษัทและการรายงานกำกับดูแลระหว่างบริษัทย่อยทั้งหมด'
      },
      {
        id: 'c3',
        textEn: 'Delegating corporate security policy ownership entirely to external government regulatory bodies',
        textTh: 'โอนความเป็นเจ้าของนโยบายความปลอดภัยภายในองค์กรทั้งหมดให้แก่หน่วยงานกำกับดูแลของภาครัฐ'
      },
      {
        id: 'c4',
        textEn: 'Decentralized governance allowing regional business units to tailor controls to local mandates under overarching board oversight',
        textTh: 'ธรรมาภิบาลแบบกระจายอำนาจที่เปิดให้หน่วยธุรกิจแต่ละภูมิภาคปรับมาตรการให้เหมาะกับข้อกำหนดท้องถิ่นภายใต้การกำกับภาพรวมของคณะกรรมการบริษัท'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'Decentralized Governance ให้ความคล่องตัวแก่บริษัทย่อยหรือสาขาในต่างประเทศในการปรับนโยบายและมาตรการให้เข้ากับกฎหมาย Local/Regional และธรรมชาติของอุตสาหกรรมที่ต่างกันได้ทันท่วงที โดยยังเชื่อมโยงการรายงานต่อ Board ในระดับยุทธศาสตร์',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: โครงสร้างแบบรวมศูนย์เบ็ดเสร็จจะสร้างคอขวดและความล่าช้าเมื่อต้องปรับตัวตามกฎหมายท้องถิ่น 14 ประเทศ โดย Centralized Governance เหมาะสมกับองค์กรขนาดเล็กถึงกลางที่มีรูปแบบธุรกิจเดียวกันและต้องการมาตรฐานเดียวเข้มงวด',
      c2: 'ไม่ถูกต้อง: การยกเลิกการรายงานต่อ Board จะทำให้เกิดช่องว่างความเสี่ยงและการขาดทิศทางยุทธศาสตร์ โดยการลดขั้นตอนเหมาะเฉพาะในกรณีตัดความซ้ำซ้อนระหว่างคณะกรรมการที่ซ้อนทับกัน',
      c3: 'ไม่ถูกต้อง: Government Entities ทำหน้าที่ออกกฎและตรวจสอบจากภายนอก ไม่ได้เข้ามาบริหารจัดการนโยบายภายในแทนบริษัท โดย Government Entities เหมาะสมในฐานะคู่ประสานงานด้านกฎหมายและการแบ่งปันข้อมูลภัยคุกคาม',
      c4: 'ถูกต้อง: Decentralized Governance ตอบโจทย์ความหลากหลายทางอุตสาหกรรมและเขตอำนาจศาลทั้ง 14 ประเทศควบคู่กับการกำกับระดับบอร์ด'
    },
    misconceptionTh:
      'ผู้เรียนมักมองว่า Centralized Governance ดีกว่าเสมอโดยลืมพิจารณาข้อจำกัดด้านความเร็วและความหลากหลายของกฎหมายท้องถิ่นในกลุ่มบริษัทข้ามชาติหลายธุรกิจ',
    relatedLessonIds: ['L5-01'],
    tags: ['governance', 'decentralized', 'centralized', 'boards', 'committees']
  },
  {
    id: 'Q5-008',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.1'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'exam-ready',
    promptEn:
      'Before launching a customer-facing mobile banking application, a financial institution must ensure executive-level accountability for strategic risk direction as well as structured cross-functional review of SDLC security gates and production deployment changes. Which TWO governance mechanisms BEST fulfill these roles? (Choose two.)',
    promptTh:
      'ก่อนเปิดตัวแอปพลิเคชันธนาคารบนมือถือสำหรับลูกค้า สถาบันการเงินแห่งหนึ่งต้องสร้างความมั่นใจว่ามีผู้รับผิดชอบระดับสูงสุดต่อทิศทางความเสี่ยงเชิงยุทธศาสตร์ รวมถึงมีกลไกกลั่นกรองร่วมกันข้ามแผนกสำหรับจุดตรวจสอบความปลอดภัยใน SDLC และการเปลี่ยนแปลงระบบผลิต กลไกธรรมาภิบาลใด 2 ข้อต่อไปนี้ทำหน้าที่ดังกล่าวได้ดีที่สุด? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'The Board of Directors approving overarching security strategy, budget, and enterprise risk posture',
        textTh: 'คณะกรรมการบริษัท (Board of Directors) ทำหน้าที่อนุมัติยุทธศาสตร์ความปลอดภัย งบประมาณ และกรอบความเสี่ยงภาพรวมขององค์กร'
      },
      {
        id: 'c2',
        textEn: 'A SOC incident response playbook detailing endpoint containment commands for analysts',
        textTh: 'คู่มือ Playbook การตอบสนองเหตุการณ์ของทีม SOC ที่ระบุคำสั่งกักกันเครื่องปลายทางสำหรับนักวิเคราะห์'
      },
      {
        id: 'c3',
        textEn: 'A database administrator unilaterally granting production write privileges to external contractors',
        textTh: 'ผู้ดูแลฐานข้อมูลมอบสิทธิ์แก้ไขฐานข้อมูลระบบผลิตให้ผู้รับเหมาภายนอกโดยพลการ'
      },
      {
        id: 'c4',
        textEn: 'A cross-functional Security Steering Committee and Change Advisory Board enforcing SDLC and Change Management policies before release',
        textTh: 'คณะกรรมการกำกับดูแลความปลอดภัยและคณะกรรมการพิจารณาการเปลี่ยนแปลงข้ามสายงานที่บังคับใช้นโยบาย SDLC และ Change Management ก่อนปล่อยระบบจริง'
      },
      {
        id: 'c5',
        textEn: 'A voluntary team guideline suggesting optional code formatting conventions',
        textTh: 'แนวทางปฏิบัติแบบสมัครใจของทีมที่แนะนำรูปแบบการจัดย่อหน้าโค้ด'
      }
    ],
    correctChoiceIds: ['c1', 'c4'],
    explanationTh:
      'โครงสร้างธรรมาภิบาลแยกบทบาทชัดเจน: Board of Directors รับผิดชอบอนุมัติทิศทางยุทธศาสตร์ งบประมาณ และกรอบความเสี่ยงสูงสุด ส่วน Committees (เช่น Security Steering Committee / Change Advisory Board) ประสานงานข้ามฝ่ายไอที ความปลอดภัย และธุรกิจ เพื่อกำกับ SDLC และ Change Management ก่อนนำขึ้นระบบผลิต',
    choiceRationales: {
      c1: 'ถูกต้อง: Board เป็นผู้กำหนดและอนุมัติทิศทางยุทธศาสตร์และระดับความเสี่ยงระดับสูงสุดขององค์กร',
      c2: 'ไม่ถูกต้อง: Playbook เป็นขั้นตอนปฏิบัติการหลังเกิดเหตุการณ์ความปลอดภัย ไม่ใช่โครงสร้างอนุมัติยุทธศาสตร์หรือทบทวนการเปลี่ยนแปลงก่อนปล่อยระบบ โดย Playbook เหมาะสมเมื่อทีม SOC ต้องรับมือมัลแวร์หรือฟิชชิง',
      c3: 'ไม่ถูกต้อง: การมอบสิทธิ์ผลิตโดยพลการละเมิดหลัก Change Management และการแบ่งบทบาท Data Custodian/Owner โดย Custodian เหมาะสมกับการตั้งค่าสิทธิ์ตามคำสั่งที่ได้รับอนุมัติแล้วเท่านั้น',
      c4: 'ถูกต้อง: คณะกรรมการเฉพาะทาง (Committees) เป็นตัวกลางประสานระหว่างธุรกิจกับไอทีในการบังคับใช้นโยบาย SDLC และ Change Management ก่อนเปิดใช้งานจริง',
      c5: 'ไม่ถูกต้อง: Guideline การจัดรูปแบบโค้ดเป็นข้อแนะนำที่ไม่บังคับและไม่ได้ทำหน้าที่กลั่นกรองความเสี่ยงการเปลี่ยนแปลงระบบ โดย Guideline เหมาะสมกับการส่งเสริมความสะอาดของโค้ดภายในทีมพัฒนา'
    },
    misconceptionTh:
      'ผู้เรียนบางคนเข้าใจว่า Board of Directors จะลงมาพิจารณาอนุมัติการเปลี่ยนแปลงทางเทคนิคหรือโค้ดแต่ละครั้งเอง แทนที่จะมอบให้ Committees เฉพาะทางกำกับดูแล',
    relatedLessonIds: ['L5-01', 'L1-04'],
    tags: ['governance', 'boards', 'committees', 'sdlc', 'change-management']
  },
  {
    id: 'Q5-009',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A marketing director requests a full database export of employee health insurance records for an internal wellness campaign. The database administrator declines to grant access directly and escalates the request to the Vice President of Human Resources, who determines data classification and authorizes who may access the dataset. Once approved, the administrator configures encrypted exports and access permissions. Which roles do the VP of Human Resources and the database administrator hold, respectively?',
    promptTh:
      'ผู้อำนวยการฝ่ายการตลาดร้องขอส่งออกข้อมูลประกันสุขภาพพนักงานทั้งหมดจากฐานข้อมูลเพื่อทำแคมเปญส่งเสริมสุขภาพภายใน ผู้ดูแลฐานข้อมูลปฏิเสธการเปิดสิทธิ์ให้โดยตรงและส่งเรื่องต่อไปยังรองประธานฝ่ายทรัพยากรบุคคล ซึ่งเป็นผู้กำหนดระดับชั้นความลับและอนุมัติผู้มีสิทธิ์เข้าถึงชุดข้อมูลดังกล่าว เมื่อได้รับอนุมัติแล้ว ผู้ดูแลฐานข้อมูลจึงตั้งค่าการส่งออกแบบเข้ารหัสและกำหนดสิทธิ์เข้าถึงตามคำสั่ง รองประธานฝ่ายทรัพยากรบุคคลและผู้ดูแลฐานข้อมูลมีบทบาทใดตามลำดับ?',
    choices: [
      { id: 'c1', textEn: 'Data Custodian and Data Processor', textTh: 'Data Custodian และ Data Processor' },
      { id: 'c2', textEn: 'Data Steward and Data Controller', textTh: 'Data Steward และ Data Controller' },
      { id: 'c3', textEn: 'Data Owner and Data Custodian', textTh: 'Data Owner และ Data Custodian' },
      { id: 'c4', textEn: 'Data Processor and Data Owner', textTh: 'Data Processor และ Data Owner' }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'รองประธานฝ่ายทรัพยากรบุคคลเป็นผู้บริหารธุรกิจที่มีอำนาจตัดสินใจกำหนดชั้นความลับ (Classification) และอนุมัติสิทธิ์เข้าถึงข้อมูล จึงเป็น Data Owner ส่วนผู้ดูแลฐานข้อมูลที่ลงมือปฏิบัติทางเทคนิค เช่น เข้ารหัส ตั้งค่า ACL และสำรองข้อมูลตามคำสั่งโดยไม่อนุมัติสิทธิ์เองคือ Data Custodian',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: สลับตำแหน่งและความหมาย เนื่องจากรองประธานฝ่ายธุรกิจไม่ใช่ผู้ดูแลเทคนิค (Custodian) และผู้ดูแลฐานข้อมูลภายในไม่ใช่ผู้ให้บริการภายนอก (Processor) โดย Data Processor เหมาะสมกับบริษัทรับจ้างประมวลผลข้อมูลภายนอก',
      c2: 'ไม่ถูกต้อง: Data Steward ดูแลคุณภาพข้อมูลและความถูกต้องเชิงปฏิบัติการ ไม่ใช่ผู้มีอำนาจสูงสุดในการอนุมัติสิทธิ์ระดับบริหาร โดย Data Steward เหมาะสมกับนักวิเคราะห์ธรรมาภิบาลข้อมูลที่กำกับมาตรฐานนิยามและการติดป้ายข้อมูล',
      c3: 'ถูกต้อง: Data Owner กำหนดชั้นความลับและอนุมัติการเข้าถึง ส่วน Data Custodian นำข้อกำหนดนั้นไปบังคับใช้ทางเทคนิคบนระบบและฐานข้อมูล',
      c4: 'ไม่ถูกต้อง: ผู้ดูแลฐานข้อมูลไม่ใช่ Data Owner จึงไม่มีอำนาจอนุมัติสิทธิ์ธุรกิจ และรองประธานฝ่าย HR ไม่ใช่ Data Processor โดย Data Processor ใช้กับคู่ค้าภายนอกที่ประมวลผลตามคำสั่งของ Controller'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนว่าผู้ดูแลระบบ (SysAdmin/DBA) ที่มีสิทธิ์ Admin ทางเทคนิคเป็นเจ้าของข้อมูล (Data Owner) ทั้งที่จริงเป็นเพียงผู้เก็บรักษาทางเทคนิค (Data Custodian)',
    relatedLessonIds: ['L5-01'],
    tags: ['governance', 'data-owner', 'data-custodian', 'roles-responsibilities']
  },
  {
    id: 'Q5-010',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.1'],
    type: 'msq',
    selectCount: 3,
    difficulty: 'exam-ready',
    promptEn:
      'A hospital network collects patient diagnostic histories, determines the clinical research purposes for processing those records, assigns an internal governance specialist to enforce metadata labeling and data accuracy rules, and contracts an external cloud analytics vendor to compute statistical models strictly under hospital instructions. Which THREE role descriptions accurately reflect this arrangement? (Choose three.)',
    promptTh:
      'เครือโรงพยาบาลแห่งหนึ่งจัดเก็บประวัติการวินิจฉัยผู้ป่วย กำหนดวัตถุประสงค์ด้านการวิจัยทางคลินิกในการประมวลผลข้อมูลดังกล่าว มอบหมายให้ผู้เชี่ยวชาญธรรมาภิบาลภายในกำกับดูแลการติดป้ายเมทาดาทาและกฎความถูกต้องของข้อมูล และว่าจ้างผู้ให้บริการวิเคราะห์ข้อมูลบนคลาวด์ภายนอกให้คำนวณแบบจำลองทางสถิติภายใต้คำสั่งของโรงพยาบาลเท่านั้น คำอธิบายบทบาทใด 3 ข้อต่อไปนี้ถูกต้องตามโครงสร้างนี้? (เลือก 3 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'The hospital network serves as the Data Controller determining why and how patient data is processed.',
        textTh: 'เครือโรงพยาบาลทำหน้าที่เป็น Data Controller ที่กำหนดวัตถุประสงค์และวิธีการประมวลผลข้อมูลผู้ป่วย'
      },
      {
        id: 'c2',
        textEn: 'The external cloud analytics vendor acts as the Data Owner with independent authority to monetize patient insights.',
        textTh: 'ผู้ให้บริการวิเคราะห์ข้อมูลคลาวด์ภายนอกมีฐานะเป็น Data Owner ที่มีอำนาจอิสระในการนำข้อมูลเชิงลึกของผู้ป่วยไปใช้เชิงพาณิชย์ต่อ'
      },
      {
        id: 'c3',
        textEn: 'The external cloud analytics vendor operates as a Data Processor handling data solely on the hospital\'s behalf.',
        textTh: 'ผู้ให้บริการวิเคราะห์ข้อมูลคลาวด์ภายนอกทำหน้าที่เป็น Data Processor ที่ประมวลผลข้อมูลแทนและตามคำสั่งของโรงพยาบาลเท่านั้น'
      },
      {
        id: 'c4',
        textEn: 'A hospital systems technician executing nightly encrypted backups acts as the Data Controller.',
        textTh: 'ช่างเทคนิคระบบของโรงพยาบาลที่รันงานสำรองข้อมูลแบบเข้ารหัสทุกคืนทำหน้าที่เป็น Data Controller'
      },
      {
        id: 'c5',
        textEn: 'The internal governance specialist enforcing labeling standards and data accuracy functions as a Data Steward.',
        textTh: 'ผู้เชี่ยวชาญภายในที่กำกับมาตรฐานการติดป้ายข้อมูลและความถูกต้องของข้อมูลทำหน้าที่เป็น Data Steward'
      }
    ],
    correctChoiceIds: ['c1', 'c3', 'c5'],
    explanationTh:
      'ในบริบทข้อมูลส่วนบุคคลและการจัดการข้อมูลระดับองค์กร เครือโรงพยาบาลที่กำหนดวัตถุประสงค์และวิธีการประมวลผลคือ Data Controller, ผู้ให้บริการคลาวด์ที่ประมวลผลตามคำสั่งเท่านั้นคือ Data Processor, และผู้เชี่ยวชาญที่กำกับคุณภาพ ความถูกต้อง และการติดป้ายข้อมูลในระดับปฏิบัติการคือ Data Steward',
    choiceRationales: {
      c1: 'ถูกต้อง: Data Controller คือองค์กรที่เป็นผู้ตัดสินใจถึงวัตถุประสงค์ (Why) และวิธีการ (How) ในการประมวลผลข้อมูลส่วนบุคคล',
      c2: 'ไม่ถูกต้อง: ผู้ให้บริการคลาวด์ภายนอกไม่มีอำนาจเป็นเจ้าของข้อมูลหรือนำไปใช้เพื่อวัตถุประสงค์อื่นนอกเหนือคำสั่ง โดย Data Owner จะเป็นผู้บริหารภายในโรงพยาบาลที่รับผิดชอบสินทรัพย์ข้อมูลนั้น',
      c3: 'ถูกต้อง: Data Processor คือบุคคลที่สามที่นำข้อมูลไปประมวลผลตามคำสั่งและขอบเขตสัญญาที่ได้รับจาก Data Controller เท่านั้น',
      c4: 'ไม่ถูกต้อง: ช่างเทคนิคที่ทำหน้าที่สำรองข้อมูลประจำวันคือ Data Custodian ไม่ใช่ Data Controller โดย Data Custodian เหมาะสมกับผู้ปฏิบัติงานดูแลระบบทางเทคนิคตามนโยบายที่กำหนด',
      c5: 'ถูกต้อง: Data Steward รับผิดชอบคุณภาพ ความถูกต้อง นิยามข้อมูล และการติดป้ายจำแนกข้อมูล (Metadata/Labeling) ในระดับปฏิบัติการ'
    },
    misconceptionTh:
      'ผู้เรียนมักจำสับสนระหว่าง Data Controller กับ Data Custodian หรือเข้าใจผิดว่า Data Steward ทำหน้าที่เดียวกับ Data Processor',
    relatedLessonIds: ['L5-01', 'L5-05'],
    tags: ['governance', 'data-controller', 'data-processor', 'data-steward', 'privacy-roles']
  },

  // =========================================================================
  // Objective 5.2: Explain elements of the risk management process
  // =========================================================================
  {
    id: 'Q5-011',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'During risk identification, a data center manager estimates that a server cluster with an asset value of $200,000 would lose 35% of its total value if a localized cooling-pipe leak occurred. Which quantitative risk parameter does the 35% figure specifically represent?',
    promptTh:
      'ระหว่างการระบุความเสี่ยง ผู้จัดการศูนย์ข้อมูลประเมินว่าคลัสเตอร์เซิร์ฟเวอร์ที่มีมูลค่าสินทรัพย์ 200,000 ดอลลาร์จะสูญเสียมูลค่ารวมไปร้อยละ 35 หากเกิดเหตุท่อน้ำหล่อเย็นรั่วไหลเฉพาะจุด ตัวเลขร้อยละ 35 นี้แทนตัวแปรความเสี่ยงเชิงปริมาณใดโดยเฉพาะ?',
    choices: [
      { id: 'c1', textEn: 'Annualized Rate of Occurrence (ARO)', textTh: 'อัตราการเกิดเหตุต่อปี (ARO)' },
      { id: 'c2', textEn: 'Exposure Factor (EF)', textTh: 'สัดส่วนความเสียหายต่อครั้ง (Exposure Factor: EF)' },
      { id: 'c3', textEn: 'Single Loss Expectancy (SLE)', textTh: 'ความเสียหายคาดการณ์ต่อครั้ง (SLE)' },
      { id: 'c4', textEn: 'Key Risk Indicator (KRI)', textTh: 'ตัวชี้วัดสัญญาณเตือนความเสี่ยง (KRI)' }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'Exposure Factor (EF) คือสัดส่วนร้อยละของมูลค่าสินทรัพย์ที่จะสูญเสียหรือเสียหายเมื่อเหตุการณ์ภัยคุกคามเกิดขึ้นหนึ่งครั้ง (0% ถึง 100%) เมื่อนำ EF = 0.35 ไปคูณกับ Asset Value = $200,000 จึงจะได้ค่า SLE = $70,000',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: ARO คือความถี่ที่คาดว่าเหตุการณ์จะเกิดขึ้นภายในหนึ่งปี เช่น 0.25 หรือ 2 ครั้งต่อปี ไม่ใช่สัดส่วนร้อยละความเสียหายของสินทรัพย์ โดย ARO เหมาะสมเมื่อต้องการคำนวณ ALE = SLE * ARO',
      c2: 'ถูกต้อง: Exposure Factor (EF) แสดงสัดส่วนร้อยละของมูลค่าสินทรัพย์ที่เสียหายต่อการเกิดเหตุ 1 ครั้ง (35% หรือ 0.35)',
      c3: 'ไม่ถูกต้อง: SLE คือมูลค่าความเสียหายเป็นตัวเงินต่อเหตุการณ์ 1 ครั้ง (ในกรณีนี้คือ $70,000) ไม่ใช่อัตราร้อยละ โดย SLE เหมาะสมเมื่อต้องการทราบตัวเลขความเสียหายเป็นสกุลเงินต่อเหตุการณ์หนึ่งครั้ง',
      c4: 'ไม่ถูกต้อง: KRI เป็นตัวชี้วัดเตือนภัยล่วงหน้าใน Risk Register เพื่อบอกแนวโน้มความเสี่ยงที่เพิ่มขึ้น ไม่ใช่ตัวแปรสูตรความเสียหาย โดย KRI เหมาะสมเมื่อต้องการติดตามตัวเลขเช่นเปอร์เซ็นต์เครื่องที่ยังไม่แพตช์'
    },
    misconceptionTh:
      'ผู้เรียนบางคนสับสนระหว่าง Exposure Factor (สัดส่วนร้อยละของมูลค่าที่หายไป) กับ Single Loss Expectancy (มูลค่าตัวเงินที่เสียหายต่อครั้ง)',
    relatedLessonIds: ['L5-02'],
    tags: ['risk-management', 'exposure-factor', 'quantitative-analysis', 'risk-identification']
  },
  {
    id: 'Q5-012',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'Although an insurer conducts its scheduled enterprise risk assessment every October, a critical zero-day remote code execution vulnerability is suddenly disclosed in the web framework powering its customer claims portal in April. The CISO immediately orders an unscheduled assessment focused on the portal before the annual cycle arrives. Which type of risk assessment is the CISO initiating?',
    promptTh:
      'แม้บริษัทประกันภัยแห่งหนึ่งจะมีกำหนดการประเมินความเสี่ยงองค์กรตามรอบปกติทุกเดือนตุลาคม แต่ในเดือนเมษายนมีการเปิดเผยช่องโหว่ Zero-day ระดับวิกฤตที่เปิดทางให้รันโค้ดจากระยะไกลในเว็บเฟรมเวิร์กของพอร์ทัลรับแจ้งเคลมลูกค้า ผู้บริหารด้านความมั่นคงปลอดภัยจึงสั่งให้ประเมินความเสี่ยงเฉพาะระบบพอร์ทัลทันทีโดยไม่รอจนถึงรอบประจำปี กิจกรรมนี้เป็นการประเมินความเสี่ยงประเภทใด?',
    choices: [
      { id: 'c1', textEn: 'Recurring risk assessment', textTh: 'การประเมินความเสี่ยงตามรอบเวลา (Recurring)' },
      { id: 'c2', textEn: 'One-time risk assessment', textTh: 'การประเมินความเสี่ยงเฉพาะครั้ง (One-time)' },
      { id: 'c3', textEn: 'Continuous risk assessment', textTh: 'การประเมินความเสี่ยงอย่างต่อเนื่อง (Continuous)' },
      { id: 'c4', textEn: 'Ad hoc risk assessment', textTh: 'การประเมินความเสี่ยงเฉพาะหน้าเมื่อมีเหตุกระตุ้น (Ad hoc)' }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'Ad hoc Risk Assessment เป็นการประเมินความเสี่ยงนอกแผนที่ถูกกระตุ้นขึ้นทันทีเมื่อเกิดเหตุการณ์สำคัญไม่คาดคิด เช่น ช่องโหว่ Zero-day ร้ายแรง การเปลี่ยนสถาปัตยกรรมฉับพลัน หรือเหตุละเมิดข้อมูลในอุตสาหกรรม',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Recurring เป็นการประเมินตามปฏิทินที่วางแผนล่วงหน้าเป็นประจำ (เช่น ทุกเดือนตุลาคม) ไม่ใช่การประเมินแทรกกลางคันจากเหตุฉุกเฉิน โดย Recurring เหมาะสมกับการทบทวนความเสี่ยงประจำไตรมาสหรือประจำปี',
      c2: 'ไม่ถูกต้อง: One-time ใช้กับโครงการหรือกิจกรรมที่มีจุดเริ่มต้นและสิ้นสุดชัดเจนเพียงครั้งเดียว เช่น ก่อนควบรวมกิจการ (M&A) หรือระบบงานอีเวนต์ชั่วคราว โดย One-time เหมาะสมเมื่อต้องการประเมินบริษัทเป้าหมายก่อนซื้อกิจการ',
      c3: 'ไม่ถูกต้อง: Continuous อาศัยเครื่องมืออัตโนมัติ (เช่น Vulnerability Scanners และ SIEM) ติดตามสถานะความเสี่ยงตลอดเวลา ไม่ใช่คำสั่งประเมินเฉพาะระบบเมื่อเกิดเหตุแทรก โดย Continuous เหมาะสมกับการเฝ้าระวังความเสี่ยงบนคลาวด์แบบเรียลไทม์',
      c4: 'ถูกต้อง: การประเมินเร่งด่วนนอกรอบเวลาเพราะมีเหตุการณ์ Zero-day มากระตุ้นคือ Ad hoc Risk Assessment'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนระหว่าง Ad hoc (ประเมินนอกรอบจากเหตุกระตุ้นกะทันหันในระบบที่ใช้งานอยู่) กับ One-time (ประเมินครั้งเดียวสำหรับโครงการเฉพาะกิจหรือการควบรวมกิจการ)',
    relatedLessonIds: ['L5-02'],
    tags: ['risk-management', 'ad-hoc-assessment', 'risk-assessment-cadence']
  },
  {
    id: 'Q5-013',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'An online banking database has an Asset Value (AV) of $500,000. A severe ransomware disruption has an estimated Exposure Factor (EF) of 60% and is expected to occur once every 4 years (ARO = 0.25). Management is evaluating an immutable backup solution costing $40,000 annually that would reduce the ALE to $15,000 per year. What is the current ALE, and is the solution financially justified?',
    promptTh:
      'ฐานข้อมูลธนาคารออนไลน์แห่งหนึ่งมีมูลค่าสินทรัพย์ (AV) เท่ากับ 500,000 ดอลลาร์ เหตุการณ์ระบบหยุดชะงักจากมัลแวร์เรียกค่าไถ่อย่างรุนแรงมีสัดส่วนความเสียหาย (EF) ประมาณร้อยละ 60 และคาดว่าจะเกิดขึ้น 1 ครั้งในทุกๆ 4 ปี (ARO = 0.25) ฝ่ายบริหารกำลังพิจารณาจัดซื้อโซลูชันสำรองข้อมูลแบบแก้ไขไม่ได้ราคา 40,000 ดอลลาร์ต่อปี ซึ่งจะช่วยลดค่า ALE ลงเหลือ 15,000 ดอลลาร์ต่อปี ค่า ALE ปัจจุบันอยู่ที่เท่าใด และโซลูชันนี้คุ้มค่าทางการเงินหรือไม่?',
    choices: [
      {
        id: 'c1',
        textEn: 'Current ALE is $75,000; yes, the solution yields a net annual benefit of $20,000.',
        textTh: 'ALE ปัจจุบันคือ 75,000 ดอลลาร์; คุ้มค่า เพราะให้ผลประโยชน์สุทธิปีละ 20,000 ดอลลาร์'
      },
      {
        id: 'c2',
        textEn: 'Current ALE is $300,000; yes, the solution yields a net annual benefit of $245,000.',
        textTh: 'ALE ปัจจุบันคือ 300,000 ดอลลาร์; คุ้มค่า เพราะให้ผลประโยชน์สุทธิปีละ 245,000 ดอลลาร์'
      },
      {
        id: 'c3',
        textEn: 'Current ALE is $75,000; no, because the $40,000 annual cost exceeds the reduced ALE of $15,000.',
        textTh: 'ALE ปัจจุบันคือ 75,000 ดอลลาร์; ไม่คุ้มค่า เพราะค่าใช้จ่ายรายปี 40,000 ดอลลาร์สูงกว่าค่า ALE หลังลดแล้วที่ 15,000 ดอลลาร์'
      },
      {
        id: 'c4',
        textEn: 'Current ALE is $125,000; yes, the solution yields a net annual benefit of $70,000.',
        textTh: 'ALE ปัจจุบันคือ 125,000 ดอลลาร์; คุ้มค่า เพราะให้ผลประโยชน์สุทธิปีละ 70,000 ดอลลาร์'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'คำนวณเป็น 2 ขั้น: ขั้นที่ 1 หา SLE = AV * EF = $500,000 * 0.60 = $300,000 ขั้นที่ 2 หา ALE ปัจจุบัน = SLE * ARO = $300,000 * 0.25 = $75,000 ต่อปี จากนั้นคำนวณ Cost-Benefit: ลดความเสียหายได้ $75,000 - $15,000 = $60,000 ต่อปี เมื่อหักค่าเครื่องมือ $40,000 ต่อปี จะได้ผลประโยชน์สุทธิ +$20,000 ต่อปี จึงคุ้มค่าที่จะลงทุน',
    choiceRationales: {
      c1: 'ถูกต้อง: SLE = $300,000 และ ALE = $75,000 การลดความเสียหายลง $60,000 ต่อปีด้วยต้นทุน $40,000 ต่อปีทำให้ประหยัดสุทธิ $20,000 ต่อปี',
      c2: 'ไม่ถูกต้อง: $300,000 คือค่า SLE (ความเสียหายต่อ 1 ครั้ง) ไม่ใช่ ALE เพราะลืมคูณด้วย ARO = 0.25 โดยค่า $300,000 จะเท่ากับ ALE เฉพาะกรณีที่เหตุการณ์เกิดเฉลี่ยปีละ 1 ครั้ง (ARO = 1)',
      c3: 'ไม่ถูกต้อง: หลัก Cost-Benefit เทียบ (ALE_before - ALE_after) กับค่าใช้จ่ายของมาตรการ ไม่ใช่เทียบค่าใช้จ่ายกับ ALE_after โดยการปฏิเสธลงทุนจะถูกต้องก็ต่อเมื่อค่าใช้จ่ายรายปีสูงกว่าส่วนต่างความเสียหายที่ลดได้',
      c4: 'ไม่ถูกต้อง: $125,000 เกิดจากการนำ AV คูณ ARO โดยลืมคูณ Exposure Factor 0.60 ซึ่งทำให้มูลค่าความเสี่ยงสูงเกินจริง'
    },
    misconceptionTh:
      'ผู้เรียนมักลืมคูณค่า ARO (ส่งผลให้เอา SLE มาตอบเป็น ALE) หรือเปรียบเทียบต้นทุนมาตรการกับ ALE_after แทนที่จะเทียบกับส่วนต่างความเสียหายที่ลดลง (ALE_before - ALE_after)',
    relatedLessonIds: ['L5-02'],
    tags: ['risk-management', 'sle', 'ale', 'aro', 'cost-benefit-analysis']
  },
  {
    id: 'Q5-014',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'foundation',
    promptEn:
      'A consumer brand preparing a limited-time promotional portal needs a rapid assessment of brand-reputation risks that are hard to quantify in exact monetary terms, while its security operations team simultaneously wants automated near-real-time posture tracking across cloud endpoints. Which TWO approaches BEST satisfy these needs? (Choose two.)',
    promptTh:
      'แบรนด์สินค้าอุปโภคบริโภคที่กำลังเตรียมเปิดตัวพอร์ทัลโปรโมชันระยะสั้นต้องการประเมินความเสี่ยงด้านชื่อเสียงของแบรนด์อย่างรวดเร็วในประเด็นที่ตีค่าเป็นตัวเงินได้ยาก ขณะเดียวกันทีมปฏิบัติการความปลอดภัยต้องการติดตามสถานะความเสี่ยงของเครื่องปลายทางบนคลาวด์แบบอัตโนมัติใกล้เคียงเวลาจริง แนวทางใด 2 ข้อต่อไปนี้ตอบโจทย์ทั้งสองประการได้ดีที่สุด? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Quantitative risk analysis relying solely on multi-year financial loss ledgers',
        textTh: 'การวิเคราะห์ความเสี่ยงเชิงปริมาณที่อาศัยเฉพาะบัญชีความเสียหายทางการเงินย้อนหลังหลายปี'
      },
      {
        id: 'c2',
        textEn: 'Qualitative risk analysis using a Likelihood-by-Impact matrix with stakeholder input',
        textTh: 'การวิเคราะห์ความเสี่ยงเชิงคุณภาพโดยใช้ตารางความสัมพันธ์ Likelihood กับ Impact ร่วมกับความเห็นผู้เกี่ยวข้อง'
      },
      {
        id: 'c3',
        textEn: 'Relying exclusively on a five-year recurring physical security audit schedule',
        textTh: 'พึ่งพาเฉพาะตารางการตรวจสอบความปลอดภัยทางกายภาพตามรอบทุก 5 ปีเท่านั้น'
      },
      {
        id: 'c4',
        textEn: 'Continuous risk assessment powered by automated vulnerability scanners and SIEM telemetry',
        textTh: 'การประเมินความเสี่ยงอย่างต่อเนื่องด้วยเครื่องมือสแกนช่องโหว่อัตโนมัติและข้อมูล Telemetry จาก SIEM'
      },
      {
        id: 'c5',
        textEn: 'Computing Mean Time Between Failures (MTBF) for marketing employee laptops',
        textTh: 'การคำนวณค่าเฉลี่ยระยะเวลาระหว่างการเสีย (MTBF) ของแล็ปท็อปฝ่ายการตลาด'
      }
    ],
    correctChoiceIds: ['c2', 'c4'],
    explanationTh:
      'Qualitative Risk Analysis เหมาะกับการประเมินที่ต้องการความรวดเร็วและใช้กับปัจจัยที่ตีเป็นตัวเงินชัดเจนได้ยากอย่างชื่อเสียงและความเชื่อมั่น ส่วน Continuous Risk Assessment ใช้ระบบอัตโนมัติ (Scanner/SIEM) เฝ้าระวังความเสี่ยงด้านช่องโหว่และการตั้งค่าบนคลาวด์แบบเรียลไทม์',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Quantitative ต้องใช้ข้อมูลตัวเงินและสถิติที่แม่นยำซึ่งประเมินค่าชื่อเสียงได้ยากและใช้เวลานาน โดย Quantitative เหมาะสมเมื่อต้องการคำนวณ ROI และ Cost-Benefit สำหรับงบลงทุนอุปกรณ์ป้องกัน',
      c2: 'ถูกต้อง: Qualitative ใช้ Risk Matrix (High/Medium/Low) วิเคราะห์ความเสี่ยงด้านภาพลักษณ์ได้อย่างรวดเร็วโดยไม่ต้องรอข้อมูลทางการเงินที่ซับซ้อน',
      c3: 'ไม่ถูกต้อง: การตรวจทุก 5 ปีช้าเกินไปและไม่ตอบโจทย์การติดตามสภาพแวดล้อมคลาวด์แบบเรียลไทม์ โดย Recurring ระยะยาวเหมาะกับงานตรวจสอบโครงสร้างพื้นฐานกายภาพที่ไม่ค่อยเปลี่ยนมากกว่า',
      c4: 'ถูกต้อง: Continuous Risk Assessment อาศัย Telemetry และตัวสแกนอัตโนมัติประเมินระดับความเสี่ยงของเครื่องปลายทางและคลาวด์อย่างต่อเนื่องตลอดเวลา',
      c5: 'ไม่ถูกต้อง: MTBF วัดความเสถียรของฮาร์ดแวร์ ไม่ใช่วิธีวิเคราะห์ความเสี่ยงชื่อเสียงหรือการเฝ้าระวังความเสี่ยงไซเบอร์บนคลาวด์ โดย MTBF เหมาะสมเมื่อประเมินอายุการใช้งานเฉลี่ยของอุปกรณ์เครือข่ายหรือดิสก์ในศูนย์ข้อมูล'
    },
    misconceptionTh:
      'ผู้เรียนบางคนเข้าใจว่าองค์กรควรใช้เพียง Qualitative หรือ Quantitative อย่างใดอย่างหนึ่ง และมองข้ามบทบาทของ Continuous Assessment ในการเฝ้าระวังความเสี่ยงอัตโนมัติ',
    relatedLessonIds: ['L5-02'],
    tags: ['risk-management', 'qualitative-analysis', 'continuous-assessment', 'risk-matrix']
  },
  {
    id: 'Q5-015',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A mid-sized freight company determines that potential forensic, customer notification, and legal recovery expenses from a major breach exceed its cash reserves. Executive leadership purchases a $10 million cyber insurance policy while continuing to enforce MFA and endpoint detection controls. Which risk strategy does purchasing the insurance policy represent, and what limitation remains?',
    promptTh:
      'บริษัทขนส่งขนาดกลางแห่งหนึ่งประเมินว่าค่าใช้จ่ายด้านการพิสูจน์หลักฐานดิจิทัล การแจ้งเตือนลูกค้า และค่าดำเนินคดีจากเหตุข้อมูลรั่วไหลครั้งใหญ่จะสูงเกินกว่าเงินทุนสำรองของบริษัท ฝ่ายบริหารจึงจัดซื้อกรมธรรม์ประกันภัยไซเบอร์วงเงิน 10 ล้านดอลลาร์ ควบคู่กับการคงมาตรการบังคับใช้ MFA และการตรวจจับบนเครื่องปลายทางไว้ดังเดิม การซื้อกรมธรรม์ดังกล่าวจัดเป็นกลยุทธ์จัดการความเสี่ยงใด และยังมีข้อจำกัดใดหลงเหลืออยู่?',
    choices: [
      {
        id: 'c1',
        textEn: 'Risk avoidance; the company eliminates all regulatory and legal accountability for customer data breaches.',
        textTh: 'การหลีกเลี่ยงความเสี่ยง (Risk Avoidance); บริษัทพ้นจากความรับผิดชอบทางกฎหมายและข้อบังคับทั้งหมดเมื่อข้อมูลลูกค้ารั่วไหล'
      },
      {
        id: 'c2',
        textEn: 'Risk mitigation; the insurer prevents attackers from exploiting endpoint vulnerabilities.',
        textTh: 'การลดความเสี่ยง (Risk Mitigation); บริษัทประกันภัยจะช่วยป้องกันไม่ให้ผู้โจมตีเจาะช่องโหว่บนเครื่องปลายทาง'
      },
      {
        id: 'c3',
        textEn: 'Risk transference; direct financial recovery costs are shifted, but reputational harm and legal accountability remain with the company.',
        textTh: 'การโอนย้ายความเสี่ยง (Risk Transference); ภาระค่าเสียหายทางการเงินบางส่วนถูกส่งต่อให้ผู้รับประกัน แต่ความเสียหายต่อชื่อเสียงและความรับผิดตามกฎหมายยังคงอยู่กับบริษัท'
      },
      {
        id: 'c4',
        textEn: 'Risk acceptance; the company establishes a permanent policy exemption and discontinues all security controls.',
        textTh: 'การยอมรับความเสี่ยง (Risk Acceptance); บริษัทออกข้อยกเว้นนโยบายถาวรและยกเลิกมาตรการความปลอดภัยทั้งหมด'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'การซื้อประกันภัยไซเบอร์เป็นตัวอย่างคลาสสิกของ Risk Transference (การโอนย้ายความเสี่ยงทางการเงินไปยังบุคคลที่สาม) แต่ข้อจำกัดสำคัญคือไม่สามารถโอนความเสื่อมเสียชื่อเสียง ความเชื่อมั่นลูกค้า และความรับผิดทางกฎหมายบางประการออกไปจากองค์กรได้ จึงต้องคง Controls เชิงลดเสี่ยงไว้ด้วย',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การซื้อประกันไม่ได้ยุติกิจกรรมเสี่ยงจึงไม่ใช่ Risk Avoidance และไม่ได้ทำให้บริษัทพ้นผิดทางกฎหมาย โดย Risk Avoidance เหมาะสมเมื่อองค์กรปิดบริการหรือเลิกเก็บข้อมูลที่เสี่ยงสูงนั้นไปเลย',
      c2: 'ไม่ถูกต้อง: ประกันภัยไม่ได้ลดโอกาสเกิดเหตุหรืออุดช่องโหว่ทางเทคนิค (ซึ่งเป็นหน้าที่ของ MFA/EDR) โดย Risk Mitigation เหมาะสมกับการติดตั้งแพตช์ ไฟร์วอลล์ หรือ MFA',
      c3: 'ถูกต้อง: Cyber Insurance โอนความเสี่ยงด้านภาระค่าใช้จ่ายเยียวยาทางการเงินบางส่วนให้ผู้รับประกัน แต่ชื่อเสียงและภาระทางกฎหมายยังคงเป็นขององค์กร',
      c4: 'ไม่ถูกต้อง: การซื้อประกันภัยไม่ใช่การยอมรับความเสี่ยงโดยไม่ทำอะไรเลย (Risk Acceptance) และไม่ได้ยกเลิกมาตรการควบคุม โดย Risk Acceptance เหมาะสมเมื่อความเสี่ยงต่ำกว่า Threshold หรือค่าควบคุมแพงกว่า ALE'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจผิดว่าการโอนความเสี่ยงผ่าน Cyber Insurance หรือการ Outsource ทำให้องค์กรพ้นความรับผิดชอบทางกฎหมายและชื่อเสียงทั้งหมด',
    relatedLessonIds: ['L5-03'],
    tags: ['risk-management', 'risk-transference', 'cyber-insurance', 'residual-risk']
  },
  {
    id: 'Q5-016',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'Corporate encryption standards mandate TLS 1.3 for all internal billing APIs. However, a legacy warehouse scanner service only supports TLS 1.2 and is scheduled for decommissioning in four months. Rather than permanently removing warehouse scanners from policy scope, the CISO signs a four-month waiver requiring strict firewall IP allow lists and a mandatory expiration review date. Which risk handling mechanism is being applied?',
    promptTh:
      'มาตรฐานการเข้ารหัสขององค์กรบังคับใช้ TLS 1.3 สำหรับระบบ Billing API ภายในทั้งหมด อย่างไรก็ตาม บริการเครื่องสแกนคลังสินค้ารุ่นเก่าสามารถรองรับได้เพียง TLS 1.2 เท่านั้นและมีกำหนดปลดระวางในอีก 4 เดือนข้างหน้า แทนที่จะตัดระบบคลังสินค้าออกจากขอบเขตนโยบายเป็นการถาวร ผู้บริหารด้านความปลอดภัยได้ลงนามอนุมัติการผ่อนผันชั่วคราวเป็นเวลา 4 เดือน พร้อมกำหนด Firewall IP Allow List ที่เข้มงวดและระบุวันทบทวนเมื่อครบกำหนด กลไกการจัดการความเสี่ยงใดกำลังถูกนำมาใช้?',
    choices: [
      {
        id: 'c1',
        textEn: 'Policy exemption permanently excluding warehouse systems from corporate encryption governance',
        textTh: 'การยกเว้นนโยบาย (Policy Exemption) เพื่อตัดระบบคลังสินค้าออกจากกรอบการเข้ารหัสขององค์กรเป็นการถาวร'
      },
      {
        id: 'c2',
        textEn: 'Time-bound policy exception representing formal temporary risk acceptance backed by compensating controls',
        textTh: 'การผ่อนผันนโยบายแบบมีกำหนดเวลา (Policy Exception) ซึ่งเป็นการยอมรับความเสี่ยงชั่วคราวอย่างเป็นทางการควบคู่กับมาตรการชดเชย'
      },
      {
        id: 'c3',
        textEn: 'Risk avoidance achieved by immediately halting all warehouse inventory scanning operations',
        textTh: 'การหลีกเลี่ยงความเสี่ยง (Risk Avoidance) โดยสั่งหยุดการทำงานของระบบสแกนคลังสินค้าทั้งหมดทันที'
      },
      {
        id: 'c4',
        textEn: 'Risk transference shifting regulatory compliance liability to the internal firewall operations team',
        textTh: 'การโอนย้ายความเสี่ยง (Risk Transference) เพื่อส่งต่อความรับผิดทางกฎระเบียบไปยังทีมดูแลไฟร์วอลล์ภายใน'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'ภายใต้กลยุทธ์ Risk Acceptance การอนุญาตให้ระบบเฉพาะกรณีไม่ปฏิบัติตามมาตรฐานชั่วคราวโดยมีวันหมดอายุชัดเจน (4 เดือน) และต้องติดตั้ง Compensating Controls กำกับไว้ เรียกว่า Exception ส่วน Exemption ใช้กับการยกเว้นจากขอบเขตนโยบายโดยตรงหรือระยะยาว',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: โจทย์ระบุชัดว่าไม่ได้ตัดออกจากนโยบายถาวรแต่กำหนดอายุ 4 เดือนรอปลดระวาง ซึ่งตรงกับ Exception โดย Exemption เหมาะสมเมื่อระบบหรือลักษณะงานไม่อยู่ในขอบข่ายนโยบายโดยตรงหรือได้รับการยกเว้นถาวร',
      c2: 'ถูกต้อง: การผ่อนผันเป็นรายกรณีแบบชั่วคราวที่มีวันหมดอายุและวาง Firewall ACL เป็น Compensating Control คือ Policy Exception ภายใต้ Risk Acceptance',
      c3: 'ไม่ถูกต้อง: บริษัทยังคงใช้งานระบบสแกนต่ออีก 4 เดือนไม่ได้ปิดทิ้งทันที โดย Risk Avoidance เหมาะสมเมื่อองค์กรยุติบริการหรือปิดระบบนั้นทันทีเพื่อกำจัดความเสี่ยงให้หมดไป',
      c4: 'ไม่ถูกต้อง: การส่งเรื่องให้ทีมภายในตั้งไฟร์วอลล์ไม่ใช่ Risk Transference เพราะความเสี่ยงยังคงอยู่ภายในองค์กรเดิม โดย Risk Transference ใช้กับการโอนภาระไปยังบุคคลที่สามภายนอกเช่นประกันภัย'
    },
    misconceptionTh:
      'ผู้เรียนมักใช้คำว่า Exemption กับ Exception สลับกัน โดยจำสลับว่ารูปแบบใดเป็นการผ่อนผันชั่วคราวมีวันหมดอายุ (Exception) และรูปแบบใดเป็นการยกเว้นจากขอบเขตนโยบายโดยตรง (Exemption)',
    relatedLessonIds: ['L5-03', 'L5-01'],
    tags: ['risk-management', 'risk-acceptance', 'exception', 'exemption', 'compensating-controls']
  },
  {
    id: 'Q5-017',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'During quarterly risk reporting to the executive committee, the CISO notes that the proportion of internet-facing servers missing critical patches for more than 14 days rose from 2% to 9%, nearly reaching the organization\'s maximum allowable ceiling of 10%. Within the risk register, what do the 9% metric and the 10% ceiling represent, respectively?',
    promptTh:
      'ระหว่างการรายงานความเสี่ยงรายไตรมาสต่อคณะกรรมการบริหาร ผู้บริหารความมั่นคงปลอดภัยรายงานว่าสัดส่วนเซิร์ฟเวอร์ที่เชื่อมต่ออินเทอร์เน็ตซึ่งขาดการอัปเดตแพตช์ระดับวิกฤตเกิน 14 วันเพิ่มขึ้นจากร้อยละ 2 เป็นร้อยละ 9 และเข้าใกล้เพดานสูงสุดที่องค์กรกำหนดไว้ที่ร้อยละ 10 ภายในทะเบียนความเสี่ยง (Risk Register) ตัวเลขร้อยละ 9 และเพดานร้อยละ 10 แทนองค์ประกอบใดตามลำดับ?',
    choices: [
      { id: 'c1', textEn: 'Key Risk Indicator (KRI) and Risk Threshold', textTh: 'Key Risk Indicator (KRI) และ Risk Threshold' },
      { id: 'c2', textEn: 'Exposure Factor (EF) and Single Loss Expectancy (SLE)', textTh: 'Exposure Factor (EF) และ Single Loss Expectancy (SLE)' },
      { id: 'c3', textEn: 'Recovery Point Objective (RPO) and Recovery Time Objective (RTO)', textTh: 'Recovery Point Objective (RPO) และ Recovery Time Objective (RTO)' },
      { id: 'c4', textEn: 'Risk Owner and Policy Exemption', textTh: 'Risk Owner และ Policy Exemption' }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'Key Risk Indicator (KRI) คือตัวชี้วัดสัญญาณเตือนล่วงหน้า (เปอร์เซ็นต์เครื่องที่ขาดแพตช์เกิน 14 วัน = 9%) ที่แสดงว่าความเสี่ยงกำลังเพิ่มสูงขึ้น ส่วน Risk Threshold (10%) คือเส้นขีดจำกัดความเสี่ยงเฉพาะเรื่องที่หากแตะหรือเกินแล้วต้องดำเนินการแก้ไขหรือยกระดับรายงานทันที',
    choiceRationales: {
      c1: 'ถูกต้อง: KRI วัดแนวโน้มสัญญาณเตือนความเสี่ยงล่วงหน้า (9%) และ Risk Threshold กำหนดเส้นขีดจำกัดสูงสุดที่กระตุ้นให้ต้องลงมือจัดการ (10%)',
      c2: 'ไม่ถูกต้อง: EF และ SLE เป็นตัวแปรคำนวณมูลค่าความเสียหายต่อเหตุการณ์หนึ่งครั้ง ไม่ใช่ตัวชี้วัดสัญญาณเตือนและเส้นจำกัดใน Risk Register โดย EF/SLE เหมาะสมในการคำนวณ Quantitative Risk Analysis',
      c3: 'ไม่ถูกต้อง: RPO และ RTO เป็นตัวชี้วัดเป้าหมายเวลาการกู้คืนและข้อมูลใน BIA ไม่ใช่ตัวชี้วัดสถานะการแพตช์ใน Risk Register โดย RPO/RTO เหมาะสมเมื่อกำหนดความถี่การสำรองข้อมูลและเวลาสลับระบบ DR',
      c4: 'ไม่ถูกต้อง: Risk Owner คือบุคคลผู้รับผิดชอบจัดการความเสี่ยง และ Exemption คือการยกเว้นข้อกำหนดนโยบาย ไม่ใช่ค่าตัวเลขวัดแนวโน้มและเพดาน โดย Risk Owner ใช้ระบุชื่อผู้มีอำนาจจัดสรรงบแก้ไขความเสี่ยง'
    },
    misconceptionTh:
      'ผู้เรียนบางคนสับสนระหว่าง KRI (ตัวเลขสัญญาณเตือนแนวโน้มความเสี่ยง) กับ Risk Threshold (จุดขีดจำกัดที่กำหนดเกณฑ์ตัดสินใจ) หรือคิดว่าเป็นตัวชี้วัด KPI ทั่วไป',
    relatedLessonIds: ['L5-03'],
    tags: ['risk-management', 'risk-register', 'kri', 'risk-threshold', 'risk-reporting']
  },
  {
    id: 'Q5-018',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'exam-ready',
    promptEn:
      'A fintech startup aggressively launches experimental AI credit-scoring features to seize market share rapidly despite regulatory ambiguity, whereas a national pediatric hospital strictly prohibits uncertified applications and limits acceptable clinical portal downtime to near zero. Which TWO statements accurately compare their risk posture? (Choose two.)',
    promptTh:
      'บริษัทสตาร์ทอัพฟินเทคแห่งหนึ่งเปิดตัวฟีเจอร์ให้คะแนนสินเชื่อด้วย AI เชิงรุกเพื่อชิงส่วนแบ่งตลาดอย่างรวดเร็วแม้กฎระเบียบยังไม่ชัดเจน ขณะที่โรงพยาบาลเด็กแห่งชาติสั่งห้ามใช้งานแอปพลิเคชันที่ไม่ผ่านการรับรองโดยเด็ดขาดและกำหนดระยะเวลาหยุดชะงักของพอร์ทัลทางคลินิกที่ยอมรับได้ไว้ใกล้ศูนย์ ข้อความใด 2 ข้อต่อไปนี้เปรียบเทียบท่าทีด้านความเสี่ยงของทั้งสององค์กรได้ถูกต้อง? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'The fintech startup exhibits an expansionary risk appetite, prioritizing rapid growth and innovation over risk minimization.',
        textTh: 'สตาร์ทอัพฟินเทคมีระดับความเต็มใจรับความเสี่ยงแบบเชิงรุก (Expansionary Risk Appetite) โดยให้ความสำคัญกับการเติบโตและนวัตกรรมรวดเร็วมากกว่าการลดความเสี่ยงให้ต่ำสุด'
      },
      {
        id: 'c2',
        textEn: 'Both organizations share a neutral risk appetite because every enterprise must tolerate identical operational downtime.',
        textTh: 'ทั้งสององค์กรมี Risk Appetite แบบเป็นกลาง (Neutral) เหมือนกัน เพราะทุกองค์กรต้องยอมรับความเบี่ยงเบนของเวลาหยุดระบบในระดับเดียวกัน'
      },
      {
        id: 'c3',
        textEn: 'The pediatric hospital demonstrates a conservative risk appetite paired with a very low operational risk tolerance for clinical downtime.',
        textTh: 'โรงพยาบาลเด็กมี Risk Appetite แบบอนุรักษ์นิยม (Conservative) ควบคู่กับค่า Risk Tolerance ระดับปฏิบัติการต่อการหยุดชะงักของระบบคลินิกที่ต่ำมาก'
      },
      {
        id: 'c4',
        textEn: 'The pediatric hospital\'s ban on uncertified apps constitutes risk transference because compliance liability shifts to software vendors.',
        textTh: 'การสั่งห้ามใช้แอปพลิเคชันที่ไม่ผ่านการรับรองของโรงพยาบาลถือเป็น Risk Transference เพราะความรับผิดด้านกฎหมายถูกโอนไปยังผู้พัฒนาซอฟต์แวร์'
      },
      {
        id: 'c5',
        textEn: 'The fintech startup has transferred regulatory liability to customers simply by labeling its credit-scoring feature experimental.',
        textTh: 'สตาร์ทอัพฟินเทคได้โอนย้ายความรับผิดด้านกฎระเบียบไปยังลูกค้าแล้วเพียงแค่ติดป้ายว่าฟีเจอร์ให้คะแนนสินเชื่อยังอยู่ในขั้นทดลอง'
      }
    ],
    correctChoiceIds: ['c1', 'c3'],
    explanationTh:
      'Risk Appetite แบ่งเป็น Expansionary (กล้าเสี่ยงเพื่อเติบโตเร็ว เช่น สตาร์ทอัพฟินเทค), Conservative (ระมัดระวังสูง เน้นความปลอดภัยและกฎเกณฑ์ เช่น โรงพยาบาล) และ Neutral (สมดุล) โดย Risk Tolerance คือค่าความเบี่ยงเบนที่ยอมรับได้จริงในระดับระบบซึ่งโรงพยาบาลตั้งไว้ต่ำมากสำหรับบริการคลินิก',
    choiceRationales: {
      c1: 'ถูกต้อง: สตาร์ทอัพที่ยอมรับความไม่แน่นอนสูงเพื่อขยายตลาดอย่างรวดเร็วจึงตรงกับ Expansionary Risk Appetite',
      c2: 'ไม่ถูกต้อง: ทั้งสององค์กรมีท่าทีต่างกันสุดขั้วไม่ใช่ Neutral และค่า Risk Tolerance ด้าน Downtime ก็ต่างกันตามความสำคัญของบริการ โดย Neutral Risk Appetite เหมาะสมกับองค์กรที่ถ่วงดุลระหว่างการเติบโตกับการควบคุมความเสี่ยงอย่างสมดุล',
      c3: 'ถูกต้อง: โรงพยาบาลให้ความสำคัญกับความปลอดภัยผู้ป่วยและกฎระเบียบอย่างเข้มงวด (Conservative Appetite) พร้อมตั้งค่าความเบี่ยงเบนที่ยอมรับได้ (Risk Tolerance) สำหรับระบบคลินิกไว้ต่ำมาก',
      c4: 'ไม่ถูกต้อง: การสั่งห้ามใช้งานแอปที่ไม่ผ่านการรับรองเพื่อตัดต้นตอความเสี่ยงคือ Risk Avoidance ไม่ใช่ Risk Transference โดย Risk Transference เหมาะสมกับการซื้อประกันภัยหรือทำสัญญาให้คู่ค้ารับภาระทางการเงิน',
      c5: 'ไม่ถูกต้อง: การเปิดตัวฟีเจอร์ทดลองท่ามกลางความไม่ชัดเจนทางกฎระเบียบเป็นการยอมเปิดรับความเสี่ยงเชิงรุก (Expansionary Appetite) ไม่สามารถโอนความรับผิดตามกฎหมายด้วยข้อความติดป้ายเพียงอย่างเดียว; Risk Transference ต้องทำผ่านประกันภัยหรือข้อสัญญาเฉพาะ'
    },
    misconceptionTh:
      'ผู้เรียนมักจำสับสนระหว่าง Risk Appetite (กรอบความเต็มใจรับความเสี่ยงเชิงยุทธศาสตร์) กับ Risk Tolerance (ขอบเขตความเบี่ยงเบนที่รับได้ระดับปฏิบัติการ) หรือแยก Expansionary กับ Conservative ไม่ออก',
    relatedLessonIds: ['L5-03'],
    tags: ['risk-management', 'risk-appetite', 'risk-tolerance', 'expansionary', 'conservative']
  },
  {
    id: 'Q5-019',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'During a Business Impact Analysis (BIA), business continuity planners determine that an e-commerce order-processing database must be restored to operation within 2 hours after any outage, and that the business can afford to lose no more than 15 minutes of recent transactions prior to the failure. Which BIA metrics correspond to the 2-hour and 15-minute targets, respectively?',
    promptTh:
      'ระหว่างการจัดทำ Business Impact Analysis (BIA) ทีมวางแผนความต่อเนื่องทางธุรกิจกำหนดว่าฐานข้อมูลประมวลผลคำสั่งซื้อของแพลตฟอร์มอีคอมเมิร์ซต้องถูกกู้คืนให้กลับมาให้บริการได้ภายใน 2 ชั่วโมงหลังจากเกิดเหตุระบบล่ม และธุรกิจสามารถยอมรับการสูญหายของข้อมูลธุรกรรมล่าสุดก่อนเกิดความเสียหายได้ไม่เกิน 15 นาที ตัวชี้วัด BIA ใดสอดคล้องกับเป้าหมาย 2 ชั่วโมง และ 15 นาที ตามลำดับ?',
    choices: [
      { id: 'c1', textEn: 'RPO = 2 hours and RTO = 15 minutes', textTh: 'RPO = 2 ชั่วโมง และ RTO = 15 นาที' },
      { id: 'c2', textEn: 'MTTR = 2 hours and MTBF = 15 minutes', textTh: 'MTTR = 2 ชั่วโมง และ MTBF = 15 นาที' },
      { id: 'c3', textEn: 'MTBF = 2 hours and RPO = 15 minutes', textTh: 'MTBF = 2 ชั่วโมง และ RPO = 15 นาที' },
      { id: 'c4', textEn: 'RTO = 2 hours and RPO = 15 minutes', textTh: 'RTO = 2 ชั่วโมง และ RPO = 15 นาที' }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'Recovery Time Objective (RTO) คือระยะเวลา Downtime สูงสุดที่ยอมให้ระบบหยุดทำงานได้จนกว่าจะกู้คืนกลับมาใช้งาน (2 ชั่วโมง) ส่วน Recovery Point Objective (RPO) คือช่วงเวลาข้อมูลล่าสุดที่ยอมให้สูญหายได้นับย้อนจากจุดเกิดเหตุซึ่งใช้กำหนดความถี่การ Backup/Replication (15 นาที)',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: สลับความหมายระหว่าง RTO กับ RPO โดย RPO คุมปริมาณข้อมูลที่หายได้ ไม่ใช่ระยะเวลากู้คืนระบบให้กลับมาทำงาน',
      c2: 'ไม่ถูกต้อง: MTTR และ MTBF เป็นค่าเฉลี่ยประสิทธิภาพการซ่อมจริงและความเสถียรระหว่างการเสียของอุปกรณ์ ไม่ใช่เป้าหมายธุรกิจที่กำหนดใน BIA โดย MTTR/MTBF เหมาะสมเมื่อใช้วัดสมรรถนะจริงของฮาร์ดแวร์และทีมซ่อมบำรุง',
      c3: 'ไม่ถูกต้อง: MTBF คือค่าเฉลี่ยระยะเวลาระหว่างความล้มเหลวแต่ละครั้งของอุปกรณ์ที่ซ่อมได้ ไม่ใช่ระยะเวลาสูงสุดที่ธุรกิจยอมให้ระบบหยุดทำงาน โดย MTBF เหมาะสมสำหรับการประเมินความน่าเชื่อถือของดิสก์หรือสวิตช์',
      c4: 'ถูกต้อง: 2 ชั่วโมงคือเป้าหมายเวลาหยุดชะงักสูงสุด (RTO) และ 15 นาทีคือจุดข้อมูลสูญหายย้อนหลังสูงสุดที่ยอมรับได้ (RPO)'
    },
    misconceptionTh:
      'ผู้เรียนสับสนบ่อยครั้งระหว่าง RTO (เวลากู้คืนบริการ/Downtime สูงสุด) กับ RPO (ปริมาณข้อมูลย้อนหลังที่หายได้/ความถี่การสำรองข้อมูล)',
    relatedLessonIds: ['L5-03', 'L3-07', 'L3-08'],
    tags: ['bia', 'rto', 'rpo', 'business-continuity']
  },
  {
    id: 'Q5-020',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'exam-ready',
    promptEn:
      'A payment clearinghouse establishes a Recovery Time Objective (RTO) of 1 hour and a Recovery Point Objective (RPO) of 5 minutes. However, recent disaster recovery exercises reveal that restoring failed storage arrays takes an average of 3.5 hours (MTTR), and aging SAN controllers fail roughly every 400 operating hours (MTBF). Which TWO conclusions BEST follow from these BIA metrics? (Choose two.)',
    promptTh:
      'สำนักหักบัญชีการชำระเงินแห่งหนึ่งกำหนดเป้าหมาย Recovery Time Objective (RTO) ไว้ที่ 1 ชั่วโมง และ Recovery Point Objective (RPO) ไว้ที่ 5 นาที อย่างไรก็ตาม การซ้อมกู้คืนภัยพิบัติครั้งล่าสุดพบว่าการใช้เวลาซ่อมและกู้คืนชุดจัดเก็บข้อมูลที่เสียหายมีค่าเฉลี่ยถึง 3.5 ชั่วโมง (MTTR) และตัวควบคุม SAN รุ่นเก่าเกิดความเสียหายโดยเฉลี่ยทุกๆ 400 ชั่วโมงการทำงาน (MTBF) ข้อสรุปใด 2 ข้อต่อไปนี้สอดคล้องกับตัวชี้วัด BIA ดังกล่าวได้ดีที่สุด? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'The current 3.5-hour MTTR satisfies the 1-hour RTO target because recovery finishes within one business day.',
        textTh: 'ค่า MTTR 3.5 ชั่วโมงในปัจจุบันผ่านเกณฑ์เป้าหมาย RTO 1 ชั่วโมงแล้ว เพราะสามารถกู้คืนได้ภายในหนึ่งวันทำการ'
      },
      {
        id: 'c2',
        textEn: 'The current 3.5-hour MTTR violates the 1-hour RTO requirement, necessitating faster failover automation or a hot site.',
        textTh: 'ค่า MTTR 3.5 ชั่วโมงในปัจจุบันไม่เป็นไปตามข้อกำหนด RTO 1 ชั่วโมง จึงจำเป็นต้องเพิ่มระบบสลับการทำงานอัตโนมัติที่เร็วขึ้นหรือใช้ Hot Site'
      },
      {
        id: 'c3',
        textEn: 'An MTBF of 400 hours guarantees that database backups execute every 5 minutes without transaction loss.',
        textTh: 'ค่า MTBF 400 ชั่วโมงรับประกันได้ว่าการสำรองข้อมูลฐานข้อมูลทำงานทุกๆ 5 นาทีโดยไม่สูญเสียธุรกรรม'
      },
      {
        id: 'c4',
        textEn: 'Changing database backups from daily to once every 12 hours will satisfy the 5-minute RPO requirement.',
        textTh: 'การเปลี่ยนรอบสำรองข้อมูลฐานข้อมูลจากวันละครั้งเป็นทุก 12 ชั่วโมงจะช่วยให้บรรลุเป้าหมาย RPO 5 นาที'
      },
      {
        id: 'c5',
        textEn: 'Upgrading unreliable SAN controllers to increase MTBF while automating recovery to reduce MTTR improves overall availability and aligns with RTO.',
        textTh: 'การเปลี่ยนตัวควบคุม SAN ที่ไม่เสถียรเพื่อเพิ่มค่า MTBF ควบคู่กับการทำระบบกู้คืนอัตโนมัติเพื่อลดค่า MTTR จะช่วยยกระดับความพร้อมใช้งานและสอดคล้องกับ RTO'
      }
    ],
    correctChoiceIds: ['c2', 'c5'],
    explanationTh:
      'ในการออกแบบ DR ที่ผ่านเป้าหมายธุรกิจ ค่า MTTR จริง (3.5 ชั่วโมง) ต้องน้อยกว่าหรือเท่ากับ RTO (1 ชั่วโมง) เสมอ ดังนั้นระบบปัจจุบันจึงสอบตกด้านเวลาและต้องปรับไปใช้ Failover อัตโนมัติหรือ Hot Site ขณะเดียวกันการเพิ่ม MTBF (เสถียรภาพอุปกรณ์) และลด MTTR (เวลาซ่อม/กู้คืน) คือกุญแจหลักของการเพิ่ม Availability',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: เมื่อ MTTR (3.5 ชม.) สูงกว่า RTO (1 ชม.) แสดงว่าระบบกู้คืนไม่ทันเป้าหมายธุรกิจที่ยอมรับได้ โดย MTTR จะถือว่าผ่านเกณฑ์ก็ต่อเมื่อมีค่าเท่ากับหรือน้อยกว่า 1 ชั่วโมง',
      c2: 'ถูกต้อง: MTTR ที่นานกว่า RTO ถึง 2.5 ชั่วโมงสะท้อนว่าสถาปัตยกรรมกู้คืนปัจจุบันช้าเกินไปและต้องยกระดับเป็น Hot Site หรือ Automated Failover',
      c3: 'ไม่ถูกต้อง: MTBF วัดระยะเวลาทำงานปกติระหว่างการเสียของฮาร์ดแวร์ ไม่ใช่ตัววัดความถี่ในการสำรองข้อมูล (RPO) โดยความถี่การสำรองข้อมูลระดับ 5 นาทีต้องอาศัย Replication หรือ Log Shipping ต่อเนื่อง',
      c4: 'ไม่ถูกต้อง: การสำรองทุก 12 ชั่วโมงยังทำให้เสี่ยงข้อมูลหายสูงสุดถึง 12 ชั่วโมง ซึ่งเกิน RPO 5 นาทีไปมาก โดยการสำรองทุก 12 ชั่วโมงเหมาะสมกับระบบที่มี RPO ระดับ 12–24 ชั่วโมง',
      c5: 'ถูกต้อง: ความพร้อมใช้งาน (Availability) สูงขึ้นเมื่ออุปกรณ์เสถียรขึ้น (MTBF สูง) และใช้เวลาซ่อมกู้คืนน้อยลง (MTTR ต่ำกว่า RTO)'
    },
    misconceptionTh:
      'ผู้เรียนบางคนสับสนทิศทางของตัวชี้วัดความทนทาน โดยเข้าใจผิดว่าค่า MTBF ต่ำหรือ MTTR ที่มากกว่า RTO ยังถือว่ายอมรับได้ ทั้งที่ต้องทำให้ MTTR <= RTO และ MTBF สูงขึ้น',
    relatedLessonIds: ['L5-03', 'L3-07'],
    tags: ['bia', 'mttr', 'mtbf', 'rto', 'rpo', 'availability']
  },

  // =========================================================================
  // Objective 5.3: Explain the processes associated with third-party risk assessment and management
  // =========================================================================
  {
    id: 'Q5-021',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A healthcare organization is comparing two cloud payroll vendors during procurement due diligence. Vendor A provides only a self-completed security questionnaire, whereas Vendor B submits a current SOC 2 Type II report issued by an external auditing firm along with ISO/IEC 27001 certification. Why does Vendor B\'s documentation provide stronger assurance?',
    promptTh:
      'องค์กรด้านสาธารณสุขแห่งหนึ่งกำลังเปรียบเทียบผู้ให้บริการระบบเงินเดือนบนคลาวด์ 2 รายระหว่างการคัดกรองก่อนทำสัญญา ผู้ให้บริการ A ส่งเพียงแบบสอบถามความปลอดภัยที่กรอกประเมินตนเอง ในขณะที่ผู้ให้บริการ B ส่งรายงาน SOC 2 Type II ฉบับปัจจุบันที่ออกโดยสำนักงานตรวจสอบภายนอกพร้อมใบรับรอง ISO/IEC 27001 เหตุใดเอกสารของผู้ให้บริการ B จึงให้ความเชื่อมั่นได้สูงกว่า?',
    choices: [
      {
        id: 'c1',
        textEn: 'Security questionnaires are prohibited by healthcare privacy laws during vendor procurement.',
        textTh: 'กฎหมายความเป็นส่วนตัวด้านสาธารณสุขห้ามใช้แบบสอบถามประเมินความปลอดภัยระหว่างการจัดซื้อจัดจ้าง'
      },
      {
        id: 'c2',
        textEn: 'A SOC 2 Type II report guarantees the vendor cannot suffer any future zero-day cyberattack.',
        textTh: 'รายงาน SOC 2 Type II รับประกันได้ว่าผู้ให้บริการจะไม่มีวันถูกโจมตีด้วยช่องโหว่ Zero-day ในอนาคต'
      },
      {
        id: 'c3',
        textEn: 'Independent assessments verify control effectiveness objectively through an impartial third party rather than relying on self-reported vendor claims.',
        textTh: 'การประเมินโดยผู้ตรวจอิสระช่วยยืนยันประสิทธิภาพการควบคุมอย่างเป็นกลางผ่านบุคคลที่สาม แทนการเชื่อคำรับรองที่ผู้ให้บริการกรอกเอง'
      },
      {
        id: 'c4',
        textEn: 'Independent assessments legally replace the need for executing any NDA or Service Level Agreement.',
        textTh: 'รายงานการประเมินอิสระมีผลทางกฎหมายทดแทนการทำสัญญา NDA หรือ SLA ได้โดยอัตโนมัติ'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'Security Questionnaires เป็นข้อมูล Self-reported ที่ Vendor กรอกเองจึงเสี่ยงต่อความเอนเอียงหรือตอบไม่ครบถ้วน ในขณะที่ Independent Assessments (เช่น SOC 2 Type II หรือ ISO/IEC 27001) ผ่านการทดสอบและตรวจสอบจริงจากผู้ประเมินอิสระภายนอกที่มีความเป็นกลาง จึงให้ความเชื่อมั่นในขั้น Due Diligence สูงกว่าอย่างชัดเจน',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: แบบสอบถามไม่ได้ผิดกฎหมายและยังนิยมใช้คัดกรองเบื้องต้นอย่างรวดเร็ว เพียงแต่มีความน่าเชื่อถือต่ำกว่าหลักฐานอิสระ โดย Questionnaires เหมาะสมสำหรับคัดกรองผู้ขายจำนวนมากในขั้นแรกก่อนตรวจเชิงลึก',
      c2: 'ไม่ถูกต้อง: รายงานตรวจสอบอิสระยืนยันการทำงานของมาตรการในช่วงเวลาที่ตรวจเท่านั้น ไม่สามารถการันตีว่าจะไม่เกิดช่องโหว่ใหม่ในอนาคต จึงยังต้องทำ Vendor Monitoring ต่อเนื่อง',
      c3: 'ถูกต้อง: Independent Assessments พิสูจน์ความจริงของการปฏิบัติตามมาตรการผ่านผู้ตรวจภายนอกที่ไม่มีส่วนได้ส่วนเสีย',
      c4: 'ไม่ถูกต้อง: รายงานตรวจสอบเป็นหลักฐานประเมินความเสี่ยง ไม่ใช่ข้อตกลงผูกมัดความลับหรือระดับการให้บริการ โดย NDA และ SLA ยังคงจำเป็นในขั้นตอนแลกเปลี่ยนข้อมูลและการจ้างงานจริง'
    },
    misconceptionTh:
      'ผู้เรียนบางคนเชื่อว่าแบบสอบถามประเมินตนเองของ Vendor เพียงพอต่อการตัดสินใจความเสี่ยงสูง หรือเข้าใจผิดว่าใบรับรองอิสระหมายความว่าระบบปลอดภัย 100% ตลอดไป',
    relatedLessonIds: ['L5-04'],
    tags: ['third-party-risk', 'independent-assessment', 'questionnaires', 'due-diligence', 'soc2']
  },
  {
    id: 'Q5-022',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'During vendor selection for an enterprise identity management platform, a procurement analyst discovers that the selection committee chair owns significant private shares in one of the bidding vendors and recently pressured team members to waive mandatory security due diligence reviews for that bidder. Which governance issue MUST be resolved FIRST before evaluating proposals?',
    promptTh:
      'ระหว่างการคัดเลือกผู้ให้บริการแพลตฟอร์มบริหารจัดการตัวตนขององค์กร นักวิเคราะห์จัดซื้อตรวจพบว่าประธานคณะกรรมการคัดเลือกถือหุ้นจำนวนมากในบริษัทผู้ยื่นเสนอราคารายหนึ่ง และเพิ่งกดดันให้สมาชิกทีมยกเว้นขั้นตอนการตรวจสอบประวัติความปลอดภัยก่อนทำสัญญาสำหรับผู้เสนอราคารายดังกล่าว ประเด็นธรรมาภิบาลใดต้องได้รับการแก้ไขเป็นอันดับแรกก่อนการให้คะแนนข้อเสนอ?',
    choices: [
      {
        id: 'c1',
        textEn: 'Conflict of interest undermining objective vendor evaluation and due diligence',
        textTh: 'ผลประโยชน์ทับซ้อน (Conflict of Interest) ที่บั่นทอนความเป็นกลางในการประเมินผู้ให้บริการและการทำ Due Diligence'
      },
      {
        id: 'c2',
        textEn: 'Lack of a signed Service Level Agreement (SLA) specifying post-deployment uptime penalties',
        textTh: 'การยังไม่มีสัญญา SLA ที่ลงนามแล้วซึ่งระบุค่าปรับระดับความพร้อมใช้งานหลังเปิดระบบ'
      },
      {
        id: 'c3',
        textEn: 'Missing Rules of Engagement (RoE) for production penetration testing',
        textTh: 'การขาดเอกสารกติกาปฏิบัติ (Rules of Engagement) สำหรับการทดสอบเจาะระบบผลิต'
      },
      {
        id: 'c4',
        textEn: 'Absence of a signed Business Partners Agreement (BPA) with losing bidders',
        textTh: 'การไม่มีข้อตกลงความเป็นหุ้นส่วนทางธุรกิจ (BPA) กับผู้ยื่นเสนอราคาที่ไม่ได้รับคัดเลือก'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'Conflict of Interest (ผลประโยชน์ทับซ้อน) ทำลายความโปร่งใสและความเที่ยงธรรมของกระบวนการ Vendor Selection ทั้งหมด รวมถึงเป็นสาเหตุให้ข้ามขั้นตอน Due Diligence ด้านความปลอดภัย จึงต้องแก้ไขเป็นอันดับแรก (เช่น ให้ผู้มีส่วนได้ส่วนเสียถอนตัวจากคณะกรรมการ) ก่อนดำเนินการคัดเลือกหรือทำสัญญาใดๆ ต่อ',
    choiceRationales: {
      c1: 'ถูกต้อง: ต้องขจัด Conflict of Interest และบังคับใช้กระบวนการ Due Diligence อย่างเท่าเทียมก่อนพิจารณามอบงานหรือลงนามสัญญา',
      c2: 'ไม่ถูกต้อง: การเจรจา SLA เกิดขึ้นหลังคัดเลือกผู้ให้บริการที่ผ่านเกณฑ์ความโปร่งใสและความปลอดภัยแล้ว โดย SLA เหมาะสมเมื่อกำหนดตัวชี้วัดบริการกับผู้ขายที่ได้รับเลือก',
      c3: 'ไม่ถูกต้อง: Rules of Engagement ใช้ก่อนเริ่มทดสอบเจาะระบบ ไม่ใช่ขั้นตอนแก้ปัญหาความลำเอียงของคณะกรรมการจัดซื้อ โดย RoE เหมาะสมเมื่อว่าจ้างทีม Pentest เข้ามาทดสอบระบบเป้าหมาย',
      c4: 'ไม่ถูกต้อง: BPA เป็นสัญญาสำหรับพันธมิตรทางธุรกิจที่ร่วมลงทุนและแบ่งปันผลประโยชน์ ไม่เกี่ยวข้องกับผู้ยื่นประมูลที่ไม่ผ่านการคัดเลือก โดย BPA เหมาะสมเมื่อองค์กรร่วมทุนตั้งธุรกิจหรือบริการร่วมกับคู่ค้า'
    },
    misconceptionTh:
      'ผู้เรียนบางคนมองข้ามประเด็น Conflict of Interest โดยคิดว่าเป็นเพียงเรื่องจริยธรรมฝ่ายจัดซื้อ ไม่เกี่ยวกับความเสี่ยงด้าน Cybersecurity ทั้งที่มันทำให้ช่องโหว่ของ Vendor ถูกปิดบังและไม่ผ่านการตรวจสอบ',
    relatedLessonIds: ['L5-04'],
    tags: ['third-party-risk', 'vendor-selection', 'conflict-of-interest', 'due-diligence']
  },
  {
    id: 'Q5-023',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'Before sharing proprietary network topology diagrams and internal vulnerability summaries with prospective cybersecurity vendors during a request-for-proposal (RFP) evaluation, which agreement should the organization execute FIRST to legally prevent unauthorized disclosure of sensitive information?',
    promptTh:
      'ก่อนส่งมอบแผนผังโครงสร้างเครือข่ายที่เป็นความลับและรายงานสรุปช่องโหว่ภายในให้ผู้ให้บริการความปลอดภัยไซเบอร์ที่สนใจเข้าร่วมประเมินราคาโครงการ องค์กรควรดำเนินการลงนามในข้อตกลงประเภทใดเป็นอันดับแรกเพื่อป้องกันการเปิดเผยข้อมูลอ่อนไหวโดยไม่ได้รับอนุญาตตามกฎหมาย?',
    choices: [
      { id: 'c1', textEn: 'Service Level Agreement (SLA)', textTh: 'ข้อตกลงระดับการให้บริการ (SLA)' },
      { id: 'c2', textEn: 'Statement of Work (SOW)', textTh: 'ขอบเขตการดำเนินงาน (SOW)' },
      { id: 'c3', textEn: 'Memorandum of Understanding (MOU)', textTh: 'บันทึกความเข้าใจ (MOU)' },
      { id: 'c4', textEn: 'Non-Disclosure Agreement (NDA)', textTh: 'สัญญารักษาความลับ (NDA)' }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'Non-Disclosure Agreement (NDA) เป็นข้อตกลงฉบับแรกที่ต้องลงนามตั้งแต่ช่วงเริ่มเจรจาหรือก่อนแลกเปลี่ยนข้อมูลอ่อนไหว (เช่น แผนผังเครือข่าย รายงานช่องโหว่ หรือข้อมูลทรัพย์สินทางปัญญา) เพื่อสร้างข้อผูกพันทางกฎหมายห้ามคู่สัญญาเปิดเผยความลับสู่ภายนอก',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: SLA ใช้กำหนดตัวชี้วัดคุณภาพบริการเมื่อเริ่มจ้างงานจริง เช่น Uptime หรือเวลาตอบสนองเหตุการณ์ โดย SLA เหมาะสมเมื่อต้องการผูกมัดมาตรฐานบริการของ Cloud หรือ MSP',
      c2: 'ไม่ถูกต้อง: SOW ใช้ระบุเนื้องาน ผลส่งมอบ กำหนดเวลา และค่าจ้างของโครงการที่ตกลงจ้างแล้ว ไม่ใช่สัญญาคุ้มครองข้อมูลก่อนยื่นข้อเสนอ โดย SOW เหมาะสมเมื่อเปิดโครงการย่อยภายใต้สัญญาหลัก MSA',
      c3: 'ไม่ถูกต้อง: MOU แสดงเจตนารมณ์ความร่วมมือในภาพกว้างและมักไม่มีข้อกำหนดบังคับความลับและบทลงโทษเฉพาะเจาะจงเท่า NDA โดย MOU เหมาะสมเมื่อสองหน่วยงานต้องการประกาศความตั้งใจร่วมมือเบื้องต้น',
      c4: 'ถูกต้อง: NDA ปกป้องข้อมูลลับขององค์กรตั้งแต่ขั้นเจรจาและคัดเลือกผู้ขายก่อนที่จะมีการส่งมอบงานจริง'
    },
    misconceptionTh:
      'ผู้เรียนบางคนเข้าใจว่าข้อมูลช่วงเสนอราคาไม่ต้องเซ็นสัญญาใดๆ จนกว่าจะเซ็น MSA หรือคิดว่า MOU ให้ความคุ้มครองด้านความลับเพียงพอแทน NDA',
    relatedLessonIds: ['L5-04'],
    tags: ['third-party-risk', 'agreements', 'nda', 'confidentiality']
  },
  {
    id: 'Q5-024',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'An enterprise plans to engage a managed cloud partner for multiple engineering projects over the next five years. Legal counsel wants one overarching contract governing liability, data protection, and audit rights across all engagements, while engineering managers need a project-specific attachment defining deliverables, milestones, and fees for the Phase 1 migration. Which TWO agreements best fulfill these purposes? (Choose two.)',
    promptTh:
      'องค์กรแห่งหนึ่งวางแผนว่าจ้างพันธมิตรด้านคลาวด์แบบต่อเนื่องสำหรับหลายโครงการวิศวกรรมตลอดระยะเวลา 5 ปีข้างหน้า ฝ่ายกฎหมายต้องการสัญญาหลักเพียงฉบับเดียวที่กำหนดขอบเขตความรับผิด การคุ้มครองข้อมูล และสิทธิ์การตรวจสอบครอบคลุมทุกงานในอนาคต ขณะที่ผู้จัดการฝ่ายวิศวกรรมต้องการเอกสารแนบเฉพาะโครงการเพื่อระบุผลส่งมอบ กำหนดการ และค่าจ้างสำหรับการย้ายระบบระยะที่ 1 ข้อตกลงใด 2 ข้อต่อไปนี้ทำหน้าที่ทั้งสองประการนี้ได้ดีที่สุด? (เลือก 2 ข้อ)',
    choices: [
      { id: 'c1', textEn: 'Non-Disclosure Agreement (NDA)', textTh: 'สัญญารักษาความลับ (NDA)' },
      { id: 'c2', textEn: 'Master Service Agreement (MSA)', textTh: 'สัญญาแม่บทการให้บริการหลัก (MSA)' },
      { id: 'c3', textEn: 'Business Partners Agreement (BPA)', textTh: 'ข้อตกลงความเป็นหุ้นส่วนทางธุรกิจ (BPA)' },
      { id: 'c4', textEn: 'Work Order / Statement of Work (WO/SOW)', textTh: 'ใบสั่งงาน / ขอบเขตการดำเนินงาน (WO/SOW)' },
      { id: 'c5', textEn: 'Memorandum of Understanding (MOU)', textTh: 'บันทึกความเข้าใจ (MOU)' }
    ],
    correctChoiceIds: ['c2', 'c4'],
    explanationTh:
      'การแยกชั้นสัญญาระหว่าง Master Service Agreement (MSA) กับ Work Order / Statement of Work (WO/SOW) เป็นแนวปฏิบัติมาตรฐาน: MSA วางกรอบกฎหมายระยะยาว (ความรับผิด การคุ้มครองข้อมูล และ Right-to-Audit) ครั้งเดียว ส่วน WO/SOW ระบุรายละเอียดขอบเขตงาน ผลส่งมอบ และค่าจ้างของแต่ละโครงการย่อย',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: NDA ควบคุมเฉพาะการรักษาความลับของข้อมูลที่แลกเปลี่ยน ไม่ได้กำหนดขอบเขตงาน ผลส่งมอบ และเงื่อนไขความรับผิดของโครงการทั้งหมด โดย NDA เหมาะสมเมื่อต้องการคุ้มครองข้อมูลลับช่วงเจรจาหรือระหว่างทำงาน',
      c2: 'ถูกต้อง: MSA เป็นสัญญาแม่บทระยะยาวที่วางเงื่อนไขทางกฎหมายกลางสำหรับโครงการย่อยทั้งหมดภายใต้ความสัมพันธ์กับ Vendor รายเดียว',
      c3: 'ไม่ถูกต้อง: BPA ใช้กับพันธมิตรร่วมทุนที่แบ่งปันผลประโยชน์และความเสี่ยงทางธุรกิจร่วมกัน ไม่ใช่โครงสร้างสัญญาจ้างผู้ให้บริการคลาวด์หลายเฟส โดย BPA เหมาะสมเมื่อสองบริษัทจับมือทำกิจการร่วมค้า',
      c4: 'ถูกต้อง: WO/SOW แนบท้ายภายใต้ MSA เพื่อระบุเนื้องาน Deliverables ระยะเวลา และราคาเฉพาะของโครงการย้ายระบบระยะที่ 1',
      c5: 'ไม่ถูกต้อง: MOU เป็นบันทึกความเข้าใจเชิงเจตนารมณ์เบื้องต้น ไม่ได้กำหนดภาระผูกพันทางกฎหมายเรื่องค่าจ้างหรือผลส่งมอบโครงการ โดย MOU เหมาะสมเมื่อเริ่มต้นความร่วมมือทางวิชาการหรือยุทธศาสตร์'
    },
    misconceptionTh:
      'ผู้เรียนมักจำสลับบทบาทระหว่าง MSA (กรอบกฎหมายแม่บทระยะยาว) กับ WO/SOW (ขอบเขตและผลส่งมอบเฉพาะงาน) และ SLA (ตัวชี้วัดบริการ)',
    relatedLessonIds: ['L5-04'],
    tags: ['third-party-risk', 'agreements', 'msa', 'sow', 'work-order']
  },
  {
    id: 'Q5-025',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'Two regional universities establish a joint cybersecurity research initiative. Initially, their presidents sign a broad, non-binding statement expressing shared strategic intent without financial obligations. Six months later, they replace it with a formal document specifying each institution\'s exact staffing hours, shared laboratory hardware responsibilities, and operational roles. Which pair of agreements matches these two stages, respectively?',
    promptTh:
      'มหาวิทยาลัยระดับภูมิภาค 2 แห่งร่วมกันริเริ่มโครงการวิจัยความมั่นคงปลอดภัยไซเบอร์ ในระยะเริ่มต้นอธิการบดีของทั้งสองแห่งลงนามในเอกสารกว้างๆ ที่แสดงเจตนารมณ์ความร่วมมือเชิงยุทธศาสตร์โดยไม่มีภาระผูกพันทางการเงิน อีก 6 เดือนต่อมาทั้งสองฝ่ายเปลี่ยนไปจัดทำเอกสารที่เป็นทางการมากขึ้นซึ่งระบุจำนวนชั่วโมงบุคลากร ความรับผิดชอบต่ออุปกรณ์ห้องปฏิบัติการร่วม และบทบาทปฏิบัติการของแต่ละสถาบันอย่างชัดเจน ข้อตกลงคู่ใดตรงกับเอกสารทั้งสองระยะตามลำดับ?',
    choices: [
      {
        id: 'c1',
        textEn: 'Business Partners Agreement (BPA) followed by Non-Disclosure Agreement (NDA)',
        textTh: 'ข้อตกลงความเป็นหุ้นส่วนทางธุรกิจ (BPA) ตามด้วยสัญญารักษาความลับ (NDA)'
      },
      {
        id: 'c2',
        textEn: 'Memorandum of Understanding (MOU) followed by Memorandum of Agreement (MOA)',
        textTh: 'บันทึกความเข้าใจ (MOU) ตามด้วยบันทึกข้อตกลง (MOA)'
      },
      {
        id: 'c3',
        textEn: 'Memorandum of Agreement (MOA) followed by Memorandum of Understanding (MOU)',
        textTh: 'บันทึกข้อตกลง (MOA) ตามด้วยบันทึกความเข้าใจ (MOU)'
      },
      {
        id: 'c4',
        textEn: 'Service Level Agreement (SLA) followed by Master Service Agreement (MSA)',
        textTh: 'ข้อตกลงระดับการให้บริการ (SLA) ตามด้วยสัญญาแม่บทหลัก (MSA)'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'Memorandum of Understanding (MOU) ใช้แสดงเจตนารมณ์และเป้าหมายความร่วมมือในภาพกว้างช่วงเริ่มต้นโดยมักไม่มีข้อผูกมัดเชิงรายละเอียดหรือการเงิน จากนั้นเมื่อต้องการลงรายละเอียดภาระหน้าที่ บทบาท และการใช้ทรัพยากรร่วมกันอย่างเป็นทางการชัดเจนจึงใช้ Memorandum of Agreement (MOA)',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: BPA เป็นสัญญาหุ้นส่วนเชิงพาณิชย์และ NDA เป็นสัญญารักษาความลับ ไม่ใช่ลำดับจากเจตนารมณ์ร่วมมือสู่ข้อตกลงภาระหน้าที่ร่วม โดย BPA เหมาะสมกับการร่วมลงทุนทางธุรกิจที่แบ่งสัดส่วนกำไร',
      c2: 'ถูกต้อง: MOU แสดงเจตนารมณ์ความร่วมมือเบื้องต้นในภาพกว้าง และ MOA ลงรายละเอียดหน้าที่ความรับผิดชอบและทรัพยากรร่วมกันอย่างชัดเจนกว่า',
      c3: 'ไม่ถูกต้อง: สลับลำดับกัน เนื่องจาก MOA มีรายละเอียดภาระหน้าที่และทรัพยากรที่เป็นทางการมากกว่า MOU ไม่ได้จัดทำก่อน MOU เพื่อแสดงเจตนารมณ์กว้างๆ',
      c4: 'ไม่ถูกต้อง: SLA และ MSA เป็นโครงสร้างสัญญาจ้างบริการเชิงพาณิชย์ระหว่างผู้ซื้อและผู้ขาย ไม่ใช่เอกสารบันทึกความร่วมมือด้านวิจัยระหว่างสถาบัน โดย SLA/MSA เหมาะสมกับการจ้างผู้ให้บริการคลาวด์หรือ MSP'
    },
    misconceptionTh:
      'ผู้เรียนสับสนความแตกต่างระหว่าง MOU กับ MOA บ่อยมาก โดยจำหลักง่ายๆ ว่า Understanding (MOU) = ความเข้าใจ/เจตนารมณ์กว้างๆ ส่วน Agreement (MOA) = ข้อตกลงภาระหน้าที่และทรัพยากรที่เฉพาะเจาะจงกว่า',
    relatedLessonIds: ['L5-04'],
    tags: ['third-party-risk', 'agreements', 'mou', 'moa']
  },
  {
    id: 'Q5-026',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'An online brokerage contracts a cloud hosting provider and requires enforceable guarantees of 99.99% monthly platform availability, a 15-minute critical incident response time, and financial service credits if uptime falls below the agreed threshold. Which agreement type specifically defines these measurable service metrics?',
    promptTh:
      'บริษัทนายหน้าซื้อขายหลักทรัพย์ออนไลน์ทำสัญญาจ้างผู้ให้บริการโฮสติ้งบนคลาวด์และต้องการข้อผูกพันที่บังคับใช้ได้จริงเพื่อรับประกันความพร้อมใช้งานรายเดือนร้อยละ 99.99 เวลาตอบสนองต่อเหตุการณ์วิกฤตไม่เกิน 15 นาที และเครดิตชดเชยทางการเงินหากเวลาพร้อมใช้งานต่ำกว่าเกณฑ์ที่ตกลงไว้ ข้อตกลงประเภทใดกำหนดตัวชี้วัดบริการที่วัดผลได้เหล่านี้โดยเฉพาะ?',
    choices: [
      { id: 'c1', textEn: 'Memorandum of Understanding (MOU)', textTh: 'บันทึกความเข้าใจ (MOU)' },
      { id: 'c2', textEn: 'Service Level Agreement (SLA)', textTh: 'ข้อตกลงระดับการให้บริการ (Service Level Agreement: SLA)' },
      { id: 'c3', textEn: 'Business Partners Agreement (BPA)', textTh: 'ข้อตกลงความเป็นหุ้นส่วนทางธุรกิจ (BPA)' },
      { id: 'c4', textEn: 'Non-Disclosure Agreement (NDA)', textTh: 'สัญญารักษาความลับ (NDA)' }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'Service Level Agreement (SLA) เป็นข้อตกลงระดับคุณภาพบริการที่ระบุตัวชี้วัดเชิงตัวเลขชัดเจน เช่น อัตรา Uptime 99.99%, เวลาตอบสนอง (Response Time), ค่า RTO/RPO และมาตรการชดเชยหรือ Service Credits เมื่อผู้ให้บริการทำไม่ได้ตามเกณฑ์',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: MOU แสดงเจตนารมณ์ร่วมมือในภาพกว้างและไม่ได้ระบุค่า Uptime หรือบทลงโทษทางการเงิน โดย MOU เหมาะสมเมื่อต้องการประกาศกรอบความตั้งใจร่วมมือเบื้องต้นระหว่างองค์กร',
      c2: 'ถูกต้อง: SLA กำหนดเกณฑ์คุณภาพบริการที่วัดผลได้เป็นตัวเลข เช่น Availability และ Response Time พร้อมเงื่อนไขชดเชยหากไม่เป็นไปตามสัญญา',
      c3: 'ไม่ถูกต้อง: BPA กำหนดโครงสร้างหุ้นส่วนทางธุรกิจและการแบ่งผลประโยชน์ร่วม ไม่ใช่ตัวชี้วัดเวลาตอบสนองทางเทคนิคของโฮสติ้ง โดย BPA เหมาะสมกับการร่วมลงทุนทางธุรกิจของพันธมิตร',
      c4: 'ไม่ถูกต้อง: NDA คุ้มครองความลับของข้อมูล ไม่ได้วัดระดับประสิทธิภาพหรือความต่อเนื่องของระบบคลาวด์ โดย NDA เหมาะสมเมื่อต้องการห้ามเปิดเผยข้อมูลลูกค้าหรือแผนผังระบบ'
    },
    misconceptionTh:
      'ผู้เรียนบางคนเข้าใจว่าตัวเลข Uptime และค่าปรับความล่าช้าถูกเขียนไว้ใน NDA หรือปนกับเงื่อนไขกฎหมายทั่วไปของ MSA แทนที่จะเป็นหน้าที่เฉพาะของ SLA',
    relatedLessonIds: ['L5-04', 'L5-03'],
    tags: ['third-party-risk', 'agreements', 'sla', 'availability']
  },
  {
    id: 'Q5-027',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'During a third-party risk review of its primary payment gateway vendor, a financial firm learns that the vendor subcontracts transaction archiving to an unassessed fourth-party storage host, refuses to disclose open-source dependencies in its software, and prohibits customer inspections in its standard contract. What should the financial firm prioritize to remediate these downstream vendor governance gaps?',
    promptTh:
      'ระหว่างการทบทวนความเสี่ยงบุคคลที่สามของผู้ให้บริการเกตเวย์ชำระเงินหลัก บริษัทการเงินแห่งหนึ่งพบว่าผู้ให้บริการรายนี้จ้างช่วงการจัดเก็บข้อมูลธุรกรรมไปยังผู้ให้บริการโฮสติ้งลำดับที่สี่ (Fourth-party) ที่ไม่เคยผ่านการประเมิน ปฏิเสธที่จะเปิดเผยรายการซอฟต์แวร์โอเพนซอร์สที่ใช้ในระบบ และห้ามลูกค้าเข้าตรวจสอบตามสัญญามาตรฐาน บริษัทการเงินควรให้ความสำคัญกับการแก้ไขจุดบกพร่องด้านธรรมาภิบาลผู้ให้บริการด้วยแนวทางใด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Relying exclusively on an annual self-reported questionnaire covering only the vendor\'s direct employees',
        textTh: 'พึ่งพาเฉพาะแบบสอบถามประเมินตนเองประจำปีที่ครอบคลุมเพียงพนักงานโดยตรงของผู้ให้บริการรายหลักเท่านั้น'
      },
      {
        id: 'c2',
        textEn: 'Signing a broad Memorandum of Understanding (MOU) that removes legal audit terms for faster onboarding',
        textTh: 'ลงนามในบันทึกความเข้าใจ (MOU) แบบกว้างๆ ที่ตัดเงื่อนไขการตรวจสอบทางกฎหมายออกเพื่อให้เริ่มงานได้เร็วขึ้น'
      },
      {
        id: 'c3',
        textEn: 'Replacing the Master Service Agreement (MSA) with informal verbal Rules of Engagement',
        textTh: 'เปลี่ยนสัญญาแม่บท MSA เป็นข้อตกลง Rules of Engagement แบบปากเปล่าที่ไม่เป็นทางการ'
      },
      {
        id: 'c4',
        textEn: 'Requiring supply chain analysis covering fourth-party sub-processors and software components paired with a contractual right-to-audit clause',
        textTh: 'กำหนดให้มีการวิเคราะห์ห่วงโซ่อุปทาน (Supply Chain Analysis) ที่ครอบคลุมผู้รับเหมาช่วงระดับ Fourth-party และองค์ประกอบซอฟต์แวร์ ควบคู่กับการระบุสิทธิ์เข้าตรวจสอบ (Right-to-Audit Clause) ในสัญญา'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'โจทย์ชี้ให้เห็นความเสี่ยงซ่อนเร้นสองส่วนคือ ห่วงโซ่อุปทานระดับลึก (Fourth-party sub-processor และองค์ประกอบซอฟต์แวร์/SBOM) และการขาดสิทธิ์ตรวจสอบ ดังนั้นการบังคับทำ Supply Chain Analysis ร่วมกับการใส่ Right-to-Audit Clause ในสัญญาจึงเป็นการแก้ไขตรงจุดที่สุด',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: แบบสอบถามที่ครอบคลุมเฉพาะพนักงาน Tier-1 ไม่สามารถมองเห็นความเสี่ยงจากผู้รับเหมาช่วงหรือไลบรารีซอฟต์แวร์ภายนอก โดย Questionnaires เหมาะสมเฉพาะการคัดกรองเบื้องต้นก่อนขอหลักฐานเชิงลึก',
      c2: 'ไม่ถูกต้อง: การตัดสิทธิ์ตรวจสอบและใช้ MOU แบบไม่ผูกมัดยิ่งเพิ่มความเสี่ยงให้องค์กร โดย MOU เหมาะสมกับการแสดงเจตนารมณ์ร่วมมือเบื้องต้นที่ไม่เกี่ยวข้องกับธุรกรรมการเงินสำคัญ',
      c3: 'ไม่ถูกต้อง: สัญญาแม่บท MSA จำเป็นต่อการคุ้มครองทางกฎหมายและไม่ควรใช้ข้อตกลงปากเปล่า โดย RoE ใช้กำหนดกติกาเฉพาะก่อนเริ่มกิจกรรมทดสอบระบบเป็นลายลักษณ์อักษร',
      c4: 'ถูกต้อง: Supply Chain Analysis ช่วยเปิดเผยความเสี่ยงระดับ Fourth-party และองค์ประกอบซอฟต์แวร์ ส่วน Right-to-Audit Clause ให้สิทธิ์องค์กรเข้าตรวจสอบการควบคุมของผู้ให้บริการได้จริงเมื่อจำเป็น'
    },
    misconceptionTh:
      'ผู้เรียนมักประเมินความเสี่ยงเฉพาะคู่ค้าชั้นที่หนึ่ง (Third-party) โดยมองข้ามความเสี่ยงจากผู้รับเหมาช่วง (Fourth-party) และความสำคัญของ Right-to-Audit Clause ในสัญญา',
    relatedLessonIds: ['L5-04', 'L2-02'],
    tags: ['third-party-risk', 'supply-chain-analysis', 'right-to-audit', 'fourth-party-risk']
  },
  {
    id: 'Q5-028',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'Before an external offensive security vendor begins authorized penetration testing against a bank\'s public-facing APIs, the security manager meets with the testing lead to formalize approved target IP ranges, permitted testing windows, prohibited actions such as denial-of-service attacks, and emergency escalation contacts. Which document captures these operational boundaries?',
    promptTh:
      'ก่อนที่ผู้ให้บริการด้านความปลอดภัยเชิงรุกภายนอกจะเริ่มการทดสอบเจาะระบบที่ได้รับอนุญาตต่อ API สาธารณะของธนาคาร ผู้จัดการความปลอดภัยได้ประชุมร่วมกับหัวหน้าทีมทดสอบเพื่อกำหนดช่วง IP เป้าหมายที่อนุญาต ช่วงเวลาที่ทำได้ ข้อห้าม เช่น การโจมตีแบบทำให้ระบบล่ม (DoS) และช่องทางติดต่อประสานงานกรณีฉุกเฉิน เอกสารใดกำหนดขอบเขตและกติกาปฏิบัติการเหล่านี้?',
    choices: [
      { id: 'c1', textEn: 'Rules of Engagement (RoE)', textTh: 'กติกาและขอบเขตการปฏิบัติงาน (Rules of Engagement: RoE)' },
      { id: 'c2', textEn: 'Business Partners Agreement (BPA)', textTh: 'ข้อตกลงความเป็นหุ้นส่วนทางธุรกิจ (BPA)' },
      { id: 'c3', textEn: 'Service Level Agreement (SLA)', textTh: 'ข้อตกลงระดับการให้บริการ (SLA)' },
      { id: 'c4', textEn: 'Evidence of internal audits', textTh: 'หลักฐานรายงานการตรวจสอบภายใน (Evidence of internal audits)' }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'Rules of Engagement (RoE) คือเอกสารกำหนดกติกาและขอบเขตทางเทคนิคและการปฏิบัติงานก่อนเริ่มทดสอบเจาะระบบหรือภารกิจความมั่นคงปลอดภัยร่วมกับบุคคลที่สาม ทั้งเป้าหมายที่อนุญาต ช่วงเวลา เทคนิคต้องห้าม และการแจ้งเตือนฉุกเฉิน เพื่อป้องกันความเสียหายต่อระบบผลิตและข้อพิพาททางกฎหมาย',
    choiceRationales: {
      c1: 'ถูกต้อง: RoE ระบุช่วง IP/URL เป้าหมาย กรอบเวลา กติกาข้อห้าม (เช่น ห้าม DoS) และผู้ประสานงานฉุกเฉินก่อนลงมือทดสอบจริง',
      c2: 'ไม่ถูกต้อง: BPA ใช้กำหนดความสัมพันธ์แบบหุ้นส่วนทางธุรกิจและการแบ่งปันรายได้ ไม่ใช่ขอบเขตทางเทคนิคของการทดสอบเจาะระบบ โดย BPA เหมาะสมเมื่อองค์กรร่วมทุนพัฒนาธุรกิจระยะยาวกับพันธมิตร',
      c3: 'ไม่ถูกต้อง: SLA ระบุตัวชี้วัดคุณภาพบริการเช่น Uptime 99.9% และเวลาแก้ปัญหา ไม่ใช่ขอบเขต IP และเทคนิคที่อนุญาตในการโจมตีจำลอง โดย SLA เหมาะสมกับการจ้างผู้ให้บริการโฮสติ้งหรือระบบคลาวด์',
      c4: 'ไม่ถูกต้อง: Evidence of internal audits เป็นรายงานผลตรวจที่ทีมภายในของ Vendor จัดทำขึ้นเพื่อใช้อ้างอิงช่วงคัดเลือกผู้ให้บริการ โดยหลักฐานนี้เหมาะสมเมื่อต้องการดูประวัติความพร้อมของระบบควบคุมภายในของคู่ค้า'
    },
    misconceptionTh:
      'ผู้เรียนบางคนสับสนระหว่าง Statement of Work (SOW) ที่บอกภาพรวมงานจ้างและค่าตอบแทน กับ Rules of Engagement (RoE) ที่กำหนดขอบเขตเทคนิค ข้อห้าม และช่องทางฉุกเฉินของการทดสอบ',
    relatedLessonIds: ['L5-04', 'L5-06'],
    tags: ['third-party-risk', 'rules-of-engagement', 'penetration-testing', 'vendor-testing']
  },
  {
    id: 'Q5-029',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'exam-ready',
    promptEn:
      'Two years into a managed IT services contract, a healthcare provider wants to verify that its primary MSP has maintained strong security controls while ensuring an outgoing third-party analytics contractor can no longer access clinical environments. Which TWO activities BEST support ongoing vendor monitoring and secure offboarding? (Choose two.)',
    promptTh:
      'หลังทำสัญญาจ้างผู้ให้บริการจัดการไอที (MSP) ผ่านมาแล้ว 2 ปี องค์กรสาธารณสุขแห่งหนึ่งต้องการตรวจสอบว่าผู้ให้บริการหลักยังคงรักษามาตรฐานความปลอดภัยได้ดีอย่างต่อเนื่อง พร้อมทั้งทำให้มั่นใจว่าผู้รับเหมาวิเคราะห์ข้อมูลภายนอกรายเดิมที่หมดสัญญาแล้วจะไม่สามารถเข้าถึงระบบคลินิกได้อีกต่อไป กิจกรรมใด 2 ข้อต่อไปนี้สนับสนุนการเฝ้าติดตามผู้ให้บริการอย่างต่อเนื่องและการยุติสิทธิ์อย่างปลอดภัยได้ดีที่สุด? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Relying indefinitely on the vendor\'s original pre-contract self-assessment questionnaire without annual updates',
        textTh: 'ยึดถือแบบสอบถามประเมินตนเองฉบับแรกก่อนทำสัญญาไปตลอดโดยไม่ต้องทบทวนประจำปี'
      },
      {
        id: 'c2',
        textEn: 'Executing a Business Partners Agreement (BPA) to grant equity ownership to the departing analytics contractor',
        textTh: 'จัดทำข้อตกลง BPA เพื่อมอบสิทธิ์ความเป็นหุ้นส่วนให้ผู้รับเหมาวิเคราะห์ข้อมูลที่กำลังหมดสัญญา'
      },
      {
        id: 'c3',
        textEn: 'Reviewing updated annual SOC 2 reports, internal audit evidence, and recent penetration test summaries alongside threat intelligence on the MSP',
        textTh: 'ตรวจสอบรายงาน SOC 2 ฉบับอัปเดตประจำปี หลักฐานการตรวจสอบภายใน และสรุปผลการทดสอบเจาะระบบล่าสุดควบคู่กับการติดตามข่าวภัยคุกคามของ MSP'
      },
      {
        id: 'c4',
        textEn: 'Maintaining read-only VPN accounts for the departing contractor for 12 months in case historical queries arise',
        textTh: 'คงบัญชี VPN แบบอ่านอย่างเดียวไว้ให้ผู้รับเหมาที่หมดสัญญาอีก 12 เดือนเผื่อต้องสอบถามข้อมูลย้อนหลัง'
      },
      {
        id: 'c5',
        textEn: 'Completing vendor offboarding procedures to revoke all service accounts, API keys, and VPN access while verifying secure data return or destruction',
        textTh: 'ดำเนินการตามขั้นตอน Vendor Offboarding เพื่อเพิกถอนบัญชีบริการ API Keys และสิทธิ์ VPN ทั้งหมด พร้อมตรวจยืนยันการส่งคืนหรือทำลายข้อมูลอย่างปลอดภัย'
      }
    ],
    correctChoiceIds: ['c3', 'c5'],
    explanationTh:
      'Vendor Monitoring ต้องทำต่อเนื่องตลอดอายุสัญญาโดยอาศัยหลักฐานที่เป็นปัจจุบัน ทั้งรายงานการประเมินอิสระ (SOC 2), หลักฐานตรวจสอบภายใน (Internal Audit Evidence), ผล Penetration Testing และ Threat Intelligence ส่วนเมื่อสิ้นสุดสัญญาต้องทำ Vendor Offboarding เพิกถอนสิทธิ์ทั้งหมดและทำลาย/ส่งคืนข้อมูลตามสัญญา',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: แบบสอบถามเก่าเมื่อ 2 ปีก่อนไม่สามารถสะท้อนการเปลี่ยนแปลงบุคลากรหรือภัยคุกคามใหม่ได้ โดย Questionnaire ใช้เพียงจุดเริ่มต้นหรือรอบทบทวนที่ไม่ควรพึ่งพาโดยขาดหลักฐานอื่น',
      c2: 'ไม่ถูกต้อง: BPA ใช้สร้างความเป็นหุ้นส่วนทางธุรกิจ ไม่ใช่วิธีปิดสัญญาผู้รับเหมาที่กำลังออกจากโครงการ โดย BPA เหมาะสมเมื่อสององค์กรตกลงร่วมลงทุนธุรกิจใหม่ด้วยกัน',
      c3: 'ถูกต้อง: การทบทวน SOC 2, Evidence of Internal Audits, ผล Pentest ล่าสุด และ Threat Intelligence เป็นหัวใจของการทำ Vendor Monitoring ต่อเนื่อง',
      c4: 'ไม่ถูกต้อง: การทิ้งบัญชีค้างไว้หลังหมดสัญญาเป็นช่องโหว่การเข้าถึงโดยมิชอบอย่างร้ายแรง โดยหากจำเป็นต้องสอบถามข้อมูลภายหลังควรให้พนักงานภายในดึงรายงานให้แทนการเปิด VPN ค้างไว้',
      c5: 'ถูกต้อง: การเพิกถอนบัญชี, API Keys, VPN และการตรวจยืนยันการส่งคืนหรือทำลายข้อมูลคือขั้นตอนสำคัญของ Vendor Offboarding'
    },
    misconceptionTh:
      'ผู้เรียนบางคนคิดว่าการประเมิน Vendor จบลงตั้งแต่วันเซ็นสัญญา และมักละเลยการเพิกถอน API Keys กับการยืนยันการทำลายข้อมูลเมื่อสิ้นสุดสัญญา',
    relatedLessonIds: ['L5-04', 'L4-08'],
    tags: ['third-party-risk', 'vendor-monitoring', 'offboarding', 'internal-audit', 'penetration-testing']
  },
  {
    id: 'Q5-030',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'A telecommunications carrier and a mobile payment fintech agree to launch a co-branded digital wallet joint venture, sharing development capital, governance voting rights, customer revenue splits, and joint security liability as long-term equity partners rather than operating under a standard buyer-supplier service contract. Which agreement type BEST governs this commercial relationship?',
    promptTh:
      'ผู้ให้บริการโทรคมนาคมและบริษัทฟินเทคด้านการชำระเงินผ่านมือถือตกลงร่วมกันเปิดตัวธุรกิจร่วมทุนกระเป๋าเงินดิจิทัลภายใต้แบรนด์ร่วม โดยร่วมลงทุนพัฒนา แบ่งปันสิทธิออกเสียงในการกำกับดูแล สัดส่วนรายได้จากลูกค้า และความรับผิดด้านความปลอดภัยร่วมกันในฐานะพันธมิตรทางธุรกิจระยะยาว แทนที่จะเป็นสัญญาจ้างซื้อขายบริการทั่วไป ข้อตกลงประเภทใดกำกับดูแลความสัมพันธ์เชิงพาณิชย์นี้ได้ดีที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Work Order / Statement of Work (WO/SOW)', textTh: 'ใบสั่งงาน / ขอบเขตการดำเนินงาน (WO/SOW)' },
      { id: 'c2', textEn: 'Memorandum of Understanding (MOU)', textTh: 'บันทึกความเข้าใจ (MOU)' },
      { id: 'c3', textEn: 'Business Partners Agreement (BPA)', textTh: 'ข้อตกลงความเป็นหุ้นส่วนทางธุรกิจ (Business Partners Agreement: BPA)' },
      { id: 'c4', textEn: 'Service Level Agreement (SLA)', textTh: 'ข้อตกลงระดับการให้บริการ (SLA)' }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'Business Partners Agreement (BPA) เป็นข้อตกลงเฉพาะสำหรับการเป็นพันธมิตรหรือหุ้นส่วนทางธุรกิจที่ร่วมลงทุน แบ่งปันผลประโยชน์ อำนาจตัดสินใจ และความเสี่ยงร่วมกัน แตกต่างจากสัญญาจ้างบริการระหว่างผู้ซื้อและผู้ขายอย่าง MSA, WO/SOW หรือ SLA',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: WO/SOW ใช้กำหนดขอบเขตงานและค่าจ้างเฉพาะโครงการภายใต้ความสัมพันธ์แบบผู้ว่าจ้างกับผู้รับจ้าง ไม่ใช่โครงสร้างการถือหุ้นและแบ่งรายได้ร่วมกัน โดย WO/SOW เหมาะสมเมื่อเปิดโครงการย่อยภายใต้ MSA',
      c2: 'ไม่ถูกต้อง: MOU เป็นบันทึกแสดงเจตนารมณ์ร่วมมือเบื้องต้นที่ไม่ลงรายละเอียดการแบ่งเงินทุน สิทธิ์โหวต หรือความรับผิดทางพาณิชย์เข้มข้น โดย MOU เหมาะสมในช่วงเริ่มต้นเจรจาความร่วมมือเชิงยุทธศาสตร์',
      c3: 'ถูกต้อง: BPA ออกแบบมาเพื่อกำหนดกรอบความเป็นหุ้นส่วนทางธุรกิจ การแบ่งสัดส่วนรายได้ อำนาจการตัดสินใจ และความรับผิดชอบร่วมกันของคู่ค้าพันธมิตร',
      c4: 'ไม่ถูกต้อง: SLA ระบุตัวชี้วัดคุณภาพบริการทางเทคนิค (เช่น Uptime และเวลาตอบสนอง) ไม่ใช่สัญญาโครงสร้างความเป็นหุ้นส่วนหรือการแบ่งกำไร โดย SLA เหมาะสมเมื่อวัดประสิทธิภาพการส่งมอบบริการไอทีของ Vendor'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนระหว่าง BPA (ข้อตกลงร่วมทุน/หุ้นส่วนทางธุรกิจที่แบ่งปันผลประโยชน์และความรับผิด) กับ MSA หรือ MOU ที่ใช้ในบริบทการจ้างบริการหรือบันทึกความเข้าใจเบื้องต้น',
    relatedLessonIds: ['L5-04'],
    tags: ['third-party-risk', 'agreements', 'bpa', 'partnership']
  }
];
