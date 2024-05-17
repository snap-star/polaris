// docs/.vuepress/enhanceApp.js
import axios from 'axios';

export default ({ Vue, options, router, siteData }) => {
  Vue.prototype.$axios = axios.create({
    baseURL: 'https://ayanime.me/wp-json/wp/v2/posts/' // Ganti dengan URL backend WordPress
  });
};
