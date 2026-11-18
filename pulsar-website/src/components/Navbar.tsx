import { useEffect, useId, useRef, useState } from 'react';
import { NAV_ITEMS } from '../content/dictionary';
import { useLanguage } from '../context/LanguageContext';
import { useActiveSection } from '../hooks/useActiveSection';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { getFocusable, trapTab } from '../lib/focus';
import { Logo } from './Logo';

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const compact = useMediaQuery('(max-width: 1100px)');
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerTitleId = useId();

  useLockBodyScroll(open && compact);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!compact) setOpen(false);
  }, [compact]);

  useEffect(() => {
    if (!open) return;
    const drawer = drawerRef.current;
    const focusables = drawer ? getFocusable(drawer) : [];
    (focusables[0] ?? drawer)?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (drawer) trapTab(event, drawer);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      toggleRef.current?.focus();
    };
  }, [open]);

  const navActive = (id: string) => {
    if (id === 'products' && (active === 'products' || active === 'capabilities')) return true;
    if (id === 'solutions' && (active === 'solutions' || active === 'innovation')) return true;
    return active === id;
  };

  const closeAndGo = () => setOpen(false);

  const langSwitch = (
    <div className="lang-switch" role="group" aria-label={t.a11y.langGroup}>
      <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>
        {t.nav.langEn}
      </button>
      <button type="button" aria-pressed={lang === 'zh'} onClick={() => setLang('zh')}>
        {t.nav.langZh}
      </button>
    </div>
  );

  return (
    <>
    <header className={`site-header${scrolled || open ? ' is-scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="nav-brand" href="#hero" onClick={closeAndGo}>
          <Logo variant="lockup" />
          <span className="visually-hidden">PULSAR Development</span>
        </a>

        {!compact ? (
          <nav className="nav-links" aria-label={t.a11y.mainNav}>
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href={item.href} className={navActive(item.id) ? 'is-active' : undefined} aria-current={navActive(item.id) ? 'page' : undefined}>
                {t.nav[item.id]}
              </a>
            ))}
          </nav>
        ) : null}

        <div className="nav-actions">
          {!compact ? langSwitch : null}
          <a className="btn btn-accent nav-contact" href="#contact" onClick={closeAndGo}>
            {t.nav.contactCta}
          </a>
          {compact ? (
            <button
              ref={toggleRef}
              type="button"
              className="nav-toggle"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            >
              <span className={`nav-toggle-bars${open ? ' is-open' : ''}`} aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          ) : null}
        </div>
      </div>
    </header>

      {compact && open ? <div className="nav-overlay" onClick={() => setOpen(false)} /> : null}

      {compact ? (
        <div
          id="mobile-drawer"
          className={`nav-drawer${open ? ' is-open' : ''}`}
          ref={drawerRef}
          role="dialog"
          aria-modal={open}
          aria-labelledby={drawerTitleId}
          inert={!open || undefined}
          tabIndex={-1}
        >
          <p id={drawerTitleId} className="visually-hidden">
            {t.a11y.mainNav}
          </p>
          <nav className="drawer-links" aria-label={t.a11y.mainNav}>
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href={item.href} className={navActive(item.id) ? 'is-active' : undefined} onClick={closeAndGo}>
                {t.nav[item.id]}
              </a>
            ))}
            <a href="#contact" className={active === 'contact' ? 'is-active' : undefined} onClick={closeAndGo}>
              {t.nav.contactCta}
            </a>
          </nav>
          {langSwitch}
        </div>
      ) : null}
    </>
  );
}
