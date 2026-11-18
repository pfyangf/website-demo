from pathlib import Path
import re

p=Path(__file__).with_name('pulsar-design.html')
s=p.read_text(encoding='utf-8')
s=s.replace('href="#team"','href="#careers"').replace('id="team"','id="careers"')
start=s.index('<section class="source-section" id="careers">')
end=s.index('</section>',start)+len('</section>')
s=s[:start]+'''<section class="source-section careers" id="careers"><div class="section-head"><div><span class="eyebrow">Careers / Join Pulsar</span><h2>加入我们</h2></div><p>看得懂生意，写得出论点，扛得住周期。</p></div><div class="careers-grid"><div><h3>与星脉一起，连接长期价值。</h3><p>立足香港，连接北京、深圳与东京。在研究、投资与跨境协同中，与我们共同探索产业机遇。</p><div class="career-locations"><span>香港</span><span>北京</span><span>深圳</span><span>东京</span></div></div><div class="career-card"><span class="eyebrow">Stay connected</span><h3>欢迎与我们建立联系</h3><p>岗位信息待确认，暂不展示招聘职位。招聘邮箱沿用公司初稿，确认后开放投递。</p><span class="career-email">careers@pulsar-dev.com</span><small>待确认 · 本设计稿不接收简历</small><button type="button" class="secondary career-contact">查看人才联系信息 ↗</button></div></div></section>'''+s[end:]
s=s.replace('>投资者关系</a>','>投资者与合作联系</a>').replace('>投资者关系 <span>','>投资者与合作联系 <span>').replace('>团队与人才</a>','>加入我们</a>')
s=s.replace('<header>','<header class="sticky-header">',1).replace('<nav>','<nav aria-label="主导航">',1)
css='''
:root{--nav-offset:110px}html{scroll-padding-top:var(--nav-offset)}header.sticky-header{position:sticky;top:0;z-index:15;backdrop-filter:blur(18px);background:#080f19ee;transition:box-shadow .25s,border-color .25s}header.sticky-header.scrolled{box-shadow:0 8px 30px #0004;border-bottom-color:#cdb78940}header nav a{position:relative;white-space:nowrap;padding:12px 0;transition:color .2s}header nav a:after{content:"";position:absolute;bottom:2px;left:0;width:100%;height:2px;background:var(--gold);transform:scaleX(0);transition:transform .25s;transform-origin:left}header nav a:hover,header nav a.active{color:var(--gold)}header nav a.active:after{transform:scaleX(1)}header nav a:focus-visible{outline:2px solid var(--gold);outline-offset:4px}.careers-grid{display:grid;grid-template-columns:1.1fr 1fr;gap:80px}.careers-grid h3{font-size:24px;font-weight:400;line-height:1.7}.careers-grid p{font-size:13px;line-height:2.1;color:var(--muted);max-width:480px}.career-locations{display:flex;gap:12px;margin-top:30px;flex-wrap:wrap}.career-locations span{border:1px solid var(--line);padding:8px 16px;font-size:12px;color:var(--gold)}.career-card{padding:32px;border:1px solid #cdb78935;border-radius:8px;background:#17263866}.career-card h3{font-size:21px}.career-email{display:block;margin-top:22px;font:18px Arial;color:var(--gold);overflow-wrap:anywhere}.career-card small{display:block;font-size:11px;color:var(--muted);margin-top:12px}.career-contact{display:block;background:none;border:0;color:var(--ink);font-family:inherit;margin-top:20px;cursor:pointer}
@media(max-width:1100px){header.sticky-header{padding:18px 5%;gap:15px;flex-wrap:wrap}header nav{display:flex;order:3;width:100%;overflow-x:auto;gap:25px;padding-bottom:5px;scrollbar-width:thin}header .lang{margin-left:auto}header nav a{font-size:12px;flex:none}.careers-grid{gap:30px}}
@media(max-width:600px){.careers-grid{grid-template-columns:1fr}.career-card{padding:24px}.careers-grid h3{font-size:22px}}
'''
s=s.replace('</style>',css+'</style>')
s=s.replace('</body>','''<script>
const stickyHeader=document.querySelector('.sticky-header');const sectionLinks=[...stickyHeader.querySelectorAll('nav a[href^="#"]')];
// 用固定导航下缘作为高亮基准；点击与手动滚动共用判定，避免同时高亮多个菜单。
function refreshNavigation(){const offset=stickyHeader.getBoundingClientRect().height+22;document.documentElement.style.setProperty('--nav-offset',offset+'px');stickyHeader.classList.toggle('scrolled',scrollY>30);const sections=sectionLinks.map(link=>({link,section:document.querySelector(link.getAttribute('href'))})).filter(x=>x.section).sort((a,b)=>a.section.offsetTop-b.section.offsetTop);let current;for(const item of sections){if(item.section.getBoundingClientRect().top<=offset+2)current=item}for(const {link} of sections){const selected=current?.link===link;link.classList.toggle('active',selected);if(selected)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')}}
let navPending=false;addEventListener('scroll',()=>{if(!navPending){navPending=true;requestAnimationFrame(()=>{refreshNavigation();navPending=false})}},{passive:true});addEventListener('resize',refreshNavigation);if('ResizeObserver' in window)new ResizeObserver(refreshNavigation).observe(stickyHeader);document.querySelectorAll('.business').forEach(el=>el.addEventListener('toggle',refreshNavigation));refreshNavigation();
document.querySelector('.career-contact').addEventListener('click',()=>{document.querySelector('#contact-title').textContent='加入星脉';document.querySelector('#contact-card .contact-value').textContent='careers@pulsar-dev.com';contactCard.showModal()});
</script></body>''')
p.write_text(s,encoding='utf-8')
