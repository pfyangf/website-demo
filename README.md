# PULSAR 星脉官网设计演示

包含星脉官网的 A、B、C、D、E 五个静态设计版本、前端源码和项目文档。

## 查看页面

直接打开 `ui/compare.html` 比较各版本。最新版 E 入口为 `ui/pulsar-deepspace.html`。

也可在项目根目录运行：

```sh
python -m http.server 8080
```

然后访问 `http://localhost:8080/ui/compare.html`。

## 最新 E 版（深空智能 · 双语）

E 版是设计稿转出的单文件静态页面，无本地图片资源（视觉全部由 CSS 绘制），自带中英文一键切换。主要文件：

- `ui/pulsar-deepspace.html`

E 版按 1920 设计稿实现，任意窗口宽度等比缩放；字体经 Google Fonts CDN 加载（Geist / Geist Mono / Manrope / Noto Sans SC），离线时回退系统字体。联系邮箱为设计占位。

## D 版

D 版是独立静态页面，主要文件：

- `ui/pulsar-precision.html`
- `ui/d-assets/future.css`、`future.js`
- `ui/d-assets/art-direction.css`、`art-direction.js`
- `ui/d-assets/future-core.png`、`nexus-sculpture.png`

D 的产品、新闻和指标属于设计示意；联系弹窗不发送消息。银白版本的其它独立页面也保留在 `ui/` 中。

## 历史 React 设计源

`astryx-site/` 包含 C 版等历史设计的 React/Vite 源码：

```sh
cd astryx-site
npm ci
npm run build
```

注意：该构建流程不生成最新版 D；修改 D 应编辑上述静态源文件，避免使用历史生成流程覆盖它。

依赖目录、构建产物、临时截图、备份及本地服务器发布记录不纳入版本控制。本仓库推送不更新服务器部署。

## 交互式官网（独立 Vite 应用）

`pulsar-website/` 是已经实现的官方首页：React + TypeScript + Vite，纯 CSS，默认英文，可切换简体中文。它与上面的 A–E 静态页面并列存放，是单独的 Vite 应用，不替换、也不改动那些静态页。

本地运行：

```sh
cd pulsar-website && npm install && npm run dev
```
