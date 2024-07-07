// .vuepress/enhanceApp.js
import GoogleDrivePlayer from './components/GoogleDrivePlayer.vue'
import Vue from 'vue'
import IframeLoader from './components/IframeLoader.vue'
import 'tailwindcss'
import tailwindConfig from '../../tailwind.config'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default ({ Vue, app, router, siteData }) => {
  app.component('GoogleDrivePlayer', GoogleDrivePlayer);
  Vue.component('IframeLoader', IframeLoader);
  Vue.use('tailwindcss', tailwindcss);
  Vue.use('tailwindcssConfig', tailwindConfig);
  app.component('Carousel', Carousel)
  app.component('Slide', Slide)
  app.component('Navigation', Navigation)
  app.component('Pagination', Pagination)
};
