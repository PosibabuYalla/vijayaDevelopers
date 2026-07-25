const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const dir = 'C:/Users/ambat/AppData/Local/Temp/claude/c--Users-ambat-OneDrive-Desktop-Vijaya-Developers/f51a2872-b79b-4812-ba96-9381ce9364f2/scratchpad';
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: dir + '/hero-no-border.png' });
  await browser.close();
})();
