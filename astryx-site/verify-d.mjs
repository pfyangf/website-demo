import {chromium} from '@playwright/test';
import {pathToFileURL} from 'node:url';
import {resolve} from 'node:path';
const browser=await chromium.launch({channel:'msedge',headless:true});
const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto(pathToFileURL(resolve('../ui/pulsar-precision.html')).href);await page.waitForTimeout(800);
for(const width of [1440,390]){await page.setViewportSize({width,height:1000});await page.screenshot({path:`../outputs/design-share/screenshots/d-${width}.png`,fullPage:true});console.log(width,await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,h1:document.querySelector('h1')?.innerText})));}
await page.getByRole('button',{name:'东京'}).click();console.log('city selected',await page.getByRole('button',{name:'东京'}).getAttribute('aria-pressed'));
await page.goto(pathToFileURL(resolve('../ui/compare.html')).href);await page.waitForTimeout(400);console.log('versions',await page.locator('[data-version]').count());await page.locator('[data-version="a"]').click();await page.locator('[data-version="d"]').click();console.log('D visible',await page.locator('[data-panel="d"]').isVisible(),'errors',errors);await browser.close();if(errors.length)process.exitCode=1;
