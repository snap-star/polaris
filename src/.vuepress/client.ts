import { defineClientConfig } from "vuepress/client";
import { getDirname, path } from "vuepress/utils";
import WordpressPost from './components/WordpressPost.vue';
import wpost from './components/wpost.vue';
import animeblog from "./components/animeblog.vue";
import AnimeGallery from "./components/AnimeGallery.vue";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import GraphQLPosts from "./components/GraphQLPosts.vue";
import AnimeGrid from "./components/AnimeGrid.vue";
import AnimeDetail from "./components/AnimeDetail.vue";
import AnimeLayout from "./layouts/AnimeLayout.vue";
import LoginButton from "./components/LoginButton.vue";
import LogoutButton from "./components/LogoutButton.vue";
import AnimeSchedule from "./components/AnimeSchedule.vue";
import AnimeSearch from "./components/AnimeSearch.vue";
import GoogleDrivePlayer from './components/GoogleDrivePlayer.vue';
import Login from './components/Login.vue';
import Dashboard from "./components/Dashboard.vue";

export default defineClientConfig({
  layouts: {
    //added AnimeLayout
    AnimeLayout, AnimeDetail,AnimeSchedule, AnimeGrid, AnimeSearch, GoogleDrivePlayer,
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
    app.component("LoginButton", LoginButton);
    app.component("LogoutButton", LogoutButton);
    app.component("AnimeSchedule", AnimeSchedule);
    app.component("AnimeSearch", AnimeSearch);
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