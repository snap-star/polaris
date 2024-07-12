// vite.config.js
import Components from "unplugin-vue-components/vite";
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Pisahkan node_modules menjadi chunk tersendiri
          vendor: ["react", "react-dom"],
        },
      },
    },
    chunkSizeWarningLimit: 50000, //ubah sesuai kebutuhan
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    //....
    Components({
      resolvers: [
        (componentName) => {
          if (componentName.startsWith("Va"))
            return { name: componentName, from: "vuestic-ui" };
        },
        [ElementPlusResolver()],
      ],
    }),
  ],
};
