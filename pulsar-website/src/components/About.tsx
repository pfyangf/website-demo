import { useLanguage } from '../context/LanguageContext';
import { publicAsset } from '../lib/asset';
import { Reveal } from './Reveal';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="about-visual">
        <img
          src={publicAsset('images/about-luminous.jpg')}
          alt={t.a11y.aboutVisual}
          width={1280}
          height={720}
          loading="lazy"
        />
        <div className="about-shade" aria-hidden="true" />
      </div>
      <div className="container about-content">
        <Reveal>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 id="about-title" className="section-title">
            {t.about.title}
          </h2>
          <p className="about-legal">{t.about.legalName}</p>
          <div className="about-body">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
