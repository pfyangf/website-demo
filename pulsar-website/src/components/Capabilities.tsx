import { CAPABILITIES } from '../content/dictionary';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Logo';
import { Reveal } from './Reveal';

export function Capabilities() {
  const { lang, t } = useLanguage();

  return (
    <section id="capabilities" className="section capabilities" aria-labelledby="capabilities-title">
      <div className="container">
        <Reveal className="section-intro">
          <p className="eyebrow">{t.capabilities.eyebrow}</p>
          <h2 id="capabilities-title" className="section-title">
            {t.capabilities.title}
          </h2>
          <p className="lede">{t.capabilities.intro}</p>
        </Reveal>

        <Reveal className="capability-map">
          <div className="capability-core">
            <Logo variant="mark" />
            <p>{t.capabilities.core}</p>
          </div>
          <ol className="capability-nodes">
            {CAPABILITIES.map((item) => (
              <li key={item.id} className={`capability-node capability-node--${item.id}`}>
                <span className="capability-number">{item.number}</span>
                <h3>{item[lang].name}</h3>
                <p>{item[lang].body}</p>
              </li>
            ))}
          </ol>
          <svg className="capability-orbits" viewBox="0 0 800 520" aria-hidden="true">
            <ellipse cx="400" cy="260" rx="230" ry="150" />
            <ellipse cx="400" cy="260" rx="320" ry="210" />
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
