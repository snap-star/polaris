import { defineClientConfig } from "vuepress/client";
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
import SchedulePage from "./components/SchedulePage.vue";

export default defineClientConfig({
  layouts: {
    //added AnimeLayout
    AnimeLayout, AnimeDetail,SchedulePage, AnimeGrid, AnimeDetail

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
    app.component("SchedulePage", SchedulePage);
      },
  setup(){
    setupRunningTimeFooter(
      new Date("2024-05-18"),
      {
        "/": "Running Time: :day hari :hour Jam :minute Menit :second Detik"
      },
      true,
    );
  },
});