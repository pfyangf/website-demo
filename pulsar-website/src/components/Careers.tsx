import { useState } from 'react';
import { CITIES } from '../content/dictionary';
import { useLanguage } from '../context/LanguageContext';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { scrollToId } from '../lib/scroll';
import { Modal } from './Modal';
import { Reveal } from './Reveal';

export function Careers() {
  const { lang, t } = useLanguage();
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);

  const goContact = () => {
    setOpen(false);
    window.setTimeout(() => scrollToId('contact', reduced), 40);
  };

  return (
    <section id="careers" className="section careers" aria-labelledby="careers-title">
      <div className="careers-visual">
        <img
          src="/images/careers-luminous.jpg"
          alt={t.a11y.careersVisual}
          width={1280}
          height={720}
          loading="lazy"
        />
        <div className="careers-shade" aria-hidden="true" />
      </div>
      <div className="container careers-content">
        <Reveal>
          <p className="eyebrow">{t.careers.eyebrow}</p>
          <h2 id="careers-title" className="section-title">
            {t.careers.title}
          </h2>
          {t.careers.supportingLine ? <p className="section-kicker">{t.careers.supportingLine}</p> : null}
          <p className="lede">{t.careers.body}</p>
          <div className="careers-locations">
            <p className="locations-label">{t.careers.locationsLabel}</p>
            <ul className="city-list">
              {CITIES.map((city) => (
                <li key={city.en}>{lang === 'zh' ? city.zh : city.en}</li>
              ))}
            </ul>
            <p className="pending-note">{t.careers.locationsNote}</p>
          </div>
          <button type="button" className="btn btn-ghost" onClick={() => setOpen(true)}>
            {t.careers.cta}
          </button>
          <p className="image-caption">{t.careers.imageCaption}</p>
        </Reveal>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={t.careers.panelTitle}>
        <p>{t.careers.panelBody}</p>
        <button type="button" className="btn btn-accent" onClick={goContact}>
          {t.careers.panelCta}
        </button>
      </Modal>
    </section>
  );
}
