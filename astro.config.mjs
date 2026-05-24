import { defineConfig } from 'astro/config';
import rehypeMathDelimiters from './src/lib/rehypeMathDelimiters.mjs';

const site = process.env.ASTRO_SITE ?? 'https://bearxiong2k.github.io';
const base = process.env.ASTRO_BASE ?? '/';

export default defineConfig({
  output: 'static',
  site,
  base,
  markdown: {
    rehypePlugins: [rehypeMathDelimiters],
    shikiConfig: { theme: 'github-light' }
  }
});
