import { useLanguage } from '../context/LanguageContext';
import { publicAsset } from '../lib/asset';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="section hero" aria-labelledby="hero-title">
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="hero-copy">
        <p className="hero-brand">{t.hero.brand}</p>
        <h1 id="hero-title" className="hero-title">
          <span>{t.hero.titleA}</span>
          <span>{t.hero.titleB}</span>
        </h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        {t.hero.supportingLine ? <p className="hero-supporting">{t.hero.supportingLine}</p> : null}
        <p className="hero-body">{t.hero.body}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href="#technologies">
            {t.hero.primary}
          </a>
          <a className="btn btn-ghost" href="#about">
            {t.hero.secondary}
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-stage">
          <img
            className="hero-core"
            src={publicAsset('images/hero-station.jpg')}
            alt={t.a11y.heroVisual}
            width={1280}
            height={720}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
