import type { PbqQuestion } from '../../types';

export const PBQ_D5: PbqQuestion[] = [
  {
    id: 'PBQ-D5-01',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.2'],
    difficulty: 'exam-ready',
    titleEn: 'Risk Management Strategies & Business Impact Metrics',
    titleTh: 'การจับคู่กลยุทธ์จัดการความเสี่ยงและตัวชี้วัด BIA',
    scenarioEn:
      'As part of the annual enterprise risk review and Business Impact Analysis (BIA), the security governance committee must classify four organizational scenarios into the most appropriate risk response strategy or recovery objective.',
    scenarioTh:
      'ในการทบทวนความเสี่ยงประจำปีและการวิเคราะห์ผลกระทบทางธุรกิจ (BIA) คณะกรรมการกำกับดูแลความปลอดภัยต้องจำแนกสถานการณ์ขององค์กร 4 กรณีให้ตรงกับกลยุทธ์จัดการความเสี่ยงหรือตัวชี้วัดการกู้คืนที่เหมาะสมที่สุด',
    instructionsEn:
      'Match each quantitative risk or BIA scenario to the most accurate risk response strategy or recovery metric.',
    instructionsTh:
      'จับคู่สถานการณ์ความเสี่ยงเชิงปริมาณหรือ BIA แต่ละข้อเข้ากับกลยุทธ์การตอบสนองหรือตัวชี้วัดที่ถูกต้องที่สุด',
    config: {
      template: 'matching-matrix',
      rows: [
        {
          id: 'r1',
          promptEn:
            'A payment gateway valued at $120,000 faces an outage risk with a 50% Exposure Factor occurring once every 4 years (ARO = 0.25). A technical safeguard costing $6,000/year reduces the expected annual loss from $15,000 to $1,500.',
          promptTh:
            'ระบบรับชำระเงินมูลค่า $120,000 เผชิญความเสี่ยงเหตุขัดข้องที่มี Exposure Factor 50% เกิดขึ้น 1 ครั้งในทุก 4 ปี (ARO = 0.25) มาตรการควบคุมทางเทคนิคมีค่าใช้จ่าย $6,000/ปี และช่วยลดความเสียหายคาดการณ์ต่อปีจาก $15,000 เหลือ $1,500'
        },
        {
          id: 'r2',
          promptEn:
            'After implementing baseline defenses, executive leadership purchases a Cyber Insurance policy to cover breach notification costs, legal defense expenses, and regulatory fines if a major incident still occurs.',
          promptTh:
            'หลังจากติดตั้งระบบป้องกันพื้นฐานแล้ว ฝ่ายบริหารตัดสินใจทำประกันภัยไซเบอร์ (Cyber Insurance) เพื่อรองรับค่าใช้จ่ายในการแจ้งเตือนเหตุละเมิด ค่าทนายความ และค่าปรับหากเกิดเหตุการณ์ร้ายแรงขึ้นจริง'
        },
        {
          id: 'r3',
          promptEn:
            'A legacy factory controller cannot be upgraded to modern TLS until scheduled decommissioning in 6 months. The Risk Owner signs a time-bound policy waiver with an explicit expiration date while isolating the host on a restricted VLAN.',
          promptTh:
            'เครื่องควบคุมสายการผลิตรุ่นเก่าไม่สามารถอัปเกรดเป็น TLS รุ่นใหม่ได้จนกว่าจะปลดระวางในอีก 6 เดือนข้างหน้า Risk Owner จึงลงนามอนุมัติการผ่อนผันนโยบายแบบมีวันหมดอายุชัดเจน ควบคู่กับการแยกวง VLAN จำกัดการเข้าถึง'
        },
        {
          id: 'r4',
          promptEn:
            'During BIA interviews, the payroll director specifies that after a storage failure, the organization can tolerate losing at most 15 minutes of recent transactions, mandating database replication every 15 minutes.',
          promptTh:
            'ในการสัมภาษณ์เพื่อทำ BIA ผู้อำนวยการฝ่ายบัญชีเงินเดือนระบุว่าหากระบบจัดเก็บข้อมูลล้มเหลว องค์กรยอมให้ข้อมูลธุรกรรมล่าสุดสูญหายได้ไม่เกิน 15 นาที จึงต้องทำ Replication ข้อมูลอย่างน้อยทุก 15 นาที'
        }
      ],
      options: [
        {
          id: 'opt-mitigate',
          labelEn: 'Risk Mitigation (Deploy cost-effective safeguard)',
          labelTh: 'Risk Mitigation (ติดตั้งมาตรการควบคุมที่คุ้มค่าเพื่อลดความเสี่ยง)'
        },
        {
          id: 'opt-transfer',
          labelEn: 'Risk Transference (Shift financial impact via third party)',
          labelTh: 'Risk Transference (โอนย้ายภาระความเสียหายทางการเงินไปยังบุคคลที่สาม)'
        },
        {
          id: 'opt-accept-exc',
          labelEn: 'Risk Acceptance with Exception (Time-bound formal waiver)',
          labelTh: 'Risk Acceptance with Exception (การยอมรับและผ่อนผันชั่วคราวแบบมีกำหนดเวลา)'
        },
        {
          id: 'opt-avoid',
          labelEn: 'Risk Avoidance (Discontinue system or activity entirely)',
          labelTh: 'Risk Avoidance (ยุติระบบหรือกิจกรรมที่เป็นต้นตอความเสี่ยงทั้งหมด)'
        },
        {
          id: 'opt-rpo',
          labelEn: 'Recovery Point Objective (RPO)',
          labelTh: 'Recovery Point Objective (RPO)'
        },
        {
          id: 'opt-rto',
          labelEn: 'Recovery Time Objective (RTO)',
          labelTh: 'Recovery Time Objective (RTO)'
        }
      ],
      expectedMatches: {
        r1: 'opt-mitigate',
        r2: 'opt-transfer',
        r3: 'opt-accept-exc',
        r4: 'opt-rpo'
      }
    },
    rubric: [
      {
        id: 'r1',
        descriptionTh:
          'วิเคราะห์ SLE = $60,000, ALE = $15,000 และความคุ้มค่าสุทธิที่เป็นบวก (+$7,500/ปี) เพื่อเลือก Risk Mitigation ถูกต้อง',
        weight: 0.25
      },
      {
        id: 'r2',
        descriptionTh:
          'จับคู่การใช้ Cyber Insurance เพื่อแบ่งเบาภาระทางการเงินกับ Risk Transference ถูกต้อง',
        weight: 0.25
      },
      {
        id: 'r3',
        descriptionTh:
          'จับคู่การผ่อนผันชั่วคราวมีวันหมดอายุโดย Risk Owner กับ Risk Acceptance with Exception ถูกต้อง',
        weight: 0.25
      },
      {
        id: 'r4',
        descriptionTh:
          'จับคู่เพดานข้อมูลที่ยอมให้สูญหายได้ (15 นาที) กับ Recovery Point Objective (RPO) ถูกต้อง',
        weight: 0.25
      }
    ],
    explanationTh:
      '1) ค่า SLE = $120,000 × 50% = $60,000 และ ALE ก่อนป้องกัน = $60,000 × 0.25 = $15,000/ปี เมื่อมาตรการราคา $6,000/ปี ลด ALE เหลือ $1,500 จะได้ความคุ้มค่าสุทธิ ($15,000 - $1,500) - $6,000 = +$7,500/ปี จึงคุ้มค่าที่จะทำ Risk Mitigation (ไม่จำเป็นต้องยุติบริการด้วย Risk Avoidance) 2) Cyber Insurance จัดเป็น Risk Transference โดยโอนย้ายภาระค่าใช้จ่ายเยียวยาบางส่วนให้บริษัทประกัน แต่องค์กรยังคงรับผิดชอบด้านชื่อเสียงและการกำกับดูแล 3) การขอผ่อนผันชั่วคราว 6 เดือนที่มีวันหมดอายุและลายเซ็น Risk Owner คือ Exception ภายใต้ Risk Acceptance (ต่างจาก Exemption ที่ยกเว้นถาวร/อยู่นอกขอบเขต) 4) ระยะเวลาสูงสุดของข้อมูลที่ยอมให้สูญหายได้ (และกำหนดความถี่ Replication/Backup) คือ RPO ส่วน RTO ใช้วัดระยะเวลาสูงสุดที่ระบบหยุดชะงักได้',
    misconceptionTh:
      'ผู้เรียนมักจำสลับระหว่าง RPO (ปริมาณข้อมูลที่หายได้) กับ RTO (เวลา Downtime สูงสุดของระบบ), คิดว่า Cyber Insurance โอนความรับผิดชอบทางกฎหมายและชื่อเสียงทั้งหมดได้ หรือสับสนระหว่าง Exception ชั่วคราวกับการหลีกเลี่ยงความเสี่ยง (Avoidance)',
    relatedLessonIds: ['L5-02', 'L5-03'],
    tags: ['pbq', 'matching-matrix', 'sle-ale', 'risk-strategies', 'bia', 'rpo-rto']
  },
  {
    id: 'PBQ-D5-02',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.3'],
    difficulty: 'intermediate',
    titleEn: 'Third-Party Risk Management & Vendor Agreements',
    titleTh: 'การเลือกใช้สัญญาและหลักฐานประเมินความเสี่ยงบุคคลที่สาม',
    scenarioEn:
      'A financial services organization is onboarding external technology partners and cloud suppliers. Match each third-party risk management or procurement scenario to the appropriate agreement or vendor assessment artifact.',
    scenarioTh:
      'องค์กรบริการทางการเงินกำลังคัดเลือกและทำสัญญากับพันธมิตรเทคโนโลยีและผู้ให้บริการคลาวด์ จงจับคู่สถานการณ์บริหารความเสี่ยงบุคคลที่สามแต่ละข้อกับเอกสารข้อตกลงหรือหลักฐานประเมินที่ถูกต้องที่สุด',
    instructionsEn:
      'Select the best matching agreement or assessment artifact for each vendor management scenario.',
    instructionsTh:
      'เลือกประเภทสัญญาหรือหลักฐานการประเมินที่เหมาะสมที่สุดสำหรับแต่ละสถานการณ์',
    config: {
      template: 'matching-matrix',
      rows: [
        {
          id: 'r1',
          promptEn:
            'Before sharing proprietary network topologies, API specifications, and security requirements during vendor due diligence, legal mandates a contract prohibiting disclosure to outside parties.',
          promptTh:
            'ก่อนเปิดเผยแผนผังเครือข่ายเฉพาะขององค์กร รายละเอียด API และข้อกำหนดความปลอดภัยให้ผู้ให้บริการระหว่างการคัดเลือก ฝ่ายกฎหมายกำหนดให้ทำข้อตกลงห้ามนำข้อมูลไปเปิดเผยต่อบุคคลภายนอก'
        },
        {
          id: 'r2',
          promptEn:
            'Operations requires an enforceable commitment guaranteeing 99.95% monthly uptime, a 15-minute critical incident response time, and financial service credits when targets are missed.',
          promptTh:
            'ฝ่ายปฏิบัติการต้องการข้อตกลงที่กำหนดตัวชี้วัดชัดเจน รับประกันความพร้อมใช้งาน 99.95% ต่อเดือน เวลาตอบสนองเหตุวิกฤตภายใน 15 นาที และมีเครดิตชดเชยเมื่อผู้ให้บริการทำไม่ได้ตามเกณฑ์'
        },
        {
          id: 'r3',
          promptEn:
            'Procurement signs one multi-year baseline contract governing liability, governing law, and breach notification terms with a security vendor, then issues a project-specific attachment defining deliverables and fees for a Q3 penetration test.',
          promptTh:
            'ฝ่ายจัดซื้อลงนามสัญญาแม่บทระยะยาวที่กำหนดความรับผิด กฎหมายที่ใช้บังคับ และการแจ้งเหตุละเมิดเพียงฉบับเดียว แล้วออกเอกสารแนบเฉพาะโครงการเพื่อระบุผลส่งมอบและค่าตอบแทนสำหรับงานทดสอบเจาะระบบไตรมาส 3'
        },
        {
          id: 'r4',
          promptEn:
            'Instead of relying solely on a vendor’s self-reported questionnaire, the risk team requires an independent third-party auditor’s attestation verifying that security controls operated effectively over the past 12 months.',
          promptTh:
            'แทนการพึ่งพาแบบสอบถามที่ผู้ให้บริการกรอกประเมินตนเองเพียงอย่างเดียว ทีมบริหารความเสี่ยงร้องขอรายงานจากผู้ตรวจสอบอิสระภายนอกเพื่อยืนยันว่ามาตรการควบคุมทำงานได้ผลจริงตลอดรอบ 12 เดือนที่ผ่านมา'
        }
      ],
      options: [
        {
          id: 'nda',
          labelEn: 'Non-Disclosure Agreement (NDA)',
          labelTh: 'Non-Disclosure Agreement (NDA)'
        },
        {
          id: 'sla',
          labelEn: 'Service Level Agreement (SLA)',
          labelTh: 'Service Level Agreement (SLA)'
        },
        {
          id: 'msa-sow',
          labelEn: 'Master Service Agreement (MSA) + Statement of Work (SOW)',
          labelTh: 'Master Service Agreement (MSA) + Statement of Work (SOW)'
        },
        {
          id: 'mou',
          labelEn: 'Memorandum of Understanding (MOU)',
          labelTh: 'Memorandum of Understanding (MOU)'
        },
        {
          id: 'moa',
          labelEn: 'Memorandum of Agreement (MOA)',
          labelTh: 'Memorandum of Agreement (MOA)'
        },
        {
          id: 'right-to-audit',
          labelEn: 'Right-to-Audit Clause',
          labelTh: 'ข้อกำหนดสิทธิ์การตรวจสอบ (Right-to-Audit Clause)'
        },
        {
          id: 'soc2-type2',
          labelEn: 'SOC 2 Type II Independent Assessment',
          labelTh: 'รายงานการประเมินอิสระ SOC 2 Type II'
        }
      ],
      expectedMatches: {
        r1: 'nda',
        r2: 'sla',
        r3: 'msa-sow',
        r4: 'soc2-type2'
      }
    },
    rubric: [
      {
        id: 'r1',
        descriptionTh:
          'ระบุ Non-Disclosure Agreement (NDA) สำหรับคุ้มครองความลับช่วงคัดเลือกผู้ให้บริการถูกต้อง',
        weight: 0.25
      },
      {
        id: 'r2',
        descriptionTh:
          'ระบุ Service Level Agreement (SLA) สำหรับตัวชี้วัด Uptime, เวลาตอบสนอง และบทลงโทษถูกต้อง',
        weight: 0.25
      },
      {
        id: 'r3',
        descriptionTh:
          'ระบุ MSA (สัญญาแม่บทระยะยาว) + SOW (ขอบเขตและผลส่งมอบเฉพาะโครงการ) ถูกต้อง',
        weight: 0.25
      },
      {
        id: 'r4',
        descriptionTh:
          'ระบุ SOC 2 Type II Independent Assessment สำหรับการตรวจสอบประสิทธิผลต่อเนื่องโดยผู้ตรวจอิสระถูกต้อง',
        weight: 0.25
      }
    ],
    explanationTh:
      '1) NDA ใช้ปกป้องข้อมูลลับทางเทคนิคและธุรกิจตั้งแต่ขั้นเจรจา Due Diligence ก่อนเปิดเผยรายละเอียดภายในให้คู่ค้า 2) SLA กำหนดตัวชี้วัดระดับบริการเชิงตัวเลข (เช่น Uptime 99.95%, เวลาตอบสนอง 15 นาที) พร้อมเงื่อนไขชดเชยเมื่อต่ำกว่าเกณฑ์ 3) MSA วางกติกาทางกฎหมายและความรับผิดหลักระยะยาวเพื่อไม่ต้องเจรจาซ้ำทุกโครงการ ส่วน SOW/WO ระบุขอบเขตงาน Deliverables กำหนดส่ง และราคาเฉพาะโครงการย่อย 4) SOC 2 Type II เป็น Independent Assessment ที่ผู้ตรวจอิสระทดสอบประสิทธิผลจริงของมาตรการควบคุมต่อเนื่องตลอดช่วงเวลา (เช่น 12 เดือน) ซึ่งน่าเชื่อถือกว่าแบบสอบถามที่ Vendor ตอบเอง ส่วน Right-to-Audit เป็นข้อสัญญาให้สิทธิ์องค์กรเข้าไปตรวจผู้ให้บริการได้โดยตรง, MOU แสดงเจตนารมณ์ร่วมมือเบื้องต้นในภาพกว้าง และ MOA ลงรายละเอียดหน้าที่และทรัพยากรที่แบ่งปันกันชัดเจนกว่า MOU',
    misconceptionTh:
      'ผู้สอบมักสับสนระหว่าง MOU (เจตนารมณ์กว้างๆ) กับ MOA (ระบุหน้าที่และทรัพยากรชัดเจนกว่า), สับสนระหว่าง MSA กับ SOW และเลือก Right-to-Audit แทน SOC 2 Type II เมื่อโจทย์ระบุถึงรายงานการตรวจอิสระย้อนหลัง 12 เดือน',
    relatedLessonIds: ['L5-04'],
    tags: ['pbq', 'matching-matrix', 'tprm', 'agreements', 'soc2', 'sla', 'nda']
  },
  {
    id: 'PBQ-D5-03',
    examCode: 'SY0-701',
    domainId: 'D5',
    objectiveIds: ['5.6'],
    difficulty: 'intermediate',
    titleEn: 'Security Awareness Phishing Program & Suspicious Report Triage',
    titleTh: 'ลำดับโครงการจำลองฟิชชิงและการรับมือเมื่อพนักงานรายงานอีเมลต้องสงสัย',
    scenarioEn:
      'Your organization is launching a formal Security Awareness and Phishing Simulation Program across hybrid and on-site staff. During rollout, an accounting clerk flags an urgent wire-transfer request claiming to be from the CFO using a lookalike domain.',
    scenarioTh:
      'องค์กรกำลังเปิดตัวโครงการสร้างความตระหนักรู้และจำลองฟิชชิงอย่างเป็นระบบสำหรับพนักงานทั้งแบบไฮบริดและในสำนักงาน ระหว่างการดำเนินโครงการ พนักงานฝ่ายบัญชีรายงานอีเมลด่วนที่อ้างตัวเป็น CFO สั่งโอนเงินโดยใช้ชื่อโดเมนที่คล้ายของจริง',
    instructionsEn:
      'Arrange the four stages of launching and measuring the phishing awareness program in chronological order, then select the appropriate response to the employee’s suspicious email report.',
    instructionsTh:
      'เรียงลำดับ 4 ขั้นตอนของการจัดทำและวัดผลโครงการจำลองฟิชชิงตามลำดับเวลา แล้วเลือกแนวทางการตอบสนองต่อรายงานอีเมลต้องสงสัยของพนักงาน',
    config: {
      template: 'sequence-and-triage',
      sequencePromptEn:
        'Order the 4 stages of launching and measuring a Security Awareness Phishing Simulation Program from FIRST (1) to LAST (4):',
      sequencePromptTh:
        'เรียงลำดับ 4 ขั้นตอนในการเปิดตัวและวัดผลโครงการจำลองฟิชชิงจากขั้นแรก (1) ไปขั้นสุดท้าย (4):',
      steps: [
        {
          id: 'p3-execute-sim',
          labelEn:
            'Execute recurring authorized phishing simulations with immediate just-in-time coaching when users click',
          labelTh:
            'ดำเนินแคมเปญจำลองฟิชชิงที่ได้รับอนุญาตเป็นระยะ พร้อมแสดงหน้าจอสอนความรู้ทันทีเมื่อผู้ใช้คลิก'
        },
        {
          id: 'p1-develop',
          labelEn:
            'Develop role-based awareness content, acceptable use handbooks, and approved phishing simulation guidelines',
          labelTh:
            'พัฒนาเนื้อหาการอบรมตามบทบาท คู่มือนโยบายที่เข้าใจง่าย และกติกาการจำลองฟิชชิงที่ได้รับอนุมัติ'
        },
        {
          id: 'p4-measure-remediate',
          labelEn:
            'Analyze recurring click/reporting metrics, deliver non-punitive targeted remedial training, and update program materials',
          labelTh:
            'วิเคราะห์ตัวชี้วัดการคลิกและการรายงานต่อเนื่อง จัดอบรมซ่อมเสริมเฉพาะกลุ่มโดยไม่ลงโทษประจาน และปรับปรุงเนื้อหาโครงการ'
        },
        {
          id: 'p2-initial',
          labelEn:
            'Deliver initial baseline awareness training (and onboarding for new hires) to establish baseline phishing recognition and reporting behavior',
          labelTh:
            'จัดการอบรมสร้างความตระหนักรู้พื้นฐานระยะเริ่มต้น (รวมถึงช่วงเริ่มงานของพนักงานใหม่) เพื่อสร้างค่า Baseline ด้านการสังเกตและรายงานอีเมลฟิชชิง'
        }
      ],
      expectedOrder: [
        'p1-develop',
        'p2-initial',
        'p3-execute-sim',
        'p4-measure-remediate'
      ],
      triageDecision: {
        promptEn:
          'How should the security team and accounting clerk respond to the reported urgent wire-transfer email from the lookalike domain?',
        promptTh:
          'ทีมความปลอดภัยและพนักงานบัญชีควรดำเนินการกับอีเมลสั่งโอนเงินเร่งด่วนจากโดเมนที่ดูคล้ายของจริงซึ่งได้รับรายงานนี้อย่างไร?',
        choices: [
          {
            id: 'c1',
            textEn:
              'Reply directly to the sender email address in the message to ask the CFO whether the transfer is legitimate',
            textTh:
              'ตอบกลับไปยังอีเมลผู้ส่งในข้อความดังกล่าวโดยตรงเพื่อสอบถาม CFO ว่าคำสั่งโอนเงินเป็นของจริงหรือไม่'
          },
          {
            id: 'c2',
            textEn:
              'Forward the original email and attachments to all accounting team members so they can inspect it themselves',
            textTh:
              'ส่งต่ออีเมลต้นฉบับและไฟล์แนบให้พนักงานฝ่ายบัญชีทุกคนเปิดตรวจสอบด้วยตนเอง'
          },
          {
            id: 'c3',
            textEn:
              'Verify the request out-of-band via a known trusted phone number, analyze and purge matching messages across mailboxes, and acknowledge the clerk positively',
            textTh:
              'ตรวจสอบคำขอแบบ Out-of-band ผ่านเบอร์โทรทางการที่เชื่อถือได้ วิเคราะห์และลบอีเมลแบบเดียวกันออกจากกล่องจดหมายอื่นทั้งหมด พร้อมตอบกลับขอบคุณผู้รายงาน'
          },
          {
            id: 'c4',
            textEn:
              'Dismiss the report as a likely simulation test and issue a formal disciplinary warning if the clerk clicked any link',
            textTh:
              'เพิกเฉยต่อรายงานเพราะคาดว่าเป็นการทดสอบจำลอง และออกหนังสือตักเตือนทางวินัยหากพนักงานเผลอคลิกลิงก์'
          }
        ],
        expectedChoiceId: 'c3'
      }
    },
    rubric: [
      {
        id: 'pos-1',
        descriptionTh: 'ลำดับที่ 1: พัฒนาหลักสูตรตามบทบาท คู่มือ และกติกาแคมเปญ (Development)',
        weight: 0.15
      },
      {
        id: 'pos-2',
        descriptionTh: 'ลำดับที่ 2: อบรมเบื้องต้นช่วง Onboarding เพื่อสร้างค่า Baseline (Initial)',
        weight: 0.15
      },
      {
        id: 'pos-3',
        descriptionTh: 'ลำดับที่ 3: ดำเนินแคมเปญจำลองฟิชชิงต่อเนื่องพร้อม Just-in-time Training (Execution)',
        weight: 0.15
      },
      {
        id: 'pos-4',
        descriptionTh: 'ลำดับที่ 4: วัดผลซ้ำ อบรมซ่อมเสริมแบบสร้างสรรค์ และปรับปรุงหลักสูตร (Recurring Monitoring)',
        weight: 0.15
      },
      {
        id: 'triage',
        descriptionTh:
          'เลือกยืนยันแบบ Out-of-band, วิเคราะห์/Purge อีเมลข้ามกล่องจดหมาย และเสริมแรงทางบวกให้ผู้แจ้ง',
        weight: 0.4
      }
    ],
    explanationTh:
      'โครงการสร้างความตระหนักรู้และ Phishing Simulation ต้องเดินตามวงจร: (1) Development ออกแบบเนื้อหาตามบทบาทและกติกาแคมเปญที่ได้รับอนุญาต, (2) Initial Training ช่วงเริ่มงานเพื่อสร้าง Baseline, (3) Execution ส่งอีเมลจำลองเป็นระยะพร้อม Just-in-time coaching เมื่อผู้ใช้พลาด และ (4) Recurring Monitoring วัดผลอัตราการคลิกและรายงาน จัดอบรมซ่อมเสริมแบบสร้างสรรค์ไม่ประจาน และปรับปรุงเนื้อหา สำหรับเหตุการณ์ BEC จากโดเมนคล้ายของจริง (Typosquatting) ต้องยืนยันคำขอโอนเงินแบบ Out-of-band (เช่น โทรกลับเบอร์ทางการที่รู้จักอยู่แล้ว ไม่ใช่ตอบกลับในอีเมลเดิมที่ผู้โจมตีควบคุม) ทีม SOC ต้องวิเคราะห์ Email Header/ลิงก์/ไฟล์แนบใน Sandbox และลบอีเมลเดียวกันออกจากกล่องจดหมายพนักงานคนอื่น (Purge) พร้อมตอบขอบคุณผู้แจ้งเพื่อรักษาแรงจูงใจในการรายงานเหตุ',
    misconceptionTh:
      'พนักงานมักยืนยันคำขอโดยการกด Reply กลับไปในอีเมลเดิม (ซึ่งเท่ากับถามผู้โจมตีโดยตรง) หรือทีมงานละเลยการขอบคุณผู้แจ้งและใช้มาตรการลงโทษจนพนักงานไม่กล้ารายงานเหตุต้องสงสัยในอนาคต',
    relatedLessonIds: ['L5-07'],
    tags: ['pbq', 'sequence-and-triage', 'security-awareness', 'phishing', 'bec', 'out-of-band']
  }
];
