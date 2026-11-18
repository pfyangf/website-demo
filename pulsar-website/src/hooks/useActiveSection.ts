import { useEffect, useState } from 'react';

const SECTION_IDS = [
  'hero',
  'about',
  'technologies',
  'solutions',
  'innovation',
  'products',
  'capabilities',
  'news',
  'careers',
  'contact',
] as const;

export function useActiveSection(): string {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (elements.length === 0) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        let next = 'hero';
        let best = -1;
        for (const el of elements) {
          const ratio = visible.get(el.id) ?? 0;
          if (ratio > best) {
            best = ratio;
            next = el.id;
          }
        }
        if (best <= 0) {
          const mid = window.scrollY + 120;
          for (const el of elements) {
            if (el.offsetTop <= mid) next = el.id;
          }
        }
        setActive(next);
      },
      {
        rootMargin: '-72px 0px -40% 0px',
        threshold: [0, 0.2, 0.4, 0.6, 0.8],
      },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return active;
}
