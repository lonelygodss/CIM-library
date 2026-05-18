import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://example.com',
  base: '/',
  markdown: {
    shikiConfig: { theme: 'github-light' }
  }
});
