import type { Question } from '../../types';

export const Q_D1: Question[] = [
  // =========================================================================
  // Objective 1.1: Compare and contrast various types of security controls
  // =========================================================================
  {
    id: 'Q1-001',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A regional hospital operates a medical imaging workstation certified by regulators, and the vendor strictly prohibits OS patching or installing endpoint agents. To reduce exposure, the security team places the workstation inside an isolated VLAN with strict firewall ACLs and an inline IPS using virtual signatures. Which security control type BEST describes this deployment?',
    promptTh:
      'โรงพยาบาลระดับภูมิภาคแห่งหนึ่งใช้งานเครื่องเวิร์กสเตชันประมวลผลภาพทางการแพทย์ที่ผ่านการรับรองจากหน่วยงานกำกับดูแล ซึ่งผู้ผลิตห้ามอัปเดตแพตช์ระบบปฏิบัติการหรือติดตั้งเอเจนต์บนเครื่องโดยเด็ดขาด ทีมความปลอดภัยจึงแยกเครื่องดังกล่าวไว้ใน VLAN เฉพาะ พร้อมกำหนด Firewall ACL ที่เข้มงวดและใช้ IPS แบบ Inline ที่ใช้ชุดซิกเนเจอร์เสมือน มาตรการควบคุมนี้จัดเป็น Security Control ประเภทใดเหมาะสมที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Corrective', textTh: 'เชิงแก้ไข (Corrective)' },
      { id: 'c2', textEn: 'Compensating', textTh: 'เชิงชดเชย (Compensating)' },
      { id: 'c3', textEn: 'Deterrent', textTh: 'เชิงปราม (Deterrent)' },
      { id: 'c4', textEn: 'Directive', textTh: 'เชิงกำกับสั่งการ (Directive)' }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'Compensating Control เป็นมาตรการทางเลือกหรือมาตรการเสริมที่ใช้ลดความเสี่ยงเมื่อองค์กรมีข้อจำกัดทางเทคนิค กฎหมาย หรือข้อบังคับของผู้ผลิตจนไม่สามารถติดตั้งมาตรการมาตรฐาน (เช่น OS Patching และ Endpoint Agent) ได้โดยตรง การแยก VLAN ร่วมกับ Firewall ACL และ IPS Virtual Signatures จึงเป็นการลดความเสี่ยงชดเชยอย่างตรงจุด',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Corrective Control ใช้แก้ไข กักกัน หรือกู้คืนระบบหลังจากเหตุการณ์ความเสียหายเกิดขึ้นแล้ว แต่มาตรการนี้ถูกวางไว้ล่วงหน้าเพื่อลดความเสี่ยงของระบบที่แพตช์ไม่ได้ โดย Corrective จะเหมาะสมเมื่อทีมงานต้องกู้คืนข้อมูลจาก Backup หรือแยกเครื่องหลังติดมัลแวร์',
      c2: 'ถูกต้อง: เนื่องจากข้อจำกัดด้านการรับรองเครื่องมือแพทย์ทำให้ไม่สามารถแพตช์ระบบหรือลงเอเจนต์ได้ ทีมงานจึงใช้ Network Segmentation และ Virtual Signatures ลดความเสี่ยงแทนมาตรการหลัก',
      c3: 'ไม่ถูกต้อง: Deterrent Control เน้นการปรามหรือทำให้ผู้โจมตีลังเลเชิงจิตวิทยา เช่น ป้ายเตือนหรือแสงสว่าง แต่มาตรการ VLAN และ IPS บังคับใช้ทางเทคนิคเพื่อลดพื้นผิวการโจมตี โดย Deterrent จะเหมาะสมเมื่อต้องการติดข้อความเตือนก่อนหน้าจอเข้าสู่ระบบ',
      c4: 'ไม่ถูกต้อง: Directive Control เป็นคำสั่ง กฎระเบียบ หรือนโยบายที่บอกให้บุคลากรปฏิบัติตาม แต่การแยก VLAN และ IPS เป็นกลไกทางเทคนิคไม่ใช่ข้อกำหนดเชิงเอกสาร โดย Directive จะเหมาะสมเมื่อองค์กรออกนโยบายการใช้งานที่เหมาะสม (AUP)'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนระหว่าง Compensating Control (มาตรการทดแทนเมื่อทำมาตรการมาตรฐานไม่ได้) กับ Corrective Control (มาตรการแก้ไขและฟื้นฟูหลังเกิดเหตุ)',
    relatedLessonIds: ['L1-01'],
    tags: ['security-controls', 'compensating-control', 'legacy-systems']
  },
  {
    id: 'Q1-002',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A logistics facility installs motion-activated floodlights and prominent signs reading "24/7 Recorded Surveillance — Trespassers Will Be Prosecuted" along its loading dock perimeter without adding locked gates or physical barriers. Which control category and type BEST describe these measures?',
    promptTh:
      'ศูนย์กระจายสินค้าแห่งหนึ่งติดตั้งไฟสปอตไลต์แบบตรวจจับความเคลื่อนไหวร่วมกับป้ายข้อความขนาดใหญ่ระบุว่า "บันทึกภาพตลอด 24 ชั่วโมง — ผู้บุกรุกจะถูกดำเนินคดี" บริเวณรอบท่าขนถ่ายสินค้า โดยไม่ได้ติดตั้งประตูล็อกหรือสิ่งกีดขวางทางกายภาพเพิ่มเติม มาตรการเหล่านี้จัดอยู่ในหมวดหมู่และประเภทใดเหมาะสมที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Physical / Preventive', textTh: 'ทางกายภาพ / เชิงป้องกัน (Physical / Preventive)' },
      { id: 'c2', textEn: 'Operational / Detective', textTh: 'เชิงปฏิบัติการ / เชิงตรวจจับ (Operational / Detective)' },
      { id: 'c3', textEn: 'Technical / Directive', textTh: 'ทางเทคนิค / เชิงกำกับสั่งการ (Technical / Directive)' },
      { id: 'c4', textEn: 'Physical / Deterrent', textTh: 'ทางกายภาพ / เชิงปราม (Physical / Deterrent)' }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'ไฟส่องสว่างและป้ายเตือนเป็นสิ่งติดตั้งทางกายภาพ (Physical) ที่ไม่ได้ขัดขวางการเดินผ่านได้จริง แต่มีเป้าหมายเชิงจิตวิทยาเพื่อทำให้ผู้บุกรุกลังเลและถอยกลับ (Deterrent) จึงจัดเป็น Physical / Deterrent',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: แม้จะเป็นมาตรการทางกายภาพ แต่แสงไฟและป้ายข้อความไม่สามารถหยุดผู้บุกรุกไม่ให้เดินผ่านเข้าไปได้จริง โดย Physical / Preventive จะเหมาะสมกับเสากั้น Bollards หรือประตู Access Control Vestibule',
      c2: 'ไม่ถูกต้อง: การติดไฟและป้ายไม่ได้อาศัยกระบวนการปฏิบัติงานของเจ้าหน้าที่และไม่ได้บันทึกหรือแจ้งเตือนเหตุการณ์ให้ทีมงานทราบ โดย Operational / Detective จะเหมาะสมกับการเดินตรวจตราและรายงานความผิดปกติของเจ้าหน้าที่รักษาความปลอดภัย',
      c3: 'ไม่ถูกต้อง: โครงสร้างนี้ไม่ใช่ซอฟต์แวร์หรือโปรโตคอลทางเทคนิค และเน้นการขู่ปรามมากกว่าการกำหนดขั้นตอนการทำงานให้พนักงาน โดย Technical / Directive จะเหมาะสมกับการแสดงข้อกำหนดการใช้งานระบบก่อนคลิกยอมรับในซอฟต์แวร์',
      c4: 'ถูกต้อง: ไฟส่องสว่างและป้ายขู่ดำเนินคดีเป็นอุปกรณ์ทางกายภาพที่มุ่งลดแรงจูงใจของผู้บุกรุกโดยไม่สร้างกำแพงกั้นการเข้าถึงโดยตรง'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนสับสนระหว่างการขู่ปรามไม่ให้กล้าลงมือ (Deterrent) กับสิ่งกีดขวางที่หยุดยั้งผู้บุกรุกได้จริง (Preventive)',
    relatedLessonIds: ['L1-01', 'L1-03'],
    tags: ['security-controls', 'physical-security', 'deterrent']
  },
  {
    id: 'Q1-003',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'Following an internal audit finding on privilege creep, an insurance firm institutes a recurring quarterly workflow in which department managers review active staff permissions and submit revocation requests for employees who transferred teams. Which security control category BEST classifies this recurring review activity?',
    promptTh:
      'ภายหลังการตรวจสอบภายในพบปัญหาสิทธิ์ผู้ใช้งานสะสมเกินความจำเป็น บริษัทประกันภัยจึงจัดให้มีกระบวนการประจำทุกไตรมาสที่หัวหน้าแผนกต้องทบทวนสิทธิ์ของพนักงานในสังกัดและส่งคำขอยกเลิกสิทธิ์สำหรับผู้ที่ย้ายสายงาน กิจกรรมการทบทวนสิทธิ์ตามรอบนี้จัดอยู่ในหมวดหมู่ใดของ Security Control เหมาะสมที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Operational', textTh: 'เชิงปฏิบัติการ (Operational)' },
      { id: 'c2', textEn: 'Managerial', textTh: 'เชิงบริหาร (Managerial)' },
      { id: 'c3', textEn: 'Technical', textTh: 'ทางเทคนิค (Technical)' },
      { id: 'c4', textEn: 'Physical', textTh: 'ทางกายภาพ (Physical)' }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'การทบทวนสิทธิ์ตามรอบเวลา (Periodic Access Review) ที่หัวหน้างานลงมือปฏิบัติเป็นกระบวนการทำงานประจำตามรอบที่กำหนด จัดเป็น Operational Control เพราะอาศัยคนและขั้นตอนการปฏิบัติงานจริง ไม่ใช่การร่างนโยบายหรือการประเมินความเสี่ยงระดับบริหาร',
    choiceRationales: {
      c1: 'ถูกต้อง: กิจกรรมที่บุคลากรลงมือปฏิบัติอย่างต่อเนื่องตามขั้นตอน เช่น การทบทวนสิทธิ์ผู้ใช้ตามรอบเวลา การอบรมพนักงาน และการเดินตรวจตรา จัดเป็น Operational Control',
      c2: 'ไม่ถูกต้อง: แม้ผู้ทำจะเป็นหัวหน้าแผนก แต่ Managerial Control เน้นการวางแผนนโยบาย การกำหนดกรอบธรรมาภิบาล และการประเมินความเสี่ยงระดับองค์กร โดย Managerial จะเหมาะสมเมื่อ CISO จัดทำนโยบายการจัดการสิทธิ์หรือประเมินความเสี่ยงประจำปี',
      c3: 'ไม่ถูกต้อง: สถานการณ์นี้เน้นการทำงานของหัวหน้าแผนกในการตรวจสอบสิทธิ์ด้วยตนเอง ไม่ใช่กลไกบังคับใช้อัตโนมัติของระบบไอที โดย Technical จะเหมาะสมกับการตั้งค่าสคริปต์ IAM ปิดบัญชีอัตโนมัติเมื่อสถานะ HR เปลี่ยนแปลง',
      c4: 'ไม่ถูกต้อง: การทบทวนสิทธิ์ในระบบสารสนเทศไม่เกี่ยวข้องกับสิ่งกีดขวางหรืออุปกรณ์ทางกายภาพ โดย Physical จะเหมาะสมกับการตรวจสอบบัตรผ่านเข้าห้องเซิร์ฟเวอร์และการล็อกตู้ Rack'
    },
    misconceptionTh:
      'มักเข้าใจผิดว่ากิจกรรมใดก็ตามที่ผู้จัดการทำหรือเกี่ยวข้องกับกระบวนการสิทธิ์ต้องเป็น Managerial Control ทั้งที่งานปฏิบัติตามรอบเวลาโดยบุคลากรจัดเป็น Operational Control',
    relatedLessonIds: ['L1-01'],
    tags: ['security-controls', 'operational-control', 'access-review']
  },
  {
    id: 'Q1-004',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.1'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'After an endpoint monitoring alert triggers on suspicious PowerShell activity, a SOC analyst correlates SIEM logs to confirm an infected workstation, immediately isolates the host from the network via EDR, and restores impacted project files from an immutable backup. Which TWO control types are demonstrated across these response actions? (Choose two.)',
    promptTh:
      'หลังจากระบบเฝ้าระวังแจ้งเตือนการใช้งาน PowerShell ที่น่าสงสัย นักวิเคราะห์ SOC ได้เชื่อมโยงข้อมูล Log ใน SIEM เพื่อยืนยันเครื่องที่ติดเชื้อ จากนั้นสั่งแยกเครื่องออกจากเครือข่ายทันทีผ่าน EDR และกู้คืนไฟล์งานที่ได้รับผลกระทบจากข้อมูลสำรองแบบแก้ไขไม่ได้ การตอบสนองเหล่านี้สะท้อน Security Control ประเภทใด 2 ข้อ? (เลือก 2 ข้อ)',
    choices: [
      { id: 'c1', textEn: 'Preventive', textTh: 'เชิงป้องกัน (Preventive)' },
      { id: 'c2', textEn: 'Detective', textTh: 'เชิงตรวจจับ (Detective)' },
      { id: 'c3', textEn: 'Deterrent', textTh: 'เชิงปราม (Deterrent)' },
      { id: 'c4', textEn: 'Compensating', textTh: 'เชิงชดเชย (Compensating)' },
      { id: 'c5', textEn: 'Corrective', textTh: 'เชิงแก้ไข (Corrective)' }
    ],
    correctChoiceIds: ['c2', 'c5'],
    explanationTh:
      'การแจ้งเตือนและตรวจสอบความเชื่อมโยง Log ใน SIEM เพื่อยืนยันเหตุการณ์ผิดปกติเป็นหน้าที่ของ Detective Control ส่วนการแยกเครื่องติดเชื้อออกจากเครือข่าย (Containment/Quarantine) และการกู้คืนไฟล์จาก Backup เพื่อนำระบบกลับสู่สภาพปกติเป็นหน้าที่ของ Corrective Control',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Preventive Control ทำงานเพื่อยับยั้งไม่ให้การรันสคริปต์อันตรายเกิดขึ้นตั้งแต่ต้น แต่ในเหตุการณ์นี้กิจกรรมต้องสงสัยได้เกิดขึ้นแล้ว โดย Preventive จะเหมาะสมกับการเปิด Application Allow-listing บล็อก PowerShell ที่ไม่ได้ลงนาม',
      c2: 'ถูกต้อง: Endpoint Alert และการวิเคราะห์ Correlation ใน SIEM ทำหน้าที่ค้นหาและยืนยันเหตุการณ์บุกรุกที่เกิดขึ้นแล้ว จึงเป็น Detective Control',
      c3: 'ไม่ถูกต้อง: ขั้นตอนการตรวจพบและแยกเครื่องไม่ได้มุ่งข่มขู่ผู้โจมตีเชิงจิตวิทยาก่อนลงมือ โดย Deterrent จะเหมาะสมกับการแสดงข้อความเตือนทางกฎหมายบนหน้าจอก่อนเข้าใช้งาน',
      c4: 'ไม่ถูกต้อง: ทั้ง SIEM, EDR Isolation และ Backup Restore เป็นมาตรการตอบสนองมาตรฐาน ไม่ใช่มาตรการทางเลือกที่ใช้ชดเชยข้อจำกัดของระบบเก่า โดย Compensating จะเหมาะสมเมื่อไม่สามารถแพตช์เครื่องได้จึงใช้การแยก VLAN แทน',
      c5: 'ถูกต้อง: การกักกันเครื่อง (Host Isolation) เพื่อหยุดความเสียหายต่อเนื่องและการกู้คืนจาก Backup ล้วนเป็นการแก้ไขและฟื้นฟูหลังเกิดเหตุ จึงเป็น Corrective Control'
    },
    misconceptionTh:
      'ผู้เรียนบางคนเข้าใจผิดว่าการแยกเครื่องออกจากเครือข่าย (Host Isolation) เป็น Preventive Control เพราะป้องกันไม่ให้ลามต่อ แต่เมื่อเหตุการณ์เกิดขึ้นแล้ว การกักกันและกู้คืนจัดเป็น Corrective Control',
    relatedLessonIds: ['L1-01'],
    tags: ['security-controls', 'detective', 'corrective']
  },
  {
    id: 'Q1-005',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A legal consulting firm publishes an updated Acceptable Use Policy requiring staff to classify client documents and encrypt attachments before sending external emails, and places mandatory handling reminders on the intranet portal. No automated email-blocking rules have been configured yet. Which control type BEST describes these published requirements?',
    promptTh:
      'บริษัทที่ปรึกษากฎหมายประกาศใช้นโยบาย Acceptable Use Policy ฉบับปรับปรุงที่กำหนดให้พนักงานจำแนกชั้นความลับเอกสารลูกค้าและเข้ารหัสไฟล์แนบก่อนส่งอีเมลออกภายนอก พร้อมติดประกาศข้อปฏิบัติไว้บนพอร์ทัลภายใน แต่ยังไม่ได้ตั้งค่ากฎบล็อกอีเมลอัตโนมัติ ข้อกำหนดที่ประกาศใช้นี้จัดเป็น Control ประเภทใดเหมาะสมที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Preventive', textTh: 'เชิงป้องกัน (Preventive)' },
      { id: 'c2', textEn: 'Corrective', textTh: 'เชิงแก้ไข (Corrective)' },
      { id: 'c3', textEn: 'Directive', textTh: 'เชิงกำกับสั่งการ (Directive)' },
      { id: 'c4', textEn: 'Detective', textTh: 'เชิงตรวจจับ (Detective)' }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'Directive Control คือการกำหนดคำสั่ง นโยบาย หรือข้อบังคับเป็นลายลักษณ์อักษรเพื่อชี้นำพฤติกรรมให้บุคลากรทราบว่าต้องทำหรือไม่ควรทำอะไร (เช่น AUP และข้อกำหนดการเข้ารหัสไฟล์แนบ) โดยไม่มีกลไกทางเทคนิคมาบล็อกการฝ่าฝืนโดยตรง',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: เนื่องจากยังไม่มีการตั้งค่ากฎบล็อกอีเมลอัตโนมัติ พนักงานยังคงสามารถฝ่าฝืนส่งไฟล์ที่ไม่เข้ารหัสได้ มาตรการนี้จึงไม่ได้ยับยั้งเชิงกลไก โดย Preventive จะเหมาะสมเมื่อระบบ DLP บล็อกอีเมลที่มีไฟล์ไม่เข้ารหัสโดยอัตโนมัติ',
      c2: 'ไม่ถูกต้อง: การออกนโยบายและคำแนะนำล่วงหน้าไม่ได้มุ่งซ่อมแซมหรือกู้คืนระบบหลังจากเกิดเหตุการณ์ข้อมูลรั่วไหล โดย Corrective จะเหมาะสมกับการเรียกคืนหรือยกเลิกสิทธิ์ลิงก์แชร์หลังตรวจพบข้อมูลรั่ว',
      c3: 'ถูกต้อง: Acceptable Use Policy และประกาศข้อบังคับบนพอร์ทัลทำหน้าที่สั่งการและกำหนดแนวปฏิบัติที่พนักงานต้องปฏิบัติตาม จึงตรงกับ Directive Control',
      c4: 'ไม่ถูกต้อง: ข้อกำหนดบนกระดาษและพอร์ทัลไม่ได้ทำหน้าที่ตรวจจับหรือบันทึกเหตุการณ์เมื่อมีคนส่งอีเมลผิดกฎ โดย Detective จะเหมาะสมกับการตั้งกฎ DLP แบบ Alert-only เพื่อแจ้งเตือนเมื่อพบไฟล์ไม่เข้ารหัส'
    },
    misconceptionTh:
      'มักสับสนระหว่าง Directive Control (ออกคำสั่ง/นโยบายให้คนทำตาม แต่ยังฝ่าฝืนได้) กับ Preventive Control (กลไกที่ขัดขวางการกระทำนั้นได้จริง)',
    relatedLessonIds: ['L1-01'],
    tags: ['security-controls', 'directive', 'policy']
  },
  {
    id: 'Q1-006',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'An e-commerce company experiences repeated credential-guessing attempts against an internet-facing administrative portal. The CISO directs the security team to implement a control that technically stops unauthorized connection attempts before the login prompt is ever reached, rather than discouraging attackers or alerting afterward. Which action BEST meets this requirement?',
    promptTh:
      'บริษัทอีคอมเมิร์ซเผชิญการพยายามสุ่มเดารหัสผ่านซ้ำ ๆ บนหน้าเว็บพอร์ทัลสำหรับผู้ดูแลระบบที่เปิดสู่อินเทอร์เน็ต CISO จึงสั่งการให้ทีมความปลอดภัยนำมาตรการที่สามารถหยุดยั้งการเชื่อมต่อจากผู้ไม่มีสิทธิ์ได้ทางเทคนิคก่อนที่จะเข้าถึงหน้าล็อกอิน แทนการทำให้ผู้โจมตีลังเลหรือการแจ้งเตือนภายหลัง การดำเนินการใดตอบโจทย์ความต้องการนี้ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Configuring a perimeter firewall IP allow list that drops all portal traffic except from the corporate VPN egress',
        textTh: 'ตั้งค่า IP Allow List บน Firewall ขอบเครือข่ายให้ดรอปทราฟฟิกเข้าสู่พอร์ทัลทั้งหมด ยกเว้นทราฟฟิกจากทางออก Corporate VPN'
      },
      {
        id: 'c2',
        textEn: 'Displaying a legal warning banner on the portal login screen stating unauthorized attempts will be prosecuted',
        textTh: 'แสดงแบนเนอร์ข้อความเตือนทางกฎหมายบนหน้าจอล็อกอินของพอร์ทัลว่าความพยายามเข้าถึงโดยมิชอบจะถูกดำเนินคดี'
      },
      {
        id: 'c3',
        textEn: 'Tuning SIEM correlation rules to raise a critical alert after five consecutive failed login attempts',
        textTh: 'ปรับแต่งกฎ SIEM ให้สร้างการแจ้งเตือนระดับวิกฤตเมื่อพบการล็อกอินล้มเหลวติดต่อกัน 5 ครั้ง'
      },
      {
        id: 'c4',
        textEn: 'Updating the corporate security policy to prohibit administrators from opening the portal from external networks',
        textTh: 'ปรับปรุงนโยบายความปลอดภัยองค์กรเพื่อห้ามผู้ดูแลระบบเปิดใช้งานพอร์ทัลจากเครือข่ายภายนอก'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'โจทย์ระบุลำดับความสำคัญชัดเจนว่าต้องการมาตรการ Technical + Preventive ที่ "หยุดยั้งก่อนถึงหน้าล็อกอิน" การตั้งค่า IP Allow List บน Firewall เพื่อดรอปแพ็กเก็ตจาก IP อื่นที่ไม่ใช่ Corporate VPN จึงปิดกั้นการเชื่อมต่อตั้งแต่ชั้นเครือข่ายก่อนถึงหน้าล็อกอินจริง ส่วนตัวเลือกอื่นเป็นเพียง Deterrent, Detective และ Directive ตามลำดับ',
    choiceRationales: {
      c1: 'ถูกต้อง: Firewall IP Allow List เป็น Technical Preventive Control ที่ตัดทราฟฟิกจากผู้ไม่มีสิทธิ์ก่อนเข้าถึงหน้าจอการยืนยันตัวตนได้ตรงตามเงื่อนไขที่สุด',
      c2: 'ไม่ถูกต้อง: แบนเนอร์เตือนทางกฎหมายเป็น Deterrent Control ที่เพียงขู่ปรามเชิงจิตวิทยา แต่ไม่หยุดยั้งแพ็กเก็ตหรือบอตที่พยายามสุ่มรหัสผ่าน โดยแบนเนอร์นี้เหมาะเป็นมาตรการเสริมเพื่อแสดงเจตจำนงทางกฎหมายและแจ้งเตือนผู้ใช้',
      c3: 'ไม่ถูกต้อง: SIEM Alert เป็น Detective Control ที่ทำงานหลังจากเกิดความพยายามล็อกอินล้มเหลวไปแล้ว ไม่ได้บล็อกการเชื่อมต่อก่อนถึงหน้าล็อกอิน โดย SIEM เหมาะใช้ตรวจจับและติดตามเหตุการณ์โจมตีเพื่อนำไปวิเคราะห์',
      c4: 'ไม่ถูกต้อง: การปรับนโยบายเป็น Managerial/Directive Control ที่อาศัยการปฏิบัติตามของพนักงาน ไม่สามารถหยุดผู้โจมตีภายนอกบนอินเทอร์เน็ตได้ โดยนโยบายเหมาะใช้กำหนดกติกาและบทลงโทษภายในองค์กร'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนเลือก SIEM Alert หรือ Warning Banner เพราะคุ้นเคยกับการป้องกัน Brute Force โดยมองข้ามเงื่อนไขสำคัญของโจทย์ที่ต้องการหยุดยั้งทางเทคนิคก่อนถึงหน้าล็อกอิน',
    relatedLessonIds: ['L1-01'],
    tags: ['security-controls', 'technical-preventive', 'firewall']
  },
  {
    id: 'Q1-007',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'An executive board hires an independent consultant to conduct an annual enterprise risk assessment and draft a formal Information Security Governance Policy aligned with regulatory obligations. Which control category do these deliverables belong to?',
    promptTh:
      'คณะกรรมการบริหารขององค์กรว่าจ้างที่ปรึกษาอิสระเพื่อดำเนินการประเมินความเสี่ยงประจำปีระดับองค์กร และจัดทำนโยบายธรรมาภิบาลความมั่นคงปลอดภัยสารสนเทศอย่างเป็นทางการให้สอดคล้องกับข้อกำหนดทางกฎหมาย ผลงานเหล่านี้จัดอยู่ใน Security Control หมวดหมู่ใด?',
    choices: [
      { id: 'c1', textEn: 'Operational', textTh: 'เชิงปฏิบัติการ (Operational)' },
      { id: 'c2', textEn: 'Technical', textTh: 'ทางเทคนิค (Technical)' },
      { id: 'c3', textEn: 'Physical', textTh: 'ทางกายภาพ (Physical)' },
      { id: 'c4', textEn: 'Managerial', textTh: 'เชิงบริหาร (Managerial)' }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'การประเมินความเสี่ยง (Risk Assessment) และการจัดทำนโยบายระดับองค์กร (Governance Policy) เป็นการวางทิศทาง กำหนดกรอบความเสี่ยง และกำกับดูแลเชิงบริหารโดยฝ่ายบริหาร จึงจัดเป็น Managerial Control',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Operational Control เน้นขั้นตอนการลงมือปฏิบัติงานประจำวันของเจ้าหน้าที่หลังจากมีนโยบายแล้ว เช่น การฝึกอบรมหรือการเดินตรวจตรา โดย Operational จะเหมาะสมเมื่อทีมงานนำนโยบายนี้ไปจัดอบรมประจำปีให้พนักงาน',
      c2: 'ไม่ถูกต้อง: งานประเมินความเสี่ยงและร่างนโยบายเป็นกิจกรรมเชิงบริหารและเอกสารกำกับดูแล ไม่ใช่ฮาร์ดแวร์หรือซอฟต์แวร์บังคับใช้ โดย Technical จะเหมาะสมกับการนำข้อกำหนดในนโยบายไปตั้งค่าบน Firewall หรือ DLP',
      c3: 'ไม่ถูกต้อง: กิจกรรมนี้ไม่ได้เกี่ยวข้องกับอุปกรณ์หรือสิ่งกีดขวางทางกายภาพรอบอาคารหรือศูนย์ข้อมูล โดย Physical จะเหมาะสมกับการติดตั้งประตูคีย์การ์ดหรือรั้วรอบสถานที่',
      c4: 'ถูกต้อง: Risk Assessment และการกำหนด Security Governance Policy เป็นหน้าที่หลักของ Managerial Control'
    },
    misconceptionTh:
      'มักสับสนระหว่าง Managerial (การวางแผน ประเมินความเสี่ยง และเขียนนโยบายระดับบริหาร) กับ Operational (การปฏิบัติงานจริงของบุคลากรในแต่ละวัน)',
    relatedLessonIds: ['L1-01'],
    tags: ['security-controls', 'managerial', 'governance']
  },
  {
    id: 'Q1-008',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.1'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'exam-ready',
    promptEn:
      'A security architect is designing a defense-in-depth plan for a pharmaceutical R&D facility. Management requires one Technical Detective control and one Physical Preventive control to complement existing policies. Which TWO controls should the architect select? (Choose two.)',
    promptTh:
      'สถาปนิกความปลอดภัยกำลังออกแบบแนวป้องกันหลายชั้นสำหรับศูนย์วิจัยและพัฒนายา ฝ่ายบริหารต้องการมาตรการประเภท Technical Detective จำนวน 1 รายการ และ Physical Preventive จำนวน 1 รายการเพื่อเสริมนโยบายที่มีอยู่ สถาปนิกควรเลือกมาตรการใด 2 ข้อต่อไปนี้? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'File integrity monitoring (FIM) agent alerting on unauthorized system binary changes',
        textTh: 'เอเจนต์ File Integrity Monitoring (FIM) ที่แจ้งเตือนเมื่อไฟล์ไบนารีของระบบถูกแก้ไขโดยไม่ได้รับอนุญาต'
      },
      {
        id: 'c2',
        textEn: 'High-intensity perimeter floodlighting illuminating the employee parking area',
        textTh: 'ไฟสปอตไลต์ความเข้มสูงรอบพื้นที่จอดรถของพนักงาน'
      },
      {
        id: 'c3',
        textEn: 'Monthly phishing awareness training sessions conducted by HR',
        textTh: 'การจัดอบรมสร้างความตระหนักรู้เรื่องฟิชชิงประจำเดือนโดยฝ่ายทรัพยากรบุคคล'
      },
      {
        id: 'c4',
        textEn: 'Access control vestibule requiring dual-factor badge and biometric verification',
        textTh: 'โถงประตูควบคุมการเข้าออกสองชั้นที่ต้องยืนยันตัวตนทั้งบัตรผ่านและข้อมูลชีวมิติ'
      },
      {
        id: 'c5',
        textEn: 'Automated endpoint image restoration performed after malware containment',
        textTh: 'การกู้คืนอิมเมจของเครื่องปลายทางอัตโนมัติหลังจากกักกันมัลแวร์แล้ว'
      }
    ],
    correctChoiceIds: ['c1', 'c4'],
    explanationTh:
      'FIM เป็นซอฟต์แวร์ตรวจจับและแจ้งเตือนการเปลี่ยนแปลงไฟล์สำคัญจึงเป็น Technical Detective Control ส่วน Access Control Vestibule ที่ล็อกประตูสองชั้นและตรวจบัตรร่วมกับชีวมิติช่วยหยุดยั้งการเดินตามหลัง (Tailgating) ได้จริง จึงเป็น Physical Preventive Control',
    choiceRationales: {
      c1: 'ถูกต้อง: FIM เป็นเครื่องมือซอฟต์แวร์ (Technical) ที่เฝ้าระวังและแจ้งเตือนเมื่อพบการแก้ไขไฟล์โดยมิชอบ (Detective)',
      c2: 'ไม่ถูกต้อง: ไฟส่องสว่างรอบลานจอดรถเป็นมาตรการทางกายภาพ แต่ทำหน้าที่ปรามเชิงจิตวิทยา (Physical Deterrent) ไม่ได้หยุดยั้งการเข้าถึงได้จริง โดยตัวเลือกนี้เหมาะสมเมื่อต้องการลดจุดอับสายตาเพื่อทำให้ผู้บุกรุกลังเล',
      c3: 'ไม่ถูกต้อง: การอบรมพนักงานจัดเป็น Operational Control (ไม่ใช้กลไกฮาร์ดแวร์/ซอฟต์แวร์หรือสิ่งกีดขวางทางกายภาพ) โดยการอบรมเหมาะสมเมื่อต้องการเสริมทักษะให้คนรู้ทันภัยคุกคามทางวิศวกรรมสังคม',
      c4: 'ถูกต้อง: Access Control Vestibule เป็นสิ่งปลูกสร้างและอุปกรณ์ทางกายภาพ (Physical) ที่หยุดยั้งผู้ไม่มีสิทธิ์และป้องกันการเดินตามหลังได้จริงก่อนเข้าพื้นที่ (Preventive)',
      c5: 'ไม่ถูกต้อง: การกู้คืนระบบหลังเกิดเหตุติดมัลแวร์เป็น Technical Corrective Control ไม่ใช่ Detective หรือ Physical Preventive โดยมาตรการนี้เหมาะสมเมื่อต้องการลดเวลาฟื้นฟูระบบหลังเหตุโจมตี'
    },
    misconceptionTh:
      'ผู้เรียนอาจจับคู่หมวดหมู่และประเภทไขว้กัน เช่น มองว่าไฟส่องสว่างเป็น Physical Preventive หรือมองว่าการกู้คืนอัตโนมัติเป็น Detective Control',
    relatedLessonIds: ['L1-01', 'L1-03'],
    tags: ['security-controls', 'defense-in-depth', 'fim', 'physical-security']
  },
  {
    id: 'Q1-009',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'A payment processor must enforce phishing-resistant multi-factor authentication for administrative access to a legacy mainframe application to satisfy an external audit standard. However, the mainframe software cannot integrate with modern MFA providers and cannot be replaced for 18 months. Which approach represents the MOST appropriate compensating control?',
    promptTh:
      'ผู้ให้บริการประมวลผลการชำระเงินต้องบังคับใช้การยืนยันตัวตนหลายปัจจัยที่ต้านทานฟิชชิงสำหรับการเข้าถึงระดับผู้ดูแลระบบบนแอปพลิเคชัน Mainframe รุ่นเก่าเพื่อให้ผ่านเกณฑ์การตรวจสอบภายนอก แต่ซอฟต์แวร์ Mainframe ไม่รองรับการเชื่อมต่อกับผู้ให้บริการ MFA สมัยใหม่และยังไม่สามารถเปลี่ยนระบบได้ภายใน 18 เดือน แนวทางใดเหมาะสมที่สุดในการเป็น Compensating Control?',
    choices: [
      {
        id: 'c1',
        textEn: 'Documenting an indefinite risk acceptance exemption with no additional technical safeguards',
        textTh: 'จัดทำเอกสารขอยกเว้นและยอมรับความเสี่ยงแบบไม่มีกำหนดโดยไม่ต้องเพิ่มมาตรการทางเทคนิคใด ๆ'
      },
      {
        id: 'c2',
        textEn: 'Isolating management access through a hardened jump host that enforces hardware MFA and strict source IP restrictions',
        textTh: 'จำกัดช่องทางบริหารจัดการให้เชื่อมต่อผ่าน Jump Host ที่เสริมแกร่งแล้วซึ่งบังคับใช้ Hardware MFA และจำกัด IP ต้นทางอย่างเข้มงวด'
      },
      {
        id: 'c3',
        textEn: 'Scheduling automated daily offline tape backups of the mainframe configuration after business hours',
        textTh: 'ตั้งเวลาสำรองข้อมูลการตั้งค่าของ Mainframe ลงเทปแบบออฟไลน์อัตโนมัติทุกวันหลังเวลาทำการ'
      },
      {
        id: 'c4',
        textEn: 'Posting printed security policy reminders next to all operations team workstations',
        textTh: 'ติดป้ายกระดาษแจ้งเตือนนโยบายความปลอดภัยไว้ข้างเครื่องคอมพิวเตอร์ของทีมปฏิบัติการทั้งหมด'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'Compensating Control ที่ดีต้องลดความเสี่ยงในจุดเดียวกับที่มาตรการหลักทำไม่ได้จริง ในกรณีนี้ Mainframe รองรับ MFA โดยตรงไม่ได้ จึงต้องบังคับให้ทุกการเชื่อมต่อบริหารจัดการวิ่งผ่าน Jump Host ที่บังคับ Hardware MFA และจำกัดเส้นทางเครือข่าย (Isolation/ACL) แทน',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การยอมรับความเสี่ยงโดยไม่มีมาตรการลดความเสี่ยงใด ๆ ไม่ใช่ Compensating Control และไม่ช่วยให้ผ่านเกณฑ์การตรวจสอบด้านการเข้าถึง โดยการยอมรับความเสี่ยงจะเหมาะสมเฉพาะกรณีที่ต้นทุนการควบคุมสูงกว่าความเสียหายอย่างมากและอยู่ในระดับความเสี่ยงที่ยอมรับได้',
      c2: 'ถูกต้อง: การบังคับผ่าน Jump Host ที่มี Hardware MFA และการจำกัด IP ช่วยตอบโจทย์เจตนารมณ์ของมาตรการหลักเพื่อป้องกันการเข้าถึงโดยมิชอบแทน Mainframe ได้จริง',
      c3: 'ไม่ถูกต้อง: การสำรองข้อมูลเป็น Corrective Control สำหรับกู้คืนระบบหลังเกิดเหตุ ไม่ได้ช่วยลดความเสี่ยงจากการเข้าสู่ระบบโดยไม่มี MFA โดย Backup เหมาะสมสำหรับการรักษาความพร้อมใช้งานและฟื้นฟูข้อมูลหลังความเสียหาย',
      c4: 'ไม่ถูกต้อง: ป้ายเตือนเป็นเพียง Directive Control ที่ไม่เทียบเท่าความมั่นคงของการยืนยันตัวตนด้วย MFA และหยุดผู้โจมตีไม่ได้ โดยป้ายเตือนเหมาะสมสำหรับการย้ำเตือนระเบียบปฏิบัติให้พนักงานที่ได้รับอนุญาต'
    },
    misconceptionTh:
      'ผู้เรียนบางคนเข้าใจผิดว่ามาตรการความปลอดภัยใดก็ได้ (เช่น การสำรองข้อมูลหรือการเซ็นขอยกเว้น) สามารถนำมาอ้างเป็น Compensating Control ได้ ทั้งที่ต้องเป็นมาตรการที่ลดความเสี่ยงเทียบเคียงวัตถุประสงค์ของมาตรการหลัก',
    relatedLessonIds: ['L1-01'],
    tags: ['compensating-control', 'jump-host', 'mfa', 'legacy-systems']
  },

  // =========================================================================
  // Objective 1.2: Summarize fundamental security concepts
  // =========================================================================
  {
    id: 'Q1-010',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A financial trading platform experiences an incident in which an attacker compromises an internal API relay handling anonymized transaction routing tokens and alters wire transfer payout amounts in transit before settlement, while no customer data is disclosed and the service stays online. Which CIA Triad principle was PRIMARILY violated?',
    promptTh:
      'แพลตฟอร์มซื้อขายทางการเงินประสบเหตุการณ์ที่ผู้โจมตีเจาะระบบส่งต่อ API ภายในที่ส่งเฉพาะโทเคนอ้างอิงเส้นทางธุรกรรมที่ปกปิดตัวตนแล้ว จากนั้นแก้ไขตัวเลขยอดเงินโอนระหว่างทางก่อนการชำระดุล โดยไม่มีการเปิดเผยข้อมูลลูกค้าและระบบยังคงออนไลน์ใช้งานได้ตามปกติ หลักการใดใน CIA Triad ที่ถูกละเมิดเป็นหลัก?',
    choices: [
      { id: 'c1', textEn: 'Confidentiality', textTh: 'การรักษาความลับ (Confidentiality)' },
      { id: 'c2', textEn: 'Availability', textTh: 'ความพร้อมใช้งาน (Availability)' },
      { id: 'c3', textEn: 'Integrity', textTh: 'ความถูกต้องครบถ้วน (Integrity)' },
      { id: 'c4', textEn: 'Non-repudiation', textTh: 'การห้ามปฏิเสธความรับผิดชอบ (Non-repudiation)' }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'การเปลี่ยนแปลงตัวเลขยอดเงินโอนโดยไม่ได้รับอนุญาตเป็นการทำลายความถูกต้องครบถ้วนของข้อมูล (Integrity) โดยตรง โจทย์ระบุชัดว่าไม่มีการรั่วไหลสู่สาธารณะ (Confidentiality ไม่ใช่ปัญหาหลัก) และบริการยังออนไลน์ (Availability ยังอยู่)',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: แม้ API ที่ไม่เข้ารหัสจะมีความเสี่ยงด้านการดักอ่าน แต่โจทย์เน้นว่าไม่ได้เปิดเผยข้อมูลต่อสาธารณะและปัญหาหลักคือตัวเลขถูกแก้ไข โดย Confidentiality จะเป็นคำตอบหลักหากผู้โจมตีดักเก็บข้อมูลบัตรลูกค้าไปขายโดยไม่ได้แก้ไขข้อมูล',
      c2: 'ไม่ถูกต้อง: บริการยังคงออนไลน์และทำงานได้ต่อเนื่องในช่วงเกิดเหตุ โดย Availability จะเป็นคำตอบหลักหากผู้โจมตีโจมตีแบบ DDoS หรือเข้ารหัสไฟล์จนระบบหยุดให้บริการ',
      c3: 'ถูกต้อง: Integrity มุ่งรับรองว่าข้อมูลไม่ถูกแก้ไขหรือปลอมแปลงโดยมิชอบ ทั้งขณะจัดเก็บและระหว่างส่งผ่านเครือข่าย',
      c4: 'ไม่ถูกต้อง: Non-repudiation เป็นหลักการสำคัญเสริมจาก CIA Triad เพื่อพิสูจน์ตัวผู้ทำธุรกรรมจนปฏิเสธไม่ได้ และไม่ใช่หนึ่งในสามเสาหลักของ CIA Triad โดย Non-repudiation จะตรงประเด็นเมื่อผู้ส่งปฏิเสธว่าตนไม่ได้สั่งโอนเงินรายการนั้น'
    },
    misconceptionTh:
      'ผู้เรียนบางคนเหมารวมทุกการแฮกการเชื่อมต่อที่ไม่เข้ารหัสว่าเป็นการละเมิด Confidentiality หรือสับสนว่า Non-repudiation เป็นส่วนหนึ่งของสามเสาหลัก CIA Triad',
    relatedLessonIds: ['L1-02'],
    tags: ['cia-triad', 'integrity', 'on-path']
  },
  {
    id: 'Q1-011',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'During an internal fraud investigation on an enterprise loan-disbursement portal, a manager denies approving a high-value payout, claiming an IT administrator holding the shared AES encryption key could have forged the database approval record. Which mechanism BEST establishes non-repudiation for future approvals?',
    promptTh:
      'ระหว่างการสืบสวนทุจริตภายในระบบเบิกจ่ายสินเชื่อขององค์กร ผู้จัดการรายหนึ่งปฏิเสธว่าไม่ได้เป็นผู้อนุมัติรายการจ่ายเงินมูลค่าสูง โดยอ้างว่าผู้ดูแลระบบไอทีซึ่งถือครองกุญแจเข้ารหัส AES ร่วมกันอาจเป็นผู้สร้างบันทึกการอนุมัติปลอมในฐานข้อมูล กลไกใดเหมาะสมที่สุดในการสร้างคุณสมบัติ Non-repudiation สำหรับการอนุมัติในอนาคต?',
    choices: [
      {
        id: 'c1',
        textEn: 'Encrypting approval payloads with a rotating shared AES-256 group key',
        textTh: 'เข้ารหัสข้อมูลคำสั่งอนุมัติด้วยกุญแจกลุ่ม AES-256 ที่หมุนเวียนตามรอบเวลา'
      },
      {
        id: 'c2',
        textEn: 'Requiring managers to digitally sign each approval using individual hardware-bound private keys verified via PKI and stored in immutable audit logs',
        textTh: 'กำหนดให้ผู้จัดการลงลายเซ็นดิจิทัลบนคำสั่งอนุมัติด้วย Private Key เฉพาะบุคคลที่ผูกติดกับฮาร์ดแวร์ ตรวจสอบผ่าน PKI และบันทึกใน Audit Log ที่แก้ไขไม่ได้'
      },
      {
        id: 'c3',
        textEn: 'Generating and storing an unsigned SHA-256 digest alongside each approval record',
        textTh: 'สร้างและจัดเก็บค่าสรุป SHA-256 ที่ไม่ได้ลงนามกำกับไว้คู่กับบันทึกการอนุมัติแต่ละรายการ'
      },
      {
        id: 'c4',
        textEn: 'Logging standard username and password authentication timestamps to a local writable text file',
        textTh: 'บันทึกเวลาเข้าสู่ระบบด้วยชื่อผู้ใช้และรหัสผ่านลงในไฟล์ข้อความบนเซิร์ฟเวอร์ที่แก้ไขได้'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'Non-repudiation เกิดขึ้นได้เมื่อหลักฐานผูกมัดกับสิ่งที่ผู้กระทำครอบครองแต่เพียงผู้เดียว Digital Signature ด้วย Private Key เฉพาะบุคคลบนฮาร์ดแวร์ (เช่น Smart Card/Token) ภายใต้ PKI ร่วมกับ Immutable Audit Log จึงพิสูจน์ตัวผู้อนุมัติได้อย่างแท้จริง',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การเข้ารหัสแบบ Symmetric ใช้กุญแจลับเดียวกันหลายฝ่าย ทำให้ไม่สามารถพิสูจน์ได้ว่าฝ่ายใดเป็นผู้สร้างข้อมูล โดย Symmetric Encryption เหมาะกับการปกป้อง Confidentiality ของข้อมูลจำนวนมากอย่างรวดเร็ว',
      c2: 'ถูกต้อง: มีเพียงผู้จัดการเจ้าของ Private Key ที่ฝังในฮาร์ดแวร์เท่านั้นที่สร้างลายเซ็นดิจิทัลที่ตรวจสอบผ่าน Public Key ใน PKI ได้ จึงให้ทั้ง Integrity และ Non-repudiation',
      c3: 'ไม่ถูกต้อง: ค่า Hash SHA-256 เพียงอย่างเดียวพิสูจน์ได้แค่ Integrity ว่าข้อมูลไม่ถูกแก้ไข แต่ใครก็สามารถคำนวณ Hash ใหม่ได้ จึงไม่ยืนยันตัวตนผู้สร้าง โดย Hashing เดี่ยวเหมาะสมกับการตรวจสอบความสมบูรณ์ของไฟล์ดาวน์โหลด',
      c4: 'ไม่ถูกต้อง: ไฟล์ Log ธรรมดาที่แก้ไขได้และอาศัยเพียงรหัสผ่านไม่ป้องกันการปลอมแปลงบันทึกโดยผู้ดูแลระบบ โดย Timestamp Log เหมาะสมเมื่อส่งไปยังคลัง Write-once ร่วมกับกลไกพิสูจน์ตัวตนที่แข็งแกร่งกว่า'
    },
    misconceptionTh:
      'มักเข้าใจผิดว่า Symmetric Encryption หรือค่า Hashing เพียงอย่างเดียวสามารถให้ Non-repudiation ได้ ทั้งที่ต้องอาศัย Asymmetric Digital Signature ด้วย Private Key เฉพาะตัว',
    relatedLessonIds: ['L1-02', 'L1-05'],
    tags: ['non-repudiation', 'digital-signature', 'pki']
  },
  {
    id: 'Q1-012',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A hospital network team is deploying 300 headless bedside telemetry monitors onto clinical VLANs. Security architects require each device to cryptographically prove its identity to the network before receiving network access, without human interaction or reliance on easily spoofed static MAC allow lists. Which AAA authentication approach BEST satisfies this need?',
    promptTh:
      'ทีมเครือข่ายโรงพยาบาลกำลังติดตั้งเครื่องตรวจวัดสัญญาณชีพแบบไม่มีหน้าจอโต้ตอบ (Headless) จำนวน 300 เครื่องเข้าสู่ VLAN ทางคลินิก สถาปนิกความปลอดภัยกำหนดให้อุปกรณ์แต่ละเครื่องต้องพิสูจน์ตัวตนเชิงคริปโตกราฟีต่อเครือข่ายก่อนได้รับสิทธิ์เชื่อมต่อ โดยไม่ต้องอาศัยคนโต้ตอบและไม่พึ่งพารายชื่อ MAC Address คงที่ซึ่งปลอมแปลงได้ง่าย แนวทางการพิสูจน์ตัวตนในกรอบ AAA ข้อใดตอบโจทย์ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Prompting clinical staff to enter daily shared passwords through a captive web portal',
        textTh: 'ให้เจ้าหน้าที่คลินิกกรอกรหัสผ่านร่วมรายวันผ่านหน้าเว็บ Captive Portal สำหรับเครื่องแต่ละตัว'
      },
      {
        id: 'c2',
        textEn: 'Configuring discretionary access control (DAC) folder permissions on the telemetry database',
        textTh: 'กำหนดสิทธิ์โฟลเดอร์แบบ Discretionary Access Control (DAC) บนฐานข้อมูลสัญญาณชีพ'
      },
      {
        id: 'c3',
        textEn: 'Forwarding DHCP lease assignment logs to a centralized syslog accounting server',
        textTh: 'ส่งต่อ Log การแจกจ่าย IP ของ DHCP ไปยังเซิร์ฟเวอร์ Syslog ส่วนกลางเพื่อการติดตามตรวจสอบ'
      },
      {
        id: 'c4',
        textEn: 'Enforcing IEEE 802.1X with EAP-TLS using unique machine certificates provisioned to each monitor',
        textTh: 'บังคับใช้ IEEE 802.1X ร่วมกับ EAP-TLS โดยใช้ใบรับรองดิจิทัลเฉพาะเครื่อง (Machine Certificates) ที่ติดตั้งบนเครื่องตรวจวัดแต่ละตัว'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'ในกรอบ AAA ด้าน Authenticating Systems อุปกรณ์อัตโนมัติ (Headless Devices) ต้องพิสูจน์ตัวตนต่อเครือข่ายโดยไม่ใช้มนุษย์และต้านทานการปลอมแปลง MAC ได้ดีที่สุดด้วย IEEE 802.1X (EAP-TLS) ที่ตรวจสอบ Machine Certificates ผ่าน RADIUS',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การกรอกรหัสผ่านร่วมเป็นรูปแบบที่ไม่ปลอดภัย ไม่ใช่การยืนยันตัวตนระดับอุปกรณ์ และไม่เหมาะกับอุปกรณ์ Headless นับร้อยเครื่อง โดย Captive Portal เหมาะสมกับการยืนยันตัวตนชั่วคราวของเครือข่าย Guest Wi-Fi สำหรับบุคคล',
      c2: 'ไม่ถูกต้อง: DAC เป็นโมเดล Authorization สำหรับสิทธิ์ระดับไฟล์ ไม่ใช่กลไก Authentication อุปกรณ์เข้าสู่เครือข่าย โดย DAC เหมาะสมเมื่อเจ้าของเอกสารต้องการแบ่งปันสิทธิ์อ่านเขียนโฟลเดอร์ให้เพื่อนร่วมงาน',
      c3: 'ไม่ถูกต้อง: การส่ง Log ไปยัง Syslog เป็นขั้นตอน Accounting ที่บันทึกเหตุการณ์หลังการเชื่อมต่อ ไม่ได้ตรวจสอบตัวตนก่อนอนุญาตเข้าเครือข่าย โดย Syslog เหมาะสมกับการเก็บหลักฐานเพื่อ Audit และสืบสวนย้อนหลัง',
      c4: 'ถูกต้อง: 802.1X EAP-TLS ใช้ใบรับรองดิจิทัลเฉพาะเครื่องพิสูจน์ตัวตนระบบ (Authenticating Systems) โดยอัตโนมัติและแข็งแกร่งกว่า MAC Filtering'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนมองว่า AAA Authentication ใช้ยืนยันตัวตนเฉพาะบุคคล (Usernames/Passwords/MFA) หรือสับสนการบันทึก DHCP Log (Accounting) ว่าเป็นการยืนยันตัวตนอุปกรณ์',
    relatedLessonIds: ['L1-02'],
    tags: ['aaa', 'authenticating-systems', '802.1x', 'eap-tls']
  },
  {
    id: 'Q1-013',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'A multinational cloud provider must ensure engineers can read production diagnostic logs ONLY when all of the following conditions hold simultaneously: the engineer holds the On-Call Responder role, connects from a compliant corporate laptop with current patches, originates from an approved jurisdiction, and has an active incident ticket assigned. Which authorization model BEST supports this requirement?',
    promptTh:
      'ผู้ให้บริการคลาวด์ข้ามชาติต้องการกำหนดให้วิศวกรสามารถอ่าน Log การวินิจฉัยของระบบผลิตได้ก็ต่อเมื่อเงื่อนไขทั้งหมดต่อไปนี้เป็นจริงพร้อมกัน: วิศวกรอยู่ในบทบาท On-Call Responder, เชื่อมต่อจากแล็ปท็อปองค์กรที่อัปเดตแพตช์ล่าสุดแล้ว, เชื่อมต่อจากประเทศที่ได้รับอนุญาต และมีใบงานเหตุการณ์ที่ได้รับมอบหมายเปิดอยู่ โมเดลควบคุมสิทธิ์ใดรองรับเงื่อนไขเหล่านี้ได้ดีที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Attribute-based access control (ABAC)', textTh: 'Attribute-based access control (ABAC)' },
      { id: 'c2', textEn: 'Role-based access control (RBAC)', textTh: 'Role-based access control (RBAC)' },
      { id: 'c3', textEn: 'Mandatory access control (MAC)', textTh: 'Mandatory access control (MAC)' },
      { id: 'c4', textEn: 'Discretionary access control (DAC)', textTh: 'Discretionary access control (DAC)' }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'ABAC ออกแบบมาเพื่อประเมินคุณลักษณะ (Attributes) หลายมิติแบบไดนามิกพร้อมกัน ทั้งบทบาทผู้ใช้ สถานะสุขภาพอุปกรณ์ ตำแหน่งทางภูมิศาสตร์ และบริบทใบงาน ต่างจาก RBAC ที่อ้างอิงเฉพาะตำแหน่งหน้าที่เป็นหลัก',
    choiceRationales: {
      c1: 'ถูกต้อง: ABAC ประสานหลายคุณลักษณะ (Role + Device Posture + Geolocation + Ticket State) ในการตัดสินใจให้สิทธิ์แบบเรียลไทม์',
      c2: 'ไม่ถูกต้อง: RBAC ผูกสิทธิ์เข้ากับบทบาทหน้าที่เป็นหลัก แต่ไม่ได้รองรับเงื่อนไขเชิงพลวัตหลายมิติอย่างสถานะแพตช์เครื่องหรือเลขใบงานพร้อมกัน โดย RBAC จะเหมาะสมเมื่อองค์กรต้องการจัดการสิทธิ์พื้นฐานตามตำแหน่งแผนกใน Active Directory',
      c3: 'ไม่ถูกต้อง: MAC อาศัยป้ายระดับชั้นความลับ (Security Labels) และระดับความน่าเชื่อถือ (Clearance) คงที่จากส่วนกลาง ไม่ได้ประเมินบริบทอุปกรณ์หรือใบงานแบบไดนามิก โดย MAC เหมาะสมกับระบบความมั่นคงภาครัฐหรือข้อมูลลับทางทหาร',
      c4: 'ไม่ถูกต้อง: DAC เปิดให้เจ้าของไฟล์มอบสิทธิ์ให้ผู้อื่นได้เอง จึงไม่รองรับการบังคับใช้นโยบายบริบทความปลอดภัยแบบรวมศูนย์ โดย DAC เหมาะสมกับโฟลเดอร์แชร์ทั่วไปในองค์กรขนาดเล็ก'
    },
    misconceptionTh:
      'ผู้เรียนเห็นคำว่า "role" ในโจทย์จึงรีบเลือก RBAC โดยละเลยเงื่อนไขแวดล้อมอื่น ๆ (สถานะแพตช์ ประเทศ ใบงาน) ซึ่งเป็นตัวชี้ขาดให้ต้องใช้ ABAC',
    relatedLessonIds: ['L1-02', 'L1-03'],
    tags: ['authorization', 'abac', 'zero-trust']
  },
  {
    id: 'Q1-014',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'After acquiring a regional fintech startup, a parent corporation tasks its security governance team with comparing the startup\'s current security practices against the parent company\'s target security framework to identify missing controls and build a budgeted remediation roadmap. Which activity should the team conduct FIRST?',
    promptTh:
      'หลังเข้าซื้อกิจการบริษัทฟินเทคสตาร์ทอัพระดับภูมิภาค บริษัทแม่ได้มอบหมายให้ทีมธรรมาภิบาลความปลอดภัยเปรียบเทียบแนวปฏิบัติด้านความปลอดภัยที่สตาร์ทอัพใช้อยู่ในปัจจุบันกับกรอบมาตรฐานเป้าหมายของบริษัทแม่ เพื่อระบุมาตรการที่ยังขาดหายและจัดทำแผนแก้ไขพร้อมงบประมาณ ทีมงานควรดำเนินกิจกรรมใดเป็นอันดับแรก?',
    choices: [
      { id: 'c1', textEn: 'Full-scope red team penetration test', textTh: 'การทดสอบเจาะระบบแบบ Red Team เต็มรูปแบบ' },
      { id: 'c2', textEn: 'Honeynet deception deployment', textTh: 'การติดตั้งระบบล่อหลอกแบบ Honeynet' },
      { id: 'c3', textEn: 'Gap analysis', textTh: 'การวิเคราะห์ช่องว่าง (Gap analysis)' },
      { id: 'c4', textEn: 'Cryptographic key escrow audit', textTh: 'การตรวจสอบระบบฝากกุญแจเข้ารหัส (Key escrow audit)' }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'Gap Analysis เป็นกระบวนการเปรียบเทียบสถานะความปลอดภัยปัจจุบัน (Current State) กับกรอบมาตรฐานเป้าหมาย (Desired State) เพื่อหาส่วนที่ขาดหายและสร้างแผนปฏิบัติการแก้ไข (Remediation Roadmap) ตามลำดับความสำคัญก่อนการลงทุนหรือทดสอบเชิงรุก',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Penetration Test ทดสอบความสามารถในการเจาะช่องโหว่เชิงเทคนิค ไม่ได้ประเมินความครบถ้วนของนโยบาย กระบวนการ และมาตรการเทียบกับกรอบมาตรฐานองค์กร โดย Red Team เหมาะสมเมื่อต้องการทดสอบขีดความสามารถในการตรวจจับและตอบสนองของ SOC หลังปรับปรุงระบบแล้ว',
      c2: 'ไม่ถูกต้อง: Honeynet เป็นเครื่องมือตรวจจับและศึกษายุทธวิธีผู้บุกรุก ไม่ใช่กระบวนการประเมินความสอดคล้องเทียบมาตรฐานหลังควบรวมกิจการ โดย Honeynet เหมาะสมเมื่อต้องการดักจับและวิเคราะห์การเคลื่อนที่ด้านข้างของผู้โจมตีในเครือข่าย',
      c3: 'ถูกต้อง: Gap Analysis ทำหน้าที่เทียบสภาพจริงปัจจุบันกับเกณฑ์เป้าหมายโดยตรงเพื่อระบุจุดที่ต้องปรับปรุงและจัดสรรงบประมาณอย่างเป็นระบบ',
      c4: 'ไม่ถูกต้อง: การตรวจ Key Escrow ครอบคลุมเพียงหัวข้อย่อยด้าน PKI เท่านั้น ไม่ครอบคลุมภาพรวมทั้งกรอบมาตรฐานความปลอดภัย โดยเหมาะใช้ตรวจสอบเฉพาะระบบกู้คืนกุญแจเข้ารหัสไฟล์ขององค์กร'
    },
    misconceptionTh:
      'ผู้เรียนบางคนสับสนระหว่าง Gap Analysis (เทียบสถานะปัจจุบันกับมาตรฐานเป้าหมาย) กับ Penetration Testing (การจำลองการโจมตีหาช่องโหว่)',
    relatedLessonIds: ['L1-02'],
    tags: ['gap-analysis', 'governance', 'merger-acquisition']
  },
  {
    id: 'Q1-015',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'exam-ready',
    promptEn:
      'A cloud security architect is presenting a Zero Trust Architecture diagram aligned with NIST SP 800-207 to an executive engineering board. Which TWO core functions operate specifically within the Zero Trust Control Plane? (Choose two.)',
    promptTh:
      'สถาปนิกความปลอดภัยคลาวด์กำลังนำเสนอแผนผัง Zero Trust Architecture ที่สอดคล้องกับแนวทาง NIST SP 800-207 ต่อคณะกรรมการวิศวกรรมบริหาร หน้าที่หลัก 2 ข้อใดต่อไปนี้ทำงานอยู่ในระนาบ Zero Trust Control Plane โดยเฉพาะ? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Terminating or forwarding live application traffic directly inline between the user endpoint and enterprise resource',
        textTh: 'ตัดการเชื่อมต่อหรือส่งต่อทราฟฟิกแอปพลิเคชันจริงแบบ Inline ระหว่างเครื่องผู้ใช้และทรัพยากรองค์กร'
      },
      {
        id: 'c2',
        textEn: 'Evaluating identity risk, device posture, and security policies to decide whether to grant or deny access',
        textTh: 'ประเมินความเสี่ยงของตัวตน สถานะความปลอดภัยของอุปกรณ์ และนโยบายเพื่อตัดสินใจว่าจะอนุญาตหรือปฏิเสธการเข้าถึง'
      },
      {
        id: 'c3',
        textEn: 'Hosting the requesting subject system inside a narrowed implicit trust zone',
        textTh: 'เป็นพื้นที่รองรับระบบผู้ร้องขอ (Subject System) ภายในขอบเขต Implicit Trust Zone ที่ถูกบีบให้แคบลง'
      },
      {
        id: 'c4',
        textEn: 'Issuing session-specific credentials and instructing downstream enforcement gateways to establish or tear down connections',
        textTh: 'ออกข้อมูลรับรองเฉพาะเซสชันและสั่งการไปยังเกตเวย์ด่านหน้าให้เปิดหรือปิดเส้นทางการเชื่อมต่อ'
      },
      {
        id: 'c5',
        textEn: 'Encrypting bulk payload packets inside the application data tunnel after the session opens',
        textTh: 'เข้ารหัสแพ็กเก็ตข้อมูลปริมาณมากภายในท่อสื่อสารแอปพลิเคชันหลังจากเปิดเซสชันแล้ว'
      }
    ],
    correctChoiceIds: ['c2', 'c4'],
    explanationTh:
      'ในสถาปัตยกรรม Zero Trust ระนาบ Control Plane ประกอบด้วย Policy Engine (ตัดสินใจอนุญาต/ปฏิเสธตามบริบทและความเสี่ยง — c2) และ Policy Administrator (ออก Token เฉพาะเซสชันและสั่งการเปิด-ปิดเส้นทาง — c4) ส่วนการรับส่งทราฟฟิกและการบังคับใช้จริงอยู่ที่ Data Plane (PEP)',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การเปิด-ปิดเส้นทางรับส่งข้อมูลจริงแบบ Inline เป็นหน้าที่ของ Policy Enforcement Point (PEP) ซึ่งอยู่บน Data Plane โดยตัวเลือกนี้เหมาะสมเมื่ออธิบายบทบาทของ PEP',
      c2: 'ถูกต้อง: นี่คือหน้าที่โดยตรงของ Policy Engine (PE) ซึ่งทำหน้าที่ตัดสินใจเชิงนโยบายบน Control Plane',
      c3: 'ไม่ถูกต้อง: Subject/System และ Implicit Trust Zones เป็นองค์ประกอบในระนาบ Data Plane ที่มีการรับส่งข้อมูลจริง โดยตัวเลือกนี้เหมาะสมเมื่ออธิบายขอบเขต Data Plane',
      c4: 'ถูกต้อง: นี่คือบทบาทของ Policy Administrator (PA) บน Control Plane ที่ประสานงานสร้าง/ยกเลิกเซสชันกับ PEP',
      c5: 'ไม่ถูกต้อง: การรับส่งและเข้ารหัสแพ็กเก็ตข้อมูลแอปพลิเคชันเกิดขึ้นบน Data Plane ระหว่าง Subject กับ Resource โดยตัวเลือกนี้เหมาะสมเมื่ออธิบายการทำงานของช่องทางสื่อสาร Data Plane'
    },
    misconceptionTh:
      'ผู้เรียนมักจำสับสนระหว่างหน้าที่ของ Policy Enforcement Point (PEP บน Data Plane) กับ Policy Engine และ Policy Administrator (บน Control Plane)',
    relatedLessonIds: ['L1-03'],
    tags: ['zero-trust', 'control-plane', 'policy-engine', 'policy-administrator']
  },
  {
    id: 'Q1-016',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'A financial clearinghouse is securing a restricted server vault adjacent to a busy public corridor separated by thin drywall and cooled by high-velocity overhead HVAC vents. Security leadership wants to stop unauthorized individuals from following employees through the doorway AND deploy an interior intrusion sensor directly in front of the primary rack that avoids false alarms from HVAC airflow or hallway foot traffic. Which TWO physical controls BEST meet these needs? (Choose two.)',
    promptTh:
      'สำนักหักบัญชีทางการเงินกำลังเสริมความปลอดภัยให้ห้องนิรภัยเซิร์ฟเวอร์ซึ่งอยู่ติดกับทางเดินสาธารณะที่มีคนพลุกพล่านโดยกั้นด้วยผนังยิปซัมบาง ๆ และมีช่องเป่าลมระบบปรับอากาศความเร็วสูงอยู่ด้านบน ผู้บริหารต้องการป้องกันไม่ให้ผู้ไม่มีสิทธิ์เดินตามหลังพนักงานผ่านประตูทางเข้า และต้องการติดตั้งเซ็นเซอร์ตรวจจับการบุกรุกเฉพาะหน้าตู้ Rack หลักที่หลีกเลี่ยงสัญญาณเตือนผิดพลาดจากกระแสลมแอร์หรือคนเดินนอกทางเดิน มาตรการทางกายภาพ 2 ข้อใดเหมาะสมที่สุด? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Dual interlocking badge-controlled doors forming an access control vestibule',
        textTh: 'ประตูควบคุมด้วยบัตรผ่านแบบสองบานประสานล็อก (Access Control Vestibule)'
      },
      {
        id: 'c2',
        textEn: 'Ceiling-mounted microwave Doppler motion sensor',
        textTh: 'เซ็นเซอร์ตรวจจับความเคลื่อนไหวด้วยคลื่นไมโครเวฟ (Microwave Sensor) ติดตั้งบนเพดาน'
      },
      {
        id: 'c3',
        textEn: 'Ultrasonic motion detector aimed across the HVAC supply zone',
        textTh: 'เซ็นเซอร์คลื่นเสียงความถี่สูง (Ultrasonic Sensor) ที่หันผ่านแนวเป่าลมระบบปรับอากาศ'
      },
      {
        id: 'c4',
        textEn: 'Steel bollards anchored along the interior server aisle',
        textTh: 'เสากั้นเหล็ก (Bollards) ยึดติดพื้นตลอดแนวทางเดินภายในห้องเซิร์ฟเวอร์'
      },
      {
        id: 'c5',
        textEn: 'Pressure-sensitive floor sensor installed beneath the mat directly in front of the rack',
        textTh: 'เซ็นเซอร์ตรวจจับแรงกด (Pressure Sensor) ที่ติดตั้งซ่อนไว้ใต้แผ่นปูพื้นหน้าตู้ Rack โดยตรง'
      }
    ],
    correctChoiceIds: ['c1', 'c5'],
    explanationTh:
      'Access Control Vestibule (c1) บังคับให้ประตูแรกปิดสนิทก่อนประตูที่สองเปิด จึงป้องกันการเดินตามหลัง (Tailgating) ได้โดยตรง ส่วน Pressure Sensor หน้าตู้ Rack (c5) ตรวจจับแรงกดเฉพาะจุด จึงไม่ได้รับผลกระทบจากกระแสลม HVAC เหมือน Ultrasonic และไม่ทะลุผนังยิปซัมไปจับคนเดินนอกห้องเหมือน Microwave',
    choiceRationales: {
      c1: 'ถูกต้อง: Access Control Vestibule ป้องกัน Tailgating/Piggybacking ที่ประตูทางเข้าได้อย่างมีประสิทธิภาพ',
      c2: 'ไม่ถูกต้อง: คลื่น Microwave สามารถทะลุผ่านผนังยิปซัมบาง ๆ ออกไปตรวจจับคนเดินในทางเดินสาธารณะทำให้เกิด False Positive สูง โดย Microwave เหมาะกับโกดังหรือพื้นที่กว้างที่มีผนังหนาแยกขาดจากพื้นที่สาธารณะ',
      c3: 'ไม่ถูกต้อง: Ultrasonic Sensor ไวต่อกระแสลมแรงจากเครื่องปรับอากาศซึ่งจะทำให้เกิดสัญญาณเตือนผิดพลาดบ่อยครั้ง โดย Ultrasonic เหมาะกับห้องปิดทึบที่ไม่มีกระแสลมรบกวน',
      c4: 'ไม่ถูกต้อง: Bollards ใช้สกัดกั้นยานพาหนะพุ่งชนภายนอกอาคาร ไม่ได้ออกแบบมาเพื่อป้องกัน Tailgating ของคนเดินเข้าประตู โดย Bollards เหมาะกับแนวถนนหรือหน้าล็อบบี้อาคาร',
      c5: 'ถูกต้อง: Pressure Sensor ตรวจจับน้ำหนักเหยียบเฉพาะพื้นที่หน้าตู้ Rack จึงไม่ถูกรบกวนจากกระแสลมหรือบุคคลภายนอกผนัง'
    },
    misconceptionTh:
      'มักสับสนคุณสมบัติของเซ็นเซอร์ทางกายภาพ เช่น ลืมว่า Microwave ทะลุผนังบางได้ หรือ Ultrasonic ถูกรบกวนด้วยกระแสลมแรงได้ง่าย',
    relatedLessonIds: ['L1-03'],
    tags: ['physical-security', 'access-control-vestibule', 'sensors']
  },
  {
    id: 'Q1-017',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A SOC team suspects an intruder with compromised contractor access is quietly querying internal repositories for cloud secrets. To trigger an immediate high-fidelity alert the moment unauthorized activity touches fabricated secrets inside production systems—without standing up a decoy server—the team embeds a fake service account and fabricated cloud API key in an internal configuration repository. Which deception technique is the team using?',
    promptTh:
      'ทีม SOC สงสัยว่าผู้บุกรุกที่ใช้สิทธิ์ผู้รับเหมาที่ถูกยึดอาจกำลังแอบค้นหาข้อมูลลับบนคลาวด์ในคลังข้อมูลภายใน ทีมจึงต้องการสร้างสัญญาณเตือนที่มีความแม่นยำสูงทันทีที่กิจกรรมต้องสงสัยแตะต้องข้อมูลลับปลอมภายในระบบผลิตจริงโดยไม่ต้องตั้งเซิร์ฟเวอร์จำลองแยกต่างหาก ด้วยการฝังบัญชีบริการปลอมและคีย์ API ปลอมไว้ในคลังการตั้งค่าภายใน เทคนิคหลอกล่อนี้เรียกว่าอะไร?',
    choices: [
      { id: 'c1', textEn: 'Honeypot', textTh: 'Honeypot' },
      { id: 'c2', textEn: 'Honeynet', textTh: 'Honeynet' },
      { id: 'c3', textEn: 'Honeyfile', textTh: 'Honeyfile' },
      { id: 'c4', textEn: 'Honeytoken', textTh: 'Honeytoken' }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'Honeytoken คือชิ้นส่วนข้อมูลรับรองปลอม เช่น บัญชีผู้ใช้ปลอม API Key ปลอม ลิงก์ปลอม หรือระเบียนฐานข้อมูลปลอม ที่แทรกในระบบจริงเพื่อตรวจจับทันทีที่มีผู้นำไปใช้หรือเรียกค้น',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Honeypot เป็นเครื่องเซิร์ฟเวอร์หรือบริการจำลองทั้งระบบเพื่อดึงดูดผู้โจมตี แต่โจทย์ระบุว่าไม่ตั้งเซิร์ฟเวอร์จำลองแยก โดย Honeypot เหมาะเมื่อต้องการล่อให้ผู้โจมตีเชื่อมต่อเข้ามาเพื่อสังเกตพฤติกรรมบนเครื่องล่อ',
      c2: 'ไม่ถูกต้อง: Honeynet เป็นเครือข่ายจำลองที่ประกอบด้วย Honeypot หลายเครื่องเชื่อมต่อกัน โดย Honeynet เหมาะเมื่อต้องการศึกษาการเคลื่อนที่ด้านข้างข้ามหลายเครื่องของผู้โจมตี',
      c3: 'ไม่ถูกต้อง: Honeyfile เป็นไฟล์เอกสารปลอมทั้งฉบับที่วางล่อใน File Share (เช่น รายชื่อเงินเดือนปลอม) เพื่อตรวจจับการเปิดไฟล์ ไม่ใช่บัญชีและ API Key ปลอม โดย Honeyfile เหมาะกับการเฝ้าระวังการเข้าถึงไฟล์บน File Server',
      c4: 'ถูกต้อง: บัญชีบริการปลอมและ API Key ปลอมที่ฝังไว้เพื่อจับสัญญาณเมื่อถูกนำไปเรียกใช้งานคือ Honeytoken'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนระหว่าง Honeyfile (ไฟล์เอกสารทั้งไฟล์ที่วางล่อ) กับ Honeytoken (ชิ้นส่วนข้อมูลหรือรหัสรับรองปลอม เช่น API Key หรือบัญชีปลอม)',
    relatedLessonIds: ['L1-03'],
    tags: ['deception', 'honeytoken', 'detection']
  },
  {
    id: 'Q1-018',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    type: 'msq',
    selectCount: 3,
    difficulty: 'exam-ready',
    promptEn:
      'A global enterprise is replacing its legacy perimeter VPN, which previously granted any connected laptop access across the entire corporate subnet. To implement the Zero Trust Control Plane principles of adaptive identity, threat scope reduction, and policy-driven access control, which THREE architectural changes should the team prioritize? (Choose three.)',
    promptTh:
      'องค์กรข้ามชาติแห่งหนึ่งกำลังเปลี่ยนจาก VPN ขอบเครือข่ายแบบเดิมซึ่งเคยอนุญาตให้แล็ปท็อปที่เชื่อมต่อเข้าถึงได้ทั้ง Subnet องค์กร มาสู่สถาปัตยกรรม Zero Trust โดยมุ่งเน้นหลักการบน Control Plane ด้าน Adaptive Identity, Threat Scope Reduction และ Policy-driven Access Control ทีมงานควรให้ความสำคัญกับการเปลี่ยนแปลงเชิงสถาปัตยกรรม 3 ข้อใด? (เลือก 3 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Continuously recalculating session trust scores and prompting for step-up MFA when user location or behavior shifts abruptly',
        textTh: 'คำนวณคะแนนความน่าเชื่อถือของเซสชันอย่างต่อเนื่องและร้องขอ MFA เพิ่มเติมเมื่อตำแหน่งหรือพฤติกรรมผู้ใช้เปลี่ยนไปอย่างฉับพลัน'
      },
      {
        id: 'c2',
        textEn: 'Expanding the corporate VPN subnet mask to flatten internal routing between development and finance servers',
        textTh: 'ขยายขนาด Subnet Mask ของ VPN องค์กรให้การเชื่อมต่อระหว่างเซิร์ฟเวอร์ฝ่ายพัฒนาและฝ่ายการเงินวิ่งหากันได้โดยตรง'
      },
      {
        id: 'c3',
        textEn: 'Enforcing microsegmentation around sensitive workloads to restrict lateral movement if an endpoint is compromised',
        textTh: 'บังคับใช้ Microsegmentation รอบระบบงานสำคัญเพื่อจำกัดการเคลื่อนที่ด้านข้างหากเครื่องปลายทางถูกยึดครอง'
      },
      {
        id: 'c4',
        textEn: 'Adding senior executive home IP addresses to a permanent allow list regardless of laptop patch status',
        textTh: 'เพิ่ม IP Address บ้านของผู้บริหารระดับสูงไว้ใน Allow List แบบถาวรโดยไม่คำนึงถึงสถานะการอัปเดตแพตช์ของแล็ปท็อป'
      },
      {
        id: 'c5',
        textEn: 'Evaluating per-session authorization rules tied to user attributes, endpoint compliance, and application sensitivity',
        textTh: 'ประเมินกฎการอนุญาตสิทธิ์รายเซสชันที่ผูกกับคุณลักษณะผู้ใช้ สถานะความสอดคล้องของอุปกรณ์ และความอ่อนไหวของแอปพลิเคชัน'
      }
    ],
    correctChoiceIds: ['c1', 'c3', 'c5'],
    explanationTh:
      'ตัวเลือกทั้ง 3 ข้อตอบโจทย์หลักการ Zero Trust Control Plane โดยตรง: การประเมินความเสี่ยงต่อเนื่องและขอ Step-up MFA สะท้อน Adaptive Identity (c1), Microsegmentation ลดพื้นผิวความเสียหายตามแนวคิด Threat Scope Reduction (c3) และการกำหนดสิทธิ์รายเซสชันตามบริบทสะท้อน Policy-driven Access Control (c5)',
    choiceRationales: {
      c1: 'ถูกต้อง: สะท้อนหลักการ Adaptive Identity ที่ปรับระดับการตรวจสอบตัวตนตามบริบทความเสี่ยงแบบพลวัต',
      c2: 'ไม่ถูกต้อง: การขยาย Subnet และทำเครือข่ายแบบแบน (Flat Network) เป็นการขยาย Implicit Trust Zone ซึ่งตรงข้ามกับ Zero Trust และเพิ่มโอกาส Lateral Movement โดยแนวทางแบนราบไม่เหมาะกับงานที่ต้องการแยกโซนความมั่นคง',
      c3: 'ถูกต้อง: Microsegmentation ลดขอบเขตความเสียหาย (Blast Radius) ตามแนวคิด Threat Scope Reduction',
      c4: 'ไม่ถูกต้อง: การไว้ใจตาม IP คงที่โดยข้ามการตรวจสุขภาพอุปกรณ์ขัดต่อหลัก Never trust, always verify ของ Zero Trust โดย Static IP Allow-listing อาจใช้ได้เฉพาะการเชื่อมต่อระบบปิดแบบ Legacy ชั่วคราวควบคู่การควบคุมอื่น',
      c5: 'ถูกต้อง: การประเมินสิทธิ์รายเซสชันด้วยคุณลักษณะหลายด้านสะท้อน Policy-driven Access Control'
    },
    misconceptionTh:
      'ผู้เรียนบางคนเข้าใจว่าการใช้ VPN ร่วมกับ IP Allow List ก็เพียงพอต่อ Zero Trust แล้ว ทั้งที่ Zero Trust ต้องลดขอบเขตการเชื่อใจด้วย Microsegmentation และตรวจบริบทต่อเนื่องรายเซสชัน',
    relatedLessonIds: ['L1-03', 'L1-02'],
    tags: ['zero-trust', 'microsegmentation', 'adaptive-identity', 'policy-driven']
  },

  // =========================================================================
  // Objective 1.3: Explain the importance of change management processes and the impact to security
  // =========================================================================
  {
    id: 'Q1-019',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A systems engineer submits a change request to upgrade the database kernel and modify TLS cipher suites on an ERP cluster. During the Change Advisory Board (CAB) review, board members withhold approval until the engineer documents a tested procedure to restore the previous working state if transaction failures occur. Which change management element is the CAB requiring?',
    promptTh:
      'วิศวกรระบบยื่นคำขอเปลี่ยนแปลงเพื่ออัปเกรดเคอร์เนลฐานข้อมูลและปรับชุดรหัส TLS บนคลัสเตอร์ ERP ระหว่างการพิจารณาของคณะกรรมการ CAB คณะกรรมการได้ชะลอการอนุมัติไว้จนกว่าวิศวกรจะจัดทำขั้นตอนที่ผ่านการทดสอบแล้วสำหรับการคืนค่าระบบกลับสู่สภาพที่ทำงานได้ก่อนหน้าหากเกิดข้อผิดพลาดในการทำธุรกรรม คณะกรรมการ CAB กำลังร้องขอองค์ประกอบใดของ Change Management?',
    choices: [
      { id: 'c1', textEn: 'Backout plan', textTh: 'แผนย้อนกลับ (Backout plan)' },
      { id: 'c2', textEn: 'Maintenance window', textTh: 'ช่วงเวลาบำรุงรักษา (Maintenance window)' },
      { id: 'c3', textEn: 'Standard operating procedure (SOP)', textTh: 'ขั้นตอนปฏิบัติงานมาตรฐาน (SOP)' },
      { id: 'c4', textEn: 'Ownership register', textTh: 'ทะเบียนผู้ถือครองระบบ (Ownership register)' }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'Backout Plan (หรือ Rollback Plan) คือขั้นตอนการกู้คืนหรือย้อนกลับระบบให้กลับสู่สภาพก่อนการเปลี่ยนแปลงเมื่อการปรับปรุงล้มเหลวหรือส่งผลเสียต่อธุรกิจ โดยต้องทดสอบได้จริงเพื่อไม่ให้เกิด Downtime ยาวนาน',
    choiceRationales: {
      c1: 'ถูกต้อง: Backout Plan กำหนดขั้นตอนอย่างเป็นรูปธรรมในการคืนสู่สถานะเดิมเมื่อการเปลี่ยนแปลงเกิดปัญหา',
      c2: 'ไม่ถูกต้อง: Maintenance Window คือกรอบเวลาที่กำหนดให้ลงมือปรับปรุงระบบเพื่อลดผลกระทบต่อผู้ใช้ ไม่ใช่ขั้นตอนการคืนค่าระบบเมื่อเกิดความผิดพลาด โดย Maintenance Window เหมาะสมเมื่อต้องการระบุช่วงเวลาดำเนินการ เช่น วันอาทิตย์เวลา 02.00 น.',
      c3: 'ไม่ถูกต้อง: SOP คือคู่มือการปฏิบัติงานมาตรฐานสำหรับงานปกติที่ทำซ้ำได้สม่ำเสมอ ไม่ได้เจาะจงถึงแผนกู้คืนเฉพาะกรณีที่การอัปเกรดล้มเหลว โดย SOP เหมาะสมเมื่อต้องการสร้างคู่มือปฏิบัติตามขั้นตอนมาตรฐานให้ทีมงานทำซ้ำได้ถูกต้อง',
      c4: 'ไม่ถูกต้อง: Ownership ระบุผู้รับผิดชอบระบบและคำขอเปลี่ยนแปลง ไม่ได้อธิบายวิธีคืนค่าระบบทางเทคนิค โดย Ownership เหมาะสมเมื่อต้องการกำหนดผู้มีอำนาจตัดสินใจและรับผิดชอบหลังการปรับปรุง'
    },
    misconceptionTh:
      'ผู้เรียนบางคนสับสนระหว่าง Backout Plan (ขั้นตอนย้อนกลับเมื่อเปลี่ยนระบบไม่สำเร็จ) กับ SOP (ขั้นตอนการปฏิบัติงานมาตรฐานโดยรวม)',
    relatedLessonIds: ['L1-04'],
    tags: ['change-management', 'backout-plan', 'cab']
  },
  {
    id: 'Q1-020',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'An organization enforces strict application allow-listing across all production point-of-sale (POS) servers. After a software vendor releases a minor security patch, an administrator replaces the POS executable during a maintenance window, and the application immediately fails to start with an execution-blocked error. Which change management oversight MOST likely caused this outage?',
    promptTh:
      'องค์กรแห่งหนึ่งบังคับใช้ Application Allow-listing อย่างเข้มงวดบนเซิร์ฟเวอร์จุดขาย (POS) ในระบบผลิตทั้งหมด เมื่อผู้ผลิตซอฟต์แวร์ออกแพตช์ความปลอดภัยรุ่นย่อย ผู้ดูแลระบบจึงนำไฟล์โปรแกรม POS เวอร์ชันใหม่ไปแทนที่ในช่วง Maintenance Window ปรากฏว่าแอปพลิเคชันไม่สามารถเปิดทำงานได้ทันทีและขึ้นข้อความบล็อกการรันโปรแกรม ข้อบกพร่องใดในกระบวนการ Change Management ที่น่าจะเป็นสาเหตุของระบบล่มครั้งนี้มากที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Neglecting to reassign system ownership to the software vendor before deployment',
        textTh: 'ละเลยการโอนย้ายสิทธิ์ความเป็นเจ้าของระบบ (Ownership) ไปยังผู้ผลิตซอฟต์แวร์ก่อนติดตั้ง'
      },
      {
        id: 'c2',
        textEn: 'Failing to execute the update during a restricted change freeze period',
        textTh: 'ไม่ได้ดำเนินการอัปเดตในช่วงเวลาห้ามเปลี่ยนแปลง (Restricted change freeze period)'
      },
      {
        id: 'c3',
        textEn: 'Failing to test and update the application allow list for the modified executable prior to rollout',
        textTh: 'ไม่ได้ทดสอบและอัปเดต Application Allow List ให้รองรับไฟล์โปรแกรมฉบับแก้ไขก่อนนำขึ้นระบบจริง'
      },
      {
        id: 'c4',
        textEn: 'Omitting post-deployment updates to the physical data center rack diagrams',
        textTh: 'ไม่ได้อัปเดตแผนผังตู้ Rack ทางกายภาพของศูนย์ข้อมูลภายหลังการติดตั้ง'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'การอัปเดตแพตช์ทำให้ลายเซ็นหรือค่า Hash ของไฟล์ Executable เปลี่ยนไป ระบบ Application Allow-listing จึงมองไฟล์ใหม่เป็นโปรแกรมที่ไม่ได้รับอนุญาตและบล็อกทันที การละเลยตรวจสอบผลกระทบทางเทคนิคต่อ Allow Lists / Deny Lists และไม่ทดสอบใน Staging จึงเป็นต้นเหตุโดยตรง',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Ownership ภายในองค์กรยังคงเป็นของเจ้าของระบบธุรกิจ ไม่ได้โอนให้ผู้ผลิตภายนอก และการเปลี่ยน Ownership ไม่เกี่ยวกับการถูกบล็อกโดย Allow List โดย Ownership มีบทบาทสำคัญเมื่อต้องกำหนดผู้รับผิดชอบอนุมัติคำขอเปลี่ยนแปลง',
      c2: 'ไม่ถูกต้อง: ช่วง Change Freeze (Restricted Activities) เป็นช่วงเวลาที่ห้ามเปลี่ยนแปลงระบบ ไม่ใช่ช่วงเวลาที่ควรนำไปติดตั้งแพตช์ปกติ โดย Restricted Activities มีไว้ปกป้องช่วงเวลาสำคัญทางธุรกิจเช่นการปิดงบการเงิน',
      c3: 'ถูกต้อง: ไฟล์ที่เปลี่ยนใหม่มีค่า Hash ต่างจากเดิม หากไม่อัปเดต Allow List ล่วงหน้าและทดสอบใน Staging ย่อมถูกบล็อกการทำงานทันทีในระบบผลิต',
      c4: 'ไม่ถูกต้อง: การอัปเดต Rack Diagram เป็นงานเอกสารด้านกายภาพภายหลังการเปลี่ยนแปลงอุปกรณ์ฮาร์ดแวร์ ไม่ใช่สาเหตุที่ซอฟต์แวร์ POS ถูกบล็อก โดยการอัปเดตแผนผังเหมาะสมเมื่อมีการย้ายหรือเพิ่มอุปกรณ์เครือข่ายหรือเซิร์ฟเวอร์'
    },
    misconceptionTh:
      'ผู้ดูแลระบบมักมองว่าการติดตั้งแพตช์จากผู้ผลิตที่เชื่อถือได้ไม่กระทบสิทธิ์การทำงานของระบบ โดยลืมประเมิน Technical Implications ด้าน Allow Lists / Deny Lists',
    relatedLessonIds: ['L1-04'],
    tags: ['change-management', 'allow-list', 'patching']
  },
  {
    id: 'Q1-021',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'A security engineering team applies a baseline hardening change that disables TLS 1.0 and TLS 1.1 across internal API gateways. Immediately afterward, an automated warehouse fulfillment workflow halts because an unsupported barcode-controller appliance can only negotiate TLS 1.1. Which change management step would have MOST effectively prevented this unexpected disruption?',
    promptTh:
      'ทีมวิศวกรรมความปลอดภัยดำเนินการปรับค่ามาตรฐานความปลอดภัยโดยปิดใช้งานโปรโตคอล TLS 1.0 และ TLS 1.1 บน API Gateway ภายในทั้งหมด ทันทีหลังจากนั้น ระบบงานอัตโนมัติในคลังสินค้าหยุดชะงักลงเนื่องจากอุปกรณ์ควบคุมเครื่องสแกนบาร์โค้ดรุ่นเก่าที่ไม่รองรับการอัปเดตแล้วสามารถเชื่อมต่อได้เฉพาะ TLS 1.1 เท่านั้น ขั้นตอนใดใน Change Management จะช่วยป้องกันเหตุขัดข้องที่ไม่คาดคิดนี้ได้อย่างมีประสิทธิภาพที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Scheduling an immediate application restart on the corporate email relay',
        textTh: 'กำหนดเวลาทำ Application Restart ทันทีบนระบบส่งต่ออีเมลขององค์กร'
      },
      {
        id: 'c2',
        textEn: 'Invoking an emergency CAB waiver to bypass staging validation entirely',
        textTh: 'ใช้สิทธิ์ยกเว้นแบบ Emergency CAB เพื่อข้ามการทดสอบในสภาพแวดล้อม Staging ทั้งหมด'
      },
      {
        id: 'c3',
        textEn: 'Drafting updated security policy documents after the gateway change completes',
        textTh: 'จัดทำเอกสารนโยบายความปลอดภัยฉบับปรับปรุงภายหลังจากเปลี่ยนแปลงค่าบน Gateway เสร็จสิ้น'
      },
      {
        id: 'c4',
        textEn: 'Conducting a pre-change impact analysis and dependency mapping that identifies legacy applications',
        textTh: 'ดำเนินการวิเคราะห์ผลกระทบ (Impact Analysis) และจัดทำแผนผังความเชื่อมโยง (Dependencies) ก่อนเปลี่ยนแปลงเพื่อระบุแอปพลิเคชันและอุปกรณ์รุ่นเก่า'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'การปิดโปรโตคอลเก่าเป็นเรื่องดีด้านความปลอดภัย แต่ต้องทำ Impact Analysis และตรวจสอบ Dependencies รวมถึง Legacy Applications ล่วงหน้าเพื่อให้รู้ว่ามีอุปกรณ์เก่าใดพึ่งพา TLS 1.1 อยู่ จะได้จัดเตรียม Compensating Control หรือปรับแผนก่อนกระทบสายงานผลิต',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การรีสตาร์ทระบบอีเมลไม่เกี่ยวข้องกับอุปกรณ์บาร์โค้ดหรือ API Gateway โดย Application Restart จะเหมาะสมเมื่อต้องรีเฟรชการทำงานของแอปพลิเคชันที่เพิ่งเปลี่ยนคอนฟิกูเรชัน',
      c2: 'ไม่ถูกต้อง: การข้ามการทดสอบใน Staging ยิ่งเพิ่มความเสี่ยงให้ระบบล่มใน Production โดย Emergency CAB เหมาะสำหรับช่องโหว่วิกฤตที่กำลังถูกโจมตีจริงเท่านั้น ไม่ใช่การเปลี่ยน Hardening ทั่วไป',
      c3: 'ไม่ถูกต้อง: การอัปเดตเอกสารหลังเปลี่ยนแปลงเสร็จแล้วเป็นขั้นตอนปิดงาน ไม่ได้ช่วยตรวจพบปัญหาการเชื่อมต่อของอุปกรณ์เก่าก่อนลงมือ โดยการอัปเดตเอกสารเหมาะสำหรับคงความถูกต้องของคู่มือและสถาปัตยกรรมหลังปิดงาน',
      c4: 'ถูกต้อง: Impact Analysis และการสำรวจ Dependencies กับ Legacy Applications ช่วยเปิดเผยผลกระทบข้ามระบบก่อนนำการเปลี่ยนแปลงขึ้นใช้งานจริง'
    },
    misconceptionTh:
      'ผู้เรียนมักเห็นว่า "การปิด TLS 1.0/1.1" เป็นแนวปฏิบัติที่ดีจึงอนุมัติทันที โดยละเลยการตรวจสอบ Dependencies ของ Legacy Applications ในขั้นตอน Impact Analysis',
    relatedLessonIds: ['L1-04', 'L1-01'],
    tags: ['change-management', 'impact-analysis', 'dependencies', 'legacy-applications']
  },
  {
    id: 'Q1-022',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'During an approved maintenance window, an administrator replaces an expiring TLS certificate file and updates the cipher suite directive in a Linux reverse proxy configuration file. Syntax validation passes, yet external verification tests show the proxy still serves the old certificate. No upstream caching proxy exists. What technical step should the administrator take NEXT?',
    promptTh:
      'ในช่วง Maintenance Window ที่ได้รับอนุมัติ ผู้ดูแลระบบได้แทนที่ไฟล์ใบรับรอง TLS ที่ใกล้หมดอายุและอัปเดตการตั้งค่า Cipher Suite ในไฟล์คอนฟิกูเรชันของ Reverse Proxy บน Linux เรียบร้อยแล้ว การตรวจสอบไวยากรณ์ผ่านทั้งหมด แต่เมื่อทดสอบจากภายนอกพบว่าพร็อกซียังคงส่งใบรับรองใบเดิมอยู่โดยไม่มี Caching Proxy ขั้นกลาง ผู้ดูแลระบบควรดำเนินการทางเทคนิคขั้นตอนใดถัดไป?',
    choices: [
      {
        id: 'c1',
        textEn: 'Submit a new change request to transfer reverse proxy ownership to the network team',
        textTh: 'ยื่นคำขอเปลี่ยนแปลงใหม่เพื่อโอนสิทธิ์เจ้าของระบบ Reverse Proxy ไปยังทีมเครือข่าย'
      },
      {
        id: 'c2',
        textEn: 'Perform a service restart or graceful reload on the reverse proxy daemon',
        textTh: 'ทำ Service Restart หรือสั่งโหลดคอนฟิกูเรชันใหม่ให้กับ Daemon ของ Reverse Proxy'
      },
      {
        id: 'c3',
        textEn: 'Revert the configuration repository immediately via version control',
        textTh: 'ย้อนกลับการแก้ไขในคลัง Version Control ทันที'
      },
      {
        id: 'c4',
        textEn: 'Update the enterprise acceptable use policy before retrying external tests',
        textTh: 'อัปเดตนโยบายการใช้งานที่เหมาะสมขององค์กรก่อนทดสอบจากภายนอกอีกครั้ง'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'บริการเบื้องหลัง (Daemon/Service) ส่วนใหญ่จะโหลดใบรับรองและค่าคอนฟิกูเรชันเข้าสู่หน่วยความจำเฉพาะตอนเริ่มต้นหรือเมื่อได้รับคำสั่ง Reload/Service Restart ดังนั้นการแก้ไฟล์บนดิสก์อย่างเดียวจึงยังไม่แสดงผลจนกว่าจะทำ Service Restart',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: ปัญหาไม่ได้เกิดจากสิทธิ์ผู้รับผิดชอบระบบ แต่เกิดจากโปรเซสที่ทำงานอยู่ยังถือค่าเดิมในหน่วยความจำ โดยการปรับ Ownership เหมาะสมเมื่อมีการเปลี่ยนทีมดูแลระบบอย่างเป็นทางการ',
      c2: 'ถูกต้อง: การทำ Service Restart (หรือ Reload) ช่วยให้บริการอ่านไฟล์ใบรับรองและคอนฟิกูเรชันใหม่เข้าสู่หน่วยความจำโดยอาจไม่ต้องรีบูตทั้งเซิร์ฟเวอร์',
      c3: 'ไม่ถูกต้อง: การตั้งค่าผ่านการตรวจไวยากรณ์และยังอยู่ในช่วง Maintenance Window จึงยังไม่จำเป็นต้องสั่งย้อนกลับ Backout Plan ทันที โดยการ Revert ผ่าน Version Control เหมาะสมเมื่อบริการทำงานผิดพลาดหลังรีสตาร์ทและแก้ไขไม่ทันเวลาที่กำหนด',
      c4: 'ไม่ถูกต้อง: การแก้นโยบาย AUP ไม่ได้ทำให้ Reverse Proxy โหลดใบรับรองใหม่ โดยการปรับปรุงเอกสารนโยบายเหมาะสำหรับการอัปเดตข้อกำหนดปฏิบัติงานหลังเปลี่ยนแปลงเสร็จสิ้น'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนเข้าใจผิดว่าการบันทึกไฟล์คอนฟิกูเรชันใหม่ลงดิสก์จะทำให้ทุกบริการใช้งานค่าใหม่ทันที โดยลืมความจำเป็นของ Service Restart หรือ Application Restart',
    relatedLessonIds: ['L1-04'],
    tags: ['change-management', 'service-restart', 'tls']
  },
  {
    id: 'Q1-023',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.3'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'A cloud security team plans to refactor perimeter firewall rules to route external partner APIs through a newly deployed inspection proxy. Because the change carries moderate risk of temporary downtime, which TWO business process items MUST be finalized before the Change Advisory Board grants final deployment approval? (Choose two.)',
    promptTh:
      'ทีมความปลอดภัยคลาวด์วางแผนปรับปรุงโครงสร้างกฎ Firewall ขอบเครือข่ายเพื่อส่งทราฟฟิก API ของคู่ค้าภายนอกผ่านพร็อกซีตรวจสอบตัวใหม่ เนื่องจากความเปลี่ยนแปลงนี้มีความเสี่ยงต่อการเกิด Downtime ชั่วคราว องค์ประกอบกระบวนการทางธุรกิจ 2 ข้อใดต้องจัดเตรียมให้สมบูรณ์ก่อนที่คณะกรรมการ CAB จะอนุมัติให้นำขึ้นใช้งานจริง? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Updating post-implementation network topology diagrams before deployment',
        textTh: 'การอัปเดตแผนผังโทโพโลยีเครือข่ายหลังการเปลี่ยนแปลงให้เสร็จสิ้นตั้งแต่ก่อนเปิดใช้งานจริง'
      },
      {
        id: 'c2',
        textEn: 'Requesting an emergency CAB waiver to bypass staging validation entirely',
        textTh: 'การขออนุมัติยกเว้นแบบเร่งด่วน (Emergency Waiver) เพื่อข้ามขั้นตอนการทดสอบบน Staging ทั้งหมด'
      },
      {
        id: 'c3',
        textEn: 'Documented test results from a staging environment verifying partner traffic flow',
        textTh: 'เอกสารผลทดสอบ (Test results) จากสภาพแวดล้อม Staging ที่ยืนยันการไหลของทราฟฟิกคู่ค้า'
      },
      {
        id: 'c4',
        textEn: 'Notification to affected stakeholders and a scheduled off-peak maintenance window',
        textTh: 'การแจ้งผู้มีส่วนได้ส่วนเสีย (Stakeholders) และการกำหนดช่วง Maintenance Window นอกเวลาทำการ'
      },
      {
        id: 'c5',
        textEn: 'Rotating all partner database encryption keys regardless of firewall dependency',
        textTh: 'การหมุนเวียนกุญแจเข้ารหัสฐานข้อมูลของคู่ค้าทั้งหมดแม้ไม่เกี่ยวข้องกับกฎ Firewall'
      }
    ],
    correctChoiceIds: ['c3', 'c4'],
    explanationTh:
      'ก่อน CAB อนุมัติคำขอเปลี่ยนแปลงที่มีความเสี่ยงต่อ Downtime ต้องมีหลักฐาน Test Results ยืนยันว่ากฎใหม่ทำงานได้จริงไม่เกิดความผิดพลาด (c3) พร้อมทั้งสื่อสารกับ Stakeholders และกำหนด Maintenance Window ที่กระทบน้อยที่สุด (c4)',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การอัปเดตแผนผังเครือข่ายหลังการเปลี่ยนแปลง (Updating Diagrams) เป็นขั้นตอนเอกสารหลังปิดงาน ไม่ใช่หลักฐานขออนุมัติล่วงหน้า โดยเหมาะทำหลังปรับใช้กฎเสร็จสิ้นแล้วเพื่อยืนยันสภาพจริง',
      c2: 'ไม่ถูกต้อง: การขอข้ามการทดสอบใน Staging เหมาะกับเหตุฉุกเฉินวิกฤตจริง (Emergency Change) เท่านั้น ไม่ใช่งานปรับปรุงโครงสร้างตามแผนที่วางไว้ล่วงหน้า โดย Normal Change ต้องมี Test Results ประกอบเสมอ',
      c3: 'ถูกต้อง: Test Results เป็นหลักฐานสำคัญในกระบวนการทางธุรกิจของ Change Management เพื่อลดความเสี่ยงเกิดข้อผิดพลาดในระบบผลิต',
      c4: 'ถูกต้อง: การแจ้ง Stakeholders และการเลือก Maintenance Window ช่วยบริหารจัดการผลกระทบด้าน Downtime ต่อคู่ค้าและผู้ใช้งาน',
      c5: 'ไม่ถูกต้อง: การหมุนเวียนกุญแจฐานข้อมูลเป็นกิจกรรม Key Management ที่ไม่เกี่ยวข้องกับการเปลี่ยนแปลงกฎพร็อกซีและจะยิ่งเพิ่มความเสี่ยง Downtime โดยเหมาะดำเนินการตามนโยบาย KMS ที่กำหนดแยกต่างหาก'
    },
    misconceptionTh:
      'มักมองข้ามความสำคัญของการแจ้ง Stakeholders และแนบ Test Results โดยคิดเพียงว่าเขียนกฎใน Maintenance Window อย่างเดียวก็เพียงพอให้ CAB อนุมัติแล้ว',
    relatedLessonIds: ['L1-04'],
    tags: ['change-management', 'test-results', 'maintenance-window', 'stakeholders']
  },
  {
    id: 'Q1-024',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'On the last business day of the fiscal quarter—designated by finance as a mandatory blackout period for payroll and ledger closing—a junior analyst notices a medium-severity TLS cipher preference recommendation on the billing gateway and prepares to apply the configuration change and reboot the appliance immediately. Which change management consideration should prevent this unscheduled modification?',
    promptTh:
      'ในวันทำการสุดท้ายของไตรมาสทางบัญชีซึ่งฝ่ายการเงินกำหนดเป็นช่วงห้ามเปลี่ยนแปลงระบบเพื่อปิดงบบัญชีและจ่ายเงินเดือน นักวิเคราะห์ระดับปฏิบัติการตรวจพบคำแนะนำระดับความรุนแรงปานกลางเกี่ยวกับการปรับลำดับ TLS Cipher บนเกตเวย์ชำระเงิน จึงเตรียมนำค่าคอนฟิกูเรชันใหม่ไปใช้และรีบูตอุปกรณ์ทันที ข้อพิจารณาใดใน Change Management ที่ควรยับยั้งการแก้ไขโดยพลการครั้งนี้?',
    choices: [
      {
        id: 'c1',
        textEn: 'Insufficient disk capacity in the version control archive',
        textTh: 'พื้นที่จัดเก็บไม่เพียงพอในคลังเก็บประวัติ Version Control'
      },
      {
        id: 'c2',
        textEn: 'Absence of physical access badges for the junior analyst',
        textTh: 'นักวิเคราะห์ไม่มีบัตรผ่านเข้าห้องอุปกรณ์ทางกายภาพ'
      },
      {
        id: 'c3',
        textEn: 'Lack of updated application allow-list rules on developer laptops',
        textTh: 'การขาดกฎ Application Allow List ที่อัปเดตบนแล็ปท็อปของนักพัฒนา'
      },
      {
        id: 'c4',
        textEn: 'Restricted activities policies enforcing a change freeze during critical business periods',
        textTh: 'ข้อกำหนด Restricted Activities ที่บังคับใช้ Change Freeze ในช่วงเวลาธุรกิจวิกฤต'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'ช่วงเวลาสำคัญทางธุรกิจเช่นการปิดงบไตรมาสหรือช่วงเทศกาลขายใหญ่ องค์กรมักประกาศ Restricted Activities (Change Freeze) ห้ามปรับปรุงระบบที่ไม่ใช่เหตุฉุกเฉินวิกฤต เพื่อคุ้มครอง Availability จากการ Reboot หรือข้อผิดพลาดที่ไม่จำเป็นสำหรับช่องโหว่ระดับปานกลาง',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: ความจุของ Version Control ไม่ใช่กลไกห้ามการเปลี่ยนแปลงระบบในช่วงปิดงบ โดย Version Control มีหน้าที่ติดตามประวัติการแก้ไขและรองรับการย้อนกลับ',
      c2: 'ไม่ถูกต้อง: การปรับค่าเกตเวย์และการรีบูตทำผ่านช่องทางบริหารจัดการระยะไกลได้โดยไม่ต้องใช้บัตรเข้าห้องเซิร์ฟเวอร์ โดย Access Badge เหมาะสำหรับควบคุมการเข้าถึงพื้นที่กายภาพของศูนย์ข้อมูล',
      c3: 'ไม่ถูกต้อง: Allow List บนเครื่องนักพัฒนาไม่เกี่ยวข้องกับการตัดสินใจเวลาที่เหมาะสมในการรีบูตเกตเวย์ระบบผลิต โดย Allow List เหมาะสำหรับควบคุมการรันไฟล์บนเครื่องปลายทางหรือเซิร์ฟเวอร์',
      c4: 'ถูกต้อง: Restricted Activities (Change Freeze) ป้องกันไม่ให้ความเปลี่ยนแปลงความเร่งด่วนระดับกลางมาสร้าง Downtime ในช่วงเวลาธุรกิจวิกฤต'
    },
    misconceptionTh:
      'ผู้เรียนอาจคิดว่าเป็นเรื่องความปลอดภัยจึงปรับปรุงได้ทันทีเสมอ โดยไม่คำนึงถึงข้อจำกัด Restricted Activities และผลกระทบต่อ Availability ทางธุรกิจ',
    relatedLessonIds: ['L1-04'],
    tags: ['change-management', 'restricted-activities', 'downtime']
  },
  {
    id: 'Q1-025',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'An infrastructure team completes the migration of an on-premises customer portal into a segmented cloud VPC behind a new WAF tier. Functional tests pass and production traffic flows normally. Before closing the change ticket, which post-change documentation task is MOST important so future incident responders and auditors have accurate visibility?',
    promptTh:
      'ทีมโครงสร้างพื้นฐานดำเนินการย้ายพอร์ทัลลูกค้าจากระบบเดิมในองค์กรขึ้นสู่ VPC บนคลาวด์ที่มีการแบ่งโซนและติดตั้ง WAF ชั้นใหม่เรียบร้อยแล้ว การทดสอบการทำงานผ่านทั้งหมดและทราฟฟิกระบบผลิตไหลได้ตามปกติ ก่อนปิดใบงานเปลี่ยนแปลง งานด้านเอกสารหลังการเปลี่ยนแปลงข้อใดสำคัญที่สุดเพื่อให้ทีมตอบสนองเหตุการณ์และผู้ตรวจสอบในอนาคตมองเห็นภาพระบบได้ถูกต้อง?',
    choices: [
      {
        id: 'c1',
        textEn: 'Scheduling a post-change impact analysis review only if a major outage occurs',
        textTh: 'นัดหมายทบทวน Impact Analysis ย้อนหลังเฉพาะกรณีที่เกิดเหตุระบบล่มครั้งใหญ่เท่านั้น'
      },
      {
        id: 'c2',
        textEn: 'Updating network architecture diagrams and standard operating procedures (SOPs)',
        textTh: 'อัปเดตแผนผังสถาปัตยกรรมเครือข่าย (Diagrams) และขั้นตอนปฏิบัติงานมาตรฐาน (SOPs)'
      },
      {
        id: 'c3',
        textEn: 'Submitting a retroactive emergency change waiver to reclassify the completed migration',
        textTh: 'ยื่นคำขอยกเว้นแบบ Emergency Change ย้อนหลังเพื่อเปลี่ยนประเภทงานย้ายระบบที่เสร็จแล้ว'
      },
      {
        id: 'c4',
        textEn: 'Notifying stakeholders that the window closed without revising architectural artifacts',
        textTh: 'แจ้ง Stakeholders ว่าปิดหน้าต่างบำรุงรักษาแล้วโดยคงเอกสารสถาปัตยกรรมชุดเดิมไว้'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'วงจร Change Management จะสมบูรณ์ได้ก็ต่อเมื่ออัปเดต Documentation ทั้ง Diagrams (เช่น Network Topology, Data Flow) และ Policies/Procedures/SOPs ให้สะท้อนสถาปัตยกรรมจริง เพื่อไม่ให้ทีม IR หลงทิศหรือเกิดความขัดแย้งเมื่อถูกตรวจสอบ',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Impact Analysis ต้องทำตั้งแต่ก่อนอนุมัติคำขอเปลี่ยนแปลงเพื่อประเมิน Dependencies และความเสี่ยงต่อระบบอื่น ไม่ใช่รอทำเฉพาะเมื่อระบบล่ม',
      c2: 'ถูกต้อง: Updating Diagrams และ Updating Policies/Procedures ช่วยให้เอกสารทางเทคนิคและการปฏิบัติงานตรงกับสภาพแวดล้อมจริงอยู่เสมอ',
      c3: 'ไม่ถูกต้อง: งานย้ายระบบตามแผนที่ทดสอบผ่านแล้วเป็น Normal Change ไม่ใช่ Emergency Change โดยกระบวนการ Emergency Change ใช้เฉพาะเหตุวิกฤตหรือแพตช์ช่องโหว่เร่งด่วน',
      c4: 'ไม่ถูกต้อง: แม้ Stakeholders Sign-off จะจำเป็นสำหรับการสื่อสารปิดงาน แต่การปล่อยให้เอกสารสถาปัตยกรรมล้าสมัยจะทำให้ทีม IR และผู้ตรวจสอบใช้งานข้อมูลผิดพลาด'
    },
    misconceptionTh:
      'มักเข้าใจผิดว่างาน Change Management จบลงทันทีที่ระบบใหม่เปิดใช้งานได้ปกติ โดยละเลยขั้น Updating Diagrams และ Updating Policies/Procedures',
    relatedLessonIds: ['L1-04'],
    tags: ['change-management', 'documentation', 'diagrams', 'sop']
  },
  {
    id: 'Q1-026',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'During a security audit, analysts find an unauthorized outbound allow rule in a cloud firewall managed via Infrastructure as Code (IaC). Management needs to determine exactly who added the rule, when it was approved, why it was introduced, and rapidly restore the prior known-good rulebase. Which practice BEST meets all of these needs?',
    promptTh:
      'ระหว่างการตรวจสอบความปลอดภัย นักวิเคราะห์ตรวจพบกฎอนุญาตการเชื่อมต่อขาออกที่ไม่ได้รับอนุญาตใน Firewall บนคลาวด์ซึ่งบริหารจัดการผ่าน Infrastructure as Code (IaC) ฝ่ายบริหารต้องการทราบอย่างแน่ชัดว่าใครเป็นผู้เพิ่มกฎดังกล่าว ได้รับอนุมัติเมื่อใด เหตุใดจึงถูกนำเข้ามา และต้องการคืนค่ากฎชุดเดิมที่ถูกต้องอย่างรวดเร็ว แนวปฏิบัติใดตอบโจทย์ความต้องการทั้งหมดนี้ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Managing firewall configurations in version control with peer-reviewed pull requests and commit history',
        textTh: 'บริหารจัดการไฟล์ตั้งค่า Firewall ในระบบ Version Control ร่วมกับการทบทวน Pull Request โดยเพื่อนร่วมงานและประวัติ Commit'
      },
      {
        id: 'c2',
        textEn: 'Saving periodic manual configuration exports onto an administrator workstation',
        textTh: 'บันทึกไฟล์สำรองคอนฟิกูเรชันด้วยตนเองเป็นระยะไว้บนเครื่องเวิร์กสเตชันของผู้ดูแลระบบ'
      },
      {
        id: 'c3',
        textEn: 'Conducting quarterly verbal reviews of firewall changes during CAB meetings',
        textTh: 'ทบทวนการแก้ไข Firewall ด้วยวาจารายไตรมาสระหว่างการประชุมคณะกรรมการ CAB'
      },
      {
        id: 'c4',
        textEn: 'Requiring administrators to re-sign the Acceptable Use Policy annually',
        textTh: 'กำหนดให้ผู้ดูแลระบบลงนามรับทราบนโยบาย Acceptable Use Policy ซ้ำเป็นประจำทุกปี'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'Version Control (เช่น Git) สำหรับไฟล์โค้ดและคอนฟิกูเรชัน IaC เก็บบันทึกประวัติครบถ้วนว่าใครเปลี่ยนบรรทัดใด เมื่อไร พร้อมคำอธิบายเหตุผลและบันทึกการอนุมัติ Pull Request ทั้งยังสามารถสั่ง Revert กลับไปเวอร์ชันก่อนหน้าได้อย่างแม่นยำและรวดเร็ว',
    choiceRationales: {
      c1: 'ถูกต้อง: Version Control มอบทั้ง Accountability, Traceability และกลไก Revert กลับสู่สถานะปลอดภัยเดิมอย่างรวดเร็ว',
      c2: 'ไม่ถูกต้อง: การเก็บไฟล์บนเครื่องส่วนตัวขาดบันทึกผู้แก้ไขรายบรรทัด เหตุผล การอนุมัติ และเสี่ยงสูญหายหรือถูกแก้ไข โดย Local Export เหมาะเป็นเพียงสำรองฉุกเฉินชั่วคราวก่อนอัปเกรดอุปกรณ์เดี่ยวที่ไม่ได้ใช้ IaC',
      c3: 'ไม่ถูกต้อง: การทบทวนด้วยวาจาไม่มีหลักฐานเชิงเทคนิคระดับบรรทัดและไม่สามารถสั่งคืนค่าคอนฟิกูเรชันได้ทันที โดยการประชุม CAB เหมาะสำหรับพิจารณาอนุมัติความเปลี่ยนแปลงสำคัญก่อนลงมือ',
      c4: 'ไม่ถูกต้อง: การลงนาม AUP เป็น Directive Control ที่ไม่ให้บันทึกประวัติทางเทคนิคของไฟล์ตั้งค่า โดย AUP เหมาะสำหรับสร้างความรับทราบเชิงนโยบายแก่บุคลากร'
    },
    misconceptionTh:
      'ผู้เรียนบางคนมองว่า Version Control ใช้เฉพาะงานพัฒนาซอฟต์แวร์ทั่วไป ทั้งที่ใน SY0-701 เป็นเครื่องมือหลักของ Change Management สำหรับไฟล์คอนฟิกูเรชัน เอกสาร และ IaC',
    relatedLessonIds: ['L1-04'],
    tags: ['change-management', 'version-control', 'iac']
  },
  {
    id: 'Q1-027',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.3'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'exam-ready',
    promptEn:
      'A publicly exposed SSL VPN appliance has an actively exploited zero-day vulnerability. Security leadership invokes the emergency change process to deploy the vendor hotfix immediately rather than waiting for next week\'s standard CAB meeting. Which TWO change management obligations STILL apply during an emergency change? (Choose two.)',
    promptTh:
      'อุปกรณ์ SSL VPN ที่เปิดออกสู่อินเทอร์เน็ตพบช่องโหว่ Zero-day ที่กำลังถูกโจมตีจริงในขณะนี้ ผู้บริหารฝ่ายความปลอดภัยจึงสั่งใช้กระบวนการ Emergency Change เพื่อติดตั้งแพตช์ฉุกเฉินจากผู้ผลิตทันทีแทนการรอประชุมคณะกรรมการ CAB รอบปกติในสัปดาห์หน้า ข้อกำหนดด้าน Change Management ใด 2 ข้อที่ยังคงต้องปฏิบัติแม้จะอยู่ในกระบวนการ Emergency Change? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Obtaining expedited authorization from designated emergency approvers and recording the change details',
        textTh: 'ขออนุมัติเร่งด่วนจากผู้มีอำนาจอนุมัติฉุกเฉินที่กำหนดไว้และบันทึกข้อมูลรายละเอียดการเปลี่ยนแปลง'
      },
      {
        id: 'c2',
        textEn: 'Waiting until the next weekly standard CAB quorum convenes before applying the hotfix',
        textTh: 'รอจนกว่าจะถึงรอบประชุมคณะกรรมการ CAB มาตรฐานประจำสัปดาห์หน้าก่อนจึงติดตั้งแพตช์'
      },
      {
        id: 'c3',
        textEn: 'Preparing a backout plan and updating architecture documentation once the system stabilizes',
        textTh: 'จัดเตรียมแผนย้อนกลับ (Backout Plan) และอัปเดตเอกสารสถาปัตยกรรมเมื่อระบบกลับมามีเสถียรภาพ'
      },
      {
        id: 'c4',
        textEn: 'Reclassifying the VPN hotfix as a low-risk pre-approved standard change without post-review',
        textTh: 'จัดประเภทแพตช์ฉุกเฉินของ VPN เป็น Standard Change ความเสี่ยงต่ำโดยไม่ต้องทบทวนหลังใช้งาน'
      },
      {
        id: 'c5',
        textEn: 'Instituting an open-ended freeze on all emergency responder accounts after deployment',
        textTh: 'ประกาศระงับบัญชีทีมตอบสนองเหตุการณ์ฉุกเฉินทั้งหมดอย่างไม่มีกำหนดหลังติดตั้งแพตช์'
      }
    ],
    correctChoiceIds: ['c1', 'c3'],
    explanationTh:
      'Emergency Change ย่อเวลาการรอประชุม CAB รอบปกติลงได้ แต่ไม่ได้ยกเว้นธรรมาภิบาล: ยังคงต้องขออนุมัติเร่งด่วนจากผู้มีอำนาจ (ECAB/Emergency Approver) และบันทึกหลักฐาน (c1) รวมถึงต้องมี Backout Plan เผื่อแพตช์ทำระบบล่มและต้องอัปเดตเอกสารย้อนหลังหลังควบคุมเหตุการณ์ได้แล้ว (c3)',
    choiceRationales: {
      c1: 'ถูกต้อง: ต้องมีการอนุมัติแบบเร่งด่วนและบันทึกหลักฐานการเปลี่ยนแปลงเพื่อรักษาความรับผิดชอบและ Audit Trail',
      c2: 'ไม่ถูกต้อง: การรอประชุม CAB รอบปกติขณะที่ช่องโหว่กำลังถูกโจมตีจริงขัดต่อวัตถุประสงค์ของ Emergency Change โดยการรอ Maintenance Window รอบปกติเหมาะสมกับ Normal Change ที่ไม่เร่งด่วน',
      c3: 'ถูกต้อง: แม้เร่งด่วนก็ต้องมีแผน Backout เตรียมไว้หากแพตช์มีปัญหาและต้องอัปเดตเอกสารให้ตรงกับสภาพจริงภายหลัง',
      c4: 'ไม่ถูกต้อง: การแก้ไขอุปกรณ์ขอบเครือข่ายเพื่อรับมือ Zero-day มีความเสี่ยงต่อ Availability สูง จึงไม่ใช่ Standard Change และยังต้องทำ Post-implementation Review โดย Standard Change ใช้เฉพาะงานซ้ำซากความเสี่ยงต่ำที่อนุมัติล่วงหน้า',
      c5: 'ไม่ถูกต้อง: การระงับบัญชีผู้ปฏิบัติงานฉุกเฉินไม่ใช่องค์ประกอบของ Change Management และจะขัดขวางการดูแลระบบเมื่อเกิดปัญหา โดยเหมาะใช้ Restricted Activities เฉพาะการห้ามแก้ไขระบบผลิตในช่วงธุรกิจวิกฤต'
    },
    misconceptionTh:
      'มักเข้าใจผิดว่า Emergency Change หมายถึง "ทำอะไรก็ได้โดยไม่ต้องขออนุมัติ ไม่ต้องมี Backout Plan และไม่ต้องบันทึกเอกสาร"',
    relatedLessonIds: ['L1-04'],
    tags: ['change-management', 'emergency-change', 'backout-plan', 'governance']
  },

  // =========================================================================
  // Objective 1.4: Explain the importance of using appropriate cryptographic solutions
  // =========================================================================
  {
    id: 'Q1-028',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A healthcare provider has enabled Full-Disk Encryption (FDE) and Transparent Data Encryption (TDE) on its patient database servers. However, an internal audit highlights that a compromised database administrator (DBA) credential or an application SQL injection vulnerability could still expose patients\' national identification numbers in plaintext when queried from the running database. Which encryption level BEST mitigates this specific risk?',
    promptTh:
      'ผู้ให้บริการด้านสุขภาพแห่งหนึ่งเปิดใช้งาน Full-Disk Encryption (FDE) และ Transparent Data Encryption (TDE) บนเซิร์ฟเวอร์ฐานข้อมูลผู้ป่วยเรียบร้อยแล้ว อย่างไรก็ตาม การตรวจสอบภายในชี้ว่าหากบัญชีผู้ดูแลระบบฐานข้อมูล (DBA) ถูกขโมยหรือเกิดช่องโหว่ SQL Injection บนแอปพลิเคชัน เลขประจำตัวประชาชนของผู้ป่วยจะยังคงปรากฏเป็นข้อความอ่านออกได้เมื่อถูก Query ขณะระบบทำงาน ระดับการเข้ารหัสใดช่วยลดความเสี่ยงเฉพาะจุดนี้ได้ดีที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Partition encryption on the OS boot volume', textTh: 'Partition Encryption บนพาร์ติชันระบบปฏิบัติการ' },
      { id: 'c2', textEn: 'Volume encryption across the SAN storage pool', textTh: 'Volume Encryption บนพื้นที่จัดเก็บ SAN ทั้งชุด' },
      { id: 'c3', textEn: 'Record encryption applied by the application layer', textTh: 'Record Encryption ที่ดำเนินการจากระดับแอปพลิเคชัน' },
      { id: 'c4', textEn: 'Transport encryption using TLS 1.3 between client and proxy', textTh: 'Transport Encryption ด้วย TLS 1.3 ระหว่างไคลเอนต์และพร็อกซี' }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'FDE, Partition, Volume และ TDE (Database Encryption) ล้วนปลดล็อกข้อมูลให้พร้อมอ่านเมื่อระบบปฏิบัติการและ DB Engine ทำงานอยู่ จึงป้องกันได้เฉพาะการขโมยสื่อจัดเก็บข้อมูล แต่ Record Encryption (Field/Column-level) จะเข้ารหัสเฉพาะฟิลด์อ่อนไหวตั้งแต่ระดับแอปพลิเคชันก่อนเก็บลง DB ทำให้แม้ DBA หรือ SQL Injection Query ตารางโดยตรงก็เห็นเพียง Ciphertext',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Partition Encryption เข้ารหัสในระดับพื้นที่ดิสก์ซึ่งถูกปลดล็อกให้ OS และ DB อ่านได้ระหว่างเครื่องทำงานอยู่ โดยเหมาะกับการแยกเข้ารหัสพาร์ติชันเก็บข้อมูลออกจากพาร์ติชันบูต',
      c2: 'ไม่ถูกต้อง: Volume Encryption ปกป้องพื้นที่จัดเก็บระดับ Logical Volume บนดิสก์หรือ SAN เช่นเดียวกับ FDE ไม่ได้ซ่อนคอลัมน์จากคำสั่ง Query ของ DBA โดยเหมาะกับการปกป้อง Logical Storage Pool เมื่อดิสก์ถูกถอดออก',
      c3: 'ถูกต้อง: Record Encryption เข้ารหัสรายฟิลด์หรือรายแถวข้อมูลอ่อนไหวก่อนส่งเข้า Database Engine จึงป้องกันการอ่านข้อมูลจาก DBA หรือ SQL Injection ได้',
      c4: 'ไม่ถูกต้อง: TLS 1.3 เข้ารหัสเฉพาะ Data in Transit ระหว่างส่งผ่านเครือข่าย ไม่ได้เข้ารหัสข้อมูลที่จัดเก็บในคอลัมน์ฐานข้อมูล โดย TLS เหมาะกับการป้องกันการดักฟังและดัดแปลงระหว่างการส่งข้อมูล'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจว่าเปิด Full-Disk Encryption หรือ Database TDE แล้วจะป้องกันการอ่านข้อมูลจากภายในระบบที่กำลังเปิดทำงานอยู่ (เช่น DBA หรือ SQL Injection) ได้ด้วย',
    relatedLessonIds: ['L1-05'],
    tags: ['cryptography', 'encryption-levels', 'record-encryption', 'data-at-rest']
  },
  {
    id: 'Q1-029',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'During a source code review of a customer authentication service, an engineer discovers that user passwords are stored as plain, unsalted SHA-256 digests. Security leadership wants to neutralize precomputed rainbow table attacks and make offline GPU brute-force cracking prohibitively expensive. Which improvement BEST satisfies BOTH objectives?',
    promptTh:
      'ระหว่างการตรวจทานซอร์สโค้ดของบริการยืนยันตัวตนลูกค้า วิศวกรพบว่ารหัสผ่านของผู้ใช้ถูกเก็บในฐานข้อมูลด้วยค่าแฮช SHA-256 เพียงอย่างเดียวโดยไม่มีค่าสุ่มเพิ่มเติม ฝ่ายบริหารความปลอดภัยต้องการสกัดกั้นการโจมตีด้วยตารางคำนวณล่วงหน้า (Rainbow Tables) และทำให้การเดารหัสผ่านแบบออฟไลน์ด้วย GPU ช้าและสิ้นเปลืองทรัพยากรมากขึ้น การปรับปรุงข้อใดตอบโจทย์ทั้งสองเป้าหมายได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Combining a unique per-user random salt with a key stretching algorithm such as Argon2 or bcrypt',
        textTh: 'ใช้ค่าสุ่มเฉพาะผู้ใช้ (Unique random salt) ร่วมกับอัลกอริทึม Key Stretching เช่น Argon2 หรือ bcrypt'
      },
      {
        id: 'c2',
        textEn: 'Replacing SHA-256 with MD5 combined with a single static company-wide string',
        textTh: 'เปลี่ยนจาก SHA-256 เป็น MD5 ร่วมกับข้อความคงที่เพียงชุดเดียวสำหรับทั้งบริษัท'
      },
      {
        id: 'c3',
        textEn: 'Encoding passwords with Base64 before storing them in an encrypted database column',
        textTh: 'เข้ารหัส Base64 ให้รหัสผ่านก่อนนำไปเก็บไว้ในคอลัมน์ฐานข้อมูลที่เข้ารหัส'
      },
      {
        id: 'c4',
        textEn: 'Publishing unsalted SHA-512 password digests to an open public blockchain ledger',
        textTh: 'เผยแพร่ค่าแฮช SHA-512 ที่ไม่ได้ใส่ Salt ลงบนบัญชีแยกประเภทสาธารณะแบบเปิด (Open public blockchain ledger)'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'Unique Random Salt ทำให้รหัสผ่านเดียวกันของแต่ละคนได้ค่า Hash ต่างกัน จึงทำลายประสิทธิภาพของ Rainbow Table ส่วน Key Stretching (เช่น Argon2, bcrypt, PBKDF2) ทำให้การคำนวณช้าและใช้หน่วยความจำสูง จึงต้านทานการเดาแบบ GPU Brute-force ได้ดีที่สุด',
    choiceRationales: {
      c1: 'ถูกต้อง: Salting ป้องกัน Rainbow Table ส่วน Key Stretching ชะลอความเร็วในการ Brute-force ด้วย GPU อย่างมีประสิทธิภาพ',
      c2: 'ไม่ถูกต้อง: MD5 เป็นอัลกอริทึมที่ล้าสมัยและคำนวณเร็วมาก ส่วนการใช้ค่าคงที่เดียวทั้งบริษัทยังไม่สามารถป้องกันการจับคู่รหัสผ่านที่ซ้ำกันระหว่างผู้ใช้ได้ โดย Hashing ที่แข็งแรงอย่าง SHA-256 เหมาะกับการตรวจ Integrity ของไฟล์ ไม่ใช่เก็บรหัสผ่านแบบไม่มี Key Stretching',
      c3: 'ไม่ถูกต้อง: Base64 เป็นเพียงการแปลงรูปแบบ (Encoding) ไม่ใช่การเข้ารหัสความปลอดภัย และรหัสผ่านควรถูกเก็บแบบทางเดียว (Hashing + Salt + Key Stretching) ไม่ควรถอดกลับได้ โดย Base64 เหมาะสำหรับแปลงข้อมูลไบนารีให้อยู่ในรูปข้อความสำหรับส่งผ่านโปรโตคอลที่รองรับเฉพาะ ASCII',
      c4: 'ไม่ถูกต้อง: Public Blockchain เปิดให้ทุกคนอ่านได้และไม่มี Key Stretching จึงยิ่งทำให้ทุกคนนำไปเดา Offline Brute-force ได้ง่ายขึ้น โดย Blockchain เหมาะกับการบันทึกธุรกรรมสาธารณะที่ต้องการตรวจสอบความถูกต้องร่วมกัน'
    },
    misconceptionTh:
      'มักเข้าใจผิดว่า SHA-256 หรือ SHA-512 ที่ออกแบบให้คำนวณเร็วเหมาะกับการเก็บรหัสผ่านโดยตรง ทั้งที่ความเร็วในการคำนวณกลับช่วยให้ผู้โจมตีใช้ GPU Brute-force ได้เร็วขึ้น',
    relatedLessonIds: ['L1-05'],
    tags: ['cryptography', 'salting', 'key-stretching', 'password-storage']
  },
  {
    id: 'Q1-030',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'An industrial utility is deploying battery-powered field telemetry nodes that require asymmetric cryptography for digital signatures and key agreement with security strength comparable to RSA-3072, while keeping key lengths short to conserve CPU cycles, battery life, and radio bandwidth. Which cryptographic option should the engineering team select?',
    promptTh:
      'บริษัทสาธารณูปโภคกำลังติดตั้งอุปกรณ์ตรวจวัดระยะไกลภาคสนามที่ใช้พลังงานแบตเตอรี่ ซึ่งจำเป็นต้องใช้วิทยาการเข้ารหัสแบบอสมมาตร (Asymmetric Cryptography) สำหรับการลงลายเซ็นดิจิทัลและแลกเปลี่ยนกุญแจโดยมีระดับความแข็งแกร่งเทียบเท่า RSA-3072 แต่ต้องใช้ความยาวกุญแจสั้นเพื่อประหยัดรอบการประมวลผล CPU พลังงานแบตเตอรี่ และแบนด์วิดท์ ทีมวิศวกรควรเลือกใช้อัลกอริทึมกลุ่มใด?',
    choices: [
      { id: 'c1', textEn: 'RSA-1024', textTh: 'RSA-1024' },
      { id: 'c2', textEn: 'ChaCha20', textTh: 'ChaCha20' },
      { id: 'c3', textEn: 'Classic Diffie-Hellman (2048-bit)', textTh: 'Classic Diffie-Hellman (2048-bit)' },
      { id: 'c4', textEn: 'Elliptic Curve Cryptography (ECC)', textTh: 'Elliptic Curve Cryptography (ECC)' }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'Elliptic Curve Cryptography (ECC) เช่น ECDSA และ ECDHE ให้ความแข็งแกร่งเทียบเท่า RSA-3072 ด้วยความยาวกุญแจเพียง 256 บิต จึงใช้พลังงาน หน่วยความจำ และแบนด์วิดท์น้อยกว่ามาก เหมาะอย่างยิ่งกับอุปกรณ์ IoT และมือถือ',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: RSA-1024 สั้นเกินไปและถือว่าไม่ปลอดภัยตามมาตรฐานปัจจุบัน ทั้งยังอ่อนแอกว่า RSA-3072 อย่างมาก โดย RSA ที่ปลอดภัยในปัจจุบันควรใช้ขนาดอย่างน้อย 2048–3072 บิตบนเซิร์ฟเวอร์ที่มีทรัพยากรสูง',
      c2: 'ไม่ถูกต้อง: ChaCha20 เป็นอัลกอริทึม Symmetric Encryption ไม่ใช่อัลกอริทึม Asymmetric และไม่สามารถใช้สร้าง Digital Signature ได้ โดย ChaCha20 เหมาะสำหรับเข้ารหัสข้อมูลสตรีมหรือ Bulk Data ความเร็วสูงหลังแลกเปลี่ยนกุญแจแล้ว',
      c3: 'ไม่ถูกต้อง: Classic Diffie-Hellman ใช้สำหรับการแลกเปลี่ยนกุญแจเท่านั้น ไม่ได้ใช้ลงลายเซ็นดิจิทัล และต้องใช้ขนาดคีย์ยาวกว่า ECC มากเพื่อให้ได้ความแข็งแกร่งเท่ากัน โดย DH เหมาะกับการตกลง Session Key บนระบบที่รองรับคีย์ขนาดใหญ่',
      c4: 'ถูกต้อง: ECC ให้ความแข็งแกร่งเทียบเท่า RSA-3072 ด้วยคีย์ขนาด 256 บิต พร้อมรองรับทั้ง Digital Signature (ECDSA) และ Key Exchange (ECDHE)'
    },
    misconceptionTh:
      'ผู้เรียนบางคนนำความยาวกุญแจของ Symmetric (เช่น 256-bit) มาเทียบกับ Asymmetric (RSA-2048+) โดยตรง หรือจำสับสนว่าอัลกอริทึม Symmetric อย่าง AES/ChaCha20 ใช้สร้าง Digital Signature ได้',
    relatedLessonIds: ['L1-05'],
    tags: ['cryptography', 'ecc', 'key-length', 'asymmetric']
  },
  {
    id: 'Q1-031',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    type: 'msq',
    selectCount: 3,
    difficulty: 'exam-ready',
    promptEn:
      'A security architect is selecting cryptographic hardware tools for three distinct use cases: (1) storing laptop full-disk encryption keys tied to measured firmware boot integrity, (2) protecting an offline Root CA private key inside a dedicated tamper-responsive appliance, and (3) isolating biometric matching inside a mobile processor so a compromised OS kernel cannot read the raw biometric template. Which THREE tools match these requirements? (Choose three.)',
    promptTh:
      'สถาปนิกความปลอดภัยกำลังเลือกเครื่องมือด้านการเข้ารหัสเชิงฮาร์ดแวร์สำหรับ 3 กรณีการใช้งานที่แตกต่างกัน: (1) จัดเก็บกุญแจ Full-Disk Encryption บนแล็ปท็อปโดยผูกติดกับการตรวจสอบความถูกต้องของเฟิร์มแวร์ขณะบูต (2) ปกป้อง Private Key ของ Root CA ออฟไลน์ภายในอุปกรณ์เฉพาะทางที่ทนทานต่อการงัดแงะ และ (3) แยกส่วนการประมวลผลเปรียบเทียบข้อมูลชีวมิติภายในโปรเซสเซอร์มือถือเพื่อไม่ให้เคอร์เนลของ OS ที่ถูกเจาะอ่านข้อมูลต้นฉบับได้ เครื่องมือ 3 ข้อใดตรงกับความต้องการเหล่านี้? (เลือก 3 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Cloud Key Management System (KMS) policy engine',
        textTh: 'ระบบจัดการกุญแจบนคลาวด์ (Cloud KMS)'
      },
      {
        id: 'c2',
        textEn: 'Trusted Platform Module (TPM)',
        textTh: 'Trusted Platform Module (TPM)'
      },
      {
        id: 'c3',
        textEn: 'Hardware Security Module (HSM)',
        textTh: 'Hardware Security Module (HSM)'
      },
      {
        id: 'c4',
        textEn: 'Certificate Revocation List (CRL) responder',
        textTh: 'เซิร์ฟเวอร์เผยแพร่รายการเพิกถอนใบรับรอง (CRL)'
      },
      {
        id: 'c5',
        textEn: 'Secure Enclave',
        textTh: 'Secure Enclave'
      }
    ],
    correctChoiceIds: ['c2', 'c3', 'c5'],
    explanationTh:
      'ทั้งสามเทคโนโลยีตอบโจทย์เฉพาะทางในระดับฮาร์ดแวร์อย่างชัดเจน: TPM (c2) เป็นชิปบนเมนบอร์ดที่ใช้เก็บกุญแจ FDE และทำ Measured Boot, HSM (c3) เป็นอุปกรณ์เฉพาะทางความเร็วสูงที่ทนการงัดแงะสำหรับเก็บ Root CA Key และทำ Code/CA Signing, ส่วน Secure Enclave (c5) เป็นพื้นที่ประมวลผลแยกขาดจาก OS หลักใน CPU เพื่อปกป้องข้อมูลชีวมิติและ Data in Use แม้ OS ถูกยึด',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: KMS เป็นบริการซอฟต์แวร์บริหารวงจรกุญแจแบบรวมศูนย์ (สร้าง หมุนเวียน และกำหนดสิทธิ์) ไม่ใช่ชิปวัดค่าตอนบูตบนเมนบอร์ดหรือพื้นที่แยกใน CPU มือถือ โดย KMS เหมาะสมกับการบริหารกุญแจและนโยบายการหมุนเวียนกุญแจของแอปพลิเคชันบนคลาวด์',
      c2: 'ถูกต้อง: TPM ทำหน้าที่เก็บกุญแจ FDE ผูกติดกับเครื่องและตรวจสอบค่า Hash ของ Bootloader/Firmware ระหว่างเปิดเครื่อง',
      c3: 'ถูกต้อง: HSM ออกแบบให้ทนทานการงัดแงะทางกายภาพและเหมาะสำหรับการจัดเก็บและลงนามด้วย Root CA Key ระดับองค์กร',
      c4: 'ไม่ถูกต้อง: CRL เป็นกลไกประกาศหมายเลขใบรับรองดิจิทัลที่ถูกยกเลิก ไม่ใช่ฮาร์ดแวร์เก็บกุญแจหรือแยกพื้นที่ประมวลผล โดย CRL เหมาะกับการเผยแพร่สถานะใบรับรองที่ถูกเพิกถอนให้ไคลเอนต์ดาวน์โหลดตรวจสอบ',
      c5: 'ถูกต้อง: Secure Enclave แยกพื้นที่หน่วยความจำและการคำนวณลับออกจากระบบปฏิบัติการหลักด้วยฮาร์ดแวร์ จึงปกป้องข้อมูลชีวมิติแม้ OS Kernel ถูกเจาะ'
    },
    misconceptionTh:
      'ผู้เรียนมักจำสับสนระหว่าง TPM (ชิปบนเมนบอร์ดผูกติดเครื่องเดียว), HSM (อุปกรณ์องค์กรทนงัดแงะเก็บ Root CA), KMS (ระบบจัดการวงจรกุญแจรวมศูนย์) และ Secure Enclave (พื้นที่แยกคำนวณในโปรเซสเซอร์)',
    relatedLessonIds: ['L1-06'],
    tags: ['cryptography', 'tpm', 'hsm', 'secure-enclave']
  },
  {
    id: 'Q1-032',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'An engineering firm uses individual PKI certificates so staff can encrypt proprietary CAD archives and digitally sign contract approvals. After a lead engineer abruptly leaves without backing up their credentials, the firm cannot decrypt critical project archives. Management wants to ensure encrypted business files remain recoverable in the future while preserving strict individual non-repudiation for contract signatures. Which PKI policy BEST satisfies both goals?',
    promptTh:
      'บริษัทวิศวกรรมแห่งหนึ่งใช้ใบรับรอง PKI รายบุคคลเพื่อให้พนักงานเข้ารหัสไฟล์แบบแปลน CAD ที่เป็นความลับและใช้ลงลายเซ็นดิจิทัลอนุมัติสัญญา เมื่อหัวหน้าวิศวกรรายหนึ่งลาออกกะทันหันโดยไม่ได้สำรองข้อมูลรับรองไว้ บริษัทจึงไม่สามารถถอดรหัสคลังไฟล์โครงการสำคัญได้ ฝ่ายบริหารต้องการให้ไฟล์ธุรกิจที่เข้ารหัสสามารถกู้คืนได้ในอนาคตควบคู่กับการรักษาคุณสมบัติ Non-repudiation อย่างเคร่งครัดสำหรับการลงนามสัญญา นโยบาย PKI ข้อใดตอบโจทย์ทั้งสองประการได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Escrowing both encryption private keys and digital signing private keys in the central PKI vault',
        textTh: 'นำทั้ง Private Key สำหรับเข้ารหัสและ Private Key สำหรับลงลายเซ็นดิจิทัลเข้าฝากในคลัง Key Escrow ส่วนกลางทั้งหมด'
      },
      {
        id: 'c2',
        textEn: 'Implementing key escrow strictly for decryption private keys while keeping signing private keys unescrowed',
        textTh: 'นำเฉพาะ Private Key สำหรับการถอดรหัสเข้าสู่ระบบ Key Escrow และห้ามนำ Private Key สำหรับลงลายเซ็นดิจิทัลเข้าฝากโดยเด็ดขาด'
      },
      {
        id: 'c3',
        textEn: 'Issuing a single shared wildcard certificate across the engineering team for local file encryption',
        textTh: 'ออกใบรับรอง Wildcard ชุดเดียวให้ทีมวิศวกรทุกคนใช้ร่วมกันสำหรับการเข้ารหัสไฟล์ในเครื่อง'
      },
      {
        id: 'c4',
        textEn: 'Replacing asymmetric file encryption with SHA-256 hashing for proprietary CAD archives',
        textTh: 'เปลี่ยนจากการเข้ารหัสไฟล์แบบอสมมาตรมาใช้การแฮช SHA-256 สำหรับจัดเก็บคลังไฟล์แบบแปลน CAD'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'หลักปฏิบัติมาตรฐานของ PKI คือแยกคู่กุญแจและทำ Key Escrow เฉพาะ Encryption/Decryption Key เท่านั้น เพื่อให้องค์กรกู้คืนไฟล์ธุรกิจได้เมื่อพนักงานลาออก แต่ต้องห้ามทำ Key Escrow กับ Signing Key เพื่อไม่ให้บุคคลที่สามเข้าถึงคีย์ลงนามได้ซึ่งจะทำลายหลักการ Non-repudiation ของสัญญา',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การฝาก Signing Private Key ไว้ที่คลังกลางทำให้พนักงานสามารถอ้างภายหลังได้ว่าผู้ดูแล Key Escrow เป็นคนเซ็นสัญญาแทน จึงทำลาย Non-repudiation โดยคลัง Key Escrow เหมาะเฉพาะการสำรองกุญแจถอดรหัสไฟล์เท่านั้น',
      c2: 'ถูกต้อง: การแยกทำ Key Escrow เฉพาะกุญแจถอดรหัสช่วยกู้คืนทรัพย์สินทางปัญญาของบริษัทได้จริงโดยยังคงความเป็นส่วนตัวสมบูรณ์ของ Signing Key เพื่อรักษา Non-repudiation',
      c3: 'ไม่ถูกต้อง: Wildcard Certificate ใช้สำหรับคุ้มครองหลาย Subdomain บนเว็บไซต์ TLS ไม่ได้ออกแบบมาเพื่อเข้ารหัสไฟล์รายบุคคล และการใช้คีย์ร่วมกันยิ่งเสี่ยงรั่วไหลและขาด Accountability โดย Wildcard เหมาะกับการจัดการ TLS ให้หลาย Subdomain ภายใต้โดเมนหลักเดียว',
      c4: 'ไม่ถูกต้อง: SHA-256 เป็นฟังก์ชันทางเดียวที่ไม่สามารถกู้ไฟล์แบบแปลน CAD กลับมาอ่านได้ โดย SHA-256 เหมาะกับการตรวจสอบว่าไฟล์แบบแปลนไม่ถูกแก้ไขดัดแปลงระหว่างการส่งต่อ'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนคิดว่า Key Escrow ควรสำรอง Private Key ทุกประเภทของพนักงาน ทั้งที่การสำรอง Signing Key จะทำลายคุณสมบัติ Non-repudiation ทันที',
    relatedLessonIds: ['L1-06', 'L1-02'],
    tags: ['pki', 'key-escrow', 'non-repudiation']
  },
  {
    id: 'Q1-033',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A web operations engineer is generating a Certificate Signing Request (CSR) on a newly provisioned e-commerce server to obtain a third-party TLS certificate. To follow PKI best practices and allow clients to check certificate validity in real time without downloading an ever-growing list of revoked serial numbers, which combination should the team implement?',
    promptTh:
      'วิศวกรปฏิบัติการเว็บกำลังสร้างคำขอใบรับรอง Certificate Signing Request (CSR) บนเซิร์ฟเวอร์อีคอมเมิร์ซเครื่องใหม่เพื่อยื่นขอใบรับรอง TLS จากผู้ให้บริการภายนอก (Third-party CA) เพื่อให้สอดคล้องกับแนวปฏิบัติที่ดีของ PKI และช่วยให้ไคลเอนต์ตรวจสอบสถานะใบรับรองได้แบบทันท่วงทีโดยไม่ต้องดาวน์โหลดบัญชีรายชื่อใบรับรองที่ถูกเพิกถอนซึ่งมีขนาดใหญ่ขึ้นเรื่อย ๆ ทีมงานควรดำเนินการคู่ใด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Include the server private key inside the CSR; verify revocation via a CRL',
        textTh: 'บรรจุ Private Key ของเซิร์ฟเวอร์ลงในไฟล์ CSR; ตรวจสอบการเพิกถอนผ่าน CRL'
      },
      {
        id: 'c2',
        textEn: 'Withhold the public key from the CSR; verify revocation via OCSP',
        textTh: 'ไม่ใส่ Public Key ลงในไฟล์ CSR; ตรวจสอบการเพิกถอนผ่าน OCSP'
      },
      {
        id: 'c3',
        textEn: 'Keep the private key exclusively on the web server; verify revocation via OCSP',
        textTh: 'เก็บ Private Key ไว้เฉพาะบนเว็บเซิร์ฟเวอร์; ตรวจสอบการเพิกถอนผ่าน OCSP'
      },
      {
        id: 'c4',
        textEn: 'Deploy a self-signed wildcard certificate; verify revocation via root of trust',
        textTh: 'ใช้งานใบรับรอง Wildcard แบบลงนามด้วยตนเอง (Self-signed); ตรวจสอบการเพิกถอนผ่าน Root of Trust'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'ในการสร้าง CSR เซิร์ฟเวอร์จะสร้างคู่กุญแจและเก็บ Private Key ไว้กับตัวเองอย่างปลอดภัยตลอดเวลา โดยส่งเฉพาะ Public Key และข้อมูลระบุตัวตนไปในไฟล์ CSR ให้ CA ลงนาม และสำหรับการตรวจสอบการเพิกถอนแบบ Real-time โดยไม่โหลดไฟล์รายการขนาดใหญ่ต้องใช้ OCSP (หรือ OCSP Stapling)',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: ห้ามส่ง Private Key ออกไปในไฟล์ CSR เด็ดขาด และ CRL เป็นไฟล์รายการที่ต้องดาวน์โหลดเป็นระยะซึ่งใหญ่ขึ้นเรื่อย ๆ โดย CRL เหมาะกับสภาพแวดล้อมออฟไลน์หรือระบบปิดที่ไม่สามารถส่งคำถาม OCSP แบบ Real-time ไปยัง CA ได้',
      c2: 'ไม่ถูกต้อง: แม้การใช้ OCSP จะตอบโจทย์การตรวจสอบแบบ Real-time แต่ไฟล์ CSR จำเป็นต้องบรรจุ Public Key เพื่อให้ CA นำไปลงนามในใบรับรองดิจิทัล ไม่เช่นนั้นจะออกใบรับรองไม่ได้',
      c3: 'ถูกต้อง: Private Key ต้องไม่หลุดออกจากเซิร์ฟเวอร์ผู้ขอ และ OCSP ช่วยตรวจสอบสถานะ Good/Revoked/Unknown ได้แบบ Real-time',
      c4: 'ไม่ถูกต้อง: Self-signed Certificate ไม่มี CA ภายนอกรับรองจึงไม่ได้รับความเชื่อถือจากผู้ใช้สาธารณะ และ Root of Trust เป็นฐานความเชื่อถือของสายโซ่ใบรับรองไม่ใช่โปรโตคอลเช็กการเพิกถอน โดย Self-signed เหมาะสำหรับห้องแล็บทดสอบหรือระบบปิดภายในเท่านั้น'
    },
    misconceptionTh:
      'มักสับสนว่าต้องส่ง Private Key ไปพร้อม CSR ให้ CA เซ็น หรือจำสลับหน้าที่ระหว่าง CRL (ดาวน์โหลดไฟล์บัญชีรายชื่อ) กับ OCSP (สอบถามสถานะแบบ Real-time)',
    relatedLessonIds: ['L1-06'],
    tags: ['pki', 'csr', 'ocsp', 'crl', 'certificates']
  },
  {
    id: 'Q1-034',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'An online retailer wants to stop storing real 16-digit credit card numbers inside its order-processing database to reduce PCI DSS compliance scope, while still allowing an isolated billing microservice to exchange random surrogate references for actual card values through a central secure vault during recurring charges. Which obfuscation technique BEST satisfies this architecture?',
    promptTh:
      'ผู้ค้าปลีกออนไลน์แห่งหนึ่งต้องการหยุดจัดเก็บหมายเลขบัตรเครดิต 16 หลักจริงไว้ในฐานข้อมูลระบบคำสั่งซื้อเพื่อลดขอบเขตการปฏิบัติตามมาตรฐาน PCI DSS แต่ยังคงต้องการให้ไมโครเซอร์วิสการเรียกเก็บเงินที่แยกส่วนไว้สามารถนำค่าอ้างอิงสุ่มไปแลกเปลี่ยนเป็นข้อมูลบัตรจริงผ่านคลังกลางปลอดภัยสูงเมื่อมีการหักชำระซ้ำตามรอบ เทคนิคการอำพรางข้อมูล (Obfuscation) ใดเหมาะสมกับสถาปัตยกรรมนี้ที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Static data masking', textTh: 'Static data masking' },
      { id: 'c2', textEn: 'Tokenization', textTh: 'Tokenization' },
      { id: 'c3', textEn: 'Steganography', textTh: 'Steganography' },
      { id: 'c4', textEn: 'Full-disk encryption', textTh: 'Full-disk encryption' }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'Tokenization แทนที่ข้อมูลอ่อนไหวจริง (เช่น เลขบัตรเครดิต) ด้วยค่าสุ่มที่ไม่มีความสัมพันธ์ทางคณิตศาสตร์ (Token) และเก็บตารางจับคู่ไว้ใน Token Vault เพียงจุดเดียว จึงลดขอบเขต PCI DSS ได้โดยตรงและยังแปลงกลับผ่าน Vault เพื่อตัดเงินรอบถัดไปได้',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Static Data Masking ทำลายหรือเปลี่ยนค่าข้อมูลจริงแบบถาวรไม่สามารถย้อนกลับผ่านคลังกลางเพื่อนำไปตัดบัตรจริงซ้ำได้ โดย Static Data Masking เหมาะกับการเตรียมสำเนาฐานข้อมูลที่ไม่มีข้อมูลจริงให้ทีมพัฒนา/ทดสอบ (Dev/Test)',
      c2: 'ถูกต้อง: Tokenization แทนเลขบัตรด้วยค่าอ้างอิงสุ่มและแยกเก็บความสัมพันธ์ไว้ใน Vault ซึ่งตอบโจทย์ทั้งการลด PCI DSS Scope และการเรียกเก็บเงินซ้ำ',
      c3: 'ไม่ถูกต้อง: Steganography คือการซ่อนข้อมูลลับไว้ภายในไฟล์ภาพ เสียง หรือวิดีโอเพื่อปกปิดไม่ให้รู้ว่ามีข้อความลับอยู่ ไม่ใช่การแทนที่ฟิลด์ในฐานข้อมูลชำระเงิน โดย Steganography เหมาะกับการแอบส่งข้อมูลลับผ่านไฟล์สื่อปกติ',
      c4: 'ไม่ถูกต้อง: Full-disk Encryption เข้ารหัสทั้งดิสก์ขณะเครื่องปิด แต่แอปพลิเคชันและฐานข้อมูลยังถือครองเลขบัตรเครดิตจริงอยู่ จึงไม่ช่วยลดขอบเขต PCI DSS ของฐานข้อมูลคำสั่งซื้อ โดย FDE เหมาะกับการป้องกันข้อมูลเมื่อแล็ปท็อปหรือฮาร์ดดิสก์ถูกขโมย'
    },
    misconceptionTh:
      'ผู้เรียนบางคนสับสนระหว่าง Tokenization (แทนค่าด้วย Token และแมปกลับได้เฉพาะผ่าน Token Vault) กับ Data Masking (พรางข้อมูลเพื่อแสดงผลหรือทดสอบโดยไม่เน้นแปลงกลับ)',
    relatedLessonIds: ['L1-06'],
    tags: ['obfuscation', 'tokenization', 'pci-dss']
  },
  {
    id: 'Q1-035',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'A threat intelligence advisory warns that adversaries are recording encrypted TLS traffic between a financial firm\'s API gateway and partner servers today, intending to decrypt the captured sessions years later if they eventually compromise the gateway\'s long-term private key. Which cryptographic capability BEST prevents retroactive decryption of past sessions?',
    promptTh:
      'รายงานข่าวกรองภัยคุกคามเตือนว่าผู้ไม่หวังดีกำลังดักบันทึกทราฟฟิก TLS ที่เข้ารหัสไว้ระหว่าง API Gateway ของบริษัทการเงินกับเซิร์ฟเวอร์คู่ค้าในวันนี้ เพื่อหวังนำไปถอดรหัสย้อนหลังในอีกหลายปีข้างหน้าหากสามารถยึด Private Key ระยะยาวของเกตเวย์ได้ในอนาคต ความสามารถทางคริปโตกราฟีใดป้องกันการถอดรหัสเซสชันในอดีตย้อนหลังหากกุญแจถาวรรั่วไหลได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Ephemeral key exchange (such as ECDHE) providing perfect forward secrecy',
        textTh: 'การแลกเปลี่ยนกุญแจแบบชั่วคราว (เช่น ECDHE) ที่มอบคุณสมบัติ Perfect Forward Secrecy'
      },
      {
        id: 'c2',
        textEn: 'Upgrading the gateway\'s static RSA key exchange certificate from 2048-bit to 4096-bit',
        textTh: 'อัปเกรดขนาดใบรับรองสำหรับการแลกเปลี่ยนกุญแจ RSA แบบคงที่ของเกตเวย์จาก 2048-bit เป็น 4096-bit'
      },
      {
        id: 'c3',
        textEn: 'Sharing a single static AES-256 pre-shared key across all partner gateways',
        textTh: 'ใช้กุญแจ AES-256 แบบ Pre-shared Key คงที่ชุดเดียวกันร่วมกันระหว่างเกตเวย์คู่ค้าทั้งหมด'
      },
      {
        id: 'c4',
        textEn: 'Replacing the third-party CA certificate with an internal self-signed wildcard certificate',
        textTh: 'เปลี่ยนใบรับรองจาก Third-party CA เป็นใบรับรอง Wildcard แบบลงนามด้วยตนเองภายในองค์กร'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'การแลกเปลี่ยนกุญแจแบบชั่วคราว (Ephemeral Key Exchange) เช่น ECDHE จะสร้าง Session Key ชั่วคราวแยกเฉพาะแต่ละการเชื่อมต่อและทำลายทิ้งทันทีเมื่อจบเซสชัน ทำให้เกิดคุณสมบัติ Perfect Forward Secrecy (PFS) ซึ่งต่อให้ Private Key ถาวรของเซิร์ฟเวอร์รั่วในอนาคต ก็ไม่สามารถย้อนกลับไปถอดรหัสทราฟฟิกเก่าที่ดักเก็บไว้ได้',
    choiceRationales: {
      c1: 'ถูกต้อง: ECDHE สร้างกุญแจเซสชันแบบใช้แล้วทิ้ง (PFS) จึงคุ้มครองทราฟฟิกในอดีตจากการรั่วไหลของคีย์ถาวรในอนาคต',
      c2: 'ไม่ถูกต้อง: การใช้ Static RSA Key Exchange (แม้จะเพิ่มเป็น 4096-bit) ยังคงอาศัย Private Key ถาวรในการถอดรหัส Pre-master Secret ของทุกเซสชันที่ผ่านมา หากคีย์ถาวรหลุดในอนาคตทราฟฟิกเก่าทั้งหมดจะถูกถอดได้ทันที โดย RSA-4096 เหมาะกับการเพิ่มความแข็งแกร่งให้กับการลงนามใบรับรองหรือการเข้ารหัสข้อมูลที่ไม่ต้องการ PFS',
      c3: 'ไม่ถูกต้อง: การใช้ Static Pre-shared Key ร่วมกันทุกคู่ค้ายิ่งเพิ่มความเสี่ยงให้ทราฟฟิกย้อนหลังทั้งหมดถูกถอดรหัสทันทีเมื่อคีย์ชุดนั้นรั่วไหลจากคู่ค้าใดคู่ค้าหนึ่ง โดย PSK เหมาะกับระบบปิดขนาดเล็กหรือใช้เสริมร่วมกับกลไก Key Exchange สมัยใหม่',
      c4: 'ไม่ถูกต้อง: ผู้ออกใบรับรอง (Third-party vs Self-signed) เกี่ยวข้องกับความน่าเชื่อถือของตัวตน PKI ไม่ได้มอบคุณสมบัติ Perfect Forward Secrecy ให้กับช่องทางสื่อสาร โดย Self-signed เหมาะสำหรับสภาพแวดล้อมทดสอบภายใน'
    },
    misconceptionTh:
      'ผู้เรียนบางคนคิดว่าการขยายขนาดคีย์ถาวร (เช่น RSA-4096) เพียงพอต่อการป้องกันการถอดรหัสย้อนหลัง โดยลืมว่าการคุ้มครองเซสชันเก่าต้องอาศัย Ephemeral Key Exchange เพื่อสร้าง Perfect Forward Secrecy',
    relatedLessonIds: ['L1-05', 'L1-06'],
    tags: ['cryptography', 'key-exchange', 'ecdhe', 'perfect-forward-secrecy']
  },
  {
    id: 'Q1-036',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'foundation',
    promptEn:
      'A pharmaceutical supply-chain consortium is evaluating an open public blockchain ledger to record cold-chain custody handoffs among manufacturers, shippers, and hospitals. Which TWO security properties or design constraints accurately apply to using an open public ledger in this scenario? (Choose two.)',
    promptTh:
      'กลุ่มเครือข่ายห่วงโซ่อุปทานเวชภัณฑ์กำลังประเมินการใช้บัญชีแยกประเภทสาธารณะแบบเปิด (Open public blockchain ledger) เพื่อบันทึกการส่งมอบสินค้าควบคุมอุณหภูมิระหว่างผู้ผลิต บริษัทขนส่ง และโรงพยาบาล คุณสมบัติหรือข้อจำกัดด้านความปลอดภัย 2 ข้อใดต่อไปนี้เป็นความจริงในการนำบัญชีแยกประเภทสาธารณะแบบเปิดมาใช้งานในสถานการณ์นี้? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Chained cryptographic hashes across blocks allow participants to detect unauthorized retroactive alteration of custody records',
        textTh: 'การเชื่อมโยงค่าแฮชเชิงคริปโตกราฟีข้ามบล็อกช่วยให้ผู้มีส่วนร่วมตรวจพบการแก้ไขข้อมูลประวัติการส่งมอบย้อนหลังโดยมิชอบได้ทันที'
      },
      {
        id: 'c2',
        textEn: 'Writing unmasked patient names and prescription details directly onto the ledger simplifies privacy compliance',
        textTh: 'การบันทึกชื่อผู้ป่วยและรายละเอียดใบสั่งยาโดยไม่ปกปิดลงบนบัญชีแยกประเภทโดยตรงช่วยให้ปฏิบัติตามกฎหมายความเป็นส่วนตัวได้ง่ายขึ้น'
      },
      {
        id: 'c3',
        textEn: 'A single consortium administrator can silently overwrite earlier blocks without invalidating subsequent block hashes',
        textTh: 'ผู้ดูแลระบบกลางเพียงรายเดียวสามารถเขียนทับข้อมูลในบล็อกเก่าอย่างเงียบ ๆ ได้โดยไม่ทำให้ค่าแฮชของบล็อกถัดไปผิดเพี้ยน'
      },
      {
        id: 'c4',
        textEn: 'Sensitive personally identifiable information (PII) must stay off-chain because entries on an open public ledger are transparent and immutable',
        textTh: 'ข้อมูลส่วนบุคคลที่อ่อนไหว (PII) ต้องถูกเก็บไว้นอกเชน (Off-chain) เนื่องจากข้อมูลบน Open Public Ledger เปิดเผยต่อสาธารณะและแก้ไขลบออกไม่ได้'
      },
      {
        id: 'c5',
        textEn: 'Adding records to a public blockchain automatically encrypts all payload attributes for confidentiality',
        textTh: 'การบันทึกรายการลงบน Public Blockchain จะเข้ารหัสข้อมูลเนื้อหาทั้งหมดเพื่อรักษาความลับโดยอัตโนมัติ'
      }
    ],
    correctChoiceIds: ['c1', 'c4'],
    explanationTh:
      'Blockchain ใช้ Hash Chaining เชื่อมแต่ละ Block เข้าด้วยกันร่วมกับกลไก Consensus ทำให้มีคุณสมบัติ Tamper-evident/Immutability ป้องกันการแก้ประวัติย้อนหลังอย่างเงียบ ๆ (c1) แต่เนื่องจากเป็น Open Public Ledger ที่ทุกคนตรวจสอบได้และลบย้อนหลังไม่ได้ จึงห้ามเก็บ PII หรือความลับไว้บนเชนโดยตรง (c4)',
    choiceRationales: {
      c1: 'ถูกต้อง: การเชื่อมค่า Hash ของ Block ก่อนหน้าเข้ากับ Block ถัดไปทำให้การปลอมแปลงย้อนหลังถูกตรวจพบทันที',
      c2: 'ไม่ถูกต้อง: การเก็บชื่อและข้อมูลสุขภาพผู้ป่วยลงบน Public Ledger เปิดเผยข้อมูลส่วนบุคคลและขัดแย้งกับสิทธิการขอลบข้อมูลตามกฎหมายความเป็นส่วนตัว โดยการประมวลผลข้อมูลผู้ป่วยต้องทำในฐานข้อมูลปิดที่มีการควบคุมสิทธิ์และการเข้ารหัส',
      c3: 'ไม่ถูกต้อง: การแก้บล็อกเก่าแม้เพียงเล็กน้อยจะทำให้ Hash ของบล็อกนั้นและบล็อกถัดไปทั้งหมดเปลี่ยนไปจนไม่ผ่าน Consensus Mechanism โดยความสามารถแก้ไขบันทึกได้ง่ายเป็นลักษณะของฐานข้อมูลรวมศูนย์ทั่วไป',
      c4: 'ถูกต้อง: ต้องเก็บเฉพาะค่าอ้างอิงหรือค่าแฮชบน Public Ledger และเก็บข้อมูลส่วนบุคคลไว้ Off-chain เพื่อรักษาความลับและปฏิบัติตามข้อกำหนดด้านความเป็นส่วนตัว',
      c5: 'ไม่ถูกต้อง: Blockchain ใช้ Hashing และ Digital Signatures เพื่อ Integrity และความโปร่งใส ไม่ได้เข้ารหัสข้อมูลเพื่อ Confidentiality โดยอัตโนมัติ โดยการปิดบังความลับต้องใช้วิธีเข้ารหัสข้อมูลต่างหากก่อนจัดเก็บ'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจผิดว่า Blockchain เข้ารหัสข้อมูลให้เป็นความลับโดยอัตโนมัติ จึงคิดผิดว่าสามารถเก็บข้อมูลส่วนบุคคล (PII) ลงบน Open Public Ledger ได้โดยตรง',
    relatedLessonIds: ['L1-05'],
    tags: ['blockchain', 'open-public-ledger', 'hashing', 'privacy']
  }
];
