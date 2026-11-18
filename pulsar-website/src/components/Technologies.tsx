import { useState, type KeyboardEvent } from 'react';
import { TECHNOLOGIES } from '../content/dictionary';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Reveal';

export function Technologies() {
  const { lang, t } = useLanguage();
  const [active, setActive] = useState(0);
  const item = TECHNOLOGIES[active];

  const onListKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      setActive((i) => (i + 1) % TECHNOLOGIES.length);
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      setActive((i) => (i - 1 + TECHNOLOGIES.length) % TECHNOLOGIES.length);
    } else if (event.key === 'Home') {
      event.preventDefault();
      setActive(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      setActive(TECHNOLOGIES.length - 1);
    }
  };

  return (
    <section id="technologies" className="section technologies" aria-labelledby="tech-title">
      <div className="container">
        <Reveal className="section-intro">
          <p className="eyebrow">{t.technologies.eyebrow}</p>
          <h2 id="tech-title" className="section-title">
            {t.technologies.title}
          </h2>
          <p className="lede">{t.technologies.intro}</p>
        </Reveal>

        <div className="tech-layout">
          <div className="tech-visual" id="tech-visual" role="tabpanel" aria-labelledby={`tech-tab-${item.id}`}>
            <img
              src="/images/tech-exploded.jpg"
              alt={t.a11y.techVisual}
              width={1024}
              height={1024}
              loading="lazy"
            />
            <svg className={`tech-overlay tech-overlay--${item.id}`} viewBox="0 0 400 400" aria-hidden="true">
              <circle className="ring ring-outer" cx="200" cy="200" r="168" />
              <circle className="ring ring-mid" cx="200" cy="200" r="118" />
              <circle className="ring ring-inner" cx="200" cy="200" r="64" />
              <circle className="ring ring-core" cx="200" cy="200" r="22" />
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (Math.PI / 4) * i - Math.PI / 2;
                const r = 118;
                return <circle key={i} className="tech-node" cx={200 + Math.cos(angle) * r} cy={200 + Math.sin(angle) * r} r="4" />;
              })}
            </svg>
            <p className="tech-visual-caption">
              <span>{item.number}</span>
              {item[lang].name}
            </p>
          </div>

          <div className="tech-list" role="tablist" aria-label={t.technologies.title} onKeyDown={onListKey}>
            {TECHNOLOGIES.map((tech, index) => {
              const selected = index === active;
              const copy = tech[lang];
              return (
                <button
                  key={tech.id}
                  type="button"
                  role="tab"
                  id={`tech-tab-${tech.id}`}
                  aria-selected={selected}
                  aria-controls="tech-visual"
                  tabIndex={selected ? 0 : -1}
                  className={`tech-item${selected ? ' is-active' : ''}`}
                  onClick={() => setActive(index)}
                >
                  <span className="tech-number">{tech.number}</span>
                  <span className="tech-item-body">
                    <span className="tech-name">{copy.name}</span>
                    <span className={`tech-desc${selected ? ' is-open' : ''}`}>{copy.body}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
