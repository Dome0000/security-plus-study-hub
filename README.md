# Security+ Study Hub (`SY0-701`)

> **ข้อจำกัดความรับผิดชอบ (Disclaimer):**  
> “เว็บไซต์นี้เป็นสื่อเตรียมสอบอิสระ ไม่ได้เป็นพันธมิตรหรือได้รับการรับรองจาก CompTIA ข้อสอบทั้งหมดเป็นข้อสอบฝึกที่สร้างขึ้นใหม่ ไม่ใช่ข้อสอบจริงหรือ exam dumps และผลการฝึกไม่รับประกันผลการสอบ”

---

## 1. โครงการนี้ทำอะไร

**Security+ Study Hub** คือแพลตฟอร์มเว็บสำหรับเตรียมสอบ **CompTIA Security+ (`SY0-701`)** แบบ **100% Static Website** (ไม่ใช้ backend, ไม่ใช้ฐานข้อมูลฝั่งเซิร์ฟเวอร์, ไม่เก็บ telemetry, ไม่เรียก external CDN ขณะรัน) พัฒนาด้วย React + TypeScript + Vite สำหรับเรียนรู้เนื้อหาและฝึกทำข้อสอบภายในเบราว์เซอร์ของผู้ใช้เอง

องค์ประกอบหลักภายในเว็บไซต์:
- **บทเรียนเชิงลึกภาษาไทย 42 บท (`L1-01`–`L5-07`)** ครอบคลุมครบ 5 Domains และ 28 Numbered Objectives พร้อมตารางเปรียบเทียบ สถานการณ์ตัวอย่าง จุดเข้าใจผิดที่พบบ่อย และ Knowledge Checks ท้ายบทอย่างน้อยบทละ 3 ข้อ
- **คลังข้อสอบสถานการณ์จำลอง 300 ข้อ (`MCQ` และ `MSQ`)** โจทย์ภาษาอังกฤษสไตล์ห้องสอบ พร้อมปุ่มสลับคำแปลภาษาไทยแบบเป็นกลาง (ไม่ใบ้คำตอบ) และเฉลยอธิบายเหตุผลครบทุกตัวเลือก
- **Interactive PBQs จำนวน 15 ข้อ (`PBQ-D1-01`–`PBQ-D5-03`)** รองรับการควบคุมด้วยคีย์บอร์ดทั้งหมด 5 รูปแบบ (`matching-matrix`, `rule-builder`, `log-investigator`, `architecture-configurator`, `sequence-and-triage`) พร้อมตรวจคะแนนแยกรายเกณฑ์ (Rubric breakdown)
- **ศูนย์สอบจำลอง (Mock Exam Center)** ประกอบด้วยชุดข้อสอบมาตรฐานที่ไม่ซ้ำข้อกัน **3 ชุด (`Form A`, `Form B`, `Form C`)** ชุดละ 90 ข้อ (85 MCQ/MSQ + 5 PBQ, เวลา 90 นาที) และโหมด **Random 90** ตามสัดส่วน Domain ทางการ
- **ตัวช่วยทบทวนครบวงจร:** คำศัพท์และคำย่อ (190 รายการ), Flashcards (87 ใบ), แผนอ่านสอบ 30 วัน, Global Search (`Ctrl+K`), Dark/Light Theme และเครื่องมือสำรอง/นำเข้าความคืบหน้าแบบ JSON

---

## 2. Exam Code และขอบเขตที่รองรับ

| รายการ | รายละเอียด |
| :--- | :--- |
| **Exam Code ที่รองรับ** | **`SY0-701`** (CompTIA Security+ V7, Exam Objectives v5.0) |
| **วันที่ตรวจทานสถานะล่าสุด** | `2026-11-24` |
| **สถานะปัจจุบัน** | Active (เปิดสอบอยู่) |
| **วันเปิดตัว & กำหนดปิดสอบอ้างอิง** | เปิดตัว `2023-11-07` • กำหนดปิดสอบ EN `2027-06-11` • TH/JA/PT/ES `2027-08-13` |
| **การแยกขอบเขตเวอร์ชัน** | แยกขอบเขต **`SY0-701`** ออกจาก **`SY0-801`** (เปิดตัว `2026-11-17`) อย่างเด็ดขาด ไม่นำเนื้อหาต่างเวอร์ชันมาปะปนกัน |
| **Domains & Weights** | D1: General Security Concepts (`12%`) • D2: Threats, Vulnerabilities, and Mitigations (`22%`) • D3: Security Architecture (`18%`) • D4: Security Operations (`28%`) • D5: Security Program Management and Oversight (`20%`) |

รายละเอียด blueprint และแหล่งอ้างอิงอ่านเพิ่มเติมได้ที่ [`docs/exam-blueprint.md`](docs/exam-blueprint.md) และ [`docs/sources.md`](docs/sources.md)

---

## 3. วิธีติดตั้งและรัน Local

### ความต้องการของระบบ
- **Node.js 22+ / 24 LTS** และ **npm** (มี lockfile `package-lock.json`)
- Chromium ผ่าน Playwright (สำหรับรัน E2E tests)

### ขั้นตอนรันโหมดพัฒนา (Development Server)

```bash
# 1. ติดตั้ง dependencies ตาม package-lock.json
npm ci

# 2. ตรวจสอบความสมบูรณ์ของคลังเนื้อหา (42 บท, 300 ข้อ, 15 PBQs, 3 Forms)
npm run validate:content

# 3. เปิดเซิร์ฟเวอร์พัฒนา (Vite Dev Server)
npm run dev
```

> **หมายเหตุสำหรับ Windows PowerShell:** หาก Execution Policy บล็อก `npm.ps1` / `npx.ps1` ให้ใช้ `npm.cmd` และ `npx.cmd` แทน (เช่น `npm.cmd ci`, `npm.cmd run dev`)

---

## 4. วิธีทดสอบและ Build

โปรเจกต์ใช้ Quality Gates ทั้งหมด 6 ขั้นตอนก่อนเผยแพร่:

```bash
# 1. ตรวจ schema, cross-references, สัดส่วนตำแหน่งคำตอบ, PBQ rubric และ Mock Forms A/B/C
npm run validate:content

# 2. ตรวจ ESLint (TypeScript + React Hooks + jsx-a11y)
npm run lint

# 3. ตรวจ TypeScript Strict Typecheck
npm run typecheck

# 4. รัน Unit Tests (Engine & LocalStorage Persistence)
npm run test

# 5. Build ไฟล์ Static Production ลงโฟลเดอร์ dist/
npm run build
# (ค่าเริ่มต้นเมื่อ build คือ base path /security-plus-study-hub/; กำหนดเองได้ผ่าน VITE_BASE_PATH)

# 6. รัน End-to-End Tests ด้วย Playwright (ทดสอบ production dist/ ภายใต้ base path จริง)
npx playwright install chromium   # รันครั้งแรกครั้งเดียวหากยังไม่มี browser binary
npm run test:e2e
```

---

## 5. วิธีเพิ่มบทเรียนและข้อสอบ

1. **อ้างอิง Blueprint และ Schema กลาง:** ตรวจสอบโครงสร้าง Zod schema ที่ [`src/types/`](src/types/) ได้แก่ [`lesson.ts`](src/types/lesson.ts), [`question.ts`](src/types/question.ts), [`pbq.ts`](src/types/pbq.ts) และ [`exam.ts`](src/types/exam.ts) รวมถึงแผน ID ใน [`docs/content-coverage.md`](docs/content-coverage.md)
2. **เพิ่มเนื้อหาในโฟลเดอร์ `src/data/`:**
   - บทเรียน: เพิ่มในไฟล์ใต้ [`src/data/lessons/`](src/data/lessons/) โดยตั้งรหัสต่อท้ายตามลำดับ domain (เช่น `L1-07`) ระบุ `examCode: 'SY0-701'`, `objectiveIds` ที่ตรงกับ domain และ `knowledgeChecks` อย่างน้อย 3 ข้อ
   - ข้อสอบ MCQ/MSQ: เพิ่มใน [`src/data/questions/`](src/data/questions/) ระบุ `correctChoiceIds`, `choiceRationales` ครบทุกตัวเลือก, `explanationTh`, `misconceptionTh`, `relatedLessonIds` และกระจายตำแหน่งคำตอบที่ถูกต้องให้สมดุล
   - PBQ: เพิ่มใน [`src/data/pbqs/`](src/data/pbqs/) โดยใช้หนึ่งใน 5 templates และกำหนดน้ำหนัก `rubric` ให้รวมกันเท่ากับ `1.0`
   - หากเพิ่มไฟล์ใหม่ ให้นำไปผูก lazy import ใน [`src/data/contentRegistry.ts`](src/data/contentRegistry.ts) และหากจัดลงชุด Mock Exam ให้ลงทะเบียน ID ใน [`src/data/mockForms.ts`](src/data/mockForms.ts) (ต้องไม่ซ้ำระหว่าง `form-a`, `form-b`, `form-c` และคงสัดส่วน 85 Q + 5 PBQ)
3. **ตรวจสอบก่อน Commit:** รัน `npm run validate:content`, `npm run typecheck` และ `npm run lint` ให้ผ่าน 0 errors

---

## 6. วิธี Deploy ขึ้น GitHub Pages

โปรเจกต์ตั้งค่า `HashRouter` และ `vite.config.ts` (`VITE_BASE_PATH=/security-plus-study-hub/`) ไว้พร้อมสำหรับ GitHub Pages แล้ว และมี workflow ที่ [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. บน GitHub Repository ไปที่ **Settings → Pages → Build and deployment → Source** เลือก **GitHub Actions**
2. ทุกการ push เข้า branch `main` (หรือกดสั่ง **Run workflow** ผ่าน `workflow_dispatch`) จะรัน CI ครบ 6 ขั้นตอน แล้วอัปโหลด `./dist` ไปเผยแพร่บน GitHub Pages อัตโนมัติ (ส่วน Pull Requests จะรันตรวจ CI อย่างเดียวโดยไม่ deploy production)

รายละเอียดเพิ่มเติมและวิธีแก้ไขปัญหาดูได้ใน [`docs/deployment.md`](docs/deployment.md)

---

## 7. ข้อจำกัดของ Static Website

- เว็บไซต์ทำงานแบบ **Client-side ทั้งหมด (100% Static)** ไม่มีการยืนยันตัวตน (login), ไม่มีเซิร์ฟเวอร์เก็บข้อมูล และไม่ซิงค์ความคืบหน้าข้ามอุปกรณ์หรือข้ามเบราว์เซอร์
- ประวัติการเรียน ผลสอบ บุ๊กมาร์ก และชุดข้อสอบที่ทำค้างอยู่ ถูกเก็บไว้ใน `localStorage` ของเบราว์เซอร์เครื่องนั้นเท่านั้น หากผู้ใช้ล้าง browser cache/site data หรือใช้โหมด Incognito/Private ข้อมูลจะสูญหาย
- ระบบ multi-tab guard ใช้ `BroadcastChannel` / `storage` event ในเบราว์เซอร์เดียวกันเพื่อแจ้งเตือนไม่ให้ทำ Mock Exam ซ้อนหลายแท็บ แต่ไม่สามารถคุมการเข้าถึงจากอุปกรณ์อื่นได้

---

## 8. วิธีสำรองและนำเข้าข้อมูลการเรียน (JSON Backup)

1. ไปที่เมนู **แหล่งอ้างอิง & ตั้งค่า** (`#/sources`) ในแถบนำทางหลัก
2. **สำรองข้อมูล (Export):** กดปุ่ม **ดาวน์โหลดไฟล์สำรอง (.json)** เพื่อบันทึกไฟล์ความคืบหน้าทั้งหมด (บทเรียนที่เรียนจบ, บุ๊กมาร์ก, Flashcards, ประวัติข้อสอบที่ทำ และผล Mock Exam) ลงเครื่อง
3. **กู้คืน / ย้ายเครื่อง (Import):** เลือกอัปโหลดไฟล์ `.json` หรือวางข้อความ JSON ลงในช่องนำเข้า ระบบจะตรวจสอบโครงสร้างด้วย Zod schema ก่อนเขียนทับสถานะปัจจุบัน เพื่อป้องกันไฟล์เสียหรือรูปแบบไม่ถูกต้อง
4. **ล้างข้อมูลทั้งหมด (Reset):** มีปุ่มล้างความคืบหน้าทั้งหมดพร้อมหน้าต่างยืนยันสองขั้นตอน

---

## 9. ข้อจำกัดของ Mock Score

- ผลคะแนนจากการทำ Mock Exam ภายในเว็บไซต์นี้แสดงผลเป็น **คะแนนร้อยละ (`Percentage Score`)** ที่คำนวณตรงไปตรงมาจาก `(คะแนนที่ได้ / จำนวนข้อทั้งหมด) × 100`
- เกณฑ์ **`80%`** ถูกระบุชัดเจนว่าเป็น **“เป้าหมายการฝึก (`Practice Target`)”** สำหรับประเมินความพร้อมในการฝึกซ้อมเท่านั้น
- **เว็บไซต์นี้ไม่แปลงคะแนนร้อยละเป็น CompTIA Scaled Score (100–900)** และผลคะแนนจากการฝึกไม่เทียบเท่าหรือไม่รับประกันผลการสอบ `SY0-701` จริง (ซึ่งตามเอกสารทางการของ CompTIA ใช้เกณฑ์ผ่านแบบ scaled score 750/900 โดยมีการถ่วงน้ำหนักข้อสอบแต่ละข้อไม่เท่ากัน)
