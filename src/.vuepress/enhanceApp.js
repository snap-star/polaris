// .vuepress/enhanceApp.js
import WordpressPost from './components/WordpressPost.vue';

export default ({ Vue }) => {
  Vue.component('WordpressPost', WordPressPost);
};
