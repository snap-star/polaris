// .vuepress/enhanceApp.js
import GoogleDrivePlayer from './components/GoogleDrivePlayer.vue';

export default ({ app }) => {
  app.component('GoogleDrivePlayer', GoogleDrivePlayer);
};
