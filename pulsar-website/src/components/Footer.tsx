import { useState } from 'react';
import { FOOTER_NAV_ITEMS } from '../content/dictionary';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Logo';
import { Modal } from './Modal';

type LegalKey = 'privacy' | 'terms' | 'disclaimer';

export function Footer() {
  const { t } = useLanguage();
  const [legal, setLegal] = useState<LegalKey | null>(null);

  const legalTitle =
    legal === 'privacy' ? t.footer.privacy : legal === 'terms' ? t.footer.terms : legal === 'disclaimer' ? t.footer.disclaimer : '';

  return (
    <footer className="site-footer">
      <div className="footer-orbit" aria-hidden="true">
        <svg viewBox="0 0 600 200">
          <ellipse cx="300" cy="100" rx="260" ry="70" />
          <ellipse cx="300" cy="100" rx="180" ry="42" />
          <circle cx="560" cy="100" r="3.5" fill="#65E5F2" />
        </svg>
      </div>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo variant="footer" />
          <p className="footer-legal-name">{t.footer.legalName}</p>
          <p className="footer-brief">{t.footer.brief}</p>
        </div>
        <nav aria-label={t.a11y.footerNav}>
          <p className="footer-label">{t.footer.navLabel}</p>
          <ul>
            {FOOTER_NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={item.href}>{t.nav[item.id]}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="footer-label">{t.footer.legalLabel}</p>
          <ul>
            <li>
              <button type="button" className="footer-legal-btn" onClick={() => setLegal('privacy')}>
                {t.footer.privacy}
              </button>
            </li>
            <li>
              <button type="button" className="footer-legal-btn" onClick={() => setLegal('terms')}>
                {t.footer.terms}
              </button>
            </li>
            <li>
              <button type="button" className="footer-legal-btn" onClick={() => setLegal('disclaimer')}>
                {t.footer.disclaimer}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-copy">{t.footer.copyright}</p>

      <Modal open={Boolean(legal)} onClose={() => setLegal(null)} eyebrow={legalTitle} title={t.footer.pendingTitle}>
        <p>{t.footer.pendingBody}</p>
      </Modal>
    </footer>
  );
}
