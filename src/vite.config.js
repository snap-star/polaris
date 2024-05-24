import { defineConfig } from 'vite';
import createExternal from 'vite-plugin-external';
import GoogleDrivePlayer from './components/GoogleDrivePlayer.vue';

export default defineConfig({
  plugins: [
    createExternal({
      externals: {
        react: 'React',
        GoogleDrivePlayer: 'GoogleDrivePlayer'
      }
    })
  ]
});