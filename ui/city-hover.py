from pathlib import Path

p=Path(__file__).with_name('pulsar-design.html')
s=p.read_text(encoding='utf-8')
s=s.replace('点击城市探索','悬停城市查看详情 · 手机点按查看')
s=s.replace('点击节点探索','悬停节点查看详情')
s=s.replace('查看香港中心介绍','查看香港中心介绍').replace('面向出资人、合作方的信息沟通窗口。','为出资人提供公告、报告和专属联系入口。')
s=s.replace('投资者关系</h2>','投资者关系</h2>')
start=s.index('function showCity(el)')
end=s.index('// SVG路径动画',start)
s=s[:start]+'''// 桌面悬停采用非模态浮层，不阻断星轨交互；触屏仍可点按查看。
let cityCloseTimer;let activeCity;
function positionCity(el){const rect=el.getBoundingClientRect();const width=card.offsetWidth;const height=card.offsetHeight;card.style.left=Math.max(12,Math.min(innerWidth-width-12,rect.left+rect.width/2-width/2))+'px';card.style.top=Math.max(12,Math.min(innerHeight-height-12,rect.bottom+18))+'px'}
function showCity(el){clearTimeout(cityCloseTimer);activeCity=el;document.querySelector('#city-title').textContent=el.dataset.city+(el.dataset.city==='香港'?' · 中心':'');document.querySelector('#city-description').textContent=descriptions[el.dataset.city];if(!card.open)card.show();positionCity(el)}
function closeCity(){card.close();activeCity=undefined}
function scheduleCityClose(){clearTimeout(cityCloseTimer);cityCloseTimer=setTimeout(closeCity,180)}
document.querySelectorAll('.city').forEach(el=>{el.setAttribute('aria-controls','city-card');el.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')showCity(el)});el.addEventListener('pointerleave',e=>{if(e.pointerType!=='touch')scheduleCityClose()});el.addEventListener('focus',()=>showCity(el));el.addEventListener('blur',scheduleCityClose);el.addEventListener('click',()=>showCity(el));el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showCity(el)}if(e.key==='Escape')closeCity()})});
card.addEventListener('pointerenter',()=>clearTimeout(cityCloseTimer));card.addEventListener('pointerleave',scheduleCityClose);card.addEventListener('focusin',()=>clearTimeout(cityCloseTimer));card.addEventListener('focusout',scheduleCityClose);card.querySelector('button').addEventListener('click',closeCity);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCity()});document.addEventListener('pointerdown',e=>{if(card.open&&!card.contains(e.target)&&!e.target.closest('.city'))closeCity()});addEventListener('scroll',closeCity,{passive:true});addEventListener('resize',closeCity);
''' + s[end:]
s=s.replace('</style>','''#city-card{position:fixed;margin:0;width:min(360px,calc(100vw - 24px));max-height:calc(100vh - 24px);overflow:auto;padding:25px;z-index:30;background:#102339f5;box-shadow:0 18px 65px #0009;backdrop-filter:blur(16px)}#city-card h2{font-size:22px;margin:18px 0}#city-card p{font-size:12px}#city-card small{font-size:9px;letter-spacing:1px}
</style>''')
p.write_text(s,encoding='utf-8')
