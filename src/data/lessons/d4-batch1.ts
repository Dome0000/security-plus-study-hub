import type { Lesson } from '../../types';

export const D4_LESSONS_BATCH1: Lesson[] = [
  {
    id: 'L4-01',
    examCode: 'SY0-701',
    domainId: 'D4',
    order: 24,
    titleTh: 'Secure Baselines และการ Hardening อุปกรณ์และโครงสร้างพื้นฐาน',
    titleEn: 'Baselines & Hardening Targets',
    estimatedMinutes: 45,
    learningObjectives: [
      'อธิบายวงจรชีวิตของ Secure Baselines ทั้ง 3 ขั้นตอน ได้แก่ Establish, Deploy และ Maintain รวมถึงวิธีป้องกัน Configuration Drift ในองค์กรได้',
      'ออกแบบมาตรการ Hardening ให้สอดคล้องกับลักษณะเฉพาะของระบบ IT ทั่วไป (Mobile devices, Workstations, Switches, Routers, Cloud infrastructure, Servers)',
      'วิเคราะห์ข้อจำกัดและเลือกเทคนิค Hardening ที่ปลอดภัยสำหรับระบบเฉพาะทางและ OT/IoT (ICS/SCADA, Embedded systems, RTOS, IoT devices) โดยไม่กระทบความพร้อมใช้งานและความปลอดภัยเชิงกายภาพ'
    ],
    objectiveIds: ['4.1'],
    prerequisites: [
      'L2-05 ช่องโหว่ Hardware, Virtualization, Cloud, Mobile และ Zero-Day',
      'L2-09 เทคนิค Mitigation และการทำ Enterprise Hardening',
      'L3-02 IoT, ICS/SCADA, Embedded, RTOS และ Network Segmentation'
    ],
    sections: [
      {
        id: 'sec-secure-baselines',
        titleTh: '1. Secure Baselines: การกำหนด (Establish) การนำไปใช้ (Deploy) และการบำรุงรักษา (Maintain)',
        contentTh: [
          'คำถามแรกที่ทีม Security Operations ต้องตอบให้ได้ก่อนเปิดใช้งานระบบใดก็ตามคือ "ค่าตั้งต้นที่ปลอดภัยที่สุดและสม่ำเสมอสำหรับระบบประเภทนี้หน้าตาเป็นอย่างไร" คำตอบนั้นคือ Secure Baseline (มาตรฐานฐานที่ปลอดภัย) ซึ่งหมายถึงชุดข้อกำหนดการตั้งค่าความปลอดภัยขั้นต่ำที่ผ่านการตรวจสอบและอนุมัติแล้วสำหรับระบบปฏิบัติการ แอปพลิเคชัน อุปกรณ์เครือข่าย หรือโครงสร้างพื้นฐานคลาวด์ทุกเครื่องที่มีบทบาทเดียวกัน เหตุใดองค์กรจึงต้องใช้ Secure Baseline แทนการให้ผู้ดูแลระบบตั้งค่าทีละเครื่องตามความถนัด คำตอบคือการตั้งค่าด้วยมือ (Ad-hoc configuration) ก่อให้เกิดความไม่สม่ำเสมอ ตกหล่นพอร์ตหรือบัญชีดีฟอลต์ และขยายเวลาในการสร้างเครื่องใหม่ ในขณะที่ Secure Baseline เปลี่ยนความปลอดภัยให้เป็นมาตรฐานที่ทำซ้ำได้ ตรวจสอบได้ และลด Attack surface ตั้งแต่ต้นทาง ทั้งนี้ Secure Baseline แตกต่างจาก Patching ตรงที่ Patching เป็นการอุดช่องโหว่ในโค้ดซอฟต์แวร์หลังพบปัญหา ส่วน Secure Baseline เป็นการออกแบบและล็อกค่าคอนฟิกูเรชันพื้นฐานให้แข็งแกร่งตั้งแต่แรกเข้าประจำการ',
          'ขั้นตอนที่ 1 — Establish (การสร้างและกำหนดมาตรฐาน): เริ่มจากการสำรวจระบบที่มีอยู่และอ้างอิงกรอบมาตรฐานอุตสาหกรรมที่เป็นที่ยอมรับ เช่น CIS Benchmarks, DISA STIGs (Security Technical Implementation Guides) หรือแนวทางจาก NIST และผู้ผลิตฮาร์ดแวร์ จากนั้นนำมาปรับแต่ง (Tailor) ให้เข้ากับบริบททางธุรกิจขององค์กร เช่น ปิดบริการที่ไม่จำเป็น ลบซอฟต์แวร์ Bloatware บังคับนโยบายรหัสผ่านและการล็อกหน้าจอ เปิดการบันทึก Audit Log และตั้งค่า Host-based Firewall ก่อนจะทดสอบในสภาพแวดล้อมจำลอง (Staging/Test environment) เพื่อให้แน่ใจว่าไม่ทำให้แอปพลิเคชันสำคัญขององค์กรทำงานผิดพลาดแล้วจึงประกาศรับรองเป็น Golden Standard',
          'ขั้นตอนที่ 2 — Deploy (การนำไปปรับใช้จริง): เมื่อได้มาตรฐานแล้ว องค์กรต้องกระจาย Baseline ลงสู่ระบบจริงอย่างทั่วถึงและเป็นอัตโนมัติมากที่สุดเพื่อป้องกันความผิดพลาดจากมนุษย์ ตัวอย่างวิธีนำไปใช้ ได้แก่ การสร้าง Golden Image (OS Image ที่ Hardened แล้ว) สำหรับ Workstations และ Virtual Machines, การบังคับใช้ผ่าน Group Policy Objects (GPO) ในระบบ Windows หรือ MDM Profiles สำหรับมือถือ, การเขียน Infrastructure as Code (IaC) เช่น Terraform และ Ansible Playbooks สำหรับเซิร์ฟเวอร์และ Cloud Resources รวมถึงการกำหนด Templates ใน Switch และ Router เพื่อไม่ให้อุปกรณ์ใหม่เชื่อมต่อเครือข่ายในสภาพค่าเริ่มต้นจากโรงงาน',
          'ขั้นตอนที่ 3 — Maintain (การดูแลรักษาและปรับปรุงต่อเนื่อง): ความท้าทายที่แท้จริงของ Secure Baseline ไม่ใช่การตั้งค่าในวันแรก แต่คือการป้องกัน "Configuration Drift" หรือภาวะที่ค่าคอนฟิกของระบบค่อย ๆ เบี่ยงเบนออกจากมาตรฐานเมื่อเวลาผ่านไปจากการแก้ปัญหาเฉพาะหน้า การอัปเดตแพตช์ หรือการปรับแต่งโดยไม่ได้รับอนุญาต ทีมปฏิบัติการจึงต้องผสานกระบวนการ Continuous Monitoring การสแกนเปรียบเทียบกับ Benchmark (เช่น ด้วยเครื่องมือ SCAP) การจัดการผ่าน Change Management ทุกครั้งที่มีการขอแก้ไขค่าฐาน และการทบทวนปรับปรุง Baseline เป็นระยะ (Re-baselining) เมื่อระบบปฏิบัติการออกเวอร์ชันใหม่หรือเกิดภัยคุกคามรูปแบบใหม่'
        ],
        keyPointsTh: [
          'Secure Baseline คือชุดค่าคอนฟิกมาตรฐานขั้นต่ำที่ปลอดภัยเพื่อลด Attack surface และสร้างความสม่ำเสมอทั่วองค์กร',
          'Establish: อ้างอิงกรอบมาตรฐาน (เช่น CIS Benchmarks, DISA STIGs) ปรับให้เหมาะกับองค์กร และทดสอบก่อนรับรอง',
          'Deploy: กระจายแบบอัตโนมัติด้วย Golden Images, GPO, MDM หรือ IaC templates แทนการตั้งค่าด้วยมือรายเครื่อง',
          'Maintain: เฝ้าระวัง Configuration Drift ผ่านการสแกนต่อเนื่อง Change Management และทบทวนอัปเดต Baseline เมื่อภัยคุกคามเปลี่ยน'
        ]
      },
      {
        id: 'sec-it-hardening-targets',
        titleTh: '2. เป้าหมายการทำ Hardening ในระบบ IT องค์กร: Endpoints, Network และ Cloud Infrastructure',
        contentTh: [
          'การทำ Hardening (การเสริมความแข็งแกร่ง) คือกระบวนการลดช่องทางโจมตีและปิดจุดอ่อนของระบบเป้าหมายแต่ละชนิดให้เหมาะกับบทบาทและสถาปัตยกรรมของระบบนั้น ไม่สามารถนำสูตรเดียวกันไปใช้กับทุกอุปกรณ์ได้ สำหรับกลุ่มแรกคือ Workstations (เครื่องคอมพิวเตอร์ผู้ใช้) ซึ่งเป็นด่านหน้าที่เสี่ยงต่อ Phishing และ Malware มากที่สุด การทำ Hardening จึงเน้นหลัก Least Privilege โดยถอดสิทธิ์ Local Administrator ออกจากผู้ใช้ทั่วไป เปิดใช้งาน Full-Disk Encryption (เช่น BitLocker หรือ FileVault) เพื่อกันข้อมูลรั่วเมื่อเครื่องสูญหาย เปิด Host-based Firewall และ Endpoint Detection and Response (EDR) เปิด Secure Boot และตั้งรหัสผ่าน BIOS/UEFI ปิดการเชื่อมต่อสื่อพกพาที่ไม่ได้รับอนุญาต (USB storage restrictions) และตั้งเวลา Auto-lock หน้าจออัตโนมัติ',
          'เป้าหมายที่สองคือ Mobile Devices (สมาร์ตโฟนและแท็บเล็ต) ซึ่งพกพาออกนอกขอบเขตเครือข่ายองค์กรอยู่เสมอ จึงต้องเสริมความแข็งแกร่งด้วยการลงทะเบียนเข้าสู่ Mobile Device Management (MDM) บังคับใช้รหัสผ่านหรือ Biometrics ร่วมกับการเข้ารหัสทั้งเครื่อง ปิดการอนุญาตติดตั้งแอปจากแหล่งภายนอก (Disable Sideloading) ปิด USB Debugging/Developer options อัปเดต OS อย่างสม่ำเสมอ แยกพื้นที่ข้อมูลงานออกจากข้อมูลส่วนตัว (Containerization) และเตรียมพร้อมคำสั่ง Remote Wipe เมื่อเครื่องสูญหาย',
          'เป้าหมายที่สามและสี่คืออุปกรณ์โครงสร้างพื้นฐานเครือข่าย ได้แก่ Switches และ Routers ซึ่งเป็นกระดูกสันหลังของการสื่อสาร หากถูกยึดครองผู้โจมตีจะดักฟังหรือเบี่ยงเบนทราฟฟิกได้ทั้งองค์กร สำหรับ Switches (Layer 2) มาตรการ Hardening สำคัญประกอบด้วยการปิดพอร์ตที่ไม่ได้ใช้งานทั้งหมด (Administrative shutdown) แล้วโยนเข้า Blackhole/Unused VLAN, การเปิด Port Security (เช่น 802.1X Authentication, จำกัดจำนวน MAC address, DHCP Snooping และ Dynamic ARP Inspection เพื่อกัน ARP spoofing), ปิดโปรโตคอลค้นหาเพื่อนบ้านอย่าง CDP/LLDP ในพอร์ตที่หันออกหาผู้ใช้ และเปิด BPDU Guard/Root Guard เพื่อกันการโจมตี Spanning Tree Protocol ส่วน Routers (Layer 3) ต้องมุ่งเน้นการบังคับ Access Control Lists (ACLs) สำหรับ Ingress และ Egress Filtering, การปิดบริการที่ไม่จำเป็น (เช่น Source Routing, IP Directed Broadcasts, HTTP management), การยืนยันตัวตนของ Routing Protocol (เช่น OSPF/BGP authentication) เพื่อกัน Route poisoning และทั้ง Switch และ Router ต้องแยก Management Plane ออกจาก Data Plane โดยจัดการผ่าน Dedicated Management VLAN, เข้ารหัสด้วย SSHv2 (เลิกใช้ Telnet), ใช้ SNMPv3 แทน v1/v2c และส่ง Authentication การล็อกอินไปที่ TACACS+/RADIUS แทน Local password เพียงอย่างเดียว',
          'เป้าหมายที่ห้าและหกคือ Servers และ Cloud Infrastructure โดย Servers (ทั้ง Physical และ VM) ต้องติดตั้งแบบ Minimal OS (เช่น Server Core ไม่มี GUI) ลบบริการและ Daemons ที่ไม่ใช้งาน ปิดพอร์ตที่ไม่ได้รับอนุญาต แยก Service Accounts ให้มีสิทธิ์เฉพาะงาน เปิดใช้ File Integrity Monitoring (FIM) และส่ง Log เข้า SIEM ส่วน Cloud Infrastructure แตกต่างจากเซิร์ฟเวอร์ดั้งเดิมตรงที่มี Control Plane เป็น API และต้องยึดหลัก Shared Responsibility Model การทำ Hardening บนคลาวด์จึงต้องเริ่มจาก IAM Least Privilege และบังคับ MFA (ห้ามใช้ Root Account ในงานประจำวัน), ล็อกค่าเครือข่ายด้วย Security Groups / Network ACLs และ Virtual Private Cloud (VPC) Segmentation, ปิด Public Access บน Storage Buckets และ Snapshots โดยค่าเริ่มต้น, เข้ารหัส Data at Rest ผ่าน KMS, ปิด Regions และ APIs ที่องค์กรไม่ใช้งาน รวมถึงใช้ Cloud Security Posture Management (CSPM) และสแกน IaC Templates ก่อน Deploy ขึ้นจริง'
        ],
        keyPointsTh: [
          'Workstations และ Mobile เน้นสิทธิ์ผู้ใช้ต่ำสุด (Least Privilege), Full-Disk Encryption, EDR/MDM, ล็อก USB/Sideloading และตั้งรหัสผ่านเฟิร์มแวร์/หน้าจอ',
          'Switches เน้น Layer 2 Hardening: ปิดพอร์ตว่าง + Unused VLAN, 802.1X, DHCP Snooping, DAI และ BPDU Guard',
          'Routers เน้น Layer 3 Hardening: Ingress/Egress ACLs, ปิดบริการเสี่ยง, Routing Authentication และแยก Management Plane (SSHv2, SNMPv3, TACACS+/RADIUS)',
          'Servers ใช้ Minimal OS และลบ Service เกินจำเป็น ส่วน Cloud Infrastructure เน้น IAM/MFA, Security Groups, ปิด Public Storage โดยปริยาย และ CSPM'
        ]
      },
      {
        id: 'sec-ot-embedded-hardening',
        titleTh: '3. การทำ Hardening ระบบเฉพาะทาง: ICS/SCADA, Embedded Systems, RTOS และ IoT Devices',
        contentTh: [
          'ผู้ดูแลระบบจำนวนมากมักพลาดเมื่อนำวิธี Hardening ของเครื่อง IT ทั่วไปไปใช้กับระบบปฏิบัติการอุตสาหกรรมและอุปกรณ์ฝังตัว (OT/Embedded/IoT) เช่น การรัน Active Vulnerability Scanner ใส่ตัวควบคุมโรงงาน หรือการสั่งติดตั้ง Agent แอนติไวรัสขนาดใหญ่บนอุปกรณ์ควบคุมแบบเรียลไทม์ ซึ่งอาจทำให้ระบบค้าง ล่าช้า หรือเกิดอันตรายต่อชีวิตและทรัพย์สินได้ จึงต้องเข้าใจธรรมชาติของเป้าหมาย 4 กลุ่มนี้แยกจากกันอย่างชัดเจน',
          'กลุ่มแรกคือ ICS/SCADA (Industrial Control Systems / Supervisory Control and Data Acquisition) ซึ่งใช้ควบคุมสายการผลิต โรงไฟฟ้า ระบบประปา และท่อส่งพลังงาน จุดเด่นของระบบนี้คือ "Availability และ Safety สำคัญเหนือกว่าการรีบูตเพื่ออัปเดตบ่อยครั้ง" อุปกรณ์อย่าง PLC (Programmable Logic Controller) และ HMI มักมีอายุการใช้งาน 10–20 ปีและไม่สามารถติดตั้งแพตช์ได้ทันที (Inability to patch) การทำ Hardening จึงเน้นการแบ่งโซนเครือข่ายอย่างเข้มงวดตาม Purdue Model หรือใช้ Air-gapped / Data Diodes แยกเครือข่าย OT ออกจาก Corporate IT, ตั้ง Firewall กรองโปรโตคอลอุตสาหกรรม (เช่น Modbus/DNP3) แบบ Allowlisting, ใช้ Application Allowlisting บน HMI แทนการสแกนไวรัสที่กินทรัพยากร, ปิดพอร์ต USB/Serial ที่ไม่ใช้และล็อกตู้ควบคุมทางกายภาพ รวมถึงใช้ Passive Network Monitoring แทนการสแกนเชิงรุกที่อาจทำให้อุปกรณ์หยุดทำงาน',
          'กลุ่มที่สองคือ Embedded Systems (ระบบสมองกลฝังตัว) เช่น เครื่องมือแพทย์ เครื่อง ATM ระบบควบคุมยานยนต์ หรือเครื่องพิมพ์อุตสาหกรรม ซึ่งสร้างมาเพื่อทำหน้าที่เฉพาะอย่างและมีทรัพยากร CPU/RAM จำกัด มาตรการ Hardening ที่สำคัญคือการเปลี่ยนหรือลบรหัสผ่านดีฟอลต์ตั้งแต่ขั้นตอน Deploy, การปิดอินเทอร์เฟซสำหรับดีบักระดับฮาร์ดแวร์ในรุ่นใช้งานจริง เช่น JTAG และ UART เพื่อไม่ให้ผู้โจมตีต่อสายดึงเฟิร์มแวร์ออกมาได้, การบังคับใช้ Signed Firmware และ Secure Boot เพื่อป้องกันการฝังเฟิร์มแวร์ปลอมแปลง และการใช้ระบบไฟล์แบบ Read-only เพื่อลดโอกาสที่โค้ดแปลกปลอมจะถูกเขียนลงอุปกรณ์',
          'กลุ่มที่สามคือ RTOS (Real-Time Operating Systems) ซึ่งเป็นระบบปฏิบัติการที่ออกแบบให้ตอบสนองต่อเหตุการณ์ภายในกรอบเวลาที่แน่นอนเป๊ะ (Deterministic timing) เช่น ระบบควบคุมเบรก ABS ระบบการบิน หรือหุ่นยนต์ผ่าตัด เหตุใด RTOS จึงต่างจาก OS ทั่วไป คำตอบคือความล่าช้าแม้เพียงไม่กี่มิลลิวินาทีจากการสแกนไฟล์หรือการรอ Network check อาจก่อให้เกิดความล้มเหลวของภารกิจ การทำ Hardening RTOS จึงมุ่งเน้นการลดขนาด Kernel (Microkernel/Minimal footprint) ลบ Service ที่ไม่จำเป็น การแยกพื้นที่หน่วยความจำระหว่าง Task ด้วย MMU/MPU (Memory Protection Unit) การตรวจสอบความถูกต้องของ IPC (Inter-Process Communication) และการตรวจสอบ Code Signing อย่างเข้มงวดตั้งแต่ก่อน Compile และ Deploy รวมถึงใช้ Compensating Controls รอบข้าง เช่น Firewall หรือ Gateway แทนการใส่ Agent ลงในตัว RTOS',
          'กลุ่มที่สี่คือ IoT Devices (Internet of Things) เช่น กล้องวงจรปิด IP Camera, Smart Sensors, เครื่องวัดอุณหภูมิอัจฉริยะ หรืออุปกรณ์ Smart Office ซึ่งมักถูกวางขายด้วยราคาถูกและตั้งรหัสผ่านเริ่มต้นที่ซ้ำกันทั้งรุ่น การทำ Hardening IoT เริ่มจากการเปลี่ยนรหัสผ่านดีฟอลต์ทันทีที่ติดตั้ง การจัดวางอุปกรณ์ทั้งหมดลงใน Dedicated IoT VLAN ที่แยกจากเครือข่ายองค์กรและจำกัดสิทธิ์ Egress ออกสู่อินเทอร์เน็ตเฉพาะปลายทางที่จำเป็นจริง การปิดโปรโตคอลไม่ปลอดภัยอย่าง Telnet, HTTP หรือ UPnP การบังคับเข้ารหัสข้อมูลส่งต่อ (เช่น HTTPS หรือ MQTT over TLS) การปิดวิทยุสื่อสารที่ไม่ใช้ (เช่น Bluetooth/NFC) และการตรวจสอบให้แน่ใจว่าอุปกรณ์รองรับ Signed Over-the-Air (OTA) Firmware Updates หรือวางแผน Decommission เมื่อหมดระยะสนับสนุน'
        ],
        keyPointsTh: [
          'ICS/SCADA เน้น Network Segmentation (Purdue/Air-gap/Data Diode), Application Allowlisting, Physical locks และ Passive monitoring เพื่อไม่ให้กระทบการผลิต',
          'Embedded Systems เน้นเปลี่ยนรหัสผ่านดีฟอลต์, ปิด JTAG/UART debug ports, Signed Firmware และ Secure Boot',
          'RTOS ต้องรักษา Deterministic timing จึงห้ามลง Agent หนัก ๆ แต่เน้น Microkernel, Memory isolation (MMU/MPU), Code signing และ Compensating controls ภายนอก',
          'IoT Devices เน้นเปลี่ยนรหัสผ่านดีฟอลต์ทันที, แยก Dedicated IoT VLAN, ปิด UPnP/Telnet, เข้ารหัสการสื่อสาร และจัดการ OTA Firmware Updates'
        ]
      }
    ],
    keyTerms: [
      {
        termEn: 'Secure Baseline',
        explanationTh: 'ชุดมาตรฐานการตั้งค่าความปลอดภัยขั้นต่ำที่ผ่านการอนุมัติและทดสอบแล้ว เพื่อใช้เป็นแม่แบบในการติดตั้งและดูแลระบบประเภทเดียวกันให้สม่ำเสมอ'
      },
      {
        termEn: 'Configuration Drift',
        explanationTh: 'ภาวะที่ค่าคอนฟิกูเรชันจริงของระบบค่อย ๆ เปลี่ยนแปลงไปจาก Secure Baseline ตามกาลเวลาเนื่องจากการแก้ไขเฉพาะหน้า การอัปเดต หรือความผิดพลาดของมนุษย์'
      },
      {
        termEn: 'Golden Image',
        explanationTh: 'แม่แบบระบบปฏิบัติการ (OS Image) ที่ผ่านการ Hardening อัปเดตแพตช์ และลบซอฟต์แวร์ไม่จำเป็นแล้ว เพื่อใช้โคลนหรือ Deploy เครื่องใหม่อย่างรวดเร็ว'
      },
      {
        termEn: 'CIS Benchmarks / DISA STIGs',
        explanationTh: 'กรอบมาตรฐานและคู่มือการตั้งค่าความปลอดภัยเชิงเทคนิคที่ได้รับความนิยมระดับสากลสำหรับใช้เป็นฐานอ้างอิงในการสร้าง Secure Baselines'
      },
      {
        termEn: 'Port Security & DHCP Snooping',
        explanationTh: 'มาตรการ Hardening บน Switch ที่ควบคุม MAC Address/802.1X บนพอร์ตและคัดกรองข้อความ DHCP เพื่อป้องกันอุปกรณ์แปลกปลอมและ Rogue DHCP Server'
      },
      {
        termEn: 'Industrial Control Systems / Supervisory Control and Data Acquisition',
        acronym: 'ICS/SCADA',
        explanationTh: 'ระบบควบคุมอุตสาหกรรมและการกำกับดูแลกระบวนการทางกายภาพ เช่น โรงงานและโครงสร้างพื้นฐาน ซึ่งให้ความสำคัญสูงสุดกับ Availability และ Safety'
      },
      {
        termEn: 'Real-Time Operating System',
        acronym: 'RTOS',
        explanationTh: 'ระบบปฏิบัติการที่ต้องประมวลผลและตอบสนองภายในเวลาที่กำหนดอย่างแม่นยำ (Deterministic) เช่น ระบบยานยนต์ การบิน หรืออุปกรณ์การแพทย์'
      },
      {
        termEn: 'JTAG / UART Debug Interfaces',
        explanationTh: 'พอร์ตหรือจุดเชื่อมต่อระดับฮาร์ดแวร์สำหรับวิศวกรใช้ดีบัก Embedded Systems ซึ่งต้องปิดหรือล็อกก่อนนำอุปกรณ์ไปใช้งานจริงเพื่อป้องกันการดึง Firmware'
      }
    ],
    scenarios: [
      {
        titleTh: 'การจัดการ Configuration Drift หลังเปิดใช้ระบบคลาวด์และเซิร์ฟเวอร์องค์กร',
        contextTh:
          'บริษัทฟินเทคแห่งหนึ่งสร้าง Golden Image สำหรับ Linux Web Server ตามมาตรฐาน CIS Benchmark Level 1 เรียบร้อยแล้ว แต่หกเดือนต่อมาในการตรวจสอบ Security Audit พบว่าเซิร์ฟเวอร์ 12 จาก 40 เครื่องมีการเปิดพอร์ต SSH ให้เข้าถึงได้จากอินเทอร์เน็ตทั้งหมด (0.0.0.0/0) และบางเครื่องเปิดใช้งานบริการ FTP เพื่อโอนย้ายไฟล์ทดสอบชั่วคราวแล้วลืมปิด',
        decisionTh:
          'ทีมปฏิบัติการแก้ไขปัญหาเฉพาะหน้าด้วยการปิดบริการ FTP และจำกัดกฎ Firewall/Security Group ทันที จากนั้นปรับปรุงขั้นตอน "Maintain" ในวงจร Secure Baseline โดยนำ Infrastructure as Code (IaC) ร่วมกับเครื่องมือสแกน Configuration Compliance อัตโนมัติมาตรวจจับ Configuration Drift รายวัน บังคับใช้ Change Management ก่อนแก้ Security Group และตั้ง Alert แจ้งเตือนเมื่อค่าจริงไม่ตรงกับ Baseline',
        takeawayTh:
          'การ Establish และ Deploy Baseline เพียงครั้งเดียวไม่เพียงพอ หากขาดขั้นตอน Maintain และ Continuous Monitoring จะเกิด Configuration Drift กลับมาเปิดช่องโหว่ได้เสมอ'
      },
      {
        titleTh: 'การ Hardening ระบบควบคุมสายการผลิตอัตโนมัติ (ICS/SCADA + RTOS + IoT)',
        contextTh:
          'โรงงานผลิตยาแห่งหนึ่งกำลังเชื่อมต่อเครื่องจักร PLC/SCADA รุ่นเก่าที่รันบน Embedded RTOS และเซ็นเซอร์วัดความชื้น IoT เข้ากับเครือข่ายเพื่อส่งรายงานประสิทธิภาพไปยังฝ่ายบริหารส่วนกลาง แต่ฝ่ายวิศวกรรมโรงงานกังวลว่าการติดตั้ง Endpoint Agent และรัน Active Vulnerability Scan จากส่วนกลางจะทำให้ PLC ตอบสนองช้าลงจนเม็ดยาเสียทั้งล็อต',
        decisionTh:
          'ทีมความปลอดภัยออกแบบสถาปัตยกรรม Hardening โดยไม่ติดตั้ง Heavy Agent บน RTOS/PLC และหลีกเลี่ยง Active scanning ใส่ OT แต่แยกเครือข่ายเป็นโซนตาม Purdue Model ด้วย Industrial Firewall และ Data Diode แบบทางเดียวสำหรับส่งข้อมูลรายงานออกมาที่ IT, ย้ายเซ็นเซอร์ IoT ไปอยู่บน Dedicated IoT VLAN พร้อมเปลี่ยนรหัสผ่านดีฟอลต์และปิดพอร์ต JTAG/Telnet, ใช้ Application Allowlisting บนเครื่อง HMI และใช้ Passive Sensor ดักฟังทราฟฟิกเพื่อตรวจจับความผิดปกติแทน',
        takeawayTh:
          'การ Hardening ระบบ OT, RTOS และ IoT ต้องเคารพข้อจำกัดด้าน Latency และ Availability โดยใช้ Segmentation, Allowlisting และ Compensating Controls แทนเครื่องมือ IT แบบดั้งเดิม'
      }
    ],
    comparisonTables: [
      {
        captionTh: 'ตารางเปรียบเทียบวงจรชีวิตของ Secure Baselines (Establish, Deploy, Maintain)',
        headersTh: ['ขั้นตอน', 'วัตถุประสงค์หลัก', 'กิจกรรมและเครื่องมือสำคัญ', 'ความเสี่ยงหากละเลย'],
        rowsTh: [
          ['Establish (กำหนดมาตรฐาน)', 'สร้างแม่แบบค่าคอนฟิกที่ปลอดภัยและใช้งานได้จริง', 'อ้างอิง CIS Benchmarks/STIGs, ปิด Service เกินจำเป็น, ทดสอบใน Staging', 'มาตรฐานขัดแย้งกับแอปพลิเคชันหรือยังเหลือจุดอ่อนดีฟอลต์'],
          ['Deploy (ปรับใช้งานจริง)', 'ติดตั้ง Baseline ให้เหมือนกันทุกเครื่องอย่างสม่ำเสมอ', 'Golden Images, GPO, MDM Profiles, Terraform/Ansible (IaC)', 'ตั้งค่าด้วยมือตกหล่น เกิดช่องโหว่เฉพาะเครื่องที่ลืมตั้งค่า'],
          ['Maintain (ดูแลต่อเนื่อง)', 'รักษา Baseline ให้ตรงมาตรฐานและทันภัยคุกคามใหม่', 'ตรวจ Configuration Drift, SCAP scanning, Change Control, Re-baselining', 'เกิด Configuration Drift และค่าคอนฟิกล้าสมัยไม่รับมือภัยใหม่']
        ]
      },
      {
        captionTh: 'ตารางเปรียบเทียบแนวทาง Hardening ระหว่างเป้าหมายกลุ่ม IT และกลุ่ม OT / Embedded / IoT',
        headersTh: ['กลุ่มเป้าหมาย', 'ข้อจำกัดสำคัญ', 'จุดเน้นด้าน Network & Access', 'เทคนิค Hardening เฉพาะตัว'],
        rowsTh: [
          ['Workstations & Mobile', 'ผู้ใช้พกพาออกนอกองค์กรและเสี่ยงต่อ Phishing', 'Least privilege (No local admin), FDE, VPN/ZTNA', 'EDR, MDM/UEM, ปิด USB/Sideloading, Auto-lock'],
          ['Switches & Routers', 'เป็นจุดศูนย์กลางทราฟฟิก หากล่มหรือถูกยึดกระทบทั้งระบบ', 'แยก Management VLAN, ACLs (Ingress/Egress), 802.1X', 'ปิดพอร์ตว่าง, DHCP Snooping, DAI, SSHv2, SNMPv3, Routing Auth'],
          ['Servers & Cloud', 'บริการเปิดรับการเชื่อมต่อสูง และ Cloud ควบคุมผ่าน API', 'Security Groups/VPC Segmentation, ปิด Public Buckets', 'Minimal OS, ถอน Bloatware, IAM MFA, FIM, CSPM'],
          ['ICS/SCADA & RTOS', 'ห้ามรีบูตบ่อย ต้องคง Deterministic timing และ Safety', 'Purdue Segmentation, Air-gap / Data Diode, Allowlisting', 'ไม่ลง Agent หนัก, Passive monitoring, Physical locks, MMU/MPU isolation'],
          ['Embedded & IoT', 'CPU/RAM ต่ำ เปลี่ยนฮาร์ดแวร์ยาก มักมีรหัสผ่านดีฟอลต์', 'Dedicated IoT VLAN, Strict Egress ACLs, เข้ารหัส TLS', 'เปลี่ยน Default password, ปิด JTAG/UART/UPnP/Telnet, Signed OTA firmware']
        ]
      }
    ],
    applicationsAndLimitations: {
      applicationsTh: [
        'ใช้สร้าง Golden Images และ IaC Modules ที่ปลอดภัยตั้งแต่เริ่มต้น (Security by Design) เพื่อให้การขยายจำนวนเซิร์ฟเวอร์ คอนเทนเนอร์ และอุปกรณ์ปลายทางเป็นไปอย่างรวดเร็วโดยไม่ลดระดับความปลอดภัย',
        'ใช้เป็นเกณฑ์อ้างอิงในการตรวจวัด Compliance และทำ Vulnerability/Configuration Scanning (เช่น เทียบกับ CIS Benchmarks) เพื่อลดภาระการตรวจสอบด้วยตนเอง',
        'ใช้กำหนดแผนการป้องกันแบบ Layered Security สำหรับสภาพแวดล้อมผสมผสาน (Hybrid IT/OT) โดยเลือกวิธี Hardening ที่ไม่กระทบกระบวนการผลิตหรือระบบเรียลไทม์'
      ],
      limitationsTh: [
        'การตั้งค่า Hardening ที่เข้มงวดเกินไปโดยไม่ผ่านการทดสอบใน Staging (Establish phase) อาจปิดพอร์ตหรือโปรโตคอลที่แอปพลิเคชันธุรกิจจำเป็นต้องใช้จนระบบล่มได้',
        'ระบบ Embedded, RTOS และ ICS/SCADA รุ่นเก่าจำนวนมากไม่สามารถติดตั้ง Security Agents หรืออัปเดตแพตช์ได้บ่อย จึงไม่อาจพึ่งพา Host-based Hardening เพียงอย่างเดียวได้ ต้องอาศัย Network Segmentation และ Compensating Controls เสมอ',
        'Secure Baseline ไม่สามารถป้องกันช่องโหว่ Zero-day ในตัวแอปพลิเคชันหรือความผิดพลาดจากการออกแบบ Logic ของโค้ดได้ทั้งหมด จึงต้องทำงานควบคู่กับการ Patching และ Monitoring อย่างต่อเนื่อง'
      ]
    },
    commonMisconceptions: [
      {
        misconceptionTh: 'เข้าใจว่าเมื่อ Deploy Golden Image ที่ Hardened แล้ว ระบบจะปลอดภัยตลอดไปโดยไม่ต้องตรวจสอบการตั้งค่าอีก',
        clarificationTh:
          'ระหว่างการปฏิบัติงานจริงอาจมีการเปิดพอร์ตชั่วคราว การเพิ่มบัญชีผู้ดูแล หรือการเปลี่ยนแปลงจากการอัปเดตซอฟต์แวร์จนเกิด Configuration Drift จึงต้องมีขั้นตอน Maintain เพื่อสแกนเทียบ Baseline และควบคุมผ่าน Change Management เสมอ'
      },
      {
        misconceptionTh: 'คิดว่าควรติดตั้ง Endpoint Antivirus/EDR Agent และรัน Active Vulnerability Scan ใส่เครื่อง ICS/SCADA และ RTOS เหมือนเครื่องพนักงานทั่วไป',
        clarificationTh:
          'ระบบ RTOS และ PLC มีข้อจำกัดด้าน Latency และ Memory อย่างเข้มงวด การสแกนเชิงรุกหรือลง Agent หนัก ๆ อาจทำให้ระบบค้างหรือเสีย Timing จนเกิดอุบัติเหตุทางอุตสาหกรรมได้ จึงควรใช้ Passive monitoring, Segmentation และ Application allowlisting แทน'
      },
      {
        misconceptionTh: 'เชื่อว่าการปิดพอร์ตว่างบน Switch เพียงอย่างเดียวก็เพียงพอสำหรับ Layer 2 Security แล้ว',
        clarificationTh:
          'นอกจาก Shutdown พอร์ตที่ไม่ได้ใช้และย้ายเข้า Blackhole VLAN แล้ว ยังต้องเปิด Port Security (802.1X/MAC limiting), DHCP Snooping, Dynamic ARP Inspection (DAI) และ BPDU Guard เพื่อป้องกันผู้โจมตีเสียบอุปกรณ์แทนพอร์ตที่ใช้งานอยู่หรือปลอมเป็น Root Bridge/DHCP Server'
      }
    ],
    scenarioAnalysisGuide: {
      approachStepsTh: [
        'ขั้นที่ 1 ระบุ "เป้าหมาย" (Target) ในโจทย์ให้ชัดเจนว่าเป็น IT ทั่วไป (Workstation, Mobile, Switch, Router, Server, Cloud) หรือระบบเฉพาะทาง/OT (ICS/SCADA, Embedded, RTOS, IoT)',
        'ขั้นที่ 2 ตรวจสอบว่าโจทย์อยู่ในขั้นตอนใดของ Secure Baseline: การกำหนดมาตรฐานอ้างอิง/ทดสอบ (Establish), การนำไปติดตั้ง (Deploy) หรือการแก้ปัญหาค่าตั้งเบี่ยงเบน/อัปเดตตามเวลา (Maintain / Configuration drift)',
        'ขั้นที่ 3 พิจารณาข้อจำกัดในโจทย์ เช่น "ห้ามรีบูต", "ต้องการเวลาตอบสนองระดับมิลลิวินาที", "ฮาร์ดแวร์สเปกต่ำ", "เพิ่งซื้อจากโรงงาน" เพื่อตัดตัวเลือกที่ขัดต่อข้อจำกัดออก (เช่น ตัด Active scan บน RTOS หรือตัด Agent บน IoT)',
        'ขั้นที่ 4 เลือกเทคนิค Hardening ที่ตรงจุดที่สุดสำหรับอุปกรณ์นั้น เช่น ปิด JTAG/UART สำหรับ Embedded, แยก VLAN + เปลี่ยนรหัสผ่านดีฟอลต์สำหรับ IoT, หรือ DHCP Snooping/802.1X สำหรับ Switch'
      ],
      examSignalKeywords: [
        { keywordEn: 'configuration drift / deviated from standard', meaningTh: 'ชี้ไปยังขั้นตอน Maintain ในวงจร Secure Baselines และการใช้ Continuous monitoring/IaC' },
        { keywordEn: 'CIS Benchmarks / DISA STIGs / Golden image', meaningTh: 'ชี้ไปยังขั้นตอน Establish และ Deploy ของ Secure Baselines' },
        { keywordEn: 'unused ports / ARP spoofing / rogue DHCP', meaningTh: 'ชี้ไปยัง Switch hardening (Unused VLAN, DAI, DHCP Snooping, Port security)' },
        { keywordEn: 'JTAG / UART / firmware extraction', meaningTh: 'ชี้ไปยัง Embedded systems hardening (ปิด Debug interfaces และใช้ Signed firmware)' },
        { keywordEn: 'deterministic timing / cannot tolerate scanning latency', meaningTh: 'ชี้ไปยัง RTOS หรือ ICS/SCADA ที่ต้องใช้ Microkernel/Segmentation/Passive monitoring แทน Agent' },
        { keywordEn: 'default credentials / UPnP / cheap sensors', meaningTh: 'ชี้ไปยัง IoT hardening (เปลี่ยน Default password, ปิด UPnP/Telnet, ย้ายเข้า IoT VLAN)' }
      ]
    },
    summaryTh: [
      'Secure Baselines คือรากฐานของการปฏิบัติการความปลอดภัยที่ทำซ้ำและตรวจสอบได้ ประกอบด้วย 3 ระยะต่อเนื่อง: Establish (สร้างมาตรฐานจาก CIS/STIGs และทดสอบ), Deploy (ติดตั้งอัตโนมัติผ่าน Golden Image/GPO/MDM/IaC) และ Maintain (ป้องกัน Configuration Drift ด้วยการตรวจติดตามต่อเนื่อง)',
      'การทำ Hardening อุปกรณ์ IT ทั่วไปต้องปรับให้เข้ากับเลเยอร์และบทบาทของแต่ละอุปกรณ์ ตั้งแต่การคุมสิทธิ์และเข้ารหัสบน Workstations/Mobile, การป้องกัน Layer 2/Layer 3 และ Management Plane บน Switches/Routers ไปจนถึง Minimal OS บน Servers และ IAM/Public-access lockdown บน Cloud',
      'สำหรับระบบ OT และอุปกรณ์เฉพาะทาง (ICS/SCADA, Embedded, RTOS, IoT) ต้องยึดความปลอดภัยทางกายภาพ Latency และข้อจำกัดด้านฮาร์ดแวร์เป็นสำคัญ โดยอาศัย Network Segmentation, Dedicated VLAN, Application Allowlisting, การปิด Debug ports/Default credentials และ Passive Monitoring แทนการสแกนหรือลง Agent แบบ IT ทั่วไป'
    ],
    knowledgeChecks: [
      {
        id: 'L4-01-KC1',
        questionTh:
          'ระหว่างการตรวจสอบประจำไตรมาส ทีม Security Operations พบว่าเครื่องเว็บเซิร์ฟเวอร์หลายเครื่องที่เคยติดตั้งจาก Golden Image ตามมาตรฐาน CIS Benchmark ปัจจุบันมีการเปิดบริการที่ไม่จำเป็นและแก้ค่า Firewall ให้หลวมลงกว่าเดิมจากการแก้ปัญหาระบบเมื่อเดือนก่อน ปัญหานี้สะท้อนความล้มเหลวในขั้นตอนใดของ Secure Baseline และควรแก้ด้วยวิธีใด?',
        choices: [
          { id: 'a', textTh: 'ขั้นตอน Establish; ควรลบ Golden Image ทิ้งแล้วให้ผู้ดูแลตั้งค่าเครื่องใหม่ด้วยมือ' },
          { id: 'b', textTh: 'ขั้นตอน Maintain; เกิด Configuration Drift จึงควรใช้ Automated configuration enforcement และตรวจเทียบมาตรฐานอย่างต่อเนื่อง' },
          { id: 'c', textTh: 'ขั้นตอน Deploy; ควรเปลี่ยนจาก HTTPS เป็น Telnet เพื่อตรวจสอบค่าคอนฟิกได้เร็วขึ้น' },
          { id: 'd', textTh: 'ขั้นตอน Acquisition; ควรจัดซื้อฮาร์ดแวร์เซิร์ฟเวอร์ยี่ห้อใหม่ทั้งหมด' }
        ],
        correctChoiceId: 'b',
        explanationTh:
          'คำตอบที่ถูกต้องคือ b เพราะเมื่อระบบที่ Deploy จากมาตรฐานเดียวกันเริ่มมีค่าคอนฟิกเบี่ยงเบนไปตามเวลา เรียกว่า Configuration Drift ซึ่งเป็นปัญหาในระยะ Maintain จึงต้องแก้ไขด้วยเครื่องมือเฝ้าระวังและบังคับใช้ค่าคอนฟิกอัตโนมัติ (เช่น IaC/SCAP/Compliance monitoring) ร่วมกับ Change Management ส่วนข้อ a ทำให้เกิดความไม่สม่ำเสมอมากขึ้น ข้อ c ลดความปลอดภัยลง และข้อ d ไม่ตรงประเด็น'
      },
      {
        id: 'L4-01-KC2',
        questionTh:
          'วิศวกรความปลอดภัยกำลังตรวจรับแผงวงจรควบคุมระบบอัตโนมัติ (Embedded system) ที่จะนำไปติดตั้งในสถานีไฟฟ้าย่อย ข้อใดเป็นมาตรการ Hardening ที่เหมาะสมที่สุดเพื่อป้องกันผู้ไม่หวังดีเชื่อมต่อสายเข้ากับบอร์ดโดยตรงเพื่อดึงข้อมูลเฟิร์มแวร์ออกมาวิเคราะห์?',
        choices: [
          { id: 'a', textTh: 'เปิดใช้งานพอร์ต UPnP และ Telnet เพื่อความสะดวกในการรีโมตอัปเดต' },
          { id: 'b', textTh: 'ติดตั้งซอฟต์แวร์ EDR Agent ขนาดใหญ่บนหน่วยความจำของชิปควบคุม' },
          { id: 'c', textTh: 'ปิดการอนุญาต Sideloading บนแอปสโตร์ของสมาร์ตโฟน' },
          { id: 'd', textTh: 'ปิดการใช้งานอินเทอร์เฟซสำหรับดีบักระดับฮาร์ดแวร์ เช่น JTAG และ UART พร้อมบังคับใช้ Signed Firmware และ Secure Boot' }
        ],
        correctChoiceId: 'd',
        explanationTh:
          'คำตอบที่ถูกต้องคือ d เพราะ JTAG และ UART เป็น Hardware debug interfaces ที่ผู้โจมตีสามารถต่อสายโดยตรงเพื่อ Dump firmware หรือแก้ไขหน่วยความจำของ Embedded system ได้ การปิดหรือล็อกพอร์ตเหล่านี้ก่อนนำออกใช้งานจริงร่วมกับ Signed Firmware/Secure Boot จึงเป็นการ Hardening ที่ตรงจุดที่สุด ส่วนข้อ a เพิ่มช่องโหว่ ข้อ b ไม่เหมาะกับทรัพยากรต่ำ/Embedded และข้อ c เป็นมาตรการสำหรับ Mobile devices'
      },
      {
        id: 'L4-01-KC3',
        questionTh:
          'ผู้ดูแลเครือข่ายต้องการ Hardening Access Switch ในสำนักงานเพื่อป้องกันพนักงานเสียบอุปกรณ์เครือข่ายแปลกปลอมเข้ากับพอร์ตว่างในห้องประชุม รวมถึงป้องกันการปลอมแปลง DHCP Server และ ARP Spoofing บน LAN ควรใช้มาตรการใดร่วมกัน?',
        choices: [
          { id: 'a', textTh: 'ปิดพอร์ตที่ไม่ได้ใช้งานแล้วย้ายเข้า Blackhole VLAN, เปิด 802.1X/Port Security, เปิด DHCP Snooping และ Dynamic ARP Inspection (DAI)' },
          { id: 'b', textTh: 'เปิดใช้ Telnet และ SNMPv1 เพื่อให้ง่ายต่อการตรวจสอบพอร์ตจากทุกเครื่องในเครือข่าย' },
          { id: 'c', textTh: 'เปิดพอร์ตทั้งหมดให้อยู่ใน Default VLAN 1 และเปิด CDP บนทุกพอร์ตเชื่อมต่อผู้ใช้' },
          { id: 'd', textTh: 'เปลี่ยน Switch ให้ทำงานแบบ Routing เต็มรูปแบบและปิด Spanning Tree Protocol (STP)' }
        ],
        correctChoiceId: 'a',
        explanationTh:
          'คำตอบที่ถูกต้องคือ a เพราะเป็นชุดมาตรการ Switch Hardening ตามมาตรฐาน: Shut down unused ports + Blackhole VLAN กันการเสียบใช้งานพอร์ตว่าง, 802.1X/Port Security คุมการเข้าถึงระดับพอร์ต, DHCP Snooping กัน Rogue DHCP และ DAI (อาศัยฐานข้อมูลจาก DHCP Snooping) กัน ARP Spoofing ส่วนข้อ b ใช้โปรโตคอล Plaintext ไม่ปลอดภัย ข้อ c เป็นการตั้งค่าที่เสี่ยงต่อการถูกโจมตี VLAN hopping/Reconnaissance และข้อ d เสี่ยงเกิด Switching loop'
      },
      {
        id: 'L4-01-KC4',
        questionTh:
          'โรงงานผลิตชิ้นส่วนยานยนต์ใช้หุ่นยนต์แขนกลที่ควบคุมด้วย RTOS ซึ่งต้องการเวลาตอบสนองที่แม่นยำระดับมิลลิวินาที (Deterministic timing) และผู้ผลิตไม่รับรองซอฟต์แวร์สแกนไวรัสจากภายนอก แนวทางการรักษาความปลอดภัยใดเหมาะสมที่สุด?',
        choices: [
          { id: 'a', textTh: 'บังคับติดตั้ง Anti-malware Agent แบบ Real-time file scanning ลงใน RTOS และสั่งรัน Active vulnerability scan ทุกชั่วโมง' },
          { id: 'b', textTh: 'เปิด RDP และ SSH ต่อตรงเข้าถึงตัวหุ่นยนต์จากอินเทอร์เน็ตเพื่อให้ผู้ผลิตเข้ามาแก้ปัญหาได้ทันที' },
          { id: 'c', textTh: 'แยกเครือข่าย OT ออกจาก IT ด้วย Network Segmentation/Firewall ใช้ Passive monitoring ตรวจสอบทราฟฟิก และคงการแยกหน่วยความจำระดับฮาร์ดแวร์ใน RTOS' },
          { id: 'd', textTh: 'ถอด RTOS ออกแล้วติดตั้งระบบปฏิบัติการ Desktop ทั่วไปบนหุ่นยนต์เพื่อให้ใช้งาน GPO ได้' }
        ],
        correctChoiceId: 'c',
        explanationTh:
          'คำตอบที่ถูกต้องคือ c เพราะ RTOS ไม่สามารถรับ Latency จากการสแกนหรือ Agent หนัก ๆ ได้ (ข้อ a เสี่ยงทำระบบสายการผลิตหยุดชะงักหรือเกิดอันตราย) จึงต้องใช้ Network Segmentation, Compensating Controls และ Passive monitoring ควบคู่กับการทำ Memory isolation ใน RTOS ส่วนข้อ b เปิดช่องโจมตีจากอินเทอร์เน็ตโดยตรง และข้อ d ทำลายคุณสมบัติ Real-time determinism ของเครื่องจักร'
      }
    ],
    references: [
      {
        title: 'CompTIA Security+ (SY0-701) Exam Objectives Version 5.0 — Objective 4.1',
        noteTh: 'Secure baselines (Establish, Deploy, Maintain) และ Hardening targets ทั้ง 10 กลุ่ม'
      },
      {
        title: 'NIST SP 800-123 & CIS Critical Security Controls (Control 4: Secure Configuration)',
        noteTh: 'แนวทางการสร้าง ปรับใช้ และรักษา Secure Configuration Baselines ขององค์กร'
      },
      {
        title: 'NIST SP 800-82 Rev. 3 — Guide to Operational Technology (OT) Security',
        noteTh: 'แนวทาง Hardening และ Network Segmentation สำหรับระบบ ICS/SCADA, RTOS และ Embedded'
      }
    ],
    relatedLessonIds: ['L2-05', 'L2-09', 'L3-01', 'L3-02', 'L4-02', 'L4-05']
  },
  {
    id: 'L4-02',
    examCode: 'SY0-701',
    domainId: 'D4',
    order: 25,
    titleTh: 'ความปลอดภัยเครือข่ายไร้สาย (WPA3/RADIUS) และ Mobile Solutions (MDM)',
    titleEn: 'Wireless & Mobile Security',
    estimatedMinutes: 45,
    learningObjectives: [
      'อธิบายหลักการสำรวจพื้นที่ติดตั้งเครือข่ายไร้สายด้วย Site Surveys และ Heat Maps เพื่อควบคุมพื้นที่ครอบคลุมและลด Signal Bleed',
      'เปรียบเทียบการตั้งค่าความปลอดภัยไร้สายสมัยใหม่ ได้แก่ WPA3 (Personal SAE vs. Enterprise 192-bit), AAA/RADIUS, Cryptographic Protocols (CCMP/GCMP) และ Authentication Protocols (EAP-TLS, PEAP, EAP-TTLS)',
      'เลือกใช้ Mobile Device Management (MDM), รูปแบบการติดตั้ง (BYOD, COPE, CYOD) และควบคุมการเชื่อมต่อ (Cellular, Wi-Fi, Bluetooth) ให้เหมาะกับความเสี่ยงขององค์กร'
    ],
    objectiveIds: ['4.1'],
    prerequisites: [
      'L1-02 หลักการ CIA Triad, Non-repudiation, AAA และ Gap Analysis',
      'L2-07 การโจมตีเครือข่าย ไร้สาย การเข้ารหัส และรหัสผ่าน',
      'L3-04 Firewalls, Port Security (802.1X) และ Secure Access (VPN/SD-WAN/SASE)',
      'L4-01 Secure Baselines และการ Hardening อุปกรณ์และโครงสร้างพื้นฐาน'
    ],
    sections: [
      {
        id: 'sec-wireless-installation',
        titleTh: '1. การวางแผนติดตั้งเครือข่ายไร้สายอย่างปลอดภัย: Site Surveys และ Heat Maps',
        contentTh: [
          'ต่างจากเครือข่ายมีสายที่ต้องเสียบสายเข้ากับแจ็กภายในอาคาร เครือข่ายไร้สาย (Wi-Fi) กระจายคลื่นวิทยุผ่านอากาศไปทุกทิศทางโดยไม่สนใจกำแพงหรือรั้วบริษัท การออกแบบความปลอดภัยไร้สายจึงเริ่มต้นตั้งแต่ก่อนขันน็อตติดตั้ง Access Point (AP) ด้วยการทำ Wireless Site Survey (การสำรวจพื้นที่สัญญาณไร้สาย) เหตุใดต้องทำ Site Survey คำตอบมีสองด้านคือ ด้านประสิทธิภาพ (ป้องกัน Dead zones และสัญญาณรบกวนจากเสาหรือเครื่องจักร) และด้านความปลอดภัย (ป้องกัน Signal bleed หรือการที่สัญญาณ Wi-Fi แผ่ทะลุออกไปถึงลานจอดรถหรืออาคารข้างเคียงจนผู้โจมตีสามารถนั่งดักจับ Handshake หรือโจมตี Evil Twin จากนอกรั้วองค์กรได้)',
          'การทำ Site Survey แบ่งออกเป็น 3 รูปแบบที่ใช้ต่างจังหวะเวลา ได้แก่ (1) Predictive Site Survey ใช้ซอฟต์แวร์จำลองแบบแปลนอาคาร วัสดุก่อสร้าง (เช่น คอนกรีตเสริมเหล็ก กระจกเคลือบโลหะ ประตูหนีไฟ) ก่อนซื้ออุปกรณ์เพื่อประเมินจำนวน AP เบื้องต้น, (2) Passive Site Survey เดินสำรวจหน้างานจริงเพื่อฟังคลื่น RF รอบข้าง ตรวจจับสัญญาณรบกวน (เช่น ไมโครเวฟ อุปกรณ์ Bluetooth หรือ Wi-Fi เพื่อนบ้าน) และค้นหา Rogue APs และ (3) Active Site Survey เชื่อมต่อกับ AP ทดสอบที่ติดตั้งชั่วคราวเพื่อวัดความเร็ว ทดสอบ Roaming และตรวจสอบคุณภาพสัญญาณจริง',
          'ผลลัพธ์จากการสำรวจจะถูกแสดงผลเป็น Heat Maps (แผนที่ความร้อนของสัญญาณ) ซึ่งใช้เฉดสีแสดงระดับความเข้มสัญญาณ (RSSI) และอัตราส่วนสัญญาณต่อสัญญาณรบกวน (SNR) บนแผนผังอาคาร วิศวกรความปลอดภัยใช้ Heat Maps เพื่อวางตำแหน่ง AP ให้คลุมพื้นที่ปฏิบัติงานอย่างสม่ำเสมอ กำหนดช่องสัญญาณ (Channel planning) เพื่อลดการกวนกันเอง และที่สำคัญคือ "ปรับลดกำลังส่ง (Transmit Power)" หรือเลือกใช้เสาอากาศแบบกำหนดทิศทาง (Directional antennas) ในจุดใกล้ผนังด้านนอก เพื่อจำกัดขอบเขตสัญญาณให้อยู่ภายในพื้นที่ควบคุมขององค์กรให้มากที่สุด'
        ],
        keyPointsTh: [
          'Site Surveys (Predictive, Passive, Active) ช่วยวางตำแหน่ง AP, ตรวจจับคลื่นรบกวน/Rogue AP และวางแผน Channel ให้เหมาะสม',
          'Heat Maps แสดงความเข้มสัญญาณและจุดอับ (Dead zones) รวมถึงจุดที่สัญญาณล้นออกนอกอาคาร (Signal bleed)',
          'การลด Transmit Power และใช้ Directional Antennas บริเวณขอบอาคารช่วยลดความเสี่ยงการโจมตีจากนอกพื้นที่องค์กร'
        ]
      },
      {
        id: 'sec-wireless-security',
        titleTh: '2. การตั้งค่าความปลอดภัยไร้สาย: WPA3, AAA/RADIUS, Cryptographic & Authentication Protocols',
        contentTh: [
          'เมื่อวางตำแหน่ง AP ได้เหมาะสมแล้ว ขั้นตอนถัดมาคือการเลือกโปรโตคอลเข้ารหัสและการยืนยันตัวตน (Wireless Security Settings) โดยต้องเลิกใช้มาตรฐานเก่าอย่าง WEP (RC4 ที่แตกคีย์ได้ในไม่กี่นาที) และ WPA รุ่นแรก (TKIP) รวมถึงระมัดระวังข้อจำกัดของ WPA2-PSK ที่เสี่ยงต่อการดักจับ 4-way handshake เพื่อนำไปเดารหัสผ่านแบบออฟไลน์ (Offline dictionary attack) ในกรอบ SY0-701 มุ่งเน้นมาตรฐานปัจจุบันคือ WPA3 (Wi-Fi Protected Access 3) ซึ่งแบ่งเป็น 2 โหมดหลักตามขนาดและความต้องการขององค์กร',
          'โหมดแรกคือ WPA3-Personal ซึ่งใช้กลไกใหม่ที่เรียกว่า SAE (Simultaneous Authentication of Equals หรือ Dragonfly Key Exchange) แทนการใช้ PSK แบบเดิมของ WPA2 จุดเปลี่ยนสำคัญของ SAE คือแม้ผู้โจมตีจะดักจับแพ็กเก็ตการเชื่อมต่อได้ ก็ไม่สามารถนำรหัสผ่านไปทายแบบออฟไลน์นอกเครือข่ายได้ และยังให้คุณสมบัติ Forward Secrecy (ต่อให้รู้รหัสผ่านในภายหลังก็ไม่สามารถถอดรหัสข้อมูลที่ดักเก็บไว้ในอดีตได้) สำหรับเครือข่ายสาธารณะหรือ Guest Wi-Fi ที่ไม่ใส่รหัสผ่าน WPA3 ยังมีมาตรฐาน Enhanced Open (OWE - Opportunistic Wireless Encryption) ที่ช่วยเข้ารหัสการสื่อสารระหว่างอุปกรณ์กับ AP แบบอัตโนมัติแทนการส่ง Plaintext ใน Open Wi-Fi แบบเก่า',
          'โหมดที่สองคือ WPA3-Enterprise (ใช้คู่กับ 802.1X และ AAA/RADIUS) ซึ่งจำเป็นสำหรับองค์กรทุกแห่งที่มีพนักงานหลายคน เพราะการใช้รหัสผ่านกลางร่วมกัน (PSK/SAE) มีปัญหาใหญ่คือเมื่อพนักงานลาออกต้องเปลี่ยนรหัสผ่านทุกเครื่องและระบุตัวตนผู้ใช้งานรายคนไม่ได้ ระบบ Enterprise จึงใช้โครงสร้าง 802.1X Port-based Network Access Control โดยให้อุปกรณ์ผู้ใช้ (Supplicant) ยืนยันตัวตนผ่าน AP (Authenticator) ไปยังเซิร์ฟเวอร์กลางคือ RADIUS (Authentication Server) ที่เชื่อมต่อกับฐานข้อมูลอย่าง Active Directory ทำให้ผู้ใช้แต่ละคนใช้บัญชีและรหัสผ่านหรือใบรับรองดิจิทัล (Certificate) เฉพาะของตนเอง เมื่อลาออกสามารถเพิกถอนสิทธิ์ได้ทันทีจากศูนย์กลาง นอกจากนี้ WPA3 ยังบังคับใช้ Management Frame Protection (MFP / IEEE 802.11w) เพื่อป้องกันการปลอมเฟรม Deauthentication/Disassociation ตัดการเชื่อมต่อผู้ใช้ และในโหมด WPA3-Enterprise 192-bit จะใช้ชุดเข้ารหัสระดับสูง (เช่น GCMP-256 และ HMAC-SHA384) สำหรับองค์กรที่ต้องการความมั่นคงสูงสุด',
          'ด้านโปรโตคอลการยืนยันตัวตนภายใต้ 802.1X บนเครือข่ายไร้สาย (EAP — Extensible Authentication Protocol) ผู้สอบ Security+ ต้องแยกความต่างระหว่างตัวเลือกหลักให้ชัดเจน: EAP-TLS ให้ความปลอดภัยสูงสุดเพราะบังคับใช้ Digital Certificates ทั้งฝั่ง Server และ Client (Mutual authentication) ไม่ต้องส่งรหัสผ่านและต้านทาน Phishing/Evil Twin ได้ดีมาก แต่ต้องมีโครงสร้างพื้นฐาน PKI เพื่อแจกจ่ายใบรับรองให้ครบทุกเครื่อง (มักทำผ่าน MDM), ส่วน PEAP (Protected EAP) และ EAP-TTLS ใช้ Certificate เฉพาะฝั่ง Server เพื่อสร้างอุโมงค์ TLS ก่อนแล้วจึงส่ง Username/Password (เช่น MSCHAPv2) หรือ Token ภายในอุโมงค์ ซึ่งติดตั้งง่ายกว่า EAP-TLS แต่ผู้ใช้ต้องระวังการกดยอมรับ Server Certificate ปลอมหากไม่ได้ตั้งค่า Trust store ไว้ล่วงหน้า ส่วนโปรโตคอลเก่าอย่าง LEAP ต้องห้ามใช้งานเด็ดขาด ด้าน Cryptographic protocols ปัจจุบันมาตรฐานขั้นต่ำคือ AES-CCMP (ใน WPA2/WPA3) และ GCMP-256 (ใน WPA3-Enterprise 192-bit) โดยห้ามเปิดใช้งาน TKIP อีกต่อไป'
        ],
        keyPointsTh: [
          'WPA3-Personal ใช้ SAE (Simultaneous Authentication of Equals) ป้องกัน Offline dictionary attack และรองรับ Forward Secrecy',
          'WPA3-Enterprise ใช้ 802.1X ร่วมกับ AAA/RADIUS เพื่อยืนยันตัวตนรายบุคคล แยกสิทธิ์ และเพิกถอนบัญชีได้จากศูนย์กลาง',
          'EAP-TLS ปลอดภัยสูงสุด (ใช้ Cert ทั้ง Client และ Server) ส่วน PEAP/EAP-TTLS ใช้ Cert เฉพาะฝั่ง Server เพื่อลดภาระจัดการ PKI ฝั่งลูกข่าย',
          'ใช้การเข้ารหัส AES-CCMP หรือ GCMP-256 (เลิกใช้ TKIP/RC4) และเปิด Management Frame Protection (802.11w) ป้องกัน Deauth attacks'
        ]
      },
      {
        id: 'sec-mobile-mdm-models',
        titleTh: '3. Mobile Solutions: MDM, รูปแบบการติดตั้ง (BYOD, COPE, CYOD) และ Connection Methods',
        contentTh: [
          'เมื่อพนักงานพกพาสมาร์ตโฟนและแท็บเล็ตเข้าถึงอีเมลและข้อมูลองค์กรจากทุกที่ แนวคิดการป้องกันจึงต้องขยายสู่ Mobile Device Management (MDM) หรือในภาพรวมเรียกว่า Unified Endpoint Management (UEM) ซึ่งเป็นแพลตฟอร์มควบคุมอุปกรณ์พกพาจากศูนย์กลาง MDM ทำหน้าที่ตั้งค่ามาตรฐาน (Configuration profiles เช่น Wi-Fi/RADIUS certs/VPN), บังคับใช้ Policy (Passcode, Encryption, Screen timeout), จัดการแอป (MAM - Mobile Application Management / App allowlisting), แยกพื้นที่ทำงานออกจากพื้นที่ส่วนตัว (Containerization / Work Profile), จำกัดขอบเขตพื้นที่ใช้งาน (Geofencing) และสั่ง Remote Lock หรือ Wipe ข้อมูลเมื่อเครื่องสูญหายหรือพนักงานพ้นสภาพ โดยแบ่งเป็น Full Wipe (ล้างเครื่องทั้งหมดกลับสู่ค่าโรงงาน) และ Selective Wipe (ลบเฉพาะ Container และข้อมูลขององค์กรโดยไม่กระทบภาพถ่ายหรือแอปส่วนตัว)',
          'องค์กรต้องเลือกรูปแบบการเป็นเจ้าของและการจัดหาอุปกรณ์ (Mobile Deployment Models) ให้สมดุลระหว่างต้นทุน ความปลอดภัย และความเป็นส่วนตัวของพนักงาน โดย SY0-701 เปรียบเทียบ 3 รูปแบบหลัก ได้แก่: (1) BYOD (Bring Your Own Device) — พนักงานนำอุปกรณ์ส่วนตัวมาใช้ทำงาน ข้อดีคือองค์กรประหยัดค่าจัดซื้อฮาร์ดแวร์และพนักงานพกเครื่องเดียว แต่ข้อเสียคือมีความเสี่ยงสูงจากความหลากหลายของ OS (Fragmentation) การที่พนักงานอาจ Jailbreak/Root เครื่อง และข้อจำกัดด้านความเป็นส่วนตัวที่องค์กรไม่ควรสั่ง Full Wipe ลบรูปครอบครัวของพนักงานได้ จึงต้องอาศัย Containerization, MAM, Selective Wipe และลงนาม Acceptable Use Policy (AUP)',
          '(2) COPE (Corporate-Owned, Personally Enabled) — องค์กรซื้อและเป็นเจ้าของอุปกรณ์อย่างสมบูรณ์ แล้วอนุญาตให้พนักงานใช้งานส่วนตัวได้ภายใต้ขอบเขตที่กำหนด ข้อดีคือองค์กรควบคุม Hardening, OS updates, MDM และสิทธิ์ Remote Full Wipe ได้เต็มที่ ลดความเสี่ยง Shadow IT และ Fragmentation ในขณะที่พนักงานยังพกเครื่องเดียวได้ แต่มีต้นทุนฮาร์ดแวร์และค่าดูแลรักษาสูงกว่า BYOD และยังต้องระบุขอบเขตการตรวจสอบ (Privacy expectation) ให้ชัดเจน, (3) CYOD (Choose Your Own Device) — พนักงานเลือกรุ่นอุปกรณ์จากรายการที่องค์กรรับรองและทดสอบด้านความปลอดภัยแล้ว (Approved list) โดยส่วนใหญ่บริษัทเป็นผู้จัดซื้อและถือกรรมสิทธิ์ คล้าย COPE แต่เพิ่มอิสระให้พนักงานเลือกสเปกที่ถนัดภายใต้กรอบมาตรฐานฮาร์ดแวร์ที่ทีม IT รองรับได้ง่าย ช่วยควบคุมเรื่องการซัพพอร์ตและ Security baseline ได้ดีกว่า BYOD มาก',
          'ด้านวิธีการเชื่อมต่อของอุปกรณ์พกพา (Connection Methods) แต่ละช่องทางมีความเสี่ยงและวิธีควบคุมต่างกัน: (1) Cellular (4G/5G) ใช้การเชื่อมต่อผ่านผู้ให้บริการโทรคมนาคมซึ่งมีการเข้ารหัสในตัวและปลอดภัยกว่า Wi-Fi สาธารณะทั่วไป แต่ยังมีภัยคุกคามอย่าง SIM Swapping (โจรยึดหมายเลขไปรับ OTP) หรือ IMSI Catcher (เสาปลอม/Stingray) จึงควรห้ามใช้ SMS-based MFA กับบัญชีสำคัญ ตั้ง SIM PIN และใช้ VPN/ZTNA เพิ่มอีกชั้น, (2) Wi-Fi ให้ความเร็วสูงและประหยัดค่า Data แต่ในที่สาธารณะเสี่ยงต่อ Evil Twin, Rogue AP และ Unencrypted sniffing จึงต้องบังคับใช้ Always-on VPN เมื่ออยู่นอกเครือข่ายองค์กร ปิด Auto-join เครือข่ายเปิด และเปิด Firewall บนเครื่อง และ (3) Bluetooth เป็นการสื่อสารระยะใกล้ (PAN) สำหรับหูฟังหรืออุปกรณ์ต่อพ่วง เสี่ยงต่อการโจมตีอย่าง Bluejacking (ส่งข้อความกวน), Bluesnarfing (ขโมยข้อมูล) และ Bluebugging (ควบคุมเครื่อง) การป้องกันคือปิด Bluetooth เมื่อไม่ใช้งาน ตั้งค่าเป็น Non-discoverable และตรวจสอบ PIN/Pairing อย่างระมัดระวัง'
        ],
        keyPointsTh: [
          'MDM/UEM จัดการ Policy, Certificate/VPN deployment, Containerization, Geofencing และสั่ง Selective Wipe หรือ Full Wipe ได้จากศูนย์กลาง',
          'BYOD ประหยัดต้นทุนแต่คุมเครื่องได้น้อยและมีประเด็น Privacy ต้องใช้ Containerization/Selective Wipe; COPE และ CYOD องค์กรเป็นเจ้าของเครื่องจึงบังคับ Baseline และควบคุมได้เข้มงวดกว่า',
          'Cellular ปลอดภัยกว่า Wi-Fi สาธารณะแต่เสี่ยง SIM Swap/IMSI Catcher; Wi-Fi สาธารณะต้องใช้ Always-on VPN; Bluetooth ต้องปิด Discoverable mode และปิดเมื่อไม่ใช้'
        ]
      }
    ],
    keyTerms: [
      {
        termEn: 'Site Survey & Heat Map',
        explanationTh: 'การสำรวจพื้นที่คลื่นวิทยุ (Predictive/Passive/Active) และแผนภาพแสดงระดับความเข้มสัญญาณ เพื่อวาง AP ให้ครอบคลุมและจำกัด Signal Bleed ไม่ให้ล้นออกนอกอาคาร'
      },
      {
        termEn: 'Simultaneous Authentication of Equals (WPA3-Personal)',
        acronym: 'SAE',
        explanationTh: 'กลไกการยืนยันตัวตนใน WPA3-Personal ที่ป้องกันการโจมตี Offline Dictionary Attack และให้ความปลอดภัยแบบ Forward Secrecy'
      },
      {
        termEn: 'WPA3-Enterprise & 802.1X/RADIUS',
        explanationTh: 'มาตรฐาน Wi-Fi องค์กรที่ยืนยันตัวตนผู้ใช้งานรายบุคคลผ่านโปรโตคอล 802.1X และเซิร์ฟเวอร์ AAA/RADIUS ร่วมกับ EAP และรองรับชุดเข้ารหัส 192-bit'
      },
      {
        termEn: 'EAP-TLS vs. PEAP',
        explanationTh: 'โปรโตคอลยืนยันตัวตนใน 802.1X โดย EAP-TLS ใช้ใบรับรองทั้งสองฝั่ง (ปลอดภัยสูงสุด) ส่วน PEAP ใช้ใบรับรองเฉพาะฝั่งเซิร์ฟเวอร์แล้วห่อหุ้มรหัสผ่านด้วย TLS'
      },
      {
        termEn: 'Management Frame Protection',
        acronym: 'MFP / 802.11w',
        explanationTh: 'กลไกเข้ารหัสและยืนยันเฟรมจัดการเครือข่ายไร้สาย (บังคับใน WPA3) เพื่อป้องกันการโจมตี Deauthentication และ Disassociation flood'
      },
      {
        termEn: 'Mobile Device Management',
        acronym: 'MDM',
        explanationTh: 'ระบบบริหารจัดการอุปกรณ์พกพาจากศูนย์กลางเพื่อบังคับ Policy, ติดตั้ง Config/Certificates, Containerize ข้อมูล และสั่ง Lock/Wipe เมื่อสูญหาย'
      },
      {
        termEn: 'BYOD vs. COPE vs. CYOD',
        explanationTh: 'รูปแบบการใช้อุปกรณ์พกพา: พนักงานเอาเครื่องส่วนตัวมาใช้ (BYOD), เครื่ององค์กรที่ให้ใช้ส่วนตัวได้ (COPE) และพนักงานเลือกรุ่นจากรายการที่องค์กรอนุมัติ (CYOD)'
      },
      {
        termEn: 'Selective Wipe vs. Full Wipe',
        explanationTh: 'การสั่งลบข้อมูลระยะไกลโดยลบเฉพาะ Container/แอปขององค์กร (Selective) เทียบกับการล้างข้อมูลทั้งหมดกลับสู่ค่าโรงงาน (Full Wipe)'
      }
    ],
    scenarios: [
      {
        titleTh: 'การยกระดับ Wi-Fi สำนักงานใหญ่และแก้ปัญหาสัญญาณรั่วไหลออกนอกอาคาร',
        contextTh:
          'สำนักงานทนายความแห่งหนึ่งใช้ Wi-Fi มาตรฐาน WPA2-PSK รหัสผ่านเดียวร่วมกันทั้งบริษัท ทีมตรวจสอบพบว่าสัญญาณ Wi-Fi แผ่ทะลุกระจกออกไปครอบคลุมร้านกาแฟฝั่งตรงข้ามถนน และมีทนายความที่ลาออกไปแล้วหลายเดือนยังนำรหัสผ่านเดิมมาเชื่อมต่อได้จากภายนอกอาคาร',
        decisionTh:
          'ทีม IT Security เริ่มทำ Passive และ Active Site Survey เพื่อสร้าง Heat Map พบจุด Signal bleed บริเวณหน้าต่างด้านหน้า จึงปรับลด Transmit Power ของ AP ฝั่งริมอาคารและเปลี่ยนเสาอากาศเป็นแบบทิศทาง จากนั้นเปลี่ยนระบบ Authentication จาก PSK เป็น WPA3-Enterprise ร่วมกับ 802.1X/RADIUS และ EAP-TLS โดยแจก Client Certificates ผ่าน MDM เพื่อให้เพิกถอนสิทธิ์พนักงานที่ลาออกได้ทันทีโดยไม่กระทบผู้อื่น',
        takeawayTh:
          'การป้องกัน Wireless ต้องทำคู่กันทั้งมิติด้าน RF กายภาพ (Site survey/Heat map/Transmit power) และมิติด้านโปรโตคอล (WPA3-Enterprise + RADIUS/EAP-TLS)'
      },
      {
        titleTh: 'การเลือกรูปแบบ Mobile Deployment และวิธีเชื่อมต่อสำหรับทีมตรวจสอบภาคสนาม',
        contextTh:
          'บริษัทประกันภัยมีทีมสำรวจอุบัติเหตุภาคสนามที่ต้องถ่ายภาพเอกสารลูกค้า (PII) และส่งเข้าระบบส่วนกลางจากนอกสถานที่ พนักงานบางส่วนร้องขอใช้มือถือส่วนตัว (BYOD) แต่ฝ่ายกฎหมายกังวลเรื่องการเก็บภาพ PII ปะปนในคลังภาพส่วนตัวและกังวลเรื่องการต่อ Wi-Fi ฟรีตามปั๊มน้ำมันขณะส่งข้อมูล',
        decisionTh:
          'องค์กรตัดสินใจใช้โมเดล COPE หรือ CYOD แทน BYOD เพื่อให้องค์กรเป็นเจ้าของอุปกรณ์และควบคุม Security baseline ได้เต็มที่ พร้อมติดตั้ง MDM เปิดใช้งาน Work Container และตั้ง Policy ให้บันทึกภาพถ่ายงานเฉพาะในแอปขององค์กร (ห้ามบันทึกลง Gallery ส่วนตัว) สำหรับการเชื่อมต่อนอกสถานที่ กำหนดให้ใช้ Cellular Data (4G/5G) เป็นหลักร่วมกับ Always-on VPN หากจำเป็นต้องใช้ Wi-Fi ห้ามต่อ Open Wi-Fi โดยไม่เปิด VPN และปิด Bluetooth เป็น Non-discoverable เมื่อไม่ใช้งาน',
        takeawayTh:
          'ข้อมูลที่มีความอ่อนไหวสูงควรใช้ COPE/CYOD เพื่อคุม MDM ได้เต็มที่ หากใช้ BYOD ต้องพึ่ง Containerization/Selective Wipe และต้องควบคุมความเสี่ยงตามชนิด Connection Method'
      }
    ],
    comparisonTables: [
      {
        captionTh: 'ตารางเปรียบเทียบมาตรฐานความปลอดภัยไร้สายและโปรโตคอลยืนยันตัวตน (Wireless Security)',
        headersTh: ['มาตรฐาน / โปรโตคอล', 'กลไกการเข้ารหัส / ยืนยันตัวตน', 'จุดเด่นด้านความปลอดภัย', 'ข้อจำกัด / การใช้งานที่เหมาะสม'],
        rowsTh: [
          ['WPA2-PSK', 'AES-CCMP + รหัสผ่านกลางร่วมกัน', 'รองรับอุปกรณ์เก่าได้กว้างขวาง', 'เสี่ยง Offline dictionary attack; แชร์รหัสผ่านร่วมกัน'],
          ['WPA3-Personal (SAE)', 'AES-CCMP + Dragonfly SAE', 'กัน Offline dictionary attack และมี Forward Secrecy', 'เหมาะกับบ้าน/สำนักงานขนาดเล็ก ไม่เหมาะกับองค์กรใหญ่ที่ต้องระบุรายบุคคล'],
          ['WPA3-Enterprise + EAP-TLS', 'AES-CCMP / GCMP-256 + 802.1X/RADIUS + Mutual Certs', 'ปลอดภัยสูงสุด ยืนยันตัวตนรายคน เพิกถอนสิทธิ์รายเครื่องได้', 'ต้องมี PKI และ MDM แจก Client Certificates'],
          ['PEAP / EAP-TTLS', 'Server Cert สร้าง TLS tunnel + User/Pass ภายใน', 'ติดตั้งง่ายกว่า EAP-TLS เพราะไม่ต้องแจก Client Cert', 'ต้องบังคับตรวจสอบ Server Cert บน Client ให้ถูกต้องเพื่อกัน Evil Twin'],
          ['Enhanced Open (OWE)', 'Opportunistic Wireless Encryption (No password)', 'เข้ารหัส Traffic บน Guest Wi-Fi โดยไม่ต้องใส่รหัสผ่าน', 'ไม่มีการยืนยันตัวตนผู้ใช้ เหมาะกับ Guest network แยกโซนเท่านั้น']
        ]
      },
      {
        captionTh: 'ตารางเปรียบเทียบรูปแบบ Mobile Deployment Models (BYOD vs. COPE vs. CYOD)',
        headersTh: ['มิติเปรียบเทียบ', 'BYOD (Bring Your Own Device)', 'COPE (Corporate-Owned, Personally Enabled)', 'CYOD (Choose Your Own Device)'],
        rowsTh: [
          ['ความเป็นเจ้าของอุปกรณ์', 'พนักงานเป็นเจ้าของเครื่องเอง', 'องค์กรซื้อและเป็นเจ้าของเครื่อง', 'องค์กรเป็นเจ้าของ (พนักงานเลือกรุ่นจากบัญชีที่อนุมัติ)'],
          ['ระดับการควบคุมของ MDM', 'จำกัด (เน้น Container/MAM เพื่อเคารพ Privacy)', 'สูงเต็มรูปแบบ (คุม OS, Hardware, Policy ได้ทั้งหมด)', 'สูง (คุมมาตรฐานได้ง่ายเพราะรุ่นอุปกรณ์ไม่หลากหลาย)'],
          ['การสั่ง Wipe เมื่อสูญหาย/ลาออก', 'Selective Wipe (ลบเฉพาะ Container องค์กร)', 'Full Wipe หรือ Selective Wipe ได้ตามนโยบาย', 'Full Wipe หรือ Selective Wipe ได้ตามนโยบาย'],
          ['ความท้าทายหลัก', 'OS Fragmentation, Privacy, Shadow IT, Jailbreak', 'ต้นทุนฮาร์ดแวร์สูงและต้องกำหนดนโยบายการใช้ส่วนตัว', 'ต้นทุนสูงกว่า BYOD และตัวเลือกรุ่นอาจน้อยกว่าความต้องการ']
        ]
      }
    ],
    applicationsAndLimitations: {
      applicationsTh: [
        'ใช้ออกแบบเครือข่าย Wi-Fi ระดับองค์กรที่ปลอดภัยทั้งในเชิงกายภาพ (ลดพื้นที่ล้นของคลื่นวิทยุด้วย Site Survey และ Heat Map) และเชิงตรรกะ (แยก Guest VLAN, 802.1X/RADIUS, WPA3-Enterprise)',
        'ใช้สร้างกรอบนโยบาย Mobile Security และเลือกโมเดลการจัดหาอุปกรณ์ (BYOD/COPE/CYOD) ที่สอดคล้องกับระดับความลับของข้อมูลองค์กรและข้อกฎหมายคุ้มครองความเป็นส่วนตัว',
        'ใช้กำหนดมาตรฐานการเชื่อมต่อระยะไกลสำหรับพนักงานทำงานนอกสถานที่ (Hybrid/Remote work) ด้วยการผสมผสาน Always-on VPN, Cellular security และ Bluetooth hardening'
      ],
      limitationsTh: [
        'WPA3 และ Management Frame Protection (802.11w) อาจไม่รองรับบนอุปกรณ์ IoT หรือเครื่องสแกนบาร์โค้ดรุ่นเก่า ทำให้หลายองค์กรต้องตั้ง SSID แยก VLAN เฉพาะสำหรับอุปกรณ์เก่าเพื่อไม่ให้ทั้งองค์กรต้องลดระดับกลับไปใช้ WPA2',
        'การนำ MDM เข้าไปควบคุมเครื่อง BYOD อย่างเข้มงวดเกินไปอาจกระทบความเป็นส่วนตัวและก่อให้เกิดแรงต้านจากพนักงานจนหันไปใช้ช่องทางนอกระบบ (Shadow IT)',
        'แม้เครือข่าย Cellular 5G จะมีการเข้ารหัสในตัว แต่อุปกรณ์มือถือยังตกเป็นเป้าหมายของ Social Engineering, Phishing ผ่าน SMS (Smishing) และ SIM Swapping ได้หากขาดการอบรมและ MFA ที่ไม่พึ่ง SMS'
      ]
    },
    commonMisconceptions: [
      {
        misconceptionTh: 'คิดว่าการซ่อนชื่อเครือข่าย (Disable SSID Broadcast) และการทำ MAC Address Filtering สามารถแทนที่ WPA3 หรือ 802.1X ได้',
        clarificationTh:
          'ทั้งการซ่อน SSID และ MAC Filtering เป็นเพียง Security through Obscurity เพราะผู้โจมตีใช้ Sniffer ดักฟังแพ็กเก็ต Probe request หรือ Beacon ก็เห็น SSID และสามารถ Spoof MAC address ของเครื่องที่ได้รับอนุญาตได้ภายในไม่กี่วินาที จึงต้องใช้ WPA3 + 802.1X/RADIUS เป็นตัวควบคุมหลัก'
      },
      {
        misconceptionTh: 'สับสนระหว่าง BYOD และ CYOD โดยคิดว่า CYOD คือการเอาเครื่องส่วนตัวรุ่นไหนก็ได้มาใช้ทำงาน',
        clarificationTh:
          'BYOD คือพนักงานเอาอุปกรณ์ส่วนตัวมาใช้ แต่ใน CYOD พนักงานเพียง "เลือกรุ่น" จากรายการ Approved list ที่องค์กรกำหนดและส่วนใหญ่บริษัทเป็นผู้จัดซื้อและถือกรรมสิทธิ์ จึงควบคุม Baseline และซัพพอร์ตได้ดีกว่า BYOD'
      },
      {
        misconceptionTh: 'เข้าใจว่าในระบบ BYOD ฝ่าย IT ควรสั่ง Full Factory Wipe ทันทีเมื่อพนักงานลาออกเพื่อความมั่นใจว่าไม่มีข้อมูลหลุด',
        clarificationTh:
          'การสั่ง Full Wipe บนเครื่องส่วนตัวของพนักงานจะลบข้อมูลส่วนตัว ภาพถ่าย และบัญชีส่วนบุคคลทั้งหมด ซึ่งอาจผิดกฎหมายแรงงานหรือกฎหมายความเป็นส่วนตัว ดังนั้นใน BYOD ควรใช้ Containerization และสั่ง Selective Wipe เฉพาะข้อมูลองค์กรเท่านั้น'
      }
    ],
    scenarioAnalysisGuide: {
      approachStepsTh: [
        'ขั้นที่ 1 แยกให้ออกก่อนว่าโจทย์ถามเรื่อง "ตำแหน่งและคลื่นวิทยุ Wi-Fi" (Site survey, Heat map, Signal bleed, Transmit power) หรือเรื่อง "การเข้ารหัส/ยืนยันตัวตน Wi-Fi" (WPA3, SAE, 802.1X/RADIUS, EAP)',
        'ขั้นที่ 2 หากโจทย์กล่าวถึงการเปลี่ยนรหัสผ่าน Wi-Fi เมื่อมีพนักงานลาออก หรือระบุตัวตนผู้ใช้งานรายบุคคลบน Wi-Fi ให้ตัด PSK/Personal ทิ้ง แล้วเลือก WPA3-Enterprise + 802.1X/RADIUS ทันที',
        'ขั้นที่ 3 หากโจทย์กล่าวถึง Mobile Deployment ให้ดูคำสำคัญเรื่อง "ใครเป็นเจ้าของเครื่อง" และ "Privacy/Cost": งบจำกัดและใช้เครื่องส่วนตัว = BYOD + Containerization/Selective wipe; บริษัทซื้อและอนุญาตใช้ส่วนตัว = COPE; เลือกจากรุ่นที่บริษัทอนุมัติ = CYOD',
        'ขั้นที่ 4 หากโจทย์เน้นความเสี่ยงจากช่องทางการเชื่อมต่อมือถือ ให้เช็กว่าอยู่ในที่สาธารณะ (Wi-Fi -> Always-on VPN), ใช้เครือข่ายมือถือ (Cellular -> ระวัง SIM swap/IMSI catcher) หรืออุปกรณ์ใกล้ตัว (Bluetooth -> ปิด Discoverable, ระวัง Bluesnarfing/Bluebugging)'
      ],
      examSignalKeywords: [
        { keywordEn: 'signal extending into parking lot / coverage gaps', meaningTh: 'ชี้ไปยัง Wireless Site Survey, Heat Maps และการปรับลด Transmit Power' },
        { keywordEn: 'prevent offline dictionary attack on PSK / forward secrecy', meaningTh: 'ชี้ไปยัง WPA3-Personal (SAE - Simultaneous Authentication of Equals)' },
        { keywordEn: 'individual authentication / revoke access when employee leaves', meaningTh: 'ชี้ไปยัง WPA3-Enterprise (802.1X + AAA/RADIUS + EAP-TLS)' },
        { keywordEn: 'mutual certificate authentication for Wi-Fi', meaningTh: 'ชี้ไปยัง EAP-TLS' },
        { keywordEn: 'separate work data from personal photos / selective wipe', meaningTh: 'ชี้ไปยัง MDM Containerization ในโมเดล BYOD' },
        { keywordEn: 'approved hardware list / corporate-owned personal use', meaningTh: 'ชี้ไปยัง CYOD (เลือกรุ่นจากลิสต์อนุมัติ) และ COPE (บริษัทซื้อให้ใช้ส่วนตัวได้)' }
      ]
    },
    summaryTh: [
      'ความปลอดภัยของระบบไร้สายเริ่มต้นตั้งแต่การออกแบบทางกายภาพด้วย Wireless Site Surveys (Predictive, Passive, Active) และ Heat Maps เพื่อขจัดจุดอับสัญญาณและปรับกำลังส่งไม่ให้ Signal Bleed ออกนอกพื้นที่ควบคุมขององค์กร',
      'ในระดับโปรโตคอลควรยกระดับสู่ WPA3: ใช้ SAE สำหรับโหมด Personal เพื่อป้องกัน Offline dictionary attack, ใช้ Enhanced Open (OWE) สำหรับ Guest Wi-Fi และใช้ WPA3-Enterprise (802.1X + AAA/RADIUS + EAP-TLS/PEAP) สำหรับองค์กรเพื่อยืนยันตัวตนรายบุคคลร่วมกับการเข้ารหัส AES-CCMP/GCMP และ MFP (802.11w)',
      'สำหรับ Mobile Solutions ต้องบริหารจัดการผ่าน MDM/UEM โดยเลือกรูปแบบ BYOD (ประหยัดแต่ต้องใช้ Containerization และ Selective Wipe), COPE หรือ CYOD ให้สอดคล้องกับความเสี่ยงด้านความปลอดภัยและความเป็นส่วนตัว พร้อมควบคุมความเสี่ยงของ Cellular, Wi-Fi (Always-on VPN) และ Bluetooth อย่างเหมาะสม'
    ],
    knowledgeChecks: [
      {
        id: 'L4-02-KC1',
        questionTh:
          'ระหว่างการเดินตรวจสอบพื้นที่รอบอาคารสำนักงาน ทีมความปลอดภัยพบว่าพนักงานจากบริษัทข้างเคียงสามารถมองเห็น SSID และเชื่อมต่อสัญญาณ Wi-Fi ขององค์กรได้จากลานจอดรถด้านนอก ทีมวิศวกรควรดำเนินการขั้นตอนใดเพื่อวิเคราะห์และลดขอบเขตสัญญาณให้เหมาะสมที่สุด?',
        choices: [
          { id: 'a', textTh: 'เปิดใช้งาน MAC Address Filtering บน AP และปิดการ Broadcast SSID' },
          { id: 'b', textTh: 'เปลี่ยนโปรโตคอลการเข้ารหัสจาก AES-CCMP กลับไปใช้ TKIP เพื่อลดระยะคลื่นวิทยุ' },
          { id: 'c', textTh: 'ทำ Wireless Site Survey เพื่อสร้าง Heat Map ของความเข้มสัญญาณ แล้วปรับลด Transmit Power หรือปรับทิศทางเสาอากาศของ AP ริมอาคาร' },
          { id: 'd', textTh: 'สั่ง Selective Wipe บนอุปกรณ์พกพาของพนักงานทุกคนในอาคาร' }
        ],
        correctChoiceId: 'c',
        explanationTh:
          'คำตอบที่ถูกต้องคือ c เพราะการทำ Site Survey และสร้าง Heat Map ช่วยให้เห็นพื้นที่ที่สัญญาณล้น (Signal bleed) ได้อย่างแม่นยำ เพื่อปรับลดกำลังส่ง (Transmit Power) หรือเปลี่ยนเป็นเสาอากาศแบบกำหนดทิศทางให้คลื่นอยู่ในอาคาร ส่วนข้อ a เป็นเพียง Security through obscurity ที่เจาะได้ง่าย ข้อ b ลดความปลอดภัยการเข้ารหัสและไม่ลดระยะสัญญาณ และข้อ d ไม่เกี่ยวข้องกับการแก้ปัญหา Signal bleed'
      },
      {
        id: 'L4-02-KC2',
        questionTh:
          'บริษัทเทคโนโลยีขนาดใหญ่ต้องการยกเลิกการใช้รหัสผ่านกลาง (PSK) บนเครือข่าย Wi-Fi ภายใน เนื่องจากเกิดความเสี่ยงเมื่อมีพนักงานลาออก และต้องการการยืนยันตัวตนที่มีความปลอดภัยสูงสุดโดยใช้ Digital Certificates ทั้งฝั่งเซิร์ฟเวอร์และอุปกรณ์ลูกข่าย สถาปัตยกรรมใดตอบโจทย์ที่สุด?',
        choices: [
          { id: 'a', textTh: 'WPA3-Enterprise ร่วมกับ 802.1X, AAA/RADIUS และโปรโตคอล EAP-TLS' },
          { id: 'b', textTh: 'WPA3-Personal ที่ใช้กลไก SAE และเปิดใช้งาน Enhanced Open (OWE)' },
          { id: 'c', textTh: 'WPA2-PSK ร่วมกับโปรโตคอล LEAP' },
          { id: 'd', textTh: 'PEAP ร่วมกับรหัสผ่านกลางที่แชร์กันทั้งแผนก' }
        ],
        correctChoiceId: 'a',
        explanationTh:
          'คำตอบที่ถูกต้องคือ a เพราะโจทย์ระบุชัดเจนว่าต้องการยกเลิก PSK ยืนยันตัวตนรายบุคคล และใช้ Certificate ทั้งฝั่งเซิร์ฟเวอร์และลูกข่าย (Mutual authentication) ซึ่งตรงกับ WPA3-Enterprise + 802.1X/RADIUS + EAP-TLS โดยตรง ส่วนข้อ b ยังเป็นโหมด Personal/Open ไม่มี RADIUS รายบุคคล ข้อ c ใช้มาตรฐานล้าสมัยไม่ปลอดภัย (LEAP/PSK) และข้อ d PEAP ใช้ Cert เฉพาะฝั่งเซิร์ฟเวอร์และไม่ควรแชร์รหัสผ่านร่วมกัน'
      },
      {
        id: 'L4-02-KC3',
        questionTh:
          'ผู้บริหารต้องการอนุญาตให้พนักงานพกพาอุปกรณ์เพียงเครื่องเดียวทั้งสำหรับงานและเรื่องส่วนตัว แต่ทีมความปลอดภัยยืนยันว่าองค์กรต้องเป็นเจ้าของฮาร์ดแวร์ เพื่อบังคับติดตั้ง Security Baseline ได้เต็มที่และสั่งลบข้อมูลทั้งเครื่องได้หากเครื่องถูกขโมย โดยพนักงานสามารถเลือกรุ่นสมาร์ตโฟนได้จาก 3 รุ่นที่ทีม IT ทดสอบผ่านแล้ว โมเดลใดตรงกับสถานการณ์นี้?',
        choices: [
          { id: 'a', textTh: 'BYOD (Bring Your Own Device)' },
          { id: 'b', textTh: 'VDI (Virtual Desktop Infrastructure) Only' },
          { id: 'c', textTh: 'Enhanced Open (OWE)' },
          { id: 'd', textTh: 'CYOD (Choose Your Own Device) ภายใต้กรรมสิทธิ์องค์กร (คล้าย COPE)' }
        ],
        correctChoiceId: 'd',
        explanationTh:
          'คำตอบที่ถูกต้องคือ d เพราะองค์กรเป็นเจ้าของฮาร์ดแวร์ อนุญาตให้ใช้ส่วนตัวได้ และให้พนักงานเลือกรุ่นอุปกรณ์จากรายการที่ทีม IT ทดสอบอนุมัติแล้ว (Approved list) ซึ่งคือหัวใจของ CYOD (Choose Your Own Device) ที่ทำงานควบคู่กับสิทธิ์ควบคุมแบบ COPE ส่วนข้อ a พนักงานซื้อเครื่องเองและควบคุมจำกัด ข้อ b และ c ไม่ใช่ Mobile deployment models'
      },
      {
        id: 'L4-02-KC4',
        questionTh:
          'วิศวกรตรวจสอบพบความเสี่ยงด้านการเชื่อมต่อ Bluetooth บนแท็บเล็ตของทีมแพทย์ในโรงพยาบาล โดยมีผู้ไม่หวังดีสามารถเชื่อมต่ออุปกรณ์ใกล้เคียงเพื่อแอบดึงรายชื่อผู้ติดต่อและประวัติการโทรออกจากเครื่องที่เปิดโหมดค้นหาอัตโนมัติทิ้งไว้ การโจมตีลักษณะนี้เรียกว่าอะไร และควรป้องกันอย่างไร?',
        choices: [
          { id: 'a', textTh: 'Bluejacking; ควรเปลี่ยนไปใช้ Cellular 5G แทน' },
          { id: 'b', textTh: 'Bluesnarfing; ควรตั้งค่า Bluetooth เป็น Non-discoverable และปิด Bluetooth เมื่อไม่ได้ใช้งานผ่านนโยบาย MDM' },
          { id: 'c', textTh: 'Evil Twin Attack; ควรเปลี่ยนไปใช้ WPA3-Personal' },
          { id: 'd', textTh: 'SIM Swapping; ควรเปิด Always-on VPN บนเครือข่าย Wi-Fi' }
        ],
        correctChoiceId: 'b',
        explanationTh:
          'คำตอบที่ถูกต้องคือ b เพราะการขโมยข้อมูล (เช่น รายชื่อผู้ติดต่อ อีเมล หรือไฟล์) ผ่านช่องโหว่ Bluetooth เรียกว่า Bluesnarfing (ส่วน Bluejacking เป็นเพียงการส่งข้อความโฆษณา/รบกวน และการเข้ายึดควบคุมเครื่องเรียกว่า Bluebugging) การป้องกันคือปิด Bluetooth เมื่อไม่ใช้และตั้งค่าเป็น Non-discoverable mode ส่วนข้อ c และ d เป็นการโจมตี Wi-Fi และ Cellular ตามลำดับ'
      }
    ],
    references: [
      {
        title: 'CompTIA Security+ (SY0-701) Exam Objectives Version 5.0 — Objective 4.1',
        noteTh: 'Wireless devices (Site surveys, Heat maps, WPA3, AAA/RADIUS) และ Mobile solutions (MDM, BYOD/COPE/CYOD, Cellular/Wi-Fi/Bluetooth)'
      },
      {
        title: 'NIST SP 800-153 — Guidelines for Securing Wireless Local Area Networks (WLANs)',
        noteTh: 'แนวทางการออกแบบสถาปัตยกรรม WLAN 802.1X และ Site Surveys'
      },
      {
        title: 'NIST SP 800-124 Rev. 2 — Guidelines for Managing the Security of Mobile Devices in the Enterprise',
        noteTh: 'แนวทางการใช้งาน MDM, Deployment Models และการควบคุมความเสี่ยงอุปกรณ์พกพา'
      }
    ],
    relatedLessonIds: ['L1-02', 'L2-07', 'L3-04', 'L4-01', 'L4-08', 'L5-06']
  },
  {
    id: 'L4-03',
    examCode: 'SY0-701',
    domainId: 'D4',
    order: 26,
    titleTh: 'การจัดการสินทรัพย์ฮาร์ดแวร์ ซอฟต์แวร์ และข้อมูล',
    titleEn: 'Asset Management & Sanitization',
    estimatedMinutes: 40,
    learningObjectives: [
      'อธิบายบทบาทด้านความปลอดภัยตลอดวงจรชีวิตสินทรัพย์ ตั้งแต่ขั้นตอนจัดหา (Acquisition/Procurement) จนถึงการติดตามตรวจสอบ (Inventory & Enumeration)',
      'กำหนดความรับผิดชอบของสินทรัพย์และข้อมูลผ่าน Ownership และ Classification เพื่อป้องกันสินทรัพย์กำพร้า (Orphaned Assets)',
      'เลือกเทคนิคการปลดระวางและการทำลายข้อมูลอย่างปลอดภัย (Sanitization: Clear/Purge และ Destruction) ให้ถูกต้องตามประเภทสื่อบันทึกข้อมูล ควบคู่กับ Data Retention, Legal Hold และ Certificate of Destruction'
    ],
    objectiveIds: ['4.2'],
    prerequisites: [
      'L1-04 กระบวนการ Change Management และผลกระทบด้านความปลอดภัย',
      'L2-02 ช่องทางภัยคุกคามทางเทคนิคและ Supply Chain Attack Surfaces',
      'L3-05 การจำแนกข้อมูล ระดับชั้นความลับ และสถานะของข้อมูล',
      'L3-06 กลยุทธ์ปกป้องข้อมูล: Encryption, Tokenization, Masking และ Data Sovereignty'
    ],
    sections: [
      {
        id: 'sec-asset-acquisition-assignment',
        titleTh: '1. การจัดหา (Acquisition/Procurement) และการมอบหมายความรับผิดชอบ (Assignment/Accounting)',
        contentTh: [
          'ประโยคคลาสสิกในโลก Cybersecurity คือ "You cannot protect what you do not know you own" (คุณไม่สามารถปกป้องสิ่งที่คุณไม่รู้ด้วยซ้ำว่ามีอยู่) การจัดการสินทรัพย์ (Asset Management) ทั้งฮาร์ดแวร์ ซอฟต์แวร์ บริการคลาวด์ และข้อมูล จึงเป็นกระดูกสันหลังของ Security Operations ตามกรอบ SY0-701 Objective 4.2 โดยเริ่มต้นตั้งแต่วินาทีแรกที่องค์กรตัดสินใจจัดซื้อในขั้นตอน Acquisition/Procurement Process เหตุใดทีมความปลอดภัยจึงต้องมีส่วนร่วมในกระบวนการจัดซื้อ คำตอบคือหากปล่อยให้แต่ละแผนกซื้ออุปกรณ์หรือสมัครซอฟต์แวร์เองโดยไม่ผ่านการกลั่นกรอง จะเกิดความเสี่ยงด้าน Supply Chain (เช่น ได้ฮาร์ดแวร์ปลอมแปลงหรือมี Backdoor), ซอฟต์แวร์ที่ไม่รองรับการเข้ารหัสหรือ SSO/MFA, ระบบที่ใกล้หมดอายุสนับสนุน (End-of-Life) หรือเกิดปัญหา Shadow IT',
          'ในการทำ Procurement ที่ปลอดภัย ทีมความปลอดภัยจะกำหนด Security Requirements ลงในเอกสารจัดซื้อ (RFP/SOW) ตรวจสอบความน่าเชื่อถือของผู้ขาย (Vendor vetting) บังคับซื้อเฉพาะจาก Authorized Distributors เพื่อลดความเสี่ยงฮาร์ดแวร์ดัดแปลง ตรวจสอบการรองรับมาตรฐานฮาร์ดแวร์ (เช่น TPM 2.0) และใช้กระบวนการอนุมัติกลางก่อนชำระเงินหรือนำอุปกรณ์เข้าเครือข่าย จากนั้นเมื่อสินทรัพย์เข้าสู่องค์กรแล้วจะเข้าสู่ขั้นตอน Assignment/Accounting ซึ่งต้องกำหนดสองสิ่งให้ชัดเจนเสมอคือ Ownership และ Classification',
          'Ownership (การกำหนดผู้รับผิดชอบ/เจ้าของสินทรัพย์) คือการระบุตัวบุคคลหรือตำแหน่งให้ชัดเจนว่าใครเป็น System Owner, Data Owner และ Custodian (ผู้ดูแลทางเทคนิค) สำหรับทุกเซิร์ฟเวอร์ ฐานข้อมูล โดเมน หรือชุดข้อมูล เหตุใด Ownership จึงสำคัญมาก เพราะเมื่อพบช่องโหว่ร้ายแรงหรือเกิดเหตุ Data Breach ต้องมีเจ้าของที่ตัดสินใจได้ทันทีว่าจะปิดระบบเพื่อแพตช์เมื่อไร และใครมีสิทธิ์อนุมัติการเข้าถึงข้อมูลนั้น หากไม่มี Ownership สินทรัพย์จะกลายเป็น "Orphaned Asset" (สินทรัพย์กำพร้า) ที่ไม่มีใครอัปเดตแพตช์และถูกผู้โจมตีเจาะได้ง่าย ส่วน Classification (การจำแนกชั้นความสำคัญ/ความลับ) คือการติดป้ายสินทรัพย์และข้อมูลตามระดับความสำคัญ (เช่น Critical/High/Medium/Low หรือระดับ Restricted/Confidential) และติด Asset Tags (Barcode/RFID/Serial Number) ผูกเข้ากับฐานข้อมูลกลาง CMDB (Configuration Management Database)'
        ],
        keyPointsTh: [
          'Acquisition/Procurement Process ต้องผนวก Security Requirements และ Supply Chain Verification ก่อนจัดซื้อเพื่อกันของปลอมและ Shadow IT',
          'Ownership ระบุผู้มีอำนาจตัดสินใจและรับผิดชอบต่อสินทรัพย์ (ป้องกัน Orphaned Assets ที่ถูกละเลยการแพตช์)',
          'Classification จัดระดับความสำคัญของสินทรัพย์และข้อมูลเพื่อกำหนดความเข้มงวดของมาตรการป้องกันและลำดับการกู้คืนให้เหมาะสม'
        ]
      },
      {
        id: 'sec-asset-monitoring-tracking',
        titleTh: '2. การเฝ้าติดตามและตรวจนับสินทรัพย์ (Monitoring / Asset Tracking): Inventory เทียบกับ Enumeration',
        contentTh: [
          'ความผิดพลาดที่พบบ่อยในองค์กรคือ การสร้างตาราง Excel รายการคอมพิวเตอร์ในเดือนมกราคมแล้วไม่ได้อัปเดตอีกเลย ทำให้ไม่รู้ว่ามีพนักงานเอาเราเตอร์ส่วนตัวมาเสียบ หรือทีมพัฒนาเปิด Virtual Machine ทิ้งไว้บนคลาวด์โดยไม่ได้ลงทะเบียน ขั้นตอน Monitoring / Asset Tracking จึงต้องทำงานร่วมกันระหว่างสองแนวคิดที่แตกต่างกันแต่เสริมกันคือ Inventory และ Enumeration',
          'Inventory (การจัดทำทะเบียนสินทรัพย์อย่างเป็นทางการ) คือฐานข้อมูลเชิงบริหาร (เช่น CMDB, Software Inventory, Software Bill of Materials - SBOM และ License Repository) ที่บันทึกว่าองค์กร "ควรจะมี" สินทรัพย์ใดอยู่บ้าง ใครเป็นเจ้าของ ซื้อมาเมื่อไร ใช้ซอฟต์แวร์เวอร์ชันใด และจะหมดอายุสนับสนุน (End-of-Life/End-of-Service) เมื่อใด ความสำคัญของ Inventory คือช่วยวางแผนงบประมาณทดแทนระบบเก่า ตรวจสอบการละเมิดลิขสิทธิ์ซอฟต์แวร์ และติดตามส่วนประกอบโอเพนซอร์สที่มีช่องโหว่',
          'ในขณะที่ Enumeration (การสำรวจและระบุตัวตนสินทรัพย์ที่ทำงานอยู่จริง) คือกระบวนการทางเทคนิคที่ตรวจสอบเครือข่าย คลาวด์ และระบบปฏิบัติการอย่างต่อเนื่อง (เช่น Active Network Discovery, Passive Traffic Listening, Agent-based Telemetry และ Cloud API Discovery) เพื่อค้นหาว่าในวินาทีนี้มีอุปกรณ์ พอร์ต บัญชี หรือซอฟต์แวร์ใด "กำลังเชื่อมต่อหรือรันอยู่จริง" จากนั้นจึงนำผลจาก Enumeration ไปเปรียบเทียบ (Reconcile) กับ Inventory อย่างสม่ำเสมอ ความแตกต่างนี้เองที่เป็นหัวใจของการตรวจจับภัยคุกคาม: หาก Enumeration พบ IP address หรือ VM ที่ไม่มีชื่อใน Inventory ก็จะแจ้งเตือนได้ทันทีว่าเป็น Rogue Device หรือ Shadow IT เพื่อเข้าตรวจสอบและจัดการก่อนถูกใช้เป็นจุดตั้งต้นโจมตี'
        ],
        keyPointsTh: [
          'Inventory คือทะเบียนสินทรัพย์อย่างเป็นทางการ (CMDB, SBOM, License, EOL tracking) ที่ระบุสิ่งที่องค์กรรับรู้และเป็นเจ้าของ',
          'Enumeration คือการสแกน/ดักฟังเพื่อระบุสินทรัพย์ที่เชื่อมต่อและรันอยู่จริงบนเครือข่ายและคลาวด์',
          'การเปรียบเทียบผล Enumeration กับ Inventory อย่างต่อเนื่องช่วยตรวจจับ Rogue Devices, Unauthorized Software และ Shadow IT ได้รวดเร็ว'
        ]
      },
      {
        id: 'sec-asset-disposal-sanitization',
        titleTh: '3. การปลดระวางอย่างปลอดภัย (Disposal/Decommissioning): Data Retention, Sanitization, Destruction และ Certification',
        contentTh: [
          'เมื่อฮาร์ดแวร์หมดอายุการใช้งาน เช่าครบสัญญา หรือเปลี่ยนถ่ายข้อมูลไประบบใหม่ ขั้นตอนที่มีความเสี่ยงสูงสุดคือ Disposal / Decommissioning เพราะการลบไฟล์ธรรมดา (Delete) หรือสั่ง Quick Format ไม่ได้ลบเนื้อหาข้อมูลออกจากสื่อบันทึก เพียงแค่ลบตัวชี้ (File pointer) ในระบบไฟล์เท่านั้น ทำให้ผู้ไม่หวังดีที่ซื้ออุปกรณ์มือสองหรือเก็บฮาร์ดดิสก์จากถังขยะอิเล็กทรอนิกส์สามารถกู้ข้อมูลลับออกมาได้ทั้งหมด อย่างไรก็ตาม ก่อนจะลงมือทำลายหรือล้างข้อมูลใด ๆ ต้องตรวจสอบข้อกำหนดแรกเสมอคือ Data Retention (การเก็บรักษาข้อมูลตามระยะเวลาที่กฎหมายหรือนโยบายกำหนด) และตรวจสอบว่าข้อมูลบนสื่อนั้นติดสถานะ Legal Hold (คำสั่งอายัดข้อมูลเพื่อประกอบคดีความหรือการสืบสวน) อยู่หรือไม่ หากติด Legal Hold ห้ามลบหรือทำลายข้อมูลเด็ดขาดแม้จะครบกำหนดอายุการจัดเก็บแล้วก็ตาม',
          'เมื่อตรวจสอบแล้วว่าพ้นระยะ Retention และไม่ติด Legal Hold จึงเลือกวิธีลบข้อมูลอย่างถูกวิธีตามมาตรฐาน NIST SP 800-88 โดยแยกความต่างระหว่าง Sanitization (Clear และ Purge) กับ Destruction (Destroy) ดังนี้: ระดับแรกคือ Clear เป็นการใช้เทคนิคทางตรรกะ (Logical overwriting เช่น เขียนทับด้วยเลขศูนย์หรือค่าสุ่ม หรือการ Reset ค่าโรงงานบนสื่อทั่วไป) เพื่อป้องกันการกู้ข้อมูลด้วยซอฟต์แวร์กู้ไฟล์ทั่วไป เหมาะสำหรับการนำสื่อกลับไปใช้งานซ้ำภายในองค์กรในระดับความลับเดิม แต่ไม่พอหากจะทิ้งหรือส่งต่อภายนอก',
          'ระดับที่สองคือ Purge ซึ่งทำให้ไม่สามารถกู้ข้อมูลได้แม้ใช้เครื่องมือวิเคราะห์ระดับห้องปฏิบัติการขั้นสูง เทคนิคหลักของ Purge ได้แก่ (1) Cryptographic Erase (Crypto-shredding) คือการทำลายหรือเขียนทับกุญแจเข้ารหัสที่ใช้เข้ารหัสข้อมูลบนสื่อ (เช่น Self-Encrypting Drive - SED หรือพื้นที่ Cloud Storage) ทำให้ข้อมูลที่เหลือกลายเป็นขยะสุ่มที่ถอดรหัสไม่ได้ตลอดกาล รวดเร็วและเหมาะอย่างยิ่งสำหรับ SSD และระบบคลาวด์, (2) Degaussing คือการใช้สนามแม่เหล็กกำลังสูงลบการจัดเรียงตัวของแถบแม่เหล็กอย่างถาวร ใช้ได้ผลดีมากกับ HDD จานหมุนและเทปแม่เหล็ก (Magnetic tape) **ข้อควรจำสำคัญในการสอบ: ห้ามใช้ Degaussing กับ SSD หรือ Flash Drive/NVMe เด็ดขาด เพราะ SSD เก็บข้อมูลด้วยประจุไฟฟ้าในชิป NAND Flash ไม่ได้ใช้แม่เหล็ก จึงไม่ลบข้อมูลบน SSD เลย!** และ (3) คำสั่ง Firmware Secure Erase / Block Erase ที่ล้างเซลล์หน่วยความจำของ SSD อย่างทั่วถึงรวมถึงพื้นที่ Wear-leveling',
          'ระดับที่สามคือ Destruction (Destroy — การทำลายทางกายภาพ) ซึ่งจำเป็นอย่างยิ่งเมื่อสื่อบันทึกเสียหายจนไม่สามารถสั่ง Clear/Purge ทางซอฟต์แวร์ได้ หรือเมื่อข้อมูลมีระดับชั้นความลับสูงสุด (Restricted) ที่ไม่อนุญาตให้นำสื่อออกนอกการควบคุมโดยสมบูรณ์ วิธีทำลายทางกายภาพได้แก่ Shredding (เข้าเครื่องย่อยเป็นชิ้นเล็กตามมาตรฐานขนาดเศษ), Pulverizing (บดละเอียดเป็นผง), Disintegration, Melting (หลอมละลาย), Incineration (เผาทำลาย), Crushing/Drilling (บีบอัดหรือเจาะทำลายแพลตเตอร์และชิป Flash โดยต้องทำลายชิปหน่วยความจำทุกตัวบน SSD) รวมถึง Pulping (ปั่นเป็นเยื่อกระดาษ) สำหรับเอกสารลับ และสุดท้ายทุกกระบวนการปลดระวางต้องออกเอกสาร Certification (Certificate of Destruction หรือ Certificate of Sanitization) ที่ระบุ Serial Number ของสื่อ วันที่ วิธีการที่ใช้ พยานผู้ตรวจสอบ และ Chain of Custody เพื่อเป็นหลักฐานยืนยันการปฏิบัติตามกฎหมาย (Audit Compliance) หากใช้บริษัทภายนอกรับทำลาย E-waste ต้องมีการลงนามสัญญาและติดตามตรวจสอบจนได้ใบรับรองครบถ้วน'
        ],
        keyPointsTh: [
          'ตรวจสอบ Data Retention และ Legal Hold เสมอก่อนทำลายหรือล้างข้อมูลใด ๆ เพื่อไม่ให้ละเมิดกฎหมายหรือทำลายหลักฐานคดี',
          'Clear เหมาะสำหรับนำอุปกรณ์ใช้ซ้ำภายใน ส่วน Purge (เช่น Crypto-shredding, Secure Erase, Degaussing) กันการกู้คืนแม้ในห้องแล็บ',
          'Degaussing ใช้ได้ผลกับ HDD และ Magnetic Tape เท่านั้น ห้ามใช้กับ SSD/Flash memory (SSD ต้องใช้ Crypto-shredding, Secure Erase หรือการบด/ย่อยทำลายชิป)',
          'Destruction (Shredding, Pulverizing, Incineration) ใช้กับสื่อเสียหรือข้อมูลลับสูงสุด และต้องมี Certificate of Destruction เป็นหลักฐาน'
        ]
      }
    ],
    keyTerms: [
      {
        termEn: 'Procurement / Vendor Vetting',
        explanationTh: 'กระบวนการจัดหาสินทรัพย์ที่ผนวกข้อกำหนดความปลอดภัยและตรวจสอบความน่าเชื่อถือของซัพพลายเออร์ตั้งแต่ต้นทางเพื่อลดความเสี่ยง Supply Chain'
      },
      {
        termEn: 'Asset Ownership & Classification',
        explanationTh: 'การกำหนดผู้รับผิดชอบสินทรัพย์/ข้อมูลอย่างชัดเจนและจัดระดับความสำคัญเพื่อป้องกันสินทรัพย์กำพร้า (Orphaned assets) และกำหนดการป้องกันให้เหมาะสม'
      },
      {
        termEn: 'Inventory vs. Enumeration',
        explanationTh: 'Inventory คือทะเบียนสินทรัพย์ที่องค์กรบันทึกไว้ใน CMDB ส่วน Enumeration คือการสแกน/สำรวจหาอุปกรณ์และบริการที่เชื่อมต่อจริงเพื่อนำมาเทียบกัน'
      },
      {
        termEn: 'Data Retention & Legal Hold',
        explanationTh: 'นโยบายระยะเวลาเก็บรักษาข้อมูลตามกฎหมายและการระงับการลบข้อมูลชั่วคราว (Legal Hold) เมื่อข้อมูลเกี่ยวข้องกับคดีความหรือการตรวจสอบ'
      },
      {
        termEn: 'Sanitization (Clear / Purge)',
        explanationTh: 'กระบวนการลบข้อมูลออกจากสื่ออย่างปลอดภัยโดยที่ Clear ป้องกันการกู้ทั่วไปเพื่อนำกลับมาใช้ใหม่ ส่วน Purge ป้องกันการกู้ขั้นสูงระดับห้องปฏิบัติการ'
      },
      {
        termEn: 'Cryptographic Erase (Crypto-shredding)',
        explanationTh: 'การทำลายกุญแจเข้ารหัสที่ใช้ปกป้องข้อมูลบนดิสก์ (SED) หรือ Cloud Storage เพื่อให้ข้อมูลที่เข้ารหัสไว้ไม่สามารถถอดรหัสกลับมาได้อีกเลย'
      },
      {
        termEn: 'Degaussing',
        explanationTh: 'การปล่อยสนามแม่เหล็กเข้มข้นเพื่อทำลายข้อมูลบนสื่อแม่เหล็ก (HDD/Magnetic tape) แต่ใช้ไม่ได้ผลกับ SSD หรือหน่วยความจำแฟลช'
      },
      {
        termEn: 'Certificate of Destruction',
        explanationTh: 'เอกสารรับรองอย่างเป็นทางการที่ระบุรายการ Serial number วิธีการทำลาย พยาน และวันที่ เพื่อใช้เป็นหลักฐาน Audit Compliance หลังการปลดระวาง'
      }
    ],
    scenarios: [
      {
        titleTh: 'การปลดระวางเซิร์ฟเวอร์แบบผสมสื่อเก็บข้อมูลและข้อมูลติด Legal Hold',
        contextTh:
          'ศูนย์ข้อมูลกำลังปลดระวางเซิร์ฟเวอร์เก่า 10 เครื่องที่ประกอบด้วย HDD จานหมุนแบบดั้งเดิมและ NVMe SSD ที่เก็บข้อมูลทางการแพทย์ (PHI) ระดับ Restricted โดยในจำนวนนี้มีเซิร์ฟเวอร์ 2 เครื่องที่ฝ่ายกฎหมายแจ้งว่ามีบันทึกธุรกรรมที่กำลังอยู่ในกระบวนการฟ้องร้องของศาล สำหรับอีก 8 เครื่องที่เหลือ ผู้บริหารต้องการบริจาคฮาร์ดแวร์สภาพดีให้โรงเรียนโดยต้องมั่นใจว่าข้อมูลคนไข้ไม่รั่วไหล',
        decisionTh:
          'ทีมจัดการสินทรัพย์คัดแยกเซิร์ฟเวอร์ 2 เครื่องที่ติด Legal Hold ออกจากกระบวนการทำลายทันที และทำการโอนย้ายหรือทำ Forensic image เก็บตามขั้นตอน Legal Hold/Data Retention ส่วนเซิร์ฟเวอร์ 8 เครื่องที่จะบริจาค: หากต้องการส่งต่อ HDD ไปใช้ภายนอกต้องทำ Purge ด้วย Degaussing หรือทำลายทิ้ง (เนื่องจาก Degaussing อาจทำให้ HDD เสียสภาพใช้งานต่อไม่ได้ จึงอาจเลือก Cryptographic Erase บน SED หรือ Physical Shredding เพื่อความปลอดภัยสูงสุดของข้อมูล PHI ระดับ Restricted) ส่วน NVMe SSD ห้ามใช้ Degausser เด็ดขาด ต้องใช้ Firmware Secure Erase/Crypto-shredding (หากจะบริจาค) หรือส่งทำลายทางกายภาพแบบ Shredding/Pulverizing ทั้งชิป NAND Flash พร้อมบันทึก Serial number และออก Certificate of Destruction/Sanitization ทุกชิ้น',
        takeawayTh:
          'การปลดระวางสื่อต้องเช็ก Legal Hold ก่อนเสมอ เลือกวิธี Sanitization/Destruction ให้ตรงกับชนิดสื่อ (HDD vs. SSD) และเก็บ Certification ไว้เป็นหลักฐาน'
      },
      {
        titleTh: 'การตรวจพบ Rogue Server และ Shadow IT จากการทำ Asset Enumeration',
        contextTh:
          'ระหว่างการตรวจสอบเครือข่ายประจำสัปดาห์ด้วย Passive network enumeration และ Cloud API discovery ทีมปฏิบัติการพบเซิร์ฟเวอร์ Ubuntu เครื่องหนึ่งกำลังรันฐานข้อมูลทดสอบอยู่ในแผนกการตลาดและมีบัญชี Cloud Storage สาธารณะที่ไม่ได้อยู่ในระบบ CMDB Inventory ขององค์กร เมื่อสอบถามแผนกการตลาดพบว่าผู้รับเหมาเคยติดตั้งไว้ให้เมื่อ 8 เดือนก่อนและไม่มีชื่อ Asset Owner ระบุไว้',
        decisionTh:
          'ทีมความปลอดภัยกักกัน (Isolate) เซิร์ฟเวอร์ดังกล่าวออกจากเครือข่ายชั่วคราว ตรวจสอบข้อมูลภายในเพื่อยืนยันว่ามีข้อมูลลูกค้าหรือไม่ จากนั้นกำหนด Asset Owner และ Data Classification อย่างเป็นทางการ อัปเดตเข้า CMDB Inventory (หรือปลดระวางหากไม่ใช้งานแล้ว) พร้อมปรับปรุงขั้นตอน Procurement Process ให้บังคับผ่าน IT/Security Approval และทำ Automated Enumeration เทียบกับ Inventory ทุกวัน',
        takeawayTh:
          'การผสมผสาน Enumeration เข้ากับ Inventory ช่วยขจัด Orphaned Assets และ Shadow IT ส่วน Procurement Process ที่รัดกุมช่วยป้องกันไม่ให้เกิดปัญหาซ้ำ'
      }
    ],
    comparisonTables: [
      {
        captionTh: 'ตารางเปรียบเทียบเทคนิค Sanitization และ Destruction ตามประเภทสื่อบันทึกข้อมูล',
        headersTh: ['เทคนิค / ระดับ', 'วิธีการทำงาน', 'สื่อที่ใช้งานได้ผล', 'ข้อจำกัดและข้อควรระวัง'],
        rowsTh: [
          ['Clear (Overwriting / Zero-fill)', 'เขียนทับพื้นที่ข้อมูลที่ระบบมองเห็นด้วยเลขศูนย์หรือค่าสุ่ม', 'HDD, USB ทั่วไป (นำใช้ซ้ำภายใน)', 'ไม่ครอบคลุม Bad sectors หรือ Wear-leveling space บน SSD'],
          ['Purge: Cryptographic Erase', 'ลบหรือทำลายกุญแจเข้ารหัสที่ผูกกับข้อมูลบนสื่อ/คลาวด์', 'SED HDD, SSD, Cloud Object Storage', 'ต้องมั่นใจว่าข้อมูลทั้งหมดถูกเข้ารหัสด้วยอัลกอริทึมแข็งแรงตั้งแต่ต้น'],
          ['Purge: Degaussing', 'ใช้สนามแม่เหล็กเข้มข้นลบการจัดเรียงขั้วแม่เหล็กถาวร', 'HDD จานหมุน, Magnetic Tape เท่านั้น', 'ใช้ไม่ได้ผลกับ SSD/Flash/Optical และมักทำให้ HDD พังถาวร'],
          ['Purge: Firmware Secure Erase', 'ส่งคำสั่งระดับเฟิร์มแวร์ล้างทุกเซลล์รวมถึงพื้นที่สำรอง', 'SSD / NVMe ที่รองรับมาตรฐาน ATA/NVMe', 'ทำไม่ได้หากไดรฟ์เสียจนบูตหรือสื่อสารกับเฟิร์มแวร์ไม่ได้'],
          ['Destroy (Shredding / Pulverizing / Incineration)', 'ทำลายโครงสร้างทางกายภาพจนไม่สามารถกู้ได้ทุกกรณี', 'HDD, SSD, Optical, Paper, Tape', 'สื่อไม่สามารถนำกลับมาใช้หรือบริจาคได้ ต้องบดทำลายชิป Flash ทุกเม็ด']
        ]
      },
      {
        captionTh: 'ตารางเปรียบเทียบบทบาทของกิจกรรมในวงจรชีวิตสินทรัพย์ (Asset Lifecycle)',
        headersTh: ['ระยะของวงจรชีวิต', 'กิจกรรมหลักตาม SY0-701', 'คำถามสำคัญด้านความปลอดภัย'],
        rowsTh: [
          ['Acquisition / Procurement', 'RFP Security requirements, Vendor vetting, Authorized channel', 'อุปกรณ์/ซอฟต์แวร์ปลอดภัยจาก Supply chain และรองรับมาตรฐานหรือไม่?'],
          ['Assignment / Accounting', 'กำหนด Owner/Custodian, Classification, Asset tagging', 'ใครรับผิดชอบอนุมัติสิทธิ์/แพตช์ และข้อมูลข้างในลับแค่ไหน?'],
          ['Monitoring / Tracking', 'CMDB Inventory, SBOM, Network/Cloud Enumeration, EOL check', 'สิ่งที่ต่ออยู่บนเครือข่ายจริงตรงกับทะเบียนสินทรัพย์หรือไม่?'],
          ['Disposal / Decommissioning', 'เช็ก Retention/Legal hold, Sanitization/Destruction, Certification', 'มั่นใจได้อย่างไรว่าข้อมูลลับถูกทำลายถาวรและมีหลักฐานยืนยัน?']
        ]
      }
    ],
    applicationsAndLimitations: {
      applicationsTh: [
        'ใช้สร้างระบบบริหารสินทรัพย์ครบวงจรที่เชื่อมโยง CMDB เข้ากับระบบ Vulnerability Management และ Incident Response เพื่อให้ทราบทันทีเมื่อพบช่องโหว่ว่าเครื่องใดได้รับผลกระทบและใครเป็นเจ้าของ',
        'ใช้ลดความเสี่ยงการรั่วไหลของข้อมูลจากอุปกรณ์ปลดระวาง ฮาร์ดแวร์ส่งซ่อม และพื้นที่ Cloud Storage โดยกำหนดขั้นตอน Sanitization และออก Certificate of Destruction เป็นมาตรฐาน',
        'ใช้ควบคุมต้นทุนและความปลอดภัยด้านซอฟต์แวร์ด้วย License Management และ SBOM เพื่อกำจัดซอฟต์แวร์ที่หมดอายุสนับสนุน (EOL) หรือมีช่องโหว่ในไลบรารี'
      ],
      limitationsTh: [
        'การทำ Asset Enumeration แบบ Active Scanning อาจไม่สามารถตรวจพบอุปกรณ์ที่ปิดเครื่องชั่วคราว (Offline assets) หรืออุปกรณ์ในเครือข่าย OT ที่ห้ามสแกนได้ จึงต้องใช้ Passive discovery ร่วมกับ Agent-based reporting',
        'ในสภาพแวดล้อม Cloud และ Containers ที่เครื่องถูกสร้างและลบทิ้งภายในไม่กี่นาที (Ephemeral infrastructure) ทะเบียน Inventory แบบดั้งเดิมที่อัปเดตด้วยมือจะล้าสมัยทันที ต้องใช้ API-driven discovery อัตโนมัติเท่านั้น',
        'การจ้างผู้ให้บริการภายนอก (Third-party vendor) ทำลายสื่อบันทึกข้อมูลยังมีความเสี่ยงระหว่างการขนส่ง จึงต้องมีการควบคุม Chain of Custody การเข้ารหัสก่อนขนย้าย หรือจัดหาเครื่องทำลายแบบ On-site shredding'
      ]
    },
    commonMisconceptions: [
      {
        misconceptionTh: 'คิดว่าการใช้เครื่อง Degausser สามารถลบข้อมูลจากทั้ง HDD และ SSD ได้อย่างสมบูรณ์เหมือนกัน',
        clarificationTh:
          'Degausser อาศัยสนามแม่เหล็กซึ่งลบได้เฉพาะสื่อบันทึกแบบแม่เหล็ก (HDD และเทป) เท่านั้น แต่ SSD ใช้ชิป NAND Flash เก็บประจุไฟฟ้าจึงไม่ได้รับผลกระทบจากแม่เหล็ก ข้อมูลบน SSD ยังคงอยู่ครบถ้วน ต้องใช้วิธี Crypto-shredding, Secure Erase หรือทำลายชิปทางกายภาพเท่านั้น'
      },
      {
        misconceptionTh: 'เข้าใจว่าเมื่อลบไฟล์และสั่ง Quick Format หรือ Delete Partition แล้ว ข้อมูลก็หายไปถาวรไม่สามารถกู้ได้',
        clarificationTh:
          'การลบไฟล์และ Quick Format เพียงแค่ลบสารบัญชี้ตำแหน่งไฟล์ (Pointers/Metadata) แต่ข้อมูลดิบยังอยู่บนดิสก์จนกว่าจะถูกเขียนทับด้วยเทคนิค Clear/Purge หรือทำลายทางกายภาพ'
      },
      {
        misconceptionTh: 'คิดว่าเมื่อข้อมูลครบกำหนดอายุการจัดเก็บ (Data Retention) แล้ว ฝ่าย IT สามารถสั่งทำลายสื่อได้ทันทีโดยไม่ต้องถามใคร',
        clarificationTh:
          'ต้องตรวจสอบกับฝ่ายกฎหมายเสมอว่าข้อมูลชุดนั้นติด Legal Hold จากคดีความ การสอบสวน หรือคำสั่งศาลอยู่หรือไม่ หากติด Legal Hold ต้องระงับการลบหรือทำลายทันทีแม้ครบกำหนด Retention แล้วก็ตาม'
      }
    ],
    scenarioAnalysisGuide: {
      approachStepsTh: [
        'ขั้นที่ 1 ระบุระยะของสินทรัพย์ในโจทย์: กำลังจะซื้อ (Acquisition/Procurement), กำลังใช้งาน/มอบหมาย (Ownership/Classification), กำลังสแกนหาของเถื่อน (Inventory vs. Enumeration) หรือกำลังเลิกใช้/ทิ้ง/ขายต่อ (Disposal/Decommissioning)',
        'ขั้นที่ 2 หากเป็นเรื่อง Disposal ให้เช็กเงื่อนไขขัดขวางก่อนเสมอ: มีคดีความ/Legal hold หรือไม่ และต้องเก็บตาม Data retention กี่ปี',
        'ขั้นที่ 3 ดูประเภทของสื่อบันทึกข้อมูล (HDD, Magnetic tape, SSD, Paper, Cloud) และปลายทาง (ใช้ซ้ำภายใน vs. บริจาค/ขายต่อ vs. สื่อเสีย/ความลับสูงสุด) เพื่อเลือก Clear, Purge (Crypto-erase/Degaussing/Secure erase) หรือ Destroy (Shredding/Pulverizing/Incineration/Pulping)',
        'ขั้นที่ 4 อย่าลืมขั้นตอนสุดท้ายของ Compliance คือการออกเอกสารรับรอง (Certificate of Destruction / Sanitization) และบันทึก Chain of Custody'
      ],
      examSignalKeywords: [
        { keywordEn: 'unauthorized supplier / shadow IT purchase / supply chain risk', meaningTh: 'ชี้ไปยัง Acquisition / Procurement process และ Vendor vetting' },
        { keywordEn: 'no one knows who manages this server / orphaned system', meaningTh: 'ชี้ไปยังการกำหนด Asset Ownership และ Classification' },
        { keywordEn: 'compare network scan results against CMDB', meaningTh: 'ชี้ไปยัง Asset Enumeration เทียบกับ Asset Inventory' },
        { keywordEn: 'pending litigation / subpoena / lawsuit', meaningTh: 'ชี้ไปยัง Legal Hold (ระงับการทำลายข้อมูลแม้ครบ Retention)' },
        { keywordEn: 'sanitizing SSD vs HDD / magnetic field', meaningTh: 'ชี้ไปยังข้อควรระวัง: Degaussing ใช้ได้กับ HDD/Tape แต่ห้ามใช้กับ SSD (ต้องใช้ Crypto-erase/Shredding)' },
        { keywordEn: 'audit proof after third-party e-waste disposal', meaningTh: 'ชี้ไปยัง Certificate of Destruction และ Chain of Custody' }
      ]
    },
    summaryTh: [
      'การจัดการสินทรัพย์ที่ปลอดภัยครอบคลุมทั้งฮาร์ดแวร์ ซอฟต์แวร์ และข้อมูลตลอด 4 ระยะ: การจัดหาอย่างปลอดภัย (Procurement), การกำหนดผู้รับผิดชอบและระดับความลับ (Ownership & Classification), การติดตามทะเบียนเทียบกับสิ่งที่รันอยู่จริง (Inventory & Enumeration) และการปลดระวางอย่างถูกต้อง (Disposal)',
      'การเชื่อมโยงผลจาก Asset Enumeration เข้ากับ CMDB Inventory ช่วยให้องค์กรค้นพบ Rogue devices, Shadow IT และซอฟต์แวร์ที่หมดอายุสนับสนุน (EOL) ได้ทันท่วงที และเมื่อพบเหตุฉุกเฉินก็จะทราบทันทีว่าใครคือ Owner ที่ต้องตัดสินใจ',
      'การปลดระวางและทำลายข้อมูลต้องคำนึงถึง Data Retention และ Legal Hold ก่อนเสมอ จากนั้นจึงเลือกวิธีการที่สอดคล้องกับชนิดสื่อบันทึก (เช่น ไม่ใช้ Degaussing กับ SSD และใช้ Destruction สำหรับสื่อที่เสียหายหรือข้อมูลระดับ Restricted) พร้อมเก็บ Certificate of Destruction เป็นหลักฐาน'
    ],
    knowledgeChecks: [
      {
        id: 'L4-03-KC1',
        questionTh:
          'บริษัทกำลังปลดระวางอุปกรณ์เก็บข้อมูล 2 ชนิดที่มีข้อมูลลูกค้าเก่าเก็บอยู่ ชนิดแรกคือเทปสำรองข้อมูล LTO (Magnetic tape) ที่ยังใช้งานได้ และชนิดที่สองคือไดรฟ์ NVMe SSD จากเซิร์ฟเวอร์ที่เสียหายไม่สามารถบูตสั่งคำสั่งซอฟต์แวร์ได้ วิธีใดเหมาะสมที่สุดในการทำให้มั่นใจว่ากู้ข้อมูลไม่ได้ทั้งสองชนิด?',
        choices: [
          { id: 'a', textTh: 'สั่ง Quick Format ทั้งเทป LTO และ NVMe SSD แล้วนำไปขายเป็นมือสอง' },
          { id: 'b', textTh: 'นำ NVMe SSD เข้าเครื่อง Degausser และสั่ง Overwrite บนเทป LTO ด้วยซอฟต์แวร์ฟรี' },
          { id: 'c', textTh: 'ใช้เครื่องมือ Degaussing หรือทำลายทางกายภาพกับเทป LTO ได้ แต่สำหรับ NVMe SSD ที่เสียต้องใช้วิธีลบแบบ Clear ผ่านระบบปฏิบัติการเท่านั้น' },
          { id: 'd', textTh: 'ใช้ Degaussing หรือทำลายทางกายภาพกับเทป LTO และนำ NVMe SSD ที่เสียหายไปเข้าเครื่อง Shredding/Pulverizing เพื่อทำลายชิป NAND Flash ทางกายภาพ พร้อมออก Certificate of Destruction' }
        ],
        correctChoiceId: 'd',
        explanationTh:
          'คำตอบที่ถูกต้องคือ d เพราะเทป LTO เป็นสื่อแม่เหล็กจึงใช้ Degaussing (หรือเผา/ย่อย) ได้ผลดี ส่วน NVMe SSD ที่เสียจนสั่งซอฟต์แวร์ Secure Erase ไม่ได้ไม่สามารถใช้ Degaussing ได้เพราะเป็นชิป NAND Flash จึงต้องทำลายทางกายภาพ (Shredding/Pulverizing) ให้ชิปแหลกละเอียดพร้อมออกใบรับรอง ส่วนข้อ a, b และ c ล้วนเลือกวิธีผิดประเภทสื่อหรือไม่ปลอดภัยเพียงพอ'
      },
      {
        id: 'L4-03-KC2',
        questionTh:
          'นโยบายของบริษัทกำหนดให้ลบไฟล์บันทึกการสนทนาฝ่ายบริการลูกค้าทุก 3 ปี อย่างไรก็ตาม ขณะนี้ครบกำหนด 3 ปีแล้วแต่ฝ่ายกฎหมายแจ้งว่าบริษัทกำลังถูกฟ้องร้องและบันทึกการสนทนาของลูกค้ากลุ่มหนึ่งอาจเป็นพยานหลักฐานในคดี ทีม IT ควรปฏิบัติอย่างไร?',
        choices: [
          { id: 'a', textTh: 'สั่ง Purge และทำลายบันทึกทั้งหมดทันทีตามตาราง Data Retention เพื่อไม่ให้ละเมิดนโยบาย' },
          { id: 'b', textTh: 'ประกาศใช้ Legal Hold เพื่อระงับการลบหรือทำลายข้อมูลชุดที่เกี่ยวข้องกับคดีไว้ชั่วคราวจนกว่าฝ่ายกฎหมายจะแจ้งสิ้นสุดคำสั่ง' },
          { id: 'c', textTh: 'ทำ Cryptographic Erase เฉพาะส่วนข้อมูลที่ฝ่ายกฎหมายต้องการเพื่อประหยัดพื้นที่เก็บ' },
          { id: 'd', textTh: 'เปลี่ยน Classification ของข้อมูลคดีความให้เป็นระดับ Public เพื่อให้ทนายเข้าถึงได้ง่าย' }
        ],
        correctChoiceId: 'b',
        explanationTh:
          'คำตอบที่ถูกต้องคือ b เพราะคำสั่ง Legal Hold มีผลบังคับเหนือตาราง Data Retention ปกติ เพื่อป้องกันการทำลายพยานหลักฐานทางกฎหมาย (Spoliation of evidence) ทีม IT ต้องระงับการลบและการปลดระวางสื่อที่เกี่ยวข้องทันที ส่วนข้อ a และ c เป็นการทำลายหลักฐานคดี และข้อ d ทำให้ข้อมูลคดีความรั่วไหล'
      },
      {
        id: 'L4-03-KC3',
        questionTh:
          'เหตุใดทีมความปลอดภัยจึงต้องรันการสำรวจเครือข่ายแบบต่อเนื่อง (Asset Enumeration) นำมาเปรียบเทียบกับฐานข้อมูล CMDB (Asset Inventory) อยู่เสมอ?',
        choices: [
          { id: 'a', textTh: 'เพื่อใช้ออก Certificate of Destruction ให้กับอุปกรณ์ที่เพิ่งซื้อมาใหม่' },
          { id: 'b', textTh: 'เพื่อลดจำนวนสิทธิ์ของ Data Owner ให้เหลือศูนย์บนเซิร์ฟเวอร์ทุกเครื่อง' },
          { id: 'c', textTh: 'เพื่อตรวจหาอุปกรณ์แปลกปลอม (Rogue devices), ซอฟต์แวร์ไม่ได้รับอนุญาต และ Shadow IT ที่กำลังทำงานจริงแต่ไม่ปรากฏในทะเบียน Inventory' },
          { id: 'd', textTh: 'เพื่อข้ามขั้นตอน Vendor vetting ในกระบวนการ Procurement Process' }
        ],
        correctChoiceId: 'c',
        explanationTh:
          'คำตอบที่ถูกต้องคือ c เพราะ Inventory เป็นเพียงรายการที่องค์กรรับรู้ทางทะเบียน แต่ Enumeration เป็นการตรวจพบของจริงที่เชื่อมต่อและทำงานอยู่ในระบบ การนำมาเทียบกันจึงเปิดโปง Rogue devices และ Shadow IT ได้ทันท่วงที ส่วนข้อ a, b และ d ไม่ถูกต้องตามวัตถุประสงค์ของ Enumeration'
      },
      {
        id: 'L4-03-KC4',
        questionTh:
          'บริษัทกำลังวางแผนขยายคลังสินค้าและต้องจัดซื้ออุปกรณ์สแกนบาร์โค้ดไร้สายจำนวน 200 เครื่อง พร้อมซอฟต์แวร์บริหารคลังสินค้า ฝ่ายความปลอดภัยควรเข้าไปมีส่วนร่วมในขั้นตอน Acquisition / Procurement Process อย่างไรจึงจะลดความเสี่ยงได้มากที่สุด?',
        choices: [
          { id: 'a', textTh: 'กำหนดข้อกำหนดด้านความปลอดภัย (เช่น การรองรับ WPA3, การอัปเดตเฟิร์มแวร์, การเข้ารหัส) ลงในเอกสารจัดซื้อ และตรวจสอบความน่าเชื่อถือของ Vendor/ช่องทางจำหน่ายเพื่อป้องกัน Supply Chain Risk' },
          { id: 'b', textTh: 'รอให้อุปกรณ์ทั้งหมดถูกส่งมาและติดตั้งใช้งานเสร็จเรียบร้อยก่อน แล้วค่อยสแกนหาช่องโหว่ในภายหลัง' },
          { id: 'c', textTh: 'อนุญาตให้หัวหน้าคลังสินค้าสั่งซื้อรุ่นที่ถูกที่สุดจากร้านค้าออนไลน์ที่ไม่ใช่ตัวแทนจำหน่ายทางการได้ทันที' },
          { id: 'd', textTh: 'สั่งทำลายฮาร์ดแวร์ตัวอย่างทุกเครื่องด้วยเครื่อง Shredder ก่อนเซ็นสัญญาจัดซื้อ' }
        ],
        correctChoiceId: 'a',
        explanationTh:
          'คำตอบที่ถูกต้องคือ a เพราะการนำ Security requirements และ Vendor vetting เข้าไปตั้งแต่ขั้นตอน Acquisition/Procurement ช่วยป้องกันการซื้ออุปกรณ์ที่ไม่ปลอดภัย ไม่มีแพตช์ หรือมีฮาร์ดแวร์ดัดแปลงจากซัพพลายเออร์ไม่น่าเชื่อถือ ส่วนข้อ b แก้ปัญหาช้าเกินไป (อาจซื้อของที่ Hardening ไม่ได้มาแล้ว) ข้อ c เสี่ยง Supply chain attack/ของปลอม และข้อ d ไม่สมเหตุสมผล'
      }
    ],
    references: [
      {
        title: 'CompTIA Security+ (SY0-701) Exam Objectives Version 5.0 — Objective 4.2',
        noteTh: 'Acquisition/procurement, Disposal/decommissioning (Sanitization, Destruction, Certification, Data retention), Assignment/accounting และ Monitoring/tracking'
      },
      {
        title: 'NIST SP 800-88 Rev. 1 — Guidelines for Media Sanitization',
        noteTh: 'มาตรฐานสากลด้านการทำ Clear, Purge (Crypto-erase/Degaussing) และ Destroy พร้อมตัวอย่าง Certificate of Sanitization'
      },
      {
        title: 'CIS Critical Security Controls (Controls 1 & 2: Inventory and Control of Enterprise Assets & Software Assets)',
        noteTh: 'แนวทางการจัดทำ Asset Inventory และ Asset Enumeration ต่อเนื่อง'
      }
    ],
    relatedLessonIds: ['L1-04', 'L2-02', 'L3-05', 'L3-06', 'L4-04', 'L5-04']
  },
  {
    id: 'L4-04',
    examCode: 'SY0-701',
    domainId: 'D4',
    order: 27,
    titleTh: 'การบริหารจัดการช่องโหว่ (Vulnerability Management Lifecycle)',
    titleEn: 'Vulnerability Scanning, CVSS & Remediation',
    estimatedMinutes: 50,
    learningObjectives: [
      'เปรียบเทียบวิธีการค้นหาช่องโหว่ทุกรูปแบบตาม SY0-701 ได้แก่ Vulnerability Scan, SAST, DAST, Package Monitoring, Threat Feeds, Penetration Testing, Bug Bounty และ Audit',
      'วิเคราะห์ความแม่นยำของผลตรวจ (False Positive vs. False Negative) และจัดลำดับความสำคัญของการแก้ไขโดยใช้ CVSS, CVE, Classification, Exposure Factor, Environmental Variables, Impact และ Risk Tolerance',
      'เลือกแนวทางการตอบสนองต่อช่องโหว่ (Patching, Segmentation, Compensating Controls, Insurance, Exceptions/Exemptions) และดำเนินการตรวจสอบยืนยันผล (Rescanning, Audit, Verification) พร้อมรายงานผล'
    ],
    objectiveIds: ['4.3'],
    prerequisites: [
      'L2-04 ช่องโหว่ระดับ Application, Web และ Operating System',
      'L4-01 Secure Baselines และการ Hardening อุปกรณ์และโครงสร้างพื้นฐาน',
      'L4-03 การจัดการสินทรัพย์ฮาร์ดแวร์ ซอฟต์แวร์ และข้อมูล'
    ],
    sections: [
      {
        id: 'sec-vuln-identification',
        titleTh: '1. วิธีการระบุและค้นหาช่องโหว่ (Identification Methods): จาก Automated Scans ถึง Threat Feeds และ Bug Bounty',
        contentTh: [
          'การบริหารจัดการช่องโหว่ (Vulnerability Management) ไม่ใช่แค่การกดปุ่มรันเครื่องสแกนเดือนละครั้งแล้วแจกไฟล์ PDF ให้ทีม IT แต่คือกระบวนการต่อเนื่องเพื่อค้นหา ประเมิน แก้ไข และยืนยันการปิดจุดอ่อนก่อนที่ผู้โจมตีจะใช้ประโยชน์ ในระยะแรกคือ Identification (การระบุช่องโหว่) ซึ่งองค์กรควรใช้หลายวิธีร่วมกันเพราะแต่ละวิธีมองเห็นจุดอ่อนคนละมิติ วิธีแรกคือ Vulnerability Scan (การสแกนช่องโหว่อัตโนมัติ) เช่น Nessus, Qualys หรือ OpenVAS ที่ตรวจหาซอฟต์แวร์ล้าสมัย พอร์ตเปิด และ Misconfiguration เทียบกับฐานข้อมูลช่องโหว่ โดยแบ่งเป็น Non-credentialed Scan (มองจากมุมคนนอก เห็นเฉพาะสิ่งที่โผล่บนเครือข่าย) และ Credentialed Scan (ล็อกอินเข้าไปตรวจระดับไฟล์และแพ็กเกจภายใน ซึ่งแม่นยำกว่ามากและลดจุดบอดได้มหาศาล)',
          'สำหรับช่องโหว่ในซอฟต์แวร์ที่องค์กรพัฒนาเองหรือติดตั้งใช้งาน กลุ่ม Application Security ใช้ 3 เทคนิคหลักร่วมกัน: (1) Static Analysis (SAST — Static Application Security Testing) เป็นการวิเคราะห์ซอร์สโค้ดหรือไบนารีแบบ White-box โดยไม่ต้องรันโปรแกรม ทำให้พบจุดอ่อนตั้งแต่ระยะเขียนโค้ดใน CI/CD เช่น SQL Injection หรือ Hardcoded passwords, (2) Dynamic Analysis (DAST — Dynamic Application Security Testing) เป็นการทดสอบจากภายนอกแบบ Black-box ขณะที่แอปพลิเคชันกำลังทำงานจริง โดยส่ง Input จำลองเพื่อหาช่องโหว่ระดับ Runtime, Authentication หรือ Configuration ที่ SAST มองไม่เห็น และ (3) Package Monitoring (หรือ Software Composition Analysis: SCA) ที่คอยเฝ้าติดตามไลบรารี Third-party, Open-source packages และ Container base images เทียบกับ SBOM เพื่อแจ้งเตือนทันทีเมื่อไลบรารีที่โครงการพึ่งพาอยู่มีช่องโหว่ใหม่ประกาศออกมา',
          'นอกจากเครื่องมือสแกนแล้ว องค์กรยังต้องรับข้อมูลจากภายนอกผ่าน Threat Feeds 4 ประเภท ได้แก่ OSINT (Open-Source Intelligence เช่น NVD, CISA Known Exploited Vulnerabilities - KEV, Blog นักวิจัย), Proprietary / Third-party Feeds (ข่าวกรองเชิงพาณิชย์ที่คัดกรองและระบุตัวชี้วัดภัยคุกคามเฉพาะเจาะจงอย่างรวดเร็ว), Information-Sharing Organizations (องค์กรแบ่งปันข้อมูลตามกลุ่มอุตสาหกรรม เช่น ISACs และ CERT เพื่อเตือนภัยที่กำลังโจมตีอุตสาหกรรมเดียวกัน) และ Dark Web Monitoring (ติดตามฟอรัมใต้ดินหรือตลาดซื้อขาย Exploit เพื่อรู้ล่วงหน้าหากมี Zero-day หรือข้อมูลรั่วไหลขององค์กรถูกประกาศขาย)',
          'การค้นหาช่องโหว่ยังครอบคลุมวิธีการเชิงลึกและเชิงกระบวนการอีก 3 แนวทาง ได้แก่ Penetration Testing (การจำลองการโจมตีจริงโดยผู้เชี่ยวชาญ เพื่อพิสูจน์ว่าช่องโหว่ต่าง ๆ สามารถถูกเจาะและร้อยเรียงต่อยอดเป็นเส้นทางการยึดระบบได้จริงหรือไม่ ซึ่งต่างจาก Vulnerability Scan ที่เพียงแจ้งรายชื่อจุดอ่อน), Responsible Disclosure Program / Bug Bounty Program (เปิดช่องทางทางการให้ Ethical hackers หรือนักวิจัยอิสระภายนอกรายงานช่องโหว่พร้อมกฎ Safe Harbor และเงินรางวัลแทนการนำไปขายในตลาดมืด) และ System / Process Audit (การตรวจสอบกระบวนการทำงาน สิทธิ์ และค่าคอนฟิกเทียบกับนโยบาย ซึ่งมักพบช่องโหว่เชิงบริหารจัดการที่สแกนเนอร์อัตโนมัติไม่มีวันตรวจพบ เช่น ขั้นตอน Offboarding ที่ลืมปิดบัญชี)'
        ],
        keyPointsTh: [
          'Credentialed Vulnerability Scan แม่นยำกว่า Non-credentialed Scan มากเพราะตรวจระดับแพ็กเกจและค่าระบบภายในได้จริง',
          'AppSec ผสาน SAST (วิเคราะห์โค้ดก่อนรัน), DAST (ทดสอบขณะรันจากภายนอก) และ Package Monitoring (ตรวจไลบรารี/Dependencies)',
          'Threat Feeds มาจาก OSINT, Proprietary, Info-sharing (ISACs/CERT) และ Dark web เพื่อรู้ทันช่องโหว่ที่ถูกโจมตีจริง',
          'Penetration Testing ทดสอบเจาะจริง (Exploitation), Bug Bounty รับรายงานจากนักวิจัยอิสระ และ Audit ตรวจช่องโหว่เชิงกระบวนการและ Compliance'
        ]
      },
      {
        id: 'sec-vuln-analysis-prioritize',
        titleTh: '2. การวิเคราะห์ความถูกต้อง (Confirmation) และการจัดลำดับความสำคัญ (Prioritization)',
        contentTh: [
          'เมื่อได้รายการช่องโหว่จำนวนหลายพันรายการจากเครื่องมือสแกนและฟีดข่าวกรอง ปัญหาที่ตามมาคือทีมปฏิบัติการไม่สามารถแก้ไขทุกอย่างพร้อมกันในวันเดียวได้ ขั้นตอน Analysis จึงเริ่มต้นด้วยการ Confirmation (ยืนยันความถูกต้องของผลลัพธ์) เพื่อแยกแยะระหว่าง True Positive กับข้อผิดพลาด 2 รูปแบบที่อันตรายต่างกัน: แบบแรกคือ False Positive (แจ้งเตือนผิดพลาดว่ามีช่องโหว่ ทั้งที่จริงระบบไม่ได้เสี่ยง เช่น สแกนเนอร์เห็นเลขเวอร์ชันแพ็กเกจเก่าบน Linux ทั้งที่ผู้ดูแลระบบใช้ Backported security patch ปิดช่องโหว่ไปแล้ว) ผลเสียของ False Positive คือทำให้ทีม IT เสียเวลาไล่แก้ของที่ไม่เสียและเกิดความล้าในการทำงาน แบบที่สองคือ False Negative (ระบบมีช่องโหว่ร้ายแรงอยู่จริงแต่สแกนเนอร์รายงานว่าปลอดภัย) ซึ่งอันตรายอย่างยิ่งเพราะสร้างความมั่นใจผิด ๆ มักเกิดจากการใช้ Non-credentialed scan, Signature ของเครื่องสแกนล้าสมัย หรือมี Firewall/IPS บังระหว่างสแกนเนอร์กับเป้าหมาย',
          'หลังจากยืนยันผลแล้ว ขั้นตอนสำคัญที่สุดในการสอบและในงานจริงคือ Prioritization (การจัดลำดับความสำคัญ) เหตุใดองค์กรจึงห้ามจัดลำดับความสำคัญโดยดูจากคะแนน CVSS เพียงอย่างเดียว? คำตอบคือช่องโหว่ที่คะแนน CVSS สูงมากอาจอยู่บนเครื่องทดสอบที่ไม่มีข้อมูลสำคัญและปิดกั้นจากโลกภายนอกสนิท ในขณะที่ช่องโหว่คะแนนปานกลางอาจกำลังถูกแฮกเกอร์โจมตีบนเซิร์ฟเวอร์รับชำระเงินที่ต่อตรงกับอินเทอร์เน็ต! กรอบ SY0-701 จึงกำหนดปัจจัยประกอบการตัดสินใจอย่างรอบด้าน ได้แก่:',
          '(1) CVE (Common Vulnerabilities and Exposures): รหัสอ้างอิงมาตรฐานสากล (เช่น CVE-2024-3094) เพื่อให้ทุกเครื่องมือและทุกฝ่ายสื่อสารตรงกันว่าเป็นช่องโหว่ตัวเดียวกัน, (2) CVSS (Common Vulnerability Scoring System): คะแนน 0.0–10.0 ที่วัดความรุนแรงเชิงเทคนิคตั้งแต่ Low ถึง Critical โดยประกอบด้วย Base Score (คุณสมบัติคงที่ของช่องโหว่), Threat/Temporal Score (มี Exploit code สาธารณะหรือกำลังถูกโจมตีจริงหรือไม่) และ Environmental Score (บริบทเฉพาะขององค์กร), (3) Vulnerability Classification: ประเภทและผลกระทบของช่องโหว่ เช่น Remote Code Execution (RCE) ที่ยึดเครื่องได้ทันทีมักต้องแก้ก่อน Information Disclosure เล็กน้อย',
          '(4) Exposure Factor และตำแหน่งที่ตั้ง: ระบบเปิดสู่สาธารณะ (Internet-facing / Screened subnet) ย่อมมีความเร่งด่วนสูงกว่าระบบปิดภายใน, (5) Environmental Variables: มีมาตรการควบคุมอื่นลดทอนความเสี่ยงอยู่แล้วหรือไม่ เช่น อยู่หลัง WAF หรือแยก VLAN ไว้แล้ว, (6) Industry / Organizational Impact: หากระบบนี้ถูกเจาะจะกระทบภารกิจหลักหรือข้อมูล Regulated ขององค์กรมากน้อยเพียงใด (Crown jewels vs. Dev box) และ (7) Risk Tolerance: ระดับความเสี่ยงที่ผู้บริหารยอมรับได้และข้อตกลง SLA ในการแพตช์ของแต่ละระดับความรุนแรง'
        ],
        keyPointsTh: [
          'False Positive ทำให้เสียเวลาแก้ไขช่องโหว่ที่ไม่มีจริง ส่วน False Negative อันตรายมากเพราะปล่อยช่องโหว่จริงหลุดรอดโดยไม่รู้ตัว',
          'CVE คือรหัสชื่ออ้างอิงสากลของช่องโหว่ ส่วน CVSS คือคะแนนความรุนแรง (0.0–10.0) ที่ต้องพิจารณาควบคู่บริบทจริง',
          'Prioritization ต้องดูครบทั้ง CVSS, ประเภทช่องโหว่ (เช่น RCE), Exposure Factor, Environmental Variables, ผลกระทบต่อองค์กร และ Risk Tolerance'
        ]
      },
      {
        id: 'sec-vuln-response-validation',
        titleTh: '3. การตอบสนอง (Vulnerability Response), การยืนยันการแก้ไข (Validation) และการรายงานผล (Reporting)',
        contentTh: [
          'เมื่อจัดลำดับความสำคัญแล้ว ทีมปฏิบัติการต้องเลือกวิธีตอบสนองต่อช่องโหว่ (Vulnerability Response) ที่เหมาะสมกับความเป็นจริงทางธุรกิจโดยมี 5 ทางเลือกหลัก: (1) Patching — การติดตั้ง Security Patch, Hotfix หรืออัปเกรดซอฟต์แวร์เพื่อปิดจุดอ่อนที่ต้นเหตุ เป็นวิธีที่ควรเลือกเป็นอันดับแรกเมื่อทำได้ โดยต้องทดสอบใน Staging และดำเนินการผ่าน Change Management, (2) Segmentation — การย้ายระบบที่มีช่องโหว่ไปไว้ในเครือข่ายแยกส่วน (Isolated VLAN/Subnet) เพื่อจำกัดการเข้าถึงและลด Blast Radius เมื่อยังแพตช์ไม่ได้ทันที, (3) Compensating Controls — การนำมาตรการควบคุมอื่นมาลดความเสี่ยงทดแทนชั่วคราวหรือถาวร เช่น ใช้ Virtual Patching บน WAF/IPS บล็อกรูปแบบการโจมตี, เปิด Application Allowlisting หรือตั้ง Firewall ACL ให้เข้าถึงได้เฉพาะ Jump Server สำหรับระบบ Legacy/OT ที่ผู้ผลิตเลิกออกแพตช์แล้ว',
          '(4) Exceptions and Exemptions — การขอยกเว้นเป็นลายลักษณ์อักษรอย่างเป็นทางการเมื่อไม่คุ้มค่าหรือยังแก้ไขไม่ได้ในเวลานั้น โดยต้องมีเหตุผลประกอบ มาตรการลดความเสี่ยงชั่วคราว การอนุมัติจาก Risk Owner และ "วันหมดอายุ (Expiration Date)" เพื่อบังคับกลับมาทบทวนใหม่เสมอ (เป็นการยอมรับความเสี่ยงชั่วคราวภายใต้การกำกับดูแล), และ (5) Insurance — การทำ Cyber Insurance เพื่อโอนย้ายภาระความเสียหายทางการเงินบางส่วน (Risk Transference) หากช่องโหว่นั้นถูกโจมตีจนเกิดเหตุการณ์ ทั้งนี้ Insurance ไม่ได้ทำให้ช่องโหว่ทางเทคนิคหายไปจึงต้องใช้คู่กับการป้องกันเสมอ',
          'หลังจากดำเนินการตอบสนองแล้ว วงจรยังไม่จบจนกว่าจะผ่านขั้น Validation of Remediation (การยืนยันผลการแก้ไข) เพื่อไม่ให้เข้าใจผิดว่าแพตช์เสร็จแล้วแต่จริง ๆ แพตช์ติดตั้งล้มเหลวหรือยังไม่ได้รีสตาร์ตบริการ ขั้นตอน Validation ประกอบด้วย: Rescanning (รัน Vulnerability Scan ซ้ำโดยเฉพาะแบบ Credentialed เพื่อยืนยันว่าช่องโหว่ไม่ปรากฏอีก), Audit (ตรวจสอบหลักฐานการเปลี่ยนแปลง Configuration และ Change logs เทียบกับมาตรฐาน) และ Verification (ทดสอบยืนยันความถูกต้องทั้งด้านความปลอดภัยและการใช้งานจริง เช่น Retesting โดย Pentester เพื่อดูว่าช่องโหว่ถูกปิดสนิทจริงโดยไม่ทำให้แอปพลิเคชันทำงานผิดพลาด)',
          'ขั้นตอนสุดท้ายที่เชื่อมโยงทุกภาคส่วนคือ Reporting (การรายงานผล) ซึ่งต้องปรับรูปแบบเนื้อหาให้ตรงกับผู้รับ 2 กลุ่มหลัก: Technical Reports สำหรับทีม SysAdmin/DevOps ที่ระบุ IP/Hostname, รหัส CVE, คะแนน, ความเร่งด่วน และขั้นตอนแก้ไขเชิงเทคนิค กับ Executive Dashboards/Reports สำหรับผู้บริหารและ Risk Committee ที่แสดงแนวโน้มจำนวนช่องโหว่คงค้าง, Mean Time to Remediate (MTTR), อัตราการทำตาม SLA, ช่องโหว่ที่ขอยกเว้น (Exceptions) และภาพรวม Risk Posture ขององค์กรเพื่อใช้ตัดสินใจลงทุนด้านความปลอดภัย'
        ],
        keyPointsTh: [
          'Response มี 5 แนวทาง: Patching (แก้ต้นเหตุ), Segmentation (แยกวงลดผลกระทบ), Compensating Controls (ควบคุมทดแทน เช่น Virtual patching), Exceptions/Exemptions (ยกเว้นแบบมีวันหมดอายุ) และ Insurance (โอนความเสี่ยงทางการเงิน)',
          'Validation of Remediation ใช้ Rescanning, Audit และ Verification เพื่อพิสูจน์ว่าช่องโหว่ปิดสนิทและระบบยังทำงานปกติ',
          'Reporting ต้องสื่อสารตรงกลุ่มเป้าหมาย: Technical details สำหรับทีมแก้ไข และ Risk trends/SLA compliance สำหรับผู้บริหาร'
        ]
      }
    ],
    keyTerms: [
      {
        termEn: 'SAST vs. DAST vs. Package Monitoring',
        explanationTh: 'การทดสอบความปลอดภัยแอปพลิเคชัน: SAST วิเคราะห์โค้ดก่อนรัน, DAST ทดสอบขณะแอปทำงานจริง และ Package Monitoring (SCA) ตรวจช่องโหว่ในไลบรารี Third-party'
      },
      {
        termEn: 'Threat Feeds (OSINT / Proprietary / ISACs / Dark Web)',
        explanationTh: 'แหล่งข่าวกรองช่องโหว่และภัยคุกคามทั้งแบบเปิดสาธารณะ เชิงพาณิชย์ เครือข่ายแบ่งปันข้อมูลอุตสาหกรรม และตลาดมืด'
      },
      {
        termEn: 'Responsible Disclosure / Bug Bounty',
        explanationTh: 'โครงการเปิดช่องทางปลอดภัยพร้อมรางวัลและเกราะคุ้มครองทางกฎหมายให้นักวิจัยอิสระรายงานช่องโหว่แก่องค์กรก่อนเปิดเผยต่อสาธารณะ'
      },
      {
        termEn: 'False Positive vs. False Negative',
        explanationTh: 'False Positive คือแจ้งเตือนผิดว่ามีช่องโหว่ทั้งที่ปลอดภัย ส่วน False Negative คือไม่แจ้งเตือนทั้งที่มีช่องโหว่จริงอยู่บนระบบ'
      },
      {
        termEn: 'CVE & CVSS',
        explanationTh: 'CVE คือรหัสมาตรฐานสากลระบุตัวตนช่องโหว่แต่ละรายการ ส่วน CVSS คือระบบคะแนน 0.0–10.0 สำหรับประเมินความรุนแรงเชิงเทคนิคของช่องโหว่'
      },
      {
        termEn: 'Exposure Factor & Environmental Variables',
        explanationTh: 'ปัจจัยแวดล้อมจริงที่ใช้จัดลำดับความสำคัญช่องโหว่ เช่น ระบบเปิดสู่อินเทอร์เน็ตหรือไม่ และมี WAF/IPS ช่วยลดความเสี่ยงอยู่แล้วเพียงใด'
      },
      {
        termEn: 'Compensating Controls & Virtual Patching',
        explanationTh: 'มาตรการควบคุมทดแทนเมื่อยังไม่สามารถติดตั้งแพตช์ได้ เช่น การตั้งกฎ WAF/IPS ดักบล็อก Payload โจมตีช่องโหว่นั้นชั่วคราว'
      },
      {
        termEn: 'Validation of Remediation (Rescanning / Audit / Verification)',
        explanationTh: 'ขั้นตอนตรวจซ้ำหลังการแก้ไขช่องโหว่เพื่อยืนยันว่าแพตช์หรือมาตรการควบคุมถูกบังคับใช้สมบูรณ์และปิดช่องโหว่ได้จริง'
      }
    ],
    scenarios: [
      {
        titleTh: 'การจัดลำดับความสำคัญเมื่อคะแนน CVSS สูงกว่าไม่จำเป็นต้องแก้ก่อนเสมอไป',
        contextTh:
          'ผลการสแกนช่องโหว่ประจำสัปดาห์พบช่องโหว่ 2 รายการพร้อมกัน: (A) ช่องโหว่ CVSS 9.8 บนเซิร์ฟเวอร์ทดสอบภายใน Sandbox ที่ตัดขาดจากเครือข่ายองค์กร ไม่มีข้อมูลลูกค้า และยังไม่มี Exploit code สาธารณะ กับ (B) ช่องโหว่ CVSS 7.8 (Remote Code Execution) บน Web Portal รับคำร้องของลูกค้าที่เปิดใช้งานจากอินเทอร์เน็ตโดยตรง และพบจาก Threat Feed (CISA KEV / ISAC) ว่ากลุ่มแฮกเกอร์กำลังใช้โจมตีจริงในสัปดาห์นี้',
        decisionTh:
          'ทีม Vulnerability Management จัดลำดับให้แก้ไขช่องโหว่ (B) ก่อนทันทีเป็นอันดับแรก (P1/Critical SLA) เพราะแม้คะแนน CVSS พื้นฐานจะต่ำกว่า แต่มี Exposure Factor สูง (Internet-facing), เป็น Classification ประเภท RCE, มี Active exploitation ใน Threat feed และส่งผลกระทบโดยตรงต่อข้อมูลลูกค้าและภาพลักษณ์องค์กร (Organizational impact) ส่วน (A) จัดอยู่ในลำดับถัดไปตามกรอบ Risk tolerance และ Environmental variables',
        takeawayTh:
          'Prioritization ต้องพิจารณาแบบ Multi-factor (CVSS + Exposure + Threat intelligence + Impact + Environmental variables) ไม่ใช่เรียงตามคะแนน CVSS ดิบอย่างเดียว'
      },
      {
        titleTh: 'การจัดการช่องโหว่ในแอปพลิเคชันองค์กรที่ใช้ระบบ Legacy และ Open-Source Libraries',
        contextTh:
          'ทีมพัฒนาซอฟต์แวร์ตรวจพบปัญหา 2 ส่วน: (1) เว็บแอปพลิเคชันใหม่มีไลบรารีล็อกไฟล์ (Logging package) เวอร์ชันเก่าที่มีช่องโหว่ RCE และพบปัญหา Cross-Site Scripting (XSS) ในหน้าแบบฟอร์ม กับ (2) ระบบบัญชีรุ่น Legacy บน Windows Server เก่าที่ผู้ขายเลิกสนับสนุนไม่สามารถอัปเกรดซอฟต์แวร์ได้ในไตรมาสนี้และหากหยุดระบบจะกระทบการปิดงบรายเดือน',
        decisionTh:
          'สำหรับเว็บใหม่ ทีม DevSecOps ใช้ Package Monitoring (SCA) อัปเดตไลบรารีทันที ผนวก SAST และ DAST เข้าใน CI/CD Pipeline เพื่อแก้บั๊ก XSS จากโค้ดและยืนยันผลขณะรัน (Verification/Rescanning) สำหรับระบบบัญชี Legacy ที่ยังแพตช์ไม่ได้ทันที ทีมความปลอดภัยเลือกใช้ Vulnerability Response แบบผสม: แยกเครื่องเข้า Isolated VLAN (Segmentation), ตั้งกฎ WAF/IPS แบบ Virtual Patching และจำกัดการเข้าถึงเฉพาะเครื่องที่ได้รับอนุญาต (Compensating Controls) พร้อมทำเอกสาร Exception/Exemption ที่มีวันหมดอายุ 90 วันเพื่อรอแผนเปลี่ยนระบบใหม่',
        takeawayTh:
          'เมื่อไม่สามารถ Patch ได้ทันทีหรือเป็นระบบ Legacy ต้องผสาน Segmentation, Compensating Controls และ Formal Exception ที่มีวันหมดอายุควบคู่กับการติดตามผล'
      }
    ],
    comparisonTables: [
      {
        captionTh: 'ตารางเปรียบเทียบเทคนิคการค้นหาช่องโหว่ (Vulnerability Identification Methods)',
        headersTh: ['วิธีการ', 'มุมมองและจังหวะเวลา', 'จุดเด่นเฉพาะตัว', 'ข้อจำกัด'],
        rowsTh: [
          ['Credentialed Vulnerability Scan', 'สแกนอัตโนมัติโดยล็อกอินเข้าเป้าหมาย', 'เห็นแพตช์ แพ็กเกจ และค่าคอนฟิกลึก ลด False Negative', 'ต้องจัดการ Credential ที่สแกนอย่างปลอดภัย'],
          ['SAST (Static Analysis)', 'วิเคราะห์ Source code / Binary (White-box)', 'พบจุดอ่อนตั้งแต่ยังไม่รัน/ใน CI/CD ระบุบรรทัดโค้ดได้', 'ไม่เห็นปัญหา Runtime/Config; อาจมี False Positive สูง'],
          ['DAST (Dynamic Analysis)', 'ทดสอบแอปที่รันอยู่จริงจากภายนอก (Black-box)', 'เจอช่องโหว่ Runtime, Auth, Session และ Config จริง', 'ไม่เห็นบรรทัดโค้ดต้นเหตุและตรวจได้ช้ากว่า SAST'],
          ['Package Monitoring (SCA)', 'ตรวจสอบ Third-party Dependencies / SBOM', 'แจ้งเตือนไวเมื่อ Open-source library มี CVE ใหม่', 'ตรวจเฉพาะส่วนประกอบภายนอก ไม่ตรวจ Logic ที่เขียนเอง'],
          ['Penetration Testing', 'ผู้เชี่ยวชาญจำลองการเจาะระบบจริง', 'พิสูจน์ Exploit Chaining และ Logic flaws ที่สแกนไม่เจอ', 'ทำได้เป็นรอบ ๆ (Point-in-time) และมีค่าใช้จ่ายสูง']
        ]
      },
      {
        captionTh: 'ตารางเปรียบเทียบทางเลือกการตอบสนองต่อช่องโหว่ (Vulnerability Response)',
        headersTh: ['แนวทาง Response', 'ลักษณะการดำเนินการ', 'เมื่อไรควรเลือกใช้', 'ผลต่อความเสี่ยงทางเทคนิค'],
        rowsTh: [
          ['Patching', 'ติดตั้งอัปเดต/Hotfix จากผู้พัฒนา', 'เมื่อมีแพตช์ออกแล้วและทดสอบไม่พังระบบธุรกิจ', 'กำจัดช่องโหว่ที่ต้นเหตุโดยสมบูรณ์'],
          ['Segmentation', 'แยกเครือข่าย/VLAN และจำกัด Traffic เข้า-ออก', 'ระบบที่แพตช์ช้าหรือระบบ OT/Legacy ที่มีความเสี่ยงสูง', 'ลด Exposure และจำกัดการแพร่กระจาย (Blast radius)'],
          ['Compensating Controls', 'ตั้ง WAF/IPS Virtual patching, Allowlisting, ACL', 'รอแพตช์จากผู้ขาย หรือซอฟต์แวร์หมดอายุสนับสนุน (EOL)', 'ลดโอกาสถูกโจมตีสำเร็จโดยไม่แตะต้องตัวโค้ดเก่า'],
          ['Exceptions / Exemptions', 'อนุมัติยกเว้นลายลักษณ์อักษรมีวันหมดอายุ', 'ความเสี่ยงอยู่ใน Risk tolerance หรือต้องใช้เวลาเปลี่ยนระบบ', 'ยอมรับความเสี่ยงชั่วคราว (ไม่ลดความเสี่ยงเอง ต้องมี Control เสริม)'],
          ['Insurance (Cyber)', 'ทำกรมธรรม์ประกันภัยไซเบอร์', 'เสริมเป็นเกราะการเงินสำหรับความเสี่ยงวิกฤตที่เหลืออยู่', 'โอนย้ายภาระทางการเงิน ไม่ได้ลดโอกาสโดนเจาะทางเทคนิค']
        ]
      }
    ],
    applicationsAndLimitations: {
      applicationsTh: [
        'ใช้วางระบบ Continuous Vulnerability Management ที่ผสานทั้งการสแกนโครงสร้างพื้นฐาน (Credentialed Scan), การสแกนโค้ด/แอปใน SDLC (SAST/DAST/SCA) และข่าวกรองภัยคุกคาม (Threat Feeds) เข้าด้วยกัน',
        'ใช้สร้าง Matrix การจัดลำดับความสำคัญ (Risk-based Prioritization) ที่กำหนด SLA การแก้ไขชัดเจนตาม Exposure, Impact และ Active Exploitation แทนการเรียงลำดับตามคะแนน CVSS เพียงอย่างเดียว',
        'ใช้สร้างหลักฐานความสอดคล้องตามข้อกำหนด (Compliance Audit) ผ่านการทำ Validation of Remediation และ Executive Reporting อย่างสม่ำเสมอ'
      ],
      limitationsTh: [
        'เครื่องสแกนช่องโหว่ตรวจจับได้เฉพาะช่องโหว่ที่รู้จักในฐานข้อมูล (Known CVEs) และ Misconfigurations พื้นฐาน จึงไม่สามารถตรวจพบ Zero-day หรือ Business Logic Flaws ที่ซับซ้อนโดยไม่มี Pentesting หรือ Bug Bounty',
        'คะแนน CVSS Base Score ไม่ได้คำนึงถึงบริบทเฉพาะขององค์กร หากผู้ดูแลใช้ Base Score ตัดสินโดยไม่ปรับ Environmental Variables จะเกิดการจัดสรรทรัพยากรผิดจุด',
        'การอนุมัติ Exceptions / Exemptions โดยไม่มีกำหนดวันหมดอายุ (Expiration Date) และไม่มี Compensating Controls มักทำให้เกิดช่องโหว่ถาวรที่ถูกลืมอยู่ในองค์กร'
      ]
    },
    commonMisconceptions: [
      {
        misconceptionTh: 'เข้าใจว่า Vulnerability Scanning กับ Penetration Testing เป็นสิ่งเดียวกัน แค่เปลี่ยนชื่อเรียกให้ดูทันสมัยขึ้น',
        clarificationTh:
          'Vulnerability Scanning เป็นการใช้เครื่องมืออัตโนมัติตรวจสอบและรายงาน "ความเป็นไปได้" ของช่องโหว่ที่มีอยู่ (Non-intrusive) แต่ Penetration Testing คือการจำลองการโจมตีจริงโดยคนเพื่อ "พิสูจน์ว่าเจาะได้จริง" และเชื่อมโยงช่องโหว่หลายจุดเข้าถึงเป้าหมายได้อย่างไร'
      },
      {
        misconceptionTh: 'คิดว่าเมื่อติดตั้ง Security Patch บนเซิร์ฟเวอร์เสร็จแล้วก็ถือว่าปิดงาน Vulnerability Management ได้ทันทีโดยไม่ต้องสแกนซ้ำ',
        clarificationTh:
          'บ่อยครั้งที่แพตช์ติดตั้งไม่สมบูรณ์ ลืมรีบูตบริการ หรือลืมแก้ค่าคอนฟิกร่วมด้วย จึงต้องทำ Validation of Remediation (Rescanning, Audit, Verification) เพื่อยืนยันว่าช่องโหว่หายไปจริงก่อนปิด Ticket'
      },
      {
        misconceptionTh: 'เชื่อว่าบริษัทที่ซื้อ Cyber Insurance วงเงินสูงแล้วไม่จำเป็นต้องลงทุนทำ Segmentation หรือ Compensating Controls สำหรับระบบเก่า',
        clarificationTh:
          'ประกันภัยไซเบอร์เป็นเพียง Risk Transference ด้านการเงิน ไม่ได้ป้องกันการถูกโจมตีหรือการหยุดชะงักทางธุรกิจ อีกทั้งบริษัทประกันมักปฏิเสธจ่ายค่าสินไหมหากพบว่าองค์กรละเลยมาตรการป้องกันพื้นฐาน (Lack of due care)'
      }
    ],
    scenarioAnalysisGuide: {
      approachStepsTh: [
        'ขั้นที่ 1 ระบุว่าโจทย์กำลังถามถึงระยะใดของ Vulnerability Management: ค้นหา (Identification), วิเคราะห์/จัดลำดับ (Analysis/Prioritization), แก้ไข/บรรเทา (Response) หรือตรวจซ้ำ/รายงาน (Validation/Reporting)',
        'ขั้นที่ 2 หากเป็น Identification ให้จับคู่เครื่องมือกับเป้าหมาย: ดูโค้ดก่อนรัน = SAST; เทสเว็บขณะรัน = DAST; ไลบรารีโอเพนซอร์ส = Package monitoring; แฮกเกอร์อิสระแจ้งอย่างถูกกติกา = Bug bounty; พิสูจน์เจาะจริง = Pentest',
        'ขั้นที่ 3 หากเป็น Analysis ให้ระวังคำลวง: รายงานผิดว่ามีทั้งที่ไม่เสี่ยง = False positive; รายงานว่าปลอดภัยทั้งที่มีรูรั่ว = False negative; จัดลำดับความสำคัญ = ดู Exposure + Threat feed + Organizational impact + Risk tolerance ร่วมกับ CVSS',
        'ขั้นที่ 4 หากเป็น Response เมื่อโจทย์บอกว่า "แพตช์ไม่ได้/ระบบพังถ้าอัปเดต" ให้เลือก Segmentation + Compensating controls (เช่น Virtual patching) และ Exception ที่มีวันหมดอายุ จากนั้นอย่าลืม Rescan/Verify หลังแก้เสมอ'
      ],
      examSignalKeywords: [
        { keywordEn: 'analyze source code without executing / CI pipeline', meaningTh: 'ชี้ไปยัง Static Analysis (SAST)' },
        { keywordEn: 'test running web app / black-box runtime', meaningTh: 'ชี้ไปยัง Dynamic Analysis (DAST)' },
        { keywordEn: 'third-party open-source dependencies / SBOM', meaningTh: 'ชี้ไปยัง Package Monitoring (SCA)' },
        { keywordEn: 'report says clean but vulnerability actually exists', meaningTh: 'ชี้ไปยัง False Negative (มักเกิดจาก Non-credentialed scan หรือ Firewall บัง)' },
        { keywordEn: 'CVSS score vs. internet-facing / active exploit / business impact', meaningTh: 'ชี้ไปยัง Vulnerability Prioritization (Exposure factor, Environmental variables, Impact)' },
        { keywordEn: 'vendor no longer issues patches / cannot patch immediately', meaningTh: 'ชี้ไปยัง Segmentation + Compensating Controls (เช่น Virtual patching) + Formal Exception' },
        { keywordEn: 'confirm patch fixed the issue / rescan after remediation', meaningTh: 'ชี้ไปยัง Validation of Remediation (Rescanning, Audit, Verification)' }
      ]
    },
    summaryTh: [
      'การระบุช่องโหว่ที่มีประสิทธิภาพต้องอาศัยหลายมุมมองร่วมกัน ทั้ง Credentialed Vulnerability Scans, AppSec (SAST, DAST, Package Monitoring), ข่าวกรองจาก Threat Feeds (OSINT, Proprietary, ISACs, Dark web), Penetration Testing, Bug Bounty และ System/Process Audits',
      'การวิเคราะห์ผลต้องแยกแยะ False Positives และระวัง False Negatives ให้แม่นยำ จากนั้นจัดลำดับความสำคัญโดยใช้ข้อมูลรอบด้านมากกว่าแค่คะแนน CVSS เช่น Exposure Factor, ประเภทช่องโหว่, Environmental Variables, ผลกระทบต่อธุรกิจ และ Risk Tolerance',
      'การตอบสนองต่อช่องโหว่ไม่ได้มีแค่ Patching แต่รวมถึง Segmentation, Compensating Controls (เช่น Virtual Patching), Cyber Insurance และ Exceptions ที่มีวันหมดอายุ โดยทุกการแก้ไขต้องจบด้วยการ Validation (Rescanning, Audit, Verification) และการรายงานผลที่เหมาะกับทั้งทีมเทคนิคและผู้บริหาร'
    ],
    knowledgeChecks: [
      {
        id: 'L4-04-KC1',
        questionTh:
          'ระหว่างการตรวจสอบหลังเหตุการณ์ระบบถูกเจาะ ทีมสืบสวนพบว่าเว็บเซิร์ฟเวอร์มีช่องโหว่สำคัญที่เปิดทางให้ผู้โจมตีเข้ามาได้ ทั้งที่ผลการรัน Vulnerability Scan แบบ Non-credentialed เมื่อสัปดาห์ก่อนรายงานว่า "ไม่พบช่องโหว่" ลักษณะของผลการสแกนที่ผิดพลาดเช่นนี้เรียกว่าอะไร?',
        choices: [
          { id: 'a', textTh: 'False negative' },
          { id: 'b', textTh: 'False positive' },
          { id: 'c', textTh: 'True positive' },
          { id: 'd', textTh: 'Compensating control' }
        ],
        correctChoiceId: 'a',
        explanationTh:
          'คำตอบที่ถูกต้องคือ a (False negative) เพราะระบบมีช่องโหว่อยู่จริง แต่เครื่องสแกนกลับรายงานผลว่าปลอดภัย/ไม่พบช่องโหว่ ซึ่งมักเกิดจากการสแกนแบบ Non-credentialed หรือ Signature ไม่ล่าสุด ทำให้องค์กรพลาดโอกาสอุดรูรั่ว ส่วน False positive (ข้อ b) คือแจ้งว่ามีช่องโหว่ทั้งที่จริงปลอดภัย'
      },
      {
        id: 'L4-04-KC2',
        questionTh:
          'ทีมพัฒนาแอปพลิเคชันต้องการเครื่องมือตรวจสอบความปลอดภัย 2 ส่วนในกระบวนการ DevSecOps: ส่วนแรกสำหรับสแกนหาข้อผิดพลาดในซอร์สโค้ด Python ก่อนที่จะคอมไพล์หรือรันแอป และส่วนที่สองสำหรับคอยแจ้งเตือนเมื่อแพ็กเกจ Open-source ที่โหลดมาใช้ในโปรเจกต์มีประกาศช่องโหว่ใหม่ ควรเลือกเทคนิคใดตามลำดับ?',
        choices: [
          { id: 'a', textTh: 'DAST และ Penetration Testing' },
          { id: 'b', textTh: 'Bug Bounty Program และ System Audit' },
          { id: 'c', textTh: 'Static Analysis (SAST) และ Package Monitoring' },
          { id: 'd', textTh: 'Dynamic Analysis (DAST) และ Non-credentialed Network Scan' }
        ],
        correctChoiceId: 'c',
        explanationTh:
          'คำตอบที่ถูกต้องคือ c เพราะการตรวจสอบซอร์สโค้ดโดยไม่รันโปรแกรมคือ Static Analysis (SAST) และการเฝ้าติดตามไลบรารีหรือแพ็กเกจ Open-source/Third-party เพื่อตรวจช่องโหว่ที่รู้จักคือ Package Monitoring (SCA) ส่วน DAST (ข้อ a, d) ทดสอบแอปขณะกำลังทำงานจริง และ Bug Bounty (ข้อ b) เป็นการรับรายงานจากนักวิจัยภายนอก'
      },
      {
        id: 'L4-04-KC3',
        questionTh:
          'ระบบการผลิตยาที่มีความสำคัญสูงใช้ซอฟต์แวร์ควบคุมรุ่นเก่าที่ผู้ผลิตหยุดออก Security Patch แล้ว และพบว่ามีช่องโหว่ RCE คะแนน CVSS 8.6 แต่ยังไม่สามารถเปลี่ยนระบบใหม่ได้ภายใน 6 เดือน ทีมความปลอดภัยควรตอบสนองด้วยชุดมาตรการใดเพื่อลดความเสี่ยงเชิงเทคนิคให้มากที่สุด?',
        choices: [
          { id: 'a', textTh: 'ซื้อกรมธรรม์ Cyber Insurance เพิ่มวงเงินเพียงอย่างเดียวแล้วปล่อยระบบไว้บนเครือข่ายหลักตามเดิม' },
          { id: 'b', textTh: 'ทำ Network Segmentation แยกระบบเข้าโซนเฉพาะ ร่วมกับ Compensating Controls (เช่น IPS Virtual Patching และจำกัด ACL เฉพาะเครื่องควบคุม) พร้อมขอ Exception แบบมีวันหมดอายุ' },
          { id: 'c', textTh: 'สั่งปิดระบบการผลิตยาทั้งหมดทันทีโดยไม่แจ้งผู้บริหารเพื่อรอจนกว่าจะมีแพตช์ใหม่' },
          { id: 'd', textTh: 'แก้ไขตัวเลขคะแนน CVSS ในรายงานผู้บริหารให้ต่ำลงเพื่อให้ผ่านเกณฑ์ Risk Tolerance' }
        ],
        correctChoiceId: 'b',
        explanationTh:
          'คำตอบที่ถูกต้องคือ b เพราะเมื่อไม่สามารถทำ Patching ได้ทันที การผสาน Segmentation เข้ากับ Compensating Controls (เช่น Virtual patching, Allowlisting/ACL) เป็นการลด Exposure และโอกาสโจมตีได้จริง ส่วนการออก Exception มีวันหมดอายุช่วยให้ติดตามแก้ในอนาคตได้ สำหรับข้อ a ประกันไม่ได้ลดความเสี่ยงทางเทคนิค ข้อ c ทำธุรกิจหยุดชะงักโดยไม่พิจารณาทางเลือกบรรเทา และข้อ d เป็นการบิดเบือนรายงานความเสี่ยง'
      },
      {
        id: 'L4-04-KC4',
        questionTh:
          'หลังจากทีมดูแลระบบติดตั้ง Security Patch ปิดช่องโหว่ Critical บนเซิร์ฟเวอร์ฐานข้อมูลครบทั้งหมด 15 เครื่องในคืนวันเสาร์เสร็จสิ้นแล้ว ขั้นตอนใดใน Vulnerability Management Lifecycle ที่จำเป็นต้องทำต่อก่อนจะปิด Ticket และสรุปรายงานผู้บริหาร?',
        choices: [
          { id: 'a', textTh: 'ประกาศโครงการ Bug Bounty Program ให้แฮกเกอร์ภายนอกเข้ามาโจมตีฐานข้อมูลโดยไม่มีขอบเขต' },
          { id: 'b', textTh: 'เปิดพอร์ตฐานข้อมูลออกสู่อินเทอร์เน็ตชั่วคราวเพื่อทำ DAST' },
          { id: 'c', textTh: 'ลบ Log การเปลี่ยนแปลงและยกเลิกการเฝ้าระวังบนเซิร์ฟเวอร์ทั้งหมด' },
          { id: 'd', textTh: 'ดำเนินการ Validation of Remediation ด้วยการ Rescanning (Credentialed), Audit การตั้งค่า และ Verification การทำงานของบริการ ก่อนออก Reporting' }
        ],
        correctChoiceId: 'd',
        explanationTh:
          'คำตอบที่ถูกต้องคือ d เพราะการแพตช์อาจล้มเหลวหรือยังไม่ถูกโหลดเข้าหน่วยความจำหากยังไม่ได้รีสตาร์ตบริการ จึงต้องผ่านขั้นตอน Validation of Remediation (Rescanning, Audit, Verification) เพื่อยืนยันว่าช่องโหว่ปิดสนิทและระบบยังทำงานปกติก่อนออก Reporting ปิดงาน ส่วนข้อ a, b และ c ล้วนเพิ่มความเสี่ยงหรือผิดขั้นตอนปฏิบัติการ'
      }
    ],
    references: [
      {
        title: 'CompTIA Security+ (SY0-701) Exam Objectives Version 5.0 — Objective 4.3',
        noteTh: 'Identification methods, Analysis (False positive/negative, Prioritization), Vulnerability response, Validation of remediation และ Reporting'
      },
      {
        title: 'NIST SP 800-40 Rev. 4 — Guide to Enterprise Patch Management Planning',
        noteTh: 'กรอบการจัดการช่องโหว่และการติดตั้งแพตช์ระดับองค์กรรวมถึงการใช้ Compensating Controls'
      },
      {
        title: 'FIRST Common Vulnerability Scoring System (CVSS) v3.1 / v4.0 & CISA KEV Catalog',
        noteTh: 'มาตรฐานการให้คะแนนความรุนแรงช่องโหว่และการจัดลำดับความสำคัญร่วมกับข้อมูล Exploit จริง'
      }
    ],
    relatedLessonIds: ['L2-04', 'L4-01', 'L4-03', 'L4-05', 'L5-02', 'L5-06']
  },
  {
    id: 'L4-05',
    examCode: 'SY0-701',
    domainId: 'D4',
    order: 28,
    titleTh: 'ระบบเฝ้าระวังและแจ้งเตือนความปลอดภัย (SIEM, SCAP, NetFlow, Alert Tuning)',
    titleEn: 'Security Monitoring & Alerting',
    estimatedMinutes: 45,
    learningObjectives: [
      'อธิบายขอบเขตการเฝ้าระวังทรัพยากรคอมพิวเตอร์ทั้ง 3 ชั้น ได้แก่ Systems, Applications และ Infrastructure',
      'วิเคราะห์กิจกรรมหลักในระบบเฝ้าระวัง (Log Aggregation, Alerting, Scanning, Reporting, Archiving) รวมถึงการตอบสนองและปรับจูน (Quarantine และ Alert Tuning) เพื่อลด Alert Fatigue',
      'เปรียบเทียบหน้าที่และข้อจำกัดของเครื่องมือ Security Monitoring ได้แก่ SCAP, Benchmarks, Agent/Agentless, SIEM, Antivirus, DLP, SNMP Traps, NetFlow และ Vulnerability Scanners'
    ],
    objectiveIds: ['4.4'],
    prerequisites: [
      'L2-08 การโจมตีแอปพลิเคชันและ Indicators of Compromise',
      'L4-01 Secure Baselines และการ Hardening อุปกรณ์และโครงสร้างพื้นฐาน',
      'L4-04 การบริหารจัดการช่องโหว่ (Vulnerability Management Lifecycle)'
    ],
    sections: [
      {
        id: 'sec-monitoring-resources-activities',
        titleTh: '1. การเฝ้าระวังทรัพยากรคอมพิวเตอร์ (Computing Resources) และกิจกรรมหลัก (Monitoring Activities)',
        contentTh: [
          'ระบบที่ Hardened มาอย่างดีในวันแรกไม่อาจรับประกันได้ว่าจะไม่ถูกเจาะในวันข้างหน้า Security Operations Center (SOC) จึงต้องเฝ้าระวัง (Monitoring) ทรัพยากรคอมพิวเตอร์อย่างต่อเนื่องครอบคลุม 3 ชั้นหลัก ตามกรอบ SY0-701 Objective 4.4 ได้แก่: (1) Systems — ระบบปฏิบัติการ เซิร์ฟเวอร์ และเครื่องผู้ใช้ปลายทาง โดยเฝ้าดูการทำงานของ CPU/RAM ที่พุ่งผิดปกติ การสร้างบัญชีแอดมินใหม่ การแก้ไข Registry/System files การล้มเหลวของการล็อกอิน และเหตุการณ์มัลแวร์, (2) Applications — เว็บแอปพลิเคชัน API และฐานข้อมูล โดยตรวจหา Error rates ที่สูงผิดปกติ การเรียก Query ฐานข้อมูลที่ผิดรูปแบบ API Abuse หรือความพยายามยกระดับสิทธิ์ในแอป, และ (3) Infrastructure — อุปกรณ์เครือข่าย Firewall, Switches, Routers, VPN และ Cloud Control Plane เพื่อจับความผิดปกติของปริมาณ Bandwidth การเปลี่ยน Route การเปิด-ปิดพอร์ต หรือการแก้ไข IAM Policy บนคลาวด์',
          'เพื่อให้ข้อมูลจากทั้ง 3 ชั้นเกิดประโยชน์จริง ทีมปฏิบัติการต้องดำเนินกิจกรรมหลัก (Activities) อย่างเป็นระบบ: เริ่มจาก Log Aggregation (การรวบรวม Log จากแหล่งต่าง ๆ เข้าสู่ศูนย์กลาง) เช่น Syslog, Windows Event Logs และ Cloud Audit Logs ปัญหาคลาสสิกของการรวบรวม Log คือแต่ละอุปกรณ์เขียน Format ไม่เหมือนกันและนาฬิกาไม่ตรงกัน ระบบรวบรวมจึงต้องทำ "Normalization" (จัดโครงสร้างฟิลด์ เช่น Source IP, Timestamp, Username ให้เป็นมาตรฐานเดียวกัน) และองค์กรต้องบังคับใช้ Network Time Protocol (NTP) Sync นาฬิกาทุกเครื่องให้ตรงกันอย่างแม่นยำ มิฉะนั้นจะไม่สามารถเรียงลำดับเหตุการณ์โจมตีข้ามอุปกรณ์ได้',
          'กิจกรรมถัดมาคือ Alerting (การแจ้งเตือนอัตโนมัติเมื่อเกิดเงื่อนไขตรงกับกฎตรวจจับหรือพฤติกรรมผิดปกติ), Scanning (การตรวจสแกนช่องโหว่และค่าคอนฟิกตามรอบเวลา), Reporting (การสรุปสถิติและหลักฐานส่งผู้บริหารหรือ Auditor) และ Archiving (การจัดเก็บ Log ระยะยาวแบบปลอดภัย เช่น ใช้ Immutable/WORM storage ที่แก้ไขลบย้อนหลังไม่ได้ และเข้ารหัสเพื่อรองรับการสืบสวนย้อนหลังหรือข้อกำหนดกฎหมายที่อาจบังคับเก็บ Log นาน 1–7 ปี)',
          'เมื่อเกิดการแจ้งเตือนขึ้น ขั้นตอนสำคัญที่สุดคือ Alert Response, Remediation and Validation โดยมี 2 กลไกเด่นที่มักออกสอบคือ: (1) Quarantine (การกักกัน) เมื่อระบบตรวจพบเครื่องลูกข่ายติดมัลแวร์หรือส่งทราฟฟิกอันตราย ระบบหรือนักวิเคราะห์จะแยกอุปกรณ์นั้นออกจากเครือข่ายหลักทันที (เช่น ย้ายเข้า Quarantine VLAN ผ่าน NAC หรือสั่ง Host Isolation ผ่าน EDR) เพื่อหยุดการแพร่กระจาย (Lateral Movement) ก่อนจะล้างเครื่องและตรวจสอบยืนยันว่าปลอดภัยแล้วจึงนำกลับเข้าเครือข่าย, และ (2) Alert Tuning (การปรับจูนการแจ้งเตือน) เพราะระบบตรวจจับที่ตั้งค่าไวเกินไปจะส่ง Alert ขยะ (False Positives) วันละหลายพันรายการจนนักวิเคราะห์เกิดอาการ "Alert Fatigue" (ความเหนื่อยล้าจากการแจ้งเตือนจนเผลอมองข้ามเหตุโจมตีจริง!) การทำ Alert Tuning จึงเป็นการปรับ Threshold เพิ่มข้อยกเว้นให้ทราฟฟิกที่ตรวจสอบแล้วว่าปลอดภัยจริง (Benign baseline) และปรับ Logic ของกฎให้แจ้งเตือนเฉพาะเหตุการณ์ที่มีคุณภาพและแม่นยำ'
        ],
        keyPointsTh: [
          'ต้องเฝ้าระวังให้ครบทั้ง 3 ชั้น: Systems (OS/Endpoint), Applications (Web/DB/API) และ Infrastructure (Network/Cloud)',
          'Log Aggregation ต้องมีทั้ง Normalization (จัดรูปแบบกลาง) และ NTP Time Synchronization เพื่อให้เชื่อมโยงเหตุการณ์ข้ามระบบได้',
          'Archiving เก็บ Log ระยะยาวแบบป้องกันการแก้ไขตามนโยบาย Retention และ Compliance',
          'Quarantine แยกเครื่องติดเชื้อหยุดการแพร่กระจายทันที ส่วน Alert Tuning ปรับลด False Positives เพื่อแก้ปัญหา Alert Fatigue'
        ]
      },
      {
        id: 'sec-monitoring-tools-siem-scap',
        titleTh: '2. เครื่องมือมาตรฐานและการวิเคราะห์เหตุการณ์: SIEM, SCAP, Benchmarks และ Agent vs. Agentless',
        contentTh: [
          'ในทางปฏิบัติ ทีม SOC อาศัยชุดเครื่องมือหลากหลายที่ทำหน้าที่ต่างกันอย่างชัดเจน เครื่องมือหัวใจหลักคือ SIEM (Security Information and Event Management) ซึ่งเป็นระบบศูนย์กลางที่รับ Log จากทุกแหล่งมาเก็บ ทำ Normalization และใช้ Correlation Engine เชื่อมโยงเหตุการณ์จากหลายอุปกรณ์เข้าด้วยกัน ตัวอย่างเช่น หาก Firewall เห็นการสแกนพอร์ต, ระบบ VPN เห็นการล็อกอินจากต่างประเทศที่ผิดปกติ (Impossible travel) และ Endpoint เห็นการรัน PowerShell — แม้ Log แต่ละตัวดูเหมือนเรื่องเล็กน้อย แต่ SIEM สามารถนำมาประมวลผลเชื่อมโยงกันแล้วสร้าง High-severity Alert แจ้งเตือนการโจมตีแบบหลายขั้นตอนได้ทันที พร้อม Dashboard และ Compliance Reporting',
          'กลุ่มต่อมาเป็นเครื่องมือด้านมาตรฐานการตั้งค่าและช่องโหว่ ได้แก่ SCAP (Security Content Automation Protocol) และ Benchmarks โดย Benchmarks (เช่น CIS Benchmarks หรือ DISA STIGs) คือ "คู่มือมาตรฐาน" ที่บอกว่าควรตั้งค่าความปลอดภัยระบบอย่างไร ส่วน SCAP คือ "ชุดโปรโตคอลและมาตรฐานเปิดจาก NIST" ที่ทำให้ซอฟต์แวร์สแกนความปลอดภัยสามารถอ่าน Benchmark เหล่านั้นมาตรวจวัดระบบจริงและรายงานผลเป็นภาษาเดียวกันได้อัตโนมัติ (SCAP ประกอบด้วยมาตรฐานย่อยอย่าง CVE, CCE, CPE, CVSS, XCCDF และ OVAL) จึงช่วยให้องค์กรสแกนหา Configuration Drift และเปรียบเทียบผลข้ามเครื่องมือได้โดยไม่ติดยี่ห้อใดยี่ห้อหนึ่ง คู่กับ Vulnerability Scanners ที่เน้นสแกนหาช่องโหว่จากแพตช์และซอฟต์แวร์ที่ล้าสมัย',
          'คำถามเชิงสถาปัตยกรรมที่สำคัญในการเลือกเครื่องมือเฝ้าระวังคือ "ควรใช้แบบ Agent-based หรือ Agentless ดี?" แบบ Agent-based คือการติดตั้งโปรแกรมขนาดเล็ก (Agent) ลงใน OS ของเครื่องเป้าหมาย ข้อดีคือเห็นข้อมูลเชิงลึกถึงระดับ Process, Memory, Registry และยังเก็บ Log/ทำงานได้แม้เครื่องนั้นพกพาไปใช้งานนอกออฟฟิศหรือออฟไลน์ชั่วคราว แต่ข้อเสียคือใช้ทรัพยากร CPU/RAM ของเครื่องและต้องคอยบริหารจัดการการอัปเดต Agent ในทุกเครื่อง ในทางกลับกัน แบบ Agentless จะใช้วิธีสำรวจและดึงข้อมูลจากระยะไกลผ่านโปรโตคอลเครือข่ายหรือ API (เช่น SSH, WMI, SNMP, Cloud API) ข้อดีคือติดตั้งง่าย ไม่กระทบเครื่องเป้าหมาย และจำเป็นอย่างยิ่งสำหรับอุปกรณ์ที่ลงซอฟต์แวร์เพิ่มไม่ได้ เช่น Switches, IoT, Printers หรือ ICS/SCADA แต่ข้อเสียคือเห็นรายละเอียดภายในเครื่องได้น้อยกว่าและต้องเก็บรักษา Credential สำหรับล็อกอินระยะไกลไว้อย่างปลอดภัย'
        ],
        keyPointsTh: [
          'SIEM ทำหน้าที่รวม Log, Normalization, Correlation เชื่อมโยงเหตุการณ์หลายแหล่ง และสร้าง Alert/Dashboard/Archive',
          'Benchmarks คือตัวมาตรฐานการตั้งค่าปลอดภัย ส่วน SCAP คือโปรโตคอลมาตรฐานเปิดที่ทำให้เครื่องมือตรวจวัด Compliance ตาม Benchmarks ได้อัตโนมัติ',
          'Agent-based เห็นข้อมูลเชิงลึกระดับ Process/File และตามเครื่องนอกออฟฟิศได้ ส่วน Agentless เหมาะกับ Network/IoT/OT ที่ลงโปรแกรมเพิ่มไม่ได้'
        ]
      },
      {
        id: 'sec-monitoring-tools-network-endpoint',
        titleTh: '3. เครื่องมือตรวจจับเฉพาะทาง: Antivirus, DLP, SNMP Traps และ NetFlow',
        contentTh: [
          'นอกจาก SIEM และ SCAP แล้ว SY0-701 Objective 4.4 ยังเน้นเครื่องมือตรวจจับเชิงลึกอีก 4 ประเภทที่ทำงานร่วมกันในระดับ Host, ข้อมูล และเครือข่าย ประเภทแรกคือ Antivirus (Anti-malware) ซึ่งติดตั้งบน Endpoints และ Servers เพื่อตรวจจับ ป้องกัน และกำจัดไฟล์หรือพฤติกรรมมัลแวร์ทั้งจาก Signature-based (เทียบลายเซ็นมัลแวร์ที่รู้จัก) และ Heuristics/Behavioral analysis (วิเคราะห์พฤติกรรมน่าสงสัย เช่น การเข้ารหัสไฟล์จำนวนมากแบบ Ransomware) ปัจจุบันมักพัฒนาต่อยอดเป็น Next-Gen AV และ EDR',
          'ประเภทที่สองคือ DLP (Data Loss Prevention) ซึ่งเป็นเครื่องมือที่คอยตรวจจับและบล็อกไม่ให้ข้อมูลอ่อนไหว (เช่น เลขบัตรประชาชน, เลขบัตรเครดิต, ซอร์สโค้ด, ไฟล์ป้าย Restricted) หลุดออกจากองค์กรโดยไม่ได้รับอนุญาต DLP ทำงานได้ทั้งระดับ Endpoint (บล็อกการก๊อปปี้ลง USB, ปริ้นต์ หรือ Copy-paste), ระดับ Network/Gateway (ตรวจจับการส่งไฟล์แนบทางอีเมลหรืออัปโหลดขึ้นเว็บ) และระดับ Storage/Cloud (ค้นหาข้อมูลลับที่ถูกเก็บผิดที่)',
          'ประเภทที่สามและสี่เป็นเครื่องมือเฝ้าระวังระดับเครือข่ายที่ผู้สอบมักนำมาสับสนกัน ได้แก่ SNMP Traps และ NetFlow: สำหรับ SNMP Traps (Simple Network Management Protocol) เป็นกลไกแจ้งเตือนแบบ Push (Asynchronous) ที่อุปกรณ์เครือข่าย เช่น Switch, Router, Firewall หรือเครื่องสำรองไฟ UPS ส่งสัญญาณแจ้งไปยังศูนย์กลางทันทีเมื่อเกิดเหตุการณ์สำคัญ เช่น พอร์ตดับ อุณหภูมิเกิน พัดลมเสีย มีการพยายามล็อกอินผิดซ้ำ ๆ หรือลิงก์เชื่อมต่อขาด ข้อควรระวังสำคัญในการสอบคือต้องใช้ **SNMPv3** เท่านั้นเพราะมีการยืนยันตัวตนและการเข้ารหัส (Authentication & Encryption) แทน SNMPv1/v2c ที่ส่ง Community String เป็น Plaintext บนเครือข่าย',
          'ส่วน NetFlow (รวมถึง sFlow และมาตรฐาน IPFIX) แตกต่างจากการจับแพ็กเก็ตเต็มรูปแบบ (Full Packet Capture / PCAP) และต่างจาก SNMP Traps ตรงที่ NetFlow ทำหน้าที่เก็บ "Metadata หรือสถิติการไหลของทราฟฟิกเครือข่าย" เช่น Source IP, Destination IP, Port ต้นทาง-ปลายทาง, Protocol, จำนวน Bytes/Packets และเวลาเริ่มต้น-สิ้นสุดการสื่อสาร **โดยไม่เก็บเนื้อหา Payload ของข้อมูล** เหตุใดองค์กรจึงนิยมใช้ NetFlow แทนการอัด PCAP ตลอดเวลา คำตอบคือ NetFlow ใช้พื้นที่จัดเก็บน้อยกว่า PCAP หลายร้อยเท่าและไม่ละเมิดเนื้อหาข้อมูลส่วนตัวที่เข้ารหัส แต่ยังคงทรงพลังมากในการตรวจจับความผิดปกติเชิงพฤติกรรม เช่น ปริมาณการส่งข้อมูลออกนอกองค์กรพุ่งสูงกลางดึก (Data Exfiltration), การสแกนพอร์ตจำนวนมาก (Port Scanning) หรือการติดต่อ C2 Server เป็นจังหวะสม่ำเสมอ (Beaconing)'
        ],
        keyPointsTh: [
          'Antivirus ป้องกันและตรวจจับมัลแวร์บนเครื่องด้วย Signature และ Behavioral analysis',
          'DLP เฝ้าระวังและยับยั้งการรั่วไหลของข้อมูลอ่อนไหวผ่าน USB, Email, Web upload และพื้นที่จัดเก็บ',
          'SNMP Traps เป็นข้อความแจ้งเตือนเหตุการณ์/สถานะจากอุปกรณ์เครือข่ายไปยังตัวจัดการ (ต้องใช้ SNMPv3 ที่มี Auth และ Encryption)',
          'NetFlow เก็บเฉพาะ Flow Metadata (IP, Port, Bytes, Timestamps — ไม่เก็บ Payload) เพื่อตรวจจับ Beaconing, Port scan และ Data exfiltration ด้วยพื้นที่เก็บขนาดเล็ก'
        ]
      }
    ],
    keyTerms: [
      {
        termEn: 'Log Aggregation & Normalization',
        explanationTh: 'การรวบรวม Log จากระบบที่หลากหลายเข้าสู่จุดศูนย์กลางพร้อมปรับรูปแบบฟิลด์ข้อมูลให้เป็นมาตรฐานเดียวกันเพื่อวิเคราะห์และเชื่อมโยงได้'
      },
      {
        termEn: 'Alert Tuning & Alert Fatigue',
        explanationTh: 'Alert Tuning คือการปรับแต่งกฎและ Thresholds เพื่อลด False Positives ซึ่งช่วยป้องกัน Alert Fatigue หรือภาวะที่นักวิเคราะห์เหนื่อยล้าจนมองข้ามภัยคุกคามจริง'
      },
      {
        termEn: 'Quarantine',
        explanationTh: 'การแยกอุปกรณ์ที่ต้องสงสัยหรือติดมัลแวร์ออกจากเครือข่ายหลักชั่วคราวเพื่อหยุดการแพร่กระจายก่อนดำเนินการล้างและตรวจสอบยืนยัน'
      },
      {
        termEn: 'SIEM',
        acronym: 'Security Information and Event Management',
        explanationTh: 'แพลตฟอร์มรวมศูนย์สำหรับเก็บ Log, ทำ Correlation เชื่อมโยงเหตุการณ์หลายแหล่ง, แจ้งเตือน, สร้าง Dashboard และจัดเก็บเพื่อตรวจสอบ'
      },
      {
        termEn: 'SCAP',
        acronym: 'Security Content Automation Protocol',
        explanationTh: 'ชุดมาตรฐานเปิดจาก NIST สำหรับทำให้การสแกนช่องโหว่ การตรวจสอบ Compliance เทียบกับ Benchmarks และการประเมินความปลอดภัยเป็นอัตโนมัติ'
      },
      {
        termEn: 'Agent-based vs. Agentless Monitoring',
        explanationTh: 'การเฝ้าระวังโดยติดตั้งซอฟต์แวร์บนเครื่องเป้าหมาย (เห็นลึก แต่อาจกินทรัพยากร) เทียบกับการดึงข้อมูลระยะไกลผ่านเครือข่าย/API (เหมาะกับอุปกรณ์ที่ลง Agent ไม่ได้)'
      },
      {
        termEn: 'SNMP Traps (SNMPv3)',
        explanationTh: 'กลไกการส่งข้อความแจ้งเตือนอัตโนมัติจากอุปกรณ์เครือข่ายเมื่อเกิดเหตุผิดปกติหรือเปลี่ยนสถานะ โดยต้องใช้ SNMPv3 เพื่อความปลอดภัย'
      },
      {
        termEn: 'NetFlow',
        explanationTh: 'โปรโตคอลบันทึก Metadata การสื่อสารเครือข่าย (IP, Port, Volume, Duration) โดยไม่เก็บเนื้อหา Payload ใช้ตรวจจับการรั่วไหลและพฤติกรรมผิดปกติ'
      }
    ],
    scenarios: [
      {
        titleTh: 'การแก้ปัญหา Alert Fatigue และ Time Skew ในศูนย์ปฏิบัติการ SOC',
        contextTh:
          'บริษัทเพิ่งติดตั้ง SIEM ใหม่ได้ 2 สัปดาห์ แต่นักวิเคราะห์ SOC กำลังประสบปัญหาอย่างหนักเพราะได้รับอีเมลแจ้งเตือนมากกว่า 8,000 รายการต่อวัน โดยส่วนใหญ่เป็นการแจ้งเตือนเรื่องการล็อกอินผิดพลาดจากสคริปต์ตรวจสอบระบบอัตโนมัติที่ปลอดภัย นอกจากนี้ เมื่อเกิดเหตุการณ์จริง นักวิเคราะห์ไม่สามารถเรียงลำดับเหตุการณ์ระหว่าง Log จาก Firewall และ Active Directory ได้เพราะเวลาคลาดเคลื่อนกันถึง 45 นาที',
        decisionTh:
          'ทีมวิศวกร SIEM แก้ปัญหาเรื่องเวลาด้วยการบังคับให้ทุกอุปกรณ์ซิงค์เวลาผ่านเซิร์ฟเวอร์ NTP เดียวกัน (UTC) เพื่อความแม่นยำในการทำ Correlation จากนั้นดำเนินการ "Alert Tuning" โดยสร้าง Baseline และข้อยกเว้นให้บัญชี Service account ของสคริปต์ตรวจสอบที่ยืนยันแล้วว่าปลอดภัย ปรับ Threshold การแจ้งเตือน Brute force ให้สมเหตุสมผล และแยก High-confidence alerts (เช่น มัลแวร์หรือข้อมูลรั่วไหล) ให้กระตุ้นขั้นตอน Quarantine อัตโนมัติหรือส่งต่อทันทีเพื่อลด Alert Fatigue',
        takeawayTh:
          'SIEM จะทำงานได้อย่างแม่นยำต้องมี NTP Time Sync, Normalization และ Alert Tuning ต่อเนื่อง มิฉะนั้นจะเกิด Alert Fatigue จนพลาดภัยคุกคามจริง'
      },
      {
        titleTh: 'การเลือกใช้ NetFlow, SNMPv3 Traps และ Agentless SCAP ในโครงสร้างพื้นฐานผสม',
        contextTh:
          'มหาวิทยาลัยแห่งหนึ่งต้องการตรวจจับพฤติกรรม Botnet ที่แอบส่งข้อมูลออกไปต่างประเทศในเวลากลางคืน ตรวจจับเมื่อ Switch หลักเกิดปัญหา Interface flap และตรวจสอบว่าเซิร์ฟเวอร์ Linux/Windows ทุกเครื่องตั้งค่าตรงตาม CIS Benchmark แต่ผู้บริหารไม่อนุญาตให้ทำ Full Packet Capture บน Core Network เพราะข้อจำกัดพื้นที่จัดเก็บและความเป็นส่วนตัวของข้อมูลการเรียนการสอน',
        decisionTh:
          'ทีมสถาปัตยกรรมเลือกเปิดใช้ NetFlow บน Core Routers/Switches เพื่อส่ง Traffic Metadata มาวิเคราะห์หา Data exfiltration และ C2 Beaconing โดยไม่เก็บ Payload, ตั้งค่า SNMPv3 Traps บนอุปกรณ์เครือข่ายทุกตัวเพื่อแจ้งเตือนสถานะฮาร์ดแวร์/พอร์ตดับเข้า SIEM ทันที และใช้เครื่องมือที่รองรับ SCAP ร่วมกับ CIS Benchmarks ตรวจสอบค่าคอนฟิกเซิร์ฟเวอร์ (โดยใช้ Agent-based สำหรับเครื่องพกพา/เซิร์ฟเวอร์หลัก และ Agentless สำหรับอุปกรณ์ที่ลงซอฟต์แวร์ไม่ได้)',
        takeawayTh:
          'เลือกใช้เครื่องมือให้ตรงกับข้อมูลที่ต้องการ: Flow metadata/Exfiltration -> NetFlow, Hardware/Port alerts -> SNMPv3 Traps, Config compliance -> SCAP + Benchmarks'
      }
    ],
    comparisonTables: [
      {
        captionTh: 'ตารางเปรียบเทียบเครื่องมือเฝ้าระวังความปลอดภัยและข้อมูลที่ได้ (Monitoring Tools)',
        headersTh: ['เครื่องมือ', 'ข้อมูลหลักที่จัดเก็บ / ตรวจจับ', 'จุดเด่นการใช้งาน', 'ข้อจำกัด / ข้อควรระวัง'],
        rowsTh: [
          ['SIEM', 'Log จากทุกระบบ (OS, App, FW, Cloud)', 'Correlation ข้ามระบบ, Alerting, Dashboard, Archive', 'ต้องทำ Normalization, NTP และ Alert Tuning ตลอดเวลา'],
          ['NetFlow / IPFIX', 'Flow Metadata (IP, Port, Bytes, Packets, Time)', 'ตรวจจับ Beaconing/Exfiltration ด้วยพื้นที่เก็บเล็กมาก', 'ไม่เห็นเนื้อหา Payload ภายในแพ็กเก็ต'],
          ['SNMP Traps', 'สถานะอุปกรณ์ พอร์ต และเหตุการณ์ฮาร์ดแวร์แบบ Push', 'แจ้งเตือนอุปกรณ์เครือข่าย/UPS ขัดข้องได้ทันที', 'ห้ามใช้ v1/v2c ที่เป็น Plaintext ต้องใช้ SNMPv3'],
          ['SCAP + Benchmarks', 'ค่าคอนฟิกระบบเทียบกับ CIS/STIGs และรหัส CVE/CCE', 'ตรวจสอบ Configuration Drift เป็นมาตรฐานอัตโนมัติ', 'ตรวจตามกรอบมาตรฐานที่กำหนด ไม่ได้จับพฤติกรรมโจมตีเรียลไทม์'],
          ['DLP', 'เนื้อหาและ Context ของข้อมูลอ่อนไหว (PII/IP)', 'ป้องกันข้อมูลรั่วไหลผ่าน USB, Email, Web upload', 'ตั้งค่าผิดอาจกระทบการทำงาน (False positives); ต้องกำหนด Classification ก่อน'],
          ['Vulnerability Scanner', 'เวอร์ชันซอฟต์แวร์ พอร์ต และ Misconfigurations', 'ค้นหาจุดอ่อนที่ต้องแพตช์ก่อนถูกโจมตี', 'เป็นภาพ ณ เวลาที่สแกน และอาจมี False Positive/Negative']
        ]
      },
      {
        captionTh: 'ตารางเปรียบเทียบ Agent-based vs. Agentless Monitoring',
        headersTh: ['เกณฑ์เปรียบเทียบ', 'Agent-based Monitoring', 'Agentless Monitoring'],
        rowsTh: [
          ['การติดตั้งบนเป้าหมาย', 'ต้องติดตั้ง Agent บน OS ทุกเครื่อง', 'ไม่ต้องติดตั้งซอฟต์แวร์บนเครื่องเป้าหมาย'],
          ['ความลึกของข้อมูล', 'ลึกมาก (Process, Memory, USB, Registry, File access)', 'จำกัดกว่า (อาศัย Network responses, SNMP, WMI, SSH, API)'],
          ['เครื่องนอกเครือข่าย (Remote)', 'เก็บ Log และส่งกลับเมื่อต่อเน็ต/VPN ได้', 'มักตรวจจับไม่ได้หากอยู่นอกระยะสแกน/เครือข่าย'],
          ['ผลกระทบและความเหมาะสม', 'ใช้ CPU/RAM บางส่วน; เหมาะกับ Workstations, Servers', 'ไม่กินทรัพยากรเครื่อง; เหมาะกับ IoT, OT, Switches, Printers']
        ]
      }
    ],
    applicationsAndLimitations: {
      applicationsTh: [
        'ใช้สร้างระบบ Visibility ครอบคลุมทั้งองค์กรตั้งแต่โครงสร้างพื้นฐานเครือข่าย แอปพลิเคชัน ไปจนถึงอุปกรณ์ปลายทาง เพื่อลดระยะเวลาในการตรวจพบภัยคุกคาม (Mean Time to Detect — MTTD)',
        'ใช้สนับสนุนการตรวจวัด Compliance อย่างต่อเนื่องด้วย SCAP + CIS Benchmarks และ Log Archiving ที่มีหลักฐานครบถ้วนสำหรับผู้ตรวจสอบบัญชีและหน่วยงานกำกับดูแล',
        'ใช้เชื่อมโยงเครื่องมือตรวจจับเข้ากับขั้นตอน Quarantine อัตโนมัติเพื่อสกัดกั้นการแพร่กระจายของ Ransomware ได้ภายในไม่กี่วินาทีหลังเกิด Alert ที่มีความมั่นใจสูง'
      ],
      limitationsTh: [
        'SIEM มีประสิทธิภาพเท่ากับคุณภาพของ Log ที่ป้อนเข้าไปเท่านั้น หากไม่ได้ส่ง Log สำคัญ (เช่น DNS logs, PowerShell logs, Cloud audit logs) หรือเวลาไม่ตรงกัน SIEM ก็ไม่สามารถ Correlate ได้',
        'การไม่ทำ Alert Tuning อย่างสม่ำเสมอจะทำให้ทีม SOC จมอยู่กับ Noise จนเกิด Alert Fatigue และพลาดสัญญาณโจมตีจริงที่ซ่อนอยู่ท่ามกลางการแจ้งเตือนจำนวนมาก',
        'NetFlow ไม่สามารถมองเห็นเนื้อหาภายในทราฟฟิกที่เข้ารหัสหรือคำสั่ง SQL ภายในเว็บได้ หากต้องการวิเคราะห์ระดับ Payload เพื่อสืบสวนเชิงลึกยังต้องอาศัย Full Packet Capture หรือ Endpoint/App Logs ร่วมด้วย'
      ]
    },
    commonMisconceptions: [
      {
        misconceptionTh: 'คิดว่า NetFlow มีไว้สำหรับดักจับเนื้อหาอีเมลหรือข้อความแชททั้งหมดเหมือน Packet Sniffer (PCAP)',
        clarificationTh:
          'NetFlow บันทึกเฉพาะ Metadata (ใครคุยกับใคร พอร์ตใด นานเท่าไร ปริมาณกี่ไบต์) โดยไม่เก็บเนื้อหา Payload เลย จึงใช้พื้นที่น้อยมากและเหมาะกับการหาปริมาณข้อมูลผิดปกติหรือ Beaconing ไม่ใช่การอ่านข้อความ'
      },
      {
        misconceptionTh: 'สับสนว่า SCAP คือซอฟต์แวร์ยี่ห้อหนึ่ง หรือคิดว่า SCAP กับ Benchmarks เป็นสิ่งเดียวกัน',
        clarificationTh:
          'Benchmarks (เช่น CIS Benchmarks) คือเนื้อหาเกณฑ์การตั้งค่าที่ปลอดภัย ส่วน SCAP คือโปรโตคอลมาตรฐานกลางที่ทำให้เครื่องสแกนยี่ห้อต่าง ๆ สามารถนำ Benchmarks นั้นไปตรวจวัดระบบและแลกเปลี่ยนผลลัพธ์กันได้อย่างเป็นอัตโนมัติ'
      },
      {
        misconceptionTh: 'เข้าใจว่าเมื่อได้รับ Alert จาก SIEM จำนวนมากควรปิด Rule แจ้งเตือนนั้นทิ้งไปเลยเพื่อแก้ปัญหา Alert Fatigue',
        clarificationTh:
          'การปิด Rule ไปเฉย ๆ จะทำให้เกิดจุดบอด (False Negative) วิธีที่ถูกต้องคือทำ Alert Tuning เช่น ปรับ Threshold กรองข้อยกเว้นเฉพาะโฮสต์ที่ยืนยันว่าปกติ และปรับเงื่อนไข Correlation ให้แม่นยำขึ้น'
      }
    ],
    scenarioAnalysisGuide: {
      approachStepsTh: [
        'ขั้นที่ 1 อ่านโจทย์เพื่อระบุว่ากำลังถามถึง "กิจกรรมใด" (รวม Log = Log aggregation, กักกันเครื่องติดเชื้อ = Quarantine, ลดเสียงรบกวนของ Alert = Alert tuning, เก็บ Log นาน = Archiving)',
        'ขั้นที่ 2 หากโจทย์ถามถึง "เครื่องมือ" ให้จับคู่จากลักษณะข้อมูลที่เก็บ: วิเคราะห์ Traffic metadata/ปริมาณข้อมูลโดยไม่เก็บ Payload = NetFlow; แจ้งเตือนพอร์ต/อุณหภูมิ Switch = SNMP traps (v3); รวม Log หลายแหล่งทำ Correlation = SIEM',
        'ขั้นที่ 3 หากโจทย์กล่าวถึงการเลือกวิธีเก็บข้อมูลบนอุปกรณ์ต่างชนิด (เช่น Server vs. IoT/Printer/Legacy OT) ให้พิจารณาข้อดี-ข้อเสียของ Agent-based กับ Agentless',
        'ขั้นที่ 4 หากโจทย์เน้นเรื่องการตรวจค่าคอนฟิกให้ตรงกับมาตรฐานอุตสาหกรรมแบบอัตโนมัติ ให้มองหาคำว่า SCAP และ Benchmarks (เช่น CIS/STIGs)'
      ],
      examSignalKeywords: [
        { keywordEn: 'too many false positives / analysts overwhelmed', meaningTh: 'ชี้ไปยัง Alert Fatigue และวิธีแก้คือ Alert Tuning' },
        { keywordEn: 'isolate infected endpoint from network immediately', meaningTh: 'ชี้ไปยัง Quarantine' },
        { keywordEn: 'timestamps out of sync / correlate across multiple devices', meaningTh: 'ชี้ไปยัง Log Aggregation + NTP Time Sync + SIEM Correlation' },
        { keywordEn: 'traffic statistics / IP and port pairs without payload', meaningTh: 'ชี้ไปยัง NetFlow (หรือ sFlow/IPFIX)' },
        { keywordEn: 'network switch sends alert on link down or high CPU', meaningTh: 'ชี้ไปยัง SNMP Traps (ควรตั้งค่าเป็น SNMPv3)' },
        { keywordEn: 'automated baseline compliance verification', meaningTh: 'ชี้ไปยัง SCAP และ Security Benchmarks (CIS/STIGs)' },
        { keywordEn: 'cannot install monitoring software on legacy/IoT device', meaningTh: 'ชี้ไปยัง Agentless Monitoring' }
      ]
    },
    summaryTh: [
      'การเฝ้าระวังความปลอดภัยต้องครอบคลุม Computing Resources ทั้ง 3 ระดับ (Systems, Applications, Infrastructure) ผ่านกิจกรรมหลัก ได้แก่ Log Aggregation (พร้อม Normalization และ NTP Sync), Alerting, Scanning, Reporting และ Archiving',
      'การตอบสนองต่อการแจ้งเตือนต้องผสมผสานระหว่าง Quarantine เพื่อกักกันเครื่องต้องสงสัยไม่ให้แพร่เชื้อทันที กับ Alert Tuning เพื่อลด False Positives และแก้ปัญหา Alert Fatigue โดยไม่สร้างจุดบอดในการตรวจจับ',
      'องค์กรต้องเลือกใช้เครื่องมือให้ตรงกับบทบาท ทั้ง SIEM สำหรับ Correlation ศูนย์กลาง, SCAP/Benchmarks สำหรับตรวจ Compliance อัตโนมัติ, Agent/Agentless ตามความเหมาะสมของอุปกรณ์, Antivirus/DLP สำหรับเครื่องและข้อมูล รวมถึง SNMPv3 Traps และ NetFlow สำหรับเฝ้าระวังเครือข่าย'
    ],
    knowledgeChecks: [
      {
        id: 'L4-05-KC1',
        questionTh:
          'วิศวกรเครือข่ายต้องการเฝ้าสังเกตปริมาณการสื่อสารผิดปกติ (เช่น เครื่องภายในแอบส่งข้อมูลขนาดใหญ่ไปยัง IP ต่างประเทศทุกคืน) โดยต้องประหยัดพื้นที่จัดเก็บ Log และห้ามบันทึกเนื้อหา Payload ของผู้ใช้เพื่อความเป็นส่วนตัว เครื่องมือใดเหมาะสมที่สุด?',
        choices: [
          { id: 'a', textTh: 'Full Packet Capture (PCAP) บนพอร์ตขาออกตลอด 24 ชั่วโมง' },
          { id: 'b', textTh: 'NetFlow (หรือ IPFIX)' },
          { id: 'c', textTh: 'SCAP Configuration Benchmark' },
          { id: 'd', textTh: 'Host-based Antivirus Signature Scan' }
        ],
        correctChoiceId: 'b',
        explanationTh:
          'คำตอบที่ถูกต้องคือ b (NetFlow) เพราะ NetFlow บันทึกเฉพาะ Metadata ของการจราจรเครือข่าย (Source/Dest IP, Port, Protocol, Bytes/Packets และ Timestamp) โดยไม่เก็บเนื้อหา Payload จึงใช้พื้นที่น้อยมากและตรวจจับพฤติกรรม Data Exfiltration หรือ Beaconing ได้ชัดเจน ส่วน PCAP (ข้อ a) เก็บเนื้อหาทั้งหมดและกินพื้นที่มหาศาล ข้อ c และ d ไม่ได้ติดตาม Traffic flow บนเครือข่าย'
      },
      {
        id: 'L4-05-KC2',
        questionTh:
          'นักวิเคราะห์ SOC ร้องเรียนว่าต้องไล่ปิด Alert เกี่ยวกับสคริปต์สำรองข้อมูลที่ทำงานปกติในเวลาเที่ยงคืนถึง 500 รายการต่อวัน จนทำให้เกือบพลาด Alert สำคัญเรื่องการล็อกอินผิดปกติของผู้ดูแลระบบ ทีมวิศวกร SIEM ควรแก้ไขอย่างไร?',
        choices: [
          { id: 'a', textTh: 'ปิดระบบ Alerting ทั้งหมดของ SIEM ในช่วงเวลาหลังเที่ยงคืน' },
          { id: 'b', textTh: 'สั่ง Quarantine เซิร์ฟเวอร์สำรองข้อมูลออกจากเครือข่ายถาวร' },
          { id: 'c', textTh: 'เปลี่ยนจาก Agent-based monitoring ไปใช้ SNMPv1 traps แทน' },
          { id: 'd', textTh: 'ทำ Alert Tuning โดยสร้างข้อยกเว้น/ปรับ Thresholds สำหรับพฤติกรรมสคริปต์สำรองข้อมูลที่ตรวจสอบแล้วว่าปลอดภัย เพื่อลด False Positives และ Alert Fatigue' }
        ],
        correctChoiceId: 'd',
        explanationTh:
          'คำตอบที่ถูกต้องคือ d (Alert Tuning) เพราะปัญหานี้คืออาการ Alert Fatigue จากกฎตรวจจับที่ยังไม่ได้ปรับจูนให้รู้จักทราฟฟิกปกติที่ได้รับอนุญาต การทำ Alert Tuning ช่วยลด False positives ทำให้ SOC โฟกัสกับภัยคุกคามจริงได้ ส่วนข้อ a สร้างจุดบอดร้ายแรง ข้อ b กระทบระบบสำรองข้อมูลโดยไม่มีเหตุอันควร และข้อ c ไม่แก้ปัญหาแถมลดความปลอดภัยด้วย SNMPv1'
      },
      {
        id: 'L4-05-KC3',
        questionTh:
          'ทีม IT ต้องการส่งข้อความแจ้งเตือนอัตโนมัติแบบ Asynchronous ทันทีที่อุปกรณ์ Core Switch เกิดพอร์ตเชื่อมต่อล่มหรือมีคนพยายามเข้าสู่หน้าตั้งค่าไม่สำเร็จ และต้องการตรวจสอบให้มั่นใจว่าการส่งข้อมูลแจ้งเตือนนั้นถูกเข้ารหัสและยืนยันตัวตนเพื่อป้องกันการดักฟัง ควรตั้งค่าอย่างไร?',
        choices: [
          { id: 'a', textTh: 'เปิดใช้งาน SNMPv3 Traps ส่งไปยังระบบจัดการศูนย์กลางหรือ SIEM' },
          { id: 'b', textTh: 'เปิดใช้งาน SNMPv1 Traps ด้วย Community string ค่าเริ่มต้น "public"' },
          { id: 'c', textTh: 'ติดตั้ง EDR Agent ลงใน OS ของ Core Switch' },
          { id: 'd', textTh: 'เปิดใช้งาน DLP เพื่อสแกนไฟล์ Word บน Switch' }
        ],
        correctChoiceId: 'a',
        explanationTh:
          'คำตอบที่ถูกต้องคือ a เพราะ SNMP Traps มีหน้าที่ส่งแจ้งเตือนสถานะและเหตุการณ์ผิดปกติจากอุปกรณ์เครือข่ายไปยังตัวจัดการโดยอัตโนมัติ และ SNMPv3 เป็นเวอร์ชันเดียวที่รองรับการยืนยันตัวตนและการเข้ารหัสข้อมูล ส่วนข้อ b (SNMPv1) ส่งข้อมูลเป็น Plaintext ไม่ปลอดภัย และข้อ c, d ไม่สามารถทำบน Core Switch ได้'
      },
      {
        id: 'L4-05-KC4',
        questionTh:
          'องค์กรต้องการให้เครื่องมือตรวจสอบความสอดคล้องของระบบปฏิบัติการหลายยี่ห้อเปรียบเทียบกับเกณฑ์มาตรฐาน CIS Benchmarks ได้อย่างเป็นอัตโนมัติและแลกเปลี่ยนรายงานผลเป็นรูปแบบมาตรฐานเดียวกันได้ ชุดโปรโตคอลใดที่ออกแบบมาเพื่อจุดประสงค์นี้?',
        choices: [
          { id: 'a', textTh: 'NetFlow' },
          { id: 'b', textTh: 'DLP' },
          { id: 'c', textTh: 'SCAP (Security Content Automation Protocol)' },
          { id: 'd', textTh: 'SAE (Simultaneous Authentication of Equals)' }
        ],
        correctChoiceId: 'c',
        explanationTh:
          'คำตอบที่ถูกต้องคือ c (SCAP) เพราะ SCAP เป็นชุดมาตรฐานเปิดของ NIST (รวมถึง CVE, CCE, XCCDF, OVAL) ที่ช่วยให้เครื่องมืออัตโนมัติสามารถตรวจสอบการตั้งค่าระบบและช่องโหว่เทียบกับ Benchmarks เช่น CIS Benchmarks และรายงานผลเป็นมาตรฐานเดียวกันได้ ส่วน NetFlow (ข้อ a) ตรวจ Traffic metadata, DLP (ข้อ b) กันข้อมูลรั่วไหล และ SAE (ข้อ d) เป็นโปรโตคอลของ WPA3'
      }
    ],
    references: [
      {
        title: 'CompTIA Security+ (SY0-701) Exam Objectives Version 5.0 — Objective 4.4',
        noteTh: 'Monitoring computing resources, Monitoring activities (Log aggregation, Quarantine, Alert tuning) และ Tools (SCAP, SIEM, NetFlow, SNMP traps)'
      },
      {
        title: 'NIST SP 800-92 — Guide to Computer Security Log Management',
        noteTh: 'แนวทางการทำ Log Aggregation, Time Synchronization, Normalization และ Archiving'
      },
      {
        title: 'NIST SP 800-126 Rev. 3 — The Technical Specification for the Security Content Automation Protocol (SCAP)',
        noteTh: 'รายละเอียดสถาปัตยกรรมและมาตรฐานย่อยใน SCAP สำหรับประเมินความปลอดภัยอัตโนมัติ'
      }
    ],
    relatedLessonIds: ['L2-08', 'L4-01', 'L4-04', 'L4-07', 'L4-11', 'L4-12']
  },
  {
    id: 'L4-06',
    examCode: 'SY0-701',
    domainId: 'D4',
    order: 29,
    titleTh: 'การเสริมแกร่ง Firewall, IDS/IPS, DNS/Web Filter และ Email Security',
    titleEn: 'Perimeter, Filtering & Email Auth',
    estimatedMinutes: 50,
    learningObjectives: [
      'ปรับแต่งและแก้ไขกฎ Firewall (Rules, ACLs, Ports/Protocols, Screened Subnets) รวมถึงเลือกใช้เทคโนโลยี IDS/IPS (Signatures, Trends, Transport Method) ให้สอดคล้องกับตำแหน่งในเครือข่ายได้',
      'อธิบายการทำงานและปรับแต่ง DNS Filtering และ Web Filtering (Centralized Proxy, URL Scanning, Content Categorization, Block Rules, Reputation) เพื่อสกัดกั้นการเชื่อมต่ออันตราย',
      'เลือกใช้ Secure Protocols และ Ports แทนโปรโตคอล Plaintext พร้อมวางระบบ Email Security ครบชุด (SPF, DKIM, DMARC และ Secure Email Gateway)'
    ],
    objectiveIds: ['4.5'],
    prerequisites: [
      'L1-06 PKI ใบรับรองดิจิทัล Hardware Crypto Tools และ Obfuscation',
      'L3-03 การออกแบบโครงสร้างเครือข่ายปลอดภัย Security Zones และ Failure Modes',
      'L3-04 Firewalls, Port Security (802.1X) และ Secure Access (VPN/SD-WAN/SASE)',
      'L4-05 ระบบเฝ้าระวังและแจ้งเตือนความปลอดภัย (SIEM, SCAP, NetFlow, Alert Tuning)'
    ],
    sections: [
      {
        id: 'sec-firewall-ids-ips',
        titleTh: '1. การปรับแต่ง Firewall (Rules, ACLs, Screened Subnets) และ IDS/IPS (Signatures, Trends, Transport Method)',
        contentTh: [
          'การมีอุปกรณ์ป้องกันติดตั้งอยู่ไม่ช่วยให้ปลอดภัยหากกฎภายในตั้งไว้หละหลวม ตามกรอบ SY0-701 Objective 4.5 (ส่วนที่ 1) การปรับแต่งความสามารถของ Perimeter และ Network Controls เริ่มจาก Firewall Rules และ Access Control Lists (ACLs) ซึ่งทำงานแบบ Top-down evaluation (อ่านกฎจากบรรทัดบนลงล่างและหยุดทำงานทันทีที่เจอกฎแรกที่ตรงเงื่อนไข หรือ First match wins) และลงท้ายด้วยกฎล่องหนที่สำคัญที่สุดคือ **Implicit Deny** (Deny any any) หมายความว่าทราฟฟิกใดที่ไม่ถูกอนุญาตอย่างชัดเจนในบรรทัดบนจะถูกปฏิเสธทั้งหมด ข้อผิดพลาดที่ออกสอบบ่อยคือการวางกฎ Permit Broad อยู่ด้านบนเหนือกฎ Deny Specific ทำให้กฎ Deny ด้านล่างไม่เคยถูกเรียกใช้งาน หลักปฏิบัติจึงต้องวาง Specific rules ไว้บนสุดเสมอ และควบคุมทั้ง Ingress (ขาเข้า) และ Egress (ขาออก — เพื่อกันมัลแวร์ติดต่อ C2 Server หรือขโมยข้อมูลออก) รวมถึงการควบคุม Ports และ Protocols ให้เปิดเท่าที่จำเป็น (Least functionality)',
          'ในการจัดวางโครงสร้างเครือข่าย เซิร์ฟเวอร์ที่ต้องเปิดให้บริการแก่โลกภายนอก เช่น Public Web Server, External DNS หรือ Mail Relay ห้ามนำไปวางในเครือข่ายภายใน (Internal trusted LAN) แต่ต้องแยกออกมาอยู่ในโซนกึ่งกลางที่เรียกว่า **Screened Subnet** (เดิมเรียก DMZ — Demilitarized Zone) ซึ่งกั้นด้วย Firewall โดยอนุญาตให้อินเทอร์เน็ตเชื่อมต่อได้เฉพาะบริการที่ระบุใน Screened Subnet เท่านั้น และห้ามเซิร์ฟเวอร์ใน Screened Subnet เปิดการเชื่อมต่อตรงเข้าสู่เครือข่ายภายใน (หรือจำกัดเฉพาะพอร์ตที่จำเป็นผ่าน Backend firewall) เพื่อไม่ให้ผู้โจมตีที่ยึดเว็บเซิร์ฟเวอร์ได้กระโดดเข้ายึด Active Directory ภายในต่อทันที',
          'ต่อมาคือการปรับปรุงระบบตรวจจับและป้องกันการบุกรุก **IDS (Intrusion Detection System) และ IPS (Intrusion Prevention System)** โดย IDS ทำงานแบบ Passive (Out-of-band) เพื่อตรวจจับและแจ้งเตือนโดยไม่ขัดขวางทราฟฟิก ส่วน IPS วางแบบ Inline (Active) เพื่อดัก Drop แพ็กเก็ตหรือตัด Connection ได้ทันทีเมื่อเจอการโจมตี ในการปรับจูน IDS/IPS ต้องคำนึงถึง 3 องค์ประกอบ: (1) **Signatures** — ฐานข้อมูลลายเซ็นรูปแบบการโจมตีที่รู้จัก ต้องอัปเดตให้ทันสมัยและปรับเปิด-ปิด Signature ให้ตรงกับ OS/แอปพลิเคชันที่มีอยู่จริงในองค์กรเพื่อลด False Positives และภาระ CPU, (2) **Trends** — การวิเคราะห์แนวโน้มและพฤติกรรมผิดปกติเทียบกับ Baseline (Anomaly/Trend analysis) เช่น ปริมาณการเชื่อมต่อที่ค่อย ๆ ไต่ระดับ หรือการสแกนแบบ Low-and-slow เพื่อจับการโจมตีแบบใหม่ (Zero-day) ที่ยังไม่มี Signature และ (3) **Transport Method** — วิธีการส่งทราฟฟิกเข้าสู่ตัวตรวจจับ ได้แก่ Inline (สำหรับ IPS ที่ต้องให้ทราฟฟิกวิ่งผ่านจริง), Network TAP (Test Access Point — อุปกรณ์ฮาร์ดแวร์แยกสัญญาณแบบเต็มอัตราโดยไม่ทำให้ทราฟฟิกหลักช้าลงหรือขาดการเชื่อมต่อ) และ SPAN / Port Mirroring (ให้ Switch คัดลอกทราฟฟิกส่งไปที่พอร์ต IDS ซึ่งประหยัดงบแต่เสี่ยงเกิด Dropped packets เมื่อสวิตช์ทำงานหนัก)'
        ],
        keyPointsTh: [
          'Firewall ACLs ประมวลผลจากบนลงล่าง (Top-down / First match wins) และจบด้วย Implicit Deny ต้องวาง Specific rules ก่อน General rules และกรองทั้ง Ingress/Egress',
          'Screened Subnet (DMZ) แยก Public-facing servers ออกจากเครือข่ายภายในเพื่อกัน Lateral movement หากเซิร์ฟเวอร์หน้าบ้านถูกยึด',
          'IDS/IPS ใช้ทั้ง Signatures (จับภัยที่รู้จักได้แม่นยำ) และ Trends/Anomaly (จับพฤติกรรมเบี่ยงเบนและ Zero-day)',
          'Transport method: Inline (สำหรับ IPS บล็อกทันที), Hardware TAP (คัดลอกทราฟฟิกเสถียรสุดไม่กระทบสายหลัก) และ SPAN/Port Mirroring (ประหยัดแต่เสี่ยง Packet drop)'
        ]
      },
      {
        id: 'sec-dns-web-filtering',
        titleTh: '2. การเสริมแกร่งด้วย DNS Filtering, Web Filtering และ Secure Protocols',
        contentTh: [
          'ภัยคุกคามยุคใหม่แทบทั้งหมดตั้งแต่ Phishing, Malvertising ไปจนถึง Command-and-Control (C2) callback ต้องอาศัยการแปลงชื่อโดเมนหรือการสื่อสารผ่านเว็บ องค์กรจึงใช้ระบบคัดกรอง 2 ชั้นที่ทำงานเสริมกันคือ DNS Filtering และ Web Filtering ชั้นแรก **DNS Filtering** ทำงานที่ระดับการแปลงชื่อโดเมน (DNS Resolution) ก่อนที่เครื่องลูกข่ายจะทันได้เปิด TCP connection ไปยังปลายทางเสียด้วยซ้ำ เมื่อพนักงานคลิกลิงก์ Phishing หรือมัลแวร์พยายามเรียกโดเมน C2 ตัวกรอง DNS (เช่น Protective DNS / DNS Sinkholing) จะตรวจสอบกับฐานข้อมูลภัยคุกคามแล้วตอบกลับเป็น IP หลอกภายใน (Sinkhole) หรือปฏิเสธ (NXDOMAIN) ทันที จุดเด่นของ DNS Filtering คือทำงานเร็ว เบา ครอบคลุมทุกแอปพลิเคชันและอุปกรณ์ IoT ที่ใช้ DNS โดยไม่ต้องจัดการ Proxy บนเบราว์เซอร์ แต่ข้อจำกัดคือตรวจดูเนื้อหาภายใน URL path หรือไฟล์ที่ดาวน์โหลดไม่ได้ และต้องบล็อกไม่ให้ผู้ใช้ตั้งค่า DNS ภายนอกหรือ DoH ข้ามระบบองค์กรออกไป',
          'ชั้นที่สองที่มีความละเอียดลึกกว่าคือ **Web Filtering** ซึ่งมักทำงานผ่าน **Centralized Proxy** (Forward Proxy) ที่บังคับให้ทราฟฟิกเว็บ (HTTP/HTTPS) ทั้งหมดวิ่งผ่านจุดเดียวเพื่อตรวจสอบ บันทึก Log และถอดรหัสตรวจสอบ TLS (HTTPS/TLS Inspection) ความสามารถหลักที่ต้องปรับแต่งใน Web Filter ได้แก่: (1) **URL Scanning** — ตรวจสอบโครงสร้าง URL เต็มรูปแบบ (เช่น Query parameters ที่ซ่อนสคริปต์โจมตีหรือลิงก์ดาวน์โหลดไฟล์อันตราย), (2) **Content Categorization** — จัดหมวดหมู่เว็บไซต์ (เช่น Malware, Phishing, Newly Registered Domains - NRD, Gambling, Social Media, File Sharing) เพื่อตั้งกฎอนุญาตหรือบล็อกตามนโยบายธุรกิจ, (3) **Block Rules** — การสร้าง Allowlist/Denylist ตาม Domain, IP หรือนามสกุลไฟล์ที่ไม่อนุญาตให้ดาวน์โหลด (เช่น .exe, .bat, .ps1) และ (4) **Reputation** — การให้คะแนนความน่าเชื่อถือของเว็บไซต์แบบไดนามิก หากเป็นโดเมนที่เพิ่งจดทะเบียนใหม่ไม่กี่วันหรือเคยมีประวัติแพร่กระจายมัลแวร์ ระบบจะบล็อกหรือเตือนผู้ใช้งานทันที',
          'อีกหนึ่งการปรับแต่งที่ขาดไม่ได้ในองค์กรคือ **Implementation of Secure Protocols** ซึ่งประกอบด้วยสองการตัดสินใจ: **Protocol Selection** (การเลือกใช้โปรโตคอลที่เข้ารหัสและยืนยันตัวตนแทนโปรโตคอล Plaintext รุ่นเก่า) และ **Port Selection** (การเปิดเฉพาะพอร์ตของโปรโตคอลปลอดภัยและปิดพอร์ตไม่ปลอดภัยบน Firewall/Host) ตัวอย่างมาตรฐานที่ผู้สอบ Security+ ต้องจำให้แม่นยำ ได้แก่ เปลี่ยน Telnet (TCP 23) -> **SSHv2 (TCP 22)**, เปลี่ยน HTTP (TCP 80) -> **HTTPS / TLS 1.3 (TCP 443)**, เปลี่ยน FTP (TCP 20/21) -> **SFTP (TCP 22)** หรือ **FTPS (TCP 989/990)**, เปลี่ยน SNMPv1/v2c (UDP 161/162) -> **SNMPv3**, เปลี่ยน LDAP (TCP 389) -> **LDAPS (TCP 636)**, เปลี่ยน POP3 (110) / IMAP (143) -> **POP3S (995) / IMAPS (993)** และเสริมความปลอดภัย DNS ด้วย **DoH (DNS over HTTPS — 443) / DoT (DNS over TLS — 853) / DNSSEC** ทั้งนี้พึงระวังว่า การย้ายพอร์ตบริการที่ไม่ปลอดภัยไปใช้เลขพอร์ตอื่น (เช่น ย้าย Telnet ไปพอร์ต 2323) เป็นเพียง Security through Obscurity ไม่ใช่ Secure Protocol Selection'
        ],
        keyPointsTh: [
          'DNS Filtering สกัดกั้นระดับการแปลงชื่อโดเมน (เร็ว เบา คุมได้ทุกโปรโตคอลที่ใช้ DNS) ก่อนเกิดการเชื่อมต่อ',
          'Web Filter ผ่าน Centralized Proxy ตรวจลึกถึงระดับ URL, Content Categorization, File Block Rules และ Domain Reputation (พร้อมทำ TLS Inspection ได้)',
          'Secure Protocol & Port Selection: แทนที่ Telnet/HTTP/FTP/LDAP/SNMPv1 ด้วย SSH (22), HTTPS (443), SFTP (22), LDAPS (636), SNMPv3 และปิดพอร์ต Plaintext ทิ้ง'
        ]
      },
      {
        id: 'sec-email-security',
        titleTh: '3. ความปลอดภัยระบบอีเมล (Email Security): SPF, DKIM, DMARC และ Secure Email Gateway',
        contentTh: [
          'อีเมลยังคงเป็น Threat Vector อันดับหนึ่งสำหรับการโจมตีแบบ Phishing และ Business Email Compromise (BEC) สาเหตุหลักมาจากการที่โปรโตคอล SMTP ดั้งเดิมไม่ได้ออกแบบให้ตรวจสอบว่า "ผู้ส่งเป็นเจ้าของโดเมนที่กล่าวอ้างจริงหรือไม่" ใครก็สามารถส่งอีเมลปลอมช่อง Header `From:` ให้ดูเหมือนมาจากผู้บริหารหรือธนาคารได้ เพื่ออุดช่องโหว่นี้ องค์กรต้องนำมาตรฐาน Email Authentication ทั้ง 3 ตัวมาทำงานร่วมกันบน DNS ควบคู่กับ Secure Email Gateway (SEG)',
          'ตัวแรกคือ **SPF (Sender Policy Framework)** ซึ่งเป็นการประกาศรายชื่อ IP Addresses หรือ Mail Servers ทั้งหมดที่องค์กรอนุญาตให้ส่งอีเมลในนามโดเมนของตนผ่าน DNS TXT Record (เช่น `v=spf1 ip4:203.0.113.10 include:_spf.example.com -all`) เมื่อเซิร์ฟเวอร์ผู้รับได้รับอีเมล จะตรวจสอบ IP ของเซิร์ฟเวอร์ผู้ส่งกับ SPF record ของโดเมนใน Envelope `MAIL FROM` เพื่อกันการสวมรอยส่งจากเซิร์ฟเวอร์เถื่อน อย่างไรก็ตาม SPF มีจุดอ่อน 2 ประการคือ (1) เมื่ออีเมลถูก Forward ต่อหลายทอด IP ต้นทางจะเปลี่ยนทำให้ SPF อาจล้มเหลว และ (2) SPF ไม่ได้ตรวจโดเมนที่แสดงให้ผู้ใช้เห็นใน Header `From:` โดยตรง และไม่ได้ตรวจสอบว่าเนื้อหาถูกแก้ไขกลางทางหรือไม่',
          'ตัวที่สองคือ **DKIM (DomainKeys Identified Mail)** ซึ่งแก้ปัญหาเรื่องความถูกต้องของเนื้อหา (Integrity) และความเป็นต้นฉบับ (Authenticity) ด้วยการเข้ารหัสแบบอสมมาตร (Public-key cryptography) โดยเมลเซิร์ฟเวอร์ผู้ส่งจะใช้ Private Key สร้างลายเซ็นดิจิทัล (Digital Signature) จากส่วน Header และ Body ของอีเมลแนบไปใน `DKIM-Signature` Header จากนั้นเซิร์ฟเวอร์ผู้รับจะไปดึง Public Key ที่เผยแพร่อยู่ใน DNS TXT Record ของโดเมนผู้ส่งมาตรวจสอบลายเซ็น หากอีเมลถูกแก้ไขเนื้อหาระหว่างทางหรือถูกปลอมโดยผู้ไม่มี Private Key ลายเซ็นจะไม่ผ่านทันที และข้อดีอีกอย่างคือ DKIM ยังคงผ่านการตรวจสอบได้แม้มีการ Forward อีเมลหากเนื้อหาไม่ถูกดัดแปลง',
          'ตัวที่สามคือ **DMARC (Domain-based Message Authentication, Reporting, and Conformance)** ซึ่งเป็นกรอบนโยบายที่ประสาน SPF และ DKIM เข้าด้วยกันและเพิ่มสิ่งที่ขาดไป 3 ประการ: (1) **Identifier Alignment** — บังคับให้โดเมนใน Header `From:` ที่ผู้ใช้มองเห็นบนหน้าจอต้องตรงกับโดเมนที่ผ่าน SPF หรือ DKIM จริง เพื่อป้องกันการปลอมหน้ากากผู้ส่ง, (2) **Policy Action** — บอกเมลเซิร์ฟเวอร์ปลายทางว่าควรทำอย่างไรกับอีเมลที่ตกการตรวจสอบ ได้แก่ `p=none` (Monitor: ปล่อยผ่านแต่ส่งรายงานกลับมาใช้ช่วงเริ่มต้นทดสอบ), `p=quarantine` (ส่งเข้าโฟลเดอร์ Spam/Junk) และ `p=reject` (ปฏิเสธทิ้งทันที ไม่นำส่งให้ผู้ใช้ — ปลอดภัยสูงสุด) และ (3) **Reporting** — ส่งรายงานสรุปสถิติ (`rua`) และรายละเอียดเหตุการณ์ (`ruf`) กลับมาให้ผู้ดูแลโดเมนตรวจสอบว่ามีใครพยายามแอบอ้างชื่อโดเมนองค์กรส่งฟิชชิงหรือไม่',
          'นอกเหนือจาก 3 มาตรฐานบน DNS แล้ว องค์กรยังต้องติดตั้ง **Secure Email Gateway (SEG)** เป็นด่านหน้าคัดกรองทั้งอีเมลขาเข้าและขาออก เพราะ SPF/DKIM/DMARC ยืนยันได้เฉพาะว่า "โดเมนผู้ส่งเป็นของจริง" แต่ไม่ได้แปลว่าอีเมลจากโดเมนจริงที่ถูกแฮกหรือโดเมนใหม่ที่ผู้โจมตีจดเองจะไม่มีไวรัสหรือลิงก์อันตราย SEG จึงทำหน้าที่กรอง Spam, สแกนไวรัสและเปิดไฟล์แนบใน Sandbox (Attachment detonation), แปลงลิงก์เพื่อตรวจตอนกดจริง (URL/Link rewriting — Time-of-click inspection), บังคับเข้ารหัสช่องทางส่งอีเมล (TLS / S/MIME) และทำ Outbound DLP ป้องกันพนักงานส่งข้อมูลลับออกนอกองค์กร'
        ],
        keyPointsTh: [
          'SPF ระบุ IP/Mail Server ที่ได้รับอนุญาตให้ส่งอีเมลแทนโดเมนใน DNS TXT record เพื่อกัน Spoofing ระดับเซิร์ฟเวอร์',
          'DKIM ใช้ Digital Signature (Public/Private Key) รับรองว่าอีเมลมาจากเจ้าของโดเมนจริงและเนื้อหาไม่ถูกแก้ไขกลางทาง',
          'DMARC บังคับ Alignment กับ Header From:, กำหนดนโยบายจัดการ (p=none, p=quarantine, p=reject) และส่งรายงาน (rua/ruf) กลับมาให้เจ้าของโดเมน',
          'Secure Email Gateway (SEG) คัดกรองเนื้อหาจริง (Phishing, Sandbox ไฟล์แนบ, Time-of-click URL rewriting, TLS และ Outbound DLP) ซึ่ง SPF/DKIM/DMARC ไม่ได้ตรวจเนื้อหา'
        ]
      }
    ],
    keyTerms: [
      {
        termEn: 'Implicit Deny & Top-Down ACL',
        explanationTh: 'หลักการทำงานของ Firewall ACL ที่ประมวลผลกฎจากบนลงล่าง (First match wins) และปฏิเสธทราฟฟิกที่เหลือทั้งหมดท้ายสุดโดยปริยาย'
      },
      {
        termEn: 'Screened Subnet (DMZ)',
        explanationTh: 'โซนเครือข่ายกึ่งกลางสำหรับวางเซิร์ฟเวอร์ที่ต้องให้บริการจากภายนอก (เช่น Web/Mail) เพื่อคั่นกลางไม่ให้เชื่อมตรงสู่เครือข่ายภายใน'
      },
      {
        termEn: 'TAP vs. SPAN (Port Mirroring)',
        explanationTh: 'Transport method สำหรับส่งสำเนาทราฟฟิกเข้า IDS: TAP เป็นอุปกรณ์ฮาร์ดแวร์แยกสัญญาณที่ไม่กระทบสายหลัก ส่วน SPAN ใช้ Switch คัดลอกพอร์ต'
      },
      {
        termEn: 'DNS Filtering & Sinkholing',
        explanationTh: 'การคัดกรองและสกัดกั้นการเข้าถึงโดเมนอันตรายตั้งแต่ขั้นตอน DNS Resolution ด้วยการบล็อกหรือเบี่ยงเบนไปที่ IP กักกัน'
      },
      {
        termEn: 'Centralized Web Proxy',
        explanationTh: 'ตัวกลางรับส่งทราฟฟิกเว็บของทั้งองค์กรเพื่อตรวจ URL Scanning, Content Categorization, Reputation, Block Rules และ HTTPS Inspection'
      },
      {
        termEn: 'SPF',
        acronym: 'Sender Policy Framework',
        explanationTh: 'DNS TXT record ที่ระบุรายชื่อ IP ของ Mail Server ที่ได้รับอนุญาตให้ส่งอีเมลในนามโดเมนขององค์กร'
      },
      {
        termEn: 'DKIM',
        acronym: 'DomainKeys Identified Mail',
        explanationTh: 'มาตรฐานการใช้ลายเซ็นดิจิทัลในอีเมล Header เพื่อยืนยันตัวตนโดเมนผู้ส่งและความสมบูรณ์ของเนื้อหาไม่ให้ถูกแก้ไขกลางทาง'
      },
      {
        termEn: 'DMARC',
        acronym: 'Domain-based Message Authentication, Reporting, and Conformance',
        explanationTh: 'นโยบายบน DNS ที่ใช้ SPF+DKIM พร้อม Alignment เพื่อสั่งการปลายทาง (none/quarantine/reject) และรับรายงานการแอบอ้างโดเมน'
      },
      {
        termEn: 'Secure Email Gateway',
        acronym: 'SEG',
        explanationTh: 'เกตเวย์ด่านหน้าที่คัดกรองอีเมลเข้า-ออกด้วย Antispam, Attachment Sandboxing, Time-of-click URL analysis และ Email DLP'
      }
    ],
    scenarios: [
      {
        titleTh: 'การแก้ไข Firewall ACL ที่ตั้งลำดับผิดพลาดและย้ายเซิร์ฟเวอร์สู่ Screened Subnet',
        contextTh:
          'ผู้ดูแลระบบตั้งกฎ Firewall เพื่อบล็อกทราฟฟิก Telnet (TCP 23) จากอินเทอร์เน็ตเข้าสู่เครือข่าย แต่ระหว่างตรวจสอบกลับพบว่ายังมีการเชื่อมต่อ Telnet เข้าถึง Web Server ภายในได้ เมื่อตรวจดูลำดับกฎ ACL พบว่าบรรทัดที่ 1 ระบุ `Permit TCP Any to 10.10.0.0/16 Any` และบรรทัดที่ 5 ระบุ `Deny TCP Any to Any Port 23` นอกจากนี้ Web Server สาธารณะยังตั้งอยู่ใน VLAN เดียวกับเครื่องพนักงานฝ่ายบัญชี',
        decisionTh:
          'ทีมวิศวกรเครือข่ายแก้ไข ACL โดยยกเลิกกฎ Permit Any ที่กว้างเกินไป เปลี่ยนเป็น Specific rules และย้ายกฎ Explicit Deny สำหรับโปรโตคอลอันตราย (พร้อมปิดบริการ Telnet เปลี่ยนไปใช้ SSHv2/443 แทน) ไว้ด้านบนโดยอาศัย Implicit Deny ท้ายตาราง จากนั้นย้าย Web Server ออกจาก VLAN บัญชีไปไว้ใน Screened Subnet (DMZ) พร้อมเปิดใช้งาน IPS แบบ Inline และตั้ง Egress Filtering กันการเชื่อมต่อจาก Screened Subnet เข้าสู่ LAN ภายใน',
        takeawayTh:
          'ลำดับกฎ ACL (First match wins), การเปลี่ยนจากโปรโตคอล Plaintext เป็น Secure Protocol และการวาง Public server ใน Screened Subnet เป็นหลักการพื้นฐานของ Perimeter Security'
      },
      {
        titleTh: 'การหยุดยั้งแคมเปญปลอมแปลงโดเมนองค์กร (Domain Spoofing) ด้วย SPF, DKIM, DMARC และ SEG',
        contextTh:
          'ลูกค้าของบริษัทประกันภัยร้องเรียนว่าได้รับอีเมลปลอมที่ใช้ชื่อผู้ส่ง `@company-insurance.example` หลอกให้โอนเงินค่าต่อกรมธรรม์ เมื่อตรวจสอบ DNS พบว่าบริษัทยังไม่มี DKIM และ DMARC ส่วน SPF ลงท้ายด้วย `~all` (SoftFail) ขณะเดียวกันพนักงานภายในก็ได้รับอีเมลจากภายนอกที่แนบไฟล์เอกสารอันตรายและลิงก์หลอกขอรหัสผ่านบ่อยครั้ง',
        decisionTh:
          'ทีม Email Security วางแผนปรับปรุงเป็นระยะ: (1) ตรวจสอบรายการ Mail Servers ทั้งหมดใน SPF และตั้งค่า DKIM signing ให้ครบทุกบริการที่ส่งอีเมลในนามองค์กร, (2) ประกาศใช้ DMARC เริ่มจาก `p=none` พร้อมเปิดรับรายงาน `rua` เพื่อดูว่ามีบริการแท้ตัวใดตกหล่น เมื่อมั่นใจ 100% จึงปรับ SPF เป็น `-all` (HardFail) และปรับ DMARC เป็น `p=quarantine` และ `p=reject` ในที่สุด เพื่อหยุด Domain Spoofing ถึงลูกค้า และ (3) เปิดใช้ Secure Email Gateway สำหรับขาเข้าเพื่อทำ Attachment Sandboxing และ URL Rewriting ป้องกันพนักงานคลิกลิงก์ฟิชชิงจากโดเมนอื่น',
        takeawayTh:
          'SPF + DKIM + DMARC (p=reject) ป้องกันคนอื่นปลอมชื่อโดเมนองค์กร ส่วน Secure Email Gateway ป้องกันภัยคุกคามในเนื้อหา/ไฟล์แนบที่ส่งเข้ามาหาพนักงาน'
      }
    ],
    comparisonTables: [
      {
        captionTh: 'ตารางเปรียบเทียบมาตรฐาน Email Security (SPF, DKIM, DMARC และ SEG)',
        headersTh: ['เทคโนโลยี', 'กลไกการทำงาน', 'สิ่งที่ป้องกัน / ตรวจจับได้', 'จุดที่ยังทำไม่ได้เอง'],
        rowsTh: [
          ['SPF', 'DNS TXT ระบุรายการ IP ที่ส่งเมลแทนโดเมนได้', 'ตรวจยืนยัน IP ต้นทางของเซิร์ฟเวอร์ที่ส่งเมล', 'ไม่ตรวจ Header From:, ไม่ตรวจการแก้เนื้อหา และอาจพังเมื่อ Forward เมล'],
          ['DKIM', 'ใช้ Private/Public Key ลงลายเซ็นดิจิทัลในเมล', 'รับรองความแท้จริงของโดเมนผู้ส่งและ Integrity ของเนื้อหา', 'ไม่กำหนดว่าปลายทางต้อง Reject เมลที่ไม่มีลายเซ็นอย่างไร'],
          ['DMARC', 'นโยบาย DNS ใช้ SPF+DKIM + Alignment Check', 'ป้องกันปลอม Header From: สั่ง Reject/Quarantine และส่ง Report', 'ไม่สแกนไวรัส ลิงก์ฟิชชิง หรือเนื้อหาหลอกลวงจากโดเมนจริง/โดเมนอื่น'],
          ['Secure Email Gateway (SEG)', 'พร็อกซีกรองอีเมลเข้า-ออกด้วย Sandbox/URL/DLP', 'จับมัลแวร์ ไฟล์แนบอันตราย ลิงก์ปลอม และ Email DLP ขาออก', 'ต้องพึ่ง SPF/DKIM/DMARC ช่วยยืนยันความน่าเชื่อถือของโดเมนผู้ส่ง']
        ]
      },
      {
        captionTh: 'ตารางเปรียบเทียบการเปลี่ยนจากโปรโตคอลไม่ปลอดภัยสู่ Secure Protocols & Ports',
        headersTh: ['โปรโตคอลเดิม (ไม่ปลอดภัย)', 'พอร์ตเดิม', 'Secure Protocol ที่ต้องเลือกใช้', 'พอร์ตมาตรฐานปลอดภัย', 'ความแตกต่างด้านความปลอดภัย'],
        rowsTh: [
          ['Telnet', 'TCP 23', 'SSH (Secure Shell v2)', 'TCP 22', 'เข้ารหัส Session การจัดการและคำสั่งทั้งหมดแทน Plaintext'],
          ['HTTP', 'TCP 80', 'HTTPS (TLS 1.2 / 1.3)', 'TCP 443', 'เข้ารหัสเว็บและยืนยันตัวตนเซิร์ฟเวอร์ด้วย Certificate'],
          ['FTP', 'TCP 20/21', 'SFTP / FTPS', 'TCP 22 (SFTP) / 989,990 (FTPS)', 'เข้ารหัสทั้ง Credentials และไฟล์ที่โอนย้าย'],
          ['LDAP', 'TCP 389', 'LDAPS / LDAP over TLS', 'TCP 636', 'เข้ารหัสการสอบถามข้อมูล Directory และรหัสผ่าน'],
          ['SNMPv1 / v2c', 'UDP 161/162', 'SNMPv3', 'UDP 161/162', 'รองรับการยืนยันตัวตนผู้ใช้และการเข้ารหัส Payload แทน Community string'],
          ['Plain DNS', 'UDP/TCP 53', 'DoT / DoH (+ DNSSEC)', 'TCP 853 (DoT) / TCP 443 (DoH)', 'เข้ารหัสคำขอ DNS กันดักฟัง/ปลอมแปลง; DNSSEC ยืนยันความถูกต้อง Record']
        ]
      }
    ],
    applicationsAndLimitations: {
      applicationsTh: [
        'ใช้ป้องกันแบบ Defense-in-Depth ตั้งแต่ระดับ Perimeter (Firewall/Screened Subnet/IPS) ระดับ DNS/Web (DNS Filter + Centralized Proxy) จนถึงระดับ Application/Email (Secure Protocols + SPF/DKIM/DMARC/SEG)',
        'ใช้สร้างความมั่นใจแก่ลูกค้าและคู่ค้าภายนอกว่าอีเมลที่แอบอ้างชื่อโดเมนขององค์กรจะถูกปลายทางบล็อกทันทีเมื่อบังคับใช้ DMARC p=reject',
        'ใช้ควบคุมทราฟฟิกขาออก (Egress Filtering + Web Proxy + DNS Filtering) เพื่อตัดวงจรการติดต่อ C2 ของมัลแวร์และการนำข้อมูลออกนอกองค์กร'
      ],
      limitationsTh: [
        'การตั้งค่า IPS แบบ Inline และ Web Proxy ที่เข้มงวดเกินไปอาจทำให้ทราฟฟิกธุรกิจเกิด Latency หรือถูกบล็อกผิดพลาด (False positive blocking) ต้องอาศัยการทดสอบและตั้ง Fail-open/Fail-closed ให้เหมาะกับบริบท',
        'การทำ HTTPS/TLS Inspection บน Centralized Proxy เพื่อตรวจจับมัลแวร์ที่ซ่อนในทราฟฟิกเข้ารหัสอาจขัดกับกฎหมายความเป็นส่วนตัวในบางกรณี (เช่น ข้อมูลธนาคารหรือสุขภาพของพนักงาน) จึงต้องกำหนด Bypass list อย่างระมัดระวัง',
        'การข้ามขั้นไปตั้ง DMARC `p=reject` ทันทีโดยไม่ผ่านระยะ `p=none` เพื่อตรวจสอบรายงานก่อน อาจทำให้อีเมลแท้จากระบบการตลาดหรือระบบแจ้งเตือนที่ลืมใส่ใน SPF/DKIM ถูกตีกลับทั้งหมด'
      ]
    },
    commonMisconceptions: [
      {
        misconceptionTh: 'เข้าใจว่าเมื่อตั้งค่า Firewall ลำดับที่ 1 เป็น Permit any แล้วใส่กฎ Deny เฉพาะพอร์ตไว้ด้านล่าง ระบบจะยังบล็อกพอร์ตนั้นได้',
        clarificationTh:
          'Firewall ACL ทำงานแบบ Top-down (First match wins) เมื่อแพ็กเก็ตตรงกับกฎ Permit any บรรทัดบนสุดแล้วจะถูกปล่อยผ่านทันทีโดยไม่อ่านกฎ Deny ด้านล่างเลย จึงต้องวางกฎเฉพาะเจาะจง (Specific) ไว้ก่อนกฎทั่วไปเสมอ'
      },
      {
        misconceptionTh: 'เชื่อว่า SPF, DKIM และ DMARC สามารถป้องกันการได้รับอีเมล Phishing ที่แนบมัลแวร์มาจากโดเมนของแฮกเกอร์เอง (เช่น lookalike domain) ได้',
        clarificationTh:
          'แฮกเกอร์ที่จดโดเมนคล้ายกัน (Typosquatting) สามารถตั้งค่า SPF/DKIM/DMARC ของโดเมนปลอมตัวเองให้ผ่านทั้งหมดได้ การจับอีเมลหลอกลวงหรือมัลแวร์จากโดเมนเหล่านี้จึงต้องพึ่ง Secure Email Gateway (SEG), Reputation, URL/Sandbox scanning และ User awareness'
      },
      {
        misconceptionTh: 'คิดว่าการเปลี่ยนพอร์ตของ Telnet จาก 23 ไปเป็น 2323 หรือ HTTP จาก 80 ไปเป็น 8080 ถือเป็นการทำ Secure Port Selection แล้ว',
        clarificationTh:
          'การเปลี่ยนแค่เลขพอร์ตโดยยังใช้โปรโตคอลเดิมเป็นการพรางตัวชั่วคราว (Security through Obscurity) ซึ่งผู้โจมตีค้นพบด้วย Port scanner ได้ทันทีและยังดักฟังรหัสผ่าน Plaintext ได้เหมือนเดิม ต้องเปลี่ยนเป็น Secure Protocols (SSH, HTTPS) เท่านั้น'
      }
    ],
    scenarioAnalysisGuide: {
      approachStepsTh: [
        'ขั้นที่ 1 หากโจทย์แสดงตารางกฎ Firewall ACL ให้ไล่อ่านทีละบรรทัดจากบนลงล่างทันที (Top-down) ดูว่ามีกฎ Permit กว้างเกินไปอยู่เหนือ Deny หรือไม่ และเช็ก Placement ว่า Public server อยู่ใน Screened subnet หรือไม่',
        'ขั้นที่ 2 หากโจทย์เกี่ยวกับ IDS/IPS ให้แยกว่าต้องการ "แค่เตือน" (IDS + TAP/SPAN) หรือ "บล็อกอัตโนมัติ" (IPS + Inline) และเช็กว่าขาด Signature update หรือ Trend analysis สำหรับ Zero-day',
        'ขั้นที่ 3 หากโจทย์ต้องการกรองโดเมนอันตรายอย่างรวดเร็วทุกโปรโตคอลให้เลือก DNS Filtering แต่หากต้องการตรวจ URL path, หมวดหมู่เว็บ, สแกนไฟล์ดาวน์โหลด หรือถอดรหัส HTTPS ให้เลือก Centralized Web Proxy / Web Filter',
        'ขั้นที่ 4 หากโจทย์เป็น Email Security ให้แยกหน้าที่ให้ชัด: ตรวจ IP เซิร์ฟเวอร์ส่ง = SPF; ลงลายเซ็นรับรอง Integrity/Authenticity = DKIM; Alignment + สั่ง Reject/Quarantine/Report = DMARC; กรองไฟล์แนบ/ลิงก์อันตราย/DLP = Secure Email Gateway'
      ],
      examSignalKeywords: [
        { keywordEn: 'ACL rule order / rule shadowed / permit any above deny', meaningTh: 'ชี้ไปยังการเรียงลำดับ Firewall ACL แบบ Top-down (วาง Specific ก่อน General)' },
        { keywordEn: 'public web server isolated from internal LAN', meaningTh: 'ชี้ไปยัง Screened Subnet (DMZ)' },
        { keywordEn: 'hardware passive copy without impacting throughput vs switch port copy', meaningTh: 'ชี้ไปยัง Hardware TAP vs. SPAN (Port Mirroring) สำหรับ IDS' },
        { keywordEn: 'block malicious C2 domains at resolution stage', meaningTh: 'ชี้ไปยัง DNS Filtering / Sinkholing' },
        { keywordEn: 'inspect HTTPS URLs, file types, content categories', meaningTh: 'ชี้ไปยัง Centralized Web Proxy / Web Filter' },
        { keywordEn: 'replace Telnet / FTP / HTTP / SNMPv1', meaningTh: 'ชี้ไปยัง Secure Protocols & Ports (SSH 22, SFTP 22/FTPS, HTTPS 443, SNMPv3)' },
        { keywordEn: 'stop domain spoofing / alignment / p=none -> p=reject', meaningTh: 'ชี้ไปยัง SPF + DKIM + DMARC' },
        { keywordEn: 'attachment sandboxing / time-of-click URL rewrite', meaningTh: 'ชี้ไปยัง Secure Email Gateway (SEG)' }
      ]
    },
    summaryTh: [
      'การเสริมแกร่งระดับ Perimeter และเครือข่ายต้องอาศัยการเขียน Firewall Rules/ACLs ที่ถูกต้องตามหลัก Top-down และ Implicit Deny การแยก Public servers ไว้ใน Screened Subnet (DMZ) และการเลือกใช้ IDS/IPS ให้เหมาะทั้งด้าน Signatures, Trends และ Transport Method (Inline, TAP, SPAN)',
      'การควบคุมการเชื่อมต่อภายนอกที่มีประสิทธิภาพใช้ทั้ง DNS Filtering (สกัดกั้นระดับโดเมนอย่างรวดเร็ว) และ Web Filtering ผ่าน Centralized Proxy (ตรวจสอบ URL Scanning, Content Categorization, Block Rules และ Reputation) ควบคู่กับการเปลี่ยนมาใช้ Secure Protocols & Ports แทนโปรโตคอล Plaintext ทั้งหมด',
      'ระบบ Email Security ที่สมบูรณ์ต้องตั้งค่า SPF, DKIM และ DMARC (Alignment + นโยบาย p=none/quarantine/reject + รายงาน) บน DNS เพื่อยุติการปลอมแปลงชื่อโดเมน และเสริมด้วย Secure Email Gateway (SEG) เพื่อสแกนเนื้อหา ไฟล์แนบ และลิงก์อันตราย'
    ],
    knowledgeChecks: [
      {
        id: 'L4-06-KC1',
        questionTh:
          'ผู้ดูแลระบบต้องการปรับแต่งระบบคัดกรองเว็บไซต์องค์กรเพื่อให้สามารถถอดรหัสตรวจทราฟฟิก HTTPS ดู URL เต็มรูปแบบ บล็อกเว็บไซต์ตามหมวดหมู่ (Content categorization) และสกัดกั้นการดาวน์โหลดไฟล์ `.exe` จากเว็บไซต์ที่มีคะแนนความน่าเชื่อถือ (Reputation) ต่ำ เทคโนโลยีใดตอบโจทย์ได้ครบถ้วนที่สุด?',
        choices: [
          { id: 'a', textTh: 'DNS Filtering แบบแจกไฟล์ Hosts บนเครื่องลูกข่ายเท่านั้น' },
          { id: 'b', textTh: 'Passive IDS ที่เชื่อมต่อผ่านพอร์ต SPAN' },
          { id: 'c', textTh: 'Centralized Web Proxy / Web Filter ที่รองรับ TLS Inspection, URL Scanning และ Reputation rules' },
          { id: 'd', textTh: 'การเปิดใช้ SPF และ DKIM บนเซิร์ฟเวอร์ DNS' }
        ],
        correctChoiceId: 'c',
        explanationTh:
          'คำตอบที่ถูกต้องคือ c เพราะ Centralized Web Proxy/Web Filter ทำหน้าที่เป็นตัวกลางที่สามารถถอดรหัส HTTPS (TLS inspection), ตรวจ URL เต็ม, จัดหมวดหมู่ Content categorization, ตั้ง Block rules ตามนามสกุลไฟล์และประเมิน Reputation ได้ครบถ้วน ส่วน DNS Filtering (ข้อ a) เห็นแค่ชื่อโดเมนไม่เห็น URL path หรือชนิดไฟล์ ข้อ b ไม่ได้บล็อกทราฟฟิก และข้อ d เป็นของระบบอีเมล'
      },
      {
        id: 'L4-06-KC2',
        questionTh:
          'บริษัทกำลังตั้งค่าการยืนยันตัวตนอีเมลเพื่อป้องกันผู้โจมตีปลอม Header `From:` เป็นชื่อโดเมนของบริษัทหลอกลวงลูกค้า ปัจจุบันบริษัทระบุ IP ที่ได้รับอนุญาตใน SPF และลงลายเซ็นดิจิทัลด้วย DKIM แล้ว แต่ต้องการกำหนดนโยบายให้เมลเซิร์ฟเวอร์ของลูกค้าตีกลับ (Reject) อีเมลปลอมทั้งหมดทันทีพร้อมส่งรายงานกลับมาให้ฝ่าย IT ควรตั้งค่าใดเพิ่มเติม?',
        choices: [
          { id: 'a', textTh: 'ประกาศ DMARC record ใน DNS โดยกำหนดนโยบาย `p=reject` และระบุอีเมลรับรายงาน `rua`' },
          { id: 'b', textTh: 'เปลี่ยนโปรโตคอลรับส่งอีเมลทั้งหมดเป็น Telnet พอร์ต 23' },
          { id: 'c', textTh: 'ตั้งค่า DMARC record เป็น `p=none` เพื่อสั่งให้ปลายทางลบอีเมลทิ้งทันที' },
          { id: 'd', textTh: 'ลบ SPF และ DKIM ออกแล้วใช้เพียง Firewall Implicit Allow แทน' }
        ],
        correctChoiceId: 'a',
        explanationTh:
          'คำตอบที่ถูกต้องคือ a เพราะ DMARC ทำหน้าที่ตรวจสอบ Alignment ระหว่าง Header From: กับ SPF/DKIM และกำหนดนโยบายให้ปลายทางจัดการอีเมลที่ไม่ผ่าน โดย `p=reject` สั่งให้ปฏิเสธอีเมลปลอมทันที และ `rua` ใช้กำหนดปลายทางรับ Aggregate reports ส่วน `p=none` (ข้อ c) เป็นเพียงโหมดสังเกตการณ์ไม่ปฏิเสธอีเมล ข้อ b และ d ผิดหลักความปลอดภัยอย่างร้ายแรง'
      },
      {
        id: 'L4-06-KC3',
        questionTh:
          'วิศวกรเครือข่ายต้องการเพิ่มเซ็นเซอร์ IDS เพื่อเฝ้าตรวจจับทราฟฟิกทั้งหมดที่วิ่งเข้าออกจาก Data Center โดยต้องมั่นใจว่าเซ็นเซอร์จะไม่ทำให้ทราฟฟิกหลักเกิด Latency ไม่เป็น Single Point of Failure หากตัวเซ็นเซอร์ดับ และไม่มีปัญหา Dropped Packets เมื่อทราฟฟิกหนาแน่นเหมือนการตั้งค่าบนสวิตช์ ควรเลือก Transport Method ใด?',
        choices: [
          { id: 'a', textTh: 'Inline IPS Deployment แบบ Fail-closed' },
          { id: 'b', textTh: 'SPAN (Port Mirroring) บน Switch เดิม' },
          { id: 'c', textTh: 'Centralized Forward Web Proxy' },
          { id: 'd', textTh: 'Hardware Network TAP (Test Access Point)' }
        ],
        correctChoiceId: 'd',
        explanationTh:
          'คำตอบที่ถูกต้องคือ d (Hardware Network TAP) เพราะ TAP เป็นอุปกรณ์แยกสัญญาณทางกายภาพที่ส่งสำเนาทราฟฟิกทั้งหมดให้ IDS แบบ Out-of-band โดยไม่สร้าง Latency ไม่หยุดสายหลักหากเซ็นเซอร์ดับ และไม่ Drop packets เมื่อ CPU ของสวิตช์ทำงานหนักเหมือน SPAN (ข้อ b) ส่วนข้อ a เป็น Inline ที่อาจกระทบความต่อเนื่องหรือเกิด Latency และข้อ c เป็นพร็อกซีเฉพาะเว็บ'
      },
      {
        id: 'L4-06-KC4',
        questionTh:
          'ระหว่างการตรวจสอบกฎ Firewall ACL พบชุดกฎเรียงลำดับดังนี้:\n1. Permit TCP Any to 192.168.10.0/24 Port 443\n2. Permit TCP Any to 192.168.10.0/24 Any\n3. Deny TCP Any to 192.168.10.50 Port 22\n4. Implicit Deny Any Any\nหากมีผู้โจมตีจากอินเทอร์เน็ตเชื่อมต่อไปยังพอร์ต 22 (SSH) ของเครื่อง 192.168.10.50 จะเกิดผลลัพธ์อย่างไรและควรแก้ไขอย่างไร?',
        choices: [
          { id: 'a', textTh: 'ถูกบล็อกโดยกฎข้อ 3 ทันที ไม่ต้องแก้ไขใด ๆ' },
          { id: 'b', textTh: 'ทราฟฟิกจะผ่านเข้าไปได้เพราะกฎข้อ 2 (Permit Any port) อยู่เหนือกว่ากฎข้อ 3; ควรย้ายกฎ Deny ที่เฉพาะเจาะจงขึ้นไว้เหนือกว่าหรือลบบรรทัดที่ 2 ที่กว้างเกินไปออก' },
          { id: 'c', textTh: 'ถูกบล็อกโดยกฎข้อ 4 (Implicit Deny) ก่อนจะถึงกฎข้อ 2' },
          { id: 'd', textTh: 'ถูกเปลี่ยนเป็นพอร์ต 443 อัตโนมัติโดยกฎข้อ 1' }
        ],
        correctChoiceId: 'b',
        explanationTh:
          'คำตอบที่ถูกต้องคือ b เพราะ Firewall ACL ประมวลผลจากบนลงล่างแบบ First match wins เมื่อแพ็กเก็ตพอร์ต 22 วิ่งมา จะไม่ตรงกฎข้อ 1 (พอร์ต 443) แต่จะตรงกับกฎข้อ 2 (`Permit TCP Any to 192.168.10.0/24 Any`) ทันทีและถูกปล่อยผ่านโดยไม่เคยลงไปอ่านกฎข้อ 3 หรือ 4 เลย ดังนั้นต้องลบบรรทัดที่ 2 ที่อนุญาตทุกพอร์ตออก หรือวางกฎ Specific rules ไว้บนสุดเสมอ'
      }
    ],
    references: [
      {
        title: 'CompTIA Security+ (SY0-701) Exam Objectives Version 5.0 — Objective 4.5',
        noteTh: 'Firewall (Rules, ACLs, Ports/protocols, Screened subnets), IDS/IPS, DNS/Web filtering, Secure protocols และ Email security (DMARC, DKIM, SPF, Gateway)'
      },
      {
        title: 'NIST SP 800-41 Rev. 1 — Guidelines on Firewalls and Firewall Policy',
        noteTh: 'หลักการออกแบบ Firewall Rules, ACL ordering และ Screened Subnets'
      },
      {
        title: 'NIST SP 800-177 Rev. 1 — Trustworthy Email & RFC 7208 / 6376 / 7489',
        noteTh: 'มาตรฐานทางเทคนิคสำหรับการติดตั้ง SPF, DKIM, DMARC และ Email Security Gateways'
      }
    ],
    relatedLessonIds: ['L1-06', 'L3-03', 'L3-04', 'L4-05', 'L4-07', 'L5-07']
  }
];
