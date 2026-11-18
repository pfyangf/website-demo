import { chromium } from 'playwright';
import path from 'node:path';
import fs from 'node:fs';

const base = process.env.PULSAR_URL || 'http://localhost:5173/';
const outDir = path.resolve('screenshots');
fs.mkdirSync(outDir, { recursive: true });

const consoleErrors = [];
const pageErrors = [];

const browser = await chromium.launch({
  channel: 'chrome',
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});

async function shot(page, name, selector) {
  if (selector) {
    const el = page.locator(selector);
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await el.screenshot({ path: path.join(outDir, name), animations: 'disabled' });
  } else {
    await page.screenshot({ path: path.join(outDir, name), animations: 'disabled' });
  }
  console.log('saved', name);
}

async function overflowCheck(page, width, height) {
  await page.setViewportSize({ width, height });
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return {
      width,
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      overflowing: doc.scrollWidth > doc.clientWidth + 1,
    };
  });
  return overflow;
}

async function setup(page) {
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', (err) => pageErrors.push(String(err)));
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.waitForSelector('.hero-core');
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);
}

const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
await setup(desktop);
await shot(desktop, 'desktop-hero.png');
for (const [name, sel] of [
  ['desktop-about.png', '#about'],
  ['desktop-technologies.png', '#technologies'],
  ['desktop-solutions.png', '#solutions'],
  ['desktop-innovation.png', '#innovation'],
  ['desktop-products.png', '#products'],
  ['desktop-capabilities.png', '#capabilities'],
  ['desktop-news.png', '#news'],
  ['desktop-careers.png', '#careers'],
  ['desktop-contact.png', '#contact'],
  ['desktop-footer.png', 'footer'],
]) {
  await shot(desktop, name, sel);
}

await desktop.locator('.tech-item').nth(2).click();
await shot(desktop, 'desktop-technologies-03.png', '#technologies');
await desktop.locator('.product-featured .btn').click();
await desktop.waitForSelector('.modal-panel');
await shot(desktop, 'desktop-product-modal.png');
await desktop.keyboard.press('Escape');
await desktop.waitForTimeout(200);

await desktop.locator('.lang-switch button', { hasText: '中文' }).click();
await desktop.waitForTimeout(300);
await desktop.evaluate(() => document.getElementById('hero')?.scrollIntoView());
await shot(desktop, 'desktop-hero-zh.png');
await shot(desktop, 'desktop-about-zh.png', '#about');

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
await setup(mobile);
await shot(mobile, 'mobile-hero.png');
for (const [name, sel] of [
  ['mobile-about.png', '#about'],
  ['mobile-technologies.png', '#technologies'],
  ['mobile-solutions.png', '#solutions'],
  ['mobile-innovation.png', '#innovation'],
  ['mobile-products.png', '#products'],
  ['mobile-news.png', '#news'],
  ['mobile-careers.png', '#careers'],
  ['mobile-contact.png', '#contact'],
  ['mobile-footer.png', 'footer'],
]) {
  await shot(mobile, name, sel);
}

await mobile.locator('.nav-toggle').click();
await mobile.waitForSelector('.nav-drawer.is-open');
await shot(mobile, 'mobile-drawer.png');
await mobile.keyboard.press('Escape');
await mobile.waitForTimeout(200);

const widths = [1920, 1440, 1366, 1024, 768, 390, 375];
const overflows = [];
for (const w of widths) {
  overflows.push(await overflowCheck(desktop, w, w >= 1024 ? 900 : 800));
}

await browser.close();

const report = { consoleErrors, pageErrors, overflows };
fs.writeFileSync(path.join(outDir, 'qa-report.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
