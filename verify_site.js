const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport to a common desktop size
  await page.setViewportSize({ width: 1280, height: 800 });
  
  // Load the local HTML file
  const path = require('path');
  const filePath = 'file://' + path.resolve('index.html');
  await page.goto(filePath);
  
  // Wait for Three.js and animations to settle
  await page.waitForTimeout(2000);
  
  // Take a full page screenshot
  await page.screenshot({ path: 'final_verification.png', fullPage: true });
  
  // Test adding to cart
  await page.hover('.product-card-container');
  await page.click('.add-btn');
  
  // Open cart
  await page.click('.cart-icon');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'cart_verification.png' });
  
  await browser.close();
  console.log('Verification screenshots saved.');
})();
