import React,{useEffect,useState} from 'react';
import {HStack,VStack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
const chapters=[['product-1','产品一'],['product-2','产品二']];
export function ScrollNav({brand}){
 const [full,setFull]=useState(true),[active,setActive]=useState(-1);
 useEffect(()=>{
  let frame=0;
  const update=()=>{frame=0;const y=scrollY,max=document.documentElement.scrollHeight-innerHeight;setFull(y<100||max-y<150);let current=-1;chapters.forEach(([id],i)=>{const rect=document.getElementById(id)?.getBoundingClientRect();if(rect&&rect.top<innerHeight*.58)current=i});setActive(current)};
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)};update();addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);
  // 只在观察器可用且未要求减少动效时隐藏待入场内容。
  const nodes=[...document.querySelectorAll('[data-reveal]')],observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-revealed');observer.unobserve(entry.target)}}),{threshold:.12});
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches)nodes.forEach(node=>{node.classList.add('will-reveal');observer.observe(node)});
  return()=>{cancelAnimationFrame(frame);removeEventListener('scroll',schedule);removeEventListener('resize',schedule);observer.disconnect();nodes.forEach(node=>node.classList.remove('will-reveal'))};
 },[]);
 const title=active<0?'产品介绍':chapters[active][1];
 return <><HStack as="header" className={`masthead scroll-masthead ${full?'is-shown':''}`} data-mode={full?'full':'chapter'} inert={!full} aria-hidden={!full} justify="between" vAlign="center" gap={4}><HStack className="nav-identity" gap={5} vAlign="center">{brand}<Text className="nav-signature">研究 · 资本 · 产业<br/>连接长期价值</Text></HStack><HStack as="nav" aria-label="主导航" gap={6}><a href="#home">价值星系</a><a href="#home">投资业务</a><a href="#cities">四地联结</a><a href="#product-1">产品介绍</a><a className="nav-compare" href="compare.html" target="_top">方案比较 ↗</a><a className="nav-contact" href="#site-footer">联系星脉 <Text type="inherit">↗</Text></a></HStack></HStack>
 <HStack as="nav" className={`chapter-nav ${!full?'is-shown':''}`} aria-label="产品导航" inert={full} aria-hidden={full} gap={6} vAlign="center"><a className="chapter-brand" href="#home" aria-label="返回首页">✳</a><VStack className="chapter-title-window" gap={0}><Text key={title} className="chapter-title" aria-live="polite">{title}</Text></VStack><HStack className="chapter-links" gap={4}>{chapters.map(([id,name],i)=><a key={id} href={`#${id}`} className={active===i?'active':''} aria-current={active===i?'location':undefined}>{name}</a>)}</HStack></HStack></>;
}
