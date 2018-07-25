const puppeteer = require('puppeteer');
const headless = false;

(async () => {
    const browser = await puppeteer.launch({ headless });
    const page = await browser.newPage();
    await page.goto('http://www.google.com');


    await page.screenshot({path: 'screenshots/example.png'});

    await browser.close();
})();