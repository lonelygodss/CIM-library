import { defineConfig } from 'astro/config';
import rehypeMathDelimiters from './src/lib/rehypeMathDelimiters.mjs';

export default defineConfig({
  output: 'static',
  site: 'https://example.com',
  base: '/',
  markdown: {
    rehypePlugins: [rehypeMathDelimiters],
    shikiConfig: { theme: 'github-light' }
  }
});
