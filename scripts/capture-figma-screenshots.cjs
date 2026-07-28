const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer-core");

const OUT = path.join(
  process.env.HOME,
  "Desktop/种戏-Figma参考截图/全页"
);
const CHROME =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = "http://127.0.0.1:4173";

const pages = [
  ["01-首页", "/"],
  ["02-关于我们", "/about/"],
  ["03-营期归档", "/camps/"],
  ["04-2025冬令营", "/camps/2025-winter/"],
  ["05-2025夏令营", "/camps/2025-summer/"],
  ["06-2026冬令营", "/camps/2026-winter/"],
  ["07-2026夏令营", "/camps/2026-summer/"],
  ["08-声音与改变", "/stories/"],
  ["09-参与支持", "/join/"],
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: true,
    args: ["--hide-scrollbars"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  for (const [name, route] of pages) {
    const url = BASE + route;
    process.stdout.write(`Full page: ${name} ... `);
    await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
    await new Promise((r) => setTimeout(r, 800));
    const file = path.join(OUT, `${name}.png`);
    await page.screenshot({ path: file, fullPage: true, type: "png" });
    console.log("ok");
  }

  await browser.close();
  console.log("Done →", OUT);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
