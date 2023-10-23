const puppeteer = require('puppeteer');
const assert = require('assert');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://demoqa.com');
  const pageTitle = await page.title();
  assert.strictEqual(pageTitle, 'DEMOQA', 'Test 1 - Page title is incorrect');

  console.log("Test 1 finished with success");

  await browser.close();
})();
