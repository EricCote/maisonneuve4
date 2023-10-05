import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import path from 'path';
import rehypePrism from './src/components/rehype-prism';
import { rehypeSimpleSlides } from './src/components/rehype-simple-slides';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypePrism,
          [
            rehypeSimpleSlides,
            {
              slideSeparators: ['hr'],
              slideType: 'section',
              slideClass: null,
            },
          ],
        ],
      }),
    },
    react(),
  ],
  server: {
    headers: {
      // 'Content-Security-Policy': `object-src * ; img-src *`,
    },
  },
  resolve: {
    preserveSymlinks: true,
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~prism-themes': path.resolve(__dirname, 'node_modules/prism-themes'),
    },
  },
});
