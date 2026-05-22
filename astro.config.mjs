import { defineConfig } from 'astro/config';
import remarkMathDelimiters from './src/lib/remarkMathDelimiters.mjs';
import rehypeMathDelimiters from './src/lib/rehypeMathDelimiters.mjs';

export default defineConfig({
  output: 'static',
  site: 'https://example.com',
  base: '/',
  markdown: {
    remarkPlugins: [remarkMathDelimiters],
    rehypePlugins: [rehypeMathDelimiters],
    shikiConfig: { theme: 'github-light' }
  }
});
