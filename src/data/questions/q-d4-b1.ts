import type { Question } from '../../types';

export const Q_D4_B1: Question[] = [
  {
    "id": "Q4-001",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.1"
    ],
    "type": "mcq",
    "selectCount": 1,
    "difficulty": "foundation",
    "promptEn": "Six months after deploying Linux application servers from a hardened golden image aligned with CIS Benchmarks, a security audit finds several hosts running legacy file-transfer services and permissive firewall rules added during ad-hoc troubleshooting. Which lifecycle activity BEST addresses this configuration drift?",
    "promptTh": "หกเดือนหลังจากติดตั้งเซิร์ฟเวอร์แอปพลิเคชัน Linux จาก Golden Image ที่เสริมความแข็งแกร่งตามมาตรฐาน CIS Benchmarks การตรวจสอบความปลอดภัยพบว่าหลายเครื่องเปิดบริการโอนถ่ายไฟล์รุ่นเก่าและตั้งกฎไฟร์วอลล์แบบหลวมขึ้นจากการแก้ปัญหาเฉพาะหน้า กิจกรรมใดในวงจรชีวิตของมาตรฐานฐานที่ปลอดภัยช่วยแก้ปัญหา Configuration Drift นี้ได้ดีที่สุด?",
    "choices": [
      {
        "id": "c1",
        "textEn": "Implementing continuous compliance scanning with automated configuration enforcement and change control",
        "textTh": "การสแกนความสอดคล้องอย่างต่อเนื่องร่วมกับการบังคับใช้ค่าคอนฟิกอัตโนมัติและการควบคุมการเปลี่ยนแปลง"
      },
      {
        "id": "c2",
        "textEn": "Replacing the existing golden image with a vendor default installation for faster manual setup",
        "textTh": "การเปลี่ยนไปใช้ไฟล์ติดตั้งค่าเริ่มต้นจากผู้ผลิตแทน Golden Image เพื่อให้ตั้งค่าด้วยตนเองได้เร็วขึ้น"
      },
      {
        "id": "c3",
        "textEn": "Disabling all audit logging on production servers to avoid storing configuration history",
        "textTh": "การปิดการบันทึก Audit Log ทั้งหมดบนเซิร์ฟเวอร์ใช้งานจริงเพื่อหลีกเลี่ยงการเก็บประวัติค่าคอนฟิก"
      },
      {
        "id": "c4",
        "textEn": "Allowing administrators to modify host firewall rules directly without ticket review",
        "textTh": "การอนุญาตให้ผู้ดูแลระบบแก้ไขกฎไฟร์วอลล์บนเครื่องได้โดยตรงโดยไม่ต้องผ่านการทบทวนคำขอ"
      }
    ],
    "correctChoiceIds": [
      "c1"
    ],
    "explanationTh": "Configuration drift เกิดขึ้นเมื่อค่าคอนฟิกจริงเบี่ยงเบนจาก Secure baseline ตามกาลเวลาจากการปรับแต่งเฉพาะหน้า ขั้นตอน Maintain จึงต้องผสานการตรวจเทียบมาตรฐานอัตโนมัติ (เช่น SCAP/IaC) เข้ากับ Change management เพื่อคืนค่าระบบให้ตรงฐานความปลอดภัยอยู่เสมอ",
    "choiceRationales": {
      "c1": "ถูกต้อง: มุ่งเน้นการดูแลต่อเนื่อง (Maintain) ผ่านการเฝ้าระวังอัตโนมัติและการควบคุมการเปลี่ยนแปลงเพื่อแก้ไขค่าที่เบี่ยงเบนจากฐาน",
      "c2": "ไม่ถูกต้อง: การย้อนกลับไปใช้ค่าตั้งต้นจากโรงงานจะเปิดบริการที่ไม่จำเป็นและขยาย Attack Surface มากขึ้น ไม่ได้แก้ปัญหา Configuration Drift",
      "c3": "ไม่ถูกต้อง: การปิด Audit Log ลดทัศนวิสัยในการตรวจสอบย้อนหลัง ไม่ใช่กลไกควบคุมค่าคอนฟิกหรือปรับปรุงความปลอดภัย",
      "c4": "ไม่ถูกต้อง: การเปิดช่องให้แก้ไขแบบ Ad-hoc โดยไม่ผ่านใบงานอนุมัติยิ่งก่อให้เกิด Configuration Drift ซ้ำและขาดความรับผิดชอบในการเปลี่ยนแปลง"
    },
    "misconceptionTh": "มักเข้าใจผิดว่าการติดตั้งจาก Golden image ที่ปลอดภัยตั้งแต่ต้นเพียงพอแล้ว โดยไม่จำเป็นต้องตรวจจับ Configuration drift ภายหลัง",
    "relatedLessonIds": [
      "L4-01",
      "L1-04"
    ],
    "tags": [
      "secure-baselines",
      "configuration-drift",
      "hardening"
    ]
  },
  {
    "id": "Q4-002",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.1"
    ],
    "type": "mcq",
    "selectCount": 1,
    "difficulty": "intermediate",
    "promptEn": "During a facility security review, technicians discover unauthorized devices plugged into conference-room wall jacks along with rogue DHCP offers and forged ARP replies disrupting internal LAN traffic. Which set of Layer 2 switch hardening controls BEST mitigates these risks?",
    "promptTh": "ระหว่างการตรวจสอบความปลอดภัยอาคาร ทีมเทคนิคพบอุปกรณ์ไม่ได้รับอนุญาตเสียบเข้ากับช่องเสียบสายแลนในห้องประชุม ร่วมกับข้อความ DHCP ปลอมและคำตอบ ARP ที่ถูกปลอมแปลงจนรบกวนทราฟฟิก LAN ภายใน ชุดมาตรการ Hardening ระดับ Layer 2 บน Switch ใดช่วยลดความเสี่ยงเหล่านี้ได้ดีที่สุด?",
    "choices": [
      {
        "id": "c1",
        "textEn": "Allow unlimited MAC addresses per interface and configure SNMPv1 community strings for monitoring",
        "textTh": "อนุญาตจำนวน MAC Address ได้ไม่จำกัดต่อพอร์ตและตั้งค่า SNMPv1 Community Strings สำหรับการเฝ้าระวัง"
      },
      {
        "id": "c2",
        "textEn": "Place all active user ports in the default VLAN and enable Telnet for remote troubleshooting",
        "textTh": "จัดพอร์ตผู้ใช้ทั้งหมดไว้ใน Default VLAN และเปิดใช้งาน Telnet เพื่อแก้ไขปัญหาจากระยะไกล"
      },
      {
        "id": "c3",
        "textEn": "Enable CDP on external-facing jacks and disable Spanning Tree Protocol across access switches",
        "textTh": "เปิดใช้งาน CDP บนพอร์ตที่หันออกสู่พื้นที่ผู้ใช้และปิด Spanning Tree Protocol บน Switch การเข้าถึง"
      },
      {
        "id": "c4",
        "textEn": "Shut down unused ports into a blackhole VLAN, enforce 802.1X port security, and enable DHCP snooping with DAI",
        "textTh": "ปิดพอร์ตที่ไม่ได้ใช้งานแล้วย้ายเข้า Blackhole VLAN บังคับใช้ 802.1X Port Security และเปิด DHCP Snooping ร่วมกับ DAI"
      }
    ],
    "correctChoiceIds": [
      "c4"
    ],
    "explanationTh": "การเสริมแกร่ง Switch ระดับ Layer 2 อาศัยการปิดพอร์ตว่างร่วมกับ 802.1X เพื่อควบคุมการเชื่อมต่อทางกายภาพ และใช้ DHCP Snooping คู่กับ Dynamic ARP Inspection (DAI) เพื่อคัดกรองเซิร์ฟเวอร์แจก IP ปลอมและการปลอมแปลง ARP บนเครือข่าย",
    "choiceRationales": {
      "c2": "การใช้ Default VLAN และโปรโตคอลแบบ Plaintext อย่าง Telnet เพิ่มความเสี่ยงด้าน Lateral movement และการดักฟังข้อมูลบริหารจัดการ",
      "c3": "การเปิดโปรโตคอลค้นหาเพื่อนบ้านอย่าง CDP ให้ข้อมูลโครงสร้างเครือข่ายแก่ผู้บุกรุก ส่วนการปิด STP เสี่ยงเกิด Switching loop",
      "c4": "ครอบคลุมการคุมพอร์ตว่าง การยืนยันตัวตนระดับพอร์ต (802.1X) และการป้องกัน Rogue DHCP รวมถึง ARP spoofing ครบถ้วน",
      "c1": "การไม่จำกัด MAC และใช้ SNMPv1 ที่ไม่เข้ารหัสเอื้อต่อการท่วมตาราง MAC และการเข้าถึงข้อมูลอุปกรณ์โดยมิชอบ"
    },
    "misconceptionTh": "มักเชื่อว่าการปิดพอร์ตที่ว่างเพียงอย่างเดียวช่วยป้องกันการปลอมแปลง DHCP และ ARP บนพอร์ตที่ใช้งานอยู่ได้",
    "relatedLessonIds": [
      "L4-01",
      "L3-04"
    ],
    "tags": [
      "switch-hardening",
      "port-security",
      "dhcp-snooping",
      "dai"
    ]
  },
  {
    "id": "Q4-003",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.1"
    ],
    "type": "msq",
    "selectCount": 2,
    "difficulty": "intermediate",
    "promptEn": "A post-deployment review of an organization’s public cloud environment reveals that engineers routinely manage resources using the cloud root account, several object storage buckets allow anonymous read access, and compute virtual machines include graphical desktop packages. Which TWO hardening actions should be prioritized? (Choose two.)",
    "promptTh": "การตรวจสอบหลังติดตั้งระบบคลาวด์สาธารณะขององค์กรพบว่าวิศวกรใช้บัญชี Root ในการจัดการงานประจำวัน มี Storage Buckets หลายรายการเปิดให้บุคคลทั่วไปอ่านได้ และ Virtual Machines มีแพ็กเกจหน้าต่างกราฟิกติดตั้งอยู่ด้วย ควรให้ความสำคัญกับการทำ Hardening 2 ข้อใดเป็นลำดับแรก? (เลือก 2 ข้อ)",
    "choices": [
      {
        "id": "c1",
        "textEn": "Disable server-side storage encryption so backup snapshots can be inspected directly",
        "textTh": "ปิดการเข้ารหัสฝั่งเซิร์ฟเวอร์บนสตอเรจเพื่อให้ตรวจสอบ Backup Snapshots ได้โดยตรง"
      },
      {
        "id": "c2",
        "textEn": "Enforce least-privilege IAM roles with MFA and restrict root account usage strictly to emergencies",
        "textTh": "บังคับใช้สิทธิ์ IAM แบบเท่าที่จำเป็นร่วมกับ MFA และจำกัดการใช้บัญชี Root เฉพาะเหตุฉุกเฉินเท่านั้น"
      },
      {
        "id": "c3",
        "textEn": "Block public storage bucket access by default and deploy minimal OS images without unnecessary services",
        "textTh": "ปิดการเข้าถึงสาธารณะของ Storage Buckets โดยค่าเริ่มต้นและใช้อิมเมจระบบปฏิบัติการแบบ Minimal ที่ตัดบริการเกินจำเป็นออก"
      },
      {
        "id": "c4",
        "textEn": "Assign full administrative privileges to all service accounts so automation scripts do not fail",
        "textTh": "มอบสิทธิ์ผู้ดูแลระบบระดับสูงสุดให้ Service Accounts ทุกบัญชีเพื่อไม่ให้สคริปต์อัตโนมัติเกิดข้อผิดพลาด"
      },
      {
        "id": "c5",
        "textEn": "Expose management consoles on all cloud regions simultaneously for administrative convenience",
        "textTh": "เปิดใช้งานคอนโซลการจัดการในทุก Cloud Regions พร้อมกันเพื่อความสะดวกในการดูแลระบบ"
      }
    ],
    "correctChoiceIds": [
      "c2",
      "c3"
    ],
    "explanationTh": "การเสริมแกร่ง Cloud infrastructure และ Servers เน้นลดพื้นผิวโจมตีทั้งฝั่ง Control plane และ Data plane ผ่านหลัก Least privilege ร่วมกับ MFA แทนการใช้บัญชี Root รวมถึงการปิด Public access โดยปริยายและใช้ Minimal OS",
    "choiceRationales": {
      "c2": "ลดผลกระทบหากข้อมูลประจำตัวรั่วไหลด้วยการเลิกใช้ Root ในงานประจำวันและบังคับ IAM Least privilege กับ MFA",
      "c3": "ปิดช่องทางข้อมูลรั่วไหลจาก Storage สาธารณะและลดซอฟต์แวร์เกินจำเป็นบนเซิร์ฟเวอร์ด้วย Minimal OS",
      "c4": "เพิ่มความเสี่ยงจากการให้สิทธิ์เกินขอบเขต ซึ่งขัดต่อหลักการจำกัดสิทธิ์ของ Cloud IAM",
      "c5": "ขยายขอบเขตพื้นผิวการโจมตีไปยัง Region ที่องค์กรไม่ได้เฝ้าระวังหรือใช้งานจริง",
      "c1": "ลดระดับการปกป้องข้อมูลขณะจัดเก็บ (Data at rest) ซึ่งควรเปิดใช้การเข้ารหัสผ่าน KMS เสมอ"
    },
    "misconceptionTh": "มักเข้าใจว่าผู้ให้บริการคลาวด์ปิด Public storage และจำกัดสิทธิ์ IAM ให้อัตโนมัติภายใต้โมเดล Shared responsibility",
    "relatedLessonIds": [
      "L4-01",
      "L3-01"
    ],
    "tags": [
      "cloud-hardening",
      "server-hardening",
      "least-privilege",
      "minimal-os"
    ]
  },
  {
    "id": "Q4-004",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.1"
    ],
    "type": "mcq",
    "selectCount": 1,
    "difficulty": "exam-ready",
    "promptEn": "An automotive manufacturer operates robotic welding arms controlled by a Real-Time Operating System (RTOS) and legacy programmable logic controllers (PLCs). The plant requires deterministic millisecond timing and cannot pause production for frequent reboots or heavy endpoint scanning agents. Which hardening strategy is MOST appropriate?",
    "promptTh": "ผู้ผลิตรถยนต์ใช้งานแขนกลเชื่อมที่ควบคุมด้วย Real-Time Operating System (RTOS) และ Programmable Logic Controllers (PLC) รุ่นเก่า โรงงานต้องการความแม่นยำในการตอบสนองระดับมิลลิวินาทีและไม่สามารถหยุดสายการผลิตเพื่อรีบูตบ่อยครั้งหรือติดตั้งเอเจนต์สแกนที่กินทรัพยากรสูงได้ กลยุทธ์การทำ Hardening ใดเหมาะสมที่สุด?",
    "choices": [
      {
        "id": "c1",
        "textEn": "Replace the RTOS kernel with a general-purpose desktop operating system to enable Group Policy enforcement",
        "textTh": "เปลี่ยนเคอร์เนลของ RTOS เป็นระบบปฏิบัติการเดสก์ท็อปทั่วไปเพื่อให้บังคับใช้ Group Policy ได้"
      },
      {
        "id": "c2",
        "textEn": "Expose PLC management interfaces directly to the corporate internet so vendors can patch remotely anytime",
        "textTh": "เปิดอินเทอร์เฟซจัดการ PLC ออกสู่อินเทอร์เน็ตขององค์กรโดยตรงเพื่อให้ผู้ผลิตเข้ามาอัปเดตแพตช์ได้ทุกเวลา"
      },
      {
        "id": "c3",
        "textEn": "Deploy standard desktop antivirus agents on every RTOS controller with hourly active vulnerability scans",
        "textTh": "ติดตั้งเอเจนต์แอนติไวรัสสำหรับเครื่องเดสก์ท็อปบนตัวควบคุม RTOS ทุกตัวและสแกนช่องโหว่เชิงรุกทุกชั่วโมง"
      },
      {
        "id": "c4",
        "textEn": "Isolate OT controllers through strict network segmentation, enforce protocol allowlisting, and use passive monitoring",
        "textTh": "แยกตัวควบคุม OT ด้วยการแบ่งโซนเครือข่ายอย่างเข้มงวด บังคับใช้ Protocol Allowlisting และใช้ Passive Monitoring"
      }
    ],
    "correctChoiceIds": [
      "c4"
    ],
    "explanationTh": "ระบบ ICS/SCADA และ RTOS ให้ความสำคัญสูงสุดกับ Availability, Safety และ Deterministic timing จึงหลีกเลี่ยงการลง Agent หนักหรือ Active scanning ที่อาจทำให้ระบบค้าง แต่ใช้ Network segmentation, Allowlisting และ Passive monitoring เป็นมาตรการชดเชยแทน",
    "choiceRationales": {
      "c1": "ไม่ถูกต้อง: ระบบปฏิบัติการทั่วไปขาดคุณสมบัติ Real-time determinism และอาจเข้ากันไม่ได้กับฮาร์ดแวร์อุตสาหกรรม",
      "c2": "ไม่ถูกต้อง: การเปิด PLC ออกสู่อินเทอร์เน็ตโดยตรงเพิ่มโอกาสถูกโจมตีจากภายนอกอย่างรุนแรง แทนที่จะใช้ Jump Server หรือช่องทางรีโมตที่มีการควบคุมเข้มงวด",
      "c3": "ไม่ถูกต้อง: การติดตั้งเอเจนต์เดสก์ท็อปและสแกนช่องโหว่เชิงรุกทุกชั่วโมงจะเพิ่มภาระและความหน่วงจนทำลาย Deterministic timing และความปลอดภัยของระบบ RTOS/PLC",
      "c4": "ถูกต้อง: ประยุกต์ใช้การแบ่งโซน (เช่น Purdue model), กรองโปรโตคอลเฉพาะที่อนุญาต และเฝ้าระวังแบบ Passive ที่ไม่รบกวนการทำงานของ RTOS/PLC"
    },
    "misconceptionTh": "มักนำแนวทาง Hardening ของเครื่อง IT เช่น Active scanning และ Heavy EDR agent ไปใช้กับระบบ OT/RTOS โดยไม่คำนึงถึง Latency",
    "relatedLessonIds": [
      "L4-01",
      "L3-02"
    ],
    "tags": [
      "ics-scada",
      "rtos",
      "ot-hardening",
      "segmentation"
    ]
  },
  {
    "id": "Q4-005",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.1"
    ],
    "type": "mcq",
    "selectCount": 1,
    "difficulty": "intermediate",
    "promptEn": "An energy utility prepares to deploy hundreds of embedded field sensors and smart IoT meters across remote substations. Engineering tests reveal active board-level JTAG/UART pins, unencrypted Telnet services, and shared factory-default passwords. Which action BEST secures these devices prior to production rollout?",
    "promptTh": "บริษัทพลังงานเตรียมติดตั้งเซ็นเซอร์ฝังตัวและมิเตอร์อัจฉริยะ IoT หลายร้อยตัวตามสถานีไฟฟ้าย่อยระยะไกล การทดสอบทางวิศวกรรมพบพอร์ตดีบัก JTAG/UART บนบอร์ดที่ยังเปิดอยู่ บริการ Telnet ที่ไม่เข้ารหัส และรหัสผ่านเริ่มต้นจากโรงงานที่ใช้ร่วมกัน มาตรการใดช่วยเสริมความปลอดภัยอุปกรณ์เหล่านี้ก่อนนำไปใช้งานจริงได้ดีที่สุด?",
    "choices": [
      {
        "id": "c1",
        "textEn": "Keep JTAG enabled for field convenience and rely solely on physical warning stickers on the enclosure",
        "textTh": "คงพอร์ต JTAG ไว้เพื่อความสะดวกหน้างานและพึ่งพาเพียงสติกเกอร์เตือนบนตัวถังอุปกรณ์"
      },
      {
        "id": "c2",
        "textEn": "Enable UPnP and HTTP management on the corporate Wi-Fi SSID so sensors self-configure automatically",
        "textTh": "เปิดใช้งาน UPnP และการจัดการผ่าน HTTP บน Wi-Fi หลักขององค์กรเพื่อให้เซ็นเซอร์ตั้งค่าตัวเองอัตโนมัติ"
      },
      {
        "id": "c3",
        "textEn": "Install full-disk encryption software designed for corporate laptops inside the sensor’s microcontroller RAM",
        "textTh": "ติดตั้งซอฟต์แวร์เข้ารหัสดิสก์เต็มรูปแบบสำหรับแล็ปท็อปองค์กรลงใน RAM ของไมโครคอนโทรลเลอร์เซ็นเซอร์"
      },
      {
        "id": "c4",
        "textEn": "Disable JTAG/UART interfaces, enforce signed firmware, change default credentials, disable Telnet, and isolate devices in an IoT VLAN",
        "textTh": "ปิดพอร์ต JTAG/UART บังคับใช้ Signed Firmware เปลี่ยนรหัสผ่านเริ่มต้น ปิด Telnet และแยกอุปกรณ์ไว้ใน IoT VLAN เฉพาะ"
      }
    ],
    "correctChoiceIds": [
      "c4"
    ],
    "explanationTh": "การเสริมแกร่ง Embedded systems และ IoT ต้องปิดช่องทางดีบักระดับฮาร์ดแวร์ (JTAG/UART) ใช้ Signed firmware เพื่อกันการดัดแปลง เปลี่ยนรหัสผ่านเริ่มต้น และจำกัดขอบเขตเครือข่ายด้วย Dedicated VLAN ร่วมกับปิดบริการไม่ปลอดภัยอย่าง Telnet และ UPnP",
    "choiceRationales": {
      "c4": "จัดการความเสี่ยงเฉพาะตัวของทั้ง Embedded hardware (Debug ports/Firmware) และ IoT network exposure (Credentials/Telnet/VLAN) ได้ครบ",
      "c1": "เปิดโอกาสให้ผู้เข้าถึงทางกายภาพดึง Firmware ออกมาวิเคราะห์ได้ โดยป้ายเตือนเป็นเพียงมาตรการปรามเชิงกายภาพเท่านั้น",
      "c2": "UPnP และ HTTP แบบไม่เข้ารหัสขยายช่องทางโจมตีและเปิดเผยข้อมูลรับรองบนเครือข่ายองค์กรหลัก",
      "c3": "ไมโครคอนโทรลเลอร์ของอุปกรณ์ฝังตัวมีทรัพยากรจำกัด ไม่รองรับซอฟต์แวร์ระดับ Workstation จึงใช้แนวทาง Embedded security แทน"
    },
    "misconceptionTh": "มักมองข้ามความเสี่ยงทางฮาร์ดแวร์อย่างพอร์ต JTAG/UART โดยให้ความสำคัญเฉพาะการตั้งค่าระดับเครือข่ายเท่านั้น",
    "relatedLessonIds": [
      "L4-01",
      "L2-05"
    ],
    "tags": [
      "embedded-systems",
      "iot-hardening",
      "jtag",
      "signed-firmware"
    ]
  },
  {
    "id": "Q4-006",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.1"
    ],
    "type": "mcq",
    "selectCount": 1,
    "difficulty": "foundation",
    "promptEn": "Employees report wireless dead zones in interior meeting rooms while security testing shows corporate Wi-Fi signals extending across a public parking lot outside the building. Which wireless planning approach BEST resolves both coverage gaps and external signal bleed?",
    "promptTh": "พนักงานรายงานจุดอับสัญญาณไร้สายในห้องประชุมด้านในอาคาร ขณะที่การทดสอบความปลอดภัยพบว่าสัญญาณ Wi-Fi ขององค์กรแผ่ออกไปถึงลานจอดรถสาธารณะภายนอกอาคาร แนวทางการวางแผนระบบไร้สายใดช่วยแก้ปัญหาจุดอับสัญญาณและการล้นของสัญญาณออกนอกพื้นที่ได้ดีที่สุด?",
    "choices": [
      {
        "id": "c1",
        "textEn": "Disable SSID broadcasting and enable MAC address filtering on all existing access points",
        "textTh": "ปิดการประกาศชื่อเครือข่าย (SSID) และเปิดใช้ MAC Address Filtering บน Access Points ที่มีอยู่ทั้งหมด"
      },
      {
        "id": "c2",
        "textEn": "Conduct a wireless site survey with heat maps to reposition APs, reduce perimeter transmit power, and use directional antennas",
        "textTh": "ทำ Wireless Site Survey และสร้าง Heat Maps เพื่อปรับตำแหน่ง AP ลดกำลังส่งบริเวณขอบอาคาร และใช้เสาอากาศแบบกำหนดทิศทาง"
      },
      {
        "id": "c3",
        "textEn": "Maximize transmit power on every access point so signals penetrate interior walls more strongly",
        "textTh": "ปรับเพิ่มกำลังส่งสูงสุดบน Access Point ทุกตัวเพื่อให้สัญญาณทะลุกำแพงด้านในได้แรงขึ้น"
      },
      {
        "id": "c4",
        "textEn": "Switch encryption from AES-CCMP to legacy WEP to shorten wireless transmission range",
        "textTh": "เปลี่ยนการเข้ารหัสจาก AES-CCMP กลับไปใช้ WEP รุ่นเก่าเพื่อลดระยะการส่งสัญญาณไร้สาย"
      }
    ],
    "correctChoiceIds": [
      "c2"
    ],
    "explanationTh": "Site survey ร่วมกับ Heat maps ช่วยวัดระดับสัญญาณจริง (RSSI/SNR) เพื่อวางตำแหน่ง AP กำจัดจุดอับและควบคุมขอบเขต RF การลดกำลังส่งหรือใช้ Directional antennas บริเวณขอบอาคารช่วยลด Signal bleed โดยไม่ลดทอนความมั่นคงของการเข้ารหัส",
    "choiceRationales": {
      "c1": "การซ่อน SSID และกรอง MAC เป็นเพียง Security through obscurity ซึ่งป้องกันการดักจับหรือควบคุมขอบเขตสัญญาณวิทยุไม่ได้",
      "c2": "ใช้การวิเคราะห์คลื่น RF เชิงพื้นที่เพื่อสร้างสมดุลระหว่างความครอบคลุมภายในและจำกัด Signal bleed ออกนอกอาคาร",
      "c3": "การเร่งกำลังส่งยิ่งทำให้สัญญาณรั่วไหลออกนอกอาคารมากขึ้นและเกิดสัญญาณกวนระหว่างช่องสัญญาณ",
      "c4": "มาตรฐานการเข้ารหัสไม่มีผลจำกัดระยะทางกายภาพของคลื่นวิทยุ และ WEP มีจุดอ่อนด้านการเข้ารหัสอย่างร้ายแรง"
    },
    "misconceptionTh": "มักเข้าใจว่าการปิด SSID broadcast หรือใช้ MAC filtering ช่วยป้องกันการตรวจพบและการโจมตีจากนอกอาคารได้",
    "relatedLessonIds": [
      "L4-02"
    ],
    "tags": [
      "site-survey",
      "heat-map",
      "signal-bleed",
      "wireless-security"
    ]
  },
  {
    "id": "Q4-007",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.1"
    ],
    "type": "msq",
    "selectCount": 2,
    "difficulty": "exam-ready",
    "promptEn": "A financial firm is replacing its shared WPA2-PSK wireless network because departing employees retain the shared passphrase and attackers could capture handshakes for offline cracking. Management requires individual user accountability, immediate revocation upon termination, and mutual certificate authentication. Which TWO settings should the firm implement? (Choose two.)",
    "promptTh": "บริษัทการเงินแห่งหนึ่งกำลังเปลี่ยนระบบเครือข่ายไร้สายจาก WPA2-PSK ที่ใช้รหัสผ่านร่วมกัน เนื่องจากพนักงานที่ลาออกยังทราบรหัสผ่านเดิมและผู้โจมตีอาจดักจับ Handshake เพื่อเดารหัสผ่านแบบออฟไลน์ ผู้บริหารต้องการระบุตัวตนรายบุคคล เพิกถอนสิทธิ์ได้ทันทีเมื่อพ้นสภาพ และยืนยันตัวตนด้วยใบรับรองทั้งสองฝั่ง ควรตั้งค่า 2 ข้อใด? (เลือก 2 ข้อ)",
    "choices": [
      {
        "id": "c1",
        "textEn": "Deploy WPA3-Personal with SAE so all employees share one stronger passphrase",
        "textTh": "ติดตั้ง WPA3-Personal ที่ใช้ SAE เพื่อให้พนักงานทุกคนใช้รหัสผ่านกลางที่แข็งแกร่งขึ้นร่วมกัน"
      },
      {
        "id": "c2",
        "textEn": "Enable Enhanced Open (OWE) on the corporate internal SSID without authentication prompts",
        "textTh": "เปิดใช้งาน Enhanced Open (OWE) บน SSID ภายในองค์กรโดยไม่ต้องยืนยันตัวตน"
      },
      {
        "id": "c3",
        "textEn": "Configure TKIP encryption with LEAP authentication to maintain compatibility with legacy clients",
        "textTh": "ตั้งค่าการเข้ารหัส TKIP ร่วมกับ LEAP เพื่อรองรับอุปกรณ์ลูกข่ายรุ่นเก่า"
      },
      {
        "id": "c4",
        "textEn": "Configure WPA3-Enterprise integrated with 802.1X and a central AAA/RADIUS server",
        "textTh": "ตั้งค่า WPA3-Enterprise ร่วมกับ 802.1X และเซิร์ฟเวอร์ศูนย์กลาง AAA/RADIUS"
      },
      {
        "id": "c5",
        "textEn": "Select EAP-TLS as the authentication protocol using client and server digital certificates",
        "textTh": "เลือกใช้โปรโตคอลยืนยันตัวตน EAP-TLS ที่อาศัย Digital Certificates ทั้งฝั่งลูกข่ายและเซิร์ฟเวอร์"
      }
    ],
    "correctChoiceIds": [
      "c4",
      "c5"
    ],
    "explanationTh": "WPA3-Enterprise ร่วมกับ 802.1X/RADIUS แยกการยืนยันตัวตนเป็นรายบุคคลทำให้เพิกถอนสิทธิ์ได้จากศูนย์กลาง ส่วน EAP-TLS ให้ Mutual authentication ด้วยใบรับรองดิจิทัลทั้งสองฝั่งโดยไม่พึ่งพารหัสผ่านกลาง",
    "choiceRationales": {
      "c4": "โครงสร้างองค์กรที่เชื่อมโยง 802.1X กับ RADIUS เพื่อควบคุมบัญชีและเพิกถอนสิทธิ์รายบุคคลได้ทันที",
      "c5": "โปรโตคอล EAP ที่บังคับใช้ Digital certificate ทั้งฝั่ง Server และ Client ตอบโจทย์ Mutual authentication",
      "c1": "SAE กันการเดารหัสแบบออฟไลน์ได้ดีกว่า WPA2-PSK แต่ยังใช้รหัสผ่านร่วมกันจึงขาดการระบุตัวตนรายบุคคล",
      "c2": "OWE เข้ารหัสทราฟฟิกโดยไม่ใช้รหัสผ่าน ซึ่งเหมาะสำหรับ Guest Wi-Fi แบบเปิดมากกว่าเครือข่ายภายในองค์กร",
      "c3": "ทั้ง TKIP และ LEAP เป็นโปรโตคอลล้าสมัยที่มีจุดอ่อนด้านความปลอดภัย ไม่ควรนำมาใช้ในระบบองค์กร"
    },
    "misconceptionTh": "มักสับสนระหว่าง WPA3-Personal (กัน Offline cracking แต่ยังแชร์รหัสผ่าน) กับ WPA3-Enterprise ที่ยืนยันตัวตนรายบุคคล",
    "relatedLessonIds": [
      "L4-02",
      "L3-04"
    ],
    "tags": [
      "wpa3-enterprise",
      "radius",
      "802.1x",
      "eap-tls"
    ]
  },
  {
    "id": "Q4-008",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.1"
    ],
    "type": "mcq",
    "selectCount": 1,
    "difficulty": "intermediate",
    "promptEn": "A small clinic without a RADIUS infrastructure operates two wireless networks: a staff network that needs protection against offline handshake password cracking, and a public patient-waiting Wi-Fi that must encrypt over-the-air traffic without requiring guests to enter a password. Which pair of WPA3 features BEST meets these requirements?",
    "promptTh": "คลินิกขนาดเล็กที่ไม่มีโครงสร้างพื้นฐาน RADIUS ให้บริการเครือข่ายไร้สาย 2 วง: วงของเจ้าหน้าที่ที่ต้องการป้องกันการดักจับ Handshake ไปเดารหัสผ่านแบบออฟไลน์ และวง Wi-Fi สาธารณะสำหรับผู้ป่วยที่ต้องเข้ารหัสข้อมูลบนอากาศโดยไม่ต้องให้ผู้เยี่ยมกรอกรหัสผ่าน คุณสมบัติคู่ใดของ WPA3 ตอบโจทย์เหล่านี้ได้ดีที่สุด?",
    "choices": [
      {
        "id": "c1",
        "textEn": "WPA3-Enterprise 192-bit with mutual client certificates for both staff and unauthenticated guests",
        "textTh": "WPA3-Enterprise 192-bit พร้อมใบรับรองลูกข่ายทั้งสองฝั่งสำหรับทั้งเจ้าหน้าที่และผู้มาติดต่อทั่วไป"
      },
      {
        "id": "c2",
        "textEn": "WPA2-PSK for staff and unencrypted Open Wi-Fi for patient guests",
        "textTh": "WPA2-PSK สำหรับเจ้าหน้าที่ และ Open Wi-Fi ที่ไม่เข้ารหัสสำหรับผู้ป่วยที่มาใช้บริการ"
      },
      {
        "id": "c3",
        "textEn": "WPA3-Personal (SAE) for staff and Enhanced Open (OWE) for patient guests",
        "textTh": "WPA3-Personal (SAE) สำหรับเจ้าหน้าที่ และ Enhanced Open (OWE) สำหรับผู้ป่วยที่มาใช้บริการ"
      },
      {
        "id": "c4",
        "textEn": "PEAP with shared local credentials for staff and WEP static keys for guests",
        "textTh": "PEAP ที่แชร์บัญชีใช้งานร่วมกันสำหรับเจ้าหน้าที่ และกุญแจคงที่แบบ WEP สำหรับผู้มาติดต่อ"
      }
    ],
    "correctChoiceIds": [
      "c3"
    ],
    "explanationTh": "WPA3-Personal ใช้กลไก Simultaneous Authentication of Equals (SAE) ป้องกันการเดารหัสแบบออฟไลน์และให้ Forward secrecy โดยไม่ต้องพึ่ง RADIUS ส่วน Enhanced Open (OWE) เข้ารหัสการสื่อสารระหว่างอุปกรณ์กับ AP สำหรับเครือข่าย Guest ที่ไม่ตั้งรหัสผ่าน",
    "choiceRationales": {
      "c2": "WPA2-PSK เสี่ยงต่อการเดารหัสจาก 4-way handshake แบบออฟไลน์ และ Open Wi-Fi เดิมส่งทราฟฟิกเป็นข้อความธรรมดา",
      "c3": "ผสาน SAE เพื่อป้องกันการแคร็กรหัสออฟไลน์ในวงเจ้าหน้าที่ และใช้ OWE เข้ารหัสวง Guest โดยไม่ต้องกรอกรหัสผ่าน",
      "c4": "PEAP ยังต้องอาศัยเซิร์ฟเวอร์ AAA/RADIUS ส่วน WEP ขาดความปลอดภัยอย่างสิ้นเชิง",
      "c1": "Enterprise 192-bit ต้องใช้ PKI และ RADIUS ซึ่งไม่เหมาะกับเครือข่ายขนาดเล็กและผู้มาติดต่อชั่วคราว"
    },
    "misconceptionTh": "มักเข้าใจว่า Guest Wi-Fi ที่ไม่ใส่รหัสผ่านไม่สามารถเข้ารหัสข้อมูลบนคลื่นวิทยุได้ ทั้งที่มาตรฐาน Enhanced Open (OWE) รองรับการเข้ารหัสอัตโนมัติ",
    "relatedLessonIds": [
      "L4-02"
    ],
    "tags": [
      "wpa3-personal",
      "sae",
      "enhanced-open",
      "owe"
    ]
  },
  {
    "id": "Q4-009",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.1"
    ],
    "type": "mcq",
    "selectCount": 1,
    "difficulty": "intermediate",
    "promptEn": "An insurance company issues mobile phones to field claims adjusters who handle regulated personal data. Security policy requires the company to own the hardware, enforce a full security baseline, and retain full remote-wipe authority, while allowing adjusters to pick from three IT-approved models and use approved personal apps. Which deployment model BEST matches these requirements?",
    "promptTh": "บริษัทประกันภัยจัดหาโทรศัพท์มือถือให้พนักงานตรวจสอบเคลมภาคสนามที่จัดการข้อมูลส่วนบุคคลภายใต้ข้อบังคับ นโยบายความปลอดภัยกำหนดให้บริษัทเป็นเจ้าของฮาร์ดแวร์ บังคับใช้ Security Baseline ได้เต็มรูปแบบ และมีสิทธิ์สั่งล้างข้อมูลทั้งเครื่องระยะไกล ขณะที่ให้พนักงานเลือกรุ่นได้จาก 3 รุ่นที่ฝ่ายไอทีอนุมัติและใช้แอปส่วนตัวที่อนุญาตได้ รูปแบบการติดตั้งใดตรงกับข้อกำหนดนี้มากที่สุด?",
    "choices": [
      {
        "id": "c1",
        "textEn": "CYOD (Choose Your Own Device) under corporate ownership and MDM control",
        "textTh": "CYOD (Choose Your Own Device) ภายใต้กรรมสิทธิ์ขององค์กรและการควบคุมผ่าน MDM"
      },
      {
        "id": "c2",
        "textEn": "Unmanaged consumer devices connected exclusively through Bluetooth tethering",
        "textTh": "อุปกรณ์สำหรับผู้บริโภคทั่วไปที่ไม่มีการจัดการและเชื่อมต่อผ่าน Bluetooth Tethering เท่านั้น"
      },
      {
        "id": "c3",
        "textEn": "BYOD (Bring Your Own Device) using only acceptable use agreements without MDM enrollment",
        "textTh": "BYOD (Bring Your Own Device) โดยอาศัยเฉพาะข้อตกลงการใช้งานที่เหมาะสมโดยไม่ลงทะเบียน MDM"
      },
      {
        "id": "c4",
        "textEn": "BYOD with selective wipe only on employee-purchased hardware",
        "textTh": "BYOD ที่มีสิทธิ์สั่งลบข้อมูลเฉพาะส่วนงานบนอุปกรณ์ที่พนักงานซื้อเอง"
      }
    ],
    "correctChoiceIds": [
      "c1"
    ],
    "explanationTh": "CYOD (Choose Your Own Device) ภายใต้กรรมสิทธิ์องค์กรผสานความยืดหยุ่นให้พนักงานเลือกรุ่นจากบัญชีที่ผ่านการรับรองแล้ว เข้ากับอำนาจขององค์กรในการบังคับ MDM baseline และสั่ง Full wipe เมื่อเครื่องสูญหายหรือพ้นสภาพพนักงาน",
    "choiceRationales": {
      "c3": "BYOD ที่ไม่มี MDM ขาดการบังคับใช้ Baseline ทางเทคนิคและการแยกข้อมูลเมื่อจัดการข้อมูลที่มีความอ่อนไหวสูง",
      "c4": "ในโมเดล BYOD องค์กรไม่ได้เป็นเจ้าของฮาร์ดแวร์ จึงมักจำกัดอยู่แค่ Selective wipe เพื่อคุ้มครองความเป็นส่วนตัว",
      "c1": "สอดคล้องกับเงื่อนไขการถือกรรมสิทธิ์โดยบริษัท อำนาจ Full wipe การบังคับ Baseline และการให้เลือกรุ่นจากรายการที่อนุมัติ",
      "c2": "อุปกรณ์ที่ไม่มีการจัดการไม่สามารถบังคับใช้นโยบายหรือตรวจสอบความสมบูรณ์ของระบบได้"
    },
    "misconceptionTh": "มักสับสนว่า CYOD หมายถึงการที่พนักงานซื้ออุปกรณ์ส่วนตัวมาใช้เหมือน BYOD โดยไม่คำนึงถึงรายการรุ่นอนุมัติและกรรมสิทธิ์ขององค์กร",
    "relatedLessonIds": [
      "L4-02"
    ],
    "tags": [
      "mdm",
      "cyod",
      "cope",
      "byod"
    ]
  },
  {
    "id": "Q4-010",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.1"
    ],
    "type": "msq",
    "selectCount": 3,
    "difficulty": "exam-ready",
    "promptEn": "A hospital supports mobile clinicians using BYOD smartphones and corporate tablets across hospital Wi-Fi, public cellular networks, and Bluetooth medical peripherals. Recent assessments flagged corporate photos mixing into personal galleries, unencrypted public Wi-Fi usage, and unauthorized contact extraction over open Bluetooth discovery. Which THREE controls BEST address these mobile risks? (Choose three.)",
    "promptTh": "โรงพยาบาลรองรับบุคลากรทางการแพทย์ที่ใช้สมาร์ตโฟนแบบ BYOD และแท็บเล็ตขององค์กรผ่าน Wi-Fi โรงพยาบาล เครือข่ายมือถือสาธารณะ และอุปกรณ์ต่อพ่วง Bluetooth ทางการแพทย์ การประเมินล่าสุดพบปัญหาภาพงานปะปนในคลังภาพส่วนตัว การใช้ Wi-Fi สาธารณะแบบไม่เข้ารหัส และการแอบดึงรายชื่อผู้ติดต่อผ่านโหมดค้นหา Bluetooth ที่เปิดค้างไว้ มาตรการควบคุม 3 ข้อใดช่วยลดความเสี่ยงอุปกรณ์พกพาเหล่านี้ได้ดีที่สุด? (เลือก 3 ข้อ)",
    "choices": [
      {
        "id": "c1",
        "textEn": "Enforce MDM containerization with selective wipe to isolate corporate apps and data on BYOD devices",
        "textTh": "บังคับใช้ MDM Containerization ร่วมกับ Selective Wipe เพื่อแยกแอปและข้อมูลองค์กรบนเครื่อง BYOD"
      },
      {
        "id": "c2",
        "textEn": "Allow sideloading of third-party APK packages so clinicians can install unvetted utilities quickly",
        "textTh": "อนุญาตการติดตั้งแอปนอกสโตร์ (Sideloading) เพื่อให้บุคลากรติดตั้งเครื่องมือเสริมได้รวดเร็ว"
      },
      {
        "id": "c3",
        "textEn": "Require an always-on VPN configuration whenever devices connect over external Wi-Fi networks",
        "textTh": "กำหนดให้เปิดใช้ Always-on VPN เมื่ออุปกรณ์เชื่อมต่อผ่านเครือข่าย Wi-Fi ภายนอก"
      },
      {
        "id": "c4",
        "textEn": "Rely solely on SMS-based one-time passcodes for remote clinical system logins",
        "textTh": "พึ่งพาเฉพาะรหัสผ่านครั้งเดียวทาง SMS สำหรับการเข้าสู่ระบบทางคลินิกจากระยะไกล"
      },
      {
        "id": "c5",
        "textEn": "Configure MDM policies to set Bluetooth to non-discoverable mode and disable it when unused",
        "textTh": "ตั้งค่านโยบาย MDM ให้ Bluetooth อยู่ในโหมด Non-discoverable และปิดการใช้งานเมื่อไม่จำเป็น"
      }
    ],
    "correctChoiceIds": [
      "c1",
      "c3",
      "c5"
    ],
    "explanationTh": "การป้องกันอุปกรณ์พกพาต้องแก้ปัญหาตามชั้นความเสี่ยง: ใช้ MDM Containerization แยกข้อมูลงานใน BYOD, ใช้ Always-on VPN ป้องกันการดักฟังบน Wi-Fi สาธารณะ และปิดโหมดค้นหา Bluetooth เพื่อป้องกันการโจมตีระยะใกล้อย่าง Bluesnarfing",
    "choiceRationales": {
      "c1": "ถูกต้อง: แยกพื้นที่ข้อมูลงานออกจากข้อมูลส่วนตัวและล็อกการบันทึกไฟล์ข้ามพื้นที่ รวมถึงรองรับ Selective wipe บนเครื่องส่วนตัว",
      "c2": "ไม่ถูกต้อง: การเปิด Sideloading เพิ่มโอกาสติดตั้งมัลแวร์บนอุปกรณ์พกพา ขัดต่อมาตรฐาน Mobile hardening",
      "c3": "ถูกต้อง: Always-on VPN เข้ารหัสทราฟฟิกทั้งหมดเมื่อเชื่อมต่อ Wi-Fi นอกองค์กรเพื่อลดความเสี่ยงจาก Rogue AP หรือ Evil Twin",
      "c4": "ไม่ถูกต้อง: SMS มีความเสี่ยงจากการถูกโจมตีแบบ SIM swapping หรือการดักจับสัญญาณมือถือ จึงควรใช้ Authenticator/Hardware token แทน",
      "c5": "ถูกต้อง: ลดพื้นผิวการโจมตีของโปรโตคอลระยะสั้นและป้องกันการเข้าถึงข้อมูลรายชื่อหรือไฟล์ผ่าน Bluetooth"
    },
    "misconceptionTh": "มักพึ่งพาการเข้ารหัสระดับเครือข่ายมือถือหรือ SMS OTP เพียงอย่างเดียวโดยละเลยการตั้งค่า Containerization, VPN และ Bluetooth บน MDM",
    "relatedLessonIds": [
      "L4-02",
      "L4-01"
    ],
    "tags": [
      "mdm",
      "containerization",
      "bluetooth",
      "mobile-connections"
    ]
  },
  {
    "id": "Q4-011",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.2"
    ],
    "type": "mcq",
    "selectCount": 1,
    "difficulty": "foundation",
    "promptEn": "A warehouse chain plans to purchase 200 wireless barcode terminals and accompanying inventory software. Previously, departments bought low-cost hardware directly from unverified online resellers, resulting in tampered firmware and lack of WPA3 support. Which asset management phase should security requirements and vendor vetting be integrated into FIRST?",
    "promptTh": "เครือข่ายคลังสินค้าวางแผนจัดซื้อเครื่องสแกนบาร์โค้ดไร้สาย 200 เครื่องพร้อมซอฟต์แวร์คลังสินค้า ในอดีตบางแผนกสั่งซื้ออุปกรณ์ราคาถูกจากผู้ขายออนไลน์ที่ไม่ผ่านการตรวจสอบโดยตรง จนพบเฟิร์มแวร์ถูกดัดแปลงและไม่รองรับ WPA3 ฝ่ายความปลอดภัยควรบูรณาการข้อกำหนดความปลอดภัยและการตรวจสอบผู้ขายเข้าในขั้นตอนใดเป็นอันดับแรก?",
    "choices": [
      {
        "id": "c1",
        "textEn": "Acquisition and procurement process",
        "textTh": "ขั้นตอนการจัดหาและจัดซื้อ (Acquisition/Procurement Process)"
      },
      {
        "id": "c2",
        "textEn": "Post-incident forensic imaging",
        "textTh": "ขั้นตอนการเก็บภาพหลักฐานหลังเกิดเหตุ (Forensic Imaging)"
      },
      {
        "id": "c3",
        "textEn": "End-of-life media degaussing",
        "textTh": "ขั้นตอนการล้างสนามแม่เหล็กเมื่อหมดอายุใช้งาน (Degaussing)"
      },
      {
        "id": "c4",
        "textEn": "Disposal and decommissioning",
        "textTh": "ขั้นตอนการปลดระวางและการทำลาย (Disposal/Decommissioning)"
      }
    ],
    "correctChoiceIds": [
      "c1"
    ],
    "explanationTh": "การกำหนดข้อกำหนดความปลอดภัย (เช่น การรองรับการเข้ารหัสและการอัปเดต) รวมถึงการคัดกรองผู้ขายและช่องทางจัดจำหน่ายที่ได้รับอนุญาตต้องทำตั้งแต่ขั้นตอน Acquisition/Procurement เพื่อสกัดความเสี่ยง Supply chain และ Shadow IT ก่อนสินทรัพย์เข้าสู่องค์กร",
    "choiceRationales": {
      "c4": "Disposal จัดการสินทรัพย์ช่วงปลายอายุเพื่อลบข้อมูลอย่างปลอดภัย ไม่ได้แก้ปัญหาอุปกรณ์ดัดแปลงก่อนจัดซื้อ",
      "c1": "ผนวก Security requirements และ Vendor vetting ในเอกสารจัดซื้อเพื่อควบคุม Supply chain และมาตรฐานตั้งแต่ต้นทาง",
      "c2": "เป็นกิจกรรมสืบสวนหลังเกิดเหตุการณ์ละเมิดแล้ว ไม่ใช่มาตรการเชิงป้องกันในกระบวนการจัดหาสินทรัพย์",
      "c3": "เป็นเทคนิคการลบข้อมูลบนสื่อแม่เหล็กในขั้นตอนปลดระวาง ไม่เกี่ยวข้องกับการตรวจสอบผู้ขายก่อนจัดซื้อ"
    },
    "misconceptionTh": "มักปล่อยให้ฝ่ายจัดซื้อเลือกผู้ขายตามราคาแล้วค่อยให้ทีมความปลอดภัยมาตรวจสอบหรืออุดช่องโหว่หลังติดตั้งเสร็จ",
    "relatedLessonIds": [
      "L4-03",
      "L2-02"
    ],
    "tags": [
      "asset-management",
      "procurement",
      "supply-chain"
    ]
  },
  {
    "id": "Q4-012",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.2"
    ],
    "type": "mcq",
    "selectCount": 1,
    "difficulty": "intermediate",
    "promptEn": "During an urgent vulnerability response, analysts identify an unpatched server hosting confidential customer billing tables. Nobody in IT or business units knows who administers the server or holds authority to approve maintenance downtime, delaying remediation for days. Which asset management controls were missing?",
    "promptTh": "ระหว่างการตอบสนองต่อช่องโหว่เร่งด่วน นักวิเคราะห์พบเซิร์ฟเวอร์ที่ยังไม่ได้แพตช์ซึ่งเก็บตารางข้อมูลการเรียกเก็บเงินลับของลูกค้า แต่ไม่มีผู้ใดในฝ่ายไอทีหรือฝ่ายธุรกิจทราบว่าใครเป็นผู้ดูแลเซิร์ฟเวอร์หรือมีอำนาจอนุมัติช่วงเวลาปิดปรับปรุง ทำให้การแก้ไขล่าช้าไปหลายวัน มาตรการจัดการสินทรัพย์ใดที่ขาดหายไป?",
    "choices": [
      {
        "id": "c1",
        "textEn": "Asset ownership assignment and data classification",
        "textTh": "การกำหนดผู้รับผิดชอบสินทรัพย์ (Ownership) และการจำแนกชั้นข้อมูล (Classification)"
      },
      {
        "id": "c2",
        "textEn": "Physical shredding and certificate of destruction issuance",
        "textTh": "การทำลายทางกายภาพและการออกใบรับรองการทำลาย"
      },
      {
        "id": "c3",
        "textEn": "Opportunistic wireless encryption and site surveying",
        "textTh": "การเข้ารหัสไร้สายแบบ OWE และการสำรวจพื้นที่สัญญาณ"
      },
      {
        "id": "c4",
        "textEn": "Cryptographic erasure of backup magnetic tapes",
        "textTh": "การลบกุญแจเข้ารหัสของเทปสำรองข้อมูลแบบแม่เหล็ก"
      }
    ],
    "correctChoiceIds": [
      "c1"
    ],
    "explanationTh": "การกำหนด Asset ownership (ระบุทั้ง System owner และ Data owner) ร่วมกับ Classification ใน CMDB ป้องกันการเกิด Orphaned assets ทำให้เมื่อพบความเสี่ยงหรือเหตุฉุกเฉิน ทีมปฏิบัติการทราบผู้มีอำนาจอนุมัติและระดับความสำคัญในการคุ้มครองทันที",
    "choiceRationales": {
      "c1": "ระบุตัวตนผู้รับผิดชอบและระดับความสำคัญของระบบ/ข้อมูล เพื่อป้องกันสินทรัพย์กำพร้าและการล่าช้าในการตัดสินใจ",
      "c2": "ใช้ในระยะปลดระวางอุปกรณ์และทำลายสื่อ ไม่ใช่การกำหนดผู้ดูแลและชั้นความลับระหว่างใช้งาน",
      "c3": "เป็นเทคนิคการป้องกันเครือข่ายไร้สายใน Objective 4.1 ไม่เกี่ยวกับความรับผิดชอบของสินทรัพย์เซิร์ฟเวอร์",
      "c4": "เป็นเทคนิค Purge ข้อมูลในระยะเลิกใช้งาน ไม่ได้ช่วยระบุผู้ดูแลระบบที่กำลังเปิดบริการอยู่"
    },
    "misconceptionTh": "มักเข้าใจว่าการบันทึกเพียงหมายเลข IP และสเปกฮาร์ดแวร์ในทะเบียนก็เพียงพอ โดยละเลยการผูกชื่อ Owner และระดับ Classification",
    "relatedLessonIds": [
      "L4-03",
      "L3-05"
    ],
    "tags": [
      "asset-ownership",
      "classification",
      "orphaned-assets"
    ]
  },
  {
    "id": "Q4-013",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.2"
    ],
    "type": "mcq",
    "selectCount": 1,
    "difficulty": "intermediate",
    "promptEn": "A security operations team runs automated active and passive network discovery alongside cloud API queries every night and reconciles the discovered hosts against the central Configuration Management Database (CMDB). This workflow uncovers three unauthorized contractor virtual machines and a rogue access point. Which two asset tracking activities are being compared?",
    "promptTh": "ทีมปฏิบัติการความปลอดภัยรันระบบค้นหาเครือข่ายทั้งเชิงรุกและเชิงรับร่วมกับการเรียก API ของคลาวด์ทุกคืน แล้วนำรายการโฮสต์ที่พบไปเทียบกับฐานข้อมูล CMDB ส่วนกลาง ขั้นตอนนี้ช่วยให้ตรวจพบ Virtual Machine ที่ผู้รับเหมาสร้างโดยพลการ 3 เครื่องและ Access Point แปลกปลอม 1 ตัว กิจกรรมติดตามสินทรัพย์คู่ใดกำลังถูกนำมาเปรียบเทียบกัน?",
    "choices": [
      {
        "id": "c1",
        "textEn": "Data retention scheduling and physical pulverizing",
        "textTh": "การกำหนดตารางเก็บรักษาข้อมูลและการบดทำลายทางกายภาพ"
      },
      {
        "id": "c2",
        "textEn": "Media sanitization and legal hold enforcement",
        "textTh": "การล้างข้อมูลสื่อบันทึกและการบังคับใช้ Legal Hold"
      },
      {
        "id": "c3",
        "textEn": "Asset enumeration and official asset inventory",
        "textTh": "การสำรวจระบุตัวตนจริง (Enumeration) และทะเบียนสินทรัพย์ทางการ (Inventory)"
      },
      {
        "id": "c4",
        "textEn": "Procurement vetting and vendor attestation",
        "textTh": "การคัดกรองการจัดซื้อและการรับรองจากผู้ขาย"
      }
    ],
    "correctChoiceIds": [
      "c3"
    ],
    "explanationTh": "Asset inventory (เช่น CMDB) บันทึกสินทรัพย์ที่องค์กรรับรู้และอนุมัติอย่างเป็นทางการ ส่วน Asset enumeration คือการสำรวจเชิงเทคนิคเพื่อค้นหาอุปกรณ์และบริการที่เชื่อมต่อจริง การเปรียบเทียบทั้งสองส่วนช่วยเปิดโปง Shadow IT และ Rogue devices ได้อย่างรวดเร็ว",
    "choiceRationales": {
      "c1": "ไม่ถูกต้อง: การกำหนดตารางเก็บรักษาและบดทำลายสื่อเป็นการจัดการวงจรชีวิตตอนสิ้นสุดอายุใช้งาน ไม่ใช่การสำรวจเครือข่ายเพื่อเทียบกับทะเบียนสินทรัพย์",
      "c2": "ไม่ถูกต้อง: เกี่ยวข้องกับขั้นตอนปลดระวางและการเก็บรักษาหลักฐานทางกฎหมาย ไม่ใช่การตรวจจับเครื่องแปลกปลอมบนเครือข่าย",
      "c3": "ถูกต้อง: เปรียบเทียบสิ่งที่กำลังรันอยู่จริงบนเครือข่าย/คลาวด์ (Enumeration) กับทะเบียนที่อนุมัติไว้ (Inventory) เพื่อจับความคลาดเคลื่อน",
      "c4": "ไม่ถูกต้อง: เกิดขึ้นก่อนสินทรัพย์เข้าสู่องค์กร ไม่ใช่การตรวจจับโฮสต์ที่ทำงานอยู่หลังติดตั้ง"
    },
    "misconceptionTh": "มักใช้คำว่า Inventory และ Enumeration สลับกันโดยไม่ตระหนักว่าต้องนำข้อมูลจาก Enumeration มาเทียบ (Reconcile) กับ Inventory อย่างต่อเนื่อง",
    "relatedLessonIds": [
      "L4-03"
    ],
    "tags": [
      "asset-inventory",
      "enumeration",
      "shadow-it",
      "cmdb"
    ]
  },
  {
    "id": "Q4-014",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.2"
    ],
    "type": "msq",
    "selectCount": 2,
    "difficulty": "exam-ready",
    "promptEn": "An automated lifecycle script schedules three-year-old customer support chat archives for permanent deletion next week according to the standard data retention policy. However, legal counsel informs IT of pending civil litigation where those records may serve as evidence. Which TWO actions must the team take? (Choose two.)",
    "promptTh": "สคริปต์อัตโนมัติตั้งเวลาลบคลังข้อมูลแชตบริการลูกค้าที่มีอายุครบ 3 ปีในสัปดาห์หน้าตามนโยบายการเก็บรักษาข้อมูลมาตรฐาน อย่างไรก็ตามฝ่ายกฎหมายแจ้งฝ่ายไอทีว่ากำลังมีคดีฟ้องร้องทางแพ่งที่ข้อมูลชุดนี้อาจใช้เป็นพยานหลักฐาน ทีมงานต้องดำเนินการ 2 ข้อใด? (เลือก 2 ข้อ)",
    "choices": [
      {
        "id": "c1",
        "textEn": "Apply cryptographic erasure immediately so only encrypted metadata remains on disk",
        "textTh": "ทำ Cryptographic Erasure ทันทีเพื่อให้เหลือเฉพาะข้อมูลเมตาที่เข้ารหัสอยู่บนดิสก์"
      },
      {
        "id": "c2",
        "textEn": "Reclassify the chat logs as public data so external attorneys can download them without authentication",
        "textTh": "ปรับระดับชั้นความลับของบันทึกแชตเป็นข้อมูลสาธารณะเพื่อให้ทนายภายนอกดาวน์โหลดได้โดยไม่ต้องยืนยันตัวตน"
      },
      {
        "id": "c3",
        "textEn": "Place a formal legal hold to suspend automated deletion and decommissioning of the affected records",
        "textTh": "ประกาศใช้ Legal Hold อย่างเป็นทางการเพื่อระงับการลบอัตโนมัติและการปลดระวางข้อมูลชุดที่เกี่ยวข้อง"
      },
      {
        "id": "c4",
        "textEn": "Preserve the relevant data integrity until legal counsel formally lifts the hold",
        "textTh": "รักษาความสมบูรณ์ของข้อมูลที่เกี่ยวข้องไว้จนกว่าฝ่ายกฎหมายจะแจ้งยกเลิกคำสั่งระงับอย่างเป็นทางการ"
      },
      {
        "id": "c5",
        "textEn": "Allow the three-year retention script to purge the archive as scheduled to maintain policy consistency",
        "textTh": "ปล่อยให้สคริปต์ตามนโยบาย 3 ปีลบข้อมูลตามกำหนดเดิมเพื่อรักษาความสม่ำเสมอของนโยบาย"
      }
    ],
    "correctChoiceIds": [
      "c3",
      "c4"
    ],
    "explanationTh": "คำสั่ง Legal hold มีผลบังคับเหนือตาราง Data retention ปกติเพื่อป้องกันการทำลายหลักฐานทางคดี (Spoliation) ทีมปฏิบัติการจึงต้องหยุดสคริปต์ลบข้อมูลและเก็บรักษาความสมบูรณ์ของข้อมูลไว้จนกว่าฝ่ายกฎหมายจะยกเลิกคำสั่งอย่างเป็นทางการ",
    "choiceRationales": {
      "c3": "ระงับวงจรการลบหรือทำลายสื่อตามตาราง Retention ชั่วคราวเมื่อมีข้อพิพาททางกฎหมาย",
      "c4": "คงสภาพและความถูกต้องของพยานหลักฐานดิจิทัลตลอดระยะเวลาที่อยู่ภายใต้คำสั่ง Legal hold",
      "c5": "การลบข้อมูลระหว่างมีคดีความเสี่ยงต่อการถูกดำเนินคดีฐานทำลายหลักฐาน แม้จะครบอายุ Retention ปกติแล้วก็ตาม",
      "c1": "Crypto-shredding ทำลายกุญแจจนกู้ข้อมูลไม่ได้ ซึ่งถือเป็นการทำลายหลักฐานในบริบทของ Legal hold",
      "c2": "การลดระดับความลับเปิดเผยข้อมูลลูกค้าส่วนบุคคลโดยมิชอบแทนการถ่ายโอนผ่านกระบวนการ e-discovery ที่ควบคุมสิทธิ์"
    },
    "misconceptionTh": "มักเข้าใจว่านโยบาย Data retention ที่มีกำหนดเวลาลบอัตโนมัติสามารถทำงานต่อไปได้แม้ได้รับแจ้งคดีความจากฝ่ายกฎหมาย",
    "relatedLessonIds": [
      "L4-03",
      "L4-11"
    ],
    "tags": [
      "data-retention",
      "legal-hold",
      "decommissioning"
    ]
  },
  {
    "id": "Q4-015",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.2"
    ],
    "type": "mcq",
    "selectCount": 1,
    "difficulty": "exam-ready",
    "promptEn": "A data center is decommissioning two types of storage media containing regulated financial data: functional LTO magnetic backup tapes and failed enterprise NVMe solid-state drives (SSDs) that no longer respond to firmware commands. Which sanitization and destruction pairing is MOST effective?",
    "promptTh": "ศูนย์ข้อมูลกำลังปลดระวางสื่อบันทึกข้อมูล 2 ชนิดที่เก็บข้อมูลการเงินภายใต้ข้อกำกับ ได้แก่ เทปสำรองข้อมูลแบบแม่เหล็ก LTO ที่ยังใช้งานได้ และไดรฟ์ NVMe SSD ระดับองค์กรที่เสียหายจนไม่ตอบสนองต่อคำสั่งเฟิร์มแวร์ การจับคู่วิธีการลบและทำลายใดมีประสิทธิภาพสูงสุด?",
    "choices": [
      {
        "id": "c1",
        "textEn": "Perform software zero-overwrite on the unresponsive NVMe SSDs and degauss both media types afterward",
        "textTh": "สั่งซอฟต์แวร์เขียนทับเลขศูนย์บน NVMe SSD ที่ไม่ตอบสนองแล้วนำไปผ่านเครื่อง Degausser ทั้งสองชนิด"
      },
      {
        "id": "c2",
        "textEn": "Delete the file allocation table on the LTO tapes and leave the broken SSDs in standard office recycling",
        "textTh": "ลบสารบัญไฟล์บนเทป LTO และนำ SSD ที่เสียไปทิ้งรวมกับขยะรีไซเคิลทั่วไปของสำนักงาน"
      },
      {
        "id": "c3",
        "textEn": "Pass the NVMe SSDs through a high-powered degausser and run a quick format on the LTO tapes",
        "textTh": "นำ NVMe SSD ผ่านเครื่องล้างสนามแม่เหล็กกำลังสูงและสั่ง Quick Format บนเทป LTO"
      },
      {
        "id": "c4",
        "textEn": "Degauss the LTO magnetic tapes and physically shred or pulverize the failed NVMe SSD NAND flash chips",
        "textTh": "ใช้เครื่อง Degaussing ล้างสนามแม่เหล็กบนเทป LTO และนำ NVMe SSD ที่เสียไปย่อยหรือบดทำลายชิป NAND Flash ทางกายภาพ"
      }
    ],
    "correctChoiceIds": [
      "c4"
    ],
    "explanationTh": "Degaussing ใช้สนามแม่เหล็กทำลายข้อมูลได้เฉพาะสื่อแม่เหล็กอย่าง HDD และ Magnetic tape แต่ไม่สามารถลบประจุไฟฟ้าในชิป NAND flash ของ SSD ได้ เมื่อ SSD เสียจนสั่ง Firmware secure erase หรือ Crypto-shredding ไม่ได้ จึงต้องทำลายทางกายภาพ (Shredding/Pulverizing) ให้ครอบคลุมทุกชิป",
    "choiceRationales": {
      "c3": "สนามแม่เหล็กไม่มีผลลบข้อมูลบน SSD ส่วน Quick format เพียงลบพอยน์เตอร์โดยไม่ทำลายเนื้อหาจริง",
      "c4": "เลือกเทคนิคได้สอดคล้องกับโครงสร้างทางกายภาพของทั้งสื่อแม่เหล็ก (Degaussing) และสื่อโซลิดสเตตที่เสียหาย (Physical destruction)",
      "c1": "ไดรฟ์ที่ไม่ตอบสนองต่อคำสั่งไม่สามารถเขียนทับทางซอฟต์แวร์ได้ และการทำ Degaussing ซ้ำกับ SSD ไม่เกิดประโยชน์",
      "c2": "เสี่ยงต่อการกู้คืนข้อมูลทางการเงินจากทั้งเทปและชิปหน่วยความจำที่ยังไม่ถูกทำลาย"
    },
    "misconceptionTh": "มักเข้าใจว่าเครื่อง Degausser สามารถลบข้อมูลจากสื่อบันทึกทุกชนิดรวมถึง SSD และ Flash drive ได้เช่นเดียวกับ HDD",
    "relatedLessonIds": [
      "L4-03"
    ],
    "tags": [
      "sanitization",
      "degaussing",
      "destruction",
      "ssd-vs-hdd"
    ]
  },
  {
    "id": "Q4-016",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.2"
    ],
    "type": "mcq",
    "selectCount": 1,
    "difficulty": "foundation",
    "promptEn": "An organization plans to reassign 30 functional corporate laptops internally to new employees within the same internal security classification tier. Which sanitization level from NIST guidelines is MOST appropriate to prepare the drives for internal reuse without destroying the hardware?",
    "promptTh": "องค์กรวางแผนนำแล็ปท็อปที่ยังใช้งานได้ 30 เครื่องไปจัดสรรใหม่ภายในองค์กรให้พนักงานใหม่ที่ทำงานในระดับชั้นความลับเดียวกัน ระดับการลบข้อมูลใดตามแนวทางมาตรฐานเหมาะสมที่สุดสำหรับการเตรียมไดรฟ์เพื่อนำกลับมาใช้ใหม่ภายในโดยไม่ทำลายฮาร์ดแวร์?",
    "choices": [
      {
        "id": "c1",
        "textEn": "Clear (logical overwriting or standard factory reset)",
        "textTh": "การ Clear (การเขียนทับเชิงตรรกะหรือรีเซ็ตมาตรฐาน)"
      },
      {
        "id": "c2",
        "textEn": "Incineration",
        "textTh": "การเผาทำลาย (Incineration)"
      },
      {
        "id": "c3",
        "textEn": "Degaussing followed by acid immersion",
        "textTh": "การล้างสนามแม่เหล็กตามด้วยการแช่กรด"
      },
      {
        "id": "c4",
        "textEn": "Pulverizing",
        "textTh": "การบดละเอียด (Pulverizing)"
      }
    ],
    "correctChoiceIds": [
      "c1"
    ],
    "explanationTh": "กระบวนการ Clear ใช้เทคนิคเชิงตรรกะเพื่อป้องกันการกู้ข้อมูลด้วยซอฟต์แวร์ทั่วไปโดยยังคงสภาพสื่อให้ใช้งานต่อได้ จึงเหมาะกับการหมุนเวียนอุปกรณ์ภายในองค์กรที่ระดับความลับเท่าเดิม ต่างจาก Destruction ที่ทำลายฮาร์ดแวร์ถาวร",
    "choiceRationales": {
      "c4": "เป็นการทำลายทางกายภาพ (Destroy) สำหรับสื่อปลดระวางหรือข้อมูลลับสูงสุดที่ไม่นำกลับมาใช้ซ้ำ",
      "c1": "ระดับ Clear ล้างข้อมูลระดับตรรกะให้เพียงพอต่อการนำฮาร์ดแวร์กลับมาใช้ซ้ำภายในโดยไม่ทำให้เครื่องเสียหาย",
      "c2": "เป็นการเผาทำลายสื่อถาวร ใช้เมื่อสิ้นสุดอายุการใช้งานหรือต้องการทำลายความลับระดับสูงสุด",
      "c3": "Degaussing มักทำให้ฮาร์ดดิสก์ใช้งานต่อไม่ได้และการทำลายด้วยสารเคมีทำให้สูญเสียอุปกรณ์ที่ยังใช้งานได้"
    },
    "misconceptionTh": "มักสับสนระหว่างการนำสื่อใช้ซ้ำภายใน (Clear) กับการทิ้งหรือส่งออกนอกองค์กรที่ต้องทำ Purge หรือ Destroy",
    "relatedLessonIds": [
      "L4-03"
    ],
    "tags": [
      "sanitization",
      "clear",
      "purge",
      "destruction"
    ]
  },
  {
    "id": "Q4-017",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.2"
    ],
    "type": "mcq",
    "selectCount": 1,
    "difficulty": "intermediate",
    "promptEn": "A healthcare provider contracts a third-party e-waste disposal vendor to pick up and shred 120 retired hard drives at an off-site facility. During a compliance audit, regulators ask for verifiable evidence that every specific drive left organizational custody and was permanently destroyed. Which documentation BEST satisfies this audit requirement?",
    "promptTh": "ผู้ให้บริการด้านสุขภาพว่าจ้างผู้รับเหมาภายนอกเพื่อขนย้ายและย่อยทำลายฮาร์ดดิสก์ปลดระวางจำนวน 120 ลูกนอกสถานที่ ระหว่างการตรวจสอบความสอดคล้องตามข้อกำหนด ผู้ตรวจประเมินขอดูหลักฐานที่ยืนยันได้ว่าไดรฟ์ทุกลูกออกจากความดูแลขององค์กรและถูกทำลายถาวรแล้ว เอกสารใดตอบโจทย์การตรวจสอบนี้ได้ดีที่สุด?",
    "choices": [
      {
        "id": "c1",
        "textEn": "A chain-of-custody log and signed certificates of destruction listing each drive’s serial number, method, date, and witness",
        "textTh": "บันทึก Chain of Custody และเอกสาร Certificate of Destruction ที่ลงนามระบุ Serial Number วิธีการทำลาย วันที่ และพยานของไดรฟ์ทุกลูก"
      },
      {
        "id": "c2",
        "textEn": "A generic invoice showing total weight of scrap metal delivered to the recycling warehouse",
        "textTh": "ใบแจ้งหนี้ทั่วไปที่แสดงน้ำหนักรวมของเศษโลหะที่ส่งไปยังโกดังรีไซเคิล"
      },
      {
        "id": "c3",
        "textEn": "An internal email from the help desk technician stating the pickup truck arrived on schedule",
        "textTh": "อีเมลภายในจากช่างเทคนิคที่ระบุว่ารถขนส่งมารับอุปกรณ์ตรงตามเวลาที่นัดหมาย"
      },
      {
        "id": "c4",
        "textEn": "A standard non-disclosure agreement signed three years prior without asset-level serial tracking",
        "textTh": "สัญญาไม่เปิดเผยข้อมูล (NDA) ทั่วไปที่ลงนามไว้เมื่อสามปีก่อนโดยไม่มีการติดตาม Serial รายชิ้น"
      }
    ],
    "correctChoiceIds": [
      "c1"
    ],
    "explanationTh": "การปลดระวางสื่อผ่านบุคคลภายนอกต้องอาศัยการติดตาม Chain of custody ระหว่างขนย้ายควบคู่กับ Certificate of destruction ที่ระบุ Serial number วิธีการทำลาย วันที่ และผู้รับรอง เพื่อเป็นหลักฐานตรวจสอบความสอดคล้องทางกฎหมายและข้อกำหนด",
    "choiceRationales": {
      "c1": "แสดงหลักฐานครบวงจรตั้งแต่การส่งมอบจนถึงการทำลายจริงในระดับราย Serial number ตามเกณฑ์ Audit",
      "c2": "ใบชั่งน้ำหนักรวมไม่สามารถพิสูจน์ได้ว่าไดรฟ์แต่ละลูกที่มีข้อมูลลับถูกทำลายครบถ้วนและไม่มีลูกใดสูญหาย",
      "c3": "ยืนยันได้เพียงการมารับของเบื้องต้น แต่ขาดการติดตามหลังออกจากสถานที่และการรับรองผลการทำลาย",
      "c4": "NDA เป็นข้อตกลงทางกฎหมายทั่วไป ไม่สามารถใช้แทนหลักฐานยืนยันการทำลายสื่อแต่ละชิ้นในกระบวนการ Audit"
    },
    "misconceptionTh": "มักคิดว่าการเซ็นสัญญาว่าจ้างหรือ NDA กับบริษัทรีไซเคิลเพียงพอต่อการผ่าน Audit โดยไม่ต้องเก็บ Certificate of destruction ราย Serial",
    "relatedLessonIds": [
      "L4-03",
      "L5-04"
    ],
    "tags": [
      "certification",
      "certificate-of-destruction",
      "chain-of-custody",
      "disposal"
    ]
  },
  {
    "id": "Q4-018",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.2"
    ],
    "type": "msq",
    "selectCount": 2,
    "difficulty": "intermediate",
    "promptEn": "An enterprise runs hundreds of ephemeral cloud containers that spin up and terminate within minutes while relying heavily on open-source software dependencies. Quarterly manual spreadsheets fail to capture active workloads or alert on end-of-life libraries. Which TWO practices BEST modernize hardware/software asset tracking? (Choose two.)",
    "promptTh": "องค์กรรันคอนเทนเนอร์บนคลาวด์แบบชั่วคราว (Ephemeral) หลายร้อยตัวที่สร้างและปิดตัวภายในไม่กี่นาที พร้อมพึ่งพาซอฟต์แวร์โอเพนซอร์สจำนวนมาก การจดบันทึกด้วยตารางรายไตรมาสไม่สามารถติดตามระบบที่ทำงานจริงหรือแจ้งเตือนไลบรารีที่หมดอายุสนับสนุนได้ แนวทาง 2 ข้อใดช่วยยกระดับการติดตามสินทรัพย์ฮาร์ดแวร์และซอฟต์แวร์ได้ดีที่สุด? (เลือก 2 ข้อ)",
    "choices": [
      {
        "id": "c1",
        "textEn": "Maintain a Software Bill of Materials (SBOM) linked to automated license and end-of-life tracking",
        "textTh": "จัดทำ Software Bill of Materials (SBOM) ที่เชื่อมโยงกับการติดตามลิขสิทธิ์และอายุการสนับสนุน (EOL) อัตโนมัติ"
      },
      {
        "id": "c2",
        "textEn": "Require developers to email spreadsheet updates once per year after containers are deleted",
        "textTh": "กำหนดให้นักพัฒนาส่งอีเมลอัปเดตตารางปีละครั้งหลังจากลบคอนเทนเนอร์ออกไปแล้ว"
      },
      {
        "id": "c3",
        "textEn": "Disable container image registries and prohibit tracking third-party library versions",
        "textTh": "ปิดใช้งานคลังเก็บอิมเมจคอนเทนเนอร์และห้ามบันทึกเวอร์ชันของไลบรารีบุคคลที่สาม"
      },
      {
        "id": "c4",
        "textEn": "Perform physical barcode scanning on virtual container instances inside public cloud regions",
        "textTh": "ดำเนินการสแกนบาร์โค้ดทางกายภาพบนอินสแตนซ์คอนเทนเนอร์เสมือนภายใน Region ของคลาวด์สาธารณะ"
      },
      {
        "id": "c5",
        "textEn": "Integrate automated cloud API discovery to continuously update the asset inventory",
        "textTh": "บูรณาการระบบค้นหาอัตโนมัติผ่าน Cloud API เพื่อปรับปรุงทะเบียนสินทรัพย์อย่างต่อเนื่อง"
      }
    ],
    "correctChoiceIds": [
      "c1",
      "c5"
    ],
    "explanationTh": "ในสถาปัตยกรรมที่เปลี่ยนแปลงเร็ว การติดตามสินทรัพย์ต้องใช้ API-driven enumeration เพื่อตรวจจับ Workload ชั่วคราวแบบเรียลไทม์ ควบคู่กับ SBOM เพื่อมองเห็นส่วนประกอบซอฟต์แวร์ภายนอกและสถานะ End-of-life อย่างแม่นยำ",
    "choiceRationales": {
      "c1": "ถูกต้อง: SBOM สร้างความโปร่งใสของซอฟต์แวร์และไลบรารีโอเพนซอร์สเพื่อแจ้งเตือนเวอร์ชันที่หมดอายุหรือมีช่องโหว่",
      "c2": "ไม่ถูกต้อง: การส่งตารางทางอีเมลปีละครั้งหลังจากลบคอนเทนเนอร์ไปแล้วไม่สามารถติดตาม Workload ชั่วคราวหรือแจ้งเตือนไลบรารี EOL ได้ทันท่วงที",
      "c3": "ไม่ถูกต้อง: การปิดคลังอิมเมจและไม่เก็บเวอร์ชันทำให้ขาดความสามารถในการตรวจสอบ Supply chain ของซอฟต์แวร์",
      "c4": "ไม่ถูกต้อง: การติดบาร์โค้ดทางกายภาพใช้กับอุปกรณ์ฮาร์ดแวร์ On-premises เท่านั้น ไม่สามารถใช้กับอินสแตนซ์เสมือนบนคลาวด์สาธารณะ",
      "c5": "ถูกต้อง: Cloud API discovery แก้ปัญหา Ephemeral cloud workloads ที่เกิดขึ้นและหายไปเร็วกว่ารอบการตรวจนับด้วยตนเอง"
    },
    "misconceptionTh": "มักนำวิธีทำ Inventory แบบจดบันทึกด้วยมือหรือบาร์โค้ดทางกายภาพมาใช้กับระบบคลาวด์และซอฟต์แวร์โอเพนซอร์สที่มีการเปลี่ยนแปลงตลอดเวลา",
    "relatedLessonIds": [
      "L4-03",
      "L3-01"
    ],
    "tags": [
      "sbom",
      "cloud-discovery",
      "asset-tracking",
      "eol"
    ]
  },
  {
    "id": "Q4-019",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.2"
    ],
    "type": "mcq",
    "selectCount": 1,
    "difficulty": "foundation",
    "promptEn": "Before returning a corporate laptop equipped with a traditional spinning hard drive, a departing contractor deletes sensitive project folders and performs a quick format. Why does security policy still prohibit immediately issuing the laptop to a new external vendor?",
    "promptTh": "ก่อนส่งคืนแล็ปท็อปองค์กรที่ใช้ฮาร์ดดิสก์จานหมุนแบบดั้งเดิม ผู้รับเหมาที่พ้นสภาพได้ลบโฟลเดอร์โครงการลับและสั่ง Quick Format เรียบร้อยแล้ว เหตุใดนโยบายความปลอดภัยจึงยังคงห้ามนำแล็ปท็อปเครื่องนี้ไปมอบให้ผู้รับเหมาภายนอกรายใหม่ทันที?",
    "choices": [
      {
        "id": "c1",
        "textEn": "Quick formatting doubles the magnetic field strength and damages the operating system kernel",
        "textTh": "การสั่ง Quick Format ทำให้สนามแม่เหล็กแรงขึ้นเป็นสองเท่าจนเคอร์เนลของระบบปฏิบัติการเสียหาย"
      },
      {
        "id": "c2",
        "textEn": "Quick formatting only removes file system pointers while leaving underlying raw data recoverable on the platters",
        "textTh": "การสั่ง Quick Format ลบเพียงตัวชี้ตำแหน่งในระบบไฟล์ แต่เนื้อหาข้อมูลดิบยังคงอยู่บนจานแม่เหล็กและสามารถกู้คืนได้"
      },
      {
        "id": "c3",
        "textEn": "Quick formatting automatically triggers cryptographic erasure of the motherboard BIOS chip",
        "textTh": "การสั่ง Quick Format จะสั่งลบกุญแจเข้ารหัสในชิป BIOS ของเมนบอร์ดโดยอัตโนมัติ"
      },
      {
        "id": "c4",
        "textEn": "Spinning hard drives permanently lock into read-only mode after any file deletion command",
        "textTh": "ฮาร์ดดิสก์จานหมุนจะล็อกเข้าสู่โหมดอ่านอย่างเดียวถาวรทันทีหลังได้รับคำสั่งลบไฟล์"
      }
    ],
    "correctChoiceIds": [
      "c2"
    ],
    "explanationTh": "การลบไฟล์และ Quick format เพียงแค่ลบโครงสร้างสารบัญไฟล์ (Metadata/Pointers) ทำให้ระบบมองไม่เห็นไฟล์เดิม แต่บิตข้อมูลยังคงอยู่จนกว่าจะถูกเขียนทับด้วยกระบวนการ Sanitization ระดับ Clear หรือ Purge อย่างถูกต้อง",
    "choiceRationales": {
      "c2": "อธิบายกลไกที่ไฟล์ยังคงกู้คืนได้ด้วยเครื่องมือวิเคราะห์ข้อมูล จนกว่าจะมีการทำ Sanitization อย่างสมบูรณ์",
      "c3": "Quick format ทำงานเฉพาะระดับระบบไฟล์ ไม่เกี่ยวข้องกับการจัดการกุญแจในเฟิร์มแวร์หรือ TPM",
      "c4": "ฮาร์ดดิสก์ปกติยังคงเขียนทับได้ต่อไป การล็อกอ่านอย่างเดียวมักเกิดจากความเสียหายของสื่อแฟลชบางชนิดเท่านั้น",
      "c1": "คำสั่งระดับระบบปฏิบัติการไม่สามารถเปลี่ยนแปลงความเข้มสนามแม่เหล็กทางกายภาพหรือทำลายฮาร์ดแวร์ได้"
    },
    "misconceptionTh": "มักเชื่อว่าการลบไฟล์และสั่ง Quick format หรือลบพาร์ติชันก็เพียงพอที่จะทำลายข้อมูลลับไม่ให้กู้คืนได้",
    "relatedLessonIds": [
      "L4-03"
    ],
    "tags": [
      "sanitization",
      "quick-format",
      "data-recovery"
    ]
  },
  {
    "id": "Q4-020",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.3"
    ],
    "type": "mcq",
    "selectCount": 1,
    "difficulty": "foundation",
    "promptEn": "Weekly unauthenticated network vulnerability scans consistently report zero critical issues on an internal Linux application server, yet an audit later discovers multiple outdated local packages containing known privilege-escalation flaws. Which scanning adjustment BEST prevents these blind spots?",
    "promptTh": "การสแกนช่องโหว่เครือข่ายแบบไม่ใช้บัญชีล็อกอินประจำสัปดาห์รายงานอย่างสม่ำเสมอว่าไม่พบจุดอ่อนระดับวิกฤตบนเซิร์ฟเวอร์แอปพลิเคชัน Linux ภายใน แต่การตรวจสอบภายหลังกลับพบแพ็กเกจภายในที่ล้าสมัยหลายรายการซึ่งมีช่องโหว่ยกระดับสิทธิ์ที่รู้จักกันดี การปรับรูปแบบการสแกนใดช่วยลดจุดบอดเหล่านี้ได้ดีที่สุด?",
    "choices": [
      {
        "id": "c1",
        "textEn": "Switch from weekly scanning to annual manual spreadsheet tracking of port banners",
        "textTh": "เปลี่ยนจากการสแกนรายสัปดาห์เป็นให้พนักงานจดบันทึก Port Banner ลงตารางปีละครั้ง"
      },
      {
        "id": "c2",
        "textEn": "Disable all host-based logging so the scanner finishes checking open TCP ports faster",
        "textTh": "ปิดการบันทึก Log บนเครื่องทั้งหมดเพื่อให้เครื่องสแกนตรวจสอบพอร์ต TCP ที่เปิดอยู่ได้เร็วขึ้น"
      },
      {
        "id": "c3",
        "textEn": "Perform credentialed vulnerability scans using read-only authenticated service accounts",
        "textTh": "ดำเนินการสแกนช่องโหว่แบบ Credentialed Scan โดยใช้บัญชีบริการที่มีสิทธิ์อ่านข้อมูลหลังยืนยันตัวตน"
      },
      {
        "id": "c4",
        "textEn": "Run external ping sweeps from the internet perimeter without inspecting host packages",
        "textTh": "รันการสำรวจ Ping จากขอบเครือข่ายอินเทอร์เน็ตโดยไม่ต้องตรวจสอบแพ็กเกจภายในเครื่อง"
      }
    ],
    "correctChoiceIds": [
      "c3"
    ],
    "explanationTh": "Non-credentialed scan มองเห็นเฉพาะบริการที่เปิดพอร์ตออกสู่เครือข่ายจึงเกิด False negative กับช่องโหว่ภายในเครื่องได้ง่าย ส่วน Credentialed scan ล็อกอินเข้าไปตรวจรายการแพ็กเกจ ระดับแพตช์ และค่าคอนฟิกภายในโดยตรง ทำให้ผลลัพธ์แม่นยำกว่ามาก",
    "choiceRationales": {
      "c3": "ให้ทัศนวิสัยระดับระบบปฏิบัติการและแพ็กเกจภายในเพื่อตรวจพบช่องโหว่ที่ซ่อนอยู่หลังไฟร์วอลล์หรือพอร์ตปิด",
      "c4": "การตรวจเฉพาะการตอบสนอง ICMP จากภายนอกไม่เห็นซอฟต์แวร์หรือสถานะแพตช์ภายในโฮสต์",
      "c1": "ลดความถี่ในการตรวจจับและอาศัยข้อมูลแบนเนอร์ที่อาจถูกปลอมแปลงหรือไม่อัปเดต",
      "c2": "การปิด Log ลดความสามารถในการตรวจสอบเหตุการณ์โดยไม่ได้ช่วยเพิ่มความลึกของการตรวจหาช่องโหว่"
    },
    "misconceptionTh": "มักเข้าใจว่าเครื่องสแกนช่องโหว่จากเครือข่ายภายนอกสามารถมองเห็นช่องโหว่ระดับแอปพลิเคชันและแพตช์ภายในเครื่องได้ครบโดยไม่ต้องล็อกอิน",
    "relatedLessonIds": [
      "L4-04"
    ],
    "tags": [
      "vulnerability-scanning",
      "credentialed-scan",
      "false-negative"
    ]
  },
  {
    "id": "Q4-021",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.3"
    ],
    "type": "mcq",
    "selectCount": 1,
    "difficulty": "intermediate",
    "promptEn": "A DevSecOps team wants to embed automated security checks into its CI/CD pipeline. Specifically, they need one check to inspect proprietary source code before compilation for injection flaws and hardcoded secrets, and another check to alert when open-source libraries declared in the build manifest receive new CVEs. Which pair of methods fits these requirements?",
    "promptTh": "ทีม DevSecOps ต้องการฝังการตรวจสอบความปลอดภัยอัตโนมัติใน CI/CD Pipeline โดยต้องการการตรวจสอบ 2 ส่วน: ส่วนหนึ่งตรวจวิเคราะห์ซอร์สโค้ดที่พัฒนาเองก่อนคอมไพล์เพื่อหาช่องโหว่ Injection และรหัสลับที่ฝังในโค้ด และอีกส่วนคอยแจ้งเตือนเมื่อไลบรารีโอเพนซอร์สที่ระบุในไฟล์ Build มีประกาศ CVE ใหม่ คู่วิธีการใดตรงกับความต้องการนี้?",
    "choices": [
      {
        "id": "c1",
        "textEn": "Static analysis (SAST) for source code inspection and package monitoring for third-party dependencies",
        "textTh": "Static Analysis (SAST) สำหรับวิเคราะห์ซอร์สโค้ด และ Package Monitoring สำหรับตรวจสอบไลบรารีบุคคลที่สาม"
      },
      {
        "id": "c2",
        "textEn": "External black-box penetration testing for uncompiled files and degaussing for repository servers",
        "textTh": "Penetration Testing แบบ Black-box สำหรับไฟล์ก่อนคอมไพล์ และ Degaussing สำหรับเซิร์ฟเวอร์เก็บโค้ด"
      },
      {
        "id": "c3",
        "textEn": "Unauthenticated port scanning for hardcoded secrets and physical audit for open-source licenses",
        "textTh": "การสแกนพอร์ตแบบไม่ยืนยันตัวตนเพื่อหารหัสลับในโค้ด และการตรวจสถานที่จริงสำหรับลิขสิทธิ์โอเพนซอร์ส"
      },
      {
        "id": "c4",
        "textEn": "Dynamic analysis (DAST) for uncompiled source code and dark web monitoring for build manifests",
        "textTh": "Dynamic Analysis (DAST) สำหรับซอร์สโค้ดก่อนคอมไพล์ และ Dark Web Monitoring สำหรับไฟล์ Build"
      }
    ],
    "correctChoiceIds": [
      "c1"
    ],
    "explanationTh": "Static analysis (SAST) ตรวจสอบซอร์สโค้ดหรือไบนารีแบบ White-box โดยไม่ต้องรันแอปพลิเคชันเพื่อหาจุดอ่อนเชิงโค้ดตั้งแต่ต้น ส่วน Package monitoring (SCA) เทียบรายการ Dependencies กับฐานข้อมูล CVE เพื่อแจ้งเตือนความเสี่ยงในไลบรารีภายนอก",
    "choiceRationales": {
      "c4": "DAST ต้องทดสอบกับแอปพลิเคชันที่รันอยู่จริง (Runtime) ไม่ใช่ซอร์สโค้ดดิบ และ Dark web เน้นข่าวกรองตลาดมืด",
      "c1": "จับคู่เทคนิค AppSec ได้ตรงกับลักษณะงานทั้งการวิเคราะห์โค้ดก่อนรันและการเฝ้าติดตามไลบรารี Third-party",
      "c2": "Pentest แบบ Black-box ประเมินระบบที่ทำงานจริง ไม่ตรวจซอร์สโค้ดภายใน และ Degaussing เป็นการลบสื่อแม่เหล็ก",
      "c3": "การสแกนพอร์ตตรวจสอบบริการเครือข่ายที่เปิดรับทราฟฟิก ไม่สามารถอ่านเนื้อหาในไฟล์ซอร์สโค้ดได้"
    },
    "misconceptionTh": "มักสับสนระหว่าง SAST (วิเคราะห์โค้ดก่อนรัน), DAST (ทดสอบขณะแอปทำงาน) และ Package monitoring (ตรวจไลบรารี Third-party)",
    "relatedLessonIds": [
      "L4-04",
      "L2-04"
    ],
    "tags": [
      "sast",
      "dast",
      "package-monitoring",
      "appsec"
    ]
  },
  {
    "id": "Q4-022",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.3"
    ],
    "type": "msq",
    "selectCount": 2,
    "difficulty": "intermediate",
    "promptEn": "A regional bank wants to enrich its vulnerability management program with external threat intelligence. Specifically, the security team seeks sector-specific advisories shared collaboratively among peer banks, alongside monitoring of underground forums for leaked employee credentials and newly traded exploits. Which TWO threat feed sources address these objectives? (Choose two.)",
    "promptTh": "ธนาคารระดับภูมิภาคแห่งหนึ่งต้องการเสริมข้อมูลข่าวกรองภัยคุกคามจากภายนอกเข้าสู่โปรแกรมจัดการช่องโหว่ โดยทีมความปลอดภัยต้องการคำแนะนำเฉพาะภาคการเงินที่แบ่งปันร่วมกันระหว่างธนาคารพันธมิตร ควบคู่กับการเฝ้าติดตามฟอรัมใต้ดินเพื่อตรวจหาข้อมูลรับรองพนักงานที่รั่วไหลและ Exploit ที่ซื้อขายใหม่ แหล่งข้อมูล Threat Feed 2 ประเภทใดตอบโจทย์เป้าหมายเหล่านี้? (เลือก 2 ข้อ)",
    "choices": [
      {
        "id": "c1",
        "textEn": "Unfiltered printer spooler queues from branch offices",
        "textTh": "คิวงานพิมพ์เอกสารจากเครื่องพิมพ์ตามสาขาต่าง ๆ ที่ยังไม่ได้กรอง"
      },
      {
        "id": "c2",
        "textEn": "An industry information-sharing organization such as a financial ISAC",
        "textTh": "องค์กรแบ่งปันข้อมูลเฉพาะอุตสาหกรรม เช่น ISAC ด้านการเงิน"
      },
      {
        "id": "c3",
        "textEn": "Dark web monitoring threat intelligence feeds",
        "textTh": "แหล่งข่าวกรองจากการเฝ้าติดตาม Dark Web"
      },
      {
        "id": "c4",
        "textEn": "Internal HR onboarding checklists without external vulnerability telemetry",
        "textTh": "รายการตรวจสอบการรับพนักงานใหม่ของฝ่ายบุคคลโดยไม่มีข้อมูลภัยคุกคามภายนอก"
      },
      {
        "id": "c5",
        "textEn": "Physical access badge turnstile logs from headquarters lobbies",
        "textTh": "บันทึกการแตะบัตรผ่านประตูทางเข้าออกอาคารสำนักงานใหญ่"
      }
    ],
    "correctChoiceIds": [
      "c2",
      "c3"
    ],
    "explanationTh": "Threat feeds จาก Information-sharing organizations (เช่น ISACs) ให้ข้อมูลภัยคุกคามที่เจาะจงต่ออุตสาหกรรมเดียวกัน ส่วน Dark web feeds ช่วยตรวจจับการรั่วไหลของข้อมูลรับรองและการซื้อขายช่องโหว่ในตลาดมืดตั้งแต่เนิ่น ๆ",
    "choiceRationales": {
      "c2": "เครือข่ายความร่วมมือระหว่างองค์กรในภาคธุรกิจเดียวกันเพื่อแลกเปลี่ยนตัวบ่งชี้ภัยคุกคามและวิธีรับมือ",
      "c3": "ติดตามพื้นที่นอกระบบอินเทอร์เน็ตปกติเพื่อค้นหาข้อมูลลับรั่วไหลและการค้าขาย Exploit เป้าหมาย",
      "c4": "เป็นเอกสารกระบวนการภายในสำหรับพนักงานใหม่ ไม่ใช่แหล่งข่าวกรองภัยคุกคามจากภายนอก",
      "c5": "ใช้ตรวจสอบการเข้าออกทางกายภาพภายในอาคาร ไม่ได้ให้ข้อมูลเกี่ยวกับฟอรัมใต้ดินหรือช่องโหว่ภาคธนาคาร",
      "c1": "เป็นข้อมูลการใช้งานอุปกรณ์สำนักงานทั่วไป ไม่มีบทบาทในการแจ้งเตือนภัยคุกคามไซเบอร์"
    },
    "misconceptionTh": "มักพึ่งพาเฉพาะ OSINT สาธารณะโดยมองข้ามคุณค่าของ ISAC ที่เฉพาะกลุ่มอุตสาหกรรมและ Dark web monitoring",
    "relatedLessonIds": [
      "L4-04"
    ],
    "tags": [
      "threat-feeds",
      "isac",
      "dark-web",
      "threat-intelligence"
    ]
  },
  {
    "id": "Q4-023",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.3"
    ],
    "type": "mcq",
    "selectCount": 1,
    "difficulty": "intermediate",
    "promptEn": "An e-commerce company wants to encourage independent external security researchers to report newly discovered web vulnerabilities privately to the company instead of selling them elsewhere. Management publishes formal scope rules, legal safe-harbor terms, and tiered monetary rewards for validated findings. Which activity is the company establishing?",
    "promptTh": "บริษัทอีคอมเมิร์ซแห่งหนึ่งต้องการส่งเสริมให้นักวิจัยความปลอดภัยอิสระภายนอกรายงานช่องโหว่บนเว็บที่ค้นพบใหม่ให้บริษัททราบเป็นการส่วนตัวแทนการนำไปขายต่อที่อื่น ผู้บริหารจึงประกาศขอบเขตการทดสอบ เงื่อนไขคุ้มครองทางกฎหมาย (Safe Harbor) และเงินรางวัลตามระดับความรุนแรงสำหรับรายงานที่ยืนยันแล้ว บริษัทกำลังจัดตั้งกิจกรรมใด?",
    "choices": [
      {
        "id": "c1",
        "textEn": "An internal system and process compliance audit",
        "textTh": "การตรวจสอบการปฏิบัติตามข้อกำหนดของระบบและกระบวนการภายใน (System/Process Audit)"
      },
      {
        "id": "c2",
        "textEn": "A responsible disclosure / bug bounty program",
        "textTh": "โครงการเปิดเผยช่องโหว่อย่างรับผิดชอบ / Bug Bounty Program"
      },
      {
        "id": "c3",
        "textEn": "Automated package monitoring via software bill of materials",
        "textTh": "การเฝ้าระวังแพ็กเกจอัตโนมัติผ่าน Software Bill of Materials"
      },
      {
        "id": "c4",
        "textEn": "Non-credentialed internal subnet port scanning",
        "textTh": "การสแกนพอร์ตภายในเครือข่ายย่อยแบบไม่ใช้บัญชีล็อกอิน"
      }
    ],
    "correctChoiceIds": [
      "c2"
    ],
    "explanationTh": "Responsible disclosure / Bug bounty program เปิดช่องทางอย่างเป็นทางการพร้อมขอบเขต Safe harbor และรางวัลเพื่อดึงดูดนักวิจัยภายนอกให้ช่วยค้นพบและรายงานช่องโหว่เชิงสร้างสรรค์ก่อนถูกผู้ไม่หวังดีนำไปใช้โจมตีจริง",
    "choiceRationales": {
      "c1": "Audit เน้นตรวจประเมินนโยบาย ขั้นตอน และความสอดคล้องโดยผู้ตรวจสอบ ไม่ใช่การรับแจ้งช่องโหว่จากนักวิจัยอิสระพร้อมรางวัล",
      "c2": "ผสานกลไกรายงานช่องโหว่ กติกา Safe harbor และสิ่งจูงใจสำหรับนักวิจัยภายนอกตามนิยามของ Bug bounty",
      "c3": "SCA ตรวจช่องโหว่ในไลบรารี Third-party อัตโนมัติ ไม่ใช่โครงการความร่วมมือกับนักวิจัยอิสระ",
      "c4": "เป็นเครื่องมือสแกนอัตโนมัติของทีมภายในองค์กร ไม่ได้เปิดรับการทดสอบจากบุคคลภายนอก"
    },
    "misconceptionTh": "มักสับสนระหว่าง Penetration testing (จ้างทีมเชี่ยวชาญทดสอบตามรอบสัญญา) กับ Bug bounty (เปิดกว้างให้นักวิจัยอิสระรายงานภายใต้ Safe harbor)",
    "relatedLessonIds": [
      "L4-04",
      "L5-05"
    ],
    "tags": [
      "bug-bounty",
      "responsible-disclosure",
      "vulnerability-identification"
    ]
  },
  {
    "id": "Q4-024",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.3"
    ],
    "type": "mcq",
    "selectCount": 1,
    "difficulty": "exam-ready",
    "promptEn": "A vulnerability scanner flags a critical flaw on an enterprise Linux server after detecting an older OpenSSL package version string in the banner. Upon confirmation, engineers verify that the Linux distribution vendor backported the security fix into that version number and the flaw cannot be triggered. How should this scan result be classified?",
    "promptTh": "เครื่องสแกนช่องโหว่แจ้งเตือนช่องโหว่ระดับวิกฤตบนเซิร์ฟเวอร์ Linux องค์กรหลังตรวจพบเลขเวอร์ชันแพ็กเกจ OpenSSL รุ่นเก่าใน Banner แต่เมื่อทีมวิศวกรตรวจสอบยืนยันพบว่าผู้พัฒนาลินุกซ์ได้ทำ Backport แพตช์ความปลอดภัยใส่ในเลขเวอร์ชันดังกล่าวแล้วและช่องโหว่นั้นไม่สามารถถูกโจมตีได้ ผลการสแกนนี้ควรจัดประเภทเป็นอย่างไร?",
    "choices": [
      {
        "id": "c1",
        "textEn": "Compensating exception",
        "textTh": "Compensating exception"
      },
      {
        "id": "c2",
        "textEn": "False negative",
        "textTh": "False negative"
      },
      {
        "id": "c3",
        "textEn": "True positive",
        "textTh": "True positive"
      },
      {
        "id": "c4",
        "textEn": "False positive",
        "textTh": "False positive"
      }
    ],
    "correctChoiceIds": [
      "c4"
    ],
    "explanationTh": "False positive เกิดขึ้นเมื่อเครื่องสแกนรายงานว่าพบช่องโหว่ทั้งที่ระบบไม่ได้มีความเสี่ยงจริง ซึ่งพบบ่อยเมื่อสแกนเนอร์เทียบเฉพาะเลขเวอร์ชันโดยไม่รับรู้การทำ Backported security patches ของผู้ให้บริการระบบปฏิบัติการ",
    "choiceRationales": {
      "c1": "ไม่ถูกต้อง: Compensating exception ไม่ใช่คำเรียกการจำแนกความถูกต้องของผลสแกน แต่เป็นการผสมคำจากขั้นตอนตอบสนองต่อช่องโหว่",
      "c2": "ไม่ถูกต้อง: False negative หมายถึงกรณีที่ระบบมีช่องโหว่อยู่จริงแต่เครื่องสแกนไม่แจ้งเตือน แต่ในเหตุการณ์นี้ระบบไม่มีช่องโหว่ที่โจมตีได้แล้วเนื่องจากถูกแพตช์แบบ Backport",
      "c3": "ไม่ถูกต้อง: True positive หมายถึงกรณีที่เครื่องสแกนแจ้งเตือนตรงตามช่องโหว่ที่มีอยู่จริง แต่ OpenSSL บนเครื่องนี้ถูกผู้พัฒนาลินุกซ์แก้ช่องโหว่แล้วจึงไม่เสี่ยงจริง",
      "c4": "ถูกต้อง: สะท้อนการแจ้งเตือนที่ผิดพลาด (False positive) เนื่องจากช่องโหว่ถูกปิดไปแล้วด้วย Backport patch จึงไม่มีความเสี่ยงจริง"
    },
    "misconceptionTh": "มักสับสนระหว่าง False positive (แจ้งผิดว่ามีปัญหา) กับ False negative (ปล่อยให้ช่องโหว่จริงหลุดรอดโดยไม่แจ้ง)",
    "relatedLessonIds": [
      "L4-04"
    ],
    "tags": [
      "false-positive",
      "false-negative",
      "backport",
      "confirmation"
    ]
  },
  {
    "id": "Q4-025",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.3"
    ],
    "type": "mcq",
    "selectCount": 1,
    "difficulty": "exam-ready",
    "promptEn": "A vulnerability management team discovers two issues simultaneously: Vulnerability A carries a Critical CVSS base score (9.8) on an air-gapped development sandbox holding zero sensitive data with no known exploit, whereas Vulnerability B carries a High CVSS base score (7.8) allowing remote code execution on an internet-facing customer payment portal experiencing active exploitation in threat feeds. Which prioritization rationale BEST justifies patching Vulnerability B first?",
    "promptTh": "ทีมจัดการช่องโหว่ตรวจพบปัญหา 2 รายการพร้อมกัน: ช่องโหว่ A มีคะแนน CVSS พื้นฐานระดับวิกฤต (9.8) อยู่บนเครื่องทดสอบที่ตัดขาดจากเครือข่ายแบบ Air-gap ไม่มีข้อมูลสำคัญและยังไม่มีการโจมตีจริง ขณะที่ช่องโหว่ B มีคะแนน CVSS พื้นฐานระดับสูง (7.8) ที่ทำให้รันโค้ดจากระยะไกลได้บนพอร์ทัลรับชำระเงินลูกค้าที่เปิดสู่อินเทอร์เน็ตและกำลังถูกโจมตีจริงตาม Threat Feed เหตุผลการจัดลำดับความสำคัญใดอธิบายการแพตช์ช่องโหว่ B ก่อนได้ดีที่สุด?",
    "choices": [
      {
        "id": "c1",
        "textEn": "Development sandboxes require zero-day insurance coverage before internet-facing payment systems can be updated",
        "textTh": "สภาพแวดล้อมทดสอบต้องทำประกันภัย Zero-day ให้ครบก่อนจึงจะอัปเดตระบบชำระเงินที่ต่ออินเทอร์เน็ตได้"
      },
      {
        "id": "c2",
        "textEn": "Air-gapped servers always fall outside organizational risk tolerance even when no threat path exists",
        "textTh": "เซิร์ฟเวอร์แบบ Air-gapped อยู่นอกเกณฑ์ Risk Tolerance ขององค์กรเสมอแม้จะไม่มีเส้นทางโจมตีถึง"
      },
      {
        "id": "c3",
        "textEn": "Patching must always sort strictly from the highest numeric CVSS base score downward regardless of network placement",
        "textTh": "การแพตช์ต้องเรียงลำดับจากคะแนนตัวเลข CVSS พื้นฐานสูงสุดลงมาเสมอโดยไม่คำนึงถึงตำแหน่งเครือข่าย"
      },
      {
        "id": "c4",
        "textEn": "Higher exposure factor, RCE vulnerability classification, active exploitation, and severe organizational impact outweigh raw CVSS base score alone",
        "textTh": "ปัจจัย Exposure Factor ที่เปิดสู่สาธารณะ ประเภทช่องโหว่ RCE การถูกโจมตีจริง และผลกระทบต่อองค์กรมีน้ำหนักมากกว่าคะแนน CVSS ดิบเพียงอย่างเดียว"
      }
    ],
    "correctChoiceIds": [
      "c4"
    ],
    "explanationTh": "การจัดลำดับความสำคัญต้องพิจารณาหลายปัจจัยร่วมกับ CVSS ได้แก่ Exposure factor (การเปิดรับทราฟฟิกสาธารณะ) ประเภทความรุนแรงของช่องโหว่ (เช่น RCE) ข่าวกรองการโจมตีจริง และผลกระทบทางธุรกิจต่อองค์กร แทนการเรียงตามคะแนนพื้นฐานเพียงอย่างเดียว",
    "choiceRationales": {
      "c3": "การยึดตัวเลข Base score อย่างเดียวละเลยบริบท Environmental variables และ Exposure ทำให้จัดสรรเวลาแก้ผิดจุด",
      "c4": "บูรณาการปัจจัย Exposure, Classification, Active threat intelligence และ Business impact ในการตัดสินใจอย่างเหมาะสม",
      "c1": "การประกันภัยเป็นการโอนย้ายความเสี่ยงทางการเงิน ไม่ใช่เงื่อนไขที่มาก่อนการแพตช์ระบบผลิตสำคัญ",
      "c2": "ระบบตัดขาดจากเครือข่ายที่มีข้อมูลไม่สำคัญมักมีความเสี่ยงต่ำกว่าและอยู่ในเกณฑ์ยอมรับได้ชั่วคราวมากกว่าระบบชำระเงินสาธารณะ"
    },
    "misconceptionTh": "มักเข้าใจว่าช่องโหว่ที่มีคะแนน CVSS Base score สูงกว่าจะต้องถูกจัดลำดับให้แก้ไขก่อนเสมอโดยไม่ดู Exposure และ Environmental context",
    "relatedLessonIds": [
      "L4-04",
      "L5-02"
    ],
    "tags": [
      "cvss",
      "prioritization",
      "exposure-factor",
      "risk-tolerance"
    ]
  },
  {
    "id": "Q4-026",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.3"
    ],
    "type": "msq",
    "selectCount": 2,
    "difficulty": "exam-ready",
    "promptEn": "A hospital billing platform relies on legacy software that has reached vendor end-of-life, meaning no security patches will be released for a newly disclosed remote exploit. The hospital cannot decommission the system for six months without halting patient billing. Alongside a time-bound formal exception, which TWO technical vulnerability responses BEST reduce immediate exploitation risk? (Choose two.)",
    "promptTh": "ระบบเรียกเก็บเงินของโรงพยาบาลพึ่งพาซอฟต์แวร์รุ่นเก่าที่ผู้ผลิตยุติการสนับสนุนแล้ว จึงไม่มี Security Patch ออกมาปิดช่องโหว่ที่เพิ่งเปิดเผย โรงพยาบาลไม่สามารถปลดระวางระบบได้ภายใน 6 เดือนโดยไม่กระทบการออกบิลผู้ป่วย ควบคู่กับเอกสาร Exception แบบมีวันหมดอายุ มาตรการตอบสนองทางเทคนิค 2 ข้อใดช่วยลดความเสี่ยงการถูกโจมตีเฉพาะหน้าได้ดีที่สุด? (เลือก 2 ข้อ)",
    "choices": [
      {
        "id": "c1",
        "textEn": "Purchase cyber insurance alone and leave the legacy host open on the general corporate VLAN",
        "textTh": "ซื้อกรมธรรม์ Cyber Insurance เพียงอย่างเดียวแล้วปล่อยให้ระบบเก่าอยู่ใน VLAN ทั่วไปขององค์กร"
      },
      {
        "id": "c2",
        "textEn": "Grant a permanent, unmonitored exemption with no expiration date or compensating safeguards",
        "textTh": "อนุมัติข้อยกเว้นแบบถาวรโดยไม่มีวันหมดอายุและไม่มีมาตรการควบคุมเสริม"
      },
      {
        "id": "c3",
        "textEn": "Suppress the vulnerability record in the reporting dashboard so risk metrics appear compliant",
        "textTh": "ซ่อนรายการช่องโหว่ในแดชบอร์ดรายงานเพื่อให้ตัวเลขความเสี่ยงดูสอดคล้องตามเกณฑ์"
      },
      {
        "id": "c4",
        "textEn": "Isolate the legacy billing platform via strict network segmentation and host-access ACLs",
        "textTh": "แยกระบบเรียกเก็บเงินรุ่นเก่าด้วยการแบ่งโซนเครือข่าย (Segmentation) และ ACL จำกัดเครื่องที่เข้าถึงได้"
      },
      {
        "id": "c5",
        "textEn": "Deploy compensating controls such as virtual patching rules on an inline IPS or WAF",
        "textTh": "ติดตั้ง Compensating Controls เช่น กฎ Virtual Patching บน IPS หรือ WAF แบบ Inline"
      }
    ],
    "correctChoiceIds": [
      "c4",
      "c5"
    ],
    "explanationTh": "เมื่อไม่สามารถ Patch ระบบ Legacy ได้ทันที การทำ Network segmentation ช่วยจำกัดขอบเขตการเข้าถึงและลด Blast radius ขณะที่ Compensating controls อย่าง Virtual patching บน WAF/IPS ช่วยดักกั้นทราฟฟิกโจมตีก่อนถึงตัวซอฟต์แวร์เก่า",
    "choiceRationales": {
      "c4": "ลดพื้นผิวการเข้าถึงทางเครือข่ายให้อยู่ในวงจำกัดเฉพาะระบบที่จำเป็นต้องสื่อสารจริง",
      "c5": "ใช้มาตรการตรวจจับและบล็อกรูปแบบการโจมตีชดเชยแทนการแก้โค้ดที่ผู้ผลิตเลิกสนับสนุน",
      "c1": "ประกันภัยช่วยโอนย้ายความเสี่ยงทางการเงินเมื่อเกิดเหตุ แต่ไม่ได้ลดโอกาสถูกเจาะทางเทคนิค",
      "c2": "ข้อยกเว้นที่ไร้กำหนดทบทวนและขาดมาตรการเสริมมักกลายเป็นจุดอ่อนถาวรที่ถูกลืม",
      "c3": "การปกปิดผลในรายงานเป็นการบิดเบือนสถานะความเสี่ยงจริงโดยไม่ได้ลดโอกาสเกิดเหตุ"
    },
    "misconceptionTh": "มักเข้าใจว่าเมื่อผู้ผลิตไม่ออกแพตช์แล้ว องค์กรมีทางเลือกเพียงแค่ทำข้อยกเว้นหรือซื้อประกันภัยโดยไม่ต้องทำ Segmentation และ Virtual patching",
    "relatedLessonIds": [
      "L4-04",
      "L4-01"
    ],
    "tags": [
      "vulnerability-response",
      "compensating-controls",
      "segmentation",
      "exceptions"
    ]
  },
  {
    "id": "Q4-027",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.3"
    ],
    "type": "mcq",
    "selectCount": 1,
    "difficulty": "foundation",
    "promptEn": "During a weekend maintenance window, systems administrators apply critical security updates across 20 database servers. However, three hosts still load the vulnerable library in memory because a daemon restart was missed. Which vulnerability management phase detects this incomplete fix before tickets are closed?",
    "promptTh": "ในช่วงเวลาปิดปรับปรุงสุดสัปดาห์ ผู้ดูแลระบบติดตั้งอัปเดตความปลอดภัยระดับวิกฤตบนเซิร์ฟเวอร์ฐานข้อมูลครบ 20 เครื่อง แต่ยังมี 3 เครื่องที่โหลดไลบรารีมีช่องโหว่อยู่ในหน่วยความจำเนื่องจากลืมรีสตาร์ตบริการ ขั้นตอนใดของการบริหารจัดการช่องโหว่ช่วยตรวจพบการแก้ไขที่ไม่สมบูรณ์นี้ก่อนปิดใบงาน?",
    "choices": [
      {
        "id": "c1",
        "textEn": "Validation of remediation (rescanning, audit, and verification)",
        "textTh": "การยืนยันผลการแก้ไข (Rescanning, Audit และ Verification)"
      },
      {
        "id": "c2",
        "textEn": "Dark web threat feed collection",
        "textTh": "การรวบรวมข่าวกรองภัยคุกคามจาก Dark Web"
      },
      {
        "id": "c3",
        "textEn": "Physical media destruction",
        "textTh": "การทำลายสื่อบันทึกข้อมูลทางกายภาพ"
      },
      {
        "id": "c4",
        "textEn": "Procurement and vendor vetting",
        "textTh": "การจัดหาและตรวจสอบความน่าเชื่อถือของผู้ขาย"
      }
    ],
    "correctChoiceIds": [
      "c1"
    ],
    "explanationTh": "การติดตั้งแพตช์อาจยังไม่สมบูรณ์หากบริการยังไม่ถูกโหลดใหม่หรือค่าคอนฟิกค้างอยู่ ขั้นตอน Validation of remediation จึงต้องรัน Rescanning แบบ Credentialed ตรวจสอบการเปลี่ยนแปลง และยืนยันการทำงานจริงก่อนปิด Ticket",
    "choiceRationales": {
      "c4": "เกิดขึ้นตั้งแต่ก่อนจัดซื้อฮาร์ดแวร์และซอฟต์แวร์ ไม่ใช่การตรวจสอบผลหลังติดตั้งแพตช์",
      "c1": "ตรวจซ้ำเชิงเทคนิคและตรวจสอบหลักฐานเพื่อพิสูจน์ว่าช่องโหว่ถูกปิดสนิทและระบบยังทำงานปกติ",
      "c2": "ใช้ติดตามข้อมูลรั่วไหลและภัยคุกคามใหม่จากภายนอก ไม่ได้ตรวจสถานะไลบรารีบนเซิร์ฟเวอร์หลังแพตช์",
      "c3": "เป็นกิจกรรมในขั้นตอนปลดระวางอุปกรณ์ปลายอายุ ไม่เกี่ยวข้องกับการบำรุงรักษาระบบที่ใช้งานอยู่"
    },
    "misconceptionTh": "มักปิดใบงานทันทีที่ตัวจัดการแพตช์รายงานว่าติดตั้งไฟล์สำเร็จ โดยข้ามขั้นตอนการ Rescan และ Verification หลังรีสตาร์ตบริการ",
    "relatedLessonIds": [
      "L4-04"
    ],
    "tags": [
      "validation-of-remediation",
      "rescanning",
      "verification"
    ]
  },
  {
    "id": "Q4-028",
    "examCode": "SY0-701",
    "domainId": "D4",
    "objectiveIds": [
      "4.3"
    ],
    "type": "mcq",
    "selectCount": 1,
    "difficulty": "intermediate",
    "promptEn": "Following a quarterly vulnerability remediation cycle, senior leadership requests trends on SLA adherence, mean time to remediate, and open risk exceptions, whereas system administrators require host-specific CVE references and step-by-step configuration fixes. Which approach BEST satisfies vulnerability reporting expectations?",
    "promptTh": "หลังจบรอบการแก้ไขช่องโหว่ประจำไตรมาส ผู้บริหารระดับสูงขอรายงานแนวโน้มการปฏิบัติตาม SLA เวลาเฉลี่ยในการแก้ไข (MTTR) และรายการข้อยกเว้นความเสี่ยงที่ยังเปิดอยู่ ขณะที่ผู้ดูแลระบบต้องการข้อมูลอ้างอิง CVE รายเครื่องและขั้นตอนแก้ไขค่าคอนฟิก แนวทางใดตอบสนองความคาดหวังด้านการรายงานช่องโหว่ได้ดีที่สุด?",
    "choices": [
      {
        "id": "c1",
        "textEn": "Deliver a single raw multi-thousand-page scanner XML export to both executives and administrators",
        "textTh": "ส่งไฟล์ XML ดิบความยาวหลายพันหน้าจากเครื่องสแกนชุดเดียวกันให้ทั้งผู้บริหารและผู้ดูแลระบบ"
      },
      {
        "id": "c2",
        "textEn": "Tailor reporting outputs into executive risk/SLA summaries for leadership and actionable technical CVE reports for administrators",
        "textTh": "ปรับรูปแบบรายงานให้เหมาะกับผู้รับ โดยสรุปภาพรวมความเสี่ยงและ SLA สำหรับผู้บริหาร และจัดทำรายงาน CVE พร้อมวิธีแก้เชิงเทคนิคสำหรับผู้ดูแลระบบ"
      },
      {
        "id": "c3",
        "textEn": "Omit open exceptions from executive reports so governance committees focus only on closed findings",
        "textTh": "ตัดรายการข้อยกเว้นที่ยังไม่แก้ไขออกจากรายงานผู้บริหารเพื่อให้คณะกรรมการกำกับดูเฉพาะรายการที่ปิดแล้ว"
      },
      {
        "id": "c4",
        "textEn": "Send only high-level pie charts without hostnames or CVE identifiers to patching engineers",
        "textTh": "ส่งเฉพาะแผนภูมิวงกลมภาพรวมโดยไม่ระบุชื่อเครื่องหรือรหัส CVE ให้ทีมวิศวกรที่ต้องลงมือแพตช์"
      }
    ],
    "correctChoiceIds": [
      "c2"
    ],
    "explanationTh": "ขั้นตอน Reporting ต้องสื่อสารให้ตรงกับบทบาทของผู้รับ: ผู้บริหารต้องการตัวชี้วัดระดับโปรแกรม (SLA compliance, MTTR, Exception trends) เพื่อประกอบการตัดสินใจ ส่วนทีมปฏิบัติการต้องการข้อมูลเฉพาะเจาะจงระดับโฮสต์และรหัส CVE เพื่อลงมือแก้ไขได้ถูกต้อง",
    "choiceRationales": {
      "c1": "ข้อมูลดิบขาดการสังเคราะห์สำหรับผู้บริหารและย่อยยากหากไม่จัดลำดับความสำคัญให้ทีมเทคนิค",
      "c2": "แยกชั้นรายละเอียดของรายงานให้ตอบโจทย์ทั้งการตัดสินใจระดับบริหารและการปฏิบัติการแก้ไขเชิงเทคนิค",
      "c3": "การตัดข้อยกเว้นออกบิดเบือน Risk posture ที่แท้จริงและขัดต่อหลักความโปร่งใสในการกำกับดูแล",
      "c4": "แผนภูมิระดับสูงไม่สามารถบอกทีมปฏิบัติการได้ว่าต้องเข้าไปแก้ไขเครื่องใดหรือบริการใด"
    },
    "misconceptionTh": "มักส่งรายงานฉบับเดียวจากเครื่องสแกนช่องโหว่ให้ทุกฝ่ายโดยไม่ปรับระดับรายละเอียดให้เหมาะกับผู้บริหารและทีมปฏิบัติการ",
    "relatedLessonIds": [
      "L4-04",
      "L5-02"
    ],
    "tags": [
      "vulnerability-reporting",
      "mttr",
      "sla",
      "cve"
    ]
  }
];
