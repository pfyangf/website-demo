/** Public file URL that follows Vite `base` in dev and in the static preview build. */
export function publicAsset(path: string): string {
  const base = import.meta.env.BASE_URL || './';
  const normalized = path.replace(/^\/+/, '');
  return `${base}${normalized}`;
}
