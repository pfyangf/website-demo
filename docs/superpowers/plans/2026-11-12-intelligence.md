# 星脉第三版 Implementation Plan

> **For agentic workers:** 使用 superpowers:executing-plans 在当前会话执行。

**Goal:** 增加独立 Astryx 科技智能设计，支持三版比较。

**Architecture:** 独立 React 静态构建放入 ui/，对比入口引用三版，已有两版保持原文件。

**Tech Stack:** React 19、Astryx 0.7.14、Vite。

**Spec:** docs/superpowers/specs/2026-11-12-intelligence-design.md

## Global Constraints

- 仅静态设计，不接入 API；不编造公司业务事实。
- 保持两版页面内容；第三版使用统一的六节内容顺序。

## Review Focus

- 手机导航可展开；窄屏不溢出。
- 动效尊重减少动态效果设置。
- 本地文件预览不依赖远程 JS。
- 三版比较入口可选版本、并排查看和单独打开。
- 未确认的资料不作为事实展示。

## Tasks

- [x] 安装官方依赖，运行 Astryx init，保留模板参考；实现第三版。
- [x] 构建独立静态 HTML，更新 ui/compare.html，生成分享包。
- [x] 验证构建、页面链接、手机与桌面截图、控制台及前两版哈希。

验证：Vite 构建通过；Astryx doctor fail=0（可选外部字体加载提示，使用系统回退）；Playwright 在 1440/1024/768/390 宽度无横向溢出，本地文件、六节内容顺序、手机菜单、城市/业务切换、三版并排与版本切换均通过，页面脚本错误为零。ZIP 六项完整并匹配源文件，原 A/B 三个文件哈希未改变。截图和检查记录位于 outputs/design-share/。
