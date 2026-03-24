import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mobn23.github.io',
  base: '/portfolio',
  integrations: [tailwind()],
});
