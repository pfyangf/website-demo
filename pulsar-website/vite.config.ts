import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  // Relative base so the committed preview works from compare.html and from
  // `python -m http.server` at the repo root.
  base: './',
  plugins: [react()],
  build: {
    outDir: 'preview',
    emptyOutDir: true,
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: false,
  },
});
