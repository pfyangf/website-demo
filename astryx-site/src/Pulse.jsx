import React,{useEffect,useRef} from 'react';
export function Pulse(){
 const ref=useRef(null);
 useEffect(()=>{
  const canvas=ref.current,ctx=canvas.getContext('2d'),reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let frame,last=0,w=0,h=0,angle=0,visible=true,painted=false;
  const rand=i=>{const n=Math.sin(i*127.1+311.7)*43758.5453;return n-Math.floor(n)};
  const stars=Array.from({length:2400},(_,i)=>({r:Math.pow(rand(i+3),.7),spread:rand(i+4)-.5,arm:i%4,size:.4+rand(i+8)*1.2,shine:.2+rand(i+9)*.8}));
  const field=Array.from({length:200},(_,i)=>({x:rand(i+5001),y:rand(i+6001),r:.4+rand(i+7001)}));
  const resize=()=>{w=canvas.clientWidth;h=canvas.clientHeight;const d=Math.min(devicePixelRatio,2);canvas.width=w*d;canvas.height=h*d;ctx.setTransform(d,0,0,d,0,0);painted=false};
  const ro=new ResizeObserver(resize);ro.observe(canvas);resize();
  const io=new IntersectionObserver(([e])=>{visible=e.isIntersecting});io.observe(canvas);
  // 银河为概念视觉；减少动效时保持静态，离屏暂停绘制。
  const colors=getComputedStyle(canvas),white=colors.getPropertyValue('--galaxy-white').trim(),blue=colors.getPropertyValue('--galaxy-blue').trim(),accent=colors.getPropertyValue('--network-glow').trim();
  function draw(t){frame=requestAnimationFrame(draw);if(document.hidden||!visible||reduced.matches&&painted||t-last<32)return;last=t;painted=true;if(!reduced.matches)angle+=.00035;
   ctx.clearRect(0,0,w,h);ctx.fillStyle=white;
   field.forEach((s,i)=>{ctx.globalAlpha=.22+s.r*.25*(reduced.matches?1:.8+.2*Math.sin(t/2500+i));ctx.beginPath();ctx.arc(s.x*w,s.y*h,s.r,0,Math.PI*2);ctx.fill()});
   const scale=Math.max(w*.44,h*.45),cx=w*.5,cy=h*.49;
   ctx.save();ctx.translate(cx,cy);ctx.rotate(-.35);ctx.scale(1,.62);
   const glow=ctx.createRadialGradient(0,0,0,0,0,scale);glow.addColorStop(0,blue);glow.addColorStop(.35,accent);glow.addColorStop(1,'transparent');ctx.globalAlpha=.1;ctx.fillStyle=glow;ctx.fillRect(-scale,-scale,scale*2,scale*2);
   stars.forEach((s,i)=>{const a=s.arm*Math.PI/2+s.r*6+angle+s.spread*(.35+s.r*.4),radius=s.r*scale,x=Math.cos(a)*radius,y=Math.sin(a)*radius;ctx.globalAlpha=s.shine*(1-s.r*.55);ctx.fillStyle=i%5===0?blue:i%9===0?accent:white;ctx.beginPath();ctx.arc(x,y,s.size*(1-s.r*.3),0,Math.PI*2);ctx.fill()});
   const core=ctx.createRadialGradient(0,0,0,0,0,scale*.13);core.addColorStop(0,white);core.addColorStop(.18,blue);core.addColorStop(1,'transparent');ctx.globalAlpha=.35;ctx.fillStyle=core;ctx.fillRect(-scale*.15,-scale*.15,scale*.3,scale*.3);ctx.restore();
   if(!reduced.matches){const phase=(t%18000)/18000;if(phase<.055){const k=phase/.055,x=w*(.12+k*.32),y=h*(.12+k*.2);ctx.globalAlpha=Math.sin(k*Math.PI)*.7;ctx.strokeStyle=white;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-w*.07,y-h*.045);ctx.stroke()}}ctx.globalAlpha=1;
  }frame=requestAnimationFrame(draw);
  return()=>{cancelAnimationFrame(frame);ro.disconnect();io.disconnect()};
 },[]);
 return <canvas className="galaxy-canvas" ref={ref} role="img" aria-label="缓慢旋转的银河与偶尔划过的流星，概念视觉"/>;
}
