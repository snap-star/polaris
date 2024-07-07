// vite.config.js
import Components from "unplugin-vue-components/vite";

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
    Components({
      resolvers: [
        (componentName) => {
          if (componentName.startsWith("Va"))
            return { name: componentName, from: "vuestic-ui" };
        },
      ],
    }),
  ],
};
