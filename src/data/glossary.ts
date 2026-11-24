import type { Flashcard, GlossaryEntry } from '../types';

export const GLOSSARY_ENTRIES: GlossaryEntry[] = [
  // ===========================================================================
  // Domain 1.0 — General Security Concepts (1.1 – 1.4)
  // ===========================================================================
  {
    id: 'g-security-controls',
    termEn: 'Security Controls',
    domainId: 'D1',
    objectiveIds: ['1.1'],
    explanationTh:
      'มาตรการหรือกลไกที่องค์กรนำมาใช้เพื่อป้องกัน ตรวจจับ หรือลดความเสี่ยงต่อสินทรัพย์สารสนเทศ แบ่งออกเป็น 4 หมวดหมู่ (Technical, Managerial, Operational, Physical) และ 6 ประเภทตามหน้าที่ (Preventive, Deterrent, Detective, Corrective, Compensating, Directive)',
    usageContextTh:
      'ข้อสอบมักให้สถานการณ์แล้วถามทั้งหมวดหมู่และประเภท เช่น เสากั้นรถเป็น Physical/Preventive ส่วนนโยบายการใช้งานเป็น Managerial/Directive',
    relatedLessonIds: ['L1-01']
  },
  {
    id: 'g-compensating-control',
    termEn: 'Compensating Control',
    domainId: 'D1',
    objectiveIds: ['1.1'],
    explanationTh:
      'มาตรการควบคุมทางเลือกที่นำมาใช้ทดแทนหรือเสริม เมื่อองค์กรไม่สามารถติดตั้งมาตรการหลักตามมาตรฐานได้เนื่องจากข้อจำกัดทางเทคนิค ธุรกิจ หรือระบบเก่า (Legacy) โดยต่างจาก Corrective Control ที่ใช้แก้ไขหลังเกิดเหตุ',
    usageContextTh:
      'พบบ่อยในสถานการณ์ระบบเก่าที่อัปเดตแพตช์ไม่ได้ (Cannot patch) จึงต้องแยกเครือข่าย (Segmentation) หรือใช้ WAF ทำ Virtual Patching แทน',
    relatedLessonIds: ['L1-01', 'L3-02']
  },
  {
    id: 'g-directive-control',
    termEn: 'Directive Control',
    domainId: 'D1',
    objectiveIds: ['1.1'],
    explanationTh:
      'มาตรการควบคุมที่เป็นคำสั่ง นโยบาย ข้อกำหนด หรือคำแนะนำเพื่อให้บุคลากรปฏิบัติตามข้อกำหนดด้านความปลอดภัย ต่างจาก Preventive ที่บังคับปิดกั้นทางเทคนิคโดยตรง',
    usageContextTh:
      'ตัวอย่างเช่น นโยบาย AUP, ข้อกำหนดให้ติดบัตรพนักงานในอาคาร และป้ายบอกทางออกฉุกเฉินหรือเขตหวงห้าม',
    relatedLessonIds: ['L1-01', 'L5-01']
  },
  {
    id: 'g-cia',
    termEn: 'CIA Triad',
    acronym: 'CIA',
    fullNameEn: 'Confidentiality, Integrity, and Availability',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    explanationTh:
      'สามเสาหลักพื้นฐานของความมั่นคงปลอดภัยสารสนเทศ ได้แก่ Confidentiality (รักษาความลับไม่ให้ผู้ไม่มีสิทธิ์เข้าถึง), Integrity (รักษาความถูกต้องครบถ้วนไม่ให้ถูกดัดแปลง) และ Availability (ความพร้อมใช้งานเมื่อผู้มีสิทธิ์ต้องการ)',
    usageContextTh:
      'ใช้เป็นเกณฑ์วิเคราะห์ว่าภัยคุกคามหรือมาตรการป้องกันกระทบเสาหลักใด เช่น การเข้ารหัสช่วย Confidentiality, Hashing ช่วย Integrity และ Clustering ช่วย Availability',
    relatedLessonIds: ['L1-02']
  },
  {
    id: 'g-non-repudiation',
    termEn: 'Non-repudiation',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    explanationTh:
      'หลักการรับรองความรับผิดชอบที่ทำให้ผู้ส่งข้อมูลหรือผู้ทำธุรกรรมไม่สามารถปฏิเสธได้ในภายหลังว่าตนเองไม่ได้เป็นผู้กระทำ ต่างจาก Integrity เพียงอย่างเดียวที่ยืนยันเพียงว่าข้อมูลไม่ถูกแก้ไข แต่ระบุตัวผู้ส่งไม่ได้หากใช้คีย์ร่วมกัน',
    usageContextTh:
      'สร้างได้ด้วยการลงลายมือชื่อดิจิทัล (Digital Signature) ด้วย Private Key ของผู้ส่งร่วมกับบันทึก Audit Log ที่เชื่อถือได้',
    relatedLessonIds: ['L1-02', 'L1-05']
  },
  {
    id: 'g-aaa',
    termEn: 'AAA Framework',
    acronym: 'AAA',
    fullNameEn: 'Authentication, Authorization, and Accounting',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    explanationTh:
      'กรอบควบคุมการเข้าถึง 3 ขั้นตอน ได้แก่ Authentication (พิสูจน์ตัวตนทั้งบุคคลและระบบ), Authorization (กำหนดขอบเขตสิทธิ์ว่าทำอะไรได้บ้าง) และ Accounting (บันทึกประวัติการใช้งานและกิจกรรมเพื่อตรวจสอบย้อนหลัง)',
    usageContextTh:
      'ใช้ในโครงสร้างพื้นฐานเครือข่ายและระบบองค์กร เช่น RADIUS, TACACS+ รวมถึงการยืนยันตัวตนระหว่างระบบด้วย Mutual TLS และ Device Certificates',
    relatedLessonIds: ['L1-02', 'L4-02']
  },
  {
    id: 'g-gap-analysis',
    termEn: 'Gap Analysis',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    explanationTh:
      'กระบวนการเปรียบเทียบสถานะความปลอดภัยที่เป็นอยู่ในปัจจุบัน (Current State) กับมาตรฐาน ข้อกำหนด หรือเป้าหมายที่องค์กรต้องการ (Desired State) เพื่อระบุช่องว่างและจัดทำแผนปรับปรุง',
    usageContextTh:
      'มักทำก่อนเริ่มโครงการยกระดับความปลอดภัย หรือก่อนเข้ารับการตรวจรับรองมาตรฐาน เช่น ISO 27001, PCI DSS หรือ NIST CSF',
    relatedLessonIds: ['L1-02']
  },
  {
    id: 'g-zero-trust',
    termEn: 'Zero Trust Architecture',
    acronym: 'ZTA',
    fullNameEn: 'Zero Trust Architecture',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    explanationTh:
      'สถาปัตยกรรมความปลอดภัยที่ยึดหลัก "Never Trust, Always Verify" โดยไม่ให้ความไว้วางใจโดยอัตโนมัติเพียงเพราะผู้ใช้อยู่ภายในเครือข่ายองค์กร แต่ตรวจสอบตัวตน อุปกรณ์ และบริบททุกคำขอเข้าถึง และแบ่งระบบเป็น Control Plane กับ Data Plane',
    usageContextTh:
      'ใน SY0-701 ต้องแยกองค์ประกอบได้: Control Plane มี Adaptive Identity, Policy Engine, Policy Administrator ส่วน Data Plane มี PEP และ Implicit Trust Zones',
    relatedLessonIds: ['L1-03']
  },
  {
    id: 'g-policy-engine',
    termEn: 'Policy Engine',
    acronym: 'PE',
    fullNameEn: 'Zero Trust Policy Engine',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    explanationTh:
      'องค์ประกอบหลักใน Control Plane ของสถาปัตยกรรม Zero Trust ที่ทำหน้าที่ประเมินความเสี่ยง บริบทของตัวตน สุขภาพอุปกรณ์ และนโยบายองค์กร เพื่อตัดสินใจขั้นสุดท้ายว่าจะอนุญาต ปฏิเสธ หรือเพิกถอนสิทธิ์การเข้าถึงทรัพยากร',
    usageContextTh:
      'ทำงานคู่กับ Policy Administrator โดย PE เป็นผู้ "คิดและตัดสินใจ" ตามข้อมูล Threat Intelligence และ Identity Signals ก่อนส่งคำสั่งให้ PA ดำเนินการ',
    relatedLessonIds: ['L1-03']
  },
  {
    id: 'g-policy-administrator',
    termEn: 'Policy Administrator',
    acronym: 'PA',
    fullNameEn: 'Zero Trust Policy Administrator',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    explanationTh:
      'องค์ประกอบใน Control Plane ของ Zero Trust ที่รับคำตัดสินใจจาก Policy Engine แล้วทำหน้าที่สร้าง ปรับเปลี่ยน หรือตัดการเชื่อมต่อและออก Session Token ชั่วคราวโดยสื่อสารสั่งการไปยัง Policy Enforcement Point (PEP)',
    usageContextTh:
      'จำความแตกต่าง: PE คือ "สมองตัดสินใจ", PA คือ "ผู้สั่งเปิด/ปิดช่องทางและจัดการเซสชัน" ทั้งคู่อยู่ใน Control Plane และไม่รับส่งข้อมูลธุรกิจโดยตรง',
    relatedLessonIds: ['L1-03']
  },
  {
    id: 'g-policy-enforcement-point',
    termEn: 'Policy Enforcement Point',
    acronym: 'PEP',
    fullNameEn: 'Zero Trust Policy Enforcement Point',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    explanationTh:
      'องค์ประกอบใน Data Plane ของ Zero Trust ที่ตั้งอยู่บนเส้นทางการรับส่งข้อมูลจริงระหว่าง Subject กับทรัพยากร ทำหน้าที่เปิด ตรวจสอบ และยุติการเชื่อมต่อตามคำสั่งจาก Policy Administrator',
    usageContextTh:
      'เป็นจุดดักตรวจและบังคับใช้จริง เช่น Gateway, Reverse Proxy หรือ Micro-segmentation Agent ข้อสอบมักลวงว่า PEP อยู่ใน Control Plane แต่ความจริงอยู่ใน Data Plane',
    relatedLessonIds: ['L1-03']
  },
  {
    id: 'g-access-control-vestibule',
    termEn: 'Access Control Vestibule',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    explanationTh:
      'โถงทางเข้าควบคุมการผ่านเข้าออกแบบสองประตู (เดิมเรียกว่า Mantrap) ที่ประตูชั้นที่สองจะไม่สามารถเปิดได้จนกว่าประตูชั้นแรกจะปิดล็อกสนิท เพื่อจำกัดการเข้าพื้นที่หวงห้ามทีละคนหรือทีละกลุ่มที่ได้รับอนุญาต',
    usageContextTh:
      'ใช้ป้องกันการลักลอบเดินตามหลังผู้มีสิทธิ์ (Tailgating / Piggybacking) หน้าทางเข้าศูนย์ข้อมูลหรือห้องเซิร์ฟเวอร์ที่มีความมั่นคงสูง',
    relatedLessonIds: ['L1-03']
  },
  {
    id: 'g-bollards',
    termEn: 'Bollards',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    explanationTh:
      'เสากั้นเหล็กหรือคอนกรีตเสริมความแข็งแรงที่ฝังยึดรอบอาคารหรือด้านหน้าทางเข้า เพื่อป้องกันยานพาหนะพุ่งชนเข้าสู่อาคารหรือโครงสร้างสำคัญ จัดเป็น Physical Preventive Control',
    usageContextTh:
      'ต่างจากรั้วทั่วไปหรือไฟส่องสว่างตรงที่สามารถหยุดแรงปะทะของยานพาหนะได้จริง มักใช้รอบ Data Center และอาคารรัฐบาล',
    relatedLessonIds: ['L1-01', 'L1-03']
  },
  {
    id: 'g-honeypot-honeynet',
    termEn: 'Honeypot & Honeynet',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    explanationTh:
      'เทคโนโลยีลวง (Deception Technology) ที่จำลองระบบหรือเซิร์ฟเวอร์ที่มีช่องโหว่หลอกล่อผู้โจมตี (Honeypot) หรือเชื่อมโยงหลายเครื่องเป็นเครือข่ายจำลองทั้งระบบ (Honeynet) เพื่อเบี่ยงเบนความสนใจและเก็บข้อมูลพฤติกรรมการโจมตี',
    usageContextTh:
      'ช่วยตรวจจับผู้บุกรุกที่หลุดเข้ามาในเครือข่ายภายในได้เร็วและแทบไม่มี False Positive เพราะผู้ใช้งานปกติไม่ควรมีเหตุให้เชื่อมต่อเข้ามา',
    relatedLessonIds: ['L1-03']
  },
  {
    id: 'g-honeytoken-honeyfile',
    termEn: 'Honeytoken & Honeyfile',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    explanationTh:
      'ข้อมูลหลอก (Honeytoken เช่น บัญชีผู้ใช้ปลอม API Key ปลอม หรือเรคคอร์ดฐานข้อมูลหลอก) และไฟล์ล่อ (Honeyfile เช่น เอกสารชื่อ "Passwords.xlsx" ที่ฝังการแจ้งเตือน) เพื่อตรวจจับการเข้าถึงข้อมูลโดยไม่ได้รับอนุญาต',
    usageContextTh:
      'ใช้ตรวจสอบ Insider Threat หรือผู้โจมตีที่กำลังค้นหาข้อมูลสำคัญภายในระบบ (Lateral Movement / Discovery) โดยส่ง Alert ทันทีเมื่อถูกเปิดหรือใช้งาน',
    relatedLessonIds: ['L1-03']
  },
  {
    id: 'g-change-management',
    termEn: 'Change Management',
    domainId: 'D1',
    objectiveIds: ['1.3'],
    explanationTh:
      'กระบวนการควบคุมการเปลี่ยนแปลงระบบ ตั้งแต่การขออนุมัติ (Approval), การประเมินผลกระทบ (Impact Analysis), การทดสอบ, การกำหนดเจ้าของงาน (Ownership) และผู้เกี่ยวข้อง (Stakeholders) เพื่อป้องกันช่องโหว่และความล่มของระบบจากการแก้ไขโดยพลการ',
    usageContextTh:
      'ครอบคลุมถึงการอัปเดต Allow/Deny Lists, การประเมิน Legacy Dependencies และการปรับปรุงแผนภาพสถาปัตยกรรมและเอกสารนโยบายหลังเปลี่ยนแปลงเสร็จสิ้น',
    relatedLessonIds: ['L1-04']
  },
  {
    id: 'g-backout-plan',
    termEn: 'Backout Plan',
    domainId: 'D1',
    objectiveIds: ['1.3'],
    explanationTh:
      'แผนย้อนกลับ (Rollback Plan) ที่เตรียมขั้นตอนทางเทคนิคไว้ล่วงหน้าในคำขอเปลี่ยนแปลงระบบ เพื่อให้สามารถคืนค่าการตั้งค่าหรือซอฟต์แวร์กลับสู่สภาพเดิมก่อนแก้ไขได้อย่างรวดเร็วหากการเปลี่ยนแปลงเกิดข้อผิดพลาด',
    usageContextTh:
      'เป็นองค์ประกอบบังคับก่อนอนุมัติ Change Request โดยเฉพาะการอัปเดต Firewall Rules, Firmware หรือแพตช์ระบบสำคัญใน Maintenance Window',
    relatedLessonIds: ['L1-04']
  },
  {
    id: 'g-maintenance-window',
    termEn: 'Maintenance Window',
    domainId: 'D1',
    objectiveIds: ['1.3'],
    explanationTh:
      'ช่วงเวลาที่กำหนดและแจ้งเตือนผู้เกี่ยวข้องไว้ล่วงหน้าเพื่อดำเนินการบำรุงรักษา อัปเดตแพตช์ หรือรีสตาร์ตบริการที่อาจก่อให้เกิด Downtime โดยเลือกช่วงที่มีผลกระทบต่อผู้ใช้งานทางธุรกิจน้อยที่สุด',
    usageContextTh:
      'ช่วยให้ทีมเทคนิคทำ Service/Application Restart ได้ตามแผน Change Management โดยไม่กระทบ SLA ช่วงเวลาทำการปกติ',
    relatedLessonIds: ['L1-04']
  },
  {
    id: 'g-sop',
    termEn: 'Standard Operating Procedure',
    acronym: 'SOP',
    fullNameEn: 'Standard Operating Procedure',
    domainId: 'D1',
    objectiveIds: ['1.3'],
    explanationTh:
      'คู่มือขั้นตอนการปฏิบัติงานมาตรฐานที่เขียนเป็นลำดับชัดเจนเพื่อให้เจ้าหน้าที่ปฏิบัติงานซ้ำ ๆ ได้อย่างสม่ำเสมอ ถูกต้องตามมาตรฐานความปลอดภัย และลดความผิดพลาดจากมนุษย์',
    usageContextTh:
      'ใช้ในกระบวนการ Change Management, การสร้าง/ปิดบัญชีผู้ใช้ และขั้นตอนตอบสนองเหตุการณ์ประจำวันของทีม IT และ SOC',
    relatedLessonIds: ['L1-04', 'L5-01']
  },
  {
    id: 'g-version-control',
    termEn: 'Version Control',
    domainId: 'D1',
    objectiveIds: ['1.3'],
    explanationTh:
      'ระบบติดตามและจัดเก็บรุ่นของโค้ด ไฟล์การตั้งค่า (Configuration) และเอกสารนโยบาย เพื่อดูประวัติว่าใครแก้ไขอะไร เมื่อใด และสามารถย้อนกลับไปใช้รุ่นก่อนหน้าที่มีเสถียรภาพได้ทันที',
    usageContextTh:
      'จำเป็นอย่างยิ่งใน Infrastructure as Code (IaC), สคริปต์ Automation และเอกสาร Security Policies เพื่อให้ตรวจสอบย้อนกลับได้ตลอดวงจรการเปลี่ยนแปลง',
    relatedLessonIds: ['L1-04', 'L3-01']
  },
  {
    id: 'g-pki',
    termEn: 'Public Key Infrastructure',
    acronym: 'PKI',
    fullNameEn: 'Public Key Infrastructure',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    explanationTh:
      'โครงสร้างพื้นฐานด้านนโยบาย ฮาร์ดแวร์ ซอฟต์แวร์ และกระบวนการที่ใช้สร้าง จัดการ แจกจ่าย จัดเก็บ และเพิกถอนใบรับรองดิจิทัล รวมถึงคู่กุญแจ Public Key และ Private Key เพื่อยืนยันความน่าเชื่อถือบนเครือข่าย',
    usageContextTh:
      'เป็นรากฐานของ HTTPS/TLS, การลงนามดิจิทัล, อีเมลเข้ารหัส (S/MIME) และระบบยืนยันตัวตนด้วย Certificate เช่น 802.1X EAP-TLS',
    relatedLessonIds: ['L1-06']
  },
  {
    id: 'g-tpm',
    termEn: 'Trusted Platform Module',
    acronym: 'TPM',
    fullNameEn: 'Trusted Platform Module',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    explanationTh:
      'ไมโครชิปเข้ารหัสเฉพาะทางที่ฝังอยู่บนเมนบอร์ดของอุปกรณ์ปลายทางหรือเซิร์ฟเวอร์ ใช้สร้างและจัดเก็บคีย์เข้ารหัสอย่างปลอดภัย รวมถึงตรวจสอบความสมบูรณ์ของการบูตระบบ (Measured Boot) เพื่อป้องกันการดัดแปลงเฟิร์มแวร์',
    usageContextTh:
      'ใช้ร่วมกับ Full-Disk Encryption (เช่น BitLocker) โดยคีย์จะผูกติดกับฮาร์ดแวร์เครื่องนั้น ต่างจาก HSM ที่เป็นอุปกรณ์เครือข่ายจัดการคีย์ระดับองค์กร',
    relatedLessonIds: ['L1-06', 'L4-01']
  },
  {
    id: 'g-hsm',
    termEn: 'Hardware Security Module',
    acronym: 'HSM',
    fullNameEn: 'Hardware Security Module',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    explanationTh:
      'อุปกรณ์ฮาร์ดแวร์เฉพาะทางที่มีเกราะป้องกันการงัดแงะ (Tamper-resistant) สำหรับสร้าง จัดเก็บ และประมวลผลคีย์เข้ารหัสระดับสูง รวมถึงเร่งความเร็วการเข้ารหัสในระดับองค์กรและศูนย์ข้อมูล',
    usageContextTh:
      'นิยมใช้เก็บ Root CA Private Key หรือคีย์สำคัญของระบบธนาคารและ Payment Processing โดยมีระดับความปลอดภัยและกำลังประมวลผลสูงกว่า TPM บนเครื่องทั่วไป',
    relatedLessonIds: ['L1-06']
  },
  {
    id: 'g-kms',
    termEn: 'Key Management System',
    acronym: 'KMS',
    fullNameEn: 'Key Management System',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    explanationTh:
      'ระบบบริหารจัดการวงจรชีวิตของคีย์เข้ารหัสแบบรวมศูนย์ ตั้งแต่การสร้าง การหมุนเวียนเปลี่ยนคีย์อัตโนมัติ (Key Rotation) การกำหนดสิทธิ์ใช้งาน การจัดเก็บ และการทำลายคีย์เมื่อหมดอายุ',
    usageContextTh:
      'พบมากในระบบคลาวด์และฐานข้อมูลองค์กร เพื่อควบคุมว่าแอปพลิเคชันหรือบริการใดใช้คีย์เข้ารหัสข้อมูลได้บ้างโดยไม่ฝังคีย์ไว้ในซอร์สโค้ด',
    relatedLessonIds: ['L1-06', 'L3-06']
  },
  {
    id: 'g-ca',
    termEn: 'Certificate Authority',
    acronym: 'CA',
    fullNameEn: 'Certificate Authority',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    explanationTh:
      'องค์กรหรือระบบที่ทำหน้าที่เป็นบุคคลที่สามที่เชื่อถือได้ (Root of Trust) ในการตรวจสอบตัวตน ออกใบรับรองดิจิทัล ลงนามรับรองความถูกต้อง และเพิกถอนใบรับรองเมื่อคีย์รั่วไหลหรือหมดความน่าเชื่อถือ',
    usageContextTh:
      'แบ่งเป็น Public Third-party CA (สำหรับเว็บสาธารณะ) และ Internal Enterprise CA (สำหรับอุปกรณ์และแอปภายในองค์กร)',
    relatedLessonIds: ['L1-06']
  },
  {
    id: 'g-crl',
    termEn: 'Certificate Revocation List',
    acronym: 'CRL',
    fullNameEn: 'Certificate Revocation List',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    explanationTh:
      'ไฟล์รายการหมายเลขซีเรียลของใบรับรองดิจิทัลที่ถูกเพิกถอนก่อนวันหมดอายุ ซึ่ง CA เผยแพร่เป็นระยะเพื่อให้เครื่องลูกข่ายดาวน์โหลดมาตรวจสอบ ต่างจาก OCSP ที่สอบถามสถานะแบบรายใบแบบเรียลไทม์',
    usageContextTh:
      'ข้อจำกัดของ CRL คือไฟล์อาจมีขนาดใหญ่และมีช่วงเวลาหน่วงก่อนที่เครื่องลูกข่ายจะอัปเดตรายการใหม่ ทำให้มีความเสี่ยงช่วงรอยต่อหลังการเพิกถอน',
    relatedLessonIds: ['L1-06']
  },
  {
    id: 'g-ocsp',
    termEn: 'Online Certificate Status Protocol',
    acronym: 'OCSP',
    fullNameEn: 'Online Certificate Status Protocol',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    explanationTh:
      'โปรโตคอลตรวจสอบสถานะการเพิกถอนใบรับรองดิจิทัลแบบเรียลไทม์ โดยส่งคำถามเจาะจงไปยัง OCSP Responder ของ CA เพื่อรับคำตอบทันทีว่าใบรับรองยังใช้งานได้ (Good), ถูกเพิกถอน (Revoked) หรือไม่ทราบสถานะ',
    usageContextTh:
      'รวดเร็วและเป็นปัจจุบันกว่า CRL และมีเทคนิค OCSP Stapling ที่ให้ Web Server แนบหลักฐานสถานะที่ CA เซ็นรับรองมาพร้อม TLS Handshake เพื่อลดภาระและรักษาความเป็นส่วนตัว',
    relatedLessonIds: ['L1-06']
  },
  {
    id: 'g-csr',
    termEn: 'Certificate Signing Request',
    acronym: 'CSR',
    fullNameEn: 'Certificate Signing Request',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    explanationTh:
      'ไฟล์คำขอออกใบรับรองดิจิทัลที่ผู้ขอสร้างขึ้นเพื่อส่งให้ CA ลงนาม ภายในประกอบด้วย Public Key และข้อมูลตัวตนของเซิร์ฟเวอร์หรือองค์กร (เช่น Common Name / SAN) โดยที่ Private Key จะถูกเก็บไว้กับผู้ขอเสมอและไม่ส่งออกไป',
    usageContextTh:
      'เป็นขั้นตอนมาตรฐานเมื่อผู้ดูแลระบบต้องการขอ Third-party SSL/TLS Certificate หรือ Wildcard Certificate ให้เว็บเซิร์ฟเวอร์ใหม่',
    relatedLessonIds: ['L1-06']
  },
  {
    id: 'g-key-escrow',
    termEn: 'Key Escrow',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    explanationTh:
      'การจัดเก็บสำเนาของกุญแจถอดรหัสไว้กับบุคคลที่สามหรือคลังที่เชื่อถือได้ภายใต้การควบคุมสิทธิ์อย่างเข้มงวด เพื่อให้องค์กรสามารถกู้คืนข้อมูลที่เข้ารหัสไว้ได้หากพนักงานผู้ถือคีย์ลาออกหรือทำคีย์สูญหาย',
    usageContextTh:
      'นิยมใช้กับการเข้ารหัสไฟล์ อีเมลองค์กร และ Disk Encryption เพื่อป้องกันข้อมูลทางธุรกิจสูญหายถาวรเมื่อเจ้าของบัญชีไม่อยู่ปฏิบัติงาน',
    relatedLessonIds: ['L1-06']
  },
  {
    id: 'g-digital-signature',
    termEn: 'Digital Signature',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    explanationTh:
      'กลไกการเข้ารหัสแบบ Asymmetric ที่ผู้ส่งสร้างค่า Hash ของข้อมูลแล้วเข้ารหัสค่า Hash นั้นด้วย Private Key ของตนเอง เพื่อให้ผู้รับใช้ Public Key ถอดรหัสและเปรียบเทียบค่า Hash ยืนยันทั้ง Integrity, Authentication และ Non-repudiation',
    usageContextTh:
      'ต่างจากการเข้ารหัสเพื่อความลับ (Confidentiality) ที่ใช้ Public Key ของผู้รับเข้ารหัส; ลายเซ็นดิจิทัลใช้ Private Key ของผู้ส่งในการลงนาม',
    relatedLessonIds: ['L1-05', 'L1-02']
  },
  {
    id: 'g-salting-key-stretching',
    termEn: 'Salting & Key Stretching',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    explanationTh:
      'Salting คือการเติมข้อมูลสุ่มเฉพาะแต่ละบัญชีต่อท้ายรหัสผ่านก่อนนำไป Hash เพื่อป้องกันการใช้ Rainbow Table ส่วน Key Stretching (เช่น PBKDF2, bcrypt, Argon2) คือการคำนวณซ้ำหลายรอบเพื่อชะลอความเร็วในการเดารหัสผ่านแบบ Brute Force',
    usageContextTh:
      'เป็นมาตรฐานการจัดเก็บรหัสผ่านในฐานข้อมูลอย่างปลอดภัย ห้ามเก็บรหัสผ่านแบบ Plaintext หรือใช้ Fast Hash เพียงอย่างเดียวโดยไม่ใส่ Salt',
    relatedLessonIds: ['L1-05', 'L4-08']
  },
  {
    id: 'g-steganography',
    termEn: 'Steganography',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    explanationTh:
      'เทคนิคการซ่อนข้อมูลลับไว้ภายในไฟล์สื่ออื่นที่ดูปกติ เช่น รูปภาพ ไฟล์เสียง หรือวิดีโอ เพื่ออำพรางไม่ให้ผู้อื่นสังเกตเห็นว่ามีการสื่อสารข้อมูลลับเกิดขึ้น ต่างจาก Cryptography ที่แปลงข้อความให้อ่านไม่ออกแต่เห็นชัดเจนว่าถูกเข้ารหัส',
    usageContextTh:
      'ในทางป้องกันอาจพบผู้ไม่หวังดีซ่อนข้อมูลองค์กรเพื่อลักลอบนำออก (Exfiltration) หรือซ่อนคำสั่งมัลแวร์ในไฟล์ภาพ จึงจัดเป็นภัยคุกคาม Image-based Vector ด้วย',
    relatedLessonIds: ['L1-06', 'L2-02']
  },
  {
    id: 'g-tokenization',
    termEn: 'Tokenization',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    explanationTh:
      'การแทนที่ข้อมูลอ่อนไหว (เช่น หมายเลขบัตรเครดิต) ด้วยค่าตัวแทนสุ่ม (Token) ที่ไม่มีความหมายทางคณิตศาสตร์ในตัวเอง โดยเก็บตารางจับคู่จริงไว้ในคลังข้อมูลปลอดภัย (Token Vault) ต่างจาก Encryption ที่ใช้คีย์ถอดรหัสย้อนกลับจากข้อมูลเดิมได้',
    usageContextTh:
      'นิยมใช้อย่างแพร่หลายเพื่อลดขอบเขตการตรวจสอบตามมาตรฐาน PCI DSS เพราะระบบส่วนหน้าไม่ได้จัดเก็บเลขบัตรจริงไว้ในฐานข้อมูล',
    relatedLessonIds: ['L1-06', 'L3-06']
  },
  {
    id: 'g-data-masking',
    termEn: 'Data Masking',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    explanationTh:
      'เทคนิคการปกปิดบางส่วนหรือปรับเปลี่ยนรูปแบบข้อมูลอ่อนไหวให้แสดงผลไม่ครบถ้วน (เช่น แสดงเฉพาะ 4 หลักท้ายของเลขบัตรประชาชนหรือเบอร์โทรศัพท์) เพื่อให้ใช้งานในสภาพแวดล้อมทดสอบหรือหน้าจอเจ้าหน้าที่บริการลูกค้าได้อย่างปลอดภัย',
    usageContextTh:
      'มักใช้กับฐานข้อมูลสำหรับทีมพัฒนา/QA (Static Masking) หรือปกปิดบนหน้าจอตามสิทธิ์ผู้ใช้แบบเรียลไทม์ (Dynamic Masking)',
    relatedLessonIds: ['L1-06', 'L3-06']
  },
  {
    id: 'g-symmetric-asymmetric',
    termEn: 'Symmetric vs. Asymmetric Encryption',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    explanationTh:
      'Symmetric ใช้คีย์เดียวกันทั้งเข้ารหัสและถอดรหัส (เช่น AES) ทำงานเร็วมากเหมาะกับข้อมูลปริมาณมากแต่แลกเปลี่ยนคีย์ยาก ส่วน Asymmetric ใช้คู่คีย์ Public/Private (เช่น RSA, ECC) แก้ปัญหาการแลกเปลี่ยนคีย์และทำ Digital Signature ได้ แต่ช้ากว่ามาก',
    usageContextTh:
      'ในระบบจริงมักใช้แบบผสม (Hybrid): ใช้ Asymmetric แลกเปลี่ยน Session Key ชั่วคราว แล้วใช้ Symmetric เข้ารหัสทราฟฟิกข้อมูลต่อเนื่อง เช่น ในโปรโตคอล TLS',
    relatedLessonIds: ['L1-05']
  },

  // ===========================================================================
  // Domain 2.0 — Threats, Vulnerabilities, and Mitigations (2.1 – 2.5)
  // ===========================================================================
  {
    id: 'g-nation-state',
    termEn: 'Nation-State Threat Actor',
    domainId: 'D2',
    objectiveIds: ['2.1'],
    explanationTh:
      'กลุ่มผู้โจมตีที่ได้รับการสนับสนุนด้านงบประมาณ ทรัพยากร และข่าวกรองจากรัฐบาลหรือหน่วยงานรัฐ มีความสามารถทางเทคนิคขั้นสูง อดทนแฝงตัวระยะยาว และมักมุ่งเป้าไปที่การจารกรรมข้อมูล (Espionage), โครงสร้างพื้นฐานสำคัญ หรือปฏิบัติการทางไซเบอร์',
    usageContextTh:
      'ต่างจาก Organized Crime ที่เน้นผลประโยชน์ทางการเงินเป็นหลัก และต่างจาก Unskilled Attacker ที่อาศัยเครื่องมือสำเร็จรูปทั่วไป',
    relatedLessonIds: ['L2-01']
  },
  {
    id: 'g-insider-threat',
    termEn: 'Insider Threat',
    domainId: 'D2',
    objectiveIds: ['2.1'],
    explanationTh:
      'ภัยคุกคามจากบุคคลภายในองค์กรที่มีสิทธิ์เข้าถึงระบบและข้อมูลอย่างถูกต้อง เช่น พนักงานปัจจุบัน อดีตพนักงานที่ยังไม่ได้ถอนสิทธิ์ หรือผู้รับเหมา โดยอาจเกิดจากเจตนาร้าย (แก้แค้น/ขายข้อมูล) หรือความประมาทเลินเล่อโดยไม่ตั้งใจ',
    usageContextTh:
      'ตรวจจับได้ยากกว่าผู้โจมตีภายนอกเพราะมีสิทธิ์ใช้งานจริง จึงต้องอาศัย Least Privilege, Separation of Duties, DLP, UBA และกระบวนการ Offboarding ที่เข้มงวด',
    relatedLessonIds: ['L2-01', 'L4-07']
  },
  {
    id: 'g-hacktivist',
    termEn: 'Hacktivist',
    domainId: 'D2',
    objectiveIds: ['2.1'],
    explanationTh:
      'ผู้โจมตีที่มีแรงจูงใจจากอุดมการณ์ทางการเมือง สังคม สิ่งแวดล้อม หรือความเชื่อเชิงปรัชญา มักก่อเหตุเพื่อเรียกร้องความสนใจ ประท้วง หรือสร้างความอับอายต่อองค์กร เช่น การแก้ไขหน้าเว็บไซต์ (Defacement) หรือ DDoS',
    usageContextTh:
      'ข้อสอบจะระบุแรงจูงใจด้าน Political/Philosophical Beliefs หรือความขัดแย้งทางสังคม ซึ่งเป็นจุดแยกชัดเจนจาก Organized Crime ที่ทำเพื่อเงิน',
    relatedLessonIds: ['L2-01']
  },
  {
    id: 'g-shadow-it',
    termEn: 'Shadow IT',
    domainId: 'D2',
    objectiveIds: ['2.1'],
    explanationTh:
      'การใช้งานระบบ ซอฟต์แวร์ บริการคลาวด์ หรืออุปกรณ์ไอทีภายในองค์กรโดยไม่ได้รับอนุญาตหรือไม่ได้ผ่านการตรวจสอบและอนุมัติจากฝ่ายไอทีและทีมความปลอดภัย',
    usageContextTh:
      'แม้พนักงานมักทำเพื่อความสะดวกในการทำงาน (ไม่ใช่เจตนาทำลาย) แต่ใน SY0-701 จัดเป็นกลุ่ม Threat Actor ประเภทหนึ่งเพราะสร้าง Blind Spot และช่องโหว่ที่องค์กรไม่รู้ตัว',
    relatedLessonIds: ['L2-01', 'L4-03']
  },
  {
    id: 'g-organized-crime',
    termEn: 'Organized Crime',
    domainId: 'D2',
    objectiveIds: ['2.1'],
    explanationTh:
      'กลุ่มอาชญากรรมไซเบอร์ที่ทำงานเป็นเครือข่ายอย่างเป็นระบบและมีเงินทุนสูง มีเป้าหมายหลักเพื่อแสวงหาผลประโยชน์ทางการเงินและการกรรโชกทรัพย์ (Blackmail) เช่น การปล่อย Ransomware หรือการขโมยข้อมูลบัตรเครดิตไปขาย',
    usageContextTh:
      'แยกจาก Nation-State ด้วยแรงจูงใจทางการเงินเป็นหลัก แม้จะมีเครื่องมือซับซ้อนและทำงานร่วมกันเป็นขบวนการระดับสากลเหมือนกัน',
    relatedLessonIds: ['L2-01']
  },
  {
    id: 'g-threat-vector-attack-surface',
    termEn: 'Threat Vector vs. Attack Surface',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    explanationTh:
      'Threat Vector คือเส้นทางหรือวิธีการที่ผู้โจมตีใช้เข้าสู่ระบบ (เช่น อีเมล Phishing, USB, Open Ports, Voice Call) ส่วน Attack Surface คือจุดเปิดรับความเสี่ยงทั้งหมดของระบบที่ผู้โจมตีอาจเข้าถึงได้ (เช่น บัญชี Default Credentials, API ที่เปิดสาธารณะ)',
    usageContextTh:
      'การลด Attack Surface เช่น การปิดพอร์ตและบริการที่ไม่จำเป็น จะช่วยตัดโอกาสที่ Threat Vector ต่าง ๆ จะโจมตีสำเร็จ',
    relatedLessonIds: ['L2-02', 'L2-09']
  },
  {
    id: 'g-bec',
    termEn: 'Business Email Compromise',
    acronym: 'BEC',
    fullNameEn: 'Business Email Compromise',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    explanationTh:
      'การโจมตีทางอีเมลที่ผู้โจมตีแอบอ้างหรือเจาะบัญชีอีเมลจริงของผู้บริหาร คู่ค้า หรือฝ่ายบัญชี แล้วหลอกสั่งให้พนักงานโอนเงิน เปลี่ยนเลขบัญชีคู่ค้า หรือส่งข้อมูลสำคัญ โดยมักใช้วิธี Social Engineering สร้างความเร่งด่วนและอำนาจสั่งการ',
    usageContextTh:
      'ป้องกันทั้งเชิงเทคนิค (SPF/DKIM/DMARC และ MFA) และเชิงกระบวนการ (Out-of-Band Verification โทรศัพท์ยืนยันคำสั่งโอนเงินก่อนดำเนินการ)',
    relatedLessonIds: ['L2-03', 'L4-06']
  },
  {
    id: 'g-phishing-vishing-smishing',
    termEn: 'Phishing, Vishing & Smishing',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    explanationTh:
      'รูปแบบการหลอกลวงเหยื่อตามช่องทางสื่อสาร: Phishing ใช้อีเมลเป็นสื่อหลัก, Vishing ใช้การโทรศัพท์ด้วยเสียง (Voice Call) และ Smishing ใช้ข้อความสั้นทางโทรศัพท์ (SMS) เพื่อลวงให้เปิดเผยรหัสผ่าน ข้อมูลส่วนตัว หรือกดลิงก์อันตราย',
    usageContextTh:
      'ข้อสอบจะระบุช่องทางที่ใช้ติดต่อเหยื่ออย่างชัดเจน หากเป็นสายโทรศัพท์ปลอมเป็นฝ่ายไอทีหรือธนาคารให้เลือก Vishing หากเป็น SMS แจ้งพัสดุให้เลือก Smishing',
    relatedLessonIds: ['L2-03']
  },
  {
    id: 'g-pretexting',
    termEn: 'Pretexting',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    explanationTh:
      'เทคนิค Social Engineering ที่ผู้โจมตีสร้างเรื่องราว บทบาทสมมติ หรือสถานการณ์ที่น่าเชื่อถือขึ้นมาล่วงหน้า (เช่น อ้างว่าเป็นผู้ตรวจสอบบัญชีหรือช่างซ่อมบำรุง) เพื่อสร้างความไว้วางใจและหลอกถามข้อมูลหรือขอสิทธิ์เข้าถึงจากเหยื่อ',
    usageContextTh:
      'มักใช้ร่วมกับ Vishing หรือการเข้าพื้นที่ทางกายภาพ (Impersonation) เพื่อลดความระแวงของพนักงานก่อนขอข้อมูลสำคัญ',
    relatedLessonIds: ['L2-03']
  },
  {
    id: 'g-watering-hole',
    termEn: 'Watering Hole Attack',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    explanationTh:
      'การโจมตีที่ผู้บุกรุกวิเคราะห์ว่ากลุ่มเป้าหมายนิยมเข้าใช้งานเว็บไซต์หรือคอมมูนิตีใดเป็นประจำ แล้วเข้าไปแทรกซึมและฝังมัลแวร์ไว้บนเว็บไซต์จริงเหล่านั้นเพื่อรอให้เหยื่อติดกับเมื่อเข้ามาใช้งาน',
    usageContextTh:
      'ต่างจาก Typosquatting ที่สร้างเว็บไซต์ปลอมชื่อคล้ายขึ้นมาใหม่ เพราะ Watering Hole โจมตีและใช้เว็บไซต์จริงที่เหยื่อไว้ใจอยู่แล้ว',
    relatedLessonIds: ['L2-03']
  },
  {
    id: 'g-typosquatting',
    termEn: 'Typosquatting',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    explanationTh:
      'การจดทะเบียนชื่อโดเมนที่สะกดผิดเล็กน้อยหรือใช้อักษรที่หน้าตาคล้ายคลึงกับโดเมนขององค์กรจริง เพื่อดักรอผู้ใช้งานที่พิมพ์ URL ผิดหรือคลิกลิงก์หลอกลวงให้เข้าไปกรอกรหัสผ่านบนหน้าเว็บปลอม (Brand Impersonation)',
    usageContextTh:
      'เป็นสัญญาณเตือนสำคัญใน Phishing และภัยคุกคามต่อแบรนด์ มักลดความเสี่ยงด้วยการแจ้งเตือนอีเมลภายนอกและใช้ DNS/Web Filtering',
    relatedLessonIds: ['L2-03', 'L4-06']
  },
  {
    id: 'g-supply-chain-attack',
    termEn: 'Supply Chain Attack',
    domainId: 'D2',
    objectiveIds: ['2.2', '2.3'],
    explanationTh:
      'การโจมตีองค์กรเป้าหมายทางอ้อมผ่านผู้ให้บริการภายนอกที่มีความเชื่อมโยงหรือสิทธิ์เข้าถึงระบบ เช่น Managed Service Providers (MSPs), ผู้พัฒนาซอฟต์แวร์ (Malicious Update) หรือผู้ผลิตฮาร์ดแวร์และซัพพลายเออร์',
    usageContextTh:
      'สร้างผลกระทบเป็นวงกว้างเพราะลูกค้าหลายรายไว้วางใจอัปเดตหรือการเชื่อมต่อจากซัพพลายเออร์เดียวกัน จึงต้องมี Third-Party Risk Assessment และตรวจสอบความสมบูรณ์ของแพ็กเกจ',
    relatedLessonIds: ['L2-02', 'L2-05', 'L5-04']
  },
  {
    id: 'g-sqli',
    termEn: 'SQL Injection',
    acronym: 'SQLi',
    fullNameEn: 'Structured Query Language Injection',
    domainId: 'D2',
    objectiveIds: ['2.3', '2.4'],
    explanationTh:
      'ช่องโหว่เว็บแอปพลิเคชันที่เกิดจากการนำข้อมูลจากผู้ใช้ไปต่อเป็นคำสั่งฐานข้อมูลโดยตรงโดยไม่ตรวจสอบหรือแยกโครงสร้างคำสั่งออกจากข้อมูล ทำให้ผู้โจมตีแทรกตรรกะเพื่อให้ระบบดึง แก้ไข หรือลบข้อมูลในฐานข้อมูลโดยไม่ได้รับอนุญาต',
    usageContextTh:
      'แนวทางแก้ไขหลักที่ระดับโค้ดคือ Parameterized Queries (Prepared Statements) และการจำกัดสิทธิ์บัญชีฐานข้อมูล (Least Privilege) พร้อมเสริม WAF เป็นเกราะป้องกันชั้นหน้า',
    relatedLessonIds: ['L2-04', 'L2-08']
  },
  {
    id: 'g-xss',
    termEn: 'Cross-Site Scripting',
    acronym: 'XSS',
    fullNameEn: 'Cross-Site Scripting',
    domainId: 'D2',
    objectiveIds: ['2.3', '2.4'],
    explanationTh:
      'ช่องโหว่เว็บแอปพลิเคชันที่เกิดจากการแสดงผลข้อมูลจากผู้ใช้บนหน้าเว็บโดยไม่ทำ Output Encoding หรือ Sanitization ทำให้สคริปต์ฝั่งเบราว์เซอร์ทำงานบนเครื่องของผู้ใช้งานคนอื่นได้ แบ่งหลัก ๆ เป็น Stored XSS (ฝังในฐานข้อมูล) และ Reflected XSS (สะท้อนผ่านลิงก์)',
    usageContextTh:
      'ต่างจาก SQLi ที่โจมตีฐานข้อมูลฝั่งเซิร์ฟเวอร์ เพราะ XSS มุ่งโจมตีเบราว์เซอร์ของผู้ใช้งาน เพื่อขโมย Session Cookie หรือสวมรอยทำรายการบนหน้าเว็บ ป้องกันด้วย Output Encoding และ Content Security Policy (CSP)',
    relatedLessonIds: ['L2-04', 'L2-08']
  },
  {
    id: 'g-toc-tou',
    termEn: 'Race Condition (TOC/TOU)',
    acronym: 'TOC/TOU',
    fullNameEn: 'Time-of-Check to Time-of-Use',
    domainId: 'D2',
    objectiveIds: ['2.3'],
    explanationTh:
      'ช่องโหว่สภาวะการแข่งขัน (Race Condition) ที่เกิดจากช่องว่างเวลาระหว่างขั้นตอนการตรวจสอบสิทธิ์หรือสถานะ (Time-of-Check) กับขั้นตอนการนำทรัพยากรไปใช้งานจริง (Time-of-Use) ทำให้ผู้โจมตีแทรกเปลี่ยนสถานะหรือไฟล์ในช่วงรอยต่อนั้นได้',
    usageContextTh:
      'ป้องกันด้วยการทำ Atomic Operations และการล็อกทรัพยากร (Synchronization / File Locking) เพื่อไม่ให้สถานะเปลี่ยนระหว่างการตรวจและการใช้งาน',
    relatedLessonIds: ['L2-04']
  },
  {
    id: 'g-buffer-overflow',
    termEn: 'Buffer Overflow',
    domainId: 'D2',
    objectiveIds: ['2.3', '2.4'],
    explanationTh:
      'ช่องโหว่หน่วยความจำที่โปรแกรมเขียนข้อมูลลงในพื้นที่หน่วยความจำชั่วคราว (Buffer) เกินขนาดที่จองไว้โดยไม่ตรวจสอบขอบเขต ทำให้ข้อมูลล้นไปเขียนทับหน่วยความจำข้างเคียง จนอาจทำให้โปรแกรมล่มหรือควบคุมลำดับการทำงานได้',
    usageContextTh:
      'ป้องกันด้วยการตรวจสอบขนาดข้อมูล (Bounds Checking), ใช้ภาษาโปรแกรมที่จัดการหน่วยความจำปลอดภัย และเปิดใช้กลไกของ OS เช่น ASLR และ DEP/NX',
    relatedLessonIds: ['L2-04', 'L2-08']
  },
  {
    id: 'g-vm-escape',
    termEn: 'Virtual Machine Escape',
    acronym: 'VM Escape',
    fullNameEn: 'Virtual Machine Escape',
    domainId: 'D2',
    objectiveIds: ['2.3'],
    explanationTh:
      'ช่องโหว่ร้ายแรงในสภาพแวดล้อม Virtualization ที่กระบวนการภายใน Guest Virtual Machine สามารถหลุดออกนอกขอบเขตการแยกส่วนของ Hypervisor เพื่อเข้าถึงระบบปฏิบัติการหลัก (Host) หรือ VM อื่นที่รันอยู่บนเซิร์ฟเวอร์เดียวกันได้',
    usageContextTh:
      'ลดความเสี่ยงด้วยการอัปเดตแพตช์ Hypervisor สม่ำเสมอ ปิด Shared Clipboard/Folders ที่ไม่จำเป็น และแยก Workload ที่มีความลับสูงออกจากสภาพแวดล้อม Shared Tenancy',
    relatedLessonIds: ['L2-05', 'L3-01']
  },
  {
    id: 'g-zero-day',
    termEn: 'Zero-Day Vulnerability',
    acronym: '0-day',
    fullNameEn: 'Zero-Day Vulnerability',
    domainId: 'D2',
    objectiveIds: ['2.3'],
    explanationTh:
      'ช่องโหว่ในซอฟต์แวร์หรือฮาร์ดแวร์ที่ผู้พัฒนาซอฟต์แวร์ยังไม่ทราบหรือยังไม่มีแพตช์แก้ไขออกมาอย่างเป็นทางการ ทำให้เครื่องมือตรวจจับแบบพึ่งพา Signature แบบเดิมตรวจพบได้ยาก',
    usageContextTh:
      'รับมือด้วย Behavioral Detection (EDR/UBA), Network Segmentation, Principle of Least Privilege และ Application Allow-listing แทนการรอแพตช์เพียงอย่างเดียว',
    relatedLessonIds: ['L2-05', 'L4-07']
  },
  {
    id: 'g-eol-legacy',
    termEn: 'End-of-Life & Legacy Systems',
    acronym: 'EOL',
    fullNameEn: 'End-of-Life',
    domainId: 'D2',
    objectiveIds: ['2.3', '2.5'],
    explanationTh:
      'ระบบ ฮาร์ดแวร์ หรือซอฟต์แวร์ที่ผู้ผลิตสิ้นสุดการสนับสนุนอย่างเป็นทางการ (End-of-Life / End-of-Support) แล้ว จึงไม่มีการออกอัปเดตความปลอดภัยหรือแพตช์แก้ไขช่องโหว่ใหม่ ๆ อีกต่อไป',
    usageContextTh:
      'แนวทางแก้ที่ดีที่สุดคือการปลดระวาง (Decommissioning) หรืออัปเกรด แต่หากธุรกิจยังต้องใช้งานชั่วคราวต้องใช้ Compensating Controls เช่น Air-gapping หรือ Segmentation',
    relatedLessonIds: ['L2-05', 'L2-09']
  },
  {
    id: 'g-sideloading-jailbreaking',
    termEn: 'Side Loading & Jailbreaking',
    domainId: 'D2',
    objectiveIds: ['2.3'],
    explanationTh:
      'Side Loading คือการติดตั้งแอปพลิเคชันลงบนอุปกรณ์พกพานอกเหนือจาก App Store ทางการโดยไม่ผ่านการคัดกรองความปลอดภัย ส่วน Jailbreaking/Rooting คือการปลดล็อกสิทธิ์ผู้ดูแลสูงสุดของระบบปฏิบัติการมือถือเพื่อข้ามข้อจำกัดความปลอดภัยของระบบ',
    usageContextTh:
      'ทั้งสองอย่างทำลาย Sandbox ของมือถือและเปิดทางให้มัลแวร์เข้าถึงข้อมูลองค์กร จึงต้องตั้งค่า MDM ตรวจจับและบล็อกอุปกรณ์ที่ถูก Jailbreak/Root ไม่ให้เข้าเครือข่ายองค์กร',
    relatedLessonIds: ['L2-05', 'L4-02']
  },
  {
    id: 'g-ransomware',
    termEn: 'Ransomware',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    explanationTh:
      'มัลแวร์ที่เข้ารหัสไฟล์ ระบบ หรือล็อกการเข้าถึงข้อมูลของเหยื่อเพื่อเรียกร้องค่าไถ่แลกกับการกู้คืน และมักข่มขู่ว่าจะเปิดเผยข้อมูลที่ขโมยออกไปสู่สาธารณะ (Double Extortion)',
    usageContextTh:
      'การป้องกันที่ดีที่สุดคือ Immutable/Offline Backups ที่ทดสอบการกู้คืนสม่ำเสมอ, EDR, Network Segmentation, MFA และฝึกอบรมป้องกัน Phishing',
    relatedLessonIds: ['L2-06', 'L3-08']
  },
  {
    id: 'g-rootkit',
    termEn: 'Rootkit',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    explanationTh:
      'ซอฟต์แวร์ประสงค์ร้ายที่ออกแบบมาเพื่อซ่อนตัวตนและคงสิทธิ์ระดับผู้ดูแลระบบหรือระดับเคอร์เนล (Kernel/Firmware) ทำให้เครื่องมือตรวจสอบและ Antivirus ทั่วไปภายในเครื่องมองไม่เห็นการมีอยู่ของมัลแวร์',
    usageContextTh:
      'สังเกตจากพฤติกรรมระบบผิดปกติหรือความต่างเมื่อตรวจแบบ Offline/FIM หากยืนยันว่าติด Kernel Rootkit มักแก้ไขด้วยการล้างเครื่องและติดตั้ง OS ใหม่จากภาพระบบที่สะอาด (Reimage)',
    relatedLessonIds: ['L2-06']
  },
  {
    id: 'g-logic-bomb',
    termEn: 'Logic Bomb',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    explanationTh:
      'ชุดคำสั่งที่แอบฝังไว้ในซอฟต์แวร์หรือสคริปต์ให้สงบนิ่งไม่ทำงานจนกว่าจะเข้าเงื่อนไขเฉพาะที่กำหนดไว้ เช่น วันที่ เวลา เหตุการณ์ หรือการถูกลบบัญชีพนักงานออกจากระบบ จึงจะสั่งทำลายข้อมูลหรือหยุดระบบ',
    usageContextTh:
      'มักเกี่ยวข้องกับ Insider Threat หรือนักพัฒนาที่ไม่พอใจองค์กร ป้องกันด้วยการทำ Code Review, Separation of Duties, Change Management และ File Integrity Monitoring',
    relatedLessonIds: ['L2-06', 'L2-01']
  },
  {
    id: 'g-trojan-worm',
    termEn: 'Trojan & Worm',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    explanationTh:
      'Trojan คือมัลแวร์ที่ปลอมแปลงตัวเป็นโปรแกรมที่มีประโยชน์หรือปลอดภัยเพื่อหลอกให้ผู้ใช้ติดตั้งเองโดยไม่แพร่กระจายอัตโนมัติ ส่วน Worm คือมัลแวร์ที่สามารถแพร่กระจายตัวเองข้ามเครือข่ายไปยังเครื่องอื่นได้อัตโนมัติโดยไม่ต้องอาศัยผู้ใช้กดเปิดไฟล์',
    usageContextTh:
      'จำจุดต่างให้แม่น: Virus ต้องเกาะไฟล์โฮสต์และรอคนสั่งรัน, Trojan หลอกให้ติดตั้งแบบแอปปกติ, ส่วน Worm แพร่กระจายเองผ่านช่องโหว่เครือข่ายอย่างรวดเร็ว',
    relatedLessonIds: ['L2-06']
  },
  {
    id: 'g-ddos',
    termEn: 'Distributed Denial of Service',
    acronym: 'DDoS',
    fullNameEn: 'Distributed Denial of Service',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    explanationTh:
      'การโจมตีเพื่อทำให้ระบบหรือบริการล่มจนผู้ใช้งานปกติเข้าถึงไม่ได้ (กระทบ Availability) โดยระดมทราฟฟิกจากแหล่งที่มาจำนวนมากพร้อมกัน รวมถึงเทคนิค Amplified/Reflected ที่ปลอม IP เหยื่อส่งคำขอขนาดเล็กไปยังเซิร์ฟเวอร์ตัวกลางเพื่อขยายขนาดคำตอบกลับไปยังเหยื่อ',
    usageContextTh:
      'รับมือด้วย DDoS Mitigation/Scrubbing Center, Rate Limiting, CDN/Anycast และการปิดบริการหรือจำกัดโปรโตคอลที่เสี่ยงถูกใช้เป็นตัวขยายสัญญาณ (Reflection)',
    relatedLessonIds: ['L2-07']
  },
  {
    id: 'g-on-path-attack',
    termEn: 'On-Path Attack',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    explanationTh:
      'การโจมตีที่ผู้บุกรุกแทรกตัวอยู่กึ่งกลางเส้นทางการสื่อสารระหว่างสองฝ่าย (เดิมเรียก Man-in-the-Middle) เพื่อดักฟัง อ่าน แก้ไข หรือแทรกข้อมูลระหว่างทางโดยที่ทั้งสองฝ่ายเข้าใจว่าสื่อสารกันโดยตรง',
    usageContextTh:
      'อาจเกิดผ่าน ARP Spoofing, Rogue Access Point หรือ BGP/DNS Hijacking ป้องกันด้วยการเข้ารหัส End-to-End (TLS/IPsec), Mutual Authentication และตรวจใบรับรอง CA อย่างเคร่งครัด',
    relatedLessonIds: ['L2-07', 'L3-04']
  },
  {
    id: 'g-csrf',
    termEn: 'Cross-Site Request Forgery',
    acronym: 'CSRF',
    fullNameEn: 'Cross-Site Request Forgery',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    explanationTh:
      'การโจมตีประเภท Forgery ที่หลอกให้เบราว์เซอร์ของผู้ใช้งานที่ล็อกอินค้างไว้กับเว็บไซต์หนึ่ง ส่งคำขอเปลี่ยนสถานะที่ไม่ได้ตั้งใจ (เช่น เปลี่ยนอีเมลหรือโอนเงิน) ไปยังเว็บไซต์นั้นโดยอาศัย Session Cookie ที่เบราว์เซอร์แนบให้อัตโนมัติ',
    usageContextTh:
      'ต่างจาก XSS เพราะไม่จำเป็นต้องรันสคริปต์บนเว็บเป้าหมาย แต่หลอกให้เบราว์เซอร์ส่งคำขอปลอม ป้องกันด้วย Anti-CSRF Tokens และ SameSite Cookie Attribute',
    relatedLessonIds: ['L2-08']
  },
  {
    id: 'g-ssrf',
    termEn: 'Server-Side Request Forgery',
    acronym: 'SSRF',
    fullNameEn: 'Server-Side Request Forgery',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    explanationTh:
      'การโจมตีประเภท Forgery ที่ผู้โจมตีหลอกให้เว็บเซิร์ฟเวอร์เป็นผู้ยิงคำขอเครือข่าย (HTTP/API Request) ออกไปเองไปยังปลายทางที่ผู้โจมตีระบุ ซึ่งมักใช้เจาะเข้าถึงบริการภายในหรือ Cloud Metadata Service ที่ภายนอกเข้าถึงตรงไม่ได้',
    usageContextTh:
      'ต่างจาก CSRF ที่อาศัยเบราว์เซอร์ของ Client เพราะ SSRF ใช้เซิร์ฟเวอร์เป็นจุดกระโดดเข้าเครือข่ายภายใน ป้องกันด้วย Allow-listing ปลายทางและปิดกั้นการเข้าถึง IP ภายในจากฟังก์ชันดึง URL',
    relatedLessonIds: ['L2-08']
  },
  {
    id: 'g-directory-traversal',
    termEn: 'Directory Traversal',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    explanationTh:
      'การโจมตีแอปพลิเคชันเว็บหรือไฟล์เซิร์ฟเวอร์ที่ใช้ประโยชน์จากการไม่ตรวจสอบชื่อพาธไฟล์ ทำให้สามารถอ้างอิงออกนอกโฟลเดอร์หลักของแอปพลิเคชันขึ้นไปอ่านไฟล์ระบบหรือไฟล์ตั้งค่าสำคัญที่อยู่ระดับบนได้',
    usageContextTh:
      'ป้องกันด้วยการตรวจสอบและทำให้ Input เป็นรูปแบบมาตรฐาน (Canonicalization), ใช้รายการไฟล์ที่อนุญาต (Allow List) และจำกัดสิทธิ์ระดับไฟล์ระบบของบัญชีเว็บเซิร์ฟเวอร์',
    relatedLessonIds: ['L2-08']
  },
  {
    id: 'g-privilege-escalation',
    termEn: 'Privilege Escalation',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    explanationTh:
      'เทคนิคการยกระดับสิทธิ์จากบัญชีผู้ใช้ทั่วไปหรือสิทธิ์จำกัดขึ้นเป็นสิทธิ์ผู้ดูแลระบบ (Vertical Escalation) หรือขยายสิทธิ์ไปเข้าถึงทรัพยากรของบัญชีอื่นในระดับเดียวกัน (Horizontal Escalation) โดยอาศัยช่องโหว่ OS แอปพลิเคชัน หรือการตั้งค่าผิดพลาด',
    usageContextTh:
      'ลดความเสี่ยงด้วย Patch Management, Principle of Least Privilege, การตรวจสอบสิทธิ์ไฟล์/บริการ และระบบ PAM สำหรับสิทธิ์ระดับสูง',
    relatedLessonIds: ['L2-08', 'L4-09']
  },
  {
    id: 'g-password-spraying-brute-force',
    termEn: 'Password Spraying vs. Brute Force',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    explanationTh:
      'Brute Force คือการทดลองรหัสผ่านหลายรูปแบบซ้ำ ๆ ใส่บัญชีเป้าหมายเพียงบัญชีเดียวหรือจำนวนน้อย ซึ่งมักติด Account Lockout ได้ง่าย ส่วน Password Spraying คือการนำรหัสผ่านที่พบบ่อยเพียงไม่กี่คำไปลองเข้าหลาย ๆ บัญชีพร้อมกันเพื่อหลบเลี่ยงการล็อกบัญชี',
    usageContextTh:
      'เมื่อพบ Account Lockout หลายบัญชีพร้อมกันหรือล็อกอินล้มเหลวกระจายตัวทั่วองค์กรในช่วงเวลาสั้น ๆ เป็นสัญญาณเด่นของ Password Spraying; ป้องกันได้ผลดีที่สุดด้วย MFA และรหัสผ่านเฉพาะตัวที่แข็งแรง',
    relatedLessonIds: ['L2-07', 'L4-08']
  },
  {
    id: 'g-crypto-downgrade-collision',
    termEn: 'Downgrade & Collision Attacks (Birthday)',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    explanationTh:
      'Downgrade Attack คือการบังคับให้ระบบลดระดับไปใช้โปรโตคอลหรืออัลกอริทึมเข้ารหัสรุ่นเก่าที่อ่อนแอกว่าเดิม ส่วน Collision / Birthday Attack คือการหาอินพุตสองชุดที่แตกต่างกันแต่ให้ค่า Hash เหมือนกันเพื่อปลอมแปลงความสมบูรณ์ของข้อมูล',
    usageContextTh:
      'ป้องกัน Downgrade ด้วยการปิดโปรโตคอลเก่า (เช่น TLS เวอร์ชันเก่า) และ HSTS ส่วนป้องกัน Collision ด้วยการใช้ฟังก์ชันแฮชที่แข็งแรงและทันสมัย เช่น ตระกูล SHA-2 หรือ SHA-3',
    relatedLessonIds: ['L2-07', 'L1-05']
  },
  {
    id: 'g-impossible-travel',
    termEn: 'Impossible Travel',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    explanationTh:
      'ตัวบ่งชี้ความผิดปกติ (Indicator of Compromise) ที่พบบัญชีผู้ใช้เดียวกันเข้าสู่ระบบสำเร็จจากสองสถานที่ทางภูมิศาสตร์ที่ห่างไกลกันมากภายในระยะเวลาที่สั้นเกินกว่าจะเดินทางจริงได้ เช่น ล็อกอินจากกรุงเทพฯ และเบอร์ลินห่างกัน 3 นาที',
    usageContextTh:
      'มักบ่งชี้ว่าข้อมูลรับรอง (Credentials) รั่วไหลและถูกใช้งานจากระยะไกล หรือมีผู้ใช้เปิด VPN ที่ไม่ได้รับอนุญาต ต้องตรวจคู่กับ Concurrent Session Usage และ Endpoint Logs',
    relatedLessonIds: ['L2-08', 'L4-12']
  },
  {
    id: 'g-network-segmentation',
    termEn: 'Network Segmentation',
    domainId: 'D2',
    objectiveIds: ['2.5'],
    explanationTh:
      'การแบ่งเครือข่ายขนาดใหญ่ออกเป็นส่วนย่อย (เช่น VLAN, Subnet หรือ Micro-segmentation) แล้วควบคุมการรับส่งข้อมูลระหว่างแต่ละส่วนด้วย Firewall/ACL เพื่อลดขอบเขตความเสียหายและสกัดกั้นการเคลื่อนที่ด้านข้าง (Lateral Movement)',
    usageContextTh:
      'ใช้แยกเครือข่าย Guest Wi-Fi, ระบบการเงิน, อุปกรณ์ IoT และระบบ OT/ICS ออกจากเครือข่ายสำนักงานทั่วไป รวมถึงเป็น Compensating Control สำหรับระบบ Legacy',
    relatedLessonIds: ['L2-09', 'L3-02']
  },
  {
    id: 'g-least-privilege',
    termEn: 'Principle of Least Privilege',
    acronym: 'PoLP',
    fullNameEn: 'Principle of Least Privilege',
    domainId: 'D2',
    objectiveIds: ['2.5'],
    explanationTh:
      'หลักการกำหนดสิทธิ์ให้ผู้ใช้ แอปพลิเคชัน และบริการต่าง ๆ ได้รับสิทธิ์เท่าที่จำเป็นจริงต่อการปฏิบัติหน้าที่เท่านั้น และให้เฉพาะช่วงเวลาที่จำเป็น เพื่อลดผลกระทบหากบัญชีหรือกระบวนการนั้นถูกยึดครอง',
    usageContextTh:
      'เป็นหัวใจของทั้ง Hardening (D2) และ IAM (D4) เช่น แยกบัญชี Admin ออกจากบัญชีใช้งานทั่วไป และกำหนดสิทธิ์ Read-only ให้ผู้ใช้ที่ไม่ต้องแก้ไขข้อมูล',
    relatedLessonIds: ['L2-09', 'L4-09']
  },
  {
    id: 'g-system-hardening',
    termEn: 'System Hardening',
    domainId: 'D2',
    objectiveIds: ['2.5'],
    explanationTh:
      'กระบวนการลดพื้นผิวการโจมตีของระบบและอุปกรณ์ เช่น การเปลี่ยนรหัสผ่านเริ่มต้น (Default Passwords), ปิดพอร์ตและโปรโตคอลที่ไม่จำเป็น, ลบซอฟต์แวร์ส่วนเกิน (Bloatware), เปิด Host-based Firewall และใช้ Application Allow List',
    usageContextTh:
      'มักดำเนินการอ้างอิงตาม Secure Baselines และ Benchmarks (เช่น CIS Benchmarks) ก่อนนำเครื่องขึ้นใช้งานจริงบนเครือข่ายองค์กร',
    relatedLessonIds: ['L2-09', 'L4-01']
  },
  {
    id: 'g-hips',
    termEn: 'Host-Based Intrusion Prevention System',
    acronym: 'HIPS',
    fullNameEn: 'Host-Based Intrusion Prevention System',
    domainId: 'D2',
    objectiveIds: ['2.5'],
    explanationTh:
      'ซอฟต์แวร์ความปลอดภัยที่ติดตั้งบนเครื่องปลายทางหรือเซิร์ฟเวอร์โดยตรงเพื่อตรวจจับและบล็อกพฤติกรรมหรือกิจกรรมที่เข้าข่ายการบุกรุกบนโฮสต์นั้นแบบเรียลไทม์',
    usageContextTh:
      'ช่วยป้องกันทราฟฟิกที่เข้ารหัสก่อนเข้าถึงแอปพลิเคชันหรือกิจกรรมที่เกิดขึ้นภายในเครื่องเองซึ่ง Network IPS อาจมองไม่เห็น',
    relatedLessonIds: ['L2-09', 'L4-07']
  },

  // ===========================================================================
  // Domain 3.0 — Security Architecture (3.1 – 3.4)
  // ===========================================================================
  {
    id: 'g-shared-responsibility-matrix',
    termEn: 'Shared Responsibility Matrix',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    explanationTh:
      'ตารางแบ่งขอบเขตความรับผิดชอบด้านความปลอดภัยระหว่างผู้ให้บริการคลาวด์ (CSP) กับองค์กรลูกค้า โดยปรับเปลี่ยนตามโมเดลบริการ IaaS, PaaS และ SaaS แต่ความรับผิดชอบต่อข้อมูลและการกำหนดสิทธิ์ผู้ใช้เป็นของลูกค้าเสมอในทุกโมเดล',
    usageContextTh:
      'ใน IaaS ลูกค้าดูแล OS และแพตช์แอปเอง, ใน PaaS ผู้ให้บริการดูแล OS/Runtime ลูกค้าดูแลโค้ดและการตั้งค่า, ส่วนใน SaaS ผู้ให้บริการดูแลแพลตฟอร์มเกือบทั้งหมดแต่ลูกค้ายังต้องรับผิดชอบสิทธิ์บัญชีและข้อมูล',
    relatedLessonIds: ['L3-01']
  },
  {
    id: 'g-iac',
    termEn: 'Infrastructure as Code',
    acronym: 'IaC',
    fullNameEn: 'Infrastructure as Code',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    explanationTh:
      'แนวทางการสร้าง ปรับแต่ง และบริหารจัดการโครงสร้างพื้นฐานไอทีและคลาวด์ผ่านไฟล์กำหนดค่าที่อ่านและประมวลผลด้วยเครื่องได้แทนการคลิกตั้งค่าด้วยมือ ทำให้ได้มาตรฐานซ้ำได้เหมือนกันและเก็บประวัติใน Version Control ได้',
    usageContextTh:
      'ช่วยลด Configuration Drift และทำให้ตรวจสอบความปลอดภัยของเทมเพลตล่วงหน้าใน CI/CD ได้ แต่ต้องระวังการหลุดของ Secrets ในโค้ดและการตั้งค่าเทมเพลตผิดที่กระจายวงกว้างได้รวดเร็ว',
    relatedLessonIds: ['L3-01', 'L4-10']
  },
  {
    id: 'g-serverless',
    termEn: 'Serverless Architecture',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    explanationTh:
      'รูปแบบสถาปัตยกรรมคลาวด์ที่ผู้พัฒนาเขียนเพียงฟังก์ชันหรือโค้ดธุรกิจโดยไม่ต้องดูแลบริหารจัดการเซิร์ฟเวอร์และระบบปฏิบัติการเบื้องหลัง (Function-as-a-Service) ระบบจะขยายและรันตามเหตุการณ์ที่เกิดขึ้นจริง',
    usageContextTh:
      'ช่วยลดภาระการ Patch OS และประหยัดค่าใช้จ่ายเมื่อไม่มีโหลดงาน แต่ยังต้องใส่ใจความปลอดภัยของโค้ด, สิทธิ์ IAM ของฟังก์ชัน, การเชื่อมต่อ API และความเสี่ยง Vendor Lock-in',
    relatedLessonIds: ['L3-01']
  },
  {
    id: 'g-containerization-microservices',
    termEn: 'Containerization & Microservices',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    explanationTh:
      'Containerization คือการบรรจุแอปพลิเคชันและ Dependencies แยกเป็นชุดทำงานเบาที่แชร์ OS Kernel ร่วมกันบนโฮสต์ ต่างจาก Virtualization ที่จำลอง OS เต็มรูปแบบต่อเครื่อง ส่วน Microservices คือการออกแบบแอปพลิเคชันขนาดใหญ่ให้แยกเป็นบริการย่อยอิสระต่อกัน',
    usageContextTh:
      'ช่วยให้ Deploy และ Scale เร็ว แต่ต้องสแกน Container Images หาช่องโหว่ ควบคุมสิทธิ์ Kernel/Namespaces และป้องกัน API ระหว่าง Microservices',
    relatedLessonIds: ['L3-01']
  },
  {
    id: 'g-ics-scada',
    termEn: 'Industrial Control Systems / SCADA',
    acronym: 'ICS/SCADA',
    fullNameEn: 'Industrial Control Systems / Supervisory Control and Data Acquisition',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    explanationTh:
      'ระบบควบคุมและเฝ้าระวังกระบวนการทางอุตสาหกรรมและโครงสร้างพื้นฐานสำคัญ (Operational Technology: OT) เช่น โรงไฟฟ้า ระบบประปา และสายการผลิตโรงงาน ซึ่งให้ความสำคัญกับความปลอดภัยทางกายภาพและความต่อเนื่อง (Availability) สูงสุด',
    usageContextTh:
      'ระบบ ICS/SCADA มักมีอายุการใช้งานยาวนานและหยุดเครื่องเพื่ออัปเดตแพตช์ได้ยาก จึงต้องป้องกันด้วยการแยกโซนเครือข่าย (Air-gapped / Purdue Segmentation) และใช้ Monitoring แบบ Passive',
    relatedLessonIds: ['L3-02', 'L4-01']
  },
  {
    id: 'g-rtos',
    termEn: 'Real-Time Operating System',
    acronym: 'RTOS',
    fullNameEn: 'Real-Time Operating System',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    explanationTh:
      'ระบบปฏิบัติการที่ออกแบบมาให้ประมวลผลและตอบสนองต่อเหตุการณ์ภายในกรอบเวลาที่แน่นอนตายตัว (Deterministic Timing) มักใช้ในอุปกรณ์ฝังตัว (Embedded Systems) เครื่องมือแพทย์ ยานยนต์ และระบบควบคุมอุตสาหกรรม',
    usageContextTh:
      'เนื่องจากมีข้อจำกัดด้านทรัพยากรคำนวณและเวลาตอบสนองที่ห้ามสะดุด จึงมักติดตั้ง Agent หนัก ๆ หรือสแกนเชิงรุกไม่สะดวก ต้องเน้น Hardening เฟิร์มแวร์และการแยกเครือข่าย',
    relatedLessonIds: ['L3-02', 'L4-01']
  },
  {
    id: 'g-air-gapped',
    termEn: 'Air-Gapped Network',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    explanationTh:
      'การแยกเครือข่ายทางกายภาพ (Physical Isolation) โดยตัดขาดการเชื่อมต่อทางเครือข่ายทั้งแบบมีสายและไร้สายออกจากอินเทอร์เน็ตและเครือข่ายสำนักงานอื่นอย่างสิ้นเชิง',
    usageContextTh:
      'ใช้ปกป้องระบบที่มีความอ่อนไหวสูงสุด เช่น Root CA, ระบบควบคุมโรงไฟฟ้า หรือข้อมูลความลับระดับสูง ทั้งนี้ยังต้องควบคุมสื่อพกพา (USB/Removable Media) เพื่อป้องกันการข้ามช่องว่างทางกายภาพ',
    relatedLessonIds: ['L3-02']
  },
  {
    id: 'g-sdn',
    termEn: 'Software-Defined Networking',
    acronym: 'SDN',
    fullNameEn: 'Software-Defined Networking',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    explanationTh:
      'สถาปัตยกรรมเครือข่ายที่แยกส่วนควบคุมการตัดสินใจเส้นทาง (Control Plane) ออกจากอุปกรณ์ส่งต่อแพ็กเก็ต (Data Plane) เพื่อบริหารจัดการและตั้งค่านโยบายความปลอดภัยของเครือข่ายทั้งหมดผ่านตัวควบคุมซอฟต์แวร์แบบรวมศูนย์',
    usageContextTh:
      'ช่วยให้ปรับเปลี่ยน Segmentation และ Firewall Policies แบบอัตโนมัติได้รวดเร็วตาม Workload แต่ตัว SDN Controller เองต้องได้รับการป้องกันเข้มงวดเพราะเป็นจุดควบคุมหลัก',
    relatedLessonIds: ['L3-02']
  },
  {
    id: 'g-screened-subnet',
    termEn: 'Screened Subnet (DMZ)',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    explanationTh:
      'โซนเครือข่ายกึ่งกลาง (เดิมเรียกว่า DMZ) ที่คั่นระหว่างเครือข่ายภายนอกที่ไม่ไว้วางใจ (อินเทอร์เน็ต) กับเครือข่ายภายในขององค์กร เพื่อใช้ตั้งวางเซิร์ฟเวอร์ที่ต้องให้บริการสาธารณะ เช่น Web Server หรือ Mail Gateway',
    usageContextTh:
      'ออกแบบเพื่อจำกัดผลกระทบ: หากเซิร์ฟเวอร์ใน Screened Subnet ถูกยึดครอง กฎ Firewall จะยังบล็อกไม่ให้ผู้โจมตีเข้าถึงเครือข่ายภายในได้โดยตรง',
    relatedLessonIds: ['L3-03', 'L4-06']
  },
  {
    id: 'g-fail-open-fail-closed',
    termEn: 'Fail-Open vs. Fail-Closed',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    explanationTh:
      'โหมดการทำงานเมื่ออุปกรณ์ความปลอดภัยเกิดขัดข้องหรือล่ม: Fail-Open จะปล่อยทราฟฟิกผ่านโดยไม่ตรวจเพื่อรักษา Availability ของระบบไว้ ส่วน Fail-Closed จะตัดหรือบล็อกทราฟฟิกทั้งหมดเพื่อรักษา Confidentiality และป้องกันการบุกรุก',
    usageContextTh:
      'ระบบการเงินหรือคลินิกที่กลัวข้อมูลรั่วไหลจะตั้ง Firewall เป็น Fail-Closed ขณะที่ระบบความปลอดภัยชีวิตหรือเครือข่ายหลักที่ห้ามขาดการเชื่อมต่ออาจเลือก Fail-Open สำหรับบางอุปกรณ์',
    relatedLessonIds: ['L3-03']
  },
  {
    id: 'g-inline-vs-tap',
    termEn: 'Inline vs. Tap/Monitor Mode',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    explanationTh:
      'Inline (Active) คือการวางอุปกรณ์ขวางบนเส้นทางทราฟฟิกจริงทำให้สามารถบล็อกแพ็กเก็ตอันตรายได้ทันที (เช่น IPS, Firewall) ส่วน Tap/Monitor (Passive) คือการรับสำเนาทราฟฟิกผ่าน Network Tap หรือ SPAN Port มาวิเคราะห์และแจ้งเตือนโดยไม่ขวางเส้นทางหลัก (เช่น IDS, Packet Capture Sensor)',
    usageContextTh:
      'ระบบ OT/ICS หรือเครือข่ายที่อ่อนไหวต่อ Latency มักวางเซ็นเซอร์แบบ Passive Tap เพื่อลดความเสี่ยงการเกิด Single Point of Failure',
    relatedLessonIds: ['L3-03']
  },
  {
    id: 'g-jump-server',
    termEn: 'Jump Server (Bastion Host)',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    explanationTh:
      'เซิร์ฟเวอร์ตัวกลางที่ผ่านการ Hardening อย่างเข้มงวด ทำหน้าที่เป็นทางเข้าจุดเดียวสำหรับผู้ดูแลระบบในการรีโมตเข้าไปบริหารจัดการเซิร์ฟเวอร์ภายในโซนเครือข่ายสำคัญแทนการเปิดพอร์ตบริหารจัดการสู่ภายนอกโดยตรง',
    usageContextTh:
      'ช่วยให้บังคับใช้ MFA, บันทึกเซสชัน (Session Recording) และจำกัด IP ต้นทางที่เข้าถึงระบบจัดการได้จากจุดเดียวอย่างเป็นระเบียบ',
    relatedLessonIds: ['L3-03']
  },
  {
    id: 'g-proxy-server',
    termEn: 'Proxy Server (Forward vs. Reverse)',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    explanationTh:
      'Forward Proxy ทำหน้าที่เป็นตัวแทนผู้ใช้ภายในในการออกไปเชื่อมต่ออินเทอร์เน็ตภายนอกเพื่อกรอง URL/เนื้อหาและซ่อนตัวตนลูกข่าย ส่วน Reverse Proxy ตั้งอยู่หน้าเว็บเซิร์ฟเวอร์เพื่อรับคำขอจากผู้ใช้ภายนอกแทนเซิร์ฟเวอร์จริง ทำ Load Balancing, TLS Offloading และซ่อนโครงสร้างภายใน',
    usageContextTh:
      'ข้อสอบมักถามแยกบทบาท: ควบคุมพนักงานเข้าเว็บต้องใช้ Forward Proxy ส่วนป้องกันเว็บแอปขององค์กรที่เปิดให้ลูกค้าเข้าใช้ต้องวาง Reverse Proxy หรือ WAF',
    relatedLessonIds: ['L3-03', 'L4-06']
  },
  {
    id: 'g-waf',
    termEn: 'Web Application Firewall',
    acronym: 'WAF',
    fullNameEn: 'Web Application Firewall',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    explanationTh:
      'ไฟร์วอลล์เฉพาะทางระดับ Application Layer (Layer 7) ที่วิเคราะห์โครงสร้าง HTTP/HTTPS Payload เพื่อตรวจจับและบล็อกการโจมตีเว็บแอปพลิเคชันโดยเฉพาะ เช่น SQL Injection, XSS และการโจมตี API',
    usageContextTh:
      'ต่างจาก Network Firewall หรือ NGFW ทั่วไปตรงที่เข้าใจบริบทคำขอเว็บและ Session ของแอปพลิเคชัน จึงนิยมใช้วางหน้าเว็บเซิร์ฟเวอร์และใช้ทำ Virtual Patching ชั่วคราว',
    relatedLessonIds: ['L3-04', 'L1-01']
  },
  {
    id: 'g-ngfw',
    termEn: 'Next-Generation Firewall',
    acronym: 'NGFW',
    fullNameEn: 'Next-Generation Firewall',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    explanationTh:
      'ไฟร์วอลล์สมัยใหม่ที่รวมความสามารถ Stateful Packet Inspection (Layer 4) เข้ากับการตรวจจับเชิงลึกระดับ Application (Layer 7 / Deep Packet Inspection), ระบบ IPS ในตัว และการบังคับนโยบายตามตัวตนผู้ใช้หรือแอปพลิเคชัน',
    usageContextTh:
      'ต่างจาก Traditional L4 Firewall ที่กรองเฉพาะ IP/Port โดย NGFW สามารถแยกและจำกัดแอปพลิเคชันเฉพาะทางแม้จะวิ่งผ่านพอร์ต 443 เหมือนกัน',
    relatedLessonIds: ['L3-04']
  },
  {
    id: 'g-utm',
    termEn: 'Unified Threat Management',
    acronym: 'UTM',
    fullNameEn: 'Unified Threat Management',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    explanationTh:
      'อุปกรณ์ความปลอดภัยแบบครบวงจร (All-in-One) ที่รวมหลายฟังก์ชันไว้ในเครื่องเดียว เช่น Firewall, Antivirus Gateway, Spam Filtering, Content Filtering, VPN และ IDS/IPS เพื่อความสะดวกในการบริหารจัดการ',
    usageContextTh:
      'มักพบในสำนักงานขนาดกลาง-เล็กหรือสาขาย่อย (Branch Office) เพื่อลดจำนวนอุปกรณ์และค่าดูแล แต่ต้องระวังเรื่อง Single Point of Failure และกำลังประมวลผลเมื่อเปิดทุกฟีเจอร์พร้อมกัน',
    relatedLessonIds: ['L3-04']
  },
  {
    id: 'g-802-1x-eap',
    termEn: 'IEEE 802.1X & EAP',
    acronym: '802.1X',
    fullNameEn: 'IEEE 802.1X Port-Based Network Access Control',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    explanationTh:
      'มาตรฐานควบคุมการเข้าถึงระดับพอร์ตเครือข่าย (ทั้งแบบมีสายและไร้สาย) ที่บล็อกการรับส่งข้อมูลจนกว่าจะยืนยันตัวตนสำเร็จ โดยใช้โปรโตคอล EAP (Extensible Authentication Protocol) เชื่อมต่อระหว่าง Supplicant (อุปกรณ์), Authenticator (Switch/AP) และ Authentication Server (RADIUS)',
    usageContextTh:
      'เป็นกลไกหลักของ NAC และการยืนยันตัวตน Wi-Fi ระดับองค์กร (WPA3-Enterprise) เพื่อป้องกันการเสียบอุปกรณ์แปลกปลอมเข้าสวิตช์สำนักงาน',
    relatedLessonIds: ['L3-04', 'L4-02']
  },
  {
    id: 'g-ipsec-tls',
    termEn: 'IPsec & Transport Layer Security',
    acronym: 'IPsec / TLS',
    fullNameEn: 'Internet Protocol Security / Transport Layer Security',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    explanationTh:
      'โปรโตคอลเข้ารหัสการสื่อสารในเครือข่าย: IPsec ทำงานระดับ Network Layer (Layer 3) เหมาะกับการสร้าง VPN เชื่อมต่อ Site-to-Site หรือ Remote Access ส่วน TLS ทำงานเหนือ Transport Layer เพื่อเข้ารหัสเว็บ (HTTPS), API และ SSL VPN บนพอร์ต 443',
    usageContextTh:
      'IPsec มีโหมด Tunnel (เข้ารหัสทั้งแพ็กเก็ตเดิมสำหรับ Gateway-to-Gateway) และ Transport (เข้ารหัสเฉพาะ Payload สำหรับ Host-to-Host) พร้อมโปรโตคอล ESP ที่ให้ทั้งความลับและความถูกต้องสมบูรณ์',
    relatedLessonIds: ['L3-04']
  },
  {
    id: 'g-sd-wan',
    termEn: 'Software-Defined Wide Area Network',
    acronym: 'SD-WAN',
    fullNameEn: 'Software-Defined Wide Area Network',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    explanationTh:
      'เทคโนโลยีเชื่อมต่อเครือข่ายระหว่างสำนักงานสาขาและคลาวด์ที่ใช้ซอฟต์แวร์บริหารจัดการเส้นทางอัจฉริยะข้ามหลายลิงก์ (เช่น MPLS, Broadband, 5G) โดยเข้ารหัสทราฟฟิกอัตโนมัติและจัดลำดับความสำคัญตามแอปพลิเคชันแบบรวมศูนย์',
    usageContextTh:
      'ช่วยลดการพึ่งพาวงจร MPLS ราคาแพงและเพิ่มความยืดหยุ่นให้องค์กรที่มีหลายสาขา รวมถึงเป็นองค์ประกอบฝั่งเครือข่ายที่รวมเข้ากับสถาปัตยกรรม SASE',
    relatedLessonIds: ['L3-04']
  },
  {
    id: 'g-sase',
    termEn: 'Secure Access Service Edge',
    acronym: 'SASE',
    fullNameEn: 'Secure Access Service Edge',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    explanationTh:
      'สถาปัตยกรรมบนคลาวด์ที่หลอมรวมความสามารถด้านเครือข่าย (เช่น SD-WAN) เข้ากับบริการความปลอดภัยบนคลาวด์ (เช่น FWaaS, Secure Web Gateway, CASB และ Zero Trust Network Access) เพื่อคุ้มครองผู้ใช้ที่ทำงานจากทุกที่โดยไม่ต้องส่งทราฟฟิกย้อนกลับเข้าสำนักงานใหญ่',
    usageContextTh:
      'เหมาะมากสำหรับองค์กรแบบ Hybrid/Remote Work ที่พนักงานเข้าถึงแอปพลิเคชัน SaaS และระบบคลาวด์โดยตรงจากนอกสถานที่',
    relatedLessonIds: ['L3-04']
  },
  {
    id: 'g-data-classification',
    termEn: 'Data Classification',
    domainId: 'D3',
    objectiveIds: ['3.3'],
    explanationTh:
      'การจัดระดับชั้นความสำคัญและความลับของข้อมูล (เช่น Public, Sensitive, Confidential, Restricted) รวมถึงการจำแนกประเภทข้อมูล (Regulated, Trade Secret, Intellectual Property, Financial) เพื่อกำหนดมาตรการคุ้มครองและระยะเวลาจัดเก็บให้เหมาะสมกับมูลค่าข้อมูล',
    usageContextTh:
      'เป็นจุดเริ่มต้นของ DLP และ Access Control เพราะองค์กรจะเลือกมาตรการเข้ารหัสหรือจำกัดสิทธิ์ได้อย่างคุ้มค่าเมื่อรู้ก่อนว่าข้อมูลชุดใดมีความลับระดับใด',
    relatedLessonIds: ['L3-05']
  },
  {
    id: 'g-data-states',
    termEn: 'Data States (At Rest, In Transit, In Use)',
    domainId: 'D3',
    objectiveIds: ['3.3'],
    explanationTh:
      'สถานะทั้ง 3 ของข้อมูลในวงจรชีวิต: Data at Rest คือข้อมูลที่จัดเก็บบนดิสก์/เทป/คลาวด์, Data in Transit (In Motion) คือข้อมูลที่กำลังวิ่งผ่านเครือข่าย และ Data in Use คือข้อมูลที่กำลังประมวลผลอยู่ในหน่วยความจำ (RAM) หรือ CPU',
    usageContextTh:
      'การป้องกันต่างกันตามสถานะ: At Rest ใช้ Full-Disk/DB Encryption, In Transit ใช้ TLS/IPsec/SSH ส่วน In Use ใช้ Secure Enclave หรือการจำกัดสิทธิ์เข้าถึงหน่วยความจำ',
    relatedLessonIds: ['L3-05', 'L3-06']
  },
  {
    id: 'g-data-sovereignty',
    termEn: 'Data Sovereignty',
    domainId: 'D3',
    objectiveIds: ['3.3'],
    explanationTh:
      'หลักการทางกฎหมายที่ระบุว่าข้อมูลดิจิทัลอยู่ภายใต้กฎหมายและอำนาจศาลของประเทศหรือเขตพื้นที่ทางภูมิศาสตร์ (Geolocation) ที่ข้อมูลนั้นถูกเก็บรวบรวมหรือจัดเก็บไว้ทางกายภาพ',
    usageContextTh:
      'สำคัญมากเมื่อใช้งานระบบคลาวด์หรือ Disaster Recovery ข้ามประเทศ เช่น กฎหมายบางประเทศห้ามนำข้อมูลประชาชนหรือข้อมูลสุขภาพไปเก็บใน Region ต่างประเทศ',
    relatedLessonIds: ['L3-06', 'L5-05']
  },
  {
    id: 'g-high-availability',
    termEn: 'High Availability',
    acronym: 'HA',
    fullNameEn: 'High Availability',
    domainId: 'D3',
    objectiveIds: ['3.4'],
    explanationTh:
      'การออกแบบสถาปัตยกรรมระบบให้รองรับการทำงานต่อเนื่องแทบไม่มีช่วงหยุดชะงักแม้มีอุปกรณ์บางส่วนขัดข้อง โดยอาศัยความซ้ำซ้อน (Redundancy), Clustering (Active-Active / Active-Passive) และ Load Balancing เพื่อลด Single Point of Failure',
    usageContextTh:
      'HA ช่วยป้องกันการล่มระดับอุปกรณ์หรือโหนดเฉพาะหน้า ส่วน Disaster Recovery (DR) และ Backups ช่วยกู้คืนในกรณีภัยพิบัติใหญ่หรือข้อมูลเสียหาย',
    relatedLessonIds: ['L3-07']
  },
  {
    id: 'g-recovery-sites',
    termEn: 'Recovery Sites (Hot, Warm, Cold)',
    domainId: 'D3',
    objectiveIds: ['3.4'],
    explanationTh:
      'ศูนย์สำรองสำหรับกู้คืนระบบตามระดับความพร้อม: Hot Site มีอุปกรณ์ ไฟฟ้า เครือข่าย และข้อมูลซิงค์ล่าสุดพร้อมสลับใช้งานทันที (ต้นทุนสูงสุด ฟื้นตัวเร็วสุด), Warm Site มีฮาร์ดแวร์และเครือข่ายพื้นฐานรอไว้แต่ต้องนำข้อมูลล่าสุดมากู้คืนก่อน, ส่วน Cold Site มีเพียงพื้นที่อาคารและระบบสาธารณูปโภคพื้นฐาน (ต้นทุนต่ำสุด ใช้เวลากู้นานสุด)',
    usageContextTh:
      'เลือกใช้ตามค่า RTO และ RPO ที่กำหนดไว้ใน BIA: ระบบที่มี RTO หลักนาทีต้องใช้ Hot Site ส่วนระบบที่ไม่เร่งด่วนมากและคุมงบประมาณอาจเลือก Warm หรือ Cold Site',
    relatedLessonIds: ['L3-07', 'L5-03']
  },
  {
    id: 'g-ups',
    termEn: 'Uninterruptible Power Supply',
    acronym: 'UPS',
    fullNameEn: 'Uninterruptible Power Supply',
    domainId: 'D3',
    objectiveIds: ['3.4'],
    explanationTh:
      'เครื่องสำรองไฟฟ้าและปรับแรงดันไฟฟ้าอัตโนมัติที่ใช้แบตเตอรี่จ่ายไฟทันทีเมื่อเกิดไฟดับหรือไฟตก เพื่อป้องกันความเสียหายต่อฮาร์ดแวร์และข้อมูล รวมถึงยื้อเวลาให้ระบบปิดตัวลงอย่างปลอดภัยหรือรอเครื่องกำเนิดไฟฟ้า (Generator) เริ่มทำงาน',
    usageContextTh:
      'จำความต่าง: UPS จ่ายไฟทันทีแต่ได้ช่วงเวลาสั้น (หลักนาทีถึงชั่วโมง) ส่วน Generator สตาร์ตช้ากว่าเล็กน้อยแต่จ่ายไฟต่อเนื่องได้ยาวนานหลายวันตราบเท่าที่มีเชื้อเพลิง',
    relatedLessonIds: ['L3-07']
  },
  {
    id: 'g-replication-snapshots-journaling',
    termEn: 'Replication, Snapshots & Journaling',
    domainId: 'D3',
    objectiveIds: ['3.4'],
    explanationTh:
      'Replication คือการทำสำเนาข้อมูลข้ามระบบหรือข้ามศูนย์ข้อมูลแบบต่อเนื่อง (Synchronous หรือ Asynchronous), Snapshot คือการบันทึกภาพสถานะของดิสก์หรือ VM ณ จุดเวลาหนึ่งอย่างรวดเร็ว ส่วน Journaling คือการบันทึกประวัติรายการเปลี่ยนแปลงก่อนเขียนจริงเพื่อให้กู้คืนความสอดคล้องของระบบไฟล์/ฐานข้อมูลได้เมื่อไฟดับ',
    usageContextTh:
      'แม้ Snapshot และ Replication จะช่วยให้กู้คืนได้ไว แต่ไม่ใช่สิ่งทดแทน Offline/Immutable Backup ได้ทั้งหมด เพราะหากเกิด Ransomware หรือการลบข้อมูลผิดพลาดอาจแพร่ตาม Replication ไปได้',
    relatedLessonIds: ['L3-08']
  },
  {
    id: 'g-resilience-testing',
    termEn: 'Resilience Testing Methods',
    domainId: 'D3',
    objectiveIds: ['3.4'],
    explanationTh:
      'รูปแบบการทดสอบแผนรับมือเหตุการณ์และการกู้คืนระบบ: Tabletop Exercise คือการซ้อมพูดคุยบนโต๊ะจากสถานการณ์จำลองโดยไม่กระทบระบบจริง, Simulation คือการจำลองเหตุการณ์ปฏิบัติการจริงบางส่วน, Failover Test คือการสลับไปใช้ระบบสำรองจริง และ Parallel Processing คือการเดินระบบสำรองคู่ขนานกับระบบหลัก',
    usageContextTh:
      'เรียงจากต้นทุนและความเสี่ยงต่อระบบผลิตต่ำไปสูง: Tabletop -> Simulation -> Parallel Processing -> Full Interruption/Failover',
    relatedLessonIds: ['L3-08', 'L4-11']
  },

  // ===========================================================================
  // Domain 4.0 — Security Operations (4.1 – 4.9)
  // ===========================================================================
  {
    id: 'g-secure-baseline',
    termEn: 'Secure Baseline',
    domainId: 'D4',
    objectiveIds: ['4.1'],
    explanationTh:
      'ชุดมาตรฐานการตั้งค่าความปลอดภัยขั้นต่ำที่ผ่านการทดสอบและอนุมัติแล้วสำหรับระบบปฏิบัติการ เซิร์ฟเวอร์ อุปกรณ์เครือข่าย หรือภาพระบบคลาวด์ เพื่อเป็นต้นแบบในการปรับใช้ (Deploy) และตรวจสอบความคลาดเคลื่อนอย่างต่อเนื่อง',
    usageContextTh:
      'ช่วยป้องกัน Configuration Drift และลดช่องโหว่จากการตั้งค่าเริ่มต้นของโรงงาน โดยมักอ้างอิงจาก CIS Benchmarks หรือ STIGs',
    relatedLessonIds: ['L4-01', 'L4-04']
  },
  {
    id: 'g-wpa3',
    termEn: 'Wi-Fi Protected Access 3',
    acronym: 'WPA3',
    fullNameEn: 'Wi-Fi Protected Access 3',
    domainId: 'D4',
    objectiveIds: ['4.1'],
    explanationTh:
      'มาตรฐานความปลอดภัยเครือข่ายไร้สายรุ่นล่าสุดที่ยกระดับจาก WPA2 โดยใช้ Simultaneous Authentication of Equals (SAE) แทน PSK แบบเดิมเพื่อป้องกันการดักจับ Handshake ไปเดารหัสผ่านแบบออฟไลน์ และให้ Forward Secrecy พร้อมรองรับการเข้ารหัสที่แข็งแรงขึ้นในโหมด Enterprise',
    usageContextTh:
      'เลือก WPA3-Personal (SAE) สำหรับเครือข่ายขนาดเล็ก และ WPA3-Enterprise ร่วมกับ 802.1X/RADIUS สำหรับองค์กรที่ต้องการยืนยันตัวตนรายบุคคล',
    relatedLessonIds: ['L4-02']
  },
  {
    id: 'g-radius',
    termEn: 'RADIUS',
    acronym: 'RADIUS',
    fullNameEn: 'Remote Authentication Dial-In User Service',
    domainId: 'D4',
    objectiveIds: ['4.1', '4.6'],
    explanationTh:
      'โปรโตคอล AAA แบบรวมศูนย์ (Client-Server) ที่ใช้อย่างแพร่หลายสำหรับตรวจสอบสิทธิ์เครือข่าย VPN และระบบไร้สายระดับองค์กร (802.1X) โดยทำงานผ่าน UDP และเข้ารหัสเฉพาะส่วนรหัสผ่านในแพ็กเก็ตการเชื่อมต่อ ต่างจาก TACACS+ ที่ใช้ TCP และเข้ารหัสทั้ง Payload สำหรับจัดการอุปกรณ์เครือข่าย',
    usageContextTh:
      'ข้อสอบนิยมเทียบ RADIUS (UDP, รวม Authentication+Authorization, เหมาะกับ Wi-Fi/VPN ผู้ใช้ทั่วไป) กับ TACACS+ (TCP, แยกส่วน AAA ชัดเจน, เหมาะกับ Admin เข้าตั้งค่า Router/Switch)',
    relatedLessonIds: ['L4-02', 'L1-02']
  },
  {
    id: 'g-wireless-site-survey',
    termEn: 'Wireless Site Survey & Heat Map',
    domainId: 'D4',
    objectiveIds: ['4.1'],
    explanationTh:
      'การสำรวจพื้นที่ทางกายภาพและคลื่นความถี่วิทยุ (Site Survey) เพื่อวิเคราะห์การกระจายสัญญาณ จุดอับสัญญาณ และสัญญาณรบกวน แล้วแสดงผลเป็นแผนที่ความแรงสัญญาณ (Heat Map) สำหรับวางตำแหน่ง Access Point และปรับกำลังส่ง',
    usageContextTh:
      'ในมุมมองความปลอดภัย ช่วยป้องกันไม่ให้สัญญาณ Wi-Fi รั่วไหลออกไปนอกอาคาร (Signal Bleed) จนผู้โจมตีภายนอกอาคารเชื่อมต่อได้',
    relatedLessonIds: ['L4-02']
  },
  {
    id: 'g-mdm',
    termEn: 'Mobile Device Management',
    acronym: 'MDM',
    fullNameEn: 'Mobile Device Management',
    domainId: 'D4',
    objectiveIds: ['4.1'],
    explanationTh:
      'แพลตฟอร์มบริหารจัดการและบังคับใช้นโยบายความปลอดภัยบนอุปกรณ์พกพาขององค์กรแบบรวมศูนย์ เช่น การบังคับล็อกหน้าจอ การเข้ารหัสอุปกรณ์ การติดตั้งแอปที่อนุญาต การแยกพื้นที่ข้อมูล (Containerization) และการสั่งล้างข้อมูลระยะไกล (Remote/Selective Wipe)',
    usageContextTh:
      'ใช้ร่วมกับโมเดล BYOD, COPE และ CYOD เพื่อบังคับใช้การตรวจสถานะ Jailbreak/Root ก่อนอนุญาตให้เข้าถึงอีเมลและทรัพยากรองค์กร',
    relatedLessonIds: ['L4-02']
  },
  {
    id: 'g-byod',
    termEn: 'Bring Your Own Device',
    acronym: 'BYOD',
    fullNameEn: 'Bring Your Own Device',
    domainId: 'D4',
    objectiveIds: ['4.1'],
    explanationTh:
      'นโยบายการใช้งานอุปกรณ์พกพาที่พนักงานเป็นเจ้าของเครื่องเองและนำมาใช้เชื่อมต่อทำงานในองค์กร องค์กรลดต้นทุนค่าเครื่องได้แต่มีความซับซ้อนในการควบคุมความเป็นส่วนตัวและความหลากหลายของระบบปฏิบัติการ',
    usageContextTh:
      'ต้องใช้ MDM แบบ Containerization เพื่อแยกข้อมูลงานออกจากข้อมูลส่วนตัว และทำ Selective Wipe ล้างเฉพาะข้อมูลบริษัทได้เมื่อพนักงานลาออก',
    relatedLessonIds: ['L4-02']
  },
  {
    id: 'g-cope',
    termEn: 'Corporate-Owned, Personally Enabled',
    acronym: 'COPE',
    fullNameEn: 'Corporate-Owned, Personally Enabled',
    domainId: 'D4',
    objectiveIds: ['4.1'],
    explanationTh:
      'โมเดลอุปกรณ์พกพาที่องค์กรเป็นผู้จัดซื้อและถือกรรมสิทธิ์เต็มรูปแบบ แต่เปิดโอกาสให้พนักงานใช้งานเรื่องส่วนตัวได้ภายใต้ขอบเขตและนโยบายการควบคุมขององค์กรผ่านระบบ MDM',
    usageContextTh:
      'ให้ความสมดุลระหว่างการควบคุมความปลอดภัยระดับสูงของบริษัท (Full Device Management) กับความสะดวกสบายของพนักงานที่ไม่ต้องพกโทรศัพท์สองเครื่อง',
    relatedLessonIds: ['L4-02']
  },
  {
    id: 'g-cyod',
    termEn: 'Choose Your Own Device',
    acronym: 'CYOD',
    fullNameEn: 'Choose Your Own Device',
    domainId: 'D4',
    objectiveIds: ['4.1'],
    explanationTh:
      'โมเดลอุปกรณ์พกพาที่องค์กรกำหนดรายการรุ่นอุปกรณ์ที่ผ่านการรับรองมาตรฐานความปลอดภัยไว้ให้พนักงานเลือกใช้งาน โดยมักเป็นเครื่องที่องค์กรจัดหาหรืออนุมัติให้รองรับการบริหารจัดการผ่าน MDM ได้มาตรฐานเดียวกัน',
    usageContextTh:
      'ลดความหลากหลายของฮาร์ดแวร์และปัญหา Compatibility เมื่อเทียบกับ BYOD ทำให้ทีม IT บำรุงรักษาและดูแลความปลอดภัยได้ง่ายกว่า',
    relatedLessonIds: ['L4-02']
  },
  {
    id: 'g-media-sanitization',
    termEn: 'Media Sanitization & Destruction',
    domainId: 'D4',
    objectiveIds: ['4.2'],
    explanationTh:
      'กระบวนการกำจัดข้อมูลออกจากสื่อจัดเก็บอย่างถาวรเมื่อปลดระวางหรือส่งต่อ (Disposal/Decommissioning) ได้แก่ Clear/Wiping (เขียนทับข้อมูลสำหรับนำไปใช้ซ้ำ), Purge/Degaussing (ล้างสนามแม่เหล็กฮาร์ดดิสก์) และ Physical Destruction (บด ตัด เผา สำหรับสื่อที่หมดอายุหรือไม่ใช้ซ้ำ) พร้อมออกเอกสาร Certificate of Destruction',
    usageContextTh:
      'ข้อสอบสำคัญ: SSD/Flash Drive ไม่สามารถใช้ Degaussing ล้างข้อมูลได้ เพราะไม่ได้เก็บข้อมูลด้วยแม่เหล็ก ต้องใช้วิธี Cryptographic Erase หรือทำลายทางกายภาพ (Shredding/Pulverizing)',
    relatedLessonIds: ['L4-03']
  },
  {
    id: 'g-data-retention',
    termEn: 'Data Retention Policy',
    domainId: 'D4',
    objectiveIds: ['4.2', '5.4'],
    explanationTh:
      'นโยบายกำหนดระยะเวลาขั้นต่ำและสูงสุดในการจัดเก็บข้อมูลประเภทต่าง ๆ รวมถึงวิธีการจัดเก็บและทำลายเมื่อครบกำหนด เพื่อสอดคล้องกับกฎหมาย ความจำเป็นทางธุรกิจ และการลดความเสี่ยงจากการเก็บข้อมูลเกินความจำเป็น',
    usageContextTh:
      'ต้องสอดคล้องทั้งข้อกำหนดการเก็บหลักฐานทางบัญชี/Legal Hold (ห้ามลบก่อนกำหนด) และกฎหมายความเป็นส่วนตัว (ห้ามเก็บข้อมูลส่วนบุคคลไว้นานเกินความจำเป็น)',
    relatedLessonIds: ['L4-03', 'L5-05']
  },
  {
    id: 'g-cve',
    termEn: 'Common Vulnerabilities and Exposures',
    acronym: 'CVE',
    fullNameEn: 'Common Vulnerabilities and Exposures',
    domainId: 'D4',
    objectiveIds: ['4.3'],
    explanationTh:
      'ระบบมาตรฐานการตั้งรหัสอ้างอิงเฉพาะและบัญชีรายชื่อช่องโหว่ความปลอดภัยทางไซเบอร์ที่เปิดเผยต่อสาธารณะ เพื่อให้ผู้ผลิตซอฟต์แวร์ ทีมความปลอดภัย และเครื่องมือสแกนอ้างอิงถึงช่องโหว่เดียวกันได้ตรงกันทั่วโลก',
    usageContextTh:
      'CVE ทำหน้าที่เป็น "ตัวระบุชื่อช่องโหว่" ส่วนการให้คะแนนความรุนแรงของช่องโหว่นั้นจะใช้ระบบ CVSS มาประกอบการจัดลำดับความสำคัญ',
    relatedLessonIds: ['L4-04']
  },
  {
    id: 'g-cvss',
    termEn: 'Common Vulnerability Scoring System',
    acronym: 'CVSS',
    fullNameEn: 'Common Vulnerability Scoring System',
    domainId: 'D4',
    objectiveIds: ['4.3'],
    explanationTh:
      'กรอบมาตรฐานการให้คะแนนความรุนแรงของช่องโหว่เป็นตัวเลข 0.0–10.0 โดยประเมินจาก 3 กลุ่มปัจจัยหลัก ได้แก่ Base Metrics (คุณสมบัติเฉพาะของช่องโหว่ที่ไม่เปลี่ยนตามเวลา), Temporal Metrics (สถานะแพตช์หรือโค้ดโจมตีที่เปลี่ยนตามเวลา) และ Environmental Metrics (บริบทความสำคัญเฉพาะในองค์กร)',
    usageContextTh:
      'ในการปฏิบัติงานจริง ไม่ควรจัดลำดับการแพตช์จาก Base Score เพียงอย่างเดียว แต่ต้องนำ Environmental Context, Exposure Factor และ Risk Tolerance ขององค์กรมาพิจารณาร่วมด้วย',
    relatedLessonIds: ['L4-04']
  },
  {
    id: 'g-sast',
    termEn: 'Static Application Security Testing',
    acronym: 'SAST',
    fullNameEn: 'Static Application Security Testing',
    domainId: 'D4',
    objectiveIds: ['4.3'],
    explanationTh:
      'การวิเคราะห์ความปลอดภัยของแอปพลิเคชันแบบ White-box โดยสแกนตรวจสอบซอร์สโค้ด ไบต์โค้ด หรือไบนารีของโปรแกรมโดยตรงขณะยังไม่ได้รันทำงานจริง เพื่อหาข้อบกพร่องตั้งแต่ระยะต้นของการพัฒนา (SDLC)',
    usageContextTh:
      'ช่วยนักพัฒนาแก้ไขช่องโหว่ระดับโค้ดได้เร็วตั้งแต่ใน IDE หรือ CI/CD Pipeline แต่ไม่สามารถตรวจพบปัญหาการตั้งค่าสภาพแวดล้อมหรือพฤติกรรมตอนรันจริงได้เท่า DAST',
    relatedLessonIds: ['L4-04']
  },
  {
    id: 'g-dast',
    termEn: 'Dynamic Application Security Testing',
    acronym: 'DAST',
    fullNameEn: 'Dynamic Application Security Testing',
    domainId: 'D4',
    objectiveIds: ['4.3'],
    explanationTh:
      'การทดสอบความปลอดภัยของแอปพลิเคชันแบบ Black-box ในขณะที่แอปพลิเคชันกำลังทำงานอยู่จริง (Runtime) โดยส่งคำขอทดสอบจากภายนอกเข้าไปเพื่อค้นหาช่องโหว่ด้านการยืนยันตัวตน เซสชัน การตั้งค่าเซิร์ฟเวอร์ และ Input Validation',
    usageContextTh:
      'ต่างจาก SAST ตรงที่ไม่ต้องเข้าถึงซอร์สโค้ดและตรวจพบปัญหาจากการทำงานจริง (เช่น Auth Bypass หรือ Header Misconfiguration) จึงมักใช้คู่กันทั้ง SAST และ DAST',
    relatedLessonIds: ['L4-04']
  },
  {
    id: 'g-osint',
    termEn: 'Open-Source Intelligence',
    acronym: 'OSINT',
    fullNameEn: 'Open-Source Intelligence',
    domainId: 'D4',
    objectiveIds: ['4.3'],
    explanationTh:
      'การรวบรวมและวิเคราะห์ข้อมูลข่าวกรองภัยคุกคามหรือข้อมูลเกี่ยวกับองค์กรจากแหล่งข้อมูลสาธารณะที่เปิดเผยทั่วไป เช่น เว็บไซต์ ฐานข้อมูลโดเมน โซเชียลมีเดีย เอกสารจดทะเบียน และคลังโค้ดสาธารณะ',
    usageContextTh:
      'ใช้ทั้งในฝั่งป้องกัน (Threat Feed, ตรวจหาข้อมูลรั่วไหลขององค์กร) และขั้นตอน Passive Reconnaissance ของการทำ Penetration Testing',
    relatedLessonIds: ['L4-04', 'L5-06']
  },
  {
    id: 'g-false-positive-negative',
    termEn: 'False Positive vs. False Negative',
    domainId: 'D4',
    objectiveIds: ['4.3', '4.4'],
    explanationTh:
      'False Positive คือการที่เครื่องมือแจ้งเตือนว่าพบช่องโหว่หรือการโจมตีทั้งที่ความจริงไม่มีปัญหาเกิดขึ้น (นำไปสู่ Alert Fatigue) ส่วน False Negative คือการที่เครื่องมือไม่แจ้งเตือนทั้งที่ความจริงมีช่องโหว่หรือการบุกรุกเกิดขึ้นจริง (อันตรายมากเพราะหลุดรอดการตรวจจับ)',
    usageContextTh:
      'การทำ Alert Tuning และ Validation of Remediation (Rescanning) ช่วยลดทั้ง False Positive และ False Negative ให้ระบบเฝ้าระวังแม่นยำขึ้น',
    relatedLessonIds: ['L4-04', 'L4-05']
  },
  {
    id: 'g-siem',
    termEn: 'Security Information and Event Management',
    acronym: 'SIEM',
    fullNameEn: 'Security Information and Event Management',
    domainId: 'D4',
    objectiveIds: ['4.4', '4.9'],
    explanationTh:
      'แพลตฟอร์มรวมศูนย์สำหรับรวบรวม จัดเก็บ และวิเคราะห์ข้อมูล Log (Log Aggregation) จากอุปกรณ์เครือข่าย เซิร์ฟเวอร์ และแอปพลิเคชันทั่วองค์กรแบบเรียลไทม์ พร้อมกลไก Correlation Rule เพื่อเชื่อมโยงเหตุการณ์ย่อยจากหลายแหล่งและสร้าง Alert แจ้งเตือนทีม SOC',
    usageContextTh:
      'ต่างจาก SOAR ตรงที่ SIEM เน้นการรวม Log, การวิเคราะห์เชื่อมโยงเหตุการณ์ และแจ้งเตือน ส่วน SOAR เน้นการตอบสนองและรัน Playbook อัตโนมัติหลังเกิด Alert',
    relatedLessonIds: ['L4-05', 'L4-12']
  },
  {
    id: 'g-scap',
    termEn: 'Security Content Automation Protocol',
    acronym: 'SCAP',
    fullNameEn: 'Security Content Automation Protocol',
    domainId: 'D4',
    objectiveIds: ['4.4'],
    explanationTh:
      'ชุดมาตรฐานเปิดที่พัฒนาโดย NIST สำหรับทำให้การตรวจประเมินช่องโหว่ การวัดผลการตั้งค่ามาตรฐาน (Configuration Compliance) และการสร้างรายงานความปลอดภัยทำงานแบบอัตโนมัติและแลกเปลี่ยนข้อมูลข้ามเครื่องมือได้เป็นมาตรฐานเดียวกัน',
    usageContextTh:
      'องค์กรใช้เครื่องมือที่รองรับ SCAP ร่วมกับ Benchmarks (เช่น CIS/DISA) เพื่อสแกนตรวจสอบว่าระบบยังสอดคล้องกับ Secure Baseline อย่างสม่ำเสมอ',
    relatedLessonIds: ['L4-05', 'L4-01']
  },
  {
    id: 'g-netflow',
    termEn: 'NetFlow',
    domainId: 'D4',
    objectiveIds: ['4.4', '4.9'],
    explanationTh:
      'โปรโตคอลและรูปแบบข้อมูลสรุปสถิติการไหลของทราฟฟิกเครือข่าย (เช่น IP ต้นทาง-ปลายทาง พอร์ต ปริมาณไบต์ และระยะเวลาเชื่อมต่อ) โดยเก็บเฉพาะ Metadata การสื่อสาร ไม่ได้เก็บเนื้อหา Payload เต็มรูปแบบเหมือน Packet Capture (PCAP)',
    usageContextTh:
      'ใช้ตรวจจับความผิดปกติของปริมาณทราฟฟิก เช่น Data Exfiltration ปริมาณมาก การสแกนพอร์ต หรือ C2 Beaconing ได้อย่างประหยัดพื้นที่จัดเก็บกว่า PCAP',
    relatedLessonIds: ['L4-05', 'L4-12']
  },
  {
    id: 'g-snmp-traps',
    termEn: 'SNMP Traps',
    acronym: 'SNMP',
    fullNameEn: 'Simple Network Management Protocol',
    domainId: 'D4',
    objectiveIds: ['4.4'],
    explanationTh:
      'ข้อความแจ้งเตือนแบบไม่ประสานเวลา (Asynchronous Alert) ที่อุปกรณ์เครือข่ายหรือเซิร์ฟเวอร์ส่งไปยังระบบเฝ้าระวังส่วนกลาง (SNMP Manager) ทันทีเมื่อเกิดเหตุการณ์สำคัญ เช่น พอร์ตล่ม อุปกรณ์รีบูต หรือพัดลมขัดข้อง',
    usageContextTh:
      'เพื่อความปลอดภัยต้องใช้งาน SNMPv3 ซึ่งรองรับทั้งการยืนยันตัวตนและการเข้ารหัส แทน SNMPv1/v2c ที่ส่ง Community String แบบไม่เข้ารหัส',
    relatedLessonIds: ['L4-05', 'L4-06']
  },
  {
    id: 'g-alert-tuning',
    termEn: 'Alert Tuning',
    domainId: 'D4',
    objectiveIds: ['4.4'],
    explanationTh:
      'กระบวนการปรับแต่งเกณฑ์ Threshold, กฎ Correlation และข้อยกเว้นในระบบ SIEM/IDS/EDR อย่างต่อเนื่อง เพื่อลดการแจ้งเตือนที่ผิดพลาด (False Positives) และแก้ปัญหา Alert Fatigue โดยยังคงตรวจจับภัยคุกคามจริงได้อย่างแม่นยำ',
    usageContextTh:
      'ทำหลังจากติดตั้งระบบใหม่หรือเมื่อมีการเปลี่ยนแปลงโครงสร้างระบบเพื่อให้นักวิเคราะห์ SOC มุ่งความสนใจไปยัง Alert ที่มีความเสี่ยงจริง',
    relatedLessonIds: ['L4-05']
  },
  {
    id: 'g-dnssec',
    termEn: 'Domain Name System Security Extensions',
    acronym: 'DNSSEC',
    fullNameEn: 'Domain Name System Security Extensions',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    explanationTh:
      'ส่วนขยายความปลอดภัยของระบบ DNS ที่ใช้ลายเซ็นดิจิทัล (Asymmetric Cryptography) ลงนามใน DNS Records เพื่อให้เครื่องลูกข่ายหรือ Resolver ตรวจสอบได้ว่าการตอบกลับ DNS มาจากแหล่งที่ถูกต้องจริงและไม่ถูกปลอมแปลงระหว่างทาง (Data Origin Authentication & Integrity)',
    usageContextTh:
      'ใช้ป้องกัน DNS Spoofing และ Cache Poisoning แต่ข้อสอบมักลวงว่า DNSSEC เข้ารหัสคำขอ DNS ซึ่งไม่จริง (ผู้ที่ต้องการความลับของคำถาม DNS ต้องใช้ DoH หรือ DoT)',
    relatedLessonIds: ['L4-06', 'L2-07']
  },
  {
    id: 'g-spf',
    termEn: 'Sender Policy Framework',
    acronym: 'SPF',
    fullNameEn: 'Sender Policy Framework',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    explanationTh:
      'กลไกยืนยันตัวตนอีเมลผ่าน DNS TXT Record ที่เจ้าของโดเมนใช้ประกาศรายชื่อ IP Address หรือเมลเซิร์ฟเวอร์ที่ได้รับอนุญาตให้ส่งอีเมลในนามโดเมนของตน เพื่อช่วยเซิร์ฟเวอร์ปลายทางคัดกรองอีเมลปลอมแปลง',
    usageContextTh:
      'SPF ตรวจ IP ของเซิร์ฟเวอร์ที่ส่งต่อจดหมาย (Return-Path) แต่ไม่ได้ตรวจลายเซ็นเนื้อหาหรือ Header From ที่ผู้ใช้เห็น จึงต้องใช้ร่วมกับ DKIM และ DMARC',
    relatedLessonIds: ['L4-06']
  },
  {
    id: 'g-dkim',
    termEn: 'DomainKeys Identified Mail',
    acronym: 'DKIM',
    fullNameEn: 'DomainKeys Identified Mail',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    explanationTh:
      'กลไกยืนยันความถูกต้องของอีเมลด้วยการลงลายเซ็นดิจิทัลในส่วนหัวและเนื้อหาอีเมลด้วย Private Key ของโดเมนผู้ส่ง เพื่อให้เซิร์ฟเวอร์ปลายทางดึง Public Key จาก DNS ของผู้ส่งมาตรวจสอบว่าอีเมลมาจากโดเมนนั้นจริงและไม่ถูกแก้ไขระหว่างทาง',
    usageContextTh:
      'เสริมจุดแข็งด้าน Integrity และ Non-repudiation ให้กับอีเมล และทำงานร่วมกับ SPF ภายใต้การบังคับนโยบายของ DMARC',
    relatedLessonIds: ['L4-06']
  },
  {
    id: 'g-dmarc',
    termEn: 'DMARC',
    acronym: 'DMARC',
    fullNameEn: 'Domain-based Message Authentication, Reporting, and Conformance',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    explanationTh:
      'โปรโตคอลมาตรฐานบน DNS ที่ทำงานต่อยอดจาก SPF และ DKIM เพื่อกำหนดนโยบายให้เมลเซิร์ฟเวอร์ปลายทางปฏิบัติเมื่ออีเมลไม่ผ่านการตรวจสอบและAlignment (เช่น p=none เพื่อเฝ้าสังเกต, p=quarantine เพื่อกักเข้าสแปม, p=reject เพื่อปฏิเสธทันที) พร้อมระบุที่อยู่รับรายงานผล (Aggregate/Forensic Reports)',
    usageContextTh:
      'เป็นคำตอบหลักเมื่อโจทย์ถามถึงการสั่งให้ผู้รับปฏิเสธอีเมลปลอมแปลงโดเมน (Anti-spoofing) และต้องการรายงานสถิติการแอบอ้างโดเมนกลับมาวิเคราะห์',
    relatedLessonIds: ['L4-06']
  },
  {
    id: 'g-fim',
    termEn: 'File Integrity Monitoring',
    acronym: 'FIM',
    fullNameEn: 'File Integrity Monitoring',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    explanationTh:
      'เครื่องมือตรวจสอบความสมบูรณ์ของไฟล์ระบบ ไฟล์กำหนดค่า และรีจิสตรีสำคัญ โดยเปรียบเทียบค่า Cryptographic Hash, สิทธิ์ และเวลาแก้ไขปัจจุบันกับค่าอ้างอิงพื้นฐาน (Baseline) เพื่อแจ้งเตือนทันทีเมื่อมีการเปลี่ยนแปลงที่ไม่ได้รับอนุญาต',
    usageContextTh:
      'สำคัญมากต่อการตรวจจับ Web Defacement, Rootkit, การแอบแก้ไขไฟล์ระบบปฏิบัติการ และการปฏิบัติตามมาตรฐาน PCI DSS',
    relatedLessonIds: ['L4-07']
  },
  {
    id: 'g-dlp',
    termEn: 'Data Loss Prevention',
    acronym: 'DLP',
    fullNameEn: 'Data Loss Prevention',
    domainId: 'D4',
    objectiveIds: ['4.5', '4.4'],
    explanationTh:
      'ระบบตรวจจับและป้องกันการรั่วไหลของข้อมูลอ่อนไหวหรือข้อมูลความลับ (เช่น PII, เลขบัตรเครดิต, ซอร์สโค้ด) โดยตรวจสอบเนื้อหาและบริบททั้งในระดับ Endpoint (USB/Print/Clipboard), Network (Email/Web Upload) และ Storage/Cloud เพื่อแจ้งเตือนหรือบล็อกการส่งออกโดยพลการ',
    usageContextTh:
      'ใช้ป้องกันทั้ง Insider Threat ที่มีเจตนาร้ายและความพลั้งเผลอของพนักงานที่ส่งไฟล์ความลับออกทางอีเมลส่วนตัวหรืออัปโหลดขึ้นคลาวด์ที่ไม่ได้รับอนุญาต',
    relatedLessonIds: ['L4-07', 'L4-05']
  },
  {
    id: 'g-nac',
    termEn: 'Network Access Control',
    acronym: 'NAC',
    fullNameEn: 'Network Access Control',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    explanationTh:
      'โซลูชันควบคุมการเข้าถึงเครือข่ายที่ตรวจสอบทั้งตัวตนและสถานะสุขภาพความปลอดภัยของอุปกรณ์ (Posture Check เช่น สถานะแพตช์ Antivirus Firewall) ก่อนอนุญาตให้เข้าสู่เครือข่ายจริง (Pre-admission) และเฝ้าระวังต่อเนื่องหลังเชื่อมต่อ (Post-admission)',
    usageContextTh:
      'หากอุปกรณ์ไม่ผ่านเกณฑ์ความปลอดภัย NAC สามารถส่งอุปกรณ์นั้นไปยัง Remediation VLAN เพื่อให้แก้ไขแพตช์ก่อน จึงอนุญาตให้เข้าถึงทรัพยากรบริษัท',
    relatedLessonIds: ['L4-07', 'L3-04']
  },
  {
    id: 'g-edr',
    termEn: 'Endpoint Detection and Response',
    acronym: 'EDR',
    fullNameEn: 'Endpoint Detection and Response',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    explanationTh:
      'เครื่องมือความปลอดภัยยุคใหม่บนเครื่องปลายทาง (Workstation/Server) ที่เก็บข้อมูล Telemetry เชิงลึกอย่างต่อเนื่อง เพื่อตรวจจับพฤติกรรมน่าสงสัยแบบเรียลไทม์ สืบสวนลำดับเหตุการณ์ และให้ทีม SOC สั่งกักกันเครื่อง (Network Isolation) หรือหยุดกระบวนการได้ทันทีจากศูนย์กลาง',
    usageContextTh:
      'เหนือกว่า Antivirus แบบดั้งเดิมที่พึ่งพา Signature เพราะ EDR ตรวจจับภัยคุกคามแบบ Fileless และ Zero-day จากพฤติกรรมได้ รวมถึงช่วยรักษา RAM ระหว่าง Containment',
    relatedLessonIds: ['L4-07', 'L4-11']
  },
  {
    id: 'g-xdr',
    termEn: 'Extended Detection and Response',
    acronym: 'XDR',
    fullNameEn: 'Extended Detection and Response',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    explanationTh:
      'แพลตฟอร์มต่อยอดจาก EDR ที่รวบรวมและเชื่อมโยงข้อมูล Telemetry จากหลายชั้นความมั่นคงปลอดภัยเข้าด้วยกันแบบบูรณาการ ทั้ง Endpoint, Network, Email, Identity และ Cloud Workload เพื่อให้เห็นภาพการโจมตีข้ามระบบและตอบสนองแบบครบวงจร',
    usageContextTh:
      'ช่วยลดภาระการเชื่อมข้อมูลข้ามเครื่องมือที่แยกส่วนกันของทีม SOC และเร่งความเร็วในการตรวจจับและหยุดการโจมตีแบบ Multi-stage',
    relatedLessonIds: ['L4-07']
  },
  {
    id: 'g-uba',
    termEn: 'User Behavior Analytics',
    acronym: 'UBA',
    fullNameEn: 'User Behavior Analytics',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    explanationTh:
      'เทคโนโลยีวิเคราะห์พฤติกรรมผู้ใช้งาน (มักรวมถึงอุปกรณ์หรือ UEBA) โดยสร้างรูปแบบพฤติกรรมปกติ (Baseline) แล้วใช้สถิติหรือการเรียนรู้ของเครื่องตรวจจับความผิดปกติ เช่น การดาวน์โหลดไฟล์ปริมาณมหาศาลนอกเวลาทำงาน หรือการเข้าถึงระบบที่ไม่เคยใช้งานมาก่อน',
    usageContextTh:
      'มีประสิทธิภาพสูงในการตรวจจับบัญชีที่ถูกยึดครอง (Compromised Credentials) และ Insider Threat ที่เครื่องมือจับ Signature ทั่วไปตรวจไม่พบ',
    relatedLessonIds: ['L4-07', 'L2-01']
  },
  {
    id: 'g-selinux-gpo',
    termEn: 'SELinux & Group Policy (GPO)',
    acronym: 'SELinux / GPO',
    fullNameEn: 'Security-Enhanced Linux / Group Policy Object',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    explanationTh:
      'กลไกเสริมความแข็งแกร่งระดับระบบปฏิบัติการ: SELinux บังคับใช้ Mandatory Access Control (MAC) ในเคอร์เนล Linux เพื่อจำกัดสิทธิ์กระบวนการและบริการอย่างเข้มงวดแม้ถูกยึดครอง ส่วน Group Policy (GPO) ใช้บริหารจัดการและบังคับการตั้งค่าความปลอดภัยบนเครื่อง Windows ในโดเมน Active Directory จากส่วนกลาง',
    usageContextTh:
      'ข้อสอบนิยมจับคู่เทคโนโลยีตาม OS: บังคับ Secure Baseline เครื่อง Windows จำนวนมากใช้ GPO ส่วนจำกัดขอบเขตการทำงานของ Daemon บน Linux ใช้ SELinux',
    relatedLessonIds: ['L4-07', 'L4-01']
  },
  {
    id: 'g-sso-federation',
    termEn: 'Single Sign-On & Identity Federation',
    acronym: 'SSO',
    fullNameEn: 'Single Sign-On',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    explanationTh:
      'SSO คือกลไกที่ให้ผู้ใช้ยืนยันตัวตนเพียงครั้งเดียวเพื่อเข้าใช้งานหลายแอปพลิเคชันต่อเนื่องได้โดยไม่ต้องกรอกรหัสผ่านซ้ำ ส่วน Identity Federation คือความเชื่อถือข้ามโดเมนหรือข้ามองค์กรที่ยอมรับการยืนยันตัวตนจาก Identity Provider (IdP) กลางเพื่อเข้าถึงบริการของ Service Provider ต่าง ๆ',
    usageContextTh:
      'ช่วยลดปัญหา Password Fatigue และรวมศูนย์การบังคับใช้ MFA และการเพิกถอนสิทธิ์ (De-provisioning) ไว้ที่ IdP จุดเดียว',
    relatedLessonIds: ['L4-08']
  },
  {
    id: 'g-saml',
    termEn: 'Security Assertion Markup Language',
    acronym: 'SAML',
    fullNameEn: 'Security Assertion Markup Language',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    explanationTh:
      'มาตรฐานเปิดที่ใช้รูปแบบ XML ในการแลกเปลี่ยนข้อมูลยืนยันตัวตนและการกำหนดสิทธิ์ (Authentication & Authorization Assertions) ระหว่าง Identity Provider (IdP) และ Service Provider (SP) เพื่อให้บริการ Enterprise SSO บนเว็บเบราว์เซอร์',
    usageContextTh:
      'นิยมใช้ในองค์กรขนาดใหญ่สำหรับเชื่อมต่อ Active Directory/IdP กับแอปพลิเคชัน SaaS องค์กร ต่างจาก OAuth 2.0 ที่เน้นการมอบสิทธิ์เข้าถึง API/ทรัพยากรแทนผู้ใช้',
    relatedLessonIds: ['L4-08']
  },
  {
    id: 'g-oauth',
    termEn: 'OAuth 2.0',
    acronym: 'OAuth',
    fullNameEn: 'Open Authorization 2.0',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    explanationTh:
      'กรอบมาตรฐานการมอบหมายสิทธิ์แบบจำกัด (Delegated Authorization) ที่ช่วยให้ผู้ใช้อนุญาตให้แอปพลิเคชันบุคคลที่สามเข้าถึงข้อมูลหรือ API ของตนบนบริการอื่นได้ผ่าน Access Token โดยไม่ต้องเปิดเผยรหัสผ่านจริงให้กับแอปนั้น (และมักใช้คู่กับ OpenID Connect เมื่อต้องการการยืนยันตัวตน)',
    usageContextTh:
      'จุดแยกสำคัญในข้อสอบ: SAML เน้น Enterprise SSO/Authentication ส่วน OAuth เน้น Authorization อนุญาตแอปเข้าถึงทรัพยากรและ API',
    relatedLessonIds: ['L4-08']
  },
  {
    id: 'g-ldap',
    termEn: 'Lightweight Directory Access Protocol',
    acronym: 'LDAP',
    fullNameEn: 'Lightweight Directory Access Protocol',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    explanationTh:
      'โปรโตคอลมาตรฐานสำหรับสืบค้นและแก้ไขข้อมูลในระบบสารบบ (Directory Services เช่น Active Directory) ที่จัดเก็บข้อมูลผู้ใช้ กลุ่ม และทรัพยากรองค์กร โดยเวอร์ชันปลอดภัยควรใช้ LDAPS (ผ่าน TLS) เพื่อป้องกันข้อมูลรับรองถูกดักฟังแบบ Plaintext',
    usageContextTh:
      'ใช้เชื่อมโยงระบบภายในองค์กรเพื่อตรวจบัญชีผู้ใช้และกลุ่มสิทธิ์ต่าง ๆ ต่างจาก SAML/OAuth ที่ออกแบบมาเพื่อ Web Federation ข้ามอินเทอร์เน็ต',
    relatedLessonIds: ['L4-08', 'L4-06']
  },
  {
    id: 'g-mfa',
    termEn: 'Multifactor Authentication',
    acronym: 'MFA',
    fullNameEn: 'Multifactor Authentication',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    explanationTh:
      'การยืนยันตัวตนที่ต้องอาศัยปัจจัยอย่างน้อย 2 ประเภทที่แตกต่างกันจากกลุ่มปัจจัย: Something you know (รหัสผ่าน/PIN), Something you have (Hardware Security Key/Smart Card/Authenticator App), Something you are (ลายนิ้วมือ/ใบหน้า) และ Somewhere you are (พิกัด/เครือข่ายที่อนุญาต)',
    usageContextTh:
      'ข้อควรระวังในข้อสอบ: การใช้รหัสผ่านร่วมกับคำถามกันลืม (Security Question) หรือ PIN ถือเป็น Single-factor แบบรู้จำซ้ำสองชนิด ไม่ใช่ MFA ที่แท้จริง และ Hardware Security Key (FIDO2) ป้องกัน Phishing ได้ดีกว่า SMS OTP',
    relatedLessonIds: ['L4-09']
  },
  {
    id: 'g-mac',
    termEn: 'Mandatory Access Control',
    acronym: 'MAC',
    fullNameEn: 'Mandatory Access Control',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    explanationTh:
      'โมเดลควบคุมการเข้าถึงที่เข้มงวดที่สุด โดยระบบกลางและผู้ดูแลความปลอดภัยเป็นผู้กำหนดป้ายระดับความลับ (Classification Labels) และระดับสิทธิ์ (Clearance) ตายตัว เจ้าของไฟล์ไม่สามารถเปลี่ยนสิทธิ์ให้ผู้อื่นเข้าถึงได้เอง',
    usageContextTh:
      'พบในระบบรัฐบาล การทหาร และกลไกเคอร์เนลอย่าง SELinux ต่างจาก DAC ที่เจ้าของไฟล์กำหนดสิทธิ์แบ่งปันได้เอง',
    relatedLessonIds: ['L4-09']
  },
  {
    id: 'g-dac',
    termEn: 'Discretionary Access Control',
    acronym: 'DAC',
    fullNameEn: 'Discretionary Access Control',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    explanationTh:
      'โมเดลควบคุมการเข้าถึงที่เจ้าของทรัพยากรหรือไฟล์ (Resource Owner) มีดุลยพินิจกำหนดสิทธิ์ (Read/Write/Execute) ให้ผู้ใช้หรือกลุ่มอื่นเข้าถึงข้อมูลของตนเองได้ตามต้องการผ่าน Access Control List (ACL)',
    usageContextTh:
      'ใช้งานแพร่หลายในระบบไฟล์ของ Windows (NTFS) และ Linux ทั่วไป มีความยืดหยุ่นสูงแต่เสี่ยงต่อการที่ผู้ใช้แชร์สิทธิ์กว้างเกินจำเป็น',
    relatedLessonIds: ['L4-09']
  },
  {
    id: 'g-rbac',
    termEn: 'Role-Based Access Control',
    acronym: 'RBAC',
    fullNameEn: 'Role-Based Access Control',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    explanationTh:
      'โมเดลควบคุมการเข้าถึงที่ผูกชุดสิทธิ์เข้ากับ "บทบาทหน้าที่" (Role) หรือตำแหน่งงานในองค์กร แล้วจึงกำหนดให้ผู้ใช้แต่ละคนสังกัดบทบาทนั้น ๆ ทำให้บริหารจัดการสิทธิ์พนักงานจำนวนมากและเมื่อย้ายตำแหน่งงานได้ง่ายและสม่ำเสมอ',
    usageContextTh:
      'เป็นโมเดลหลักในองค์กรธุรกิจทั่วไป แต่หากต้องการเงื่อนไขบริบทแบบพลวัต เช่น เวลา สถานที่ หรือระดับความเสี่ยงอุปกรณ์ ควรใช้ ABAC',
    relatedLessonIds: ['L4-09']
  },
  {
    id: 'g-abac',
    termEn: 'Attribute-Based Access Control',
    acronym: 'ABAC',
    fullNameEn: 'Attribute-Based Access Control',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    explanationTh:
      'โมเดลควบคุมการเข้าถึงแบบละเอียด (Fine-grained) ที่ประเมินนโยบายจากคุณลักษณะ (Attributes) หลายมิติร่วมกันแบบเรียลไทม์ ได้แก่ คุณลักษณะของผู้ใช้ ทรัพยากร การกระทำ และสภาพแวดล้อม (เช่น เวลา สถานที่ สุขภาพอุปกรณ์)',
    usageContextTh:
      'เหมาะกับสถาปัตยกรรม Zero Trust และระบบคลาวด์ที่ต้องการเงื่อนไขซับซ้อน เช่น "อนุญาตให้ฝ่าย HR แก้ไขข้อมูลเฉพาะในเวลาทำการ จากอุปกรณ์ที่ผ่าน MDM และอยู่ในประเทศเท่านั้น"',
    relatedLessonIds: ['L4-09', 'L1-03']
  },
  {
    id: 'g-pam',
    termEn: 'Privileged Access Management',
    acronym: 'PAM',
    fullNameEn: 'Privileged Access Management',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    explanationTh:
      'ชุดเครื่องมือและกระบวนการควบคุมดูแลบัญชีที่มีสิทธิ์ระดับสูง (เช่น Domain Admin, Root, Service Accounts) โดยอาศัยฟีเจอร์สำคัญอย่าง Password Vaulting (เก็บและหมุนเวียนรหัสผ่านอัตโนมัติ), Just-in-Time (JIT) Permissions (ขออนุมัติสิทธิ์ชั่วคราวเฉพาะช่วงทำงาน) และ Ephemeral Credentials (ข้อมูลรับรองแบบใช้ครั้งเดียวหมดอายุทันที)',
    usageContextTh:
      'ลดความเสี่ยงจาก Standing Privileges (การถือสิทธิ์แอดมินค้างไว้ตลอดเวลา) และช่วยให้ตรวจสอบบันทึกเซสชันของผู้ดูแลระบบย้อนหลังได้',
    relatedLessonIds: ['L4-09']
  },
  {
    id: 'g-soar',
    termEn: 'Security Orchestration, Automation, and Response',
    acronym: 'SOAR',
    fullNameEn: 'Security Orchestration, Automation, and Response',
    domainId: 'D4',
    objectiveIds: ['4.7'],
    explanationTh:
      'แพลตฟอร์มที่เชื่อมโยงเครื่องมือความปลอดภัยต่าง ๆ ผ่าน API (Orchestration) และรันขั้นตอน Playbook แบบอัตโนมัติ (Automation) เพื่อรับมือกับเหตุการณ์ความปลอดภัยอย่างรวดเร็ว เช่น ดึงข้อมูลภัยคุกคาม เปิด Ticket แจ้งเตือน บล็อก IP หรือสั่งกักกันเครื่อง',
    usageContextTh:
      'ทำหน้าที่เป็น Workforce Multiplier ช่วยลด Reaction Time และภาระงานซ้ำซากของทีม SOC แต่ต้องออกแบบ Guardrails และระวังปัญหาความซับซ้อนหรือ Single Point of Failure',
    relatedLessonIds: ['L4-10']
  },
  {
    id: 'g-guardrails-automation',
    termEn: 'Guardrails & Automated Provisioning',
    domainId: 'D4',
    objectiveIds: ['4.7'],
    explanationTh:
      'Automated Provisioning คือการสร้างและกำหนดสิทธิ์บัญชีผู้ใช้หรือทรัพยากรคลาวด์โดยอัตโนมัติตามเทมเพลตมาตรฐาน ส่วน Guardrails คือขอบเขตการควบคุมอัตโนมัติที่ป้องกันไม่ให้การเปลี่ยนแปลงหรือการทำงานของระบบหลุดออกนอกนโยบายความปลอดภัย (เช่น บล็อกการสร้าง Storage ที่เปิดสาธารณะ)',
    usageContextTh:
      'ช่วยบังคับใช้ Secure Baselines และขยายระบบได้อย่างปลอดภัย (Secure Scaling) โดยลด Technical Debt และความผิดพลาดจากการตั้งค่าด้วยมือ',
    relatedLessonIds: ['L4-10', 'L3-01']
  },
  {
    id: 'g-incident-response',
    termEn: 'Incident Response Lifecycle (PICERL)',
    acronym: 'IR',
    fullNameEn: 'Incident Response',
    domainId: 'D4',
    objectiveIds: ['4.8'],
    explanationTh:
      'วงจรการรับมือเหตุการณ์ภัยคุกคามทางไซเบอร์ตามมาตรฐาน ได้แก่ Preparation (เตรียมความพร้อม), Detection and Analysis (ตรวจจับและวิเคราะห์), Containment (กักกันไม่ให้ลุกลาม), Eradication (กำจัดต้นตอ), Recovery (กู้คืนระบบอย่างปลอดภัย) และ Lessons Learned (สรุปบทเรียนปรับปรุง)',
    usageContextTh:
      'ข้อสอบนิยมถามลำดับขั้นตอนและการตัดสินใจในแต่ละขั้น เช่น เมื่อยืนยันการบุกรุกแล้วต้องทำ Containment (เช่น แยกเครือข่ายผ่าน EDR) ก่อน Eradication และต้องทำ Recovery หลังมั่นใจว่ากำจัดต้นตอแล้ว',
    relatedLessonIds: ['L4-11']
  },
  {
    id: 'g-threat-hunting',
    termEn: 'Threat Hunting',
    domainId: 'D4',
    objectiveIds: ['4.8'],
    explanationTh:
      'กิจกรรมการค้นหาภัยคุกคามที่แฝงตัวอยู่ในเครือข่ายอย่างเชิงรุก (Proactive) โดยตั้งสมมติฐานและวิเคราะห์ Telemetry, Log และพฤติกรรมผิดปกติเพื่อหาผู้บุกรุกที่หลบเลี่ยงการแจ้งเตือนอัตโนมัติของเครื่องมือป้องกันได้',
    usageContextTh:
      'ต่างจากการรอรับ Alert ใน SOC เพราะ Threat Hunting เป็นการออกตามหาภัยคุกคามล่วงหน้าก่อนเกิดความเสียหายใหญ่',
    relatedLessonIds: ['L4-11']
  },
  {
    id: 'g-chain-of-custody',
    termEn: 'Chain of Custody',
    domainId: 'D4',
    objectiveIds: ['4.8'],
    explanationTh:
      'เอกสารบันทึกประวัติการครอบครอง ควบคุม เคลื่อนย้าย และตรวจสอบหลักฐานดิจิทัลหรือกายภาพอย่างต่อเนื่องไม่ขาดตอน (ใครเป็นผู้เก็บ ส่งต่อให้ใคร เมื่อใด ที่ไหน และค่า Hash ยืนยันความถูกต้อง) เพื่อพิสูจน์ว่าหลักฐานไม่ถูกดัดแปลง',
    usageContextTh:
      'เป็นหัวใจสำคัญของ Digital Forensics ที่ทำให้หลักฐานดิจิทัลเป็นที่ยอมรับในชั้นศาลหรือการสอบสวนทางกฎหมาย',
    relatedLessonIds: ['L4-11']
  },
  {
    id: 'g-legal-hold-ediscovery',
    termEn: 'Legal Hold & E-Discovery',
    domainId: 'D4',
    objectiveIds: ['4.8'],
    explanationTh:
      'Legal Hold คือคำสั่งทางกฎหมายหรือฝ่ายนิติกรให้ระงับการลบ ทำลาย หรือเขียนทับข้อมูล อีเมล และ Log ที่เกี่ยวข้องกับคดีความหรือการสอบสวนเป็นการชั่วคราว (ยกเว้นนโยบายลบข้อมูลตามรอบปกติ) ส่วน E-Discovery คือกระบวนการค้นหา รวบรวม และส่งมอบหลักฐานอิเล็กทรอนิกส์เพื่อใช้ในกระบวนการทางกฎหมาย',
    usageContextTh:
      'ในขั้นตอน Forensic Preservation ต้องประกาศ Legal Hold ทันทีและสร้าง Forensic Image พร้อมคำนวณค่า Hash เสมอ',
    relatedLessonIds: ['L4-11', 'L4-03']
  },
  {
    id: 'g-rca',
    termEn: 'Root Cause Analysis',
    acronym: 'RCA',
    fullNameEn: 'Root Cause Analysis',
    domainId: 'D4',
    objectiveIds: ['4.8'],
    explanationTh:
      'กระบวนการสืบสวนวิเคราะห์เพื่อค้นหาสาเหตุที่แท้จริง (ต้นตอเชิงเทคนิคและกระบวนการ) ที่ทำให้เกิดเหตุการณ์ความปลอดภัยหรือระบบล่ม ไม่ใช่เพียงแก้ปัญหาเฉพาะหน้า เพื่อนำไปสู่การป้องกันไม่ให้เกิดซ้ำในอนาคต',
    usageContextTh:
      'มักดำเนินการช่วง Eradication ต่อเนื่องถึง Lessons Learned หลังเหตุการณ์สงบลง',
    relatedLessonIds: ['L4-11']
  },
  {
    id: 'g-pcap',
    termEn: 'Packet Capture',
    acronym: 'PCAP',
    fullNameEn: 'Packet Capture',
    domainId: 'D4',
    objectiveIds: ['4.9'],
    explanationTh:
      'การดักจับและบันทึกแพ็กเก็ตเครือข่ายทั้งหมด (ทั้ง Header และ Payload) ลงในไฟล์รูปแบบมาตรฐานเพื่อนำมาวิเคราะห์รายละเอียดเชิงลึกในกระบวนการสืบสวนเหตุการณ์และการตรวจสอบความผิดปกติของการสื่อสาร',
    usageContextTh:
      'ให้ความละเอียดสูงสุดกว่า NetFlow แต่ใช้พื้นที่จัดเก็บมากและอาจอ่านเนื้อหาไม่ได้ทั้งหมดหากทราฟฟิกเข้ารหัสโดยไม่มีคีย์ถอดรหัส',
    relatedLessonIds: ['L4-12']
  },
  {
    id: 'g-metadata',
    termEn: 'Metadata',
    domainId: 'D4',
    objectiveIds: ['4.9'],
    explanationTh:
      'ข้อมูลที่อธิบายรายละเอียดเกี่ยวกับข้อมูลหรือการสื่อสารอื่น (Data about data) เช่น เวลาสร้าง แก้ไข ขนาดไฟล์ ผู้ส่ง-ผู้รับอีเมล ขนาดแพ็กเก็ต หรือพอร์ตปลายทาง โดยไม่จำเป็นต้องเปิดดูเนื้อหาภายในข้อมูลโดยตรง',
    usageContextTh:
      'มีประโยชน์มากในการสืบสวนเมื่อเนื้อหาหลักถูกเข้ารหัส เพราะนักวิเคราะห์ยังเห็นรูปแบบการติดต่อ ความถี่ และปริมาณข้อมูลออก (Exfiltration) ได้จาก Metadata',
    relatedLessonIds: ['L4-12']
  },

  // ===========================================================================
  // Domain 5.0 — Security Program Management and Oversight (5.1 – 5.6)
  // ===========================================================================
  {
    id: 'g-governance-hierarchy',
    termEn: 'Security Governance Hierarchy',
    domainId: 'D5',
    objectiveIds: ['5.1'],
    explanationTh:
      'ลำดับชั้นเอกสารกำกับดูแลความปลอดภัย ได้แก่ Policies (นโยบายระดับสูงจากฝ่ายบริหารที่บังคับปฏิบัติ), Standards (ข้อกำหนดเชิงปริมาณหรือเทคนิคที่ต้องทำตามนโยบาย เช่น ความยาวรหัสผ่าน), Procedures (ขั้นตอนวิธีทำทีละขั้นสำหรับเจ้าหน้าที่) และ Guidelines (คำแนะนำแนวทางปฏิบัติที่ดีซึ่งยืดหยุ่นกว่าและไม่บังคับตายตัว)',
    usageContextTh:
      'ข้อสอบนิยมถามแยกความแตกต่างระหว่าง Mandatory (Policies, Standards, Procedures) กับ Advisory/Recommended (Guidelines)',
    relatedLessonIds: ['L5-01']
  },
  {
    id: 'g-aup',
    termEn: 'Acceptable Use Policy',
    acronym: 'AUP',
    fullNameEn: 'Acceptable Use Policy',
    domainId: 'D5',
    objectiveIds: ['5.1', '5.6'],
    explanationTh:
      'นโยบายที่ระบุขอบเขตการใช้งานที่เหมาะสมและข้อห้ามในการใช้ระบบไอที เครือข่าย อีเมล อินเทอร์เน็ต และอุปกรณ์ขององค์กร ซึ่งผู้ใช้งานทุกคนต้องรับทราบและลงนามยอมรับก่อนเข้าใช้งานระบบ',
    usageContextTh:
      'จัดเป็น Directive Control ที่เป็นทั้งเอกสารกำหนดกติกาใน Onboarding และหลักฐานทางวินัย/กฎหมายหากพนักงานฝ่าฝืนกฎการใช้งานระบบ',
    relatedLessonIds: ['L5-01', 'L5-07', 'L1-01']
  },
  {
    id: 'g-data-roles',
    termEn: 'Data Roles (Owner, Controller, Processor, Custodian, Steward)',
    domainId: 'D5',
    objectiveIds: ['5.1', '5.4'],
    explanationTh:
      'บทบาทความรับผิดชอบต่อข้อมูลในองค์กร: Data Owner คือผู้บริหารระดับสูงที่ตัดสินใจจัดชั้นความลับและอนุมัติสิทธิ์เข้าถึง, Data Controller คือองค์กรหรือผู้กำหนดวัตถุประสงค์และวิธีการประมวลผลข้อมูลส่วนบุคคล, Data Processor คือผู้ประมวลผลข้อมูลแทน Controller ตามคำสั่ง (เช่น ผู้ให้บริการ Cloud/Payroll), Data Custodian คือทีมเทคนิค (SysAdmin/DBA) ที่ดูแลการตั้งค่า ACL การเข้ารหัส และ Backup ประจำวันตามคำสั่ง Owner และ Data Steward คือผู้ดูแลระดับปฏิบัติการที่กำกับคุณภาพ ความถูกต้อง นิยาม และการติดป้ายจำแนกข้อมูล (Metadata Labeling)',
    usageContextTh:
      'ข้อสอบมักถามแยกบทบาทระหว่าง Owner/Controller (กำหนดนโยบายและรับผิดชอบตามกฎหมาย), Custodian (ผู้ปฏิบัติการเทคนิคดูแล Backup และสิทธิ์ระบบ), Steward (ผู้ดูแลคุณภาพและความสอดคล้องของข้อมูล) และ Processor (บุคคลภายนอกที่รับประมวลผลแทน)',
    relatedLessonIds: ['L5-01', 'L5-05']
  },
  {
    id: 'g-qualitative-quantitative-risk',
    termEn: 'Qualitative vs. Quantitative Risk Analysis',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    explanationTh:
      'Qualitative Risk Analysis ประเมินความเสี่ยงเชิงคุณภาพโดยจัดระดับความรุนแรงและโอกาสเกิด (เช่น สูง/กลาง/ต่ำ หรือ Heat Matrix) จากความเชี่ยวชาญซึ่งทำได้รวดเร็ว ส่วน Quantitative Risk Analysis ประเมินความเสี่ยงเป็นตัวเลขมูลค่าทางการเงินและสถิติที่ชัดเจน (SLE, ARO, ALE) เพื่อเปรียบเทียบความคุ้มค่าในการลงทุนด้านความปลอดภัย',
    usageContextTh:
      'ใช้ Qualitative เมื่อขาดข้อมูลตัวเลขชัดเจนหรือต้องการคัดกรองเบื้องต้น และใช้ Quantitative เมื่อต้องคำนวณงบประมาณ Cost-Benefit Analysis เสนอฝ่ายบริหาร',
    relatedLessonIds: ['L5-02']
  },
  {
    id: 'g-sle',
    termEn: 'Single Loss Expectancy',
    acronym: 'SLE',
    fullNameEn: 'Single Loss Expectancy',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    explanationTh:
      'มูลค่าความสูญเสียทางการเงินที่คาดว่าจะเกิดขึ้นจากการเกิดเหตุการณ์ภัยคุกคาม 1 ครั้ง คำนวณจากสูตร SLE = Asset Value (AV) × Exposure Factor (EF) โดย Exposure Factor คือสัดส่วนร้อยละของสินทรัพย์ที่ได้รับความเสียหายต่อเหตุการณ์หนึ่งครั้ง',
    usageContextTh:
      'ตัวอย่างเช่น เซิร์ฟเวอร์มูลค่า $100,000 มี Exposure Factor 30% ค่า SLE จะเท่ากับ $30,000 ต่อเหตุการณ์ 1 ครั้ง จากนั้นจึงนำไปคูณ ARO เพื่อหา ALE',
    relatedLessonIds: ['L5-02']
  },
  {
    id: 'g-aro',
    termEn: 'Annualized Rate of Occurrence',
    acronym: 'ARO',
    fullNameEn: 'Annualized Rate of Occurrence',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    explanationTh:
      'ความถี่เฉลี่ยที่คาดว่าเหตุการณ์ความเสี่ยงหรือภัยคุกคามหนึ่ง ๆ จะเกิดขึ้นในรอบ 1 ปี เช่น หากคาดว่าเกิดทุก ๆ 4 ปี ค่า ARO = 1/4 = 0.25 แต่หากเกิดปีละ 3 ครั้ง ค่า ARO = 3.0',
    usageContextTh:
      'เป็นตัวคูณสำคัญในการแปลงความสูญเสียต่อครั้ง (SLE) ให้เป็นความสูญเสียเฉลี่ยต่อปี (ALE) ในโจทย์คำนวณความเสี่ยงเชิงปริมาณ',
    relatedLessonIds: ['L5-02']
  },
  {
    id: 'g-ale',
    termEn: 'Annualized Loss Expectancy',
    acronym: 'ALE',
    fullNameEn: 'Annualized Loss Expectancy',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    explanationTh:
      'มูลค่าความสูญเสียทางการเงินที่คาดว่าจะเกิดขึ้นเฉลี่ยต่อปี คำนวณจากสูตร ALE = Single Loss Expectancy (SLE) × Annualized Rate of Occurrence (ARO) เพื่อใช้เปรียบเทียบกับต้นทุนประจำปีของมาตรการป้องกัน (Annual Cost of Safeguard)',
    usageContextTh:
      'หลักตัดสินใจลงทุน: หากต้นทุนมาตรการลดความเสี่ยงต่อปีต่ำกว่าส่วนต่างของ ALE ก่อนและหลังติดตั้งมาตรการ ถือว่าคุ้มค่าทางการเงินในการลงทุน',
    relatedLessonIds: ['L5-02']
  },
  {
    id: 'g-risk-strategies',
    termEn: 'Risk Management Strategies',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    explanationTh:
      '4 แนวทางตอบสนองต่อความเสี่ยง: Avoid (หลีกเลี่ยงโดยยกเลิกกิจกรรมหรือระบบที่เสี่ยง), Transfer (โอนความเสี่ยงไปยังบุคคลที่สาม เช่น ซื้อประกันไซเบอร์หรือจ้าง Outsource), Mitigate (ลดโอกาสเกิดหรือผลกระทบด้วยมาตรการควบคุม) และ Accept (ยอมรับความเสี่ยงที่เหลืออยู่โดยบันทึกเป็น Exception หรือ Exemption เมื่อไม่คุ้มค่าที่จะลดเพิ่ม)',
    usageContextTh:
      'ข้อควรระวัง: การซื้อประกันภัย (Cyber Insurance) เป็น Risk Transference ซึ่งโอนภาระทางการเงินแต่ไม่ได้โอนความรับผิดชอบตามกฎหมายหรือความเสียหายด้านชื่อเสียงออกไปทั้งหมด',
    relatedLessonIds: ['L5-03']
  },
  {
    id: 'g-risk-appetite-tolerance',
    termEn: 'Risk Appetite vs. Risk Tolerance',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    explanationTh:
      'Risk Appetite คือระดับความเสี่ยงโดยรวมที่องค์กรเต็มใจรับได้เพื่อบรรลุเป้าหมายธุรกิจ แบ่งเป็น Expansionary (กล้าเสี่ยงเพื่อขยายตัว), Neutral (สมดุล) และ Conservative (ระมัดระวังสูง) ส่วน Risk Tolerance คือขอบเขตความเบี่ยงเบนเฉพาะเจาะจงที่ยอมรับได้รอบเป้าหมายหรือในแต่ละระบบโดยไม่กระทบการดำเนินงานหลัก',
    usageContextTh:
      'หากความเสี่ยงเกิน Risk Threshold ที่ตั้งไว้ใน Risk Register ต้องรายงานผู้บริหารและวางมาตรการ Mitigate เพิ่มเติม',
    relatedLessonIds: ['L5-03']
  },
  {
    id: 'g-risk-register-kri',
    termEn: 'Risk Register & Key Risk Indicators (KRI)',
    acronym: 'KRI',
    fullNameEn: 'Key Risk Indicator',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    explanationTh:
      'Risk Register คือทะเบียนกลางที่รวบรวมความเสี่ยงทั้งหมดขององค์กร พร้อมระบุ Risk Owner, ระดับผลกระทบ, กลยุทธ์จัดการ และสถานะปัจจุบัน ส่วน KRI (Key Risk Indicators) คือตัวชี้วัดสัญญาณเตือนล่วงหน้าว่าความเสี่ยงกำลังเพิ่มสูงขึ้นเข้าใกล้ Risk Threshold ที่กำหนด',
    usageContextTh:
      'ตัวอย่าง KRI เช่น ร้อยละของระบบวิกฤตที่ยังไม่ได้แพตช์เกิน 30 วัน หรือจำนวนเหตุการณ์ Phishing Click Rate ที่สูงกว่าเกณฑ์มาตรฐาน',
    relatedLessonIds: ['L5-03']
  },
  {
    id: 'g-bia',
    termEn: 'Business Impact Analysis',
    acronym: 'BIA',
    fullNameEn: 'Business Impact Analysis',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    explanationTh:
      'การวิเคราะห์ผลกระทบทางธุรกิจเพื่อระบุกระบวนการทางธุรกิจที่สำคัญ (Mission-Critical Functions) ประเมินผลกระทบทางการเงินและการดำเนินงานหากระบบหยุดชะงัก และกำหนดเป้าหมายเวลาในการกู้คืน ได้แก่ RTO, RPO, MTTR และ MTBF',
    usageContextTh:
      'ผลลัพธ์จาก BIA เป็นข้อมูลตั้งต้นสำคัญในการออกแบบ Business Continuity Plan (BCP), Disaster Recovery Plan (DRP) และการเลือก Hot/Warm/Cold Sites',
    relatedLessonIds: ['L5-03', 'L3-07']
  },
  {
    id: 'g-rto',
    termEn: 'Recovery Time Objective',
    acronym: 'RTO',
    fullNameEn: 'Recovery Time Objective',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    explanationTh:
      'ระยะเวลาสูงสุดที่องค์กรยอมรับได้ในการกู้คืนระบบหรือกระบวนการธุรกิจให้กลับมาให้บริการตามปกติได้อีกครั้งนับตั้งแต่เกิดเหตุขัดข้อง (Downtime สูงสุดที่ทนได้) ต่างจาก RPO ที่วัดปริมาณข้อมูลที่ยอมให้สูญหายได้',
    usageContextTh:
      'ระบบที่มี RTO สั้นมาก (เช่น 15 นาที) ต้องลงทุนในโครงสร้าง High Availability หรือ Hot Site แทนการกู้คืนจาก Cold Site หรือเทปสำรองที่ช้ากว่า',
    relatedLessonIds: ['L5-03', 'L3-07']
  },
  {
    id: 'g-rpo',
    termEn: 'Recovery Point Objective',
    acronym: 'RPO',
    fullNameEn: 'Recovery Point Objective',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    explanationTh:
      'จุดเวลาก่อนเกิดเหตุการณ์หรือปริมาณข้อมูลย้อนหลังสูงสุดที่องค์กรยอมรับให้สูญหายได้เมื่อระบบล่ม วัดเป็นช่วงเวลา เช่น หากกำหนด RPO = 1 ชั่วโมง องค์กรต้องสำรองข้อมูลหรือทำ Replication ทุก ๆ ไม่เกิน 1 ชั่วโมง',
    usageContextTh:
      'จำให้แม่น: RPO เป็นตัวกำหนดความถี่ของการ Backup/Replication ส่วน RTO เป็นตัวกำหนดความเร็วของระบบกู้คืน',
    relatedLessonIds: ['L5-03', 'L3-08']
  },
  {
    id: 'g-mttr',
    termEn: 'Mean Time to Repair / Recover',
    acronym: 'MTTR',
    fullNameEn: 'Mean Time to Repair / Recover',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    explanationTh:
      'เวลาเฉลี่ยที่ใช้ในการวินิจฉัย ซ่อมแซม หรือกู้คืนอุปกรณ์และระบบที่เสียหายให้กลับมาทำงานเป็นปกติได้อีกครั้ง (ค่านี้ยิ่งน้อยยิ่งดี)',
    usageContextTh:
      'ในการวางแผน BIA ค่า MTTR จริงของทีมซ่อมบำรุงต้องไม่เกินกว่าค่า RTO ที่ธุรกิจกำหนดไว้ มิฉะนั้นจะไม่สามารถกู้ระบบได้ทันเวลาเป้าหมาย',
    relatedLessonIds: ['L5-03']
  },
  {
    id: 'g-mtbf',
    termEn: 'Mean Time Between Failures',
    acronym: 'MTBF',
    fullNameEn: 'Mean Time Between Failures',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    explanationTh:
      'ระยะเวลาเฉลี่ยที่อุปกรณ์หรือระบบสามารถทำงานได้ต่อเนื่องเป็นปกติก่อนที่จะเกิดความขัดข้องครั้งถัดไป (วัดความน่าเชื่อถือของระบบ ค่านี้ยิ่งมากยิ่งดี)',
    usageContextTh:
      'ใช้ประกอบการตัดสินใจจัดหาอุปกรณ์สำรอง (Spare Parts) และวางแผนเปลี่ยนอุปกรณ์ก่อนถึงอายุขัยที่เสี่ยงต่อการล่ม',
    relatedLessonIds: ['L5-03']
  },
  {
    id: 'g-nda',
    termEn: 'Non-Disclosure Agreement',
    acronym: 'NDA',
    fullNameEn: 'Non-Disclosure Agreement',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    explanationTh:
      'ข้อตกลงรักษาความลับทางกฎหมายระหว่างสองฝ่ายหรือหลายฝ่าย เพื่อห้ามไม่ให้เปิดเผยข้อมูลความลับทางธุรกิจ ข้อมูลทางเทคนิค หรือช่องโหว่ที่รับทราบระหว่างการทำงานร่วมกันแก่บุคคลภายนอก',
    usageContextTh:
      'เป็นเอกสารพื้นฐานที่ต้องลงนามก่อนเปิดเผยข้อมูลให้ผู้ขาย (Vendor), พันธมิตร, พนักงานใหม่ หรือผู้ทดสอบเจาะระบบ (Pentester)',
    relatedLessonIds: ['L5-04', 'L5-06']
  },
  {
    id: 'g-sla',
    termEn: 'Service Level Agreement',
    acronym: 'SLA',
    fullNameEn: 'Service Level Agreement',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    explanationTh:
      'ข้อตกลงระดับการให้บริการที่ระบุตัวชี้วัดคุณภาพและความพร้อมใช้งานที่เป็นรูปธรรมระหว่างผู้ให้บริการและลูกค้า เช่น เปอร์เซ็นต์ Uptime (99.9%), เวลาตอบสนองเหตุขัดข้อง, เวลาแก้ไขปัญหา และบทลงโทษหรือเครดิตชดเชยหากทำไม่ได้ตามเกณฑ์',
    usageContextTh:
      'ต่างจาก MSA และ SOW ตรงที่ SLA เจาะจงเรื่อง "มาตรฐานประสิทธิภาพและเวลาตอบสนอง" รวมถึงระยะเวลาแจ้งเตือนเมื่อเกิด Data Breach ของผู้ให้บริการ',
    relatedLessonIds: ['L5-04']
  },
  {
    id: 'g-msa',
    termEn: 'Master Service Agreement',
    acronym: 'MSA',
    fullNameEn: 'Master Service Agreement',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    explanationTh:
      'สัญญาหลักระยะยาวที่วางกรอบเงื่อนไขทางกฎหมาย ความรับผิดชอบ การชำระเงิน ทรัพย์สินทางปัญญา และการระงับข้อพิพาทสำหรับการทำธุรกิจต่อเนื่องระหว่างองค์กรกับผู้ให้บริการ เพื่อไม่ต้องเจรจาข้อกฎหมายพื้นฐานใหม่ทุกครั้งที่มีโครงการย่อย',
    usageContextTh:
      'เมื่อเริ่มโครงการเฉพาะทางภายใต้ MSA จึงจะจัดทำ SOW (Statement of Work) แนบเพิ่มเติมเพื่อระบุรายละเอียดเนื้องานและกำหนดส่งมอบของโครงการนั้น ๆ',
    relatedLessonIds: ['L5-04']
  },
  {
    id: 'g-sow',
    termEn: 'Statement of Work',
    acronym: 'SOW',
    fullNameEn: 'Statement of Work',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    explanationTh:
      'เอกสารแนบท้ายหรือคำสั่งงานเฉพาะโครงการ (รวมถึง Work Order: WO) ที่ระบุขอบเขตงาน ส่งมอบงาน (Deliverables) กำหนดเวลา สถานที่ทำงาน ค่าใช้จ่าย และเกณฑ์การตรวจรับงานอย่างละเอียดสำหรับโครงการหนึ่ง ๆ',
    usageContextTh:
      'มักอ้างอิงอยู่ภายใต้สัญญาหลัก MSA เพื่อใช้บริหารงานจ้างเหมา พัฒนาซอฟต์แวร์ หรือจ้างทำ Penetration Testing เฉพาะรอบ',
    relatedLessonIds: ['L5-04']
  },
  {
    id: 'g-mou',
    termEn: 'Memorandum of Understanding',
    acronym: 'MOU',
    fullNameEn: 'Memorandum of Understanding',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    explanationTh:
      'บันทึกความเข้าใจที่แสดงเจตนารมณ์ร่วมกันและแนวทางความร่วมมือระหว่างสององค์กรหรือหน่วยงาน โดยทั่วไปไม่มีผลผูกพันบังคับทางกฎหมายหรือค่าปรับทางการเงินเข้มงวดเท่าสัญญาทางการค้า',
    usageContextTh:
      'มักใช้ในระยะเริ่มต้นความร่วมมือ ระหว่างหน่วยงานภาครัฐ สถาบันการศึกษา หรือการตกลงความช่วยเหลือด้าน Incident Response ระหว่างองค์กรพันธมิตร ก่อนขยับไปทำ MOA หรือสัญญาจริง',
    relatedLessonIds: ['L5-04']
  },
  {
    id: 'g-moa',
    termEn: 'Memorandum of Agreement',
    acronym: 'MOA',
    fullNameEn: 'Memorandum of Agreement',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    explanationTh:
      'บันทึกข้อตกลงที่ลงรายละเอียดความรับผิดชอบ เงื่อนไขการปฏิบัติงาน และภาระผูกพันของแต่ละฝ่ายชัดเจนและเป็นทางการมากกว่า MOU โดยมักมีผลผูกพันตามข้อตกลงระหว่างกันอย่างเป็นรูปธรรมแม้บางกรณีจะไม่ใช่สัญญาเชิงพาณิชย์เต็มรูปแบบ',
    usageContextTh:
      'ข้อสอบนิยมเทียบ MOU (แสดงเจตนารมณ์ร่วมกันแบบไม่เป็นทางการมากนัก) กับ MOA (ระบุหน้าที่ เงื่อนไข และข้อผูกพันที่ต้องปฏิบัติชัดเจนกว่า)',
    relatedLessonIds: ['L5-04']
  },
  {
    id: 'g-bpa',
    termEn: 'Business Partners Agreement',
    acronym: 'BPA',
    fullNameEn: 'Business Partners Agreement',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    explanationTh:
      'สัญญาความร่วมมือทางธุรกิจ (บางแหล่งเรียกว่า Business Partnership Agreement) ที่กำหนดโครงสร้างการลงทุน การแบ่งปันผลกำไร/ขาดทุน ความรับผิดชอบด้านการดำเนินงาน และอำนาจการตัดสินใจระหว่างหุ้นส่วนทางธุรกิจ',
    usageContextTh:
      'ในบริบทความปลอดภัยใช้กำหนดความรับผิดชอบร่วมด้านข้อมูลและความปลอดภัยเมื่อสององค์กรทำธุรกิจร่วมทุนหรือเชื่อมต่อระบบร่วมกัน',
    relatedLessonIds: ['L5-04']
  },
  {
    id: 'g-right-to-audit-due-diligence',
    termEn: 'Right-to-Audit & Vendor Due Diligence',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    explanationTh:
      'Vendor Due Diligence คือการตรวจสอบประวัติ สถานะทางการเงิน มาตรการความปลอดภัย และความเสี่ยงห่วงโซ่อุปทานของผู้ให้บริการก่อนตัดสินใจคัดเลือก ส่วน Right-to-Audit Clause คือเงื่อนไขในสัญญาที่ให้สิทธิ์องค์กรลูกค้าหรือผู้ตรวจสอบอิสระเข้าตรวจประเมินมาตรการความปลอดภัยของผู้ให้บริการได้',
    usageContextTh:
      'ช่วยป้องกันความเสี่ยงจาก Third-party และ Subcontractors ตลอดอายุสัญญา (Vendor Monitoring) พร้อมระบุ Rules of Engagement หากมีการทดสอบระบบ',
    relatedLessonIds: ['L5-04']
  },
  {
    id: 'g-gdpr',
    termEn: 'General Data Protection Regulation',
    acronym: 'GDPR',
    fullNameEn: 'General Data Protection Regulation',
    domainId: 'D5',
    objectiveIds: ['5.4'],
    explanationTh:
      'กฎหมายคุ้มครองข้อมูลส่วนบุคคลที่เข้มงวดของสหภาพยุโรป (EU) ซึ่งมีผลบังคับใช้กับทุกองค์กรทั่วโลกที่เก็บรวบรวมหรือประมวลผลข้อมูลส่วนบุคคลของบุคคลที่อยู่ในเขตสหภาพยุโรป โดยกำหนดหลักความยินยอม การแจ้งเหตุข้อมูลรั่วไหลภายในกำหนด และบทลงโทษปรับสูงสุดที่รุนแรง',
    usageContextTh:
      'เป็นต้นแบบของแนวคิด Data Subject Rights, Data Controller vs. Data Processor, Privacy by Design และ Right to Be Forgotten (RTBF) ในข้อสอบ SY0-701',
    relatedLessonIds: ['L5-05', 'L5-01']
  },
  {
    id: 'g-rtbf',
    termEn: 'Right to Be Forgotten',
    acronym: 'RTBF',
    fullNameEn: 'Right to Be Forgotten (Right to Erasure)',
    domainId: 'D5',
    objectiveIds: ['5.4'],
    explanationTh:
      'สิทธิของเจ้าของข้อมูลส่วนบุคคล (Data Subject) ตามกฎหมายความเป็นส่วนตัว (เช่น GDPR) ที่สามารถร้องขอให้องค์กรผู้ควบคุมข้อมูลลบหรือทำลายข้อมูลส่วนบุคคลของตนออกจากระบบและสื่อสำรองที่เกี่ยวข้องเมื่อหมดความจำเป็นในการประมวลผลหรือถอนความยินยอม',
    usageContextTh:
      'สร้างความท้าทายทางเทคนิคให้กับองค์กรในเรื่อง Data Inventory และการติดตามข้อมูลในระบบ Backup, Log และผู้ประมวลผลภายนอกให้ลบได้ครบถ้วนตามกฎหมาย',
    relatedLessonIds: ['L5-05', 'L4-03']
  },
  {
    id: 'g-due-diligence-due-care',
    termEn: 'Due Diligence vs. Due Care',
    domainId: 'D5',
    objectiveIds: ['5.4'],
    explanationTh:
      'Due Diligence คือการศึกษา ค้นคว้า ตรวจสอบ และประเมินความเสี่ยงหรือข้อกำหนดอย่างรอบคอบก่อนตัดสินใจ (การรู้ว่าควรทำอะไร) ส่วน Due Care คือการลงมือปฏิบัติ วางมาตรการป้องกัน และดูแลรักษาระบบตามมาตรฐานที่ควรกระทำอย่างต่อเนื่อง (การลงมือทำอย่างรับผิดชอบ)',
    usageContextTh:
      'จำง่าย ๆ: Due Diligence = "ทำวิจัยและตรวจสอบให้รอบคอบ", Due Care = "ลงมือดูแลและปฏิบัติตามมาตรการจริง" ทั้งสองอย่างช่วยลดความรับผิดทางกฎหมายหากเกิดเหตุไม่คาดฝัน',
    relatedLessonIds: ['L5-05', 'L5-04']
  },
  {
    id: 'g-controller-vs-processor',
    termEn: 'Data Controller vs. Data Processor',
    domainId: 'D5',
    objectiveIds: ['5.4'],
    explanationTh:
      'Data Controller คือบุคคลหรือองค์กรที่เป็นผู้กำหนดวัตถุประสงค์ ("ทำไม") และวิธีการ ("อย่างไร") ในการเก็บรวบรวมและใช้ข้อมูลส่วนบุคคล ส่วน Data Processor คือบุคคลหรือผู้ให้บริการภายนอกที่ดำเนินการประมวลผลข้อมูลแทน Controller ตามคำสั่งที่ได้รับเท่านั้น',
    usageContextTh:
      'ตัวอย่างเช่น บริษัทอีคอมเมิร์ซที่เก็บข้อมูลลูกค้าคือ Data Controller ส่วนผู้ให้บริการ Cloud Hosting หรือระบบส่งอีเมลการตลาดที่บริษัทจ้างมาประมวลผลคือ Data Processor',
    relatedLessonIds: ['L5-05', 'L5-01']
  },
  {
    id: 'g-soc2',
    termEn: 'SOC 2 Report & Attestation',
    acronym: 'SOC 2',
    fullNameEn: 'System and Organization Controls 2',
    domainId: 'D5',
    objectiveIds: ['5.5', '5.3'],
    explanationTh:
      'รายงานการตรวจสอบอิสระและคำรับรอง (Attestation) ตามมาตรฐาน AICPA Trust Services Criteria (Security, Availability, Processing Integrity, Confidentiality, Privacy) สำหรับผู้ให้บริการระบบคลาวด์และ SaaS โดย Type I ประเมินการออกแบบมาตรการ ณ จุดเวลาหนึ่ง ส่วน Type II ประเมินประสิทธิผลการทำงานต่อเนื่องตลอดช่วงเวลา (เช่น 6–12 เดือน)',
    usageContextTh:
      'เป็นหลักฐาน Independent Third-Party Audit ยอดนิยมที่องค์กรลูกค้าขอดูจาก Vendor ระหว่างการทำ Third-Party Risk Assessment แทนการส่งทีมเข้าไปตรวจศูนย์ข้อมูลเอง',
    relatedLessonIds: ['L5-06', 'L5-04']
  },
  {
    id: 'g-internal-external-audit',
    termEn: 'Internal vs. External Audit',
    domainId: 'D5',
    objectiveIds: ['5.5'],
    explanationTh:
      'Internal Audit ดำเนินการโดยทีมตรวจสอบภายในขององค์กรหรือคณะกรรมการตรวจสอบ (Audit Committee) เพื่อตรวจความสอดคล้องของนโยบายและเตรียมความพร้อมก่อนตรวจจริง ส่วน External Audit ดำเนินการโดยผู้ตรวจสอบอิสระภายนอกหรือหน่วยงานกำกับดูแล (Regulatory Examination) เพื่อออกใบรับรองหรือรายงานความน่าเชื่อถืออย่างเป็นกลาง',
    usageContextTh:
      'External Audit มีความน่าเชื่อถือและเป็นกลางสูงสุดในสายตาคู่ค้าและหน่วยงานรัฐ เพราะปราศจากผลประโยชน์ทับซ้อนภายในองค์กร',
    relatedLessonIds: ['L5-06']
  },
  {
    id: 'g-pentest-environments',
    termEn: 'Penetration Testing Environments',
    domainId: 'D5',
    objectiveIds: ['5.5'],
    explanationTh:
      'ระดับข้อมูลเบื้องต้นที่มอบให้ทีมทดสอบเจาะระบบใน SY0-701: Known Environment (ผู้ทดสอบได้ข้อมูลโครงสร้าง ซอร์สโค้ด และบัญชีครบถ้วน — เดิมเรียก White Box), Partially Known Environment (ได้ข้อมูลบางส่วน เช่น แผนผังเครือข่ายหรือบัญชีผู้ใช้ทั่วไป — เดิมเรียก Gray Box) และ Unknown Environment (ไม่ได้ข้อมูลภายในล่วงหน้า เลียนแบบผู้โจมตีภายนอก — เดิมเรียก Black Box)',
    usageContextTh:
      'Known Environment ประหยัดเวลาและตรวจเชิงลึกได้ครอบคลุมกว่า ส่วน Unknown Environment ทดสอบความสามารถในการตรวจจับและตอบสนองของทีม Blue Team ได้สมจริงที่สุด',
    relatedLessonIds: ['L5-06']
  },
  {
    id: 'g-recon-passive-active',
    termEn: 'Passive vs. Active Reconnaissance',
    domainId: 'D5',
    objectiveIds: ['5.5'],
    explanationTh:
      'ขั้นตอนรวบรวมข้อมูลเป้าหมายใน Penetration Testing: Passive Reconnaissance คือการสืบค้นข้อมูลจากแหล่งสาธารณะ (OSINT, WHOIS, DNS Records, ประกาศรับสมัครงาน) โดยไม่ส่งแพ็กเก็ตติดต่อระบบเป้าหมายโดยตรง ส่วน Active Reconnaissance คือการเชื่อมต่อหรือส่งทราฟฟิกไปยังระบบเป้าหมายตรง ๆ เพื่อค้นหาโฮสต์ พอร์ต และบริการที่เปิดอยู่ ซึ่งอาจทิ้งร่องรอยไว้ใน Log',
    usageContextTh:
      'ทีมทดสอบมักเริ่มจาก Passive Recon ก่อนเสมอเพื่อให้เข้าใจพื้นผิวการโจมตีโดยไม่กระตุ้นสัญญาณเตือน จากนั้นจึงทำ Active Recon ภายใต้ขอบเขต Rules of Engagement',
    relatedLessonIds: ['L5-06']
  },
  {
    id: 'g-opsec',
    termEn: 'Operational Security',
    acronym: 'OPSEC',
    fullNameEn: 'Operational Security',
    domainId: 'D5',
    objectiveIds: ['5.6'],
    explanationTh:
      'กระบวนการและแนวปฏิบัติในการระบุ ควบคุม และปกป้องข้อมูลย่อยที่ไม่เป็นความลับในตัวเอง (Unclassified Details) ไม่ให้รั่วไหลออกไปจนผู้โจมตีสามารถนำมาปะติดปะต่อเป็นภาพใหญ่ของจุดอ่อน แผนปฏิบัติการ หรือเทคโนโลยีที่องค์กรใช้อยู่',
    usageContextTh:
      'ตัวอย่างการฝึกอบรม OPSEC เช่น ห้ามพนักงานโพสต์ภาพบัตรพนักงาน โต๊ะทำงานที่เห็นหน้าจอหรือโพสต์อิท รวมถึงรายละเอียดโครงสร้างซอฟต์แวร์ในประกาศรับสมัครงานหรือโซเชียลมีเดีย',
    relatedLessonIds: ['L5-07']
  },
  {
    id: 'g-phishing-campaigns',
    termEn: 'Phishing Simulation Campaigns',
    domainId: 'D5',
    objectiveIds: ['5.6'],
    explanationTh:
      'โครงการส่งอีเมลจำลองสถานการณ์ Phishing ภายในองค์กรเป็นระยะ เพื่อฝึกให้พนักงานสังเกตสัญญาณหลอกลวง (เช่น โดเมนปลอม ความเร่งด่วนผิดปกติ ไฟล์แนบต้องสงสัย) วัดอัตราการคลิกและอัตราการกดแจ้งรายงาน (Reporting Rate) และให้คำแนะนำเสริมแก่ผู้ที่พลาดกดลิงก์ทันที',
    usageContextTh:
      'ต้องออกแบบให้เน้นการเรียนรู้เชิงสร้างสรรค์ไม่ลงโทษจนพนักงานไม่กล้าแจ้งเหตุ และต้องมีช่องทาง "Report Phishing" ที่ใช้งานง่ายเพื่อให้ SOC ตรวจสอบได้เร็ว',
    relatedLessonIds: ['L5-07', 'L2-03']
  },
  {
    id: 'g-anomalous-behavior-recognition',
    termEn: 'Anomalous Behavior Recognition',
    domainId: 'D5',
    objectiveIds: ['5.6'],
    explanationTh:
      'การฝึกอบรมและสร้างกลไกให้บุคลากรสังเกตเห็นพฤติกรรมที่ผิดปกติในชีวิตประจำวัน ทั้งพฤติกรรมเสี่ยง (Risky), พฤติกรรมที่ไม่ได้คาดหมาย (Unexpected) และความผิดพลาดโดยไม่ตั้งใจ (Unintentional) เช่น เพื่อนร่วมงานเข้าทำงานเวลาแปลกประหลาด เสียบ USB ไม่ทราบที่มา หรือมีคนแปลกหน้าไม่ติดบัตรเดินตามเข้าประตู',
    usageContextTh:
      'ช่วยตรวจจับทั้ง Insider Threat, Tailgating และบัญชีที่อาจถูกสวมรอยใช้งานได้ตั้งแต่เนิ่น ๆ ผ่านวัฒนธรรมการรายงานที่ปลอดภัย',
    relatedLessonIds: ['L5-07', 'L2-01']
  },
  {
    id: 'g-exposure-factor',
    termEn: 'Exposure Factor',
    acronym: 'EF',
    fullNameEn: 'Exposure Factor',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    explanationTh:
      'สัดส่วนร้อยละของมูลค่าสินทรัพย์ที่คาดว่าจะสูญเสียหรือได้รับความเสียหายเมื่อเกิดเหตุการณ์ภัยคุกคามหนึ่งครั้ง (0%–100%) ใช้คูณกับ Asset Value (AV) เพื่อคำนวณ Single Loss Expectancy (SLE = AV × EF)',
    usageContextTh:
      'หากเซิร์ฟเวอร์มูลค่า $100,000 ได้รับความเสียหาย 40% (EF = 0.40) จากเหตุการณ์หนึ่งครั้ง ค่า SLE จะเท่ากับ $40,000 และอาจสูงกว่า 100% ได้ในบางกรณีที่มีค่าฟื้นฟูหรือค่าปรับเพิ่มเติม แต่ในข้อสอบ SY0-701 มักอยู่ในช่วง 0%–100%',
    relatedLessonIds: ['L5-02']
  },
  {
    id: 'g-exception-vs-exemption',
    termEn: 'Policy Exception vs. Exemption',
    domainId: 'D5',
    objectiveIds: ['5.2', '5.1'],
    explanationTh:
      'กลไกการอนุมัติภายใต้ Risk Acceptance เมื่อไม่สามารถปฏิบัติตามนโยบายความปลอดภัยได้: Exception คือการผ่อนผันชั่วคราวแบบมีวันหมดอายุชัดเจนและมักมีมาตรการชดเชย (Compensating Controls) ระหว่างรอแก้ไข ส่วน Exemption คือการยกเว้นถาวรหรือการจัดให้อยู่นอกขอบเขตบังคับใช้ของนโยบายหรือข้อกำหนดเฉพาะอย่างเป็นทางการ',
    usageContextTh:
      'ข้อสอบชอบถามกรณีระบบ Legacy ที่รอปลดระวางใน 6 เดือนโดย Risk Owner ลงนามผ่อนผันแบบมีกำหนดสิ้นสุด — คำตอบคือ Policy Exception (ไม่ใช่ Exemption)',
    relatedLessonIds: ['L5-03', 'L5-01']
  },
  {
    id: 'g-conflict-of-interest',
    termEn: 'Conflict of Interest',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    explanationTh:
      'สภาวการณ์ที่บุคคลหรือผู้มีอำนาจตัดสินใจคัดเลือกผู้ให้บริการมีความสัมพันธ์ส่วนตัว ผลประโยชน์ทางการเงิน หรือการถือหุ้นในผู้ขาย ทำให้ขาดความเป็นกลางในการทำ Vendor Due Diligence และอาจปกปิดความเสี่ยงของคู่ค้า',
    usageContextTh:
      'เมื่อตรวจพบ Conflict of Interest ในคณะกรรมการจัดซื้อ ต้องให้ผู้มีส่วนได้ส่วนเสียเปิดเผยและถอนตัวออกจากการประเมินทันทีก่อนคัดเลือก Vendor หรือทำสัญญา',
    relatedLessonIds: ['L5-04']
  },
  {
    id: 'g-rules-of-engagement',
    termEn: 'Rules of Engagement',
    acronym: 'RoE',
    fullNameEn: 'Rules of Engagement',
    domainId: 'D5',
    objectiveIds: ['5.3', '5.5'],
    explanationTh:
      'เอกสารข้อตกลงเชิงปฏิบัติการและขอบเขตทางเทคนิคที่ลงนามร่วมกันก่อนเริ่มการทดสอบเจาะระบบ (Penetration Testing) หรือภารกิจทดสอบความปลอดภัยกับบุคคลที่สาม ระบุ IP/โดเมนที่อนุญาต ช่วงเวลาทดสอบ ข้อห้าม (เช่น DoS) และช่องทางติดต่อฉุกเฉิน',
    usageContextTh:
      'แยกจาก SOW (ซึ่งระบุขอบเขตงานจ้าง ส่งมอบ และราคาเชิงธุรกิจ) โดย RoE ทำหน้าที่เป็นเกราะป้องกันทางกฎหมายและควบคุมเทคนิคขณะลงมือทดสอบจริง',
    relatedLessonIds: ['L5-04', 'L5-06']
  },
  {
    id: 'g-data-inventory',
    termEn: 'Data Inventory',
    domainId: 'D5',
    objectiveIds: ['5.4', '4.2'],
    explanationTh:
      'บัญชีรายการและแผนที่ระบุตำแหน่งที่จัดเก็บข้อมูลทั้งหมดในองค์กร (ทั้งฐานข้อมูลหลัก Cloud SaaS อุปกรณ์ปลายทาง Backup และ Data Processors ภายนอก) พร้อมเจ้าของข้อมูล ชั้นความลับ และฐานทางกฎหมายในการประมวลผล',
    usageContextTh:
      'เป็นรากฐานสำคัญของ Compliance ด้านความเป็นส่วนตัวและการตอบสนองคำขอเจ้าของข้อมูล (เช่น Right to be Forgotten / SAR) เพื่อให้ค้นหาและลบข้อมูลได้ครบทุกแหล่ง',
    relatedLessonIds: ['L5-05', 'L4-03']
  }
];

export const FLASHCARDS: Flashcard[] = [
  // ===========================================================================
  // Domain 1.0 — Flashcards (fc-001 – fc-015)
  // ===========================================================================
  {
    id: 'fc-001',
    domainId: 'D1',
    objectiveIds: ['1.1'],
    conceptPromptEn:
      'How do Security Control Categories differ from Security Control Types when classifying a single safeguard such as a firewall or security guard?',
    conceptPromptTh:
      'เมื่อพิจารณา Security Control เช่น Firewall หรือเจ้าหน้าที่รักษาความปลอดภัย ความแตกต่างระหว่าง Control Category กับ Control Type คืออะไร?',
    conceptualAnswerTh:
      'Control Category อธิบายว่า "กลไกนั้นทำงานผ่านอะไร" (Technical = ซอฟต์แวร์/ฮาร์ดแวร์, Operational = คน/กระบวนการ, Managerial = นโยบาย/การประเมิน, Physical = สิ่งของ/สถานที่) ส่วน Control Type อธิบายว่า "จุดประสงค์ในการลดความเสี่ยงอยู่ในช่วงเวลาใด" เช่น Preventive หยุดก่อนเกิด, Detective ตรวจพบขณะ/หลังเกิด หรือ Corrective แก้ไขฟื้นฟู ดังนั้น Firewall จัดเป็น Technical + Preventive แต่หากส่ง Log ให้ SIEM ด้วยก็ทำหน้าที่ Detective ร่วมด้วย',
    compareContrastTh:
      'Category ตอบคำถาม "เป็นเครื่องมือ/กลไกชนิดใด" (Technical/Physical/Operational/Managerial) ส่วน Type ตอบคำถาม "ช่วยลดความเสี่ยงอย่างไรและเมื่อใด" (Preventive/Deterrent/Detective/Corrective/Compensating/Directive)',
    relatedLessonIds: ['L1-01']
  },
  {
    id: 'fc-002',
    domainId: 'D1',
    objectiveIds: ['1.1'],
    conceptPromptEn:
      'Why are login warning banners and visible exterior floodlights classified as Deterrent Controls rather than Preventive Controls?',
    conceptPromptTh:
      'เหตุใดแบนเนอร์เตือนทางกฎหมายก่อนล็อกอินและไฟส่องสว่างรอบอาคารจึงจัดเป็น Deterrent Control มากกว่า Preventive Control?',
    conceptualAnswerTh:
      'เพราะทั้งแบนเนอร์ข้อความเตือนและไฟส่องสว่างไม่ได้มีกลไกทางเทคนิคหรือกายภาพที่ "ขวางกั้นหรือหยุดยั้ง" ผู้บุกรุกไม่ให้เข้าถึงระบบได้จริง แต่ทำหน้าที่เชิงจิตวิทยาเพื่อเตือนให้ตระหนักถึงผลลัพธ์ทางกฎหมายหรือความเสี่ยงที่จะถูกจับได้ ทำให้ผู้โจมตีลังเลหรือเปลี่ยนใจไม่ลงมือ',
    compareContrastTh:
      'Deterrent = ลดแรงจูงใจ/ทำให้ลังเล (Banner, Floodlights, Sign) vs Preventive = หยุดยั้งการเข้าถึงได้จริง (Bollards, Access Control Vestibule, Firewall Deny, MFA)',
    relatedLessonIds: ['L1-01', 'L1-03']
  },
  {
    id: 'fc-003',
    domainId: 'D1',
    objectiveIds: ['1.1'],
    conceptPromptEn:
      'In what scenario should an organization implement a Compensating Control, and how does its purpose differ from a Corrective Control?',
    conceptPromptTh:
      'องค์กรควรเลือกใช้ Compensating Control ในสถานการณ์ใด และต่างจาก Corrective Control อย่างไร?',
    conceptualAnswerTh:
      'ควรเลือกใช้ Compensating Control เมื่อมีข้อจำกัดทางเทคนิค กฎหมาย หรือธุรกิจที่ทำให้ไม่สามารถติดตั้งมาตรการหลักตามมาตรฐานได้ เช่น ระบบเครื่องจักรโรงงานหรือเซิร์ฟเวอร์ Legacy ที่ผู้ผลิตหยุดออกแพตช์แล้ว จึงต้องนำ Virtual Patching ผ่าน WAF หรือการแยกเครือข่าย (Network Segmentation) มาช่วยลดความเสี่ยงทดแทน ส่วน Corrective Control มุ่งเน้นการซ่อมแซมและกู้คืนระบบหลังจากเหตุการณ์ความเสียหายเกิดขึ้นแล้ว',
    compareContrastTh:
      'Compensating = ทดแทนมาตรการหลักที่ทำไม่ได้จริง (ใช้ลดความเสี่ยงต่อเนื่อง/ชั่วคราว) vs Corrective = ฟื้นฟูและแก้ไขหลังเกิดเหตุ (Restore Backup, Reimage, Quarantine)',
    relatedLessonIds: ['L1-01', 'L2-09']
  },
  {
    id: 'fc-004',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    conceptPromptEn:
      'Why can a cryptographic hash alone verify Data Integrity, yet fail to provide Non-repudiation?',
    conceptPromptTh:
      'เหตุใดการสร้างค่า Hash ของข้อมูลเพียงอย่างเดียวจึงยืนยัน Integrity ได้ แต่ไม่สามารถให้ Non-repudiation ได้?',
    conceptualAnswerTh:
      'ค่า Hash ยืนยันได้ว่าข้อมูลไม่ถูกแก้ไขดัดแปลงเพราะหากข้อมูลเปลี่ยนแม้แต่ 1 บิตค่า Hash จะเปลี่ยนทันที แต่ใครก็สามารถคำนวณค่า Hash ของไฟล์เดียวกันได้หากใช้อัลกอริทึมสาธารณะ จึงไม่สามารถพิสูจน์ตัวตนผู้ส่งได้ การสร้าง Non-repudiation จึงต้องนำค่า Hash ไปลงนามด้วย Private Key ของผู้ส่ง (Digital Signature) ซึ่งมีเพียงผู้ส่งเท่านั้นที่ครอบครอง Private Key นั้น',
    compareContrastTh:
      'Hashing = Integrity (ข้อมูลครบถ้วนไม่เพี้ยน) vs Symmetric MAC = Integrity + Shared Auth (พิสูจน์ระหว่างสองฝ่ายไม่ได้) vs Asymmetric Digital Signature = Integrity + Authentication + Non-repudiation',
    relatedLessonIds: ['L1-02', 'L1-05']
  },
  {
    id: 'fc-005',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    conceptPromptEn:
      'Within the AAA framework, how do Authentication, Authorization, and Accounting apply to system-to-system communication versus human users?',
    conceptPromptTh:
      'ในกรอบแนวคิด AAA ขั้นตอน Authentication, Authorization และ Accounting แตกต่างกันอย่างไรระหว่างผู้ใช้งานที่เป็นคนกับระบบต่อระบบ?',
    conceptualAnswerTh:
      'Authentication ยืนยันว่าผู้ขอเข้าถึงคือใคร (คนใช้รหัสผ่าน/MFA ส่วนระบบใช้ Device Certificate, Mutual TLS หรือ API Secret), Authorization ตรวจสอบสิทธิ์หลังยืนยันตัวตนแล้วว่าเข้าถึงข้อมูลหรือคำสั่งใดได้บ้าง (RBAC/ABAC/API Scope) และ Accounting บันทึก Log กิจกรรมและเวลาการใช้งานทั้งหมดเพื่อใช้ตรวจสอบย้อนหลังและสืบสวน',
    compareContrastTh:
      'Authentication ("คุณคือใคร") เกิดก่อน Authorization ("คุณได้รับอนุญาตให้ทำอะไร") เสมอ ส่วน Accounting ("คุณทำอะไรไปเมื่อไร") ทำงานต่อเนื่องเพื่อสร้างหลักฐานตรวจสอบ',
    relatedLessonIds: ['L1-02', 'L4-08']
  },
  {
    id: 'fc-006',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    conceptPromptEn:
      'In a Zero Trust Architecture, how do the Policy Engine (PE), Policy Administrator (PA), and Policy Enforcement Point (PEP) divide responsibilities across planes?',
    conceptPromptTh:
      'ในสถาปัตยกรรม Zero Trust หน้าที่ของ Policy Engine (PE), Policy Administrator (PA) และ Policy Enforcement Point (PEP) แบ่งข้าม Control Plane และ Data Plane อย่างไร?',
    conceptualAnswerTh:
      'Zero Trust แยกส่วนตัดสินใจออกจากเส้นทางข้อมูลจริง: Policy Engine (Control Plane) ประเมินความเสี่ยงและนโยบายเพื่อตัดสินใจให้อนุญาตหรือปฏิเสธ, Policy Administrator (Control Plane) รับคำตัดสินใจแล้วสั่งเปิดหรือตัดเซสชันพร้อมออก Token, ส่วน Policy Enforcement Point หรือ PEP (Data Plane) ตั้งขวางบนเส้นทางทราฟฟิกจริงเพื่อบังคับอนุญาตหรือปิดกั้นตามคำสั่งจาก PA',
    compareContrastTh:
      'Control Plane = PE (สมองตัดสินใจ) + PA (ผู้สั่งเปิด/ปิดเซสชัน) vs Data Plane = PEP (ด่านตรวจหน้างานจริงที่รับส่งทราฟฟิก)',
    relatedLessonIds: ['L1-03']
  },
  {
    id: 'fc-007',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    conceptPromptEn:
      'When deploying deception technology, how does a Honeytoken or Honeyfile differ operationally from a Honeypot or Honeynet?',
    conceptPromptTh:
      'ในการวางกับดักลวงผู้บุกรุก (Deception Technology) การใช้งาน Honeytoken/Honeyfile ต่างจาก Honeypot/Honeynet ในแง่ปฏิบัติอย่างไร?',
    conceptualAnswerTh:
      'Honeypot เป็นระบบหรือเซิร์ฟเวอร์จำลองเครื่องเดียว (และ Honeynet เป็นเครือข่ายจำลองหลายเครื่อง) ที่ตั้งแยกไว้ล่อผู้โจมตีให้มาโต้ตอบและเก็บพฤติกรรมการโจมตี ส่วน Honeyfile และ Honeytoken เป็นไฟล์ปลอมหรือข้อมูลรับรอง/API Key ปลอมที่แทรกวางไว้ในระบบจริงขององค์กร เพื่อส่งสัญญาณเตือนทันทีเมื่อผู้บุกรุกหรือ Insider Threat พยายามเปิดอ่านหรือนำข้อมูลปลอมนั้นไปใช้',
    compareContrastTh:
      'Honeypot/Honeynet = ระบบจำลองแยกไว้ล่อและสังเกตการณ์ vs Honeyfile/Honeytoken = เอกสารหรือโทเคนปลอมที่ซ่อนในระบบจริงเพื่อจับการเข้าถึงโดยมิชอบ',
    relatedLessonIds: ['L1-03']
  },
  {
    id: 'fc-008',
    domainId: 'D1',
    objectiveIds: ['1.3'],
    conceptPromptEn:
      'Before approving a critical firewall rule change in Change Management, why must both an Impact Analysis and a Backout Plan be documented?',
    conceptPromptTh:
      'ก่อนอนุมัติการเปลี่ยนแปลงกฎ Firewall สำคัญในกระบวนการ Change Management เหตุใดจึงต้องมีทั้ง Impact Analysis และ Backout Plan?',
    conceptualAnswerTh:
      'Impact Analysis ช่วยประเมินล่วงหน้าว่าการเปลี่ยนแปลงอาจกระทบ Dependencies ระบบเก่า (Legacy Applications), Allow/Deny Lists หรือ Downtime ของผู้มีส่วนได้ส่วนเสียกลุ่มใดบ้างเพื่อให้ทดสอบก่อนใน Maintenance Window ส่วน Backout Plan เตรียมขั้นตอนย้อนกลับแบบเป็นระบบไว้รองรับหากเกิดปัญหาหลังปรับใช้จริง เพื่อให้คืนบริการได้อย่างรวดเร็วและปลอดภัย',
    compareContrastTh:
      'Impact Analysis = ประเมินความเสี่ยงและผลกระทบ "ก่อนทำ" เพื่อลดโอกาสล่ม vs Backout Plan = แผนย้อนกลับ "เมื่อทำแล้วพลาด" เพื่อกู้คืนสภาพเดิมให้ไวที่สุด',
    relatedLessonIds: ['L1-04']
  },
  {
    id: 'fc-009',
    domainId: 'D1',
    objectiveIds: ['1.3'],
    conceptPromptEn:
      'Why does updating network diagrams, policies, and Version Control matter for security after a technical change succeeds?',
    conceptPromptTh:
      'เหตุใดหลังการเปลี่ยนแปลงทางเทคนิคสำเร็จแล้ว จึงยังต้องอัปเดตแผนผังเครือข่าย เอกสารนโยบาย และจัดเก็บใน Version Control?',
    conceptualAnswerTh:
      'หากเอกสารและแผนผังไม่ตรงกับระบบจริง (Outdated Documentation) ทีม SOC และทีม Incident Response อาจสืบสวนผิดเส้นทางหรือไม่ทราบช่องทางเปิดรับความเสี่ยงใหม่ระหว่างเกิดเหตุ นอกจากนี้การจัดเก็บการตั้งค่าและเอกสารใน Version Control ช่วยตรวจสอบย้อนกลับได้ว่าใครแก้ไขเมื่อไรและย้อนคืนรุ่นที่เสถียรได้ง่าย',
    compareContrastTh:
      'Technical Change = การปรับระบบหน้างาน vs Post-Change Documentation & Version Control = การรักษาความสอดคล้องของสถาปัตยกรรมและการตรวจสอบย้อนหลัง',
    relatedLessonIds: ['L1-04']
  },
  {
    id: 'fc-010',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    conceptPromptEn:
      'Why do modern protocols like TLS combine Asymmetric and Symmetric encryption instead of relying solely on Asymmetric encryption?',
    conceptPromptTh:
      'เหตุใดโปรโตคอลยุคใหม่อย่าง TLS จึงใช้การเข้ารหัสแบบ Asymmetric ร่วมกับ Symmetric แทนที่จะใช้ Asymmetric เพียงอย่างเดียวตลอดการเชื่อมต่อ?',
    conceptualAnswerTh:
      'Asymmetric Cryptography (เช่น RSA, ECDHE) แก้ปัญหาการแลกเปลี่ยนคีย์ผ่านเครือข่ายที่ไม่ปลอดภัยและพิสูจน์ตัวตนด้วยใบรับรองได้ แต่คำนวณช้าและใช้ทรัพยากร CPU สูงมาก จึงใช้ Asymmetric เฉพาะตอน Handshake เพื่อตกลง Session Key ชั่วคราว แล้วสลับไปใช้ Symmetric Encryption (เช่น AES) ซึ่งเร็วกว่ามากสำหรับการเข้ารหัสข้อมูลต่อเนื่องปริมาณสูง',
    compareContrastTh:
      'Asymmetric = ช้า ใช้ยืนยันตัวตน/แลกคีย์/ลงนาม (Public+Private Key) vs Symmetric = เร็วมาก ใช้เข้ารหัสข้อมูลจริงปริมาณมาก (Shared Session Key)',
    relatedLessonIds: ['L1-05']
  },
  {
    id: 'fc-011',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    conceptPromptEn:
      'How do Salting and Key Stretching work together to defend stored password hashes against Rainbow Table and Brute Force attacks?',
    conceptPromptTh:
      'Salting และ Key Stretching ทำงานร่วมกันอย่างไรในการปกป้องรหัสผ่านที่ถูก Hash ในฐานข้อมูลจากการโจมตีแบบ Rainbow Table และ Brute Force?',
    conceptualAnswerTh:
      'Salting เติมค่าสุ่มเฉพาะแต่ละบัญชีต่อท้ายรหัสผ่านก่อนนำไป Hash ทำให้รหัสผ่านที่เหมือนกันของสองผู้ใช้ได้ค่า Hash ต่างกัน จึงใช้ตารางคำนวณล่วงหน้า (Rainbow Table) ไม่ได้ ส่วน Key Stretching (เช่น Argon2, bcrypt, PBKDF2) บังคับให้คำนวณซ้ำหลายพันถึงหลายแสนรอบและใช้หน่วยความจำสูง เพื่อชะลอความเร็วในการสุ่มเดา Brute Force ของผู้โจมตีให้ช้าลงอย่างมาก',
    compareContrastTh:
      'Salting = เพิ่มความเฉพาะตัวต่อบัญชีเพื่อสกัด Rainbow Table vs Key Stretching = เพิ่มต้นทุนเวลา/CPU/RAM ต่อการลอง 1 ครั้งเพื่อสกัด Brute Force',
    relatedLessonIds: ['L1-05', 'L4-08']
  },
  {
    id: 'fc-012',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    conceptPromptEn:
      'When choosing cryptographic key storage, how does a TPM differ from an HSM and a KMS?',
    conceptPromptTh:
      'ในการเลือกที่จัดเก็บและจัดการคีย์เข้ารหัส TPM แตกต่างจาก HSM และ KMS อย่างไรในแง่บทบาทและขอบเขตการใช้งาน?',
    conceptualAnswerTh:
      'TPM เป็นชิปฮาร์ดแวร์ที่ฝังบนเมนบอร์ดของแต่ละเครื่อง ใช้ผูกคีย์ไว้กับอุปกรณ์นั้นและตรวจวัดความสมบูรณ์ตอนบูต (เช่น BitLocker), HSM เป็นอุปกรณ์ฮาร์ดแวร์เฉพาะทางป้องกันการงัดแงะที่ออกแบบมาเพื่อเก็บและประมวลผลคีย์วิกฤตระดับองค์กรจำนวนมากด้วยความเร็วสูง (เช่น Root CA Key), ส่วน KMS เป็นระบบซอฟต์แวร์หรือบริการรวมศูนย์ที่บริหารจัดการวงจรชีวิตคีย์ การหมุนเวียน และสิทธิ์เข้าถึงคีย์ข้ามแอปพลิเคชันหรือคลาวด์',
    compareContrastTh:
      'TPM = ชิปผูกกับ 1 เครื่องปลายทาง vs HSM = ฮาร์ดแวร์ระดับองค์กรประสิทธิภาพสูงกันงัดแงะ vs KMS = แพลตฟอร์มบริหารจัดการวงจรชีวิตและสิทธิ์ใช้คีย์จากส่วนกลาง',
    relatedLessonIds: ['L1-06']
  },
  {
    id: 'fc-013',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    conceptPromptEn:
      'What are the operational trade-offs between checking certificate revocation with a CRL versus OCSP and OCSP Stapling?',
    conceptPromptTh:
      'ข้อดีข้อจำกัดเชิงปฏิบัติการในการตรวจสอบสถานะการเพิกถอนใบรับรองระหว่าง CRL, OCSP และ OCSP Stapling ต่างกันอย่างไร?',
    conceptualAnswerTh:
      'CRL เป็นบัญชีรายชื่อใบรับรองที่ถูกเพิกถอนซึ่ง CA เผยแพร่เป็นรอบ ทำให้ไฟล์อาจโตมากและเกิดช่วงหน่วงก่อนลูกข่ายอัปเดตล่าสุด, OCSP ให้ลูกข่ายสอบถามสถานะใบรับรองทีละใบแบบเรียลไทม์จาก CA จึงเป็นปัจจุบันกว่าแต่เพิ่ม Latency และเปิดเผยเว็บที่ผู้ใช้เข้าต่อ CA, ส่วน OCSP Stapling แก้ปัญหาโดยให้ Web Server ดึงหลักฐานสถานะที่ CA เซ็นรับรองมาแนบส่งให้เบราว์เซอร์พร้อม TLS Handshake โดยตรง',
    compareContrastTh:
      'CRL = ดาวน์โหลดรายการรวมเป็นรอบ (มี Latency การอัปเดต) vs OCSP = สอบถามสดรายใบ (เรียลไทม์แต่มีภาระและประเด็น Privacy) vs OCSP Stapling = เซิร์ฟเวอร์แนบผลรับรองล่าสุดมาให้เลย',
    relatedLessonIds: ['L1-06']
  },
  {
    id: 'fc-014',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    conceptPromptEn:
      'When is a Self-Signed Certificate acceptable compared to a Third-Party CA or Wildcard Certificate, and what security risk does a Wildcard Certificate carry?',
    conceptPromptTh:
      'ใบรับรองแบบ Self-Signed เหมาะใช้เมื่อใดเมื่อเทียบกับ Third-Party CA และ Wildcard Certificate และใบรับรองแบบ Wildcard มีความเสี่ยงใดที่ต้องระวัง?',
    conceptualAnswerTh:
      'Self-Signed ใช้ได้เฉพาะระบบทดสอบภายในหรือ Lab ปิดที่ไม่ต้องการให้เบราว์เซอร์สาธารณะเชื่อถือ (เพราะไม่ผ่าน CA ที่เชื่อถือและไม่มีระบบเพิกถอนกลาง), Third-Party Public CA ใช้กับบริการสาธารณะเพื่อให้เบราว์เซอร์ทุกเครื่องเชื่อถืออัตโนมัติ, ส่วน Wildcard Certificate (*.example.com) ช่วยประหยัดเวลาเมื่อมีหลายซับโดเมน แต่มีข้อเสียคือหาก Private Key รั่วไหลบนซับโดเมนหนึ่ง อาจส่งผลกระทบต่อความน่าเชื่อถือของซับโดเมนอื่นทั้งหมดที่ใช้ใบรับรองเดียวกัน',
    compareContrastTh:
      'Self-Signed = ทดสอบภายใน (ไม่น่าเชื่อถือในสาธารณะ) vs Third-Party CA = เชื่อถือได้ทั่วไปตาม Root of Trust vs Wildcard = ใช้ได้หลายซับโดเมนแต่เพิ่ม Blast Radius หากคีย์รั่ว',
    relatedLessonIds: ['L1-06']
  },
  {
    id: 'fc-015',
    domainId: 'D1',
    objectiveIds: ['1.4'],
    conceptPromptEn:
      'How do Tokenization, Data Masking, Encryption, and Steganography differ in protecting or concealing sensitive data?',
    conceptPromptTh:
      'Tokenization, Data Masking, Encryption และ Steganography มีกลไกและวัตถุประสงค์ต่างกันอย่างไรในการคุ้มครองหรือซ่อนข้อมูล?',
    conceptualAnswerTh:
      'Encryption แปลงข้อมูลด้วยอัลกอริทึมและคีย์ให้ถอดรหัสย้อนกลับได้, Tokenization แทนค่าข้อมูลจริงด้วย Token สุ่มไม่มีความหมายทางคณิตศาสตร์โดยเก็บคู่จับจริงไว้ใน Token Vault, Data Masking ปิดบังข้อมูลบางส่วนเพื่อใช้งานในระบบทดสอบหรือหน้าจอเจ้าหน้าที่, ส่วน Steganography ไม่ได้ทำให้ข้อมูลอ่านไม่ออกอย่างเดียวแต่ซ่อนการมีอยู่ของข้อมูลไว้ในไฟล์อื่น เช่น รูปภาพหรือเสียง',
    compareContrastTh:
      'Encryption = แปลงกลับด้วยคีย์ vs Tokenization = แทนที่ด้วยค่าสุ่มผูก Vault vs Masking = ปกปิดบางส่วนเพื่อแสดงผล/ทดสอบ vs Steganography = ซ่อนการมีอยู่ภายในสื่ออื่น',
    relatedLessonIds: ['L1-06', 'L3-06']
  },

  // ===========================================================================
  // Domain 2.0 — Flashcards (fc-016 – fc-033)
  // ===========================================================================
  {
    id: 'fc-016',
    domainId: 'D2',
    objectiveIds: ['2.1'],
    conceptPromptEn:
      'How do the resources, sophistication, and primary motivations of a Nation-State actor differ from Organized Crime and a Hacktivist?',
    conceptPromptTh:
      'ทรัพยากร ขีดความสามารถ และแรงจูงใจหลักของ Nation-State แตกต่างจาก Organized Crime และ Hacktivist อย่างไร?',
    conceptualAnswerTh:
      'Nation-State มีงบประมาณและข่าวกรองระดับรัฐ มีความสามารถสูงมาก เน้นจารกรรมข้อมูลความมั่นคง (Espionage) ทรัพย์สินทางปัญญา และโครงสร้างพื้นฐานสำคัญระยะยาว, Organized Crime มีเงินทุนและเครื่องมือซับซ้อนแต่มุ่งผลประโยชน์ทางการเงินและการกรรโชกทรัพย์ (Ransomware/Data Theft), ส่วน Hacktivist มีแรงจูงใจด้านอุดมการณ์ทางการเมืองหรือสังคม มักก่อกวนบริการหรือทำให้เสื่อมเสียชื่อเสียง',
    compareContrastTh:
      'Nation-State = รัฐหนุน/เน้นจารกรรมและยุทธศาสตร์ vs Organized Crime = เน้นกำไรทางการเงิน/ค่าไถ่ vs Hacktivist = เน้นอุดมการณ์/การประท้วง',
    relatedLessonIds: ['L2-01']
  },
  {
    id: 'fc-017',
    domainId: 'D2',
    objectiveIds: ['2.1'],
    conceptPromptEn:
      'Why is Shadow IT categorized alongside threat actors in SY0-701 even though employees rarely intend to harm the company?',
    conceptPromptTh:
      'เหตุใด SY0-701 จึงจัด Shadow IT อยู่ในกลุ่ม Threat Actors ด้วย ทั้งที่พนักงานมักไม่ได้มีเจตนาร้ายต่อองค์กร?',
    conceptualAnswerTh:
      'แม้พนักงานจะนำซอฟต์แวร์หรือบริการคลาวด์ภายนอกมาใช้เพื่อให้งานเสร็จเร็วขึ้นโดยไม่มีเจตนาทำลาย แต่การกระทำดังกล่าวหลุดออกนอกการควบคุมและมาตรฐานความปลอดภัยของทีม IT (ขาดการประเมินความเสี่ยง การเข้ารหัส และการสำรองข้อมูล) จึงสร้างพื้นผิวการโจมตีใหม่และจุดบอด (Blind Spots) ที่อาจทำให้ข้อมูลองค์กรรั่วไหลโดยตรง',
    compareContrastTh:
      'Malicious Insider = มีสิทธิ์และตั้งใจทำลาย/ขโมย vs Shadow IT = พนักงานใช้เครื่องมือที่ไม่อนุมัติจนเกิดช่องโหว่โดยไม่ได้ตั้งใจ',
    relatedLessonIds: ['L2-01', 'L4-03']
  },
  {
    id: 'fc-018',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    conceptPromptEn:
      'How does an organization distinguish between a Threat Vector and an Attack Surface when prioritizing defensive mitigations?',
    conceptPromptTh:
      'องค์กรแยกความแตกต่างระหว่าง Threat Vector และ Attack Surface อย่างไรเมื่อต้องจัดลำดับความสำคัญในการลดความเสี่ยง?',
    conceptualAnswerTh:
      'Attack Surface คือภาพรวมจุดเปิดรับความเสี่ยงทั้งหมดที่ระบบเปิดเผยให้เข้าถึงได้ (เช่น พอร์ตที่เปิด, บัญชีรหัสผ่านเริ่มต้น, API สาธารณะ, ซอฟต์แวร์ที่ไม่ได้แพตช์) ส่วน Threat Vector คือช่องทางหรือกลไกที่ผู้โจมตีใช้ส่งการโจมตีเข้ามาผ่านจุดเหล่านั้น (เช่น อีเมล Phishing, USB, การสแกนพอร์ตเปิด) การลด Attack Surface จึงเป็นการปิดทางเข้าของ Threat Vector ที่ต้นเหตุ',
    compareContrastTh:
      'Attack Surface = "หน้าต่างและประตูที่เปิดทิ้งไว้ทั้งหมด" vs Threat Vector = "เส้นทางและวิธีการที่ผู้บุกรุกเดินเข้ามา"',
    relatedLessonIds: ['L2-02', 'L2-09']
  },
  {
    id: 'fc-019',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    conceptPromptEn:
      'Why does a Supply Chain compromise targeting a Managed Service Provider (MSP) pose an amplified risk compared to attacking a single company directly?',
    conceptPromptTh:
      'เหตุใดการโจมตี Supply Chain ที่เจาะผู้ให้บริการ MSP จึงสร้างผลกระทบรุนแรงและขยายวงกว้างกว่าการโจมตีบริษัทเดียวโดยตรง?',
    conceptualAnswerTh:
      'เพราะ MSP มักได้รับสิทธิ์ผู้ดูแลระบบระดับสูงและการเชื่อมต่อทางไกล (Remote Management) ไปยังเครือข่ายขององค์กรลูกค้าจำนวนมากพร้อมกัน หากผู้โจมตียึดโครงสร้างพื้นฐานของ MSP ได้ ก็สามารถกระโดดข้ามความไว้วางใจเข้าไปปล่อยมัลแวร์หรือขโมยข้อมูลในองค์กรลูกค้าหลายสิบแห่งได้พร้อมกันในคราวเดียว',
    compareContrastTh:
      'Direct Attack = เจาะเกราะป้องกันขององค์กรเป้าหมาย 1 แห่ง vs MSP Supply Chain Attack = ยึดจุดเชื่อถือร่วม 1 แห่งแล้วกระจายผลกระทบสู่ลูกค้าจำนวนมาก',
    relatedLessonIds: ['L2-02', 'L5-04']
  },
  {
    id: 'fc-020',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    conceptPromptEn:
      'How do Business Email Compromise (BEC), Vishing, and Smishing differ in attack channel and persuasion technique?',
    conceptPromptTh:
      'Business Email Compromise (BEC), Vishing และ Smishing แตกต่างกันอย่างไรในด้านช่องทางการโจมตีและเทคนิคจูงใจเหยื่อ?',
    conceptualAnswerTh:
      'BEC มุ่งเป้าทางอีเมลองค์กรโดยมักสวมรอยหรือยึดบัญชีผู้บริหาร/คู่ค้าจริงเพื่อสั่งโอนเงินหรือเปลี่ยนบัญชีธนาคาร, Vishing อาศัยการโทรศัพท์ด้วยเสียง (Voice Call) เพื่อกดดันหรือสร้างเรื่องราวหลอกถามข้อมูลแบบโต้ตอบสด, ส่วน Smishing ใช้ข้อความสั้น SMS แนบลิงก์ปลอมหรือแจ้งเตือนเร่งด่วนบนมือถือ',
    compareContrastTh:
      'BEC = อีเมลหลอกสั่งการทางธุรกิจ/การเงิน vs Vishing = โทรศัพท์ด้วยเสียง vs Smishing = ข้อความ SMS หลอกลวง',
    relatedLessonIds: ['L2-03']
  },
  {
    id: 'fc-021',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    conceptPromptEn:
      'What is the key operational difference between Typosquatting and a Watering Hole attack?',
    conceptPromptTh:
      'ความแตกต่างหลักในวิธีดำเนินงานระหว่าง Typosquatting และ Watering Hole Attack คืออะไร?',
    conceptualAnswerTh:
      'Typosquatting คือการที่ผู้โจมตีจดทะเบียนโดเมนปลอมขึ้นมาใหม่ให้สะกดคล้ายโดเมนจริงเพื่อดักรอเหยื่อที่พิมพ์ผิดหรือกดลิงก์ปลอม ส่วน Watering Hole ไม่ได้สร้างเว็บปลอมใหม่ แต่ผู้โจมตีสำรวจว่าเหยื่อเข้าเว็บไซต์จริงใดเป็นประจำแล้วแอบเจาะเว็บไซต์จริงนั้นเพื่อฝังโค้ดอันตรายดักรอเหยื่อเมื่อเข้ามาใช้งานตามปกติ',
    compareContrastTh:
      'Typosquatting = สร้างโดเมนปลอมหน้าตาคล้ายของจริง vs Watering Hole = แทรกซึมเว็บไซต์จริงที่กลุ่มเป้าหมายเข้าประจำ',
    relatedLessonIds: ['L2-03']
  },
  {
    id: 'fc-022',
    domainId: 'D2',
    objectiveIds: ['2.3'],
    conceptPromptEn:
      'How does a Race Condition (TOC/TOU) vulnerability arise in software, and why does Input Validation alone not fix it?',
    conceptPromptTh:
      'ช่องโหว่ Race Condition (TOC/TOU) เกิดขึ้นได้อย่างไรในซอฟต์แวร์ และเหตุใดการตรวจสอบ Input เพียงอย่างเดียวจึงแก้ปัญหานี้ไม่ได้?',
    conceptualAnswerTh:
      'TOC/TOU (Time-of-Check to Time-of-Use) เกิดจากช่องว่างเวลาระหว่างจังหวะที่โปรแกรมตรวจสอบสิทธิ์หรือสถานะของทรัพยากร กับจังหวะที่นำทรัพยากรนั้นไปใช้งานจริง หากมีผู้แทรกเปลี่ยนสถานะไฟล์หรือสิทธิ์ในช่วงรอยต่อดังกล่าว โปรแกรมจะทำงานกับสิ่งที่เปลี่ยนไปแล้วโดยไม่รู้ตัว จึงต้องแก้ไขด้วยการล็อกทรัพยากรและทำให้การตรวจกับการใช้เป็น Atomic Operation เดียวกัน',
    compareContrastTh:
      'Input Validation Vulns = ข้อมูลที่ส่งเข้ามามีรูปแบบอันตราย vs TOC/TOU Race Condition = ลำดับเวลาและการทำงานพร้อมกันทำให้สถานะเปลี่ยนระหว่างการตรวจและการใช้',
    relatedLessonIds: ['L2-04']
  },
  {
    id: 'fc-023',
    domainId: 'D2',
    objectiveIds: ['2.3', '2.4'],
    conceptPromptEn:
      'Compare SQL Injection (SQLi) and Cross-Site Scripting (XSS) in terms of execution target and primary code-level remediation.',
    conceptPromptTh:
      'จงเปรียบเทียบ SQL Injection (SQLi) กับ Cross-Site Scripting (XSS) ในแง่เป้าหมายที่โค้ดไปทำงานและวิธีแก้ไขหลักในระดับซอร์สโค้ด',
    conceptualAnswerTh:
      'SQLi มุ่งโจมตีเครื่องแม่ข่ายฐานข้อมูลโดยแทรกตรรกะเข้าไปเปลี่ยนแปลงคำสั่ง SQL เพื่อดึงหรือแก้ไขข้อมูลหลังบ้าน แก้ไขหลักด้วย Parameterized Queries (Prepared Statements) ส่วน XSS มุ่งโจมตีเบราว์เซอร์ของผู้ใช้งานคนอื่นโดยฝังหรือสะท้อนสคริปต์ฝั่ง Client เพื่อขโมย Session หรือสั่งงานในหน้าเว็บ แก้ไขหลักด้วย Context-aware Output Encoding และ Content Security Policy (CSP)',
    compareContrastTh:
      'SQLi = ฝั่งเซิร์ฟเวอร์/ฐานข้อมูล (แก้ด้วย Parameterized Queries) vs XSS = ฝั่งเบราว์เซอร์ผู้ใช้ (แก้ด้วย Output Encoding & CSP)',
    relatedLessonIds: ['L2-04', 'L2-08']
  },
  {
    id: 'fc-024',
    domainId: 'D2',
    objectiveIds: ['2.3', '2.4'],
    conceptPromptEn:
      'How do Cross-Site Request Forgery (CSRF) and Server-Side Request Forgery (SSRF) differ in who is tricked into making the unauthorized request?',
    conceptPromptTh:
      'การโจมตีแบบ CSRF และ SSRF แตกต่างกันอย่างไรในแง่ว่า "ใคร" ถูกหลอกให้เป็นผู้ส่งคำขอโดยไม่ได้ตั้งใจ?',
    conceptualAnswerTh:
      'ใน CSRF ผู้โจมตีหลอก "เบราว์เซอร์ของผู้ใช้งานที่ล็อกอินค้างไว้" ให้ส่งคำขอเปลี่ยนสถานะไปยังเว็บแอปพลิเคชันเป้าหมายโดยใช้ Cookie ของผู้ใช้นั้น ส่วนใน SSRF ผู้โจมตีหลอก "เซิร์ฟเวอร์ของแอปพลิเคชันเอง" ให้เป็นผู้ยิงคำขอเครือข่ายไปยังบริการภายในหรือ Cloud Metadata Endpoint ที่ผู้โจมตีภายนอกเข้าถึงตรงไม่ได้',
    compareContrastTh:
      'CSRF = หลอกเบราว์เซอร์ Client (ป้องกันด้วย Anti-CSRF Token & SameSite Cookie) vs SSRF = หลอก Server ให้เรียกปลายทางภายใน (ป้องกันด้วย URL Allow-listing & Network Segmentation)',
    relatedLessonIds: ['L2-08']
  },
  {
    id: 'fc-025',
    domainId: 'D2',
    objectiveIds: ['2.3'],
    conceptPromptEn:
      'What distinguishes VM Escape from Resource Reuse in shared virtualization and cloud environments?',
    conceptPromptTh:
      'ช่องโหว่แบบ VM Escape แตกต่างจาก Resource Reuse อย่างไรในสภาพแวดล้อม Virtualization และคลาวด์แบบใช้งานร่วมกัน?',
    conceptualAnswerTh:
      'VM Escape คือการเจาะทะลุขอบเขตของ Hypervisor เพื่อหลุดจาก Guest VM ออกไปควบคุม Host หรือ VM ของผู้เช่ารายอื่นแบบ Real-time ส่วน Resource Reuse คือความเสี่ยงที่ข้อมูลตกค้างในหน่วยความจำ ดิสก์ หรือพื้นที่เก็บข้อมูลชั่วคราวหลังผู้เช่ารายหนึ่งเลิกใช้งาน แล้วถูกจัดสรรให้ผู้เช่ารายใหม่มาอ่านข้อมูลเก่าที่ยังไม่ได้ล้าง (Zeroize) ออกไป',
    compareContrastTh:
      'VM Escape = ทะลุขอบเขต Hypervisor ขณะทำงานพร้อมกัน vs Resource Reuse = ข้อมูลตกค้างจากการจัดสรรทรัพยากรเดิมให้ผู้เช่ารายใหม่',
    relatedLessonIds: ['L2-05', 'L3-01']
  },
  {
    id: 'fc-026',
    domainId: 'D2',
    objectiveIds: ['2.3'],
    conceptPromptEn:
      'Why do Side Loading and Jailbreaking on employee mobile devices undermine Mobile Device Management (MDM) security?',
    conceptPromptTh:
      'เหตุใดการทำ Side Loading และ Jailbreaking บนอุปกรณ์พกพาของพนักงานจึงทำลายกลไกความปลอดภัยของ MDM?',
    conceptualAnswerTh:
      'Side Loading ข้ามระบบคัดกรองมัลแวร์และการตรวจสอบลายเซ็นของ App Store ทางการ ทำให้แอปแปลกปลอมเข้าเครื่องได้ง่าย ส่วน Jailbreaking/Rooting ปลดล็อกสิทธิ์ผู้ดูแลสูงสุดของระบบปฏิบัติการและทำลาย App Sandbox ทำให้แอปอันตรายเข้าถึงข้อมูลในคอนเทนเนอร์องค์กรและหลบเลี่ยงนโยบายควบคุมของ MDM ได้',
    compareContrastTh:
      'Side Loading = ติดตั้งแอปนอก Store ทางการ (เสี่ยงมัลแวร์) vs Jailbreaking/Rooting = ปลดล็อกสิทธิ์ระบบปฏิบัติการ (ทำลาย Sandbox และข้อจำกัด MDM)',
    relatedLessonIds: ['L2-05', 'L4-02']
  },
  {
    id: 'fc-027',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    conceptPromptEn:
      'How do a Worm, a Virus, a Trojan, a Logic Bomb, and a Rootkit differ in propagation and stealth mechanisms?',
    conceptPromptTh:
      'มัลแวร์ประเภท Worm, Virus, Trojan, Logic Bomb และ Rootkit แตกต่างกันอย่างไรในด้านการแพร่กระจายและการซ่อนตัว?',
    conceptualAnswerTh:
      'Virus ต้องเกาะไฟล์หรือโปรแกรมปกติและรอให้ผู้ใช้เปิดรันจึงทำงาน, Worm แพร่กระจายข้ามเครือข่ายเองได้อัตโนมัติโดยไม่ต้องอาศัยผู้ใช้กดเปิด, Trojan ปลอมเป็นโปรแกรมที่มีประโยชน์เพื่อหลอกให้คนติดตั้งโดยไม่แพร่ตัวเอง, Logic Bomb นิ่งเฉยรอจนเข้าเงื่อนไขเวลา/เหตุการณ์ที่ตั้งไว้จึงทำงาน, และ Rootkit ซ่อนตัวในระดับลึก (Kernel/Boot) เพื่อพรางตัวจากเครื่องมือตรวจจับ',
    compareContrastTh:
      'แพร่ตัวเองข้ามเครือข่าย = Worm | เกาะไฟล์รอคนรัน = Virus | ปลอมเป็นแอปดี = Trojan | รอเงื่อนไขทำงาน = Logic Bomb | ซ่อนตัวระดับลึก = Rootkit',
    relatedLessonIds: ['L2-06']
  },
  {
    id: 'fc-028',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    conceptPromptEn:
      'How does an Amplified/Reflected DDoS attack abuse third-party servers, and why is IP Spoofing central to this technique?',
    conceptPromptTh:
      'การโจมตี DDoS แบบ Amplified/Reflected อาศัยเซิร์ฟเวอร์บุคคลที่สามอย่างไร และเหตุใดการปลอม IP (IP Spoofing) จึงเป็นหัวใจสำคัญ?',
    conceptualAnswerTh:
      'ผู้โจมตีส่งคำขอขนาดเล็กที่ใช้โปรโตคอลไร้สถานะ (เช่น DNS, NTP) ไปยังเซิร์ฟเวอร์เปิดสาธารณะจำนวนมาก โดยปลอม Source IP ในแพ็กเก็ตให้เป็น IP ของเหยื่อ (Reflection) เพื่อให้เซิร์ฟเวอร์เหล่านั้นส่งข้อมูลคำตอบที่มีขนาดใหญ่กว่าคำขอหลายเท่ากลับไปถล่มเหยื่อพร้อมกัน (Amplification) โดยที่ไม่ส่งกลับหาผู้โจมตี',
    compareContrastTh:
      'Direct Volumetric DDoS = Botnet ยิงทราฟฟิกเข้าเหยื่อโดยตรง vs Reflected/Amplified DDoS = ปลอม IP เหยื่อให้เซิร์ฟเวอร์ตัวกลางช่วยสะท้อนและขยายขนาดทราฟฟิก',
    relatedLessonIds: ['L2-07']
  },
  {
    id: 'fc-029',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    conceptPromptEn:
      'What distinguishes a Cryptographic Downgrade Attack from a Collision / Birthday Attack?',
    conceptPromptTh:
      'การโจมตีการเข้ารหัสแบบ Downgrade Attack แตกต่างจาก Collision / Birthday Attack อย่างไร?',
    conceptualAnswerTh:
      'Downgrade Attack คือการแทรกแซงการเจรจาโปรโตคอลเพื่อหลอกให้ทั้งสองฝั่งลดระดับไปใช้รหัสชุดเก่าหรือโปรโตคอลที่อ่อนแอกว่า (เช่น TLS เวอร์ชันเก่า) เพื่อเจาะถอดรหัสได้ง่ายขึ้น ส่วน Collision / Birthday Attack มุ่งโจมตีฟังก์ชันแฮชโดยใช้หลักความน่าจะเป็นทางคณิตศาสตร์หาข้อความสองชุดที่ต่างกันแต่ให้ค่า Hash ตรงกันเพื่อปลอมลายเซ็นหรือไฟล์',
    compareContrastTh:
      'Downgrade = บังคับให้ใช้อัลกอริทึม/โปรโตคอลรุ่นเก่าที่อ่อนแอ vs Collision/Birthday = หาสองอินพุตที่ให้ค่า Hash ชนกันในอัลกอริทึมเดิม',
    relatedLessonIds: ['L2-07']
  },
  {
    id: 'fc-030',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    conceptPromptEn:
      'Why does Password Spraying frequently evade traditional Account Lockout thresholds that stop classic Brute Force attacks?',
    conceptPromptTh:
      'เหตุใดการโจมตีแบบ Password Spraying จึงมักหลบเลี่ยงเกณฑ์ Account Lockout ที่ป้องกัน Brute Force แบบเดิมได้?',
    conceptualAnswerTh:
      'เพราะ Brute Force แบบเดิมทดลองรหัสผ่านหลายร้อยคำใส่บัญชีเป้าหมายเดียวอย่างรวดเร็ว ทำให้เกินขีดจำกัดความผิดพลาดของบัญชีนั้นและถูกล็อกทันที แต่ Password Spraying ทดลองใช้รหัสผ่านยอดนิยมเพียง 1–2 คำต่อบัญชี กระจายไปยังบัญชีผู้ใช้หลายร้อยบัญชี ทำให้แต่ละบัญชีมีจำนวนครั้งที่ผิดน้อยกว่าเกณฑ์ Lockout เสมอ',
    compareContrastTh:
      'Brute Force = หลายรหัสผ่านต่อ 1 บัญชี (ล็อกง่าย) vs Password Spraying = ไม่กี่รหัสผ่านยอดนิยมต่อหลายบัญชี (เลี่ยง Lockout) vs Credential Stuffing = ใช้คู่ชื่อ-รหัสผ่านที่รั่วไหลจากเว็บอื่น',
    relatedLessonIds: ['L2-07', 'L4-08']
  },
  {
    id: 'fc-031',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    conceptPromptEn:
      'When analyzing SIEM logs, what do indicators like Impossible Travel, Concurrent Session Usage, and Missing/Out-of-Cycle Logging signify?',
    conceptPromptTh:
      'เมื่อวิเคราะห์ Log ใน SIEM สัญญาณอย่าง Impossible Travel, Concurrent Session Usage และ Missing/Out-of-Cycle Logging บ่งชี้ถึงเหตุการณ์ใด?',
    conceptualAnswerTh:
      'Impossible Travel และ Concurrent Session Usage (บัญชีเดียวใช้งานพร้อมกันจากหลาย IP/ภูมิภาคที่ห่างไกลกันมาก) มักชี้ว่าข้อมูลรับรองถูกขโมยหรือใช้ VPN ที่ผิดนโยบาย ส่วน Missing Logs หรือ Out-of-Cycle Logging (ระบบส่ง Log หยุดส่งหรือส่งผิดช่วงเวลาปกติ) เป็นสัญญาณเตือนว่าผู้บุกรุกอาจเข้าไปปิดบริการบันทึก Log หรือแทรกแซงระบบเพื่อลบร่องรอย',
    compareContrastTh:
      'Impossible Travel/Concurrent Sessions = ความผิดปกติด้านตัวตนและตำแหน่งเข้าใช้ vs Missing/Out-of-Cycle Logs = ความผิดปกติของระบบบันทึกหลักฐานหรือการซ่อนร่องรอย',
    relatedLessonIds: ['L2-08', 'L4-12']
  },
  {
    id: 'fc-032',
    domainId: 'D2',
    objectiveIds: ['2.5'],
    conceptPromptEn:
      'Why is Application Allow-Listing more effective against unknown malware and zero-days than traditional Deny-Listing, and where is it easiest to maintain?',
    conceptPromptTh:
      'เหตุใด Application Allow-Listing จึงรับมือมัลแวร์ใหม่และ Zero-Day ได้ดีกว่า Deny-Listing และเหมาะกับการดูแลรักษาในระบบลักษณะใด?',
    conceptualAnswerTh:
      'Deny-Listing ต้องรู้จักลายเซ็นของมัลแวร์ล่วงหน้าจึงจะบล็อกได้ ทำให้พลาดภัยคุกคามใหม่หรือไฟล์ที่เปลี่ยน Hash ส่วน Allow-Listing อนุญาตให้รันเฉพาะโปรแกรมที่ตรวจสอบและเซ็นรับรองไว้แล้วเท่านั้น ที่เหลือบล็อกทั้งหมด จึงป้องกันมัลแวร์แปลกปลอมได้เด็ดขาด เหมาะที่สุดกับระบบที่มีชุดโปรแกรมคงที่เปลี่ยนไม่บ่อย เช่น เครื่อง Kiosk, POS หรือเซิร์ฟเวอร์เฉพาะทาง',
    compareContrastTh:
      'Deny List = บล็อกสิ่งที่รู้ว่าเลว (พลาดของใหม่ได้ง่าย) vs Allow List = อนุญาตเฉพาะสิ่งที่รู้ว่าปลอดภัย (เข้มงวดสูง แต่อาจดูแลยากในเครื่องที่ลงโปรแกรมใหม่บ่อย)',
    relatedLessonIds: ['L2-09', 'L4-01']
  },
  {
    id: 'fc-033',
    domainId: 'D2',
    objectiveIds: ['2.5'],
    conceptPromptEn:
      'When mitigating risk on an unsupported legacy system, how should an architect choose among Patching, Segmentation/Isolation, and Decommissioning?',
    conceptPromptTh:
      'เมื่อต้องจัดการความเสี่ยงของระบบรุ่นเก่าที่ไม่รองรับแพตช์แล้ว สถาปนิกความปลอดภัยควรตัดสินใจเลือกอย่างไรระหว่าง Patching, Segmentation/Isolation และ Decommissioning?',
    conceptualAnswerTh:
      'หากยังอยู่ในระยะสนับสนุนและทดสอบในสภาพแวดล้อมจำลองผ่านแล้วควรทำ Patching เป็นอันดับแรก แต่หากระบบเข้าสู่ End-of-Life (ไม่มีแพตช์อีกต่อไป) ทางเลือกที่กำจัดความเสี่ยงได้สมบูรณ์คือ Decommissioning (ปลดระวางและย้ายงานไประบบใหม่) แต่หากข้อจำกัดทางธุรกิจยังไม่สามารถเปลี่ยนได้ทันทีต้องใช้ Segmentation และ Isolation เป็น Compensating Control จำกัดการเข้าถึงให้แคบที่สุด',
    compareContrastTh:
      'Decommissioning = กำจัดต้นตอความเสี่ยงถาวร vs Segmentation/Isolation = จำกัดความเสียหายชั่วคราวเมื่อปลดระวางหรือแพตช์ไม่ได้',
    relatedLessonIds: ['L2-09', 'L2-05']
  },

  // ===========================================================================
  // Domain 3.0 — Flashcards (fc-034 – fc-049)
  // ===========================================================================
  {
    id: 'fc-034',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    conceptPromptEn:
      'Across IaaS, PaaS, and SaaS in the Cloud Shared Responsibility Matrix, which security responsibilities ALWAYS remain with the customer?',
    conceptPromptTh:
      'เมื่อเปรียบเทียบ IaaS, PaaS และ SaaS ในตาราง Cloud Shared Responsibility Matrix ความรับผิดชอบด้านใดที่อยู่กับฝั่งลูกค้าเสมอในทุกโมเดล?',
    conceptualAnswerTh:
      'ไม่ว่าจะใช้โมเดลใด (แม้แต่ SaaS ที่ผู้ให้บริการดูแลโครงสร้างพื้นฐานและแอปพลิเคชันทั้งหมด) ลูกค้ายังคงต้องรับผิดชอบต่อการจำแนกและคุ้มครองข้อมูลของตน (Data Classification & Protection), การจัดการตัวตนและสิทธิ์การเข้าถึงของบัญชีผู้ใช้ (IAM & Access Governance) และอุปกรณ์ปลายทางของพนักงานที่เชื่อมต่อเข้ามาใช้งานเสมอ',
    compareContrastTh:
      'IaaS (ลูกค้าคุมถึง OS/Patch/Network Config) -> PaaS (ลูกค้าคุมโค้ดแอปและการตั้งค่า) -> SaaS (ลูกค้าคุมการตั้งค่าสิทธิ์ผู้ใช้และข้อมูล) แต่ Data & IAM เป็นของลูกค้าเสมอ',
    relatedLessonIds: ['L3-01']
  },
  {
    id: 'fc-035',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    conceptPromptEn:
      'How do Virtual Machines (Virtualization), Containers, and Serverless architectures differ in isolation boundary and patching responsibility?',
    conceptPromptTh:
      'สถาปัตยกรรมแบบ Virtual Machines, Containers และ Serverless แตกต่างกันอย่างไรในด้านขอบเขตการแยกส่วน (Isolation) และภาระการดูแลแพตช์ OS?',
    conceptualAnswerTh:
      'VM จำลองฮาร์ดแวร์และรัน Guest OS แยกกันเต็มรูปแบบเหนือ Hypervisor จึงแยกส่วนได้สูงกว่าแต่ต้องดูแลแพตช์ Guest OS ทุกเครื่องเอง, Container บรรจุแอปและไลบรารีโดยแชร์ OS Kernel ร่วมกันบนโฮสต์ทำให้เบาและเปิดปิดเร็วแต่ต้องดูแลความปลอดภัยของ Image และ Kernel, ส่วน Serverless รันเฉพาะโค้ดฟังก์ชันตาม Event โดยผู้ให้บริการคลาวด์จัดการ OS และ Runtime ให้ทั้งหมด',
    compareContrastTh:
      'VM = แยก Guest OS เต็มรูปแบบ (หนัก/แยกขาดกว่า) vs Container = แชร์ Host Kernel (เบา/เร็ว/ต้องระวัง Container Escape) vs Serverless = ไร้การจัดการเซิร์ฟเวอร์ (เน้นคุมสิทธิ์ IAM ของฟังก์ชันและโค้ด)',
    relatedLessonIds: ['L3-01']
  },
  {
    id: 'fc-036',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    conceptPromptEn:
      'What security advantages does Infrastructure as Code (IaC) provide over manual provisioning, and what new risk does an IaC template error introduce?',
    conceptPromptTh:
      'Infrastructure as Code (IaC) ให้ข้อได้เปรียบด้านความปลอดภัยเหนือการตั้งค่าด้วยมืออย่างไร และความผิดพลาดในเทมเพลต IaC ก่อให้เกิดความเสี่ยงใหม่แบบใด?',
    conceptualAnswerTh:
      'IaC ช่วยให้สร้างสภาพแวดล้อมตาม Secure Baseline ได้สม่ำเสมอ ลดความผิดพลาดจากคน (Human Error), ลด Configuration Drift และตรวจสอบนโยบายความปลอดภัยอัตโนมัติใน CI/CD ก่อน Deploy ได้ แต่ข้อเสียคือหากมี Misconfiguration หรือหลุดฝัง Credentials ไว้ในเทมเพลตหลัก ความผิดพลาดนั้นจะถูกคัดลอกกระจายไปยังทรัพยากรทั้งหมดในวงกว้างอย่างรวดเร็ว',
    compareContrastTh:
      'Manual Setup = ช้า เสี่ยง Configuration Drift รายเครื่อง vs IaC = มาตรฐานเดียวกัน ทำซ้ำไว ตรวจด้วย Version Control ได้ แต่ Misconfig แพร่กระจายเร็วทุกสภาพแวดล้อม',
    relatedLessonIds: ['L3-01', 'L4-10']
  },
  {
    id: 'fc-037',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    conceptPromptEn:
      'Why do ICS/SCADA and RTOS environments require fundamentally different patching and scanning strategies compared to corporate IT workstations?',
    conceptPromptTh:
      'เหตุใดระบบ ICS/SCADA และ RTOS จึงต้องใช้วิธีการแพตช์และการสแกนความปลอดภัยที่แตกต่างจากเครื่องสำนักงาน IT ทั่วไปอย่างสิ้นเชิง?',
    conceptualAnswerTh:
      'ระบบ OT อย่าง ICS/SCADA และ RTOS ให้ความสำคัญสูงสุดกับความปลอดภัยต่อชีวิต ความแม่นยำด้านเวลา (Deterministic Timing) และการเดินเครื่องต่อเนื่องตลอด 24 ชั่วโมง การสแกนช่องโหว่เชิงรุก (Active Scan) หรือการรีบูตเพื่อติดตั้งแพตช์อาจทำให้อุปกรณ์ควบคุมค้างหรือหยุดสายการผลิตได้ จึงต้องพึ่งพา Physical/Logical Segmentation, Passive Monitoring และ Compensating Controls แทน',
    compareContrastTh:
      'Enterprise IT = เน้น Confidentiality/Integrity และแพตช์ตามรอบได้ vs OT (ICS/SCADA/RTOS) = เน้น Availability/Safety สูงสุด มักหยุดแพตช์ไม่ได้ ต้องแยกเครือข่ายและเฝ้าระวังแบบ Passive',
    relatedLessonIds: ['L3-02', 'L4-01']
  },
  {
    id: 'fc-038',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    conceptPromptEn:
      'When is Physical Isolation (Air-Gapped) chosen over Logical Segmentation or SDN, and what attack vectors still threaten an air-gapped environment?',
    conceptPromptTh:
      'เมื่อใดองค์กรควรเลือกใช้การแยกเครือข่ายทางกายภาพ (Air-Gapped) แทน Logical Segmentation หรือ SDN และช่องทางใดที่ยังคุกคามระบบ Air-Gapped ได้?',
    conceptualAnswerTh:
      'Air-Gapped เหมาะกับระบบที่มีความสำคัญและความลับสูงสุดที่ห้ามเชื่อมต่อเครือข่ายภายนอกเด็ดขาด เช่น Root CA หรือระบบควบคุมโรงงานนิวเคลียร์ ซึ่งเข้มงวดกว่า Logical Segmentation (VLAN/Firewall) ที่ยังแชร์อุปกรณ์ทางกายภาพร่วมกัน อย่างไรก็ตาม Air-Gapped ยังเสี่ยงต่อสื่อบันทึกข้อมูลพกพา (USB/Removable Media), การอัปเดตซอฟต์แวร์ผ่าน Supply Chain และ Insider Threat',
    compareContrastTh:
      'Air-Gapped = ตัดขาดสาย/ไร้สายทางกายภาพสมบูรณ์ (ดูแลยากแต่แยกขาดสุด) vs Logical Segmentation/SDN = แยกเชิงตรรกะบนโครงสร้างร่วม (ยืดหยุ่น/บริหารจัดการจากศูนย์กลางง่าย)',
    relatedLessonIds: ['L3-02']
  },
  {
    id: 'fc-039',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    conceptPromptEn:
      'What trade-off between Confidentiality and Availability determines whether an inline security device is configured as Fail-Open or Fail-Closed?',
    conceptPromptTh:
      'การตัดสินใจตั้งค่าอุปกรณ์ความปลอดภัยแบบ Inline ให้ทำงานในโหมด Fail-Open หรือ Fail-Closed ขึ้นอยู่กับการแลกเปลี่ยนระหว่าง Confidentiality กับ Availability อย่างไร?',
    conceptualAnswerTh:
      'Fail-Closed ตัดการรับส่งทราฟฟิกทั้งหมดเมื่ออุปกรณ์ความปลอดภัยล่ม เพื่อประกันว่าไม่มีทราฟฟิกที่ไม่ได้ตรวจสอบหลุดรอดเข้าออก จึงคุ้มครอง Confidentiality และ Integrity สูงสุดแต่แลกกับการเกิด Downtime, ส่วน Fail-Open ยอมให้ทราฟฟิกไหลผ่านต่อได้โดยไม่ตรวจชั่วคราวเมื่ออุปกรณ์พัง เพื่อรักษา Availability ของบริการให้ทำงานต่อเนื่องได้ไม่สะดุด',
    compareContrastTh:
      'Fail-Closed = ปิดกั้นเมื่ออุปกรณ์พัง (เน้น Security/Confidentiality) vs Fail-Open = ปล่อยผ่านเมื่ออุปกรณ์พัง (เน้น Availability/Safety)',
    relatedLessonIds: ['L3-03']
  },
  {
    id: 'fc-040',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    conceptPromptEn:
      'Why would an organization place an Intrusion Detection sensor on a passive Network Tap instead of deploying an Inline IPS in a latency-sensitive network?',
    conceptPromptTh:
      'เหตุใดองค์กรจึงอาจเลือกวางเซ็นเซอร์ตรวจจับการบุกรุกบน Passive Network Tap แทนการวาง IPS แบบ Inline ในเครือข่ายที่อ่อนไหวต่อ Latency?',
    conceptualAnswerTh:
      'อุปกรณ์แบบ Inline ต้องรับแพ็กเก็ต ตรวจสอบ และส่งต่อบนเส้นทางหลัก ซึ่งเพิ่ม Latency และเสี่ยงต่อการเป็น Single Point of Failure หากอุปกรณ์ขัดข้อง ส่วน Passive Tap คัดลอกสำเนาทราฟฟิกส่งออกไปยังเซ็นเซอร์วิเคราะห์แบบ Out-of-Band จึงไม่กระทบความเร็วหรือความต่อเนื่องของทราฟฟิกจริงเลย แม้จะทำได้เพียงแจ้งเตือน (Detect) และบล็อกอัตโนมัติทันทีไม่ได้เหมือน IPS',
    compareContrastTh:
      'Inline (Active IPS) = บล็อกทราฟฟิกได้ทันที แต่เพิ่ม Latency และเป็นจุดขัดข้องได้ vs Tap/Monitor (Passive IDS) = ไม่กระทบเส้นทางหลักเลย แต่ทำได้เพียงตรวจจับและแจ้งเตือน',
    relatedLessonIds: ['L3-03']
  },
  {
    id: 'fc-041',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    conceptPromptEn:
      'How do the placement and security roles of a Forward Proxy, a Reverse Proxy, and a Jump Server differ in enterprise infrastructure?',
    conceptPromptTh:
      'ตำแหน่งการวางและบทบาทด้านความปลอดภัยของ Forward Proxy, Reverse Proxy และ Jump Server ในโครงสร้างพื้นฐานองค์กรแตกต่างกันอย่างไร?',
    conceptualAnswerTh:
      'Forward Proxy วางคั่นให้พนักงานภายในใช้ออกอินเทอร์เน็ตเพื่อกรอง URL/เนื้อหาและซ่อน IP ภายใน, Reverse Proxy (และ WAF) วางด้านหน้า Web Server ใน Screened Subnet เพื่อรับคำขอจากลูกค้าภายนอกมาตรวจคัดกรองและกระจายโหลดแทนเซิร์ฟเวอร์จริง, ส่วน Jump Server (Bastion Host) เป็นจุดเชื่อมต่อเฉพาะทางสำหรับผู้ดูแลระบบในการรีโมตเข้าไปจัดการเซิร์ฟเวอร์ภายในอย่างมีการควบคุมและบันทึกเซสชัน',
    compareContrastTh:
      'Forward Proxy = ตัวแทนคนในออกนอก | Reverse Proxy = ด่านหน้าปกป้องเซิร์ฟเวอร์รับคนนอกเข้า | Jump Server = ทางเข้าเฉพาะผู้ดูแลระบบเพื่อบริหารจัดการภายใน',
    relatedLessonIds: ['L3-03']
  },
  {
    id: 'fc-042',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    conceptPromptEn:
      'Compare a Layer 4 Firewall, a Next-Generation Firewall (NGFW), a UTM appliance, and a Web Application Firewall (WAF) by inspection depth and primary use case.',
    conceptPromptTh:
      'เปรียบเทียบ Layer 4 Firewall, NGFW, UTM และ WAF ตามความลึกของการตรวจแพ็กเก็ตและการใช้งานหลักที่เหมาะสม',
    conceptualAnswerTh:
      'Layer 4 Stateful Firewall กรองตาม IP, Port และสถานะการเชื่อมต่อ, NGFW เพิ่มการวิเคราะห์ระดับ Layer 7 แยกแยะแอปพลิเคชัน ตัวตนผู้ใช้ และมี IPS ในตัว, UTM รวมฟังก์ชันหลากหลาย (Firewall, AV, Spam, Content Filter, VPN) ในกล่องเดียวเหมาะกับสาขาหรือ SME, ส่วน WAF วิเคราะห์โครงสร้าง HTTP/HTTPS/API โดยเฉพาะเพื่อกันการโจมตีเว็บแอปเช่น SQLi และ XSS',
    compareContrastTh:
      'L4 = กรอง IP/Port/State | NGFW = L7 App-aware + IPS | UTM = รวมหลายฟีเจอร์ในเครื่องเดียวสำหรับสาขา | WAF = เฉพาะทางป้องกันเว็บแอปพลิเคชัน',
    relatedLessonIds: ['L3-04']
  },
  {
    id: 'fc-043',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    conceptPromptEn:
      'In IEEE 802.1X port security, what roles do the Supplicant, Authenticator, and Authentication Server play before granting network access?',
    conceptPromptTh:
      'ในมาตรฐาน IEEE 802.1X บทบาทของ Supplicant, Authenticator และ Authentication Server ทำงานร่วมกันอย่างไรก่อนอนุญาตให้เข้าเครือข่าย?',
    conceptualAnswerTh:
      'Supplicant (ซอฟต์แวร์บนเครื่องผู้ใช้) ส่งข้อมูลยืนยันตัวตนผ่าน EAP ไปยัง Authenticator (Switch หรือ Wireless AP) ซึ่งปิดพอร์ตไม่ให้ทราฟฟิกอื่นผ่านระหว่างรอตรวจสอบ จากนั้น Authenticator ส่งต่อคำขอไปยัง Authentication Server (เช่น RADIUS Server) เพื่อตรวจสอบข้อมูลรับรองหรือใบรับรอง เมื่อผ่านแล้วจึงเปิดพอร์ตหรือจัดลง VLAN ที่ถูกต้องให้ใช้งาน',
    compareContrastTh:
      'Supplicant = เครื่องผู้ขอเข้าใช้ | Authenticator = สวิตช์/AP ที่เฝ้าประตูพอร์ต | Authentication Server = RADIUS ที่ตรวจสอบและอนุมัติสิทธิ์',
    relatedLessonIds: ['L3-04', 'L4-02']
  },
  {
    id: 'fc-044',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    conceptPromptEn:
      'How do traditional IPsec VPNs, SD-WAN, and Secure Access Service Edge (SASE) differ when supporting a distributed workforce and cloud SaaS?',
    conceptPromptTh:
      'สถาปัตยกรรม VPN (IPsec), SD-WAN และ SASE แตกต่างกันอย่างไรเมื่อองค์กรมีพนักงานทำงานระยะไกลและใช้แอปพลิเคชันคลาวด์จำนวนมาก?',
    conceptualAnswerTh:
      'Traditional VPN มักส่งทราฟฟิกทั้งหมดจากผู้ใช้หรือสาขาย้อนกลับเข้าศูนย์ข้อมูลสำนักงานใหญ่ (Backhauling) ทำให้เกิดคอขวดเวลาใช้ SaaS, SD-WAN บริหารเส้นทางข้ามหลายลิงก์อินเทอร์เน็ต/MPLS อัจฉริยะเพื่อส่งทราฟฟิกสาขาตรงสู่คลาวด์ได้เร็วและประหยัด, ส่วน SASE หลอมรวม SD-WAN เข้ากับบริการความปลอดภัยบนคลาวด์ (SWG, CASB, FWaaS, ZTNA) ให้ตรวจนโยบายใกล้ตัวผู้ใช้ได้จากทุกที่',
    compareContrastTh:
      'VPN = สร้างอุโมงค์เข้ารหัสเข้าเครือข่ายหลัก | SD-WAN = บริหารเส้นทางเครือข่ายหลายลิงก์ | SASE = SD-WAN + Cloud Security Stack (ZTNA/SWG/CASB/FWaaS) สำหรับผู้ใช้ทุกที่',
    relatedLessonIds: ['L3-04']
  },
  {
    id: 'fc-045',
    domainId: 'D3',
    objectiveIds: ['3.3'],
    conceptPromptEn:
      'Why must security controls be mapped separately to Data at Rest, Data in Transit, and Data in Use?',
    conceptPromptTh:
      'เหตุใดจึงต้องออกแบบมาตรการความปลอดภัยแยกตามสถานะข้อมูลทั้ง Data at Rest, Data in Transit และ Data in Use?',
    conceptualAnswerTh:
      'เพราะข้อมูลมีภัยคุกคามต่างกันในแต่ละสถานะ: Data at Rest บนดิสก์หรือแบ็กอัปเสี่ยงต่อการขโมยฮาร์ดดิสก์จึงใช้ Full-Disk/DB Encryption, Data in Transit ระหว่างส่งผ่านเครือข่ายเสี่ยงต่อ On-Path Sniffing จึงใช้ TLS/IPsec, ส่วน Data in Use ขณะประมวลผลใน RAM ซึ่งต้องถอดรหัสออกมาใช้งานแล้วเสี่ยงต่อ Memory Scraping จึงต้องอาศัย Hardware Secure Enclave และการจำกัดสิทธิ์เข้าถึงหน่วยความจำ',
    compareContrastTh:
      'At Rest = เข้ารหัสดิสก์/ไฟล์/DB | In Transit = เข้ารหัสช่องทางสื่อสาร (TLS/IPsec) | In Use = ป้องกันหน่วยความจำขณะประมวลผล (Secure Enclave / Confidential Computing)',
    relatedLessonIds: ['L3-05', 'L3-06']
  },
  {
    id: 'fc-046',
    domainId: 'D3',
    objectiveIds: ['3.3'],
    conceptPromptEn:
      'How do Data Sovereignty and Geolocation constraints influence cloud region selection and backup replication architecture?',
    conceptPromptTh:
      'ข้อกำหนดด้าน Data Sovereignty และ Geolocation ส่งผลต่อการเลือก Cloud Region และสถาปัตยกรรมสำรองข้อมูลข้ามพื้นที่อย่างไร?',
    conceptualAnswerTh:
      'Data Sovereignty กำหนดว่าข้อมูลต้องอยู่ภายใต้กฎหมายของประเทศที่จัดเก็บข้อมูลทางกายภาพ ดังนั้นแม้องค์กรต้องการ Geographic Dispersion เพื่อป้องกันภัยพิบัติระดับภูมิภาค แต่หากกฎหมายห้ามส่งออกข้อมูลส่วนบุคคลหรือข้อมูลสุขภาพออกนอกประเทศ สถาปนิกต้องเลือก Replication ไปยัง Region สำรองที่ตั้งอยู่ในประเทศหรือเขตอำนาจศาลที่กฎหมายอนุญาตเท่านั้น',
    compareContrastTh:
      'Geographic Dispersion = กระจายความเสี่ยงภัยพิบัติระยะไกล vs Data Sovereignty = ข้อจำกัดทางกฎหมายเรื่องเขตแดนที่ตั้งข้อมูล (ต้องเลือก DR Region ที่ไม่ขัดกฎหมาย)',
    relatedLessonIds: ['L3-06', 'L3-07']
  },
  {
    id: 'fc-047',
    domainId: 'D3',
    objectiveIds: ['3.4'],
    conceptPromptEn:
      'What is the difference between High Availability (Clustering/Load Balancing) and Disaster Recovery Backups, and why does HA alone not protect against Ransomware?',
    conceptPromptTh:
      'ความแตกต่างระหว่าง High Availability (Clustering/Load Balancing) กับ Disaster Recovery Backups คืออะไร และเหตุใด HA เพียงอย่างเดียวจึงป้องกัน Ransomware ไม่ได้?',
    conceptualAnswerTh:
      'High Availability (HA) ออกแบบมาเพื่อรองรับกรณีอุปกรณ์หรือเซิร์ฟเวอร์ล่มโดยสลับภาระงานไปยังโหนดสำรองทันทีเพื่อไม่ให้เกิด Downtime แต่ระบบ HA จะซิงโครไนซ์การเปลี่ยนแปลงข้อมูลแบบเรียลไทม์ ดังนั้นหากข้อมูลถูกเข้ารหัสด้วย Ransomware หรือถูกลบโดยผิดพลาด ความเสียหายจะถูกคัดลอกไปยังโหนดสำรองด้วย จึงต้องมี Offline หรือ Immutable Backups เพื่อย้อนคืนข้อมูลที่สะอาดเสมอ',
    compareContrastTh:
      'HA = รักษาบริการให้ต่อเนื่องเมื่อฮาร์ดแวร์ขัดข้อง (ซิงค์ความเสียหายตามไปด้วยได้) vs Offline/Immutable Backup = รักษาสำเนาข้อมูลที่สะอาดเพื่อกู้คืนจาก Ransomware หรือข้อมูลพัง',
    relatedLessonIds: ['L3-07', 'L3-08']
  },
  {
    id: 'fc-048',
    domainId: 'D3',
    objectiveIds: ['3.4'],
    conceptPromptEn:
      'How do Hot, Warm, and Cold recovery sites balance operational cost against recovery speed (RTO/RPO)?',
    conceptPromptTh:
      'ศูนย์สำรองแบบ Hot Site, Warm Site และ Cold Site สร้างสมดุลระหว่างงบประมาณกับความเร็วในการกู้คืนระบบ (RTO/RPO) อย่างไร?',
    conceptualAnswerTh:
      'Hot Site มีอุปกรณ์ เครือข่าย และข้อมูลซิงค์ล่าสุดพร้อมสลับใช้งานในไม่กี่นาทีถึงชั่วโมงจึงตอบโจทย์ RTO/RPO ต่ำสุดแต่แพงที่สุด, Warm Site มีเซิร์ฟเวอร์และเครือข่ายรอไว้แต่ต้องนำข้อมูลแบ็กอัปล่าสุดมากู้คืนและปรับตั้งค่าก่อนใช้ (ใช้เวลาหลายชั่วโมงถึงวัน ต้นทุนปานกลาง), ส่วน Cold Site มีเพียงพื้นที่อาคารและระบบไฟรอติดตั้งอุปกรณ์ใหม่ทั้งหมด (ถูกสุดแต่ใช้เวลาหลายวันถึงสัปดาห์)',
    compareContrastTh:
      'Hot Site = แพงสุด/พร้อมทันที (RTO ต่ำสุด) | Warm Site = ราคากลาง/มีเครื่องรอแต่ต้องโหลดข้อมูล | Cold Site = ถูกสุด/มีแค่อาคารและไฟ รอจัดหาติดตั้งอุปกรณ์',
    relatedLessonIds: ['L3-07', 'L5-03']
  },
  {
    id: 'fc-049',
    domainId: 'D3',
    objectiveIds: ['3.4'],
    conceptPromptEn:
      'Compare Tabletop Exercises, Simulations, Parallel Processing, and Failover Tests by risk to production and validation realism.',
    conceptPromptTh:
      'เปรียบเทียบ Tabletop Exercise, Simulation, Parallel Processing และ Failover Test ในแง่ความเสี่ยงต่อระบบจริงและความสมจริงของการทดสอบ',
    conceptualAnswerTh:
      'Tabletop Exercise เป็นการประชุมซ้อมบทบาทจากสถานการณ์สมมติจึงไม่มีความเสี่ยงต่อระบบจริงและต้นทุนต่ำสุด, Simulation จำลองเหตุการณ์ปฏิบัติการจริงให้ทีมตอบสนองแต่ยังไม่กระทบผู้ใช้จริง, Parallel Processing เดินระบบสำรองควบคู่ระบบหลักเพื่อเทียบผลลัพธ์โดยไม่หยุดระบบหลัก, ส่วน Failover Test สลับทราฟฟิกจริงไปยังระบบสำรองซึ่งให้ความมั่นใจสูงสุดแต่ต้องวางแผนป้องกันผลกระทบต่อการผลิตอย่างรัดกุม',
    compareContrastTh:
      'ความสมจริงและผลกระทบจากต่ำไปสูง: Tabletop (พูดคุยบนโต๊ะ) -> Simulation (จำลองปฏิบัติ) -> Parallel Processing (รันคู่ขนานระบบหลัก) -> Failover (สลับใช้งานจริง)',
    relatedLessonIds: ['L3-08', 'L4-11']
  },

  // ===========================================================================
  // Domain 4.0 — Flashcards (fc-050 – fc-073)
  // ===========================================================================
  {
    id: 'fc-050',
    domainId: 'D4',
    objectiveIds: ['4.1'],
    conceptPromptEn:
      'Why must an enterprise Establish, Deploy, and Maintain Secure Baselines continuously rather than performing one-time hardening at server launch?',
    conceptPromptTh:
      'เหตุใดองค์กรจึงต้องกำหนด ปรับใช้ และบำรุงรักษา Secure Baselines อย่างต่อเนื่องแทนที่จะทำ Hardening เพียงครั้งเดียวตอนติดตั้งเซิร์ฟเวอร์?',
    conceptualAnswerTh:
      'ระบบที่ใช้งานจริงมีการอัปเดตแพตช์ แก้ไขไฟล์ตั้งค่า และเปลี่ยนแปลงบริการอยู่ตลอดเวลา ซึ่งก่อให้เกิด Configuration Drift จนค่าความมั่นคงคลาดเคลื่อนไปจากมาตรฐานเดิม นอกจากนี้ภัยคุกคามและคำแนะนำมาตรฐานใหม่ ๆ ก็พัฒนาขึ้นเสมอ การตรวจสอบเทียบ Baseline ต่อเนื่องช่วยให้ตรวจพบการเปลี่ยนแปลงที่ไม่ได้รับอนุญาตและคงความปลอดภัยสม่ำเสมอทั่วทั้งองค์กร',
    compareContrastTh:
      'One-time Hardening = เสี่ยง Configuration Drift เมื่อเวลาผ่านไป vs Baseline Lifecycle (Establish/Deploy/Maintain) = มาตรฐานเดียวกันทุกเครื่องและตรวจแก้การเบี่ยงเบนต่อเนื่อง',
    relatedLessonIds: ['L4-01', 'L4-05']
  },
  {
    id: 'fc-051',
    domainId: 'D4',
    objectiveIds: ['4.1'],
    conceptPromptEn:
      'How do WPA3-Personal (SAE) and WPA3-Enterprise (802.1X/RADIUS) strengthen wireless security compared to legacy WPA2-PSK?',
    conceptPromptTh:
      'WPA3-Personal (SAE) และ WPA3-Enterprise (802.1X/RADIUS) ยกระดับความปลอดภัยเครือข่ายไร้สายเหนือ WPA2-PSK แบบเดิมอย่างไร?',
    conceptualAnswerTh:
      'WPA2-PSK ใช้รหัสผ่านร่วมกันทั้งองค์กรและเสี่ยงต่อการดักจับ 4-way Handshake ไป Brute Force แบบออฟไลน์ ส่วน WPA3-Personal ใช้โปรโตคอล Simultaneous Authentication of Equals (SAE) ป้องกันการเดารหัสผ่านออฟไลน์และให้ Forward Secrecy และในระดับองค์กรควรใช้ WPA3-Enterprise ร่วมกับ 802.1X/RADIUS เพื่อให้พนักงานยืนยันตัวตนแยกบัญชีรายคนและเพิกถอนสิทธิ์เฉพาะคนได้โดยไม่ต้องเปลี่ยนรหัส Wi-Fi ทั้งบริษัท',
    compareContrastTh:
      'WPA3-Personal = Shared Passphrase แต่กัน Offline Brute Force ด้วย SAE | WPA3-Enterprise = ยืนยันตัวตนรายบุคคล/ใบรับรองผ่าน RADIUS คุมสิทธิ์และ Accounting รายคนได้',
    relatedLessonIds: ['L4-02']
  },
  {
    id: 'fc-052',
    domainId: 'D4',
    objectiveIds: ['4.1'],
    conceptPromptEn:
      'Compare BYOD, COPE, and CYOD mobile deployment models in terms of corporate control, employee privacy, and MDM wipe strategy.',
    conceptPromptTh:
      'เปรียบเทียบรูปแบบการใช้งานอุปกรณ์พกพาแบบ BYOD, COPE และ CYOD ในแง่ระดับการควบคุมขององค์กร ความเป็นส่วนตัวของพนักงาน และวิธีสั่งล้างข้อมูลผ่าน MDM',
    conceptualAnswerTh:
      'BYOD พนักงานเป็นเจ้าของเครื่องเอง จึงต้องใช้ Containerization แยกพื้นที่งานและทำได้เพียง Selective Wipe ล้างเฉพาะข้อมูลบริษัทเพื่อรักษาข้อมูลส่วนตัวพนักงาน, COPE บริษัทเป็นเจ้าของเครื่องและเปิดให้ใช้ส่วนตัวได้บ้างภายใต้การควบคุมเข้มข้นเต็มเครื่องของ MDM (ทำ Full Wipe ได้), ส่วน CYOD ให้พนักงานเลือกรุ่นเครื่องที่บริษัทอนุมัติรองรับมาตรฐานเดียวกันเพื่อลดภาระการซัพพอร์ตหลากหลายรุ่น',
    compareContrastTh:
      'BYOD = เครื่องพนักงาน (คุมเฉพาะ Container / Selective Wipe) | COPE = เครื่องบริษัท (คุมเต็มเครื่อง / Full Wipe) | CYOD = เลือกเฉพาะรุ่นที่บริษัทรับรองมาตรฐาน',
    relatedLessonIds: ['L4-02']
  },
  {
    id: 'fc-053',
    domainId: 'D4',
    objectiveIds: ['4.2'],
    conceptPromptEn:
      'When decommissioning storage media containing sensitive data, how do you choose among Wiping/Clearing, Degaussing, Cryptographic Erase, and Physical Destruction?',
    conceptPromptTh:
      'เมื่อปลดระวางสื่อจัดเก็บข้อมูลที่มีความลับ ควรเลือกใช้วิธี Wiping, Degaussing, Cryptographic Erase หรือ Physical Destruction ในกรณีใดบ้าง?',
    conceptualAnswerTh:
      'Wiping (เขียนทับข้อมูล) เหมาะกับสื่อที่นำกลับมาใช้ซ้ำภายในองค์กร, Degaussing ใช้คลื่นแม่เหล็กแรงสูงล้างข้อมูลเฉพาะสื่อแม่เหล็กอย่าง HDD หรือเทปสำรอง (ใช้กับ SSD/Flash ไม่ได้), Cryptographic Erase ทำลายคีย์ถอดรหัสของสื่อที่เข้ารหัสทั้งดิสก์ไว้ตั้งแต่ต้นอย่างรวดเร็ว, ส่วน Physical Destruction (บด ตัด เผา) ใช้เมื่อสื่อชำรุด เก็บข้อมูลความลับสูงสุด หรือต้องส่งทิ้งนอกองค์กรพร้อมออก Certificate of Destruction',
    compareContrastTh:
      'ใช้ซ้ำในองค์กร = Clear/Wiping หรือ Crypto Erase | สื่อแม่เหล็กปลดระวาง = Degaussing (ห้ามใช้กับ SSD) | ความลับสูงสุด/SSD ชำรุด = Physical Destruction + Certificate',
    relatedLessonIds: ['L4-03']
  },
  {
    id: 'fc-054',
    domainId: 'D4',
    objectiveIds: ['4.3'],
    conceptPromptEn:
      'Why do mature DevSecOps pipelines run both SAST and DAST instead of relying on only one testing method?',
    conceptPromptTh:
      'เหตุใดกระบวนการ DevSecOps ที่สมบูรณ์จึงต้องใช้งานทั้ง SAST และ DAST ควบคู่กันแทนที่จะเลือกใช้เพียงอย่างเดียว?',
    conceptualAnswerTh:
      'SAST วิเคราะห์ซอร์สโค้ดแบบ White-box ขณะยังไม่รันจึงพบจุดอ่อนระดับโค้ดและ Logic ตั้งแต่เนิ่น ๆ แต่ไม่เห็นปัญหาสภาพแวดล้อมจริงหลัง Deploy และมักมี False Positive สูง ส่วน DAST ทดสอบแอปขณะทำงานจริงแบบ Black-box จากภายนอกจึงพบช่องโหว่ด้านการตั้งค่าเซิร์ฟเวอร์ การยืนยันตัวตน และเซสชันที่ SAST มองไม่เห็น การใช้ทั้งคู่จึงเติมเต็มช่องว่างซึ่งกันและกัน',
    compareContrastTh:
      'SAST = ตรวจซอร์สโค้ดก่อนรัน (White-box / เห็นบรรทัดโค้ด) vs DAST = ยิงทดสอบขณะแอปทำงานจริง (Black-box / เห็นพฤติกรรมและการตั้งค่าจริง)',
    relatedLessonIds: ['L4-04']
  },
  {
    id: 'fc-055',
    domainId: 'D4',
    objectiveIds: ['4.3'],
    conceptPromptEn:
      'What is the difference between Credentialed and Non-Credentialed vulnerability scans, and when is each approach most valuable?',
    conceptPromptTh:
      'การสแกนช่องโหว่แบบ Credentialed Scan และ Non-Credentialed Scan แตกต่างกันอย่างไร และแต่ละแบบให้คุณค่าสูงสุดในบริบทใด?',
    conceptualAnswerTh:
      'Non-Credentialed Scan สแกนจากภายนอกโดยไม่ใช้บัญชีล็อกอิน จึงสะท้อนมุมมองของแฮกเกอร์ภายนอกที่เห็นเฉพาะพอร์ตและบริการที่เปิดสาธารณะ แต่ตรวจไม่เห็นแพตช์ OS ที่ขาดหรือไฟล์ตั้งค่าภายใน, ส่วน Credentialed Scan ใช้บัญชีอ่านข้อมูลล็อกอินเข้าเครื่องเพื่อตรวจรีจิสตรี รายการซอฟต์แวร์ เวอร์ชันแพตช์ และการตั้งค่าภายในอย่างแม่นยำพร้อมลด False Positive ลงมาก',
    compareContrastTh:
      'Non-Credentialed = มุมมองผู้โจมตีภายนอก (เห็นแค่พื้นผิวที่เปิด) vs Credentialed = มุมมองการตรวจสอบภายในเชิงลึก (ตรวจแพตช์และ Local Config ได้แม่นยำกว่า)',
    relatedLessonIds: ['L4-04']
  },
  {
    id: 'fc-056',
    domainId: 'D4',
    objectiveIds: ['4.3'],
    conceptPromptEn:
      'Compare OSINT, Information-Sharing Organizations (ISACs), Proprietary Threat Feeds, and Dark Web monitoring for vulnerability and threat intelligence.',
    conceptPromptTh:
      'เปรียบเทียบแหล่งข่าวกรองภัยคุกคามแบบ OSINT, องค์กรแลกเปลี่ยนข้อมูล (ISAC), Proprietary Feeds และ Dark Web Monitoring ในการบริหารจัดการช่องโหว่',
    conceptualAnswerTh:
      'OSINT ดึงข้อมูลสาธารณะฟรีและรวดเร็วแต่อาจต้องคัดกรองสัญญาณรบกวนเอง, Information-Sharing Organizations (เช่น ISAC ตามกลุ่มอุตสาหกรรม) ให้ข้อมูลแคมเปญโจมตีที่มุ่งเป้าอุตสาหกรรมเดียวกันโดยตรง, Proprietary/Third-party Feeds ให้ข้อมูลที่คัดกรองและวิเคราะห์ลึกพร้อมบริบทจากผู้เชี่ยวชาญแต่มีค่าใช้จ่าย, ส่วน Dark Web Monitoring ช่วยเตือนล่วงหน้าหากข้อมูลรับรองหรือข้อมูลบริษัทถูกประกาศขายหรือมีการวางแผนโจมตี',
    compareContrastTh:
      'OSINT = เปิดเผยสาธารณะฟรี | ISAC = เฉพาะอุตสาหกรรมร่วมกัน | Proprietary = คัดกรองเชิงลึกมีค่าใช้จ่าย | Dark Web = เฝ้าดูการซื้อขายข้อมูลรั่วไหลใต้ดิน',
    relatedLessonIds: ['L4-04']
  },
  {
    id: 'fc-057',
    domainId: 'D4',
    objectiveIds: ['4.3'],
    conceptPromptEn:
      'Why should remediation teams combine CVSS scores with Environmental Variables, Exposure Factor, and Organizational Impact instead of patching strictly by Base Score?',
    conceptPromptTh:
      'เหตุใดทีมแก้ไขช่องโหว่จึงไม่ควรจัดลำดับการแพตช์ตาม CVSS Base Score สูงสุดเพียงอย่างเดียว แต่ต้องพิจารณา Environmental Variables, Exposure Factor และ Organizational Impact ร่วมด้วย?',
    conceptualAnswerTh:
      'CVSS Base Score สะท้อนความรุนแรงทางเทคนิคทั่วไปโดยไม่รู้บริบทขององค์กร เช่น ช่องโหว่คะแนน 9.8 บนเซิร์ฟเวอร์ทดสอบที่แยก Air-Gapped ไม่เชื่อมต่อเน็ตและไม่มีข้อมูลสำคัญ อาจเร่งด่วนน้อยกว่าช่องโหว่คะแนน 7.5 บนเว็บแอปสาธารณะที่เชื่อมต่อฐานข้อมูลการเงินหลักและมีโค้ดโจมตีเผยแพร่แล้ว การนำ Environmental Context และความสำคัญทางธุรกิจมาชั่งน้ำหนักจึงทำให้จัดสรรทรัพยากรได้ตรงความเสี่ยงจริง',
    compareContrastTh:
      'CVSS Base Score = ความรุนแรงเชิงทฤษฎีของช่องโหว่ vs Environmental/Business Context = ความเสี่ยงจริงเมื่อคำนึงถึงตำแหน่งระบบ การเข้าถึง และมูลค่าข้อมูลในองค์กร',
    relatedLessonIds: ['L4-04', 'L5-02']
  },
  {
    id: 'fc-058',
    domainId: 'D4',
    objectiveIds: ['4.3'],
    conceptPromptEn:
      'After applying a patch for a critical CVE, why must Vulnerability Management include Validation/Rescanning before closing the ticket?',
    conceptPromptTh:
      'หลังจากติดตั้งแพตช์แก้ไข CVE ร้ายแรงแล้ว เหตุใดกระบวนการ Vulnerability Management จึงต้องมีขั้นตอน Validation/Rescanning ก่อนปิดงานเสมอ?',
    conceptualAnswerTh:
      'การติดตั้งแพตช์อาจยังไม่สมบูรณ์เพราะลืมรีสตาร์ตบริการ แพตช์ถูกติดตั้งไม่ครบทุกโหนด หรือยังเหลือการตั้งค่าที่เปิดช่องโหว่อยู่ การทำ Rescanning หรือ Audit ตรวจสอบซ้ำยืนยันว่าช่องโหว่ถูกปิดจริงและไม่สร้างผลข้างเคียงใหม่ (False Negative Check) ก่อนบันทึกผลรายงานผู้บริหาร',
    compareContrastTh:
      'Patch Deployment = ลงมือแก้ไขปัญหา vs Validation/Rescanning = พิสูจน์เชิงประจักษ์ว่าช่องโหว่หมดไปจริงก่อนปิดงาน',
    relatedLessonIds: ['L4-04']
  },
  {
    id: 'fc-059',
    domainId: 'D4',
    objectiveIds: ['4.4', '4.7'],
    conceptPromptEn:
      'How do SIEM and SOAR complement each other in a modern Security Operations Center (SOC)?',
    conceptPromptTh:
      'SIEM และ SOAR เสริมการทำงานซึ่งกันและกันอย่างไรในศูนย์ปฏิบัติการความปลอดภัย (SOC) ยุคใหม่?',
    conceptualAnswerTh:
      'SIEM ทำหน้าที่รวบรวม Log จากหลายแหล่ง (Log Aggregation) ปรับรูปแบบข้อมูล ทำ Correlation วิเคราะห์หาความผิดปกติและสร้าง Alert แจ้งเตือน ส่วน SOAR รับ Alert จาก SIEM มาเชื่อมโยงกับเครื่องมืออื่นผ่าน API เพื่อทำ Enrich ข้อมูล เปิด Ticket และรัน Playbook ตอบสนองอัตโนมัติ (เช่น บล็อก IP หรือกักกันเครื่อง) เพื่อลดเวลาการตอบสนองและลดภาระงานซ้ำซ้อนของนักวิเคราะห์',
    compareContrastTh:
      'SIEM = รวบรวม Log, เชื่อมโยงเหตุการณ์ และแจ้งเตือน ("เห็นและรู้ว่าเกิดอะไร") vs SOAR = ประสานเครื่องมือและรันขั้นตอนตอบสนองอัตโนมัติ ("ลงมือจัดการตาม Playbook")',
    relatedLessonIds: ['L4-05', 'L4-10']
  },
  {
    id: 'fc-060',
    domainId: 'D4',
    objectiveIds: ['4.4'],
    conceptPromptEn:
      'Compare SCAP Benchmarks, NetFlow, and SNMP Traps in terms of what kind of operational visibility each provides.',
    conceptPromptTh:
      'เปรียบเทียบ SCAP Benchmarks, NetFlow และ SNMP Traps ในแง่ข้อมูลและมุมมองความมั่นคงปลอดภัยที่แต่ละเครื่องมือมอบให้',
    conceptualAnswerTh:
      'SCAP Benchmarks ตรวจสอบการตั้งค่าระบบและสถานะแพตช์แบบอัตโนมัติว่าสอดคล้องกับ Secure Baseline หรือไม่, NetFlow ให้สถิติการไหลของทราฟฟิกเครือข่าย (ต้นทาง ปลายทาง พอร์ต ปริมาณข้อมูล) เพื่อตรวจจับความผิดปกติของการสื่อสารเช่น Exfiltration, ส่วน SNMP Traps เป็นข้อความแจ้งเตือนทันทีจากอุปกรณ์เครือข่ายเมื่อเกิดเหตุสถานะฮาร์ดแวร์/พอร์ตเปลี่ยน',
    compareContrastTh:
      'SCAP = ตรวจ Config/Compliance ของระบบ | NetFlow = วิเคราะห์สถิติการไหลของทราฟฟิกเครือข่าย | SNMP Traps = รับแจ้งเตือนสถานะอุปกรณ์แบบ Event-driven',
    relatedLessonIds: ['L4-05']
  },
  {
    id: 'fc-061',
    domainId: 'D4',
    objectiveIds: ['4.4'],
    conceptPromptEn:
      'Why is Alert Tuning vital for SOC effectiveness, and how do False Positives lead to missed real incidents?',
    conceptPromptTh:
      'เหตุใดการทำ Alert Tuning จึงสำคัญต่อประสิทธิภาพของทีม SOC และเหตุใด False Positives จำนวนมากจึงทำให้พลาดเหตุการณ์โจมตีจริงได้?',
    conceptualAnswerTh:
      'เมื่อระบบแจ้งเตือน False Positive ซ้ำ ๆ วันละหลายพันรายการ นักวิเคราะห์จะเกิดอาการล้าจากสัญญาณเตือน (Alert Fatigue) จนทำงานล่าช้าหรือเผลอปิดการแจ้งเตือนหรือมองข้ามสัญญาณเตือนสำคัญที่เป็นการโจมตีจริง (True Positive) การทำ Alert Tuning ปรับเกณฑ์และข้อยกเว้นให้แม่นยำจึงช่วยให้ทีม SOC โฟกัสกับเหตุการณ์ที่มีความเสี่ยงจริงได้อย่างทันท่วงที',
    compareContrastTh:
      'Untuned Alerts = สัญญาณรบกวนสูงและเสี่ยง Alert Fatigue จนพลาดเหตุจริง vs Alert Tuning = คัดกรองสัญญาณรบกวนเพื่อให้ True Positive โดดเด่นและตอบสนองไว',
    relatedLessonIds: ['L4-05']
  },
  {
    id: 'fc-062',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    conceptPromptEn:
      'Explain the distinct roles of SPF, DKIM, and DMARC in preventing email spoofing, and why DMARC depends on the first two.',
    conceptPromptTh:
      'อธิบายบทบาทเฉพาะตัวของ SPF, DKIM และ DMARC ในการป้องกันการปลอมแปลงอีเมล และเหตุใด DMARC จึงต้องอาศัยสองตัวแรก?',
    conceptualAnswerTh:
      'SPF ระบุรายชื่อ IP เมลเซิร์ฟเวอร์ที่อนุญาตให้ส่งเมลแทนโดเมนใน DNS, DKIM ใช้ Private Key ลงลายเซ็นดิจิทัลบนอีเมลเพื่อยืนยันว่าไม่ถูกแก้ไขระหว่างทางและมาจากโดเมนจริง, ส่วน DMARC ตรวจสอบผลและ Alignment ของ SPF/DKIM เพื่อสั่งการเซิร์ฟเวอร์ผู้รับว่าจะทำอย่างไรกับเมลที่ไม่ผ่าน (p=none, quarantine หรือ reject) พร้อมส่งรายงานกลับมาให้เจ้าของโดเมนวิเคราะห์',
    compareContrastTh:
      'SPF = ตรวจ IP เซิร์ฟเวอร์ผู้ส่ง | DKIM = ตรวจลายเซ็นดิจิทัลรับรองเนื้อหา | DMARC = ตรวจ Alignment + ออกนโยบายปฏิเสธและส่งรายงาน',
    relatedLessonIds: ['L4-06']
  },
  {
    id: 'fc-063',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    conceptPromptEn:
      'How do EDR, XDR, traditional Antivirus, and User Behavior Analytics (UBA) differ in detection scope and response capability?',
    conceptPromptTh:
      'EDR, XDR, Antivirus แบบเดิม และ UBA แตกต่างกันอย่างไรในด้านขอบเขตการตรวจจับและความสามารถในการตอบสนอง?',
    conceptualAnswerTh:
      'Antivirus แบบเดิมพึ่งพา File Signatures จับมัลแวร์ที่รู้จักบนเครื่องเดียว, EDR เก็บพฤติกรรม Process/Memory บน Endpoint เพื่อจับภัยคุกคามซับซ้อนและให้ SOC สั่ง Isolate เครื่องได้, XDR ขยายการเชื่อมโยง Telemetry ข้าม Endpoint, Network, Email และ Cloud เป็นภาพเดียว, ส่วน UBA วิเคราะห์พฤติกรรมผู้ใช้เทียบ Baseline เพื่อจับบัญชีที่ถูกยึดครองหรือ Insider Threat',
    compareContrastTh:
      'AV = Signature ไฟล์บนเครื่อง | EDR = พฤติกรรมและกักกันบน Endpoint | XDR = เชื่อมโยงหลายโดเมน (Endpoint+Net+Email+Cloud) | UBA = วิเคราะห์พฤติกรรมผิดปกติของผู้ใช้',
    relatedLessonIds: ['L4-07']
  },
  {
    id: 'fc-064',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    conceptPromptEn:
      'Compare the protective focus of Network Access Control (NAC), File Integrity Monitoring (FIM), and Data Loss Prevention (DLP).',
    conceptPromptTh:
      'เปรียบเทียบจุดเน้นการป้องกันของ NAC, FIM และ DLP ในสภาพแวดล้อมองค์กร',
    conceptualAnswerTh:
      'NAC ตรวจสอบตัวตนและสุขภาพอุปกรณ์ (เช่น แพตช์และ AV) ก่อนและระหว่างเชื่อมต่อเครือข่ายเพื่อกันเครื่องไม่ปลอดภัยเข้า LAN/Wi-Fi, FIM ตรวจสอบค่า Hash และสิทธิ์ของไฟล์ระบบ/Config สำคัญเพื่อแจ้งเตือนทันทีเมื่อถูกแอบแก้ไข, ส่วน DLP ตรวจจับและบล็อกการคัดลอก ส่งออก หรืออัปโหลดข้อมูลอ่อนไหวออกนอกขอบเขตที่อนุญาต',
    compareContrastTh:
      'NAC = ตรวจสุขภาพอุปกรณ์ก่อนเข้าเครือข่าย | FIM = ตรวจจับการแก้ไขไฟล์สำคัญโดยมิชอบ | DLP = ป้องกันข้อมูลลับรั่วไหลออกนอกองค์กร',
    relatedLessonIds: ['L4-07']
  },
  {
    id: 'fc-065',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    conceptPromptEn:
      'How do Windows Group Policy (GPO) and SELinux harden operating systems at different architectural levels?',
    conceptPromptTh:
      'Windows Group Policy (GPO) และ SELinux เสริมความแข็งแกร่งให้ระบบปฏิบัติการในระดับสถาปัตยกรรมที่แตกต่างกันอย่างไร?',
    conceptualAnswerTh:
      'Group Policy (GPO) เป็นระบบบริหารจัดการแบบรวมศูนย์ของ Active Directory ที่ผลักดันการตั้งค่าความปลอดภัย นโยบายรหัสผ่าน และกฎ Firewall ไปยังเครื่อง Windows จำนวนมากพร้อมกัน ส่วน SELinux เป็นโมดูลความปลอดภัยระดับเคอร์เนลใน Linux ที่บังคับใช้ Mandatory Access Control (MAC) จำกัดขอบเขตการทำงานของแต่ละ Process/Service ไม่ให้เข้าถึงไฟล์หรือพอร์ตอื่นนอกเหนือบริบทที่กำหนด แม้ Process นั้นถูกเจาะก็ตาม',
    compareContrastTh:
      'GPO = เครื่องมือบังคับตั้งค่าความปลอดภัยจากศูนย์กลางสำหรับ Windows Domain vs SELinux = ระบบ Mandatory Access Control ใน Kernel Linux เพื่อจำกัดขอบเขต Process',
    relatedLessonIds: ['L4-07', 'L4-01']
  },
  {
    id: 'fc-066',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    conceptPromptEn:
      'In Identity Federation and SSO, how do SAML, OAuth 2.0, and LDAP serve fundamentally different purposes?',
    conceptPromptTh:
      'ในระบบ Identity Federation และ SSO โปรโตคอล SAML, OAuth 2.0 และ LDAP ถูกออกแบบมาเพื่อวัตถุประสงค์ที่แตกต่างกันอย่างไร?',
    conceptualAnswerTh:
      'LDAP ใช้สืบค้นและตรวจสอบบัญชีผู้ใช้ใน Directory ภายในองค์กร (เช่น Active Directory), SAML ใช้รูปแบบ XML ส่งต่อการยืนยันตัวตนและคุณลักษณะผู้ใช้ (Authentication Assertion) จาก IdP ไปยังเว็บแอปพลิเคชันเพื่อทำ Enterprise SSO, ส่วน OAuth 2.0 ใช้มอบอำนาจการเข้าถึงทรัพยากร/API แทนผู้ใช้ (Delegated Authorization) ผ่าน Access Token โดยไม่ต้องให้รหัสผ่านแก่แอปบุคคลที่สาม',
    compareContrastTh:
      'LDAP = สืบค้น Directory ภายใน | SAML = Authentication Federation/SSO ระดับองค์กร | OAuth 2.0 = Delegated Authorization อนุญาตแอปเข้าถึง API/ทรัพยากร',
    relatedLessonIds: ['L4-08']
  },
  {
    id: 'fc-067',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    conceptPromptEn:
      'Compare MAC, DAC, RBAC, ABAC, and Rule-Based Access Control on flexibility, owner discretion, and contextual evaluation.',
    conceptPromptTh:
      'เปรียบเทียบโมเดลควบคุมสิทธิ์ MAC, DAC, RBAC, ABAC และ Rule-Based Access Control ในด้านความยืดหยุ่น อำนาจเจ้าของไฟล์ และการประเมินบริบท',
    conceptualAnswerTh:
      'MAC เข้มงวดสุด ระบบกลางบังคับตามป้ายความลับ/Clearance เจ้าของไฟล์แก้สิทธิ์ไม่ได้, DAC ยืดหยุ่นสุด เจ้าของไฟล์กำหนดสิทธิ์แบ่งปันเองได้, RBAC กำหนดสิทธิ์ตามตำแหน่งหน้าที่ (Role), Rule-Based ใช้กฎเงื่อนไขตายตัวเช่นอนุญาตเฉพาะช่วงเวลาหรือ IP, ส่วน ABAC ประเมินหลาย Attributes แบบพลวัตพร้อมกัน (ตัวตน ทรัพยากร เวลา สถานที่ สุขภาพอุปกรณ์) จึงยืดหยุ่นและละเอียดสุดสำหรับ Zero Trust',
    compareContrastTh:
      'MAC = ป้ายลับตายตัว | DAC = เจ้าของไฟล์กำหนดเอง | RBAC = ตามตำแหน่งงาน | Rule-Based = ตามกฎเงื่อนไข/เวลา | ABAC = ประเมินหลายคุณลักษณะแบบพลวัต',
    relatedLessonIds: ['L4-09']
  },
  {
    id: 'fc-068',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    conceptPromptEn:
      'Why does combining a password with a security question fail to qualify as MFA, and why are FIDO2 security keys stronger than SMS OTP?',
    conceptPromptTh:
      'เหตุใดการใช้รหัสผ่านคู่กับคำถามกันลืมจึงไม่ถือเป็น MFA ที่แท้จริง และเหตุใด Hardware Security Key (FIDO2) จึงแข็งแกร่งกว่า SMS OTP?',
    conceptualAnswerTh:
      'ทั้งรหัสผ่านและคำถามกันลืมจัดอยู่ในปัจจัยประเภทเดียวกันคือ "Something you know" จึงไม่ใช่มัลติแฟกเตอร์ (ต้องต่างประเภทกันอย่างน้อย 2 จาก Know, Have, Are, Somewhere) ส่วน SMS OTP เสี่ยงต่อการถูก SIM Swapping และการดักจับหรือหลอกกรอกบนเว็บ Phishing ขณะที่ FIDO2 Security Key ใช้การเข้ารหัสแบบ Asymmetric ผูกกับชื่อโดเมนจริง (Origin-bound) จึงไม่ส่งคำตอบยืนยันตัวตนให้เว็บ Phishing ปลอม',
    compareContrastTh:
      'Password + Security Question = Single-factor ซ้ำประเภท (Know+Know) | SMS OTP = เสี่ยง SIM Swap & Real-time Phishing | FIDO2 Key = Phishing-resistant Hardware MFA',
    relatedLessonIds: ['L4-09']
  },
  {
    id: 'fc-069',
    domainId: 'D4',
    objectiveIds: ['4.6'],
    conceptPromptEn:
      'How do Password Vaulting, Just-in-Time (JIT) Permissions, and Ephemeral Credentials in a PAM solution reduce Standing Privilege risk?',
    conceptPromptTh:
      'ฟีเจอร์ Password Vaulting, Just-in-Time (JIT) Permissions และ Ephemeral Credentials ในระบบ PAM ช่วยลดความเสี่ยงจาก Standing Privileges ได้อย่างไร?',
    conceptualAnswerTh:
      'การปล่อยให้บัญชีแอดมินถือสิทธิ์สูงค้างไว้ตลอดเวลา (Standing Privileges) เปิดช่องให้ผู้โจมตีที่ยึดเครื่องได้ใช้สิทธิ์ทันที ระบบ PAM จึงซ่อนและหมุนเวียนรหัสผ่านอัตโนมัติใน Password Vault, อนุมัติยกระดับสิทธิ์แบบ Just-in-Time เฉพาะตอนทำงานจริงและถอนสิทธิ์คืนเมื่อครบเวลา และสร้าง Ephemeral Credentials แบบชั่วคราวใช้แล้วทิ้งทันทีเพื่อไม่ให้ขโมยไปใช้ซ้ำได้',
    compareContrastTh:
      'Standing Privileges = ถือสิทธิ์สูงถาวรตลอดเวลา (เสี่ยงสูง) vs PAM (Vaulting + JIT + Ephemeral) = ขอใช้เฉพาะกิจ หมดอายุอัตโนมัติ และบันทึกเซสชันครบถ้วน',
    relatedLessonIds: ['L4-09']
  },
  {
    id: 'fc-070',
    domainId: 'D4',
    objectiveIds: ['4.7'],
    conceptPromptEn:
      'What are the top operational benefits of Security Automation and Orchestration, and what architectural pitfalls must teams guard against?',
    conceptPromptTh:
      'ประโยชน์หลักของ Security Automation & Orchestration คืออะไร และทีมงานต้องระวังข้อผิดพลาดหรือความเสี่ยงด้านสถาปัตยกรรมใดบ้าง?',
    conceptualAnswerTh:
      'ประโยชน์หลักคือเป็น Workforce Multiplier ลด Reaction Time บังคับใช้ Secure Baseline และ Guardrails สม่ำเสมอ ช่วย Secure Scaling และลดงานซ้ำซากเพื่อรักษาบุคลากร (Employee Retention) แต่ข้อควรระวังคืออาจเพิ่มความซับซ้อนและต้นทุนการดูแล สร้าง Technical Debt หากเขียนสคริปต์ขาดเอกสาร และตัวระบบ Orchestration เองอาจกลายเป็น Single Point of Failure หรือจุดโจมตีที่มีสิทธิ์สูงมากหากไม่ป้องกันอย่างเข้มงวด',
    compareContrastTh:
      'ประโยชน์ = เร็ว สม่ำเสมอ ขยายระบบปลอดภัย ลดภาระทีม | ความเสี่ยง = ความซับซ้อน ต้นทุน Technical Debt และความเสี่ยง Single Point of Failure / Over-privileged Automation',
    relatedLessonIds: ['L4-10']
  },
  {
    id: 'fc-071',
    domainId: 'D4',
    objectiveIds: ['4.8'],
    conceptPromptEn:
      'During Incident Response, why must Containment precede Eradication, and why is EDR network isolation preferred over pulling the power cable?',
    conceptPromptTh:
      'ในกระบวนการ Incident Response เหตุใดจึงต้องทำ Containment ก่อน Eradication และเหตุใดการสั่ง EDR Isolate เครือข่ายจึงดีกว่าการดึงปลั๊กไฟทันที?',
    conceptualAnswerTh:
      'Containment มีเป้าหมายหยุดการแพร่กระจายและจำกัดความเสียหายเฉพาะหน้าก่อนลงมือถอดถอนมัลแวร์หรือปิดช่องโหว่ถาวร (Eradication) มิฉะนั้นผู้บุกรุกอาจย้ายไปเครื่องอื่นหรือเปิด Backdoor ใหม่ระหว่างกำลังทำความสะอาด ส่วนการใช้ EDR Isolate ตัดการสื่อสารเครือข่ายของเครื่องติดเชื้อโดยยังคงเครื่องเปิดอยู่ ช่วยรักษาหลักฐานสำคัญในหน่วยความจำ (RAM/Volatile Memory) และกระบวนการที่กำลังรันไว้สำหรับ Digital Forensics',
    compareContrastTh:
      'Containment = หยุดเลือดไม่ให้ลุกลาม (ควรรักษา RAM เพื่อเก็บหลักฐาน) -> Eradication = กำจัดต้นตอและช่องโหว่ -> Recovery = กู้คืนอย่างสะอาดปลอดภัย',
    relatedLessonIds: ['L4-11']
  },
  {
    id: 'fc-072',
    domainId: 'D4',
    objectiveIds: ['4.8'],
    conceptPromptEn:
      'How do Legal Hold, Preservation, and Chain of Custody protect forensic admissibility during an investigation?',
    conceptPromptTh:
      'Legal Hold, Preservation และ Chain of Custody ช่วยคุ้มครองความน่าเชื่อถือและผลทางกฎหมายของหลักฐานดิจิทัลระหว่างการสืบสวนอย่างไร?',
    conceptualAnswerTh:
      'Legal Hold สั่งระงับกระบวนการลบหรือเขียนทับข้อมูลอัตโนมัติตามรอบปกติทันทีที่เกิดคดีหรือการสอบสวน, Preservation เป็นการทำสำเนาหลักฐานแบบอ่านอย่างเดียว (Forensic Image) พร้อมบันทึกค่า Cryptographic Hash เพื่อยืนยันว่าไม่มีการแก้ไขต้นฉบับ, ส่วน Chain of Custody บันทึกประวัติผู้ครอบครอง การส่งต่อ และเวลาการจัดเก็บทุกขั้นตอนเพื่อพิสูจน์ในชั้นศาลว่าหลักฐานไม่ถูกปนเปื้อนหรือปลอมแปลง',
    compareContrastTh:
      'Legal Hold = ห้ามลบข้อมูลที่เกี่ยวข้อง | Preservation = เก็บภาพสำเนาและ Hash ยืนยันความถูกต้อง | Chain of Custody = บันทึกประวัติการถือครองไม่ขาดตอน',
    relatedLessonIds: ['L4-11']
  },
  {
    id: 'fc-073',
    domainId: 'D4',
    objectiveIds: ['4.9'],
    conceptPromptEn:
      'When investigating an incident, how do Firewall Logs, Auth/IdP Logs, Packet Captures (PCAP), and Metadata provide different pieces of evidence?',
    conceptPromptTh:
      'ในการสืบสวนเหตุการณ์ความปลอดภัย Firewall Logs, Auth/IdP Logs, Packet Captures (PCAP) และ Metadata ให้หลักฐานคนละมุมมองอย่างไร?',
    conceptualAnswerTh:
      'Auth/IdP Logs แสดงว่าบัญชีใดล็อกอินสำเร็จหรือล้มเหลว จาก IP/เมืองใด และผ่าน MFA หรือโปรโตคอลเก่า, Firewall Logs แสดงทิศทางการ Allow/Deny พอร์ต และปริมาณไบต์เข้าออก (เช่น ตรวจหา Exfiltration), Metadata บอกบริบทการสื่อสารและคุณสมบัติไฟล์แม้เนื้อหาจะถูกเข้ารหัส, ส่วน PCAP บันทึกข้อมูลระดับแพ็กเก็ตเต็มรูปแบบสำหรับวิเคราะห์ Payload และโปรโตคอลเชิงลึกสุด',
    compareContrastTh:
      'Auth Logs = ตัวตน/MFA/สถานที่ | Firewall Logs = การเชื่อมต่อและปริมาณไบต์ | Metadata = ข้อมูลบริบทแม้ทราฟฟิกเข้ารหัส | PCAP = เนื้อหาแพ็กเก็ตละเอียดระดับไบต์',
    relatedLessonIds: ['L4-12']
  },

  // ===========================================================================
  // Domain 5.0 — Flashcards (fc-074 – fc-087)
  // ===========================================================================
  {
    id: 'fc-074',
    domainId: 'D5',
    objectiveIds: ['5.1'],
    conceptPromptEn:
      'Distinguish among Policies, Standards, Procedures, and Guidelines by enforcement level and specificity.',
    conceptPromptTh:
      'จงแยกความแตกต่างระหว่าง Policies, Standards, Procedures และ Guidelines ตามระดับการบังคับใช้และความเฉพาะเจาะจง',
    conceptualAnswerTh:
      'Policies เป็นคำสั่งระดับสูงจากฝ่ายบริหารที่กำหนดทิศทางและข้อบังคับกว้าง ๆ (Mandatory), Standards แปลงนโยบายเป็นเกณฑ์มาตรฐานหรือตัวเลขเฉพาะเจาะจงที่ต้องปฏิบัติตาม (Mandatory เช่น รหัสผ่านยาวขั้นต่ำ 12 ตัว), Procedures เป็นขั้นตอนลงมือทำทีละขั้นสำหรับเจ้าหน้าที่ (Mandatory Step-by-step), ส่วน Guidelines เป็นคำแนะนำแนวทางปฏิบัติที่ดีซึ่งยืดหยุ่นและไม่บังคับตายตัว (Advisory)',
    compareContrastTh:
      'Mandatory = Policies (ทิศทางหลัก) + Standards (เกณฑ์ตัวเลข/เทคนิค) + Procedures (ขั้นตอนทีละขั้น) | Advisory/Flexible = Guidelines (ข้อแนะนำแนวทางที่ดี)',
    relatedLessonIds: ['L5-01']
  },
  {
    id: 'fc-075',
    domainId: 'D5',
    objectiveIds: ['5.1'],
    conceptPromptEn:
      'How do the responsibilities of a Data Owner, Data Controller, Data Processor, Data Custodian, and Data Steward differ?',
    conceptPromptTh:
      'หน้าที่ความรับผิดชอบของ Data Owner, Data Controller, Data Processor, Data Custodian และ Data Steward แตกต่างกันอย่างไร?',
    conceptualAnswerTh:
      'Data Owner เป็นผู้บริหารระดับสูงที่เป็นเจ้าของข้อมูลเชิงธุรกิจ มีอำนาจจัดชั้นความลับและอนุมัติสิทธิ์, Data Controller เป็นนิติบุคคลหรือผู้กำหนดวัตถุประสงค์และวิธีการประมวลผลข้อมูลส่วนบุคคลตามกฎหมาย, Data Processor เป็นผู้ให้บริการภายนอกที่รับประมวลผลข้อมูลตามคำสั่งของ Controller (เช่น Cloud/Payroll Vendor), Data Custodian เป็นทีมปฏิบัติการเทคนิค (SysAdmin/DBA) ที่ดูแลการตั้งค่า ACL การเข้ารหัส และ Backup ประจำวัน, ส่วน Data Steward เป็นผู้ดูแลระดับปฏิบัติการด้านคุณภาพ ความถูกต้อง นิยาม และการติดป้ายจำแนกข้อมูล',
    compareContrastTh:
      'Owner = จัดชั้นและอนุมัติสิทธิ์ | Controller = กำหนดเหตุผล/วิธีใช้ข้อมูล | Processor = ประมวลผลแทนตามคำสั่ง | Custodian = ดูแลเทคนิค/ACL/Backup | Steward = ดูแลคุณภาพและป้ายข้อมูล',
    relatedLessonIds: ['L5-01', 'L5-05']
  },
  {
    id: 'fc-076',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    conceptPromptEn:
      'When should an organization use Qualitative versus Quantitative Risk Analysis, and how do SLE, ARO, and ALE link together?',
    conceptPromptTh:
      'องค์กรควรใช้การวิเคราะห์ความเสี่ยงแบบ Qualitative เทียบกับ Quantitative เมื่อใด และค่า SLE, ARO กับ ALE เชื่อมโยงกันอย่างไร?',
    conceptualAnswerTh:
      'Qualitative ใช้การจัดระดับเชิงคุณภาพ (สูง/กลาง/ต่ำ) เพื่อประเมินเร็วเมื่อไม่มีข้อมูลมูลค่าตัวเลขชัดเจนหรือต้องการคัดกรองเบื้องต้น ส่วน Quantitative คำนวณเป็นตัวเงินเพื่อชั่งน้ำหนักความคุ้มค่าการลงทุน: เริ่มจาก SLE = Asset Value × Exposure Factor (ความเสียหายต่อ 1 ครั้ง) แล้วคูณความถี่ต่อปี ARO จะได้ ALE = SLE × ARO (ความสูญเสียเฉลี่ยต่อปี) เพื่อเทียบกับค่าใช้จ่ายมาตรการป้องกันต่อปี',
    compareContrastTh:
      'Qualitative = รวดเร็ว อิงความเชี่ยวชาญและ Heat Matrix (ไม่เป็นตัวเงิน) vs Quantitative = คำนวณตัวเงินชัดเจน (SLE = AV × EF, ALE = SLE × ARO) เพื่อทำ Cost-Benefit Analysis',
    relatedLessonIds: ['L5-02']
  },
  {
    id: 'fc-077',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    conceptPromptEn:
      'Compare Risk Avoidance, Transference, Mitigation, and Acceptance (Exception vs. Exemption) with practical security examples.',
    conceptPromptTh:
      'เปรียบเทียบกลยุทธ์จัดการความเสี่ยงแบบ Avoidance, Transference, Mitigation และ Acceptance (รวมถึง Exception กับ Exemption) พร้อมตัวอย่างการใช้งาน',
    conceptualAnswerTh:
      'Avoidance คือเลิกทำกิจกรรมหรือปิดบริการที่เสี่ยงเพื่อตัดความเสี่ยงออกหมด, Transference คือโอนภาระทางการเงินหรือการปฏิบัติไปให้ผู้อื่น เช่น ซื้อ Cyber Insurance หรือจ้าง Outsource (แต่ความรับผิดชอบต่อชื่อเสียงยังอยู่กับองค์กร), Mitigation คือติดตั้งมาตรการควบคุมเพื่อลดโอกาสเกิดหรือผลกระทบ, ส่วน Acceptance คือยอมรับความเสี่ยงที่เหลือเมื่อคุ้มค่ากว่าการแก้ไข โดยบันทึกเป็น Exception (ผ่อนผันชั่วคราว) หรือ Exemption (ยกเว้นถาวรตามเงื่อนไข)',
    compareContrastTh:
      'Avoid = เลิกกิจกรรมเสี่ยง | Transfer = ซื้อประกัน/Outsource | Mitigate = ลดเสี่ยงด้วย Control | Accept = ยอมรับความเสี่ยงที่เหลืออย่างเป็นทางการ',
    relatedLessonIds: ['L5-03']
  },
  {
    id: 'fc-078',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    conceptPromptEn:
      'How do Risk Appetite (Expansionary, Neutral, Conservative), Risk Tolerance, Risk Threshold, and Key Risk Indicators (KRIs) guide governance?',
    conceptPromptTh:
      'Risk Appetite, Risk Tolerance, Risk Threshold และ Key Risk Indicators (KRIs) เชื่อมโยงกันอย่างไรในการกำกับดูแลความเสี่ยง?',
    conceptualAnswerTh:
      'Risk Appetite กำหนดบุคลิกการรับความเสี่ยงภาพรวมขององค์กร (กล้าเสี่ยง Expansionary, สมดุล Neutral, อนุรักษนิยม Conservative), Risk Tolerance ระบุขอบเขตความคลาดเคลื่อนเฉพาะเรื่องที่ยังรับได้, Risk Threshold คือเส้นแบ่งตัวเลขที่หากความเสี่ยงข้ามเส้นนี้ต้องดำเนินการแก้ไขทันที, และ KRI คือตัวชี้วัดสัญญาณเตือนล่วงหน้าใน Risk Register ที่บอกว่าความเสี่ยงกำลังไต่เข้าใกล้ Threshold แล้ว',
    compareContrastTh:
      'Appetite = กรอบความกล้าเสี่ยงภาพรวม | Tolerance = ช่วงความเบี่ยงเบนที่รับได้เฉพาะงาน | Threshold = เส้นขีดจำกัดที่ต้องสั่งแก้ไข | KRI = ตัวชี้วัดเตือนภัยล่วงหน้า',
    relatedLessonIds: ['L5-03']
  },
  {
    id: 'fc-079',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    conceptPromptEn:
      'In Business Impact Analysis (BIA), how do RTO, RPO, MTTR, and MTBF measure different dimensions of resilience?',
    conceptPromptTh:
      'ในการวิเคราะห์ผลกระทบทางธุรกิจ (BIA) ตัวชี้วัด RTO, RPO, MTTR และ MTBF วัดมิติความทนทานของระบบแตกต่างกันอย่างไร?',
    conceptualAnswerTh:
      'RPO มองย้อนหลังจากจุดเกิดเหตุไปถึงรอบ Backup/Replication ล่าสุดว่ายอมให้ข้อมูลสูญหายได้มากสุดกี่ชั่วโมง, RTO มองไปข้างหน้าว่าต้องกู้คืนระบบกลับมาให้บริการได้ภายในกี่ชั่วโมงหลังล่ม, MTTR วัดเวลาเฉลี่ยที่ทีมซ่อมแซมและกู้คืนอุปกรณ์ที่เสียจนใช้งานได้จริง (ต้องน้อยกว่าหรือเท่ากับ RTO), ส่วน MTBF วัดระยะเวลาเฉลี่ยที่อุปกรณ์ทำงานได้ต่อเนื่องก่อนจะเสียครั้งถัดไป',
    compareContrastTh:
      'RPO = ยอมให้ข้อมูลหายย้อนหลังกี่ชั่วโมง (Backup Frequency) | RTO = ต้องกู้ให้ทันในกี่ชั่วโมง | MTTR = เวลาซ่อมเฉลี่ย | MTBF = อายุการทำงานต่อเนื่องเฉลี่ยก่อนเสีย',
    relatedLessonIds: ['L5-03', 'L3-07', 'L3-08']
  },
  {
    id: 'fc-080',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    conceptPromptEn:
      'How do an NDA, Master Service Agreement (MSA), Statement of Work (SOW), and Service Level Agreement (SLA) fit together in vendor contracting?',
    conceptPromptTh:
      'เอกสารสัญญา NDA, MSA, SOW และ SLA มีบทบาทเชื่อมโยงกันอย่างไรในการทำสัญญากับผู้ให้บริการภายนอก?',
    conceptualAnswerTh:
      'NDA ลงนามก่อนเพื่อห้ามเปิดเผยข้อมูลลับระหว่างการเจรจาและทำงาน, MSA เป็นสัญญาแม่บทระยะยาวกำหนดกรอบกฎหมาย ความรับผิดชอบ และการชำระเงินทั่วไป, SOW (หรือ Work Order) แนบท้ายใต้ MSA เพื่อระบุขอบเขตงาน ผลงานที่ส่งมอบ และกำหนดการเฉพาะแต่ละโครงการ, ส่วน SLA ระบุตัวชี้วัดประสิทธิภาพขั้นต่ำ (เช่น Uptime 99.9%, เวลาตอบสนอง Incident) และค่าปรับ/เครดิตชดเชย',
    compareContrastTh:
      'NDA = รักษาความลับ | MSA = กรอบกฎหมายหลักระยะยาว | SOW = เนื้องานและส่งมอบเฉพาะโครงการ | SLA = มาตรฐานบริการ Uptime และเวลาตอบสนอง',
    relatedLessonIds: ['L5-04']
  },
  {
    id: 'fc-081',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    conceptPromptEn:
      'What distinguishes an MOU, an MOA, and a BPA when formalizing inter-organizational relationships?',
    conceptPromptTh:
      'บันทึกความเข้าใจ (MOU), บันทึกข้อตกลง (MOA) และ Business Partners Agreement (BPA) แตกต่างกันอย่างไรในการจัดทำข้อตกลงระหว่างองค์กร?',
    conceptualAnswerTh:
      'MOU แสดงเจตนารมณ์ร่วมกันและแนวทางความร่วมมือเบื้องต้นโดยมักไม่มีข้อผูกมัดบังคับทางกฎหมายหรือการเงินที่เข้มงวด, MOA เป็นทางการและละเอียดกว่า MOU โดยระบุความรับผิดชอบ เงื่อนไขปฏิบัติงาน และข้อผูกพันของแต่ละฝ่ายชัดเจนขึ้น (มักพบในการเชื่อมระบบหรือช่วยเหลือ Incident Response ร่วมกัน), ส่วน BPA เป็นสัญญาความร่วมมือทางธุรกิจเต็มรูปแบบที่ระบุการแบ่งผลประโยชน์ ต้นทุน และอำนาจบริหารระหว่างหุ้นส่วน',
    compareContrastTh:
      'MOU = เจตนารมณ์ร่วมกันเบื้องต้น (ไม่เน้นผูกมัดเข้ม) -> MOA = ระบุหน้าที่และข้อตกลงปฏิบัติชัดเจนขึ้น -> BPA = สัญญาหุ้นส่วนทางธุรกิจและการแบ่งผลประโยชน์',
    relatedLessonIds: ['L5-04']
  },
  {
    id: 'fc-082',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    conceptPromptEn:
      'Why should vendor assessments combine pre-contract Due Diligence, Right-to-Audit clauses, and ongoing monitoring rather than relying on an initial questionnaire?',
    conceptPromptTh:
      'เหตุใดการประเมินความเสี่ยงผู้ให้บริการจึงต้องใช้ทั้ง Due Diligence ก่อนเซ็นสัญญา เงื่อนไข Right-to-Audit และการเฝ้าระวังต่อเนื่อง แทนที่จะดูเพียงแบบสอบถามตอนเริ่มต้น?',
    conceptualAnswerTh:
      'แบบสอบถามประเมินตนเอง (Self-assessment Questionnaire) สะท้อนเพียงคำรับรองของผู้ขาย ณ จุดเวลาเดียวและอาจไม่ครบถ้วน การทำ Due Diligence ตรวจสอบหลักฐานอิสระ (เช่น รายงาน SOC 2 หรือผล Pentest), การใส่ Right-to-Audit ในสัญญาเพื่อขอตรวจจริงเมื่อจำเป็น และการทำ Vendor Monitoring ต่อเนื่อง (รวมถึงตรวจสอบ Supply Chain ช่วงต่อ) ช่วยยืนยันได้ว่าผู้ให้บริการยังคงมาตรฐานความปลอดภัยตลอดอายุสัญญา',
    compareContrastTh:
      'Questionnaire = คำตอบจากผู้ขายเองจุดเดียว vs Due Diligence + Right-to-Audit + Ongoing Monitoring = ตรวจหลักฐานอิสระ สิทธิ์ตรวจสอบ และติดตามความเสี่ยงต่อเนื่อง',
    relatedLessonIds: ['L5-04', 'L5-06']
  },
  {
    id: 'fc-083',
    domainId: 'D5',
    objectiveIds: ['5.4'],
    conceptPromptEn:
      'How do Due Diligence and Due Care differ legally and operationally when demonstrating security compliance?',
    conceptPromptTh:
      'Due Diligence และ Due Care แตกต่างกันอย่างไรในเชิงกฎหมายและการปฏิบัติเมื่อต้องพิสูจน์การปฏิบัติตามข้อกำหนดความปลอดภัย?',
    conceptualAnswerTh:
      'Due Diligence คือความพยายามในการสืบค้น ตรวจสอบ วิเคราะห์ความเสี่ยง และทำความเข้าใจข้อกำหนดกฎหมายหรือจุดอ่อนของระบบและคู่ค้าอย่างรอบคอบ ("รู้ว่าต้องทำอะไรและประเมินอย่างถี่ถ้วน"), ส่วน Due Care คือการลงมือปฏิบัติจริงตามหน้าที่ที่ควรทำอย่างเหมาะสมต่อเนื่องเพื่อปกป้องข้อมูลและลดความเสี่ยง เช่น การแพตช์ระบบและฝึกอบรมพนักงาน ("ลงมือทำและดูแลรักษาจริง")',
    compareContrastTh:
      'Due Diligence = ตรวจสอบ วิจัย ประเมินความเสี่ยงอย่างรอบคอบ (Investigate/Know) vs Due Care = ลงมือปฏิบัติและรักษามาตรการป้องกันจริง (Act/Maintain)',
    relatedLessonIds: ['L5-05', 'L5-04']
  },
  {
    id: 'fc-084',
    domainId: 'D5',
    objectiveIds: ['5.4'],
    conceptPromptEn:
      'Under privacy regulations like GDPR, how does the Right to Be Forgotten (RTBF) create operational obligations for both Data Controllers and Data Processors?',
    conceptPromptTh:
      'ภายใต้กฎหมายคุ้มครองข้อมูลส่วนบุคคลอย่าง GDPR สิทธิในการถูกลืม (RTBF) สร้างภาระหน้าที่เชิงปฏิบัติการแก่ทั้ง Data Controller และ Data Processor อย่างไร?',
    conceptualAnswerTh:
      'เมื่อเจ้าของข้อมูล (Data Subject) ยื่นคำขอใช้สิทธิ RTBF ให้ลบข้อมูลส่วนบุคคล Data Controller มีหน้าที่ตรวจสอบความถูกต้องตามกฎหมายของคำขอ ทำ Data Inventory เพื่อระบุตำแหน่งข้อมูลทั้งหมด และลบข้อมูลพร้อมแจ้งต่อไปยัง Data Processor และบุคคลที่สามที่เกี่ยวข้องทั้งหมดให้ลบหรือทำลายข้อมูลตามกำหนดเวลา (เว้นแต่มีข้อผูกพันทางกฎหมายอื่นเช่น Legal Hold หรือบัญชีภาษีที่ต้องเก็บไว้)',
    compareContrastTh:
      'Data Subject (เจ้าของข้อมูล) ร้องขอ RTBF -> Data Controller (ผู้กำหนดวัตถุประสงค์) ตรวจสอบและสั่งลบ -> Data Processor (ผู้ประมวลผลแทน) ลบข้อมูลและแจ้งยืนยันกลับ',
    relatedLessonIds: ['L5-05', 'L4-03']
  },
  {
    id: 'fc-085',
    domainId: 'D5',
    objectiveIds: ['5.5'],
    conceptPromptEn:
      'How do Internal Audits, External Audits, and SOC 2 Type I vs. Type II Attestations differ in independence and assurance scope?',
    conceptPromptTh:
      'Internal Audit, External Audit และรายงานคำรับรอง SOC 2 Type I กับ Type II แตกต่างกันอย่างไรในด้านความเป็นอิสระและขอบเขตการรับรองผล?',
    conceptualAnswerTh:
      'Internal Audit ตรวจโดยทีมภายในองค์กรเพื่อเตรียมความพร้อมและแก้ปัญหาก่อนตรวจจริงแต่มีความเป็นอิสระน้อยกว่าภายนอก, External Audit และ Attestation ตรวจโดยผู้ตรวจสอบอิสระภายนอกเพื่อสร้างความน่าเชื่อถือต่อผู้กำกับดูแลและลูกค้า, โดย SOC 2 Type I รับรองความเหมาะสมของการออกแบบมาตรการ ณ วันเดียว (Point-in-time) ขณะที่ Type II ทดสอบว่ามาตรการเหล่านั้นทำงานจริงอย่างต่อเนื่องตลอดช่วงเวลาที่กำหนด (เช่น 6–12 เดือน)',
    compareContrastTh:
      'Internal = ตรวจกันเองปรับปรุงภายใน | External = คนกลางอิสระตรวจ | SOC 2 Type I = ประเมินการออกแบบ ณ จุดเวลาเดียว vs Type II = ประเมินประสิทธิผลปฏิบัติจริงต่อเนื่องระยะยาว',
    relatedLessonIds: ['L5-06']
  },
  {
    id: 'fc-086',
    domainId: 'D5',
    objectiveIds: ['5.5'],
    conceptPromptEn:
      'Compare Known, Partially Known, and Unknown penetration testing environments, and distinguish Passive from Active reconnaissance.',
    conceptPromptTh:
      'เปรียบเทียบสภาพแวดล้อมทดสอบเจาะระบบแบบ Known, Partially Known และ Unknown รวมถึงแยกความต่างระหว่าง Passive กับ Active Reconnaissance',
    conceptualAnswerTh:
      'Known Environment (White Box) ให้ข้อมูลสถาปัตยกรรมและโค้ดครบทำให้ตรวจจุดอ่อนได้ลึกและประหยัดเวลา, Partially Known (Gray Box) ให้ข้อมูลบางส่วนเช่นสิทธิ์ผู้ใช้ทั่วไปจำลองภัยคุกคามภายในหรือคู่ค้า, Unknown Environment (Black Box) ไม่ให้ข้อมูลภายในเพื่อจำลองผู้โจมตีภายนอกจริงและทดสอบการตรวจจับของทีมป้องกัน ส่วน Passive Recon เก็บข้อมูลสาธารณะโดยไม่สัมผัสเป้าหมายตรง ๆ ขณะที่ Active Recon ยิงสแกนหรือติดต่อเป้าหมายจริงซึ่งอาจปรากฏใน Log',
    compareContrastTh:
      'Known = มีข้อมูลครบ/ลึกสุด | Partially Known = มีบางส่วน | Unknown = ไม่มีข้อมูลล่วงหน้า/สมจริงสุด || Passive Recon = หาจากสาธารณะไม่แตะระบบ vs Active Recon = ส่งทราฟฟิกสำรวจเป้าหมายโดยตรง',
    relatedLessonIds: ['L5-06']
  },
  {
    id: 'fc-087',
    domainId: 'D5',
    objectiveIds: ['5.6'],
    conceptPromptEn:
      'How do Phishing Simulation Campaigns, Anomalous Behavior Recognition, and Operational Security (OPSEC) training strengthen the human layer?',
    conceptPromptTh:
      'โครงการจำลอง Phishing, การฝึกสังเกตพฤติกรรมผิดปกติ (Anomalous Behavior Recognition) และการอบรม OPSEC เสริมความแข็งแกร่งให้ปราการด่านมนุษย์ได้อย่างไร?',
    conceptualAnswerTh:
      'Phishing Campaigns ฝึกให้พนักงานสังเกตสัญญาณหลอกลวงและฝึกกดแจ้งรายงานอีเมลต้องสงสัยให้ทีม SOC ตรวจสอบได้ทันท่วงที, Anomalous Behavior Recognition สอนให้พนักงานรู้เท่าทันพฤติกรรมเสี่ยง ไม่คาดหมาย หรือผิดพลาดโดยไม่ตั้งใจ (เช่น คนแปลกหน้าไม่ติดบัตร หรือการเสียบอุปกรณ์ไม่ทราบที่มา), ส่วน OPSEC สร้างความตระหนักให้พนักงานไม่เปิดเผยรายละเอียดการทำงาน เทคโนโลยีที่ใช้ หรือภาพพื้นที่ในบริษัทสู่สาธารณะจนผู้โจมตีนำไปใช้วางแผนเจาะระบบได้',
    compareContrastTh:
      'Phishing Drill = ฝึกจับพิรุธและรายงานอีเมลลวง | Anomalous Recognition = สังเกตพฤติกรรม/เหตุการณ์ผิดปกติรอบตัว | OPSEC = ป้องกันการหลุดรอดข้อมูลย่อยที่ผู้โจมตีเอาไปต่อยอดได้',
    relatedLessonIds: ['L5-07', 'L2-03']
  }
];
