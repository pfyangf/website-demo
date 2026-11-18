import { useLanguage } from '../context/LanguageContext';
import { publicAsset } from '../lib/asset';
import { Reveal } from './Reveal';

export function Innovation() {
  const { t } = useLanguage();

  return (
    <section id="innovation" className="section innovation" aria-labelledby="innovation-title">
      <div className="innovation-visual">
        <img
          src={publicAsset('images/innovation-depth.jpg')}
          alt={t.a11y.innovationVisual}
          width={1280}
          height={720}
          loading="lazy"
        />
        <div className="innovation-shade" aria-hidden="true" />
        <div className="innovation-light" aria-hidden="true" />
      </div>
      <div className="container innovation-content">
        <Reveal>
          <p className="eyebrow">{t.innovation.eyebrow}</p>
          <h2 id="innovation-title" className="innovation-title">
            <span>{t.innovation.titleA}</span>
            <span>{t.innovation.titleB}</span>
          </h2>
          <p className="innovation-body">{t.innovation.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
