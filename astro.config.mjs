import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ojey-egwuda.github.io',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: '_astro'
  }
});
