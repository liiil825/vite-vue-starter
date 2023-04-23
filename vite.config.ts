import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'src'),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
    },
  },
  build: {
    rollupOptions: {
      input: resolve(__dirname, './index.html'),
    },
  },
  plugins: [
    vue(),
    VueI18nPlugin({
      include: resolve(process.cwd(), 'src/i18n/locales/**'),
      compositionOnly: true,
    }),
  ],
})
