import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://instaladoresrosario.com.ar',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    tailwind(),
    sitemap(),
  ],
  output: 'static',
});
