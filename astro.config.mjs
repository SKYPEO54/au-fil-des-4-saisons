// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.aufildes4saisons.fr',
  build: {
    // CSS inline dans chaque page : plus de feuille de style bloquante au premier rendu.
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      // Date reelle de generation et priorite par type de page.
      lastmod: new Date(),
      serialize(item) {
        const chemin = new URL(item.url).pathname;
        if (chemin === '/') item.priority = 1.0;
        else if (/mentions-legales/.test(chemin)) item.priority = 0.3;
        else if (/a-propos|contact/.test(chemin)) item.priority = 0.6;
        else item.priority = 0.8;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Optimisation des images (WebP/AVIF) via Sharp
    responsiveStyles: true,
  },
});
