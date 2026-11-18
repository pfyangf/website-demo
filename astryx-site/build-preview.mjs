import {readFile,writeFile} from 'node:fs/promises';
// 内联构建产物，让同事解压后直接双击预览，不依赖开发服务器。
const js=await readFile('dist/pulsar.js','utf8');
const css=await readFile('dist/pulsar-intelligence-preview.css','utf8');
await writeFile('../ui/pulsar-intelligence.html',`<!doctype html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>星脉 PULSAR · 智能网络</title><style>${css}</style></head><body><div id="root"></div><script>${js.replaceAll('</script','<\\/script')}</script></body></html>`);
console.log('Standalone preview: ui/pulsar-intelligence.html');
