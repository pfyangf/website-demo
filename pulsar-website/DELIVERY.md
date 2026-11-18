# PULSAR website — delivery notes

Single-page official homepage for **PULSAR Development Limited（星脉发展有限公司）**. Local, static, no backend.

## Commands

```bash
cd pulsar-website
npm install
npm run dev -- --host 0.0.0.0
```

Production build:

```bash
npm run build
npm run preview -- --host 0.0.0.0
```

## Preview URL

Verified running during delivery:

- http://localhost:5173/
- http://172.30.0.2:5173/

## Main interactions

- Desktop nav with anchor scrolling (offset for the fixed bar) and current-section state; language toggle **EN / 中文** (default English, updates `document.lang` and all copy); **Contact Us** jumps to Contact.
- Mobile drawer: open/close, Esc, overlay click, body scroll lock, focus trap; choosing a link closes the drawer. Includes Home through Careers, Contact Us, and the language switch.
- Technologies: one large visual + four numbered items. Item 01 is open by default. Click, keyboard (arrows / Home / End), and touch change the selected layer. Descriptions are not hover-only. Mobile uses a stacked / accordion reading order.
- Products and News: **Learn More** / article titles open an in-page modal with readable copy. Every product stays labeled **Concept / 概念展示**. Every article stays labeled **Sample Content / 示例内容** and shows **Date TBD / 日期待定**.
- Careers: cities are shown with **Locations to be confirmed / 地点信息待确认**. The careers entry opens a panel stating roles are to be updated, with a path to Contact. The atmosphere image is captioned as a concept rendering, not a real office or team.
- Contact: three inquiry types; email `info@pulsar-dev.com` with **Contact email to be confirmed / 待确认联系邮箱**; copy-email button with live success/failure feedback. No submit form.
- Footer legal links open panels that say **Legal content pending / 法律文本待提供**.
- All dialogs support Esc, a close button, focus trap, and focus restore.
- `prefers-reduced-motion`: continuous orbit/pulse/travel animations are off; static visuals and essential state feedback remain; anchors jump instantly.
- Skip link, single `h1`, semantic headings, visible focus, 44px targets.

## Visual approach

High-quality generated stills (no baked-in text) plus layered CSS/SVG and light motion, with a static fallback when motion is reduced. No WebGL / Canvas engine.

## Concept logo

The SVG mark — a geometric **P** combined with a pulse orbit and a cyan energy node — plus the **PULSAR DEVELOPMENT** wordmark is a **concept logo created for this design**, not an officially registered mark. The full legal names appear in About and the Footer.

## Verification

Performed:

- TypeScript check (`tsc -b`) and production build (`npm run build`) — both passed after implementation.
- Dev server started with `--host 0.0.0.0` and answered HTTP 200 at the URLs above.
- Playwright (system Chrome) screenshots of desktop (~1440) and mobile (~390) for Hero and later sections, saved in `screenshots/`. Additional checks at 1366×768 for the first screen.
- Horizontal overflow check at 1920, 1440, 1366, 1024, 768, 390, and 375 — no overflow observed.
- Console and page-error listeners during screenshot runs — no errors recorded.
- Interaction checks: language switch, technology item 03, product modal, mobile drawer open + Esc close.

Not verified / not claimed:

- Formal WCAG audit or automated axe report (contrast was checked for the core palette against AA targets, but this is not a full audit).
- Performance scores (Lighthouse / Web Vitals were not run; do not treat the passing build as a performance result).
- Visual review on physical devices, or every hover/focus/keyboard path beyond the checks above.
- Screen-reader walkthrough with VoiceOver or NVDA.

A passing build is not visual acceptance. Screenshots under `screenshots/` are the visual record from this environment.

## Still needs client confirmation

- Contact email (`info@pulsar-dev.com` is a design placeholder).
- Office / hiring locations (Hong Kong, Beijing, Shenzhen, Tokyo are listed only as cities in early planning).
- Legal text for Privacy Policy, Terms of Use, and Disclaimer.
- Product status — all four items are concept studies, not launched products.
- News — three articles are sample content for design review; dates are TBD.
- Official logo, domain, social profiles, address, and any certification or company facts not stated in the brief.

Do not treat generated imagery as photographs of a real PULSAR team or office.
