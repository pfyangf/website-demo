import React from 'react';
import {globeBase} from './globeBase';
const points=[
 {name:'香港',code:'HKG',x:485.4,y:289.4,labelX:630,labelY:355,path:'M485.4 289.4 L570 330 L620 330'},
 {name:'北京',code:'BJS',x:486.4,y:217.1,labelX:355,labelY:145,path:'M486.4 217.1 L410 170 L350 170'},
 {name:'深圳',code:'SZX',x:484.9,y:288.4,labelX:340,labelY:395,path:'M484.9 288.4 L405 370 L335 370'},
 {name:'东京',code:'TYO',x:561,y:223.3,labelX:690,labelY:190,path:'M561 223.3 L625 215 L685 215'}
];
export function Globe({city,onSelect}){return <svg className="remix-globe" viewBox="0 0 900 600" role="group" aria-label="以香港为中心的四城概念地球">
 {/* 复用 B 的静态球面与陆地轮廓，交互节点由 React 管理。 */}
 <g className="globe-base" dangerouslySetInnerHTML={{__html:globeBase}}/>
 <g className="orbital-shell" fill="none" stroke="var(--galaxy-blue)"><ellipse cx="450" cy="300" rx="330" ry="115" transform="rotate(-25 450 300)"/><ellipse cx="450" cy="300" rx="285" ry="210" transform="rotate(28 450 300)" strokeDasharray="2 10"/></g>
 {points.map((p,i)=><g key={p.code} className={`globe-city ${city===i?'active':''}`} role="button" tabIndex="0" aria-label={`查看${p.name}节点`} aria-pressed={city===i} onClick={()=>onSelect(i)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();onSelect(i)}}}><path d={p.path} fill="none" stroke="currentColor" strokeWidth="1"/><circle cx={p.x} cy={p.y} r="20" fill="transparent"/><circle cx={p.x} cy={p.y} r={i===0?9:5} fill="currentColor"/><circle className="node-ring" cx={p.x} cy={p.y} r={i===0?22:12} fill="none" stroke="currentColor"/><text x={p.labelX} y={p.labelY} textAnchor="middle" fill="currentColor">{p.name}{i===0?' · 中心':''}</text><text className="globe-code" x={p.labelX} y={p.labelY+22} textAnchor="middle" fill="currentColor">{p.code}</text></g>)}
 </svg>}
