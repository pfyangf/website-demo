import { SOLUTIONS } from '../content/dictionary';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Reveal';

export function Solutions() {
  const { lang, t } = useLanguage();

  return (
    <section id="solutions" className="section solutions" aria-labelledby="solutions-title">
      <div className="container">
        <Reveal className="section-intro">
          <p className="eyebrow">{t.solutions.eyebrow}</p>
          <h2 id="solutions-title" className="section-title">
            {t.solutions.title}
          </h2>
          <p className="lede">{t.solutions.intro}</p>
        </Reveal>

        <div className="solutions-stack">
          {SOLUTIONS.map((item, index) => {
            const copy = item[lang];
            return (
              <Reveal key={item.id} className={`solution solution--${item.layout}`}>
                <div className="solution-media">
                  <img src={item.image} alt="" width={1280} height={720} loading="lazy" />
                  <div className="solution-shade" aria-hidden="true" />
                </div>
                <div className="solution-copy">
                  <p className="solution-index">0{index + 1}</p>
                  <h3>{copy.name}</h3>
                  <p>{copy.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
