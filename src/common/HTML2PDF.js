const puppeteer = require('puppeteer');
const args = process.argv;
var address, pdfPath;
console.log(process.argv);
console.log(args);

(async() => {

    address=args[2];
    pdfPath=args[3]

    console.log('args[0]===', args[0]);
    console.log('args[1]===', args[1]);
    console.log('args[2]===', args[2]);
    console.log('args[3]===', args[3]);
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    try {
        const page = await browser.newPage();
        const userAgent = "Mozilla/5.0 (Linux; Android 8.1.0; MI 8 Build/OPM1.171019.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.84 Mobile Safari/537.36";
        page.setUserAgent(userAgent);
        await page.setViewport({
            width: 1920,
            height: 1440,
            deviceScaleFactor: 1,
        });
        // Configure the navigation timeout
        await page.setDefaultNavigationTimeout(0);
        await page.goto(address, {
            waitUntil: 'networkidle0',
            // networkidle0
        });
        const pdf = await page.pdf({
            path: pdfPath,
            format: 'A4',
            scale: 1,
            width: '1920px',
            height: '1440px',
            printBackground: true
        });
        await browser.close();
    } catch (err) {
        await browser.close();
        console.log('出错');
        console.log(err);
    }
})();