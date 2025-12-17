// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://infbehavior-design.github.io',
  base: '/FJU_Digital_Content_Curation/',

  trailingSlash: 'always', // ✅ 強制路由都用結尾斜線
  build: {
    format: 'directory',   // ✅ 確保輸出為 /xxx/index.html
  },

  vite: {
    plugins: [tailwindcss()]
  },
  server: {
    allowedHosts: ['wilbert-nonelectrolytic-henley.ngrok-free.dev'],
  }
});
