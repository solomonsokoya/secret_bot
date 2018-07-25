const puppeteer = require('puppeteer');
const headless = false;

(async () => {
    const browser = await puppeteer.launch({ headless });
    const page = await browser.newPage();
    await page.goto('http://www.google.com');
    await page.type('#lst-ib', 'nicolas cage');
    await page.keyboard.press('Enter');

    await page.waitFor(5000);

    await page.screenshot({path: 'screenshots/example.png'});

    await browser.close();
})();