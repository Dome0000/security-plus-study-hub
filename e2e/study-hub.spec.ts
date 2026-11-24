import { expect, test, type Page } from '@playwright/test';

async function checkNoHorizontalOverflow(page: Page, routeLabel: string) {
  const metrics = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    innerWidth: window.innerWidth
  }));
  expect(
    metrics.scrollWidth,
    `Horizontal overflow detected on ${routeLabel}: scrollWidth=${metrics.scrollWidth} > innerWidth=${metrics.innerWidth}`
  ).toBeLessThanOrEqual(metrics.innerWidth);
}

test.describe('Security+ Study Hub (SY0-701) End-to-End Verification', () => {
  test('Full workflow, persistence, nested base-path assets, mock exam resume & mobile layout', async ({
    page
  }) => {
    const failedAssets: string[] = [];
    const pageErrors: string[] = [];
    const seenAssetUrls = new Set<string>();

    page.on('pageerror', (err) => {
      pageErrors.push(err.message);
    });
    page.on('requestfailed', (req) => {
      failedAssets.push(`FAILED ${req.method()} ${req.url()}: ${req.failure()?.errorText ?? 'unknown'}`);
    });
    page.on('response', (res) => {
      const url = res.url();
      if (url.startsWith('http://127.0.0.1:4173')) {
        if (url.includes('/security-plus-study-hub/assets/')) {
          seenAssetUrls.add(url);
        }
        if (res.status() >= 400) {
          failedAssets.push(`HTTP ${res.status()} ${url}`);
        }
      }
    });

    // Flow 1 & 11: Open nested GitHub Pages base path & verify SY0-701 + verified date + assets
    await page.goto('./');
    await expect(page.getByText('SY0-701 Active')).toBeVisible();
    await expect(page.getByText(/ตรวจทานล่าสุด:\s*2026-11-24/)).toBeVisible();
    await expect(
      page.locator('footer').getByText(/เว็บไซต์นี้เป็นสื่อเตรียมสอบอิสระ/)
    ).toBeVisible();

    // Verify nested base-path CSS & JS assets loaded cleanly
    const assetList = [...seenAssetUrls];
    expect(assetList.some((u) => u.endsWith('.js'))).toBe(true);
    expect(assetList.some((u) => u.endsWith('.css'))).toBe(true);

    // Flow 2: Open a lesson from Curriculum, mark complete, reload & verify persistence
    await page.getByRole('link', { name: 'หลักสูตรและบทเรียน', exact: true }).click();
    await expect(page).toHaveURL(/#\/curriculum$/);
    await page.locator('a[href="#/lessons/L1-01"]').first().click();
    await expect(page).toHaveURL(/#\/lessons\/L1-01$/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    const completeBtn = page.getByRole('button', { name: /ทำเครื่องหมายว่าเรียนจบ|เรียนจบแล้ว/ });
    await completeBtn.click();
    await expect(page.getByRole('button', { name: 'เรียนจบแล้ว' })).toHaveAttribute(
      'aria-pressed',
      'true'
    );

    await page.reload();
    await expect(page.getByRole('button', { name: 'เรียนจบแล้ว' })).toHaveAttribute(
      'aria-pressed',
      'true'
    );

    // Flow 3: Open Global Search, match lesson, glossary acronym, and objective ID
    await page.getByRole('button', { name: /ค้นหาบทเรียน คำศัพท์/ }).click();
    const searchDialog = page.getByRole('dialog');
    await expect(searchDialog).toBeVisible();
    const searchInput = searchDialog.getByRole('searchbox');

    await searchInput.fill('Zero Trust');
    await expect(searchDialog.getByRole('button', { name: /บทเรียน/ }).first()).toBeVisible();
    await expect(searchDialog.getByRole('button', { name: /คำศัพท์/ }).first()).toBeVisible();

    await searchInput.fill('1.2');
    const objResultBtn = searchDialog.getByRole('button', { name: /Objective 1\.2/ }).first();
    await expect(objResultBtn).toBeVisible();
    await objResultBtn.click();
    await expect(page).toHaveURL(/#\/curriculum\?objective=1\.2$/);

    // Flow 4: Practice mode MCQ + EN/TH toggle + explanation & choice rationales
    await page.getByRole('link', { name: 'ฝึกทำข้อสอบ', exact: true }).click();
    await expect(page).toHaveURL(/#\/practice$/);
    await expect(page.getByRole('heading', { name: /ฝึกทำข้อสอบ/ })).toBeVisible();
    await page.getByLabel('Domain', { exact: true }).selectOption('D1');
    await page.getByLabel('ประเภทข้อสอบ', { exact: true }).selectOption('mcq');
    await page.getByLabel('จำนวนข้อ', { exact: true }).selectOption('5');
    await page.getByRole('button', { name: /เริ่มทำข้อสอบ/ }).click();

    await expect(page.getByText('คำถามแบบเลือก 1 คำตอบ')).toBeVisible();

    // Verify EN+TH toggle hides & shows Thai prompt translation
    const bilingualToggle = page
      .locator('#main-content')
      .getByRole('button', { name: /EN \+ TH|EN เท่านั้น/ });
    await expect(page.locator('.bilingual-th').first()).toBeVisible();
    await bilingualToggle.click();
    await expect(page.locator('.bilingual-th')).toHaveCount(0);
    await bilingualToggle.click();
    await expect(page.locator('.bilingual-th').first()).toBeVisible();

    await page.locator('.choice-list input[type="radio"]').first().check();
    await page.getByRole('button', { name: /ดูเฉลยข้อนี้/ }).click();
    await expect(page.getByText('คำอธิบายละเอียด:')).toBeVisible();
    await expect(page.getByText('เหตุผลของตัวเลือก:').first()).toBeVisible();
    await expect(page.getByText(/จุดที่มักเข้าใจผิด/)).toBeVisible();

    // Flow 5: Interactive PBQ (keyboard-accessible form controls + itemized rubric scoring)
    await page.getByRole('button', { name: 'เปลี่ยนตัวกรอง' }).click();
    await page.getByLabel('Domain', { exact: true }).selectOption('D1');
    await page.getByLabel('ประเภทข้อสอบ', { exact: true }).selectOption('pbq');
    await page.getByRole('button', { name: /เริ่มทำข้อสอบ/ }).click();

    const pbqSelects = page.locator('.pbq-wrapper select');
    const selectCount = await pbqSelects.count();
    expect(selectCount).toBeGreaterThanOrEqual(3);
    for (let i = 0; i < selectCount; i++) {
      const sel = pbqSelects.nth(i);
      await sel.focus();
      await sel.selectOption({ index: 1 });
    }
    await page.getByRole('button', { name: /ดูเฉลยข้อนี้/ }).click();
    await expect(page.getByText(/เกณฑ์การให้คะแนน PBQ/)).toBeVisible();

    // Flow 6: Mock Exam landing -> Pre-Exam Confirmation -> Start Form A
    await page.getByRole('link', { name: 'สอบจำลอง (Mock Exam)', exact: true }).click();
    await expect(page).toHaveURL(/#\/mock-exam$/);
    await page.getByRole('button', { name: 'เลือกชุดข้อสอบ FORM-A' }).click();
    await expect(page.getByRole('heading', { name: /ยืนยันก่อนเริ่มสอบจำลอง/ })).toBeVisible();
    await expect(page.getByText(/90 ข้อ/).first()).toBeVisible();
    await expect(page.getByText(/90 นาที/).first()).toBeVisible();
    await page.getByRole('button', { name: 'เริ่มทำข้อสอบ' }).click();

    // Flow 7: Answer, flag, navigate via navigator & Next button
    await expect(page.getByText('ข้อที่ 1 / 90')).toBeVisible();
    await page.getByRole('button', { name: /ตัวนำทางข้อสอบ/ }).click();
    // Jump to item 6 (first MCQ/MSQ after the 5 PBQs)
    await page.getByRole('button', { name: /^ข้อที่ 6 \(คำถาม\)/ }).click();
    await expect(page.getByText('ข้อที่ 6 / 90')).toBeVisible();

    const firstChoiceInput = page.locator('.choice-list input').first();
    await firstChoiceInput.check();
    await expect(firstChoiceInput).toBeChecked();

    await page.getByRole('button', { name: 'ปักธงทบทวน' }).click();
    await expect(page.getByRole('button', { name: /ปักธงทบทวนแล้ว/ })).toHaveAttribute(
      'aria-pressed',
      'true'
    );

    await page.getByRole('button', { name: 'ข้อถัดไป' }).click();
    await expect(page.getByText('ข้อที่ 7 / 90')).toBeVisible();

    // Jump back to item 6 via navigator grid
    await page.getByRole('button', { name: /^ข้อที่ 6 \(คำถาม\)/ }).click();
    await expect(page.getByText('ข้อที่ 6 / 90')).toBeVisible();

    // Flow 8: Reload mid-exam and verify resume (timer, index, selected answer, flag preserved)
    await page.reload();
    await expect(page.getByText('ข้อที่ 6 / 90')).toBeVisible();
    await expect(page.getByLabel(/เวลาคงเหลือ/)).toBeVisible();
    await expect(page.locator('.choice-list input').first()).toBeChecked();
    await expect(page.getByRole('button', { name: /ปักธงทบทวนแล้ว/ })).toHaveAttribute(
      'aria-pressed',
      'true'
    );

    // Flow 9: Submit Mock Exam & inspect Results page (no 100-900 CompTIA score conversion)
    await page.getByRole('button', { name: 'ส่งข้อสอบ' }).click();
    const submitDialog = page.getByRole('dialog');
    await expect(submitDialog).toBeVisible();
    await submitDialog.getByRole('button', { name: 'ยืนยันส่งข้อสอบ' }).click();

    await expect(page).toHaveURL(/#\/results\/att-/);
    await expect(page.getByText('คะแนนร้อยละ (Percentage Score)')).toBeVisible();
    await expect(page.getByText(/เป้าหมายการฝึก 80%/).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'ผลคะแนนแยกตาม 5 Domain' })).toBeVisible();
    await expect(page.getByText(/ไม่ใช่คะแนนสอบผ่านอย่างเป็นทางการของ CompTIA/)).toBeVisible();

    // Flow 10: Click a recommended lesson from missed review / recommendations section
    const recSection = page.locator('section[aria-label="บทเรียนแนะนำสำหรับทบทวน"]');
    await expect(recSection).toBeVisible();
    await recSection.locator('a[href^="#/lessons/"]').first().click();
    await expect(page).toHaveURL(/#\/lessons\/L/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Flow 12: Mobile viewport (390x844) drawer & 0 horizontal overflow across pages
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('./#/');
    await checkNoHorizontalOverflow(page, 'Dashboard mobile');

    const mobileMenuBtn = page.getByRole('button', { name: 'เปิดเมนูนำทาง' });
    await expect(mobileMenuBtn).toBeVisible();
    await mobileMenuBtn.click();
    const sidebar = page.locator('#primary-sidebar');
    await expect(sidebar).toHaveClass(/open/);
    await sidebar.getByRole('link', { name: 'หลักสูตรและบทเรียน' }).click();
    await expect(page).toHaveURL(/#\/curriculum$/);
    await checkNoHorizontalOverflow(page, 'Curriculum mobile');

    await page.goto('./#/mock-exam');
    await checkNoHorizontalOverflow(page, 'Mock Exam mobile');

    await page.goto('./#/results');
    await checkNoHorizontalOverflow(page, 'Exam Results mobile');

    // Final Flow 11 assertions: zero HTTP >= 400, zero failed requests, zero uncaught page errors
    expect(failedAssets, `Broken assets/HTTP errors: ${failedAssets.join('; ')}`).toEqual([]);
    expect(pageErrors, `Uncaught page errors: ${pageErrors.join('; ')}`).toEqual([]);
  });
});
