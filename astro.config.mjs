import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://aviralksingh.github.io',
  base: '/aviralksingh.github.io'
});
