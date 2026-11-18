import { useState } from 'react';
import { EMAIL, INQUIRIES } from '../content/dictionary';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Reveal';

async function copyText(value: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    try {
      const area = document.createElement('textarea');
      area.value = value;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.left = '-9999px';
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(area);
      return ok;
    } catch {
      return false;
    }
  }
}

export function Contact() {
  const { lang, t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');

  const onCopy = async () => {
    const ok = await copyText(EMAIL);
    setStatus(ok ? 'copied' : 'failed');
    window.setTimeout(() => setStatus('idle'), 2400);
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <Reveal className="contact-copy">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 id="contact-title" className="section-title">
            {t.contact.title}
          </h2>
          <p className="lede">{t.contact.body}</p>
          <ul className="inquiry-list">
            {INQUIRIES.map((item) => (
              <li key={item.id}>
                <h3>{item[lang].name}</h3>
                <p>{item[lang].body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="contact-card">
          <p className="contact-email-label">{t.contact.emailLabel}</p>
          <p className="contact-email">{EMAIL}</p>
          <p className="pending-note">{t.contact.emailNote}</p>
          <button type="button" className="btn btn-accent" onClick={() => void onCopy()}>
            {status === 'copied' ? t.contact.copied : status === 'failed' ? t.contact.copyFailed : t.contact.copy}
          </button>
          <p className="visually-hidden" aria-live="polite">
            {status === 'copied' ? t.a11y.copied : status === 'failed' ? t.a11y.copyFailed : ''}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
