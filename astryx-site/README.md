# 星脉第三版：智能网络

使用 React 19 与 Astryx 0.7.14 组件，独立于既有两版。页面结构为银河首屏、地球四城区、产品一、产品二、四栏页脚。银河首屏的四块业务对应四个星座，悬停、键盘聚焦或手机轻触显示条目。地球保留四城切换；产品名称、简介及界面均为占位版式示意，待正式产品资料替换。

顶部与页底显示完整导航，滚动中段切换为跟随产品标题变化的悬浮栏目条；两个产品区采用交替图文布局，每区约一屏，图文逐段入场并尊重减少动效设置。页脚参考 A 的公司、导航、合作、法律提示四栏结构，联系与法律摘要弹窗不连接业务接口。交互参考 QQ 浏览器官网的滚动节奏，未使用其图片或文案。采用 Stack、Heading、Text 等 Astryx 组件。

```powershell
npm ci
astryx theme build src/pulsarTheme.mjs
npm run build
node build-preview.mjs
node check-preview.mjs
astryx doctor --built dist
```

交付文件为 ../ui/pulsar-intelligence.html，内联 JS/CSS，可直接双击打开。通过 ../ui/compare.html 比较三个方案。

主题采用本机系统字体；中性色主题的可选 Figtree 字体有外部样式引用，离线时使用系统回退字体。无远程脚本或业务 API，设计稿不发送咨询、简历。
