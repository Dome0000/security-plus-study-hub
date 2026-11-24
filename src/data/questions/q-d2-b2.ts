import type { Question } from '../../types';

export const Q_D2_B2: Question[] = [
  {
    id: 'Q2-034',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'Following a security incident on an executive laptop, IT completely wipes the NVMe drive, installs a fresh operating system image, and updates all endpoint tools. Upon reboot, security monitoring detects the same unauthorized low-level code executing before the OS kernel loads. Which vulnerability is MOST likely being exploited?',
    promptTh:
      'หลังเกิดเหตุการณ์ด้านความปลอดภัยบนแล็ปท็อปของผู้บริหาร ฝ่ายไอทีล้างข้อมูลบนไดรฟ์ NVMe ทั้งหมด ติดตั้งอิมเมจระบบปฏิบัติการใหม่ และอัปเดตเครื่องมือปลายทางครบถ้วน แต่เมื่อรีบูตระบบ ระบบเฝ้าระวังยังตรวจพบโค้ดระดับต่ำที่ไม่ได้รับอนุญาตทำงานซ้ำก่อนเคอร์เนลของระบบปฏิบัติการจะเริ่มทำงาน ช่องโหว่ใดมีแนวโน้มถูกใช้ประโยชน์มากที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Operating system (OS)-based kernel vulnerability',
        textTh: 'ช่องโหว่ระดับเคอร์เนลของระบบปฏิบัติการ (OS-based)'
      },
      {
        id: 'c2',
        textEn: 'Firmware vulnerability',
        textTh: 'ช่องโหว่ระดับเฟิร์มแวร์ (Firmware)'
      },
      {
        id: 'c3',
        textEn: 'Memory injection vulnerability',
        textTh: 'ช่องโหว่การฉีดโค้ดเข้าหน่วยความจำ (Memory injection)'
      },
      {
        id: 'c4',
        textEn: 'Mobile side-loading vulnerability',
        textTh: 'ช่องโหว่การติดตั้งแอปนอกสโตร์ (Side loading)'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'เฟิร์มแวร์ (เช่น BIOS/UEFI) ถูกจัดเก็บไว้ในหน่วยความจำแฟลชบนเมนบอร์ดซึ่งทำงานต่ำกว่าระดับระบบปฏิบัติการ ดังนั้นการล้างดิสก์และติดตั้ง OS ใหม่จึงไม่สามารถกำจัดโค้ดที่ฝังในเฟิร์มแวร์ได้ ต้องแก้ไขด้วยการอัปเดตเฟิร์มแวร์ที่ลงนามรับรอง เปิดใช้ Secure Boot และตรวจสอบความสมบูรณ์ผ่าน TPM',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: ช่องโหว่ระดับ OS อาศัยไฟล์หรือเคอร์เนลบนไดรฟ์ระบบ ซึ่งควรถูกลบหายไปเมื่อล้าง NVMe และติดตั้งอิมเมจ OS ใหม่ที่อัปเดตแล้ว เหมาะกับสถานการณ์ที่ผู้โจมตียกระดับสิทธิ์ภายใน OS ที่ยังไม่ได้แพตช์',
      c2: 'ถูกต้อง: เฟิร์มแวร์ทำงานก่อน OS และฝังบนชิปฮาร์ดแวร์แยกจากดิสก์ จึงยังคงอยู่รอดแม้ฟอร์แมตไดรฟ์และลง OS ใหม่ทั้งหมด',
      c3: 'ไม่ถูกต้อง: Memory injection ทำงานใน RAM ชั่วคราวของโปรเซสที่กำลังรันอยู่ จึงหายไปเมื่อรีบูตเครื่อง เหมาะกับสถานการณ์ที่มัลแวร์ซ่อนตัวในหน่วยความจำโดยไม่เขียนไฟล์ลงดิสก์ระหว่างเครื่องเปิดใช้งาน',
      c4: 'ไม่ถูกต้อง: Side loading เป็นความเสี่ยงบนอุปกรณ์มือถือจากการติดตั้งแอปนอก App Store ทางการ ไม่ใช่กลไกที่ทำงานก่อนเคอร์เนลบนแล็ปท็อปหลังล้างดิสก์'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจผิดว่าการฟอร์แมตฮาร์ดดิสก์และติดตั้งระบบปฏิบัติการใหม่สามารถกำจัดโค้ดอันตรายได้ทุกชั้น ทั้งที่เฟิร์มแวร์ถูกเก็บแยกอยู่บนชิปของเมนบอร์ด',
    relatedLessonIds: ['L2-05', 'L1-06'],
    tags: ['firmware', 'hardware-vulnerability', 'uefi']
  },
  {
    id: 'Q2-035',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'During an assessment of a multi-tenant virtualization cluster, a tester provisions a new guest virtual machine and inspects uninitialized memory pages assigned by the hypervisor. The tester recovers plaintext session keys belonging to an unrelated tenant VM that was deleted an hour earlier on the same physical host. Which virtualization vulnerability does this represent?',
    promptTh:
      'ระหว่างการประเมินความปลอดภัยคลัสเตอร์เสมือนจริงแบบหลายผู้เช่า ผู้ทดสอบสร้าง Guest Virtual Machine ใหม่และตรวจสอบหน้าหน่วยความจำที่ยังไม่ได้ตั้งค่าเริ่มต้นซึ่ง Hypervisor จัดสรรให้ แล้วพบกุญแจเซสชันแบบข้อความธรรมดาของ VM ผู้เช่ารายอื่นที่ถูกลบออกไปเมื่อหนึ่งชั่วโมงก่อนบนโฮสต์จริงเครื่องเดียวกัน เหตุการณ์นี้สะท้อนช่องโหว่ระดับ Virtualization ใด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Virtual machine (VM) escape',
        textTh: 'Virtual machine (VM) escape'
      },
      {
        id: 'c2',
        textEn: 'Buffer overflow',
        textTh: 'Buffer overflow'
      },
      {
        id: 'c3',
        textEn: 'Time-of-check/time-of-use (TOCTOU) race condition',
        textTh: 'Race condition แบบ Time-of-check/time-of-use (TOCTOU)'
      },
      {
        id: 'c4',
        textEn: 'Resource reuse',
        textTh: 'Resource reuse (การนำทรัพยากรกลับมาใช้ซ้ำโดยไม่ล้างข้อมูล)'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'Resource reuse เกิดขึ้นเมื่อ Hypervisor นำทรัพยากรเดิมอย่าง RAM หรือบล็อกดิสก์จาก VM ที่ถูกลบมาจัดสรรให้ VM ใหม่โดยไม่ล้างข้อมูลเก่าให้สะอาด (Sanitization/Zeroing) ทำให้ VM ใหม่สามารถอ่านเศษข้อมูลความลับที่ตกค้างอยู่ได้',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: VM escape คือการที่โค้ดใน Guest VM ที่กำลังทำงานอยู่เจาะทะลุกำแพงแยกส่วนของ Hypervisor เพื่อเข้าควบคุมโฮสต์หลักหรือ VM อื่นที่รันพร้อมกัน ไม่ใช่การอ่านเศษข้อมูลค้างจาก VM ที่ถูกลบไปแล้ว',
      c2: 'ไม่ถูกต้อง: Buffer overflow เกิดจากแอปพลิเคชันเขียนข้อมูลเกินขนาดหน่วยความจำที่จองไว้จนทับพื้นที่ข้างเคียง เหมาะกับสถานการณ์แอป Crash หรือถูกแทรกคำสั่งผ่านอินพุตยาวเกินกำหนด',
      c3: 'ไม่ถูกต้อง: TOCTOU race condition อาศัยช่วงเวลาระหว่างการตรวจสอบเงื่อนไขกับการใช้งานทรัพยากรพร้อมกันเพื่อสับเปลี่ยนไฟล์หรือสิทธิ์ ไม่ใช่ข้อมูลเก่าที่ตกค้างหลังลบ VM',
      c4: 'ถูกต้อง: การนำ RAM หรือพื้นที่เก็บข้อมูลจาก VM เดิมมาใช้ซ้ำโดยไม่ล้างค่าเป็นสาเหตุตรงของ Resource reuse vulnerability'
    },
    misconceptionTh:
      'มักสับสนระหว่าง VM escape (ทะลุขอบเขต Hypervisor แบบเรียลไทม์) กับ Resource reuse (ข้อมูลตกค้างใน RAM/Disk หลังยุบ VM เดิม)',
    relatedLessonIds: ['L2-05'],
    tags: ['virtualization', 'resource-reuse', 'multi-tenancy']
  },
  {
    id: 'Q2-036',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.3'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'exam-ready',
    promptEn:
      'A company deploys an e-commerce platform using cloud Infrastructure as a Service (IaaS) compute and cloud object storage. A security review notes that the cloud provider recently patched a physical hypervisor BIOS flaw, while the company left an object storage bucket publicly readable and embedded a static encryption key inside its application source repository. Under the Shared Responsibility Model, which TWO vulnerabilities remain the customer organization’s responsibility to remediate? (Choose two.)',
    promptTh:
      'บริษัทแห่งหนึ่งติดตั้งแพลตฟอร์มอีคอมเมิร์ซบนบริการคลาวด์แบบ Infrastructure as a Service (IaaS) และ Cloud object storage ผลการตรวจสอบความปลอดภัยพบว่าผู้ให้บริการคลาวด์เพิ่งอัปเดตแพตช์เฟิร์มแวร์ BIOS ของ Hypervisor เสร็จสิ้น ขณะที่บริษัทยังตั้งค่า Bucket เก็บข้อมูลให้อ่านได้แบบสาธารณะและฝังกุญแจเข้ารหัสแบบคงที่ไว้ในซอร์สโค้ดแอปพลิเคชัน ภายใต้ Shared Responsibility Model ช่องโหว่ 2 ข้อใดเป็นความรับผิดชอบโดยตรงขององค์กรลูกค้าในการแก้ไข? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Physical perimeter security at the cloud datacenter',
        textTh: 'การรักษาความปลอดภัยทางกายภาพรอบศูนย์ข้อมูลคลาวด์'
      },
      {
        id: 'c2',
        textEn: 'Cloud-specific storage misconfiguration exposing data publicly',
        textTh: 'การตั้งค่า Cloud storage ผิดพลาดที่เปิดข้อมูลสู่สาธารณะ'
      },
      {
        id: 'c3',
        textEn: 'Physical hypervisor host hardware maintenance',
        textTh: 'การบำรุงรักษาฮาร์ดแวร์ของโฮสต์ Hypervisor จริง'
      },
      {
        id: 'c4',
        textEn: 'Datacenter power generator and HVAC failover reliability',
        textTh: 'ความพร้อมใช้งานของเครื่องกำเนิดไฟฟ้าและระบบ HVAC ในศูนย์ข้อมูล'
      },
      {
        id: 'c5',
        textEn: 'Cryptographic weakness from a hardcoded encryption key in source code',
        textTh: 'จุดอ่อนด้านการเข้ารหัสจากการฝังกุญแจเข้ารหัสไว้ในซอร์สโค้ด'
      }
    ],
    correctChoiceIds: ['c2', 'c5'],
    explanationTh:
      'ภายใต้ Shared Responsibility Model สำหรับ IaaS ผู้ให้บริการคลาวด์รับผิดชอบ Security OF the cloud (ศูนย์ข้อมูลกายภาพ ฮาร์ดแวร์ ระบบไฟ/HVAC และชั้น Hypervisor) ส่วนองค์กรลูกค้าต้องรับผิดชอบ Security IN the cloud ได้แก่ การตั้งค่าสิทธิ์ Cloud storage/IAM (c2) และการจัดการรหัสลับ/โค้ดแอปพลิเคชันของตนเอง (c5)',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การควบคุมการเข้าถึงทางกายภาพของศูนย์ข้อมูลเป็นหน้าที่ของผู้ให้บริการคลาวด์ (Security OF the cloud) เหมาะกับสถานการณ์ที่องค์กรดูแลห้องเซิร์ฟเวอร์ On-premises เอง',
      c2: 'ถูกต้อง: การตั้งค่าสิทธิ์เข้าถึง Object storage bucket เป็นความรับผิดชอบของลูกค้าโดยตรงและเป็น Cloud-specific misconfiguration ที่พบบ่อยที่สุด',
      c3: 'ไม่ถูกต้อง: ฮาร์ดแวร์และ Hypervisor พื้นฐานของ IaaS ดูแลโดยผู้ให้บริการคลาวด์ จะเป็นหน้าที่ลูกค้าเฉพาะกรณีรัน Hypervisor เองแบบ On-premises',
      c4: 'ไม่ถูกต้อง: โครงสร้างพื้นฐานพลังงานและระบบทำความเย็นของคลาวด์เป็นภาระรับผิดชอบของผู้ให้บริการ ไม่ใช่ของลูกค้า',
      c5: 'ถูกต้อง: โค้ดแอปพลิเคชันและการจัดการคีย์เข้ารหัสภายในซอฟต์แวร์ที่ลูกค้านำขึ้นใช้งานเป็นความรับผิดชอบของลูกค้า จึงต้องย้ายคีย์ไปเก็บใน KMS/Secrets Manager'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจผิดว่าเมื่อย้ายระบบขึ้นคลาวด์แล้ว ผู้ให้บริการจะดูแลการตั้งค่าความปลอดภัยของ Storage และซอร์สโค้ดแอปพลิเคชันให้ทั้งหมด',
    relatedLessonIds: ['L2-05', 'L2-04', 'L3-01'],
    tags: ['cloud-specific', 'misconfiguration', 'cryptographic-weakness', 'shared-responsibility']
  },
  {
    id: 'Q2-037',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'An organization installs a routine update downloaded from an authorized backup vendor’s official portal. Although the installer carries a valid vendor digital signature, forensic analysis shows attackers previously breached the vendor’s CI/CD build environment to inject unauthorized code before signing. Which vulnerability category BEST describes this incident?',
    promptTh:
      'องค์กรติดตั้งอัปเดตตามรอบปกติที่ดาวน์โหลดจากพอร์ทัลทางการของผู้ผลิตซอฟต์แวร์สำรองข้อมูลที่ได้รับอนุญาต แม้ไฟล์ติดตั้งจะมีลายเซ็นดิจิทัลของผู้ผลิตที่ถูกต้อง แต่การตรวจพิสูจน์หลักฐานพบว่าผู้โจมตีเจาะสภาพแวดล้อมสร้างซอฟต์แวร์ (CI/CD) ของผู้ผลิตเพื่อแทรกโค้ดที่ไม่ได้รับอนุญาตก่อนขั้นตอนลงนาม ช่องโหว่ประเภทใดอธิบายเหตุการณ์นี้ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Software provider supply chain vulnerability',
        textTh: 'ช่องโหว่ห่วงโซ่อุปทานฝั่งผู้ให้บริการซอฟต์แวร์ (Software provider supply chain)'
      },
      {
        id: 'c2',
        textEn: 'Hardware provider supply chain vulnerability',
        textTh: 'ช่องโหว่ห่วงโซ่อุปทานฝั่งผู้ให้บริการฮาร์ดแวร์ (Hardware provider supply chain)'
      },
      {
        id: 'c3',
        textEn: 'End-of-life (EOL) system vulnerability',
        textTh: 'ช่องโหว่ระบบที่สิ้นสุดอายุการสนับสนุน (End-of-life)'
      },
      {
        id: 'c4',
        textEn: 'Mobile jailbreaking vulnerability',
        textTh: 'ช่องโหว่การปลดล็อกสิทธิ์ระบบปฏิบัติการมือถือ (Jailbreaking)'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'การที่โค้ดอันตรายถูกแทรกในกระบวนการพัฒนา/คอมไพล์ (CI/CD) ของผู้ผลิตซอฟต์แวร์และถูกส่งต่อผ่านอัปเดตที่ลงนามถูกต้องคือ Software provider supply chain vulnerability (และเกิดเป็น Malicious update จากต้นน้ำ) ซึ่งต่างจากการปลอมแปลงชิ้นส่วนฮาร์ดแวร์ในโรงงานหรือการละเลยอัปเดตระบบที่หมดอายุ',
    choiceRationales: {
      c1: 'ถูกต้อง: ช่องโหว่เกิดในกระบวนการสร้างและส่งมอบซอฟต์แวร์ของผู้ผลิตต้นน้ำ ทำให้ลูกค้าที่เชื่อถือแพ็กเกจอัปเดตทางการได้รับผลกระทบ',
      c2: 'ไม่ถูกต้อง: Hardware provider supply chain เกี่ยวข้องกับการเปลี่ยนชิป ฝังวงจร หรือดัดแปลงเฟิร์มแวร์ในสายการผลิต/จัดส่งอุปกรณ์จริง เหมาะกับสถานการณ์พบอุปกรณ์เครือข่ายถูกแทรกแซงทางกายภาพก่อนถึงองค์กร',
      c3: 'ไม่ถูกต้อง: EOL หมายถึงผู้ผลิตหยุดออกแพตช์อย่างถาวรเพราะหมดอายุผลิตภัณฑ์ แต่ในสถานการณ์นี้ผู้ผลิตยังออกอัปเดตปกติอยู่',
      c4: 'ไม่ถูกต้อง: Jailbreaking เป็นการปลดล็อกข้อจำกัดความปลอดภัยบนสมาร์ทโฟนของพนักงาน ไม่เกี่ยวข้องกับ CI/CD pipeline ของผู้ผลิตซอฟต์แวร์สำรองข้อมูล'
    },
    misconceptionTh:
      'มักสับสนระหว่าง Supply chain ของ Software provider กับ Hardware provider หรือเข้าใจผิดว่าการตรวจ Digital signature เพียงอย่างเดียวป้องกัน Build pipeline ที่ถูกแทรกแซงได้เสมอ',
    relatedLessonIds: ['L2-05', 'L2-02', 'L2-04'],
    tags: ['supply-chain', 'software-provider', 'malicious-update']
  },
  {
    id: 'Q2-038',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A Mobile Device Management (MDM) agent alerts that an employee’s corporate smartphone was altered to bypass operating system security restrictions and obtain root privileges, disabling application sandboxing so one app can inspect data belonging to corporate email containers. Which mobile vulnerability occurred?',
    promptTh:
      'ระบบ Mobile Device Management (MDM) แจ้งเตือนว่าสมาร์ทโฟนของบริษัทที่พนักงานใช้งานถูกดัดแปลงเพื่อข้ามข้อจำกัดความปลอดภัยของระบบปฏิบัติการและเปิดสิทธิ์ระดับ Root ส่งผลให้กลไก Application sandboxing ถูกปิดและแอปหนึ่งสามารถเข้าอ่านข้อมูลในพื้นที่ของแอปอีเมลองค์กรได้ เหตุการณ์นี้คือช่องโหว่บนอุปกรณ์พกพาใด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Side loading',
        textTh: 'การติดตั้งแอปนอกสโตร์ (Side loading)'
      },
      {
        id: 'c2',
        textEn: 'Resource reuse',
        textTh: 'การใช้ทรัพยากรซ้ำ (Resource reuse)'
      },
      {
        id: 'c3',
        textEn: 'Jailbreaking',
        textTh: 'การปลดล็อกข้อจำกัดระบบปฏิบัติการ (Jailbreaking)'
      },
      {
        id: 'c4',
        textEn: 'SQL injection (SQLi)',
        textTh: 'SQL injection (SQLi)'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'Jailbreaking (หรือ Rooting บน Android) คือการดัดแปลงระบบปฏิบัติการมือถือเพื่อปลดล็อกข้อจำกัดของผู้ผลิตและเปิดสิทธิ์ระดับสูงสุด ทำให้กลไก Sandbox แยกระหว่างแอปพลิเคชันพังทลายลง จึงต้องใช้ MDM ตรวจจับและบล็อกการเข้าถึงระบบองค์กรทันที',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Side loading คือการติดตั้งแอปพลิเคชันจากแหล่งภายนอก App Store ทางการโดยไม่จำเป็นต้องปลดล็อกสิทธิ์ Root ของ OS เหมาะกับสถานการณ์พนักงานดาวน์โหลดไฟล์แพ็กเกจแอปจากเว็บไซต์มาติดตั้งเอง',
      c2: 'ไม่ถูกต้อง: Resource reuse เป็นช่องโหว่ในระบบ Virtualization ที่ไม่ได้ล้าง RAM/Disk ของ VM เก่าก่อนมอบให้ VM ใหม่',
      c3: 'ถูกต้อง: การข้ามข้อจำกัดความปลอดภัยของ OS มือถือเพื่อได้สิทธิ์ Root จนทำลาย App sandbox ตรงกับ Jailbreaking',
      c4: 'ไม่ถูกต้อง: SQLi เป็นช่องโหว่ระดับเว็บ/แอปพลิเคชันที่อินพุตผู้ใช้ไปเปลี่ยนโครงสร้างคำสั่งฐานข้อมูลหลังบ้าน ไม่ใช่การดัดแปลงสิทธิ์ระดับ OS ของสมาร์ทโฟน'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนระหว่าง Side loading (ติดตั้งแอปนอกสโตร์อย่างเดียว) กับ Jailbreaking/Rooting (เจาะทำลายข้อจำกัด Sandbox และเปิดสิทธิ์ Root ของระบบปฏิบัติการมือถือ)',
    relatedLessonIds: ['L2-05', 'L4-02'],
    tags: ['mobile', 'jailbreaking', 'mdm']
  },
  {
    id: 'Q2-039',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'A threat intelligence bulletin warns of active attacks targeting an enterprise edge appliance through a newly discovered flaw. The vendor confirms no CVE or security patch has been released yet, and authenticated vulnerability scanners report the appliance as fully compliant. Which vulnerability classification BEST applies, and what is the MOST effective immediate response?',
    promptTh:
      'ประกาศข่าวกรองภัยคุกคามเตือนถึงการโจมตีที่เกิดขึ้นจริงต่ออุปกรณ์ขอบเครือข่ายขององค์กรผ่านช่องโหว่ที่เพิ่งถูกค้นพบ ผู้ผลิตยืนยันว่ายังไม่มี CVE หรือแพตช์แก้ไขออกมาอย่างเป็นทางการ ขณะที่เครื่องมือสแกนช่องโหว่แบบยืนยันตัวตนรายงานว่าอุปกรณ์มีสถานะเป็นไปตามเกณฑ์ทั้งหมด ข้อใดระบุประเภทช่องโหว่และแนวทางรับมือเร่งด่วนได้เหมาะสมที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'End-of-life (EOL) vulnerability; wait for the next scheduled quarterly signature update',
        textTh: 'ช่องโหว่ End-of-life (EOL); รอรอบอัปเดตลายเซ็นประจำไตรมาสครั้งถัดไป'
      },
      {
        id: 'c2',
        textEn: 'Misconfiguration vulnerability; restore the prior configuration snapshot and re-run version scans',
        textTh: 'ช่องโหว่ Misconfiguration; กู้คืนสแนปช็อตค่าตั้งค่าเดิมแล้วสแกนตรวจเวอร์ชันซ้ำ'
      },
      {
        id: 'c3',
        textEn: 'Firmware vulnerability; format local storage and reinstall the same appliance version',
        textTh: 'ช่องโหว่ Firmware; ล้างพื้นที่เก็บข้อมูลและติดตั้งซอฟต์แวร์อุปกรณ์เวอร์ชันเดิมซ้ำ'
      },
      {
        id: 'c4',
        textEn: 'Zero-day vulnerability; enforce network segmentation, strict ACLs, virtual patching, and behavioral monitoring',
        textTh: 'ช่องโหว่ Zero-day; บังคับใช้การแบ่งส่วนเครือข่าย ACL ที่เข้มงวด Virtual patching และการเฝ้าระวังเชิงพฤติกรรม'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'เนื่องจากช่องโหว่เพิ่งถูกค้นพบและผู้ผลิตยังไม่ออกแพตช์หรือ CVE จึงเป็น Zero-day vulnerability ซึ่ง Vulnerability scanner แบบอ้างอิงเวอร์ชัน/ลายเซ็นจะตรวจไม่พบ แนวทางรับมือเร่งด่วนที่ดีที่สุดระหว่างรอแพตช์คือ Defense-in-depth ได้แก่ Segmentation, ACL จำกัดผู้เข้าถึง, Virtual patching บน IPS/WAF และการตรวจจับพฤติกรรมผิดปกติ',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: EOL หมายถึงผู้ผลิตเลิกสนับสนุนผลิตภัณฑ์อย่างถาวรแล้วจะไม่ออกแพตช์อีกเลย อีกทั้งการรอคอยเฉย ๆ ขณะมีโจมตีจริงเสี่ยงต่อการถูกเจาะระบบทันที',
      c2: 'ไม่ถูกต้อง: Misconfiguration เกิดจากการตั้งค่าระบบผิดพลาดซึ่งแก้ได้ทันทีโดยไม่ต้องรอแพตช์ผู้ผลิต และการสแกนเวอร์ชันซ้ำก็ยังมองไม่เห็นช่องโหว่ที่ยังไม่มี CVE',
      c3: 'ไม่ถูกต้อง: การลงซอฟต์แวร์เวอร์ชันเดิมที่มีช่องโหว่อยู่ซ้ำไม่ได้แก้ไขข้อบกพร่องในโค้ด และสถานการณ์นี้กล่าวถึงช่องโหว่ใหม่ที่ยังไร้แพตช์ ไม่ใช่การฝังตัวใน BIOS/UEFI',
      c4: 'ถูกต้อง: ช่องโหว่ที่ยังไม่มีแพตช์คือ Zero-day จึงต้องใช้มาตรการควบคุมชดเชยและการตรวจจับเชิงพฤติกรรมเพื่อลดความเสี่ยงทันที'
    },
    misconceptionTh:
      'มักเชื่อว่าเมื่อ Vulnerability scanner รายงานผลว่า Clean หรือ Compliant แสดงว่าระบบปลอดภัยจากทุกช่องโหว่ ทั้งที่สแกนเนอร์แบบลายเซ็นไม่สามารถตรวจพบ Zero-day ได้',
    relatedLessonIds: ['L2-05', 'L2-09', 'L4-04'],
    tags: ['zero-day', 'defense-in-depth', 'virtual-patching']
  },
  {
    id: 'Q2-040',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'An external network sensor detects steady outbound command-and-control traffic from an internal database server over TCP port 4444. However, when engineers inspect the running OS locally using Task Manager, netstat, and endpoint AV scans, no suspicious processes, sockets, or files appear, and Secure Boot verification fails upon reboot. Which type of malware is MOST likely present?',
    promptTh:
      'เซนเซอร์เครือข่ายภายนอกตรวจพบทราฟฟิกขาออกลักษณะสั่งการและควบคุมอย่างสม่ำเสมอจากเซิร์ฟเวอร์ฐานข้อมูลภายในผ่านพอร์ต TCP 4444 อย่างไรก็ตาม เมื่อวิศวกรตรวจสอบบนระบบปฏิบัติการโดยตรงด้วย Task Manager, netstat และการสแกนแอนติไวรัสบนเครื่อง กลับไม่พบโปรเซส ซ็อกเก็ต หรือไฟล์ต้องสงสัยใด ๆ และพบว่า Secure Boot ล้มเหลวเมื่อรีบูตเครื่อง มัลแวร์ชนิดใดมีแนวโน้มฝังตัวอยู่มากที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Bloatware',
        textTh: 'Bloatware'
      },
      {
        id: 'c2',
        textEn: 'Rootkit',
        textTh: 'Rootkit'
      },
      {
        id: 'c3',
        textEn: 'Worm',
        textTh: 'Worm'
      },
      {
        id: 'c4',
        textEn: 'Spyware',
        textTh: 'Spyware'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'Rootkit ฝังตัวในระดับ Kernel, ไดรเวอร์ หรือ Bootloader เพื่อบิดเบือน API ของระบบปฏิบัติการ ทำให้เครื่องมือตรวจสอบบนโฮสต์อย่าง Task Manager หรือ netstat แสดงผลลวงว่าปกติ ทั้งที่เซนเซอร์เครือข่ายภายนอกยังเห็นทราฟฟิกจริงและ Secure Boot/TPM แจ้งเตือนความผิดปกติ',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Bloatware เป็นซอฟต์แวร์แถมที่ติดตั้งมาอย่างเปิดเผยและมองเห็นได้ในรายการบริการปกติของเครื่อง แต่ไม่ซ่อนตัวระดับ Kernel หรือทำให้ Secure Boot ล้มเหลว',
      c2: 'ถูกต้อง: ความขัดแย้งระหว่าง Network telemetry ภายนอกกับเครื่องมือตรวจสอบภายใน OS ร่วมกับความล้มเหลวของ Secure Boot เป็นตัวบ่งชี้เฉพาะของ Rootkit',
      c3: 'ไม่ถูกต้อง: Worm เน้นแพร่กระจายอัตโนมัติข้ามเครือข่ายจำนวนมากโดยสร้างทราฟฟิกสแกนพอร์ตพุ่งสูง ไม่ได้มุ่งแทรกระดับ Bootloader เพื่อปิดบังคำสั่งระบบ',
      c4: 'ไม่ถูกต้อง: Spyware แอบเก็บข้อมูลการใช้งานส่งออก แต่โดยทั่วไปไม่ได้ปรับเปลี่ยนเคอร์เนลและ Bootloader จน Secure Boot ล้มเหลวและซ่อนซ็อกเก็ตจาก netstat ได้'
    },
    misconceptionTh:
      'ผู้เรียนมักเชื่อถือผลลัพธ์จากเครื่องมือตรวจสอบภายในเครื่องที่ติดเชื้อ 100% โดยไม่เทียบกับ Network sensor ภายนอกหรือสัญญาณ Integrity ตอนบูต',
    relatedLessonIds: ['L2-06', 'L4-05'],
    tags: ['malware', 'rootkit', 'secure-boot', 'ioc']
  },
  {
    id: 'Q2-041',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'Exactly 14 days after a database administrator’s employment ends, a nightly maintenance script runs and deletes several customer tables. Log reviews confirm no external intrusion occurred; instead, a conditional routine added by the former administrator triggered automatically once their account status changed to disabled in the directory. Which malware indicator does this illustrate?',
    promptTh:
      'หลังจากผู้ดูแลฐานข้อมูลรายหนึ่งพ้นสภาพพนักงานครบ 14 วันพอดี สคริปต์บำรุงรักษายามค่ำคืนได้ทำงานและลบตารางข้อมูลลูกค้าหลายรายการ การตรวจบันทึกไม่พบการบุกรุกจากภายนอก แต่พบเงื่อนไขซ่อนอยู่ในสคริปต์ที่อดีตผู้ดูแลระบบเขียนเพิ่มไว้เพื่อสั่งลบข้อมูลทันทีเมื่อสถานะบัญชีของตนถูกปิดใช้งานในระบบไดเรกทอรี เหตุการณ์นี้ตรงกับมัลแวร์ประเภทใด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Logic bomb',
        textTh: 'Logic bomb'
      },
      {
        id: 'c2',
        textEn: 'Virus',
        textTh: 'Virus'
      },
      {
        id: 'c3',
        textEn: 'Keylogger',
        textTh: 'Keylogger'
      },
      {
        id: 'c4',
        textEn: 'Trojan',
        textTh: 'Trojan'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'Logic bomb คือโค้ดอันตรายที่ฝังซ่อนไว้และจะสงบนิ่งไม่ทำงานจนกว่าจะตรงตามเงื่อนไขเวลาหรือเหตุการณ์ที่กำหนดไว้ล่วงหน้า (เช่น บัญชีผู้เขียนถูกปิดใช้งานหรือถึงวันที่ระบุ) ซึ่งมักเกี่ยวข้องกับ Insider threat',
    choiceRationales: {
      c1: 'ถูกต้อง: โค้ดรอทริกเกอร์เฉพาะเมื่อตรงเงื่อนไขสถานะบัญชีพ้นสภาพครบกำหนด โดยไม่แพร่กระจายไปเครื่องอื่น คือลักษณะเด่นของ Logic bomb',
      c2: 'ไม่ถูกต้อง: Virus ต้องเกาะไฟล์พาหะและแพร่เชื้อไปยังไฟล์อื่นเมื่อผู้ใช้เปิดใช้งาน เหมาะกับสถานการณ์ค่าแฮชไฟล์โปรแกรมเปลี่ยนและลามข้ามเอกสาร',
      c3: 'ไม่ถูกต้อง: Keylogger มุ่งบันทึกจังหวะการกดแป้นพิมพ์เพื่อขโมยรหัสผ่านหรือข้อมูลลับ ไม่ได้รอเงื่อนไขเหตุการณ์เพื่อลบฐานข้อมูล',
      c4: 'ไม่ถูกต้อง: Trojan หลอกให้ผู้ใช้ติดตั้งโดยปลอมเป็นยูทิลิตีหรือโปรแกรมปกติที่ดูน่าเชื่อถือ เพื่อเปิดช่องทางควบคุมระยะไกล'
    },
    misconceptionTh:
      'มักเข้าใจว่ามัลแวร์ทุกชนิดต้องมุ่งแพร่กระจายหรือเปิดการเชื่อมต่อ C2 ทันที จึงมองข้าม Logic bomb ที่แฝงตัวเงียบในสคริปต์งานปกติ',
    relatedLessonIds: ['L2-06', 'L2-01'],
    tags: ['malware', 'logic-bomb', 'insider-threat']
  },
  {
    id: 'Q2-042',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'exam-ready',
    promptEn:
      'At 08:50 AM, multiple departments report sudden resource inaccessibility as shared engineering documents show scrambled extensions, Volume Shadow Copies are deleted, and a ransom note appears in each directory. Concurrently, switch NetFlow logs reveal one affected endpoint rapidly scanning TCP port 445 across adjacent internal subnets without user interaction on the target systems. Which TWO malware types are indicated? (Choose two.)',
    promptTh:
      'เวลา 08:50 น. หลายแผนกรายงานว่าไม่สามารถเข้าถึงเอกสารงานวิศวกรรมร่วมกันได้ (Resource inaccessibility) โดยไฟล์เปลี่ยนเป็นนามสกุลแปลกปลอม สำเนา Volume Shadow Copies ถูกลบ และปรากฏไฟล์ข้อความเรียกค่าไถ่ในทุกโฟลเดอร์ ขณะเดียวกัน NetFlow ของสวิตช์พบเครื่องลูกข่ายที่ติดเชื้อเครื่องหนึ่งสแกนพอร์ต TCP 445 ข้ามเครือข่ายย่อยใกล้เคียงอย่างรวดเร็วโดยไม่มีผู้ใช้เปิดไฟล์บนเครื่องปลายทาง ตัวบ่งชี้เหล่านี้สะท้อนมัลแวร์ 2 ชนิดใด? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Ransomware',
        textTh: 'Ransomware'
      },
      {
        id: 'c2',
        textEn: 'Bloatware',
        textTh: 'Bloatware'
      },
      {
        id: 'c3',
        textEn: 'Keylogger',
        textTh: 'Keylogger'
      },
      {
        id: 'c4',
        textEn: 'Worm',
        textTh: 'Worm'
      },
      {
        id: 'c5',
        textEn: 'Spyware',
        textTh: 'Spyware'
      }
    ],
    correctChoiceIds: ['c1', 'c4'],
    explanationTh:
      'อาการไฟล์ถูกเข้ารหัส เปลี่ยนนามสกุล ลบ Shadow Copies และทิ้งข้อความเรียกค่าไถ่ชี้ชัดถึง Ransomware (c1) ส่วนพฤติกรรมการสแกนพอร์ต SMB (TCP/445) เพื่อแพร่กระจายข้ามเครือข่ายย่อยโดยอัตโนมัติไม่ต้องพึ่งการกระทำของผู้ใช้ชี้ถึงกลไกของ Worm (c4)',
    choiceRationales: {
      c1: 'ถูกต้อง: การเข้ารหัสไฟล์ ลบสำเนาสำรองในเครื่อง และทิ้งข้อความเรียกร้องเงินค่าไถ่เป็นเอกลักษณ์ของ Ransomware',
      c2: 'ไม่ถูกต้อง: Bloatware เป็นซอฟต์แวร์แถมไม่จำเป็นที่กินทรัพยากรเครื่องและเพิ่ม Attack surface แต่ไม่ได้เข้ารหัสไฟล์เรียกค่าไถ่หรือสแกนพอร์ตแพร่กระจาย',
      c3: 'ไม่ถูกต้อง: Keylogger แอบดักจับอินพุตแป้นพิมพ์เพื่อเก็บข้อมูลรับรองอย่างเงียบ ๆ ไม่ได้สแกนเครือข่ายหรือเข้ารหัสเอกสาร',
      c4: 'ถูกต้อง: การแพร่กระจายข้ามเครือข่ายอัตโนมัติไปยังพอร์ตบริการของเครื่องข้างเคียงโดยไม่ต้องอาศัยผู้ใช้คลิกเป็นกลไกของ Worm',
      c5: 'ไม่ถูกต้อง: Spyware มุ่งสอดแนมและส่งข้อมูลการใช้งานออกนอกองค์กรอย่างเงียบเชียบ ไม่ใช่การล็อกไฟล์เรียกค่าไถ่และสแกนพอร์ตลุกลาม'
    },
    misconceptionTh:
      'มักมองข้ามว่าเหตุการณ์มัลแวร์เดียวอาจผสานหลายกลไก เช่น Payload เป็น Ransomware แต่ใช้กลไกแพร่กระจายอัตโนมัติแบบ Worm',
    relatedLessonIds: ['L2-06', 'L2-08'],
    tags: ['malware', 'ransomware', 'worm', 'resource-inaccessibility']
  },
  {
    id: 'Q2-043',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'Physical access logs record an engineer’s proximity badge unlocking a restricted server cage in Singapore at 14:02 UTC. Seven minutes later, logs show the exact same badge ID swiping into a secure floor in the Tokyo office, while Singapore CCTV footage reveals an unrecognized individual holding an unmarked white card. Which physical attack indicator is observed?',
    promptTh:
      'บันทึกการเข้าออกทางกายภาพแสดงว่าบัตรผ่านประตูแบบไร้สัมผัสของวิศวกรรายหนึ่งใช้เปิดกรงเซิร์ฟเวอร์หวงห้ามในสิงคโปร์เวลา 14:02 UTC อีก 7 นาทีถัดมามีบันทึกหมายเลขบัตรเดียวกันแตะเข้าชั้นความลับในสำนักงานโตเกียว ขณะที่ภาพกล้องวงจรปิดในสิงคโปร์แสดงบุคคลแปลกหน้าถือบัตรสีขาวไม่มีลวดลาย ตัวบ่งชี้นี้ชี้ถึงการโจมตีทางกายภาพใด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Physical brute force',
        textTh: 'การโจมตีแบบ Physical brute force'
      },
      {
        id: 'c2',
        textEn: 'Environmental attack',
        textTh: 'การโจมตีสิ่งแวดล้อม (Environmental attack)'
      },
      {
        id: 'c3',
        textEn: 'RFID cloning',
        textTh: 'การคัดลอกสัญญาณบัตรไร้สัมผัส (RFID cloning)'
      },
      {
        id: 'c4',
        textEn: 'Password spraying',
        textTh: 'การโจมตีแบบ Password spraying'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'การใช้รหัสบัตรใบเดียวกันแตะเข้าอาคารสองแห่งที่อยู่ห่างกันคนละประเทศภายใน 7 นาที (Physical impossible travel) ร่วมกับภาพวงจรปิดที่พบผู้ไม่รู้จักถือบัตรเปล่าสีขาว เป็นตัวบ่งชี้ชัดเจนของการทำ RFID cloning คัดลอกรหัสบัตรพนักงานมาสวมรอย',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Physical brute force เป็นการใช้กำลังงัดแงะประตู ทำลายแม่กุญแจ หรือกดสุ่ม PIN บนแป้นพิมพ์ซ้ำ ๆ จนเกิด Tamper alarm ไม่ใช่การใช้บัตรที่ถูกต้องตามรหัสแต่ซ้ำซ้อนพื้นที่',
      c2: 'ไม่ถูกต้อง: Environmental attack มุ่งรบกวนระบบไฟฟ้า น้ำ ความชื้น ควัน หรืออุณหภูมิ HVAC ของศูนย์ข้อมูล',
      c3: 'ถูกต้อง: การอ่านและคัดลอกข้อมูลบัตรไร้สัมผัสลงบัตรเปล่าทำให้เกิดบันทึกการใช้บัตรเดียวกันในสองสถานที่ห่างไกลกันในเวลาใกล้กัน',
      c4: 'ไม่ถูกต้อง: Password spraying เป็นการทดสอบรหัสผ่านยอดนิยมไม่กี่คำกับบัญชีผู้ใช้ดิจิทัลจำนวนมาก ไม่ใช่การสวมรอยบัตรผ่านประตูทางกายภาพ'
    },
    misconceptionTh:
      'มักคิดว่าตราบใดที่บันทึกเครื่องอ่านบัตรแสดงสถานะ Access Granted ก็แสดงว่าเจ้าของบัตรตัวจริงเข้าพื้นที่เองเสมอโดยไม่เทียบเวลา ข้อมูลสถานที่ และภาพ CCTV',
    relatedLessonIds: ['L2-06', 'L1-03'],
    tags: ['physical-attack', 'rfid-cloning', 'ioc']
  },
  {
    id: 'Q2-044',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'At 02:15 AM, building telemetry reports a rapid 16°C temperature surge inside the primary datacenter after exterior HVAC intake vents were obstructed, accompanied by an artificially induced smoke alert that triggers fail-open fire doors to unlock automatically. Which attack type BEST classifies this incident?',
    promptTh:
      'เวลา 02:15 น. ระบบตรวจวัดอาคารรายงานอุณหภูมิในศูนย์ข้อมูลหลักพุ่งสูงขึ้น 16°C อย่างรวดเร็วหลังจากช่องรับอากาศระบบทำความเย็น HVAC ภายนอกถูกอุดปิด ร่วมกับการเกิดสัญญาณเตือนควันไฟปลอมที่สั่งให้ประตูหนีไฟแบบ Fail-open ปลดล็อกอัตโนมัติ เหตุการณ์นี้จัดเป็นการโจมตีรูปแบบใด?',
    choices: [
      {
        id: 'c1',
        textEn: 'RFID cloning',
        textTh: 'RFID cloning'
      },
      {
        id: 'c2',
        textEn: 'Environmental attack',
        textTh: 'Environmental attack'
      },
      {
        id: 'c3',
        textEn: 'Physical brute force',
        textTh: 'Physical brute force'
      },
      {
        id: 'c4',
        textEn: 'Credential replay',
        textTh: 'Credential replay'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'การรบกวนระบบทำความเย็น (HVAC) จนอุณหภูมิพุ่งสูงและการสร้างควันไฟ/ความร้อนเพื่อทำลายความพร้อมใช้งานของฮาร์ดแวร์หรือกระตุ้นประตูหนีไฟให้เปิดล็อกเป็นลักษณะของ Environmental attack',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: RFID cloning เกี่ยวข้องกับการคัดลอกคลื่นวิทยุของบัตรผ่านประตู ไม่ได้รบกวนระบบ HVAC หรือเซ็นเซอร์ควันไฟ',
      c2: 'ถูกต้อง: การโจมตีสภาพแวดล้อมที่ระบบไอทีพึ่งพา เช่น ไฟฟ้า ความเย็น HVAC น้ำ หรือควันไฟ จัดเป็น Environmental attack',
      c3: 'ไม่ถูกต้อง: Physical brute force เน้นการงัดแงะ ทำลายตัวล็อก หรือสุ่มกดรหัส PIN บนแป้นพิมพ์ ไม่ได้ใช้อุณหภูมิหรือสัญญาณไฟไหม้',
      c4: 'ไม่ถูกต้อง: Credential replay เป็นการนำโทเค็นหรือข้อมูลรับรองทางเครือข่ายที่ดักได้มาส่งซ้ำเพื่อล็อกอินระบบ'
    },
    misconceptionTh:
      'มักมองปัญหาอุณหภูมิและสัญญาณเตือนควันเป็นเพียงเหตุขัดข้องทางอาคารโดยไม่เชื่อมโยงว่าผู้โจมตีอาจจงใจสร้างสภาวะแวดล้อมเพื่อบังคับประตู Fail-open หรือทำให้เซิร์ฟเวอร์ดับ',
    relatedLessonIds: ['L2-06', 'L3-03', 'L1-03'],
    tags: ['physical-attack', 'environmental-attack', 'hvac']
  },
  {
    id: 'Q2-045',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'An enterprise ISP link suddenly reaches 100% saturation from 90 Gbps of unsolicited inbound UDP traffic originating from thousands of unrelated external NTP and Memcached servers on source ports 123 and 11211. Perimeter firewall state tables confirm internal hosts sent zero outbound requests to those servers. Which attack is occurring?',
    promptTh:
      'ลิงก์เชื่อมต่ออินเทอร์เน็ตหลักขององค์กรอิ่มตัวเต็ม 100% จากทราฟฟิก UDP ขาเข้าปริมาณ 90 Gbps ที่ส่งมาจากเซิร์ฟเวอร์ NTP และ Memcached ภายนอกหลายพันเครื่องที่ไม่เกี่ยวข้องกันผ่านพอร์ตต้นทาง 123 และ 11211 ตารางสถานะของไฟร์วอลล์ยืนยันว่าเครื่องภายในไม่เคยส่งคำขอขาออกไปยังเซิร์ฟเวอร์เหล่านั้นมาก่อน เหตุการณ์นี้คือการโจมตีใด?',
    choices: [
      {
        id: 'c1',
        textEn: 'On-path attack',
        textTh: 'การโจมตีแบบ On-path'
      },
      {
        id: 'c2',
        textEn: 'DNS tunneling',
        textTh: 'การโจมตีแบบ DNS tunneling'
      },
      {
        id: 'c3',
        textEn: 'Credential replay',
        textTh: 'การโจมตีแบบ Credential replay'
      },
      {
        id: 'c4',
        textEn: 'Amplified and reflected DDoS',
        textTh: 'การโจมตีแบบ Amplified และ Reflected DDoS'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'ผู้โจมตีปลอม IP ต้นทางเป็น IP ของเหยื่อ (Reflection) แล้วส่งคำขอขนาดเล็กไปยังเซิร์ฟเวอร์ตัวกลางอย่าง NTP/Memcached เพื่อขยายคำตอบขนาดมหาศาลย้อนกลับมาที่เหยื่อ (Amplification) ตัวบ่งชี้ชัดคือ UDP response ขาเข้าปริมาณสูงมากโดยไร้ Outbound request รองรับ',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: On-path attack เป็นการแทรกกลางเส้นทางสื่อสารเพื่อดักอ่านหรือแก้ข้อมูลระหว่างสองฝ่าย ไม่ใช่การระดมทราฟฟิกสะท้อนจากเซิร์ฟเวอร์ตัวกลางทั่วโลกจนลิงก์เต็ม',
      c2: 'ไม่ถูกต้อง: DNS tunneling ใช้ข้อความสอบถามและตอบกลับของ DNS เพื่อลักลอบส่งข้อมูลลับหรือคำสั่ง C2 ออกนอกเครือข่าย ไม่ได้ใช้ UDP NTP/Memcached ถล่มแบนด์วิดท์',
      c3: 'ไม่ถูกต้อง: Credential replay เป็นการนำโทเค็นหรือข้อมูลรับรองเดิมที่ดักจับได้มาส่งซ้ำเพื่อสวมสิทธิ์เข้าถึงระบบ',
      c4: 'ถูกต้อง: การพบแพ็กเก็ตตอบกลับ UDP จำนวนมากจากพอร์ตบริการอย่าง 123/11211 โดยไม่มีคำขอจากภายในชี้ชัดถึง Reflected และ Amplified DDoS'
    },
    misconceptionTh:
      'มักสับสนว่าทราฟฟิกโจมตีที่มาจากพอร์ต NTP/DNS แสดงว่าเซิร์ฟเวอร์เหล่านั้นเป็นบอตของแฮกเกอร์โดยตรง ทั้งที่จริงเป็นการสะท้อนคำตอบจากการปลอม IP เหยื่อ',
    relatedLessonIds: ['L2-07'],
    tags: ['network-attack', 'ddos', 'amplification', 'reflection']
  },
  {
    id: 'Q2-046',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'Corporate workstation users attempting to visit the internal portal are silently directed to an external credential-harvesting website. An audit of the external domain registrar confirms all authoritative DNS records and account logins are unchanged, while inspection of the local recursive DNS resolver reveals forged address mappings cached with abnormally long TTL values. Which attack has occurred?',
    promptTh:
      'พนักงานในเครือข่ายองค์กรที่พยายามเปิดเว็บไซต์พอร์ทัลภายในถูกเปลี่ยนเส้นทางไปยังเว็บไซต์ภายนอกเพื่อดักเก็บข้อมูลรับรองโดยไม่รู้ตัว การตรวจสอบบัญชีนายทะเบียนโดเมน (Registrar) ยืนยันว่าเรคคอร์ดหลักและประวัติการล็อกอินยังคงปกติ แต่เมื่อตรวจตัวแปลงชื่อ DNS ภายในองค์กรกลับพบระเบียนที่อยู่ IP ปลอมถูกเก็บไว้ในแคชพร้อมค่า TTL สูงผิดปกติ เหตุการณ์นี้คือการโจมตีใด?',
    choices: [
      {
        id: 'c1',
        textEn: 'DNS cache poisoning',
        textTh: 'DNS cache poisoning'
      },
      {
        id: 'c2',
        textEn: 'DNS registrar hijacking',
        textTh: 'DNS registrar hijacking'
      },
      {
        id: 'c3',
        textEn: 'Directory traversal',
        textTh: 'Directory traversal'
      },
      {
        id: 'c4',
        textEn: 'Password spraying',
        textTh: 'Password spraying'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'DNS cache poisoning คือการแทรกข้อมูลแปลงชื่อโดเมนปลอมลงในแคชของ Recursive DNS resolver ในองค์กรเพื่อเปลี่ยนเส้นทางผู้ใช้ไปยัง IP ของผู้โจมตี โดยที่ระเบียนต้นทางบน Authoritative server หรือบัญชี Registrar ไม่ได้ถูกแก้ไข',
    choiceRationales: {
      c1: 'ถูกต้อง: การพบระเบียนปลอมในแคชของ Recursive DNS resolver พร้อมค่า TTL ยาวผิดปกติในขณะที่บัญชี Registrar ยังปกติเป็นตัวบ่งชี้ของ DNS cache poisoning',
      c2: 'ไม่ถูกต้อง: DNS hijacking จะเปลี่ยนแปลงการตั้งค่าหรือระเบียน DNS โดยตรงที่บัญชี Registrar หรือตัวเราเตอร์/Authoritative server ซึ่งในโจทย์ระบุว่ายังปกติ',
      c3: 'ไม่ถูกต้อง: Directory traversal เป็นการโจมตีเว็บแอปพลิเคชันเพื่ออ่านไฟล์นอกโฟลเดอร์ Web root บนเซิร์ฟเวอร์ ไม่เกี่ยวกับการแปลงชื่อโดเมน',
      c4: 'ไม่ถูกต้อง: Password spraying เป็นการลองรหัสผ่านยอดนิยมกับหลายบัญชีผู้ใช้เพื่อหลบ Account lockout'
    },
    misconceptionTh:
      'มักสับสนระหว่าง DNS cache poisoning (แทรกระเบียนปลอมลงแคชตัวแปลงชื่อ) กับ DNS hijacking (เข้ายึดบัญชีผู้ให้บริการเพื่อแก้ไขระเบียนหลัก)',
    relatedLessonIds: ['L2-07'],
    tags: ['dns', 'cache-poisoning', 'network-attack']
  },
  {
    id: 'Q2-047',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'exam-ready',
    promptEn:
      'Employees working at a conference venue experience sudden Wi-Fi disconnection bursts, after which their laptops automatically reconnect to a stronger access point broadcasting the same corporate SSID from an unknown BSSID. Shortly afterward, users receive invalid TLS certificate alerts on HTTPS portals, and packet analysis confirms traffic is passing through an unauthorized intermediary node. Which TWO attacks are indicated? (Choose two.)',
    promptTh:
      'พนักงานที่ปฏิบัติงานในสถานที่จัดประชุมพบอาการสัญญาณ Wi-Fi หลุดซ้ำ ๆ อย่างกะทันหัน จากนั้นแล็ปท็อปเชื่อมต่อใหม่โดยอัตโนมัติไปยังจุดเชื่อมต่อไร้สายที่สัญญาณแรงกว่าและใช้ชื่อ SSID เดียวกับเครือข่ายงาน แต่มีค่า BSSID ที่ไม่รู้จัก ไม่นานผู้ใช้ได้รับคำเตือนใบรับรอง TLS ไม่ถูกต้องบนหน้าเว็บ HTTPS และการตรวจแพ็กเก็ตยืนยันว่าทราฟฟิกถูกส่งผ่านโหนดตัวกลางที่ไม่ได้รับอนุญาต เหตุการณ์นี้สะท้อนการโจมตี 2 รูปแบบใด? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Amplified DDoS attack',
        textTh: 'Amplified DDoS attack'
      },
      {
        id: 'c2',
        textEn: 'Birthday attack',
        textTh: 'Birthday attack'
      },
      {
        id: 'c3',
        textEn: 'Wireless attack (Evil Twin)',
        textTh: 'Wireless attack (Evil Twin)'
      },
      {
        id: 'c4',
        textEn: 'Logic bomb',
        textTh: 'Logic bomb'
      },
      {
        id: 'c5',
        textEn: 'On-path attack',
        textTh: 'On-path attack'
      }
    ],
    correctChoiceIds: ['c3', 'c5'],
    explanationTh:
      'การส่งเฟรมตัดการเชื่อมต่อเพื่อดีดผู้ใช้มาเกาะจุดเชื่อมต่อไร้สายปลอมที่ใช้ SSID เดียวกันแต่ BSSID แปลกปลอมคือ Wireless attack แบบ Evil Twin (c3) และการสกัดกั้นทราฟฟิกตรงกลางจนเกิดคำเตือน TLS certificate และพบโหนดตัวกลางคือ On-path attack (c5)',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Amplified DDoS มุ่งถล่มแบนด์วิดท์ให้ระบบล่มด้วยแพ็กเก็ตสะท้อนขนาดใหญ่ ไม่ได้ปลอม SSID หรือแทรกกลางทราฟฟิก TLS',
      c2: 'ไม่ถูกต้อง: Birthday attack เป็นเทคนิคทางคณิตศาสตร์เพื่อหาคู่แฮชชนกัน ไม่เกี่ยวข้องกับการตั้งจุดเชื่อมต่อไร้สายปลอม',
      c3: 'ถูกต้อง: เฟรม Deauth ร่วมกับ BSSID แปลกปลอมที่ปล่อย SSID ชื่อเดียวกันคือตัวบ่งชี้หลักของ Evil Twin wireless attack',
      c4: 'ไม่ถูกต้อง: Logic bomb เป็นโค้ดอันตรายที่ฝังในสคริปต์และรอเงื่อนไขเวลา/เหตุการณ์ภายในระบบ ไม่ใช่การโจมตีเครือข่ายไร้สาย',
      c5: 'ถูกต้อง: การแทรกกลางเส้นทางสื่อสารเพื่อดักอ่านหรือแก้ทราฟฟิกจนกระทบการตรวจสอบ TLS certificate คือ On-path attack'
    },
    misconceptionTh:
      'ผู้เรียนมักแยก Evil Twin ออกจากการโจมตีต่อเนื่อง ทั้งที่ Evil Twin มักเป็นช่องทางเริ่มต้นเพื่อพาเหยื่อเข้าสู่ On-path attack บนทราฟฟิกไร้สาย',
    relatedLessonIds: ['L2-07', 'L4-02'],
    tags: ['wireless', 'evil-twin', 'on-path', 'tls']
  },
  {
    id: 'Q2-048',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'While reviewing TLS logs on a payment API gateway, an analyst discovers that modern clients initially requesting TLS 1.3 repeatedly fail the handshake after forged alerts appear on the wire and subsequently negotiate TLS 1.0 with weak RC4/3DES ciphers. Which cryptographic attack is MOST likely occurring?',
    promptTh:
      'ระหว่างตรวจสอบบันทึก TLS บนเกตเวย์ API การชำระเงิน นักวิเคราะห์พบว่าไคลเอ็นต์สมัยใหม่ที่ร้องขอการเชื่อมต่อแบบ TLS 1.3 ล้มเหลวซ้ำ ๆ ในขั้นตอน Handshake หลังจากมีข้อความแจ้งเตือนปลอมแทรกเข้ามาบนสาย จากนั้นคู่สื่อสารจึงลดระดับไปเจรจาใช้ TLS 1.0 พร้อมชุดรหัส RC4/3DES ที่อ่อนแอ เหตุการณ์นี้มีแนวโน้มเป็นการโจมตีด้านการเข้ารหัสใดมากที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Collision attack',
        textTh: 'Collision attack'
      },
      {
        id: 'c2',
        textEn: 'Downgrade attack',
        textTh: 'Downgrade attack'
      },
      {
        id: 'c3',
        textEn: 'Birthday attack',
        textTh: 'Birthday attack'
      },
      {
        id: 'c4',
        textEn: 'Password spraying',
        textTh: 'Password spraying'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'Downgrade attack แทรกแซงขั้นตอนเจรจาโปรโตคอล (เช่น TLS Handshake) เพื่อบีบให้เซิร์ฟเวอร์และไคลเอ็นต์ถอยกลับไปใช้โปรโตคอลหรือ Cipher suite รุ่นเก่าที่ยังเปิดรองรับไว้เพื่อความเข้ากันได้ย้อนหลัง จนผู้โจมตีสามารถใช้ช่องโหว่ของโปรโตคอลเก่าถอดรหัสหรือแก้ข้อมูลได้',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Collision attack มุ่งหาข้อความสองชุดที่มีค่าแฮชตรงกันเพื่อปลอมแปลงไฟล์หรือลายเซ็นดิจิทัล ไม่ได้บีบบังคับเวอร์ชันโปรโตคอล TLS',
      c2: 'ถูกต้อง: การแทรกแซงให้การเจรจา TLS 1.3 ล้มเหลวแล้วลดระดับลงไปใช้ TLS 1.0 และ RC4/3DES ตรงกับ Downgrade attack',
      c3: 'ไม่ถูกต้อง: Birthday attack ใช้หลักความน่าจะเป็นช่วยลดความยากในการหา Collision ของฟังก์ชันแฮช ไม่เกี่ยวกับการเจรจา Cipher suite',
      c4: 'ไม่ถูกต้อง: Password spraying เป็นการลองรหัสผ่านยอดนิยมกับหลายบัญชีเพื่อเลี่ยง Lockout ไม่ใช่การโจมตีชั้นเจรจาโปรโตคอลเข้ารหัส'
    },
    misconceptionTh:
      'มักเข้าใจว่าการรองรับ TLS 1.3 บนเซิร์ฟเวอร์ก็ปลอดภัยพอแล้วโดยลืมปิดโปรโตคอลเก่า (TLS 1.0/1.1) ทำให้ยังเสี่ยงต่อ Downgrade attack',
    relatedLessonIds: ['L2-07', 'L1-05'],
    tags: ['cryptographic-attack', 'downgrade', 'tls']
  },
  {
    id: 'Q2-049',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'During a code-signing audit, security engineers find that a legacy signing pipeline uses a 128-bit hash algorithm, enabling an attacker to generate two different executables—one benign and one malicious—with identical hash digests in roughly 2^64 attempts rather than 2^128. Which pair of cryptographic concepts BEST explains this risk?',
    promptTh:
      'ระหว่างการตรวจสอบระบบลงนามโค้ด วิศวกรความปลอดภัยพบว่าไปป์ไลน์รุ่นเก่าใช้อัลกอริทึมแฮชขนาด 128 บิต ทำให้ผู้โจมตีสามารถสร้างไฟล์ปฏิบัติการที่แตกต่างกันสองไฟล์—ไฟล์หนึ่งปกติและอีกไฟล์แฝงโค้ดอันตราย—ให้มีค่าแฮชเหมือนกันทุกประการได้ในความพยายามประมาณ 2^64 ครั้งแทนที่จะเป็น 2^128 ครั้ง คู่แนวคิดด้านการเข้ารหัสใดอธิบายความเสี่ยงนี้ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Downgrade attack and key escrow exposure',
        textTh: 'Downgrade attack และการรั่วไหลของ Key escrow'
      },
      {
        id: 'c2',
        textEn: 'Credential replay and missing password salting',
        textTh: 'Credential replay และการไม่ใส่ค่า Salt ในรหัสผ่าน'
      },
      {
        id: 'c3',
        textEn: 'Collision attack accelerated by the Birthday attack principle',
        textTh: 'Collision attack ที่เร่งความเร็วด้วยหลักการ Birthday attack'
      },
      {
        id: 'c4',
        textEn: 'Buffer overflow and symmetric block padding mismatch',
        textTh: 'Buffer overflow และความไม่สอดคล้องของ Block padding'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'การสร้างไฟล์สองชุดที่ต่างกันแต่ได้ค่าแฮชเท่ากันคือ Collision attack และเทคนิคทางคณิตศาสตร์ที่ใช้หลัก Birthday Paradox ลดจำนวนการค้นหาคู่ชนกันจาก 2^n ลงเหลือประมาณ 2^(n/2) (เช่น จาก 2^128 เหลือ 2^64) คือ Birthday attack',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Downgrade attack บีบให้ลดระดับโปรโตคอลเข้ารหัส และ Key escrow เป็นการจัดเก็บกุญแจสำรอง ไม่เกี่ยวข้องกับความต้านทานการชนกันของฟังก์ชันแฮช',
      c2: 'ไม่ถูกต้อง: Credential replay นำโทเค็นเก่ามาส่งซ้ำ และ Salting ใช้ป้องกัน Rainbow table บนแฮชรหัสผ่าน ไม่ใช่วิธีหาไฟล์สองชุดที่มีแฮชชนกัน',
      c3: 'ถูกต้อง: Collision attack คือเป้าหมายในการหาอินพุตสองค่าที่ให้แฮชตรงกัน โดยอาศัยหลัก Birthday attack เพื่อลดความซับซ้อนเชิงความน่าจะเป็นเหลือรากที่สอง',
      c4: 'ไม่ถูกต้อง: Buffer overflow เป็นข้อบกพร่องด้านหน่วยความจำของโปรแกรม ไม่ใช่สมบัติทางคณิตศาสตร์ของฟังก์ชันแฮชขนาดบิตสั้น'
    },
    misconceptionTh:
      'มักเข้าใจผิดว่า Birthday attack เป็นการถอดรหัสข้อความสมมาตรหรือเป็นการสุ่มรหัสผ่าน ทั้งที่เกี่ยวข้องโดยตรงกับการค้นหา Hash collision',
    relatedLessonIds: ['L2-07', 'L1-05'],
    tags: ['cryptographic-attack', 'collision', 'birthday-attack', 'hashing']
  },
  {
    id: 'Q2-050',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'SIEM correlation alerts reveal 520 failed authentication attempts on the corporate SSO portal within 25 minutes from a single external IP address across 260 user accounts. No account was locked by the five-attempt lockout threshold because each account experienced only two attempts using the password “Spring2026!”. Which attack is indicated?',
    promptTh:
      'กฎการเชื่อมโยงเหตุการณ์ใน SIEM แจ้งเตือนความพยายามยืนยันตัวตนล้มเหลว 520 ครั้งบนพอร์ทัล SSO ขององค์กรภายใน 25 นาทีจาก IP ภายนอกเพียงแห่งเดียว โดยกระจายไปยังบัญชีผู้ใช้ 260 บัญชี ทั้งนี้ไม่มีบัญชีใดถูกล็อกตามเกณฑ์ Account lockout ที่ตั้งไว้ 5 ครั้ง เนื่องจากแต่ละบัญชีถูกทดลองเพียง 2 ครั้งด้วยรหัสผ่าน “Spring2026!” เหตุการณ์นี้คือการโจมตีใด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Single-account online brute force',
        textTh: 'การสุ่มรหัสผ่านแบบ Brute force ต่อบัญชีเดียว'
      },
      {
        id: 'c2',
        textEn: 'Credential replay',
        textTh: 'การโจมตีแบบ Credential replay'
      },
      {
        id: 'c3',
        textEn: 'Cross-Site Request Forgery (CSRF)',
        textTh: 'Cross-Site Request Forgery (CSRF)'
      },
      {
        id: 'c4',
        textEn: 'Password spraying',
        textTh: 'Password spraying'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'Password spraying ใช้รหัสผ่านยอดนิยมไม่กี่คำลองยิงใส่บัญชีจำนวนมากในแนวนอน บัญชีละ 1–2 ครั้ง เพื่อหลบเลี่ยงเกณฑ์ Account lockout จึงต้องตรวจจับใน SIEM จากการกระจายตัวของความล้มเหลวข้ามหลายบัญชีจากต้นทางเดียวกัน',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Brute force ต่อบัญชีเดียวจะลองรหัสผ่านจำนวนมากซ้ำ ๆ ใส่บัญชีเป้าหมายบัญชีเดียวหรือจำนวนน้อยราย ซึ่งจะไปกระตุ้น Account lockout อย่างรวดเร็ว',
      c2: 'ไม่ถูกต้อง: Credential replay นำแฮชหรือโทเค็นเซสชันจริงที่ดักจับได้มาส่งซ้ำโดยไม่ต้องเดารหัสผ่านตามฤดูกาล',
      c3: 'ไม่ถูกต้อง: CSRF หลอกให้เบราว์เซอร์ของผู้ใช้ที่ล็อกอินค้างอยู่ส่งคำขอปลอมไปยังแอปพลิเคชัน ไม่ใช่การยิงล็อกอินล้มเหลวจำนวนมากบนพอร์ทัล SSO',
      c4: 'ถูกต้อง: รูปแบบการใช้รหัสผ่านเดียวหรือน้อยคำทดสอบกับหลายร้อยบัญชีเพื่อไม่ให้เกินเกณฑ์ Lockout เป็นเอกลักษณ์ของ Password spraying'
    },
    misconceptionTh:
      'มักเข้าใจว่าการตั้งนโยบาย Account lockout ที่ 5 ครั้งสามารถป้องกันการโจมตีรหัสผ่านออนไลน์ได้ทุกแบบ จึงมองข้ามการเขียนกฎ SIEM ตรวจจับ Password spraying',
    relatedLessonIds: ['L2-07', 'L4-05'],
    tags: ['password-spraying', 'account-lockout', 'siem']
  },
  {
    id: 'Q2-051',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'exam-ready',
    promptEn:
      'During incident triage of an internal discussion portal, security logs uncover two findings: (1) an attacker saved a comment containing malicious JavaScript into the database so it executes inside every employee’s browser upon viewing the thread, and (2) using an unprivileged user session, an attacker invoked administrative API routes without authorization checks to export user records. Which TWO application attacks occurred? (Choose two.)',
    promptTh:
      'ระหว่างคัดแยกเหตุการณ์ของเว็บพอร์ทัลสนทนาภายใน บันทึกความปลอดภัยเปิดเผยข้อเท็จจริง 2 ประการ: (1) ผู้โจมตีบันทึกความคิดเห็นที่แทรกสคริปต์ JavaScript อันตรายลงในฐานข้อมูลทำให้สคริปต์ทำงานในเบราว์เซอร์ของพนักงานทุกคนที่เปิดดูกระทู้ และ (2) ผู้โจมตีใช้เซสชันของบัญชีผู้ใช้สิทธิ์ต่ำเรียกใช้เส้นทาง API สำหรับผู้ดูแลระบบโดยขาดการตรวจสิทธิ์เพื่อส่งออกข้อมูลผู้ใช้ เหตุการณ์นี้เกิดการโจมตีระดับแอปพลิเคชัน 2 รูปแบบใด? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Directory traversal',
        textTh: 'Directory traversal'
      },
      {
        id: 'c2',
        textEn: 'Stored attack (Stored XSS)',
        textTh: 'การโจมตีแบบ Stored (Stored XSS)'
      },
      {
        id: 'c3',
        textEn: 'Buffer overflow',
        textTh: 'Buffer overflow'
      },
      {
        id: 'c4',
        textEn: 'Privilege escalation',
        textTh: 'การยกระดับสิทธิ์ (Privilege escalation)'
      },
      {
        id: 'c5',
        textEn: 'Reflected-only phishing link attack',
        textTh: 'การโจมตีแบบ Reflected ที่ทำงานเฉพาะผู้คลิกลิงก์'
      }
    ],
    correctChoiceIds: ['c2', 'c4'],
    explanationTh:
      'การฝังสคริปต์ลงในฐานข้อมูลถาวรของเว็บแอปพลิเคชันจนกระทบผู้เยี่ยมชมทุกคนคือ Stored attack / Stored XSS (c2) ส่วนการที่บัญชีสิทธิ์ต่ำสามารถเรียกใช้ฟังก์ชันหรือ API ของผู้ดูแลระบบได้คือ Privilege escalation (c4)',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Directory traversal ใช้ลำดับเส้นทางไฟล์เพื่ออ่านไฟล์ระบบนอก Web root บนเซิร์ฟเวอร์ ไม่ใช่การฝังสคริปต์ในฐานข้อมูลหรือเรียก Admin API',
      c2: 'ถูกต้อง: สคริปต์ถูกจัดเก็บบนเซิร์ฟเวอร์และทำงานบนเบราว์เซอร์ของผู้ใช้ทุกคนที่เปิดหน้านั้น จึงเป็น Stored attack',
      c3: 'ไม่ถูกต้อง: Buffer overflow เกิดจากการเขียนข้อมูลเกินขอบเขตหน่วยความจำจนโปรแกรม Crash หรือถูกเปลี่ยนลำดับคำสั่ง ไม่ใช่ข้อบกพร่องด้านตรรกะ API และการแสดงผล HTML',
      c4: 'ถูกต้อง: การที่ผู้ใช้ระดับล่างเข้าถึงความสามารถหรือ API ระดับผู้ดูแลระบบได้โดยขาดการตรวจสอบสิทธิ์จัดเป็น Privilege escalation (แนวตั้ง)',
      c5: 'ไม่ถูกต้อง: Reflected attack ไม่ได้บันทึกโค้ดลงฐานข้อมูล แต่สะท้อนสคริปต์กลับเฉพาะในคำขอที่เหยื่อกดลิงก์พิเศษเท่านั้น'
    },
    misconceptionTh:
      'มักสับสนระหว่าง Stored XSS (เก็บถาวรในฐานข้อมูลกระทบทุกคน) กับ Reflected XSS (สะท้อนเฉพาะคำขอของเหยื่อที่คลิกลิงก์)',
    relatedLessonIds: ['L2-08', 'L2-04'],
    tags: ['application-attack', 'stored-xss', 'privilege-escalation']
  },
  {
    id: 'Q2-052',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'Web server access logs show repeated GET requests to "/download?template=../../../../etc/passwd" along with URL-encoded path sequences, followed by HTTP 200 responses returning OS account files located outside the web root directory. Egress proxy logs show zero outbound requests from the server to internal IP addresses. Which attack is confirmed?',
    promptTh:
      'บันทึกการเข้าถึงเว็บเซิร์ฟเวอร์แสดงคำขอ GET ซ้ำ ๆ ไปยัง "/download?template=../../../../etc/passwd" รวมถึงลำดับอ้างอิงเส้นทางแบบเข้ารหัส URL ตามด้วยรหัสตอบกลับ HTTP 200 ที่ส่งไฟล์บัญชีของระบบปฏิบัติการซึ่งอยู่นอกโฟลเดอร์ Web root กลับมา ขณะที่บันทึก Egress proxy ไม่พบการเชื่อมต่อไปยัง IP ภายในจากตัวเซิร์ฟเวอร์ การโจมตีใดได้รับการยืนยันจากหลักฐานนี้?',
    choices: [
      {
        id: 'c1',
        textEn: 'Directory traversal',
        textTh: 'Directory traversal'
      },
      {
        id: 'c2',
        textEn: 'Server-Side Request Forgery (SSRF)',
        textTh: 'Server-Side Request Forgery (SSRF)'
      },
      {
        id: 'c3',
        textEn: 'Cross-Site Request Forgery (CSRF)',
        textTh: 'Cross-Site Request Forgery (CSRF)'
      },
      {
        id: 'c4',
        textEn: 'Buffer overflow',
        textTh: 'Buffer overflow'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'Directory traversal (Path traversal) ใช้สัญลักษณ์อ้างอิงเส้นทางย้อนกลับเพื่อหลอกฟังก์ชันอ่านไฟล์ของเว็บแอปพลิเคชันให้ออกนอกโฟลเดอร์ Web root ไปอ่านไฟล์ระบบหรือไฟล์ตั้งค่าลับบนเครื่องเซิร์ฟเวอร์นั้นโดยตรง',
    choiceRationales: {
      c1: 'ถูกต้อง: ลำดับอ้างอิงโฟลเดอร์ย้อนกลับและการตอบกลับไฟล์ระบบนอก Web root เป็นหลักฐานตรงของ Directory traversal',
      c2: 'ไม่ถูกต้อง: SSRF หลอกให้ตัวเซิร์ฟเวอร์ส่งคำขอเครือข่ายไปยังระบบภายในหรือ Cloud metadata service แต่ในโจทย์ระบุชัดเจนว่าไม่มีการเชื่อมต่อขาออกไปยัง IP ภายใน',
      c3: 'ไม่ถูกต้อง: CSRF หลอกให้เบราว์เซอร์ของผู้ใช้ที่ยืนยันตัวตนค้างไว้ส่งคำขอปลอมไปยังเว็บไซต์เป้าหมาย ไม่ใช่การป้อนเส้นทางไฟล์เพื่อดึงไฟล์ระบบ',
      c4: 'ไม่ถูกต้อง: Buffer overflow เกิดจากข้อมูลยาวเกินขนาดหน่วยความจำทำให้แอป Crash หรือเขียนทับรีจิสเตอร์ ไม่ใช่การระบุเส้นทางไฟล์ข้ามโฟลเดอร์'
    },
    misconceptionTh:
      'มักสับสนระหว่าง Directory traversal (อ่านไฟล์บนเครื่องเซิร์ฟเวอร์ออกนอก Web root) กับ SSRF (บังคับเซิร์ฟเวอร์ยิงคำขอเครือข่ายเข้าสู่ระบบภายใน)',
    relatedLessonIds: ['L2-08'],
    tags: ['directory-traversal', 'application-attack', 'web-logs']
  },
  {
    id: 'Q2-053',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.4'],
    type: 'msq',
    selectCount: 3,
    difficulty: 'exam-ready',
    promptEn:
      'During a forensic review of a privileged service administrator account with VPN access disabled, an analyst observes: (1) authenticated logins from Bangkok at 09:04 UTC and Munich at 09:11 UTC, (2) creation of a backup administrative key at 03:15 AM Sunday outside any approved change window, and (3) a 45-minute blank gap in OS security logs immediately afterward despite healthy disk capacity and log forwarder uptime. Which THREE indicators of malicious activity are present? (Choose three.)',
    promptTh:
      'ระหว่างการตรวจสอบหลักฐานของบัญชีผู้ดูแลระบบที่มีสิทธิ์สูงซึ่งไม่ได้เปิดใช้ VPN นักวิเคราะห์พบเหตุการณ์ดังนี้: (1) การล็อกอินสำเร็จจากกรุงเทพฯ เวลา 09:04 UTC และมิวนิก เวลา 09:11 UTC, (2) การสร้างคีย์ผู้ดูแลสำรองเวลา 03:15 น. วันอาทิตย์ซึ่งอยู่นอกรอบหน้าต่างการเปลี่ยนแปลงที่อนุมัติ และ (3) ช่องว่างที่ไม่มีบันทึก Log ระบบปฏิบัติการนาน 45 นาทีต่อเนื่องหลังจากนั้นทั้งที่พื้นที่ดิสก์และตัวส่ง Log ทำงานปกติ เหตุการณ์นี้พบตัวบ่งชี้กิจกรรมมุ่งร้าย 3 ข้อใด? (เลือก 3 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Impossible travel',
        textTh: 'Impossible travel'
      },
      {
        id: 'c2',
        textEn: 'Account lockout',
        textTh: 'Account lockout'
      },
      {
        id: 'c3',
        textEn: 'Out-of-cycle logging',
        textTh: 'Out-of-cycle logging'
      },
      {
        id: 'c4',
        textEn: 'Resource consumption',
        textTh: 'Resource consumption'
      },
      {
        id: 'c5',
        textEn: 'Missing logs',
        textTh: 'Missing logs'
      }
    ],
    correctChoiceIds: ['c1', 'c3', 'c5'],
    explanationTh:
      'การล็อกอินจากกรุงเทพฯ และมิวนิกห่างกันเพียง 7 นาทีโดยไม่ได้ใช้ VPN คือ Impossible travel (c1) การสร้างคีย์ผู้ดูแลเวลา 03:15 น. นอกรอบ Maintenance window คือ Out-of-cycle logging (c3) และการที่บันทึกหายไป 45 นาทีทั้งที่ดิสก์และบริการ Log ปกติคือ Missing logs (c5) ซึ่งบ่งชี้ว่าผู้บุกรุกอาจกำลังทำลายหลักฐาน',
    choiceRationales: {
      c1: 'ถูกต้อง: ระยะทางข้ามทวีปภายใน 7 นาทีโดยไม่มี VPN/Proxy เป็นตัวบ่งชี้ชัดเจนของ Impossible travel',
      c2: 'ไม่ถูกต้อง: เหตุการณ์ระบุการล็อกอินสำเร็จและสร้างคีย์ได้ ไม่ได้มีรายงานบัญชีถูกล็อกจากการพยายามกรอกรหัสผิดซ้ำ ๆ',
      c3: 'ถูกต้อง: กิจกรรมสำคัญที่เกิดนอกเวลาทำการหรือนอกรอบ Change/Maintenance window ที่อนุมัติคือ Out-of-cycle logging',
      c4: 'ไม่ถูกต้อง: โจทย์ระบุว่าพื้นที่ดิสก์และระบบทำงานปกติ ไม่ได้มีสัญญาณ CPU, RAM, Disk I/O หรือแบนด์วิดท์พุ่งสูงผิดปกติ',
      c5: 'ถูกต้อง: ช่องว่างเวลาที่บันทึกหายไปโดยไร้เหตุขัดข้องทางเทคนิคคือ Missing logs ซึ่งเป็นสัญญาณเตือนการลบร่องรอยของผู้บุกรุก'
    },
    misconceptionTh:
      'ผู้เรียนมักประเมิน Missing logs และ Out-of-cycle logging ต่ำเกินไป โดยมองว่าเป็นเพียงปัญหาทางเทคนิคของระบบเก็บ Log แทนที่จะตระหนักถึงสัญญาณการปกปิดร่องรอยหลังยึดสิทธิ์',
    relatedLessonIds: ['L2-08', 'L4-12'],
    tags: ['ioc', 'impossible-travel', 'out-of-cycle-logging', 'missing-logs']
  },
  {
    id: 'Q2-054',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A hospital network architect separates guest Wi-Fi, administrative workstations, and medical imaging servers into distinct VLANs connected through an internal firewall that permits only required DICOM ports from clinical subnets while blocking lateral traffic from guest devices. Which mitigation technique is being implemented?',
    promptTh:
      'สถาปนิกเครือข่ายของโรงพยาบาลแยกเครือข่าย Wi-Fi สำหรับผู้มาติดต่อ เวิร์กสเตชันฝ่ายธุรการ และเซิร์ฟเวอร์ภาพถ่ายทางการแพทย์ออกเป็น VLAN ที่ต่างกัน โดยเชื่อมต่อผ่านไฟร์วอลล์ภายในที่อนุญาตเฉพาะพอร์ต DICOM ที่จำเป็นจากซับเน็ตคลินิกและบล็อกทราฟฟิกแนวขวางจากอุปกรณ์ผู้มาติดต่อ มาตรการลดความเสี่ยงใดกำลังถูกนำไปใช้?',
    choices: [
      {
        id: 'c1',
        textEn: 'Physical isolation (air-gapping)',
        textTh: 'การแยกขาดทางกายภาพ (Air-gapping)'
      },
      {
        id: 'c2',
        textEn: 'Decommissioning',
        textTh: 'การปลดระวางระบบ (Decommissioning)'
      },
      {
        id: 'c3',
        textEn: 'Segmentation',
        textTh: 'การแบ่งส่วนเครือข่าย (Segmentation)'
      },
      {
        id: 'c4',
        textEn: 'Application allow listing',
        textTh: 'การทำ Application allow list'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'Segmentation คือการแบ่งเครือข่ายออกเป็นโซนย่อยและควบคุมทราฟฟิกที่อนุญาตข้ามโซนผ่าน Firewall/ACL เพื่อลดขอบเขตความเสียหาย (Blast radius) และจำกัด Lateral movement โดยยังคงให้ระบบสื่อสารข้ามโซนเท่าที่จำเป็นทางธุรกิจได้',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Isolation แบบ Air-gapped เป็นการตัดขาดการเชื่อมต่อจากเครือข่ายอื่นโดยสิ้นเชิง แต่ในสถานการณ์นี้ยังอนุญาตทราฟฟิก DICOM ข้ามโซนตามกฎความปลอดภัย',
      c2: 'ไม่ถูกต้อง: Decommissioning คือการปิดเลิกใช้งานและล้างข้อมูลระบบที่หมดอายุหรือไม่ได้ใช้งานแล้ว ไม่ใช่การจัดโครงสร้าง VLAN ให้ระบบที่ยังทำงานอยู่',
      c3: 'ถูกต้อง: การแบ่ง VLAN และใช้ไฟร์วอลล์กำกับทราฟฟิกเฉพาะพอร์ตที่จำเป็นระหว่างโซนคือ Network segmentation',
      c4: 'ไม่ถูกต้อง: Application allow list ควบคุมว่าโปรแกรมใดได้รับอนุญาตให้รันบนตัวโฮสต์ ไม่ใช่การจัดแบ่งโซนเครือข่ายระหว่างแผนก'
    },
    misconceptionTh:
      'มักใช้คำว่า Segmentation กับ Isolation สลับกัน ทั้งที่ Segmentation ยังอนุญาตทราฟฟิกที่จำเป็นข้ามโซนตามกฎ ส่วน Isolation คือการตัดขาดจากการสื่อสาร',
    relatedLessonIds: ['L2-09', 'L3-02', 'L3-03'],
    tags: ['mitigation', 'segmentation', 'lateral-movement']
  },
  {
    id: 'Q2-055',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'An Endpoint Detection and Response (EDR) console alerts that an active ransomware binary is rapidly encrypting local documents on a single finance workstation connected to the corporate LAN. Which mitigation action should the SOC analyst execute FIRST to halt lateral propagation across file shares while preserving volatile evidence?',
    promptTh:
      'คอนโซล Endpoint Detection and Response (EDR) แจ้งเตือนว่ามีไบนารี Ransomware กำลังเข้ารหัสเอกสารในเครื่องอย่างรวดเร็วบนเวิร์กสเตชันฝ่ายการเงินเพียงเครื่องเดียวที่เชื่อมต่อกับ LAN องค์กร นักวิเคราะห์ SOC ควรดำเนินการ Mitigation ใดเป็นอันดับแรกเพื่อหยุดการลุกลามข้ามแชร์โฟลเดอร์โดยยังคงรักษาหลักฐานที่ผันผวนในหน่วยความจำ?',
    choices: [
      {
        id: 'c1',
        textEn: 'Deploy pending operating system patches across the workstation immediately',
        textTh: 'สั่งติดตั้งแพตช์ระบบปฏิบัติการที่ค้างอยู่บนเวิร์กสเตชันนั้นทันที'
      },
      {
        id: 'c2',
        textEn: 'Run an automated configuration drift enforcement check on the subnet',
        textTh: 'สั่งรันการตรวจสอบ Configuration drift อัตโนมัติบนซับเน็ตดังกล่าว'
      },
      {
        id: 'c3',
        textEn: 'Enable full-disk encryption and schedule a reboot after business hours',
        textTh: 'เปิดใช้งานการเข้ารหัสทั้งดิสก์และตั้งเวลาปิด-เปิดเครื่องหลังเลิกงาน'
      },
      {
        id: 'c4',
        textEn: 'Isolate the infected workstation from the network via EDR quarantine',
        textTh: 'แยกกักกันเครื่องที่ติดเชื้อออกจากเครือข่ายทันทีผ่านโหมด Isolation/Quarantine ของ EDR'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'เมื่อเกิดเหตุติดมัลแวร์แบบ Active และต้องหยุดการแพร่กระจายข้ามเครือข่ายทันที การใช้ Isolation (EDR network quarantine) จะตัดการสื่อสารของเครื่องนั้นออกจากเครือข่ายหลักทันทีโดยไม่ต้องปิดเครื่อง จึงหยุดการเข้ารหัสแชร์โฟลเดอร์และรักษา RAM สำหรับการสืบสวนได้พร้อมกัน',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การแพตช์เป็นมาตรการ Preventive/Corrective หลังควบคุมเหตุ แต่ไม่สามารถหยุดไบนารีที่กำลังรันเข้ารหัสไฟล์อยู่ ณ ขณะนั้นได้ทันที และอาจต้องรีบูตจนทำลายหลักฐานใน RAM',
      c2: 'ไม่ถูกต้อง: Configuration enforcement รักษาค่า Baseline ให้อยู่ในมาตรฐาน แต่ไม่ได้ตัดการเชื่อมต่อเครื่องที่ถูกยึดและกำลังแพร่เชื้ออยู่แล้ว',
      c3: 'ไม่ถูกต้อง: Full-disk encryption ป้องกันข้อมูลขณะเครื่องปิดหรือถูกขโมย ไม่สามารถหยุด Ransomware ที่กำลังทำงานภายใต้สิทธิ์ผู้ใช้ที่ล็อกอินอยู่แล้วได้',
      c4: 'ถูกต้อง: Isolation ผ่าน EDR กักกันโฮสต์ออกจากเครือข่ายทันทีเพื่อยุติการลุกลามเป็นลำดับความสำคัญแรก'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนว่าการสั่งแพตช์หรือสแกนไวรัสใหม่สำคัญกว่าการตัดขาดเครือข่ายเมื่อเกิดเหตุการณ์จริง หรือเผลอสั่งปิดเครื่องจนสูญเสียหลักฐานในหน่วยความจำ',
    relatedLessonIds: ['L2-09', 'L4-07', 'L4-11'],
    tags: ['mitigation', 'isolation', 'ransomware', 'incident-containment']
  },
  {
    id: 'Q2-056',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'During an external penetration test, testers gain initial access through an old promotional web server that the marketing department stopped using two years ago. The server remained powered on, listed in external DNS, and unpatched after reaching end of support. Which enterprise mitigation practice was neglected and would have eliminated this exposure?',
    promptTh:
      'ระหว่างการทดสอบเจาะระบบจากภายนอก ผู้ทดสอบเข้าสู่เครือข่ายได้ผ่านเว็บเซิร์ฟเวอร์แคมเปญเก่าที่ฝ่ายการตลาดเลิกใช้งานไปเมื่อ 2 ปีก่อน แต่เครื่องดังกล่าวยังคงเปิดทำงาน มีระเบียนใน DNS ภายนอก และไม่ได้รับการแพตช์หลังสิ้นสุดระยะสนับสนุน มาตรการ Mitigation ใดที่ถูกละเลยซึ่งจะช่วยขจัดพื้นที่เสี่ยงนี้ได้ทั้งหมด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Decommissioning',
        textTh: 'การปลดระวางระบบ (Decommissioning)'
      },
      {
        id: 'c2',
        textEn: 'Host-based firewall logging',
        textTh: 'การเปิดบันทึก Log ของ Host-based firewall'
      },
      {
        id: 'c3',
        textEn: 'Default password rotation',
        textTh: 'การหมุนเวียนรหัสผ่านเริ่มต้น'
      },
      {
        id: 'c4',
        textEn: 'Full-disk encryption at rest',
        textTh: 'การเข้ารหัสข้อมูลทั้งดิสก์ขณะจัดเก็บ'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'Decommissioning คือการปลดระวางฮาร์ดแวร์ ซอฟต์แวร์ และบริการที่เลิกใช้งานหรือหมดอายุการสนับสนุน (EOL) อย่างเป็นระบบ รวมถึงการล้างข้อมูล เพิกถอนใบรับรอง และลบระเบียน DNS เพื่อไม่ให้หลงเหลือเป็น Shadow attack surface ที่ขาดผู้ดูแล',
    choiceRationales: {
      c1: 'ถูกต้อง: เซิร์ฟเวอร์ที่เลิกใช้งานทางธุรกิจแล้วควรถูก Decommission ออกจากระบบและ DNS อย่างสมบูรณ์เพื่อลดพื้นที่ผิวการโจมตี',
      c2: 'ไม่ถูกต้อง: การเก็บ Log ของไฟร์วอลล์ช่วยตรวจจับทราฟฟิกแต่ไม่ได้นำเซิร์ฟเวอร์ที่หมดอายุและมีช่องโหว่ออกจากเครือข่ายสาธารณะ',
      c3: 'ไม่ถูกต้อง: การเปลี่ยนรหัสผ่านเริ่มต้นช่วยป้องกันการล็อกอินด้วยรหัสโรงงาน แต่ไม่ได้อุดช่องโหว่ซอฟต์แวร์เว็บที่ขาดแพตช์บนเซิร์ฟเวอร์ที่เลิกใช้แล้ว',
      c4: 'ไม่ถูกต้อง: Full-disk encryption ป้องกันกรณีฮาร์ดดิสก์ถูกขโมยทางกายภาพ ไม่ได้ป้องกันช่องโหว่เว็บแอปพลิเคชันขณะที่เครื่องยังเปิดบริการออนไลน์อยู่'
    },
    misconceptionTh:
      'มักปล่อยเซิร์ฟเวอร์เก่าที่ไม่ได้ใช้งานเปิดทิ้งไว้เพราะเกรงว่าจะกระทบระบบอื่นหรือเสียเวลาปิด ทำให้กลายเป็นจุดอ่อนที่ถูกลืมและไม่ถูกแพตช์',
    relatedLessonIds: ['L2-09', 'L4-03'],
    tags: ['mitigation', 'decommissioning', 'attack-surface']
  },
  {
    id: 'Q2-057',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'An automated billing export script was configured with Domain Admin credentials during initial setup to avoid troubleshooting permission errors. Months later, attackers exploit an application flaw on the billing server and immediately use that service account to compromise the entire Active Directory domain. Enforcing which mitigation principle would have BEST contained the impact?',
    promptTh:
      'สคริปต์ส่งออกรายงานการเรียกเก็บเงินอัตโนมัติถูกตั้งค่าให้ใช้บัญชี Domain Admin ตั้งแต่ตอนติดตั้งเริ่มต้นเพื่อเลี่ยงปัญหาการแก้สิทธิ์ขัดข้อง หลายเดือนต่อมาผู้โจมตีเจาะช่องโหว่แอปพลิเคชันบนเซิร์ฟเวอร์ดังกล่าวและใช้บัญชีบริการนั้นเข้ายึดทั้งโดเมน Active Directory ได้ทันที การบังคับใช้หลักการ Mitigation ใดจะช่วยจำกัดผลกระทบได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Configuration enforcement',
        textTh: 'Configuration enforcement'
      },
      {
        id: 'c2',
        textEn: 'Least privilege',
        textTh: 'Least privilege (หลักสิทธิ์น้อยที่สุดเท่าที่จำเป็น)'
      },
      {
        id: 'c3',
        textEn: 'Data encryption in transit',
        textTh: 'การเข้ารหัสข้อมูลระหว่างส่งผ่าน'
      },
      {
        id: 'c4',
        textEn: 'Decommissioning',
        textTh: 'การปลดระวางระบบ'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'Least privilege กำหนดให้บัญชีผู้ใช้ บัญชีบริการ และแอปพลิเคชันได้รับสิทธิ์เพียงเท่าที่จำเป็นต่อหน้าที่ (เช่น สิทธิ์อ่านเฉพาะตารางรายงานในฐานข้อมูล ไม่ใช่ Domain Admin) จึงช่วยจำกัดความเสียหายหากบัญชีบริการนั้นถูกยึดครอง',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Configuration enforcement มุ่งรักษาค่าตั้งค่าระบบให้ตรง Baseline ต่อเนื่อง แต่ปัญหาหลักที่นี่คือการออกแบบสิทธิ์ของบัญชีบริการไว้สูงเกินหน้าที่ตั้งแต่ต้น',
      c2: 'ถูกต้อง: การลดสิทธิ์ของ Service account ให้เหลือเฉพาะหน้าที่ส่งออกรายงานช่วยป้องกันไม่ให้ผู้โจมตีได้สิทธิ์ Domain Admin เมื่อยึดเซิร์ฟเวอร์เดียวได้',
      c3: 'ไม่ถูกต้อง: การเข้ารหัสข้อมูลระหว่างส่งช่วยป้องกันการดักฟังบนสายสัญญาณ ไม่ได้จำกัดขอบเขตสิทธิ์ของบัญชี Domain Admin เมื่อโฮสต์ถูกเจาะแล้ว',
      c4: 'ไม่ถูกต้อง: เซิร์ฟเวอร์รายงานการเรียกเก็บเงินยังจำเป็นต้องใช้งานทางธุรกิจ จึงไม่ใช่กรณีที่ต้องปลดระวาง'
    },
    misconceptionTh:
      'มักแยกไม่ออกระหว่าง Access Control (การตรวจสอบสิทธิ์เข้าถึงโดยรวม) กับ Least Privilege (การจำกัดขนาดสิทธิ์ให้เล็กที่สุดเท่าที่จำเป็นต่อภารกิจ)',
    relatedLessonIds: ['L2-09', 'L4-09'],
    tags: ['mitigation', 'least-privilege', 'service-account']
  },
  {
    id: 'Q2-058',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'Quarterly security audits repeatedly discover that administrators disable host firewalls or enable insecure debugging services during emergency troubleshooting and forget to restore secure settings afterward, creating ongoing configuration drift across 250 servers. Which mitigation technique BEST eliminates this recurring drift sustainably?',
    promptTh:
      'การตรวจสอบความปลอดภัยรายไตรมาสพบปัญหาซ้ำซากว่าผู้ดูแลระบบมักปิด Host firewall หรือเปิดบริการดีบักที่ไม่ปลอดภัยชั่วคราวระหว่างแก้ไขเหตุขัดข้องฉุกเฉินแล้วลืมปรับกลับ ทำให้เกิด Configuration drift บนเซิร์ฟเวอร์ 250 เครื่องอย่างต่อเนื่อง เทคนิค Mitigation ใดช่วยแก้ไขปัญหานี้อย่างยั่งยืนที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Periodic manual checklist reviews by the audit team',
        textTh: 'การให้ทีมตรวจสอบตรวจเช็กด้วยรายการแบบ Manual เป็นระยะ'
      },
      {
        id: 'c2',
        textEn: 'Permanent network isolation of all 250 production servers',
        textTh: 'การตัดขาดเครือข่ายถาวรสำหรับเซิร์ฟเวอร์ผลิตจริงทั้ง 250 เครื่อง'
      },
      {
        id: 'c3',
        textEn: 'Configuration enforcement using automated baseline management tools',
        textTh: 'Configuration enforcement ด้วยเครื่องมือจัดการและบังคับค่า Baseline อัตโนมัติ'
      },
      {
        id: 'c4',
        textEn: 'Implementing full-disk encryption across all server volumes',
        textTh: 'การติดตั้งระบบเข้ารหัสทั้งดิสก์บนทุกโวลุ่มของเซิร์ฟเวอร์'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'Configuration enforcement ใช้เครื่องมืออัตโนมัติ (เช่น Group Policy, MDM, DSC หรือ Infrastructure as Code) ตรวจสอบความคลาดเคลื่อนของค่าตั้งค่าอย่างต่อเนื่องและปรับแก้ค่าที่ผิดเพี้ยนให้กลับสู่ Secure baseline อัตโนมัติ จึงแก้ปัญหา Configuration drift ในวงกว้างได้ยั่งยืนกว่าการตรวจด้วยมือ',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การตรวจเช็กด้วยมือเป็นระยะมีโอกาสตกหล่นและปล่อยให้ระบบมีความเสี่ยงค้างอยู่นานจนกว่าจะถึงรอบตรวจถัดไป',
      c2: 'ไม่ถูกต้อง: การตัดขาดเครือข่ายถาวรจะทำให้เซิร์ฟเวอร์ผลิตจริงทั้ง 250 เครื่องให้บริการธุรกิจไม่ได้',
      c3: 'ถูกต้อง: Configuration enforcement ป้องกันและแก้ไข Configuration drift บนเซิร์ฟเวอร์จำนวนมากได้โดยอัตโนมัติและต่อเนื่อง',
      c4: 'ไม่ถูกต้อง: การเข้ารหัสดิสก์คุ้มครองความลับของข้อมูลเมื่อสื่อบันทึกถูกขโมย ไม่ได้ตรวจแก้กฎไฟร์วอลล์หรือบริการที่เปิดค้างไว้'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจว่าเพียงเขียนเอกสาร Secure baseline ไว้ก็เพียงพอ โดยมองข้ามว่าหากขาด Configuration enforcement อัตโนมัติ ระบบจะเกิด Drift ขึ้นเสมอ',
    relatedLessonIds: ['L2-09', 'L4-01', 'L4-07'],
    tags: ['mitigation', 'configuration-enforcement', 'configuration-drift']
  },
  {
    id: 'Q2-059',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A vulnerability management scan reports that 40 enterprise web servers are running an outdated middleware version vulnerable to a publicly disclosed remote code execution flaw, and the software vendor has published an official security fix. After validating the fix in staging under change management, which mitigation directly eliminates the underlying software flaw?',
    promptTh:
      'การสแกนบริหารจัดการช่องโหว่รายงานว่าเว็บเซิร์ฟเวอร์องค์กร 40 เครื่องกำลังรันมิดเดิลแวร์รุ่นเก่าที่มีช่องโหว่เรียกใช้โค้ดจากระยะไกลซึ่งเปิดเผยต่อสาธารณะแล้ว และผู้ผลิตซอฟต์แวร์ได้เผยแพร่แพตช์แก้ไขอย่างเป็นทางการ หลังจากทดสอบในสภาพแวดล้อม Staging ภายใต้กระบวนการ Change management แล้ว มาตรการ Mitigation ใดที่แก้ไขจุดอ่อนของซอฟต์แวร์นี้ที่ต้นเหตุโดยตรง?',
    choices: [
      {
        id: 'c1',
        textEn: 'Default password changes',
        textTh: 'การเปลี่ยนรหัสผ่านเริ่มต้นจากโรงงาน'
      },
      {
        id: 'c2',
        textEn: 'Patching',
        textTh: 'การติดตั้งแพตช์แก้ไขความปลอดภัย (Patching)'
      },
      {
        id: 'c3',
        textEn: 'NetFlow monitoring',
        textTh: 'การเฝ้าระวังด้วย NetFlow'
      },
      {
        id: 'c4',
        textEn: 'Data masking',
        textTh: 'การทำ Data masking'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'Patching เป็นมาตรการลดความเสี่ยงที่แก้ไขข้อบกพร่องในโค้ดซอฟต์แวร์หรือเฟิร์มแวร์ที่ต้นเหตุโดยตรงเมื่อผู้ผลิตออกตัวแก้ไขมาแล้ว และควรดำเนินการผ่านขั้นตอนทดสอบและ Change management เพื่อไม่ให้กระทบเสถียรภาพของระบบ',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การเปลี่ยนรหัสผ่านเริ่มต้นปิดช่องทางบัญชีโรงงาน แต่ไม่ได้แก้ไขบั๊กในโค้ดมิดเดิลแวร์',
      c2: 'ถูกต้อง: เมื่อมีตัวแก้ไขอัปเดตจากผู้ผลิตแล้ว Patching คือวิธีขจัดช่องโหว่ซอฟต์แวร์ที่ต้นเหตุอย่างถาวร',
      c3: 'ไม่ถูกต้อง: NetFlow monitoring เป็นมาตรการ Detective เพื่อดูแนวโน้มทราฟฟิกเครือข่าย ไม่ได้แก้ข้อบกพร่องในซอฟต์แวร์มิดเดิลแวร์',
      c4: 'ไม่ถูกต้อง: Data masking ใช้ซ่อนข้อมูลละเอียดอ่อนในรายงานหรือสภาพแวดล้อมทดสอบ ไม่ได้แก้ไขช่องโหว่ RCE ของเว็บเซิร์ฟเวอร์'
    },
    misconceptionTh:
      'มักสับสนระหว่างการติด WAF เป็นมาตรการชั่วคราว (Compensating control) กับ Patching ที่แก้ไขข้อบกพร่องของซอฟต์แวร์ที่ต้นเหตุจริง',
    relatedLessonIds: ['L2-09', 'L4-04', 'L1-04'],
    tags: ['mitigation', 'patching', 'change-management']
  },
  {
    id: 'Q2-060',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.5'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'A healthcare consultancy wants to implement enterprise mitigations to satisfy two specific goals: (1) ensure confidential patient records remain unreadable if a field laptop is lost or stolen while powered off, and (2) detect suspicious post-compromise database activity rapidly to shorten attacker dwell time. Which TWO mitigation techniques BEST meet these requirements? (Choose two.)',
    promptTh:
      'บริษัทที่ปรึกษาด้านสุขภาพต้องการนำมาตรการ Mitigation ระดับองค์กรมาใช้เพื่อให้บรรลุเป้าหมายเฉพาะ 2 ประการ: (1) รับประกันว่าข้อมูลผู้ป่วยที่เป็นความลับจะไม่สามารถอ่านเข้าใจได้หากแล็ปท็อปที่ใช้นอกสถานที่สูญหายหรือถูกขโมยขณะปิดเครื่อง และ (2) ตรวจจับกิจกรรมฐานข้อมูลที่น่าสงสัยหลังการบุกรุกได้อย่างรวดเร็วเพื่อลดระยะเวลาที่ผู้โจมตีแฝงตัว (Dwell time) เทคนิค Mitigation 2 ข้อใดตอบโจทย์เหล่านี้ได้ดีที่สุด? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Patching OS kernel vulnerabilities',
        textTh: 'การแพตช์ช่องโหว่ระดับเคอร์เนลของระบบปฏิบัติการ'
      },
      {
        id: 'c2',
        textEn: 'Encryption of stored data',
        textTh: 'การเข้ารหัสข้อมูลที่จัดเก็บ (Encryption)'
      },
      {
        id: 'c3',
        textEn: 'Default password changes on network printers',
        textTh: 'การเปลี่ยนรหัสผ่านเริ่มต้นบนเครื่องพิมพ์เครือข่าย'
      },
      {
        id: 'c4',
        textEn: 'Continuous monitoring and log alerting',
        textTh: 'การเฝ้าระวังและแจ้งเตือนจากบันทึกอย่างต่อเนื่อง (Monitoring)'
      },
      {
        id: 'c5',
        textEn: 'Disabling legacy Telnet protocols on switches',
        textTh: 'การปิดโปรโตคอล Telnet รุ่นเก่าบนสวิตช์เครือข่าย'
      }
    ],
    correctChoiceIds: ['c2', 'c4'],
    explanationTh:
      'Encryption (c2) เช่น Full-disk encryption ปกป้องความลับของข้อมูลเมื่ออุปกรณ์สูญหายหรือถูกขโมยทางกายภาพ ส่วน Monitoring (c4) เช่น การเก็บ Log และแจ้งเตือนใน SIEM ทำหน้าที่เป็น Detective control ที่ช่วยลดระยะเวลาแฝงตัว (Dwell time) ของผู้โจมตีได้อย่างมีประสิทธิภาพ',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การแพตช์ OS ป้องกันการใช้ประโยชน์จากช่องโหว่ซอฟต์แวร์ แต่ไม่ได้ปกป้องข้อมูลบนดิสก์หากผู้ขโมยถอดไดรฟ์ไปอ่านโดยตรง และไม่ได้ตรวจจับพฤติกรรมหลังเจาะระบบ',
      c2: 'ถูกต้อง: การเข้ารหัสข้อมูลจัดเก็บช่วยป้องกันไม่ให้ผู้ที่ขโมยแล็ปท็อปไปอ่านข้อมูลผู้ป่วยได้โดยไม่มีกุญแจถอดรหัส',
      c3: 'ไม่ถูกต้อง: การเปลี่ยนรหัสผ่านเครื่องพิมพ์เป็น Hardening พื้นฐานที่ช่วยลดการเจาะเครื่องพิมพ์ ไม่ได้คุ้มครองแล็ปท็อปที่หายหรือจับคิวรีฐานข้อมูลผิดปกติ',
      c4: 'ถูกต้อง: Monitoring เก็บ Telemetry และ Log ต่อเนื่องเพื่อตรวจจับพฤติกรรมบุกรุกและลด Dwell time',
      c5: 'ไม่ถูกต้อง: การปิด Telnet ช่วยเสริมแกร่งสวิตช์เครือข่ายจากการดักฟังและเข้าถึงโดยมิชอบ แต่ไม่ได้ตอบโจทย์แล็ปท็อปหายหรือการตรวจจับคิวรีฐานข้อมูล'
    },
    misconceptionTh:
      'มักสับสนว่ามาตรการ Preventive อย่าง Patching สามารถแทนที่ Detective control อย่าง Monitoring และ Data protection อย่าง Encryption ได้ทั้งหมด',
    relatedLessonIds: ['L2-09', 'L3-06', 'L4-05'],
    tags: ['mitigation', 'encryption', 'monitoring', 'dwell-time']
  },
  {
    id: 'Q2-061',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'Although a company deploys a strict perimeter next-generation firewall, security engineers observe peer-to-peer port scanning between laptops inside the same branch office VLAN, and traveling staff face unsolicited connection probes on open ports when using hotel Wi-Fi. Which hardening control BEST mitigates both scenarios?',
    promptTh:
      'แม้บริษัทจะติดตั้งไฟร์วอลล์ยุคใหม่ (NGFW) ที่ขอบเขตเครือข่ายอย่างเข้มงวดแล้ว แต่วิศวกรความปลอดภัยยังพบการสแกนพอร์ตระหว่างแล็ปท็อปภายใน VLAN สาขาเดียวกัน อีกทั้งพนักงานที่เดินทางยังเผชิญการสแกนพอร์ตที่ไม่พึงประสงค์เมื่อเชื่อมต่อ Wi-Fi ของโรงแรม เทคนิค Hardening ใดช่วยลดความเสี่ยงทั้งสองสถานการณ์นี้ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Application deny listing',
        textTh: 'Application deny listing'
      },
      {
        id: 'c2',
        textEn: 'Decommissioning branch routers',
        textTh: 'การปลดระวางเราเตอร์สาขา'
      },
      {
        id: 'c3',
        textEn: 'Encrypted database backups',
        textTh: 'การสำรองข้อมูลฐานข้อมูลแบบเข้ารหัส'
      },
      {
        id: 'c4',
        textEn: 'Host-based firewall',
        textTh: 'Host-based firewall'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'Network firewall ที่ขอบเขตไม่สามารถมองเห็นหรือกรองทราฟฟิกระหว่างเครื่องลูกข่ายภายใน VLAN เดียวกัน และไม่สามารถปกป้องแล็ปท็อปเมื่ออยู่นอกสำนักงานได้ การเปิดใช้ Host-based firewall บนแต่ละเครื่องจึงช่วยสกัดกั้นการสแกนพอร์ตทั้งในวงแลนเดียวกันและบนเครือข่ายสาธารณะ',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Application deny list บล็อกเฉพาะซอฟต์แวร์ที่ระบุว่าอันตรายบนตัวเครื่อง ไม่ได้กรองแพ็กเก็ตเครือข่ายขาเข้าบนพอร์ตที่เปิดรับบริการ',
      c2: 'ไม่ถูกต้อง: เราเตอร์สาขายังจำเป็นต่อการสื่อสารทางธุรกิจและไม่ได้เป็นสาเหตุที่ทราฟฟิกภายใน VLAN เดียวกันวิ่งถึงกัน',
      c3: 'ไม่ถูกต้อง: การสำรองฐานข้อมูลแบบเข้ารหัสช่วยเรื่องการกู้คืนและการปกป้องข้อมูลสำรอง ไม่ได้ปิดกั้นการเชื่อมต่อพอร์ตระหว่างแล็ปท็อป',
      c4: 'ถูกต้อง: Host-based firewall ทำงานบนตัวระบบปฏิบัติการของแต่ละเครื่อง จึงควบคุมทราฟฟิกได้ทั้งภายใน VLAN เดียวกันและขณะใช้งานนอกเครือข่ายองค์กร'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจผิดว่าเมื่อมี Perimeter Network Firewall แล้ว Host-based firewall เป็นสิ่งฟุ่มเฟือย ทั้งที่ Network firewall ไม่สามารถควบคุมทราฟฟิกระดับ Layer 2 ในซับเน็ตเดียวกันหรือเครื่องนอกออฟฟิศได้',
    relatedLessonIds: ['L2-09', 'L3-04'],
    tags: ['hardening', 'host-based-firewall', 'lateral-movement']
  },
  {
    id: 'Q2-062',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A retail enterprise manages 600 fixed-purpose point-of-sale (POS) terminals that should execute only a single digitally signed checkout application. Management wants to block unapproved utilities and novel zero-day executables from running even before antivirus signatures exist. Which hardening technique is MOST effective?',
    promptTh:
      'ธุรกิจค้าปลีกบริหารจัดการเครื่องชำระเงิน (POS) ที่มีหน้าที่เฉพาะ 600 เครื่อง ซึ่งควรอนุญาตให้รันเฉพาะแอปพลิเคชันคิดเงินที่ลงนามดิจิทัลเพียงตัวเดียวเท่านั้น ฝ่ายบริหารต้องการสกัดกั้นยูทิลิตีที่ไม่ได้รับอนุมัติและไฟล์ปฏิบัติการ Zero-day ชนิดใหม่ไม่ให้ทำงานได้ตั้งแต่ก่อนมีลายเซ็นแอนติไวรัส เทคนิค Hardening ใดมีประสิทธิภาพสูงสุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Application allow list',
        textTh: 'Application allow list'
      },
      {
        id: 'c2',
        textEn: 'Application deny list',
        textTh: 'Application deny list'
      },
      {
        id: 'c3',
        textEn: 'Default password changes',
        textTh: 'การเปลี่ยนรหัสผ่านเริ่มต้น'
      },
      {
        id: 'c4',
        textEn: 'Decommissioning',
        textTh: 'การปลดระวางอุปกรณ์'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'Application allow list (Allowlisting) อนุญาตให้ทำงานเฉพาะซอฟต์แวร์ที่ได้รับการอนุมัติหรือมีลายเซ็น/แฮชที่ขึ้นทะเบียนไว้ และปฏิเสธโปรแกรมอื่นทั้งหมดโดยปริยาย จึงเหมาะอย่างยิ่งกับเครื่องเฉพาะทางอย่าง POS หรือ Kiosk และหยุดยั้งมัลแวร์ใหม่รวมถึง Zero-day ได้เหนือกว่า Deny list',
    choiceRationales: {
      c1: 'ถูกต้อง: Application allow list อนุญาตเฉพาะแอปคิดเงินที่ลงนามถูกต้องและบล็อกไบนารีอื่นทั้งหมดแม้เป็นไฟล์ที่ไม่เคยรู้จักมาก่อน',
      c2: 'ไม่ถูกต้อง: Application deny list บล็อกเฉพาะโปรแกรมหรือลายเซ็นที่รู้จักว่าอันตรายแล้ว จึงปล่อยให้ไฟล์ Zero-day หรือสคริปต์แปลกปลอมชนิดใหม่รันผ่านได้',
      c3: 'ไม่ถูกต้อง: การเปลี่ยนรหัสผ่านเริ่มต้นป้องกันการล็อกอินโดยมิชอบ แต่ไม่ได้ควบคุมว่าไฟล์ปฏิบัติการใดรันบนระบบปฏิบัติการได้บ้าง',
      c4: 'ไม่ถูกต้อง: เครื่อง POS ทั้ง 600 เครื่องยังใช้งานดำเนินธุรกิจอยู่ จึงไม่ใช่สินทรัพย์ที่ต้องปลดระวาง'
    },
    misconceptionTh:
      'มักคิดว่า Deny list เพียงพอต่อการป้องกันโปรแกรมแปลกปลอม ทั้งที่ในเชิงความปลอดภัย Allow list เข้มงวดและรับมือ Zero-day บนระบบเฉพาะทางได้ดีกว่ามาก',
    relatedLessonIds: ['L2-09', 'L4-07', 'L4-01'],
    tags: ['hardening', 'application-allow-list', 'pos', 'zero-day']
  },
  {
    id: 'Q2-063',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'A financial services firm wants a host-level hardening control on its core database servers that actively monitors system calls, process memory behavior, and attempts to modify critical OS files in real time, automatically blocking exploit attempts before system integrity is compromised. Which hardening measure BEST meets this requirement?',
    promptTh:
      'บริษัทบริการทางการเงินต้องการมาตรการ Hardening ระดับโฮสต์บนเซิร์ฟเวอร์ฐานข้อมูลหลัก เพื่อเฝ้าตรวจสอบ System calls พฤติกรรมหน่วยความจำของโปรเซส และความพยายามแก้ไขไฟล์ระบบปฏิบัติการสำคัญแบบเรียลไทม์ พร้อมยับยั้งการเจาะระบบโดยอัตโนมัติก่อนความสมบูรณ์ของระบบจะเสียหาย มาตรการใดตอบโจทย์นี้ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Passive network tap sensor',
        textTh: 'เซนเซอร์ดักสำเนาทราฟฟิกแบบ Passive tap'
      },
      {
        id: 'c2',
        textEn: 'Removal of unnecessary software',
        textTh: 'การถอดถอนซอฟต์แวร์ที่ไม่จำเป็น'
      },
      {
        id: 'c3',
        textEn: 'Host-based intrusion prevention system (HIPS)',
        textTh: 'ระบบป้องกันการบุกรุกระดับโฮสต์ (HIPS)'
      },
      {
        id: 'c4',
        textEn: 'Default password rotation',
        textTh: 'การเปลี่ยนรหัสผ่านเริ่มต้น'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'Host-based intrusion prevention system (HIPS) ทำงานอยู่บนตัวโฮสต์เพื่อตรวจจับและยับยั้งพฤติกรรมการบุกรุกเชิงรุกแบบเรียลไทม์ เช่น การฉีดโค้ดเข้าหน่วยความจำโปรเซสหรือการแก้ไขไฟล์ระบบสำคัญ ก่อนที่การโจมตีจะสร้างความเสียหาย',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Passive network tap เป็นอุปกรณ์ตรวจจับบนเครือข่ายที่รับสำเนาทราฟฟิกมาวิเคราะห์เท่านั้น ไม่สามารถบล็อกการแก้ไฟล์หรือ System calls บนตัวโฮสต์แบบเรียลไทม์ได้',
      c2: 'ไม่ถูกต้อง: การถอดถอนซอฟต์แวร์ที่ไม่จำเป็นลด Attack surface ล่วงหน้า แต่ไม่ใช่กลไกเฝ้าจับและบล็อกพฤติกรรมโปรเซสขณะรันไทม์',
      c3: 'ถูกต้อง: HIPS ตรวจสอบพฤติกรรมระดับระบบปฏิบัติการและสกัดกั้นการโจมตีบนตัวโฮสต์ได้ทันที',
      c4: 'ไม่ถูกต้อง: การเปลี่ยนรหัสผ่านเริ่มต้นป้องกันการเข้าสู่ระบบด้วยค่าโรงงาน แต่ไม่ได้ตรวจสอบ System calls หรือการแทรกหน่วยความจำ'
    },
    misconceptionTh:
      'มักสับสนระหว่างการวิเคราะห์ Passive telemetry กับ HIPS ที่มีอำนาจยับยั้งพฤติกรรมการโจมตีระดับระบบปฏิบัติการบนโฮสต์โดยตรง',
    relatedLessonIds: ['L2-09', 'L4-07'],
    tags: ['hardening', 'hips', 'endpoint-defense']
  },
  {
    id: 'Q2-064',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.5'],
    type: 'msq',
    selectCount: 3,
    difficulty: 'intermediate',
    promptEn:
      'Before deploying 60 newly purchased warehouse edge appliances onto the corporate wireless network, a security engineer inspects their factory image and discovers: (1) an active default “admin/admin” console login, (2) Telnet and SMBv1 services listening on open ports, and (3) preinstalled consumer media apps and diagnostic bloatware unrelated to warehouse tasks. Which THREE hardening actions should be completed prior to deployment? (Choose three.)',
    promptTh:
      'ก่อนนำอุปกรณ์ Edge สำหรับคลังสินค้าที่จัดซื้อใหม่ 60 เครื่องเชื่อมต่อเข้าเครือข่ายไร้สายขององค์กร วิศวกรความปลอดภัยตรวจสอบอิมเมจจากโรงงานและพบประเด็นดังนี้: (1) บัญชีคอนโซลเริ่มต้น “admin/admin” ยังเปิดใช้งานอยู่, (2) บริการ Telnet และ SMBv1 เปิดรับการเชื่อมต่ออยู่ และ (3) มีแอปพลิเคชันสื่อทั่วไปและ Bloatware สำหรับทดสอบติดตั้งมาล่วงหน้าโดยไม่เกี่ยวข้องกับงานคลังสินค้า ควรดำเนินการ Hardening 3 ข้อใดก่อนนำอุปกรณ์ขึ้นใช้งานจริง? (เลือก 3 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Default password changes',
        textTh: 'การเปลี่ยนรหัสผ่านเริ่มต้นจากโรงงาน'
      },
      {
        id: 'c2',
        textEn: 'Permanent air-gapped physical isolation',
        textTh: 'การตัดขาดเครือข่ายแบบ Air-gap ถาวร'
      },
      {
        id: 'c3',
        textEn: 'Disabling unnecessary ports and insecure protocols',
        textTh: 'การปิดพอร์ตและโปรโตคอลที่ไม่จำเป็นหรือไม่ปลอดภัย'
      },
      {
        id: 'c4',
        textEn: 'Publishing external DMARC records for the corporate domain',
        textTh: 'การเผยแพร่ระเบียน DMARC สำหรับโดเมนอีเมลองค์กร'
      },
      {
        id: 'c5',
        textEn: 'Removal of unnecessary software',
        textTh: 'การถอดถอนซอฟต์แวร์ที่ไม่จำเป็นออกจากระบบ'
      }
    ],
    correctChoiceIds: ['c1', 'c3', 'c5'],
    explanationTh:
      'การทำ Hardening อิมเมจอุปกรณ์ใหม่ก่อนใช้งานจริงให้ตรงตามข้อค้นพบทั้ง 3 ข้อ ได้แก่ เปลี่ยนรหัสผ่านโรงงาน (c1) ปิดพอร์ต/โปรโตคอลเก่าที่ขาดความปลอดภัยอย่าง Telnet และ SMBv1 (c3) และถอน Bloatware ที่ไม่ได้ใช้เพื่อลด Attack surface (c5)',
    choiceRationales: {
      c1: 'ถูกต้อง: บัญชีเริ่มต้น admin/admin เป็นจุดอ่อนแรกที่เครื่องมือโจมตีอัตโนมัติลองใช้งาน จึงต้องเปลี่ยนทันทีก่อนต่อเครือข่าย',
      c2: 'ไม่ถูกต้อง: อุปกรณ์เหล่านี้จำเป็นต้องสื่อสารบนเครือข่ายไร้สายของคลังสินค้า การทำ Air-gap ถาวรจะทำให้อุปกรณ์ปฏิบัติงานไม่ได้ (ควรใช้ Segmentation แทน)',
      c3: 'ถูกต้อง: การปิด Telnet และ SMBv1 ลดช่องทางสื่อสารที่ไม่มีการเข้ารหัสและมีช่องโหว่ร้ายแรง',
      c4: 'ไม่ถูกต้อง: DMARC เป็นมาตรการยืนยันตัวตนอีเมล ไม่ได้แก้ไขปัญหาพอร์ตเปิด บัญชีโรงงาน หรือซอฟต์แวร์แถมบนอุปกรณ์ Edge',
      c5: 'ถูกต้อง: การลบ Bloatware และยูทิลิตีไม่จำเป็นช่วยลดจำนวนช่องโหว่และเครื่องมือที่ผู้บุกรุกอาจหยิบมาใช้ต่อ'
    },
    misconceptionTh:
      'มักนำอุปกรณ์ใหม่จากโรงงานมาเสียบใช้งานทันทีโดยเชื่อว่าของใหม่ปลอดภัยแล้ว ทั้งที่ค่าตั้งต้นโรงงานมักเปิดบริการและรหัสผ่านที่เน้นความสะดวกมากกว่าความปลอดภัย',
    relatedLessonIds: ['L2-09', 'L4-01'],
    tags: ['hardening', 'default-passwords', 'ports-protocols', 'bloatware']
  },
  {
    id: 'Q2-065',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A network engineer configures management plane rules on core distribution switches to permit SSH (TCP/22) traffic exclusively from the dedicated jump-server subnet 10.40.10.0/24 and deny all other source IP addresses. Which hardening technique is being applied?',
    promptTh:
      'วิศวกรเครือข่ายตั้งค่ากฎควบคุมส่วนบริหารจัดการบนสวิตช์หลัก โดยระบุให้อนุญาตทราฟฟิก SSH (TCP/22) เฉพาะจากซับเน็ตเซิร์ฟเวอร์ Jump-host 10.40.10.0/24 เท่านั้น และปฏิเสธ IP ต้นทางอื่นทั้งหมด เทคนิค Hardening ใดกำลังถูกนำมาใช้?',
    choices: [
      {
        id: 'c1',
        textEn: 'Application allow list',
        textTh: 'Application allow list'
      },
      {
        id: 'c2',
        textEn: 'Access control list (ACL)',
        textTh: 'Access control list (ACL)'
      },
      {
        id: 'c3',
        textEn: 'Endpoint protection installation',
        textTh: 'การติดตั้งระบบป้องกันปลายทาง (Endpoint protection)'
      },
      {
        id: 'c4',
        textEn: 'Decommissioning',
        textTh: 'การปลดระวางอุปกรณ์ (Decommissioning)'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'Access control list (ACL) บนอุปกรณ์เครือข่ายอย่างสวิตช์และเราเตอร์ทำหน้าที่ระบุกฎ Permit/Deny ตาม IP ต้นทาง ปลายทาง หรือหมายเลขพอร์ตเพื่อจำกัดการเข้าถึงพอร์ตบริหารจัดการเฉพาะแหล่งที่เชื่อถือได้',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Application allow list ใช้กำหนดรายชื่อไฟล์โปรแกรมหรือสคริปต์ที่รันได้บนระบบปฏิบัติการ ไม่ใช่การกรอง IP ต้นทางบนสวิตช์เครือข่าย',
      c2: 'ถูกต้อง: กฎระบุอนุญาตเฉพาะซับเน็ต Jump-host และปฏิเสธต้นทางอื่นทั้งหมดบนพอร์ต TCP/22 คือการตั้งค่า ACL',
      c3: 'ไม่ถูกต้อง: Endpoint protection ติดตั้งบนเครื่องลูกข่ายและเซิร์ฟเวอร์เพื่อตรวจจับมัลแวร์ ไม่ใช่รายการกฎกรองแพ็กเก็ตบนสวิตช์',
      c4: 'ไม่ถูกต้อง: สวิตช์หลักยังปฏิบัติงานอยู่จริง ไม่ใช่การปลดระวางอุปกรณ์ที่หมดอายุ'
    },
    misconceptionTh:
      'มักสับสนระหว่าง ACL ที่กรองทราฟฟิกเครือข่าย/วัตถุตามกฎ Permit-Deny กับ Application allow list ที่ควบคุมการรันไบนารีบนตัวโฮสต์',
    relatedLessonIds: ['L2-09', 'L4-06'],
    tags: ['hardening', 'acl', 'network-management']
  },
  {
    id: 'Q2-066',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.5'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'exam-ready',
    promptEn:
      'An internal audit of an active corporate HR file server and portal identifies two control gaps: (1) every authenticated domain user holds Read/Write/Modify permissions on the executive compensation folder, and (2) administrators can sign into the HR management portal using only a static password without role segregation or additional verification factors. Which TWO mitigation and hardening actions BEST remediate these gaps? (Choose two.)',
    promptTh:
      'การตรวจสอบภายในของเซิร์ฟเวอร์ไฟล์และพอร์ทัลฝ่ายบุคคลที่กำลังใช้งานอยู่พบช่องว่างการควบคุม 2 ประการ: (1) ผู้ใช้ทุกคนที่ล็อกอินโดเมนได้มีสิทธิ์อ่าน แก้ไข และดัดแปลง (Read/Write/Modify) ในโฟลเดอร์ค่าตอบแทนผู้บริหารทั้งหมด และ (2) ผู้ดูแลระบบสามารถล็อกอินเข้าพอร์ทัลจัดการฝ่ายบุคคลด้วยรหัสผ่านคงที่เพียงอย่างเดียวโดยไม่มีการแบ่งแยกบทบาทหรือปัจจัยยืนยันตัวตนเพิ่มเติม มาตรการ Mitigation และ Hardening 2 ข้อใดแก้ไขช่องว่างเหล่านี้ได้ตรงจุดที่สุด? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Decommissioning the active HR file server immediately',
        textTh: 'ปลดระวาง (Decommission) เซิร์ฟเวอร์ไฟล์ฝ่ายบุคคลที่ใช้งานอยู่ทันที'
      },
      {
        id: 'c2',
        textEn: 'Restricting folder permissions according to least privilege',
        textTh: 'ปรับจำกัดสิทธิ์โฟลเดอร์ (Permissions) ตามหลัก Least privilege'
      },
      {
        id: 'c3',
        textEn: 'Disabling unused NetBIOS ports on branch access switches',
        textTh: 'ปิดพอร์ต NetBIOS ที่ไม่ใช้งานบนสวิตช์สาขา'
      },
      {
        id: 'c4',
        textEn: 'Enabling host-based firewall rules to block external ICMP pings',
        textTh: 'ตั้งกฎ Host-based firewall เพื่อบล็อก ICMP ping จากภายนอก'
      },
      {
        id: 'c5',
        textEn: 'Enforcing stronger access control with role-based access and MFA',
        textTh: 'บังคับใช้การควบคุมการเข้าถึง (Access control) ที่รัดกุมด้วย RBAC และ MFA'
      }
    ],
    correctChoiceIds: ['c2', 'c5'],
    explanationTh:
      'การที่ผู้ใช้ทุกคนเข้าอ่านและแก้ไขโฟลเดอร์ค่าตอบแทนได้ต้องแก้ไขด้วย Hardening ด้าน Permissions (c2) ตามหลัก Least privilege เพื่อจำกัดให้เฉพาะผู้มีหน้าที่เท่านั้น ส่วนการล็อกอินพอร์ทัลผู้ดูแลด้วยรหัสผ่านเดียวต้องแก้ไขด้วย Access control (c5) ที่บังคับใช้ MFA และแบ่งแยกสิทธิ์ตามบทบาท (RBAC)',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: เซิร์ฟเวอร์ฝ่ายบุคคลยังจำเป็นต่อการดำเนินงานขององค์กร Decommissioning ใช้กับระบบที่หมดอายุหรือเลิกใช้งานแล้วเท่านั้น',
      c2: 'ถูกต้อง: การกำหนด Permissions ระดับโฟลเดอร์อย่างละเอียดช่วยตัดสิทธิ์ Read/Write ส่วนเกินของพนักงานทั่วไปออกจากข้อมูลค่าตอบแทน',
      c3: 'ไม่ถูกต้อง: การปิดพอร์ตไม่จำเป็นเป็น Hardening เครือข่ายทั่วไป แต่ไม่ได้แก้ไขสิทธิ์โฟลเดอร์ที่เปิดกว้างเกินไปหรือการขาด MFA บนเว็บพอร์ทัล',
      c4: 'ไม่ถูกต้อง: การบล็อก ICMP บนไฟร์วอลล์ไม่ได้แก้ปัญหาที่ผู้ใช้ภายในที่มีสิทธิ์โดเมนอยู่แล้วสามารถเปิดอ่านและแก้ไขโฟลเดอร์ลับหรือล็อกอินพอร์ทัลไร้ MFA',
      c5: 'ถูกต้อง: การเสริม Access control ด้วย RBAC และ MFA ป้องกันการเข้าถึงพอร์ทัลผู้ดูแลด้วยรหัสผ่านเดี่ยวและแยกหน้าที่รับผิดชอบชัดเจน'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนว่ามาตรการเครือข่ายอย่างการปิดพอร์ตหรือไฟร์วอลล์สามารถทดแทนการตั้งค่า Permissions ระดับไฟล์และ Access control ระดับแอปพลิเคชันได้',
    relatedLessonIds: ['L2-09', 'L4-09'],
    tags: ['hardening', 'permissions', 'access-control', 'least-privilege']
  }
];
