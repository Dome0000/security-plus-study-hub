import type { ContentBundle } from '../../scripts/validate-content';
import type {
  Flashcard,
  GlossaryEntry,
  Lesson,
  MockExamForm,
  PbqQuestion,
  Question,
  StudyPlanDay
} from '../types';

export const FIXTURE_LESSONS: Lesson[] = [
  {
    id: 'L1-01',
    examCode: 'SY0-701',
    domainId: 'D1',
    order: 1,
    titleTh: 'หมวดหมู่และประเภทของ Security Controls',
    titleEn: 'Security Control Categories and Types',
    estimatedMinutes: 25,
    learningObjectives: [
      'จำแนกหมวดหมู่ของ Security Controls ทั้ง 4 หมวด (Technical, Managerial, Operational, Physical) ได้อย่างถูกต้อง',
      'แยกแยะหน้าที่ของ Controls ทั้ง 6 ประเภท (Preventive, Deterrent, Detective, Corrective, Compensating, Directive) ตามสถานการณ์ในองค์กรได้'
    ],
    objectiveIds: ['1.1'],
    prerequisites: ['ความเข้าใจพื้นฐานเกี่ยวกับระบบเครือข่ายและการดูแลระบบไอทีเบื้องต้น'],
    sections: [
      {
        id: 'sec-categories',
        titleTh: '1. หมวดหมู่ของ Security Controls (Control Categories)',
        contentTh: [
          'Security Controls คือมาตรการหรือกลไกที่องค์กรนำมาใช้เพื่อลดความเสี่ยง ป้องกัน ตรวจจับ และตอบสนองต่อภัยคุกคามต่อสินทรัพย์สารสนเทศ ตามแนวทางของ CompTIA SY0-701 แบ่งออกเป็น 4 หมวดหมู่หลักตามลักษณะการนำไปใช้งาน',
          'Technical Controls ใช้เทคโนโลยี ฮาร์ดแวร์ หรือซอฟต์แวร์ในการบังคับใช้ความปลอดภัยโดยตรง เช่น Firewall, Encryption, Multifactor Authentication (MFA) และระบบ Antivirus/EDR',
          'Managerial Controls มุ่งเน้นการกำหนดทิศทาง นโยบาย และการกำกับดูแลเชิงบริหาร เช่น Risk Assessment, Security Policy, Vendor Due Diligence และ Standard Operating Procedures (SOPs)',
          'Operational Controls อาศัยการปฏิบัติงานของบุคลากรและกระบวนการประจำวัน เช่น Security Awareness Training, Change Management Review, การตรวจสอบสิทธิ์ผู้ใช้ตามรอบ และ Guard Patrols',
          'Physical Controls เป็นมาตรการเชิงกายภาพที่จับต้องได้เพื่อปกป้องสถานที่และอุปกรณ์ เช่น Bollards, Access Control Vestibule, Badge Readers, กล้องวงจรปิด และระบบล็อกตู้ Rack'
        ],
        keyPointsTh: [
          'Technical = ระบบ/ซอฟต์แวร์บังคับใช้, Managerial = นโยบาย/การประเมินความเสี่ยง',
          'Operational = กระบวนการที่คนลงมือปฏิบัติ, Physical = สิ่งกีดขวางและอุปกรณ์ทางกายภาพ'
        ]
      },
      {
        id: 'sec-types',
        titleTh: '2. ประเภทตามหน้าที่การทำงาน (Control Types)',
        contentTh: [
          'Preventive Controls ออกแบบมาเพื่อยับยั้งไม่ให้เหตุการณ์ไม่พึงประสงค์เกิดขึ้นตั้งแต่แรก เช่น ACL ที่บล็อกพอร์ตที่ไม่จำเป็น, การเข้ารหัสข้อมูล, หรือประตูคีย์การ์ด',
          'Deterrent Controls มีเป้าหมายเพื่อลดแรงจูงใจหรือทำให้ผู้โจมตีลังเลก่อนลงมือ เช่น ป้ายเตือนทางกฎหมาย (Login Warning Banner), ไฟส่องสว่างรอบอาคาร, หรือกล้องวงจรปิดที่มองเห็นชัด',
          'Detective Controls ทำหน้าที่ระบุและบันทึกเหตุการณ์ผิดปกติที่เกิดขึ้นแล้วหรือกำลังเกิดขึ้น เช่น IDS, SIEM Alerts, Log Auditing และเซ็นเซอร์ตรวจจับการเคลื่อนไหว',
          'Corrective Controls มุ่งแก้ไขหรือฟื้นฟูระบบหลังเกิดเหตุเพื่อให้กลับสู่สภาพปกติ เช่น การกู้คืนจาก Backup, การ Patch ช่องโหว่ที่ถูกโจมตี, หรือการแยกเครื่องที่ติดมัลแวร์ออกจากเครือข่าย',
          'Compensating Controls เป็นมาตรการทางเลือกชั่วคราวหรือเสริม เมื่อไม่สามารถใช้มาตรการหลักตามมาตรฐานได้ เช่น การใช้ Virtual Patching ผ่าน WAF หรือ Network Segmentation ให้กับระบบ Legacy ที่หยุดอัปเดตแล้ว',
          'Directive Controls เป็นคำสั่ง นโยบาย หรือข้อกำหนดที่ชี้แนะพฤติกรรมที่ต้องปฏิบัติตาม เช่น Acceptable Use Policy (AUP), ป้ายทางออกฉุกเฉิน, และข้อกำหนดการติดป้ายประจำตัวผู้มาติดต่อ'
        ],
        keyPointsTh: [
          'Preventive = หยุดก่อนเกิด, Deterrent = ขู่ให้เปลี่ยนใจ, Detective = ตรวจพบเมื่อเกิด',
          'Corrective = แก้ไข/ฟื้นฟู, Compensating = มาตรการทดแทนเมื่อทำมาตรการหลักไม่ได้, Directive = สั่งให้ปฏิบัติ'
        ]
      }
    ],
    keyTerms: [
      {
        termEn: 'Technical Control',
        explanationTh: 'มาตรการควบคุมที่ทำงานผ่านระบบเทคโนโลยี เช่น Firewall, IAM, และการเข้ารหัส'
      },
      {
        termEn: 'Compensating Control',
        explanationTh: 'มาตรการควบคุมทางเลือกที่ใช้ลดความเสี่ยงแทนมาตรการหลักที่ไม่สามารถติดตั้งได้จริง'
      },
      {
        termEn: 'Access Control Vestibule',
        explanationTh: 'โถงทางเข้าสองชั้นที่ล็อกประตูแรกก่อนเปิดประตูที่สอง เพื่อป้องกัน Tailgating'
      }
    ],
    scenarios: [
      {
        titleTh: 'ระบบเครื่องจักรโรงงาน (Legacy ICS) ที่ไม่สามารถติดตั้ง Patch ล่าสุดได้',
        contextTh:
          'โรงงานผลิตใช้เครื่องควบคุมสายการผลิตที่รันระบบปฏิบัติการรุ่นเก่าซึ่งผู้ผลิตเลิกสนับสนุนแล้ว และไม่สามารถอัปเดตแพตช์ความปลอดภัยได้ทันทีเนื่องจากต้องรักษารอบการผลิต',
        decisionTh:
          'แยกเครือข่ายเครื่องจักรดังกล่าวด้วย VLAN เฉพาะ (Segmentation) และเปิดใช้ IPS/Allow-listing หน้าอุปกรณ์เพื่อลดพื้นผิวการโจมตี',
        takeawayTh:
          'การใช้ Segmentation + IPS ทดแทนการ Patch จัดเป็น Compensating Control ที่ทำหน้าที่เชิง Technical Preventive/Detective ร่วมกัน'
      }
    ],
    comparisonTables: [
      {
        captionTh: 'ตารางเปรียบเทียบ Security Control Types ทั้ง 6 ประเภท',
        headersTh: ['ประเภท', 'ช่วงเวลาทำงาน', 'วัตถุประสงค์หลัก', 'ตัวอย่าง'],
        rowsTh: [
          ['Preventive', 'ก่อนเกิดเหตุ', 'ป้องกันและบล็อกการเข้าถึงโดยมิชอบ', 'Firewall Deny Rule, MFA, Smart Card'],
          ['Deterrent', 'ก่อนเกิดเหตุ', 'ปรามหรือทำให้ผู้บุกรุกลังเล', 'Warning Banner, Fencing, Lighting'],
          ['Detective', 'ระหว่าง/หลังเกิดเหตุ', 'ตรวจจับและแจ้งเตือนเหตุการณ์', 'SIEM, IDS, Motion Sensor, CCTV'],
          ['Corrective', 'หลังเกิดเหตุ', 'ซ่อมแซมและลดผลกระทบให้กลับมาทำงานได้', 'Restore Backup, Patching, Quarantine'],
          ['Compensating', 'ทดแทนมาตรการหลัก', 'ลดความเสี่ยงเมื่อทำมาตรฐานหลักไม่ได้', 'WAF Virtual Patch, Network Isolation'],
          ['Directive', 'กำกับพฤติกรรม', 'กำหนดกฎเกณฑ์และคำสั่งให้ผู้ใช้งานปฏิบัติ', 'AUP, Security Policy, Compliance Sign']
        ]
      }
    ],
    applicationsAndLimitations: {
      applicationsTh: [
        'ใช้ออกแบบแนวป้องกันแบบหลายชั้น (Defense-in-Depth) เพื่อให้แต่ละชั้นเสริมการทำงานซึ่งกันและกัน',
        'ใช้ประกอบการตรวจประเมินความเสี่ยงและจัดลำดับงบประมาณความปลอดภัยให้สมดุลทั้งคน กระบวนการ และเทคโนโลยี'
      ],
      limitationsTh: [
        'ไม่มี Control ประเภทเดียวที่ป้องกันความเสี่ยงได้ 100% หากขาดการตรวจสอบและปรับปรุงอย่างต่อเนื่อง',
        'Compensating Control มักเพิ่มความซับซ้อนในการดูแล จึงไม่ควรถือเป็นข้ออ้างถาวรแทนการอัปเกรดระบบหลัก'
      ]
    },
    commonMisconceptions: [
      {
        misconceptionTh: 'คิดว่ากล้องวงจรปิด (CCTV) เป็นเพียง Preventive Control เสมอ',
        clarificationTh:
          'กล้องวงจรปิดที่ติดตั้งให้เห็นเด่นชัดช่วย Deterrent ได้ แต่หน้าที่หลักในการบันทึกภาพเพื่อตรวจสอบย้อนหลังคือ Detective Control (Physical Detective)'
      },
      {
        misconceptionTh: 'สับสนระหว่าง Managerial กับ Operational Controls',
        clarificationTh:
          'Managerial คือการวางแผน/นโยบาย/กำกับดูแลโดยฝ่ายบริหาร ส่วน Operational คือการปฏิบัติงานจริงของคนในชีวิตประจำวัน เช่น การตรวจ Badge หรือการอบรม'
      }
    ],
    scenarioAnalysisGuide: {
      approachStepsTh: [
        'อ่านโจทย์เพื่อระบุว่าเหตุการณ์อยู่ในช่วงใด: ก่อนเกิดเหตุ ระหว่างเกิดเหตุ หรือหลังเกิดเหตุ',
        'ตรวจสอบว่าโจทย์ถามถึง "Category (ใคร/อะไรเป็นตัวควบคุม)" หรือ "Type (ควบคุมเพื่อวัตถุประสงค์ใด)"',
        'หากโจทย์ระบุข้อจำกัดว่า "cannot patch / legacy constraint" ให้มองหา Compensating Control เป็นลำดับแรก'
      ],
      examSignalKeywords: [
        { keywordEn: 'discourage / warn', meaningTh: 'มักชี้ไปยัง Deterrent Control' },
        { keywordEn: 'legacy / cannot apply standard fix', meaningTh: 'มักชี้ไปยัง Compensating Control' },
        { keywordEn: 'restore / remediate', meaningTh: 'มักชี้ไปยัง Corrective Control' }
      ]
    },
    summaryTh: [
      'Security Controls จำแนกเป็น 4 หมวดหมู่ (Technical, Managerial, Operational, Physical) และ 6 ประเภทตามหน้าที่ (Preventive, Deterrent, Detective, Corrective, Compensating, Directive)',
      'มาตรการหนึ่งอาจอยู่ในหลายบทบาทได้ขึ้นอยู่กับบริบทการใช้งาน จึงต้องวิเคราะห์จากวัตถุประสงค์หลักที่โจทย์ต้องการ'
    ],
    knowledgeChecks: [
      {
        id: 'L1-01-KC1',
        questionTh:
          'องค์กรติดตั้งแบนเนอร์ข้อความเตือนทางกฎหมายก่อนหน้าจอเข้าสู่ระบบเพื่อเตือนผู้ใช้งานที่ไม่ได้รับอนุญาต แบนเนอร์นี้จัดเป็น Control ประเภทใดเป็นหลัก?',
        choices: [
          { id: 'a', textTh: 'Preventive Control' },
          { id: 'b', textTh: 'Deterrent Control' },
          { id: 'c', textTh: 'Corrective Control' },
          { id: 'd', textTh: 'Compensating Control' }
        ],
        correctChoiceId: 'b',
        explanationTh:
          'Warning Banner ไม่ได้หยุดยั้งทางเทคนิค (Preventive) แต่ทำหน้าที่เตือนและปรามไม่ให้ผู้ไม่มีสิทธิ์พยายามเข้าถึงระบบ จึงเป็น Deterrent Control และมีส่วนเป็น Directive Control'
      },
      {
        id: 'L1-01-KC2',
        questionTh:
          'เมื่อเซิร์ฟเวอร์แอปพลิเคชันเก่าไม่สามารถอัปเดตแพตช์ได้ทันที ทีมความปลอดภัยจึงเปิดกฎ WAF ป้องกันรูปแบบ SQL Injection หน้าเซิร์ฟเวอร์แทน มาตรการนี้ตรงกับข้อใด?',
        choices: [
          { id: 'a', textTh: 'Compensating Control' },
          { id: 'b', textTh: 'Physical Control' },
          { id: 'c', textTh: 'Deterrent Control' },
          { id: 'd', textTh: 'Directive Control' }
        ],
        correctChoiceId: 'a',
        explanationTh:
          'การใช้ WAF ลดความเสี่ยงแทนการแพตช์ที่ไม่สามารถทำได้ชั่วคราวเป็นตัวอย่างคลาสสิกของ Compensating Control'
      },
      {
        id: 'L1-01-KC3',
        questionTh:
          'การกู้คืนฐานข้อมูลจาก Snapshot หลังเหตุการณ์ Ransomware เพื่อนำระบบกลับมาให้บริการ จัดเป็น Control ประเภทใด?',
        choices: [
          { id: 'a', textTh: 'Detective Control' },
          { id: 'b', textTh: 'Preventive Control' },
          { id: 'c', textTh: 'Corrective Control' },
          { id: 'd', textTh: 'Deterrent Control' }
        ],
        correctChoiceId: 'c',
        explanationTh:
          'การกู้คืนระบบจากสำรองข้อมูลเกิดขึ้นหลังเหตุการณ์เพื่อซ่อมแซมและคืนสภาพการใช้งาน จึงเป็น Corrective Control'
      }
    ],
    references: [
      { title: 'NIST SP 800-53 Rev. 5', noteTh: 'มาตรฐานหมวดหมู่และประเภทมาตรการควบคุมความปลอดภัย' },
      { title: 'CompTIA Security+ SY0-701 Objective 1.1', noteTh: 'Control categories and types' }
    ],
    relatedLessonIds: ['L1-02']
  },
  {
    id: 'L1-02',
    examCode: 'SY0-701',
    domainId: 'D1',
    order: 2,
    titleTh: 'หลักการ CIA Triad, Non-repudiation, AAA และ Gap Analysis',
    titleEn: 'CIA Triad, Non-repudiation, AAA, and Gap Analysis',
    estimatedMinutes: 30,
    learningObjectives: [
      'อธิบายความหมายและความสำคัญของ Confidentiality, Integrity, Availability และ Non-repudiation ได้',
      'แยกบทบาทของ Authentication, Authorization และ Accounting (AAA) สำหรับบุคคลและระบบได้'
    ],
    objectiveIds: ['1.2'],
    prerequisites: ['L1-01 หมวดหมู่และประเภทของ Security Controls'],
    sections: [
      {
        id: 'sec-cia',
        titleTh: '1. หลักการ CIA Triad และ Non-repudiation',
        contentTh: [
          'Confidentiality คือการคุ้มครองข้อมูลไม่ให้ผู้ที่ไม่มีสิทธิ์เปิดเผยหรือเข้าถึงได้ โดยอาศัยกลไกเช่น การเข้ารหัสและการควบคุมสิทธิ์เข้าถึง',
          'Integrity คือการรับรองความถูกต้องครบถ้วนของข้อมูลว่าไม่ถูกแก้ไขเปลี่ยนแปลงโดยไม่ได้รับอนุญาต เช่น การใช้ Hashing และ Digital Signatures',
          'Availability คือการรับรองว่าผู้ใช้งานที่ได้รับสิทธิ์สามารถเข้าถึงระบบและข้อมูลได้ตามเวลาที่ต้องการ เช่น Redundancy, Load Balancing และระบบสำรองไฟ',
          'Non-repudiation คือหลักการที่ทำให้ผู้ส่งหรือผู้กระทำธุรกรรมไม่สามารถปฏิเสธความรับผิดชอบได้ว่าตนไม่ได้ทำ โดยพิสูจน์ผ่าน Digital Signature ที่ใช้ Private Key ของผู้ส่งร่วมกับบันทึก Log ที่ตรวจสอบได้'
        ],
        keyPointsTh: [
          'Confidentiality = ความลับ, Integrity = ความถูกต้องไม่ถูกดัดแปลง, Availability = พร้อมใช้งาน',
          'Non-repudiation อาศัย Asymmetric Cryptography + Digital Signature'
        ]
      },
      {
        id: 'sec-aaa',
        titleTh: '2. กรอบการทำงาน AAA และ Gap Analysis',
        contentTh: [
          'Authentication ยืนยันตัวตนทั้งของผู้ใช้งาน (เช่น MFA, รหัสผ่าน) และของระบบต่อระบบ (เช่น Device Certificates, Mutual TLS, API Tokens)',
          'Authorization กำหนดขอบเขตสิทธิ์ว่าตัวตนที่ยืนยันแล้วสามารถเข้าถึงทรัพยากรใดและทำอะไรได้บ้างตามโมเดลควบคุมสิทธิ์ เช่น RBAC หรือ ABAC',
          'Accounting คือการติดตามและบันทึกกิจกรรมการใช้งาน เช่น Log การเข้าสู่ระบบ การเปลี่ยนแปลงไฟล์ และเวลาใช้งานเพื่อใช้ตรวจสอบย้อนหลัง',
          'Gap Analysis คือการเปรียบเทียบสถานะความปลอดภัยปัจจุบัน (Current State) กับมาตรฐานหรือเป้าหมายที่ต้องการ (Desired State) เพื่อระบุช่องว่างที่ต้องปรับปรุง'
        ],
        keyPointsTh: [
          'Authentication = คุณคือใคร, Authorization = คุณทำอะไรได้บ้าง, Accounting = คุณทำอะไรไปเมื่อไหร่',
          'Gap Analysis ใช้ประเมินส่วนต่างระหว่างสถานะปัจจุบันกับเกณฑ์เป้าหมาย'
        ]
      }
    ],
    keyTerms: [
      { termEn: 'Non-repudiation', explanationTh: 'การรับรองว่าผู้กระทำไม่สามารถปฏิเสธการกระทำของตนเองได้' },
      { termEn: 'Accounting', explanationTh: 'การบันทึกและติดตามกิจกรรมของผู้ใช้หรือระบบเพื่อตรวจสอบย้อนหลัง' },
      { termEn: 'Gap Analysis', explanationTh: 'การวิเคราะห์ส่วนต่างระหว่างมาตรการที่มีอยู่จริงกับมาตรฐานเป้าหมาย' }
    ],
    scenarios: [
      {
        titleTh: 'การตรวจสอบการอนุมัติคำสั่งโอนเงินภายในองค์กร',
        contextTh:
          'ผู้จัดการฝ่ายการเงินปฏิเสธว่าไม่ได้อนุมัติรายการโอนเงินมูลค่าสูงผ่านระบบ ERP ภายในองค์กร',
        decisionTh:
          'บังคับใช้ Digital Signature ผูกกับ Smart Card ของผู้อนุมัติในทุกธุรกรรมและจัดเก็บ Log แบบ Immutable',
        takeawayTh:
          'การลงนามดิจิทัลช่วยสร้างทั้ง Integrity และ Non-repudiation อย่างสมบูรณ์'
      }
    ],
    comparisonTables: [
      {
        captionTh: 'เปรียบเทียบกลไกหลักของ CIA Triad และ Non-repudiation',
        headersTh: ['หลักการ', 'ภัยคุกคามหลัก', 'กลไกป้องกันที่พบบ่อย'],
        rowsTh: [
          ['Confidentiality', 'Data Breach, Sniffing', 'Encryption, Access Control, Masking'],
          ['Integrity', 'Tampering, MITM Modification', 'Hashing, HMAC, Digital Signature, FIM'],
          ['Availability', 'DDoS, Hardware Failure, Power Outage', 'Clustering, Load Balancer, UPS, Backups'],
          ['Non-repudiation', 'การปฏิเสธความรับผิดชอบในธุรกรรม', 'PKI Digital Signature + Audit Logs']
        ]
      }
    ],
    applicationsAndLimitations: {
      applicationsTh: [
        'ใช้กำหนดเป้าหมายของสถาปัตยกรรมความปลอดภัยและการเลือกควบคุมสำหรับระบบใหม่',
        'ใช้ Gap Analysis ก่อนเริ่มโครงการปรับปรุงความมั่นคงปลอดภัยหรือขอรับรองมาตรฐาน'
      ],
      limitationsTh: [
        'Hashing เพียงอย่างเดียวพิสูจน์ Integrity ได้ แต่ไม่สามารถให้ Non-repudiation ได้หากไม่มี Private Key ลงนาม',
        'การเพิ่ม Confidentiality มากเกินไปโดยไม่วางแผนอาจกระทบต่อ Availability และความสะดวกในการกู้คืน'
      ]
    },
    commonMisconceptions: [
      {
        misconceptionTh: 'สับสนระหว่าง Authentication กับ Authorization',
        clarificationTh:
          'Authentication คือการพิสูจน์ตัวตน (Verify identity) ส่วน Authorization คือการตรวจสอบสิทธิ์หลังจากรู้ตัวตนแล้ว (Verify permissions)'
      },
      {
        misconceptionTh: 'คิดว่า Symmetric Encryption ให้ Non-repudiation ได้',
        clarificationTh:
          'Symmetric Key ใช้กุญแจเดียวกันทั้งสองฝั่ง จึงพิสูจน์ไม่ได้ว่าฝั่งใดเป็นผู้สร้างข้อมูล ต่างจาก Asymmetric Digital Signature'
      }
    ],
    scenarioAnalysisGuide: {
      approachStepsTh: [
        'พิจารณาว่าโจทย์กำลังเน้นการปกปิดข้อมูล (Confidentiality), ป้องกันการปลอมแปลง (Integrity), การเข้าถึงต่อเนื่อง (Availability) หรือหลักฐานยืนยันตัวผู้ทำ (Non-repudiation)',
        'ตรวจสอบขั้นตอนใน AAA ว่าติดปัญหาที่การพิสูจน์ตัวตน การกำหนดสิทธิ์ หรือการเก็บ Log',
        'หากโจทย์พูดถึงการเทียบสถานะปัจจุบันกับมาตรฐานเป้าหมาย ให้เลือก Gap Analysis'
      ],
      examSignalKeywords: [
        { keywordEn: 'deny sending / prove origin', meaningTh: 'ชี้ไปที่ Non-repudiation' },
        { keywordEn: 'current state vs desired standard', meaningTh: 'ชี้ไปที่ Gap analysis' }
      ]
    },
    summaryTh: [
      'CIA Triad + Non-repudiation เป็นรากฐานของการออกแบบมาตรการความปลอดภัยทุกประเภท',
      'AAA (Authentication, Authorization, Accounting) ครอบคลุมการยืนยันตัวตนทั้งบุคคลและอุปกรณ์ รวมถึงการบันทึกตรวจสอบ'
    ],
    knowledgeChecks: [
      {
        id: 'L1-02-KC1',
        questionTh: 'องค์กรต้องการให้มั่นใจว่าคู่ค้าไม่สามารถปฏิเสธได้ว่าตนเองเป็นผู้ส่งใบสั่งซื้ออิเล็กทรอนิกส์ ควรใช้หลักการใด?',
        choices: [
          { id: 'a', textTh: 'Availability' },
          { id: 'b', textTh: 'Non-repudiation' },
          { id: 'c', textTh: 'Gap Analysis' },
          { id: 'd', textTh: 'Data Masking' }
        ],
        correctChoiceId: 'b',
        explanationTh: 'Non-repudiation ป้องกันการปฏิเสธความรับผิดชอบโดยอาศัย Digital Signature'
      },
      {
        id: 'L1-02-KC2',
        questionTh: 'ระบบตรวจสอบสิทธิ์พบว่าผู้ใช้เข้าสู่ระบบด้วย MFA สำเร็จแล้ว แต่ไม่สามารถเปิดโฟลเดอร์การเงินได้ ขั้นตอนใดของ AAA เป็นตัวบล็อก?',
        choices: [
          { id: 'a', textTh: 'Authentication' },
          { id: 'b', textTh: 'Accounting' },
          { id: 'c', textTh: 'Authorization' },
          { id: 'd', textTh: 'Attestation' }
        ],
        correctChoiceId: 'c',
        explanationTh: 'การผ่าน MFA คือผ่าน Authentication แล้ว ส่วนการตรวจสิทธิ์เปิดโฟลเดอร์คือ Authorization'
      },
      {
        id: 'L1-02-KC3',
        questionTh: 'การตรวจสอบเทียบระบบปัจจุบันกับเกณฑ์ NIST CSF เพื่อระบุจุดที่ยังขาดอยู่เรียกว่าอะไร?',
        choices: [
          { id: 'a', textTh: 'Gap Analysis' },
          { id: 'b', textTh: 'Change Window' },
          { id: 'c', textTh: 'Key Escrow' },
          { id: 'd', textTh: 'Alert Tuning' }
        ],
        correctChoiceId: 'a',
        explanationTh: 'Gap Analysis คือการเทียบสถานะปัจจุบันกับสถานะเป้าหมายเพื่อระบุจุดที่ต้องปรับปรุง'
      }
    ],
    references: [
      { title: 'CompTIA Security+ SY0-701 Objective 1.2', noteTh: 'CIA, Non-repudiation, AAA, Gap analysis' }
    ],
    relatedLessonIds: ['L1-01']
  }
];

export const FIXTURE_QUESTIONS: Question[] = [
  {
    id: 'Q1-001',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A data center installs reinforced steel bollards in front of its main glass lobby to stop vehicles from crashing into the server facility. Which security control category and type BEST describe the bollards?',
    promptTh:
      'ศูนย์ข้อมูลแห่งหนึ่งติดตั้งเสากั้นเหล็กเสริมความแข็งแรงบริเวณหน้าล็อบบี้กระจกเพื่อป้องกันยานพาหนะพุ่งชนอาคาร เสากั้นนี้จัดอยู่ในหมวดหมู่และประเภทใดเหมาะสมที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Physical / Preventive', textTh: 'ทางกายภาพ / เชิงป้องกัน (Physical / Preventive)' },
      { id: 'c2', textEn: 'Technical / Deterrent', textTh: 'ทางเทคนิค / เชิงปราม (Technical / Deterrent)' },
      { id: 'c3', textEn: 'Operational / Detective', textTh: 'เชิงปฏิบัติการ / เชิงตรวจจับ (Operational / Detective)' },
      { id: 'c4', textEn: 'Managerial / Corrective', textTh: 'เชิงบริหาร / เชิงแก้ไข (Managerial / Corrective)' }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'Bollards เป็นอุปกรณ์ป้องกันเชิงกายภาพที่หยุดยั้งยานพาหนะไม่ให้เข้าถึงอาคารได้จริง จึงจัดเป็น Physical และ Preventive Control',
    choiceRationales: {
      c1: 'ถูกต้อง: เสากั้นเป็นสิ่งกีดขวางทางกายภาพที่ยับยั้งการบุกรุกด้วยยานพาหนะก่อนเกิดเหตุ',
      c2: 'ไม่ถูกต้อง: Bollards ไม่ใช่ระบบเทคโนโลยีดิจิทัล และหน้าที่หลักคือหยุดแรงกระแทก ไม่ใช่แค่ข่มขู่',
      c3: 'ไม่ถูกต้อง: ไม่ได้เป็นกระบวนการทำงานของคนและไม่ได้ทำหน้าที่ตรวจจับแจ้งเตือน',
      c4: 'ไม่ถูกต้อง: ไม่ใช่นโยบายฝ่ายบริหารและไม่ได้ใช้แก้ไขหลังจากรถชนแล้ว'
    },
    misconceptionTh: 'ผู้เรียนบางส่วนสับสนระหว่างป้ายเตือน (Deterrent) กับสิ่งกีดขวางที่หยุดการเข้าถึงได้จริง (Preventive)',
    relatedLessonIds: ['L1-01'],
    tags: ['controls', 'physical']
  },
  {
    id: 'Q1-002',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'An organization adopts a Zero Trust Architecture. Which TWO components belong specifically to the Zero Trust Control Plane? (Choose two.)',
    promptTh:
      'องค์กรกำลังนำสถาปัตยกรรม Zero Trust มาใช้งาน องค์ประกอบใด 2 ข้อต่อไปนี้อยู่ในส่วนของ Zero Trust Control Plane? (เลือก 2 ข้อ)',
    choices: [
      { id: 'c1', textEn: 'Policy Engine (PE)', textTh: 'Policy Engine (PE)' },
      { id: 'c2', textEn: 'Policy Administrator (PA)', textTh: 'Policy Administrator (PA)' },
      { id: 'c3', textEn: 'Policy Enforcement Point (PEP)', textTh: 'Policy Enforcement Point (PEP)' },
      { id: 'c4', textEn: 'Implicit Trust Zone', textTh: 'Implicit Trust Zone' }
    ],
    correctChoiceIds: ['c1', 'c2'],
    explanationTh:
      'ตามมาตรฐาน NIST SP 800-207 และ SY0-701 ส่วน Control Plane ประกอบด้วย Policy Engine (ตัดสินใจ) และ Policy Administrator (สั่งเปิด/ปิดเซสชัน) ส่วน PEP อยู่ใน Data Plane',
    choiceRationales: {
      c1: 'ถูกต้อง: Policy Engine อยู่ใน Control Plane ทำหน้าที่คำนวณความเสี่ยงและตัดสินใจอนุญาต/ปฏิเสธ',
      c2: 'ถูกต้อง: Policy Administrator อยู่ใน Control Plane ทำหน้าที่สั่งการไปยัง PEP เพื่อสร้างหรือยกเลิกเส้นทางสื่อสาร',
      c3: 'ไม่ถูกต้อง: Policy Enforcement Point (PEP) อยู่ใน Data Plane ซึ่งอยู่บนเส้นทางรับส่งข้อมูลจริง',
      c4: 'ไม่ถูกต้อง: Implicit Trust Zone เป็นแนวคิดพื้นที่เชื่อถือใน Data Plane ที่ Zero Trust ต้องการจำกัดให้เล็กที่สุด'
    },
    misconceptionTh: 'ผู้เรียนมักจำสลับว่า Policy Enforcement Point (PEP) อยู่ใน Control Plane เพราะมีคำว่า Policy นำหน้าเหมือนกัน',
    relatedLessonIds: ['L1-02'],
    tags: ['zero-trust', 'nist-800-207']
  },
  {
    id: 'Q2-001',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'An attacker registers "examp1e-bank.com" hoping employees misread the numeral "1" as the letter "l" and enter their credentials. Which technique is this?',
    promptTh:
      'ผู้โจมตีจดโดเมนชื่อ "examp1e-bank.com" โดยหวังให้พนักงานอ่านเลข "1" สลับกับตัวอักษร "l" และกรอกรหัสผ่านลงไป เทคนิคนี้คือข้อใด?',
    choices: [
      { id: 'c1', textEn: 'Watering hole attack', textTh: 'การโจมตีแบบ Watering hole' },
      { id: 'c2', textEn: 'Typosquatting', textTh: 'Typosquatting' },
      { id: 'c3', textEn: 'Pretexting', textTh: 'Pretexting' },
      { id: 'c4', textEn: 'Vishing', textTh: 'Vishing' }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'การจดชื่อโดเมนที่คล้ายกับโดเมนจริงมาก ๆ โดยเปลี่ยนตัวอักษรให้ดูคล้ายหรืออาศัยการพิมพ์ผิดคือ Typosquatting',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Watering hole คือการแฮกเว็บไซต์จริงที่กลุ่มเป้าหมายนิยมเข้าใช้งานอยู่แล้ว',
      c2: 'ถูกต้อง: Typosquatting อาศัยชื่อโดเมนที่สะกดผิดหรือดูคล้ายเพื่อหลอกเหยื่อ',
      c3: 'ไม่ถูกต้อง: Pretexting คือการสร้างเรื่องราว/บทบาทสมมติเพื่อหลอกถามข้อมูล',
      c4: 'ไม่ถูกต้อง: Vishing คือการหลอกลวงผ่านการโทรศัพท์ด้วยเสียง'
    },
    misconceptionTh: 'บางครั้งสับสนกับ Watering hole ซึ่งไม่ได้จดโดเมนปลอมขึ้นมาใหม่ แต่ไปฝังโค้ดบนเว็บที่เหยื่อเข้าประจำ',
    relatedLessonIds: ['L1-02'],
    tags: ['social-engineering', 'domains']
  },
  {
    id: 'Q3-001',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A healthcare clinic requires its inline firewall to drop all external traffic if a hardware fault occurs, prioritizing strict confidentiality over continuous internet availability. Which failure mode should be configured?',
    promptTh:
      'คลินิกแห่งหนึ่งต้องการให้ Firewall แบบ Inline บล็อกการรับส่งข้อมูลจากภายนอกทั้งหมดหากอุปกรณ์เกิดขัดข้อง โดยให้ความสำคัญกับการป้องกันข้อมูลรั่วไหลมากกว่าการเชื่อมต่อต่อเนื่อง ควรเลือกโหมดใด?',
    choices: [
      { id: 'c1', textEn: 'Fail-open', textTh: 'Fail-open' },
      { id: 'c2', textEn: 'Fail-closed', textTh: 'Fail-closed' },
      { id: 'c3', textEn: 'Passive tap mode', textTh: 'โหมด Passive tap' },
      { id: 'c4', textEn: 'Split tunneling', textTh: 'Split tunneling' }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'Fail-closed จะหยุดรับส่งทราฟฟิกทั้งหมดเมื่ออุปกรณ์ความปลอดภัยล้มเหลว เพื่อป้องกันไม่ให้ทราฟฟิกที่ไม่ได้ตรวจสอบหลุดรอดเข้าเครือข่าย',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: Fail-open จะปล่อยทราฟฟิกผ่านโดยไม่ตรวจเมื่ออุปกรณ์พัง เหมาะกับกรณีที่ให้ความสำคัญกับ Availability สูงสุด',
      c2: 'ถูกต้อง: Fail-closed ยอมให้การเชื่อมต่อหยุดชะงักเพื่อรักษาความปลอดภัยเมื่ออุปกรณ์ขัดข้อง',
      c3: 'ไม่ถูกต้อง: Passive tap เป็นการสำเนาทราฟฟิกมาวิเคราะห์ ไม่สามารถบล็อกทราฟฟิก Inline ได้',
      c4: 'ไม่ถูกต้อง: Split tunneling เป็นการตั้งค่าเส้นทาง VPN ไม่ใช่ failure mode ของ Firewall'
    },
    misconceptionTh: 'สับสนระหว่าง Fail-open (เน้นให้ใช้งานต่อได้) กับ Fail-closed (เน้นปลอดภัย ปิดทางผ่าน)',
    relatedLessonIds: ['L1-01'],
    tags: ['firewall', 'failure-modes']
  },
  {
    id: 'Q4-001',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.5'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'An administrator wants to instruct receiving mail servers to reject emails that fail both SPF and DKIM checks for the company domain and receive aggregate reports. Which record should be published?',
    promptTh:
      'ผู้ดูแลระบบต้องการสั่งให้เซิร์ฟเวอร์อีเมลปลายทางปฏิเสธอีเมลที่ไม่ผ่านการตรวจทั้ง SPF และ DKIM สำหรับโดเมนของบริษัท พร้อมส่งรายงานผลกลับมา ควรเผยแพร่เรคคอร์ดใด?',
    choices: [
      { id: 'c1', textEn: 'DMARC with p=reject', textTh: 'DMARC ที่กำหนด p=reject' },
      { id: 'c2', textEn: 'SPF with ~all only', textTh: 'SPF ที่กำหนด ~all เพียงอย่างเดียว' },
      { id: 'c3', textEn: 'MX priority 0', textTh: 'MX record ที่มี priority 0' },
      { id: 'c4', textEn: 'PTR reverse DNS', textTh: 'PTR reverse DNS' }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'DMARC ใช้กำหนดนโยบายปฏิบัติ (p=none / quarantine / reject) เมื่ออีเมลไม่ผ่านการยืนยันด้วย SPF/DKIM พร้อมทั้งระบุอีเมลรับรายงาน (rua/ruf)',
    choiceRationales: {
      c1: 'ถูกต้อง: DMARC p=reject สั่งปฏิเสธอีเมลปลอมแปลงและเปิดใช้งานการส่งรายงานได้',
      c2: 'ไม่ถูกต้อง: SPF ~all เป็นเพียง SoftFail ไม่มีคำสั่งบังคับปฏิเสธเด็ดขาดและไม่ครอบคลุม DKIM',
      c3: 'ไม่ถูกต้อง: MX record ใช้ระบุเมลเซิร์ฟเวอร์รับอีเมล ไม่ได้กำหนดนโยบาย anti-spoofing',
      c4: 'ไม่ถูกต้อง: PTR ใช้แปลง IP เป็นชื่อโดเมน ไม่ใช่กลไกกำหนด policy ของ SPF/DKIM'
    },
    misconceptionTh: 'ผู้เรียนมักคิดว่า SPF เพียงอย่างเดียวเพียงพอต่อการกำหนดรายงานและการปฏิเสธเมลที่ปลอม From Header',
    relatedLessonIds: ['L1-02'],
    tags: ['email-security', 'dmarc']
  },
  {
    id: 'Q5-001',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A server asset is valued at $80,000. A flooding event has an Exposure Factor of 25% and occurs once every 4 years. What is the Annualized Loss Expectancy (ALE)?',
    promptTh:
      'เซิร์ฟเวอร์เครื่องหนึ่งมีมูลค่าสินทรัพย์ $80,000 เหตุการณ์น้ำท่วมมี Exposure Factor 25% และคาดว่าจะเกิด 1 ครั้งในทุก ๆ 4 ปี ค่า Annualized Loss Expectancy (ALE) เท่ากับเท่าใด?',
    choices: [
      { id: 'c1', textEn: '$20,000', textTh: '$20,000' },
      { id: 'c2', textEn: '$5,000', textTh: '$5,000' },
      { id: 'c3', textEn: '$80,000', textTh: '$80,000' },
      { id: 'c4', textEn: '$10,000', textTh: '$10,000' }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'SLE = AV × EF = $80,000 × 0.25 = $20,000; ARO = 1/4 = 0.25 ต่อปี; ดังนั้น ALE = SLE × ARO = $20,000 × 0.25 = $5,000',
    choiceRationales: {
      c1: 'ไม่ถูกต้อง: $20,000 คือค่า SLE (ความเสียหายต่อเหตุการณ์ 1 ครั้ง) ยังไม่ได้คูณ ARO',
      c2: 'ถูกต้อง: SLE = $20,000 คูณ ARO = 0.25 ได้ ALE = $5,000 ต่อปี',
      c3: 'ไม่ถูกต้อง: $80,000 คือ Asset Value เต็มของระบบ',
      c4: 'ไม่ถูกต้อง: คำนวณ ARO คลาดเคลื่อน (อาจใช้ 0.5 แทน 0.25)'
    },
    misconceptionTh: 'มักลืมแปลงความถี่ "1 ครั้งใน 4 ปี" ให้เป็น ARO = 0.25 หรือหยุดคำนวณแค่ค่า SLE',
    relatedLessonIds: ['L1-02'],
    tags: ['risk', 'quantitative']
  }
];

export const FIXTURE_PBQS: PbqQuestion[] = [
  {
    id: 'PBQ-D1-01',
    examCode: 'SY0-701',
    domainId: 'D1',
    objectiveIds: ['1.1'],
    difficulty: 'intermediate',
    titleEn: 'Security Control Classification Matrix',
    titleTh: 'จำแนกประเภทของ Security Controls',
    scenarioEn:
      'You are auditing security safeguards implemented across a branch office. Classify each safeguard by its primary control function.',
    scenarioTh:
      'คุณกำลังตรวจสอบมาตรการความปลอดภัยที่ใช้งานในสำนักงานสาขา จงจับคู่แต่ละมาตรการเข้ากับหน้าที่หลักที่ถูกต้องที่สุด',
    instructionsEn: 'Select the best matching control type for each safeguard.',
    instructionsTh: 'เลือกประเภทของ Control ที่เหมาะสมที่สุดสำหรับแต่ละรายการ',
    config: {
      template: 'matching-matrix',
      rows: [
        {
          id: 'r1',
          promptEn: 'Motion-activated floodlights along the perimeter fence',
          promptTh: 'ไฟส่องสว่างอัตโนมัติตามแนวรั้วรอบอาคาร'
        },
        {
          id: 'r2',
          promptEn: 'SIEM correlation rule flagging impossible travel logins',
          promptTh: 'กฎแจ้งเตือนใน SIEM เมื่อพบการล็อกอินแบบ Impossible Travel'
        },
        {
          id: 'r3',
          promptEn: 'Hardware token MFA enforced before VPN tunnel creation',
          promptTh: 'การบังคับใช้ MFA ด้วยโทเคนก่อนเปิดอุโมงค์ VPN'
        },
        {
          id: 'r4',
          promptEn: 'Restoring clean virtual machine snapshots after malware execution',
          promptTh: 'การกู้คืน Snapshot ที่สะอาดหลังพบมัลแวร์ทำงาน'
        }
      ],
      options: [
        { id: 'preventive', labelEn: 'Preventive', labelTh: 'Preventive (ป้องกัน)' },
        { id: 'deterrent', labelEn: 'Deterrent', labelTh: 'Deterrent (ปราม/ลดแรงจูงใจ)' },
        { id: 'detective', labelEn: 'Detective', labelTh: 'Detective (ตรวจจับ)' },
        { id: 'corrective', labelEn: 'Corrective', labelTh: 'Corrective (แก้ไข/ฟื้นฟู)' }
      ],
      expectedMatches: {
        r1: 'deterrent',
        r2: 'detective',
        r3: 'preventive',
        r4: 'corrective'
      }
    },
    rubric: [
      { id: 'r1', descriptionTh: 'ระบุประเภทของไฟส่องสว่างรอบอาคารถูกต้อง (Deterrent)', weight: 0.25 },
      { id: 'r2', descriptionTh: 'ระบุประเภทของกฎแจ้งเตือน SIEM ถูกต้อง (Detective)', weight: 0.25 },
      { id: 'r3', descriptionTh: 'ระบุประเภทของ MFA บน VPN ถูกต้อง (Preventive)', weight: 0.25 },
      { id: 'r4', descriptionTh: 'ระบุประเภทของการกู้คืน Snapshot ถูกต้อง (Corrective)', weight: 0.25 }
    ],
    explanationTh:
      'ไฟส่องสว่างทำให้ผู้บุกรุกลังเล (Deterrent), SIEM แจ้งเตือนพฤติกรรมผิดปกติ (Detective), MFA บล็อกการเข้าถึงก่อนเกิดเหตุ (Preventive), และการกู้คืน Snapshot ซ่อมแซมระบบหลังเกิดเหตุ (Corrective)',
    misconceptionTh: 'มักจำสลับระหว่างไฟส่องสว่าง (Deterrent) กับกล้องหรือเซ็นเซอร์แจ้งเตือน (Detective)',
    relatedLessonIds: ['L1-01'],
    tags: ['pbq', 'controls']
  },
  {
    id: 'PBQ-D2-01',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.5'],
    difficulty: 'exam-ready',
    titleEn: 'Enterprise Firewall & Hardening Rule Builder',
    titleTh: 'กำหนดกฎ Firewall ตามหลัก Least Privilege',
    scenarioEn:
      'Configure two inbound firewall rules for the public web server (10.20.1.10) in the screened subnet while blocking insecure legacy administration protocols.',
    scenarioTh:
      'กำหนดกฎ Firewall ขาเข้าจำนวน 2 ข้อสำหรับเว็บเซิร์ฟเวอร์ (10.20.1.10) ในโซน Screened Subnet โดยอนุญาตเฉพาะบริการที่ปลอดภัยและปิดโปรโตคอลจัดการที่ไม่มีการเข้ารหัส',
    instructionsEn: 'Select Action, Protocol/Port, and Destination for each rule.',
    instructionsTh: 'เลือก Action, Protocol/Port และ Destination ให้ถูกต้องในแต่ละกฎ',
    config: {
      template: 'rule-builder',
      contextTableTitle: 'Network Asset Inventory',
      contextRows: [
        { label: 'Public Web Server IP', value: '10.20.1.10 (HTTPS only)' },
        { label: 'Legacy Admin Protocol', value: 'Telnet (TCP/23) — Prohibited' },
        { label: 'Allowed External Client Source', value: 'Any (0.0.0.0/0)' }
      ],
      rules: [
        {
          id: 'rule1',
          titleEn: 'Rule 1: Allow public encrypted web traffic',
          titleTh: 'กฎที่ 1: อนุญาตทราฟฟิกเว็บที่เข้ารหัสจากภายนอก',
          fields: [
            {
              id: 'action',
              labelEn: 'Action',
              labelTh: 'การกระทำ',
              choices: [
                { value: 'allow', labelEn: 'Allow', labelTh: 'Allow (อนุญาต)' },
                { value: 'deny', labelEn: 'Deny', labelTh: 'Deny (ปฏิเสธ)' }
              ]
            },
            {
              id: 'port',
              labelEn: 'Protocol / Port',
              labelTh: 'โปรโตคอล / พอร์ต',
              choices: [
                { value: 'tcp-443', labelEn: 'TCP/443 (HTTPS)', labelTh: 'TCP/443 (HTTPS)' },
                { value: 'tcp-80', labelEn: 'TCP/80 (HTTP)', labelTh: 'TCP/80 (HTTP)' },
                { value: 'tcp-23', labelEn: 'TCP/23 (Telnet)', labelTh: 'TCP/23 (Telnet)' }
              ]
            },
            {
              id: 'dest',
              labelEn: 'Destination',
              labelTh: 'ปลายทาง',
              choices: [
                { value: '10.20.1.10', labelEn: '10.20.1.10', labelTh: '10.20.1.10' },
                { value: 'any', labelEn: 'Any', labelTh: 'Any (ทั้งหมด)' }
              ]
            }
          ],
          expectedValues: { action: 'allow', port: 'tcp-443', dest: '10.20.1.10' }
        },
        {
          id: 'rule2',
          titleEn: 'Rule 2: Block insecure legacy management protocol',
          titleTh: 'กฎที่ 2: บล็อกโปรโตคอลจัดการระยะไกลที่ไม่เข้ารหัส',
          fields: [
            {
              id: 'action',
              labelEn: 'Action',
              labelTh: 'การกระทำ',
              choices: [
                { value: 'allow', labelEn: 'Allow', labelTh: 'Allow (อนุญาต)' },
                { value: 'deny', labelEn: 'Deny', labelTh: 'Deny (ปฏิเสธ)' }
              ]
            },
            {
              id: 'port',
              labelEn: 'Protocol / Port',
              labelTh: 'โปรโตคอล / พอร์ต',
              choices: [
                { value: 'tcp-23', labelEn: 'TCP/23 (Telnet)', labelTh: 'TCP/23 (Telnet)' },
                { value: 'tcp-22', labelEn: 'TCP/22 (SSH)', labelTh: 'TCP/22 (SSH)' },
                { value: 'tcp-443', labelEn: 'TCP/443 (HTTPS)', labelTh: 'TCP/443 (HTTPS)' }
              ]
            }
          ],
          expectedValues: { action: 'deny', port: 'tcp-23' }
        }
      ]
    },
    rubric: [
      { id: 'rule1', descriptionTh: 'กำหนดกฎ Allow TCP/443 ไปยัง 10.20.1.10 ถูกต้อง', weight: 0.5 },
      { id: 'rule2', descriptionTh: 'กำหนดกฎ Deny TCP/23 (Telnet) ถูกต้อง', weight: 0.5 },
      { id: 'bonus', descriptionTh: 'สอดคล้องหลัก Least Privilege โดยไม่ใช้ Any กับ Destination', weight: 0 }
    ].filter((r) => r.weight > 0),
    explanationTh:
      'ต้องอนุญาตเฉพาะ HTTPS (TCP/443) ไปยัง IP ของเว็บเซิร์ฟเวอร์โดยตรง (ไม่ใช้ Any) และปฏิเสธ Telnet (TCP/23) ที่ส่งข้อมูลเป็น plaintext',
    misconceptionTh: 'มักเผลอเลือก Destination เป็น Any หรือเปิด TCP/80 ร่วมด้วยโดยไม่จำเป็น',
    relatedLessonIds: ['L1-01'],
    tags: ['pbq', 'firewall']
  }
];

// Keep fixture valid even with 2 rules on rule-builder by guaranteeing >= 3 rubric items in PBQ-D2-01
FIXTURE_PBQS[1]!.rubric = [
  { id: 'rule1', descriptionTh: 'กฎ Allow TCP/443 ไปยัง 10.20.1.10 ถูกต้อง', weight: 0.5 },
  { id: 'rule2', descriptionTh: 'กฎ Deny TCP/23 (Telnet) ถูกต้อง', weight: 0.5 }
];

//Wait: PbqQuestionSchema requires rubric.min(3)! Let's add a 3rd rule in PBQ-D2-01 so rubric has 3 criteria cleanly!
FIXTURE_PBQS[1] = {
  ...FIXTURE_PBQS[1]!,
  config: {
    template: 'rule-builder',
    contextTableTitle: 'Network Asset Inventory',
    contextRows: [
      { label: 'Public Web Server IP', value: '10.20.1.10 (HTTPS only)' },
      { label: 'Legacy Admin Protocol', value: 'Telnet (TCP/23) — Prohibited' },
      { label: 'Internal Admin Subnet', value: '10.99.0.0/24 via SSH' }
    ],
    rules: [
      ...(FIXTURE_PBQS[1]!.config.template === 'rule-builder' ? FIXTURE_PBQS[1]!.config.rules : []),
      {
        id: 'rule3',
        titleEn: 'Rule 3: Permit encrypted SSH administration to web server',
        titleTh: 'กฎที่ 3: อนุญาตการจัดการแบบเข้ารหัส (SSH) ไปยังเว็บเซิร์ฟเวอร์',
        fields: [
          {
            id: 'action',
            labelEn: 'Action',
            labelTh: 'การกระทำ',
            choices: [
              { value: 'allow', labelEn: 'Allow', labelTh: 'Allow (อนุญาต)' },
              { value: 'deny', labelEn: 'Deny', labelTh: 'Deny (ปฏิเสธ)' }
            ]
          },
          {
            id: 'port',
            labelEn: 'Protocol / Port',
            labelTh: 'โปรโตคอล / พอร์ต',
            choices: [
              { value: 'tcp-22', labelEn: 'TCP/22 (SSH)', labelTh: 'TCP/22 (SSH)' },
              { value: 'tcp-23', labelEn: 'TCP/23 (Telnet)', labelTh: 'TCP/23 (Telnet)' }
            ]
          }
        ],
        expectedValues: { action: 'allow', port: 'tcp-22' }
      }
    ]
  },
  rubric: [
    { id: 'rule1', descriptionTh: 'กฎ Allow TCP/443 ไปยัง 10.20.1.10 ถูกต้อง', weight: 0.4 },
    { id: 'rule2', descriptionTh: 'กฎ Deny TCP/23 (Telnet) ถูกต้อง', weight: 0.3 },
    { id: 'rule3', descriptionTh: 'กฎ Allow TCP/22 (SSH) ถูกต้อง', weight: 0.3 }
  ]
};

FIXTURE_PBQS.push(
  {
    id: 'PBQ-D3-01',
    examCode: 'SY0-701',
    domainId: 'D3',
    objectiveIds: ['3.2'],
    difficulty: 'intermediate',
    titleEn: 'Enterprise Perimeter & DMZ Placement',
    titleTh: 'วางตำแหน่งอุปกรณ์เครือข่ายใน Perimeter และ DMZ',
    scenarioEn:
      'Design a secure enterprise perimeter separating public web services from internal databases.',
    scenarioTh:
      'ออกแบบตำแหน่งอุปกรณ์ความปลอดภัยระหว่างอินเทอร์เน็ต โซน DMZ และเครือข่ายภายในองค์กร',
    instructionsEn: 'Assign the correct appliance or zone control to each architecture slot.',
    instructionsTh: 'เลือกอุปกรณ์หรือกลไกที่เหมาะสมลงในแต่ละตำแหน่งบนแผนภาพสถาปัตยกรรม',
    config: {
      template: 'architecture-configurator',
      diagramTitle: 'Enterprise Perimeter & Screened Subnet Topology',
      diagramType: 'perimeter-dmz',
      slots: [
        {
          id: 's1',
          zoneLabelEn: 'Slot A: Public Web Application Protection',
          zoneLabelTh: 'ตำแหน่ง A: ป้องกัน HTTP/SQLi หน้า Web Server',
          roleHintEn: 'Inspects Layer 7 HTTP traffic before web servers',
          roleHintTh: 'ตรวจสอบทราฟฟิก Layer 7 HTTP หน้าเว็บเซิร์ฟเวอร์',
          expectedOptionId: 'waf'
        },
        {
          id: 's2',
          zoneLabelEn: 'Slot B: Admin Bastion Access',
          zoneLabelTh: 'ตำแหน่ง B: จุดผ่านสำหรับผู้ดูแลระบบเข้าไปจัดการเซิร์ฟเวอร์',
          roleHintEn: 'Hardened intermediary host for remote administration',
          roleHintTh: 'เครื่องตัวกลางที่เสริมแกร่งแล้วสำหรับผู้ดูแลระบบ',
          expectedOptionId: 'jump-server'
        },
        {
          id: 's3',
          zoneLabelEn: 'Slot C: Outbound Web Content Filtering',
          zoneLabelTh: 'ตำแหน่ง C: ควบคุมการเข้าเว็บจากผู้ใช้ภายในออกอินเทอร์เน็ต',
          roleHintEn: 'Mediates outbound HTTP/HTTPS requests and caches/filters URLs',
          roleHintTh: 'เป็นตัวกลางกรอง URL และควบคุมการออกเว็บของผู้ใช้ภายใน',
          expectedOptionId: 'forward-proxy'
        }
      ],
      options: [
        { id: 'waf', labelEn: 'Web Application Firewall (WAF)', labelTh: 'WAF (Web Application Firewall)' },
        { id: 'jump-server', labelEn: 'Jump Server (Bastion Host)', labelTh: 'Jump Server' },
        { id: 'forward-proxy', labelEn: 'Forward Proxy Server', labelTh: 'Forward Proxy Server' },
        { id: 'hub', labelEn: 'Unmanaged Network Hub', labelTh: 'Network Hub' }
      ]
    },
    rubric: [
      { id: 's1', descriptionTh: 'วาง WAF ที่ตำแหน่งหน้า Web Server ถูกต้อง', weight: 0.34 },
      { id: 's2', descriptionTh: 'วาง Jump Server สำหรับผู้ดูแลระบบถูกต้อง', weight: 0.33 },
      { id: 's3', descriptionTh: 'วาง Forward Proxy สำหรับทราฟฟิกขาออกถูกต้อง', weight: 0.33 }
    ],
    explanationTh:
      'WAF ป้องกัน Layer 7 ให้เว็บแอปใน DMZ, Jump Server จำกัดจุดเข้าถึงเชิงบริหาร, และ Forward Proxy กรองการใช้งานเว็บขาออกของพนักงาน',
    misconceptionTh: 'มักสับสนระหว่าง Forward Proxy (ขาออก) กับ Reverse Proxy/WAF (ขาเข้าบริการเว็บ)',
    relatedLessonIds: ['L1-02'],
    tags: ['pbq', 'architecture']
  },
  {
    id: 'PBQ-D4-01',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.8'],
    difficulty: 'exam-ready',
    titleEn: 'Incident Response Lifecycle & Containment',
    titleTh: 'จัดลำดับขั้นตอน Incident Response และการกักกันเหตุการณ์',
    scenarioEn:
      'SOC analysts detect anomalous lateral SMB scans originating from an engineering laptop.',
    scenarioTh:
      'ทีม SOC ตรวจพบการสแกนพอร์ต SMB ผิดปกติจากโน้ตบุ๊กฝ่ายวิศวกรรมไปยังเซิร์ฟเวอร์ภายใน',
    instructionsEn: 'Order the four IR lifecycle phases and select the most appropriate immediate containment action.',
    instructionsTh: 'เรียงลำดับขั้นตอน Incident Response ทั้ง 4 ขั้น และเลือกการกักกันเฉพาะหน้าที่เหมาะสมที่สุด',
    config: {
      template: 'sequence-and-triage',
      sequencePromptEn: 'Arrange these four IR phases in chronological order (top = first):',
      sequencePromptTh: 'เรียงลำดับขั้นตอน IR ทั้ง 4 ขั้นจากแรกไปหลัง:',
      steps: [
        { id: 'erad', labelEn: 'Eradication', labelTh: 'Eradication (กำจัดต้นตอ)' },
        { id: 'prep', labelEn: 'Preparation', labelTh: 'Preparation (เตรียมความพร้อม)' },
        { id: 'cont', labelEn: 'Containment', labelTh: 'Containment (กักกัน)' },
        { id: 'det', labelEn: 'Detection & Analysis', labelTh: 'Detection & Analysis (ตรวจจับและวิเคราะห์)' }
      ],
      expectedOrder: ['prep', 'det', 'cont', 'erad'],
      triageDecision: {
        promptEn: 'Which action provides immediate containment while preserving volatile memory for forensics?',
        promptTh: 'การกระทำใดช่วยกักกันเครื่องทันทีโดยยังรักษาหลักฐานในหน่วยความจำ (RAM) ไว้ได้?',
        choices: [
          { id: 'edr-isolate', textEn: 'Isolate the host network via EDR console', textTh: 'สั่ง Network Isolate ผ่านระบบ EDR' },
          { id: 'unplug-power', textEn: 'Pull the workstation power cable immediately', textTh: 'ดึงปลั๊กไฟและปิดเครื่องทันที' },
          { id: 'wipe-disk', textEn: 'Reimage the laptop immediately', textTh: 'ล้างเครื่องและลง OS ใหม่ทันที' }
        ],
        expectedChoiceId: 'edr-isolate'
      }
    },
    rubric: [
      { id: 'pos-1', descriptionTh: 'ลำดับที่ 1: Preparation', weight: 0.15 },
      { id: 'pos-2', descriptionTh: 'ลำดับที่ 2: Detection & Analysis', weight: 0.15 },
      { id: 'pos-3', descriptionTh: 'ลำดับที่ 3: Containment', weight: 0.15 },
      { id: 'pos-4', descriptionTh: 'ลำดับที่ 4: Eradication', weight: 0.15 },
      { id: 'triage', descriptionTh: 'เลือก EDR Network Isolation เพื่อรักษา RAM', weight: 0.4 }
    ],
    explanationTh:
      'ลำดับ IR มาตรฐานคือ Preparation -> Detection & Analysis -> Containment -> Eradication และการแยกเครือข่ายผ่าน EDR หยุดการแพร่กระจายโดยไม่ทำลาย Volatile Memory',
    misconceptionTh: 'การดึงปลั๊กไฟหรือ Reimage ทันทีทำให้ข้อมูลสำคัญใน RAM สูญหายก่อนเก็บหลักฐาน',
    relatedLessonIds: ['L1-02'],
    tags: ['pbq', 'ir']
  },
  {
    id: 'PBQ-D5-01',
    examCode: 'SY0-701',
    domainId: 'D4',
    objectiveIds: ['4.9'],
    difficulty: 'exam-ready',
    titleEn: 'Cross-Source Log Investigation',
    titleTh: 'วิเคราะห์เหตุการณ์จาก Log หลายแหล่ง',
    scenarioEn:
      'Review the firewall, authentication, and web application logs below to identify the attack indicator and compromised account.',
    scenarioTh:
      'ตรวจสอบข้อมูล Log จาก Firewall, ระบบยืนยันตัวตน และ Web Server ด้านล่างเพื่อระบุรูปแบบการโจมตีและบัญชีที่ได้รับผลกระทบ',
    instructionsEn: 'Inspect each log tab and select the accurate investigation conclusion.',
    instructionsTh: 'สลับดูแท็บ Log แต่ละแหล่งแล้วเลือกข้อสรุปที่ถูกต้อง',
    config: {
      template: 'log-investigator',
      artifactTabs: [
        {
          id: 'auth',
          title: 'Auth / IdP Logs',
          lines: [
            '08:01:12Z user=somchai src=203.0.113.45 city=Bangkok status=SUCCESS mfa=push',
            '08:04:19Z user=somchai src=198.51.100.77 city=Berlin status=SUCCESS mfa=none (legacy IMAP)'
          ]
        },
        {
          id: 'fw',
          title: 'Firewall Logs',
          lines: [
            '08:05:00Z action=ALLOW src=10.5.0.22 dst=198.51.100.77 port=443 bytes_out=485000000',
            '08:05:45Z action=DENY src=198.51.100.77 dst=10.5.0.10 port=3389'
          ]
        }
      ],
      findings: [
        {
          id: 'f1',
          promptEn: 'Which anomaly is demonstrated by the two Auth log entries for user "somchai"?',
          promptTh: 'ความผิดปกติใดปรากฏใน Auth Log ของผู้ใช้ "somchai"?',
          choices: [
            { id: 'imp', textEn: 'Impossible travel & legacy protocol MFA bypass', textTh: 'Impossible travel และการล็อกอินผ่านโปรโตคอลเก่าที่ไม่ผ่าน MFA' },
            { id: 'ddos', textEn: 'Amplified DNS reflection attack', textTh: 'การโจมตีแบบ Amplified DNS reflection' },
            { id: 'bof', textEn: 'Stack buffer overflow on IMAP server', textTh: 'Stack buffer overflow บนเมลเซิร์ฟเวอร์' }
          ],
          expectedChoiceId: 'imp'
        },
        {
          id: 'f2',
          promptEn: 'What does the 08:05:00Z firewall entry most strongly suggest?',
          promptTh: 'รายการ Firewall เวลา 08:05:00Z ชี้ถึงกิจกรรมใดมากที่สุด?',
          choices: [
            { id: 'exfil', textEn: 'Large outbound data exfiltration (~485 MB)', textTh: 'การส่งออกข้อมูลขนาดใหญ่ผิดปกติ (~485 MB)' },
            { id: 'ntp', textEn: 'Routine NTP clock synchronization', textTh: 'การซิงค์เวลา NTP ตามปกติ' },
            { id: 'arp', textEn: 'Physical RFID badge cloning', textTh: 'การคัดลอกบัตร RFID' }
          ],
          expectedChoiceId: 'exfil'
        },
        {
          id: 'f3',
          promptEn: 'Which immediate IAM remediation addresses the authentication gap?',
          promptTh: 'การแก้ไขเชิง IAM ใดปิดช่องโหว่จากเหตุการณ์นี้ได้ตรงจุดที่สุด?',
          choices: [
            { id: 'rev', textEn: 'Revoke active sessions, reset password, and disable legacy auth without MFA', textTh: 'เพิกถอนเซสชัน เปลี่ยนรหัสผ่าน และปิดโปรโตคอลเก่าที่ไม่รองรับ MFA' },
            { id: 'banner', textEn: 'Change login screen color scheme', textTh: 'เปลี่ยนสีหน้าจอล็อกอิน' },
            { id: 'ups', textEn: 'Replace data center UPS battery', textTh: 'เปลี่ยนแบตเตอรี่ UPS ของศูนย์ข้อมูล' }
          ],
          expectedChoiceId: 'rev'
        }
      ]
    },
    rubric: [
      { id: 'f1', descriptionTh: 'ระบุ Impossible Travel และ Legacy Auth ได้ถูกต้อง', weight: 0.34 },
      { id: 'f2', descriptionTh: 'ระบุ Data Exfiltration จาก bytes_out ได้ถูกต้อง', weight: 0.33 },
      { id: 'f3', descriptionTh: 'เลือกวิธีแก้ไข IAM ได้ตรงจุด', weight: 0.33 }
    ],
    explanationTh:
      'การล็อกอินจากกรุงเทพฯ และเบอร์ลินห่างกัน 3 นาทีเป็น Impossible Travel และ bytes_out 485 MB ชี้ถึงการรั่วไหลข้อมูล ต้องตัดเซสชันและปิด Legacy Authentication ที่ข้าม MFA',
    misconceptionTh: 'มักดูเฉพาะสถานะ DENY โดยมองข้ามรายการ ALLOW ที่มีการส่งข้อมูลออกขนาดใหญ่ผิดปกติ',
    relatedLessonIds: ['L1-02'],
    tags: ['pbq', 'logs', 'siem']
  }
);

export const FIXTURE_MOCK_FORMS: MockExamForm[] = [
  {
    id: 'form-a',
    titleTh: 'ชุดทดสอบตัวอย่าง (Fixture Mode)',
    subtitleTh: '6 MCQ/MSQ + 5 Interactive PBQ',
    descriptionTh: 'ชุดทดสอบสำหรับตรวจสอบ UI และกลไกการสอบใน Phase 3',
    durationMinutes: 30,
    questionIds: FIXTURE_QUESTIONS.map((q) => q.id),
    pbqIds: FIXTURE_PBQS.map((p) => p.id)
  }
];

export const FIXTURE_GLOSSARY: GlossaryEntry[] = [
  {
    id: 'g-cia',
    termEn: 'CIA Triad',
    acronym: 'CIA',
    fullNameEn: 'Confidentiality, Integrity, and Availability',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    explanationTh: 'สามเสาหลักด้านความมั่นคงปลอดภัยสารสนเทศ ได้แก่ ความลับ ความถูกต้องสมบูรณ์ และความพร้อมใช้งาน',
    usageContextTh: 'ใช้ประเมินความเสี่ยงและจัดลำดับความสำคัญของมาตรการป้องกันในระบบ',
    relatedLessonIds: ['L1-02']
  },
  {
    id: 'g-aaa',
    termEn: 'AAA Framework',
    acronym: 'AAA',
    fullNameEn: 'Authentication, Authorization, and Accounting',
    domainId: 'D1',
    objectiveIds: ['1.2'],
    explanationTh: 'กรอบการทำงานในการยืนยันตัวตน กำหนดสิทธิ์ และบันทึกการใช้งาน',
    usageContextTh: 'พบในระบบเครือข่าย เช่น RADIUS, TACACS+ และการจัดการสิทธิ์องค์กร',
    relatedLessonIds: ['L1-02']
  }
];

export const FIXTURE_FLASHCARDS: Flashcard[] = [
  {
    id: 'fc-01',
    domainId: 'D1',
    objectiveIds: ['1.1'],
    conceptPromptEn: 'When should an organization select a Compensating Control instead of a primary control?',
    conceptPromptTh: 'องค์กรควรเลือกใช้ Compensating Control เมื่อใด และต่างจาก Preventive Control อย่างไร?',
    conceptualAnswerTh:
      'ใช้เมื่อไม่สามารถติดตั้งมาตรการหลักตามมาตรฐานได้ด้วยข้อจำกัดทางเทคนิคหรือธุรกิจ เช่น เครื่องจักรเก่าที่แพตช์ไม่ได้ จึงต้องเสริมด้วย Segmentation หรือ IPS เพื่อลดความเสี่ยงให้อยู่ในระดับที่ยอมรับได้',
    compareContrastTh: 'Compensating เป็นบทบาท "ทดแทนชั่วคราว/เสริม" ส่วน Preventive บอก "หน้าที่ในการป้องกันก่อนเกิดเหตุ"',
    relatedLessonIds: ['L1-01']
  }
];

export const FIXTURE_STUDY_PLAN: StudyPlanDay[] = [
  {
    day: 1,
    phaseTh: 'ช่วงที่ 1: ปูพื้นฐาน',
    titleTh: 'Security Controls และหลักการพื้นฐาน (1.1–1.2)',
    dayType: 'study',
    estimatedMinutes: 60,
    lessonIds: ['L1-01', 'L1-02'],
    objectiveIds: ['1.1', '1.2'],
    practiceTargetCount: 10,
    tasksTh: ['อ่านบทเรียน L1-01 และ L1-02', 'ทำแบบฝึกหัดท้ายบทและ Practice 10 ข้อ'],
    focusTipTh: 'ฝึกแยก Category กับ Type ของ Controls จากสถานการณ์จริง'
  }
];

export const FIXTURE_CONTENT_BUNDLE: ContentBundle = {
  lessons: FIXTURE_LESSONS,
  questions: FIXTURE_QUESTIONS,
  pbqs: FIXTURE_PBQS,
  mockForms: FIXTURE_MOCK_FORMS,
  glossary: FIXTURE_GLOSSARY,
  flashcards: FIXTURE_FLASHCARDS,
  studyPlan: FIXTURE_STUDY_PLAN
};
