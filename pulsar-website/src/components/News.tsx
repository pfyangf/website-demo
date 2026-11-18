import { useState } from 'react';
import { NEWS } from '../content/dictionary';
import { useLanguage } from '../context/LanguageContext';
import { Modal } from './Modal';
import { Reveal } from './Reveal';

export function News() {
  const { lang, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(null);
  const featured = NEWS.find((n) => n.featured) ?? NEWS[0];
  const rest = NEWS.filter((n) => n.id !== featured.id);
  const openArticle = NEWS.find((n) => n.id === openId);

  return (
    <section id="news" className="section news" aria-labelledby="news-title">
      <div className="container">
        <Reveal className="section-intro">
          <p className="eyebrow">{t.news.eyebrow}</p>
          <h2 id="news-title" className="section-title">
            {t.news.title}
          </h2>
          <p className="lede">{t.news.intro}</p>
        </Reveal>

        <div className="news-layout">
          <Reveal className="news-featured" as="article">
            <button type="button" className="news-featured-hit" onClick={() => setOpenId(featured.id)}>
              <img src={featured.image} alt={t.a11y.newsVisual} width={1280} height={720} loading="lazy" />
            </button>
            <div className="news-meta">
              <span className="news-category">{featured[lang].category}</span>
              <span className="badge badge-quiet">{t.news.sample}</span>
            </div>
            <h3>
              <button type="button" className="news-title-btn" onClick={() => setOpenId(featured.id)}>
                {featured[lang].title}
              </button>
            </h3>
            <p>{featured[lang].summary}</p>
            <p className="news-date">{t.news.date}</p>
          </Reveal>

          <div className="news-list">
            {rest.map((article) => (
              <Reveal key={article.id} className="news-row" as="article">
                <button type="button" className="news-thumb" onClick={() => setOpenId(article.id)}>
                  <img src={article.image} alt={t.a11y.newsVisual} width={1280} height={720} loading="lazy" />
                </button>
                <div>
                  <div className="news-meta">
                    <span className="news-category">{article[lang].category}</span>
                    <span className="badge badge-quiet">{t.news.sample}</span>
                  </div>
                  <h3>
                    <button type="button" className="news-title-btn" onClick={() => setOpenId(article.id)}>
                      {article[lang].title}
                    </button>
                  </h3>
                  <p>{article[lang].summary}</p>
                  <p className="news-date">{t.news.date}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Modal
        open={Boolean(openArticle)}
        onClose={() => setOpenId(null)}
        eyebrow={`${t.news.sample} · ${t.news.date}`}
        title={openArticle ? openArticle[lang].title : ''}
      >
        {openArticle ? (
          <>
            <img className="modal-image" src={openArticle.image} alt={t.a11y.newsVisual} width={1280} height={720} />
            <p className="news-category">{openArticle[lang].category}</p>
            {openArticle[lang].body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </>
        ) : null}
      </Modal>
    </section>
  );
}
