// .vuepress/enhanceApp.js
import WordpressPost from './components/WordpressPost.vue';
import wpost from './components/wpost.vue';
import animeblog from './components/animeblog.vue';
import AnimeGallery from './components/AnimeGallery.vue';
import GraphQLPosts from './components/GraphQLPosts.vue';
import AnimeGrid from './components/AnimeGrid.vue';


export default ({ Vue }) => {
  Vue.component('WordpressPost', WordpressPost);
  Vue.component('wpost', wpost);
  Vue.component('animeblog', animeblog);
  Vue.component('AnimeGallery', AnimeGallery);
  Vue.component('GraphQLPosts', GraphQLPosts);
  Vue.component('AnimeGrid', AnimeGrid);
};
