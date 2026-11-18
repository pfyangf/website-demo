import {chromium} from '@playwright/test';
import {mkdir,writeFile} from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';
await mkdir('../outputs/design-share/screenshots',{recursive:true});
const browser=await chromium.launch({channel:'msedge',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'}),errors=[];
page.on('pageerror',e=>errors.push(e.message));
await page.goto(pathToFileURL(path.resolve('../ui/pulsar-intelligence.html')).href);await page.getByRole('heading',{level:1}).waitFor();
assert.deepEqual(await page.locator('main>section').evaluateAll(nodes=>nodes.map(n=>n.id)),['home','cities','product-1','product-2']);
assert.equal(await page.locator('.star-detail li').count(),12);assert.equal(await page.locator('.city-story,.scene-footer').count(),0);
assert.equal(await page.locator('.product-scene').count(),2);assert.equal(await page.locator('.footer-columns>div').count(),4);
await page.screenshot({path:'../outputs/design-share/screenshots/products-desktop.png',fullPage:true});
const navMode=mode=>page.waitForFunction(m=>document.querySelector('.scroll-masthead').dataset.mode===m,mode);await navMode('full');
for(const [id,name] of [['product-1','产品一'],['product-2','产品二']]){
 await page.locator(`#${id}`).evaluate(el=>el.scrollIntoView({block:'center'}));await navMode('chapter');await page.waitForFunction(n=>document.querySelector('.chapter-title').textContent===n,name);
 const box=await page.locator(`#${id}`).boundingBox();assert(box.height>=900&&box.height<=1100,`Product screen not compact/full: ${box.height}`);
 await page.locator(`#${id}`).screenshot({path:`../outputs/design-share/screenshots/${id}.png`});
}
await page.evaluate(()=>scrollTo(0,document.documentElement.scrollHeight));await navMode('full');await page.locator('#site-footer').screenshot({path:'../outputs/design-share/screenshots/products-footer.png'});
await page.getByRole('button',{name:'免责声明与重要提示 ↗',exact:true}).click();await page.getByRole('dialog',{name:'免责声明与重要提示',exact:true}).waitFor();await page.keyboard.press('Escape');await page.locator('dialog').waitFor({state:'hidden'});
assert(await page.getByRole('button',{name:'免责声明与重要提示 ↗',exact:true}).evaluate(el=>el===document.activeElement));
await page.getByRole('button',{name:'联系星脉 ↗',exact:true}).click();await page.getByRole('dialog',{name:'联系星脉',exact:true}).waitFor();await page.getByRole('button',{name:'关闭',exact:true}).click();
for(const name of ['香港','北京','深圳','东京']){const node=page.getByRole('button',{name:`查看${name}节点`,exact:true});await node.focus();await page.keyboard.press('Enter');assert.equal(await node.getAttribute('aria-pressed'),'true')}
const names=['资本与投资','基金与资产管理','产业与跨境协同','研究与洞察'],widths=[];
for(const width of [1440,1024,768,390,320]){await page.setViewportSize({width,height:950});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Overflow at ${width}`);await page.evaluate(()=>scrollTo(0,0));await navMode('full');for(let i=0;i<4;i++){await page.getByRole('button',{name:names[i],exact:true}).click();const box=await page.locator(`#star-detail-${i}`).boundingBox();assert(box&&box.x>=0&&box.x+box.width<=width,`Clipped popup at ${width}`)}await page.locator('#product-2').evaluate(el=>el.scrollIntoView({block:'center'}));await navMode('chapter');assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));widths.push(width)}
await page.setViewportSize({width:390,height:950});await page.evaluate(()=>scrollTo(0,0));await navMode('full');await page.locator('.hero-copy').click({force:true});await page.screenshot({path:'../outputs/design-share/screenshots/products-mobile.png',fullPage:true});
const anchors=await page.locator('a[href^="#"]').evaluateAll(nodes=>nodes.map(n=>n.getAttribute('href')).filter(h=>h.length>1));for(const anchor of anchors)assert(await page.locator(anchor).count(),`Broken anchor ${anchor}`);
await page.emulateMedia({reducedMotion:'no-preference'});await page.reload();await page.getByRole('heading',{level:1}).waitFor();await page.locator('#product-1').evaluate(el=>el.scrollIntoView({block:'center',behavior:'instant'}));await page.waitForFunction(()=>document.querySelector('#product-1 .product-copy').classList.contains('is-revealed'));
assert.deepEqual(errors,[]);await writeFile('../outputs/design-share/products-validation.json',JSON.stringify({widths,errors,checks:['galaxy-globe-two-products-footer','old-city-scenes-removed','two-product-nav-titles','compact-full-screen-products','A-footer-four-columns','footer-dialogs-and-focus','all-local-anchors','globe-keyboard','five-widths-no-overflow','reveal-animation']},null,2));await browser.close();console.log('PASS: two product scenes/titles, compact viewport heights, A-style footer, dialogs, anchors, five widths');
