// .vuepress/enhanceApp.js
import GoogleDrivePlayer from './components/GoogleDrivePlayer.vue'
import Vue from 'vue'
import IframeLoader from './components/IframeLoader.vue'
import 'tailwindcss'
import tailwindConfig from '../../tailwind.config'

export default ({ Vue, app, router, siteData }) => {
  app.component('GoogleDrivePlayer', GoogleDrivePlayer);
  Vue.component('IframeLoader', IframeLoader);
  app.use('Carousel', Carousel);
  Vue.component('Select', Select);
  Vue.use('tailwindcss', tailwindcss);
  Vue.use('tailwindcssConfig', tailwindConfig);
};
