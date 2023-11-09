import path             from 'path'
import { defineConfig } from 'vite'
import pluginVue        from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    // for linked (exclude)
    exclude: [  ],
    include: [  ],
  },
  plugins: [
    pluginVue({ include: [ /\.vue$/] }),
  ],
  server: {
    port: 8080,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '@/global.scss';
        `,
      },
    },
  },
  define: {
    'import.meta.env.PACKAGE_VERSION': JSON.stringify(process.env.npm_package_version),
  },
})
