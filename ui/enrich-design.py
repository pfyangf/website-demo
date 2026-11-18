from pathlib import Path
import math

p=Path(__file__).with_name('pulsar-design.html')
s=p.read_text(encoding='utf-8')
# 正交投影只绘制可见半球，弧线及大陆随球面自然压缩。
def project(lon,lat):
    x=math.radians(lon-105); y=math.radians(lat); tilt=math.radians(20)
    z=math.cos(y)*math.cos(x)*math.cos(tilt)+math.sin(y)*math.sin(tilt)
    return 450+240*math.cos(y)*math.sin(x),300-240*(math.sin(y)*math.cos(tilt)-math.cos(y)*math.cos(x)*math.sin(tilt)),z
def line(points):
    result=''; active=False
    for lon,lat in points:
        x,y,z=project(lon,lat)
        if z<0: active=False;continue
        result+=(' L' if active else ' M')+f'{x:.1f},{y:.1f}';active=True
    return result
grid=''.join('<path d="'+line([(lon,lat) for lon in range(-180,181,3)])+'"/>' for lat in range(-60,81,20))
grid+=''.join('<path d="'+line([(lon,lat) for lat in range(-89,90,2)])+'"/>' for lon in range(-180,181,20))
continents=[[(30,35),(40,45),(30,60),(50,70),(85,75),(130,65),(165,60),(175,50),(145,45),(140,35),(125,40),(120,30),(120,20),(110,10),(100,5),(98,20),(85,20),(80,8),(70,22),(55,25),(45,12),(35,30)],[(10,35),(30,32),(42,12),(50,0),(40,-20),(25,-35),(15,-25),(10,-5),(-10,5),(-17,20),(-5,35)],[(113,-22),(128,-12),(141,-12),(153,-25),(146,-39),(128,-35)],[(129,31),(132,35),(137,37),(141,42),(145,44),(142,35),(135,32)],[(95,5),(105,-6),(120,-8),(130,-5),(115,0),(105,3)]]
land=''.join('<path d="'+line(points+[points[0]])+' Z"/>' for points in continents)
globe=f'''<defs><radialGradient id="earth" cx="35%" cy="30%"><stop stop-color="#325b74"/><stop offset=".62" stop-color="#142d43"/><stop offset="1" stop-color="#050e19"/></radialGradient><radialGradient id="atmosphere"><stop offset=".8" stop-color="#6ba4cd" stop-opacity="0"/><stop offset=".94" stop-color="#6ba4cd" stop-opacity=".17"/><stop offset="1" stop-color="#6ba4cd" stop-opacity="0"/></radialGradient><clipPath id="sphere"><circle cx="450" cy="300" r="240"/></clipPath></defs><circle cx="450" cy="300" r="270" fill="url(#atmosphere)"/><circle cx="450" cy="300" r="240" fill="url(#earth)" stroke="#8cb0c84d"/><g clip-path="url(#sphere)"><g fill="none" stroke="#97bad2" stroke-width=".55" opacity=".22">{grid}</g><g fill="#6b8e9d" fill-opacity=".22" stroke="#9ab8bd" stroke-opacity=".4" stroke-width=".7">{land}</g></g>'''
s=s.replace('<g fill="none" stroke="#c7ad7c">',globe+'<g fill="none" stroke="#c7ad7c">',1)
# 将已有交互节点移动到同一球面投影，保持键盘与点击入口。
positions={'香港':(114.17,22.3),'北京':(116.4,39.9),'深圳':(114.06,22.55),'东京':(139.69,35.68)}
# 深圳与香港实际邻近，采用引线标注而不伪造相距甚远的地理位置。
import re
for city,(lon,lat) in positions.items():
    x,y,_=project(lon,lat)
    transform=f'translate({x:.1f} {y:.1f})'
    s=re.sub(r'(<g class="city" data-city="'+city+r'"[^>]*transform=")[^"]+',r'\g<1>'+transform,s)
hk=project(*positions['香港'])
bx,by,_=project(*positions['北京']);tx,ty,_=project(*positions['东京']);hx,hy,_=hk
path=f'M{hx:.1f} {hy:.1f} Q{hx-95:.1f} {hy-140:.1f} {bx:.1f} {by:.1f} M{hx:.1f} {hy:.1f} Q{hx+120:.1f} {hy-135:.1f} {tx:.1f} {ty:.1f}'
s=re.sub(r'(<path class="ray" d=")[^"]+',r'\g<1>'+path,s)
s=re.sub(r'<g fill="#ead2a4">.*?</g>','',s,count=1,flags=re.S)
s=s.replace('<text y="30" text-anchor="middle">深圳</text><text class="city-en" y="50" text-anchor="middle">SHENZHEN</text>','<path d="M0 0L-70 70H-130" fill="none" stroke="#c7ad7c"/><text x="-135" y="70" text-anchor="end">深圳</text><text class="city-en" x="-135" y="90" text-anchor="end">SHENZHEN</text>')
s=s.replace('香港为中心，连接跨境机遇 · 点击节点探索','香港为中心 · 亚洲视角全球背景 · 点击城市探索')
s=s.replace("'香港':'跨境网络的中心，连接资本、产业与合作伙伴。'","'香港':'总部：资本运作、基金管理与投资者关系中枢。联络：hk@pulsar-dev.com（待确认）。'")
s=s.replace("'北京':'连接中国内地市场与产业资源。'","'北京':'政策与产业研究、国企与科研机构对接。联络：bj@pulsar-dev.com（待确认）。'")
s=s.replace("'深圳':'连接产业创新与跨境合作机会。'","'深圳':'先进制造与供应链尽调、投后运营支持。联络：sz@pulsar-dev.com（待确认）。'")
s=s.replace("'东京':'连接日本市场与中日产业合作。'","'东京':'日本市场研究、技术引进、产业方对接与跨境并购机会。联络：tyo@pulsar-dev.com（待确认）。'")
extras='''<section class="source-section" id="collaboration"><div class="section-head"><div><span class="eyebrow">Cross-border value creation</span><h2>资本之外，连接产业能力。</h2></div><p>技术、制造、市场与资本的跨境协同。</p></div><div class="capability-grid"><article><span>01 / JAPAN</span><h3>技术与产业连接</h3><p>关注日本技术与工艺，连接产业伙伴与跨境合作机会。</p></article><article><span>02 / MAINLAND CHINA</span><h3>制造与市场落地</h3><p>结合先进制造、供应链研究与投后运营支持，参与企业价值创造。</p></article><article><span>03 / HONG KONG</span><h3>资本与基金管理</h3><p>以香港为中心，连接资本运作、基金管理与投资者沟通。</p></article></div></section>
<section class="source-section" id="insights"><div class="section-head"><div><span class="eyebrow">Research & insights</span><h2>以研究理解产业，以洞察连接机遇。</h2></div></div><div class="research-list"><article><span>产业跟踪</span><p>医疗健康、先进制造、消费服务与科技。</p></article><article><span>跨境观察</span><p>中日产业合作、技术引进与供应链重构。</p></article><article><span>研究方法</span><p>估值框架、尽调方法与投资论点。</p></article></div><p class="source-note">研究方向摘自公司初稿，正式文章待提供。</p></section>
<section class="source-section" id="team"><span class="eyebrow">People & opportunities</span><h2>看得懂生意，写得出论点，扛得住周期。</h2><p>四地团队协同开展研究与投资工作。管理层履历、团队照片和岗位信息待正式资料确认。</p><a class="secondary" href="#contact">团队与人才联络 ↗</a></section>'''
s=s.replace('<section class="ir"',extras+'<section class="ir"',1)
s=s.replace('投资者信息、公告与披露，以及专属沟通入口。','面向出资人、合作方的信息沟通窗口。<br>定期报告、基金公告与监管披露文件待提供，暂不展示下载入口。')
start=s.index('<footer id="contact">');end=s.index('</footer>',start)+len('</footer>')
s=s[:start]+'''<footer id="contact"><div class="footer-top"><div><span class="logo">星脉 <small>PULSAR</small></span><p>星脉发展有限公司<br>PULSAR DEVELOPMENT LIMITED</p><p>香港 · 北京 · 深圳 · 东京</p><button class="footer-contact secondary" type="button">联系星脉 ↗</button></div><div><h4>探索星脉</h4><a href="#about">关于星脉</a><a href="#investments">四大业务</a><a href="#collaboration">跨境协同</a><a href="#insights">研究与洞察</a><a href="#team">团队与人才</a></div><div><h4>投资者与合作</h4><a href="#ir">投资者关系</a><button class="footer-contact" type="button">IR 与媒体联络 ↗</button><p>ir@pulsar-dev.com<br>media@pulsar-dev.com<br>careers@pulsar-dev.com</p><small>邮箱沿用公司初稿，待确认。</small></div><div><h4>法律与重要提示</h4><button data-legal="免责声明">免责声明与重要提示 ↗</button><button data-legal="风险披露">风险披露 ↗</button><button data-legal="隐私政策">隐私政策 ↗</button><button data-legal="使用条款">网站使用条款 ↗</button><p>本网站内容不构成投资建议或任何证券、基金权益的要约。过往业绩不代表未来表现。</p></div></div><div class="footer-bottom"><span>© 2026 PULSAR Development Limited</span><span>香港为中心，连接中国内地与日本。<br>设计预览 · 法律文本及联系方式待确认</span></div></footer>'''+s[end:]
s=s.replace('href="#investments">投资组合','href="#collaboration">跨境协同').replace('href="#contact">洞察与资讯','href="#insights">研究与洞察').replace('href="#contact">加入我们','href="#team">加入我们')
css='''
.starfield{width:66%;right:-7%;top:35px}.starfield svg{filter:drop-shadow(0 20px 35px #0007)}.city[data-city="北京"] text{transform:translate(-35px,-2px)}.city[data-city="香港"] text{transform:translate(35px,10px)}.city[data-city="东京"] text{transform:translate(30px,-5px)}.wave{cx:'''+f'{hx:.1f}'+''';cy:'''+f'{hy:.1f}'+''';r:35px}.source-section{padding:70px 6%;border-top:1px solid var(--line)}.source-section h2{font-size:clamp(26px,3vw,38px);font-weight:400;line-height:1.6}.source-section>p{color:var(--muted);font-size:13px;line-height:2}.capability-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:35px}.capability-grid article{padding:30px 0;border-top:1px solid #c7ad7c55}.capability-grid span{font:10px Arial;letter-spacing:2px;color:var(--gold)}.capability-grid h3{font-weight:400;font-size:21px;margin:25px 0 15px}.capability-grid p,.research-list p{font-size:13px;color:var(--muted);line-height:2}.research-list article{display:grid;grid-template-columns:1fr 2fr;border-top:1px solid var(--line);padding:20px 0;align-items:center}.research-list span{font-size:18px}.source-note{font-size:11px!important;color:#7f8fa3!important}.footer-top{display:grid;grid-template-columns:1.3fr 1fr 1fr 1.4fr;gap:40px}.footer-top h4{font-size:12px;font-weight:400;color:var(--gold);margin:0 0 24px}.footer-top a,.footer-top button{display:block;margin:12px 0;font-size:12px;color:#aab7c8}.footer-top button{background:none;border:0;padding:0;text-align:left;font-family:inherit;cursor:pointer}.footer-top button:hover,.footer-top a:hover{color:var(--gold)}.footer-top small{font-size:10px;color:#7c8da2}.footer-top .footer-contact.secondary{padding-bottom:8px;border-bottom:1px solid var(--gold)}
@media(max-width:800px){.starfield{width:120%;right:-10%;top:380px}.capability-grid{grid-template-columns:1fr;gap:5px}.footer-top{grid-template-columns:1fr 1fr;gap:35px 22px}.footer-top>div:first-child{grid-column:1/-1}.source-section{padding-block:50px}.research-list article{grid-template-columns:1fr;gap:10px}}
'''
s=s.replace('</style>',css+'</style>')
s=s.replace('</body>','''<dialog id="legal-card" aria-labelledby="legal-title"><button type="button" aria-label="关闭">×</button><small>PULSAR / IMPORTANT INFORMATION</small><h2 id="legal-title"></h2><p id="legal-copy"></p><p class="contact-caption">摘自公司初稿的设计摘要，正式法律文本待确认后发布。</p></dialog><script>
document.querySelectorAll('.footer-contact').forEach(el=>el.addEventListener('click',()=>contactCard.showModal()));
const legal=document.querySelector('#legal-card');const legalCopy={'免责声明':'网站内容仅供一般参考，不构成任何证券、基金权益或其他投资产品的要约、邀请或招揽，亦不构成投资建议。','风险披露':'投资可能面临流动性、估值、集中度、市场价格、汇率及跨境政策风险。过往业绩并非未来表现的指标。','隐私政策':'本设计稿不接收在线咨询，也不加载第三方统计。通过邮箱联络时，请勿发送银行卡信息、身份证影像等敏感个人信息。正式网站政策需按上线功能确认。','使用条款':'本网站内容、标识与文字的使用和转载范围，以正式发布的网站使用条款及授权为准。'};document.querySelectorAll('[data-legal]').forEach(el=>el.addEventListener('click',()=>{document.querySelector('#legal-title').textContent=el.dataset.legal;document.querySelector('#legal-copy').textContent=legalCopy[el.dataset.legal];legal.showModal()}));legal.querySelector('button').addEventListener('click',()=>legal.close());
</script></body>''')
p.write_text(s,encoding='utf-8')
