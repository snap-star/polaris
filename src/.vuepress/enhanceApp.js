// .vuepress/enhanceApp.js
import WordpressPost from './components/WordpressPost.vue';
import wpost from './components/wpost.vue';
import animeblog from './components/animeblog.vue';
import AnimeGallery from './components/AnimeGallery.vue';


export default ({ Vue }) => {
  Vue.component('WordpressPost', WordpressPost);
  Vue.component('wpost', wpost);
  Vue.component('animeblog', animeblog);
  Vue.component('AnimeGallery', AnimeGallery);
};
