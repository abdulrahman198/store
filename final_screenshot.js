const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 2500 });
  await page.goto(`file://${process.cwd()}/index.html`);
  await page.waitForTimeout(2000); // Wait for Three.js and animations
  await page.screenshot({ path: 'final_site_verification.png', fullPage: true });
  await browser.close();
})();
