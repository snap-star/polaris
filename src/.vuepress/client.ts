import { defineClientConfig, useRoutes } from "vuepress/client";
import WordpressPost from './components/WordpressPost.vue';
import wpost from './components/wpost.vue';
import animeblog from "./components/animeblog.vue";
import AnimeGallery from "./components/AnimeGallery.vue";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import GraphQLPosts from "./components/GraphQLPosts.vue";
import AnimeGrid from "./components/AnimeGrid.vue";
import AnimeDetail from "./components/AnimeDetail.vue";
import AnimeLayout from "./layouts/AnimeLayout.vue";
import AnimeSchedule from "./components/AnimeSchedule.vue";
import AnimeSearch from "./components/AnimeSearch.vue";
import GoogleDrivePlayer from './components/GoogleDrivePlayer.vue';
import Login from './components/Login.vue';
import Dashboard from "./components/Dashboard.vue";
import AnimeInfo from "./components/AnimeInfo.vue";
import "vuepress-theme-hope/presets/bounce-icon.scss";

export default defineClientConfig({
  plugins: [
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: __dirname + '/src/components'
      }
    ]
  ],
  chainWebpack: (config, isServer) => {
    if (!isServer) {
     config.plugin('register-components').user_('registerComponents')
    }
      config.plugin('vue').user(require('vue-router'),[{
        routes: [
          {
            path: 'anime',
            component: 'GoogleDriveplayer'
          },
        ]
      }]);
  },
  layouts: {
    //added AnimeLayout
    AnimeLayout, AnimeDetail,AnimeSchedule, AnimeGrid, AnimeSearch,
  },
 enhance: ({ app, router, siteData }) => {
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
  },
  setup(){
    setupRunningTimeFooter(
      new Date("2024-05-18"),
      {
        "/": "Server Uptime: :day hari :hour Jam :minute Menit :second Detik"
      },
      true,
    );
  },
  rootComponents: [],
});