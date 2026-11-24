import type { Question } from '../../types';

export const Q_D3_B1: Question[] = [
  {
    id: 'Q3-001',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A financial technology firm hosts its customer transaction database on a Platform as a Service (PaaS) offering in a public cloud. During an audit, investigators discover that unauthorized external users read sensitive customer records because database access policies permitted public network connections and administrative accounts lacked multifactor authentication (MFA). According to the cloud Shared Responsibility Matrix, which party holds primary responsibility for this exposure?',
    promptTh:
      'บริษัทเทคโนโลยีทางการเงินโฮสต์ฐานข้อมูลธุรกรรมลูกค้าบนบริการ Platform as a Service (PaaS) ใน Public Cloud ระหว่างการตรวจสอบ ผู้ตรวจสอบพบว่าบุคคลภายนอกที่ไม่ได้รับอนุญาตสามารถอ่านข้อมูลลูกค้าที่มีความอ่อนไหวได้ เนื่องจากนโยบายการเข้าถึงฐานข้อมูลอนุญาตการเชื่อมต่อจากเครือข่ายสาธารณะและบัญชีผู้ดูแลไม่ได้เปิดใช้การยืนยันตัวตนหลายปัจจัย (MFA) ตามหลัก Cloud Shared Responsibility Matrix ฝ่ายใดเป็นผู้รับผิดชอบหลักต่อความเสี่ยงที่เกิดขึ้นนี้?',
    choices: [
      {
        id: 'c1',
        textEn: 'The cloud service provider (CSP), because PaaS providers manage database engine patching and underlying infrastructure',
        textTh: 'ผู้ให้บริการคลาวด์ (CSP) เนื่องจากผู้ให้บริการ PaaS เป็นผู้ดูแลการแพตช์ซอฟต์แวร์ฐานข้อมูลและโครงสร้างพื้นฐานเบื้องหลัง'
      },
      {
        id: 'c2',
        textEn: 'The operating system vendor, because default kernel firewall rules failed to block external queries',
        textTh: 'ผู้พัฒนาซอฟต์แวร์ระบบปฏิบัติการ เนื่องจากกฎไฟร์วอลล์เริ่มต้นของเคอร์เนลไม่ได้ปิดกั้นคำขอจากภายนอก'
      },
      {
        id: 'c3',
        textEn: 'The customer organization, because identity management, access controls, and data protection remain the tenant’s responsibility',
        textTh: 'องค์กรลูกค้า เนื่องจากความรับผิดชอบด้านการจัดการตัวตน การควบคุมสิทธิ์เข้าถึง และการปกป้องข้อมูลยังคงเป็นของลูกค้าเสมอ'
      },
      {
        id: 'c4',
        textEn: 'A third-party hardware vendor, because physical network isolation in the data center failed to stop external access',
        textTh: 'ผู้ผลิตฮาร์ดแวร์บุคคลที่สาม เนื่องจากการแยกเครือข่ายทางกายภาพในศูนย์ข้อมูลไม่สามารถหยุดการเข้าถึงจากภายนอกได้'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'ใน Cloud Shared Responsibility Matrix ไม่ว่าจะเป็นโมเดล IaaS, PaaS หรือ SaaS องค์กรลูกค้ายังคงต้องรับผิดชอบเรื่องข้อมูล (Data), การตั้งค่าสิทธิ์การเข้าถึง (Access Policies) และการจัดการตัวตน (IAM/MFA) เสมอ แม้ใน PaaS ผู้ให้บริการจะรับช่วงดูแลฮาร์ดแวร์ ระบบปฏิบัติการ และรันไทม์ฐานข้อมูลให้แล้ว แต่การเปิดเข้าถึงสาธารณะและไม่เปิด MFA เป็นความผิดพลาดฝั่งการตั้งค่าของลูกค้า',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: ในโมเดล PaaS ผู้ให้บริการคลาวด์รับผิดชอบความมั่นคงทางกายภาพ ไฮเปอร์ไวเซอร์ ระบบปฏิบัติการ และการแพตช์รันไทม์ฐานข้อมูล แต่ไม่ได้รับผิดชอบสิทธิ์ IAM หรือไฟร์วอลล์ระดับข้อมูลที่ลูกค้าตั้งค่าเอง ตัวเลือกนี้จะถูกต้องหากเหตุการณ์เกิดจากช่องโหว่ที่ไม่ได้แพตช์ในระบบปฏิบัติการหรือซอฟต์แวร์ฐานข้อมูลที่ CSP บริหารจัดการ',
      c2: 'ไม่ถูกต้อง: ใน PaaS ลูกค้าไม่ได้จัดการ OS และเหตุการณ์นี้ไม่ได้เกิดจากบั๊กของเคอร์เนล แต่เกิดจากการเปิดสิทธิ์เครือข่ายสาธารณะและไม่เปิด MFA ตัวเลือกนี้จะเหมาะกับสถานการณ์ที่องค์กรจัดการระบบปฏิบัติการเองบน On-Premises หรือ IaaS และพบช่องโหว่ระดับ OS',
      c3: 'ถูกต้อง: ลูกค้าเป็นผู้รับผิดชอบสูงสุดต่อ Data, Accounts/IAM, MFA และ Access Configuration ในทุกโมเดลบริการคลาวด์ รวมถึง PaaS',
      c4: 'ไม่ถูกต้อง: ผู้ผลิตฮาร์ดแวร์ศูนย์ข้อมูลไม่ได้เป็นผู้ตั้งค่าสิทธิ์การเข้าถึงฐานข้อมูลบนคลาวด์ให้ลูกค้า ตัวเลือกนี้จะเกี่ยวข้องในกรณีที่พบข้อบกพร่องระดับเฟิร์มแวร์หรือฮาร์ดแวร์ในโครงสร้างพื้นฐาน On-Premises ที่องค์กรจัดซื้อมาติดตั้งเอง'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจผิดว่าเมื่อย้ายจาก IaaS ไปใช้ PaaS หรือ SaaS แล้ว ผู้ให้บริการคลาวด์จะรับผิดชอบความปลอดภัยทั้งหมดรวมถึงการตั้งค่าสิทธิ์ผู้ใช้และการเข้าถึงข้อมูลของลูกค้าด้วย',
    relatedLessonIds: ['L3-01', 'L5-01'],
    tags: ['cloud', 'shared-responsibility', 'paas', 'iam']
  },
  {
    id: 'Q3-002',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A retail enterprise operates 90 regional stores that run automated checkout scanners and real-time fraud scoring at each register. Currently, all transactions are routed over a wide-area network to a single central data center for processing, causing multi-second checkout delays during peak hours and complete register halts whenever a branch internet circuit degrades. Which architectural adjustment BEST improves responsiveness and local resilience?',
    promptTh:
      'องค์กรค้าปลีกแห่งหนึ่งมีสาขา 90 แห่งที่ใช้เครื่องคิดเงินอัตโนมัติและระบบให้คะแนนความเสี่ยงการทุจริตแบบเรียลไทม์ที่จุดชำระเงิน ปัจจุบันธุรกรรมทั้งหมดถูกส่งผ่านเครือข่ายระยะไกลกลับไปประมวลผลที่ศูนย์ข้อมูลกลางเพียงแห่งเดียว ทำให้เกิดความหน่วงหลายวินาทีในช่วงเวลาเร่งด่วนและเครื่องคิดเงินหยุดทำงานทั้งหมดเมื่อสายอินเทอร์เน็ตของสาขาขัดข้อง การปรับเปลี่ยนสถาปัตยกรรมใดช่วยเพิ่มความเร็วในการตอบสนอง (Responsiveness) และความต่อเนื่องเฉพาะจุดได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Adopt a decentralized edge architecture that processes checkout validation locally at each store before synchronizing summaries centrally',
        textTh: 'ปรับใช้สถาปัตยกรรมแบบกระจายตัวที่ขอบเครือข่าย (Decentralized Edge) เพื่อประมวลผลการตรวจสอบการชำระเงินภายในแต่ละสาขาก่อนส่งข้อมูลสรุปกลับส่วนกลาง'
      },
      {
        id: 'c2',
        textEn: 'Consolidate all branch authentication and point-of-sale workloads into a single Type 2 hypervisor cluster at headquarters',
        textTh: 'รวมศูนย์การยืนยันตัวตนและภาระงานจุดขายทั้งหมดไว้ในคลัสเตอร์ Type 2 Hypervisor เครื่องเดียวที่สำนักงานใหญ่'
      },
      {
        id: 'c3',
        textEn: 'Convert the central data center workload into a serverless function triggered sequentially per scanned barcode',
        textTh: 'แปลงภาระงานที่ศูนย์ข้อมูลกลางให้เป็นฟังก์ชัน Serverless ที่ถูกเรียกทำงานทีละครั้งต่อการสแกนบาร์โค้ดแต่ละรายการ'
      },
      {
        id: 'c4',
        textEn: 'Air-gap every store register from all external networks while manually transporting transaction logs via USB drives',
        textTh: 'แยกเครื่องคิดเงินของทุกสาขาออกจากเครือข่ายภายนอกทั้งหมดแบบ Air-gap แล้วขนส่งบันทึกธุรกรรมด้วยตนเองผ่านไดรฟ์ USB'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'การปรับเป็น Decentralized / Edge Architecture นำการประมวลผลมาไว้ใกล้จุดใช้งานที่สาขา ช่วยลด Latency (ตอบโจทย์ Responsiveness) และลดการพึ่งพาศูนย์กลาง (ลด Single Point of Failure เมื่อ WAN ขัดข้อง) ส่วนตัวเลือกอื่นยังคงรวมศูนย์ทำให้เกิดความหน่วงข้ามเครือข่ายหรือตัดการเชื่อมต่อจนใช้งานจริงในร้านค้าปลีกไม่ได้',
    choiceRationales: {
      c1: 'ถูกต้อง: สถาปัตยกรรมแบบ Decentralized / Edge ลดความหน่วงของการส่งข้อมูลข้าม WAN และทำให้สาขาทำงานต่อได้แม้สายเชื่อมส่วนกลางมีปัญหา',
      c2: 'ไม่ถูกต้อง: การรวมศูนย์ไว้ที่สำนักงานใหญ่ยังคงปัญหาคอขวดและความหน่วงบนสาย WAN รวมถึงเพิ่มความเสี่ยง Single Point of Failure อีกทั้ง Type 2 Hypervisor ไม่เหมาะกับงาน Production ระดับองค์กร ตัวเลือกนี้ (แบบ Centralized) จะเหมาะกับกรณีที่ต้องการคุมมาตรฐานนโยบายและเฝ้าระวังแบบรวมศูนย์ในองค์กรที่มีเครือข่ายเสถียรสูง',
      c3: 'ไม่ถูกต้อง: การเรียก Serverless ข้าม WAN ต่อบาร์โค้ดยิ่งเผชิญปัญหา Cold Start และความหน่วงเครือข่ายไม่ตอบโจทย์สายเชื่อมขัดข้อง Serverless เหมาะกับงาน Event-driven บนคลาวด์ที่ทราฟฟิกไม่สม่ำเสมอและไม่ต้องการดูแล OS',
      c4: 'ไม่ถูกต้อง: การทำ Air-gap เครื่องคิดเงินทำให้ไม่สามารถเชื่อมต่อระบบชำระเงินออนไลน์หรืออัปเดตข้อมูลสินค้าแบบเรียลไทม์ได้ Air-gap เหมาะกับระบบความลับระดับสูงหรือระบบควบคุมโครงสร้างพื้นฐานสำคัญที่ไม่ต้องสื่อสารกับภายนอก'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนมักเข้าใจว่า Centralized Architecture ดีกว่าเสมอในทุกกรณีเพราะบริหารจัดการง่าย แต่ในงานที่ต้องการ Low Latency และความทนทานต่อ WAN ล่ม สถาปัตยกรรม Decentralized/Edge ให้ Responsiveness ที่เหนือกว่า',
    relatedLessonIds: ['L3-01', 'L3-07'],
    tags: ['centralized-vs-decentralized', 'responsiveness', 'edge', 'architecture']
  },
  {
    id: 'Q3-003',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'A software team migrates an irregular invoice-parsing utility to a Serverless Function as a Service (FaaS) model so they only pay during active execution and no longer manage OS patching. Which TWO architectural or security considerations are MOST relevant to this Serverless deployment? (Choose two.)',
    promptTh:
      'ทีมพัฒนาซอฟต์แวร์ย้ายเครื่องมือประมวลผลใบแจ้งหนี้ที่ใช้งานไม่สม่ำเสมอไปสู่รูปแบบ Serverless Function as a Service (FaaS) เพื่อให้จ่ายค่าบริการเฉพาะช่วงที่ประมวลผลจริงและไม่ต้องดูแลการแพตช์ระบบปฏิบัติการอีกต่อไป ข้อพิจารณาด้านสถาปัตยกรรมหรือความปลอดภัย 2 ข้อใดที่เกี่ยวข้องมากที่สุดกับการใช้งาน Serverless รูปแบบนี้? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Maintaining manual guest operating system patch schedules inside each function instance',
        textTh: 'การดูแลตารางอัปเดตแพตช์ระบบปฏิบัติการ Guest OS ด้วยตนเองภายในแต่ละอินสแตนซ์ของฟังก์ชัน'
      },
      {
        id: 'c2',
        textEn: 'Enforcing least-privilege IAM roles and validating event-source inputs to prevent privilege abuse',
        textTh: 'การจำกัดสิทธิ์ IAM Role แบบเท่าที่จำเป็นและการตรวจสอบอินพุตจาก Event Source เพื่อป้องกันการใช้สิทธิ์เกินขอบเขต'
      },
      {
        id: 'c3',
        textEn: 'Provisioning redundant uninterruptible power supplies (UPS) for individual compute functions',
        textTh: 'การจัดหาเครื่องสำรองไฟฟ้า (UPS) แบบซ้ำซ้อนสำหรับฟังก์ชันการประมวลผลแต่ละตัว'
      },
      {
        id: 'c4',
        textEn: 'Accounting for cold-start initialization delays and potential cloud provider vendor lock-in',
        textTh: 'การคำนึงถึงความหน่วงจากการเริ่มทำงานหลังพัก (Cold Start) และความเสี่ยงการผูกติดผู้ให้บริการคลาวด์ (Vendor Lock-in)'
      },
      {
        id: 'c5',
        textEn: 'Preventing VM escape vulnerabilities across a customer-managed Type 1 hypervisor',
        textTh: 'การป้องกันช่องโหว่ VM Escape บน Type 1 Hypervisor ที่องค์กรลูกค้าเป็นผู้ติดตั้งและดูแลเอง'
      }
    ],
    correctChoiceIds: ['c2', 'c4'],
    explanationTh:
      'ในสถาปัตยกรรม Serverless (FaaS) ผู้ให้บริการคลาวด์ดูแลฮาร์ดแวร์ ไฟฟ้า และการแพตช์ OS ทั้งหมด ทำให้จุดเสี่ยงหลักของลูกค้าเปลี่ยนไปอยู่ที่ Over-privileged IAM Roles, ช่องโหว่จาก Event Injection และ Dependencies ในโค้ด รวมถึงข้อจำกัดเชิงปฏิบัติการอย่าง Cold Start และ Vendor Lock-in ที่ผูกกับบริการของ CSP รายนั้น',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: ข้อดีของ Serverless คือ CSP จัดการการแพตช์ OS และรันไทม์ให้ทั้งหมด ลูกค้าไม่ต้องแพตช์ Guest OS เอง ตัวเลือกนี้เหมาะกับระบบ On-Premises หรือโมเดล IaaS Virtual Machines',
      c2: 'ถูกต้อง: ฟังก์ชัน Serverless มักถูกผูกสิทธิ์ IAM เพื่อเข้าถึง Storage หรือฐานข้อมูล จึงต้องคุม Least Privilege และกรองข้อมูลจาก Event Source อย่างเข้มงวด',
      c3: 'ไม่ถูกต้อง: ระบบไฟฟ้า (Power/UPS) เป็นความรับผิดชอบของ CSP ในคลาวด์สาธารณะ ตัวเลือกนี้เหมาะกับการออกแบบศูนย์ข้อมูล On-Premises หรือ Edge',
      c4: 'ถูกต้อง: ความหน่วงจาก Cold Start เมื่อฟังก์ชันหยุดพักนานและการพึ่งพา Event Trigger เฉพาะค่ายจนเกิด Vendor Lock-in เป็นข้อพิจารณาสำคัญของ Serverless',
      c5: 'ไม่ถูกต้อง: ใน Serverless ลูกค้าไม่ได้บริหารจัดการ Hypervisor เอง ตัวเลือกนี้เหมาะกับองค์กรที่ดูแลโครงสร้างพื้นฐาน Virtualization แบบ On-Premises หรือ Private Cloud'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจว่า Serverless ไร้ความเสี่ยงด้านโครงสร้างพื้นฐานและไม่จำเป็นต้องคุมสิทธิ์ IAM หรือกังวลเรื่อง Latency จาก Cold Start',
    relatedLessonIds: ['L3-01', 'L4-09'],
    tags: ['serverless', 'faas', 'iam', 'vendor-lock-in']
  },
  {
    id: 'Q3-004',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A multi-tenant hosting provider is designing compute isolation for competing corporate clients running custom kernel modules and legacy binary workloads. Security compliance prohibits tenants from sharing an operating system kernel so that a kernel-level exploit in one client environment cannot directly escalate to the host or neighboring tenants. Which compute model BEST meets this isolation requirement?',
    promptTh:
      'ผู้ให้บริการโฮสติ้งแบบหลายผู้เช่า (Multi-tenant) กำลังออกแบบการแยกส่วนการประมวลผลสำหรับลูกค้าองค์กรที่เป็นคู่แข่งกันซึ่งรันโมดูลเคอร์เนลเฉพาะทางและไบนารีรุ่นเก่า ข้อกำหนดด้านความปลอดภัยห้ามไม่ให้ผู้เช่าใช้เคอร์เนลของระบบปฏิบัติการร่วมกัน เพื่อป้องกันไม่ให้การโจมตีระดับเคอร์เนลในสภาพแวดล้อมของลูกค้ารายหนึ่งยกระดับสิทธิ์ไปยังเครื่องโฮสต์หรือลูกค้ารายอื่นได้โดยตรง รูปแบบการประมวลผลใดตอบโจทย์การแยกส่วนนี้ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Deploying all client workloads as standard Linux containers managed by an orchestrator on a single host OS',
        textTh: 'ปรับใช้ภาระงานของลูกค้าทุกรายในรูปแบบ Linux Containers มาตรฐานที่จัดการผ่าน Orchestrator บน Host OS เดียวกัน'
      },
      {
        id: 'c2',
        textEn: 'Packaging every client application as serverless FaaS functions sharing a common runtime environment',
        textTh: 'บรรจุแอปพลิเคชันของลูกค้าแต่ละรายเป็นฟังก์ชัน Serverless FaaS ที่ใช้สภาพแวดล้อมรันไทม์ร่วมกัน'
      },
      {
        id: 'c3',
        textEn: 'Running client services as microservices inside the same host namespace separated only by application API tokens',
        textTh: 'รันบริการของลูกค้าเป็น Microservices ภายใน Host Namespace เดียวกันโดยแยกเพียง API Tokens ระดับแอปพลิเคชัน'
      },
      {
        id: 'c4',
        textEn: 'Running separate virtual machines (VMs) with dedicated guest operating systems on a Type 1 bare-metal hypervisor',
        textTh: 'รัน Virtual Machines (VMs) แยกแต่ละเครื่องพร้อม Guest OS ของตนเองบน Type 1 Bare-metal Hypervisor'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'Virtualization ด้วย Type 1 Hypervisor ให้การแยกส่วนระดับฮาร์ดแวร์เสมือนและทำให้แต่ละ VM มี Guest OS Kernel เป็นของตนเอง รองรับโมดูลเคอร์เนลเฉพาะทางและกันการทะลุข้าม Kernel ได้ดีกว่า Container ซึ่งแชร์ Host OS Kernel ร่วมกัน',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Containers แชร์ Host OS Kernel ร่วมกัน จึงไม่รองรับโมดูลเคอร์เนลแยกอิสระต่อผู้เช่าและมีเส้นแบ่งการแยกส่วนบางกว่า VM (เสี่ยง Container Breakout หาก Kernel มีช่องโหว่); Containers เหมาะกับงาน Microservices ที่ต้องการเปิด-ปิดเร็วและน้ำหนักเบาภายใต้ระดับความเชื่อถือเดียวกัน',
      c2: 'ไม่ถูกต้อง: Serverless FaaS ไม่ได้ให้สิทธิ์รันโมดูลเคอร์เนลเฉพาะของลูกค้าและใช้รันไทม์ที่ผู้ให้บริการจัดเตรียมให้; โมเดลนี้เหมาะกับโค้ดฟังก์ชันสั้นๆ แบบ Event-driven ที่ต้องการปรับขยายอัตโนมัติและไม่ต้องดูแลระบบปฏิบัติการ',
      c3: 'ไม่ถูกต้อง: การแยกเพียง API Tokens ใน Namespace เดียวกันไม่ได้แยกขอบเขตระดับระบบปฏิบัติการหรือเคอร์เนล; วิธีนี้เหมาะสำหรับคุมสิทธิ์ระดับแอปพลิเคชันภายใน Microservices ที่โครงสร้างพื้นฐานมีระดับความเชื่อถือเดียวกันอยู่แล้ว',
      c4: 'ถูกต้อง: แต่ละ VM บน Type 1 Hypervisor มี Guest OS และ Kernel แยกขาดจากกัน ทำให้เหมาะสมที่สุดสำหรับ Multi-tenant ที่ห้ามแชร์ Kernel และต้องรันโมดูลเฉพาะทาง'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนว่า Containers มีระดับการแยกส่วนเทียบเท่ากับ Virtual Machines โดยลืมไปว่า Containers ยังคงใช้ Host OS Kernel ร่วมกัน',
    relatedLessonIds: ['L3-01', 'L2-05'],
    tags: ['virtualization', 'containers', 'hypervisor', 'isolation']
  },
  {
    id: 'Q3-005',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'An enterprise runs multi-region cloud environments that repeatedly suffer from configuration drift after engineers manually modify security groups in the web console. A recent audit also flagged hardcoded database passwords in deployment scripts and noted slow recovery times when rebuilding compromised environments. Which approach BEST eliminates configuration drift and accelerates recovery while keeping credentials secure?',
    promptTh:
      'องค์กรหนึ่งใช้งานสภาพแวดล้อมคลาวด์หลายภูมิภาคและประสบปัญหา Configuration Drift ซ้ำๆ จากการที่วิศวกรเข้าไปแก้ไข Security Groups ด้วยตนเองผ่านหน้าเว็บคอนโซล นอกจากนี้ผลการตรวจสอบล่าสุดยังพบรหัสผ่านฐานข้อมูลถูกฝังไว้ในสคริปต์ติดตั้งและพบว่าระยะเวลากู้คืนเมื่อต้องสร้างสภาพแวดล้อมใหม่หลังถูกโจมตีทำได้ช้า แนวทางใดช่วยขจัดปัญหา Configuration Drift และเร่งการกู้คืนได้รวดเร็วที่สุดโดยยังคงความปลอดภัยของข้อมูลลับ?',
    choices: [
      {
        id: 'c1',
        textEn: 'Document manual firewall setup procedures in a wiki and require quarterly spreadsheet audits of cloud consoles',
        textTh: 'จัดทำคู่มือขั้นตอนการตั้งค่าไฟร์วอลล์แบบทำมือไว้ในวิกิและกำหนดให้ตรวจสอบหน้าคอนโซลคลาวด์ลงตารางทุกไตรมาส'
      },
      {
        id: 'c2',
        textEn: 'Adopt version-controlled declarative Infrastructure as Code (IaC) templates with CI/CD static scanning and external secrets management',
        textTh: 'นำเทมเพลต Infrastructure as Code (IaC) แบบ Declarative ที่เก็บใน Version Control พร้อมการสแกนโค้ดใน CI/CD และระบบจัดการ Secrets ภายนอกมาใช้งาน'
      },
      {
        id: 'c3',
        textEn: 'Disable automated deployment pipelines and store plaintext password files inside golden virtual machine images',
        textTh: 'ปิดใช้งานไปป์ไลน์การปรับใช้ระบบอัตโนมัติและเก็บไฟล์รหัสผ่านแบบ Plaintext ไว้ภายในอิมเมจแม่แบบของ Virtual Machine แทน'
      },
      {
        id: 'c4',
        textEn: 'Migrate all cloud workloads onto unsegmented physical on-premises servers configured through local serial consoles',
        textTh: 'ย้ายภาระงานคลาวด์ทั้งหมดกลับมาบนเซิร์ฟเวอร์กายภาพ On-Premises ที่ไม่แบ่งส่วนเครือข่ายและตั้งค่าผ่านคอนโซลเฉพาะเครื่อง'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'Infrastructure as Code (IaC) แบบ Declarative ใน Version Control ช่วยให้สร้างโครงสร้างพื้นฐานซ้ำได้เหมือนกันทุกภูมิภาค (แก้ Configuration Drift) และสร้างใหม่หลังเกิดเหตุได้ภายในไม่กี่นาที (Ease of Recovery) เมื่อผสาน Static Analysis ใน CI/CD และดึงรหัสผ่านจาก Secrets Manager/KMS แทนการฝังในสคริปต์ ก็จะแก้ปัญหาข้อมูลลับรั่วไหลในโค้ดได้พร้อมกัน',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การตั้งค่าด้วยมือและตรวจเช็กเป็นรายไตรมาสยังคงปล่อยให้เกิด Human Error และ Configuration Drift ในช่วงเวลาระหว่างรอบตรวจ คู่มือ SOP เหมาะเป็นเอกสารกำกับกระบวนการ แต่ไม่ทดแทน Automation/IaC ในสภาพแวดล้อมหลายภูมิภาค',
      c2: 'ถูกต้อง: IaC + Version Control + CI/CD Static Scanning + External Secrets Management ตอบโจทย์ทั้ง Configuration Drift, Ease of Recovery และความปลอดภัยของ Secrets ครบถ้วน',
      c3: 'ไม่ถูกต้อง: การฝังรหัสผ่านไว้ใน Golden VM Image ทำให้หมุนเวียนกุญแจยากและเสี่ยงถูกดึงข้อมูลหากอิมเมจรั่ว ทั้งยังขาดความคล่องตัวในการอัปเดต Golden Images จะเหมาะกับสภาพแวดล้อมที่มี OS Baseline คงที่โดยไม่ฝัง Secrets ภายใน',
      c4: 'ไม่ถูกต้อง: การย้ายกลับไปตั้งค่าด้วยมือบนเครื่องกายภาพยิ่งทำให้ช้าลงและขาดการแบ่งโซนเครือข่าย On-Premises เหมาะกับงานที่ต้องการควบคุมทางกายภาพหรือข้อกำหนด Data Sovereignty ไม่ใช่เพื่อหนีระบบอัตโนมัติ'
    },
    misconceptionTh:
      'ผู้เรียนมักคิดว่าเพียงนำ IaC มาใช้ก็ปลอดภัยแล้ว โดยละเลยว่าหากไม่สแกนเทมเพลต IaC และเผลอเขียน Secret Key ไว้ในไฟล์โค้ด ช่องโหว่และข้อมูลลับจะถูกแพร่กระจายซ้ำไปยังทุกภูมิภาคทันที',
    relatedLessonIds: ['L3-01', 'L4-10', 'L4-01'],
    tags: ['iac', 'configuration-drift', 'ease-of-recovery', 'secrets']
  },
  {
    id: 'Q3-006',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'After decomposing a monolithic banking portal into 40 independent microservices, the security architect observes that internal east-west traffic and exposed service APIs have expanded substantially. If a single container becomes compromised, unauthenticated internal service calls could allow rapid lateral movement across the cluster. Which architectural enhancement BEST secures these service-to-service communications?',
    promptTh:
      'หลังจากแยกเว็บพอร์ทัลธนาคารแบบ Monolithic ออกเป็น Microservices อิสระจำนวน 40 บริการ สถาปนิกความปลอดภัยพบว่าทราฟฟิกภายในแนวขวาง (East-West Traffic) และจำนวน API ที่เปิดใช้งานเพิ่มขึ้นอย่างมาก หากคอนเทนเนอร์ใดถูกเจาะ การเรียกใช้บริการภายในที่ไม่ได้พิสูจน์ตัวตนอาจเปิดทางให้เคลื่อนที่แนวขวางทั่วคลัสเตอร์ได้อย่างรวดเร็ว การปรับปรุงสถาปัตยกรรมใดช่วยปกป้องการสื่อสารระหว่างบริการเหล่านี้ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Deploy an API gateway at the edge alongside a service mesh enforcing mutual TLS (mTLS) and per-service authorization',
        textTh: 'ติดตั้ง API Gateway ที่ขอบระบบควบคู่กับ Service Mesh ที่บังคับใช้ Mutual TLS (mTLS) และการตรวจสอบสิทธิ์ระดับรายบริการ'
      },
      {
        id: 'c2',
        textEn: 'Consolidate all microservices back onto a single unpatched physical host using shared memory IPC',
        textTh: 'ยุบรวม Microservices ทั้งหมดกลับไปไว้บนเครื่องโฮสต์กายภาพเครื่องเดียวที่ไม่ได้แพตช์โดยใช้หน่วยความจำร่วมกันในการสื่อสาร'
      },
      {
        id: 'c3',
        textEn: 'Rely solely on an external perimeter Layer 4 firewall while permitting unrestricted traffic inside the internal cluster subnet',
        textTh: 'พึ่งพาเฉพาะไฟร์วอลล์ Layer 4 ที่ขอบเครือข่ายภายนอกและอนุญาตให้ทราฟฟิกภายในซับเน็ตของคลัสเตอร์สื่อสารกันได้อย่างอิสระ'
      },
      {
        id: 'c4',
        textEn: 'Disable HTTPS encryption between internal pods to reduce CPU compute overhead during horizontal scaling',
        textTh: 'ปิดการเข้ารหัส HTTPS ระหว่างพอดภายในเพื่อลดภาระการประมวลผล CPU ระหว่างการขยายระบบแนวนอน'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'สถาปัตยกรรม Microservices มี API Attack Surface และ East-West Traffic สูงมาก จึงต้องใช้ API Gateway ควบคุมทางเข้าและใช้ Service Mesh บังคับใช้ mTLS เพื่อยืนยันตัวตนระหว่างบริการ (Zero Trust) ป้องกันการเคลื่อนที่แนวขวางหากมี Microservice หนึ่งถูกบุกรุก',
    choiceRationales: {
      c1: 'ถูกต้อง: API Gateway จัดการทราฟฟิกขาเข้า-ออก ส่วน Service Mesh + mTLS เข้ารหัสและพิสูจน์ตัวตนทุกการเรียกใช้ระหว่าง Microservices ลดความเสี่ยง Lateral Movement',
      c2: 'ไม่ถูกต้อง: การยุบกลับเป็นระบบเดียวที่ไม่ได้แพตช์เป็นการเพิ่ม Blast Radius และเปิดช่องโหว่ร้ายแรง การใช้ระบบ Monolithic อาจเหมาะกับแอปพลิเคชันขนาดเล็กที่ไม่มีความซับซ้อนในการปรับขยาย แต่ไม่ใช่การถอยหลังโดยไม่แพตช์',
      c3: 'ไม่ถูกต้อง: Perimeter Firewall กรองได้เฉพาะ North-South Traffic แต่ไม่สามารถควบคุม East-West Traffic ภายในคลัสเตอร์ได้ Layer 4 Perimeter Firewall เหมาะเป็นด่านคัดกรองขอบเขตภายนอกเบื้องต้น',
      c4: 'ไม่ถูกต้อง: การปิดการเข้ารหัสภายในเปิดโอกาสให้ผู้โจมตีดักฟังหรือปลอมแปลงคำขอในคลัสเตอร์ได้ ตัวเลือกนี้อาจมีผู้พิจารณาเฉพาะกรณีระบบปิดที่แยกส่วนเด็ดขาดและขาดแคลน Compute ขั้นรุนแรง แต่ไม่เหมาะกับพอร์ทัลธนาคาร'
    },
    misconceptionTh:
      'ผู้เรียนมักคิดว่าเมื่อมี Perimeter Firewall หน้าคลัสเตอร์แล้ว บริการภายใน Microservices จะปลอดภัยโดยอัตโนมัติและไม่ต้องเข้ารหัสหรือตรวจสิทธิ์กันเอง (East-West Zero Trust)',
    relatedLessonIds: ['L3-01', 'L1-03'],
    tags: ['microservices', 'api-gateway', 'mtls', 'east-west']
  },
  {
    id: 'Q3-007',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A national hospital network is legally required to keep identifiable patient medical records inside its own on-premises data center to meet data sovereignty mandates. However, during seasonal research surges, the hospital needs elastic cloud compute capacity to analyze de-identified datasets without buying extra local servers that sit idle most of the year. Which architecture BEST balances these requirements, and how does risk transference apply?',
    promptTh:
      'เครือข่ายโรงพยาบาลระดับชาติมีข้อกำหนดทางกฎหมายให้เก็บรักษาเวชระเบียนที่ระบุตัวตนผู้ป่วยได้ไว้ภายในศูนย์ข้อมูล On-Premises ของตนเองเพื่อให้สอดคล้องกับหลัก Data Sovereignty แต่ในช่วงฤดูกาลวิจัยที่มีภาระงานพุ่งสูง โรงพยาบาลต้องการกำลังประมวลผลที่ยืดหยุ่นบนคลาวด์เพื่อวิเคราะห์ชุดข้อมูลที่ลบตัวตนออกแล้วโดยไม่ต้องซื้อเซิร์ฟเวอร์เพิ่มมาทิ้งไว้เปล่าตลอดปี สถาปัตยกรรมใดตอบโจทย์ทั้งสองด้านได้ดีที่สุด และหลัก Risk Transference นำมาใช้ได้อย่างไร?',
    choices: [
      {
        id: 'c1',
        textEn: 'Full public SaaS migration, which transfers all regulatory and legal accountability for patient data to the provider',
        textTh: 'ย้ายระบบทั้งหมดขึ้น Public SaaS ซึ่งช่วยโอนย้ายความรับผิดชอบทางกฎหมายและข้อกำหนดทั้งหมดของข้อมูลผู้ป่วยไปให้ผู้ให้บริการ'
      },
      {
        id: 'c2',
        textEn: 'Fully air-gapped on-premises computing, which removes capital expenditure while allowing instant cloud bursting',
        textTh: 'ใช้ระบบ On-Premises แบบ Air-gapped เต็มรูปแบบ ซึ่งช่วยลดค่าใช้จ่ายลงทุนเริ่มต้นและขยายกำลังขึ้นคลาวด์ได้ทันที'
      },
      {
        id: 'c3',
        textEn: 'Decentralized employee BYOD processing, which shifts physical data center power costs onto local utility grids',
        textTh: 'กระจายการประมวลผลไปยังอุปกรณ์ส่วนตัว BYOD ของพนักงาน เพื่อผลักภาระค่าไฟฟ้าของศูนย์ข้อมูลไปยังระบบไฟท้องถิ่น'
      },
      {
        id: 'c4',
        textEn: 'A hybrid cloud architecture that keeps regulated records on-premises while bursting anonymized analytics to public cloud, transferring physical infrastructure risk without transferring legal accountability',
        textTh: 'สถาปัตยกรรม Hybrid Cloud ที่เก็บข้อมูลตามข้อกำหนดไว้แบบ On-Premises และขยายงานวิเคราะห์ข้อมูลนิรนามขึ้น Public Cloud โดยโอนความเสี่ยงโครงสร้างพื้นฐานทางกายภาพแต่ไม่โอนความรับผิดชอบทางกฎหมาย'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'Hybrid Cloud ผสานจุดแข็งของ On-Premises (ควบคุมข้อมูลที่มีข้อกำหนด Data Sovereignty) และ Public Cloud (Scalability / Cost efficiency แบบ OpEx ในช่วง Cloud Bursting) ได้ลงตัว ที่สำคัญคือตามหลัก Risk Transference องค์กรสามารถโอนความเสี่ยงในการดูแลฮาร์ดแวร์และไฟฟ้าไปยังผู้ให้บริการคลาวด์ได้ แต่ไม่สามารถโอนความรับผิดชอบทางกฎหมาย (Legal Accountability) หากข้อมูลรั่วไหลได้',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การย้ายข้อมูลระบุตัวตนขึ้น Public SaaS ขัดต่อเงื่อนไขเก็บข้อมูลใน On-Premises ของโจทย์ และองค์กรไม่สามารถโอนความรับผิดชอบทางกฎหมาย (Accountability) ไปให้ CSP ได้ โมเดล SaaS จะเหมาะกับงานทั่วไปที่อนุญาตให้ประมวลผลบนคลาวด์ได้',
      c2: 'ไม่ถูกต้อง: ระบบ Air-gapped ตัดขาดการเชื่อมต่อภายนอกจึงทำ Cloud Bursting ไม่ได้ และ On-Premises ต้องลงทุน CapEx สูง Air-gap เหมาะกับระบบลับสุดยอดหรือโครงสร้างพื้นฐานที่ห้ามต่ออินเทอร์เน็ต',
      c3: 'ไม่ถูกต้อง: การนำข้อมูลวิจัยหรือเวชระเบียนไปประมวลผลบนเครื่องส่วนตัวพนักงานเพิ่มความเสี่ยงข้อมูลรั่วไหลอย่างรุนแรง BYOD เหมาะกับงานสำนักงานทั่วไปภายใต้การคุมด้วย MDM ไม่ใช่การทดแทน Compute Cluster',
      c4: 'ถูกต้อง: Hybrid Cloud ตอบโจทย์ทั้ง Data Sovereignty, Cost/Scalability และสะท้อนขอบเขตที่แท้จริงของ Risk Transference ได้อย่างแม่นยำ'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนว่า Risk Transference ในระบบคลาวด์หมายถึงการโอนความรับผิดชอบทางกฎหมายทั้งหมดไปยังผู้ให้บริการ ซึ่งในความเป็นจริงโอนได้เพียงความเสี่ยงเชิงปฏิบัติการบางส่วนเท่านั้น',
    relatedLessonIds: ['L3-01', 'L3-06', 'L5-03'],
    tags: ['hybrid-cloud', 'risk-transference', 'scalability', 'cost']
  },
  {
    id: 'Q3-008',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'exam-ready',
    promptEn:
      'An organization operates an on-premises security analytics cluster that performs real-time deep packet inspection (DPI) and log correlation. During recent power brownouts and peak traffic spikes, single-power-supply nodes shut down unexpectedly and CPU saturation caused packet drops on the inspection appliances. Which TWO architectural measures directly address these availability, compute, and power limitations? (Choose two.)',
    promptTh:
      'องค์กรแห่งหนึ่งใช้งานคลัสเตอร์วิเคราะห์ความปลอดภัยแบบ On-Premises เพื่อทำ Deep Packet Inspection (DPI) และประมวลผล Log แบบเรียลไทม์ ในช่วงที่เกิดไฟตกและทราฟฟิกพุ่งสูงเมื่อไม่นานมานี้ โหนดที่มีแหล่งจ่ายไฟชุดเดียวดับลงกะทันหันและการใช้ CPU เต็มขีดจำกัดทำให้เครื่องตรวจสอบทำแพ็กเก็ตหล่นหาย มาตรการเชิงสถาปัตยกรรม 2 ข้อใดที่แก้ไขข้อจำกัดด้าน Availability, Compute และ Power เหล่านี้โดยตรง? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Provision redundant dual power distribution units (PDUs), uninterruptible power supplies (UPS), and backup generators',
        textTh: 'จัดเตรียมระบบจ่ายไฟสำรองแบบคู่ (Dual PDUs), เครื่องสำรองไฟฟ้า (UPS) และเครื่องกำเนิดไฟฟ้าสำรอง'
      },
      {
        id: 'c2',
        textEn: 'Replace inline DPI hardware with unencrypted plaintext SNMP polling over public internet links',
        textTh: 'แทนที่อุปกรณ์ DPI แบบ Inline ด้วยการดึงข้อมูล SNMP แบบไม่เข้ารหัสผ่านลิงก์อินเทอร์เน็ตสาธารณะ'
      },
      {
        id: 'c3',
        textEn: 'Deploy all critical analytics tools inside Type 2 hypervisors running on administrative employee laptops',
        textTh: 'ติดตั้งเครื่องมือวิเคราะห์สำคัญทั้งหมดบน Type 2 Hypervisor ที่รันบนแล็ปท็อปของผู้ดูแลระบบ'
      },
      {
        id: 'c4',
        textEn: 'Implement an air-gapped network that disconnects all log sources from the security analytics cluster',
        textTh: 'ใช้เครือข่ายแบบ Air-gapped ที่ตัดการเชื่อมต่อแหล่งส่ง Log ทั้งหมดออกจากคลัสเตอร์วิเคราะห์ความปลอดภัย'
      },
      {
        id: 'c5',
        textEn: 'Design an active-active high availability cluster with scaled CPU/RAM compute capacity and load balancing',
        textTh: 'ออกแบบคลัสเตอร์ High Availability แบบ Active-Active ที่ขยายขีดความสามารถ CPU/RAM พร้อมตัวกระจายโหลด'
      }
    ],
    correctChoiceIds: ['c1', 'c5'],
    explanationTh:
      'ปัญหาการดับจากไฟตกต้องแก้ที่มิติ Power ด้วย Dual PDUs, UPS และเครื่องปั่นไฟสำรอง ส่วนปัญหา CPU เต็มจนทำแพ็กเก็ตหล่นและการล่มของโหนดเดี่ยวต้องแก้ที่มิติ Compute และ High Availability ด้วยการขยายสเปกและทำ Active-Active Clustering เพื่อขจัด Single Point of Failure',
    choiceRationales: {
      c1: 'ถูกต้อง: Dual PDUs, UPS และ Generator ป้องกันอุปกรณ์ On-Premises จากไฟตกและไฟดับ ช่วยรักษาเสถียรภาพด้าน Power และ Availability',
      c2: 'ไม่ถูกต้อง: การใช้ SNMP แบบไม่เข้ารหัสผ่านเน็ตสาธารณะเปิดช่องโหว่ข้อมูลรั่วไหลและไม่ได้ช่วยขยายกำลังประมวลผล DPI; การใช้ SNMPv3 แบบเข้ารหัสเหมาะสำหรับดึงค่าสถานะอุปกรณ์เครือข่ายภายในเพื่อทำ Monitoring',
      c3: 'ไม่ถูกต้อง: Type 2 Hypervisor บนแล็ปท็อปมีทรัพยากรจำกัดและขาด Redundancy ไม่เหมาะกับงาน Production Analytics; ตัวเลือกนี้เหมาะสำหรับห้องแล็บทดสอบหรือการจำลองสภาพแวดล้อมบนเครื่องผู้พัฒนา',
      c4: 'ไม่ถูกต้อง: การตัดแหล่งส่ง Log ออกแบบ Air-gapped ทำให้ระบบวิเคราะห์มองไม่เห็นเหตุการณ์เครือข่าย; Air-gap เหมาะกับระบบควบคุมวิกฤตหรือความลับระดับสูงที่ห้ามเชื่อมต่อเครือข่ายภายนอกเด็ดขาด',
      c5: 'ถูกต้อง: Active-Active HA Clustering และ Compute Sizing ที่เพียงพอรองรับโหลด DPI และทราฟฟิกพุ่งสูงได้โดยไม่เกิด Packet Drop หรือ SPOF'
    },
    misconceptionTh:
      'ผู้เรียนมักมองข้ามปัจจัยทางกายภาพอย่าง Power และขีดความสามารถ Compute โดยคิดว่ามาตรการความปลอดภัยเป็นเพียงซอฟต์แวร์ ทั้งที่ฮาร์ดแวร์คอขวดหรือไฟตกสามารถทำให้อุปกรณ์ป้องกันล่มและปล่อยภัยคุกคามหลุดรอดได้',
    relatedLessonIds: ['L3-01', 'L3-07'],
    tags: ['high-availability', 'compute', 'power', 'on-premises']
  },
  {
    id: 'Q3-009',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A hospital relies on specialized diagnostic imaging scanners powered by embedded operating systems that are no longer supported by the manufacturer (end-of-life). Installing unauthorized OS patches voids regulatory medical certification and risks bricking the hardware, while replacing the equipment requires three years of capital budgeting. Which architectural strategy BEST addresses this inability to patch?',
    promptTh:
      'โรงพยาบาลแห่งหนึ่งต้องใช้งานเครื่องสแกนภาพวินิจฉัยเฉพาะทางที่ใช้ระบบปฏิบัติการแบบฝังตัว (Embedded OS) ซึ่งผู้ผลิตเลิกสนับสนุนแล้ว (End-of-Life) การติดตั้งแพตช์ระบบปฏิบัติการที่ไม่ได้รับอนุญาตจะทำให้ใบรับรองอุปกรณ์ทางการแพทย์เป็นโมฆะและเสี่ยงทำให้อุปกรณ์เสียหายถาวร ขณะที่การจัดซื้อเครื่องทดแทนต้องใช้งบประมาณล่วงหน้าถึงสามปี กลยุทธ์เชิงสถาปัตยกรรมใดรับมือกับข้อจำกัดไม่สามารถแพตช์ได้ (Inability to Patch) นี้ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Install standard enterprise endpoint detection and response (EDR) agents directly onto the embedded scanners',
        textTh: 'ติดตั้งซอฟต์แวร์ Endpoint Detection and Response (EDR) มาตรฐานขององค์กรลงบนเครื่องสแกนแบบฝังตัวโดยตรง'
      },
      {
        id: 'c2',
        textEn: 'Place the embedded scanners into a logically segmented VLAN with strict firewall ACLs and virtual patching compensating controls',
        textTh: 'แยกเครื่องสแกนแบบฝังตัวไว้ใน VLAN แบบ Logical Segmentation ที่มีกฎ Firewall ACLs เข้มงวดและมาตรการชดเชยแบบ Virtual Patching'
      },
      {
        id: 'c3',
        textEn: 'Deploy a cloud-based Web Application Firewall (WAF) exclusively in front of the hospital’s public internet website',
        textTh: 'ติดตั้ง Web Application Firewall (WAF) บนคลาวด์เฉพาะด้านหน้าเว็บไซต์อินเทอร์เน็ตสาธารณะของโรงพยาบาล'
      },
      {
        id: 'c4',
        textEn: 'Schedule monthly automated operating system patching across the scanners during overnight maintenance windows',
        textTh: 'กำหนดตารางอัปเดตแพตช์ระบบปฏิบัติการอัตโนมัติรายเดือนบนเครื่องสแกนในช่วงเวลาบำรุงรักษากลางคืน'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'เมื่อเผชิญภาวะ Inability to Patch บนอุปกรณ์ Embedded/Legacy ที่ลงซอฟต์แวร์หรือแพตช์เองไม่ได้ มาตรการที่ถูกต้องคือการใช้ Logical Segmentation แยกอุปกรณ์ออกจากเครือข่ายทั่วไป ร่วมกับ Firewall ACLs แบบ Least Privilege และ Virtual Patching (ผ่าน IPS/WAF ภายใน) เป็น Compensating Controls โดยไม่ไปแก้ไขซอฟต์แวร์บนเครื่องมือแพทย์โดยตรง',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Embedded OS มักมี Compute/Memory จำกัดและห้ามลงซอฟต์แวร์นอกเหนือการรับรองซึ่งอาจทำให้เครื่องค้างและหลุดมาตรฐานการแพทย์; EDR เหมาะกับเครื่อง Workstation และ Server IT มาตรฐานทั่วไป',
      c2: 'ถูกต้อง: Logical Segmentation + Firewall ACLs + Virtual Patching ลดพื้นที่ผิวการโจมตีและชดเชยช่องโหว่ที่แพตช์ไม่ได้โดยไม่กระทบการทำงานหรือการรับรองของอุปกรณ์',
      c3: 'ไม่ถูกต้อง: WAF ด้านหน้าเว็บไซต์สาธารณะช่วยป้องกันเว็บพอร์ทัลภายนอก แต่ไม่ได้ป้องกันทราฟฟิกภายในที่วิ่งเข้าหาเครื่องสแกนภาพวินิจฉัยแบบฝังตัว; Cloud WAF เหมาะกับการปกป้องเว็บแอปพลิเคชันและ API สาธารณะ',
      c4: 'ไม่ถูกต้อง: โจทย์ระบุว่าอุปกรณ์เป็น End-of-Life ที่ผู้ผลิตไม่ออกแพตช์ให้แล้วและห้ามแก้ไข OS โดยไม่ได้รับอนุญาต; การแพตช์อัตโนมัติตาม Maintenance Window เหมาะกับระบบปฏิบัติการและซอฟต์แวร์ทั่วไปที่ยังมี Vendor Support'
    },
    misconceptionTh:
      'ผู้เรียนบางคนเข้าใจว่าเมื่ออุปกรณ์ขึ้นสถานะ End-of-Life และแพตช์ไม่ได้แล้ว ควรลง Antivirus/EDR หรือบังคับอัปเดตแพตช์เองเพื่อความปลอดภัย แต่สำหรับระบบ Embedded ทางการแพทย์หรือ OT การแยกเครือข่ายชดเชยคือวิธีที่ปลอดภัยที่สุด',
    relatedLessonIds: ['L3-02', 'L3-01', 'L1-01'],
    tags: ['embedded', 'inability-to-patch', 'segmentation', 'compensating-controls']
  },
  {
    id: 'Q3-010',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'An electric utility recently integrated its corporate ERP analytics platform with regional substation SCADA networks to monitor transformer load metrics. To satisfy internal vulnerability audit requirements, a junior analyst proposes running weekly credentialed active vulnerability scans directly across all substation PLCs and RTUs. Why should the security architect reject this proposal FIRST?',
    promptTh:
      'การไฟฟ้าแห่งหนึ่งเพิ่งเชื่อมโยงแพลตฟอร์มวิเคราะห์ ERP ของสำนักงานเข้ากับเครือข่าย SCADA ของสถานีย่อยเพื่อติดตามโหลดหม้อแปลงไฟฟ้า เพื่อตอบสนองข้อกำหนดการตรวจสอบช่องโหว่ภายใน นักวิเคราะห์รุ่นใหม่จึงเสนอให้รัน Active Vulnerability Scan แบบใส่ข้อมูลรับรองทุกสัปดาห์ไปยังอุปกรณ์ PLC และ RTU ทั้งหมดในสถานีย่อยโดยตรง เหตุใดสถาปนิกความปลอดภัยจึงควรปฏิเสธข้อเสนอนี้เป็นอันดับแรก?',
    choices: [
      {
        id: 'c1',
        textEn: 'Active vulnerability scans cannot detect open TCP ports on legacy industrial controllers',
        textTh: 'การสแกนช่องโหว่เชิงรุก (Active Scan) ไม่สามารถตรวจจับพอร์ต TCP ที่เปิดอยู่บนตัวควบคุมอุตสาหกรรมรุ่นเก่าได้'
      },
      {
        id: 'c2',
        textEn: 'Substation SCADA protocols already encrypt and authenticate every Modbus command by default',
        textTh: 'โปรโตคอล SCADA ในสถานีย่อยทำการเข้ารหัสและยืนยันตัวตนทุกคำสั่ง Modbus โดยค่าเริ่มต้นอยู่แล้ว'
      },
      {
        id: 'c3',
        textEn: 'OT safety and availability take precedence, and active scanning packets can crash fragile PLCs and cause physical outages',
        textTh: 'ความปลอดภัยต่อชีวิตและทรัพย์สิน (OT Safety) และความพร้อมใช้งานต้องมาก่อน แพ็กเก็ตจาก Active Scan อาจทำให้ PLC ค้างและเกิดไฟฟ้าดับหรืออุบัติเหตุทางกายภาพได้'
      },
      {
        id: 'c4',
        textEn: 'Compliance audits prohibit using passive network monitoring sensors anywhere inside industrial DMZs',
        textTh: 'การตรวจสอบตามข้อกำหนดสั่งห้ามการใช้เซ็นเซอร์เฝ้าระวังเครือข่ายแบบ Passive ในโซน Industrial DMZ ทุกกรณี'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'ในสภาพแวดล้อม OT/ICS/SCADA ลำดับความสำคัญสูงสุดคือ **Safety และ Availability** ซึ่งต่างจากโลก IT การยิง Active Vulnerability Scan จะส่งแพ็กเก็ตประหลาดหรือจำนวนมากไปยังพอร์ตของ PLC/RTU ซึ่งมักรับภาระไม่ไหวและค้างหรือรีบูตจนเกิดอุบัติเหตุหรือไฟดับได้ จึงต้องปฏิเสธทันทีและเปลี่ยนไปใช้ Passive Network Monitoring แทน',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Active Scanner สามารถสแกนพอร์ต TCP ได้ แต่ปัญหาหลักคือมันอาจทำให้ตัวควบคุมอุตสาหกรรมล่ม Active Scanning เหมาะกับเซิร์ฟเวอร์และเครือข่าย IT ทั่วไปใน Maintenance Window',
      c2: 'ไม่ถูกต้อง: โปรโตคอลอุตสาหกรรมดั้งเดิมอย่าง Modbus หรือ DNP3 รุ่นเก่าส่งข้อมูลเป็น Clear Text และขาดการยืนยันตัวตนในตัว การอ้างว่าเข้ารหัสอยู่แล้วอาจสับสนกับโปรโตคอลยุคใหม่อย่าง OPC UA ที่เปิดโหมดปลอดภัย',
      c3: 'ถูกต้อง: OT Safety และ Availability อยู่เหนือ Confidentiality เสมอ การสแกนเชิงรุกเสี่ยงทำให้ระบบควบคุมกายภาพหยุดทำงาน จึงต้องใช้ Passive Monitoring ผ่าน TAP/SPAN แทน',
      c4: 'ไม่ถูกต้อง: ในทางตรงกันข้าม มาตรฐาน OT (เช่น NIST SP 800-82) แนะนำให้ใช้ Passive Network Monitoring ใน OT และ Industrial DMZ เนื่องจากไม่รบกวนระบบควบคุมจริง; ข้อห้ามจะใช้กับ Active Scanning หรือการต่ออุปกรณ์ที่ส่งแพ็กเก็ตรบกวนบนสายส่งควบคุมโดยตรง'
    },
    misconceptionTh:
      'ผู้เรียนที่คุ้นเคยกับระบบ IT มักนำเครื่องมือสแกนช่องโหว่แบบ Active ไปใช้กับเครือข่าย OT/SCADA โดยไม่ตระหนักว่าแพ็กเก็ตตรวจสอบปกติอาจทำให้อุปกรณ์ PLC ค้างและเกิดอันตรายทางกายภาพได้',
    relatedLessonIds: ['L3-02', 'L4-04'],
    tags: ['ics-scada', 'ot-safety', 'passive-monitoring', 'plc']
  },
  {
    id: 'Q3-011',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'An automated automotive assembly line uses robotic actuators governed by a Real-Time Operating System (RTOS) that must process sensor feedback within strict sub-millisecond deadlines. Why does the engineering team prohibit deploying real-time endpoint antivirus scanning and automated reboot patching on these controllers?',
    promptTh:
      'สายการประกอบรถยนต์อัตโนมัติใช้แขนกลควบคุมด้วยระบบปฏิบัติการแบบเรียลไทม์ (RTOS) ที่ต้องประมวลผลสัญญาณจากเซ็นเซอร์ให้เสร็จสิ้นภายในกรอบเวลาระดับต่ำกว่ามิลลิวินาทีอย่างเคร่งครัด เหตุใดทีมวิศวกรรมจึงห้ามติดตั้งซอฟต์แวร์สแกนไวรัสแบบเรียลไทม์และการแพตช์ที่บังคับรีบูตอัตโนมัติบนตัวควบคุมเหล่านี้?',
    choices: [
      {
        id: 'c1',
        textEn: 'RTOS controllers execute exclusively inside public cloud serverless functions that reject endpoint agents',
        textTh: 'ตัวควบคุม RTOS ทำงานอยู่ภายในฟังก์ชัน Serverless บน Public Cloud เท่านั้นซึ่งไม่อนุญาตให้ลง Endpoint Agent'
      },
      {
        id: 'c2',
        textEn: 'RTOS depends on deterministic timing, and security agent latency or unexpected reboots can cause missed deadlines and physical safety failures',
        textTh: 'RTOS อาศัยความเที่ยงตรงของเวลาตอบสนอง (Deterministic Timing) ความหน่วงจาก Agent ความปลอดภัยหรือการรีบูตกะทันหันอาจทำให้หลุดกรอบเวลาและเกิดอันตรายทางกายภาพ'
      },
      {
        id: 'c3',
        textEn: 'RTOS platforms prioritize confidentiality above availability and automatically encrypt all actuator traffic',
        textTh: 'แพลตฟอร์ม RTOS ให้ความสำคัญกับความลับข้อมูล (Confidentiality) เหนือกว่าความพร้อมใช้งานและเข้ารหัสทราฟฟิกแขนกลทั้งหมดอัตโนมัติ'
      },
      {
        id: 'c4',
        textEn: 'RTOS devices rely on weekly credentialed active vulnerability scans instead of endpoint agents to maintain determinism',
        textTh: 'อุปกรณ์ RTOS อาศัยการสแกนช่องโหว่เชิงรุกแบบใส่ข้อมูลรับรองรายสัปดาห์แทน Endpoint Agent เพื่อรักษาความเที่ยงตรงของเวลา'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'จุดเด่นและข้อกำหนดสำคัญของ RTOS คือ Deterministic Timing (การประมวลผลต้องเสร็จตามเวลาที่กำหนดอย่างแม่นยำ) การติดตั้ง Antivirus ที่สแกนไฟล์แบบเรียลไทม์หรือการบังคับรีบูตจะก่อให้เกิด Latency และหยุดชะงักจนแขนกลทำงานพลาดหรือเป็นอันตรายต่อคนงาน',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: RTOS ทำงานบนฮาร์ดแวร์ฝังตัวหรือตัวควบคุมเฉพาะจุดในโรงงาน/ยานยนต์ ไม่ใช่บน Serverless Cloud; Serverless FaaS เหมาะกับงาน Event-driven บนคลาวด์',
      c2: 'ถูกต้อง: Deterministic Timing คือหัวใจของ RTOS จึงไม่อาจยอมรับ Latency หรือการรีบูตที่ไม่คาดคิดได้ ต้องใช้วิธีแยกเครือข่ายและเฝ้าระวังแบบ Passive ชดเชยแทน',
      c3: 'ไม่ถูกต้อง: RTOS ในระบบควบคุมให้ความสำคัญต่อ Safety และ Availability (Deterministic Timing) สูงสุด เหนือกว่า Confidentiality ซึ่งเป็นลำดับความสำคัญของระบบ IT ทั่วไป',
      c4: 'ไม่ถูกต้อง: Active Vulnerability Scans ส่งแพ็กเก็ตจำนวนมากที่อาจรบกวน Timing หรือทำให้ตัวควบคุม RTOS ค้างได้เช่นกัน ต้องใช้ Passive Monitoring แทน; Active Scanning เหมาะกับเซิร์ฟเวอร์ IT ทั่วไปใน Maintenance Window'
    },
    misconceptionTh:
      'ผู้เรียนอาจคิดว่า RTOS แตกต่างจาก OS ทั่วไปเพียงแค่ขนาดเล็กกว่า แต่ความจริงแล้วเงื่อนไขสำคัญที่สุดคือความแน่นอนด้านเวลาตอบสนอง (Deterministic Timing) ที่ห้ามถูกแทรกแซงด้วยความหน่วงจากซอฟต์แวร์ป้องกัน',
    relatedLessonIds: ['L3-02', 'L4-01'],
    tags: ['rtos', 'deterministic-timing', 'ot-safety', 'availability']
  },
  {
    id: 'Q3-012',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    type: 'msq',
    selectCount: 3,
    difficulty: 'intermediate',
    promptEn:
      'A logistics warehouse deploys 1,200 battery-operated IoT environmental sensors and IP cameras across its loading bays. These devices have minimal compute and power budgets, lack endpoint security agent support, and shipped with identical vendor passwords. Which THREE measures BEST reduce the risk of these IoT devices forming a botnet or serving as an attacker pivot point? (Choose three.)',
    promptTh:
      'คลังสินค้าโลจิสติกส์ติดตั้งเซ็นเซอร์ IoT วัดสภาพแวดล้อมแบบใช้แบตเตอรี่และกล้องวงจรปิด IP จำนวน 1,200 ตัวทั่วบริเวณท่าขนส่ง อุปกรณ์เหล่านี้มีขีดความสามารถด้านการประมวลผลและพลังงานต่ำ ไม่รองรับการติดตั้งซอฟต์แวร์ป้องกันบนเครื่อง และถูกจัดส่งมาพร้อมรหัสผ่านโรงงานที่เหมือนกันทุกตัว มาตรการ 3 ข้อใดช่วยลดความเสี่ยงที่อุปกรณ์ IoT เหล่านี้จะถูกยึดเป็น Botnet หรือจุดกระโดดโจมตี (Pivot Point) ได้ดีที่สุด? (เลือก 3 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Place the IoT fleet onto dedicated logically segmented VLANs with strict firewall rules blocking direct internet access',
        textTh: 'แยกกลุ่มอุปกรณ์ IoT ไปไว้ใน VLAN แบบ Logical Segmentation เฉพาะ พร้อมกฎไฟร์วอลล์ที่ปิดกั้นการออกอินเทอร์เน็ตโดยตรง'
      },
      {
        id: 'c2',
        textEn: 'Install full-disk encryption and memory-intensive EDR agents across every battery-powered sensor',
        textTh: 'ติดตั้งการเข้ารหัสดิสก์เต็มรูปแบบและซอฟต์แวร์ EDR ที่ใช้หน่วยความจำสูงลงบนเซ็นเซอร์แบตเตอรี่ทุกตัว'
      },
      {
        id: 'c3',
        textEn: 'Replace all vendor default credentials with unique strong passwords and disable unnecessary network services',
        textTh: 'เปลี่ยนรหัสผ่านเริ่มต้นจากผู้ผลิตทั้งหมดเป็นรหัสผ่านที่แข็งแรงและไม่ซ้ำกัน พร้อมปิดบริการเครือข่ายที่ไม่จำเป็น'
      },
      {
        id: 'c4',
        textEn: 'Monitor the IoT segment using passive network sensors and NAC device profiling for anomalous traffic',
        textTh: 'เฝ้าระวังส่วนเครือข่าย IoT ด้วยเซ็นเซอร์เครือข่ายแบบ Passive และการระบุตัวตนอุปกรณ์ (NAC Profiling) เพื่อตรวจจับทราฟฟิกผิดปกติ'
      },
      {
        id: 'c5',
        textEn: 'Schedule daily aggressive active vulnerability and exploit scans directly across all battery-powered sensors',
        textTh: 'กำหนดตารางรันการสแกนช่องโหว่เชิงรุกและทดสอบเจาะระบบอัตโนมัติทุกวันไปยังเซ็นเซอร์แบตเตอรี่ทุกตัวโดยตรง'
      }
    ],
    correctChoiceIds: ['c1', 'c3', 'c4'],
    explanationTh:
      'อุปกรณ์ IoT มีทรัพยากร Compute/Power ต่ำและไม่สามารถรัน EDR ได้ การป้องกันที่มีประสิทธิภาพจึงต้องอาศัยการแยกโซนเครือข่าย (Dedicated VLAN + ตัดการเชื่อมต่ออินเทอร์เน็ตตรง), การเปลี่ยน Default Credentials และปิดพอร์ต/บริการส่วนเกิน รวมถึงการทำ Passive Monitoring และ NAC Profiling เพื่อตรวจจับเมื่อมีอุปกรณ์พยายามเคลื่อนที่แนวขวางหรือติดต่อ C2',
    choiceRationales: {
      c1: 'ถูกต้อง: Logical Segmentation และจำกัดทราฟฟิกขาออกช่วยกันไม่ให้อุปกรณ์ IoT ติดต่อเซิร์ฟเวอร์ Botnet หรือกระโดดเข้าสู่เครือข่ายหลักได้',
      c2: 'ไม่ถูกต้อง: เซ็นเซอร์ IoT แบบใช้แบตเตอรี่มี CPU/RAM และพลังงานต่ำมาก ไม่สามารถรัน EDR หรือ Full-disk Encryption เต็มรูปแบบได้; มาตรการนี้เหมาะกับแล็ปท็อปและเซิร์ฟเวอร์ IT ทั่วไป',
      c3: 'ถูกต้อง: รหัสผ่านเริ่มต้นที่เหมือนกันเป็นช่องทางยอดนิยมที่บอตเน็ตใช้ยึดกล้อง IP และอุปกรณ์ IoT การเปลี่ยนรหัสผ่านและปิดพอร์ตที่ไม่ใช้จึงจำเป็นมาก',
      c4: 'ถูกต้อง: Passive Network Sensor และ NAC Profiling ช่วยตรวจจับพฤติกรรมผิดปกติและป้องกันการปลอมแปลงเชื่อมต่อโดยไม่กินแบตเตอรี่หรือ Compute ของอุปกรณ์',
      c5: 'ไม่ถูกต้อง: การยิง Active Scan เชิงรุกรายวันใส่เซ็นเซอร์ IoT พลังงานต่ำอาจทำให้แบตเตอรี่หมดเร็วและทำให้อุปกรณ์ค้าง; Active Vulnerability Scanning เหมาะกับเซิร์ฟเวอร์และแอปพลิเคชัน IT ในช่วง Maintenance Window'
    },
    misconceptionTh:
      'ผู้เรียนมักคิดแก้ปัญหา IoT ด้วยการลงซอฟต์แวร์ป้องกันระดับ Endpoint (EDR/AV) เหมือนเครื่องพีซี แต่แท้จริงแล้วข้อจำกัดด้าน Compute และ Power ของ IoT บังคับให้ต้องใช้การแบ่งส่วนเครือข่ายและ Hardening พื้นฐานแทน',
    relatedLessonIds: ['L3-02', 'L2-05', 'L4-01'],
    tags: ['iot', 'segmentation', 'default-credentials', 'passive-monitoring']
  },
  {
    id: 'Q3-013',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'A large cloud data center deploys Software-Defined Networking (SDN) to automate dynamic micro-segmentation across thousands of ephemeral containers and virtual workloads. During an architecture threat model review, which risk represents the MOST critical single point of compromise specific to the SDN model?',
    promptTh:
      'ศูนย์ข้อมูลคลาวด์ขนาดใหญ่นำระบบ Software-Defined Networking (SDN) มาใช้เพื่อทำ Micro-segmentation แบบไดนามิกโดยอัตโนมัติให้แก่คอนเทนเนอร์และเวิร์กโหลดเสมือนนับพันรายการ ระหว่างการทบทวนแบบจำลองภัยคุกคามทางสถาปัตยกรรม ความเสี่ยงใดถือเป็นจุดล้มเหลวหรือจุดถูกยึดครองเดี่ยว (Single Point of Compromise) ที่วิกฤตที่สุดเฉพาะของโมเดล SDN?',
    choices: [
      {
        id: 'c1',
        textEn: 'Horizontal scaling of container workloads increases east-west API latency across switches located in separate racks',
        textTh: 'การขยายคอนเทนเนอร์ในแนวนอนเพิ่มความหน่วงของ API แนวขวางระหว่างสวิตช์ที่ติดตั้งคนละตู้แร็ค'
      },
      {
        id: 'c2',
        textEn: 'Virtual overlay micro-segmentation removes the need for perimeter firewalls against inbound internet threats',
        textTh: 'การทำ Micro-segmentation ด้วย Virtual Overlay ทำให้ไม่จำเป็นต้องใช้ไฟร์วอลล์ขอบเขตเพื่อกันภัยคุกคามขาเข้าจากอินเทอร์เน็ต'
      },
      {
        id: 'c3',
        textEn: 'Switch-by-switch manual CLI rule changes introduce configuration drift across physical access switches',
        textTh: 'การปรับกฎผ่าน CLI ด้วยตนเองทีละสวิตช์ก่อให้เกิด Configuration Drift ข้ามสวิตช์กายภาพหลายตัว'
      },
      {
        id: 'c4',
        textEn: 'Compromise of the centralized SDN controller (control plane) allows an attacker to alter routing and security policies across the entire data plane',
        textTh: 'การถูกยึดครองของ SDN Controller ส่วนกลาง (Control Plane) ทำให้ผู้โจมตีสามารถเปลี่ยนแปลงเส้นทางและนโยบายความปลอดภัยทั่วทั้ง Data Plane ได้ทันที'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'จุดเด่นของ SDN คือการแยก Control Plane ออกจาก Data Plane แล้วรวมศูนย์อำนาจตัดสินใจไว้ที่ SDN Controller เพื่อให้เขียนโปรแกรมจัดการ Micro-segmentation ได้คล่องตัว แต่ข้อแลกเปลี่ยนสำคัญคือ SDN Controller กลายเป็น Single Point of Compromise / Failure หากผู้โจมตีเข้าควบคุม Control Plane ได้ ก็สามารถสั่งเปิดกฎ Firewall หรือเปลี่ยนเส้นทางทราฟฟิกทั้ง Data Plane ได้พร้อมกัน จึงต้องทำ Hardening, MFA, Redundancy และแยกเข้า OOBM อย่างสูงสุด',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: ความหน่วงข้ามแร็คเป็นข้อพิจารณาด้านสมรรถนะของเครือข่ายทั่วไป ไม่ใช่ความเสี่ยง Single Point of Compromise เฉพาะของสถาปัตยกรรม SDN; ประเด็นนี้เหมาะกับการออกแบบ Topology และวาง Load Proximity ของคลัสเตอร์',
      c2: 'ไม่ถูกต้อง: Virtual Overlay Micro-segmentation ไม่ได้มาแทนที่ Perimeter Defense แต่ทำหน้าที่เสริมการควบคุม East-West Traffic; องค์กรยังคงต้องใช้ Perimeter NGFW/WAF สำหรับกรอง North-South Traffic',
      c3: 'ไม่ถูกต้อง: การเกิด CLI Configuration Drift เป็นปัญหาของเครือข่ายแบบดั้งเดิมที่ตั้งค่าแยกทีละอุปกรณ์ ซึ่ง SDN ถูกนำมาใช้เพื่อแก้ปัญหานี้โดยเฉพาะผ่านการรวมศูนย์ Control Plane; ปัญหา CLI Drift จะพบในเครือข่ายที่ไม่ได้ใช้ SDN หรือ Automation',
      c4: 'ถูกต้อง: การรวมศูนย์ Control Plane ทำให้ SDN Controller เป็นเป้าหมายที่มีผลกระทบสูงสุดต่อทั้งเครือข่าย หากถูกเจาะจะส่งผลทั่ว Data Plane'
    },
    misconceptionTh:
      'ผู้เรียนมักจำเพียงข้อดีของ SDN ว่าช่วยให้ทำ Micro-segmentation ได้คล่องตัว แต่ลืมวิเคราะห์ความเสี่ยงจากการรวมศูนย์ Control Plane ว่าทำให้ SDN Controller กลายเป็นเป้าหมายระดับสูงที่สุดขององค์กร',
    relatedLessonIds: ['L3-02', 'L3-03'],
    tags: ['sdn', 'control-plane', 'data-plane', 'micro-segmentation']
  },
  {
    id: 'Q3-014',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.1'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'A defense manufacturer operates an air-gapped prototype testing network in one facility and uses logical segmentation with an industrial DMZ to exchange telemetry between corporate IT and factory OT networks in another facility. Which TWO statements accurately reflect the security implications of these network isolation models? (Choose two.)',
    promptTh:
      'ผู้ผลิตด้านกลาโหมใช้งานเครือข่ายทดสอบต้นแบบแบบ Air-gapped ในอาคารหนึ่ง และใช้ Logical Segmentation ร่วมกับ Industrial DMZ เพื่อแลกเปลี่ยนข้อมูลสถานะระหว่างเครือข่ายสำนักงาน IT และโรงงาน OT ในอีกอาคารหนึ่ง ข้อความ 2 ข้อใดสะท้อนผลกระทบด้านความปลอดภัยของรูปแบบการแยกเครือข่ายทั้งสองนี้ได้ถูกต้อง? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Physical isolation removes the need to inspect technician laptops or removable USB drives before entering the enclave',
        textTh: 'การแยกทางกายภาพ (Physical Isolation) ทำให้ไม่จำเป็นต้องตรวจสอบแล็ปท็อปของช่างเทคนิคหรือไดรฟ์ USB แบบพกพาก่อนนำเข้าสู่เครือข่าย'
      },
      {
        id: 'c2',
        textEn: 'An air-gapped network mitigates remote internet exploitation but still requires strict controls over USB drives and technician laptops',
        textTh: 'เครือข่าย Air-gapped ช่วยลดความเสี่ยงการโจมตีทางไกลจากอินเทอร์เน็ตได้ แต่ยังคงต้องควบคุมไดรฟ์ USB และแล็ปท็อปของช่างเทคนิคอย่างเข้มงวด'
      },
      {
        id: 'c3',
        textEn: 'Placing devices into separate VLAN IDs alone guarantees isolation without needing inter-VLAN firewall ACLs',
        textTh: 'การกำหนดอุปกรณ์ให้อยู่คนละหมายเลข VLAN เพียงอย่างเดียวรับประกันการแยกส่วนได้สมบูรณ์โดยไม่ต้องมี Firewall ACLs คั่นระหว่าง VLAN'
      },
      {
        id: 'c4',
        textEn: 'Logical segmentation requires running completely duplicated physical switches and fiber cabling for every subnet',
        textTh: 'Logical Segmentation บังคับให้ต้องติดตั้งสวิตช์กายภาพและเดินสายไฟเบอร์ซ้ำซ้อนแยกขาดออกจากกันสำหรับทุกซับเน็ต'
      },
      {
        id: 'c5',
        textEn: 'Logical segmentation via an industrial DMZ enables controlled IT/OT data sharing without exposing PLCs directly to corporate subnets',
        textTh: 'Logical Segmentation ผ่าน Industrial DMZ ช่วยให้แลกเปลี่ยนข้อมูลระหว่าง IT และ OT ได้อย่างควบคุมโดยไม่ต้องเปิดให้ซับเน็ตสำนักงานเข้าถึง PLC โดยตรง'
      }
    ],
    correctChoiceIds: ['c2', 'c5'],
    explanationTh:
      'เครือข่าย Air-gapped (Physical Isolation) ตัดการเชื่อมต่อทางไกลได้เกือบสมบูรณ์ แต่ช่องทางคลาสสิกที่ยังโจมตีได้คือ USB Drive และแล็ปท็อปช่างบำรุงรักษา (จึงต้องคุมสื่อพกพาอย่างเข้มงวด) ส่วน Logical Segmentation เช่น Industrial DMZ ตาม Purdue Model ใช้ตัวกลางคัดกรองเพื่อให้ IT กับ OT แลกเปลี่ยนข้อมูลได้ปลอดภัยบนฮาร์ดแวร์ร่วมกันโดยต้องมี Firewall/ACL คั่นระหว่างโซน',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: แม้จะตัดสายเชื่อมอินเทอร์เน็ตแล้ว แต่สื่อบันทึกข้อมูลพกพาและแล็ปท็อปช่างบำรุงรักษายังคงเป็นช่องทางนำมัลแวร์เข้าสู่ระบบ Air-gapped ได้ จึงยังต้องตรวจสอบอย่างเข้มงวด; Physical Isolation ลดเฉพาะความเสี่ยงจากการโจมตีระยะไกลผ่านเครือข่าย',
      c2: 'ถูกต้อง: แม้ไม่มีสายเน็ตเชื่อมต่อภายนอก ระบบ Air-gapped ยังคงต้องควบคุมสื่อบันทึกข้อมูลพกพาและอุปกรณ์พกพาของช่างเทคนิคอย่างรัดกุม',
      c3: 'ไม่ถูกต้อง: หากแบ่ง VLAN แต่ไม่ตั้งค่า Firewall หรือ Stateful ACLs คั่นบน Layer 3 Switch/Router ทราฟฟิกก็ยังวิ่งข้ามกันได้; VLAN เพียงอย่างเดียวเหมาะสำหรับการแยก Broadcast Domain ระดับ Layer 2 ก่อนเพิ่มการกรองระหว่างโซน',
      c4: 'ไม่ถูกต้อง: การเดินสายและอุปกรณ์แยกขาดทั้งหมดเป็นลักษณะของ Physical Isolation (Air-gapped) ไม่ใช่ Logical Segmentation; การทำ Physical Isolation เหมาะกับระบบวิกฤตสูงสุดที่ห้ามเชื่อมต่อเครือข่ายอื่นเลย',
      c5: 'ถูกต้อง: Industrial DMZ ใน Logical Segmentation ทำหน้าที่เป็นตัวกลางเก็บหรือส่งต่อข้อมูลสถิติ ทำให้ระบบ IT ไม่ต้องเชื่อมต่อตรงกับ PLC ในโซน OT'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจสองเรื่องคลาดเคลื่อน คือคิดว่า Air-gap ปลอดภัยสมบูรณ์โดยไม่ต้องคุม USB และคิดว่าแค่แยก VLAN โดยไม่วาง Firewall Rule ก็สามารถกั้นการโจมตีข้ามโซนได้แล้ว',
    relatedLessonIds: ['L3-02', 'L1-01'],
    tags: ['air-gapped', 'logical-segmentation', 'industrial-dmz', 'removable-media']
  },
  {
    id: 'Q3-015',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'An e-commerce company places its public-facing web application server inside a screened subnet (DMZ) behind a perimeter firewall, while its payment database resides in a restricted internal zone behind a second internal firewall. To reduce database query latency, a developer proposes adding a second network interface card (NIC) on the web server wired directly to the restricted database switch, bypassing the internal firewall. Why should the security architect reject this change?',
    promptTh:
      'บริษัทอีคอมเมิร์ซวางเว็บแอปพลิเคชันเซิร์ฟเวอร์สำหรับสาธารณะไว้ใน Screened Subnet (DMZ) หลัง Perimeter Firewall ขณะที่ฐานข้อมูลการชำระเงินอยู่ในโซน Restricted ภายในหลังไฟร์วอลล์ตัวที่สอง เพื่อลดความหน่วงในการคิวรีฐานข้อมูล นักพัฒนาจึงเสนอให้ติดตั้งการ์ดแลนใบที่สอง (Second NIC) บนเว็บเซิร์ฟเวอร์เพื่อต่อตรงเข้าสวิตช์ของโซนฐานข้อมูลโดยข้ามไฟร์วอลล์ตัวใน เหตุใดสถาปนิกความปลอดภัยจึงควรปฏิเสธการเปลี่ยนแปลงนี้?',
    choices: [
      {
        id: 'c1',
        textEn: 'Dual-homing the web server creates a bridge across security zones that bypasses firewall inspection and expands the database attack surface',
        textTh: 'การทำ Dual-homed บนเว็บเซิร์ฟเวอร์สร้างสะพานเชื่อมข้ามโซนความปลอดภัย ทำให้ข้ามการตรวจสอบของไฟร์วอลล์และขยายพื้นผิวการโจมตีสู่ฐานข้อมูล'
      },
      {
        id: 'c2',
        textEn: 'Deploying a reverse proxy in front of the web tier is impossible when servers use dedicated out-of-band management ports',
        textTh: 'การวาง Reverse Proxy ด้านหน้าชั้นเว็บจะทำไม่ได้หากเซิร์ฟเวอร์ใช้งานพอร์ต Out-of-Band Management แยกต่างหาก'
      },
      {
        id: 'c3',
        textEn: 'Adding a second network interface automatically disables Transport Layer Security (TLS) across all web requests',
        textTh: 'การเพิ่มการ์ดแลนใบที่สองจะสั่งปิดการทำงานของ Transport Layer Security (TLS) ในคำขอเว็บทั้งหมดโดยอัตโนมัติ'
      },
      {
        id: 'c4',
        textEn: 'Internal firewalls cannot filter east-west database traffic unless both interfaces share the same public IP address',
        textTh: 'ไฟร์วอลล์ภายในไม่สามารถกรองทราฟฟิกฐานข้อมูลแนวขวางได้ เว้นแต่การ์ดแลนทั้งสองใบจะใช้หมายเลข Public IP เดียวกัน'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'หลักการ Security Zones และ Device Placement ห้ามไม่ให้วางเซิร์ฟเวอร์แบบ Dual-homed ที่ขาหนึ่งอยู่ใน DMZ และอีกขาต่อตรงเข้าโซน Restricted เพราะหากผู้โจมตีเจาะเว็บเซิร์ฟเวอร์ใน DMZ ได้ ก็จะข้าม Internal Firewall เข้าถึงฐานข้อมูลสำคัญได้ทันที เป็นการทำลาย Choke Point และขยาย Attack Surface',
    choiceRationales: {
      c1: 'ถูกต้อง: Dual-homed Server ทำให้ Trust Boundary พังทลายและตัด Choke Point ของไฟร์วอลล์ตัวในออก เพิ่มความเสี่ยงให้ฐานข้อมูลถูกเจาะต่อเนื่องจาก DMZ',
      c2: 'ไม่ถูกต้อง: การแยกพอร์ต Out-of-Band Management (OOBM) ไม่ได้ขัดขวางการใช้งาน Reverse Proxy; OOBM ถูกออกแบบมาใช้กับเครือข่ายบริหารจัดการอุปกรณ์เพื่อแยกทราฟฟิกแอดมินออกจากทราฟฟิกบริการลูกค้า',
      c3: 'ไม่ถูกต้อง: การเพิ่ม NIC เป็นการตั้งค่าระดับเน็ตเวิร์กอินเทอร์เฟซ ไม่ได้ปิด TLS ของเว็บเซิร์ฟเวอร์; การปิด TLS เกิดจากการตั้งค่าซอฟต์แวร์เว็บเซิร์ฟเวอร์หรือกรณีตั้งใจทำ TLS Offloading บน Load Balancer/Reverse Proxy',
      c4: 'ไม่ถูกต้อง: Internal Firewall ออกแบบมาเพื่อกรองทราฟฟิกและ Private IP ระหว่างโซน (เช่น DMZ กับ Restricted DB Zone) โดยไม่จำเป็นต้องใช้ Public IP ร่วมกัน; ข้อกำหนดเรื่อง Public IP จะเกี่ยวข้องกับ Perimeter NAT หรือการเผยแพร่บริการภายนอก'
    },
    misconceptionTh:
      'ผู้เรียนอาจมองเพียงมิติความเร็วเครือข่าย (Latency) ของการต่อสายตรง โดยลืมไปว่าการทำ Dual-homed ข้าม Firewall เป็นข้อห้ามพื้นฐานของการออกแบบ Security Zones',
    relatedLessonIds: ['L3-03', 'L2-09'],
    tags: ['security-zones', 'screened-subnet', 'attack-surface', 'device-placement']
  },
  {
    id: 'Q3-016',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A financial clearinghouse is deploying an inline security gateway guarding a high-secrecy settlement network where halting connectivity during a hardware fault is acceptable, provided zero uninspected packets can enter. Simultaneously, an emergency room triage system deploys an inline IPS where uninterrupted clinician access to patient allergy alerts outweighs temporary packet filtering during an appliance failure. Which failure modes should be configured on these two gateways respectively?',
    promptTh:
      'สำนักหักบัญชีทางการเงินกำลังติดตั้งเกตเวย์ความปลอดภัยแบบ Inline เพื่อปกป้องเครือข่ายการชำระดุลความลับสูง ซึ่งยอมให้การเชื่อมต่อหยุดลงได้หากฮาร์ดแวร์ขัดข้องตราบใดที่ไม่มีแพ็กเก็ตที่ไม่ได้ตรวจสอบหลุดรอดเข้าไป ขณะเดียวกันระบบคัดกรองผู้ป่วยฉุกเฉินของโรงพยาบาลติดตั้ง Inline IPS ที่ให้ความสำคัญกับการเข้าถึงข้อมูลการแพ้ยาของแพทย์อย่างต่อเนื่องมากกว่าการกรองแพ็กเก็ตชั่วคราวหากอุปกรณ์ล่ม ควรตั้งค่า Failure Mode แบบใดให้กับเกตเวย์ทั้งสองตามลำดับ?',
    choices: [
      {
        id: 'c1',
        textEn: 'Fail-open for the financial clearinghouse; Fail-closed for the emergency triage portal',
        textTh: 'Fail-open สำหรับสำนักหักบัญชีทางการเงิน และ Fail-closed สำหรับระบบคัดกรองผู้ป่วยฉุกเฉิน'
      },
      {
        id: 'c2',
        textEn: 'Tap/monitor bypass for the financial clearinghouse; Split tunneling for the emergency triage portal',
        textTh: 'Tap/monitor Bypass สำหรับสำนักหักบัญชีทางการเงิน และ Split Tunneling สำหรับระบบคัดกรองผู้ป่วยฉุกเฉิน'
      },
      {
        id: 'c3',
        textEn: 'Fail-closed for the financial clearinghouse; Fail-open for the emergency triage portal',
        textTh: 'Fail-closed สำหรับสำนักหักบัญชีทางการเงิน และ Fail-open สำหรับระบบคัดกรองผู้ป่วยฉุกเฉิน'
      },
      {
        id: 'c4',
        textEn: 'Active-passive spanning for the financial clearinghouse; Fail-closed for the emergency triage portal',
        textTh: 'Active-passive Spanning สำหรับสำนักหักบัญชีทางการเงิน และ Fail-closed สำหรับระบบคัดกรองผู้ป่วยฉุกเฉิน'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      '**Fail-closed** จะปิดกั้นทราฟฟิกทั้งหมดเมื่ออุปกรณ์ความปลอดภัยล่ม เหมาะกับระบบที่ Confidentiality/Security สำคัญที่สุดอย่างสำนักหักบัญชี ส่วน **Fail-open** จะปล่อยให้ทราฟฟิกวิ่งผ่านต่อเมื่ออุปกรณ์ขัดข้อง (พร้อมแจ้งเตือน SOC) เหมาะกับระบบที่ Availability และความปลอดภัยต่อชีวิตอย่างห้องฉุกเฉินมีความสำคัญเหนือการกรองชั่วคราว',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: สลับความหมายของโหมดทั้งสอง หากตั้ง Fail-open ให้สำนักหักบัญชี ทราฟฟิกโจมตีจะหลุดผ่านได้เมื่อเครื่องล่ม และ Fail-closed ในห้องฉุกเฉินจะตัดข้อมูลผู้ป่วยจนอันตรายต่อชีวิต; การจับคู่นี้เหมาะกับบริบทที่สำนักหักบัญชีเป็นระบบสาธารณะที่ยอมให้ผ่านได้และห้องฉุกเฉินเก็บเฉพาะไฟล์ลับที่ไม่เร่งด่วนซึ่งไม่ตรงกับโจทย์',
      c2: 'ไม่ถูกต้อง: Tap/monitor เป็นลักษณะการต่อรับสำเนาทราฟฟิกแบบ Out-of-path ไม่ใช่ Failure Mode ของอุปกรณ์ Inline และ Split Tunneling เป็นการตั้งค่าเส้นทาง VPN; Tap/monitor เหมาะกับงาน Passive IDS Monitoring ส่วน Split Tunnel เหมาะกับพนักงาน Remote Access',
      c3: 'ถูกต้อง: Fail-closed รักษา Security ของระบบการเงินแม้ต้องหยุดบริการ ส่วน Fail-open รักษา Availability/Safety ให้แพทย์ดูข้อมูลฉุกเฉินได้ต่อเนื่อง',
      c4: 'ไม่ถูกต้อง: Active-passive Spanning ไม่ใช่ Failure Mode ของเกตเวย์ และการตั้ง Fail-closed ให้ห้องฉุกเฉินเสี่ยงทำให้แพทย์เข้าถึงข้อมูลแพ้ยาไม่ได้; โครงสร้าง Active-Passive มักใช้กับการทำ High Availability Cluster ของอุปกรณ์เครือข่าย'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจว่า Fail-closed เป็นการตั้งค่าที่ถูกต้องเสมอสำหรับทุกองค์กร แต่ในงานฉุกเฉินทางการแพทย์หรือโครงสร้างพื้นฐานที่ Availability/Life Safety สำคัญกว่า การเลือก Fail-open พร้อมการแจ้งเตือนอาจเหมาะสมกว่า',
    relatedLessonIds: ['L3-03', 'L3-07'],
    tags: ['failure-modes', 'fail-open', 'fail-closed', 'availability']
  },
  {
    id: 'Q3-017',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A security operations team wants to inspect high-throughput east-west traffic crossing an internal core switch to detect lateral movement. Management strictly forbids introducing additional packet latency onto the production link and stipulates that a failure or reboot of the inspection appliance must never interrupt network traffic. Which deployment model BEST satisfies these constraints?',
    promptTh:
      'ทีมปฏิบัติการความปลอดภัยต้องการตรวจสอบทราฟฟิกแนวขวาง (East-West) ปริมาณสูงที่วิ่งผ่านสวิตช์หลักภายในเพื่อตรวจจับการเคลื่อนที่แนวขวาง ฝ่ายบริหารสั่งห้ามไม่ให้เพิ่มความหน่วงของแพ็กเก็ตบนสายส่งหลักโดยเด็ดขาด และกำหนดว่าหากอุปกรณ์ตรวจสอบขัดข้องหรือรีบูตต้องไม่ทำให้การสื่อสารบนเครือข่ายหยุดชะงัก รูปแบบการติดตั้งใดตอบโจทย์ข้อจำกัดเหล่านี้ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'An active inline IPS configured in fail-closed mode directly between core distribution switches',
        textTh: 'Active Inline IPS ที่ตั้งค่าโหมด Fail-closed คั่นตรงกลางระหว่างสวิตช์กระจายสัญญาณหลัก'
      },
      {
        id: 'c2',
        textEn: 'An inline web application firewall acting as a reverse proxy for all internal server traffic',
        textTh: 'Web Application Firewall แบบ Inline ที่ทำหน้าที่ Reverse Proxy ให้กับทราฟฟิกเซิร์ฟเวอร์ภายในทั้งหมด'
      },
      {
        id: 'c3',
        textEn: 'A forward proxy enforcing SSL decryption inline on every core VLAN trunk link',
        textTh: 'Forward Proxy ที่บังคับถอดรหัส SSL แบบ Inline บนลิงก์ Trunk ของทุก VLAN หลัก'
      },
      {
        id: 'c4',
        textEn: 'A passive IDS sensor connected out-of-path via a hardware network TAP or switch SPAN mirror port',
        textTh: 'เซ็นเซอร์ IDS แบบ Passive ที่ต่ออยู่นอกเส้นทางหลักผ่านฮาร์ดแวร์ Network TAP หรือพอร์ต Switch SPAN Mirror'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'การต่อแบบ **Tap/Monitor (Out-of-path)** ด้วย **Passive IDS / Network Sensor** ผ่าน Network TAP หรือ Switch SPAN Port จะส่งสำเนาทราฟฟิกไปวิเคราะห์อยู่นอกเส้นทางส่งข้อมูลจริง จึงไม่เพิ่ม Latency ให้สายหลักและหากตัวเซ็นเซอร์พังหรือรีบูต เครือข่ายหลักยังคงเดินหน้าได้ 100%',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Inline Fail-closed เพิ่ม Latency จากการตรวจทุกแพ็กเก็ตและหากเครื่องค้างหรือรีบูตจะตัดสายส่งหลักทันที Inline IPS เหมาะกับจุดขอบเขตที่ยอมรับ Latency เล็กน้อยเพื่อบล็อกการโจมตีแบบเรียลไทม์',
      c2: 'ไม่ถูกต้อง: WAF แบบ Reverse Proxy ทำงานแบบ Inline เฉพาะโปรโตคอล HTTP/HTTPS ซึ่งสร้าง Latency และไม่รองรับการตรวจจับทราฟฟิก East-West ทุกโปรโตคอล WAF เหมาะกับการวางหน้าเว็บและ API',
      c3: 'ไม่ถูกต้อง: Forward Proxy แบบ Inline สร้าง Latency สูงจากการถอดรหัสและเป็น SPOF บน Core Trunk Forward Proxy เหมาะกับการกรองทราฟฟิกผู้ใช้ภายในออกสู่อินเทอร์เน็ต',
      c4: 'ถูกต้อง: Passive IDS/Sensor ต่อรับสำเนาผ่าน TAP/SPAN ตอบโจทย์ทั้ง Zero Latency impact และไม่ทำให้ระบบหลักหยุดเมื่อเครื่องขัดข้อง'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนระหว่างการต่อ Inline (ต้องวิ่งผ่านอุปกรณ์จึงบล็อกทันทีได้แต่เพิ่ม Latency) กับ Tap/Monitor (รับสำเนาแบบ Passive จึงไม่เพิ่ม Latency แต่บล็อกแพ็กเก็ตแรกทันทีไม่ได้)',
    relatedLessonIds: ['L3-03', 'L4-05'],
    tags: ['tap-monitor', 'passive-ids', 'network-tap', 'span']
  },
  {
    id: 'Q3-018',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'A SOC manager reports that an IDS sensor positioned externally in front of the perimeter firewall generates 250,000 alerts daily from routine internet port scans, overwhelming analysts and obscuring real breaches. The team wants to dramatically improve the signal-to-noise ratio so alerts reflect only traffic that actually survives perimeter filtering rules toward the screened subnet. What placement adjustment BEST achieves this goal?',
    promptTh:
      'ผู้จัดการทีม SOC รายงานว่าเซ็นเซอร์ IDS ที่ติดตั้งอยู่ด้านนอกด้านหน้า Perimeter Firewall สร้างสัญญาณแจ้งเตือนมากถึง 250,000 รายการต่อวันจากการสแกนพอร์ตทั่วไปบนอินเทอร์เน็ต จนทำให้นักวิเคราะห์ตรวจสอบไม่ทันและบดบังเหตุโจมตีจริง ทีมงานต้องการยกระดับอัตราส่วน Signal-to-Noise อย่างชัดเจนเพื่อให้แจ้งเตือนเฉพาะทราฟฟิกที่สามารถผ่านกฎคัดกรองของไฟร์วอลล์เข้ามาสู่ Screened Subnet ได้จริงเท่านั้น การปรับตำแหน่งวางอุปกรณ์ใดตอบโจทย์นี้ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Move the IDS sensor even further upstream onto the external ISP demarcation router',
        textTh: 'ย้ายเซ็นเซอร์ IDS ออกไปด้านหน้ายิ่งขึ้นบนเราเตอร์จุดเชื่อมต่อของ ISP ภายนอก'
      },
      {
        id: 'c2',
        textEn: 'Reposition the sensor inside (behind) the perimeter firewall monitoring traffic entering the screened subnet',
        textTh: 'ย้ายตำแหน่งเซ็นเซอร์ไปไว้ด้านใน (ด้านหลัง) Perimeter Firewall เพื่อเฝ้าตรวจทราฟฟิกที่ผ่านเข้ามาใน Screened Subnet'
      },
      {
        id: 'c3',
        textEn: 'Switch the external sensor from passive monitoring to inline active blocking in front of the perimeter firewall',
        textTh: 'เปลี่ยนเซ็นเซอร์ภายนอกจากการเฝ้าตรวจแบบ Passive ไปเป็นการบล็อกเชิงรุกแบบ Inline ด้านหน้า Perimeter Firewall'
      },
      {
        id: 'c4',
        textEn: 'Add a second passive sensor on the external ISP link and route all raw scan logs into a separate long-term archive bucket',
        textTh: 'เพิ่มเซ็นเซอร์ Passive ตัวที่สองบนลิงก์ ISP ภายนอกและส่งบันทึกการสแกนดิบทั้งหมดไปยังถังเก็บข้อมูลระยะยาวแยกต่างหาก'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'การวาง IDS Sensor ไว้ **ด้านนอก (หน้า) Firewall** ทำให้เห็นการสแกนขยะจากอินเทอร์เน็ตทั้งหมดที่ Firewall ดรอปทิ้งไปแล้ว จึงเกิด Alert ท่วม SOC การย้าย Sensor มาวาง **ด้านหลัง (ใน) Firewall** ช่วยให้ Perimeter Firewall กรองทราฟฟิกที่ไม่เกี่ยวข้องออกไปก่อน ทำให้ Sensor รายงานเฉพาะทราฟฟิกที่ผ่านด่านแรกเข้ามาใน DMZ/Screened Subnet ได้จริง เพิ่ม Signal-to-Noise Ratio ได้อย่างมาก',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: การย้ายออกไปฝั่ง ISP ยิ่งเจอทราฟฟิกสแกนจากอินเทอร์เน็ตมากขึ้นกว่าเดิม; การวาง Sensor ด้านนอก Firewall จะเหมาะเฉพาะเมื่อทีม Threat Intelligence ต้องการเก็บสถิติการสแกนทั่วโลกจากอินเทอร์เน็ต',
      c2: 'ถูกต้อง: เมื่อ Sensor อยู่หลัง Perimeter Firewall สัญญาณแจ้งเตือนที่เกิดขึ้นจะสะท้อนภัยคุกคามที่ผ่านเข้าพอร์ตที่เปิดอนุญาตไว้จริง ช่วยลด Alert Fatigue',
      c3: 'ไม่ถูกต้อง: การเปลี่ยนเป็น Inline Blocking ด้านหน้าไฟร์วอลล์ยังคงต้องประมวลผลและแจ้งเตือนจากการสแกน 250,000 ครั้งจากภายนอกทั้งยังเพิ่มจุดคอขวดและ Latency; Active Inline IPS ควรวางหลัง Perimeter Firewall เพื่อบล็อกทราฟฟิกโจมตีที่ผ่านด่านแรกเข้ามาได้',
      c4: 'ไม่ถูกต้อง: การเพิ่มเซ็นเซอร์ภายนอกและเก็บ Raw Scan Logs ยังคงไม่ได้วิเคราะห์ทราฟฟิกที่ผ่านไฟร์วอลล์เข้ามาใน Screened Subnet; การทำ Log Archiving เหมาะกับข้อกำหนดด้านการเก็บรักษาหลักฐานและการตรวจประเมินย้อนหลัง (Compliance)'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนว่าควรติดเซ็นเซอร์ IDS ไว้หน้าสุดนอก Firewall เพื่อเห็นทุกอย่าง หรือหลัง Firewall เพื่อให้เห็นเฉพาะภัยที่หลุดเข้ามา การเลือกตำแหน่งขึ้นกับเป้าหมายระหว่าง Threat Visibility กับ Signal-to-Noise Ratio',
    relatedLessonIds: ['L3-03', 'L4-05'],
    tags: ['device-placement', 'ids', 'firewall', 'soc']
  },
  {
    id: 'Q3-019',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'System administrators currently initiate direct SSH and RDP sessions from standard office workstations across the production LAN to manage core switches and restricted financial database servers. To shrink the attack surface, enforce centralized MFA with session recording, and preserve administrative access even during a DDoS flood on the production data plane, which architecture should be deployed?',
    promptTh:
      'ปัจจุบันผู้ดูแลระบบใช้เครื่องทำงานทั่วไปเชื่อมต่อ SSH และ RDP ผ่านเครือข่าย LAN ฝ่ายผลิตโดยตรงเพื่อเข้าไปจัดการสวิตช์หลักและเซิร์ฟเวอร์ฐานข้อมูลการเงินในโซน Restricted เพื่อลดพื้นที่ผิวการโจมตี บังคับใช้ MFA จากจุดเดียวพร้อมบันทึกเซสชันการทำงาน และรักษาช่องทางเข้าบริหารจัดการไว้ได้แม้เกิด DDoS บนเครือข่ายข้อมูลหลัก ควรปรับใช้สถาปัตยกรรมใด?',
    choices: [
      {
        id: 'c1',
        textEn: 'A hardened jump server inside an isolated out-of-band management (OOBM) network with MFA and session logging',
        textTh: 'Jump Server ที่เสริมความแข็งแกร่งภายในเครือข่าย Out-of-Band Management (OOBM) แยกเฉพาะ พร้อมการบังคับ MFA และบันทึกเซสชัน'
      },
      {
        id: 'c2',
        textEn: 'A forward proxy deployed in the internal user subnet to inspect outbound web traffic from administrator workstations',
        textTh: 'Forward Proxy ที่ติดตั้งในซับเน็ตผู้ใช้ภายในเพื่อตรวจสอบทราฟฟิกเว็บขาออกจากเครื่องทำงานของผู้ดูแลระบบ'
      },
      {
        id: 'c3',
        textEn: 'A Layer 4 load balancer placed in front of the restricted database servers to distribute direct SSH sessions from office laptops',
        textTh: 'Load Balancer ระดับ Layer 4 ที่วางด้านหน้าเซิร์ฟเวอร์ฐานข้อมูลในโซน Restricted เพื่อกระจายเซสชัน SSH โดยตรงจากแล็ปท็อปสำนักงาน'
      },
      {
        id: 'c4',
        textEn: 'A passive network sensor attached via SPAN port on the production LAN to generate SIEM alerts on unauthorized SSH attempts',
        textTh: 'เซ็นเซอร์เครือข่ายแบบ Passive ที่เชื่อมต่อผ่านพอร์ต SPAN บนเครือข่าย LAN ฝ่ายผลิตเพื่อส่งแจ้งเตือนไปยัง SIEM เมื่อมีการเชื่อมต่อ SSH ที่ไม่ได้รับอนุญาต'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'Jump Server (Bastion Host) ช่วยรวมศูนย์ทางเข้างานบริหารจัดการระบบไว้เพียงจุดเดียวเพื่อลด Attack Surface ของเซิร์ฟเวอร์ปลายทาง บังคับ MFA และทำ Session Recording ขณะที่ Out-of-Band Management (OOBM) แยกช่องทางการบริหารจัดการอุปกรณ์ออกจากทราฟฟิก Production ทำให้แอดมินยังเข้ากู้ระบบได้แม้สาย Production โดน DDoS',
    choiceRationales: {
      c1: 'ถูกต้อง: Jump Server + OOBM + MFA ตอบโจทย์ครบทั้งการลด Attack Surface, การคุมตัวตน/บันทึก Log และการเข้าถึงแยกจากทราฟฟิก Production',
      c2: 'ไม่ถูกต้อง: Forward Proxy ควบคุมการเข้าชมเว็บไซต์ขาออก ไม่ได้ลด Attack Surface ของพอร์ต SSH/RDP ฝั่งเซิร์ฟเวอร์หรือแยก OOBM; Forward Proxy เหมาะกับการกรอง URL และการเข้าถึงอินเทอร์เน็ตของพนักงาน',
      c3: 'ไม่ถูกต้อง: Load Balancer ไม่ได้บังคับ MFA/Session Recording หรือแยกเครือข่ายออกจากทราฟฟิก Production ที่อาจโดน DDoS; Load Balancer เหมาะกับการกระจายโหลดบริการเว็บหรือแอปพลิเคชันไปยัง Backend Pool เพื่อทำ High Availability',
      c4: 'ไม่ถูกต้อง: Passive Sensor ผ่าน SPAN ทำได้เพียงแจ้งเตือนแบบ Detective ไม่สามารถลด Attack Surface, บังคับ MFA หรือให้บริการช่องทางรีโมต OOBM เมื่อเครือข่ายหลักถูก DDoS; Passive Sensor เหมาะกับการเฝ้าตรวจทราฟฟิกโดยไม่เพิ่มความหน่วง'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจว่าเพียงเปิด Firewall อนุญาต SSH/RDP จากเครื่องแอดมินเป็นราย IP ก็ปลอดภัยเพียงพอ แต่หากเครื่องแอดมินติดมัลแวร์หรือเครือข่าย Production ล่มจากการโจมตี การไม่มี Jump Server และ OOBM จะทำให้ทั้งถูกเจาะต่อและกู้ระบบไม่ได้',
    relatedLessonIds: ['L3-03', 'L4-09'],
    tags: ['jump-server', 'oobm', 'attack-surface', 'mfa']
  },
  {
    id: 'Q3-020',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'An enterprise runs a high-availability customer web portal across six backend servers in a screened subnet while simultaneously governing how internal staff access external websites from corporate workstations. Which TWO appliance placements accurately align with these traffic directions? (Choose two.)',
    promptTh:
      'องค์กรแห่งหนึ่งให้บริการเว็บพอร์ทัลลูกค้าความพร้อมใช้งานสูงผ่านเซิร์ฟเวอร์หลังบ้านหกเครื่องใน Screened Subnet พร้อมทั้งควบคุมวิธีการที่พนักงานภายในใช้เข้าถึงเว็บไซต์ภายนอกจากเครื่องทำงานของบริษัท การวางตำแหน่งอุปกรณ์ 2 ข้อใดสอดคล้องกับทิศทางทราฟฟิกเหล่านี้อย่างถูกต้อง? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Place a load balancer and reverse proxy in front of the DMZ backend pool to distribute requests, hide internal server IPs, and offload TLS',
        textTh: 'วาง Load Balancer และ Reverse Proxy ด้านหน้ากลุ่มเซิร์ฟเวอร์ใน DMZ เพื่อกระจายคำขอ ซ่อน IP เซิร์ฟเวอร์ภายใน และช่วยทำ TLS Offloading'
      },
      {
        id: 'c2',
        textEn: 'Deploy a forward proxy in front of the public web servers to terminate incoming external customer HTTPS connections',
        textTh: 'วาง Forward Proxy ด้านหน้าเว็บเซิร์ฟเวอร์สาธารณะเพื่อรับและยุติการเชื่อมต่อ HTTPS ขาเข้าจากลูกค้าภายนอก'
      },
      {
        id: 'c3',
        textEn: 'Deploy a forward proxy between corporate workstations and the internet to enforce URL filtering, content caching, and outbound malware inspection',
        textTh: 'วาง Forward Proxy คั่นระหว่างเครื่องพนักงานของบริษัทกับอินเทอร์เน็ตเพื่อบังคับใช้ URL Filtering, การแคชเนื้อหา และตรวจจับมัลแวร์ขาออก'
      },
      {
        id: 'c4',
        textEn: 'Configure a jump server inside the external internet zone to distribute public customer HTTP traffic across backend web nodes',
        textTh: 'ตั้งค่า Jump Server ในโซนอินเทอร์เน็ตภายนอกเพื่อกระจายทราฟฟิก HTTP ของลูกค้าสาธารณะไปยังโหนดเว็บหลังบ้าน'
      },
      {
        id: 'c5',
        textEn: 'Install a passive IDS sensor inline as the sole device performing active TLS offloading and server health checks',
        textTh: 'ติดตั้งเซ็นเซอร์ IDS แบบ Passive คั่นแบบ Inline เพื่อทำหน้าที่ถอดรหัส TLS และตรวจสอบสถานะ Health Check ของเซิร์ฟเวอร์เพียงอย่างเดียว'
      }
    ],
    correctChoiceIds: ['c1', 'c3'],
    explanationTh:
      'ทิศทางทราฟฟิกเป็นตัวกำหนดประเภทของ Proxy: **Reverse Proxy** คู่กับ **Load Balancer** วางหน้ากลุ่มเว็บเซิร์ฟเวอร์ใน DMZ เพื่อรับคำขอขาเข้า (Inbound) ซ่อน IP หลังบ้าน กระจายโหลด ทำ Health Check และ TLS Offloading ส่วน **Forward Proxy** วางคั่นระหว่างผู้ใช้งานภายในกับอินเทอร์เน็ต (Outbound) เพื่อกรองเว็บ URL Filtering ซ่อน IP พนักงาน และตรวจจับภัยขาออก',
    choiceRationales: {
      c1: 'ถูกต้อง: Load Balancer + Reverse Proxy ปกป้องและกระจายทราฟฟิกขาเข้าสู่ Backend Web Server Pool ใน Screened Subnet ได้ครบถ้วน',
      c2: 'ไม่ถูกต้อง: นี่คือหน้าที่ของ Reverse Proxy ไม่ใช่ Forward Proxy; Forward Proxy จะเหมาะกับการวางฝั่งผู้ใช้ภายในเพื่อคัดกรองทราฟฟิกที่เรียกออกไปสู่อินเทอร์เน็ต',
      c3: 'ถูกต้อง: Forward Proxy ควบคุมและตรวจสอบทราฟฟิกเว็บขาออกของพนักงานภายในก่อนออกสู่อินเทอร์เน็ต',
      c4: 'ไม่ถูกต้อง: Jump Server ใช้เป็นจุดผ่านที่เสริมความแข็งแกร่งให้ผู้ดูแลระบบรีโมตเข้าบริหารจัดการเครื่องภายใน ไม่ได้ใช้กระจายโหลดลูกค้าสาธารณะ; Jump Server เหมาะกับการติดตั้งใน Management Zone สำหรับงาน Admin SSH/RDP',
      c5: 'ไม่ถูกต้อง: Passive IDS ไม่ได้วาง Inline และไม่ได้ทำ TLS Offloading หรือ Load Balancer Health Checks; Passive IDS เหมาะกับงานเฝ้าตรวจสำเนาแพ็กเก็ตและแจ้งเตือนภัยคุกคาม'
    },
    misconceptionTh:
      'ผู้เรียนมักจำสลับกันระหว่าง Forward Proxy (ดูแลขาออกจากพนักงานภายในไปอินเทอร์เน็ต) กับ Reverse Proxy (ดูแลขาเข้าจากลูกค้าภายนอกมายังเซิร์ฟเวอร์ขององค์กร)',
    relatedLessonIds: ['L3-03', 'L3-04'],
    tags: ['reverse-proxy', 'forward-proxy', 'load-balancer', 'dmz']
  },
  {
    id: 'Q3-021',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'Contractors frequently plug personal laptops into conference-room Ethernet wall jacks. Previously implemented switch port security using static MAC filtering was bypassed when an unauthorized user cloned the MAC address printed on a networked printer label. Which port-security design prevents unauthorized wired access through mutual cryptographic authentication before unlocking a corporate VLAN?',
    promptTh:
      'ผู้รับเหมาภายนอกมักเสียบแล็ปท็อปส่วนตัวเข้ากับปลั๊กสายแลนตามห้องประชุม การป้องกันพอร์ตสวิตช์ด้วยวิธีกรอง MAC Address แบบคงที่ (Static MAC Filtering) ที่เคยใช้ถูกหลบเลี่ยงได้เมื่อผู้ไม่มีสิทธิ์ปลอมค่า MAC Address ที่พิมพ์อยู่บนสติกเกอร์ของเครื่องพิมพ์เครือข่าย การออกแบบ Port Security แบบใดช่วยป้องกันการเข้าถึงแบบมีสายโดยไม่ได้รับอนุญาตผ่านการพิสูจน์ตัวตนเชิงรหัสลับทั้งสองฝั่งก่อนเปิดสิทธิ์ VLAN ขององค์กร?',
    choices: [
      {
        id: 'c1',
        textEn: 'Enable sticky MAC port learning with a maximum limit of two MAC addresses per conference-room wall jack',
        textTh: 'เปิดใช้การเรียนรู้ Sticky MAC โดยจำกัดจำนวนสูงสุดที่สอง MAC Address ต่อปลั๊กสายแลนในห้องประชุมหนึ่งจุด'
      },
      {
        id: 'c2',
        textEn: 'Implement IEEE 802.1X using PEAP with username/password authentication only and without client certificates',
        textTh: 'ปรับใช้ IEEE 802.1X ร่วมกับ PEAP โดยยืนยันตัวตนด้วยชื่อผู้ใช้และรหัสผ่านเพียงอย่างเดียวโดยไม่ใช้ใบรับรองฝั่งเครื่องลูกข่าย'
      },
      {
        id: 'c3',
        textEn: 'Enforce IEEE 802.1X with EAP-TLS where switches act as authenticators validating client and RADIUS server certificates',
        textTh: 'บังคับใช้ IEEE 802.1X ร่วมกับ EAP-TLS โดยสวิตช์ทำหน้าที่ Authenticator ตรวจสอบใบรับรองดิจิทัลทั้งฝั่งเครื่องลูกข่ายและเซิร์ฟเวอร์ RADIUS'
      },
      {
        id: 'c4',
        textEn: 'Deploy a web application firewall inline in front of conference-room switches to block unknown HTTP headers',
        textTh: 'ติดตั้ง Web Application Firewall แบบ Inline หน้าสวิตช์ห้องประชุมเพื่อบล็อก HTTP Headers ที่ไม่รู้จัก'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'MAC Address ปลอมแปลงได้ง่าย (MAC Spoofing) จึงต้องยกระดับ Port Security เป็น **IEEE 802.1X** และในกลุ่มโปรโตคอล EAP ตัวเลือกที่ปลอดภัยสูงสุดตามเงื่อนไขโจทย์คือ **EAP-TLS** เพราะบังคับใช้ใบรับรองดิจิทัลยืนยันตัวตนทั้งฝั่งเครื่องลูกข่าย (Supplicant) และฝั่งเซิร์ฟเวอร์ยืนยันตัวตน (RADIUS Authentication Server) แบบ Mutual Authentication โดยสวิตช์ทำหน้าที่เป็น Authenticator กักพอร์ตไว้จนกว่าจะผ่านการพิสูจน์ตัวตน',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Sticky MAC ยังคงตรวจเพียง MAC Address ที่ปลอมได้ด้วยซอฟต์แวร์บนเครื่องผู้โจมตี; Sticky MAC เหมาะกับการจำกัดการเสียบอุปกรณ์หลายเครื่องแบบเบื้องต้นในพื้นที่ที่ควบคุมทางกายภาพเข้มงวดแล้ว',
      c2: 'ไม่ถูกต้อง: PEAP ใช้ใบรับรองเฉพาะฝั่งเซิร์ฟเวอร์และอาศัยรหัสผ่านฝั่งเครื่องลูกข่าย จึงไม่ใช่ Mutual Cryptographic Certificate Authentication ตามที่โจทย์กำหนด; PEAP เหมาะกับองค์กรที่ยังไม่มีระบบแจกจ่าย Client Certificate (PKI) ให้ทุกเครื่อง',
      c3: 'ถูกต้อง: IEEE 802.1X + EAP-TLS ใช้ใบรับรองดิจิทัลยืนยันตัวตนทั้งสองฝั่งผ่าน RADIUS ทำให้การปลอม MAC Address ไม่สามารถผ่านเข้า VLAN องค์กรได้',
      c4: 'ไม่ถูกต้อง: WAF ตรวจสอบเฉพาะทราฟฟิกเว็บ HTTP/HTTPS ระดับ Layer 7 ไม่ใช่กลไก Port-based Network Access Control บนพอร์ตสวิตช์; WAF เหมาะกับการวางหน้าเว็บแอปพลิเคชันและ REST API ใน DMZ'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจผิดว่า Sticky MAC Port Security เพียงพอต่อการกันคนแปลกหน้าเสียบสายแลน หรือจำสลับบทบาทระหว่าง Supplicant (เครื่องลูกข่าย) กับ Authenticator (สวิตช์/AP)',
    relatedLessonIds: ['L3-04', 'L1-06'],
    tags: ['802.1x', 'eap-tls', 'port-security', 'radius']
  },
  {
    id: 'Q3-022',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'An online banking REST API sits behind a Layer 4 stateful firewall permitting only inbound TCP port 443 traffic. Security analysts discover repeated SQL injection and cross-site scripting (XSS) payloads embedded inside encrypted HTTPS requests targeting login parameters. Because developers need three weeks to refactor and test source code, which control should be deployed immediately to inspect application requests and provide virtual patching?',
    promptTh:
      'ระบบ REST API ของธนาคารออนไลน์ตั้งอยู่หลัง Layer 4 Stateful Firewall ที่อนุญาตเฉพาะทราฟฟิกขาเข้าพอร์ต TCP 443 นักวิเคราะห์ความปลอดภัยตรวจพบการส่งเพย์โหลดโจมตี SQL Injection และ Cross-Site Scripting (XSS) ซ่อนอยู่ภายในคำขอ HTTPS ที่เข้ารหัสเพื่อโจมตีพารามิเตอร์หน้าล็อกอิน เนื่องจากนักพัฒนาต้องใช้เวลาสามสัปดาห์ในการปรับแก้และทดสอบซอร์สโค้ด ควรนำมาตรการควบคุมใดมาติดตั้งทันทีเพื่อตรวจสอบคำขอระดับแอปพลิเคชันและทำ Virtual Patching?',
    choices: [
      {
        id: 'c1',
        textEn: 'Add stricter source-IP rules onto the existing Layer 4 stateful firewall for TCP port 443',
        textTh: 'เพิ่มกฎกรอง IP ต้นทางที่เข้มงวดขึ้นบน Layer 4 Stateful Firewall ตัวเดิมสำหรับพอร์ต TCP 443'
      },
      {
        id: 'c2',
        textEn: 'Deploy a Web Application Firewall (WAF) performing TLS termination and Layer 7 HTTP/JSON inspection',
        textTh: 'ติดตั้ง Web Application Firewall (WAF) ที่ทำ TLS Termination และตรวจสอบคำขอ HTTP/JSON ระดับ Layer 7'
      },
      {
        id: 'c3',
        textEn: 'Connect a passive network sensor to a switch SPAN port without enabling inline blocking',
        textTh: 'เชื่อมต่อเซ็นเซอร์เครือข่ายแบบ Passive เข้ากับพอร์ต Switch SPAN โดยไม่เปิดใช้งานการบล็อกแบบ Inline'
      },
      {
        id: 'c4',
        textEn: 'Configure IPsec Authentication Header (AH) in transport mode on the API server interface',
        textTh: 'ตั้งค่า IPsec Authentication Header (AH) ในโหมด Transport บนอินเทอร์เฟซของเซิร์ฟเวอร์ API'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'Layer 4 Firewall ดูเพียง IP/Port/Connection State จึงมองไม่เห็นโค้ดโจมตีในคำขอ HTTP/JSON ที่วิ่งบน TCP 443 อุปกรณ์เฉพาะทางที่เข้าใจโครงสร้าง HTTP Headers, Cookies, Form Parameters และ JSON Payload เพื่อสกัด SQLi/XSS และทำ Virtual Patching ชั่วคราวระหว่างรอแก้ซอร์สโค้ดคือ **Web Application Firewall (WAF)** (ควบคู่กับการถอดตรวจ TLS)',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: ระบบธนาคารต้องรับลูกค้าทั่วไปจากอินเทอร์เน็ตจึงจำกัด IP ต้นทางทั้งหมดไม่ได้ และ Layer 4 Firewall ไม่สามารถแกะเนื้อหา HTTPS เพื่อดู SQLi/XSS Layer 4 Firewall เหมาะกับการกรองพอร์ตและสถานะการเชื่อมต่อเบื้องต้น',
      c2: 'ถูกต้อง: WAF ทำงานระดับ Layer 7 เฉพาะทางสำหรับ HTTP/HTTPS และ API สามารถถอดรหัส TLS ตรวจสอบพารามิเตอร์และบล็อก SQLi/XSS แบบ Virtual Patching ได้ทันที',
      c3: 'ไม่ถูกต้อง: Passive Sensor ผ่าน SPAN ทำได้เพียงตรวจจับและแจ้งเตือน ไม่สามารถหยุดยั้งคำขอโจมตีที่กำลังเข้าเซิร์ฟเวอร์ได้ทันท่วงที Passive Sensor เหมาะกับการเฝ้าระวังโดยไม่กระทบความเร็วเครือข่าย',
      c4: 'ไม่ถูกต้อง: IPsec AH ให้เพียงการยืนยันความถูกต้องระดับ Layer 3 แต่ไม่ได้ป้องกันหรือตรวจสอบคำขอเว็บระดับ Layer 7 และใช้กับงาน VPN/IP Packet Integrity'
    },
    misconceptionTh:
      'ผู้เรียนมักคิดว่า Stateful Firewall ที่เปิดเฉพาะพอร์ต 443 หรือ IPS ทั่วไปสามารถแทนที่ WAF ในการวิเคราะห์พารามิเตอร์ JSON และป้องกันการโจมตีเว็บแอปพลิเคชัน OWASP Top 10 ได้ครบถ้วน',
    relatedLessonIds: ['L3-04', 'L2-04'],
    tags: ['waf', 'layer-7', 'virtual-patching', 'web-security']
  },
  {
    id: 'Q3-023',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A growing corporation is upgrading firewalls across two distinct environments: a 20-person remote sales branch requiring firewalling, URL filtering, gateway antivirus, anti-spam, and VPN inside a single budget-friendly box with minimal IT overhead; and a multi-gigabit corporate headquarters requiring high-throughput deep packet inspection, application control, and identity integration without single-box bottlenecks. Which firewall pairing BEST fits both environments?',
    promptTh:
      'บริษัทที่กำลังเติบโตวางแผนอัปเกรดไฟร์วอลล์ในสองสภาพแวดล้อมที่แตกต่างกัน แห่งแรกคือสำนักงานขายสาขาขนาด 20 คนที่ต้องการฟังก์ชัน Firewall, URL Filtering, Gateway Antivirus, Anti-Spam และ VPN ภายในอุปกรณ์เครื่องเดียวที่ประหยัดงบประมาณและดูแลง่าย แห่งที่สองคือสำนักงานใหญ่ที่มีทราฟฟิกระดับหลายกิกะบิตต่อวินาทีซึ่งต้องการ Deep Packet Inspection, Application Control และการผูกตัวตนผู้ใช้งานอย่างมีประสิทธิภาพโดยไม่เกิดคอขวดจากเครื่องสารพัดประโยชน์กล่องเดียว การจับคู่ประเภทไฟร์วอลล์ใดเหมาะสมที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Stateless packet-filtering routers for headquarters; dedicated enterprise WAF clusters for the 20-person sales branch',
        textTh: 'เราเตอร์กรองแพ็กเก็ตแบบ Stateless สำหรับสำนักงานใหญ่ และคลัสเตอร์ WAF ระดับองค์กรสำหรับสาขา 20 คน'
      },
      {
        id: 'c2',
        textEn: 'Next-Generation Firewall (NGFW) solely for the 20-person branch; legacy Layer 4 ACLs without DPI for headquarters',
        textTh: 'Next-Generation Firewall (NGFW) เฉพาะสำหรับสาขา 20 คน และ Layer 4 ACLs รุ่นเก่าที่ไม่มี DPI สำหรับสำนักงานใหญ่'
      },
      {
        id: 'c3',
        textEn: 'Passive IDS sensors for the 20-person sales branch; Layer 4 stateful firewalls without DPI for headquarters',
        textTh: 'เซ็นเซอร์ IDS แบบ Passive สำหรับสาขา 20 คน และไฟร์วอลล์ Layer 4 Stateful ที่ไม่มี DPI สำหรับสำนักงานใหญ่'
      },
      {
        id: 'c4',
        textEn: 'Unified Threat Management (UTM) for the branch office; Next-Generation Firewall (NGFW) for headquarters',
        textTh: 'Unified Threat Management (UTM) สำหรับสำนักงานสาขา และ Next-Generation Firewall (NGFW) สำหรับสำนักงานใหญ่'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      '**UTM (Unified Threat Management)** รวมทุกฟีเจอร์ (Firewall, IPS, AV, Anti-Spam, URL Filter, VPN) ไว้ในกล่องเดียว จึงคุ้มค่าและจัดการง่ายเหมาะกับธุรกิจ SMB หรือสำนักงานสาขาขนาดเล็ก แต่มีโอกาสเกิดคอขวดเมื่อรับโหลดสูงมาก ส่วน **NGFW** ออกแบบมาสำหรับองค์กรขนาดกลาง-ใหญ่ที่ต้องการประสิทธิภาพ DPI, Application Awareness, User Identity และ IPS ในระดับความเร็วสูงโดยไม่รวมฟีเจอร์ที่ไม่จำเป็นอย่าง Anti-Spam มาสร้างคอขวด',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Stateless Router ไม่มี DPI/Application Control และ WAF ใช้คุ้มครองเว็บเซิร์ฟเวอร์ไม่ใช่ไฟร์วอลล์สำหรับพนักงานในสาขา; Stateless Router เหมาะกับการกรองแพ็กเก็ตพื้นฐานความเร็วสูงที่ไม่ต้องติดตาม State และ WAF เหมาะกับการวางหน้าเว็บแอปพลิเคชัน',
      c2: 'ไม่ถูกต้อง: วางสลับบทบาทกัน ทำให้สำนักงานใหญ่ขาด DPI และ Application Control ขณะที่สาขาไม่ได้รวมฟีเจอร์ครบวงจรอย่าง Anti-Spam/Gateway AV ในกล่องเดียว; การวางลักษณะนี้ผิดขนาดและจุดประสงค์ของแต่ละอุปกรณ์',
      c3: 'ไม่ถูกต้อง: Passive IDS ไม่สามารถบล็อกหรือกรองเว็บให้สาขาได้ และไฟร์วอลล์ Layer 4 อย่างเดียวไม่ให้ DPI หรือการระบุตัวตนผู้ใช้ที่สำนักงานใหญ่ต้องการ; Passive IDS เหมาะกับงานเฝ้าตรวจแบบ Out-of-path ส่วน Layer 4 Stateful เหมาะกับการคัดกรองพอร์ตระหว่างซับเน็ตทั่วไป',
      c4: 'ถูกต้อง: UTM ตอบโจทย์ All-in-One สำหรับ Branch/SMB และ NGFW ตอบโจทย์องค์กรขนาดใหญ่ที่เน้นประสิทธิภาพ DPI และ Identity Integration'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนระหว่าง UTM กับ NGFW เนื่องจากทั้งคู่ทำงานระดับ Layer 3–7 แต่จุดต่างเชิงสถาปัตยกรรมคือ UTM เน้นรวมสารพัดฟีเจอร์ครบจบในกล่องเดียวสำหรับ SMB/สาขา ส่วน NGFW เน้นสมรรถนะ DPI/App Control/Identity ที่รองรับโหลดสูงระดับองค์กร',
    relatedLessonIds: ['L3-04', 'L4-06'],
    tags: ['utm', 'ngfw', 'firewalls', 'branch-office']
  },
  {
    id: 'Q3-024',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'A logistics company is building a persistent site-to-site VPN across the public internet between its headquarters edge gateway and a regional warehouse gateway. Security standards require encrypting all packet payloads, verifying message integrity, and hiding original internal source and destination IP headers inside a new outer IP packet. Which IPsec configuration satisfies ALL requirements?',
    promptTh:
      'บริษัทโลจิสติกส์กำลังสร้าง Site-to-Site VPN แบบถาวรผ่านอินเทอร์เน็ตสาธารณะระหว่างเกตเวย์ขอบเครือข่ายของสำนักงานใหญ่กับเกตเวย์ของคลังสินค้าภูมิภาค มาตรฐานความปลอดภัยกำหนดให้ต้องเข้ารหัสเพย์โหลดทั้งหมด ตรวจสอบความถูกต้องครบถ้วนของข้อความ และซ่อนส่วนหัว IP ต้นทาง-ปลายทางภายในเดิมไว้ในแพ็กเก็ต IP ใหม่ชั้นนอก การตั้งค่า IPsec รูปแบบใดตอบสนองข้อกำหนดทั้งหมดนี้?',
    choices: [
      {
        id: 'c1',
        textEn: 'Encapsulating Security Payload (ESP) operating in tunnel mode with IKEv2 key negotiation',
        textTh: 'Encapsulating Security Payload (ESP) ที่ทำงานใน Tunnel Mode ร่วมกับการเจรจากุญแจแบบ IKEv2'
      },
      {
        id: 'c2',
        textEn: 'Authentication Header (AH) operating in transport mode with static pre-shared routing tables',
        textTh: 'Authentication Header (AH) ที่ทำงานใน Transport Mode ร่วมกับตารางเส้นทางแบบคงที่'
      },
      {
        id: 'c3',
        textEn: 'Authentication Header (AH) operating in tunnel mode without payload encryption',
        textTh: 'Authentication Header (AH) ที่ทำงานใน Tunnel Mode โดยไม่มีการเข้ารหัสเพย์โหลด'
      },
      {
        id: 'c4',
        textEn: 'Encapsulating Security Payload (ESP) operating in transport mode leaving original IP headers exposed',
        textTh: 'Encapsulating Security Payload (ESP) ที่ทำงานใน Transport Mode โดยปล่อยให้ส่วนหัว IP เดิมถูกมองเห็นได้'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'ในชุดโปรโตคอล IPsec เฉพาะ **ESP (Encapsulating Security Payload)** เท่านั้นที่ให้ทั้งการเข้ารหัสข้อมูล (Confidentiality) และการยืนยันความถูกต้อง (Integrity/Authentication) ขณะที่ AH ไม่ได้เข้ารหัสข้อมูล และระหว่างเกตเวย์สองสาขา (Site-to-Site) ต้องใช้ **Tunnel Mode** เพื่อเข้ารหัสทั้งแพ็กเก็ต IP เดิมแล้วหุ้ม IP Header ใหม่ชั้นนอก แตกต่างจาก Transport Mode ที่เข้ารหัสเฉพาะ Payload สำหรับ Host-to-Host',
    choiceRationales: {
      c1: 'ถูกต้อง: ESP ใน Tunnel Mode ให้ทั้งการเข้ารหัส Integrity และการห่อหุ้มปิดบัง Internal IP Header สำหรับการเชื่อม Site-to-Site Gateway',
      c2: 'ไม่ถูกต้อง: AH ไม่มีการเข้ารหัสข้อมูล (ขาด Confidentiality) และ Transport Mode ไม่ซ่อน IP Header เดิม ทั้ง AH และ Transport Mode ไม่ตอบโจทย์ Site-to-Site ที่ต้องการความลับข้อมูล',
      c3: 'ไม่ถูกต้อง: แม้ Tunnel Mode จะหุ้มแพ็กเก็ตเดิม แต่ AH ไม่ได้เข้ารหัสข้อมูลภายใน ทำให้ข้อมูลถูกดักอ่านระหว่างทางได้ AH เหมาะกับกรณีที่ต้องการยืนยัน Integrity/Authentication โดยไม่ต้องการ Encryption',
      c4: 'ไม่ถูกต้อง: Transport Mode เข้ารหัสเฉพาะ Payload โดยคง IP Header เดิมไว้ เหมาะสำหรับการสื่อสาร End-to-End ระหว่างโฮสต์สองเครื่องภายในเครือข่ายเดียวกัน ไม่ใช่ Site-to-Site Gateway'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนว่า AH ให้การเข้ารหัสด้วย หรือเลือกสลับระหว่าง Transport Mode (ใช้กับ Host-to-Host) กับ Tunnel Mode (ใช้กับ Site-to-Site Gateway)',
    relatedLessonIds: ['L3-04', 'L1-05'],
    tags: ['ipsec', 'esp', 'tunnel-mode', 'vpn']
  },
  {
    id: 'Q3-025',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'External auditors frequently connect remotely from restrictive hotel and airport Wi-Fi networks that block UDP ports 500 and 4500 as well as IPsec ESP protocol packets. Furthermore, corporate security policy requires that all outbound internet web browsing from connected remote laptops be routed through headquarters DLP and URL filtering controls. Which TWO remote access configurations satisfy BOTH requirements? (Choose two.)',
    promptTh:
      'ผู้ตรวจสอบภายนอกมักเชื่อมต่อระยะไกลจากเครือข่าย Wi-Fi ของโรงแรมและสนามบินที่เข้มงวดซึ่งบล็อกพอร์ต UDP 500 และ 4500 รวมถึงแพ็กเก็ตโปรโตคอล IPsec ESP นอกจากนี้ นโยบายความปลอดภัยของบริษัทยังกำหนดให้ทราฟฟิกเข้าชมเว็บไซต์อินเทอร์เน็ตขาออกทั้งหมดจากแล็ปท็อปที่เชื่อมต่อระยะไกลต้องวิ่งผ่านระบบ DLP และ URL Filtering ที่สำนักงานใหญ่ การตั้งค่าการเข้าถึงระยะไกล 2 ข้อใดที่ตอบสนองข้อกำหนดทั้งสองประการนี้? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Enable VPN split tunneling so general internet browsing exits directly through local hotel Wi-Fi',
        textTh: 'เปิดใช้งาน VPN Split Tunneling เพื่อให้การท่องอินเทอร์เน็ตทั่วไปออกทาง Wi-Fi ของโรงแรมโดยตรง'
      },
      {
        id: 'c2',
        textEn: 'Require IPsec AH over UDP port 500 as the sole supported remote client transport',
        textTh: 'บังคับใช้ IPsec AH ผ่านพอร์ต UDP 500 เป็นช่องทางเชื่อมต่อระยะไกลเพียงรูปแบบเดียว'
      },
      {
        id: 'c3',
        textEn: 'Configure an SSL/TLS VPN operating over TCP port 443 using TLS 1.2 or TLS 1.3',
        textTh: 'ตั้งค่า SSL/TLS VPN ที่ทำงานบนพอร์ต TCP 443 โดยใช้โปรโตคอล TLS 1.2 หรือ TLS 1.3'
      },
      {
        id: 'c4',
        textEn: 'Use per-application ZTNA connectors solely for internal apps while letting general web traffic bypass corporate filtering',
        textTh: 'ใช้ตัวเชื่อมต่อ ZTNA เฉพาะรายแอปพลิเคชันภายในโดยปล่อยให้ทราฟฟิกเว็บทั่วไปไม่ต้องผ่านการกรองขององค์กร'
      },
      {
        id: 'c5',
        textEn: 'Enforce full-tunnel VPN routing so all client traffic passes through corporate inspection gateways',
        textTh: 'บังคับใช้การกำหนดเส้นทาง VPN แบบ Full Tunneling เพื่อให้ทราฟฟิกทั้งหมดจากเครื่องลูกข่ายวิ่งผ่านเกตเวย์ตรวจสอบขององค์กร'
      }
    ],
    correctChoiceIds: ['c3', 'c5'],
    explanationTh:
      'เมื่อเครือข่ายโรงแรม/สนามบินบล็อก UDP 500/4500 และ ESP ของ IPsec การเลือกใช้ **TLS VPN บนพอร์ต TCP 443** (ที่ใช้มาตรฐาน TLS 1.2/1.3) จะช่วยให้ผ่านไฟร์วอลล์ภายนอกได้ราบรื่นเสมือนเว็บ HTTPS และเพื่อให้ทราฟฟิกออกอินเทอร์เน็ตทั้งหมดผ่าน DLP และ URL Filter ของสำนักงานใหญ่ ต้องบังคับใช้ **Full Tunneling** แทน Split Tunneling',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Split Tunneling ปล่อยให้ทราฟฟิกอินเทอร์เน็ตทั่วไปออกตรงจากโรงแรมโดยไม่ผ่าน DLP และ URL Filter ขององค์กร; Split Tunneling เหมาะเมื่อต้องการลดภาระ Bandwidth ศูนย์กลางและมีระบบ Cloud SWG/Endpoint ดูแลเครื่องปลายทางแล้ว',
      c2: 'ไม่ถูกต้อง: โจทย์ระบุชัดว่าโรงแรมบล็อก UDP 500/4500 และ AH ไม่มีการเข้ารหัส; IPsec IKE/ESP เหมาะกับ Site-to-Site หรือเครือข่ายที่เปิดพอร์ตมาตรฐานไว้',
      c3: 'ถูกต้อง: TLS VPN ใช้พอร์ต TCP 443 จึงผ่านข้อจำกัดไฟร์วอลล์สาธารณะได้ง่ายและปลอดภัยด้วย TLS 1.2/1.3',
      c4: 'ไม่ถูกต้อง: การใช้ ZTNA เฉพาะแอปพลิเคชันภายในโดยไม่กรองเว็บทั่วไปขัดต่อข้อกำหนดของโจทย์ที่ต้องส่งทราฟฟิกเว็บขาออกทั้งหมดผ่าน DLP และ URL Filtering ที่สำนักงานใหญ่; ZTNA จะเหมาะกับสถาปัตยกรรม Zero Trust เมื่อใช้ร่วมกับ Cloud SWG/SASE',
      c5: 'ถูกต้อง: Full Tunneling บังคับให้ทุกแพ็กเก็ตจากเครื่องลูกข่ายวิ่งกลับเข้าอุโมงค์ VPN เพื่อตรวจสอบผ่าน DLP และ Web Proxy ขององค์กร'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนระหว่าง Split Tunnel (เน้นความเร็ว/ประหยัด Bandwidth แต่ลดการมองเห็นขององค์กร) กับ Full Tunnel (เน้นคุม DLP/Proxy ครบถ้วน) รวมถึงลืมข้อได้เปรียบด้านพอร์ต 443 ของ TLS VPN',
    relatedLessonIds: ['L3-04', 'L4-06', 'L4-07'],
    tags: ['tls-vpn', 'full-tunnel', 'split-tunnel', 'remote-access']
  },
  {
    id: 'Q3-026',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'An enterprise with 45 regional offices and 1,500 remote employees currently backhauls all branch and VPN traffic across expensive MPLS circuits to a central headquarters data center before reaching cloud SaaS applications, causing severe hair-pinning latency. Leadership wants direct local internet breakouts utilizing broadband and 5G links while consistently enforcing Zero Trust Network Access (ZTNA), Secure Web Gateway (SWG), CASB, and Cloud Firewall (FWaaS) closest to every user. Which architecture BEST meets these requirements?',
    promptTh:
      'องค์กรที่มีสำนักงานสาขา 45 แห่งและพนักงานทำงานทางไกล 1,500 คน ปัจจุบันต้องดึงทราฟฟิกทั้งหมดจากสาขาและ VPN กลับมายังศูนย์ข้อมูลสำนักงานใหญ่ผ่านสาย MPLS ราคาแพงก่อนออกสู่แอปพลิเคชัน Cloud SaaS ทำให้เกิดความหน่วงสูงจากปัญหา Hair-pinning ฝ่ายบริหารต้องการให้แต่ละสาขาออกอินเทอร์เน็ตโดยตรงผ่านลิงก์ Broadband และ 5G พร้อมทั้งบังคับใช้นโยบาย Zero Trust Network Access (ZTNA), Secure Web Gateway (SWG), CASB และ Cloud Firewall (FWaaS) ณ จุดใกล้ผู้ใช้งานทุกแห่งอย่างสม่ำเสมอ สถาปัตยกรรมใดตอบโจทย์นี้ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Legacy hub-and-spoke MPLS topology paired with standalone Layer 4 packet filters at headquarters',
        textTh: 'โครงข่าย Hub-and-spoke MPLS แบบดั้งเดิมร่วมกับตัวกรองแพ็กเก็ต Layer 4 แบบเดี่ยวที่สำนักงานใหญ่'
      },
      {
        id: 'c2',
        textEn: 'Direct uninspected broadband breakouts at branch offices paired with split-tunnel client VPNs without cloud security',
        textTh: 'การออก Broadband โดยตรงที่สาขาแบบไม่มีการตรวจสอบร่วมกับ Client VPN แบบ Split-tunnel ที่ไม่มีระบบป้องกันบนคลาวด์'
      },
      {
        id: 'c3',
        textEn: 'Secure Access Service Edge (SASE) converging SD-WAN connectivity with cloud-delivered security edge enforcement',
        textTh: 'Secure Access Service Edge (SASE) ที่หลอมรวมการเชื่อมต่อ SD-WAN เข้ากับชุดมาตรการป้องกันบน Cloud Security Edge'
      },
      {
        id: 'c4',
        textEn: 'Physical isolation (air-gapped) deployment across all 45 branches connected through dedicated out-of-band modems',
        textTh: 'การแยกทางกายภาพแบบ Air-gapped ในทั้ง 45 สาขาโดยเชื่อมต่อผ่านโมเด็ม Out-of-Band เฉพาะจุด'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      '**SASE (Secure Access Service Edge)** เป็นสถาปัตยกรรมที่ผสาน **SD-WAN** (รวม MPLS/Broadband/5G และทำ Local Breakout) เข้ากับชุดความปลอดภัยบนคลาวด์ (**SSE: ZTNA, SWG, CASB, FWaaS**) ณ จุด Edge PoP ที่ใกล้ผู้ใช้ที่สุด จึงขจัดปัญหา Hair-pinning ลดค่าสาย MPLS และคงมาตรฐาน Zero Trust ได้ทั้งสาขาและพนักงาน Remote',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Hub-and-spoke MPLS กลับสำนักงานใหญ่คือสาเหตุเดิมของปัญหา Hair-pinning และค่าใช้จ่ายสูง; โครงสร้างนี้เหมาะกับองค์กรที่แอปพลิเคชันทั้งหมดยังคงรันอยู่ภายใน On-Premises สำนักงานใหญ่เท่านั้น',
      c2: 'ไม่ถูกต้อง: การเปิด Local Breakout โดยไม่มี SWG, CASB, FWaaS หรือ ZTNA ทำให้สาขาและพนักงานออกคลาวด์โดยไม่ถูกตรวจสอบภัยคุกคาม; SD-WAN เพียงอย่างเดียวเหมาะกับการปรับปรุงเส้นทางเชื่อมต่อ WAN เมื่อมีระบบป้องกันแยกต่างหากรองรับอยู่แล้ว',
      c3: 'ถูกต้อง: SASE รวมความคล่องตัวด้านเครือข่ายของ SD-WAN เข้ากับการบังคับความปลอดภัยบนคลาวด์ (ZTNA, SWG, CASB, FWaaS) ณ ขอบเครือข่ายใกล้ผู้ใช้',
      c4: 'ไม่ถูกต้อง: ระบบ Air-gapped ขัดแย้งกับความต้องการเชื่อมต่อ Cloud SaaS และ Broadband/5G; ส่วน Air-gap เหมาะกับระบบความลับระดับสูงที่ไม่ต้องการเชื่อมอินเทอร์เน็ต'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจว่า SD-WAN เพียงอย่างเดียวเพียงพอแทน SASE แล้ว แต่ SD-WAN มุ่งเน้นด้าน Routing/Connectivity ขณะที่ SASE นำ SD-WAN มารวมกับ Cloud Security Stack (ZTNA, SWG, CASB, FWaaS) เพื่อความปลอดภัยครบวงจร',
    relatedLessonIds: ['L3-04', 'L1-03'],
    tags: ['sase', 'sd-wan', 'ztna', 'cloud-security']
  },
  {
    id: 'Q3-027',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    type: 'msq',
    selectCount: 3,
    difficulty: 'exam-ready',
    promptEn:
      'A healthcare SaaS provider is remediating three findings from an infrastructure security assessment: (1) visitors can gain internal LAN access via unauthenticated conference-room switch ports, (2) attackers are tampering with HTTP parameters against the public patient API, and (3) engineers connect via SSH directly from regular corporate laptops into restricted database nodes. Which THREE controls BEST remediate these exact vulnerabilities? (Choose three.)',
    promptTh:
      'ผู้ให้บริการ SaaS ด้านสุขภาพกำลังแก้ไขข้อบกพร่องสามประการจากการประเมินความปลอดภัยโครงสร้างพื้นฐาน ได้แก่ (1) ผู้มาติดต่อสามารถเข้าถึง LAN ภายในผ่านพอร์ตสวิตช์ห้องประชุมที่ไม่มีการยืนยันตัวตน (2) ผู้โจมตีปลอมแปลงพารามิเตอร์ HTTP เพื่อโจมตี API ข้อมูลผู้ป่วยสาธารณะ และ (3) วิศวกรเชื่อมต่อ SSH โดยตรงจากแล็ปท็อปสำนักงานทั่วไปเข้าสู่โหนดฐานข้อมูลในโซน Restricted มาตรการควบคุม 3 ข้อใดแก้ไขช่องโหว่เฉพาะทั้งสามนี้ได้ดีที่สุด? (เลือก 3 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Place a Layer 4 stateful packet-filtering firewall without TLS inspection in front of the patient API',
        textTh: 'วางไฟร์วอลล์กรองแพ็กเก็ตแบบ Layer 4 Stateful โดยไม่ถอดตรวจ TLS ด้านหน้า API ข้อมูลผู้ป่วย'
      },
      {
        id: 'c2',
        textEn: 'Deploy a Web Application Firewall (WAF) in reverse-proxy mode in front of the patient API',
        textTh: 'ติดตั้ง Web Application Firewall (WAF) ในโหมด Reverse Proxy ด้านหน้า API ข้อมูลผู้ป่วย'
      },
      {
        id: 'c3',
        textEn: 'Enable split-tunnel VPN routing on corporate laptops so database administration traffic bypasses internal security gateways',
        textTh: 'เปิดใช้การกำหนดเส้นทาง VPN แบบ Split Tunnel บนแล็ปท็อปบริษัทเพื่อให้ทราฟฟิกดูแลฐานข้อมูลข้ามเกตเวย์ความปลอดภัยภายใน'
      },
      {
        id: 'c4',
        textEn: 'Enable IEEE 802.1X port-based access control integrated with RADIUS and EAP-TLS on office switches',
        textTh: 'เปิดใช้งานการควบคุมการเข้าถึงระดับพอร์ต IEEE 802.1X ร่วมกับ RADIUS และ EAP-TLS บนสวิตช์สำนักงาน'
      },
      {
        id: 'c5',
        textEn: 'Require all database administration to pass through a hardened MFA-enforced jump server in a management zone',
        textTh: 'บังคับให้งานดูแลฐานข้อมูลทั้งหมดต้องเชื่อมต่อผ่าน Jump Server ที่เสริมความแข็งแกร่งและบังคับ MFA ในโซน Management'
      }
    ],
    correctChoiceIds: ['c2', 'c4', 'c5'],
    explanationTh:
      'ทักษะ **Selection of Effective Controls** คือการเลือกเครื่องมือให้ตรงกับชั้นปัญหา: (1) พอร์ตสวิตช์ห้องประชุมไร้การยืนยันตัวตนแก้ด้วย **IEEE 802.1X + RADIUS + EAP-TLS** (2) การโจมตีพารามิเตอร์ HTTP บน API สาธารณะแก้ด้วย **WAF** ระดับ Layer 7 (3) การ SSH ตรงเข้าฐานข้อมูลจากแล็ปท็อปทั่วไปแก้ด้วย **Jump Server + MFA** ใน Management Zone เพื่อลด Attack Surface และบันทึกการเข้าถึง',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Layer 4 Stateful Firewall ดูเพียง IP/Port และ State จึงมองไม่เห็นการปลอมแปลงพารามิเตอร์ HTTP ภายในทราฟฟิก HTTPS; Layer 4 Firewall เหมาะกับการกรองพอร์ตและควบคุมการเชื่อมต่อระดับเครือข่ายระหว่างโซน',
      c2: 'ถูกต้อง: WAF แบบ Reverse Proxy ตรวจสอบและกรองพารามิเตอร์ HTTP/HTTPS ของ Patient API ได้อย่างตรงจุด',
      c3: 'ไม่ถูกต้อง: Split Tunneling ไม่ช่วยแก้ปัญหาพอร์ตสวิตช์, API หรือสิทธิ์แอดมินฐานข้อมูลและกลับทำให้ขาดการตรวจสอบจากเกตเวย์กลาง; Split Tunneling เหมาะสำหรับแยกทราฟฟิกอินเทอร์เน็ตทั่วไปของพนักงานระยะไกลออกจาก VPN เมื่อมี Cloud Security รองรับแล้ว',
      c4: 'ถูกต้อง: IEEE 802.1X ร่วมกับ EAP-TLS บังคับยืนยันตัวตนด้วยใบรับรองก่อนเปิดพอร์ตสวิตช์ ป้องกันคนนอกเสียบสายแลนเข้า LAN ภายใน',
      c5: 'ถูกต้อง: Hardened Jump Server + MFA ใน Management Zone ลด Attack Surface ของฐานข้อมูลและควบคุมบันทึกกิจกรรมผู้ดูแลระบบ'
    },
    misconceptionTh:
      'ผู้เรียนอาจเลือกเครื่องมือความปลอดภัยโดยไม่แยกชั้นปัญหา เช่น ใช้ Firewall Layer 4 แทน WAF สำหรับการโจมตี HTTP Parameter หรือละเลยการวาง Jump Server สำหรับงานบริหารฐานข้อมูล',
    relatedLessonIds: ['L3-03', 'L3-04'],
    tags: ['selection-of-controls', '802.1x', 'waf', 'jump-server']
  }
];
