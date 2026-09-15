// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serves this project at /clive-site/, but keep local dev at
// the root so `npm run dev` stays simple to browse.
const isDev = process.argv[2] === 'dev';

// https://astro.build/config
export default defineConfig({
  site: 'https://joeloftusdev.github.io',
  base: isDev ? '/' : '/clive-site/',
  vite: {
    plugins: [tailwindcss()]
  }
});