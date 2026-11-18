import React,{useState} from 'react';
import {Theme} from '@astryxdesign/core/theme';
import {VStack,HStack} from '@astryxdesign/core/Stack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {pulsarNetworkTheme} from './pulsar-network.js';
import {Pulse} from './Pulse';
import {ScrollNav} from './ScrollNav';
import {CityScenes} from './CityScenes';
import {styles} from './spatialStyles';
import {scrollStyles} from './scrollStyles';
const businesses=[
 {name:'资本与投资',en:'Capital & Investment',items:['一级市场投资','二级市场投资','战略性投资'],stars:[[20,55],[48,24],[87,34],[110,8],[145,50]],path:'M20 55 48 24 87 34 110 8 145 50'},
 {name:'基金与资产管理',en:'Fund & Asset Management',items:['专项基金','独立子基金','跨境资产配置'],stars:[[15,20],[45,63],[90,15],[135,57]],path:'M15 20 45 63 90 15 135 57 15 20'},
 {name:'产业与跨境协同',en:'Industry & Cross-border',items:['中日产业合作','投后管理','企业价值创造'],stars:[[15,18],[50,47],[78,12],[105,57],[145,28]],path:'M15 18 50 47 78 12 105 57 145 28'},
 {name:'研究与洞察',en:'Research & Insights',items:['市场研究','投资观点','产业趋势'],stars:[[15,60],[45,20],[85,43],[120,12],[145,58]],path:'M15 60 45 20 85 43 120 12 145 58 85 43'}
];
function Brand(){return <a className="brand" href="#home" aria-label="星脉首页"><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 1v38M1 20h38M6 6l28 28M6 34 34 6" stroke="currentColor"/><circle cx="20" cy="20" r="7" fill="currentColor"/></svg><Text type="large" weight="semibold">星脉 PULSAR</Text></a>}
export default function SpatialApp(){
 const [active,setActive]=useState(null);
 return <Theme theme={pulsarNetworkTheme} mode="dark"><style>{styles+scrollStyles}</style><ScrollNav brand={<Brand/>}/>
 <VStack as="main" gap={0}>
 <VStack as="section" id="home" className="galaxy-scene" gap={0} onClick={e=>{if(!e.target.closest(".constellation"))setActive(null)}}><Pulse/><VStack className="hero-copy" gap={5} hAlign="center"><Text className="hero-context">星脉发展有限公司 · 跨境投资与产业协同</Text><Heading level={1}>让价值，<br/>跨越边界。</Heading><Text as="p">立足香港，连接中国内地与日本。<br/>以研究拓宽视野，以协同创造可能。</Text></VStack>
 <VStack className="constellations" gap={0} onMouseLeave={()=>setActive(null)}>{businesses.map((b,i)=><VStack key={b.name} className={`constellation constellation-${i} ${active===i?'is-active':''}`} gap={0} onMouseEnter={()=>setActive(i)} onMouseLeave={()=>setActive(null)} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setActive(null)}}><button className="star-trigger" aria-expanded={active===i} aria-controls={`star-detail-${i}`} onFocus={()=>setActive(i)} onClick={()=>setActive(i)} onKeyDown={e=>{if(e.key==='Escape')setActive(null)}}><svg viewBox="0 0 165 80" aria-hidden="true"><path d={b.path} fill="none" stroke="currentColor" strokeWidth=".7"/>{b.stars.map(([x,y],j)=><g key={j}><circle className="star-halo" cx={x} cy={y} r={j===2?9:5}/><circle cx={x} cy={y} r={j===2?2.6:1.6} fill="var(--galaxy-white)"/><path d={`M${x-5} ${y}h10M${x} ${y-5}v10`} stroke="currentColor" strokeWidth=".5"/></g>)}</svg><Text>{b.name}</Text></button><VStack id={`star-detail-${i}`} className="star-detail" gap={3} aria-hidden={active!==i} inert={active!==i}><Text className="detail-en">{b.en}</Text><ul>{b.items.map(item=><li key={item}>{item}</li>)}</ul><a href="#cities">探索四地联结 ↓</a></VStack></VStack>)}</VStack>
 <HStack className="scene-bottom" justify="between" gap={4}><Text>香港 · 北京 · 深圳 · 东京</Text><Text>悬停星座，探索业务 · 手机轻触查看</Text><a href="#cities">四地联结 ↓</a></HStack>
 </VStack>
 <CityScenes/>
 </VStack></Theme>
}
