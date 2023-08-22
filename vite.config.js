import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue'
import vuetify from "vite-plugin-vuetify";
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path';

export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  return defineConfig({
    // base: '/NYUST-GDSC-Backstage/',
    build: {
      chunkSizeWarningLimit: 1500,
    },
    plugins: [
      vue(),
      vuetify({
        autoImport: true,
      }),
      VitePWA({
        mode: "development",
        // base: "/",
        // srcDir: "src",
        // filename: "sw.js",
        includeAssets: ["./favicon.png"],
        // strategies: "injectManifest",
        manifest: {
          name: "國立雲林科技大學 GDSC 活動系統",
          short_name: "NYUST-GDSC 後台",
          theme_color: "#ffffff",
          start_url: "/",
          display: "standalone",
          background_color: "#ffffff",
          icons: [
            {
              src: "pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "logo512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
        },
        workbox: {
          cleanupOutdatedCaches: true,
          sourcemap: true
        }
      }),
    ],
    define: {'process.env': {}},
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        'vue$': 'vue/dist/vue.esm.js',
        'static': path.resolve(__dirname, '../static'),
      },
    }
  })
}