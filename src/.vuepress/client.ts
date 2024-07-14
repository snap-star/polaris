import { defineClientConfig, useRoutes } from "vuepress/client";
import WordpressPost from './components/WordpressPost.vue'; //test axios api 1
import wpost from './components/wpost.vue'; // test axios api 2
import animeblog from "./components/animeblog.vue";
import AnimeGallery from "./components/AnimeGallery.vue"; //untuk loading latest post
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import GraphQLPosts from "./components/GraphQLPosts.vue"; //api layer untuk fetching data dari ayanime.id
import AnimeGrid from "./components/AnimeGrid.vue";
import AnimeDetail from "./components/AnimeDetail.vue";
import AnimeLayout from "./layouts/AnimeLayout.vue";
import AnimeSchedule from "./components/AnimeSchedule.vue"; //nanti dipakai buat jadwal schedule anime TODO: fetching schedule
import AnimeSearch from "./components/AnimeSearch.vue"; //anime search info via api fetch from myanimelist.com TODO: Still need develop
import GoogleDrivePlayer from './components/GoogleDrivePlayer.vue'; //komponen player video - using artplayer
import Login from './components/Login.vue'; //login form TODO: still need develop
import Dashboard from "./components/Dashboard.vue"; //dashboard layout still need develop
import AnimeInfo from "./components/AnimeInfo.vue"; //search anime info via api fetch on myanimelist.com TODO: still need develop
import "vuepress-theme-hope/presets/bounce-icon.scss"; //effect bounce mouse on hover
import "vuepress-theme-hope/presets/shinning-feature-panel.scss"; //shining feature
import { forceUpdate } from "@vuepress/plugin-pwa/client"; //setup force update when new content available
import { createApp, onMounted } from "vue";
import IframeLoader from "./components/IframeLoader.vue";
import AnimeCarousel from "./components/AnimeCarousel.vue";
import * as ElementPlustIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'

// const app = createApp(app)
// for (const [key, component] of Object.entries(ElementPlustIconsVue)) {
//     app.component(key, component)
// }

export default defineClientConfig({
  layouts: {
    //added AnimeLayout
    AnimeLayout, AnimeDetail,AnimeSchedule, AnimeGrid, AnimeSearch,
  },
 enhance: ({  app, router, siteData }) => {
    // createApp(app)
    app.use(ElementPlus)
    // app.mount('#app')
    app.component("WordpressPost", WordpressPost);
    app.component("wpost", wpost);
    app.component("animeblog", animeblog);
    app.component("AnimeGallery", AnimeGallery);
    app.component("GraphQLPosts", GraphQLPosts);
    app.component("AnimeGrid", AnimeGrid);
    app.component("AnimeDetail", AnimeDetail);
    app.component("AnimeLayout", AnimeLayout);
    app.component("AnimeSchedule", AnimeSchedule);
    app.component("AnimeSearch", AnimeSearch);
    app.component("AnimeInfo", AnimeInfo);
    app.component("GoogleDrivePlayer", GoogleDrivePlayer);
    app.component("Login", Login);
    app.component("Dashboard", Dashboard);
    app.component('IframeLoader', IframeLoader);
    app.component('AnimeCarousel', AnimeCarousel);

  },
  //custom setup script
  setup(){
    {
      if (typeof window !== 'undefined') {
        window.addEventListener('touchmove', () => {}, { passive: true });
      }
    }
    //pwa config
    onMounted (() => {
      forceUpdate()
    });
  },
  rootComponents: [],
});