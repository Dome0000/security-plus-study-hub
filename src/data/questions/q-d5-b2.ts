import type { Question } from '../../types';

export const Q_D5_B2: Question[] = [
  // =========================================================================
  // Objective 5.4: Summarize elements of effective security compliance
  // =========================================================================
  {
    id: 'Q5-031',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'During a quarterly readiness review, a healthcare insurer discovers that MFA enforcement is missing on three internal billing consoles, though no unauthorized access or data exposure has occurred. The compliance manager compiles gap metrics and remediation deadlines for the executive risk committee and board of directors. Which compliance activity BEST describes this communication?',
    promptTh:
      'ระหว่างการทบทวนความพร้อมรายไตรมาส บริษัทประกันสุขภาพพบว่าระบบเรียกเก็บเงินภายใน 3 เครื่องยังไม่ได้บังคับใช้ MFA แต่ยังไม่พบการเข้าถึงโดยมิชอบหรือข้อมูลรั่วไหล ผู้จัดการฝ่ายกำกับดูแลจึงสรุปช่องว่างและกำหนดเวลาแก้ไขเสนอต่อคณะกรรมการบริหารความเสี่ยงและคณะกรรมการบริษัท กิจกรรมนี้ตรงกับข้อใดมากที่สุด?',
    choices: [
      { id: 'c1', textEn: 'External breach notification', textTh: 'การแจ้งเหตุละเมิดต่อภายนอก (External breach notification)' },
      { id: 'c2', textEn: 'Internal compliance reporting', textTh: 'การรายงานการปฏิบัติตามข้อกำหนดภายใน (Internal compliance reporting)' },
      { id: 'c3', textEn: 'Regulatory examination', textTh: 'การเข้าตรวจสอบโดยผู้กำกับดูแล (Regulatory examination)' },
      { id: 'c4', textEn: 'Independent third-party attestation', textTh: 'การรับรองโดยผู้สอบบัญชีอิสระภายนอก (Independent third-party attestation)' }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'เป็นการสื่อสารสถานะความสอดคล้องและแผนแก้ไขช่องว่างภายในองค์กรต่อผู้บริหารและบอร์ดก่อนเกิดเหตุ จึงเป็น Internal compliance reporting',
    choiceRationales: {
      c1: 'ผิด: ยังไม่มีเหตุละเมิดที่ต้องแจ้งสาธารณะหรือผู้กำกับดูแล; เหมาะเมื่อเกิดเหตุข้อมูลส่วนบุคคลรั่วไหลจริงตามกรอบเวลาที่กฎหมายกำหนด',
      c2: 'ถูก: การสรุปช่องว่างและแผนแก้ไขเสนอต่อคณะกรรมการความเสี่ยงและบอร์ดเป็นการรายงานกำกับดูแลภายในองค์กร',
      c3: 'ผิด: ไม่ใช่การตรวจสอบโดยเจ้าหน้าที่รัฐที่มีอำนาจตามกฎหมาย; เหมาะเมื่อหน่วยงานกำกับดูแลเข้าตรวจระบบและเอกสารขององค์กร',
      c4: 'ผิด: ผู้รายงานคือผู้จัดการภายใน ไม่ใช่ผู้ประเมินอิสระภายนอก; เหมาะเมื่อผู้สอบบัญชีรับรองมาตรฐานให้คู่ค้าภายนอก'
    },
    misconceptionTh:
      'มักเข้าใจผิดว่าการรายงานข้อบกพร่องด้านความปลอดภัยทุกครั้งต้องส่งต่อหน่วยงานรัฐภายนอกทันที',
    relatedLessonIds: ['L5-05', 'L5-01'],
    tags: ['compliance-reporting', 'internal-reporting', 'governance']
  },
  {
    id: 'Q5-032',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'After repeated failures to secure electronic patient records and respond to prior warning notices, a regional medical laboratory has its clinical accreditation revoked by the health authority, forcing it to halt regulated diagnostic testing immediately. Which consequence of non-compliance BEST characterizes this outcome?',
    promptTh:
      'หลังจากละเลยการปกป้องข้อมูลเวชระเบียนอิเล็กทรอนิกส์และเพิกเฉยต่อหนังสือเตือนหลายครั้ง ห้องปฏิบัติการทางการแพทย์ระดับภูมิภาคถูกหน่วยงานสาธารณสุขเพิกถอนใบรับรองสถานประกอบการ ส่งผลให้ต้องหยุดให้บริการตรวจวินิจฉัยทันที ผลกระทบจากการไม่ปฏิบัติตามข้อกำหนดข้อใดอธิบายสถานการณ์นี้ได้ดีที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Contractual impacts', textTh: 'ผลกระทบทางสัญญา (Contractual impacts)' },
      { id: 'c2', textEn: 'Reputational damage', textTh: 'ความเสียหายต่อชื่อเสียง (Reputational damage)' },
      { id: 'c3', textEn: 'Monetary fines', textTh: 'ค่าปรับทางการเงิน (Monetary fines)' },
      { id: 'c4', textEn: 'Loss of license', textTh: 'การสูญเสียใบอนุญาตประกอบกิจการ (Loss of license)' }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'การถูกหน่วยงานกำกับดูแลเพิกถอนใบรับรองจนไม่สามารถประกอบกิจการเฉพาะทางได้อีกต่อไป ตรงกับ Loss of license โดยตรง',
    choiceRationales: {
      c1: 'ผิด: เหตุนี้เป็นการเพิกถอนสิทธิ์โดยผู้กำกับดูแล ไม่ใช่การผิดสัญญาคู่ค้า; เหมาะเมื่อลูกค้าองค์กรบอกเลิกสัญญาหรือปรับทางแพ่ง',
      c2: 'ผิด: คำสั่งระงับสิทธิ์ประกอบวิชาชีพเป็นผลทางกฎหมายโดยตรง ไม่ใช่เพียงภาพลักษณ์; เหมาะเมื่อลูกค้าขาดความเชื่อมั่นและย้ายไปใช้คู่แข่ง',
      c3: 'ผิด: โจทย์ระบุการถอนใบรับรองและหยุดกิจการ ไม่ได้กล่าวถึงการปรับเป็นตัวเงิน; เหมาะเมื่อผู้กำกับดูแลสั่งปรับเงินตามสัดส่วนรายได้',
      c4: 'ถูก: การถูกถอนใบรับรองหรือสิทธิ์ดำเนินการตามกฎหมายจากการฝ่าฝืนข้อกำหนดอย่างต่อเนื่องคือ Loss of license'
    },
    misconceptionTh:
      'มักเหมารวมการเพิกถอนใบอนุญาตเป็นค่าปรับหรือความเสียหายทางชื่อเสียง ทั้งที่มีผลบังคับให้หยุดดำเนินกิจการทันที',
    relatedLessonIds: ['L5-05'],
    tags: ['non-compliance', 'loss-of-license', 'regulatory']
  },
  {
    id: 'Q5-033',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'Before procuring a cloud payroll platform, a compliance team reviews the vendor’s independent audit reports, evaluates cross-border privacy statutes, and verifies data-encryption specifications to determine what safeguards are legally required prior to contract approval. Which principle is the team demonstrating?',
    promptTh:
      'ก่อนจัดซื้อแพลตฟอร์มคำนวณเงินเดือนบนคลาวด์ ทีมกำกับดูแลได้ตรวจสอบรายงานการตรวจประเมินอิสระของผู้ให้บริการ ศึกษากฎหมายคุ้มครองข้อมูลข้ามแดน และตรวจสเปกการเข้ารหัสเพื่อประเมินข้อกำหนดที่จำเป็นก่อนอนุมัติสัญญา ทีมงานกำลังแสดงหลักการใด?',
    choices: [
      { id: 'c1', textEn: 'Due diligence', textTh: 'Due diligence' },
      { id: 'c2', textEn: 'Due care', textTh: 'Due care' },
      { id: 'c3', textEn: 'User acknowledgement', textTh: 'User acknowledgement' },
      { id: 'c4', textEn: 'Right to be forgotten', textTh: 'Right to be forgotten' }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'Due diligence คือการศึกษา สืบค้น ประเมินความเสี่ยง และตรวจสอบข้อกฎหมายของคู่ค้าหรือระบบอย่างรอบคอบก่อนตัดสินใจลงทุนหรือลงนามสัญญา',
    choiceRationales: {
      c1: 'ถูก: การตรวจสอบรายงานผู้ให้บริการและข้อกฎหมายก่อนอนุมัติสัญญาเป็นการสืบค้นเพื่อรู้ว่าต้องทำอะไร (Due diligence)',
      c2: 'ผิด: Due care เป็นการลงมือปฏิบัติและบำรุงรักษามาตรการควบคุมอย่างต่อเนื่อง; เหมาะเมื่อองค์กรแพตช์ระบบและบังคับใช้ MFA ประจำวัน',
      c3: 'ผิด: เป็นการลงนามรับทราบนโยบายของพนักงาน ไม่ใช่การประเมินผู้ให้บริการ; เหมาะเมื่อบุคลากรลงชื่อยอมรับ AUP',
      c4: 'ผิด: เป็นสิทธิของเจ้าของข้อมูลในการขอลบข้อมูลส่วนบุคคล; เหมาะเมื่อผู้ใช้ส่งคำร้องให้ลบประวัติบัญชีออกจากระบบ'
    },
    misconceptionTh:
      'ผู้เรียนมักสลับความหมายระหว่าง Due diligence (ตรวจสอบก่อนตัดสินใจ) กับ Due care (ลงมือปฏิบัติและดูแลต่อเนื่อง)',
    relatedLessonIds: ['L5-05', 'L5-04'],
    tags: ['due-diligence', 'compliance-monitoring', 'vendor-review']
  },
  {
    id: 'Q5-034',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.4'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'A multinational payment processor ignores mandatory regional data-residency rules for 18 months. Following an investigation, an administrative regulator issues a formal order prohibiting the firm from onboarding new cross-border merchants, and two enterprise retail clients terminate their service agreements under breach-of-compliance clauses. Which TWO consequences of non-compliance are illustrated? (Choose two.)',
    promptTh:
      'ผู้ประมวลผลการชำระเงินข้ามชาติรายหนึ่งละเลยข้อกำหนดถิ่นที่อยู่ของข้อมูลระดับภูมิภาคนาน 18 เดือน หลังการสืบสวน หน่วยงานกำกับดูแลทางปกครองออกคำสั่งห้ามบริษัทรับร้านค้าข้ามพรมแดนรายใหม่ และลูกค้าองค์กรค้าปลีก 2 รายได้บอกเลิกสัญญาบริการตามข้อกำหนดกรณีผิดเงื่อนไข ผลกระทบจากการไม่ปฏิบัติตามข้อกำหนด 2 ข้อใดที่ปรากฏในสถานการณ์นี้? (เลือก 2 ข้อ)',
    choices: [
      { id: 'c1', textEn: 'Sanctions', textTh: 'การลงโทษทางปกครองและคำสั่งจำกัดการดำเนินงาน (Sanctions)' },
      { id: 'c2', textEn: 'Monetary fines', textTh: 'ค่าปรับทางการเงิน (Monetary fines)' },
      { id: 'c3', textEn: 'Loss of license', textTh: 'การเพิกถอนใบอนุญาต (Loss of license)' },
      { id: 'c4', textEn: 'Contractual impacts', textTh: 'ผลกระทบทางสัญญา (Contractual impacts)' },
      { id: 'c5', textEn: 'Reputational damage', textTh: 'ความเสียหายต่อชื่อเสียง (Reputational damage)' }
    ],
    correctChoiceIds: ['c1', 'c4'],
    explanationTh:
      'คำสั่งของหน่วยงานรัฐที่ห้ามรับลูกค้าข้ามแดนรายใหม่คือ Sanctions ส่วนการที่คู่ค้าองค์กรใช้สิทธิ์บอกเลิกสัญญาจากการผิดข้อกำหนดคือ Contractual impacts',
    choiceRationales: {
      c1: 'ถูก: คำสั่งทางปกครองที่จำกัดขอบเขตธุรกรรมหรือห้ามขยายบริการบางประเภทจัดเป็น Sanctions',
      c2: 'ผิด: โจทย์ไม่ได้ระบุจำนวนเงินค่าปรับจากผู้กำกับดูแล; เหมาะเมื่อมีบทลงโทษปรับเป็นตัวเงินหรือร้อยละของรายได้',
      c3: 'ผิด: บริษัทยังไม่ถูกเพิกถอนใบอนุญาตประกอบธุรกิจทั้งหมด; เหมาะเมื่อผู้กำกับดูแลสั่งถอนใบอนุญาตดำเนินงานถาวร',
      c4: 'ถูก: การที่ลูกค้าองค์กรบอกเลิกสัญญาบริการภายใต้เงื่อนไขการผิดข้อกำหนดคือ Contractual impacts',
      c5: 'ผิด: แม้ชื่อเสียงอาจกระทบภายหลัง แต่โจทย์ระบุชัดเจนถึงคำสั่งห้ามและผลทางสัญญา; เหมาะเมื่อสื่อรายงานจนลูกค้าทั่วไปถอนตัว'
    },
    misconceptionTh:
      'มักสับสนระหว่าง Sanctions (คำสั่งจำกัดหรือห้ามดำเนินการบางส่วน) กับ Loss of license (การเพิกถอนใบอนุญาตทั้งหมด)',
    relatedLessonIds: ['L5-05'],
    tags: ['sanctions', 'contractual-impacts', 'non-compliance']
  },
  {
    id: 'Q5-035',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'After adopting a corporate data-protection policy, an IT operations team enables full-disk encryption across all laptops, applies critical OS patches within 14 days, enforces phishing-resistant MFA, and performs quarterly access reviews consistently to demonstrate ongoing reasonable safeguards. Which concept BEST describes these sustained operational actions?',
    promptTh:
      'ภายหลังการประกาศใช้นโยบายคุ้มครองข้อมูลองค์กร ฝ่ายปฏิบัติการไอทีได้เปิดใช้งานการเข้ารหัสทั้งดิสก์บนโน้ตบุ๊กทุกเครื่อง ติดตั้งแพตช์สำคัญภายใน 14 วัน บังคับใช้ MFA ที่ต้านทานฟิชชิง และทบทวนสิทธิ์ผู้ใช้ทุกไตรมาสอย่างต่อเนื่องเพื่อแสดงการดูแลปกป้องตามสมควร แนวคิดใดอธิบายการปฏิบัติอย่างต่อเนื่องเหล่านี้ได้ดีที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Due diligence', textTh: 'Due diligence' },
      { id: 'c2', textEn: 'External compliance reporting', textTh: 'External compliance reporting' },
      { id: 'c3', textEn: 'Due care', textTh: 'Due care' },
      { id: 'c4', textEn: 'Data inventory mapping', textTh: 'Data inventory mapping' }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'การลงมือบังคับใช้มาตรการทางเทคนิค บำรุงรักษาแพตช์ และทบทวนสิทธิ์อย่างสม่ำเสมอตามมาตรฐานวิชาชีพคือ Due care ("ลงมือทำในสิ่งที่ถูกต้อง")',
    choiceRationales: {
      c1: 'ผิด: Due diligence เป็นขั้นตอนสืบค้นและประเมินก่อนเริ่มดำเนินการ; เหมาะเมื่อทีมงานศึกษาข้อกฎหมายหรือประเมินคู่ค้าก่อนเซ็นสัญญา',
      c2: 'ผิด: กิจกรรมเหล่านี้คือการปฏิบัติการป้องกัน ไม่ใช่การส่งรายงานต่อผู้กำกับดูแล; เหมาะเมื่อยื่นหลักฐานความสอดคล้องให้หน่วยงานภายนอก',
      c3: 'ถูก: การปฏิบัติและบำรุงรักษามาตรการควบคุมอย่างต่อเนื่องเพื่อลดความเสี่ยงความประมาทเลินเล่อคือ Due care',
      c4: 'ผิด: การเข้ารหัสและแพตช์ไม่ใช่การจัดทำบัญชีแหล่งเก็บข้อมูล; เหมาะเมื่อต้องการบันทึกว่า PII ถูกเก็บและไหลผ่านระบบใดบ้าง'
    },
    misconceptionTh:
      'ผู้สอบมักเข้าใจว่าขั้นตอนปฏิบัติทางเทคนิคประจำวันคือ Due diligence ทั้งที่การลงมือดูแลรักษาจริงจัดเป็น Due care',
    relatedLessonIds: ['L5-05'],
    tags: ['due-care', 'compliance-monitoring', 'security-operations']
  },
  {
    id: 'Q5-036',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'To prepare evidence for an annual compliance review, a company requires every employee to digitally sign the updated Acceptable Use Policy confirming they read its rules, and instructs system managers to formally verify that each team member’s application privileges remain accurate. Which pair of mechanisms is described in order?',
    promptTh:
      'เพื่อเตรียมหลักฐานสำหรับการทบทวนความสอดคล้องประจำปี บริษัทกำหนดให้พนักงานทุกคนลงนามดิจิทัลรับทราบนโยบาย AUP ฉบับปรับปรุงว่าได้อ่านกฎเกณฑ์แล้ว และให้ผู้จัดการระบบรับรองอย่างเป็นทางการว่าสิทธิ์เข้าถึงแอปพลิเคชันของสมาชิกในทีมยังถูกต้องตามหน้าที่ กลไกทั้งสองข้อใดตรงกับลำดับข้างต้น?',
    choices: [
      { id: 'c1', textEn: 'Attestation and automation', textTh: 'Attestation และ Automation' },
      { id: 'c2', textEn: 'Acknowledgement and attestation', textTh: 'Acknowledgement และ Attestation' },
      { id: 'c3', textEn: 'Due diligence and sanctions', textTh: 'Due diligence และ Sanctions' },
      { id: 'c4', textEn: 'Ownership and data retention', textTh: 'Ownership และ Data retention' }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'การลงนามรับทราบนโยบายของพนักงานคือ Acknowledgement และการที่ผู้จัดการยืนยันรับรองความถูกต้องของรายการสิทธิ์อย่างเป็นทางการคือ Attestation',
    choiceRationales: {
      c1: 'ผิด: ลำดับแรกคือการรับทราบนโยบายและไม่มีระบบอัตโนมัติในโจทย์; เหมาะเมื่อซอฟต์แวร์ตรวจการตั้งค่าผิดเพี้ยนแทนคน',
      c2: 'ถูก: พนักงานลงชื่อรับทราบกฎ (Acknowledgement) และผู้จัดการรับรองสถานะสิทธิ์ (Attestation) ตรงตามลำดับ',
      c3: 'ผิด: ไม่เกี่ยวข้องกับการสืบค้นก่อนตัดสินใจหรือบทลงโทษทางปกครอง; เหมาะกับการคัดกรองผู้ขายหรือคำสั่งระงับสิทธิ์ของรัฐ',
      c4: 'ผิด: ไม่ใช่เรื่องสิทธิ์ความเป็นเจ้าของข้อมูลหรืออายุการจัดเก็บ; เหมาะเมื่อกำหนดระยะเวลาทำลายบันทึกประวัติลูกค้า'
    },
    misconceptionTh:
      'มักใช้คำว่า Acknowledgement และ Attestation สลับกัน โดยลืมว่า Acknowledgement คือรับทราบนโยบาย ส่วน Attestation คือรับรองความถูกต้องของสถานะ',
    relatedLessonIds: ['L5-05', 'L5-06'],
    tags: ['acknowledgement', 'attestation', 'compliance-monitoring']
  },
  {
    id: 'Q5-037',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.4'],
    type: 'msq',
    selectCount: 3,
    difficulty: 'exam-ready',
    promptEn:
      'A multinational SaaS provider stores customer data across municipal, state, European Union, and national jurisdictions. Recent audits revealed unapproved cloud storage drift violating regional data-residency rules, and manual annual spreadsheets failed to catch changes in time. Which THREE practices BEST improve continuous compliance and multi-jurisdictional privacy alignment? (Choose three.)',
    promptTh:
      'ผู้ให้บริการ SaaS ข้ามชาติจัดเก็บข้อมูลลูกค้าครอบคลุมเขตอำนาจกฎหมายระดับเทศบาล มลรัฐ สหภาพยุโรป และระดับประเทศ ผลการตรวจล่าสุดพบความคลาดเคลื่อนของการตั้งค่าพื้นที่เก็บข้อมูลบนคลาวด์ที่ละเมิดกฎถิ่นที่อยู่ข้อมูลระดับภูมิภาค ขณะที่ตารางตรวจประจำปีแบบทำมือตรวจพบความเปลี่ยนแปลงไม่ทันการณ์ แนวปฏิบัติ 3 ข้อใดช่วยยกระดับการเฝ้าติดตามความสอดคล้องต่อเนื่องและความสอดคล้องกฎหมายความเป็นส่วนตัวหลายระดับได้ดีที่สุด? (เลือก 3 ข้อ)',
    choices: [
      { id: 'c1', textEn: 'Deploy policy-as-code and posture automation to detect configuration drift continuously', textTh: 'ใช้ Policy-as-code และระบบอัตโนมัติตรวจจับ Configuration drift อย่างต่อเนื่อง' },
      { id: 'c2', textEn: 'Rely solely on annual user acknowledgements to prevent cloud storage misconfigurations', textTh: 'พึ่งพาการลงนามรับทราบนโยบายประจำปีเพียงอย่างเดียวเพื่อป้องกันการตั้งค่าคลาวด์ผิดพลาด' },
      { id: 'c3', textEn: 'Map overlapping local, regional, national, and global privacy mandates into baseline rules', textTh: 'จัดทำแผนผังข้อกำหนดความเป็นส่วนตัวระดับ Local, Regional, National และ Global ที่ซ้อนทับกันเป็นเกณฑ์พื้นฐาน' },
      { id: 'c4', textEn: 'Delegate all statutory controller accountability to external cloud sub-processors', textTh: 'โอนความรับผิดชอบตามกฎหมายทั้งหมดของ Controller ไปยัง Sub-processor ภายนอก' },
      { id: 'c5', textEn: 'Maintain a centralized data inventory tracking personal data locations and cross-border flows', textTh: 'จัดทำบัญชีรายการข้อมูลส่วนกลางเพื่อติดตามตำแหน่งที่เก็บและการส่งข้อมูลข้ามแดน' }
    ],
    correctChoiceIds: ['c1', 'c3', 'c5'],
    explanationTh:
      'การแก้ปัญหาตั้งค่าผิดเพี้ยนแบบทันท่วงทีและกฎหมายหลายระดับต้องใช้ Automation ตรวจ Drift (c1), แผนผังกฎหมายทุกระดับ (c3) และ Data Inventory ติดตามเส้นทางข้อมูล (c5)',
    choiceRationales: {
      c1: 'ถูก: Compliance automation และ Policy-as-code ช่วยตรวจจับ Configuration drift บนคลาวด์ได้แบบต่อเนื่องทันท่วงที',
      c2: 'ผิด: การลงนามรับทราบปีละครั้งไม่ตรวจจับการเปลี่ยนค่าทางเทคนิค; เหมาะสำหรับยืนยันว่าพนักงานอ่านนโยบายแล้ว',
      c3: 'ถูก: การแมปข้อบังคับ Local/Regional/National/Global ช่วยให้มาตรฐานกลางไม่ขัดแย้งกับกฎหมายแต่ละพื้นที่',
      c4: 'ผิด: กฎหมายความเป็นส่วนตัวยังคงให้ Data Controller รับผิดชอบหลัก; เหมาะกับการทำสัญญาควบคุมหน้าที่ของ Processor ไม่ใช่โอนความรับผิดทั้งหมด',
      c5: 'ถูก: Data inventory ทำให้ทราบชัดเจนว่าข้อมูลส่วนบุคคลอยู่ที่ภูมิภาคใดและไหลไปที่ใดบ้าง'
    },
    misconceptionTh:
      'มักคิดว่าการใช้คลาวด์ผู้ให้บริการภายนอกช่วยพ้นความรับผิดชอบด้านถิ่นที่อยู่ข้อมูล หรือคิดว่าการตรวจด้วยมือปีละครั้งเพียงพอ',
    relatedLessonIds: ['L5-05', 'L3-06'],
    tags: ['compliance-automation', 'privacy-laws', 'data-inventory', 'cross-border']
  },
  {
    id: 'Q5-038',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A retail chain collects shopper loyalty profiles to personalize offers and hires a third-party cloud marketing vendor to send promotional emails strictly under written instructions. During a privacy review, an executive claims the company owns the shoppers’ personal data outright and can resell it without notice. Which statement BEST reflects privacy governance roles and ownership?',
    promptTh:
      'เครือข่ายค้าปลีกเก็บข้อมูลโปรไฟล์สมาชิกลูกค้าเพื่อออกแบบโปรโมชันและว่าจ้างผู้ให้บริการการตลาดบนคลาวด์ภายนอกส่งอีเมลตามคำสั่งลายลักษณ์อักษรเท่านั้น ระหว่างการทบทวนความเป็นส่วนตัว ผู้บริหารรายหนึ่งอ้างว่าบริษัทเป็นเจ้าของข้อมูลส่วนบุคคลของลูกค้าโดยสมบูรณ์และสามารถนำไปขายต่อได้โดยไม่ต้องแจ้งให้ทราบ ข้อความใดสะท้อนบทบาทและความเป็นเจ้าของข้อมูลตามหลัก Privacy ได้ถูกต้องที่สุด?',
    choices: [
      { id: 'c1', textEn: 'The marketing vendor is the data controller because it operates the email delivery servers.', textTh: 'ผู้ให้บริการการตลาดเป็น Data controller เพราะเป็นผู้ดูแลเซิร์ฟเวอร์ส่งอีเมล' },
      { id: 'c2', textEn: 'The retail chain holds unrestricted ownership of personal data once entered into its database.', textTh: 'เครือข่ายค้าปลีกมีความเป็นเจ้าของข้อมูลส่วนบุคคลอย่างไม่มีข้อจำกัดเมื่อข้อมูลเข้าสู่ฐานข้อมูลแล้ว' },
      { id: 'c3', textEn: 'Shoppers are data custodians responsible for encrypting the retail chain’s cloud backups.', textTh: 'ลูกค้าเป็น Data custodian ที่รับผิดชอบการเข้ารหัสข้อมูลสำรองบนคลาวด์ของบริษัท' },
      { id: 'c4', textEn: 'The retail chain is the data controller, the vendor is the data processor, and the shopper retains data subject rights.', textTh: 'เครือข่ายค้าปลีกเป็น Data controller ผู้ให้บริการภายนอกเป็น Data processor และลูกค้ายังคงมีสิทธิ์ในฐานะ Data subject' }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'บริษัทค้าปลีกเป็นผู้กำหนดวัตถุประสงค์การใช้ข้อมูล (Controller) ผู้รับจ้างทำตามคำสั่ง (Processor) และลูกค้ายังคงสิทธิความเป็นเจ้าของข้อมูลส่วนบุคคล (Data subject)',
    choiceRationales: {
      c1: 'ผิด: ผู้รับจ้างส่งเมลทำตามคำสั่งเท่านั้น จึงเป็น Processor ไม่ใช่ Controller; เหมาะเมื่อผู้ให้บริการเป็นผู้กำหนดวัตถุประสงค์เก็บข้อมูลเอง',
      c2: 'ผิด: กฎหมาย Privacy ให้สิทธิ์ควบคุมข้อมูลแก่บุคคลธรรมดา ไม่ใช่ให้บริษัทนำไปขายตามอำเภอใจ; เหมาะกับข้อมูลทรัพย์สินทางปัญญาที่บริษัทสร้างเอง',
      c3: 'ผิด: ลูกค้าคือ Data subject ไม่ใช่ผู้ดูแลระบบเทคนิค; Data custodian เหมาะกับผู้ดูแลระบบหรือ DBA ขององค์กร',
      c4: 'ถูก: แยกบทบาท Controller (กำหนดวัตถุประสงค์), Processor (ทำตามคำสั่ง) และสิทธิของ Data subject เหนือข้อมูลตนได้ถูกต้องครบถ้วน'
    },
    misconceptionTh:
      'มักเข้าใจผิดว่าองค์กรที่เป็น Data Owner ของระบบฐานข้อมูลสามารถนำข้อมูลส่วนบุคคลของลูกค้าไปใช้หรือขายต่อนอกวัตถุประสงค์ได้',
    relatedLessonIds: ['L5-05', 'L5-01'],
    tags: ['privacy-roles', 'controller-vs-processor', 'data-subject', 'ownership']
  },
  {
    id: 'Q5-039',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'A financial firm faces conflicting pressures: tax statutes mandate keeping customer invoices for seven years, whereas privacy regulations prohibit retaining outdated marketing leads indefinitely. Meanwhile, engineering teams cannot locate all CSV exports scattered across legacy file shares. What should the compliance officer establish FIRST to enforce lawful retention and disposal?',
    promptTh:
      'บริษัทการเงินเผชิญแรงกดดันสองด้าน: กฎหมายภาษีกำหนดให้เก็บใบกำกับภาษีลูกค้าไว้ 7 ปี ขณะที่กฎหมายความเป็นส่วนตัวห้ามเก็บข้อมูลผู้มุ่งหวังทางการตลาดที่หมดอายุไว้โดยไม่มีกำหนด นอกจากนี้ทีมวิศวกรยังไม่สามารถระบุตำแหน่งไฟล์ CSV ที่ถูกส่งออกกระจัดกระจายบนแชร์ไฟล์เก่าทั้งหมดได้ เจ้าหน้าที่กำกับดูแลควรจัดทำสิ่งใดเป็นลำดับแรกเพื่อบังคับใช้นโยบายจัดเก็บและทำลายข้อมูลอย่างถูกต้อง?',
    choices: [
      { id: 'c1', textEn: 'A comprehensive data inventory paired with a tiered retention schedule', textTh: 'บัญชีรายการข้อมูล (Data inventory) ที่ครบถ้วนควบคู่กับตารางกำหนดระยะเวลาเก็บรักษา (Retention schedule)' },
      { id: 'c2', textEn: 'An immediate script deleting all files older than 30 days across every server', textTh: 'สคริปต์ลบไฟล์ทุกชนิดที่มีอายุเกิน 30 วันออกจากทุกเซิร์ฟเวอร์ทันที' },
      { id: 'c3', textEn: 'A public attestation report confirming zero legacy backups remain on premises', textTh: 'รายงานรับรองสาธารณะว่าไม่มีไฟล์สำรองข้อมูลเก่าหลงเหลืออยู่ในองค์กร' },
      { id: 'c4', textEn: 'An automated phishing campaign targeting finance staff handling invoices', textTh: 'แคมเปญจำลองฟิชชิงเจาะจงพนักงานฝ่ายการเงินที่ดูแลใบกำกับภาษี' }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'ต้องเริ่มจาก Data inventory เพื่อรู้ว่าข้อมูลแต่ละประเภทอยู่ที่ใดก่อน จากนั้นจึงผูกเข้ากับ Data retention schedule เพื่อแยกอายุเก็บตามกฎหมายภาษีกับข้อมูลการตลาด',
    choiceRationales: {
      c1: 'ถูก: การค้นหาตำแหน่งข้อมูลทั้งหมดผ่าน Data inventory และกำหนดอายุเก็บแยกประเภทเป็นขั้นตอนแรกที่จำเป็นก่อนลบอย่างปลอดภัย',
      c2: 'ผิด: การลบเหมาทุกไฟล์เกิน 30 วันจะทำลายใบกำกับภาษีที่กฎหมายบังคับเก็บ 7 ปี; เหมาะกับข้อมูลชั่วคราวที่ไม่ติดข้อกำหนดกฎหมายเท่านั้น',
      c3: 'ผิด: ยังไม่รู้ตำแหน่งไฟล์จริงจึงออกคำรับรองไม่ได้; Attestation เหมาะทำหลังจากวางระบบควบคุมและตรวจสอบยืนยันผลแล้ว',
      c4: 'ผิด: การอบรมฟิชชิงไม่ช่วยค้นหาไฟล์ตกค้างหรือจัดการระยะเวลาเก็บข้อมูล; เหมาะเมื่อต้องการลดความเสี่ยงการหลอกลวงทางอีเมล'
    },
    misconceptionTh:
      'มักสั่งลบข้อมูลเก่าทั้งหมดทันทีโดยไม่ทำ Data inventory และไม่แยกข้อยกเว้นตามกฎหมายภาษีหรือบัญชี',
    relatedLessonIds: ['L5-05', 'L4-03', 'L3-05'],
    tags: ['data-inventory', 'data-retention', 'privacy', 'compliance']
  },
  {
    id: 'Q5-040',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.4'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'exam-ready',
    promptEn:
      'An EU customer submits a verified Right to be Forgotten request to an online retailer. The privacy team confirms the customer’s profile resides in the main CRM database, an external email-analytics processor, immutable 30-day backup snapshots, and statutory tax-invoice archives mandated for seven years. Which TWO actions are MOST appropriate? (Choose two.)',
    promptTh:
      'ลูกค้ารายหนึ่งในสหภาพยุโรปยื่นคำร้องขอใช้สิทธิ์ Right to be Forgotten ที่ยืนยันตัวตนแล้วต่อร้านค้าออนไลน์ ทีมความเป็นส่วนตัวพบข้อมูลลูกค้าอยู่ในฐานข้อมูล CRM หลัก ระบบของ Data processor ด้านวิเคราะห์อีเมลภายนอก สแนปช็อตสำรองข้อมูลแบบแก้ไขไม่ได้อายุ 30 วัน และคลังใบกำกับภาษีที่กฎหมายกำหนดให้เก็บ 7 ปี การดำเนินการ 2 ข้อใดเหมาะสมที่สุด? (เลือก 2 ข้อ)',
    choices: [
      { id: 'c1', textEn: 'Destroy every 30-day immutable backup snapshot containing all other customers’ records', textTh: 'ทำลายสแนปช็อตสำรองข้อมูลแบบแก้ไขไม่ได้อายุ 30 วันทั้งหมดที่เก็บข้อมูลลูกค้ารายอื่นด้วย' },
      { id: 'c2', textEn: 'Delete the customer’s profile from active CRM tables and instruct the processor to purge its copies', textTh: 'ลบโปรไฟล์ลูกค้าออกจากระบบ CRM หลักและสั่งการไปยัง Data processor ภายนอกให้ลบสำเนาเดียวกัน' },
      { id: 'c3', textEn: 'Deny the entire request outright because tax laws require invoice retention', textTh: 'ปฏิเสธคำร้องทั้งหมดทันทีเนื่องจากกฎหมายภาษีกำหนดให้เก็บใบกำกับภาษี' },
      { id: 'c4', textEn: 'Mask only the customer’s first name while retaining full contact records for marketing', textTh: 'ปิดบังเฉพาะชื่อต้นของลูกค้าแต่ยังคงเก็บข้อมูลติดต่อทั้งหมดไว้ใช้ทำการตลาดต่อ' },
      { id: 'c5', textEn: 'Preserve statutory tax invoices under documented legal exemption and maintain a suppression record until backups expire', textTh: 'เก็บรักษาใบกำกับภาษีตามข้อยกเว้นทางกฎหมายพร้อมบันทึก Suppression สำหรับรอบหมุนเวียน Backup' }
    ],
    correctChoiceIds: ['c2', 'c5'],
    explanationTh:
      'RTBF ต้องลบโปรไฟล์ออกจากระบบ CRM หลักและแจ้ง Data Processor ลบสำเนาตามคำสั่ง ขณะเดียวกันต้องแยกเก็บใบกำกับภาษีที่กฎหมายบังคับไว้ภายใต้ข้อยกเว้นทางกฎหมายพร้อมบันทึก Suppression เพื่อกันไม่ให้ข้อมูลจาก Backup ถูกกู้คืนกลับมา',
    choiceRationales: {
      c1: 'ผิด: การทำลาย Backup ทั้งระบบกระทบความพร้อมใช้งานของลูกค้ารายอื่น; ควรรอให้ Backup หมุนเวียนหมดอายุพร้อมมีกลไกกันการกู้คืนทับ',
      c2: 'ถูก: Controller ต้องลบข้อมูลที่ไม่จำเป็นในระบบหลักและประสานสั่งการให้ Processor ลบข้อมูลเดียวกันอย่างครบถ้วน',
      c3: 'ผิด: ข้อยกเว้นทางภาษีครอบคลุมเฉพาะเอกสารภาษี ไม่ใช่โปรไฟล์การตลาดใน CRM; เหมาะกับการปฏิเสธเฉพาะส่วนที่มี Legal hold เท่านั้น',
      c4: 'ผิด: การเก็บข้อมูลติดต่อไว้ทำการตลาดต่อไปขัดต่อสิทธิ RTBF; การปิดบังบางส่วนเหมาะกับการทำ Masking เพื่อแสดงผลทั่วไปเท่านั้น',
      c5: 'ถูก: แยกบังคับใช้ข้อยกเว้นตามกฎหมายภาษีอย่างโปร่งใสและบันทึก Suppression List กันข้อมูลย้อนกลับหากต้องรีสโตร์ Backup'
    },
    misconceptionTh:
      'มักเข้าใจว่า RTBF บังคับให้ทำลาย Backup ทั้งก้อนทันที หรือเข้าใจผิดว่าข้อยกเว้นทางกฎหมายเพียงข้อเดียวทำให้ไม่ต้องลบข้อมูลการตลาดส่วนอื่น',
    relatedLessonIds: ['L5-05', 'L4-03'],
    tags: ['rtbf', 'privacy', 'data-processor', 'backups']
  },

  // =========================================================================
  // Objective 5.5: Explain types and purposes of audits and assessments
  // =========================================================================
  {
    id: 'Q5-041',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A fintech startup sends an internally completed security checklist to a prospective banking partner, but the bank refuses to accept self-reported answers and demands formal written confirmation from an accredited external firm with no financial stake in the startup’s operations. Which assessment and deliverable BEST meet the bank’s requirement?',
    promptTh:
      'บริษัทสตาร์ทอัปด้านฟินเทคส่งแบบตรวจสอบความปลอดภัยที่ทีมงานกรอกเองให้แก่ธนาคารคู่ค้า แต่ธนาคารปฏิเสธคำรับรองภายในและต้องการเอกสารยืนยันอย่างเป็นทางการจากบริษัทผู้ตรวจสอบภายนอกที่ได้รับการรับรองและไม่มีส่วนได้ส่วนเสียทางการเงิน การตรวจสอบและเอกสารผลลัพธ์ใดตอบโจทย์ธนาคารมากที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Internal self-assessment and risk register', textTh: 'Internal self-assessment และ Risk register' },
      { id: 'c2', textEn: 'Defensive penetration test and alert log', textTh: 'Defensive penetration test และ Alert log' },
      { id: 'c3', textEn: 'Independent third-party audit and attestation', textTh: 'Independent third-party audit และ Attestation' },
      { id: 'c4', textEn: 'Passive reconnaissance report and SLA', textTh: 'รายงาน Passive reconnaissance และ SLA' }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'ธนาคารต้องการความเป็นกลางสูงสุดจากผู้ตรวจสอบอิสระภายนอก (Independent third-party audit) พร้อมเอกสารรับรองผลอย่างเป็นทางการ (Attestation)',
    choiceRationales: {
      c1: 'ผิด: การประเมินตนเองขาดความเป็นอิสระที่คู่ค้าร้องขอ; Self-assessment เหมาะใช้คัดกรองจุดอ่อนเบื้องต้นภายในก่อนตรวจจริง',
      c2: 'ผิด: เป็นการทดสอบขีดความสามารถการตรวจจับของทีมรับ ไม่ใช่การรับรองความสอดคล้องทั้งระบบ; เหมาะใช้ปรับจูน SOC',
      c3: 'ถูก: Independent third-party audit ให้ความน่าเชื่อถือสูงสุดแก่คู่ค้าภายนอก โดยมี Attestation เป็นลายลักษณ์อักษรรับรองการควบคุม',
      c4: 'ผิด: ไม่ใช่รายงานตรวจสอบรับรองมาตรฐานความปลอดภัย; เหมาะกับการสำรวจข้อมูลสาธารณะและกำหนดระดับบริการในสัญญา'
    },
    misconceptionTh:
      'มักเข้าใจผิดว่า Self-assessment หรือรายงานภายในสามารถใช้ทดแทนการตรวจสอบและออก Attestation จากผู้ประเมินอิสระได้',
    relatedLessonIds: ['L5-06', 'L5-04', 'L5-05'],
    tags: ['third-party-audit', 'attestation', 'external-audit']
  },
  {
    id: 'Q5-042',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'During an internal compliance audit, auditors discover that unapproved exceptions allowed critical database servers to remain unpatched for nine months. The CIO pressures the internal audit lead to downgrade the finding before executive distribution. To maintain objectivity and ensure proper governance oversight, where should the internal audit lead escalate this report FIRST?',
    promptTh:
      'ระหว่างการตรวจสอบความสอดคล้องภายใน ทีมผู้ตรวจสอบพบข้อยกเว้นที่ไม่ได้รับอนุมัติทำให้เซิร์ฟเวอร์ฐานข้อมูลสำคัญขาดการแพตช์นาน 9 เดือน ผู้บริหารฝ่ายไอทีกดดันให้หัวหน้าทีมตรวจสอบลดระดับความรุนแรงของข้อค้นพบก่อนเผยแพร่ เพื่อรักษาความเป็นกลางและการกำกับดูแลที่เหมาะสม หัวหน้าทีมตรวจสอบภายในควรรายงานเรื่องนี้โดยตรงต่อโครงสร้างใดเป็นลำดับแรก?',
    choices: [
      { id: 'c1', textEn: 'Audit committee', textTh: 'คณะกรรมการตรวจสอบ (Audit committee)' },
      { id: 'c2', textEn: 'IT operations change board', textTh: 'คณะกรรมการเปลี่ยนแปลงของฝ่ายปฏิบัติการไอที' },
      { id: 'c3', textEn: 'External penetration testing vendor', textTh: 'ผู้รับจ้างทดสอบเจาะระบบภายนอก' },
      { id: 'c4', textEn: 'Database administration team lead', textTh: 'หัวหน้าทีมผู้ดูแลฐานข้อมูล' }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'Audit committee ในระดับคณะกรรมการบริษัทมีหน้าที่คุ้มครองความเป็นอิสระของ Internal audit และรับรายงานข้อบกพร่องร้ายแรงโดยตรงไม่ให้ฝ่ายปฏิบัติการแทรกแซง',
    choiceRationales: {
      c1: 'ถูก: Audit committee ทำหน้าที่กำกับดูแลความเป็นกลางของงานตรวจสอบภายในและติดตามการแก้ไขความเสี่ยงร้ายแรงจากผู้บริหาร',
      c2: 'ผิด: อยู่ภายใต้สายงานปฏิบัติการที่อาจถูกแทรกแซงจาก CIO; Change board เหมาะสำหรับพิจารณาอนุมัติแผนทางเทคนิคก่อนแก้ไขระบบ',
      c3: 'ผิด: ผู้รับจ้างทดสอบภายนอกไม่มีอำนาจกำกับดูแลภายในองค์กร; เหมาะเมื่อต้องการทดสอบเจาะช่องโหว่เชิงเทคนิค',
      c4: 'ผิด: เป็นผู้ปฏิบัติงานใต้บังคับบัญชาของฝ่ายไอที จึงขาดอำนาจถ่วงดุล; เหมาะสำหรับรับคำสั่งทางเทคนิคไปดำเนินการแพตช์'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจว่าทีมตรวจสอบภายในต้องรายงานผ่าน CIO หรือ CISO เสมอ ซึ่งทำให้ขาดความเป็นอิสระเมื่อผู้บริหารฝ่ายไอทีเกี่ยวข้องกับข้อบกพร่อง',
    relatedLessonIds: ['L5-06', 'L5-01'],
    tags: ['internal-audit', 'audit-committee', 'governance']
  },
  {
    id: 'Q5-043',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'Six months prior to scheduling a formal external certification audit, a mid-sized logistics firm wants its internal system owners to evaluate their own controls against a standardized questionnaire to identify obvious gaps quickly and at minimal cost. Which assessment method BEST fits this preliminary stage?',
    promptTh:
      'ล่วงหน้า 6 เดือนก่อนนัดหมายการตรวจรับรองมาตรฐานจากภายนอกอย่างเป็นทางการ บริษัทโลจิสติกส์ขนาดกลางต้องการให้เจ้าของระบบภายในประเมินมาตรการควบคุมของตนเองเทียบกับแบบสอบถามมาตรฐานเพื่อค้นหาช่องว่างเบื้องต้นอย่างรวดเร็วและประหยัดค่าใช้จ่าย วิธีการประเมินใดเหมาะสมที่สุดสำหรับขั้นเตรียมความพร้อมนี้?',
    choices: [
      { id: 'c1', textEn: 'Unknown-environment penetration test', textTh: 'การทดสอบเจาะระบบแบบ Unknown-environment' },
      { id: 'c2', textEn: 'Regulatory examination', textTh: 'การเข้าตรวจสอบเชิงลึกโดยผู้กำกับดูแล (Regulatory examination)' },
      { id: 'c3', textEn: 'Independent third-party audit', textTh: 'การตรวจสอบโดยบุคคลที่สามอิสระ (Independent third-party audit)' },
      { id: 'c4', textEn: 'Self-assessment', textTh: 'การประเมินตนเอง (Self-assessment)' }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'Self-assessment ให้เจ้าของระบบใช้แบบตรวจสอบมาตรฐานสำรวจจุดอ่อนของตนเองได้อย่างรวดเร็วและประหยัดที่สุดก่อนเข้าสู่การตรวจที่เป็นทางการ',
    choiceRationales: {
      c1: 'ผิด: เป็นการจำลองผู้โจมตีภายนอกซึ่งใช้เวลาและงบสูง ไม่ใช่การประเมินตามแบบสอบถาม; เหมาะเมื่อวัดการตรวจจับของ Blue team',
      c2: 'ผิด: เป็นการบังคับตรวจตามอำนาจกฎหมายโดยหน่วยงานรัฐ ไม่ใช่การเตรียมพร้อมภายใน; เหมาะเมื่อผู้กำกับดูแลเข้าตรวจบังคับใช้กฎ',
      c3: 'ผิด: มีค่าใช้จ่ายสูงและใช้ผู้ตรวจภายนอกเพื่อออกใบรับรองจริง; เหมาะสำหรับขั้นสุดท้ายเมื่อต้องการหลักฐานที่เป็นกลางแก่คู่ค้า',
      c4: 'ถูก: การใช้ Checklist หรือแบบสอบถามให้เจ้าของระบบตรวจเบื้องต้นเองรวดเร็วและต้นทุนต่ำตรงกับ Self-assessment'
    },
    misconceptionTh:
      'มักมองข้ามประโยชน์ของ Self-assessment ในขั้นเตรียมความพร้อม หรือสับสนกับ Internal compliance audit ที่มีทีมตรวจแยกอิสระ',
    relatedLessonIds: ['L5-06'],
    tags: ['self-assessment', 'internal-audit', 'readiness']
  },
  {
    id: 'Q5-044',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.5'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'A commercial bank undergoes two separate external reviews in the same year: first, statutory agency officials conduct an intensive on-site inspection with legal authority to mandate remediation; second, the bank hires an outside security consultancy to review cloud architecture weaknesses and offer prioritized recommendations without regulatory penalties. Which TWO external activities occurred? (Choose two.)',
    promptTh:
      'ธนาคารพาณิชย์แห่งหนึ่งเข้ารับการตรวจประเมินจากภายนอก 2 ครั้งในปีเดียวกัน: ครั้งแรกเจ้าหน้าที่จากหน่วยงานกำกับดูแลตามกฎหมายเข้าตรวจสอบเชิงลึก ณ สำนักงานพร้อมอำนาจสั่งการแก้ไขเชิงบังคับ และครั้งที่สองธนาคารว่าจ้างบริษัทที่ปรึกษาความปลอดภัยภายนอกมาทบทวนจุดอ่อนสถาปัตยกรรมคลาวด์และให้คำแนะนำจัดลำดับการปรับปรุงโดยไม่มีบทลงโทษทางกฎหมาย กิจกรรมภายนอก 2 ประเภทใดที่เกิดขึ้น? (เลือก 2 ข้อ)',
    choices: [
      { id: 'c1', textEn: 'Internal self-assessment', textTh: 'การประเมินตนเองภายใน (Internal self-assessment)' },
      { id: 'c2', textEn: 'Regulatory examination', textTh: 'การตรวจสอบโดยผู้กำกับดูแล (Regulatory examination)' },
      { id: 'c3', textEn: 'External security assessment', textTh: 'การประเมินความปลอดภัยภายนอก (External security assessment)' },
      { id: 'c4', textEn: 'Physical penetration test', textTh: 'การทดสอบเจาะระบบทางกายภาพ (Physical penetration test)' },
      { id: 'c5', textEn: 'Tabletop incident-response exercise', textTh: 'การฝึกซ้อมรับมือเหตุการณ์บนโต๊ะ (Tabletop exercise)' }
    ],
    correctChoiceIds: ['c2', 'c3'],
    explanationTh:
      'เจ้าหน้าที่รัฐเข้าตรวจเชิงลึกพร้อมอำนาจบังคับแก้ไขคือ Regulatory examination ส่วนการจ้างที่ปรึกษานอกมาชี้จุดอ่อนและแนะนำการปรับปรุงคือ External security assessment',
    choiceRationales: {
      c1: 'ผิด: กิจกรรมทั้งสองดำเนินการโดยบุคคลภายนอก ไม่ใช่พนักงานภายในประเมินตนเอง; เหมาะเมื่อเจ้าของระบบตรวจความพร้อมเองเบื้องต้น',
      c2: 'ถูก: การตรวจเชิงลึกโดยเจ้าหน้าที่ผู้กำกับดูแลที่มีอำนาจตามกฎหมายสั่งแก้ไขคือ Regulatory examination',
      c3: 'ถูก: การประเมินจุดอ่อนโดยผู้เชี่ยวชาญภายนอกเพื่อให้คำแนะนำปรับปรุงโดยไม่ตัดสินลงโทษคือ Security assessment',
      c4: 'ผิด: โจทย์กล่าวถึงการตรวจเอกสาร/สถาปัตยกรรม ไม่ใช่การทดสอบบุกรุกอาคาร; เหมาะเมื่อทดสอบประตูคีย์การ์ดหรือ รปภ.',
      c5: 'ผิด: Tabletop exercise เป็นการซ้อมแผนตอบสนองเหตุการณ์เชิงสมมติ ไม่ใช่การตรวจสอบโดยผู้กำกับดูแลหรือการประเมินสถาปัตยกรรมคลาวด์โดยที่ปรึกษาภายนอก'
    },
    misconceptionTh:
      'มักใช้คำว่า Audit, Examination และ Assessment ปนกัน โดยไม่แยกบทบาทของคำสั่งบังคับตามกฎหมายกับการประเมินเชิงให้คำปรึกษา',
    relatedLessonIds: ['L5-06', 'L5-05'],
    tags: ['regulatory-examination', 'external-assessment', 'audits']
  },
  {
    id: 'Q5-045',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'Under signed rules of engagement, an authorized assessor dressed as a courier follows a distracted employee through a badge-controlled rear entrance, inspects unattended lobby network jacks for live VLAN access, and tests whether overnight security guards verify visitor credentials. Which type of penetration testing is being performed?',
    promptTh:
      'ภายใต้เอกสารขอบเขตการทดสอบที่ลงนามอนุญาตแล้ว ผู้ประเมินที่ได้รับมอบหมายแต่งกายเป็นพนักงานส่งเอกสารเดินตามพนักงานผ่านประตูด้านหลังที่ใช้บัตรผ่าน ตรวจสอบพอร์ตเครือข่ายในโถงรับรองว่าเข้าถึง VLAN ภายในได้หรือไม่ และทดสอบว่า รปภ. กะกลางคืนตรวจบัตรผู้มาติดต่อหรือไม่ กิจกรรมนี้เป็นการทดสอบเจาะระบบประเภทใด?',
    choices: [
      { id: 'c1', textEn: 'Integrated purple-team testing', textTh: 'การทดสอบแบบบูรณาการ (Integrated purple-team testing)' },
      { id: 'c2', textEn: 'Physical penetration testing', textTh: 'การทดสอบเจาะระบบทางกายภาพ (Physical penetration testing)' },
      { id: 'c3', textEn: 'Passive OSINT reconnaissance', textTh: 'การหาข่าวแบบ Passive OSINT' },
      { id: 'c4', textEn: 'Regulatory compliance audit', textTh: 'การตรวจสอบการปฏิบัติตามกฎระเบียบ (Regulatory compliance audit)' }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'การทดสอบการบุกรุกประตูคีย์การ์ด ประสิทธิภาพ รปภ. และการเข้าถึงพอร์ตเครือข่ายหน้างานจริงภายใต้ RoE คือ Physical penetration testing',
    choiceRationales: {
      c1: 'ผิด: ไม่ได้เป็นการจูนระบบแจ้งเตือน SIEM/EDR ร่วมกับทีม SOC; เหมาะเมื่อทีมรุกและทีมรับทำงานร่วมกันแบบเปิดเผย',
      c2: 'ถูก: การทดสอบควบคุมการเข้าอาคารทางกายภาพ (Tailgating, รปภ., พอร์ตหน้างาน) คือ Physical penetration testing',
      c3: 'ผิด: ผู้ทดสอบลงพื้นที่และโต้ตอบกับสถานที่จริง ไม่ใช่ค้นหาข้อมูลออนไลน์; เหมาะเมื่อเก็บข้อมูลสาธารณะโดยไม่แตะต้องเป้าหมาย',
      c4: 'ผิด: เป็นการจำลองบุกรุกทางกายภาพ ไม่ใช่การตรวจเอกสารข้อบังคับกฎหมาย; เหมาะเมื่อผู้กำกับดูแลตรวจหลักฐานความสอดคล้อง'
    },
    misconceptionTh:
      'มักเข้าใจว่า Penetration testing ทำเฉพาะทางเครือข่ายและซอฟต์แวร์ จนละเลยมิติ Physical penetration testing',
    relatedLessonIds: ['L5-06', 'L5-04', 'L1-03'],
    tags: ['physical-pentest', 'tailgating', 'rules-of-engagement']
  },
  {
    id: 'Q5-046',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'Following a SIEM and EDR deployment, a SOC director has only four days and limited budget to verify whether detection rules trigger reliably and to tune missing alerts immediately. The director instructs external testers to announce each simulated technique openly so SOC analysts can verify telemetry and refine rules in real time. Which penetration testing model BEST fits this goal?',
    promptTh:
      'ภายหลังการติดตั้ง SIEM และ EDR ใหม่ ผู้อำนวยการทีม SOC มีเวลาเพียง 4 วันและงบจำกัดในการพิสูจน์ว่ากฎแจ้งเตือนทำงานแม่นยำหรือไม่และปรับจูนกฎที่ขาดหายทันที จึงสั่งให้ผู้ทดสอบภายนอกแจ้งเทคนิคจำลองแต่ละขั้นอย่างเปิดเผยเพื่อให้นักวิเคราะห์ SOC ตรวจเช็ก Telemetry และแก้ไขกฎร่วมกันแบบเรียลไทม์ รูปแบบการทดสอบเจาะระบบใดเหมาะสมที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Unknown-environment offensive testing', textTh: 'การทดสอบเชิงรุกแบบ Unknown-environment' },
      { id: 'c2', textEn: 'Unannounced physical testing', textTh: 'การทดสอบทางกายภาพแบบไม่แจ้งล่วงหน้า' },
      { id: 'c3', textEn: 'Integrated penetration testing', textTh: 'การทดสอบแบบบูรณาการ (Integrated penetration testing)' },
      { id: 'c4', textEn: 'Self-assessment checklist review', textTh: 'การทบทวนแบบสอบถามประเมินตนเอง' }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'Integrated penetration testing (Purple team) รวมทีมรุกและทีมรับทำงานร่วมกันอย่างเปิดเผย ช่วยวัดและปรับจูนกฎตรวจจับของ SOC ได้เร็วที่สุดภายในเวลาและงบจำกัด',
    choiceRationales: {
      c1: 'ผิด: การไม่ให้ข้อมูลและไม่แจ้งล่วงหน้าเสียเวลาช่วงสำรวจและไม่เกิดการจูนกฎร่วมกันทันที; เหมาะเมื่อจำลองแฮกเกอร์ภายนอกแบบไม่บอกทีมรับ',
      c2: 'ผิด: ทดสอบอาคารและ รปภ. ไม่ตอบโจทย์การจูนกฎ SIEM/EDR; เหมาะเมื่อตรวจช่องโหว่การเข้าถึงสถานที่จริง',
      c3: 'ถูก: การประสานงานแบบเปิดเผยระหว่างผู้ทดสอบรุกและทีมรับเพื่อปรับปรุงการตรวจจับทันทีคือ Integrated (Purple team)',
      c4: 'ผิด: แบบสอบถามไม่ทดสอบ Telemetry จริงของ SIEM และ EDR; เหมาะกับการสำรวจนโยบายและการควบคุมเบื้องต้น'
    },
    misconceptionTh:
      'มักสับสนว่าทุก Pentest ต้องปิดเป็นความลับต่อทีม SOC ทั้งที่ Integrated testing เน้นความร่วมมือเพื่อยกระดับการตรวจจับโดยตรง',
    relatedLessonIds: ['L5-06', 'L4-05'],
    tags: ['integrated-pentest', 'purple-team', 'soc-tuning']
  },
  {
    id: 'Q5-047',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'During an adversarial simulation exercise, one unit emulates realistic intrusion paths to reach crown-jewel servers, while the internal security operations team focuses exclusively on monitoring logs, validating alerts, isolating compromised hosts, and executing containment playbooks. Which testing perspective represents the internal SOC team’s role?',
    promptTh:
      'ระหว่างการซ้อมจำลองการโจมตี ทีมหนึ่งจำลองเส้นทางบุกรุกเพื่อเข้าถึงเซิร์ฟเวอร์สำคัญ ขณะที่ทีมปฏิบัติการความปลอดภัยภายในมุ่งเน้นการเฝ้าระวัง Log ยืนยันการแจ้งเตือน แยกเครื่องที่ถูกบุกรุก และปฏิบัติตาม Playbook การควบคุมเหตุ บทบาทของทีม SOC ภายในสะท้อนมุมมองการทดสอบใด?',
    choices: [
      { id: 'c1', textEn: 'Defensive', textTh: 'เชิงรับ (Defensive)' },
      { id: 'c2', textEn: 'Offensive', textTh: 'เชิงรุก (Offensive)' },
      { id: 'c3', textEn: 'Passive reconnaissance', textTh: 'การหาข่าวแบบ Passive reconnaissance' },
      { id: 'c4', textEn: 'Regulatory examination', textTh: 'การตรวจสอบโดยผู้กำกับดูแล (Regulatory examination)' }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'มุมมอง Defensive (Blue team) คือหน้าที่ของทีมป้องกันและ SOC ในการตรวจจับ วิเคราะห์ ยับยั้ง และตอบสนองต่อการทดสอบการโจมตี',
    choiceRationales: {
      c1: 'ถูก: การเฝ้าระวัง Log ยืนยัน Alert และกักกันเครื่องระหว่างการจำลองโจมตีคือมุมมอง Defensive (Blue team)',
      c2: 'ผิด: Offensive (Red team) คือฝ่ายที่จำลองการเจาะเข้าเป้าหมาย; เหมาะกับบทบาทของอีกทีมที่พยายามบุกรุกเซิร์ฟเวอร์',
      c3: 'ผิด: เป็นขั้นตอนเก็บข้อมูลสาธารณะก่อนโจมตี ไม่ใช่การตอบสนองเหตุ; เหมาะเมื่อหาข้อมูลจากแหล่งเปิดโดยไม่แตะระบบ',
      c4: 'ผิด: เป็นการตรวจตามกฎหมายโดยหน่วยงานรัฐ ไม่ใช่การซ้อมรับมือภัยคุกคาม; เหมาะเมื่อผู้กำกับดูแลตรวจความสอดคล้อง'
    },
    misconceptionTh:
      'มักสับสนระหว่างทีมที่จำลองการเจาะระบบ (Offensive) กับทีมที่ฝึกตรวจจับและยับยั้ง (Defensive)',
    relatedLessonIds: ['L5-06', 'L4-08'],
    tags: ['defensive-testing', 'blue-team', 'soc']
  },
  {
    id: 'Q5-048',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'An energy utility wants to evaluate how much lateral movement and privilege escalation a compromised employee or contractor could achieve within five days. Management grants testers a single standard domain user account and an internal subnet range while withholding source code, architecture diagrams, and administrative credentials. Which penetration testing environment is configured?',
    promptTh:
      'องค์กรด้านพลังงานต้องการประเมินว่าพนักงานหรือผู้รับจ้างที่บัญชีถูกยึดสามารถเคลื่อนตัวในเครือข่ายและยกระดับสิทธิ์ได้ไกลเพียงใดภายใน 5 วัน ผู้บริหารจึงมอบบัญชีผู้ใช้ระดับมาตรฐาน 1 บัญชีและช่วง Subnet ภายในให้ผู้ทดสอบ โดยไม่เปิดเผยซอร์สโค้ด ผังสถาปัตยกรรม หรือสิทธิ์ผู้ดูแลระบบ สภาพแวดล้อมการทดสอบนี้เป็นแบบใด?',
    choices: [
      { id: 'c1', textEn: 'Unknown environment', textTh: 'Unknown environment' },
      { id: 'c2', textEn: 'Known environment', textTh: 'Known environment' },
      { id: 'c3', textEn: 'Passive environment', textTh: 'Passive environment' },
      { id: 'c4', textEn: 'Partially known environment', textTh: 'Partially known environment' }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'การให้ข้อมูลเพียงบางส่วน (บัญชีผู้ใช้ทั่วไปและช่วง Subnet) โดยปิดข้อมูลระบบลึกๆ ใช้จำลอง Insider หรือเครื่องที่ถูกเจาะขั้นต้นแล้ว ซึ่งตรงกับ Partially known environment',
    choiceRationales: {
      c1: 'ผิด: Unknown environment ไม่ให้บัญชีหรือ Subnet ใดๆ เลย; เหมาะเมื่อจำลองผู้โจมตีภายนอกตั้งแต่ศูนย์',
      c2: 'ผิด: Known environment ต้องส่งมอบซอร์สโค้ด ผังระบบ และสิทธิ์ระดับสูงครบถ้วน; เหมาะกับการตรวจตรรกะแอปพลิเคชันเชิงลึกที่สุด',
      c3: 'ผิด: ไม่ใช่ประเภท Test environment ในกรอบ SY0-701; Passive ใช้เรียกลักษณะการหาข่าวที่ไม่ส่งทราฟฟิกแตะเป้าหมาย',
      c4: 'ถูก: การมอบข้อมูลบางส่วนเพื่อจำลองคนในหรือผู้โจมตีที่ผ่านด่านแรกเข้ามาแล้วคือ Partially known environment'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนสับสนคิดว่าหากไม่ได้ให้ซอร์สโค้ดต้องเป็น Unknown environment ทั้งที่การให้บัญชีผู้ใช้และ Subnet บางส่วนจัดเป็น Partially known',
    relatedLessonIds: ['L5-06'],
    tags: ['partially-known-environment', 'pentest-environments', 'insider-simulation']
  },
  {
    id: 'Q5-049',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.5'],
    type: 'msq',
    selectCount: 3,
    difficulty: 'exam-ready',
    promptEn:
      'During the initial phase of an unknown-environment penetration test, the assessment team must gather intelligence about a client’s external attack surface using strictly passive reconnaissance so zero packets reach the client’s servers or appear in perimeter logs. Which THREE activities satisfy this constraint? (Choose three.)',
    promptTh:
      'ในช่วงเริ่มต้นของ Penetration test แบบ Unknown-environment ทีมประเมินต้องรวบรวมข้อมูลพื้นผิวการโจมตีภายนอกของลูกค้าโดยใช้วิธี Passive reconnaissance อย่างเคร่งครัดเพื่อไม่ให้มีแพ็กเก็ตส่งถึงเซิร์ฟเวอร์ลูกค้าหรือปรากฏใน Log ขอบเครือข่าย กิจกรรม 3 ข้อใดสอดคล้องกับเงื่อนไขนี้? (เลือก 3 ข้อ)',
    choices: [
      { id: 'c1', textEn: 'Sending port probes to the client’s public IP range to map open services', textTh: 'ส่งคำขอสำรวจพอร์ตไปยังช่วง IP สาธารณะของลูกค้าเพื่อระบุบริการที่เปิดอยู่' },
      { id: 'c2', textEn: 'Analyzing public job postings to identify cloud platforms and firewall vendors in use', textTh: 'วิเคราะห์ประกาศรับสมัครงานสาธารณะเพื่อระบุแพลตฟอร์มคลาวด์และผู้ผลิตไฟร์วอลล์ที่ใช้งาน' },
      { id: 'c3', textEn: 'Connecting directly to web portals to capture server response headers', textTh: 'เชื่อมต่อไปยังเว็บพอร์ทัลโดยตรงเพื่ออ่าน Header ตอบกลับของเซิร์ฟเวอร์' },
      { id: 'c4', textEn: 'Querying public WHOIS registries and certificate transparency archives', textTh: 'สืบค้นฐานข้อมูลทะเบียน WHOIS สาธารณะและคลังบันทึกความโปร่งใสของใบรับรอง' },
      { id: 'c5', textEn: 'Reviewing cached DNS records and public search engine indexes', textTh: 'ตรวจสอบบันทึก DNS ที่จัดเก็บในแคชสาธารณะและดัชนีเครื่องมือค้นหาสาธารณะ' }
    ],
    correctChoiceIds: ['c2', 'c4', 'c5'],
    explanationTh:
      'Passive reconnaissance ใช้เฉพาะแหล่งข้อมูลเปิดสาธารณะโดยไม่โต้ตอบกับระบบเป้าหมายโดยตรง ได้แก่ ประกาศรับสมัครงาน (c2), WHOIS/คลังใบรับรอง (c4) และแคชสาธารณะ (c5)',
    choiceRationales: {
      c1: 'ผิด: การส่งแพ็กเก็ตสำรวจพอร์ตโต้ตอบกับระบบเป้าหมายโดยตรงจึงเป็น Active recon; เหมาะเมื่อกฎอนุญาตให้สแกนหาบริการที่เปิดจริง',
      c2: 'ถูก: การอ่านประกาศรับสมัครงานสาธารณะไม่สร้างทราฟฟิกไปยังระบบเป้าหมาย จึงเป็น Passive reconnaissance',
      c3: 'ผิด: การเชื่อมต่ออ่าน Header จากเว็บเป้าหมายโดยตรงทิ้งร่องรอยใน Log จึงเป็น Active recon; เหมาะเมื่อเข้าสู่ขั้นทดสอบระบบจริง',
      c4: 'ถูก: การดึงข้อมูลทะเบียนและคลังใบรับรองสาธารณะอาศัยระบบกลางโดยไม่แตะเซิร์ฟเวอร์ลูกค้า',
      c5: 'ถูก: การตรวจข้อมูลแคชสาธารณะและดัชนีค้นหาไม่ส่งคำขอตรงไปยังเครือข่ายองค์กรเป้าหมาย'
    },
    misconceptionTh:
      'มักเข้าใจผิดว่าการสแกนเบาๆ หรือการอ่าน Banner เว็บเป็น Passive ทั้งที่การส่งทราฟฟิกแตะเป้าหมายแม้เพียงครั้งเดียวถือเป็น Active',
    relatedLessonIds: ['L5-06'],
    tags: ['passive-reconnaissance', 'osint', 'unknown-environment']
  },
  {
    id: 'Q5-050',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'An e-banking development team has only five business days before launch to uncover deep authorization flaws across 40 microservices. To eliminate discovery overhead, the company supplies full source code, API documentation, network diagrams, and test tokens, authorizing testers to probe staging endpoints directly. Which test environment and reconnaissance approach are paired here?',
    promptTh:
      'ทีมพัฒนาบริการธนาคารออนไลน์มีเวลาเพียง 5 วันทำการก่อนเปิดตัวเพื่อค้นหาข้อบกพร่องด้านการกำหนดสิทธิ์เชิงลึกใน Microservices 40 บริการ เพื่อลดเวลาช่วงสำรวจ บริษัทจึงส่งมอบซอร์สโค้ดทั้งหมด เอกสาร API ผังเครือข่าย และโทเค็นทดสอบให้ผู้ทดสอบ พร้อมอนุญาตให้ส่งคำขอตรวจสอบไปยังระบบ Staging โดยตรง คู่ของสภาพแวดล้อมการทดสอบและวิธีสำรวจใดตรงกับงานนี้?',
    choices: [
      { id: 'c1', textEn: 'Unknown environment with passive reconnaissance', textTh: 'Unknown environment ร่วมกับ Passive reconnaissance' },
      { id: 'c2', textEn: 'Partially known environment with passive reconnaissance', textTh: 'Partially known environment ร่วมกับ Passive reconnaissance' },
      { id: 'c3', textEn: 'Known environment with active testing and reconnaissance', textTh: 'Known environment ร่วมกับ Active testing และ Active reconnaissance' },
      { id: 'c4', textEn: 'Self-assessment with regulatory examination', textTh: 'Self-assessment ร่วมกับ Regulatory examination' }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'การมอบซอร์สโค้ด ผังระบบ และเอกสารครบถ้วนช่วยเจาะลึกได้เร็วในเวลาจำกัด (Known environment) และการส่งคำขอโต้ตอบกับ Endpoint โดยตรงคือ Active reconnaissance',
    choiceRationales: {
      c1: 'ผิด: ผู้ทดสอบได้ข้อมูลภายในครบและโต้ตอบกับระบบจริง; Unknown + Passive เหมาะกับการจำลองคนนอกที่แอบหาข่าวเงียบๆ',
      c2: 'ผิด: ผู้ทดสอบไม่ได้รับข้อมูลเพียงบางส่วนและไม่ได้จำกัดแค่แหล่งเปิด; Partially known เหมาะกับจำลอง Insider',
      c3: 'ถูก: มีข้อมูลครบถ้วน (Known) เพื่อเร่งตรวจตรรกะลึกใน 5 วัน และส่งคำขอตรวจสอบระบบ Staging โดยตรง (Active)',
      c4: 'ผิด: เป็นการจัดจ้างประเมินทางเทคนิค ไม่ใช่การประเมินตนเองหรือการตรวจจากหน่วยงานรัฐ; เหมาะเมื่อตรวจความสอดคล้องกฎหมาย'
    },
    misconceptionTh:
      'มักคิดว่า Known environment ไม่จำเป็นต้องทำ Active probing ทั้งที่ผู้ทดสอบยังต้องโต้ตอบกับระบบเพื่อยืนยันช่องโหว่จริง',
    relatedLessonIds: ['L5-06'],
    tags: ['known-environment', 'active-reconnaissance', 'pentest-scope']
  },

  // =========================================================================
  // Objective 5.6: Given a scenario, implement security awareness practices
  // =========================================================================
  {
    id: 'Q5-051',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.6'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A procurement specialist spots a subtle domain mismatch on an urgent invoice email and clicks the "Report Phishing" button. SOC analysts examine the message in an isolated environment and confirm it contains a credential-harvesting link delivered to 30 other staff mailboxes. After blocking the sender at the email gateway, what should the SOC do NEXT as part of proper response?',
    promptTh:
      'เจ้าหน้าที่จัดซื้อสังเกตเห็นชื่อโดเมนผู้ส่งที่ผิดปกติเล็กน้อยในอีเมลใบแจ้งหนี้เร่งด่วน จึงกดปุ่ม "Report Phishing" นักวิเคราะห์ SOC ตรวจสอบข้อความในสภาพแวดล้อมแยกส่วนและยืนยันว่ามีลิงก์ขโมยรหัสผ่านถูกส่งเข้ากล่องจดหมายพนักงานอีก 30 คน หลังบล็อกผู้ส่งที่ Email gateway แล้ว ทีม SOC ควรดำเนินการใดต่อตามแนวทางตอบสนองที่ถูกต้อง?',
    choices: [
      { id: 'c1', textEn: 'Purge the matching message from the other 30 mailboxes and send an encouraging confirmation to the reporter', textTh: 'ค้นหาและลบอีเมลเดียวกันออกจากกล่องจดหมายอีก 30 บัญชี พร้อมส่งข้อความขอบคุณยืนยันให้ผู้แจ้ง' },
      { id: 'c2', textEn: 'Forward the confirmed phishing email to all employees as a warning example', textTh: 'ส่งต่ออีเมลฟิชชิงที่ยืนยันแล้วให้พนักงานทุกคนดูเป็นตัวอย่างเตือนภัย' },
      { id: 'c3', textEn: 'Issue a formal disciplinary warning to the 30 recipients for receiving the message', textTh: 'ออกหนังสือตักเตือนทางวินัยแก่ผู้รับทั้ง 30 คนฐานได้รับอีเมลดังกล่าว' },
      { id: 'c4', textEn: 'Disable the reporting button temporarily until the email gateway rules refresh', textTh: 'ปิดปุ่มแจ้งเหตุชั่วคราวจนกว่ากฎของ Email gateway จะอัปเดตเสร็จสิ้น' }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'การตอบสนองข้อความต้องสงสัยต้องหยุดผลกระทบโดยเร็ว (Purge ออกจาก Inbox อื่น) และเสริมแรงเชิงบวกให้ผู้แจ้งเพื่อรักษาความร่วมมือในการรายงาน',
    choiceRationales: {
      c1: 'ถูก: ลบอีเมลอันตรายออกจากกล่องจดหมายทั้งหมดเพื่อป้องกันผู้อื่นคลิก และขอบคุณผู้แจ้งเพื่อส่งเสริมวัฒนธรรมการรายงาน',
      c2: 'ผิด: การส่งต่ออีเมลที่มีลิงก์อันตรายกระจายความเสี่ยงให้พนักงานคลิกพลาด; ควรใช้ภาพหน้าจอที่ตัดลิงก์ออกแล้วในสื่ออบรมแทน',
      c3: 'ผิด: การรับอีเมลไม่ใช่ความผิดของผู้ใช้ และการลงโทษทำให้พนักงานไม่กล้ารายงาน; การอบรมเสริมเหมาะกับผู้ที่พลาดคลิกซ้ำๆ',
      c4: 'ผิด: การปิดปุ่มแจ้งเหตุทำให้ทีม SOC สูญเสียการมองเห็นภัยคุกคามที่หลุดรอด Gateway; ควรเปิดใช้งานปุ่มตลอดเวลา'
    },
    misconceptionTh:
      'มักมองข้ามขั้นตอนการกวาดลบอีเมลจากกล่องจดหมายผู้อื่นหรือการตอบกลับขอบคุณผู้แจ้งเมื่อจัดการเหตุฟิชชิง',
    relatedLessonIds: ['L5-07', 'L4-06'],
    tags: ['phishing-response', 'soc-workflow', 'security-awareness']
  },
  {
    id: 'Q5-052',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.6'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'To meet an aggressive quarter-end quota without waiting for IT VPN troubleshooting, an account executive knowingly bypasses corporate policy and uploads confidential client contracts to an unapproved personal cloud drive for home editing. Under anomalous behavior recognition, how should this activity be classified?',
    promptTh:
      'เพื่อให้ปิดยอดสิ้นไตรมาสทันกำหนดโดยไม่ต้องรอฝ่ายไอทีแก้ปัญหา VPN ผู้จัดการฝ่ายขายจงใจฝ่าฝืนนโยบายบริษัทด้วยการอัปโหลดสัญญาความลับของลูกค้าขึ้นพื้นที่เก็บข้อมูลคลาวด์ส่วนตัวที่ไม่ได้รับอนุญาตเพื่อนำไปแก้ไขต่อที่บ้าน ภายใต้การจำแนกพฤติกรรมผิดปกติ การกระทำนี้จัดอยู่ในกลุ่มใด?',
    choices: [
      { id: 'c1', textEn: 'Unintentional behavior', textTh: 'พฤติกรรมผิดพลาดโดยไม่ได้ตั้งใจ (Unintentional behavior)' },
      { id: 'c2', textEn: 'Risky behavior', textTh: 'พฤติกรรมเสี่ยง (Risky behavior)' },
      { id: 'c3', textEn: 'Unexpected behavior', textTh: 'พฤติกรรมผิดวิสัย (Unexpected behavior)' },
      { id: 'c4', textEn: 'Situational awareness', textTh: 'ความตระหนักรู้ต่อสถานการณ์ (Situational awareness)' }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'พนักงานทราบข้อห้ามแต่เลือกใช้วิธีลัดเพื่อความสะดวกในการทำงาน (เช่น ใช้ Shadow IT) ซึ่งจัดเป็น Risky behavior',
    choiceRationales: {
      c1: 'ผิด: พนักงานไม่ได้พลั้งเผลอ แต่ตัดสินใจลัดขั้นตอนเอง; Unintentional เหมาะกับกรณีส่งอีเมลผิดคนหรือตั้งแชร์ลิงก์พลาดโดยไม่รู้ตัว',
      c2: 'ถูก: การจงใจฝ่าฝืนนโยบายเพื่อความรวดเร็วหรือความสะดวกจัดเป็น Risky behavior ที่ต้องแก้ทั้งการอบรมและปรับเครื่องมือให้ใช้ง่าย',
      c3: 'ผิด: Unexpected ชี้ถึงรูปแบบผิดปกติที่อาจเกิดจากบัญชีถูกยึดหรือ Insider ขโมยข้อมูล; เหมาะเมื่อบัญชีล็อกอินผิดเวลาและดึงไฟล์ผิดปกติ',
      c4: 'ผิด: เป็นทักษะการระวังสิ่งรอบตัว เช่น ป้องกันการเดินตามเข้าประตู; เหมาะกับการฝึกตรวจบัตรผู้มาติดต่อและระวังหน้าจอ'
    },
    misconceptionTh:
      'มักสับสนระหว่าง Risky behavior (ตั้งใจเลี่ยงกฎเพื่อความสะดวก) กับ Unintentional behavior (พลาดพลั้งโดยสุจริต)',
    relatedLessonIds: ['L5-07', 'L2-01'],
    tags: ['anomalous-behavior', 'risky-behavior', 'shadow-it']
  },
  {
    id: 'Q5-053',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.6'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'During the same week, two distinct security incidents occur: (1) a sleep-deprived HR specialist accidentally selects "Reply All" and mails a draft bonus sheet to the entire company distribution list, and (2) an engineer’s credentials authenticate at 03:00 from an unfamiliar country and bulk-export source repositories days after a resignation notice. Which TWO anomalous behavior categories correspond to these events? (Choose two.)',
    promptTh:
      'ในสัปดาห์เดียวกันเกิดเหตุการณ์ด้านความปลอดภัย 2 เหตุการณ์: (1) เจ้าหน้าที่ฝ่ายบุคคลที่พักผ่อนน้อยเผลอกด "Reply All" ส่งร่างตารางโบนัสไปยังรายชื่ออีเมลทั้งบริษัท และ (2) บัญชีของวิศวกรรายหนึ่งเข้าสู่ระบบเวลา 03:00 น. จากต่างประเทศที่ไม่คุ้นเคยและส่งออกโค้ดจำนวนมากหลังยื่นใบลาออกเพียงไม่กี่วัน หมวดหมู่พฤติกรรมผิดปกติ 2 ข้อใดตรงกับเหตุการณ์ทั้งสอง? (เลือก 2 ข้อ)',
    choices: [
      { id: 'c1', textEn: 'Risky behavior', textTh: 'Risky behavior' },
      { id: 'c2', textEn: 'Situational awareness', textTh: 'Situational awareness' },
      { id: 'c3', textEn: 'Unintentional behavior', textTh: 'Unintentional behavior' },
      { id: 'c4', textEn: 'Unexpected behavior', textTh: 'Unexpected behavior' },
      { id: 'c5', textEn: 'Intentional policy exception', textTh: 'Intentional policy exception' }
    ],
    correctChoiceIds: ['c3', 'c4'],
    explanationTh:
      'การกด Reply All ผิดพลาดจากความพลั้งเผลอคือ Unintentional behavior ส่วนการล็อกอินเวลาและประเทศแปลกพร้อมดึงข้อมูลก่อนลาออกคือ Unexpected behavior',
    choiceRationales: {
      c1: 'ผิด: ไม่มีเหตุการณ์ใดเกิดจากการจงใจลัดขั้นตอนเพื่อความสะดวก; Risky เหมาะกับการปิด AV หรือใช้แอปส่วนตัวทำงาน',
      c2: 'ผิด: ไม่ใช่ทักษะสังเกตสภาพแวดล้อมกายภาพ; Situational awareness เหมาะกับการตรวจคนแปลกหน้าที่เดินตามเข้าประตู',
      c3: 'ถูก: ความพลั้งเผลอกดส่งเมลผิดผู้รับโดยไม่ตั้งใจจัดเป็น Unintentional behavior',
      c4: 'ถูก: การเข้าใช้งานผิด Baseline ทั้งเวลา สถานที่ และปริมาณการดึงข้อมูลหลังลาออกคือ Unexpected behavior',
      c5: 'ผิด: Policy exception เป็นขั้นตอนอนุมัติผ่อนผันนโยบายอย่างเป็นทางการ ไม่ใช่การส่งอีเมลพลาดหรือการดึงซอร์สโค้ดต้องสงสัยเวลา 03:00 น.'
    },
    misconceptionTh:
      'มักแยกความต่างระหว่างความผิดพลาดโดยสุจริตกับการเบี่ยงเบนผิดวิสัยที่ส่อถึงบัญชีถูกยึดหรือ Insider threat ไม่ออก',
    relatedLessonIds: ['L5-07', 'L2-01', 'L4-07'],
    tags: ['unintentional-behavior', 'unexpected-behavior', 'insider-threat']
  },
  {
    id: 'Q5-054',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.6'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'Following a product launch party, several software developers post celebratory selfies on public social media platforms. Security analysts notice employee ID badges, a whiteboard diagramming internal microservice APIs, and stickers showing the firm’s security appliances clearly visible in the background. Which user-training topic MOST directly prevents this exposure?',
    promptTh:
      'หลังงานเลี้ยงเปิดตัวผลิตภัณฑ์ นักพัฒนาซอฟต์แวร์หลายคนโพสต์ภาพเซลฟีลงบนโซเชียลมีเดียสาธารณะ ทีมวิเคราะห์ความปลอดภัยสังเกตเห็นว่าพื้นหลังของภาพเผยให้เห็นบัตรพนักงาน กระดานไวท์บอร์ดแสดงโครงสร้าง API ภายใน และสติกเกอร์อุปกรณ์ความปลอดภัยที่บริษัทใช้อยู่อย่างชัดเจน หัวข้อฝึกอบรมใดป้องกันการรั่วไหลลักษณะนี้ได้ตรงจุดที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Removable media and cables', textTh: 'Removable media and cables' },
      { id: 'c2', textEn: 'Password management', textTh: 'Password management' },
      { id: 'c3', textEn: 'Phishing campaign reporting', textTh: 'Phishing campaign reporting' },
      { id: 'c4', textEn: 'Operational security (OPSEC)', textTh: 'Operational security (OPSEC)' }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'OPSEC ฝึกให้พนักงานระมัดระวังไม่เปิดเผยรายละเอียดระบบ บัตรประจำตัว หรือข้อมูลโครงการภายในสู่สาธารณะทั้งบนโซเชียลมีเดียและที่สาธารณะ',
    choiceRationales: {
      c1: 'ผิด: เน้นความเสี่ยงจาก USB แปลกหน้าและสายชาร์จสาธารณะ; เหมาะเมื่อพนักงานเสียบแฟลชไดรฟ์ที่เก็บได้เข้าเครื่องงาน',
      c2: 'ผิด: เน้นการตั้งรหัสผ่านยาวไม่ซ้ำและใช้ Password manager; เหมาะเมื่อแก้ไขปัญหาการใช้รหัสผ่านเดิมซ้ำในหลายเว็บ',
      c3: 'ผิด: เน้นการแจ้งอีเมลหลอกลวงเข้าสู่ทีม SOC; เหมาะเมื่อพนักงานได้รับข้อความขอให้กรอกข้อมูลเข้าสู่ระบบ',
      c4: 'ถูก: การห้ามถ่ายภาพบัตรพนักงาน หน้าจอ หรือกระดานผังระบบลงโซเชียลมีเดียเป็นหัวใจของ Operational security (OPSEC)'
    },
    misconceptionTh:
      'มักเข้าใจว่า OPSEC เกี่ยวข้องเฉพาะหน่วยงานทหาร ทั้งที่สำคัญอย่างยิ่งต่อการป้องกันข้อมูลองค์กรรั่วไหลทางโซเชียลมีเดียของพนักงานทั่วไป',
    relatedLessonIds: ['L5-07'],
    tags: ['opsec', 'social-media', 'user-training']
  },
  {
    id: 'Q5-055',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.6'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'Traveling consultants frequently recharge corporate smartphones through public airport USB kiosks and plug complimentary conference flash drives directly into work laptops to transfer presentation decks. Which security awareness module MOST directly addresses both practices?',
    promptTh:
      'ที่ปรึกษาที่เดินทางบ่อยมักชาร์จสมาร์ตโฟนบริษัทผ่านตู้ USB สาธารณะในสนามบินและเสียบแฟลชไดรฟ์แจกฟรีจากงานประชุมเข้ากับโน้ตบุ๊กทำงานโดยตรงเพื่อโอนไฟล์นำเสนอ หลักสูตรสร้างความตระหนักรู้หัวข้อใดแก้ไขพฤติกรรมทั้งสองอย่างได้ตรงที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Operational security (OPSEC)', textTh: 'Operational security (OPSEC)' },
      { id: 'c2', textEn: 'Data retention and disposal', textTh: 'Data retention and disposal' },
      { id: 'c3', textEn: 'Removable media and cables', textTh: 'Removable media and cables' },
      { id: 'c4', textEn: 'Hybrid work router hardening', textTh: 'Hybrid work router hardening' }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'การฝึกอบรมเรื่อง Removable media and cables สอนให้หลีกเลี่ยง USB ไม่ทราบที่มาและพอร์ต/สายชาร์จสาธารณะ (Juice jacking) โดยให้ใช้ปลั๊กส่วนตัวหรือ Power bank แทน',
    choiceRationales: {
      c1: 'ผิด: OPSEC มุ่งป้องกันการเปิดเผยข้อมูลปฏิบัติการในที่สาธารณะ; เหมาะเมื่อป้องกันการคุยเรื่องลับในร้านกาแฟหรือโพสต์รูปโต๊ะทำงาน',
      c2: 'ผิด: เน้นระยะเวลาเก็บและทำลายข้อมูลตามกฎหมาย; เหมาะเมื่อกำหนดอายุการจัดเก็บเอกสารลูกค้า',
      c3: 'ถูก: ครอบคลุมทั้งความเสี่ยงมัลแวร์จากแฟลชไดรฟ์ไม่ทราบที่มาและการดักข้อมูล/ฉีดคำสั่งผ่านสายหรือพอร์ตชาร์จสาธารณะ',
      c4: 'ผิด: มุ่งดูแลเครือข่าย Wi-Fi และเราเตอร์ที่บ้าน; เหมาะเมื่อฝึกพนักงานตั้งค่า WPA3 และรหัสผ่านเราเตอร์ที่พักอาศัย'
    },
    misconceptionTh:
      'มักตระหนักเฉพาะอันตรายของแฟลชไดรฟ์ แต่มองข้ามความเสี่ยงจากสายชาร์จและพอร์ต USB สาธารณะ',
    relatedLessonIds: ['L5-07', 'L2-02'],
    tags: ['removable-media', 'usb-cables', 'juice-jacking']
  },
  {
    id: 'Q5-056',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.6'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'After quarterly phishing simulations reveal elevated failure rates in Finance and Operations, a security awareness lead overhauls campaign execution to improve long-term vigilance without discouraging staff from reporting real threats. Which TWO practices BEST achieve this objective? (Choose two.)',
    promptTh:
      'หลังแคมเปญจำลองฟิชชิงรายไตรมาสพบอัตราการคลิกสูงในฝ่ายการเงินและฝ่ายปฏิบัติการ หัวหน้าโครงการสร้างความตระหนักรู้จึงปรับปรุงการดำเนินงานเพื่อเพิ่มความตื่นตัวระยะยาวโดยไม่ทำให้พนักงานหวาดกลัวการแจ้งเบาะแสจริง แนวปฏิบัติ 2 ข้อใดบรรลุเป้าหมายนี้ได้ดีที่สุด? (เลือก 2 ข้อ)',
    choices: [
      { id: 'c1', textEn: 'Deliver immediate just-in-time micro-training whenever a user clicks a simulated phishing link', textTh: 'แสดงบทเรียนสั้นแบบทันที (Just-in-time micro-training) เมื่อผู้ใช้คลิกลิงก์จำลองฟิชชิง' },
      { id: 'c2', textEn: 'Publish a monthly company-wide hall-of-shame list naming employees who failed the drill', textTh: 'เผยแพร่รายชื่อประจานพนักงานที่คลิกพลาดในแคมเปญประจำเดือนให้รับทราบทั้งบริษัท' },
      { id: 'c3', textEn: 'Restrict security awareness metrics strictly to initial onboarding completion rates', textTh: 'จำกัดการวัดผลความตระหนักรู้เฉพาะอัตราการเรียนจบตอนเริ่มงานครั้งแรกเท่านั้น' },
      { id: 'c4', textEn: 'Disable the phishing report button for teams with high click rates to limit false alarms', textTh: 'ปิดปุ่มแจ้งอีเมลฟิชชิงสำหรับแผนกที่คลิกพลาดบ่อยเพื่อลดการแจ้งเตือนผิดพลาด' },
      { id: 'c5', textEn: 'Track both click rates and suspicious-message report rates across recurring campaigns', textTh: 'ติดตามทั้งอัตราการคลิกและอัตราการกดแจ้งข้อความต้องสงสัยอย่างต่อเนื่องในแคมเปญตามรอบ' }
    ],
    correctChoiceIds: ['c1', 'c5'],
    explanationTh:
      'การสอนสั้นๆ ทันทีเมื่อพลาด (Just-in-time micro-training) ควบคู่กับการวัดทั้ง Click rate และ Report rate ในแคมเปญต่อเนื่อง ช่วยปรับพฤติกรรมเชิงบวกและวัดความพร้อมจริงได้ครบถ้วน',
    choiceRationales: {
      c1: 'ถูก: การให้ความรู้ทันทีขณะผู้ใช้เพิ่งพลาดช่วยจดจำสัญญาณเตือนได้แม่นยำกว่าการลงโทษ',
      c2: 'ผิด: การประจานสร้างความกลัวและทำให้พนักงานปกปิดเมื่อคลิกฟิชชิงจริง; ควรใช้อบรมซ่อมเสริมเชิงสร้างสรรค์แทน',
      c3: 'ผิด: ขาดการติดตาม Recurring เพื่อวัดพัฒนาการ; Initial completion เหมาะสำหรับสร้างพื้นฐานวันเริ่มงานเท่านั้น',
      c4: 'ผิด: การปิดปุ่มแจ้งเหตุทำลายด่านตรวจจับโดยบุคลากร (Human sensor); ควรฝึกคัดกรองและส่งเสริมการแจ้งเหตุ',
      c5: 'ถูก: การวัดทั้ง Click rate และ Report rate ในแคมเปญซ้ำตามรอบสะท้อนผลสำเร็จของ Program execution และ Monitoring'
    },
    misconceptionTh:
      'มักวัดผลแคมเปญฟิชชิงจากอัตราการคลิกเพียงอย่างเดียว หรือใช้การประจานจนพนักงานไม่กล้ารายงานเมื่อเกิดเหตุจริง',
    relatedLessonIds: ['L5-07'],
    tags: ['phishing-campaigns', 'recurring-monitoring', 'training-execution']
  },
  {
    id: 'Q5-057',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.6'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'An enterprise transitions 60% of its workforce to permanent flexible schedules across home offices and coffee shops. Assessments show employees leaving unlocked laptops on kitchen tables, keeping default credentials on home routers, skipping VPN connections, and holding sensitive client calls near smart speakers without privacy screen filters. Which user-guidance curriculum BEST addresses all of these gaps?',
    promptTh:
      'องค์กรปรับรูปแบบการทำงานของพนักงาน 60% เป็นแบบยืดหยุ่นถาวรทั้งจากบ้านและร้านกาแฟ ผลการประเมินพบว่าพนักงานปล่อยหน้าจอโน้ตบุ๊กค้างไว้บนโต๊ะในบ้าน ใช้รหัสผ่านเริ่มต้นกับเราเตอร์ที่บ้าน ไม่เชื่อมต่อ VPN และประชุมเรื่องความลับของลูกค้าใกล้ลำโพงอัจฉริยะโดยไม่ติดฟิล์มกันแอบมอง หลักสูตรแนะนำผู้ใช้หัวข้อใดครอบคลุมจุดอ่อนทั้งหมดนี้ได้ดีที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Data inventory and retention', textTh: 'การจัดทำบัญชีข้อมูลและระยะเวลาเก็บรักษา (Data inventory and retention)' },
      { id: 'c2', textEn: 'Hybrid and remote work environments', textTh: 'สภาพแวดล้อมการทำงานแบบ Hybrid และ Remote work' },
      { id: 'c3', textEn: 'Physical penetration testing rules', textTh: 'กติกาการทดสอบเจาะระบบทางกายภาพ (Physical penetration testing rules)' },
      { id: 'c4', textEn: 'External regulatory compliance reporting', textTh: 'การรายงานความสอดคล้องต่อผู้กำกับดูแลภายนอก' }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'การใช้ VPN, การตั้งค่าความปลอดภัย Wi-Fi/เราเตอร์ที่บ้าน, การล็อกหน้าจอ, ฟิล์ม Privacy screen และระวัง Smart speakers เป็นเนื้อหาหลักของ Hybrid and remote work environments',
    choiceRationales: {
      c1: 'ผิด: มุ่งระบุแหล่งเก็บข้อมูลและอายุการจัดเก็บในระบบองค์กร; เหมาะเมื่อเตรียมข้อมูลรองรับกฎหมาย Privacy',
      c2: 'ถูก: ครอบคลุมแนวปฏิบัติครบทั้งการใช้ VPN, Wi-Fi บ้าน, การล็อกหน้าจอ, Privacy screen และการระวังอุปกรณ์ดักฟังในบ้าน',
      c3: 'ผิด: เป็นกรอบกติกาสำหรับผู้ทดสอบบุกรุกอาคารสำนักงาน ไม่ใช่คู่มือพนักงานทำงานนอกสถานที่; เหมาะกับงาน Pentest อาคาร',
      c4: 'ผิด: เป็นการส่งรายงานต่อผู้กำกับดูแลภายนอก ไม่ใช่คำแนะนำการใช้งานปลอดภัยรายวันของพนักงาน; เหมาะกับทีม GRC'
    },
    misconceptionTh:
      'มักคิดว่าการทำงานนอกสถานที่ต้องการเพียงการอบรมเรื่อง VPN โดยละเลย Wi-Fi บ้าน Smart speakers และ Privacy screen',
    relatedLessonIds: ['L5-07', 'L4-02'],
    tags: ['hybrid-work', 'remote-work', 'user-guidance']
  },
  {
    id: 'Q5-058',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.6'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'An annual review reveals that finance clerks, software engineers, and senior executives all receive the exact same generic security awareness slides, resulting in low engagement and persistent role-specific incidents such as wire-transfer fraud and leaked API keys. Which program phase should the awareness manager overhaul FIRST to tailor training content to each group’s real risk exposure?',
    promptTh:
      'การทบทวนประจำปีพบว่าพนักงานการเงิน วิศวกรซอฟต์แวร์ และผู้บริหารระดับสูงต่างได้รับสไลด์อบรมความปลอดภัยชุดเดียวกันทั้งหมด ส่งผลให้การมีส่วนร่วมต่ำและยังเกิดเหตุเฉพาะตำแหน่งงานอย่างการหลอกโอนเงินและคีย์ API รั่วไหลอย่างต่อเนื่อง ผู้จัดการโครงการควรปรับปรุงขั้นตอนใดของโครงการเป็นลำดับแรกเพื่อออกแบบเนื้อหาให้ตรงกับความเสี่ยงจริงของแต่ละกลุ่ม?',
    choices: [
      { id: 'c1', textEn: 'Program development (role-based curriculum design)', textTh: 'ขั้นตอนการพัฒนาหลักสูตรตามบทบาทหน้าที่ (Program development)' },
      { id: 'c2', textEn: 'Unknown-environment active reconnaissance', textTh: 'การหาข่าวเชิงรุกแบบ Unknown-environment' },
      { id: 'c3', textEn: 'Data processor contract termination', textTh: 'การยกเลิกสัญญา Data processor' },
      { id: 'c4', textEn: 'Hardware sanitization and disposal', textTh: 'การล้างข้อมูลและทำลายฮาร์ดแวร์' }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'การออกแบบหลักสูตรเฉพาะตำแหน่งงาน (Role-based curriculum) เพื่อแก้ปัญหาความเสี่ยงที่ต่างกันระหว่างฝ่ายการเงิน นักพัฒนา และผู้บริหาร อยู่ในขั้น Development ของโครงการ',
    choiceRationales: {
      c1: 'ถูก: ขั้น Development มุ่งพัฒนาเนื้อหาให้สอดคล้องความเสี่ยงจริงของแต่ละบทบาทก่อนนำไปส่งมอบ (Execution)',
      c2: 'ผิด: เป็นขั้นตอนการทดสอบเจาะระบบ ไม่ใช่การปรับปรุงหลักสูตรอบรมพนักงาน; เหมาะเมื่อจำลองผู้โจมตีภายนอก',
      c3: 'ผิด: เกี่ยวกับสัญญาคู่ค้าประมวลผลข้อมูล ไม่ใช่การพัฒนาหลักสูตรอบรมภายใน; เหมาะเมื่อผู้ขายละเมิดข้อตกลง Privacy',
      c4: 'ผิด: เป็นขั้นตอนปลดระวางอุปกรณ์ ไม่ใช่การฝึกอบรมบุคลากร; เหมาะเมื่อทำลายสื่อบันทึกข้อมูลหมดอายุการใช้งาน'
    },
    misconceptionTh:
      'มักนำขั้นตอน Execution (การจัดส่งสื่ออบรม) มาสับสนกับ Development (การออกแบบหลักสูตรแยกตามบทบาทและความเสี่ยง)',
    relatedLessonIds: ['L5-07'],
    tags: ['training-development', 'role-based-training', 'awareness-program']
  },
  {
    id: 'Q5-059',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.6'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'During a facility walk-through, an auditor observes an employee holding a badge-controlled office door open for an unescorted stranger carrying coffee cups without checking visitor credentials, while another staff member stores reused complex credentials on sticky notes beneath a keyboard. Which PAIR of awareness topics MOST directly addresses both weaknesses?',
    promptTh:
      'ระหว่างการเดินตรวจอาคาร ผู้ตรวจสอบพบพนักงานเปิดประตูห้องทำงานระบบคีย์การ์ดค้างไว้ให้คนแปลกหน้าที่ถือแก้วกาแฟเดินตามเข้ามาโดยไม่ตรวจบัตรผู้มาติดต่อ ขณะที่พนักงานอีกรายจดรหัสผ่านซ้ำๆ ไว้บนกระดาษโน้ตใต้คีย์บอร์ด คู่หัวข้อฝึกอบรมใดแก้ไขจุดอ่อนทั้งสองได้ตรงจุดที่สุด?',
    choices: [
      { id: 'c1', textEn: 'OPSEC and data retention', textTh: 'OPSEC และ Data retention' },
      { id: 'c2', textEn: 'Removable media and regulatory reporting', textTh: 'Removable media และ Regulatory reporting' },
      { id: 'c3', textEn: 'Situational awareness and password management', textTh: 'Situational awareness และ Password management' },
      { id: 'c4', textEn: 'Audit committee governance and RTBF', textTh: 'ธรรมาภิบาล Audit committee และ RTBF' }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'การสังเกตผู้เดินตามเข้าประตูคีย์การ์ด (Tailgating) ตรงกับ Situational awareness ส่วนการเลี่ยงจดรหัสผ่านและไม่ใช้รหัสซ้ำด้วย Password manager ตรงกับ Password management',
    choiceRationales: {
      c1: 'ผิด: OPSEC และ Retention ไม่ได้มุ่งแก้เรื่อง Tailgating และ Password; เหมาะกับการคุมการโพสต์ภาพองค์กรและอายุเก็บไฟล์',
      c2: 'ผิด: เกี่ยวกับแฟลชไดรฟ์และการรายงานรัฐ ไม่ตรงกับพฤติกรรมทั้งสองในโจทย์; เหมาะกับกรณีพอร์ต USB สาธารณะและแจ้งเหตุละเมิด',
      c3: 'ถูก: Situational awareness ป้องกัน Tailgating/Shoulder surfing และ Password management แก้การจดและใช้รหัสซ้ำ',
      c4: 'ผิด: เป็นหัวข้อกำกับดูแลบอร์ดและกฎหมายความเป็นส่วนตัว ไม่ใช่การฝึกพฤติกรรมพนักงานหน้างาน; เหมาะกับ Objective 5.4/5.5'
    },
    misconceptionTh:
      'มักมองปัญหา Tailgating ว่าเป็นเรื่องของฝ่าย รปภ. เท่านั้น ทั้งที่พนักงานทุกคนต้องมี Situational awareness',
    relatedLessonIds: ['L5-07', 'L4-08', 'L1-03'],
    tags: ['situational-awareness', 'password-management', 'tailgating']
  },
  {
    id: 'Q5-060',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.6'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'exam-ready',
    promptEn:
      'A healthcare provider must demonstrate continuous user-readiness oversight across the full employee lifecycle, ensuring new hires understand Acceptable Use policies before system provisioning and that active personnel stay alert against voice-based pretexting and potential insider threats throughout employment. Which TWO program practices BEST satisfy initial and recurring reporting and monitoring? (Choose two.)',
    promptTh:
      'ผู้ให้บริการทางการแพทย์ต้องพิสูจน์การเฝ้าติดตามความพร้อมของบุคลากรอย่างต่อเนื่องตลอดอายุการจ้างงาน เพื่อให้มั่นใจว่าพนักงานใหม่เข้าใจนโยบาย AUP ก่อนเปิดสิทธิ์เข้าระบบ และบุคลากรปัจจุบันยังคงตื่นตัวต่อการหลอกลวงทางโทรศัพท์และสัญญาณภัยคุกคามจากคนในอย่างสม่ำเสมอ แนวปฏิบัติ 2 ข้อใดตอบโจทย์การรายงานและเฝ้าติดตามแบบ Initial และ Recurring ได้ดีที่สุด? (เลือก 2 ข้อ)',
    choices: [
      { id: 'c1', textEn: 'Exempt senior clinicians and executives from awareness tracking to avoid schedule delays', textTh: 'ยกเว้นแพทย์อาวุโสและผู้บริหารจากการติดตามผลการอบรมเพื่อไม่ให้กระทบตารางงาน' },
      { id: 'c2', textEn: 'Mandate initial awareness training and policy handbook sign-off during onboarding before granting access', textTh: 'บังคับการอบรมเริ่มต้นและลงนามคู่มือนโยบายในช่วง Onboarding ก่อนเปิดสิทธิ์เข้าใช้งานระบบ' },
      { id: 'c3', textEn: 'Restrict user awareness assessments solely to post-incident remediation reviews', textTh: 'จำกัดการประเมินความตระหนักรู้ของบุคลากรไว้เฉพาะช่วงทบทวนหลังเกิดเหตุละเมิดเท่านั้น' },
      { id: 'c4', textEn: 'Conduct recurring social-engineering refreshers, insider-threat reminders, and completion tracking', textTh: 'จัดการทบทวนเรื่อง Social engineering, การแจ้งเบาะแส Insider threat และติดตามสถิติอย่างต่อเนื่องตามรอบ' },
      { id: 'c5', textEn: 'Replace written policy handbooks entirely with informal verbal briefings at team lunches', textTh: 'ยกเลิกคู่มือนโยบายลายลักษณ์อักษรทั้งหมดแล้วใช้การพูดคุยแจ้งปากเปล่าแทน' }
    ],
    correctChoiceIds: ['c2', 'c4'],
    explanationTh:
      'การอบรมและรับทราบคู่มือนโยบายก่อนเปิดสิทธิ์สร้าง Baseline ตั้งแต่วันแรก (Initial) และการทบทวน Social engineering/Insider threat พร้อมติดตามสถิติตามรอบรักษาความพร้อมต่อเนื่อง (Recurring)',
    choiceRationales: {
      c1: 'ผิด: ผู้บริหารและแพทย์อาวุโสมักเป็นเป้าหมายหลักและมีสิทธิ์เข้าถึงข้อมูลสำคัญ จึงห้ามยกเว้นการติดตาม; ควรจัดอบรมแบบกระชับเฉพาะบทบาทผู้บริหารแทน',
      c2: 'ถูก: การอบรมเบื้องต้นและลงนามคู่มือก่อนรับสิทธิ์เข้าถึงสะท้อน Initial reporting & monitoring และ Policy/handbooks',
      c3: 'ผิด: เป็นการแก้ปัญหาเชิงรับหลังความเสียหายเกิดขึ้นแล้ว ไม่ใช่โครงการป้องกันต่อเนื่อง; เหมาะสำหรับ Lessons learned เพิ่มเติมเท่านั้น',
      c4: 'ถูก: การทบทวนซ้ำและติดตามตัวชี้วัดเรื่อง Social engineering และ Insider threat ตามรอบคือ Recurring monitoring',
      c5: 'ผิด: การแจ้งปากเปล่าไม่เหลือหลักฐานตรวจสอบและขาดมาตรฐาน; ควรใช้ Policy/handbooks ที่อ่านเข้าใจง่ายและบันทึกผลได้'
    },
    misconceptionTh:
      'มักละเลยการอบรมตั้งแต่ก่อนเปิดสิทธิ์วันแรก หรือคิดว่าการอบรมครั้งเดียวตอนเข้าทำงานเพียงพอตลอดอายุงาน',
    relatedLessonIds: ['L5-07', 'L5-05', 'L2-03'],
    tags: ['initial-training', 'recurring-monitoring', 'policy-handbooks', 'insider-threat']
  }
];
