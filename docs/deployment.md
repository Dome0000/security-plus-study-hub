# คู่มือ Deployment & CI/CD — Security+ Study Hub (`SY0-701`)

เอกสารนี้อธิบายสถาปัตยกรรมการ build, การทดสอบ base path และขั้นตอนเผยแพร่เว็บไซต์ขึ้น **GitHub Pages** ด้วย **GitHub Actions**

---

## 1. สถาปัตยกรรมการ Deploy

- **Hosting:** GitHub Pages (Project Site) ที่ URL `https://dome0000.github.io/security-plus-study-hub/`
- **Routing:** ใช้ `HashRouter` (`react-router-dom`) ทำให้การรีเฟรชหน้าในเส้นทางย่อย (เช่น `#/lessons/L1-01`, `#/mock-exam`, `#/results/...`) ไม่เกิด HTTP 404 บน GitHub Pages และไม่ต้องพึ่ง fallback redirect ที่ซับซ้อน
- **Vite Base Path (`vite.config.ts`):**
  - ระหว่างพัฒนา (`vite` dev): ใช้ `/`
  - ระหว่าง build (`vite build`): ใช้ `process.env.VITE_BASE_PATH ?? '/security-plus-study-hub/'` เพื่อให้สคริปต์ CSS/JS ทั้งหมดชี้ไปยัง `/security-plus-study-hub/assets/...` อย่างถูกต้อง
- **Strict Static Policy:** ไม่มี environment secrets, ไม่มี runtime CDN requests และไม่มีการรวม `src/__fixtures__/` เข้า production bundle

---

## 2. โครงสร้าง GitHub Actions Workflow (`.github/workflows/deploy.yml`)

Workflow ปฏิบัติตามแนวทางความปลอดภัย least-privilege ของ GitHub Pages:

1. **Triggers:**
   - `push` ไปยัง `main` (รัน CI + Deploy)
   - `pull_request` มายัง `main` (รัน CI เพื่อตรวจสอบเท่านั้น **ไม่ deploy production**)
   - `workflow_dispatch` (รองรับการสั่งรันด้วยมือผ่าน GitHub UI)
2. **Permissions & Concurrency:**
   - Top-level `permissions: { contents: read }`
   - เฉพาะ job `deploy` ที่ขอ `permissions: { pages: write, id-token: write }` และรันภายใต้ `environment: github-pages`
   - กำหนด `concurrency: { group: 'pages', cancel-in-progress: false }` เพื่อป้องกัน deployment ชนกันหรือถูกยกเลิกกลางคัน
3. **CI Gates ใน `build-and-test` (`ubuntu-latest`, Node 24 + `package-lock.json`):**
   - `actions/checkout@v4`
   - `actions/setup-node@v4` (`node-version: 24`, `cache: 'npm'`)
   - `npm ci`
   - `npm run validate:content`
   - `npm run lint`
   - `npm run typecheck`
   - `npm run test`
   - `VITE_BASE_PATH=/security-plus-study-hub/ npm run build`
   - `npx playwright install --with-deps chromium`
   - `npm run test:e2e`
   - Upload Pages artifact (`if: github.event_name != 'pull_request'`): `actions/configure-pages@v5` + `actions/upload-pages-artifact@v3` (`path: ./dist`)
4. **Deployment (`deploy`):**
   - รันเฉพาะ `if: github.event_name != 'pull_request' && github.ref == 'refs/heads/main'`
   - ใช้ `actions/deploy-pages@v4` เพื่อเผยแพร่ artifact ขึ้น GitHub Pages

---

## 3. การทดสอบ Base Path ในเครื่อง (Local Nested-Path Verification)

ก่อน push ขึ้น GitHub สามารถทดสอบ production build ภายใต้ nested path `/security-plus-study-hub/` ได้ตรงกับ environment จริง:

```bash
VITE_BASE_PATH=/security-plus-study-hub/ npm run build
npm run test:e2e
```

Playwright `webServer` จะเปิดเซิร์ฟเวอร์สแตติกจำลองที่ mount `./dist` ไว้ที่ `/security-plus-study-hub/` และตรวจสอบว่า:
- ทุก request CSS/JS คืนสถานะ HTTP 200 (ไม่มี 404/broken chunks)
- ไม่มี uncaught page errors หรือ asset load failures
- ครบทั้ง 12 E2E flows รวมถึงการทำ Mock Exam, reload mid-exam และ mobile viewport `390x844`

---

## 4. ขั้นตอนตั้งค่า GitHub Repository & Troubleshooting

1. **สร้าง Public Repository และ Push:**
   ```bash
   gh repo create Dome0000/security-plus-study-hub --public --source=. --remote=origin
   git push -u origin main
   ```
2. **หาก GitHub ปฏิเสธการ Push ไฟล์ `.github/workflows/deploy.yml` (Missing `workflow` scope):**
   OAuth token ของ GitHub CLI (`gh`) ต้องมีสิทธิ์ `workflow` จึงจะสร้าง/แก้ไฟล์ workflow ได้ ให้ผู้ใช้รันคำสั่งด้านล่างบนเครื่องของตนเองเพื่ออัปเดตสิทธิ์:
   ```bash
   gh auth refresh -h github.com -s workflow
   git push -u origin main
   ```
3. **ตั้งค่า Publishing Source ของ GitHub Pages เป็น GitHub Actions:**
   ในหน้า Settings → Pages หรือผ่าน CLI:
   ```bash
   gh api -X POST /repos/Dome0000/security-plus-study-hub/pages -f build_type=workflow
   ```
4. **ตรวจติดตาม Workflow และเปิดตรวจเว็บจริง:**
   ```bash
   gh run list --limit 5
   gh run watch
   ```
   เมื่อ workflow ขึ้นสีเขียว ให้เปิด `https://dome0000.github.io/security-plus-study-hub/` ตรวจ DevTools Network/Console, เปิดอ่านบทเรียน และทดสอบโหมดฝึกสอบ/Mock Exam เพื่อยืนยันการทำงานจริง
