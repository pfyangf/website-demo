from pathlib import Path

p = Path(__file__).with_name('pulsar-design.html')
s = p.read_text(encoding='utf-8')
start = s.index('<div class="starfield"')
end = s.index('<div class="hero-foot"', start)
s = s[:start] + '''<div class="starfield"><svg viewBox="0 0 900 600" role="img" aria-label="以香港为中心连接北京、深圳与东京的概念网络">
<defs><radialGradient id="glow"><stop stop-color="#cfb680" stop-opacity=".28"/><stop offset="1" stop-color="#cfb680" stop-opacity="0"/></radialGradient></defs>
<circle cx="450" cy="300" r="260" fill="url(#glow)"/>
<g fill="none" stroke="#c7ad7c"><circle class="wave" cx="450" cy="300" r="60"/><circle class="wave delay" cx="450" cy="300" r="60"/><circle cx="450" cy="300" r="205" opacity=".14"/><ellipse cx="450" cy="300" rx="300" ry="180" opacity=".2"/>
<path class="ray" d="M450 300 Q330 250 260 150 M450 300 Q550 170 690 190 M450 300 Q410 430 280 465"/>
</g><g fill="#ead2a4"><circle r="3"><animateMotion dur="4s" repeatCount="indefinite" path="M450 300 Q330 250 260 150"/></circle><circle r="3"><animateMotion dur="5s" repeatCount="indefinite" path="M450 300 Q550 170 690 190"/></circle><circle r="3"><animateMotion dur="4.5s" repeatCount="indefinite" path="M450 300 Q410 430 280 465"/></circle></g>
<g class="city" data-city="香港" tabindex="0" role="button" aria-label="查看香港中心介绍" transform="translate(450 300)"><circle r="12"/><circle r="30" fill="none" opacity=".5"/><text y="58" text-anchor="middle">香港 · 中心</text><text class="city-en" y="80" text-anchor="middle">HONG KONG / HUB</text></g>
<g class="city" data-city="北京" tabindex="0" role="button" aria-label="查看北京节点" transform="translate(260 150)"><circle r="5"/><text y="-22" text-anchor="middle">北京</text><text class="city-en" y="-42" text-anchor="middle">BEIJING</text></g>
<g class="city" data-city="东京" tabindex="0" role="button" aria-label="查看东京节点" transform="translate(690 190)"><circle r="5"/><text y="-22" text-anchor="middle">东京</text><text class="city-en" y="-42" text-anchor="middle">TOKYO</text></g>
<g class="city" data-city="深圳" tabindex="0" role="button" aria-label="查看深圳节点" transform="translate(280 465)"><circle r="5"/><text y="30" text-anchor="middle">深圳</text><text class="city-en" y="50" text-anchor="middle">SHENZHEN</text></g>
</svg><p class="network-hint">香港为中心，连接跨境机遇 · 点击节点探索</p></div>
''' + s[end:]
s = s.replace('围绕一级市场、二级市场、控股与长期持有、基金管理四条业务线', '围绕资本与投资、基金与资产管理、产业与跨境协同、研究与洞察四大板块')
start = s.index('<a class="investment"')
end = s.index('</section>', start)
items = [
    ('资本与投资', 'Capital & Investment', ['一级市场投资', '二级市场投资', '战略性投资']),
    ('基金与资产管理', 'Fund & Asset Management', ['专项基金', '独立子基金', '跨境资产配置']),
    ('产业与跨境协同', 'Industry & Cross-border', ['中日产业合作', '投后管理', '企业价值创造']),
    ('研究与洞察', 'Research & Insights', ['市场研究', '投资观点', '产业趋势']),
]
s = s[:start] + ''.join(f'''<details class="business"><summary><span class="num">0{i}</span><div><h3>{name}</h3><small>{en}</small></div><span class="business-tags">{' / '.join(tags)}</span><span class="arrow">+</span></summary><div class="business-body"><p>{name}</p><ul>{''.join('<li>'+tag+'</li>' for tag in tags)}</ul><a href="#contact">联系星脉，了解合作机会 ↗</a></div></details>''' for i,(name,en,tags) in enumerate(items,1)) + s[end:]
css = '''
html{scroll-behavior:smooth;scroll-padding-top:24px}.hero h1{max-width:650px}.starfield{right:-6%;width:65%;top:25px;pointer-events:auto}.starfield svg{overflow:visible}.city{cursor:pointer;fill:var(--gold);outline:none}.city text{font:16px "Microsoft YaHei",sans-serif;fill:var(--ink)}.city text.city-en{font:10px Arial;letter-spacing:2px;fill:var(--muted)}.city:hover circle,.city:focus-visible circle{stroke:white;stroke-width:3}.network-hint{position:absolute;bottom:5px;left:24%;font-size:10px!important;color:var(--gold)!important}.ray{opacity:.6;stroke-dasharray:6 6}.wave{transform-box:fill-box;transform-origin:center;animation:radiate 6s ease-out infinite}.wave.delay{animation-delay:-3s}@keyframes radiate{from{transform:scale(.3);opacity:.7}to{transform:scale(4);opacity:0}}
.business{border-top:1px solid var(--line)}.business summary{list-style:none;display:grid;grid-template-columns:70px 1fr 1fr 30px;gap:24px;align-items:center;padding:38px 0;cursor:pointer;transition:background .3s,padding .3s}.business summary::-webkit-details-marker{display:none}.business summary:hover{background:#ffffff06;padding-inline:12px}.business h3{font-size:23px;font-weight:400;margin:0 0 10px}.business small{font:11px Arial;letter-spacing:1px;color:var(--muted)}.business-tags{font-size:12px;line-height:2;color:var(--muted)}.business[open] .arrow{transform:rotate(45deg)}.business .arrow{transition:transform .3s}.business-body{padding:0 0 35px 94px;animation:rise .35s ease}.business-body p{color:var(--gold);font-size:12px}.business-body ul{display:flex;gap:40px;padding:20px 0;list-style:none;font-size:17px}.business-body a{font-size:12px;border-bottom:1px solid var(--gold);padding-bottom:6px}.primary{transition:background .25s,transform .25s}.primary:hover{background:#e3c99a;transform:translateY(-3px)}
/* 仅在观察器可用时隐藏待入场模块，避免脚本失效后正文不可见。 */
.scroll-ready .scroll-in{opacity:0;transform:translateY(35px);transition:opacity .8s ease,transform .8s ease}.scroll-ready .scroll-in.visible{opacity:1;transform:none}.scroll-progress{position:fixed;top:0;left:0;width:100%;height:2px;background:var(--gold);transform:scaleX(0);transform-origin:left;z-index:20}.hero .reveal:nth-child(2){animation-delay:.15s}.hero .reveal:nth-child(3){animation-delay:.3s}.hero .reveal:nth-child(4){animation-delay:.45s}dialog{background:#102339;color:var(--ink);border:1px solid #c7ad7c66;max-width:440px;width:calc(100% - 40px);padding:36px}dialog::backdrop{background:#020b17bb;backdrop-filter:blur(5px)}dialog button{float:right;background:none;border:0;color:var(--gold);font-size:24px}dialog h2{font-weight:400}dialog p{color:var(--muted);line-height:2;font-size:14px}dialog small{color:var(--gold)}
@media(max-width:800px){.starfield{width:120%;right:-10%;top:380px}.hero{min-height:960px}.hero-foot{margin-top:420px}.business summary{grid-template-columns:28px 1fr 24px;gap:12px;padding:28px 0}.business-tags{grid-column:2}.business .arrow{grid-column:3;grid-row:1}.business h3{font-size:21px}.business-body{padding-left:40px}.business-body ul{display:block;line-height:2}.network-hint{left:22%;bottom:0}.hero h1{font-size:40px}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.scroll-ready .scroll-in{opacity:1;transform:none;transition:none}*{transition:none!important}.wave{animation:none!important;opacity:.15}}
'''
s = s.replace('</style>', css + '</style>')
s = s.replace('</body>', '''<dialog id="city-card" aria-labelledby="city-title"><button type="button" aria-label="关闭">×</button><small>PULSAR / CROSS-BORDER NETWORK</small><h2 id="city-title"></h2><p id="city-description"></p><p>概念网络展示，具体办公及联系资料待确认。</p></dialog><div class="scroll-progress" aria-hidden="true"></div>
<script>
const motion=matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window&&!motion.matches){document.documentElement.classList.add('scroll-ready');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.intro>div,.section-head,.business,.ir,.footer-top').forEach(el=>{el.classList.add('scroll-in');observer.observe(el)})}
const progress=document.querySelector('.scroll-progress');let pending=false;function updateProgress(){const height=document.documentElement.scrollHeight-innerHeight;progress.style.transform='scaleX('+(height>0?Math.min(1,scrollY/height):0)+')';pending=false}addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(updateProgress)}},{passive:true});addEventListener('resize',updateProgress);updateProgress();
const card=document.querySelector('#city-card');const descriptions={'香港':'跨境网络的中心，连接资本、产业与合作伙伴。','北京':'连接中国内地市场与产业资源。','深圳':'连接产业创新与跨境合作机会。','东京':'连接日本市场与中日产业合作。'};function showCity(el){document.querySelector('#city-title').textContent=el.dataset.city+(el.dataset.city==='香港'?' · 中心':'');document.querySelector('#city-description').textContent=descriptions[el.dataset.city];card.showModal()}document.querySelectorAll('.city').forEach(el=>{el.addEventListener('click',()=>showCity(el));el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showCity(el)}})});card.querySelector('button').addEventListener('click',()=>card.close());card.addEventListener('click',e=>{if(e.target===card){const r=card.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)card.close()}});
// SVG路径动画也随系统减少动态偏好停用。
function syncMotion(){document.querySelectorAll('animateMotion').forEach(el=>{el.style.display=motion.matches?'none':''});const svg=document.querySelector('.starfield svg');if(motion.matches)svg.pauseAnimations();else svg.unpauseAnimations()}syncMotion();motion.addEventListener('change',()=>{syncMotion();if(motion.matches)document.querySelectorAll('.scroll-in').forEach(el=>el.classList.add('visible'))});
</script></body>''')
p.write_text(s, encoding='utf-8')
