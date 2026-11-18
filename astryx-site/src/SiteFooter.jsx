import React,{useEffect,useRef,useState} from 'react';
import {HStack,VStack} from '@astryxdesign/core/Stack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
const legal={
 '免责声明与重要提示':'网站内容仅供一般参考，不构成任何证券、基金权益或其他投资产品的要约、邀请或招揽，亦不构成投资建议。',
 '风险披露':'投资可能面临流动性、估值、集中度、市场价格、汇率及跨境政策风险。过往业绩并非未来表现的指标。',
 '隐私政策':'本设计稿不接收在线咨询，也不加载第三方统计。正式网站政策需按上线功能确认。',
 '网站使用条款':'本网站内容、标识与文字的使用和转载范围，以正式发布的网站使用条款及授权为准。'
};
export function SiteFooter(){const [panel,setPanel]=useState(null),ref=useRef(null);useEffect(()=>{const dialog=ref.current;if(!panel){dialog.close();return}const overflow=document.body.style.overflow;document.body.style.overflow='hidden';dialog.showModal();return()=>{dialog.close();document.body.style.overflow=overflow}},[panel]);return <>
 <VStack as="footer" id="site-footer" className="site-footer" gap={8}><HStack className="footer-columns" gap={10} align="start"><VStack className="footer-company" gap={5}><a href="#home" className="footer-brand">✳ <Text type="inherit">星脉 <Text type="inherit">PULSAR</Text></Text></a><Text as="p">星脉发展有限公司<br/>PULSAR DEVELOPMENT LIMITED</Text><Text>香港 · 北京 · 深圳 · 东京</Text><button onClick={()=>setPanel('联系星脉')}>联系星脉 ↗</button></VStack><VStack gap={4}><Heading level={4}>探索星脉</Heading><a href="#home">价值星系与四大业务</a><a href="#cities">四地联结</a><a href="#product-1">产品一</a><a href="#product-2">产品二</a></VStack><VStack gap={4}><Heading level={4}>投资者与合作</Heading><button onClick={()=>setPanel('联系星脉')}>投资者与合作联系 ↗</button><Text as="p">ir@pulsar-dev.com<br/>media@pulsar-dev.com<br/>careers@pulsar-dev.com</Text><Text className="footer-note">邮箱沿用公司初稿，待确认。</Text></VStack><VStack gap={4}><Heading level={4}>法律与重要提示</Heading>{Object.keys(legal).map(title=><button key={title} onClick={()=>setPanel(title)}>{title} ↗</button>)}<Text className="footer-note" as="p">本网站内容不构成投资建议或任何证券、基金权益的要约。过往业绩不代表未来表现。</Text></VStack></HStack><HStack className="footer-bottom" justify="between" gap={5} wrap="wrap"><Text>© 2026 PULSAR Development Limited</Text><Text>香港为中心，连接中国内地与日本。<br/>设计预览 · 法律文本及联系方式待确认</Text><a href="#home">返回顶部 ↑</a></HStack></VStack>
 <dialog ref={ref} className="footer-dialog" aria-label={panel||'信息'} onCancel={()=>setPanel(null)}><VStack gap={6}><HStack justify="between" gap={4} vAlign="center"><Heading level={2}>{panel}</Heading><Button label="关闭" variant="ghost" onClick={()=>setPanel(null)}/></HStack>{panel==='联系星脉'?<VStack gap={4}><Text>投资者沟通 · 产业合作</Text><Text>ir@pulsar-dev.com</Text><Text>媒体联络：media@pulsar-dev.com</Text><Text>招聘联络：careers@pulsar-dev.com</Text><Text>邮箱沿用初稿，待确认；此设计稿不发送咨询。</Text></VStack>:<Text as="p">{legal[panel]}</Text>}<Text className="footer-note">摘自公司初稿的设计摘要，正式内容待确认。</Text></VStack></dialog>
 </>}
