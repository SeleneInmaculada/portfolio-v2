import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://seleneinmaculada.github.io',
  base: '/portfolio-selene/',
  output: 'static',
  integrations: [sitemap()],
});
