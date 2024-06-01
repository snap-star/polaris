// vite.config.js
export default {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Pisahkan node_modules menjadi chunk tersendiri
            vendor: ['react', 'react-dom',]
          }
        }
      },
      chunkSizeWarningLimit: 50000 //ubah sesuai kebutuhan
    }
  };
  