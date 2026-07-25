const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  const dir = 'C:/Users/ambat/AppData/Local/Temp/claude/c--Users-ambat-OneDrive-Desktop-Vijaya-Developers/f51a2872-b79b-4812-ba96-9381ce9364f2/scratchpad';

  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await page.locator('text=8 Reasons to Trust Vijaya').scrollIntoViewIfNeeded();
  await page.waitForTimeout(700);
  await page.screenshot({ path: dir + '/why-carousel-start.png' });

  await page.click('button[aria-label="Scroll right"]');
  await page.waitForTimeout(700);
  await page.screenshot({ path: dir + '/why-carousel-scrolled.png' });

  await page.click('button[aria-label="Scroll right"]');
  await page.waitForTimeout(700);
  await page.screenshot({ path: dir + '/why-carousel-scrolled2.png' });

  // mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await page.locator('text=8 Reasons to Trust Vijaya').scrollIntoViewIfNeeded();
  await page.waitForTimeout(700);
  await page.screenshot({ path: dir + '/why-carousel-mobile.png' });

  console.log('errors:', JSON.stringify(errors));
  await browser.close();
})();
