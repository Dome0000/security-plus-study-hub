import type { Question } from '../../types';

export const Q_D2_B1: Question[] = [
  {
    id: 'Q2-001',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A telecommunications utility discovers covert, year-long unauthorized access inside its core engineering network using bespoke tools to quietly copy satellite antenna designs without service outages or ransom notes. Which threat actor and motivation MOST likely describe this activity?',
    promptTh:
      'บริษัทสาธารณูปโภคด้านโทรคมนาคมตรวจพบการเข้าถึงเครือข่ายวิศวกรรมหลักโดยไม่ได้รับอนุญาตอย่างเงียบเชียบมานานกว่าหนึ่งปี โดยใช้เครื่องมือเฉพาะทางเพื่อคัดลอกแบบแผนเสาอากาศดาวเทียมอย่างต่อเนื่องโดยไม่ทำให้ระบบล่มและไม่มีการเรียกค่าไถ่ ผู้กระทำภัยคุกคามและแรงจูงใจใดตรงกับเหตุการณ์นี้มากที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Organized crime motivated by financial gain',
        textTh: 'กลุ่มอาชญากรรมไซเบอร์ที่มีแรงจูงใจด้านผลประโยชน์ทางการเงิน'
      },
      {
        id: 'c2',
        textEn: 'Hacktivist motivated by philosophical beliefs',
        textTh: 'นักเคลื่อนไหวเชิงอุดมการณ์ที่มีแรงจูงใจด้านความเชื่อทางปรัชญา'
      },
      {
        id: 'c3',
        textEn: 'Nation-state motivated by espionage',
        textTh: 'ผู้โจมตีที่รัฐสนับสนุนที่มีแรงจูงใจด้านการจารกรรม'
      },
      {
        id: 'c4',
        textEn: 'Unskilled attacker motivated by disruption and chaos',
        textTh: 'ผู้โจมตีที่ขาดทักษะที่มีแรงจูงใจด้านการสร้างความปั่นป่วน'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'การแฝงตัวระยะยาวด้วยเครื่องมือเฉพาะทางโดยไม่เรียกร้องเงินและมุ่งขโมยความลับโครงสร้างพื้นฐานสำคัญเป็นรูปแบบเด่นของ Nation-state เพื่อการจารกรรม (Espionage)',
    choiceRationales: {
      c1: 'ผิด: Organized crime มุ่งเน้นการทำเงินหรือขู่กรรโชกมากกว่าการจารกรรมแบบเงียบระยะยาว เหมาะกับเหตุการณ์ Ransomware หรือขายข้อมูล',
      c2: 'ผิด: Hacktivist มักเปิดเผยตัวเพื่อสื่อสารอุดมการณ์และทำให้บริการชะงัก เหมาะกับเหตุการณ์เปลี่ยนหน้าเว็บหรือ DDoS เชิงสัญลักษณ์',
      c3: 'ถูก: การปฏิบัติการแฝงตัวระดับสูงอย่างต่อเนื่องเพื่อขโมยข้อมูลยุทธศาสตร์โดยไม่ทำลายระบบสะท้อนทรัพยากรและเป้าหมายของ Nation-state และ Espionage',
      c4: 'ผิด: Unskilled attacker ขาดทักษะสร้างเครื่องมือเฉพาะและมักทิ้งร่องรอยชัดเจน เหมาะกับเหตุการณ์รันสคริปต์สาธารณะก่อกวนทั่วไป'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนสับสนระหว่างการขโมยข้อมูลเชิงพาณิชย์ของกลุ่มอาชญากรรมกับการจารกรรมยุทธศาสตร์ระยะยาวโดยรัฐ',
    relatedLessonIds: ['L2-01'],
    tags: ['threat-actors', 'nation-state', 'espionage']
  },
  {
    id: 'Q2-002',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'To meet an urgent campaign deadline, marketing specialists register personal accounts on an unapproved online video-compression and sharing service and upload internal product launch files without informing IT security. Under SY0-701, which threat actor category applies to this scenario?',
    promptTh:
      'เพื่อให้ทันกำหนดส่งงานแคมเปญเร่งด่วน พนักงานฝ่ายการตลาดสมัครบัญชีส่วนตัวบนบริการบีบอัดและแชร์วิดีโอออนไลน์ที่ไม่ได้รับอนุมัติ แล้วอัปโหลดไฟล์เปิดตัวสินค้าภายในองค์กรขึ้นไปใช้งานโดยไม่แจ้งฝ่ายความปลอดภัยไอที ตามเกณฑ์ SY0-701 เหตุการณ์นี้จัดอยู่ในกลุ่มผู้กระทำภัยคุกคามใด?',
    choices: [
      { id: 'c1', textEn: 'Shadow IT', textTh: 'Shadow IT' },
      { id: 'c2', textEn: 'Malicious insider', textTh: 'บุคคลภายในที่มีเจตนาร้าย (Malicious insider)' },
      { id: 'c3', textEn: 'Hacktivist', textTh: 'Hacktivist' },
      { id: 'c4', textEn: 'Organized crime', textTh: 'กลุ่มอาชญากรรมไซเบอร์ (Organized crime)' }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'บุคลากรภายในที่นำบริการหรือซอฟต์แวร์นอกระบบกำกับดูแลมาใช้งานเพื่อความสะดวกโดยไม่มีเจตนาร้ายจัดเป็น Shadow IT ซึ่งทำให้องค์กรสูญเสียการควบคุมข้อมูล',
    choiceRationales: {
      c1: 'ถูก: Shadow IT เกิดจากพนักงานใช้เครื่องมือภายนอกที่ไม่ได้รับอนุมัติเพื่อเร่งการทำงาน ทำให้เกิดจุดบอดด้านการปกป้องข้อมูล',
      c2: 'ผิด: พนักงานไม่ได้มีเจตนาทำลายหรือขโมยขายข้อมูล เหมาะกับกรณีอดีตหรือพนักงานปัจจุบันที่จงใจขโมยข้อมูลหรือก่อวินาศกรรม',
      c3: 'ผิด: Hacktivist เป็นกลุ่มเคลื่อนไหวทางอุดมการณ์จากภายนอก เหมาะกับการโจมตีเชิงสัญลักษณ์ต่อองค์กรที่ไม่เห็นด้วย',
      c4: 'ผิด: Organized crime เป็นเครือข่ายภายนอกที่มุ่งหวังผลกำไรผิดกฎหมาย เหมาะกับขบวนการฉ้อโกงหรือเรียกค่าไถ่'
    },
    misconceptionTh:
      'มักเข้าใจผิดว่า Shadow IT เป็นเพียงปัญหาการปฏิบัติตามระเบียบของแผนกไอที ไม่ใช่ Threat Actor ที่สร้างความเสี่ยงข้อมูลรั่วไหล',
    relatedLessonIds: ['L2-01'],
    tags: ['threat-actors', 'shadow-it']
  },
  {
    id: 'Q2-003',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'A staging web server exposed with a known vulnerability and vendor default credentials is compromised within hours. Logs show automated scanning from public scripts, noisy failed commands, and erratic homepage alterations with no structured data theft. Which actor profile BEST matches this activity?',
    promptTh:
      'เซิร์ฟเวอร์เว็บทดสอบที่เปิดเผยช่องโหว่ซึ่งเป็นที่รู้จักและยังใช้รหัสผ่านเริ่มต้นจากผู้ผลิตถูกเจาะระบบภายในไม่กี่ชั่วโมง บันทึกการทำงานพบการสแกนอัตโนมัติด้วยสคริปต์สาธารณะ คำสั่งที่ผิดพลาดซ้ำๆ และการแก้ไขหน้าแรกอย่างสะเปะสะปะโดยไม่มีการขโมยข้อมูลอย่างเป็นระบบ โปรไฟล์ผู้โจมตีใดสอดคล้องกับเหตุการณ์นี้มากที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Nation-state with high funding and sophistication',
        textTh: 'ผู้โจมตีระดับรัฐที่มีเงินทุนและความซับซ้อนสูง'
      },
      {
        id: 'c2',
        textEn: 'Organized crime focused on targeted blackmail',
        textTh: 'กลุ่มอาชญากรรมไซเบอร์ที่มุ่งข่มขู่กรรโชกแบบเจาะจง'
      },
      {
        id: 'c3',
        textEn: 'Shadow IT attempting to bypass IT change approval',
        textTh: 'Shadow IT ที่พยายามหลีกเลี่ยงการอนุมัติเปลี่ยนแปลงระบบ'
      },
      {
        id: 'c4',
        textEn: 'Unskilled attacker with low resources and sophistication',
        textTh: 'ผู้โจมตีที่ขาดทักษะซึ่งมีทรัพยากรและความซับซ้อนต่ำ'
      }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'การใช้สคริปต์สำเร็จรูปโจมตีจุดอ่อนพื้นฐานจนเกิดร่องรอยเสียงดังโดยไร้เป้าหมายเชิงลึกแสดงถึงระดับความสามารถและทรัพยากรต่ำของ Unskilled attacker',
    choiceRationales: {
      c1: 'ผิด: Nation-state ใช้เทคนิคซับซ้อนและเก็บตัวเงียบ เหมาะกับการแฝงตัวระยะยาวในระบบสำคัญ',
      c2: 'ผิด: Organized crime มุ่งรีดไถหรือนำข้อมูลไปทำเงินอย่างเป็นระบบ เหมาะกับปฏิบัติการเรียกค่าไถ่แบบแบ่งงานชัดเจน',
      c3: 'ผิด: Shadow IT เกิดจากคนในที่ต้องการใช้งานเครื่องมือเพื่อทำงาน เหมาะกับการเปิดบริการคลาวด์ส่วนตัวภายในองค์กร',
      c4: 'ถูก: Unskilled attacker พึ่งพาเครื่องมือสำเร็จรูปและมักโจมตีเป้าหมายที่ขาดการแพตช์หรือใช้รหัสผ่านเริ่มต้นเพื่อก่อกวนหรือลองวิชา'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนประเมินความอันตรายของ Unskilled attacker ต่ำเกินไป ทั้งที่ระบบที่ขาด Hardening พื้นฐานตกเป็นเหยื่อได้ทันที',
    relatedLessonIds: ['L2-01'],
    tags: ['threat-actors', 'unskilled-attacker', 'attributes']
  },
  {
    id: 'Q2-004',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.1'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'An organized syndicate exfiltrates patient billing records, encrypts hospital servers, and demands cryptocurrency while threatening to publish sensitive diagnoses online if unpaid. Which TWO motivations are MOST directly demonstrated? (Choose two.)',
    promptTh:
      'กลุ่มผู้โจมตีที่มีการจัดตั้งลักลอบนำข้อมูลใบแจ้งหนี้ผู้ป่วยออกนอกระบบ เข้ารหัสเซิร์ฟเวอร์โรงพยาบาล และเรียกร้องเงินดิจิทัลพร้อมขู่ว่าจะเผยแพร่ประวัติการรักษาต่อสาธารณะหากไม่ชำระเงิน แรงจูงใจ 2 ข้อใดปรากฏชัดเจนที่สุดในเหตุการณ์นี้? (เลือก 2 ข้อ)',
    choices: [
      { id: 'c1', textEn: 'War', textTh: 'สงครามไซเบอร์ (War)' },
      { id: 'c2', textEn: 'Financial gain', textTh: 'ผลประโยชน์ทางการเงิน (Financial gain)' },
      { id: 'c3', textEn: 'Ethical disclosure', textTh: 'แรงจูงใจเชิงจริยธรรม (Ethical)' },
      {
        id: 'c4',
        textEn: 'Philosophical/political beliefs',
        textTh: 'ความเชื่อทางปรัชญาและการเมือง (Philosophical/political beliefs)'
      },
      { id: 'c5', textEn: 'Blackmail', textTh: 'การข่มขู่กรรโชก (Blackmail)' }
    ],
    correctChoiceIds: ['c2', 'c5'],
    explanationTh:
      'การเรียกร้องเงินแลกกับการไม่เปิดเผยข้อมูลลับและการปลดล็อกระบบเป็นการผสมผสานระหว่าง Financial gain (มุ่งได้เงิน) และ Blackmail (ขู่กรรโชกบีบบังคับ)',
    choiceRationales: {
      c1: 'ผิด: ไม่มีบริบทความขัดแย้งทางภูมิรัฐศาสตร์ระหว่างประเทศ เหมาะกับปฏิบัติการทำลายโครงสร้างพื้นฐานระหว่างรัฐ',
      c2: 'ถูก: การเรียกร้องสกุลเงินดิจิทัลสะท้อนเป้าหมาย Financial gain ของกลุ่มอาชญากรรมไซเบอร์โดยตรง',
      c3: 'ผิด: การขู่เรียกค่าไถ่ขัดกับหลักจริยธรรม เหมาะกับกรณีรายงานช่องโหว่หรือเปิดโปงการทุจริตโดยไม่แสวงหาค่าตอบแทน',
      c4: 'ผิด: ไม่มีการเคลื่อนไหวทางอุดมการณ์หรือการเมือง เหมาะกับการประท้วงเชิงสัญลักษณ์ของ Hacktivist',
      c5: 'ถูก: การขู่เปิดเผยข้อมูลผู้ป่วยเพื่อบีบให้ยอมทำตามข้อเรียกร้องคือพฤติกรรม Blackmail หรือการกรรโชกชัดเจน'
    },
    misconceptionTh:
      'บางครั้งผู้เรียนเลือกเพียง Financial gain โดยมองข้าม Blackmail เมื่อผู้โจมตีใช้ความลับเป็นตัวประกันกดดันซ้ำซ้อน',
    relatedLessonIds: ['L2-01'],
    tags: ['motivations', 'organized-crime', 'blackmail']
  },
  {
    id: 'Q2-005',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'After an environmental agency approves offshore drilling permits, an external collective overwhelms the agency public portal with traffic to block permit filings and posts protest manifestos across social platforms. Which motivation BEST drives this threat actor?',
    promptTh:
      'หลังจากหน่วยงานสิ่งแวดล้อมอนุมัติใบอนุญาตขุดเจาะนอกชายฝั่ง กลุ่มผู้โจมตีภายนอกได้ส่งทราฟฟิกจำนวนมากถล่มพอร์ทัลสาธารณะของหน่วยงานเพื่อขัดขวางการยื่นคำร้อง พร้อมเผยแพร่แถลงการณ์ประท้วงบนสื่อสังคมออนไลน์ แรงจูงใจใดขับเคลื่อนผู้กระทำภัยคุกคามนี้มากที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Espionage', textTh: 'การจารกรรม (Espionage)' },
      {
        id: 'c2',
        textEn: 'Philosophical/political beliefs',
        textTh: 'ความเชื่อทางปรัชญาและการเมือง (Philosophical/political beliefs)'
      },
      { id: 'c3', textEn: 'Revenge', textTh: 'การแก้แค้นส่วนบุคคล (Revenge)' },
      { id: 'c4', textEn: 'Financial gain', textTh: 'ผลประโยชน์ทางการเงิน (Financial gain)' }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'การประท้วงนโยบายรัฐผ่านการหยุดให้บริการและออกแถลงการณ์อุดมการณ์เป็นการกระทำของ Hacktivist ที่มีแรงจูงใจด้าน Philosophical/political beliefs',
    choiceRationales: {
      c1: 'ผิด: การโจมตีเปิดเผยตัวชัดเจนและไม่ได้มุ่งขโมยความลับ เหมาะกับการสืบข่าวกรองระยะยาวอย่างเงียบเชียบ',
      c2: 'ถูก: การโจมตีเพื่อแสดงจุดยืนคัดค้านนโยบายด้านสิ่งแวดล้อมสะท้อนความเชื่อเชิงปรัชญาและการเมืองโดยตรง',
      c3: 'ผิด: เกิดจากความเห็นต่างเชิงนโยบายสาธารณะ ไม่ใช่ความคับแค้นส่วนตัว เหมาะกับกรณีอดีตพนักงานก่อวินาศกรรมหลังถูกไล่ออก',
      c4: 'ผิด: ไม่มีคำขู่เรียกเงินหรือการแสวงหารายได้ เหมาะกับการฉ้อโกงหรือขโมยข้อมูลบัตรเครดิตไปขาย'
    },
    misconceptionTh:
      'ผู้เรียนบางคนสับสนระหว่าง Revenge กับ Philosophical/political beliefs ซึ่งต่างกันที่ความแค้นส่วนบุคคลกับอุดมการณ์ทางสังคม',
    relatedLessonIds: ['L2-01'],
    tags: ['motivations', 'hacktivist']
  },
  {
    id: 'Q2-006',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'Two days after being passed over for promotion and receiving termination notice, a senior database administrator uses still-active administrative credentials to purge production billing tables and backup catalogs. Which actor and motivation BEST fit this incident?',
    promptTh:
      'สองวันหลังจากไม่ได้รับการเลื่อนตำแหน่งและได้รับหนังสือแจ้งเลิกจ้าง ผู้ดูแลระบบฐานข้อมูลอาวุโสใช้บัญชีสิทธิ์ผู้ดูแลที่ยังเปิดใช้งานอยู่ลบตารางเรียกเก็บเงินหลักและรายการสำรองข้อมูลทิ้งทั้งหมด ผู้กระทำภัยคุกคามและแรงจูงใจคู่ใดอธิบายเหตุการณ์นี้ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Insider threat motivated by revenge',
        textTh: 'ภัยคุกคามจากบุคคลภายในที่มีแรงจูงใจด้านการแก้แค้น'
      },
      {
        id: 'c2',
        textEn: 'Shadow IT motivated by operational convenience',
        textTh: 'Shadow IT ที่มีแรงจูงใจด้านความสะดวกในการทำงาน'
      },
      {
        id: 'c3',
        textEn: 'Organized crime motivated by blackmail',
        textTh: 'กลุ่มอาชญากรรมไซเบอร์ที่มีแรงจูงใจด้านการขู่กรรโชก'
      },
      {
        id: 'c4',
        textEn: 'Hacktivist motivated by ethical beliefs',
        textTh: 'Hacktivist ที่มีแรงจูงใจด้านจริยธรรม'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'พนักงานที่ใช้สิทธิ์เข้าถึงภายในที่มีอยู่ทำลายข้อมูลสำคัญหลังได้รับความไม่พอใจจากการเลิกจ้างคือ Malicious insider ที่มีแรงจูงใจด้าน Revenge',
    choiceRationales: {
      c1: 'ถูก: ผู้ก่อเหตุเป็นพนักงานภายในที่ถือสิทธิ์ผู้ดูแลระบบและจงใจทำลายฐานข้อมูลเพื่อตอบโต้การเลิกจ้าง',
      c2: 'ผิด: การทำลายข้อมูลอย่างจงใจไม่ใช่การใช้งานเครื่องมือนอกระเบียบเพื่อทำงาน เหมาะกับพนักงานใช้คลาวด์ส่วนตัวแชร์ไฟล์งาน',
      c3: 'ผิด: ผู้ก่อเหตุเป็นคนในและไม่มีการเรียกค่าไถ่ เหมาะกับกลุ่มอาชญากรรมภายนอกที่ขู่ปล่อยข้อมูลหากไม่จ่ายเงิน',
      c4: 'ผิด: การกระทำเกิดจากความโกรธแค้นส่วนตัว ไม่ใช่การเรียกร้องจริยธรรมต่อสาธารณะ เหมาะกับผู้เปิดโปงการทุจริต'
    },
    misconceptionTh:
      'มักละเลยว่ากระบวนการ Offboarding ที่ล่าช้าเปิดช่องให้ Malicious insider ใช้สิทธิ์ถูกต้องตามกฎหมายก่อความเสียหายได้ทันที',
    relatedLessonIds: ['L2-01'],
    tags: ['insider-threat', 'revenge', 'offboarding']
  },
  {
    id: 'Q2-007',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'During an escalation of geopolitical conflict between two countries, electric grid operators observe coordinated destructive wiper activity targeting industrial control networks to cripple regional power generation without any extortion demand. Which motivation BEST characterizes this campaign?',
    promptTh:
      'ระหว่างความขัดแย้งทางภูมิรัฐศาสตร์ที่ทวีความรุนแรงระหว่างสองประเทศ ผู้ควบคุมโครงข่ายไฟฟ้าตรวจพบปฏิบัติการลบทำลายข้อมูลอย่างเป็นระบบต่อเครือข่ายควบคุมอุตสาหกรรมเพื่อตัดกำลังการผลิตไฟฟ้าในภูมิภาคโดยไม่มีการเรียกร้องค่าไถ่ แรงจูงใจใดอธิบายแคมเปญนี้ได้ดีที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Blackmail', textTh: 'การข่มขู่กรรโชก (Blackmail)' },
      { id: 'c2', textEn: 'Financial gain', textTh: 'ผลประโยชน์ทางการเงิน (Financial gain)' },
      { id: 'c3', textEn: 'War', textTh: 'สงครามไซเบอร์ (War)' },
      { id: 'c4', textEn: 'Disruption/chaos', textTh: 'การสร้างความปั่นป่วนทั่วไป (Disruption/chaos)' }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'การโจมตีโครงสร้างพื้นฐานสำคัญอย่างเป็นระบบเพื่อทำลายขีดความสามารถของรัฐคู่ขัดแย้งในภาวะสงครามจัดเป็นแรงจูงใจด้าน War',
    choiceRationales: {
      c1: 'ผิด: ไม่มีการขู่เรียกร้องเงื่อนไขหรือค่าไถ่ เหมาะกับเหตุการณ์ที่ผู้โจมตียึดข้อมูลเป็นตัวประกัน',
      c2: 'ผิด: ปฏิบัติการมุ่งทำลายระบบผลิตไฟฟ้า ไม่ได้แสวงหาเงิน เหมาะกับการปล้นบัญชีหรือขายข้อมูล',
      c3: 'ถูก: ปฏิบัติการทำลายโครงสร้างพื้นฐานระดับชาติที่เชื่อมโยงกับความขัดแย้งระหว่างรัฐจัดอยู่ในแรงจูงใจด้าน War',
      c4: 'ผิด: การโจมตีมีการประสานงานเชิงยุทธศาสตร์ระดับรัฐ ไม่ใช่การก่อกวนสะเปะสะปะ เหมาะกับ Unskilled attacker ที่ก่อกวนทั่วไป'
    },
    misconceptionTh:
      'ผู้เรียนอาจเลือก Disruption/chaos เมื่อเห็นระบบล่ม โดยไม่เชื่อมโยงบริบทความขัดแย้งระหว่างรัฐซึ่งเป็นจุดชี้วัดแรงจูงใจด้าน War',
    relatedLessonIds: ['L2-01'],
    tags: ['motivations', 'war', 'critical-infrastructure']
  },
  {
    id: 'Q2-008',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'An independent security researcher discovers an unprotected portal exposing customer medical records, accesses sample entries without authorization to prove the flaw, and publicly pressures the company to secure consumer privacy without asking for payment. Which motivation BEST explains the researcher\'s actions?',
    promptTh:
      'นักวิจัยความปลอดภัยอิสระพบพอร์ทัลที่ไม่ได้ป้องกันซึ่งเปิดเผยข้อมูลเวชระเบียนลูกค้า จึงเข้าถึงข้อมูลตัวอย่างโดยไม่ได้รับอนุญาตเพื่อพิสูจน์ช่องโหว่ และเผยแพร่กดดันให้บริษัทแก้ไขเพื่อคุ้มครองความเป็นส่วนตัวของผู้บริโภคโดยไม่เรียกร้องเงิน แรงจูงใจใดอธิบายการกระทำนี้ได้ดีที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Revenge', textTh: 'การแก้แค้น (Revenge)' },
      { id: 'c2', textEn: 'Espionage', textTh: 'การจารกรรม (Espionage)' },
      { id: 'c3', textEn: 'Financial gain', textTh: 'ผลประโยชน์ทางการเงิน (Financial gain)' },
      { id: 'c4', textEn: 'Ethical', textTh: 'จริยธรรม (Ethical)' }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'แม้การเข้าถึงโดยไม่ได้รับอนุญาตจะผิดกฎ แต่การผลักดันให้ปกป้องข้อมูลผู้บริโภคโดยไม่แสวงหาเงินหรือทำลายระบบสอดคล้องกับแรงจูงใจด้าน Ethical',
    choiceRationales: {
      c1: 'ผิด: นักวิจัยไม่ได้มีความบาดหมางส่วนตัวกับองค์กร เหมาะกับอดีตพนักงานที่มุ่งแก้แค้นนายจ้าง',
      c2: 'ผิด: ไม่ได้ลักลอบสืบความลับส่งให้คู่แข่งหรือรัฐบาลต่างชาติ เหมาะกับปฏิบัติการข่าวกรองระยะยาว',
      c3: 'ผิด: ไม่มีการเรียกค่าตอบแทนหรือนำข้อมูลไปขาย เหมาะกับการขโมยข้อมูลไปจำหน่ายหรือขู่กรรโชก',
      c4: 'ถูก: แรงจูงใจ Ethical มุ่งคุ้มครองสาธารณะหรือเปิดเผยความบกพร่องเพื่อประโยชน์ทางศีลธรรม แม้ขั้นตอนจะไม่ได้รับอนุญาต'
    },
    misconceptionTh:
      'ผู้เรียนบางคนคิดว่าแรงจูงใจด้าน Ethical ต้องได้รับอนุญาตตามกฎหมายเสมอ ทั้งที่ SY0-701 พิจารณาจากเป้าหมายความเชื่อด้านศีลธรรมของผู้กระทำ',
    relatedLessonIds: ['L2-01'],
    tags: ['motivations', 'ethical', 'threat-actors']
  },
  {
    id: 'Q2-009',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.1'],
    type: 'msq',
    selectCount: 3,
    difficulty: 'intermediate',
    promptEn:
      'A security architect is building a threat model to classify potential adversaries targeting corporate assets. Under SY0-701, which THREE standard attributes are used to evaluate threat actors? (Choose three.)',
    promptTh:
      'สถาปนิกความปลอดภัยกำลังสร้างแบบจำลองภัยคุกคามเพื่อจำแนกผู้โจมตีที่อาจมุ่งเป้ามายังสินทรัพย์องค์กร ตามเกณฑ์ SY0-701 คุณลักษณะมาตรฐาน 3 ข้อใดที่ใช้ประเมิน Threat Actors? (เลือก 3 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Internal vs. external placement',
        textTh: 'ตำแหน่งภายในเทียบกับภายนอกองค์กร (Internal/External)'
      },
      {
        id: 'c2',
        textEn: 'Preferred coding syntax',
        textTh: 'ภาษาโปรแกรมที่ผู้โจมตีนิยมใช้'
      },
      {
        id: 'c3',
        textEn: 'Level of sophistication and capability',
        textTh: 'ระดับความซับซ้อนและความสามารถ (Sophistication/Capability)'
      },
      {
        id: 'c4',
        textEn: 'Resources and funding',
        textTh: 'ทรัพยากรและเงินทุน (Resources/Funding)'
      },
      {
        id: 'c5',
        textEn: 'Target company stock valuation',
        textTh: 'มูลค่าหุ้นของบริษัทเป้าหมาย'
      }
    ],
    correctChoiceIds: ['c1', 'c3', 'c4'],
    explanationTh:
      'เกณฑ์ SY0-701 ระบุคุณลักษณะหลักของ Threat Actors ไว้ 3 มิติ ได้แก่ ตำแหน่ง (Internal/External), ทรัพยากร/เงินทุน (Resources/Funding) และระดับความสามารถ (Sophistication/Capability)',
    choiceRationales: {
      c1: 'ถูก: การระบุว่าเป็น Internal หรือ External กำหนดข้อได้เปรียบด้านสิทธิ์และวิธีการเข้าถึงระบบ',
      c2: 'ผิด: ภาษาโปรแกรมไม่ใช่คุณลักษณะหลักตามกรอบ SY0-701 เหมาะกับการวิเคราะห์พฤติกรรมซอฟต์แวร์ในขั้นตอนสืบสวน',
      c3: 'ถูก: Sophistication/Capability สะท้อนทักษะทางเทคนิคตั้งแต่การใช้สคริปต์สำเร็จรูปจนถึงเครื่องมือเฉพาะกิจ',
      c4: 'ถูก: Resources/Funding กำหนดความต่อเนื่องและขนาดของโครงสร้างพื้นฐานที่ผู้โจมตีจัดหาได้',
      c5: 'ผิด: มูลค่าหุ้นเป็นข้อมูลธุรกิจของเหยื่อ ไม่ใช่ Attribute ของผู้โจมตี เหมาะกับการประเมินมูลค่าสินทรัพย์ในขั้นตอน BIA'
    },
    misconceptionTh:
      'มักนำแรงจูงใจ (Motivations) หรือข้อมูลบริบทของเหยื่อมาปะปนกับคุณลักษณะ 3 มิติของ Threat Actors',
    relatedLessonIds: ['L2-01'],
    tags: ['threat-actors', 'attributes', 'threat-modeling']
  },
  {
    id: 'Q2-010',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'A midsize retailer sees nightly automated probes using public scripts against unpatched web services and exposed management ports, with no signs of targeted persistence. Given limited budget, which action should the security team prioritize FIRST?',
    promptTh:
      'บริษัทค้าปลีกขนาดกลางพบการสแกนอัตโนมัติทุกคืนด้วยสคริปต์สาธารณะไปยังบริการเว็บที่ไม่ได้แพตช์และพอร์ตจัดการระบบที่เปิดเผยอยู่ โดยยังไม่พบร่องรอยการแฝงตัวแบบเจาะจง ภายใต้งบประมาณจำกัด ทีมความปลอดภัยควรให้ความสำคัญกับสิ่งใดเป็นอันดับแรก?',
    choices: [
      {
        id: 'c1',
        textEn: 'Perform deep attribution to identify the exact nation-state group',
        textTh: 'สืบหาตัวตนอย่างละเอียดเพื่อระบุกลุ่มผู้โจมตีระดับรัฐที่แน่นอน'
      },
      {
        id: 'c2',
        textEn: 'Apply missing security patches and close unnecessary exposed ports',
        textTh: 'อัปเดตแพตช์ความปลอดภัยที่ขาดอยู่และปิดพอร์ตที่เปิดเผยโดยไม่จำเป็น'
      },
      {
        id: 'c3',
        textEn: 'Deploy biometric turnstiles at the corporate headquarters lobby',
        textTh: 'ติดตั้งประตูหมุนสแกนชีวมิติบริเวณล็อบบี้สำนักงานใหญ่'
      },
      {
        id: 'c4',
        textEn: 'Mandate yearly background reinvestigations for all warehouse staff',
        textTh: 'บังคับตรวจสอบประวัติพนักงานคลังสินค้าทุกคนซ้ำเป็นประจำทุกปี'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'รูปแบบการโจมตีชี้ไปที่ Unskilled attacker และเครื่องมืออัตโนมัติ การปิดจุดอ่อนพื้นฐานอย่างการแพตช์และลดพอร์ตเปิดช่วยตัดโอกาสสำเร็จได้เร็วและคุ้มค่าที่สุดเป็นอันดับแรก',
    choiceRationales: {
      c1: 'ผิด: การระบุตัวตน (Attribution) ใช้ทรัพยากรสูงและยังไม่ปิดช่องโหว่เฉพาะหน้า เหมาะกับขั้นตอนสืบสวนหลังควบคุมเหตุการณ์ใหญ่',
      c2: 'ถูก: การแพตช์และปิดพอร์ตที่ไม่จำเป็นลดความเสี่ยงจากการโจมตีอัตโนมัติของ Unskilled attacker ได้ทันทีและตรงจุดที่สุด',
      c3: 'ผิด: มาตรการทางกายภาพไม่ช่วยป้องกันการสแกนบริการเว็บผ่านเครือข่าย เหมาะกับการควบคุมคนเข้าพื้นที่ศูนย์ข้อมูล',
      c4: 'ผิด: การตรวจประวัติพนักงานมุ่งลดภัยภายใน ไม่ได้แก้ช่องโหว่บริการเว็บสาธารณะ เหมาะกับการลดความเสี่ยง Insider threat'
    },
    misconceptionTh:
      'ผู้เรียนมักเลือกการทำ Attribution หรือลงทุนเครื่องมือซับซ้อนก่อน ทั้งที่พื้นฐาน Patching และ Hardening ลดความเสี่ยงจากสคริปต์อัตโนมัติได้ทันที',
    relatedLessonIds: ['L2-01', 'L2-09'],
    tags: ['threat-modeling', 'unskilled-attacker', 'prioritization']
  },
  {
    id: 'Q2-011',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'During a major ticket release, an airline booking portal is selectively flooded to crash checkout transactions and force passengers toward rival carriers. Customer databases remain intact and no ransom demand is issued. Which motivation BEST distinguishes this event?',
    promptTh:
      'ระหว่างช่วงเปิดจองตั๋วครั้งใหญ่ พอร์ทัลจองตั๋วของสายการบินถูกโจมตีจนระบบชำระเงินล่มเฉพาะจุดเพื่อผลักผู้โดยสารไปยังสายการบินคู่แข่ง โดยฐานข้อมูลลูกค้าไม่ได้รับความเสียหายและไม่มีการเรียกค่าไถ่ แรงจูงใจใดจำแนกเหตุการณ์นี้ได้ชัดเจนที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Espionage', textTh: 'การจารกรรม (Espionage)' },
      { id: 'c2', textEn: 'Blackmail', textTh: 'การข่มขู่กรรโชก (Blackmail)' },
      { id: 'c3', textEn: 'Data exfiltration', textTh: 'การลักลอบนำข้อมูลออก (Data exfiltration)' },
      { id: 'c4', textEn: 'Service disruption', textTh: 'การทำให้บริการหยุดชะงัก (Service disruption)' }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'การมุ่งโจมตีให้ระบบจองตั๋วเป้าหมายหยุดทำงานในช่วงสำคัญทางธุรกิจโดยไม่ขโมยข้อมูลหรือเรียกค่าไถ่สะท้อนแรงจูงใจ Service disruption อย่างชัดเจน',
    choiceRationales: {
      c1: 'ผิด: ไม่มีการแทรกซึมสืบค้นความลับทางธุรกิจอย่างเงียบเชียบ เหมาะกับกรณีลอบดึงข้อมูลแผนยุทธศาสตร์ระยะยาว',
      c2: 'ผิด: ไม่มีการข่มขู่เพื่อบีบบังคับให้จ่ายเงิน เหมาะกับการยึดระบบหรือขู่ปล่อยข้อมูลลับแลกค่าไถ่',
      c3: 'ผิด: ฐานข้อมูลลูกค้ายังสมบูรณ์และไม่พบการนำข้อมูลออกนอกระบบ เหมาะกับการขโมยไฟล์ข้อมูลส่วนบุคคล',
      c4: 'ถูก: เป้าหมายหลักคือหยุดการให้บริการจองตั๋วในช่วงเวลาสำคัญเพื่อสร้างความเสียหายทางธุรกิจโดยตรง'
    },
    misconceptionTh:
      'บางครั้งสับสนระหว่าง Service disruption กับ Disruption/chaos ซึ่ง Service disruption มุ่งเป้าหยุดบริการเฉพาะเจาะจงเพื่อผลกระทบทางธุรกิจ',
    relatedLessonIds: ['L2-01'],
    tags: ['motivations', 'service-disruption']
  },
  {
    id: 'Q2-012',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.1'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'exam-ready',
    promptEn:
      'Employees in the finance department repeatedly upload sensitive spreadsheets to unapproved online conversion sites to accelerate quarterly reporting. Which TWO controls MOST sustainably address this threat actor risk? (Choose two.)',
    promptTh:
      'พนักงานฝ่ายการเงินอัปโหลดตารางคำนวณข้อมูลความลับไปยังเว็บไซต์แปลงไฟล์ออนไลน์ที่ไม่ได้รับอนุมัติซ้ำหลายครั้งเพื่อเร่งปิดรายงานรายไตรมาส มาตรการ 2 ข้อใดช่วยลดความเสี่ยงจากผู้กระทำภัยคุกคามกลุ่มนี้ได้อย่างยั่งยืนที่สุด? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Deploy an external honeynet on the public perimeter',
        textTh: 'ติดตั้ง Honeynet บนเครือข่ายขอบเขตด้านนอก'
      },
      {
        id: 'c2',
        textEn: 'Enforce DLP and web filtering rules against unapproved cloud tools',
        textTh: 'บังคับใช้นโยบาย DLP และ Web filtering จำกัดบริการคลาวด์ที่ไม่ได้รับอนุมัติ'
      },
      {
        id: 'c3',
        textEn: 'Disable host-based firewalls on finance workstations',
        textTh: 'ปิดการทำงานของ Host-based firewall บนเครื่องฝ่ายการเงิน'
      },
      {
        id: 'c4',
        textEn: 'Provide secure, IT-approved workflow tools that meet business needs',
        textTh: 'จัดหาเครื่องมือที่ปลอดภัยและผ่านการอนุมัติให้ตอบโจทย์การทำงานจริง'
      },
      {
        id: 'c5',
        textEn: 'Require all external vendors to sign non-disclosure agreements only',
        textTh: 'กำหนดให้ผู้ขายภายนอกลงนามสัญญา NDA เพียงอย่างเดียว'
      }
    ],
    correctChoiceIds: ['c2', 'c4'],
    explanationTh:
      'การควบคุม Shadow IT อย่างยั่งยืนต้องใช้ทั้งมาตรการป้องกันการส่งข้อมูลออก (DLP และ Web filtering) ควบคู่กับการจัดหาทางเลือกที่ปลอดภัยและใช้งานสะดวกแทน',
    choiceRationales: {
      c1: 'ผิด: Honeynet ใช้ล่อและตรวจจับผู้โจมตีภายนอก ไม่ได้แก้ปัญหาพนักงานภายในใช้บริการนอกระบบ เหมาะกับการหลอกล่อผู้บุกรุกเครือข่าย',
      c2: 'ถูก: DLP และ Web filtering ช่วยสกัดกั้นการอัปโหลดข้อมูลองค์กรไปยังแพลตฟอร์มที่ไม่ได้รับอนุญาตได้ตรงจุด',
      c3: 'ผิด: การปิดไฟร์วอลล์เพิ่มความเสี่ยงด้านความปลอดภัย เหมาะกับการแก้ไขชั่วคราวเฉพาะกรณีทดสอบในห้องทดลองที่แยกขาดแล้วเท่านั้น',
      c4: 'ถูก: เมื่อมีเครื่องมือที่ปลอดภัยและสะดวกให้ใช้งาน พนักงานจะลดแรงจูงใจในการหันไปพึ่งบริการ Shadow IT',
      c5: 'ผิด: NDA ไม่มีผลควบคุมพฤติกรรมการใช้งานเว็บสาธารณะของพนักงานภายใน เหมาะกับการกำกับความลับในข้อตกลงกับคู่ค้า'
    },
    misconceptionTh:
      'การบล็อกเพียงอย่างเดียวโดยไม่จัดหาเครื่องมือทดแทนที่ใช้งานง่ายมักทำให้พนักงานหาวิธีหลบเลี่ยงด้วยบริการ Shadow IT รูปแบบอื่น',
    relatedLessonIds: ['L2-01', 'L2-09'],
    tags: ['shadow-it', 'dlp', 'mitigation']
  },
  {
    id: 'Q2-013',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.1'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'Security analysts review two unrelated incidents: Incident X occurred when an HR clerk mistakenly emailed a spreadsheet containing employee tax IDs to an external recipient with a similar name; Incident Y involved an external group monetizing stolen cardholder databases across underground markets. How should Incident X and Incident Y be classified?',
    promptTh:
      'นักวิเคราะห์ความปลอดภัยตรวจสอบสองเหตุการณ์ที่ไม่เกี่ยวข้องกัน: เหตุการณ์ X เกิดจากเจ้าหน้าที่ฝ่ายบุคคลส่งตารางข้อมูลเลขประจำตัวผู้เสียภาษีพนักงานไปยังผู้รับภายนอกที่มีชื่อคล้ายกันโดยไม่ได้ตั้งใจ ส่วนเหตุการณ์ Y เกิดจากกลุ่มภายนอกขโมยฐานข้อมูลบัตรชำระเงินไปจำหน่ายในตลาดมืด ข้อใดจำแนกเหตุการณ์ X และ Y ได้ถูกต้อง?',
    choices: [
      {
        id: 'c1',
        textEn: 'Incident X is Shadow IT; Incident Y is Hacktivist',
        textTh: 'เหตุการณ์ X คือ Shadow IT; เหตุการณ์ Y คือ Hacktivist'
      },
      {
        id: 'c2',
        textEn: 'Incident X is Unskilled attacker; Incident Y is Nation-state',
        textTh: 'เหตุการณ์ X คือ Unskilled attacker; เหตุการณ์ Y คือ Nation-state'
      },
      {
        id: 'c3',
        textEn: 'Incident X is an unintentional insider threat; Incident Y is organized crime',
        textTh: 'เหตุการณ์ X คือภัยคุกคามภายในโดยไม่เจตนา; เหตุการณ์ Y คือกลุ่มอาชญากรรมไซเบอร์'
      },
      {
        id: 'c4',
        textEn: 'Incident X is a malicious insider threat; Incident Y is ethical disclosure',
        textTh: 'เหตุการณ์ X คือภัยคุกคามภายในที่มีเจตนาร้าย; เหตุการณ์ Y คือการเปิดเผยเชิงจริยธรรม'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'ความประมาทของพนักงานภายในที่ส่งไฟล์ผิดคนจัดเป็น Unintentional insider threat ส่วนเครือข่ายภายนอกที่ขโมยข้อมูลบัตรไปขายทำกำไรคือ Organized crime',
    choiceRationales: {
      c1: 'ผิด: การพิมพ์ชื่อผู้รับอีเมลองค์กรผิดไม่ได้ใช้ซอฟต์แวร์นอกระบบ และกลุ่มขายบัตรไม่ใช่ Hacktivist เหมาะกับกรณีใช้คลาวด์ส่วนตัวและกลุ่มประท้วงอุดมการณ์',
      c2: 'ผิด: พนักงาน HR ไม่ใช่ผู้โจมตีภายนอก และกลุ่มขายข้อมูลบัตรมุ่งเงินไม่ได้มุ่งจารกรรมระดับรัฐ เหมาะกับผู้รันสคริปต์สาธารณะและหน่วยข่าวกรองรัฐ',
      c3: 'ถูก: เหตุการณ์ X เกิดจากความผิดพลาดของบุคคลภายในโดยไม่เจตนาร้าย และเหตุการณ์ Y มุ่งผลกำไรทางอาญาอย่างเป็นระบบ',
      c4: 'ผิด: พนักงานส่งผิดโดยไม่เจตนา และการขายข้อมูลลูกค้าในตลาดมืดขัดกับหลักจริยธรรม เหมาะกับพนักงานจงใจก่อวินาศกรรมและนักวิจัยเตือนภัย'
    },
    misconceptionTh:
      'ผู้เรียนมักเข้าใจว่า Insider threat ต้องมีเจตนาร้ายเท่านั้น ทั้งที่ความผิดพลาดจากความประมาทของพนักงานภายในก็จัดอยู่ในกลุ่มนี้เช่นกัน',
    relatedLessonIds: ['L2-01'],
    tags: ['insider-threat', 'organized-crime', 'classification']
  },
  {
    id: 'Q2-014',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'An air-gapped industrial quality-control network has no internet connection and blocks external email, yet several test stations become infected immediately after a vendor technician runs calibration utilities from a portable flash drive. Which threat vector enabled this infection?',
    promptTh:
      'เครือข่ายควบคุมคุณภาพอุตสาหกรรมแบบแยกขาดจากอินเทอร์เน็ต (Air-gapped) ไม่มีทางออกภายนอกและบล็อกอีเมลทั้งหมด แต่เครื่องทดสอบหลายเครื่องติดมัลแวร์ทันทีหลังจากช่างผู้ขายเสียบแฟลชไดรฟ์พกพาเพื่อรันโปรแกรมปรับเทียบ เหตุการณ์นี้เกิดขึ้นผ่านช่องทางภัยคุกคามใด?',
    choices: [
      { id: 'c1', textEn: 'Image-based vector', textTh: 'ช่องทางผ่านไฟล์รูปภาพ (Image-based)' },
      { id: 'c2', textEn: 'Removable device', textTh: 'อุปกรณ์บันทึกข้อมูลพกพา (Removable device)' },
      { id: 'c3', textEn: 'Voice call', textTh: 'การสื่อสารด้วยเสียง (Voice call)' },
      { id: 'c4', textEn: 'Unsecure wireless network', textTh: 'เครือข่ายไร้สายที่ไม่ปลอดภัย (Unsecure wireless)' }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'แฟลชไดรฟ์ USB เป็น Removable device ที่สามารถนำพาโค้ดอันตรายเข้าสู่เครื่องปลายทางได้โดยตรงและข้ามแนวป้องกันเครือข่ายหรือสภาพแวดล้อม Air-gapped',
    choiceRationales: {
      c1: 'ผิด: ไม่ได้อาศัยไฟล์ภาพหรือ QR code นำทาง เหมาะกับกรณีซ่อนข้อมูลในรูปภาพหรือฝังโค้ดในตัวถอดรหัสภาพ',
      c2: 'ถูก: สื่อบันทึกข้อมูลแบบถอดได้สามารถข้ามระบบแยกเครือข่ายเข้าสู่เครื่องเป้าหมายทางกายภาพได้โดยตรง',
      c3: 'ผิด: เหตุการณ์เกิดจากการเสียบสื่อบันทึกทางกายภาพ ไม่ใช่การโทรหลอกลวง เหมาะกับการหลอกขอรหัสผ่านทางโทรศัพท์',
      c4: 'ผิด: ระบบไม่มีการเชื่อมต่อไร้สายเข้ามาเกี่ยวข้อง เหมาะกับการดักฟังหรือสวมรอยจุดเชื่อมต่อ Wi-Fi ที่อ่อนแอ'
    },
    misconceptionTh:
      'มักเข้าใจผิดว่าเครือข่ายที่ตัดขาดจากอินเทอร์เน็ต (Air-gapped) ปลอดภัยจาก Threat vectors ทั้งหมดโดยไม่ต้องควบคุมพอร์ต USB',
    relatedLessonIds: ['L2-02'],
    tags: ['threat-vectors', 'removable-device', 'air-gapped']
  },
  {
    id: 'Q2-015',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'Threat actors compromise the administrative remote-monitoring platform of an external IT support provider and abuse its trusted administrative tunnels to deploy unauthorized scripts across 30 client enterprises simultaneously. Which attack surface BEST describes this breach?',
    promptTh:
      'ผู้โจมตีแทรกซึมเข้าสู่แพลตฟอร์มเฝ้าระวังและบริหารจัดการระยะไกลของผู้ให้บริการสนับสนุนไอทีภายนอก แล้วอาศัยช่องทางเชื่อมต่อผู้ดูแลที่ลูกค้าไว้วางใจรันสคริปต์โดยไม่ได้รับอนุญาตข้ามเครือข่ายของบริษัทลูกค้า 30 แห่งพร้อมกัน พื้นผิวการโจมตีใดอธิบายการละเมิดนี้ได้ดีที่สุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Supply chain via a managed service provider (MSP)',
        textTh: 'ห่วงโซ่อุปทานผ่านผู้ให้บริการจัดการระบบภายนอก (MSP)'
      },
      {
        id: 'c2',
        textEn: 'Unsecure Bluetooth pairing',
        textTh: 'การจับคู่ Bluetooth ที่ไม่ปลอดภัย'
      },
      {
        id: 'c3',
        textEn: 'Client-based browser extension caching',
        textTh: 'การเก็บแคชของส่วนขยายเบราว์เซอร์ฝั่งลูกข่าย'
      },
      {
        id: 'c4',
        textEn: 'Typosquatting domain redirection',
        textTh: 'การเปลี่ยนเส้นทางด้วยโดเมนสะกดคล้าย (Typosquatting)'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'การโจมตีผ่านบัญชีและเครื่องมือจัดการระยะไกลของ MSP ที่ลูกค้าอนุญาตไว้ทำให้ผู้โจมตีขยายผลกระทบแบบ One-to-many ซึ่งเป็นลักษณะเด่นของ Supply chain attack surface',
    choiceRationales: {
      c1: 'ถูก: การยึดแพลตฟอร์มของ MSP เปิดทางเข้าถึงเครือข่ายลูกค้าหลายองค์กรพร้อมกันผ่านความสัมพันธ์ที่เชื่อถือได้',
      c2: 'ผิด: Bluetooth มีระยะทำการใกล้มากและไม่ได้เชื่อมเครือข่ายองค์กรข้ามสาขา เหมาะกับการดักฟังอุปกรณ์ระยะใกล้',
      c3: 'ผิด: ไม่ได้เกิดจากส่วนขยายเบราว์เซอร์บนเครื่องผู้ใช้รายบุคคล เหมาะกับช่องโหว่ปลั๊กอินเว็บเบราว์เซอร์',
      c4: 'ผิด: ไม่ได้ใช้โดเมนปลอมสะกดคล้ายหลอกผู้ใช้กดลิงก์ เหมาะกับการดักผู้พิมพ์ URL ผิด'
    },
    misconceptionTh:
      'องค์กรมักตรวจสอบเฉพาะช่องโหว่รอบนอกของตนเอง แต่ละเลยว่าบัญชีควบคุมระยะไกลของ MSP คือจุดเสี่ยงสำคัญของ Supply chain',
    relatedLessonIds: ['L2-02', 'L5-04'],
    tags: ['supply-chain', 'msp', 'attack-surface']
  },
  {
    id: 'Q2-016',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'exam-ready',
    promptEn:
      'An enterprise plans to adopt an agentless remote vulnerability and management architecture instead of installing local endpoint agents across servers. Which TWO attack surface concerns are MOST specific to the agentless model? (Choose two.)',
    promptTh:
      'องค์กรวางแผนนำสถาปัตยกรรมการจัดการและตรวจช่องโหว่ระยะไกลแบบไม่ติดตั้งตัวแทน (Agentless) มาใช้แทนการติดตั้ง Agent บนเครื่องลูกข่ายทั้งหมด ข้อกังวลด้านพื้นผิวการโจมตี 2 ข้อใดจำเพาะต่อรูปแบบ Agentless มากที่สุด? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Opening remote administration service ports across target networks',
        textTh: 'การต้องเปิดพอร์ตบริการบริหารจัดการระยะไกลบนเครือข่ายเป้าหมาย'
      },
      {
        id: 'c2',
        textEn: 'Maintaining patch levels of resident local security daemons on each host',
        textTh: 'ภาระการอัปเดตแพตช์ซอฟต์แวร์ Agent ที่ฝังอยู่บนทุกเครื่องลูกข่าย'
      },
      {
        id: 'c3',
        textEn: 'Higher probability of local binary corruption inside endpoint storage',
        textTh: 'โอกาสเกิดความเสียหายของไฟล์โปรแกรม Agent ในดิสก์เครื่องปลายทาง'
      },
      {
        id: 'c4',
        textEn: 'Centralizing high-privilege remote credentials that could enable broad lateral compromise',
        textTh: 'การรวมศูนย์ข้อมูลรับรองสิทธิ์สูงสำหรับเข้าถึงระยะไกลซึ่งเสี่ยงต่อการถูกใช้โจมตีขยายวงกว้าง'
      },
      {
        id: 'c5',
        textEn: 'Requiring physical USB keys to start local endpoint services',
        textTh: 'การต้องใช้คีย์ USB กายภาพเพื่อเริ่มต้นบริการบนปลายทางทุกเครื่อง'
      }
    ],
    correctChoiceIds: ['c1', 'c4'],
    explanationTh:
      'ระบบ Agentless ลดภาระการดูแล Agent บนเครื่องปลายทาง แต่ต้องเปิด Service ports และบริหารบัญชีสิทธิ์สูงจากศูนย์กลางเพื่อเชื่อมต่อระยะไกล หากถูกยึดอาจกระทบทั้งเครือข่าย',
    choiceRationales: {
      c1: 'ถูก: Agentless ต้องอาศัยพอร์ตเครือข่ายและโปรโตคอลระยะไกลเปิดรับคำสั่งจากเซิร์ฟเวอร์กลาง จึงเพิ่มความเสี่ยงด้าน Open service ports',
      c2: 'ผิด: เป็นข้อกังวลของสถาปัตยกรรม Client-based ที่ต้องติดตั้ง Agent บนเครื่องปลายทางทุกเครื่อง',
      c3: 'ผิด: รูปแบบ Agentless ไม่ได้ติดตั้งโปรแกรมค้างไว้บนเครื่องลูกข่ายจึงไม่ใช่จุดเสี่ยงเฉพาะของรุ่นนี้ เหมาะกับระบบ Client-based',
      c4: 'ถูก: บัญชีและคีย์สิทธิ์ผู้ดูแลที่เซิร์ฟเวอร์กลางใช้เชื่อมระยะไกลไปยังหลายเครื่องเป็นเป้าหมายมูลค่าสูงหากรั่วไหล',
      c5: 'ผิด: การใช้ USB hardware key ไม่ใช่กลไกพื้นฐานของสถาปัตยกรรม Agentless เหมาะกับการยืนยันตัวตนแบบ Phishing-resistant MFA'
    },
    misconceptionTh:
      'มักเข้าใจผิดว่าระบบ Agentless ปลอดภัยกว่า Client-based ทุกด้าน โดยมองข้ามความเสี่ยงจากพอร์ตเปิดและบัญชีสิทธิ์สูงระยะไกล',
    relatedLessonIds: ['L2-02'],
    tags: ['agentless', 'client-based', 'attack-surface']
  },
  {
    id: 'Q2-017',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'During a facility security review, an auditor connects an unmanaged laptop to a lobby conference room Ethernet jack and immediately obtains internal subnet access without authentication. Next, the auditor logs into the room conferencing console using factory-shipped administrator credentials. Which pair of attack surfaces do these findings illustrate?',
    promptTh:
      'ระหว่างการตรวจสอบความปลอดภัยอาคาร ผู้ตรวจสอบเสียบแล็ปท็อปที่ไม่ได้ลงทะเบียนเข้ากับแจ็ก Ethernet ในห้องประชุมล็อบบี้และได้รับสิทธิ์เข้าถึงซับเน็ตภายในทันทีโดยไม่ต้องยืนยันตัวตน จากนั้นผู้ตรวจสอบยังล็อกอินเข้าหน้าตั้งค่าเครื่องประชุมด้วยรหัสผ่านผู้ดูแลที่ตั้งมาจากโรงงาน ผลการตรวจนี้สะท้อนพื้นผิวการโจมตีคู่ใด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Message-based vectors and open external web portals',
        textTh: 'ช่องทางข้อความและเว็บพอร์ทัลสาธารณะที่เปิดพอร์ต'
      },
      {
        id: 'c2',
        textEn: 'Unsupported operating systems and client-based vulnerabilities',
        textTh: 'ระบบปฏิบัติการหมดอายุและช่องโหว่ซอฟต์แวร์ฝั่งลูกข่าย'
      },
      {
        id: 'c3',
        textEn: 'Unsecure wired network and default credentials',
        textTh: 'เครือข่ายมีสายที่ไม่ปลอดภัยและข้อมูลรับรองเริ่มต้นจากโรงงาน'
      },
      {
        id: 'c4',
        textEn: 'Removable devices and supplier hardware tampering',
        textTh: 'อุปกรณ์บันทึกพกพาและการดัดแปลงฮาร์ดแวร์จากผู้จัดหา'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'แจ็กแลนที่เสียบใช้งานได้ทันทีโดยไม่มี 802.1X NAC คือ Unsecure wired network และการคงรหัสผ่านจากโรงงานไว้บนอุปกรณ์คือ Default credentials',
    choiceRationales: {
      c1: 'ผิด: สถานการณ์เกิดจากการเสียบสายแลนกายภาพและรหัสผ่านโรงงาน ไม่ใช่การส่งอีเมลหรือข้อความ เหมาะกับการหลอกลวงผ่าน Email/SMS',
      c2: 'ผิด: ไม่ได้กล่าวถึงอุปกรณ์หมดอายุหรือบั๊กในซอฟต์แวร์ไคลเอ็นต์ เหมาะกับระบบที่ผู้ผลิตหยุดออกแพตช์แล้ว',
      c3: 'ถูก: การปล่อยพอร์ตสายแลนไร้การตรวจสอบสิทธิ์และไม่เปลี่ยนรหัสผ่านตั้งต้นเป็นสองจุดอ่อนที่เปิดทางเข้าควบคุมระบบทันที',
      c4: 'ผิด: ไม่ได้ใช้แฟลชไดรฟ์ USB หรือชิ้นส่วนฮาร์ดแวร์ปลอมแปลง เหมาะกับมัลแวร์ผ่าน USB หรือซัพพลายเชนระดับโรงงาน'
    },
    misconceptionTh:
      'องค์กรมักเน้นความปลอดภัยเฉพาะ Wi-Fi แต่ละเลย Unsecure wired network ในพื้นที่สาธารณะและรหัสผ่านเริ่มต้นของอุปกรณ์ IoT/AV',
    relatedLessonIds: ['L2-02'],
    tags: ['wired-network', 'default-credentials', 'attack-surface']
  },
  {
    id: 'Q2-018',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'Employees receive emails containing only a single PNG banner announcing a mandatory benefits update alongside a scannable QR code. Because the email contains no clickable hyperlinks or macro files, the URL scanner passes it through, and staff scan the code using personal smartphones. Which threat vector is being exploited?',
    promptTh:
      'พนักงานได้รับอีเมลที่มีเพียงไฟล์ภาพ PNG แจ้งปรับปรุงสวัสดิการเร่งด่วนพร้อมรหัส QR ให้สแกน เนื่องจากอีเมลไม่มีลิงก์ข้อความให้คลิกหรือไฟล์เอกสารฝังมาโคร ระบบสแกน URL จึงปล่อยผ่าน และพนักงานใช้สมาร์ทโฟนส่วนตัวสแกนภาพดังกล่าว เหตุการณ์นี้ใช้ช่องทางภัยคุกคามใด?',
    choices: [
      { id: 'c1', textEn: 'Voice call', textTh: 'ช่องทางเสียงโทรศัพท์ (Voice call)' },
      { id: 'c2', textEn: 'Removable device', textTh: 'อุปกรณ์บันทึกพกพา (Removable device)' },
      { id: 'c3', textEn: 'File-based macro delivery', textTh: 'การส่งผ่านไฟล์เอกสารฝังมาโคร (File-based)' },
      { id: 'c4', textEn: 'Image-based vector', textTh: 'ช่องทางผ่านไฟล์รูปภาพ (Image-based)' }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'การใช้ภาพที่มี QR code เพื่อซ่อนปลายทางอันตรายให้หลุดรอดจากตัวกรองลิงก์ข้อความของ Email gateway เป็นการใช้ Image-based threat vector',
    choiceRationales: {
      c1: 'ผิด: ไม่มีการสื่อสารด้วยเสียงผ่านโทรศัพท์หรือ VoIP เหมาะกับกรณี Vishing โทรหลอกขอ OTP',
      c2: 'ผิด: ไม่ได้เสียบอุปกรณ์เก็บข้อมูลทางกายภาพเข้าเครื่อง เหมาะกับการแพร่กระจายผ่านแฟลชไดรฟ์',
      c3: 'ผิด: โจทย์ระบุชัดว่าไม่มีไฟล์เอกสารหรือมาโครแนบมา เหมาะกับเอกสารสำนักงานที่ลวงให้กดเปิดใช้ Macro',
      c4: 'ถูก: การฝัง QR code หรือข้อมูลลวงไว้ในไฟล์ภาพเป็นรูปแบบหลักของ Image-based vector ที่เลี่ยงการสแกนข้อความ'
    },
    misconceptionTh:
      'มักเข้าใจผิดว่าไฟล์รูปภาพไม่เป็นอันตราย เพราะมองข้ามการใช้ QR code และเทคนิคซ่อนข้อมูลเพื่อหลบตัวกรองอีเมล',
    relatedLessonIds: ['L2-02'],
    tags: ['image-based', 'qr-code', 'threat-vectors']
  },
  {
    id: 'Q2-019',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'A specialized manufacturing controller relies on an unsupported operating system that no longer receives vendor patches, and hardware replacement cannot occur for 12 months due to regulatory recertification. Which action should the security engineer take FIRST to mitigate risk without halting production?',
    promptTh:
      'เครื่องควบคุมการผลิตเฉพาะทางทำงานบนระบบปฏิบัติการที่สิ้นสุดการสนับสนุนจากผู้ผลิตและไม่ได้รับแพตช์ความปลอดภัยอีกต่อไป โดยยังไม่สามารถเปลี่ยนเครื่องใหม่ได้ภายใน 12 เดือนเนื่องจากต้องรอรับรองมาตรฐานการผลิต วิศวกรความปลอดภัยควรดำเนินการใดเป็นอันดับแรกเพื่อลดความเสี่ยงโดยไม่หยุดสายการผลิต?',
    choices: [
      {
        id: 'c1',
        textEn: 'Connect the controller to the corporate guest wireless network to isolate it from servers',
        textTh: 'ย้ายเครื่องควบคุมไปเชื่อมต่อกับ Wi-Fi สำหรับผู้มาติดต่อเพื่อแยกจากเซิร์ฟเวอร์'
      },
      {
        id: 'c2',
        textEn: 'Place the controller in an isolated VLAN with strict firewall ACLs and disable unused ports',
        textTh: 'แยกเครื่องไว้ใน VLAN เฉพาะพร้อมกฎ Firewall ACL ที่เข้มงวดและปิดพอร์ตที่ไม่ใช้งาน'
      },
      {
        id: 'c3',
        textEn: 'Install an unapproved third-party operating system upgrade immediately',
        textTh: 'อัปเกรดระบบปฏิบัติการเป็นรุ่นใหม่ทันทีโดยไม่รอการรับรองจากผู้ผลิตเครื่องจักร'
      },
      {
        id: 'c4',
        textEn: 'Publish strict DMARC email rules for the factory domain',
        textTh: 'ตั้งค่านโยบาย DMARC แบบเข้มงวดสำหรับโดเมนอีเมลของโรงงาน'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'เมื่อไม่สามารถแพตช์หรือปลดระวางระบบ Unsupported ได้ทันที มาตรการชดเชยอันดับแรกคือ Network segmentation, ACL จำกัดการเข้าถึง และปิดพอร์ตที่ไม่จำเป็น',
    choiceRationales: {
      c1: 'ผิด: Guest Wi-Fi ไม่ใช่เครือข่ายควบคุมปลอดภัยและเปิดให้บุคคลภายนอกเข้าใกล้ได้ เหมาะกับอินเทอร์เน็ตผู้มาติดต่อเท่านั้น',
      c2: 'ถูก: การแยกเครือข่าย (Segmentation) ร่วมกับ ACL และการลดพอร์ตเปิดช่วยลด Attack surface ของระบบหมดอายุได้ทันทีโดยไม่กระทบเครื่องจักร',
      c3: 'ผิด: การบังคับอัปเกรดโดยไม่ทดสอบอาจทำให้ซอฟต์แวร์เครื่องจักรหยุดทำงาน เหมาะกับซอฟต์แวร์มาตรฐานทั่วไปที่มีแพตช์รองรับ',
      c4: 'ผิด: DMARC ป้องกันการปลอมแปลงอีเมล ไม่ได้ป้องกันการโจมตีพอร์ตเครือข่ายของระบบควบคุมการผลิต เหมาะกับ Email spoofing'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนเลือกบังคับอัปเกรดหรือติดตั้งซอฟต์แวร์เสริมบนเครื่องอุตสาหกรรมโดยตรง ซึ่งอาจทำให้ระบบการผลิตล่มแทนที่จะใช้ Network segmentation',
    relatedLessonIds: ['L2-02', 'L2-09'],
    tags: ['unsupported-systems', 'segmentation', 'compensating-controls']
  },
  {
    id: 'Q2-020',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A finance clerk receives a plain-text email appearing to originate from the CFO requesting an immediate confidential wire transfer to close a vendor acquisition within one hour. The message has no links or attachments. What attack is MOST likely underway, and what is the BEST verification step?',
    promptTh:
      'พนักงานบัญชีได้รับอีเมลข้อความธรรมดาที่ดูเหมือนส่งมาจาก CFO สั่งให้โอนเงินค่ามัดจำซื้อกิจการที่เป็นความลับอย่างเร่งด่วนภายในหนึ่งชั่วโมง โดยไม่มีลิงก์หรือไฟล์แนบใดๆ ในอีเมล เหตุการณ์นี้น่าจะเป็นการโจมตีใดมากที่สุด และขั้นตอนตรวจสอบใดมีประสิทธิภาพสูงสุด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Business email compromise (BEC); confirm via a trusted phone number out-of-band',
        textTh: 'Business email compromise (BEC); โทรศัพท์ยืนยันผ่านหมายเลขที่เชื่อถือได้นอกช่องทางอีเมล'
      },
      {
        id: 'c2',
        textEn: 'Watering hole; inspect the attachment inside an isolated sandbox',
        textTh: 'Watering hole; ตรวจสอบไฟล์แนบภายใน Sandbox แยกส่วน'
      },
      {
        id: 'c3',
        textEn: 'Typosquatting; scan the workstation with updated antivirus signatures',
        textTh: 'Typosquatting; สแกนเครื่องคอมพิวเตอร์ด้วยฐานข้อมูลแอนติไวรัสล่าสุด'
      },
      {
        id: 'c4',
        textEn: 'Smishing; reply directly to the sender email address asking for confirmation',
        textTh: 'Smishing; ตอบกลับอีเมลฉบับเดิมเพื่อขอให้ผู้ส่งยืนยันคำสั่งอีกครั้ง'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'อีเมลข้อความล้วนที่แอบอ้างผู้บริหารสั่งโอนเงินด่วนคือ BEC ซึ่งระบบสแกนไฟล์แนบ/ลิงก์ตรวจไม่พบ จึงต้องยืนยันข้ามช่องทาง (Out-of-band) ผ่านเบอร์ติดต่อเดิมที่น่าเชื่อถือ',
    choiceRationales: {
      c1: 'ถูก: BEC อาศัย Authority และ Urgency ในอีเมลไร้ไฟล์แนบ การตรวจสอบผ่านโทรศัพท์ไปยังเบอร์ที่บันทึกไว้จริงช่วยหยุดการโอนเงินได้แม่นยำที่สุด',
      c2: 'ผิด: อีเมลไม่มีไฟล์แนบและไม่ได้ฝังโค้ดบนเว็บที่สาม เหมาะกับการตรวจพบมัลแวร์บนเว็บเฉพาะกลุ่ม',
      c3: 'ผิด: ไม่มีเว็บสะกดผิดและแอนติไวรัสตรวจข้อความล้วนไม่พบ เหมาะกับการจับไฟล์มัลแวร์หรือเว็บลอกชื่อโดเมน',
      c4: 'ผิด: ไม่ใช่ข้อความ SMS และการตอบกลับอีเมลเดิมจะส่งตรงกลับไปหาผู้โจมตีหากบัญชีถูกยึดหรือปลอมแปลง'
    },
    misconceptionTh:
      'พนักงานมักคิดว่าอีเมลที่ไม่มีลิงก์หรือไฟล์แนบปลอดภัย และเผลอตอบกลับอีเมลเดิมเพื่อขอคำยืนยันแทนการโทรตรวจสอบข้ามช่องทาง',
    relatedLessonIds: ['L2-03', 'L5-07'],
    tags: ['bec', 'social-engineering', 'out-of-band']
  },
  {
    id: 'Q2-021',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'An external caller contacts the IT helpdesk claiming to be a traveling regional director locked out before a board presentation, citing accurate project names and supervisor details to convince the agent to bypass identity checks and reset MFA. Which TWO techniques are combined here? (Choose two.)',
    promptTh:
      'ผู้โทรจากภายนอกติดต่อแผนกช่วยเหลือไอทีโดยอ้างตัวเป็นผู้อำนวยการภูมิภาคที่กำลังเดินทางและถูกล็อกบัญชีก่อนการประชุมคณะกรรมการ พร้อมอ้างชื่อโครงการและรายละเอียดหัวหน้างานได้ถูกต้องเพื่อโน้มน้าวให้เจ้าหน้าที่ข้ามขั้นตอนตรวจตัวตนและรีเซ็ต MFA ให้ เทคนิค 2 ข้อใดถูกนำมาใช้ร่วมกัน? (เลือก 2 ข้อ)',
    choices: [
      { id: 'c1', textEn: 'Smishing', textTh: 'Smishing' },
      { id: 'c2', textEn: 'Vishing', textTh: 'Vishing' },
      { id: 'c3', textEn: 'Pretexting', textTh: 'Pretexting' },
      { id: 'c4', textEn: 'Watering hole', textTh: 'Watering hole' }
    ],
    correctChoiceIds: ['c2', 'c3'],
    explanationTh:
      'การหลอกลวงผ่านการโทรศัพท์คือ Vishing และการสร้างเรื่องราวสมมติพร้อมข้อมูลประกอบสมจริงเพื่อขอสิทธิ์รีเซ็ตระบบคือ Pretexting',
    choiceRationales: {
      c1: 'ผิด: ไม่ได้ส่งข้อความสั้นทางมือถือ เหมาะกับการส่งลิงก์หลอกลวงผ่าน SMS',
      c2: 'ถูก: Vishing คือการใช้ Voice call สวมรอยกดดันให้เจ้าหน้าที่เปิดเผยข้อมูลหรือเปลี่ยนแปลงสิทธิ์',
      c3: 'ถูก: Pretexting คือการแต่งเรื่องราวและบริบทที่น่าเชื่อถือล่วงหน้าเพื่อสร้างความชอบธรรมในการขอดำเนินการ',
      c4: 'ผิด: ไม่ได้แอบฝังโค้ดบนเว็บไซต์ที่สาม เหมาะกับกรณีดักรอให้เป้าหมายติดเชื้อเมื่อเข้าเว็บเฉพาะกลุ่ม'
    },
    misconceptionTh:
      'ผู้เรียนมักระบุเพียง Vishing ตามช่องทางเสียง โดยมองข้าม Pretexting ซึ่งเป็นกลยุทธ์แต่งเรื่องราวเบื้องหลังเพื่อสร้างความน่าเชื่อถือ',
    relatedLessonIds: ['L2-03', 'L5-07'],
    tags: ['vishing', 'pretexting', 'social-engineering']
  },
  {
    id: 'Q2-022',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'Multiple staff members receive mobile text alerts claiming a parcel delivery failed due to an unpaid customs fee and instructing them to tap a shortened URL to update payment information on their phones. Which vector does this represent?',
    promptTh:
      'พนักงานหลายคนได้รับข้อความแจ้งเตือนทางโทรศัพท์มือถือระบุว่าการจัดส่งพัสดุไม่สำเร็จเนื่องจากค้างชำระค่าธรรมเนียมศุลกากร พร้อมแนะนำให้แตะลิงก์ย่อเพื่ออัปเดตข้อมูลการชำระเงินบนมือถือ เหตุการณ์นี้เป็นช่องทางภัยคุกคามใด?',
    choices: [
      { id: 'c1', textEn: 'Vishing', textTh: 'Vishing' },
      { id: 'c2', textEn: 'Watering hole', textTh: 'Watering hole' },
      { id: 'c3', textEn: 'Smishing', textTh: 'Smishing' },
      { id: 'c4', textEn: 'Business email compromise', textTh: 'Business email compromise' }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'การส่งข้อความหลอกลวงพร้อมลิงก์ผ่านระบบ SMS บนโทรศัพท์มือถือคือ Smishing ซึ่งตรวจสอบโดเมนเต็มได้ยากและมักหลุดรอดตัวกรองอีเมลองค์กร',
    choiceRationales: {
      c1: 'ผิด: Vishing ใช้สายโทรศัพท์พูดคุยด้วยเสียง เหมาะกับกรณีโทรแอบอ้างเป็นธนาคารหรือเจ้าหน้าที่ไอที',
      c2: 'ผิด: ไม่ได้ฝังโค้ดไว้บนเว็บไซต์ภายนอก เหมาะกับการโจมตีกลุ่มเฉพาะที่เข้าชมเว็บไซต์อุตสาหกรรมประจำ',
      c3: 'ถูก: Smishing ย่อมาจาก SMS Phishing ที่อาศัยข้อความมือถือและลิงก์ย่อลวงให้กรอกข้อมูล',
      c4: 'ผิด: ไม่ได้ใช้อีเมลธุรกิจสวมรอยผู้บริหาร เหมาะกับการหลอกโอนเงินหรือเปลี่ยนบัญชีรับเงินของคู่ค้า'
    },
    misconceptionTh:
      'องค์กรมักมุ่งเน้นป้องกันเฉพาะอีเมลจนมองข้ามว่า SMS บนมือถือพนักงานไม่อยู่ภายใต้การคัดกรองของ Email security gateway',
    relatedLessonIds: ['L2-03'],
    tags: ['smishing', 'message-based', 'social-engineering']
  },
  {
    id: 'Q2-023',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'Investigators find that four propulsion engineers from the same R&D group suffered identical browser-based compromises without receiving suspicious emails or SMS messages. Proxy telemetry shows all four visited a niche external aerospace standards forum within the same week. Which technique BEST explains this incident?',
    promptTh:
      'ผู้สืบสวนพบว่าวิศวกรระบบขับเคลื่อน 4 คนในทีมวิจัยเดียวกันถูกโจมตีผ่านเว็บเบราว์เซอร์ในลักษณะเดียวกันโดยไม่ได้รับอีเมลหรือข้อความ SMS ต้องสงสัยเลย บันทึก Proxy แสดงว่าทั้งสี่คนเข้าเยี่ยมชมเว็บบอร์ดมาตรฐานการบินเฉพาะทางภายนอกแห่งเดียวกันในสัปดาห์นั้น เทคนิคใดอธิบายเหตุการณ์นี้ได้ดีที่สุด?',
    choices: [
      { id: 'c1', textEn: 'Brand impersonation', textTh: 'การปลอมแปลงภาพลักษณ์แบรนด์ (Brand impersonation)' },
      { id: 'c2', textEn: 'Typosquatting', textTh: 'การจดโดเมนสะกดคล้าย (Typosquatting)' },
      { id: 'c3', textEn: 'Pretexting', textTh: 'การแต่งเรื่องราวหลอกลวง (Pretexting)' },
      { id: 'c4', textEn: 'Watering hole', textTh: 'การโจมตีแบบ Watering hole' }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'การแอบฝังโค้ดอันตรายบนเว็บไซต์ที่สามซึ่งกลุ่มเป้าหมายเฉพาะทางเข้าใช้งานประจำเพื่อดักรอให้ติดเชื้อเมื่อเข้าชมคือ Watering hole attack',
    choiceRationales: {
      c1: 'ผิด: ไม่ได้สร้างเว็บปลอมเลียนแบบแบรนด์ของบริษัทเหยื่อ เหมาะกับการปลอมโลโก้และหน้าล็อกอินแบรนด์ดัง',
      c2: 'ผิด: เหยื่อไม่ได้พิมพ์ชื่อโดเมนผิดไปเข้าเว็บปลอม เหมาะกับการดักจับผู้ใช้ที่พิมพ์ URL สะกดคลาดเคลื่อน',
      c3: 'ผิด: ไม่มีการติดต่อสื่อสารสร้างเรื่องราวหลอกถามข้อมูลจากเหยื่อโดยตรง เหมาะกับการโทรหรือส่งข้อความล้วงข้อมูล',
      c4: 'ถูก: ผู้โจมตีเลือกฝังมัลแวร์ไว้ที่เว็บไซต์เฉพาะกลุ่มที่วิศวกรเป้าหมายเข้าใช้งานสม่ำเสมอโดยไม่ต้องส่งลิงก์หลอกลวง'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนสับสนระหว่าง Watering hole กับ Typosquatting โดยไม่ได้สังเกตว่า Watering hole แทรกแซงเว็บไซต์จริงที่เป้าหมายใช้งานอยู่แล้ว',
    relatedLessonIds: ['L2-03'],
    tags: ['watering-hole', 'social-engineering']
  },
  {
    id: 'Q2-024',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'An adversary registers a lookalike domain substituting a zero for the letter "o" in a brokerage URL and copies the firm official logo, typography, and login page design to harvest client credentials. Which pair of techniques is being used?',
    promptTh:
      'ผู้โจมตีจดทะเบียนชื่อโดเมนที่คล้ายคลึงกันโดยแทนที่ตัวอักษร "o" ด้วยเลขศูนย์ใน URL ของบริษัทนายหน้าซื้อขายหลักทรัพย์ พร้อมคัดลอกโลโก้ แบบอักษร และหน้าจอเข้าสู่ระบบทางการมาทั้งหมดเพื่อดักเก็บข้อมูลรับรองของลูกค้า เหตุการณ์นี้ใช้เทคนิคคู่ใด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Typosquatting and brand impersonation',
        textTh: 'Typosquatting และ Brand impersonation'
      },
      {
        id: 'c2',
        textEn: 'Watering hole and vishing',
        textTh: 'Watering hole และ Vishing'
      },
      {
        id: 'c3',
        textEn: 'Pretexting and removable device',
        textTh: 'Pretexting และ Removable device'
      },
      {
        id: 'c4',
        textEn: 'Misinformation and business email compromise',
        textTh: 'Misinformation และ Business email compromise'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'การจดชื่อโดเมนสะกดคล้ายเพื่อลวงตาคือ Typosquatting และการเลียนแบบโลโก้กับหน้าตาเว็บไซต์องค์กรคือ Brand impersonation',
    choiceRationales: {
      c1: 'ถูก: ทั้งสองเทคนิคทำงานเสริมกันโดยใช้ชื่อโดเมนที่ดูคล้ายจริงร่วมกับภาพลักษณ์หน้าเว็บที่เลียนแบบแบรนด์ทางการ',
      c2: 'ผิด: ไม่ได้เจาะเว็บไซต์จริงที่สามหรือโทรหลอกลวง เหมาะกับเว็บอุตสาหกรรมที่ถูกฝังโค้ดและสายโทรปลอม',
      c3: 'ผิด: ไม่ได้แต่งเรื่องหลอกถามทางบุคคลหรือใช้สื่อบันทึกพกพา เหมาะกับการหลอกฝ่ายสนับสนุนและเสียบแฟลชไดรฟ์',
      c4: 'ผิด: ไม่ใช่การแชร์ข่าวเท็จหรืออีเมลสั่งโอนเงิน เหมาะกับการส่งต่อข้อมูลผิดพลาดและคำสั่งการเงินปลอม'
    },
    misconceptionTh:
      'ผู้เรียนมักใช้สองคำนี้แทนกัน ทั้งที่ Typosquatting เน้นชื่อโดเมนสะกดคล้าย ส่วน Brand impersonation เน้นการลอกเลียนภาพลักษณ์และอัตลักษณ์องค์กร',
    relatedLessonIds: ['L2-03'],
    tags: ['typosquatting', 'brand-impersonation', 'phishing']
  },
  {
    id: 'Q2-025',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    type: 'msq',
    selectCount: 3,
    difficulty: 'exam-ready',
    promptEn:
      'Following a wave of lookalike-domain phishing emails targeting employee logins, a security engineer designs layered defenses spanning email authentication, domain access blocking, and credential protection. Which THREE controls BEST mitigate this threat chain? (Choose three.)',
    promptTh:
      'หลังจากเกิดคลื่นอีเมลฟิชชิงที่ใช้โดเมนปลอมสะกดคล้ายเพื่อดักเก็บข้อมูลเข้าสู่ระบบของพนักงาน วิศวกรความปลอดภัยต้องการวางแนวป้องกันซ้อนทับหลายชั้นทั้งระดับการยืนยันตัวตนอีเมล การบล็อกโดเมน และการปกป้องข้อมูลรับรอง มาตรการ 3 ข้อใดลดความเสี่ยงนี้ได้ดีที่สุด? (เลือก 3 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Enforce SPF, DKIM, and DMARC with a reject policy',
        textTh: 'บังคับใช้ SPF, DKIM และ DMARC พร้อมนโยบาย reject'
      },
      {
        id: 'c2',
        textEn: 'Enable open Bluetooth discovery across corporate laptops',
        textTh: 'เปิดโหมดค้นหาอุปกรณ์ Bluetooth อัตโนมัติบนแล็ปท็อปองค์กร'
      },
      {
        id: 'c3',
        textEn: 'Deploy DNS filtering to block newly registered lookalike domains',
        textTh: 'ใช้ระบบ DNS filtering บล็อกโดเมนสะกดคล้ายที่เพิ่งจดทะเบียนใหม่'
      },
      {
        id: 'c4',
        textEn: 'Disable server certificate checks in web browsers for convenience',
        textTh: 'ปิดการตรวจสอบใบรับรองเซิร์ฟเวอร์บนเบราว์เซอร์เพื่อความสะดวก'
      },
      {
        id: 'c5',
        textEn: 'Mandate FIDO2/WebAuthn phishing-resistant MFA',
        textTh: 'บังคับใช้ MFA แบบป้องกันฟิชชิงมาตรฐาน FIDO2/WebAuthn'
      }
    ],
    correctChoiceIds: ['c1', 'c3', 'c5'],
    explanationTh:
      'DMARC/SPF/DKIM สกัดการปลอมโดเมนผู้ส่ง DNS filtering บล็อกการเข้าถึงโดเมน Typosquatting และ FIDO2 MFA ตรวจสอบโดเมนจริงระดับคริปโตกราฟีเพื่อป้องกันการส่งรหัสผ่านให้เว็บปลอม',
    choiceRationales: {
      c1: 'ถูก: การยืนยันตัวตนอีเมลช่วยลดอีเมลปลอมแปลงโดเมนองค์กรก่อนถึงกล่องขาเข้าผู้ใช้',
      c2: 'ผิด: การเปิด Bluetooth ทิ้งไว้เพิ่มพื้นผิวการโจมตีระยะใกล้ ไม่ได้ป้องกันฟิชชิง เหมาะเฉพาะกรณีจับคู่อุปกรณ์ที่จำเป็นในพื้นที่ปลอดภัย',
      c3: 'ถูก: DNS filtering ช่วยสกัดไม่ให้ผู้ใช้เชื่อมต่อสู่โดเมนปลอมที่เพิ่งจดทะเบียนหรือมีชื่อเสียงไม่ดี',
      c4: 'ผิด: การปิดตรวจสอบใบรับรองทำลายความปลอดภัย TLS จึงไม่ควรใช้ป้องกันฟิชชิง เหมาะเพียงการทดสอบชั่วคราวในห้องแล็บปิด',
      c5: 'ถูก: FIDO2/WebAuthn ผูกการยืนยันตัวตนกับชื่อโดเมนจริง จึงไม่ส่งคำตอบให้เว็บ Typosquatting'
    },
    misconceptionTh:
      'มักเข้าใจว่ารหัส OTP ทาง SMS ป้องกันเว็บ Typosquatting ได้สมบูรณ์ ทั้งที่ผู้โจมตีส่งต่อรหัส OTP แบบเรียลไทม์ได้ จึงต้องใช้ FIDO2 MFA',
    relatedLessonIds: ['L2-03', 'L4-06', 'L4-09'],
    tags: ['dmarc', 'dns-filtering', 'fido2', 'phishing-defense']
  },
  {
    id: 'Q2-026',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.2'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'An external influence group deliberately publishes fabricated financial filings claiming a bank is insolvent to spark panic withdrawals. After seeing the post, an anxious customer reposts it to family members believing it is genuine. How should the group action and the customer action be categorized respectively?',
    promptTh:
      'กลุ่มสร้างกระแสภายนอกจงใจเผยแพร่เอกสารงบการเงินปลอมแปลงที่อ้างว่าธนาคารกำลังล้มละลายเพื่อกระตุ้นให้เกิดความตื่นตระหนกแห่ถอนเงิน ต่อมาลูกค้าที่กังวลใจได้แชร์โพสต์ดังกล่าวต่อให้คนในครอบครัวเพราะเชื่อว่าเป็นข่าวจริง ควรจัดประเภทการกระทำของกลุ่มแรกและลูกค้าตามลำดับอย่างไร?',
    choices: [
      {
        id: 'c1',
        textEn: 'Both actions are pretexting',
        textTh: 'ทั้งสองการกระทำจัดเป็น Pretexting'
      },
      {
        id: 'c2',
        textEn: 'The group action is misinformation; the customer action is disinformation',
        textTh: 'การกระทำของกลุ่มคือ Misinformation; การกระทำของลูกค้าคือ Disinformation'
      },
      {
        id: 'c3',
        textEn: 'The group action is disinformation; the customer action is misinformation',
        textTh: 'การกระทำของกลุ่มคือ Disinformation; การกระทำของลูกค้าคือ Misinformation'
      },
      {
        id: 'c4',
        textEn: 'Both actions are brand impersonation',
        textTh: 'ทั้งสองการกระทำจัดเป็น Brand impersonation'
      }
    ],
    correctChoiceIds: ['c3'],
    explanationTh:
      'ความแตกต่างอยู่ที่เจตนา: Disinformation คือการจงใจสร้างข้อมูลเท็จเพื่อบิดเบือนหลอกลวง ส่วน Misinformation คือการส่งต่อข้อมูลผิดพลาดโดยเข้าใจผิดและไม่มีเจตนาร้าย',
    choiceRationales: {
      c1: 'ผิด: Pretexting คือการแต่งเรื่องราวสมมติเพื่อลวงขอข้อมูลโดยตรง ไม่ใช่การแพร่ข่าวเท็จสาธารณะ เหมาะกับโทรหลอกฝ่ายช่วยเหลือไอที',
      c2: 'ผิด: ลำดับสลับกันเพราะกลุ่มแรกมีเจตนาหลอกลวงชัดเจน ส่วนลูกค้าส่งต่อโดยไม่รู้ความจริง จึงไม่ตรงกับบริบทนี้',
      c3: 'ถูก: กลุ่มผู้สร้างเอกสารปลอมทำอย่างจงใจ (Disinformation) ขณะที่ลูกค้าแชร์ต่อจากความเข้าใจผิด (Misinformation)',
      c4: 'ผิด: โจทย์เน้นความต่างด้านเจตนาของข่าวเท็จ ไม่ใช่การปลอมหน้าเว็บรับล็อกอิน เหมาะกับเว็บเลียนแบบโลโก้องค์กร'
    },
    misconceptionTh:
      'ผู้เรียนมักใช้คำว่า Misinformation และ Disinformation สลับกันหรือคิดว่ามีความหมายเหมือนกันทุกประการ',
    relatedLessonIds: ['L2-03'],
    tags: ['disinformation', 'misinformation', 'social-engineering']
  },
  {
    id: 'Q2-027',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A legacy C service reserves a fixed-length stack array for incoming search terms without verifying input boundaries. When overly long input arrives, adjacent memory is overwritten and the daemon terminates unexpectedly. Which vulnerability occurred, and what is the MOST direct coding remediation?',
    promptTh:
      'บริการภาษา C รุ่นเก่าจองพื้นที่อาร์เรย์บน Stack ขนาดคงที่เพื่อรับคำค้นหาโดยไม่ตรวจสอบขอบเขตความยาวของข้อมูลนำเข้า เมื่อได้รับข้อมูลที่ยาวเกินขนาด พื้นที่หน่วยความจำข้างเคียงจะถูกเขียนทับจนโปรเซสหยุดทำงานกะทันหัน ช่องโหว่นี้คืออะไร และวิธีแก้ไขระดับโค้ดที่ตรงจุดที่สุดคือข้อใด?',
    choices: [
      {
        id: 'c1',
        textEn: 'Memory injection; restrict database account privileges',
        textTh: 'Memory injection; จำกัดสิทธิ์บัญชีฐานข้อมูล'
      },
      {
        id: 'c2',
        textEn: 'Buffer overflow; implement strict bounds checking or memory-safe constructs',
        textTh: 'Buffer overflow; เพิ่มการตรวจสอบขอบเขตข้อมูลนำเข้าหรือใช้โครงสร้างจัดการหน่วยความจำที่ปลอดภัย'
      },
      {
        id: 'c3',
        textEn: 'Race condition; enable file-system locking on temporary files',
        textTh: 'Race condition; เปิดใช้การล็อกไฟล์ชั่วคราวในระบบไฟล์'
      },
      {
        id: 'c4',
        textEn: 'Cross-site scripting; enforce a strict Content Security Policy',
        textTh: 'Cross-site scripting; บังคับใช้นโยบาย Content Security Policy'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'การเขียนข้อมูลเกินขนาดบัฟเฟอร์ที่จองไว้จนล้นทับหน่วยความจำข้างเคียงคือ Buffer overflow ซึ่งแก้ไขที่ต้นเหตุด้วยการตรวจขอบเขตข้อมูล (Bounds checking) หรือใช้ภาษา/ฟังก์ชันที่ปลอดภัยด้านหน่วยความจำ',
    choiceRationales: {
      c1: 'ผิด: Memory injection เป็นการแทรกโค้ดเข้าพื้นที่ RAM ของโปรเซสอื่นโดยตรง ไม่ใช่การล้นบัฟเฟอร์ เหมาะกับการฉีดคำสั่งข้ามโปรเซส',
      c2: 'ถูก: การไม่ตรวจสอบความยาวข้อมูลนำเข้าทำให้เกิด Buffer overflow และแก้ได้ตรงจุดด้วยการทำ Bounds checking ควบคู่กับ ASLR/DEP',
      c3: 'ผิด: Race condition เกิดจากช่องว่างเวลาระหว่างการตรวจกับการใช้งานทรัพยากรพร้อมกัน ไม่ใช่การล้นหน่วยความจำ เหมาะกับปัญหา TOCTOU',
      c4: 'ผิด: XSS เป็นการสั่งทำงานสคริปต์ฝั่งเบราว์เซอร์ไม่ใช่หน่วยความจำภาษา C เหมาะกับช่องโหว่แสดงผล HTML'
    },
    misconceptionTh:
      'ผู้เรียนบางคนสับสนระหว่าง Buffer overflow (เขียนล้นขอบเขตหน่วยความจำของโปรแกรมเอง) กับ Memory injection (แทรกโค้ดเข้าโปรเซสอื่น)',
    relatedLessonIds: ['L2-04'],
    tags: ['buffer-overflow', 'application-vulnerabilities', 'secure-coding']
  },
  {
    id: 'Q2-028',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn:
      'Endpoint behavioral sensors alert that unauthorized executable instructions were written directly into the active RAM space of a trusted system utility process, with no malicious file ever stored on disk. Which vulnerability or execution mechanism does this indicate?',
    promptTh:
      'ระบบตรวจจับพฤติกรรมปลายทางแจ้งเตือนว่ามีการเขียนชุดคำสั่งที่ไม่ได้รับอนุญาตเข้าไปในพื้นที่หน่วยความจำ RAM ของโปรเซสอรรถประโยชน์ระบบที่เชื่อถือได้ซึ่งกำลังทำงานอยู่โดยตรง โดยไม่มีไฟล์อันตรายถูกบันทึกลงดิสก์เลย เหตุการณ์นี้บ่งชี้ถึงช่องโหว่หรือกลไกใด?',
    choices: [
      { id: 'c1', textEn: 'Malicious update', textTh: 'การอัปเดตอันตราย (Malicious update)' },
      { id: 'c2', textEn: 'Buffer overflow', textTh: 'ภาวะบัฟเฟอร์ล้น (Buffer overflow)' },
      { id: 'c3', textEn: 'SQL injection', textTh: 'การแทรกคำสั่ง SQL (SQL injection)' },
      { id: 'c4', textEn: 'Memory injection', textTh: 'การฉีดคำสั่งเข้าหน่วยความจำ (Memory injection)' }
    ],
    correctChoiceIds: ['c4'],
    explanationTh:
      'Memory injection แทรกโค้ดเข้าพื้นที่หน่วยความจำของโปรเซสที่ทำงานอยู่โดยตรงโดยไม่เขียนไฟล์ลงฮาร์ดดิสก์ จึงหลบการสแกนไฟล์แบบเดิมได้',
    choiceRationales: {
      c1: 'ผิด: Malicious update อาศัยกลไกอัปเดตซอฟต์แวร์ติดตั้งไฟล์แพ็กเกจปลอม เหมาะกับกรณีเซิร์ฟเวอร์อัปเดตถูกแทรกแซง',
      c2: 'ผิด: Buffer overflow เกิดจากการป้อนข้อมูลเกินขนาดจนล้นทับพื้นที่ข้างเคียง เหมาะกับโปรแกรมที่ไม่ตรวจสอบขอบเขตความยาวข้อมูล',
      c3: 'ผิด: SQL injection มุ่งปรับเปลี่ยนคำสั่งฐานข้อมูลหลังบ้าน เหมาะกับช่องโหว่การต่อสตริงคิวรีในเว็บแอป',
      c4: 'ถูก: การเขียนชุดคำสั่งลงในหน่วยความจำของโปรเซสที่เชื่อถือได้โดยไม่สร้างไฟล์บนดิสก์คือ Memory injection'
    },
    misconceptionTh:
      'มักเข้าใจว่าแอนติไวรัสแบบสแกนไฟล์บนดิสก์เพียงพอแล้ว ทั้งที่ Memory injection ทำงานใน RAM จึงต้องอาศัย EDR ตรวจจับพฤติกรรมข้ามโปรเซส',
    relatedLessonIds: ['L2-04'],
    tags: ['memory-injection', 'fileless', 'application-vulnerabilities']
  },
  {
    id: 'Q2-029',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.3'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'exam-ready',
    promptEn:
      'A privileged log-rotation service verifies that a temporary path points to an ordinary log file before opening it moments later. During that brief gap, another process replaces the path reference with a link to a protected system configuration file, causing unauthorized modification. Which vulnerability occurred, and which fix addresses the root cause? (Choose two.)',
    promptTh:
      'บริการหมุนเวียนบันทึกที่มีสิทธิ์ระดับสูงตรวจสอบว่าตำแหน่งชั่วคราวชี้ไปยังไฟล์บันทึกปกติหรือไม่ ก่อนจะเปิดไฟล์ดังกล่าวใช้งานในเสี้ยววินาทีถัดมา ระหว่างช่วงเวลาสั้นๆ นั้น โปรเซสอื่นได้สับเปลี่ยนตัวอ้างอิงให้ชี้ไปยังไฟล์ตั้งค่าระบบที่มีการป้องกันแทน ส่งผลให้ไฟล์สำคัญถูกแก้ไขโดยไม่ได้รับอนุญาต ข้อใดระบุช่องโหว่และวิธีแก้ที่ต้นเหตุได้ถูกต้อง? (เลือก 2 ข้อ)',
    choices: [
      { id: 'c1', textEn: 'Cross-site scripting (XSS)', textTh: 'Cross-site scripting (XSS)' },
      {
        id: 'c2',
        textEn: 'Race condition (Time-of-Check / Time-of-Use)',
        textTh: 'Race condition (Time-of-Check / Time-of-Use)'
      },
      {
        id: 'c3',
        textEn: 'Cryptographic key reuse weakness',
        textTh: 'จุดอ่อนการใช้กุญแจเข้ารหัสซ้ำ'
      },
      {
        id: 'c4',
        textEn: 'Encrypting log files with TLS prior to rotation',
        textTh: 'เข้ารหัสไฟล์บันทึกด้วย TLS ก่อนทำการหมุนเวียนไฟล์'
      },
      {
        id: 'c5',
        textEn: 'Performing an atomic operation using a locked, verified file handle',
        textTh: 'ดำเนินการแบบขั้นตอนเดียว (Atomic) ผ่าน File handle ที่ล็อกและตรวจสอบแล้ว'
      }
    ],
    correctChoiceIds: ['c2', 'c5'],
    explanationTh:
      'ช่องว่างเวลาระหว่างการตรวจสอบ (TOC) กับการใช้งานจริง (TOU) คือ Race condition แบบ TOCTOU ซึ่งแก้ที่ต้นเหตุด้วยการทำเป็น Atomic operation และอ้างอิงผ่าน File handle ที่ล็อกไว้ต่อเนื่อง',
    choiceRationales: {
      c1: 'ผิด: XSS เป็นช่องโหว่การแสดงผลสคริปต์บนเบราว์เซอร์ ไม่ใช่ความขัดแย้งลำดับเวลาในระบบไฟล์ เหมาะกับช่องแสดงผล HTML ที่ไม่เข้ารหัสเอาต์พุต',
      c2: 'ถูก: การสับเปลี่ยนไฟล์เป้าหมายระหว่างขั้นตอนตรวจสิทธิ์กับขั้นตอนเปิดไฟล์เป็นรูปแบบเฉพาะของ TOCTOU race condition',
      c3: 'ผิด: ไม่เกี่ยวข้องกับการออกแบบอัลกอริทึมหรือคีย์เข้ารหัสลับ เหมาะกับปัญหาการจัดการกุญแจคริปโตกราฟีซ้ำซ้อน',
      c4: 'ผิด: TLS ป้องกันข้อมูลระหว่างส่งผ่านเครือข่าย ไม่ได้ปิดช่องว่างเวลาการเข้าถึงไฟล์ภายในเครื่อง เหมาะกับการดักฟังทราฟฟิกเครือข่าย',
      c5: 'ถูก: การเปิดและตรวจสอบผ่าน Handle เดียวที่ล็อกไว้ต่อเนื่องขจัดช่วงเวลาว่างที่โปรเซสอื่นจะแทรกแซงสับเปลี่ยนเส้นทางได้'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนคิดว่าการตรวจสิทธิ์ให้ละเอียดขึ้นก่อนเปิดไฟล์เพียงพอแล้ว โดยไม่รู้ว่าหากยังแยกขั้นตอนตรวจกับใช้งานออกจากกันก็ยังเกิด TOCTOU ได้',
    relatedLessonIds: ['L2-04'],
    tags: ['race-condition', 'toctou', 'application-vulnerabilities']
  },
  {
    id: 'Q2-030',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'foundation',
    promptEn:
      'A desktop reporting client automatically downloads software patches from a vendor update server without verifying cryptographic signatures on the installer packages. After the update repository is breached, workstations silently install tampered executables. Which vulnerability does this illustrate?',
    promptTh:
      'โปรแกรมจัดทำรายงานบนเดสก์ท็อปดาวน์โหลดแพตช์ซอฟต์แวร์จากเซิร์ฟเวอร์ผู้ผลิตโดยอัตโนมัติแต่ไม่ได้ตรวจสอบลายเซ็นดิจิทัลเชิงคริปโตกราฟีของแพ็กเกจติดตั้ง เมื่อเซิร์ฟเวอร์อัปเดตถูกเจาะ เครื่องลูกข่ายทั้งหมดจึงติดตั้งโปรแกรมที่ถูกดัดแปลงโดยอัตโนมัติ เหตุการณ์นี้สะท้อนช่องโหว่ใด?',
    choices: [
      { id: 'c1', textEn: 'SQL injection', textTh: 'SQL injection' },
      { id: 'c2', textEn: 'Malicious update', textTh: 'Malicious update' },
      { id: 'c3', textEn: 'Buffer overflow', textTh: 'Buffer overflow' },
      { id: 'c4', textEn: 'Directory listing misconfiguration', textTh: 'การตั้งค่าเปิดเผยรายการไฟล์ (Directory listing)' }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'กลไกอัปเดตที่ขาดการตรวจสอบ Digital signature เปิดทางให้ผู้โจมตีส่งมอบแพ็กเกจอันตรายผ่านช่องทางอัปเดตที่เชื่อถือได้ ซึ่งเป็นช่องโหว่ Malicious update',
    choiceRationales: {
      c1: 'ผิด: SQL injection มุ่งปรับเปลี่ยนคำสั่งฐานข้อมูลหลังบ้าน ไม่ใช่แพ็กเกจอัปเดต เหมาะกับช่องโหว่การต่อสตริงคำสั่งคิวรีในเว็บ',
      c2: 'ถูก: การติดตั้งแพ็กเกจอัปเดตที่ไม่ผ่านการตรวจสอบความถูกต้องและความเป็นของแท้ทำให้ระบบติดตั้งโค้ดอันตรายอัตโนมัติ',
      c3: 'ผิด: Buffer overflow เกิดจากการเขียนข้อมูลเกินขอบเขตหน่วยความจำของโปรแกรม เหมาะกับแอปพลิเคชันที่ไม่ตรวจสอบความยาวอินพุต',
      c4: 'ผิด: Directory listing เป็นการตั้งค่าเว็บเซิร์ฟเวอร์เปิดเผยรายชื่อไฟล์ เหมาะกับปัญหา Misconfiguration บนเว็บเซิร์ฟเวอร์'
    },
    misconceptionTh:
      'มักเชื่อว่ากลไกอัปเดตอัตโนมัติปลอดภัยเสมอ ทั้งที่หากขาดการตรวจลายเซ็นดิจิทัลจะกลายเป็นช่องทางกระจายมัลแวร์ได้',
    relatedLessonIds: ['L2-04', 'L1-06', 'L1-05'],
    tags: ['malicious-update', 'digital-signature', 'application-vulnerabilities']
  },
  {
    id: 'Q2-031',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'Dynamic testing shows an invoice-search input concatenates raw user entries directly into backend database queries, allowing unauthorized extraction of customer records. Management proposes deploying a WAF and closing the issue without changing application code. Which root-cause remediation should the security engineer recommend FIRST?',
    promptTh:
      'ผลทดสอบแอปพลิเคชันขณะทำงานพบว่าช่องค้นหาใบแจ้งหนี้นำค่าที่ผู้ใช้ป้อนไปต่อเข้ากับคำสั่งฐานข้อมูลหลังบ้านโดยตรง ทำให้สามารถดึงข้อมูลลูกค้าโดยไม่ได้รับอนุญาตได้ ฝ่ายบริหารเสนอให้ติดตั้ง WAF แล้วปิดงานทันทีโดยไม่แก้ไขซอร์สโค้ด วิศวกรความปลอดภัยควรแนะนำวิธีแก้ที่ต้นเหตุใดเป็นอันดับแรก?',
    choices: [
      {
        id: 'c1',
        textEn: 'Refactor database access logic to use parameterized queries (prepared statements)',
        textTh: 'ปรับแก้โค้ดการเข้าถึงฐานข้อมูลให้ใช้ Parameterized queries (Prepared statements)'
      },
      {
        id: 'c2',
        textEn: 'Apply HTML output encoding and set the HttpOnly flag on session cookies',
        textTh: 'เข้ารหัสเอาต์พุต HTML และตั้งค่า HttpOnly flag บนคุกกี้เซสชัน'
      },
      {
        id: 'c3',
        textEn: 'Upgrade transport encryption to TLS 1.3 across the external load balancer',
        textTh: 'อัปเกรดการเข้ารหัสการขนส่งเป็น TLS 1.3 บน Load balancer ด้านนอก'
      },
      {
        id: 'c4',
        textEn: 'Disable directory browsing in the web server configuration',
        textTh: 'ปิดฟีเจอร์แสดงรายการไฟล์ในโฟลเดอร์บนการตั้งค่าเว็บเซิร์ฟเวอร์'
      }
    ],
    correctChoiceIds: ['c1'],
    explanationTh:
      'อาการดังกล่าวคือ SQL Injection (SQLi) ที่เกิดจากการต่อสตริงคำสั่ง SQL ในโค้ด WAF เป็นเพียงมาตรการเสริมชั่วคราว การแก้ที่ต้นเหตุอันดับแรกคือใช้ Parameterized queries แยกคำสั่งออกจากข้อมูล',
    choiceRationales: {
      c1: 'ถูก: Parameterized queries บังคับให้ฐานข้อมูลตีความค่าที่ผู้ใช้ป้อนเป็นข้อมูลเท่านั้น ไม่ใช่โครงสร้างคำสั่ง SQL จึงแก้ SQLi ที่ต้นเหตุ',
      c2: 'ผิด: Output encoding และ HttpOnly ป้องกันสคริปต์ฝั่งเบราว์เซอร์ ไม่ได้แก้คำสั่ง SQL หลังบ้าน เหมาะกับการป้องกัน Cross-Site Scripting (XSS)',
      c3: 'ผิด: TLS เข้ารหัสเฉพาะข้อมูลระหว่างส่งผ่านเครือข่าย ไม่ได้ตรวจสอบโครงสร้างคำสั่งฐานข้อมูล เหมาะกับการป้องกันการดักฟังระหว่างทาง',
      c4: 'ผิด: การปิด Directory browsing แก้ปัญหาการเปิดเผยรายชื่อไฟล์บนเว็บเซิร์ฟเวอร์ ไม่ได้อุดช่องโหว่ SQLi เหมาะกับ Misconfiguration'
    },
    misconceptionTh:
      'ผู้เรียนมักสับสนว่า WAF หรือ HTTPS สามารถทดแทนการแก้ซอร์สโค้ดด้วย Parameterized queries สำหรับป้องกัน SQLi ได้อย่างถาวร',
    relatedLessonIds: ['L2-04', 'L2-09'],
    tags: ['sqli', 'parameterized-queries', 'web-vulnerabilities']
  },
  {
    id: 'Q2-032',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.3'],
    type: 'msq',
    selectCount: 2,
    difficulty: 'intermediate',
    promptEn:
      'A customer-support portal renders submitted ticket comments directly inside administrator HTML dashboards without sanitization, enabling unauthorized client-side scripts to run in administrator browsers and read session tokens. Which TWO controls MOST effectively prevent and limit this vulnerability? (Choose two.)',
    promptTh:
      'พอร์ทัลบริการลูกค้านำข้อความความคิดเห็นที่ผู้ใช้ส่งมาแสดงผลบนแดชบอร์ด HTML ของผู้ดูแลระบบโดยตรงโดยไม่คัดกรอง ทำให้สคริปต์ที่ไม่ได้รับอนุญาตทำงานบนเบราว์เซอร์ผู้ดูแลและอ่านโทเค็นเซสชันได้ มาตรการ 2 ข้อใดป้องกันและจำกัดความเสียหายของช่องโหว่นี้ได้อย่างมีประสิทธิภาพที่สุด? (เลือก 2 ข้อ)',
    choices: [
      {
        id: 'c1',
        textEn: 'Apply context-aware output encoding before rendering user-supplied content',
        textTh: 'ใช้การเข้ารหัสเอาต์พุตตามบริบท (Context-aware output encoding) ก่อนแสดงผลข้อมูลผู้ใช้'
      },
      {
        id: 'c2',
        textEn: 'Move database credentials into an encrypted connection string',
        textTh: 'ย้ายข้อมูลรับรองฐานข้อมูลไปเก็บในสตริงเชื่อมต่อที่เข้ารหัส'
      },
      {
        id: 'c3',
        textEn: 'Require biometric authentication for SSH server administration',
        textTh: 'บังคับใช้การยืนยันตัวตนชีวมิติสำหรับการจัดการเซิร์ฟเวอร์ผ่าน SSH'
      },
      {
        id: 'c4',
        textEn: 'Configure a strict Content Security Policy (CSP) and HttpOnly session cookies',
        textTh: 'กำหนดนโยบาย Content Security Policy (CSP) ที่เข้มงวดและตั้งค่าคุกกี้เซสชันแบบ HttpOnly'
      },
      {
        id: 'c5',
        textEn: 'Disable client browser TLS certificate pinning',
        textTh: 'ปิดการตรึงใบรับรอง TLS บนเว็บเบราว์เซอร์ของลูกข่าย'
      }
    ],
    correctChoiceIds: ['c1', 'c4'],
    explanationTh:
      'สถานการณ์นี้คือ Cross-Site Scripting (XSS) ซึ่งแก้ที่ต้นเหตุด้วย Context-aware output encoding และจำกัดการรันสคริปต์กับการเข้าถึงคุกกี้ด้วย CSP และ HttpOnly flag',
    choiceRationales: {
      c1: 'ถูก: Output encoding แปลงอักขระพิเศษให้เบราว์เซอร์แสดงผลเป็นข้อความธรรมดาแทนการตีความรันเป็นสคริปต์',
      c2: 'ผิด: การป้องกันรหัสฐานข้อมูลหลังบ้านไม่ช่วยหยุดการรันสคริปต์บนเบราว์เซอร์ผู้ใช้งาน เหมาะกับการลดความเสี่ยง Hardcoded credentials',
      c3: 'ผิด: SSH เป็นโปรโตคอลจัดการเซิร์ฟเวอร์ระยะไกล ไม่ได้ควบคุมการแสดงผลเว็บในเบราว์เซอร์ เหมาะกับการเสริมแกร่งผู้ดูแลระบบ',
      c4: 'ถูก: CSP จำกัดแหล่งสคริปต์ที่เบราว์เซอร์รันได้และ HttpOnly ป้องกันไม่ให้สคริปต์ฝั่งไคลเอ็นต์อ่าน Session cookie',
      c5: 'ผิด: การปิดการตรึงใบรับรอง TLS (Certificate pinning) ไม่ช่วยป้องกัน XSS และลดความแข็งแรงของการยืนยันตัวตนเซิร์ฟเวอร์ จึงไม่ควรปิดเป็นมาตรการแก้ XSS'
    },
    misconceptionTh:
      'ผู้เรียนบางส่วนแยกไม่ออกระหว่าง SQLi (โจมตีฐานข้อมูลด้วย Parameterized queries) กับ XSS (โจมตีเบราว์เซอร์ผู้ใช้ที่ต้องแก้ด้วย Output encoding และ CSP)',
    relatedLessonIds: ['L2-04'],
    tags: ['xss', 'csp', 'output-encoding', 'web-vulnerabilities']
  },
  {
    id: 'Q2-033',
    examCode: 'SY0-701',
    domainId: 'D2',
    objectiveIds: ['2.3'],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'exam-ready',
    promptEn:
      'During a server review, assessors identify three separate issues: (1) an unpatched Linux kernel subsystem bug enabling local privilege escalation, (2) production debug mode left active exposing internal stack details, and (3) a static symmetric key embedded directly inside application source code. Which classification accurately matches these three findings in order?',
    promptTh:
      'ระหว่างการตรวจสอบเซิร์ฟเวอร์ ผู้ประเมินพบปัญหาแยกกัน 3 รายการ ได้แก่ (1) ข้อบกพร่องในระบบย่อยของเคอร์เนล Linux ที่ยังไม่ได้แพตช์ซึ่งเปิดทางให้ยกระดับสิทธิ์ภายในเครื่องได้ (2) โหมด Debug ถูกเปิดทิ้งไว้ในระบบใช้งานจริงจนเผยรายละเอียดภายใน และ (3) กุญแจเข้ารหัสแบบสมมาตรถูกฝังตายตัวในซอร์สโค้ดของแอปพลิเคชัน ข้อใดจำแนกปัญหาทั้งสามตามลำดับได้ถูกต้อง?',
    choices: [
      {
        id: 'c1',
        textEn: 'Buffer overflow, race condition, and SQL injection',
        textTh: 'Buffer overflow, Race condition และ SQL injection'
      },
      {
        id: 'c2',
        textEn: 'OS-based vulnerability, misconfiguration, and cryptographic weakness',
        textTh: 'OS-based vulnerability, Misconfiguration และ Cryptographic weakness'
      },
      {
        id: 'c3',
        textEn: 'Memory injection, malicious update, and cross-site scripting',
        textTh: 'Memory injection, Malicious update และ Cross-site scripting'
      },
      {
        id: 'c4',
        textEn: 'Cryptographic weakness, OS-based vulnerability, and misconfiguration',
        textTh: 'Cryptographic weakness, OS-based vulnerability และ Misconfiguration'
      }
    ],
    correctChoiceIds: ['c2'],
    explanationTh:
      'บั๊กใน Kernel คือ OS-based vulnerability การเปิด Debug mode ทิ้งไว้คือ Misconfiguration และการใช้ Hardcoded symmetric key คือ Cryptographic weakness',
    choiceRationales: {
      c1: 'ผิด: รายการที่ 1-3 ไม่ใช่การล้นบัฟเฟอร์ ช่องว่างเวลา หรือคำสั่งฐานข้อมูล เหมาะกับโค้ดที่ไม่ตรวจขอบเขตอินพุต ปัญหา TOCTOU และ SQLi',
      c2: 'ถูก: การแยกแยะจุดอ่อนระดับ Kernel (OS), การตั้งค่าระบบผิด (Misconfiguration) และการฝังคีย์ในโค้ด (Cryptographic weakness) ถูกต้องตามลำดับ',
      c3: 'ผิด: ไม่ได้เกิดจากการฉีดโค้ดข้ามโปรเซส การอัปเดตแพ็กเกจปลอม หรือสคริปต์เบราว์เซอร์ เหมาะกับมัลแวร์ไร้ไฟล์ กลไกอัปเดตไร้ลายเซ็น และ XSS',
      c4: 'ผิด: ลำดับสลับกันไม่ตรงกับข้อ (1), (2) และ (3) ในสถานการณ์ เหมาะกับกรณีพบจุดอ่อนคีย์ก่อนปัญหาเคอร์เนลและการตั้งค่าผิด'
    },
    misconceptionTh:
      'ผู้เรียนบางคนเหมารวมทุกปัญหาบนเว็บเซิร์ฟเวอร์ว่าเป็นบั๊กในโค้ด ทั้งที่ Misconfiguration และ Cryptographic weakness มีสาเหตุและเจ้าของงานแก้ไขต่างกัน',
    relatedLessonIds: ['L2-04', 'L1-05', 'L2-09'],
    tags: ['os-vulnerabilities', 'misconfiguration', 'cryptographic-weakness']
  }
];
