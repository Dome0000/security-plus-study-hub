import type { Lesson } from '../../types';

export const D3_LESSONS_BATCH1: Lesson[] = [
  {
    id: 'L3-01',
    examCode: 'SY0-701',
    domainId: 'D3',
    order: 16,
    titleTh: 'สถาปัตยกรรม On-Premises, Cloud, Containers, IaC และ Serverless',
    titleEn: 'Enterprise and Cloud Architecture Models',
    estimatedMinutes: 45,
    learningObjectives: [
      'เปรียบเทียบผลกระทบด้านความปลอดภัยของสถาปัตยกรรมแบบ On-Premises, Centralized vs. Decentralized รวมถึงโมเดล Cloud (Shared Responsibility Matrix, Hybrid และ Third-Party Vendors) ได้อย่างแม่นยำ',
      'อธิบายหลักการทำงาน ความแตกต่าง และจุดเสี่ยงของ Virtualization, Containerization, Microservices, Serverless และ Infrastructure as Code (IaC)',
      'วิเคราะห์บทบาทของ High Availability, Compute และ Power ต่อความเสถียรและความมั่นคงปลอดภัยของโครงสร้างพื้นฐานองค์กร',
      'ประเมินและเลือกใช้รูปแบบสถาปัตยกรรมตามปัจจัยตัดสินใจทั้ง 8 มิติ (Cost, Responsiveness, Scalability, Ease of Deployment, Risk Transference, Ease of Recovery, Patch Availability และ Inability to Patch) ตามขอบเขต SY0-701 Objective 3.1'
    ],
    objectiveIds: ['3.1'],
    prerequisites: [
      'L1-02 หลักการ CIA Triad, Non-repudiation, AAA และ Gap Analysis',
      'L1-04 กระบวนการ Change Management และผลกระทบด้านความปลอดภัย',
      'L2-05 ช่องโหว่ Hardware, Virtualization, Cloud, Mobile และ Zero-Day'
    ],
    sections: [
      {
        id: 'sec-onprem-centralized-cloud',
        titleTh: '1. On-Premises, Centralized vs. Decentralized และ Cloud Responsibility Matrix',
        contentTh: [
          'สถาปัตยกรรมแบบ On-Premises คือการที่องค์กรเป็นเจ้าของ ติดตั้ง และบริหารจัดการโครงสร้างพื้นฐานทั้งหมดด้วยตนเองภายในศูนย์ข้อมูลหรือห้องเซิร์ฟเวอร์ขององค์กร ตั้งแต่พื้นที่ทางกายภาพ ระบบไฟฟ้า ระบบทำความเย็น เซิร์ฟเวอร์ สวิตช์ ไปจนถึงระบบปฏิบัติการและแอปพลิเคชัน เหตุผลที่หลายองค์กรยังเลือกใช้ On-Premises ก็เพื่อรักษาอำนาจควบคุมข้อมูลและฮาร์ดแวร์อย่างสมบูรณ์ในงานที่มีข้อกำหนดด้าน Data Sovereignty เข้มงวด หรือระบบ Legacy ที่ย้ายขึ้นคลาวด์ได้ยาก ความแตกต่างสำคัญจากคลาวด์คือองค์กรแบกรับภาระเงินลงทุนเริ่มต้น (CapEx) ค่าดูแลรักษา และการแพตช์ทุกชั้นด้วยตัวเองทั้งหมด แลกกับการไม่ต้องพึ่งพาผู้ให้บริการภายนอกสำหรับระบบหลัก',
          'ในการจัดโครงสร้างการบริหารและการประมวลผล องค์กรมักต้องเลือกระหว่าง Centralized กับ Decentralized Architecture แบบ Centralized คือการรวมศูนย์ข้อมูล การประมวลผล การยืนยันตัวตน (Identity) และนโยบายความปลอดภัยไว้ที่ศูนย์กลางเพียงจุดเดียวหรือคลัสเตอร์หลัก ซึ่งช่วยให้บังคับใช้ Baseline, แพตช์ และตรวจสอบ Log ได้สม่ำเสมอ แต่มีความเสี่ยงเรื่อง Single Point of Failure และความหน่วง (Latency) สำหรับผู้ใช้ในสาขาห่างไกล ในทางกลับกัน แบบ Decentralized จะกระจายภาระงาน ข้อมูล หรืออำนาจการตัดสินใจไปยังสาขา ภูมิภาค Edge หรือแต่ละทีมพัฒนาอิสระ ข้อดีคือตอบสนองได้ไวขึ้นและแยกขอบเขตความเสียหาย (Blast Radius) ออกจากกันหากจุดใดถูกเจาะ แต่จะต่างจาก Centralized ตรงที่เสี่ยงต่อ Configuration Drift, การเปิด Shadow IT และความยากในการติดตามเฝ้าระวังแบบรวมศูนย์',
          'เมื่อองค์กรหันมาใช้บริการ Cloud Computing หัวใจสำคัญที่สุดในการสอบ SY0-701 คือ Cloud Shared Responsibility Matrix ซึ่งกำหนดเส้นแบ่งความรับผิดชอบด้านความปลอดภัยระหว่างผู้ให้บริการคลาวด์ (CSP) กับลูกค้าแตกต่างกันตามโมเดลบริการ ในโมเดล IaaS (Infrastructure as a Service) ผู้ให้บริการรับผิดชอบความปลอดภัยของอาคาร ศูนย์ข้อมูล ฮาร์ดแวร์ และ Hypervisor ส่วนลูกค้ายังคงต้องดูแลการแพตช์ระบบปฏิบัติการ ไฟร์วอลล์เสมือน การตั้งค่าระบบ และข้อมูล ในโมเดล PaaS (Platform as a Service) ผู้ให้บริการรับช่วงดูแลระบบปฏิบัติการและ Runtime ให้ด้วย ทำให้ลูกค้าโฟกัสที่โค้ดแอปพลิเคชัน สิทธิ์การเข้าถึง และข้อมูล ส่วนในโมเดล SaaS (Software as a Service) ผู้ให้บริการดูแลตั้งแต่ฮาร์ดแวร์จนถึงตัวซอฟต์แวร์ แต่สิ่งที่ลูกค้าไม่มีวันโอนความรับผิดชอบออกได้ในทุกโมเดลคือการคุ้มครองข้อมูล การจำแนกชั้นข้อมูล การบริหารบัญชีผู้ใช้งาน/MFA และความปลอดภัยของอุปกรณ์ปลายทาง',
          'องค์กรจำนวนมากยังเลือกใช้งานสถาปัตยกรรมแบบ Hybrid Cloud ที่เชื่อมโยงระบบ On-Premises เข้ากับ Public Cloud เพื่อให้เก็บข้อมูลความลับสูงไว้ในองค์กรและขยายขีดความสามารถการประมวลผลออกไปยังคลาวด์ในช่วงโหลดสูง (Cloud Bursting) ทว่าโมเดล Hybrid และการใช้ Third-Party Vendors มาพร้อมความท้าทายใหม่ ได้แก่ การซิงค์ระบบยืนยันตัวตน (Identity Federation) ข้ามสภาพแวดล้อม การรักษาความสอดคล้องของนโยบายเครือข่ายทั้งสองฝั่ง และการจัดการความเสี่ยงจากซัพพลายเชน (Third-Party Risk) ที่ต้องอาศัยการประเมิน Vendor, ข้อตกลง SLA และสิทธิ์การตรวจสอบ (Right-to-Audit) เพื่อยืนยันว่าผู้ให้บริการปฏิบัติตามมาตรฐานความปลอดภัยจริง'
        ],
        keyPointsTh: [
          'On-Premises ให้การควบคุมสูงสุดทุกชั้นแต่มีภาระ CapEx และการบำรุงรักษาเองทั้งหมด',
          'Centralized คุมมาตรฐานและเฝ้าระวังง่ายแต่เสี่ยง Single Point of Failure ส่วน Decentralized ตอบสนองไวแต่ดูแลให้สม่ำเสมอได้ยากกว่า',
          'ตาม Shared Responsibility Matrix ลูกค้ายังคงรับผิดชอบ Data, Identity/IAM และ Client Endpoints เสมอไม่ว่าจะใช้ IaaS, PaaS หรือ SaaS',
          'Hybrid Cloud และ Third-Party Vendors เพิ่มความซับซ้อนในการเชื่อม Identity และต้องควบคุมผ่านการประเมิน Vendor Risk อย่างต่อเนื่อง'
        ]
      },
      {
        id: 'sec-virt-container-micro-serverless',
        titleTh: '2. Virtualization, Containerization, Microservices และ Serverless',
        contentTh: [
          'Virtualization คือเทคโนโลยีที่ใช้ซอฟต์แวร์ชั้นกลางที่เรียกว่า Hypervisor (แบ่งเป็น Type 1 ที่ติดตั้งบนฮาร์ดแวร์โดยตรงสำหรับศูนย์ข้อมูล และ Type 2 ที่รันบนระบบปฏิบัติการปกติ) เพื่อแบ่งเซิร์ฟเวอร์กายภาพเครื่องเดียวออกเป็น Virtual Machines (VMs) หลายเครื่อง โดยแต่ละ VM จะจำลองฮาร์ดแวร์เสมือนและรัน Guest OS ของตนเองแยกขาดจากกันอย่างสมบูรณ์ เหตุผลที่ใช้ Virtualization ก็เพื่อใช้ทรัพยากร CPU และ RAM ให้คุ้มค่าและแยกความเสี่ยงระดับระบบปฏิบัติการระหว่างงานต่างประเภท ข้อควรระวังด้านความปลอดภัยคือปัญหา VM Sprawl (สร้าง VM ทิ้งไว้โดยไม่ได้ติดตามแพตช์), ความเสี่ยงของ Snapshot เก่าที่ยังเก็บข้อมูลลับหรือช่องโหว่เดิม และช่องโหว่ระดับ Hypervisor ที่อาจนำไปสู่ VM Escape',
          'Containerization แตกต่างจาก Virtualization ตรงที่ไม่ได้จำลองฮาร์ดแวร์หรือรัน Guest OS ซ้ำซ้อนในแต่ละหน่วย แต่บรรจุโค้ดแอปพลิเคชัน ไลบรารี และไฟล์ตั้งค่าที่จำเป็นลงใน Container ที่ใช้ Kernel ของ Host OS ร่วมกันผ่าน Container Engine และระบบจัดการอย่าง Orchestrator เหตุใด Container จึงเป็นที่นิยมมากในยุค DevSecOps เพราะเปิดทำงานได้ในระดับเสี้ยววินาที พกพาข้ามสภาพแวดล้อมได้ดีและใช้ทรัพยากรน้อยกว่า VM มาก แต่เพราะทุก Container บนเครื่องเดียวกันแชร์ Kernel ร่วมกัน เส้นแบ่งการแยกตัวจึงบางกว่า VM หากตั้งค่าสิทธิ์ Container สูงเกินไป (Privileged Container) หรือ Kernel มีช่องโหว่ ผู้โจมตีอาจทำ Container Breakout ออกมาคุม Host ได้ นอกจากนี้องค์กรยังต้องสแกน Container Image หาช่องโหว่ใน Registry และห้ามฝังรหัสผ่านไว้ในไฟล์ Image',
          'Microservices คือแนวคิดการออกแบบซอฟต์แวร์โดยแยกแอปพลิเคชันขนาดใหญ่ (Monolithic) ออกเป็นบริการย่อยอิสระหลายตัวที่แต่ละตัวทำหน้าที่เฉพาะด้านและสื่อสารกันผ่าน APIs แทนที่จะรวมทุกฟังก์ชันอยู่ในโค้ดก้อนเดียว ข้อดีทางสถาปัตยกรรมคือสามารถปรับขยายเฉพาะบริการที่มีคนใช้งานหนาแน่นและจำกัดความเสียหายหากบริการย่อยตัวหนึ่งล่ม แต่จุดต่างสำคัญคือ Microservices ทำให้ปริมาณการสื่อสารภายใน (East-West Traffic) และจำนวน API Endpoints เพิ่มขึ้นมหาศาล ทีมความปลอดภัยจึงต้องวาง API Gateway, บังคับใช้ Mutual TLS (mTLS), ตรวจสอบสิทธิ์ทุกการเรียกใช้ระหว่างบริการ (Zero Trust) และใช้ Service Mesh ช่วยคุมเส้นทางการสื่อสาร',
          'Serverless หรือ Function as a Service (FaaS) ก้าวข้ามการจัดการเซิร์ฟเวอร์และคลัสเตอร์ไปอีกขั้น โดยนักพัฒนาเพียงอัปโหลดโค้ดฟังก์ชันสั้นๆ ที่ถูกปลุกให้ทำงานเมื่อมีเหตุการณ์มากระตุ้น (Event-driven) เช่น มีคำขอ HTTP เข้ามาหรือมีไฟล์อัปโหลดลง Storage จากนั้นผู้ให้บริการคลาวด์จะเป็นผู้จัดสรร Compute และแพตช์ระบบปฏิบัติการให้ทั้งหมด เมื่อไรควรใช้ Serverless เมื่อต้องการพัฒนาบริการที่ทราฟฟิกไม่สม่ำเสมอ จ่ายตามเวลาที่ประมวลผลจริง และลดภาระงานดูแล OS ความต่างจาก Container คือผู้ใช้งานแทบไม่เห็นโครงสร้างพื้นฐานหรือ Pod เลย แต่อาจเผชิญข้อจำกัดเรื่อง Cold Start (ความหน่วงเมื่อฟังก์ชันตื่นจากการพัก), Vendor Lock-in และพื้นผิวการโจมตีใหม่ที่เปลี่ยนไปโฟกัสที่การตั้งค่า IAM Role เกินจำเป็น (Over-privileged Function), ช่องโหว่ในโค้ด/Dependencies และการฉีดข้อมูลผ่าน Event Source'
        ],
        keyPointsTh: [
          'VM แยกด้วย Guest OS เต็มรูปแบบผ่าน Hypervisor ส่วน Container แชร์ Host OS Kernel ร่วมกันจึงเบาและเร็วกว่าแต่ต้องคุม Kernel/Image อย่างเข้มงวด',
          'Microservices ลดขนาด Blast Radius และขยายเฉพาะส่วนได้ แต่เพิ่ม API Attack Surface และ East-West Traffic',
          'Serverless (FaaS) ตัดภาระการแพตช์ OS และรันแบบ Event-driven แต่ต้องระวัง Cold Start, Vendor Lock-in และสิทธิ์ IAM ของแต่ละฟังก์ชัน'
        ]
      },
      {
        id: 'sec-iac-ha-compute-power',
        titleTh: '3. Infrastructure as Code (IaC), High Availability, Compute และ Power',
        contentTh: [
          'Infrastructure as Code (IaC) คือแนวทางบริหารจัดการและสร้างโครงสร้างพื้นฐานด้านไอที เช่น เครือข่าย VPC, ไฟร์วอลล์, กลุ่มสิทธิ์ และเซิร์ฟเวอร์ ด้วยไฟล์โค้ดหรือเทมเพลตแบบข้อความ (เช่น Declarative Templates) ที่เก็บในระบบ Version Control แทนการกดตั้งค่าทีละขั้นผ่านหน้าเว็บคอนโซล เหตุใด IaC จึงยกระดับความปลอดภัยอย่างมาก เพราะทำให้มั่นใจได้ว่าสภาพแวดล้อม Dev, Test และ Production ถูกสร้างขึ้นด้วย Baseline เดียวกันทุกประการ (Idempotency) ลดความผิดพลาดจากมนุษย์และป้องกัน Configuration Drift นอกจากนี้ยังสามารถใช้เครื่องมือสแกนโค้ด IaC (Static Analysis) ตรวจจับการตั้งค่าอันตรายเช่น Storage ที่เปิดสาธารณะตั้งแต่ก่อน Deploy จริง และช่วยสร้างระบบใหม่ทดแทนของเดิมที่เสียหายได้อย่างรวดเร็ว อย่างไรก็ตาม จุดอ่อนร้ายแรงของ IaC คือหากผู้ดูแลเผลอเขียน Secret Key ไว้ในไฟล์โค้ดหรือตั้งค่าเทมเพลตผิดพลาด ข้อบกพร่องนั้นจะถูกแพร่กระจายซ้ำไปยังทุกทรัพยากรที่ถูกสร้างจากเทมเพลตเดียวกันทันที',
          'High Availability (HA) ในมุมของสถาปัตยกรรมคือการออกแบบให้ระบบไม่มีจุดเดียวที่ล่มแล้วบริการหยุดชะงัก (Eliminate Single Points of Failure) ด้วยการทำ Redundancy, Load Balancing, Clustering และการกระจายทรัพยากรข้าม Availability Zones หรือภูมิภาค ในมุมมองความมั่นคงปลอดภัย HA สนับสนุนหลัก Availability ใน CIA Triad โดยตรงและช่วยรับมือกับความล้มเหลวของฮาร์ดแวร์หรือทราฟฟิกพุ่งสูงผิดปกติ แต่สถาปนิกความปลอดภัยต้องตระหนักว่ายิ่งระบบกระจายตัวทำ Replication ข้ามโซนมากเท่าไร พื้นผิวการโจมตีและข้อมูลที่วิ่งข้ามสายสัญญาณก็ยิ่งมากขึ้น จึงต้องเข้ารหัสทั้งข้อมูลที่สำรองไว้และช่องทางการซิงโครไนซ์ตลอดเวลา',
          'Compute และ Power เป็นปัจจัยทางกายภาพและทรัพยากรพื้นฐานที่มักถูกมองข้ามแต่ส่งผลโดยตรงต่อความปลอดภัยและความต่อเนื่อง Compute หมายถึงขีดความสามารถด้านหน่วยประมวลผล (CPU, GPU) และหน่วยความจำ หากจัดสรร Compute ไม่เพียงพอ ระบบตรวจสอบความปลอดภัยเช่น Deep Packet Inspection หรือการประมวลผล Log อาจเกิดคอขวดจนทำให้งานธุรกิจช้าลงหรือทำให้ระบบป้องกันดรอปแพ็กเก็ต ส่วน Power หมายถึงความต้องการและเสถียรภาพของพลังงานไฟฟ้า รวมถึงระบบสำรองไฟอย่าง UPS, เครื่องปั่นไฟ (Generators) และ Dual Power Distribution Units (PDUs) การใช้สถาปัตยกรรม On-Premises หรือ Edge Computing สำหรับงานประมวลผลหนักอย่าง AI หรือระบบเข้ารหัสความเร็วสูงบังคับให้องค์กรต้องวางแผนทั้งด้านกำลังไฟ การระบายความร้อน และความซ้ำซ้อนของแหล่งจ่ายไฟ ขณะที่ Cloud ช่วยโอนความรับผิดชอบด้านไฟฟ้าและสิ่งแวดล้อมเหล่านี้ไปให้ CSP ดูแลแทน'
        ],
        keyPointsTh: [
          'IaC ช่วยสร้างโครงสร้างพื้นฐานซ้ำได้อย่างแม่นยำ ตรวจจับ Misconfiguration ก่อนใช้งานจริง และกู้คืนได้ไว แต่ห้ามฝัง Secrets ลงในโค้ด',
          'High Availability ป้องกันบริการหยุดชะงักด้วยการกระจายโหนดและสำรองทรัพยากร แต่ต้องเข้ารหัสช่องทาง Replication ระหว่างโหนดด้วย',
          'Compute และ Power กำหนดขีดความสามารถในการรองรับโหลดงานและการทำงานต่อเนื่องของมาตรการความปลอดภัยทั้งบน On-Premises และ Edge'
        ]
      },
      {
        id: 'sec-architecture-considerations',
        titleTh: '4. เกณฑ์ตัดสินใจเลือกสถาปัตยกรรมทั้ง 8 มิติ (Architecture Considerations)',
        contentTh: [
          'ในการสอบ SY0-701 โจทย์สถานการณ์มักไม่ถามเพียงคำนิยาม แต่จะให้โจทย์ธุรกิจพร้อมข้อจำกัดแล้วให้ผู้สอบชั่งน้ำหนักปัจจัยทั้ง 8 ด้าน เริ่มจาก Cost ซึ่งต้องมองทั้งค่าลงทุนล่วงหน้า (CapEx) ของฮาร์ดแวร์ On-Premises เทียบกับค่าเช่าใช้ตามจริง (OpEx) ของ Cloud รวมถึงต้นทุนแฝงอย่างค่าส่งข้อมูลออก (Egress Fees) และค่า License ต่อคอร์ซีพียู ถัดมาคือ Responsiveness ซึ่งสะท้อนความเร็วในการตอบสนองต่อผู้ใช้งาน หากแอปพลิเคชันต้องการ Latency ต่ำระดับมิลลิวินาที การวางระบบแบบ Decentralized ใกล้ผู้ใช้งาน (Edge) หรือ On-Premises ภายในโรงงานย่อมตอบสนองไวกว่าการวิ่งข้ามภูมิภาคไปยังคลาวด์ หรือหากใช้ Serverless ก็ต้องคำนึงถึง Cold Start ด้วย ส่วน Scalability คือความสามารถในการรองรับโหลดงานที่เปลี่ยนแปลง ทั้งแบบ Vertical Scaling (เพิ่มสเปกเครื่องเดียว) และ Horizontal Scaling/Elasticity (เพิ่ม-ลดจำนวน Container หรือโหนดอัตโนมัติใน Cloud)',
          'มิติต่อมาคือ Ease of Deployment ซึ่งสถาปัตยกรรมแบบ IaC, Containers, PaaS และ Serverless สามารถ Deploy บริการใหม่ได้ภายในไม่กี่นาทีผ่านท่ออัตโนมัติ CI/CD แตกต่างจากการสั่งซื้อและติดตั้งเซิร์ฟเวอร์ On-Premises ที่อาจใช้เวลาหลายสัปดาห์ ด้าน Risk Transference การย้ายไปยัง Cloud หรือผู้ให้บริการภายนอกช่วยโอนย้ายความเสี่ยงบางส่วน เช่น การดูแลรักษาความปลอดภัยทางกายภาพ การจัดการ Power/Cooling หรือการแพตช์ฮาร์ดแวร์ไปยัง CSP แต่ผู้เรียนต้องจำไว้เสมอว่าองค์กรสามารถโอนความเสี่ยงเชิงปฏิบัติการได้ แต่ไม่สามารถโอนความรับผิดชอบทางกฎหมาย (Accountability) หากข้อมูลลูกค้าเกิดรั่วไหล และในมิติของ Ease of Recovery สถาปัตยกรรมที่ใช้ IaC ร่วมกับ Immutable Infrastructure และ Cloud Snapshots ช่วยให้ทำลายเครื่องที่ติดเชื้อแล้วสร้างใหม่จากโค้ดที่สะอาดได้อย่างรวดเร็ว ต่างจากเซิร์ฟเวอร์กายภาพที่ต้องกู้คืนและติดตั้งทีละขั้น',
          'สองมิติสุดท้ายที่ข้อสอบเน้นเป็นพิเศษคือ Patch Availability และ Inability to Patch สำหรับ Patch Availability สะท้อนว่าซอฟต์แวร์หรือแพลตฟอร์มนั้นมีแพตช์ให้ใช้งานสม่ำเสมอและใครเป็นผู้รับผิดชอบติดตั้ง เช่น ในโมเดล SaaS หรือ Serverless การอัปเดตแพตช์ OS จะเกิดขึ้นเบื้องหลังโดยผู้ให้บริการทันทีที่มีแพตช์ออกมา ลดช่องว่างเวลาเสี่ยง (Window of Exposure) ได้มาก แต่ในทางกลับกัน ปัญหา Inability to Patch เกิดขึ้นเมื่อองค์กรมีข้อจำกัดทำให้ไม่สามารถอัปเดตแพตช์ได้จริง เช่น ระบบการเงินเก่าที่ผู้ผลิตเลิกสนับสนุน (End-of-Life) อุปกรณ์ที่ต้องใช้ไดรเวอร์เฉพาะรุ่น หรือข้อจำกัดด้านเวลาหยุดระบบ เมื่อเผชิญภาวะ Inability to Patch สถาปนิกความปลอดภัยไม่สามารถปล่อยปละละเลยได้ แต่ต้องปรับสถาปัตยกรรมใช้ Compensating Controls เช่น การแยกเครือข่าย (Segmentation) วาง WAF/IPS ดักหน้าแบบ Virtual Patching หรือย้ายบริการไปหลัง Reverse Proxy เพื่อจำกัดการเข้าถึงเฉพาะต้นทางที่ได้รับอนุญาตเท่านั้น'
        ],
        keyPointsTh: [
          'Cost (CapEx vs. OpEx), Responsiveness (Latency/Edge) และ Scalability (Elasticity) เป็นตัวชี้วัดสมรรถนะและงบประมาณของสถาปัตยกรรม',
          'IaC และ Cloud ช่วยเพิ่ม Ease of Deployment และ Ease of Recovery ขณะที่ Risk Transference โอนเฉพาะภาระดูแลบางส่วนแต่ไม่โอน Accountability',
          'เมื่อเกิด Inability to Patch ต้องอาศัยมาตรการทางสถาปัตยกรรมชดเชย เช่น Segmentation, Reverse Proxy และ Virtual Patching'
        ]
      }
    ],
    keyTerms: [
      {
        termEn: 'On-Premises',
        explanationTh: 'การติดตั้งและบริหารจัดการฮาร์ดแวร์ เครือข่าย และซอฟต์แวร์ภายในสถานที่ขององค์กรเองทั้งหมด'
      },
      {
        termEn: 'Centralized vs. Decentralized',
        explanationTh: 'แนวทางจัดวางสถาปัตยกรรมแบบรวมศูนย์การจัดการไว้จุดเดียว เทียบกับการกระจายตัวไปยังสาขาหรือหน่วยย่อย'
      },
      {
        termEn: 'Shared Responsibility Matrix',
        explanationTh: 'ตารางแบ่งขอบเขตความรับผิดชอบด้านความปลอดภัยระหว่างผู้ให้บริการคลาวด์ (CSP) กับลูกค้าตามโมเดล IaaS, PaaS และ SaaS'
      },
      {
        termEn: 'Hybrid Cloud',
        explanationTh: 'สถาปัตยกรรมที่ผสมผสานและเชื่อมต่อโครงสร้างพื้นฐาน On-Premises เข้ากับ Public หรือ Private Cloud'
      },
      {
        termEn: 'Virtualization',
        explanationTh: 'การใช้ Hypervisor จำลองฮาร์ดแวร์กายภาพหนึ่งชุดออกเป็นหลาย Virtual Machines ที่มี Guest OS แยกกัน'
      },
      {
        termEn: 'Hypervisor',
        explanationTh: 'ชั้นซอฟต์แวร์หรือเฟิร์มแวร์ (Type 1 Bare-metal หรือ Type 2 Hosted) ที่ทำหน้าที่จัดสรรทรัพยากรและแยกส่วน Virtual Machines'
      },
      {
        termEn: 'Containerization',
        explanationTh: 'การบรรจุแอปพลิเคชันและ Dependencies ลงในหน่วยทำงานเบาที่แชร์ Kernel ของ Host OS ร่วมกันเพื่อความคล่องตัวและสม่ำเสมอ'
      },
      {
        termEn: 'Microservices',
        explanationTh: 'สถาปัตยกรรมที่แตกแอปพลิเคชันขนาดใหญ่เป็นบริการย่อยอิสระที่สื่อสารผ่าน API ช่วยจำกัดขอบเขตความเสียหายและปรับขยายเฉพาะจุดได้'
      },
      {
        termEn: 'Serverless Computing',
        acronym: 'FaaS',
        explanationTh: 'โมเดลการรันโค้ดฟังก์ชันตาม Event โดยผู้ให้บริการคลาวด์จัดการเซิร์ฟเวอร์ การขยายตัว และการแพตช์ OS ให้ทั้งหมด'
      },
      {
        termEn: 'Infrastructure as Code',
        acronym: 'IaC',
        explanationTh: 'การนิยามและสร้างโครงสร้างพื้นฐานผ่านไฟล์โค้ดหรือเทมเพลตอัตโนมัติ ช่วยลด Human Error และทำซ้ำได้สม่ำเสมอ'
      },
      {
        termEn: 'High Availability',
        acronym: 'HA',
        explanationTh: 'การออกแบบระบบให้มีทรัพยากรสำรองและกลไกสลับการทำงานอัตโนมัติเพื่อลดเวลาหยุดชะงักให้อยู่ในระดับต่ำที่สุด'
      },
      {
        termEn: 'Compute and Power',
        explanationTh: 'ขีดความสามารถในการประมวลผล (CPU/GPU/RAM) และเสถียรภาพของระบบไฟฟ้าสำรองที่รองรับการทำงานของโครงสร้างพื้นฐาน'
      },
      {
        termEn: 'Risk Transference',
        explanationTh: 'การโอนย้ายภาระความเสี่ยงบางประการไปยังบุคคลที่สามหรือผู้ให้บริการคลาวด์ผ่านสัญญาหรือแบบจำลองบริการ'
      },
      {
        termEn: 'Inability to Patch',
        explanationTh: 'สภาวะที่ระบบไม่สามารถอัปเดตแพตช์ความปลอดภัยได้เนื่องจากซอฟต์แวร์หมดอายุ ข้อจำกัดผู้ผลิต หรือความเสี่ยงต่อระบบงาน จึงต้องใช้มาตรการชดเชย'
      }
    ],
    scenarios: [
      {
        titleTh: 'การปรับเปลี่ยนระบบค้าปลีกจาก On-Premises สู่ Microservices และ IaC บน Cloud',
        contextTh:
          'บริษัทค้าปลีกออนไลน์เคยรันเว็บแอปพลิเคชันแบบ Monolithic บนเซิร์ฟเวอร์ On-Premises แต่ประสบปัญหาเว็บล่มทุกช่วงเทศกาลลดราคาเพราะขยายสเปกฮาร์ดแวร์ไม่ทัน และทีมวิศวกรแต่ละคนตั้งค่าไฟร์วอลล์บนหน้าคอนโซลไม่เหมือนกันจนเกิด Configuration Drift',
        decisionTh:
          'ทีมสถาปัตยกรรมแยกบริการออกเป็น Microservices ที่ทำงานบน Containers (Kubernetes) ใน Public Cloud เพื่อทำ Horizontal Auto-scaling อัตโนมัติ เปลี่ยนมาเขียนโครงสร้างเครือข่ายและสิทธิ์ทั้งหมดด้วย Infrastructure as Code (IaC) ผ่านระบบ Version Control พร้อมสแกนเทมเพลตและ Container Images ใน CI/CD และวาง API Gateway กับ mTLS ควบคุม East-West Traffic',
        takeawayTh:
          'การเลือก Containers และ Microservices ช่วยแก้โจทย์ Scalability และ Ease of Deployment ขณะที่ IaC ช่วยกำจัด Configuration Drift และเร่ง Ease of Recovery แต่ต้องเพิ่มการคุม Image Security, API Attack Surface และป้องกันการหลุดของ Secrets ในโค้ด IaC'
      },
      {
        titleTh: 'การดูแลระบบบัญชี Legacy ในสภาพแวดล้อม Hybrid Cloud เมื่อไม่สามารถแพตช์ได้',
        contextTh:
          'องค์กรการเงินแห่งหนึ่งย้ายระบบพอร์ทัลลูกค้าขึ้นใช้งานแบบ SaaS และ PaaS บน Public Cloud แต่ยังจำเป็นต้องเชื่อมต่อกับเซิร์ฟเวอร์ฐานข้อมูลบัญชีรุ่นเก่าที่ตั้งอยู่แบบ On-Premises ซึ่งรันระบบปฏิบัติการที่ผู้ผลิตเลิกสนับสนุน (End-of-Life) และไม่สามารถอัปเดตแพตช์ได้อีก',
        decisionTh:
          'ทีมความปลอดภัยคงฐานข้อมูลไว้ในโซนแยกเฉพาะแบบ On-Premises (Logical Segmentation) ที่มี Firewall จำกัดการเชื่อมต่อเฉพาะทราฟฟิกที่จำเป็นผ่านช่องทางเข้ารหัสจาก Hybrid Gateway วาง WAF/IPS ดักหน้าทำ Virtual Patching และทบทวน Cloud Shared Responsibility Matrix เพื่อย้ำให้ทีมภายในบังคับใช้ MFA และตรวจสอบการเข้าถึงข้อมูลบน SaaS/PaaS อย่างเข้มงวด',
        takeawayTh:
          'เมื่อเผชิญข้อจำกัด Inability to Patch บนสถาปัตยกรรม Hybrid ต้องใช้การแบ่งโซนและมาตรการชดเชยปกป้องระบบเดิมควบคู่กับการรักษาความรับผิดชอบฝั่งลูกค้า (Identity และ Data) บนระบบคลาวด์'
      }
    ],
    comparisonTables: [
      {
        captionTh: 'ตารางเปรียบเทียบ On-Premises, Virtualization, Containerization และ Serverless',
        headersTh: ['รูปแบบสถาปัตยกรรม', 'ขอบเขตการแยกส่วน (Isolation)', 'ผู้ดูแลการแพตช์ OS', 'ความเร็วปรับขยาย (Scalability)', 'ข้อควรระวังความปลอดภัยหลัก'],
        rowsTh: [
          ['On-Premises (Physical)', 'แยกขาดระดับฮาร์ดแวร์กายภาพ', 'องค์กรดูแลเอง 100%', 'ช้า (ต้องจัดซื้อ/ติดตั้งฮาร์ดแวร์)', 'CapEx สูง ภาระดูแล Physical และ Power เองทั้งหมด'],
          ['Virtualization (VMs)', 'แยกผ่าน Hypervisor และ Guest OS เต็มตัว', 'องค์กรดูแลทั้ง Hypervisor และ Guest OS (หรือ Guest OS ใน IaaS)', 'ปานกลาง (ใช้เวลาบูต Guest OS)', 'VM Sprawl, ช่องโหว่ Hypervisor (VM Escape) และ Snapshot เก่า'],
          ['Containerization', 'แยกด้วย Namespace/cgroups แชร์ Host Kernel', 'ดูแล Container Image และ Host OS (ใน Managed Service ลดภาระลง)', 'รวดเร็วมาก (ระดับวินาที)', 'Container Breakout, ช่องโหว่ใน Image และสิทธิ์ Privileged'],
          ['Serverless (FaaS)', 'แยกการรันรายฟังก์ชันโดย CSP', 'ผู้ให้บริการคลาวด์ (CSP) ดูแลทั้งหมด', 'อัตโนมัติตาม Event ทันที (Elastic)', 'Over-privileged IAM Roles, Event Injection, Cold Start และ Vendor Lock-in']
        ]
      },
      {
        captionTh: 'ตาราง Cloud Shared Responsibility Matrix (IaaS vs. PaaS vs. SaaS เทียบกับ On-Premises)',
        headersTh: ['ชั้นสถาปัตยกรรม', 'On-Premises', 'IaaS (เช่น Virtual Server)', 'PaaS (เช่น Managed DB/App)', 'SaaS (เช่น Cloud Email/CRM)'],
        rowsTh: [
          ['ข้อมูล การจำแนกชั้น และบัญชีผู้ใช้ (Data & IAM)', 'ลูกค้า', 'ลูกค้า', 'ลูกค้า', 'ลูกค้า'],
          ['แอปพลิเคชันและการตั้งค่า (App & Config)', 'ลูกค้า', 'ลูกค้า', 'ลูกค้า (ดูแลโค้ด/ตั้งค่า)', 'ผู้ให้บริการ (CSP)'],
          ['ระบบปฏิบัติการและแพตช์ OS (OS & Runtime)', 'ลูกค้า', 'ลูกค้า', 'ผู้ให้บริการ (CSP)', 'ผู้ให้บริการ (CSP)'],
          ['เครือข่ายเสมือนและ Hypervisor', 'ลูกค้า', 'ผู้ให้บริการ (CSP) (ลูกค้าตั้ง Firewall เสมือน)', 'ผู้ให้บริการ (CSP)', 'ผู้ให้บริการ (CSP)'],
          ['กายภาพ ศูนย์ข้อมูล และไฟฟ้า (Physical & Power)', 'ลูกค้า', 'ผู้ให้บริการ (CSP)', 'ผู้ให้บริการ (CSP)', 'ผู้ให้บริการ (CSP)']
        ]
      }
    ],
    applicationsAndLimitations: {
      applicationsTh: [
        'ใช้เมทริกซ์ความรับผิดชอบและปัจจัยทั้ง 8 มิติเป็นกรอบประเมินก่อนย้ายระบบงานขึ้นคลาวด์ เพื่อวางงบประมาณ ทีมงาน และการควบคุมความปลอดภัยให้ตรงจุด',
        'ประยุกต์ใช้ IaC และ Containers เพื่อสร้างสภาพแวดล้อมที่ได้มาตรฐานเดียวกัน ลด Human Error และเร่งความเร็วในการกู้คืนระบบเมื่อเกิดเหตุ',
        'ใช้ Hybrid Architecture แบ่งข้อมูลอ่อนไหวสูงหรือระบบที่ติดข้อจำกัดกฎหมายไว้ On-Premises ขณะที่ใช้ประโยชน์จากความยืดหยุ่นของคลาวด์สำหรับงานประมวลผลทั่วไป'
      ],
      limitationsTh: [
        'การย้ายขึ้น Cloud หรือใช้บริการ Third-Party Vendors ไม่สามารถโอนความรับผิดชอบทางกฎหมายและชื่อเสียง (Accountability) หากองค์กรตั้งค่าสิทธิ์ผิดจนข้อมูลรั่วไหล',
        'สถาปัตยกรรมแบบ Serverless และ Microservices ลดภาระด้าน OS แต่เพิ่มความซับซ้อนในการตรวจสอบเส้นทางข้อมูลข้ามบริการ (Observability) และบริหารสิทธิ์ IAM แบบละเอียด',
        'IaC ที่ไม่ได้ผ่านการสแกนความปลอดภัยก่อนนำไปใช้สามารถแพร่กระจายช่องโหว่จากการตั้งค่าผิดพลาดไปยังเซิร์ฟเวอร์นับร้อยเครื่องภายในเวลาไม่กี่นาที'
      ]
    },
    commonMisconceptions: [
      {
        misconceptionTh: 'เข้าใจว่าเมื่อใช้คลาวด์แบบ SaaS หรือ PaaS แล้ว ผู้ให้บริการคลาวด์จะรับผิดชอบความปลอดภัยแทนลูกค้าทั้งหมด',
        clarificationTh:
          'ไม่ว่าองค์กรจะเลือก IaaS, PaaS หรือ SaaS ลูกค้ายังคงเป็นผู้รับผิดชอบสูงสุดต่อข้อมูลของตนเอง (Data Classification, Encryption, Retention), การจัดการบัญชีผู้ใช้งาน (IAM/MFA) และการตั้งค่าสิทธิ์การเข้าถึงแพลตฟอร์มเสมอ'
      },
      {
        misconceptionTh: 'คิดว่า Container แยกส่วนความปลอดภัยออกจากกันได้เด็ดขาดเทียบเท่า Virtual Machine',
        clarificationTh:
          'Container แชร์ระบบปฏิบัติการหลัก (Host Kernel) ร่วมกัน จึงมีพื้นที่ป้องกันบางกว่า VM ที่มี Guest OS แยกขาดจากกัน หากไม่จำกัดสิทธิ์ Container และอัปเดต Host Kernel อาจเกิด Container Breakout ส่งผลกระทบต่อทั้งโฮสต์ได้'
      },
      {
        misconceptionTh: 'สับสนว่า Risk Transference บน Cloud หมายถึงการโอนความรับผิดทางกฎหมายให้ผู้ให้บริการคลาวด์ด้วย',
        clarificationTh:
          'การทำ Risk Transference ผ่านการใช้คลาวด์หรือ Vendor เป็นการถ่ายโอนภาระความเสี่ยงเชิงปฏิบัติการและการบำรุงรักษาบางส่วน แต่ในทางกฎหมายและข้อบังคับความเป็นส่วนตัว องค์กรเจ้าของข้อมูลยังคงต้องรับผิดชอบเมื่อข้อมูลลูกค้ารั่วไหล'
      }
    ],
    scenarioAnalysisGuide: {
      approachStepsTh: [
        'อ่านโจทย์เพื่อระบุเป้าหมายหลักทางธุรกิจและข้อจำกัดทางเทคนิค (เช่น งบประมาณ CapEx/OpEx, ความต้องการ Latency ต่ำ, ความเร็ว Deploy หรือระบบเก่าที่ Patch ไม่ได้)',
        'หากโจทย์กล่าวถึงคลาวด์ ให้กาง Shared Responsibility Matrix ทันทีเพื่อตรวจว่าปัญหาที่เกิดขึ้นอยู่ในความรับผิดชอบของลูกค้า (IAM, Data, OS ใน IaaS) หรือผู้ให้บริการ',
        'แยกแยะระหว่างความต้องการสถาปัตยกรรมรันงาน: ต้องการแยก OS เต็มรูปแบบ -> VM, ต้องการแพ็กเกจเบาพกพาง่าย -> Container, ต้องการรันตาม Event โดยไม่ยุ่งกับ OS/Server -> Serverless, ต้องการสร้างโครงสร้างซ้ำอัตโนมัติ -> IaC',
        'หากโจทย์ระบุว่า "ไม่สามารถอัปเดตแพตช์ได้" (Inability to Patch) ห้ามเลือกคำตอบให้ลงแพตช์ทันที แต่ให้เลือกการเปลี่ยนสถาปัตยกรรมมาใช้การแบ่งโซนและ Compensating Controls'
      ],
      examSignalKeywords: [
        { keywordEn: 'shared responsibility / IaaS vs. PaaS vs. SaaS', meaningTh: 'ให้ระบุว่าฝ่ายใดดูแล OS, Application, Data และ IAM ตามโมเดลที่โจทย์ระบุ' },
        { keywordEn: 'event-driven / no OS management / pay per execution', meaningTh: 'ชี้ไปยัง Serverless (FaaS) ที่ตัดภาระการแพตช์ระบบปฏิบัติการฝั่งลูกค้า' },
        { keywordEn: 'configuration drift / repeatable deployment / version control', meaningTh: 'ชี้ไปยัง Infrastructure as Code (IaC) สำหรับการจัดการโครงสร้างผ่านโค้ด' },
        { keywordEn: 'shares host kernel / lightweight / portable image', meaningTh: 'ชี้ไปยัง Containerization (ต่างจาก VM ที่มี Guest OS แยก)' },
        { keywordEn: 'cannot patch / end-of-life / legacy constraint', meaningTh: 'ชี้ไปยังข้อพิจารณา Inability to Patch และการใช้ Segmentation หรือ Virtual Patching ชดเชย' },
        { keywordEn: 'low latency / local processing / remote branches', meaningTh: 'ชี้ไปยัง Decentralized / Edge Architecture เพื่อตอบโจทย์ Responsiveness' }
      ]
    },
    summaryTh: [
      'การออกแบบสถาปัตยกรรมตาม SY0-701 Objective 3.1 ต้องชั่งน้ำหนักระหว่างการควบคุมด้วยตนเอง (On-Premises / Centralized) กับความคล่องตัวและการกระจายตัว (Cloud / Hybrid / Decentralized) โดยยึด Shared Responsibility Matrix เป็นหลักเสมอ',
      'Virtualization, Containers, Microservices, Serverless และ IaC ต่างมีระดับการแยกส่วน (Isolation) และภาระการดูแลแพตช์ไม่เท่ากัน การเลือกใช้ต้องสอดคล้องกับความเสี่ยงด้าน Kernel, API, Event/IAM และความมั่นคงของ Pipeline',
      'สถาปนิกความปลอดภัยที่ดีต้องพิจารณาองค์ประกอบ High Availability, Compute, Power รวมถึงเกณฑ์ทั้ง 8 มิติ โดยเฉพาะแนวทางรับมือเมื่อเผชิญสภาวะ Inability to Patch'
    ],
    knowledgeChecks: [
      {
        id: 'L3-01-KC1',
        questionTh:
          'ทีมพัฒนาต้องการสร้างบริการประมวลผลรูปภาพที่ทำงานเฉพาะเมื่อมีผู้ใช้อัปโหลดไฟล์เข้ามา โดยไม่ต้องการดูแลการอัปเดตแพตช์ระบบปฏิบัติการหรือเสียค่าเซิร์ฟเวอร์ตลอด 24 ชั่วโมง แต่กังวลเรื่องสิทธิ์การเข้าถึง Bucket เก็บข้อมูล รูปแบบสถาปัตยกรรมใดตรงกับความต้องการนี้มากที่สุด?',
        choices: [
          { id: 'a', textTh: 'IaaS Virtual Machines แบบ On-Premises Cluster' },
          { id: 'b', textTh: 'Serverless Computing (FaaS) พร้อมจำกัดสิทธิ์ IAM Role แบบ Least Privilege' },
          { id: 'c', textTh: 'Monolithic Application บน Type 2 Hypervisor' },
          { id: 'd', textTh: 'Decentralized Physical Servers ในสาขา' }
        ],
        correctChoiceId: 'b',
        explanationTh:
          'คำตอบที่ถูกต้องคือ b เพราะ Serverless (FaaS) ทำงานแบบ Event-driven เมื่อมีไฟล์อัปโหลด คิดค่าใช้จ่ายตามการรันจริง และผู้ให้บริการดูแลการแพตช์ OS ให้ทั้งหมด ทำให้ทีมพัฒนาโฟกัสเพียงโค้ดและสิทธิ์ IAM Role ข้อ a และ c ยังต้องดูแลแพตช์ Guest OS เอง ส่วนข้อ d ไม่ตอบโจทย์เรื่องไม่ต้องเสียค่าเซิร์ฟเวอร์และภาระการแพตช์'
      },
      {
        id: 'L3-01-KC2',
        questionTh:
          'องค์กรใช้บริการฐานข้อมูลแบบ PaaS บน Public Cloud แต่ตรวจพบว่าข้อมูลลูกค้าภายในฐานข้อมูลถูกดาวน์โหลดออกไปได้เนื่องจากวิศวกรตั้งค่าสิทธิ์การเข้าถึงเปิดสาธารณะและไม่ได้เปิด MFA สำหรับบัญชีผู้ดูแล เหตุการณ์นี้สะท้อนความรับผิดชอบของฝ่ายใดตาม Shared Responsibility Matrix?',
        choices: [
          { id: 'a', textTh: 'ผู้ให้บริการคลาวด์ (CSP) เพราะเป็นบริการ PaaS ที่ผู้ให้บริการดูแลโครงสร้างฐานข้อมูลทั้งหมด' },
          { id: 'b', textTh: 'ผู้พัฒนาซอฟต์แวร์ระบบปฏิบัติการ เพราะแพตช์ OS มีช่องโหว่' },
          { id: 'c', textTh: 'ผู้ให้บริการอินเทอร์เน็ต (ISP) เพราะไม่กรองทราฟฟิกขาออก' },
          { id: 'd', textTh: 'ลูกค้า (องค์กรผู้เช่าใช้) เพราะลูกค้าเป็นผู้รับผิดชอบการตั้งค่าสิทธิ์ IAM และการปกป้องข้อมูลเสมอ' }
        ],
        correctChoiceId: 'd',
        explanationTh:
          'คำตอบที่ถูกต้องคือ d ในทุกโมเดลคลาวด์ (IaaS, PaaS, SaaS) ลูกค้ายังคงรับผิดชอบข้อมูล (Data), การตั้งค่าสิทธิ์การเข้าถึงของแอปพลิเคชัน/ฐานข้อมูล และบัญชีผู้ใช้งาน (IAM/MFA) เสมอ ข้อ a ผิดเพราะใน PaaS ผู้ให้บริการรับผิดชอบการแพตช์ OS และรันไทม์ฐานข้อมูล ไม่ใช่การตั้งค่าสิทธิ์ผู้ใช้ของลูกค้า'
      },
      {
        id: 'L3-01-KC3',
        questionTh:
          'บริษัทกำลังขยายสภาพแวดล้อมการทดสอบและ Production ขึ้น Cloud หลายภูมิภาค แต่พบปัญหาการตั้งค่าไฟร์วอลล์ระหว่างภูมิภาคไม่ตรงกัน (Configuration Drift) และใช้เวลานานในการสร้างสภาพแวดล้อมใหม่หลังเกิดเหตุการณ์ขัดข้อง แนวทางใดช่วยแก้ไขทั้งสองปัญหาได้ดีที่สุด?',
        choices: [
          { id: 'a', textTh: 'นำ Infrastructure as Code (IaC) ที่เก็บใน Version Control พร้อมสแกนเทมเพลตมาใช้สร้างระบบอัตโนมัติ' },
          { id: 'b', textTh: 'เปลี่ยนจากการใช้ Containers กลับไปติดตั้งซอฟต์แวร์ด้วยมือบน Physical Server' },
          { id: 'c', textTh: 'ยกเลิกการทำ Load Balancing เพื่อลดจำนวนไฟล์ตั้งค่า' },
          { id: 'd', textTh: 'ย้ายระบบทั้งหมดไปใช้ Type 2 Hypervisor บนเครื่องพนักงาน' }
        ],
        correctChoiceId: 'a',
        explanationTh:
          'คำตอบที่ถูกต้องคือ a เพราะ IaC ช่วยนิยามเครือข่ายและไฟร์วอลล์เป็นโค้ดที่ตรวจสอบผ่าน Version Control ได้ ทำให้ Deploy ได้เหมือนกันทุกภูมิภาค (แก้ปัญหา Configuration Drift) และช่วย Ease of Recovery ในการสร้างสภาพแวดล้อมใหม่ได้รวดเร็ว ข้อ b, c และ d ล้วนเพิ่มภาระงานและความเสี่ยง'
      },
      {
        id: 'L3-01-KC4',
        questionTh:
          'ข้อใดอธิบายความแตกต่างเชิงความมั่นคงปลอดภัยระหว่าง Virtual Machines และ Containers ได้ถูกต้องที่สุด?',
        choices: [
          { id: 'a', textTh: 'Containers แยกส่วนด้วยฮาร์ดแวร์เสมือนและ Guest OS เต็มตัว จึงปลอดภัยต่อการทะลุชั้นระบบปฏิบัติการมากกว่า VM' },
          { id: 'b', textTh: 'Virtual Machines ไม่จำเป็นต้องมีการอัปเดตแพตช์ Guest OS เลยเพราะ Hypervisor จัดการให้หมด' },
          { id: 'c', textTh: 'Containers แชร์ Host OS Kernel ร่วมกันจึงเบาและขยายตัวเร็วกว่า VM แต่ต้องคุมช่องโหว่ Kernel และ Image อย่างเข้มงวด' },
          { id: 'd', textTh: 'Containers ไม่สามารถใช้ร่วมกับสถาปัตยกรรม Microservices ได้' }
        ],
        correctChoiceId: 'c',
        explanationTh:
          'คำตอบที่ถูกต้องคือ c เนื่องจาก Container แชร์ Host Kernel ร่วมกันจึงใช้ทรัพยากรน้อยและเปิดปิดไว แต่มีเส้นแบ่งการแยกตัวบางกว่า VM ที่รัน Guest OS แยกแต่ละเครื่อง ข้อ a สลับความหมายระหว่าง VM กับ Container ข้อ b ผิดเพราะต้องแพตช์ Guest OS ใน VM (เว้นแต่ใช้บริการ PaaS/SaaS) และข้อ d ผิดเพราะ Containers เป็นรากฐานนิยมของ Microservices'
      }
    ],
    references: [
      {
        title: 'CompTIA Security+ (SY0-701) Exam Objectives Version 5.0 — Objective 3.1',
        noteTh: 'ครอบคลุมสถาปัตยกรรมองค์กร คลาวด์ Containers, IaC, Serverless และปัจจัยพิจารณาทั้ง 8 ด้าน'
      },
      {
        title: 'NIST SP 800-145: The NIST Definition of Cloud Computing',
        noteTh: 'คำนิยามมาตรฐานของโมเดลบริการ IaaS, PaaS, SaaS และโมเดลการจัดวาง Hybrid/Public/Private Cloud'
      },
      {
        title: 'NIST SP 800-190: Application Container Security Guide',
        noteTh: 'แนวทางปฏิบัติการรักษาความปลอดภัยของ Container Images, Orchestrators และ Host OS'
      }
    ],
    relatedLessonIds: ['L1-02', 'L1-04', 'L2-05', 'L3-02', 'L3-07']
  },
  {
    id: 'L3-02',
    examCode: 'SY0-701',
    domainId: 'D3',
    order: 17,
    titleTh: 'IoT, ICS/SCADA, Embedded, RTOS และ Network Segmentation',
    titleEn: 'OT/IoT, Embedded Systems, RTOS, and Network Segmentation',
    estimatedMinutes: 45,
    learningObjectives: [
      'อธิบายคุณลักษณะ ข้อจำกัดด้านทรัพยากร และความเสี่ยงเฉพาะทางของอุปกรณ์ IoT, Embedded Systems และระบบปฏิบัติการแบบเรียลไทม์ (RTOS)',
      'วิเคราะห์สถาปัตยกรรมระบบควบคุมอุตสาหกรรม ICS/SCADA ความต่างระหว่าง IT กับ OT รวมถึงข้อจำกัดด้านการ Patch, High Availability และ OT Safety Considerations',
      'เปรียบเทียบโครงสร้างพื้นฐานเครือข่าย 3 รูปแบบ ได้แก่ Physical Isolation (Air-gapped), Logical Segmentation และ Software-Defined Networking (SDN)',
      'ออกแบบมาตรการแบ่งส่วนเครือข่ายและ Compensating Controls เพื่อป้องกันอุปกรณ์ที่ไม่สามารถติดตั้งซอฟต์แวร์ป้องกันหรืออัปเดตแพตช์ได้ตามขอบเขต SY0-701 Objective 3.1'
    ],
    objectiveIds: ['3.1'],
    prerequisites: [
      'L1-01 หมวดหมู่และประเภทของ Security Controls',
      'L2-05 ช่องโหว่ Hardware, Virtualization, Cloud, Mobile และ Zero-Day',
      'L3-01 สถาปัตยกรรม On-Premises, Cloud, Containers, IaC และ Serverless'
    ],
    sections: [
      {
        id: 'sec-iot-embedded-rtos',
        titleTh: '1. อุปกรณ์ IoT, Embedded Systems และ Real-Time Operating Systems (RTOS)',
        contentTh: [
          'Internet of Things (IoT) หมายถึงอุปกรณ์อัจฉริยะและเซ็นเซอร์ที่ฝังตัวเชื่อมเครือข่ายเพื่อรับ-ส่งข้อมูลหรือสั่งงานระยะไกล เช่น กล้องวงจรปิด IP, ระบบปรับอากาศอัจฉริยะ (Smart HVAC), สมาร์ทมิเตอร์ และเซ็นเซอร์อุตสาหกรรม (IIoT) เหตุใด IoT จึงเป็นจุดอ่อนสำคัญในสถาปัตยกรรมองค์กร เพราะอุปกรณ์เหล่านี้ออกแบบมาให้ใช้พลังงานและหน่วยประมวลผลต่ำ (Low Compute/Power) เพื่อประหยัดต้นทุน จึงมักไม่รองรับซอฟต์แวร์ EDR การเข้ารหัสที่ซับซ้อน หรือการจัดการใบรับรอง PKI เต็มรูปแบบ นอกจากนี้ผู้ผลิตมักตั้งรหัสผ่านเริ่มต้น (Default Credentials) เหมือนกันทุกเครื่อง ไม่ค่อยออกแพตช์เฟิร์มแวร์ต่อเนื่อง ทำให้ IoT กลายเป็นเป้าหมายยอดนิยมในการถูกยึดเป็นส่วนหนึ่งของ Botnet หรือเป็นจุดกระโดด (Pivot Point) เข้าสู่เครือข่ายภายใน',
          'Embedded Systems คือระบบคอมพิวเตอร์เฉพาะทางที่หลอมรวมฮาร์ดแวร์และซอฟต์แวร์/เฟิร์มแวร์เพื่อทำงานเฉพาะหน้าที่อย่างใดอย่างหนึ่ง เช่น เครื่องมือแพทย์ในโรงพยาบาล ตู้ ATM อุปกรณ์เครือข่าย และตัวควบคุมเครื่องจักรในสายการผลิต ข้อแตกต่างสำคัญระหว่าง Embedded System กับคอมพิวเตอร์สำนักงานทั่วไปคือ Embedded มีอายุการใช้งานยาวนานมาก (10–20 ปี) มักใช้ชิปและซอฟต์แวร์เฉพาะทางที่มีหน่วยความจำจำกัด และพึ่งพาเฟิร์มแวร์จากผู้ผลิตโดยตรง เมื่อเวลาผ่านไปผู้ผลิตอาจหยุดสนับสนุนหรือเลิกกิจการ ทำให้อุปกรณ์ตกอยู่ในภาวะ End-of-Life และเกิดปัญหา Inability to Patch ในระดับฮาร์ดแวร์และเฟิร์มแวร์อย่างหลีกเลี่ยงไม่ได้',
          'Real-Time Operating System (RTOS) คือระบบปฏิบัติการที่ออกแบบมาเพื่อประมวลผลและตอบสนองต่อสัญญาณนำเข้าภายในกรอบเวลาที่กำหนดไว้อย่างแม่นยำและแน่นอน (Deterministic Timing) ตัวอย่างเช่น ระบบเบรก ABS ของรถยนต์ แขนกลในสายการผลิต และอุปกรณ์ควบคุมการบิน ทำไมจึงนำแนวทางความปลอดภัยของ OS ทั่วไปมาใช้กับ RTOS ทันทีไม่ได้ เพราะจุดสำคัญที่สุดของ RTOS คือความตรงต่อเวลาในระดับมิลลิวินาทีหรือไมโครวินาที การติดตั้งซอฟต์แวร์ Antivirus การสแกนไฟล์แบบเรียลไทม์ หรือการอัปเดตที่บังคับรีสตาร์ตระบบ อาจทำให้เกิดความหน่วง (Latency) จนระบบหลุด Deadline เกิดความเสียหายทางกลหรืออันตรายต่อความปลอดภัยของผู้ใช้งาน'
        ],
        keyPointsTh: [
          'IoT มีทรัพยากร Compute/Power ต่ำ มักขาดกลไกเข้ารหัสหรือแพตช์ที่ดี จึงเสี่ยงต่อ Botnet และการเป็นจุดเจาะเข้าเครือข่าย',
          'Embedded Systems มีอายุการใช้งานยาวนานกว่าวงจรซอฟต์แวร์ทั่วไป ทำให้เผชิญปัญหา End-of-Life และ Inability to Patch บ่อยครั้ง',
          'RTOS เน้นความแม่นยำของเวลาตอบสนอง (Deterministic Timing) จึงไม่เหมาะกับการรัน Agent ความปลอดภัยหนักๆ ที่ทำให้ระบบหน่วงหรือรีสตาร์ต'
        ]
      },
      {
        id: 'sec-ics-scada-ot-safety',
        titleTh: '2. สถาปัตยกรรม ICS/SCADA, ข้อจำกัดการ Patch และ OT Safety Considerations',
        contentTh: [
          'ICS (Industrial Control Systems) เป็นคำรวมของระบบควบคุมกระบวนการอุตสาหกรรมและโครงสร้างพื้นฐานสำคัญ ส่วน SCADA (Supervisory Control and Data Acquisition) เป็นระบบย่อยที่ใช้ติดตามและสั่งการอุปกรณ์ภาคสนามที่กระจายอยู่เป็นวงกว้าง เช่น โรงไฟฟ้า ระบบประปา และท่อส่งก๊าซ สถาปัตยกรรม ICS/SCADA ประกอบด้วยอุปกรณ์หลักอย่าง PLC (Programmable Logic Controller) และ RTU (Remote Terminal Unit) ที่ติดต่อกับเซ็นเซอร์และวาล์วโดยตรง, หน้าจอควบคุม HMI (Human-Machine Interface), เซิร์ฟเวอร์ Historian ที่บันทึกข้อมูลย้อนหลัง และ Engineering Workstation สำหรับตั้งโปรแกรมควบคุม ความเสี่ยงสำคัญทางสถาปัตยกรรมคือโปรโตคอลอุตสาหกรรมดั้งเดิมหลายตัว (เช่น Modbus หรือ DNP3 รุ่นเก่า) ถูกสร้างมาในยุคที่เน้นความเร็วและความเรียบง่าย จึงส่งข้อความเป็น Clear Text โดยไม่มีการยืนยันตัวตนหรือการเข้ารหัสในตัว',
          'หัวใจสำคัญที่ผู้เรียนต้องแยกให้ออกคือความแตกต่างระหว่างโลก IT (Information Technology) กับ OT (Operational Technology) ในระบบ IT ลำดับความสำคัญมักเริ่มต้นที่ Confidentiality ตามด้วย Integrity และ Availability แต่ในสภาพแวดล้อม OT/ICS ลำดับความสำคัญกลับด้านเป็น **Safety และ Availability เป็นอันดับหนึ่ง ตามด้วย Integrity และ Confidentiality** เพราะหากระบบควบคุมความดันหม้อไอน้ำหรือวาล์วโรงงานเคมีถูกโจมตีหรือหยุดทำงานกะทันหัน ผลลัพธ์ไม่ใช่เพียงข้อมูลรั่วไหล แต่อาจเกิดไฟไหม้ การระเบิด สิ่งแวดล้อมปนเปื้อน หรือการสูญเสียชีวิตของพนักงานและประชาชนได้ ดังนั้นมาตรการความปลอดภัยใดๆ ที่มีโอกาสทำให้อุปกรณ์ OT หยุดทำงาน เช่น Active Vulnerability Scanning ที่ยิงแพ็กเก็ตแปลกปลอมเข้าพอร์ต PLC จึงถือว่าอันตรายมากและต้องหลีกเลี่ยง',
          'นอกจากประเด็น OT Safety แล้ว ระบบ ICS/SCADA ยังมีข้อจำกัดด้าน Patching และ Availability อย่างรุนแรง เพราะสายการผลิตจำนวนมากต้องทำงานต่อเนื่อง 24/7 แทบไม่มี Maintenance Window ให้ปิดเครื่อง อีกทั้งผู้ผลิตเครื่องจักรมักออกใบรับรองความปลอดภัย (Vendor Certification) ผูกกับซอฟต์แวร์เวอร์ชันเดิมเท่านั้น หากองค์กรลงแพตช์ OS เองอาจทำให้ซอฟต์แวร์ควบคุมพังหรือหลุดการรับประกัน ขณะเดียวกันแนวโน้ม IT/OT Convergence ที่เชื่อมเครือข่ายโรงงานเข้ากับระบบบัญชี Cloud หรือ ERP เพื่อดึงข้อมูลวิเคราะห์ประสิทธิภาพ ยิ่งเปิดประตูให้มัลแวร์อย่าง Ransomware จากฝั่ง IT สามารถแพร่กระจายข้ามเข้ามายังเครือข่าย OT ได้หากไม่มีสถาปัตยกรรมแยกโซนที่รัดกุม'
        ],
        keyPointsTh: [
          'ICS/SCADA เชื่อมโลกดิจิทัลเข้ากับโลกกายภาพ (PLC, RTU, HMI) และมักใช้โปรโตคอลเก่าที่ขาด Authentication และ Encryption',
          'ใน OT/ICS ความปลอดภัยต่อชีวิต (Safety) และ Availability สำคัญที่สุด เหนือกว่า Confidentiality',
          'หลีกเลี่ยง Active Scanning บนอุปกรณ์ OT/RTOS เพราะอาจทำให้อุปกรณ์ค้างหรือรีบูตจนเกิดอันตราย ควรใช้ Passive Monitoring แทน'
        ]
      },
      {
        id: 'sec-network-isolation-segmentation-sdn',
        titleTh: '3. การออกแบบโครงสร้างเครือข่าย: Physical Isolation, Logical Segmentation และ SDN',
        contentTh: [
          'เมื่ออุปกรณ์จำนวนมากในสภาพแวดล้อม OT, Embedded และ IoT ไม่สามารถป้องกันตัวเองด้วยแพตช์หรือ Endpoint Agent ได้ การออกแบบ Network Infrastructure เพื่อกั้นขอบเขตจึงเป็นด่านป้องกันสำคัญที่สุด แนวทางแรกที่เข้มงวดที่สุดคือ Physical Isolation หรือ Air-gapped Network ซึ่งตัดการเชื่อมต่อทางกายภาพออกจากเครือข่ายองค์กรภายนอกและอินเทอร์เน็ตโดยสิ้นเชิง ไม่มีสายสัญญาณ เราเตอร์ หรือจุดเชื่อมต่อไร้สายข้ามหากัน เหมาะสำหรับระบบควบคุมโครงสร้างพื้นฐานวิกฤตหรือความลับระดับสูง ความต่างจากวิธีอื่นคือลดความเสี่ยงการโจมตีทางไกลจากอินเทอร์เน็ตได้เกือบทั้งหมด แต่ข้อจำกัดที่ห้ามมองข้ามคือการดูแลและอัปเดตทำได้ยากมาก และยังคงมีความเสี่ยงจากการนำสื่อบันทึกข้อมูลพกพา (USB Drive) หรือแล็ปท็อปของช่างซ่อมบำรุงเข้ามาเสียบเชื่อมต่อภายในพื้นที่โดยตรง',
          'แนวทางที่สองที่นิยมใช้กันอย่างแพร่หลายในองค์กรคือ Logical Segmentation ซึ่งใช้โครงสร้างสายสัญญาณและอุปกรณ์เครือข่ายกายภาพร่วมกันได้ แต่แบ่งขอบเขตการสื่อสารเชิงตรรกะออกเป็นส่วนย่อยด้วย VLANs, Subnets, VRF, Access Control Lists (ACLs) และ Firewall ที่คั่นระหว่างโซน เช่น การจัดวางเครือข่ายตามแนวคิด Purdue Model โดยมี Industrial DMZ (Screened Subnet) คั่นระหว่างเครือข่ายสำนักงาน (IT) กับเครือข่ายโรงงาน (OT) เพื่อให้ข้อมูลสถิติถูกส่งผ่านตัวกลางที่คัดกรองอย่างปลอดภัยแทนการคุยตรงกับ PLC ข้อดีคือประหยัดต้นทุนกว่าการเดินสายแยกและยังคงทำ IT/OT Integration ได้ แต่ข้อจำกัดคือต้องระมัดระวัง Misconfiguration ของกฎ Firewall และ VLAN Trunking ที่อาจทำให้ทราฟฟิกหลุดข้ามโซน',
          'แนวทางที่สามคือ Software-Defined Networking (SDN) ซึ่งเป็นการปฏิวัติโครงสร้างเครือข่ายโดยแยกส่วนควบคุมตัดสินใจเส้นทาง (Control Plane) ออกจากอุปกรณ์ส่งผ่านข้อมูลจริง (Data Plane/Switches) แล้วย้าย Control Plane มารวมศูนย์ใน SDN Controller ที่ควบคุมด้วยซอฟต์แวร์และ API ได้ ทำไมจึงต้องใช้ SDN ในสถาปัตยกรรมยุคใหม่ เพราะในสภาพแวดล้อมที่มีอุปกรณ์ IoT, Virtual Machines หรือ Containers จำนวนมากที่เปลี่ยนแปลงตลอดเวลา SDN ช่วยให้ผู้ดูแลเขียนนโยบาย Micro-segmentation บังคับสิทธิ์ระดับอุปกรณ์หรือเวิร์กโหลดได้อัตโนมัติจากศูนย์กลางโดยไม่ต้องเข้าไปตั้งค่า CLI สวิตช์ทีละตัว อย่างไรก็ตาม ข้อเสียเชิงความปลอดภัยคือ SDN Controller กลายเป็นเป้าหมายสำคัญที่สุด (Single Point of Compromise) หากผู้โจมตีควบคุม Controller ได้ อาจสั่งเปลี่ยนเส้นทางหรือเปิดกฎเครือข่ายทั้งองค์กรได้ทันที'
        ],
        keyPointsTh: [
          'Physical Isolation (Air-gapped) แยกสายกายภาพเด็ดขาด แต่ยังต้องระวังภัยคุกคามจากสื่อพกพา (USB) และแล็ปท็อปซ่อมบำรุง',
          'Logical Segmentation แบ่งโซนผ่าน VLAN, Subnet และ Firewall (เช่น Industrial DMZ) ช่วยควบคุมทราฟฟิก IT-OT โดยไม่ต้องเดินสายแยกทั้งหมด',
          'SDN แยก Control Plane ออกจาก Data Plane เพื่อทำ Micro-segmentation แบบอัตโนมัติจากศูนย์กลาง แต่ต้องปกป้อง SDN Controller อย่างสูงสุด'
        ]
      },
      {
        id: 'sec-selecting-controls-ot-iot',
        titleTh: '4. กลยุทธ์ Compensating Controls และการเลือกโครงสร้างแยกเครือข่ายให้เหมาะกับบริบท',
        contentTh: [
          'ในการวางสถาปัตยกรรมเพื่อปกป้อง IoT, Embedded และ ICS/SCADA ที่ติดข้อจำกัด Inability to Patch สถาปนิกความปลอดภัยจำเป็นต้องออกแบบชุด Compensating Controls ทำงานร่วมกัน เริ่มจากการจัดวางอุปกรณ์เหล่านั้นลงใน Dedicated VLAN หรือ Isolated Segment ที่ตัดสิทธิ์การเชื่อมต่อออกอินเทอร์เน็ตโดยตรง จากนั้นบังคับใช้การเข้าถึงระยะไกลของวิศวกรหรือผู้ดูแลระบบผ่าน Jump Host ที่ต้องยืนยันตัวตนด้วย MFA และบันทึกเซสชันการทำงานทั้งหมด หรือในระบบที่มีความละเอียดอ่อนสูงอาจใช้ Data Diode เพื่อบังคับให้ข้อมูลไหลออกทางเดียวจากฝั่ง OT ขึ้นไปยังเซิร์ฟเวอร์วิเคราะห์ฝั่ง IT โดยไม่สามารถส่งคำสั่งย้อนกลับเข้าควบคุมเครื่องจักรได้',
          'สำหรับการเฝ้าระวังและตรวจสอบความผิดปกติในเครือข่าย OT/RTOS แทนที่จะใช้การสแกนเชิงรุก (Active Scanning) ให้ติดตั้ง Passive Network Sensors ต่อเข้ากับ Network TAP หรือ Switch SPAN Port เพื่อดักอ่านสำเนาแพ็กเก็ตและวิเคราะห์พฤติกรรมโปรโตคอลอุตสาหกรรมโดยไม่สร้างภาระหรือส่งแพ็กเก็ตแปลกปลอมไปยัง PLC นอกจากนี้ควรเปลี่ยนรหัสผ่านเริ่มต้นทุกตัวที่เปลี่ยนได้ ปิดพอร์ตที่ไม่ใช้งาน และควบคุมสื่อบันทึกข้อมูลทางกายภาพอย่างเข้มงวด การผสานการแบ่งโซนเครือข่ายที่เหมาะสมกับการเฝ้าระวังแบบ Passive จึงเป็นคำตอบที่สมดุลระหว่างความปลอดภัย (Security), ความพร้อมใช้งาน (Availability) และความปลอดภัยต่อชีวิต (Safety)'
        ],
        keyPointsTh: [
          'รวมพลัง Logical Segmentation, Jump Host + MFA และ Data Diode เพื่อปกป้องระบบ OT/Embedded ที่แพตช์ไม่ได้',
          'ใช้ Passive Network Sensors ผ่าน TAP/SPAN เพื่อทำ Asset Discovery และตรวจจับการโจมตีใน OT โดยไม่กระทบ Timing ของ RTOS',
          'เลือก Air-gapped เมื่องานวิกฤตไม่ต้องการการเชื่อมต่อภายนอก เลือก Logical Segmentation สำหรับแยก IT-OT และเลือก SDN เมื่อต้องจัดการ Dynamic Micro-segmentation ขนาดใหญ่'
        ]
      }
    ],
    keyTerms: [
      {
        termEn: 'Internet of Things',
        acronym: 'IoT',
        explanationTh: 'เครือข่ายอุปกรณ์อัจฉริยะและเซ็นเซอร์ที่มีทรัพยากรจำกัด เชื่อมต่ออินเทอร์เน็ตหรือเครือข่ายองค์กรเพื่อส่งข้อมูลและควบคุมอัตโนมัติ'
      },
      {
        termEn: 'Industrial Control Systems',
        acronym: 'ICS',
        explanationTh: 'ระบบคอมพิวเตอร์และอุปกรณ์อิเล็กทรอนิกส์ที่ใช้ควบคุมการทำงานของเครื่องจักรและกระบวนการอุตสาหกรรม'
      },
      {
        termEn: 'Supervisory Control and Data Acquisition',
        acronym: 'SCADA',
        explanationTh: 'ระบบย่อยในกลุ่ม ICS ที่ควบคุมและเก็บข้อมูลจากอุปกรณ์ภาคสนามที่กระจายตัวทางภูมิศาสตร์ เช่น โครงข่ายไฟฟ้าและประปา'
      },
      {
        termEn: 'Programmable Logic Controller',
        acronym: 'PLC',
        explanationTh: 'คอมพิวเตอร์อุตสาหกรรมขนาดเล็กที่รับสัญญาณจากเซ็นเซอร์และสั่งงานเครื่องจักรหรือวาล์วในสายการผลิตแบบเรียลไทม์'
      },
      {
        termEn: 'Human-Machine Interface',
        acronym: 'HMI',
        explanationTh: 'หน้าจอหรือส่วนติดต่อผู้ใช้สำหรับผู้ปฏิบัติการในการเฝ้าติดตามสถานะและสั่งควบคุมกระบวนการของระบบ ICS'
      },
      {
        termEn: 'Real-Time Operating System',
        acronym: 'RTOS',
        explanationTh: 'ระบบปฏิบัติการที่ออกแบบให้ประมวลผลเสร็จสิ้นภายในเวลาที่กำหนดอย่างแน่นอน (Deterministic) เพื่อควบคุมระบบที่ไม่ยอมรับความหน่วง'
      },
      {
        termEn: 'Embedded System',
        explanationTh: 'ระบบคอมพิวเตอร์เฉพาะทางที่ฝังฮาร์ดแวร์และเฟิร์มแวร์เพื่อทำหน้าที่จำเพาะ มักมีอายุการใช้งานยาวแต่ทรัพยากรจำกัดและแพตช์ยาก'
      },
      {
        termEn: 'Air-gapped Network',
        explanationTh: 'เครือข่ายที่แยกขาดจากเครือข่ายอื่นและอินเทอร์เน็ตทางกายภาพอย่างสมบูรณ์ (Physical Isolation) เพื่อป้องกันการโจมตีทางไกล'
      },
      {
        termEn: 'Logical Segmentation',
        explanationTh: 'การแบ่งขอบเขตเครือข่ายด้วย VLAN, Subnet, VRF และ Firewall Rule บนโครงสร้างฮาร์ดแวร์ร่วมกัน'
      },
      {
        termEn: 'Micro-segmentation',
        explanationTh: 'การแบ่งเขตควบคุมความปลอดภัยลงไปถึงระดับรายเวิร์กโหลด คอนเทนเนอร์ หรืออุปกรณ์แต่ละชิ้น เพื่อควบคุม East-West Traffic อย่างละเอียด'
      },
      {
        termEn: 'Software-Defined Networking',
        acronym: 'SDN',
        explanationTh: 'สถาปัตยกรรมเครือข่ายที่แยก Control Plane ออกจาก Data Plane เพื่อให้บริหารจัดการเส้นทางและนโยบายความปลอดภัยได้จากศูนย์กลางด้วยโปรแกรม'
      },
      {
        termEn: 'Control Plane vs. Data Plane',
        explanationTh: 'Control Plane ทำหน้าที่ตัดสินใจเส้นทางและนโยบายเครือข่าย ส่วน Data Plane ทำหน้าที่ส่งผ่านแพ็กเก็ตจริงตามคำสั่งที่ได้รับ'
      },
      {
        termEn: 'IT/OT Convergence',
        explanationTh: 'การเชื่อมต่อระบบเทคโนโลยีสารสนเทศสำนักงาน (IT) เข้ากับระบบปฏิบัติการโรงงาน (OT) เพื่อแลกเปลี่ยนข้อมูลและการวิเคราะห์'
      },
      {
        termEn: 'OT Safety Considerations',
        explanationTh: 'การให้ความสำคัญสูงสุดต่อความปลอดภัยของชีวิตมนุษย์ สิ่งแวดล้อม และการทำงานต่อเนื่องของเครื่องจักรเหนือกว่าการรักษาความลับข้อมูล'
      }
    ],
    scenarios: [
      {
        titleTh: 'การเชื่อมสายการผลิตโรงงานอัจฉริยะกับระบบ Cloud โดยไม่เสี่ยงทำ PLC ล่ม',
        contextTh:
          'โรงงานผลิตชิ้นส่วนยานยนต์ต้องการดึงข้อมูลสถิติการทำงานของเครื่องจักรที่ควบคุมด้วย PLC และ RTOS ขึ้นไปวิเคราะห์บน Cloud Analytics แต่ฝ่ายวิศวกรรมโรงงานปฏิเสธการติดตั้งซอฟต์แวร์ Antivirus หรือการทำ Active Vulnerability Scan บนเครื่องควบคุมเพราะเคยทำให้เครื่องจักรหยุดกลางสายการผลิตมาแล้ว',
        decisionTh:
          'สถาปนิกความปลอดภัยออกแบบ Logical Segmentation ตามรูปแบบ Purdue Model โดยแยกเครือข่าย OT ออกจาก IT ด้วย Industrial DMZ ให้ PLC ส่งข้อมูลทางเดียวผ่าน Data Diode หรือตัวกลางใน DMZ ก่อนส่งขึ้น Cloud แทนการเชื่อมต่อตรง จากนั้นติดตั้ง Passive Network Sensor ผ่าน Network TAP เพื่อตรวจจับความผิดปกติของโปรโตคอล Modbus โดยไม่แตะต้องอุปกรณ์ PLC และบังคับให้การซ่อมบำรุงระยะไกลทุกครั้งต้องผ่าน Jump Host พร้อม MFA',
        takeawayTh:
          'ในสภาพแวดล้อม ICS/SCADA และ RTOS ที่หยุดไม่ได้และแพตช์ไม่ได้ การใช้ Logical Segmentation + Industrial DMZ + Passive Monitoring ช่วยให้ตอบโจทย์ธุรกิจ IT/OT Convergence ได้โดยยังคงรักษา OT Safety และ Availability ไว้อย่างครบถ้วน'
      },
      {
        titleTh: 'การควบคุมกองอุปกรณ์ IoT ในโรงพยาบาลอัจฉริยะด้วย SDN และ Air-gap เฉพาะจุด',
        contextTh:
          'โรงพยาบาลขนาดใหญ่มีอุปกรณ์ IoT ทางการแพทย์ ป้ายดิจิทัล และกล้องวงจรปิดนับพันตัวที่กระจายอยู่ทุกชั้นของอาคาร อุปกรณ์เหล่านี้ใช้เฟิร์มแวร์เฉพาะที่ไม่สามารถอัปเดตได้บ่อย ขณะเดียวกันห้องควบคุมระบบก๊าซทางการแพทย์และเครื่องกำเนิดไฟฟ้าฉุกเฉินต้องการความมั่นคงปลอดภัยระดับสูงสุด',
        decisionTh:
          'ทีมเครือข่ายใช้ระบบ Software-Defined Networking (SDN) เพื่อทำ Micro-segmentation จัดกลุ่ม IoT ตามประเภทหน้าที่และปิดกั้นไม่ให้กล้องวงจรปิดคุยกับเครื่องตรวจผู้ป่วยหรือฐานข้อมูลเวชระเบียนได้ ส่วนระบบควบคุมก๊าซทางการแพทย์ที่วิกฤตต่อชีวิตถูกแยกออกแบบ Physical Isolation (Air-gapped) พร้อมล็อกพอร์ต USB และกำหนดขั้นตอนตรวจสแกนไฟล์อัปเดตก่อนนำเข้าห้องควบคุม',
        takeawayTh:
          'SDN ตอบโจทย์การจัดการ Logical Micro-segmentation ขนาดใหญ่ที่มีอุปกรณ์จำนวนมากได้อย่างยืดหยุ่น ส่วน Physical Isolation (Air-gap) สงวนไว้สำหรับระบบวิกฤตสูงสุดที่ตัดขาดการเชื่อมต่อภายนอกได้จริง'
      }
    ],
    comparisonTables: [
      {
        captionTh: 'ตารางเปรียบเทียบระบบ IT องค์กร, IoT/Embedded และ ICS/SCADA (RTOS)',
        headersTh: ['มิติการพิจารณา', 'ระบบ IT องค์กรทั่วไป', 'IoT / Embedded Systems', 'ICS / SCADA และ RTOS'],
        rowsTh: [
          ['ลำดับความสำคัญหลัก', 'Confidentiality -> Integrity -> Availability', 'Availability / Functionality -> Integrity -> Confidentiality', 'Safety & Availability -> Integrity -> Confidentiality'],
          ['ทรัพยากร Compute / Power', 'สูง สามารถรัน EDR และเข้ารหัสเต็มรูปแบบ', 'จำกัดมาก (Low compute/power)', 'จำกัดและเน้นความแม่นยำเวลา (Deterministic)'],
          ['การอัปเดต Patch และอายุการใช้งาน', 'แพตช์สม่ำเสมอ อายุใช้งาน 3–5 ปี', 'แพตช์ยาก มักหยุดสนับสนุนเร็วหรือ End-of-Life', 'รัน 24/7 แพตช์ยากมาก (Vendor lock) อายุ 10–25 ปี'],
          ['ผลกระทบจาก Active Scanning', 'รับได้ใน Maintenance Window', 'ปานกลาง-สูง อุปกรณ์อาจค้างหรือรีบูต', 'อันตรายสูง เสี่ยงทำ PLC ค้างหรือกระทบความปลอดภัยทางกายภาพ'],
          ['กลยุทธ์ป้องกันหลัก', 'Patching, EDR, IAM, Firewall', 'Dedicated VLAN, เปลี่ยน Default Password, Firewall', 'Air-gap/Industrial DMZ, Passive Sensor, Jump Host, Data Diode']
        ]
      },
      {
        captionTh: 'ตารางเปรียบเทียบแนวทางแยกเครือข่าย: Physical Isolation vs. Logical Segmentation vs. SDN',
        headersTh: ['รูปแบบเครือข่าย', 'กลไกการแบ่งแยก', 'ความแข็งแกร่งในการกั้น', 'ความยืดหยุ่น / Scalability', 'จุดเสี่ยงและข้อจำกัดสำคัญ'],
        rowsTh: [
          ['Physical Isolation (Air-gapped)', 'ตัดขาดสายสัญญาณและอุปกรณ์เครือข่ายทางกายภาพ 100%', 'สูงสุด (กันการโจมตีทางไกลได้เกือบสมบูรณ์)', 'ต่ำ (อัปเดตและส่งข้อมูลยาก)', 'ภัยคุกคามผ่าน USB/สื่อพกพา แล็ปท็อปซ่อมบำรุง และต้นทุนเดินสายแยก'],
          ['Logical Segmentation', 'แบ่งขอบเขตผ่าน VLAN, Subnet, VRF, ACL และ Firewall', 'สูง (หากตั้งกฎรัดกุม)', 'ปานกลาง-สูง (ปรับเพิ่ม VLAN/Subnet ได้)', 'Misconfiguration ของ Firewall Rule, VLAN Hopping และภาระดูแลอุปกรณ์หลายตัว'],
          ['Software-Defined Networking (SDN)', 'แยก Control Plane รวมศูนย์ควบคุม Data Plane ด้วยโปรแกรม', 'สูงมาก (ทำ Micro-segmentation รายอุปกรณ์)', 'สูงสุด (ปรับนโยบายอัตโนมัติทั่วองค์กร)', 'SDN Controller เป็น Single Point of Compromise/Failure จึงต้อง Hardening สูงสุด']
        ]
      }
    ],
    applicationsAndLimitations: {
      applicationsTh: [
        'ใช้ Physical Isolation (Air-gapped) ปกป้องระบบควบคุมโครงสร้างพื้นฐานสำคัญที่มีความเสี่ยงต่อชีวิตหรือความมั่นคงระดับสูง',
        'ใช้ Logical Segmentation ร่วมกับ Industrial DMZ คั่นกลางระหว่างเครือข่าย IT และ OT เพื่อให้แลกเปลี่ยนข้อมูลทางธุรกิจได้โดยไม่เปิดช่องให้เจาะถึง PLC โดยตรง',
        'ประยุกต์ใช้ SDN ในเครือข่ายที่มีอุปกรณ์ IoT, เซิร์ฟเวอร์เสมือน และคอนเทนเนอร์จำนวนมากเพื่อให้บังคับใช้นโยบาย Micro-segmentation ได้รวดเร็ว'
      ],
      limitationsTh: [
        'การตัดอินเทอร์เน็ตแบบ Air-gapped ไม่ได้หมายความว่าปลอดภัยไร้เทียมทาน เพราะยังคงถูกโจมตีผ่านสื่อพกพา (Removable Media) หรือคนในได้',
        'อุปกรณ์ RTOS, Embedded และ ICS จำนวนมากไม่สามารถติดตั้ง Endpoint Agent หรือทำ Active Scan ได้ ทำให้การมองเห็นภัยคุกคามต้องพึ่งพา Passive Network Sensor เท่านั้น',
        'การใช้ SDN รวมศูนย์ Control Plane หากไม่มีการทำ Redundancy และจำกัดสิทธิ์เข้าถึง Controller อย่างเข้มงวดอาจกลายเป็นจุดล้มเหลวเดี่ยวของทั้งเครือข่าย'
      ]
    },
    commonMisconceptions: [
      {
        misconceptionTh: 'คิดว่าเครือข่าย Air-gapped (Physical Isolation) ปลอดภัย 100% ไม่ต้องมีมาตรการอื่นเพิ่มเติม',
        clarificationTh:
          'แม้จะตัดการเชื่อมต่อจากเครือข่ายภายนอกแล้ว แต่ผู้โจมตีหรือเหตุไม่คาดฝันยังเข้าถึงผ่าน USB Flash Drive แผ่นซอฟต์แวร์อัปเดต แล็ปท็อปของช่างเทคนิคที่นำมาต่อตรง หรือแม้กระทั่งการเชื่อมสัญญาณไร้สายที่แอบติดตั้งไว้ จึงยังต้องควบคุมทางกายภาพและการสแกนสื่อนำเข้าเสมอ'
      },
      {
        misconceptionTh: 'นำวิธีการทดสอบและป้องกันแบบ IT เช่น Active Vulnerability Scan หรือ Auto-Reboot Patching ไปใช้กับระบบ ICS/RTOS',
        clarificationTh:
          'ระบบ RTOS และ PLC อ่อนไหวต่อเวลาตอบสนองและแพ็กเก็ตที่ไม่คาดคิด การยิง Active Scan อาจทำให้ตัวควบคุมค้างและเกิดอันตรายทางกายภาพ (OT Safety) ได้ จึงต้องใช้ Passive Monitoring และทดสอบใน Testbed แทน'
      },
      {
        misconceptionTh: 'เข้าใจว่า Logical Segmentation ด้วย VLAN อย่างเดียวเพียงพอที่จะป้องกันการโจมตีข้ามโซนแล้ว',
        clarificationTh:
          'หากแบ่งเพียง VLAN แต่ปล่อยให้ Router/Layer 3 Switch ส่งผ่านทราฟฟิกระหว่าง VLAN ได้อย่างอิสระก็แทบไม่ช่วยป้องกัน การทำ Logical Segmentation ที่มีประสิทธิภาพต้องวาง Firewall หรือ Stateful ACLs คั่นระหว่างโซนเพื่ออนุญาตเฉพาะพอร์ตและโปรโตคอลที่จำเป็นเท่านั้น'
      }
    ],
    scenarioAnalysisGuide: {
      approachStepsTh: [
        'ระบุประเภทของระบบในโจทย์ให้ชัดเจนว่าเป็นระบบสำนักงานทั่วไป (IT) หรือระบบเฉพาะทาง (IoT, Embedded, RTOS, ICS/SCADA)',
        'หากเป็นระบบ OT/ICS หรือ RTOS ให้ยึดหลัก "OT Safety & Availability First" ทันที หลีกเลี่ยงตัวเลือกที่สั่งสแกนเชิงรุก ติดตั้ง Agent หนักๆ หรือรีบูตเครื่องจักรทันที',
        'ตรวจสอบความต้องการในการสื่อสาร: หากไม่ต้องเชื่อมต่อกับระบบอื่นเลยและต้องการความมั่นคงสูงสุด -> Air-gapped; หากต้องส่งข้อมูลระหว่าง IT-OT อย่างควบคุมได้ -> Logical Segmentation / Industrial DMZ; หากต้องการคุมทราฟฟิกรายอุปกรณ์จำนวนมากแบบไดนามิกจากศูนย์กลาง -> SDN',
        'หากโจทย์เน้นปัญหาอุปกรณ์แพตช์ไม่ได้ (Inability to Patch) ให้จับคู่กับ Compensating Controls เช่น VLAN Isolation, Jump Host, Data Diode และ Passive Monitoring'
      ],
      examSignalKeywords: [
        { keywordEn: 'deterministic timing / strict deadline / cannot tolerate latency', meaningTh: 'ชี้ไปยัง RTOS ที่ห้ามรันซอฟต์แวร์หนักหรือสแกนเชิงรุกที่ก่อให้เกิดความหน่วง' },
        { keywordEn: 'PLC / HMI / Modbus / life safety / manufacturing plant', meaningTh: 'ชี้ไปยังสภาพแวดล้อม ICS/SCADA (OT) ที่ต้องยึด Safety และใช้ Passive Monitoring' },
        { keywordEn: 'no physical connection / isolated from internet / USB risk', meaningTh: 'ชี้ไปยัง Physical Isolation (Air-gapped Network)' },
        { keywordEn: 'VLAN / subnet / firewall separating IT and OT', meaningTh: 'ชี้ไปยัง Logical Segmentation (เช่น Industrial DMZ)' },
        { keywordEn: 'decoupled control plane and data plane / centralized programmable', meaningTh: 'ชี้ไปยัง Software-Defined Networking (SDN)' },
        { keywordEn: 'low compute / default credentials / cannot install EDR', meaningTh: 'ชี้ไปยังอุปกรณ์ IoT หรือ Embedded Systems ที่ต้องแยกเครือข่ายชดเชย' }
      ]
    },
    summaryTh: [
      'อุปกรณ์ IoT, Embedded Systems, RTOS และระบบ ICS/SCADA มีข้อจำกัดด้าน Compute, Power, Deterministic Timing และอายุการใช้งานยาวนาน ทำให้มักไม่สามารถอัปเดตแพตช์หรือรัน Endpoint Security ทั่วไปได้',
      'สภาพแวดล้อม OT ให้ความสำคัญต่อ Safety และ Availability เหนือกว่า Confidentiality ดังนั้นการตรวจสอบและป้องกันต้องอาศัย Passive Monitoring และไม่รบกวนการทำงานของเครื่องจักร',
      'การป้องกันเชิงสถาปัตยกรรมอาศัยการแยกเครือข่ายทั้งแบบ Physical Isolation (Air-gapped), Logical Segmentation (VLAN/Firewall/DMZ) และ SDN (แยก Control Plane จาก Data Plane) ให้เหมาะสมกับความเสี่ยงและความต้องการใช้งานจริง'
    ],
    knowledgeChecks: [
      {
        id: 'L3-02-KC1',
        questionTh:
          'โรงงานผลิตสารเคมีพบว่าซอฟต์แวร์ควบคุมวาล์วความดันบน PLC รุ่นเก่าไม่สามารถอัปเดตแพตช์ได้ และในอดีตการรัน Active Vulnerability Scanner เคยทำให้ PLC หยุดตอบสนองจนเกือบเกิดอุบัติเหตุ ฝ่ายความปลอดภัยควรวางแผนตรวจสอบและป้องกันระบบนี้อย่างไรจึงจะเหมาะสมที่สุด?',
        choices: [
          { id: 'a', textTh: 'ติดตั้ง Endpoint Detection and Response (EDR) ลงบน PLC ทุกตัวเพื่อบล็อกมัลแวร์แบบเรียลไทม์' },
          { id: 'b', textTh: 'ตั้งเวลาให้ Active Scanner ยิงตรวจสอบเฉพาะช่วงกลางคืนเพื่อลดผลกระทบ' },
          { id: 'c', textTh: 'แยกเครือข่าย OT ด้วย Logical Segmentation และใช้ Passive Network Sensor ผ่าน TAP เพื่อตรวจจับความผิดปกติโดยไม่รบกวน PLC' },
          { id: 'd', textTh: 'เปลี่ยนรหัสผ่านเริ่มต้นแล้วเชื่อมต่อ PLC เข้ากับอินเทอร์เน็ตโดยตรงเพื่อให้ซอฟต์แวร์อัปเดตเอง' }
        ],
        correctChoiceId: 'c',
        explanationTh:
          'คำตอบที่ถูกต้องคือ c เนื่องจาก PLC ไม่รองรับ EDR (ข้อ a ผิด) และการยิง Active Scan ไม่ว่าเวลาใดในโรงงานที่รัน 24/7 ยังคงเสี่ยงต่อความปลอดภัยทางกายภาพ (ข้อ b ผิด) ส่วนการต่ออินเทอร์เน็ตโดยตรงยิ่งเปิดอันตรายมหาศาล (ข้อ d ผิด) การแยกเครือข่ายร่วมกับ Passive Sensor ผ่าน TAP จึงปลอดภัยและไม่รบกวนระบบ OT'
      },
      {
        id: 'L3-02-KC2',
        questionTh:
          'สถาปัตยกรรมเครือข่ายแบบใดที่แยกส่วนการตัดสินใจควบคุมเส้นทาง (Control Plane) ออกจากตัวอุปกรณ์ส่งผ่านแพ็กเก็ต (Data Plane) เพื่อบริหารจัดการ Micro-segmentation จากศูนย์กลางผ่านโปรแกรมและ API?',
        choices: [
          { id: 'a', textTh: 'Software-Defined Networking (SDN)' },
          { id: 'b', textTh: 'Physical Isolation (Air-gapped)' },
          { id: 'c', textTh: 'SCADA Historian Architecture' },
          { id: 'd', textTh: 'Token Ring Topology' }
        ],
        correctChoiceId: 'a',
        explanationTh:
          'คำตอบที่ถูกต้องคือ a เพราะนิยามหลักของ Software-Defined Networking (SDN) คือการแยก Control Plane ออกจาก Data Plane ไปรวมศูนย์ที่ SDN Controller เพื่อให้เขียนโปรแกรมควบคุมเส้นทางและนโยบายแยกส่วนแบบไดนามิกได้ ข้อ b, c และ d ไม่ใช่สถาปัตยกรรมแยก Control/Data Plane'
      },
      {
        id: 'L3-02-KC3',
        questionTh:
          'เหตุใดระบบควบคุมหุ่นยนต์โรงงานที่ทำงานบน Real-Time Operating System (RTOS) จึงไม่ควรเปิดใช้งานโปรแกรมสแกนไวรัสแบบเรียลไทม์ที่มีการใช้ CPU สูงและบังคับรีสตาร์ตอัตโนมัติ?',
        choices: [
          { id: 'a', textTh: 'เพราะ RTOS ไม่เคยมีช่องโหว่ด้านความปลอดภัยเลย' },
          { id: 'b', textTh: 'เพราะระบบปฏิบัติการ RTOS ออกแบบมาเพื่อรักษาความลับข้อมูล (Confidentiality) เป็นอันดับหนึ่งเท่านั้น' },
          { id: 'c', textTh: 'เพราะ RTOS ต้องใช้ร่วมกับ Public Cloud เท่านั้น' },
          { id: 'd', textTh: 'เพราะ RTOS ต้องการความเที่ยงตรงด้านเวลาตอบสนอง (Deterministic Timing) ความหน่วงหรือการรีบูตอาจทำให้ระบบล้มเหลวหรือเป็นอันตรายต่อความปลอดภัย' }
        ],
        correctChoiceId: 'd',
        explanationTh:
          'คำตอบที่ถูกต้องคือ d หัวใจของ RTOS คือการรับประกันว่างานจะเสร็จสิ้นภายใน Deadline ที่แน่นอน การกินทรัพยากรของ Agent ความปลอดภัยหรือการรีสตาร์ตกระทบทั้ง Availability และ Safety โดยตรง ข้อ a, b และ c ไม่เป็นความจริง'
      },
      {
        id: 'L3-02-KC4',
        questionTh:
          'ศูนย์วิจัยทางการทหารแยกเครือข่ายห้องปฏิบัติการลับด้วยวิธี Physical Isolation (Air-gapped) เพื่อตัดการเชื่อมต่อจากอินเทอร์เน็ตและเครือข่ายสำนักงานโดยสมบูรณ์ ช่องทางภัยคุกคามใดที่ผู้ดูแลระบบยังคงต้องเฝ้าระวังและควบคุมอย่างเข้มงวดที่สุดในระบบนี้?',
        choices: [
          { id: 'a', textTh: 'การโจมตีแบบ SQL Injection ผ่านหน้าเว็บไซต์สาธารณะ' },
          { id: 'b', textTh: 'การนำเข้ามัลแวร์ผ่านสื่อบันทึกข้อมูลพกพา (USB) หรือแล็ปท็อปของช่างบำรุงรักษาที่นำมาเสียบเชื่อมต่อภายใน' },
          { id: 'c', textTh: 'การโจมตีแบบ Volumetric DDoS จากเครือข่ายอินเทอร์เน็ตภายนอก' },
          { id: 'd', textTh: 'การตั้งค่า DNS Forwarding ของ Cloud Provider ผิดพลาด' }
        ],
        correctChoiceId: 'b',
        explanationTh:
          'คำตอบที่ถูกต้องคือ b เพราะแม้ระบบ Air-gapped จะตัดท่ออินเทอร์เน็ตออกไปจนไม่เสี่ยงต่อ DDoS หรือเว็บโจมตีจากภายนอก (ข้อ a, c, d) แต่วิธีที่ข้อมูลและซอฟต์แวร์เข้า-ออกระบบ Air-gapped ได้จริงคือสื่อบันทึกข้อมูลพกพา (USB) และเครื่องมือช่างบำรุงรักษา ซึ่งมักเป็นช่องทางแพร่กระจายมัลแวร์คลาสสิกสู่เครือข่ายแยกเดี่ยว'
      }
    ],
    references: [
      {
        title: 'CompTIA Security+ (SY0-701) Exam Objectives Version 5.0 — Objective 3.1',
        noteTh: 'ครอบคลุม IoT, ICS/SCADA, RTOS, Embedded Systems, Air-gapped, Logical Segmentation และ SDN'
      },
      {
        title: 'NIST SP 800-82r3: Guide to Operational Technology (OT) Security',
        noteTh: 'มาตรฐานอ้างอิงหลักด้านการออกแบบความปลอดภัย การแบ่งโซน และความปลอดภัยทางกายภาพในระบบ ICS/SCADA'
      },
      {
        title: 'CISA & NSA Guidance on Software-Defined Networking and OT Segmentation',
        noteTh: 'แนวทางปฏิบัติในการแยกเครือข่าย IT/OT และการลดความเสี่ยงของ Control Plane'
      }
    ],
    relatedLessonIds: ['L1-01', 'L2-05', 'L3-01', 'L3-03', 'L4-01']
  },
  {
    id: 'L3-03',
    examCode: 'SY0-701',
    domainId: 'D3',
    order: 18,
    titleTh: 'การออกแบบโครงสร้างเครือข่ายปลอดภัย Security Zones และ Failure Modes',
    titleEn: 'Infrastructure Placement, Security Zones, and Failure Modes',
    estimatedMinutes: 45,
    learningObjectives: [
      'ออกแบบ Security Zones และกำหนดตำแหน่งการวางอุปกรณ์ (Device Placement) เพื่อลด Attack Surface และควบคุมการเชื่อมต่อทั้ง North-South, East-West และ Out-of-Band Management ได้',
      'วิเคราะห์และเปรียบเทียบพฤติกรรมเมื่ออุปกรณ์ล้มเหลวระหว่าง Fail-open กับ Fail-closed รวมถึงเลือกใช้ให้สอดคล้องกับความต้องการด้านความปลอดภัยและความพร้อมใช้งาน',
      'แยกแยะคุณลักษณะการทำงานของอุปกรณ์เครือข่ายแบบ Active vs. Passive และ Inline vs. Tap/Monitor พร้อมข้อดีและข้อจำกัดของแต่ละรูปแบบ',
      'อธิบายหน้าที่ ตำแหน่งติดตั้ง และจุดประสงค์ทางสถาปัตยกรรมของ Jump Server, Proxy Server, IPS/IDS, Load Balancer และ Sensors ตามขอบเขต SY0-701 Objective 3.2'
    ],
    objectiveIds: ['3.2'],
    prerequisites: [
      'L1-03 สถาปัตยกรรม Zero Trust, Physical Security และ Deception Tech',
      'L2-09 เทคนิค Mitigation และการทำ Enterprise Hardening',
      'L3-02 IoT, ICS/SCADA, Embedded, RTOS และ Network Segmentation'
    ],
    sections: [
      {
        id: 'sec-zones-placement-surface-connectivity',
        titleTh: '1. Security Zones, Device Placement, Attack Surface และ Connectivity',
        contentTh: [
          'หัวใจของการออกแบบเครือข่ายองค์กรตาม Objective 3.2 เริ่มจากการแบ่งพื้นที่ออกเป็น Security Zones ตามระดับความเชื่อถือ (Trust Boundaries) แทนที่จะให้ทุกเครื่องอยู่บนเครือข่ายแบนราบเดียวกัน (Flat Network) โซนพื้นฐานที่ทุกองค์กรควรมีประกอบด้วย 1. Untrusted Zone (อินเทอร์เน็ตภายนอกที่เชื่อถือไม่ได้เลย) 2. Screened Subnet หรือ DMZ (โซนกึ่งกลางสำหรับวางเซิร์ฟเวอร์ที่ต้องให้บริการบุคคลภายนอก เช่น Web Server, Mail Gateway และ Reverse Proxy) 3. Trusted Internal Zone (เครือข่ายพนักงานและระบบงานภายใน) 4. Restricted / High-Security Zone (พื้นที่เก็บฐานข้อมูลสำคัญ ระบบการเงิน หรือ OT ที่จำกัดการเข้าถึงสูงสุด) และ 5. Management Zone สำหรับการบริหารจัดการอุปกรณ์เครือข่ายโดยเฉพาะ',
          'การวางตำแหน่งอุปกรณ์ (Device Placement) ณ จุดคอขวด (Choke Points) ระหว่างโซนมีความสำคัญอย่างยิ่งต่อการลด Attack Surface ตัวอย่างเช่น การวาง Firewall ตัวนอกคั่นระหว่าง Untrusted Internet กับ DMZ และวาง Firewall อีกชั้น (หรือใช้โซนแยกบน Firewall) คั่นระหว่าง DMZ กับ Internal Network เพื่อให้มั่นใจว่าหากผู้โจมตีเจาะเว็บเซิร์ฟเวอร์ใน DMZ ได้ ก็จะไม่สามารถข้ามเข้าสู่ฐานข้อมูลใน Restricted Zone ได้โดยอัตโนมัติ ข้อห้ามสำคัญทางสถาปัตยกรรมคือการตั้งค่าเซิร์ฟเวอร์แบบ Dual-homed ที่เชื่อมต่อการ์ดแลนขาหนึ่งเข้า DMZ และอีกขาเข้า Internal Network โดยตรง เพราะจะเป็นการสร้างสะพานข้าม Firewall และขยาย Attack Surface ให้ผู้โจมตีทะลุผ่านการป้องกันหลัก',
          'ในมิติของการเชื่อมต่อ (Connectivity) สถาปนิกความปลอดภัยต้องออกแบบควบคุมทราฟฟิกทั้งสองทิศทาง ได้แก่ North-South Traffic (ทราฟฟิกที่วิ่งเข้า-ออกระหว่างภายนอกกับภายในองค์กร) และ East-West Traffic (ทราฟฟิกที่วิ่งแนวขวางระหว่างเซิร์ฟเวอร์ด้วยกันหรือระหว่างผู้ใช้งานภายใน) ในอดีตองค์กรมักคุมเข้มเฉพาะ North-South จนทำให้มัลแวร์ที่หลุดเข้ามาแล้วแพร่กระจายแบบ East-West ได้อย่างเสรี ปัจจุบันจึงต้องวางจุดตรวจจับและ Internal Segmentation ควบคู่กัน นอกจากนี้สำหรับอุปกรณ์เครือข่ายและเซิร์ฟเวอร์สำคัญควรแยกช่องทางการจัดการไปอยู่บน Out-of-Band Management (OOBM) ซึ่งเป็นเครือข่ายบริหารจัดการเฉพาะที่แยกออกจากทราฟฟิกผู้ใช้ปกติ เพื่อให้ผู้ดูแลระบบยังรีโมตเข้าไปกู้คืนอุปกรณ์ได้แม้เครือข่ายหลักล่มหรือโดน DDoS และป้องกันผู้ใช้งานทั่วไปไม่ให้เห็นหน้าจัดการอุปกรณ์'
        ],
        keyPointsTh: [
          'Security Zones แยกขอบเขตความเชื่อถือตั้งแต่ Untrusted, Screened Subnet (DMZ), Internal, Restricted ไปจนถึง Management Zone',
          'Device Placement ที่ดีต้องวางควบคุมที่จุดคอขวดและหลีกเลี่ยง Dual-homed Server ที่ข้าม Bypass มาตรการ Firewall',
          'ควบคุมทั้ง North-South และ East-West Traffic พร้อมแยกการจัดการอุปกรณ์สำคัญไปใช้ Out-of-Band Management (OOBM)'
        ]
      },
      {
        id: 'sec-failure-modes-attributes',
        titleTh: '2. Failure Modes (Fail-open vs. Fail-closed) และคุณลักษณะอุปกรณ์ (Active/Passive, Inline/Tap)',
        contentTh: [
          'ไม่มีอุปกรณ์ฮาร์ดแวร์ใดที่ไม่เคยขัดข้อง ดังนั้นการออกแบบสถาปัตยกรรมจึงต้องกำหนด Failure Modes ล่วงหน้าว่าเมื่ออุปกรณ์ควบคุมความปลอดภัยล่มหรือไฟดับ อุปกรณ์นั้นควรตอบสนองอย่างไร รูปแบบแรกคือ **Fail-closed** หมายถึงเมื่ออุปกรณ์ขัดข้อง ระบบจะปิดกั้นหรือตัดทราฟฟิกทั้งหมดไม่ให้ผ่านเข้าไปได้ เหตุผลที่ต้องใช้ Fail-closed ก็เพื่อปกป้อง Confidentiality และ Integrity สูงสุดในระบบที่ยอมให้ข้อมูลรั่วไหลไม่ได้แม้แต่วินาทีเดียว ตัวอย่างเช่น Perimeter Firewall ของธนาคาร หรือระบบประตูนิรภัยเข้าห้องเก็บกุญแจเข้ารหัส อย่างไรก็ตาม ข้อเสียของ Fail-closed คือเกิดผลกระทบต่อ Availability ทันทีเมื่ออุปกรณ์พัง รูปแบบที่สองคือ **Fail-open** หมายถึงเมื่ออุปกรณ์เกิดปัญหา ทราฟฟิกจะถูกปล่อยผ่านไปได้ชั่วคราว (Bypass) โดยไม่ถูกตรวจสอบ เหมาะสำหรับสถานการณ์ที่ความต่อเนื่องของบริการหรือความปลอดภัยชีวิตสำคัญกว่าการกรองชั่วคราว เช่น Inline IPS หน้าเว็บค้าปลีกที่ต้องการ Availability สูง หรือประตูหนีไฟอาคารที่ต้องปลดล็อกให้คนหนีออกได้เมื่อไฟฟ้าดับ',
          'นอกเหนือจากโหมดความล้มเหลว อุปกรณ์เครือข่ายยังมีคุณลักษณะการทำงานต่างกันใน 2 คู่ ได้แก่ **Active vs. Passive** อุปกรณ์แบบ Active สามารถเข้าไปมีปฏิสัมพันธ์ แก้ไข บล็อก ดรอปแพ็กเก็ต หรือส่งสัญญาณ TCP Reset เพื่อตัดการเชื่อมต่อที่อันตรายได้ทันที (เช่น IPS, Firewall) ส่วนอุปกรณ์แบบ Passive ทำหน้าที่เพียงเฝ้าฟัง อ่าน วิเคราะห์ บันทึก Log และส่งการแจ้งเตือน โดยไม่เข้าไปแตะต้องหรือปรับเปลี่ยนทราฟฟิกในสายส่งเลย (เช่น IDS, Network Sensor)',
          'คู่คุณลักษณะที่สองซึ่งสัมพันธ์กับ Active/Passive อย่างใกล้ชิดคือ **Inline vs. Tap/Monitor** การติดตั้งแบบ Inline คือการวางอุปกรณ์คั่นกลางบนเส้นทางสายสัญญาณจริง (In-path) ทำให้แพ็กเก็ตทุกใบต้องวิ่งผ่านอุปกรณ์นี้ก่อนเดินทางต่อ ข้อดีคือสามารถบล็อกภัยคุกคามได้ทันทีก่อนถึงเป้าหมาย (ใช้กับ Active IPS, Firewall, WAF) แต่ข้อเสียคือเพิ่มความหน่วง (Latency) และอาจกลายเป็นจุดล้มเหลวเดี่ยว (Single Point of Failure) หากไม่มีระบบ Redundancy หรือ Fail-open ที่เหมาะสม ในทางกลับกัน การติดตั้งแบบ Tap/Monitor เป็นการต่อขนานอยู่นอกเส้นทางหลัก (Out-of-path) โดยรับสำเนาแพ็กเก็ตจากอุปกรณ์ Network TAP (ฮาร์ดแวร์แยกแสง/สัญญาณ) หรือ Switch SPAN/Mirror Port ข้อดีคือไม่เพิ่ม Latency และหากอุปกรณ์วิเคราะห์ล่มเครือข่ายหลักก็ยังคงวิ่งได้ปกติ 100% แต่ข้อจำกัดคือไม่สามารถหยุดยั้งแพ็กเก็ตที่กำลังวิ่งเข้าเป้าหมายแบบเรียลไทม์ด้วยตัวเองได้'
        ],
        keyPointsTh: [
          'Fail-closed ตัดการเชื่อมต่อเมื่ออุปกรณ์ล่มเพื่อรักษา Security/Confidentiality สูงสุด ส่วน Fail-open ปล่อยผ่านเพื่อรักษา Availability/Safety',
          'Active สามารถบล็อกหรือดัดแปลงทราฟฟิกได้ทันที ส่วน Passive ทำหน้าที่เพียงสังเกตการณ์ บันทึก และแจ้งเตือน',
          'Inline วางคั่นกลางเส้นทางจึงบล็อกได้แต่เพิ่ม Latency/SPOF ส่วน Tap/Monitor ต่อรับสำเนาผ่าน TAP/SPAN จึงไม่กระทบสายหลักแต่บล็อกทันทีไม่ได้'
        ]
      },
      {
        id: 'sec-network-appliances',
        titleTh: '3. บทบาทและตำแหน่งวางของ Network Appliances ทั้ง 5 ชนิด',
        contentTh: [
          '**Jump Server (หรือ Jump Host / Bastion Host)** คือเซิร์ฟเวอร์ตัวกลางที่ถูกเสริมความแข็งแกร่ง (Hardening) สูงสุดและตั้งอยู่ในจุดที่ควบคุมได้ เพื่อใช้เป็นทางผ่านเพียงช่องทางเดียวสำหรับผู้ดูแลระบบในการรีโมตเข้าไปจัดการเซิร์ฟเวอร์ใน Restricted Zone หรือ Management Zone ทำไมจึงต้องมี Jump Server แทนการเปิดพอร์ต SSH หรือ RDP ให้เข้าถึงเซิร์ฟเวอร์ทุกเครื่องโดยตรง เพราะช่วยลด Attack Surface ของเครื่องปลายทางจำนวนมาก บังคับให้ยืนยันตัวตนด้วย MFA จากจุดเดียว และสามารถบันทึกวิดีโอหรือคำสั่งทุกอย่างในเซสชันการทำงาน (Session Recording/Auditing) เพื่อตรวจสอบย้อนหลังได้',
          '**Proxy Server** ทำหน้าที่เป็นคนกลางรับส่งคำขอเครือข่ายแทนเครื่องลูกข่ายหรือเซิร์ฟเวอร์ โดยแบ่งเป็น 2 ทิศทางที่สำคัญมากในข้อสอบ ได้แก่ **Forward Proxy** ที่วางคั่นระหว่างผู้ใช้งานภายในกับอินเทอร์เน็ต เพื่อกรองเว็บไซต์อันตราย (URL Filtering), บังคับใช้นโยบายบริษัท, แคชเนื้อหา, ซ่อน IP จริงของผู้ใช้ และทำ TLS Inspection ขาออก ส่วน **Reverse Proxy** จะวางอยู่ด้านหน้าเว็บเซิร์ฟเวอร์ใน DMZ เพื่อรับคำขอจากผู้ใช้อินเทอร์เน็ตแทนเซิร์ฟเวอร์จริงข้างหลัง ช่วยซ่อนโครงสร้าง IP ภายใน ทำ TLS Termination/Offloading เพื่อลดภาระให้ Web Server, กระจายแคช และเป็นจุดติดตั้ง Web Application Firewall (WAF)',
          '**IDS และ IPS** ต่างตรวจจับภัยคุกคามจาก Signature หรือพฤติกรรมผิดปกติ (Anomaly) เช่นเดียวกัน แต่ต่างกันที่ลักษณะการทำงานและตำแหน่งวาง **IDS (Intrusion Detection System)** เป็นอุปกรณ์ Passive ที่ต่อแบบ Tap/Monitor (ผ่าน TAP หรือ SPAN) เพื่อตรวจจับและส่งแจ้งเตือน (Alert) ไปยัง SIEM เท่านั้น ส่วน **IPS (Intrusion Prevention System)** เป็นอุปกรณ์ Active ที่วางแบบ Inline เพื่อวิเคราะห์และดรอปแพ็กเก็ตโจมตีได้ทันทีก่อนถึงเซิร์ฟเวอร์ แต่ต้องปรับจูนอย่างดีเพื่อลด False Positive ที่อาจเผลอบล็อกลูกค้าจริง ส่วน **Sensors** คือตัวรวบรวม Telemetry และ Packet ตามจุดต่างๆ ของเครือข่าย (เช่น เซ็นเซอร์ใน DMZ, Internal Core และ OT Segment) เพื่อป้อนข้อมูลดิบให้ระบบวิเคราะห์อย่าง IDS, NDR หรือ SIEM',
          '**Load Balancer** คืออุปกรณ์ที่รับทราฟฟิกขาเข้าปริมาณมากแล้วกระจายไปยังกลุ่มเซิร์ฟเวอร์ (Backend Pool) หลายเครื่องอย่างสมดุล พร้อมทำ Health Check คอยตัดเซิร์ฟเวอร์ที่ล่มออกจากระบบอัตโนมัติ ทำไม Load Balancer จึงสำคัญในสถาปัตยกรรมความปลอดภัย เพราะนอกจากช่วยเพิ่ม High Availability และรับมือภาระโหลดสูงหรือการโจมตี DDoS บางรูปแบบแล้ว Load Balancer ยังมักทำหน้าที่ TLS Offloading (ถอดรหัส HTTPS ณ จุดรับทราฟฟิก) เพื่อให้สามารถส่งแพ็กเก็ตที่ถอดรหัสแล้วผ่าน WAF หรือ IPS ตรวจสอบภัยคุกคามด้านในได้อย่างมีประสิทธิภาพ'
        ],
        keyPointsTh: [
          'Jump Server รวมศูนย์การรีโมตดูแลระบบที่จุดเดียว ลดพอร์ตเปิดตรง บังคับ MFA และบันทึก Log แอดมินได้ครบถ้วน',
          'Forward Proxy คุมผู้ใช้งานภายในออกอินเทอร์เน็ต ส่วน Reverse Proxy ปกป้องและซ่อนเว็บเซิร์ฟเวอร์ภายในจากทราฟฟิกภายนอก',
          'IDS = Passive/Tap-Monitor (เตือนอย่างเดียว) ส่วน IPS = Active/Inline (บล็อกได้ทันที) และ Sensors เก็บข้อมูลตามจุดต่างๆ ส่ง SIEM',
          'Load Balancer กระจายโหลดเพิ่ม Availability พร้อมช่วยทำ Health Check และ TLS Offloading ให้เครื่องมือตรวจจับทำงานได้ง่ายขึ้น'
        ]
      },
      {
        id: 'sec-placement-design-patterns',
        titleTh: '4. รูปแบบการวางตำแหน่งอุปกรณ์และวิธีอ่านโจทย์ออกแบบเครือข่าย',
        contentTh: [
          'เมื่อต้องเรียงลำดับอุปกรณ์สำหรับรับทราฟฟิกขาเข้าสู่เว็บแอปพลิเคชันจากอินเทอร์เน็ต การวางตำแหน่งมาตรฐานที่ปลอดภัยและมีประสิทธิภาพคือ: ทราฟฟิกจาก **Untrusted Internet -> Perimeter Firewall** (ตัดพอร์ตและ IP ที่ไม่เกี่ยวข้องระดับ L3/L4 ทิ้งก่อนเพื่อลดภาระอุปกรณ์ข้างหลัง) -> **Load Balancer / Reverse Proxy / WAF** (ที่ขอบ DMZ เพื่อกระจายโหลด ถอดรหัส TLS และกรองการโจมตีระดับแอปพลิเคชัน HTTP/S) -> **Web Server ใน DMZ** -> **Internal Firewall / Inline IPS** -> **Database Server ใน Restricted Zone** รูปแบบเป็นชั้นๆ นี้ช่วยให้ทุกขั้นตอนทำหน้าที่เฉพาะทางได้เต็มศักยภาพและไม่สร้างคอขวดโดยไม่จำเป็น',
          'อีกคำถามคลาสสิกในการวางตำแหน่งอุปกรณ์คือการติด **IDS Sensor หรือ IPS ไว้หน้า (นอก) Firewall เทียบกับ หลัง (ใน) Firewall** หากวาง Sensor ไว้ *ด้านหน้า/ด้านนอก* Firewall เซ็นเซอร์จะได้เห็นทราฟฟิกสแกนพอร์ตและการโจมตีทุกชนิดที่ถาโถมมาจากอินเทอร์เน็ต ซึ่งมีประโยชน์ในการทำ Threat Intelligence แต่มักเกิด Alert ท่วมจนทีม SOC วิเคราะห์ไม่ทัน ในทางตรงกันข้าม การวาง Sensor ไว้ *ด้านหลัง/ด้านใน* Firewall จะช่วยให้ Firewall กรองขยะออกไปก่อน ทำให้ Sensor รายงานเฉพาะทราฟฟิกที่ผ่านด่านแรกเข้ามาได้แล้วหรือความพยายามโจมตีในโซนภายใน เพิ่มคุณภาพความแม่นยำของสัญญาณเตือน (Signal-to-Noise Ratio) ได้อย่างชัดเจน'
        ],
        keyPointsTh: [
          'วาง Perimeter Firewall ก่อน Load Balancer/Reverse Proxy/WAF เพื่อคัดกรองทราฟฟิก L3/L4 ก่อนเข้าสู่การตรวจสอบ L7',
          'วาง Sensor นอก Firewall เพื่อเห็นภาพรวมการโจมตีจากอินเทอร์เน็ต หรือวางใน Firewall เพื่อลดเสียงรบกวนและจับภัยที่หลุดเข้ามาได้จริง'
        ]
      }
    ],
    keyTerms: [
      {
        termEn: 'Security Zones',
        explanationTh: 'การแบ่งพื้นที่เครือข่ายออกเป็นโซนที่มีระดับความเชื่อถือและมาตรการควบคุมแตกต่างกัน เช่น Untrusted, DMZ, Internal และ Restricted'
      },
      {
        termEn: 'Screened Subnet',
        acronym: 'DMZ',
        explanationTh: 'โซนกึ่งกลางที่คั่นระหว่างเครือข่ายภายนอกและเครือข่ายภายในสำหรับวางบริการสาธารณะอย่าง Web หรือ Reverse Proxy'
      },
      {
        termEn: 'Attack Surface',
        explanationTh: 'พื้นที่และช่องทางทั้งหมดที่ผู้โจมตีสามารถเข้าถึงหรือใช้เป็นจุดเริ่มต้นในการโจมตีระบบได้'
      },
      {
        termEn: 'North-South vs. East-West Traffic',
        explanationTh: 'North-South คือทราฟฟิกเข้า-ออกระหว่างภายนอกกับภายใน ส่วน East-West คือทราฟฟิกที่วิ่งสื่อสารระหว่างระบบภายในด้วยกัน'
      },
      {
        termEn: 'Out-of-Band Management',
        acronym: 'OOBM',
        explanationTh: 'เครือข่ายเฉพาะที่แยกออกจากทราฟฟิกปกติสำหรับใช้บริหารจัดการอุปกรณ์เครือข่ายและเซิร์ฟเวอร์อย่างปลอดภัย'
      },
      {
        termEn: 'Fail-open',
        explanationTh: 'โหมดความล้มเหลวที่อุปกรณ์ปล่อยให้ทราฟฟิกผ่านไปได้เมื่อเครื่องขัดข้อง เพื่อรักษาความพร้อมใช้งานหรือความปลอดภัยทางกายภาพ'
      },
      {
        termEn: 'Fail-closed',
        explanationTh: 'โหมดความล้มเหลวที่อุปกรณ์ปิดกั้นทราฟฟิกทั้งหมดเมื่อเครื่องขัดข้อง เพื่อป้องกันข้อมูลรั่วไหลหรือการเข้าถึงโดยมิชอบ'
      },
      {
        termEn: 'Active vs. Passive',
        explanationTh: 'Active สามารถบล็อก ดัดแปลง หรือยิงคำสั่งตัดการเชื่อมต่อได้ทันที ส่วน Passive เพียงเฝ้าสังเกตและแจ้งเตือน'
      },
      {
        termEn: 'Inline vs. Tap/Monitor',
        explanationTh: 'Inline วางคั่นกลางเส้นทางส่งข้อมูลจริงจึงบล็อกได้แต่เพิ่ม Latency ส่วน Tap/Monitor ต่อรับสำเนาผ่าน TAP/SPAN นอกเส้นทางหลัก'
      },
      {
        termEn: 'Jump Server',
        explanationTh: 'เซิร์ฟเวอร์ตัวกลางที่ถูก Hardening เพื่อควบคุม ยืนยันตัวตน และบันทึกการใช้งานของผู้ดูแลระบบก่อนเข้าถึงโซนความลับสูง'
      },
      {
        termEn: 'Forward Proxy vs. Reverse Proxy',
        explanationTh: 'Forward Proxy เป็นตัวกลางฝั่งผู้ใช้ออกสู่อินเทอร์เน็ต ส่วน Reverse Proxy เป็นตัวกลางรับคำขอจากภายนอกปกป้องเซิร์ฟเวอร์ภายใน'
      },
      {
        termEn: 'IDS vs. IPS',
        acronym: 'IDS/IPS',
        explanationTh: 'IDS ตรวจจับและแจ้งเตือนแบบ Passive นอกเส้นทาง ส่วน IPS วางแบบ Inline เพื่อตรวจจับและบล็อกการโจมตีได้ทันที'
      },
      {
        termEn: 'Load Balancer',
        explanationTh: 'อุปกรณ์กระจายคำขอไปยังเซิร์ฟเวอร์หลายเครื่องในกลุ่ม ทำ Health Check และช่วยทำ TLS Offloading'
      },
      {
        termEn: 'Network Sensors',
        explanationTh: 'จุดตรวจวัดและเก็บสำเนาทราฟฟิกหรือข้อมูล Telemetry ที่ติดตั้งตามโซนสำคัญเพื่อส่งต่อให้ระบบวิเคราะห์และ SIEM'
      }
    ],
    scenarios: [
      {
        titleTh: 'การวาง Security Zones และอุปกรณ์เครือข่ายสำหรับพอร์ทัลบริการการเงิน',
        contextTh:
          'สถาบันการเงินต้องการเปิดบริการพอร์ทัลเว็บให้ลูกค้าเข้าถึงจากอินเทอร์เน็ต โดยต้องป้องกันไม่ให้ผู้โจมตีเข้าถึงฐานข้อมูลบัญชีในโซนภายในได้โดยตรง และไม่ต้องการให้ผู้ดูแลระบบใช้เครื่องทำงานทั่วไป SSH ตรงเข้าไปยังเซิร์ฟเวอร์ฐานข้อมูล',
        decisionTh:
          'สถาปนิกแบ่งเครือข่ายเป็น Screened Subnet (DMZ), Trusted Internal, Restricted DB Zone และ Management Zone (OOBM) โดยวาง Perimeter Firewall หน้า DMZ ตามด้วย Load Balancer ที่ทำหน้าที่ Reverse Proxy และส่งต่อหลังกรองผ่าน WAF ไปยัง Web Server จากนั้นคั่นกลางระหว่าง DMZ กับฐานข้อมูลด้วย Internal Firewall และบังคับให้แอดมินเข้าจัดการฐานข้อมูลผ่าน Jump Server ใน Management Zone พร้อม MFA เท่านั้น',
        takeawayTh:
          'การวาง Security Zones ชัดเจนคู่กับ Reverse Proxy, Load Balancer และ Jump Server ช่วยลด Attack Surface และจำกัดเส้นทางการเข้าถึงทั้งจากลูกค้าภายนอกและผู้ดูแลภายใน'
      },
      {
        titleTh: 'การเลือกโหมด Inline IPS (Fail-open vs. Fail-closed) และ Passive Sensor ในโรงพยาบาล',
        contextTh:
          'โรงพยาบาลแห่งหนึ่งต้องการเพิ่มความสามารถตรวจจับภัยคุกคามในเครือข่ายระบบข้อมูลผู้ป่วยฉุกเฉิน โดยผู้บริหารกังวลว่าหากอุปกรณ์ความปลอดภัยตัวใหม่เกิดฮาร์ดแวร์ล่มกลางดึก แพทย์จะไม่สามารถเปิดดูประวัติการแพ้ยาของผู้ป่วยได้ทันท่วงที',
        decisionTh:
          'สำหรับระบบตรวจสอบเครือข่ายภายในแผนกฉุกเฉิน ทีมเลือกวาง Network Sensors เชื่อมต่อผ่าน Network TAP แบบ Passive Monitor เพื่อไม่เพิ่ม Latency และไม่ทำให้เครือข่ายล่มหากเซ็นเซอร์เสีย ส่วนอุปกรณ์ Inline IPS ที่จุดเชื่อมต่อหลักถูกตั้งค่าแบบมีคลัสเตอร์ Redundant (Active-Passive) และตั้ง Failure Mode เป็น Fail-open เพื่อให้ทราฟฟิกทางการแพทย์ยังเดินต่อได้หากเกิดความขัดข้องพร้อมแจ้งเตือนทีม SOC ทันที ในขณะที่ Firewall ประตูเชื่อมข้อมูลการเงินซึ่งเน้นความลับสูงสุดยังคงตั้งค่าแบบ Fail-closed',
        takeawayTh:
          'การเลือก Tap/Monitor vs. Inline และ Fail-open vs. Fail-closed ต้องอิงตามความต้องการของธุรกิจ: ระบบฉุกเฉินที่ห้ามล่มเลือก Passive TAP หรือ Fail-open ส่วนโซนความลับสูงที่ยอมหยุดดีกว่าข้อมูลรั่วเลือก Fail-closed'
      }
    ],
    comparisonTables: [
      {
        captionTh: 'ตารางเปรียบเทียบ Failure Modes และคุณลักษณะอุปกรณ์เครือข่าย',
        headersTh: ['คุณลักษณะ / โหมด', 'กลไกการทำงาน', 'ผลต่อ Security vs. Availability', 'ตัวอย่างการใช้งานที่เหมาะสม'],
        rowsTh: [
          ['Fail-closed', 'ตัดการเชื่อมต่อหรือปิดกั้นทราฟฟิกทั้งหมดเมื่ออุปกรณ์ล่ม', 'เน้น Security สูงสุด (ยอมระบบหยุดดีกว่าข้อมูลรั่ว)', 'Perimeter Firewall ธนาคาร, ประตูห้องความลับสูง'],
          ['Fail-open', 'ปล่อยให้ทราฟฟิกวิ่งผ่านต่อโดยไม่กรองเมื่ออุปกรณ์ล่ม', 'เน้น Availability/Safety (บริการยังเดินต่อได้)', 'Inline IPS หน้าบริการฉุกเฉิน/อีคอมเมิร์ซ, ประตูหนีไฟ'],
          ['Inline + Active', 'วางคั่นกลางเส้นทางสายส่งจริง บล็อก/ดรอปแพ็กเก็ตทันที', 'บล็อกภัยคุกคามได้ทันที แต่เพิ่ม Latency และความเสี่ยง SPOF', 'IPS, Next-Gen Firewall, WAF (Inline Mode)'],
          ['Tap/Monitor + Passive', 'ต่อขนานผ่าน Network TAP หรือ SPAN อ่านสำเนาทราฟฟิก', 'ไม่กระทบความเร็วและไม่ทำระบบล่ม แต่บล็อกเองทันทีไม่ได้', 'IDS, Passive Network Sensor, NDR, OT Monitoring']
        ]
      },
      {
        captionTh: 'ตารางสรุปบทบาทและตำแหน่งวาง Network Appliances สำคัญ',
        headersTh: ['อุปกรณ์ (Appliance)', 'หน้าที่หลัก', 'ตำแหน่งวางที่เหมาะสม', 'คุณค่าด้านความปลอดภัย'],
        rowsTh: [
          ['Jump Server (Bastion)', 'เป็นจุดผ่านกลางเดียวสำหรับงานบริหารระบบระยะไกล', 'Management Zone / ขอบ Restricted Zone', 'ลดพอร์ตเปิดตรง บังคับ MFA และเก็บ Admin Session Log'],
          ['Forward Proxy', 'ส่งคำขอออกอินเทอร์เน็ตแทนเครื่องพนักงาน', 'ระหว่าง Internal Users กับ Perimeter/Internet', 'URL Filtering, ซ่อน IP ผู้ใช้, แคชและตรวจจับ Malware ขาออก'],
          ['Reverse Proxy', 'รับคำขอจากผู้ใช้ภายนอกแทนเว็บเซิร์ฟเวอร์ภายใน', 'ด้านหน้า Backend Pool ใน Screened Subnet (DMZ)', 'ซ่อนโครงสร้างเซิร์ฟเวอร์ภายใน, TLS Offloading และติดตั้ง WAF'],
          ['Load Balancer', 'กระจายคำขอให้ Backend Pool และตรวจสอบ Health Check', 'หน้า Web/App Tier ใน DMZ หรือ Data Center', 'เพิ่ม High Availability, ทนต่อโหลดสูง และช่วย Offload TLS'],
          ['IDS / IPS / Sensors', 'ตรวจจับ วิเคราะห์ หรือบล็อกพฤติกรรมโจมตีในทราฟฟิก', 'IPS: Inline หลัง/หน้า Firewall; IDS/Sensors: TAP/SPAN ตามโซน', 'เพิ่มการมองเห็นทั้ง North-South/East-West และหยุดการโจมตีอัตโนมัติ']
        ]
      }
    ],
    applicationsAndLimitations: {
      applicationsTh: [
        'ใช้ออกแบบเครือข่ายแบบ Multi-tier ที่แยกหน้าบ้าน (DMZ) ออกจากฐานข้อมูลหลังบ้าน (Restricted) และพื้นที่จัดการระบบ (OOBM) อย่างชัดเจน',
        'ใช้ Network TAP ร่วมกับ Passive Sensors เพื่อตรวจจับการเคลื่อนที่แนวขวาง (East-West) โดยไม่สร้างภาระหรือความเสี่ยงให้ระบบหลักหยุดทำงาน',
        'ใช้ Load Balancer ควบคู่กับ Reverse Proxy เพื่อรองรับความพร้อมใช้งานสูงพร้อมทำ TLS Termination ก่อนส่งผ่านให้เครื่องมือตรวจสอบระดับแอปพลิเคชัน'
      ],
      limitationsTh: [
        'การวางอุปกรณ์ Inline หลายชั้นซ้อนกันโดยไม่คำนึงถึงกำลังประมวลผลอาจสร้าง Latency สูงและเพิ่มจุดล้มเหลวเดี่ยว (SPOF)',
        'Switch SPAN Port อาจเกิดปัญหาดรอปแพ็กเก็ตได้เมื่อพอร์ตหลักมีทราฟฟิกหนาแน่นมาก ต่างจาก Hardware Network TAP ที่สำเนาสัญญาณได้ครบถ้วนกว่าแต่มีค่าใช้จ่ายเพิ่ม',
        'การใช้ Fail-open ช่วยรักษา Availability แต่เปิดช่องว่างให้ผู้โจมตีอาจจงใจส่งทราฟฟิกทำให้เครื่องมือป้องกันล่มเพื่อลักลอบผ่านเข้าไปได้หากไม่มีกลไก Alert ที่รวดเร็ว'
      ]
    },
    commonMisconceptions: [
      {
        misconceptionTh: 'สับสนระหว่าง Forward Proxy กับ Reverse Proxy หรือคิดว่าเป็นอุปกรณ์เดียวกัน',
        clarificationTh:
          'Forward Proxy ปกป้องและควบคุม "ผู้ใช้งานภายใน" เวลาเรียกออกไปข้างนอก (Outward) ส่วน Reverse Proxy ปกป้องและรับคำขอแทน "เซิร์ฟเวอร์ขององค์กร" จากผู้ใช้งานภายนอกที่วิ่งเข้ามา (Inward)'
      },
      {
        misconceptionTh: 'คิดว่าการตั้งค่า Fail-closed ดีที่สุดสำหรับอุปกรณ์ความปลอดภัยทุกตัวในทุกองค์กร',
        clarificationTh:
          'ไม่เสมอไป หากอุปกรณ์นั้นทำหน้าที่กรองบนเครือข่ายการแพทย์ฉุกเฉิน ระบบควบคุมโรงงาน หรือเว็บที่ความพร้อมใช้งานมีความสำคัญต่อรายได้/ชีวิต การตั้ง Fail-closed เมื่อเครื่องรวนอาจสร้างความเสียหายมากกว่าการตั้ง Fail-open ชั่วคราวพร้อมแจ้งเตือน'
      },
      {
        misconceptionTh: 'เข้าใจว่า IDS สามารถบล็อกการโจมตีได้ด้วยตัวเองเหมือน IPS เพียงแค่เสียบสายคนละแบบ',
        clarificationTh:
          'IDS ทำงานแบบ Passive โดยรับสำเนาทราฟฟิกผ่าน TAP หรือ SPAN เพื่อตรวจจับและแจ้งเตือน (หรือบางรุ่นอาจพยายามส่ง TCP Reset แต่ไม่การันตีการหยุดแพ็กเก็ตแรก) ส่วนอุปกรณ์ที่วาง Inline และตัดแพ็กเก็ตก่อนถึงเป้าหมายได้จริงคือ IPS'
      }
    ],
    scenarioAnalysisGuide: {
      approachStepsTh: [
        'วาดภาพเส้นทางทราฟฟิกในโจทย์ให้ชัดเจนว่าเป็น North-South (เข้า-ออกจากเน็ต), East-West (ภายใน) หรือการเข้าจัดการระบบ (Management)',
        'หากโจทย์ต้องการไม่ให้เครือข่ายล่มเมื่ออุปกรณ์ตรวจจับพัง หรือห้ามเพิ่ม Latency ให้เลือก Passive + Tap/Monitor (TAP/SPAN) หรือโหมด Fail-open',
        'หากโจทย์เน้นห้ามข้อมูลรั่วไหลหรือห้ามทราฟฟิกไม่พึงประสงค์หลุดผ่านแม้เครื่องเสีย ให้เลือก Fail-closed และวาง Inline Active',
        'จับคู่โจทย์กับ Network Appliances: คุมแอดมินรีโมตเข้าโซนลับ -> Jump Server, ซ่อน Backend Web Server -> Reverse Proxy, คุมพนักงานท่องเว็บ -> Forward Proxy, กระจายโหลด -> Load Balancer'
      ],
      examSignalKeywords: [
        { keywordEn: 'allow traffic when device fails / prioritize availability', meaningTh: 'ชี้ไปยังโหมด Fail-open' },
        { keywordEn: 'block all traffic on failure / prioritize security', meaningTh: 'ชี้ไปยังโหมด Fail-closed' },
        { keywordEn: 'receive copy of traffic / SPAN / TAP / no latency', meaningTh: 'ชี้ไปยังการวางอุปกรณ์แบบ Passive และ Tap/Monitor (เช่น IDS / Sensor)' },
        { keywordEn: 'in-path / drop malicious packets immediately', meaningTh: 'ชี้ไปยังการวางอุปกรณ์แบบ Inline และ Active (เช่น IPS)' },
        { keywordEn: 'single hardened entry point for administrators', meaningTh: 'ชี้ไปยัง Jump Server (Bastion Host)' },
        { keywordEn: 'hide internal server IP / SSL termination / inbound', meaningTh: 'ชี้ไปยัง Reverse Proxy (และ Load Balancer)' }
      ]
    },
    summaryTh: [
      'สถาปัตยกรรมเครือข่ายที่มั่นคงปลอดภัยต้องแยก Security Zones ชัดเจน ลด Attack Surface ที่จุดเชื่อมต่อระหว่างโซน คุมทราฟฟิกทั้ง North-South และ East-West รวมถึงแยก Management Plane ด้วย Out-of-Band Management',
      'การเลือกระหว่าง Fail-open กับ Fail-closed และ Inline (Active) กับ Tap/Monitor (Passive) เป็นการชั่งน้ำหนักระหว่างการป้องกันทันที ความเร็ว และความพร้อมใช้งานของระบบ',
      'Network Appliances อย่าง Jump Server, Forward/Reverse Proxy, IDS/IPS, Load Balancer และ Sensors ต่างมีบทบาทและตำแหน่งวางเฉพาะทางที่ทำงานร่วมกันเป็น Defense-in-Depth'
    ],
    knowledgeChecks: [
      {
        id: 'L3-03-KC1',
        questionTh:
          'ฝ่ายความปลอดภัยต้องการติดตั้งระบบตรวจจับการบุกรุกบนลิงก์ Core Switch ภายในที่มีปริมาณทราฟฟิกสูงมาก โดยมีเงื่อนไขห้ามทำให้เครือข่ายเกิดความหน่วง (Latency) เพิ่มขึ้นและห้ามทำให้การสื่อสารภายในหยุดชะงักหากอุปกรณ์ตรวจจับเกิดขัดข้อง ควรเลือกวางอุปกรณ์ในรูปแบบใด?',
        choices: [
          { id: 'a', textTh: 'Passive IDS ต่อแบบ Tap/Monitor ผ่าน Network TAP หรือ Switch SPAN Port' },
          { id: 'b', textTh: 'Inline Active IPS ที่ตั้งค่า Failure Mode เป็น Fail-closed' },
          { id: 'c', textTh: 'Reverse Proxy ที่บังคับให้ทราฟฟิกภายในทั้งหมดวิ่งผ่านก่อน' },
          { id: 'd', textTh: 'Jump Server แบบ Dual-homed เชื่อมต่อระหว่าง Core Switch กับอินเทอร์เน็ต' }
        ],
        correctChoiceId: 'a',
        explanationTh:
          'คำตอบที่ถูกต้องคือ a เพราะการวาง Passive IDS ผ่าน Network TAP หรือ SPAN Port (Tap/Monitor) เป็นการต่อรับสำเนาทราฟฟิกอยู่นอกเส้นทางหลัก จึงไม่เพิ่ม Latency และหากอุปกรณ์ IDS เสีย ทราฟฟิกหลักยังคงวิ่งต่อไปได้ตามปกติ ข้อ b ผิดเพราะ Inline Fail-closed เพิ่ม Latency และอาจทำเครือข่ายล่มเมื่อเครื่องเสีย ส่วนข้อ c และ d ไม่ตรงวัตถุประสงค์'
      },
      {
        id: 'L3-03-KC2',
        questionTh:
          'สถาบันการเงินต้องการวางอุปกรณ์เพื่อรับคำขอ HTTPS จากลูกค้าภายนอกเข้ามาในโซน DMZ เพื่อช่วยซ่อน IP จริงของเว็บเซิร์ฟเวอร์ภายใน ทำ TLS Termination และทำแคชข้อมูล อุปกรณ์ใดตอบโจทย์นี้ได้ตรงที่สุด?',
        choices: [
          { id: 'a', textTh: 'Forward Proxy' },
          { id: 'b', textTh: 'Out-of-Band Management Switch' },
          { id: 'c', textTh: 'Reverse Proxy' },
          { id: 'd', textTh: 'Passive Network Sensor' }
        ],
        correctChoiceId: 'c',
        explanationTh:
          'คำตอบที่ถูกต้องคือ c เพราะ Reverse Proxy ถูกวางหน้า Backend Web Servers เพื่อรับทราฟฟิกขาเข้าจากภายนอกแทนเซิร์ฟเวอร์จริง ช่วยซ่อนโครงสร้างภายในและทำ TLS Termination ได้ ข้อ a (Forward Proxy) ใช้ฝั่งผู้ใช้ภายในเรียกออกไปข้างนอก ส่วนข้อ b และ d ไม่ได้ทำหน้าที่รับคำขอเว็บและ TLS Termination'
      },
      {
        id: 'L3-03-KC3',
        questionTh:
          'ผู้ดูแลระบบเครือข่ายพบว่าหาก Perimeter Firewall ของศูนย์ข้อมูลสำคัญเกิดไฟฟ้าลัดวงจรหรือขัดข้อง ระบบจะต้องป้องกันไม่ให้ทราฟฟิกที่ไม่ได้รับอนุญาตจากอินเทอร์เน็ตหลุดเข้าสู่เครือข่ายภายในโดยเด็ดขาดแม้จะแลกกับการหยุดให้บริการชั่วคราว ลักษณะนี้ควรกำหนด Failure Mode แบบใด?',
        choices: [
          { id: 'a', textTh: 'Fail-open' },
          { id: 'b', textTh: 'Fail-closed' },
          { id: 'c', textTh: 'Split Tunneling' },
          { id: 'd', textTh: 'Tap/Monitor Bypass' }
        ],
        correctChoiceId: 'b',
        explanationTh:
          'คำตอบที่ถูกต้องคือ b (Fail-closed) เพราะเมื่ออุปกรณ์ขัดข้อง ระบบจะปิดกั้นทราฟฟิกทั้งหมดไม่ให้หลุดผ่านเข้ามาโดยไม่ได้รับการตรวจสอบ เพื่อรักษาความปลอดภัยเป็นสำคัญ ข้อ a (Fail-open) จะปล่อยผ่านเมื่อเครื่องเสียซึ่งเสี่ยงต่อการบุกรุก ส่วนข้อ c และ d ไม่ใช่ Failure Mode ของไฟร์วอลล์'
      },
      {
        id: 'L3-03-KC4',
        questionTh:
          'เพื่อลดพื้นที่ผิวการโจมตี (Attack Surface) ของเซิร์ฟเวอร์ฐานข้อมูลใน Restricted Zone องค์กรจึงปิดไม่ให้ผู้ดูแลระบบเชื่อมต่อ SSH จากเครือข่ายสำนักงานเข้าสู่ฐานข้อมูลโดยตรง แต่บังคับให้ล็อกอินผ่านเครื่องตัวกลางที่เปิด MFA และบันทึกเซสชันการทำงานทั้งหมด เครื่องตัวกลางนี้คืออุปกรณ์ใด?',
        choices: [
          { id: 'a', textTh: 'Load Balancer' },
          { id: 'b', textTh: 'Forward Proxy' },
          { id: 'c', textTh: 'Intrusion Detection Sensor' },
          { id: 'd', textTh: 'Jump Server (Bastion Host)' }
        ],
        correctChoiceId: 'd',
        explanationTh:
          'คำตอบที่ถูกต้องคือ d (Jump Server หรือ Bastion Host) ซึ่งเป็นเครื่องที่ถูก Hardening เพื่อเป็นจุดผ่านเพียงจุดเดียวสำหรับผู้ดูแลระบบในการรีโมตเข้าจัดการเซิร์ฟเวอร์สำคัญ พร้อมบังคับ MFA และบันทึก Log การใช้งาน ข้อ a, b และ c มีบทบาทในการกระจายโหลด กรองทราฟฟิกเว็บ และตรวจจับทราฟฟิกตามลำดับ'
      }
    ],
    references: [
      {
        title: 'CompTIA Security+ (SY0-701) Exam Objectives Version 5.0 — Objective 3.2',
        noteTh: 'ครอบคลุมการวางตำแหน่งอุปกรณ์ Security Zones, Failure Modes, Active/Passive, Inline/Tap และ Network Appliances'
      },
      {
        title: 'NIST SP 800-41 Rev. 1: Guidelines on Firewalls and Firewall Policy',
        noteTh: 'แนวทางวางตำแหน่งไฟร์วอลล์ การสร้าง DMZ/Screened Subnet และโครงสร้างการแบ่งโซนเครือข่าย'
      },
      {
        title: 'NIST SP 800-94: Guide to Intrusion Detection and Prevention Systems (IDPS)',
        noteTh: 'อธิบายการวางตำแหน่งเซนเซอร์ IDS/IPS ทั้งแบบ Inline และ Passive/TAP รวมถึงการจัดการข้อผิดพลาด'
      }
    ],
    relatedLessonIds: ['L1-03', 'L2-09', 'L3-02', 'L3-04', 'L4-06']
  },
  {
    id: 'L3-04',
    examCode: 'SY0-701',
    domainId: 'D3',
    order: 19,
    titleTh: 'Firewalls, Port Security (802.1X) และ Secure Access (VPN/SD-WAN/SASE)',
    titleEn: 'Firewalls, 802.1X Port Security, and Secure Access (VPN/SD-WAN/SASE)',
    estimatedMinutes: 45,
    learningObjectives: [
      'อธิบายการทำงานของระบบควบคุมการเข้าถึงระดับพอร์ตด้วย IEEE 802.1X และ Extensible Authentication Protocol (EAP) รวมถึงเหตุผลที่เหนือกว่าการกรอง MAC Address แบบเดิม',
      'เปรียบเทียบคุณสมบัติ ขอบเขตระดับ OSI Layer และกรณีใช้งานของไฟร์วอลล์ประเภท Layer 4, Layer 7, Next-Generation Firewall (NGFW), UTM และ Web Application Firewall (WAF)',
      'อธิบายกลไกการทำงานของเทคโนโลยีเชื่อมต่อระยะไกลและการสื่อสารที่ปลอดภัย ได้แก่ VPN (Split vs. Full Tunnel), IPsec (AH/ESP, Transport/Tunnel), TLS, Secure Remote Access, SD-WAN และ SASE',
      'เลือกใช้และบูรณาการมาตรการควบคุมเครือข่าย (Selection of Effective Controls) ได้เหมาะสมกับสถานการณ์จริงตามขอบเขต SY0-701 Objective 3.2'
    ],
    objectiveIds: ['3.2'],
    prerequisites: [
      'L1-03 สถาปัตยกรรม Zero Trust, Physical Security และ Deception Tech',
      'L1-06 PKI ใบรับรองดิจิทัล Hardware Crypto Tools และ Obfuscation',
      'L3-03 การออกแบบโครงสร้างเครือข่ายปลอดภัย Security Zones และ Failure Modes'
    ],
    sections: [
      {
        id: 'sec-port-security-8021x-eap',
        titleTh: '1. Port Security: มาตรฐาน IEEE 802.1X และ Extensible Authentication Protocol (EAP)',
        contentTh: [
          'ในอาคารสำนักงานที่มีปลั๊กสายแลนตามห้องประชุมหรือมีเครือข่าย Wi-Fi องค์กร การป้องกันไม่ให้คนนอกนำแล็ปท็อปแปลกปลอมมาเสียบสายเข้าเครือข่ายภายในได้ทันทีถือเป็นสิ่งจำเป็น แม้สวิตช์จะมีฟีเจอร์ Port Security พื้นฐานอย่างการจำกัดจำนวนหรือจำค่า MAC Address (Sticky MAC) แต่วิธีดังกล่าวยังถูกหลอกได้ง่ายด้วยการปลอม MAC Address (MAC Spoofing) ที่อ่านได้จากสติกเกอร์ใต้เครื่องพนักงาน ด้วยเหตุนี้มาตรฐาน **IEEE 802.1X** (Port-based Network Access Control หรือ PNAC) จึงถูกนำมาใช้เพื่อพิสูจน์ตัวตนระดับบุคคลหรือใบรับรองดิจิทัลก่อนอนุญาตให้ใช้งานพอร์ตเครือข่ายทั้งแบบมีสายและไร้สาย',
          'โครงสร้างการทำงานของ 802.1X อาศัยผู้เล่นหลัก 3 ฝ่ายประสานกัน ได้แก่ 1. **Supplicant** คือซอฟต์แวร์บนอุปกรณ์ลูกข่ายที่ต้องการขอเข้าเครือข่าย 2. **Authenticator** คือ Switch หรือ Wireless Access Point ที่ทำหน้าที่เปรียบเสมือนยามเฝ้าประตูพอร์ต 3. **Authentication Server** คือเซิร์ฟเวอร์ AAA (มักเป็น RADIUS) ที่ทำหน้าที่ตรวจสอบข้อมูลประจำตัวหรือใบรับรอง เมื่อเสียบสายใหม่ๆ พอร์ตจะอยู่ในสถานะปิดกั้นทราฟฟิกทั่วไปโดยอนุญาตเพียงแพ็กเก็ตยืนยันตัวตน (EAP over LAN) วิ่งผ่าน Authenticator ไปยัง RADIUS Server เท่านั้น หากยืนยันตัวตนผ่าน พอร์ตจะเปิดให้เข้า VLAN ที่ได้รับสิทธิ์ แต่หากล้มเหลว พอร์ตจะถูกปิดหรือส่งไปยัง Quarantine/Guest VLAN โดยอัตโนมัติ',
          'กลไกที่ใช้ส่งข้อมูลการยืนยันตัวตนภายใน 802.1X คือ **EAP (Extensible Authentication Protocol)** ซึ่งเป็นกรอบโปรโตคอลที่รองรับวิธีการตรวจสอบตัวตนหลายรูปแบบตามระดับความปลอดภัยที่องค์กรต้องการ รุ่นที่ปลอดภัยสูงสุดและแนะนำให้ใช้ในองค์กรคือ **EAP-TLS** เพราะบังคับใช้ใบรับรองดิจิทัลทั้งฝั่งเซิร์ฟเวอร์และฝั่งเครื่องลูกข่าย (Mutual Authentication) โดยไม่ต้องส่งรหัสผ่าน ส่วน **PEAP (Protected EAP)** และ **EAP-TTLS** จะใช้ใบรับรองเฉพาะฝั่งเซิร์ฟเวอร์สร้างอุโมงค์ TLS เข้ารหัสขึ้นมาก่อน แล้วจึงส่งชื่อผู้ใช้และรหัสผ่านเข้าไปในอุโมงค์นั้น ซึ่งบริหารจัดการได้ง่ายกว่า EAP-TLS เมื่อเครื่องลูกข่ายยังไม่มี PKI Client Certificate ขณะที่รุ่นเก่าอย่าง EAP-MD5 หรือ LEAP ถือว่าไม่ปลอดภัยและไม่ควรนำมาใช้งานอีก'
        ],
        keyPointsTh: [
          'IEEE 802.1X คุมการเข้าพอร์ตด้วยตัวตนและใบรับรอง จึงปลอดภัยกว่า Static MAC Filtering ที่ถูก MAC Spoofing ได้',
          '3 องค์ประกอบของ 802.1X: Supplicant (เครื่องผู้ใช้) -> Authenticator (Switch/AP) -> Authentication Server (RADIUS)',
          'EAP เป็นกรอบโปรโตคอลยืนยันตัวตน โดย EAP-TLS ปลอดภัยสูงสุด (ใช้ Cert ทั้งสองฝั่ง) ส่วน PEAP/EAP-TTLS ใช้อุโมงค์ TLS หุ้มรหัสผ่าน'
        ]
      },
      {
        id: 'sec-firewall-types',
        titleTh: '2. ประเภทของ Firewalls (Layer 4 vs. Layer 7, NGFW, UTM และ WAF)',
        contentTh: [
          'วิวัฒนาการของ Firewall จำแนกได้ตามความลึกของข้อมูลที่ตรวจสอบในแบบจำลอง OSI ไฟร์วอลล์พื้นฐานแบบ **Stateless Packet Filter (Layer 3/4)** จะตรวจทีละแพ็กเก็ตโดยดูเพียง IP ต้นทาง-ปลายทาง พอร์ต และโปรโตคอล แม้จะเร็วแต่ไม่จำสถานะการเชื่อมต่อ จึงตั้งกฎรับส่งข้อมูลกลับได้ยุ่งยากและเสี่ยงต่อการปลอมแปลง ส่วน **Stateful Inspection Firewall (Layer 4)** พัฒนาขึ้นมาโดยเก็บตารางสถานะการเชื่อมต่อ (State Table) ทำให้รู้ว่าแพ็กเก็ตขาเข้าเป็นส่วนหนึ่งของเซสชันที่ผู้ใช้ภายในเริ่มต้นไว้หรือไม่ อย่างไรก็ตาม Layer 4 Firewall ยังมองไม่เห็นไส้ในของแอปพลิเคชัน เช่น แยกไม่ออกว่าการเชื่อมต่อพอร์ต TCP 443 นั้นกำลังเข้าเว็บธนาคาร หรือกำลังใช้โปรแกรมต้องห้ามแอบส่งข้อมูลออกนอกองค์กร ซึ่งต้องใช้ **Layer 7 (Application-layer) Firewall** เพื่อวิเคราะห์ข้อมูลระดับแอปพลิเคชันโดยตรง',
          'เพื่อรับมือภัยคุกคามยุคใหม่ องค์กรจึงนิยมใช้ **NGFW (Next-Generation Firewall)** ซึ่งผสาน Stateful Firewall เข้ากับความสามารถระดับ Layer 7 ได้แก่ Deep Packet Inspection (DPI), Application Awareness (แยกแยะแอปพลิเคชันได้แม้เปลี่ยนพอร์ต), ระบบ IPS ในตัว, การระบุตัวตนผู้ใช้ (User/Identity Integration), การถอดตรวจ TLS Inspection และฟีดข่าวกรองภัยคุกคาม ส่วน **UTM (Unified Threat Management)** คืออุปกรณ์แบบครบวงจร (All-in-One) ที่รวม Firewall, IPS, Gateway Antivirus, URL/Web Filtering, Anti-Spam และ VPN ไว้ในกล่องเดียว ทำไมจึงต่างจาก NGFW: UTM ออกแบบมาให้เรียบง่ายและประหยัดค่าใช้จ่ายสำหรับธุรกิจขนาดเล็ก-กลางหรือสำนักงานสาขา (Branch Office) แต่อาจเกิดปัญหาคอขวดด้านประสิทธิภาพหากเปิดใช้ทุกฟีเจอร์พร้อมกันในองค์กรขนาดใหญ่ที่ทราฟฟิกหนาแน่น',
          '**WAF (Web Application Firewall)** เป็นไฟร์วอลล์เฉพาะทางที่ทำงานระดับ Layer 7 เพื่อปกป้องเว็บแอปพลิเคชันและ REST/GraphQL API จากการโจมตีทางเว็บโดยเฉพาะ เช่น SQL Injection, Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF) และช่องโหว่ในกลุ่ม OWASP Top 10 ความต่างระหว่าง WAF กับ NGFW ที่ผู้สอบต้องแม่นยำคือ NGFW ดูแลทราฟฟิกเครือข่ายทั่วไปหลายโปรโตคอลทั้งองค์กรและตรวจพฤติกรรมระดับเครือข่าย แต่ WAF เข้าใจโครงสร้างโปรโตคอล HTTP/HTTPS, Headers, Cookies, Form Parameters และ JSON Payload เพื่อกรองอินพุตอันตรายและช่วยทำ Virtual Patching ให้เว็บที่ยังรอแก้ไขซอร์สโค้ด โดยมักวางในโหมด Reverse Proxy หรือใช้ผ่าน Cloud WAF ด้านหน้าเว็บเซิร์ฟเวอร์'
        ],
        keyPointsTh: [
          'Layer 4 Stateful ตรวจตามสถานะการเชื่อมต่อ IP/Port ส่วน Layer 7 วิเคราะห์เนื้อหาและคำสั่งระดับแอปพลิเคชัน',
          'NGFW รวม Stateful + DPI + Application Control + IPS เหมาะกับองค์กรขนาดใหญ่ ส่วน UTM รวมสารพัดฟีเจอร์ในเครื่องเดียวเหมาะกับ SMB/สาขา',
          'WAF ออกแบบเฉพาะสำหรับ HTTP/HTTPS และ API (SQLi, XSS, OWASP Top 10) ไม่สามารถนำมาใช้แทน NGFW ของทั้งเครือข่ายได้'
        ]
      },
      {
        id: 'sec-secure-access-vpn-ipsec-tls',
        titleTh: '3. การเชื่อมต่อระยะไกลและสื่อสารปลอดภัย: VPN, IPsec, TLS และ Secure Remote Access',
        contentTh: [
          'เมื่อผู้ใช้งานหรือสำนักงานสาขาต้องสื่อสารผ่านเครือข่ายสาธารณะที่ไม่น่าเชื่อถือ **VPN (Virtual Private Network)** จะสร้างอุโมงค์เข้ารหัสเพื่อรักษา Confidentiality และ Integrity ของข้อมูล โดยแบ่งการใช้งานเป็น 2 รูปแบบหลัก คือ **Site-to-Site VPN** ที่เชื่อมระหว่างเครือข่ายสำนักงานหรือเชื่อม On-Premises เข้ากับ Cloud VPC แบบถาวร และ **Remote Access (Client-to-Site) VPN** ที่ให้พนักงานนอกสถานที่เชื่อมต่อเข้ามาผ่าน VPN Concentrator ประเด็นด้านความปลอดภัยที่สำคัญคือการตั้งค่า **Full Tunneling vs. Split Tunneling** แบบ Full Tunnel จะบังคับทราฟฟิกทั้งหมดจากเครื่องพนักงานวิ่งผ่านอุโมงค์กลับเข้าองค์กรก่อนออกอินเทอร์เน็ต ทำให้ไฟร์วอลล์ Proxy และ DLP ตรวจจับภัยคุกคามได้ครบถ้วนแต่กิน Bandwidth ศูนย์กลางสูง ส่วน Split Tunnel จะแยกส่งเฉพาะทราฟฟิกที่คุยกับเซิร์ฟเวอร์งานผ่าน VPN และปล่อยเน็ตทั่วไปออกตรงที่บ้าน ทำให้เร็วขึ้นแต่มีความเสี่ยงที่เครื่องพนักงานอาจถูกโจมตีจากอินเทอร์เน็ตโดยตรงแล้วใช้ช่องทาง VPN เป็นสะพานเข้าองค์กร',
          'โปรโตคอลพื้นฐานที่ขับเคลื่อน VPN และช่องทางเข้ารหัสมี 2 ตระกูลใหญ่ ได้แก่ **IPsec** และ **TLS** สำหรับ **IPsec** ทำงานใน Network Layer (Layer 3) จึงสามารถปกป้องทราฟฟิก IP ของทุกแอปพลิเคชันได้โดยที่แอปพลิเคชันไม่ต้องปรับแก้ใดๆ ประกอบด้วยโปรโตคอลหลัก 2 ตัวคือ **AH (Authentication Header)** ที่ให้เฉพาะ Authentication และ Integrity แต่ไม่ได้เข้ารหัสข้อมูล กับ **ESP (Encapsulating Security Payload)** ที่ให้ทั้ง Encryption, Authentication และ Integrity โดยอาศัย **IKE (เช่น IKEv2)** ในการเจรจาแลกเปลี่ยนกุญแจและเลือกทำงานได้ 2 โหมด คือ *Transport Mode* (เข้ารหัสเฉพาะส่วน Payload ใช้สื่อสาร Host-to-Host) และ *Tunnel Mode* (เข้ารหัสทั้งแพ็กเก็ต IP เดิมแล้วหุ้ม IP Header ใหม่ ใช้กับ Site-to-Site Gateway)',
          'ในทางตรงกันข้าม **TLS (Transport Layer Security)** ทำงานในระดับ Transport/Session (Layer 4–7) ใช้ปกป้องเว็บ HTTPS, อีเมล, API และ **SSL/TLS VPN** ข้อได้เปรียบทางปฏิบัติของ TLS VPN เมื่อเทียบกับ IPsec Remote VPN คือ TLS ใช้ TCP Port 443 ซึ่งเป็นพอร์ตมาตรฐานเว็บไซต์ จึงสามารถเชื่อมต่อผ่านไฟร์วอลล์ของโรงแรม สนามบิน หรือเครือข่ายสาธารณะได้ราบรื่นกว่า IPsec ที่มักติดบล็อก UDP 500/4500 หรือโปรโตคอล ESP (องค์กรต้องปิดใช้ SSL และ TLS 1.0/1.1 เก่าทั้งหมด คงไว้เฉพาะ TLS 1.2/1.3) นอกจากนี้ในการให้สิทธิ์ **Secure Remote Access** ปัจจุบันหลายองค์กรยังเสริมหรือแทนที่ VPN ด้วย **Zero Trust Network Access (ZTNA)** ซึ่งประเมินตัวตน MFA และสภาพความพร้อมของเครื่อง (Device Posture) ก่อนเชื่อมผู้ใช้ตรงเข้าสู่เฉพาะแอปพลิเคชันที่ได้รับสิทธิ์แทนการเปิดสิทธิ์เข้าถึงทั้งซับเน็ต'
        ],
        keyPointsTh: [
          'Full Tunnel ส่งทราฟฟิกทั้งหมดผ่านการตรวจขององค์กร ส่วน Split Tunnel แยกเน็ตทั่วไปออกตรงเพื่อความเร็วแต่เสี่ยงถูกใช้เป็นจุดกระโดด',
          'IPsec ทำงานระดับ Layer 3 (ESP ให้ทั้ง Encryption+Integrity ส่วน AH ไม่มี Encryption; Tunnel Mode ใช้เชื่อมต่อ Site-to-Site)',
          'TLS VPN ทำงานบน Port 443 จึงผ่าน Firewall สาธารณะได้ง่ายกว่า IPsec และ ZTNA ให้สิทธิ์เข้าถึงเฉพาะระดับแอปพลิเคชันตาม Zero Trust'
        ]
      },
      {
        id: 'sec-sdwan-sase-selection',
        titleTh: '4. SD-WAN, SASE และหลักการเลือกใช้มาตรการควบคุมให้มีประสิทธิภาพ (Selection of Effective Controls)',
        contentTh: [
          'เมื่อองค์กรมีสำนักงานสาขาจำนวนมากและย้ายแอปพลิเคชันหลักไปอยู่บน Cloud SaaS มากขึ้น สถาปัตยกรรม WAN แบบเดิมที่ดึงทราฟฟิกทุกสาขากลับมาที่ศูนย์ข้อมูลสำนักงานใหญ่ผ่านสาย MPLS ราคาแพง (Backhauling / Hair-pinning) จึงช้าและไม่คุ้มค่า **SD-WAN (Software-Defined WAN)** จึงเข้ามามีบทบาทโดยแยกส่วนควบคุมเส้นทางออกจากสายสื่อสารกายภาพ ทำให้องค์กรสามารถรวมสาย MPLS เข้ากับอินเทอร์เน็ต Broadband และ 5G/LTE ได้พร้อมกัน พร้อมสลับเส้นทางอัตโนมัติตามคุณภาพเครือข่ายและอนุญาตให้สาขาออกสู่คลาวด์โดยตรง (Local Breakout) ภายใต้การบริหารจัดการนโยบายและการเข้ารหัสจากศูนย์กลาง',
          'การก้าวไปอีกขั้นเพื่อปิดช่องว่างความปลอดภัยเมื่อสาขาและพนักงานออกสู่คลาวด์โดยตรงคือ **SASE (Secure Access Service Edge)** ซึ่งเป็นสถาปัตยกรรมที่หลอมรวมความสามารถด้านเครือข่าย (**SD-WAN**) เข้ากับชุดความปลอดภัยที่ส่งมอบจากบน Cloud (**Security Service Edge: SWG, CASB, FWaaS และ ZTNA**) ณ จุด Edge PoP ที่ใกล้ตัวผู้ใช้งานมากที่สุด ทำไม SASE จึงตอบโจทย์การทำงานแบบ Hybrid Work ยุคใหม่ เพราะไม่ว่าพนักงานจะอยู่สำนักงานใหญ่ สาขา บ้าน หรือร้านกาแฟ ทราฟฟิกทั้งหมดจะวิ่งตรงไปยังจุดตรวจสอบ SASE ที่ใกล้ที่สุดเพื่อตรวจจับมัลแวร์ กรองเว็บ และตรวจสอบตัวตนตามหลัก Zero Trust โดยไม่ต้องเสียเวลาวิ่งย้อนกลับไปที่สำนักงานใหญ่ก่อนออกคลาวด์',
          'ท้ายที่สุด การสอบ SY0-701 มักทดสอบทักษะ **Selection of Effective Controls** เพื่อดูว่าผู้สอบเลือกเครื่องมือได้ตรงปัญหาหรือไม่ เช่น หากปัญหาคือคนนอกเสียบสายแลนเข้าสวิตช์ได้ให้เลือก **802.1X + EAP-TLS** (ไม่ใช่แค่ WAF), หากปัญหาคือเว็บถูกโจมตี SQL Injection ให้เลือก **WAF** (ไม่ใช่ Stateful L4 Firewall), หากต้องการโซลูชันคุมทราฟฟิกสาขาขนาดเล็กครบวงจรในงบประหยัดให้เลือก **UTM**, หากต้องการสร้างอุโมงค์เชื่อมสำนักงานสองแห่งเข้าด้วยกันระดับเครือข่ายให้เลือก **IPsec Tunnel Mode Site-to-Site VPN** และหากองค์กรที่มีสาขากระจายตัวและพนักงานทำงานทางไกลต้องการลดคอขวดการดึงเน็ตกลับศูนย์กลางพร้อมคุม Cloud Security แบบ Zero Trust ให้เลือก **SD-WAN ร่วมกับ SASE**'
        ],
        keyPointsTh: [
          'SD-WAN รวมสายเชื่อมต่อหลายประเภท (MPLS, Broadband, LTE/5G) และปรับเส้นทางอัตโนมัติพร้อมคุมจากศูนย์กลาง',
          'SASE รวม SD-WAN เข้ากับ Cloud Security Stack (ZTNA, SWG, CASB, FWaaS) ป้องกันผู้ใช้ทุกที่ใกล้ Edge โดยไม่ต้องดึงทราฟฟิกกลับ HQ',
          'การเลือกมาตรการที่เหมาะสมต้องดูปัญหาหลัก: คุมพอร์ต LAN = 802.1X, ป้องกันเว็บ L7 = WAF, เชื่อมสาขา = IPsec/SD-WAN, ยุค Cloud/Remote = SASE'
        ]
      }
    ],
    keyTerms: [
      {
        termEn: 'IEEE 802.1X',
        explanationTh: 'มาตรฐานควบคุมการเข้าถึงเครือข่ายระดับพอร์ต (PNAC) ที่บังคับยืนยันตัวตนก่อนเปิดพอร์ต Switch หรือ Access Point'
      },
      {
        termEn: 'Supplicant, Authenticator, Authentication Server',
        explanationTh: 'สามองค์ประกอบของ 802.1X ได้แก่ อุปกรณ์ลูกข่าย สวิตช์/AP ที่คั่นกลาง และเซิร์ฟเวอร์ AAA (เช่น RADIUS) ที่ตรวจสิทธิ์'
      },
      {
        termEn: 'Extensible Authentication Protocol',
        acronym: 'EAP',
        explanationTh: 'กรอบโปรโตคอลสำหรับขนส่งวิธีการยืนยันตัวตนหลากหลายแบบภายใน 802.1X เช่น EAP-TLS, PEAP และ EAP-TTLS'
      },
      {
        termEn: 'EAP-TLS vs. PEAP',
        explanationTh: 'EAP-TLS ใช้ใบรับรองดิจิทัลทั้งสองฝั่ง (ปลอดภัยสูงสุด) ส่วน PEAP ใช้ใบรับรองฝั่งเซิร์ฟเวอร์สร้างอุโมงค์เข้ารหัสให้ส่งรหัสผ่านข้างใน'
      },
      {
        termEn: 'Stateful vs. Stateless Firewall',
        explanationTh: 'Stateful ติดตาม State Table ของเซสชันการเชื่อมต่อ ส่วน Stateless กรองทีละแพ็กเก็ตแยกอิสระตามกฎ IP/Port'
      },
      {
        termEn: 'Layer 4 vs. Layer 7 Firewall',
        explanationTh: 'Layer 4 ตรวจสอบ IP/Port/Protocol ส่วน Layer 7 ตรวจสอบเนื้อหาและพฤติกรรมระดับแอปพลิเคชัน'
      },
      {
        termEn: 'Next-Generation Firewall',
        acronym: 'NGFW',
        explanationTh: 'ไฟร์วอลล์ยุคใหม่ที่รวม Stateful, Deep Packet Inspection (DPI), Application Control, Identity Awareness และ IPS ไว้ด้วยกัน'
      },
      {
        termEn: 'Unified Threat Management',
        acronym: 'UTM',
        explanationTh: 'อุปกรณ์ความปลอดภัยครบวงจรที่รวม Firewall, IPS, Antivirus, URL Filter และ Anti-Spam ในกล่องเดียว เหมาะกับ SMB/สาขา'
      },
      {
        termEn: 'Web Application Firewall',
        acronym: 'WAF',
        explanationTh: 'ไฟร์วอลล์ระดับ Layer 7 เฉพาะทางที่ตรวจสอบทราฟฟิก HTTP/S และ API เพื่อป้องกัน SQLi, XSS และ OWASP Top 10'
      },
      {
        termEn: 'VPN (Split vs. Full Tunnel)',
        acronym: 'VPN',
        explanationTh: 'อุโมงค์เข้ารหัสข้ามเครือข่ายสาธารณะ โดย Full Tunnel ส่งทราฟฟิกทั้งหมดผ่านองค์กร ส่วน Split Tunnel ส่งเฉพาะทราฟฟิกงาน'
      },
      {
        termEn: 'IPsec (AH, ESP, Transport, Tunnel)',
        acronym: 'IPsec',
        explanationTh: 'ชุดโปรโตคอลเข้ารหัสระดับ Layer 3 โดย ESP เข้ารหัสและตรวจ Integrity ส่วน AH ไม่เข้ารหัส และ Tunnel Mode ใช้เชื่อมระหว่าง Gateway'
      },
      {
        termEn: 'Transport Layer Security',
        acronym: 'TLS',
        explanationTh: 'โปรโตคอลเข้ารหัสระดับ Transport/Session สำหรับปกป้องเว็บ HTTPS และ SSL/TLS VPN (Port 443)'
      },
      {
        termEn: 'Zero Trust Network Access',
        acronym: 'ZTNA',
        explanationTh: 'แนวทางการเข้าถึงระยะไกลที่อนุญาตให้เชื่อมต่อเฉพาะแอปพลิเคชันที่ได้รับสิทธิ์หลังตรวจสอบตัวตนและสถานะเครื่องแล้ว'
      },
      {
        termEn: 'Software-Defined WAN',
        acronym: 'SD-WAN',
        explanationTh: 'เทคโนโลยีจัดการเครือข่ายระหว่างสาขาด้วยซอฟต์แวร์ ผสานลิงก์หลายชนิด (MPLS/Internet/5G) และปรับเส้นทางอัตโนมัติ'
      },
      {
        termEn: 'Secure Access Service Edge',
        acronym: 'SASE',
        explanationTh: 'สถาปัตยกรรมที่รวม SD-WAN เข้ากับระบบป้องกันบนคลาวด์ (ZTNA, SWG, CASB, FWaaS) ณ ขอบเครือข่ายใกล้ผู้ใช้งาน'
      }
    ],
    scenarios: [
      {
        titleTh: 'การป้องกันปลั๊กสายแลนสำนักงานเปิดและคุ้มครองแอปพลิเคชันพอร์ทัลสาธารณะ',
        contextTh:
          'บริษัทเทคโนโลยีพบความเสี่ยง 2 จุดใหญ่ จุดแรกคือมีผู้รับเหมาภายนอกแอบเสียบโน้ตบุ๊กเข้าปลั๊กสายแลนในห้องประชุมและปลอม MAC Address ผ่านตัวกรองเดิมได้ จุดที่สองคือเว็บพอร์ทัลสั่งซื้อสินค้าถูกพยายามโจมตีด้วย SQL Injection และ Cross-Site Scripting ผ่าน HTTPS แม้มี Layer 4 Firewall ตั้งอยู่หน้า DMZ แล้วก็ตาม',
        decisionTh:
          'สำหรับจุดแรก ทีมเครือข่ายเปิดใช้งาน IEEE 802.1X ร่วมกับ EAP-TLS บนสวิตช์ทุกพอร์ตเชื่อมต่อกับเซิร์ฟเวอร์ RADIUS โดยกำหนดให้พอร์ตที่ไม่มีใบรับรองเครื่องของบริษัทถูกย้ายไปยัง Guest/Quarantine VLAN ที่มีเฉพาะอินเทอร์เน็ตแยกขาด สำหรับจุดที่สอง ทีมติดตั้ง Web Application Firewall (WAF) แบบ Reverse Proxy ที่ทำ TLS Inspection หน้าเว็บพอร์ทัลเพื่อสกัดกั้น payload ของ SQLi และ XSS ในระดับ Layer 7',
        takeawayTh:
          'MAC Filtering ไม่สามารถกันการปลอมแปลงได้ จึงต้องยกระดับเป็น 802.1X + EAP-TLS และ Layer 4 Firewall มองไม่เห็นโค้ดโจมตีในคำขอ HTTP/S จึงต้องเลือก WAF สำหรับป้องกันแอปพลิเคชันเว็บ'
      },
      {
        titleTh: 'การเปลี่ยนผ่านเครือข่ายสาขา 30 แห่งและพนักงาน Remote สู่ SD-WAN และ SASE',
        contextTh:
          'บริษัทโลจิสติกส์มี 30 สาขาที่ต้องส่งข้อมูลทั้งหมดผ่านสาย MPLS กลับมายังศูนย์ข้อมูลสำนักงานใหญ่เพื่อตรวจผ่าน Proxy และ Firewall ก่อนออกสู่บริการ Microsoft 365 และระบบ Cloud ทำให้พนักงานทั้งที่สาขาและ Work-from-home ประสบปัญหาความหน่วงสูงและ VPN Concentrator ที่สำนักงานใหญ่ทำงานเกินกำลัง',
        decisionTh:
          'องค์กรปรับใช้สถาปัตยกรรม SASE ที่ผสาน SD-WAN เข้ากับบริการ Cloud Security Edge โดยติดตั้งอุปกรณ์ SD-WAN ที่สาขาเพื่อใช้สาย Broadband คู่กับ 5G แทนการพึ่ง MPLS อย่างเดียวและเปิด Local Breakout ให้ทราฟฟิก Cloud วิ่งผ่านจุด Edge PoP ที่ใกล้ที่สุดซึ่งมี Cloud FWaaS, SWG, CASB และ ZTNA ตรวจสอบก่อนเข้าแอปพลิเคชัน ส่วนพนักงานนอกสถานที่เชื่อมต่อผ่าน ZTNA Agent เข้า Edge PoP โดยตรงแทนการใช้ Full-Tunnel VPN กลับมาสำนักงานใหญ่',
        takeawayTh:
          'การเลือก SD-WAN ร่วมกับ SASE ขจัดปัญหาคอขวด Hair-pinning ของ VPN/MPLS แบบเดิม และขยายการบังคับใช้นโยบาย Zero Trust ไปครอบคลุมผู้ใช้ทุกสถานที่ได้อย่างมีประสิทธิภาพ'
      }
    ],
    comparisonTables: [
      {
        captionTh: 'ตารางเปรียบเทียบประเภท Firewalls ตามระดับการตรวจสอบและกรณีใช้งาน',
        headersTh: ['ประเภท Firewall', 'ระดับ OSI ที่ตรวจหลัก', 'จุดเด่นทางเทคนิค', 'ข้อจำกัดสำคัญ', 'กรณีใช้งานที่เหมาะสม'],
        rowsTh: [
          ['Layer 4 Stateful Firewall', 'Layer 3 / 4', 'จำสถานะเซสชัน TCP/UDP ประสิทธิภาพสูงความหน่วงต่ำ', 'ไม่เห็นเนื้อหา Payload ของแอปพลิเคชัน (เช่น แยกทราฟฟิกเว็บใน Port 443 ไม่ออก)', 'คัดกรองการเชื่อมต่อเบื้องต้นที่ Perimeter/Internal Zone'],
          ['Next-Generation Firewall (NGFW)', 'Layer 3 – 7', 'รวม DPI, Application Awareness, User ID, IPS และ TLS Inspection', 'ซับซ้อนและราคาสูงกว่า ต้องใช้ทรัพยากรมากเมื่อเปิด TLS Inspection', 'ป้อมปราการหลักระดับองค์กรขนาดกลาง-ใหญ่'],
          ['Unified Threat Management (UTM)', 'Layer 3 – 7', 'รวม Firewall, IPS, AV, Anti-Spam, URL Filter ไว้ในเครื่องเดียวจัดการง่าย', 'อาจเกิดคอขวดประสิทธิภาพและเป็น SPOF เมื่อเปิดทุกฟีเจอร์ภายใต้โหลดสูง', 'สาขาย่อย (Branch Office) และธุรกิจ SMB ที่เน้นความคุ้มค่า'],
          ['Web Application Firewall (WAF)', 'Layer 7 (HTTP/HTTPS/API)', 'เข้าใจโครงสร้าง Web Request, Cookies, JSON กัน SQLi/XSS/OWASP Top 10 และทำ Virtual Patching', 'ไม่รองรับโปรโตคอลเครือข่ายทั่วไปนอกเหนือจากเว็บ/API (ใช้แทน NGFW ทั้งหมดไม่ได้)', 'วางหน้าเว็บแอปพลิเคชันและ API สาธารณะใน DMZ หรือ Cloud']
        ]
      },
      {
        captionTh: 'ตารางเปรียบเทียบเทคโนโลยี Secure Access และ Communication (IPsec, TLS, SD-WAN, SASE)',
        headersTh: ['เทคโนโลยี', 'ชั้นการทำงาน / ขอบเขต', 'ลักษณะสำคัญ', 'ข้อดีเด่น', 'ข้อพิจารณาและข้อจำกัด'],
        rowsTh: [
          ['IPsec VPN (Tunnel Mode)', 'Layer 3 (Network)', 'ESP เข้ารหัสทั้งแพ็กเก็ต IP เดิมและใส่ Header ใหม่ผ่าน IKEv2', 'ปกป้องทราฟฟิกทุกแอปพลิเคชันระหว่าง Gateway ได้โปร่งใส', 'Remote client บนเน็ตสาธารณะอาจติดไฟร์วอลล์บล็อก UDP 500/4500/ESP'],
          ['TLS / SSL VPN', 'Layer 4 – 7 (Transport)', 'ใช้ Port 443 เข้ารหัสเฉพาะทราฟฟิกเซสชันและเว็บ', 'ผ่านเครือข่ายสาธารณะ โรงแรม หรือ Firewall ภายนอกได้ง่าย', 'ต้องปิด TLS 1.0/1.1 เดิม และแบบ Full-tunnel อาจสร้างคอขวดที่ Concentrator'],
          ['SD-WAN', 'WAN Overlay (Control/Data)', 'รวม MPLS, Broadband, 5G และเลือกเส้นทางอัตโนมัติจากศูนย์กลาง', 'ลดค่าสาย MPLS และลด Latency เมื่อสาขาออก Cloud โดยตรง', 'หากเปิด Local Breakout โดยไม่มี Cloud Security จะเกิดช่องโหว่การกรอง'],
          ['SASE (SD-WAN + SSE)', 'Cloud Edge Convergence', 'รวม SD-WAN เข้ากับ ZTNA, SWG, CASB, FWaaS บนคลาวด์ใกล้ผู้ใช้', 'ลด Hair-pinning และคุม Zero Trust ได้สม่ำเสมอทุกสถานที่', 'พึ่งพาผู้ให้บริการ SASE (Third-Party Vendor) และการออกแบบนโยบายรวมศูนย์']
        ]
      }
    ],
    applicationsAndLimitations: {
      applicationsTh: [
        'ใช้ 802.1X ร่วมกับ EAP-TLS บังคับใช้นโยบายยืนยันตัวตนก่อนแจกสิทธิ์ VLAN ในเครือข่ายองค์กรทั้งสายแลนและไร้สาย',
        'ใช้ Defense-in-Depth ด้วยการวาง NGFW ปกป้องขอบเครือข่ายองค์กรควบคู่กับ WAF หน้าเว็บแอปพลิเคชันเพื่อสกัดภัยทั้งระดับเครือข่ายและระดับโค้ดเว็บ',
        'เปลี่ยนโครงสร้าง Remote Access และสาขาจาก Traditional Hub-and-Spoke VPN ไปสู่ ZTNA และ SASE เพื่อรองรับการทำงานแบบกระจายตัวและแอปพลิเคชันบนคลาวด์'
      ],
      limitationsTh: [
        'การเปิด TLS Inspection บน NGFW, Proxy หรือ WAF เพื่อมองเห็นแพ็กเก็ตเข้ารหัสอาจกระทบความเป็นส่วนตัวข้อมูลบางประเภท (เช่น การเงิน/การแพทย์) และกินทรัพยากรประมวลผลสูง จึงต้องตั้งข้อยกเว้นตามกฎหมาย',
        'อุปกรณ์ IoT, เครื่องพิมพ์ หรือ Legacy Device ที่ไม่มี 802.1X Supplicant ไม่สามารถทำ EAP ได้โดยตรง ต้องใช้ MAB (MAC Authentication Bypass) ร่วมกับการกักบริเวณ VLAN แทน',
        'Split Tunneling บน VPN ช่วยประหยัดแบนด์วิดท์แต่ลดการมองเห็นของทีม SOC หากไม่มี Endpoint Protection และ Cloud SWG คอยปกป้องทราฟฟิกที่ออกอินเทอร์เน็ตโดยตรง'
      ]
    },
    commonMisconceptions: [
      {
        misconceptionTh: 'เข้าใจว่า NGFW ที่มี IPS ในตัวสามารถป้องกันการโจมตีเว็บอย่าง SQLi และ XSS ได้ครบเทียบเท่า WAF จึงไม่จำเป็นต้องติด WAF',
        clarificationTh:
          'แม้ NGFW จะมี IPS ตรวจจับ Signature เบื้องต้นได้บ้าง แต่ WAF ถูกออกแบบมาเพื่อถอดประกอบโครงสร้าง HTTP Parameters, Cookies, Session Tokens และ JSON API โดยเฉพาะ จึงตรวจจับและบล็อกการโจมตี OWASP Top 10 ได้แม่นยำและละเอียดกว่า NGFW มาก'
      },
      {
        misconceptionTh: 'คิดว่า IPsec Authentication Header (AH) ให้การเข้ารหัสข้อมูล (Encryption) แก่แพ็กเก็ตเหมือน ESP',
        clarificationTh:
          'AH ให้เฉพาะการยืนยันตัวตนและความถูกต้องของข้อมูล (Authentication และ Integrity) รวมถึงป้องกัน Replay Attack แต่ไม่ได้เข้ารหัสเนื้อหา หากต้องการการรักษาความลับ (Confidentiality) ด้วยต้องเลือกใช้ ESP (Encapsulating Security Payload)'
      },
      {
        misconceptionTh: 'สับสนว่า SD-WAN เพียงอย่างเดียวให้ความปลอดภัยเทียบเท่า SASE',
        clarificationTh:
          'SD-WAN มุ่งเน้นการบริหารจัดการเส้นทางและการเชื่อมต่อระหว่างสาขาและคลาวด์อย่างยืดหยุ่น (ส่วน Networking) ส่วน SASE คือสถาปัตยกรรมที่นำ SD-WAN มารวมกับระบบความปลอดภัยบนคลาวด์ (ZTNA, SWG, CASB, FWaaS) จึงให้ความคุ้มครองระดับ Security Edge ครบวงจร'
      }
    ],
    scenarioAnalysisGuide: {
      approachStepsTh: [
        'แยกแยะชั้นปัญหาของโจทย์ก่อนเสมอ: ปัญหาเข้าสายแลนที่พอร์ตสวิตช์ = 802.1X/EAP; ปัญหาโจมตีหน้าเว็บ/API = WAF; ปัญหาคัดกรองทราฟฟิกสาขาหรือองค์กร = UTM/NGFW; ปัญหาเชื่อมระยะไกล = VPN/ZTNA/SD-WAN/SASE',
        'หากโจทย์กล่าวถึง 802.1X ให้ดูเงื่อนไขว่ามีโครงสร้าง PKI/ใบรับรองฝั่งเครื่องผู้ใช้หรือไม่: มีใบรับรองทั้ง 2 ฝั่ง -> EAP-TLS; มีเฉพาะใบรับรองฝั่งเซิร์ฟเวอร์และใช้รหัสผ่าน -> PEAP / EAP-TTLS',
        'หากโจทย์เปรียบเทียบ IPsec กับ TLS VPN: เชื่อมระหว่างสำนักงาน 2 แห่งและคุมระดับ L3 ทั้งซับเน็ต -> IPsec Tunnel Mode; พนักงานต่อจากเน็ตสาธารณะ/โรงแรมที่บล็อกพอร์ตแปลก -> TLS VPN (Port 443)',
        'หากโจทย์เน้นการประหยัดงบ MPLS ลดความหน่วงเวลาสาขาและพนักงานนอกออฟฟิศเข้า Cloud SaaS พร้อมมี Zero Trust บน Edge -> SD-WAN และ SASE'
      ],
      examSignalKeywords: [
        { keywordEn: 'port-based access control / supplicant / RADIUS / prevent rogue laptop', meaningTh: 'ชี้ไปยัง IEEE 802.1X (และใช้ EAP-TLS เพื่อความปลอดภัยสูงสุด)' },
        { keywordEn: 'SQLi / XSS / HTTP headers / OWASP / virtual patching web app', meaningTh: 'ชี้ไปยัง Web Application Firewall (WAF)' },
        { keywordEn: 'all-in-one appliance / SMB / branch office / tight budget', meaningTh: 'ชี้ไปยัง Unified Threat Management (UTM)' },
        { keywordEn: 'AH vs ESP / network layer tunnel / site-to-site gateway', meaningTh: 'ชี้ไปยัง IPsec (เลือก ESP ใน Tunnel Mode สำหรับการเข้ารหัสระหว่างสาขา)' },
        { keywordEn: 'outbound web traffic bypasses corporate proxy / faster remote bandwidth', meaningTh: 'ชี้ไปยัง Split Tunneling ใน VPN (เทียบกับ Full Tunneling)' },
        { keywordEn: 'converges SD-WAN and cloud security / ZTNA + SWG + CASB at edge', meaningTh: 'ชี้ไปยัง Secure Access Service Edge (SASE)' }
      ]
    },
    summaryTh: [
      'IEEE 802.1X ร่วมกับ EAP (โดยเฉพาะ EAP-TLS และ PEAP) ยกระดับ Port Security จากการตรวจ MAC Address ไปสู่การยืนยันตัวตนด้วยใบรับรองและบัญชีผ่าน Authenticator และเซิร์ฟเวอร์ RADIUS',
      'การเลือกประเภท Firewall ต้องตรงระดับปัญหา: Layer 4 ตรวจสถานะการเชื่อมต่อ, NGFW ตรวจ DPI และแยกแอปพลิเคชันองค์กร, UTM รวมฟีเจอร์ครบจบสำหรับสาขา และ WAF ป้องกันการโจมตีเว็บแอปพลิเคชันระดับ Layer 7',
      'เทคโนโลยี Secure Access พัฒนาจาก VPN แบบ IPsec (Layer 3) และ TLS (Port 443) ไปสู่สถาปัตยกรรม SD-WAN และ SASE ที่รวมเครือข่ายและความปลอดภัยไว้บน Cloud Edge ใกล้ผู้ใช้งานยุค Hybrid Work'
    ],
    knowledgeChecks: [
      {
        id: 'L3-04-KC1',
        questionTh:
          'ฝ่ายความปลอดภัยพบว่าผู้ไม่หวังดีใช้เทคนิค MAC Spoofing เพื่อข้ามการป้องกัน Switch Port Security แบบเดิมในพื้นที่สำนักงานและเข้าถึง VLAN ภายในได้ หากต้องการให้สวิตช์ยืนยันตัวตนด้วยใบรับรองดิจิทัลทั้งฝั่งเครื่องลูกข่ายและเซิร์ฟเวอร์ก่อนเปิดพอร์ต ควรใช้โซลูชันใด?',
        choices: [
          { id: 'a', textTh: 'ติดตั้ง WAF หน้า Core Switch และใช้ Stateful Layer 4 Rules' },
          { id: 'b', textTh: 'เปลี่ยนมาใช้ IPsec Authentication Header (AH) บนพอร์ตสวิตช์' },
          { id: 'c', textTh: 'เปิดใช้งาน Split Tunneling เพื่อแยกทราฟฟิกออกอินเทอร์เน็ต' },
          { id: 'd', textTh: 'ใช้ IEEE 802.1X ร่วมกับ EAP-TLS และเซิร์ฟเวอร์ RADIUS' }
        ],
        correctChoiceId: 'd',
        explanationTh:
          'คำตอบที่ถูกต้องคือ d เพราะ IEEE 802.1X เป็นมาตรฐานควบคุมการเข้าถึงระดับพอร์ตที่สวิตช์ (Authenticator) บังคับให้เครื่องลูกข่าย (Supplicant) ยืนยันตัวตนกับ RADIUS Server ก่อนเปิดพอร์ต และการเลือก EAP-TLS ใช้ใบรับรองทั้งสองฝั่งจึงป้องกันการปลอม MAC Address ได้อย่างเด็ดขาด ข้อ a, b และ c ไม่ใช่มาตรฐาน Port Access Control'
      },
      {
        id: 'L3-04-KC2',
        questionTh:
          'องค์กรขนาดใหญ่ที่มีสาขากระจาย 20 แห่งและมีพนักงานทำงานระยะไกลจำนวนมากต้องการเลิกใช้การดึงทราฟฟิกผ่าน MPLS กลับมาตรวจสอบที่สำนักงานใหญ่ก่อนออกสู่ Cloud SaaS แต่ต้องการบังคับใช้ SD-WAN ควบคู่กับ ZTNA, SWG และ Cloud Firewall ที่ขอบเครือข่ายใกล้ผู้ใช้งาน สถาปัตยกรรมใดตรงที่สุด?',
        choices: [
          { id: 'a', textTh: 'การติดตั้ง Type 2 Hypervisor ที่สาขาทุกแห่ง' },
          { id: 'b', textTh: 'Secure Access Service Edge (SASE)' },
          { id: 'c', textTh: 'Air-gapped Physical Isolation' },
          { id: 'd', textTh: 'Stateless Packet Filtering Router' }
        ],
        correctChoiceId: 'b',
        explanationTh:
          'คำตอบที่ถูกต้องคือ b (SASE) ซึ่งหลอมรวมความสามารถด้านเครือข่ายของ SD-WAN เข้ากับบริการความปลอดภัยบนคลาวด์ (SSE: ZTNA, SWG, CASB, FWaaS) ส่งมอบจาก Cloud Edge ใกล้ผู้ใช้และสาขา ลดปัญหา Hair-pinning ข้อ a, c และ d ไม่ตอบโจทย์การเชื่อมต่อคลาวด์แบบกระจายตัว'
      },
      {
        id: 'L3-04-KC3',
        questionTh:
          'บริษัทกำลังออกแบบ Site-to-Site VPN เชื่อมต่อระหว่างสำนักงานใหญ่กับคลังสินค้าโดยใช้โปรโตคอล IPsec เพื่อให้ข้อมูลทั้งหมดถูกเข้ารหัสความลับและยืนยันความถูกต้องครบถ้วนตลอดเส้นทางระหว่าง Gateway ทั้งสองแห่ง ควรกำหนดค่า IPsec ในรูปแบบใด?',
        choices: [
          { id: 'a', textTh: 'Authentication Header (AH) ใน Transport Mode' },
          { id: 'b', textTh: 'EAP-MD5 ใน Port 443' },
          { id: 'c', textTh: 'Encapsulating Security Payload (ESP) ใน Tunnel Mode' },
          { id: 'd', textTh: 'Split Tunneling ด้วย Sticky MAC' }
        ],
        correctChoiceId: 'c',
        explanationTh:
          'คำตอบที่ถูกต้องคือ c เนื่องจาก ESP (Encapsulating Security Payload) ให้ทั้ง Encryption (รักษาความลับ) และ Integrity/Authentication ขณะที่ AH (ข้อ a) ไม่มีการเข้ารหัสข้อมูล และ Tunnel Mode ใช้หุ้มแพ็กเก็ต IP เดิมทั้งหมดสำหรับการเชื่อมต่อ Site-to-Site ระหว่าง Gateway ข้อ b และ d ไม่ใช่โหมดของ IPsec'
      },
      {
        id: 'L3-04-KC4',
        questionTh:
          'ทีมพัฒนาเว็บแจ้งว่าตรวจพบช่องโหว่ SQL Injection ในแอปพลิเคชันพอร์ทัลลูกค้าที่รันอยู่บน HTTPS แต่การแก้ไขโค้ดแอปพลิเคชันต้องใช้เวลาทดสอบอีก 3 สัปดาห์ อุปกรณ์ใดเหมาะสมที่สุดในการนำมาวางดักหน้าเว็บเซิร์ฟเวอร์เพื่อทำ Virtual Patching บล็อกคำขอโจมตีเหล่านี้ชั่วคราว?',
        choices: [
          { id: 'a', textTh: 'Web Application Firewall (WAF)' },
          { id: 'b', textTh: 'Layer 4 Stateful Firewall' },
          { id: 'c', textTh: 'Network TAP Sensor แบบ Passive' },
          { id: 'd', textTh: '802.1X Authenticator' }
        ],
        correctChoiceId: 'a',
        explanationTh:
          'คำตอบที่ถูกต้องคือ a เพราะ WAF ทำงานในระดับ Layer 7 โดยเข้าใจ HTTP/HTTPS Payload และ Parameters จึงสามารถใช้กฎ Virtual Patching เพื่อตรวจจับและบล็อกรูปแบบ SQL Injection หรือ XSS ก่อนถึงเว็บเซิร์ฟเวอร์ได้ทันที ข้อ b ดูเพียง IP/Port จึงมองไม่เห็นโค้ด SQLi ใน HTTPS ข้อ c ได้แค่ตรวจจับแจ้งเตือนแต่ไม่บล็อก และข้อ d ควบคุมพอร์ตสวิตช์ภายใน'
      }
    ],
    references: [
      {
        title: 'CompTIA Security+ (SY0-701) Exam Objectives Version 5.0 — Objective 3.2',
        noteTh: 'ครอบคลุม Port Security (802.1X/EAP), Firewalls (WAF/UTM/NGFW/L4/L7) และ Secure Access (VPN/IPsec/TLS/SD-WAN/SASE)'
      },
      {
        title: 'NIST SP 800-77 Rev. 1: Guide to IPsec VPNs',
        noteTh: 'คู่มือมาตรฐานการทำงานของ IPsec (AH/ESP, Transport/Tunnel Mode, IKEv2) และการออกแบบ VPN'
      },
      {
        title: 'NIST SP 800-207: Zero Trust Architecture',
        noteTh: 'แนวคิดพื้นฐานของ Zero Trust Network Access (ZTNA) และการประยุกต์ใช้ในสถาปัตยกรรม SASE'
      }
    ],
    relatedLessonIds: ['L1-03', 'L1-06', 'L3-03', 'L4-02', 'L4-06']
  }
];
