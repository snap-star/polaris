import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  resolve: {
    alias: {
      '@popperjs/core': require.resolve('@popperjs/core/lib/index.js')
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    commonjs()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Pisahkan node_modules menjadi chunk tersendiri
          vendor: ["element-plus", "@popperjs/core"],
        },
      },
    },
    chunkSizeWarningLimit: 50000, // ubah sesuai kebutuhan
  },
});
