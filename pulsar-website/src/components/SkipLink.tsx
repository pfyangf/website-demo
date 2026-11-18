import { useLanguage } from '../context/LanguageContext';

export function SkipLink() {
  const { t } = useLanguage();
  return (
    <a className="skip-link" href="#main">
      {t.a11y.skip}
    </a>
  );
}
