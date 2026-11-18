from pathlib import Path

root=Path(__file__).parent
original=(root/'pulsar-design.html').read_bytes()
s=original.decode('utf-8')
s=s.replace('<title>星脉 · 首页设计稿</title>','<title>星脉 · 明亮科技版设计稿</title>')
s=s.replace('</head>','<link rel="stylesheet" href="pulsar-light.css"></head>')
s=s.replace('星脉首页设计稿 · 视觉方向预览 · 标志为概念示意，非正式 Logo','方案 B / 明亮科技 · 星脉设计预览 <a class="compare-link" href="pulsar-design.html">查看方案 A 深色版 ↗</a>')
s=s.replace('<section class="hero">','<section class="hero"><div class="pointer-glow" aria-hidden="true"></div><div class="signal-ring" aria-hidden="true"></div>')
s=s.replace('穿越周期，<br>与<em>长期价值</em>同行。','连接产业机遇，<br>共创<em>长期价值</em>。')
# 仅调整复制版本中的地球材质，不改变原版的任何字节。
s=s.replace('#325b74','#e0f2fa').replace('#142d43','#9bbfd9').replace('#050e19','#3d6c97').replace('#6ba4cd','#8cbce8').replace('#6b8e9d','#4c8d91').replace('#9ab8bd','#2c747d').replace('#97bad2','#255b86').replace('stroke="#c7ad7c"','stroke="#245be8"')
s=s.replace('</body>','''<script>
// 指针光晕只在桌面启用，每帧最多更新一次，避免滚动与触屏开销。
const lightHero=document.querySelector('.hero');let pointerFrame;let pointerEvent;
lightHero.addEventListener('pointermove',event=>{if(event.pointerType==='touch'||motion.matches)return;pointerEvent=event;if(pointerFrame)return;pointerFrame=requestAnimationFrame(()=>{const r=lightHero.getBoundingClientRect();lightHero.style.setProperty('--mouse-x',(pointerEvent.clientX-r.left)+'px');lightHero.style.setProperty('--mouse-y',(pointerEvent.clientY-r.top)+'px');pointerFrame=undefined})});
// 原有入场机制继续负责正文；新版增加业务摘要与研究条目的分层节奏。
if('IntersectionObserver' in window&&!motion.matches){const lightObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');lightObserver.unobserve(entry.target)}}),{threshold:.15});document.querySelectorAll('.capability-grid article,.research-list article,.career-card').forEach((el,i)=>{el.classList.add('scroll-in');el.style.transitionDelay=(i%3)*90+'ms';lightObserver.observe(el)})}
</script></body>''')
(root/'pulsar-light.html').write_text(s,encoding='utf-8')
assert (root/'pulsar-design.html').read_bytes()==original
