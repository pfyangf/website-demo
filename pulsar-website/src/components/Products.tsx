import { useState } from 'react';
import { PRODUCTS } from '../content/dictionary';
import { useLanguage } from '../context/LanguageContext';
import { Modal } from './Modal';
import { Reveal } from './Reveal';

export function Products() {
  const { lang, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(null);
  const featured = PRODUCTS.find((p) => p.featured) ?? PRODUCTS[0];
  const rest = PRODUCTS.filter((p) => p.id !== featured.id);
  const openProduct = PRODUCTS.find((p) => p.id === openId);

  return (
    <section id="products" className="section products" aria-labelledby="products-title">
      <div className="container">
        <Reveal className="section-intro">
          <p className="eyebrow">{t.products.eyebrow}</p>
          <h2 id="products-title" className="section-title">
            {t.products.title}
          </h2>
          <p className="lede">{t.products.intro}</p>
        </Reveal>

        <Reveal className="product-featured">
          <div className="product-featured-media">
            <img src={featured.image} alt={t.a11y.productVisual} width={1280} height={720} loading="lazy" />
          </div>
          <div className="product-featured-copy">
            <div className="product-head">
              <h3>{featured[lang].name}</h3>
              <span className="badge">{t.products.concept}</span>
            </div>
            <p>{featured[lang].blurb}</p>
            <ul className="tag-list">
              {featured[lang].tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <button type="button" className="btn btn-ghost" onClick={() => setOpenId(featured.id)}>
              {t.products.learnMore}
            </button>
          </div>
        </Reveal>

        <div className="product-grid">
          {rest.map((product) => (
            <Reveal key={product.id} className="product-card" as="article">
              <div className="product-card-media">
                <img src={product.image} alt={t.a11y.productVisual} width={1280} height={720} loading="lazy" />
              </div>
              <div className="product-head">
                <h3>{product[lang].name}</h3>
                <span className="badge">{t.products.concept}</span>
              </div>
              <p>{product[lang].blurb}</p>
              <ul className="tag-list">
                {product[lang].tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <button type="button" className="text-link" onClick={() => setOpenId(product.id)}>
                {t.products.learnMore}
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal
        open={Boolean(openProduct)}
        onClose={() => setOpenId(null)}
        eyebrow={t.products.concept}
        title={openProduct ? openProduct[lang].name : ''}
      >
        {openProduct ? (
          <>
            <img className="modal-image" src={openProduct.image} alt={t.a11y.productVisual} width={1280} height={720} />
            <p>{openProduct[lang].detail}</p>
            <p>{openProduct[lang].detailBody}</p>
            <ul className="tag-list">
              {openProduct[lang].tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </>
        ) : null}
      </Modal>
    </section>
  );
}
