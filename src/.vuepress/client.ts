import { defineClientConfig } from "vuepress/client";
import axios from 'axios';
import WordpressPost from './components/WordpressPost.vue';
import wpost from './components/wpost.vue';
import animeblog from "./components/animeblog.vue";
import AnimeGallery from "./components/AnimeGallery.vue";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import GraphQLPosts from "./components/GraphQLPosts.vue";
import AnimeGrid from "./components/AnimeGrid.vue";
import { getAuth, onAuthStateChanged } from 'firebase/auth';


export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("WordpressPost", WordpressPost);
    app.component("wpost", wpost);
    app.component("animeblog", animeblog);
    app.component("AnimeGallery", AnimeGallery);
    app.component("GraphQLPosts", GraphQLPosts);
    app.component("AnimeGrid", AnimeGrid);
  },
  setup(){
    setupRunningTimeFooter(
      new Date("2024-05-18"),
      {
        "/": "Running Time: :day hari :hour Jam :minute Menit :second Detik"
      },
      true,
    );
enhance({ app, router }) {
    const auth = getAuth();
    router.beforeEach((to, from, next) => {
      const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
      if (requiresAuth) {
        onAuthStateChanged(auth, user => {
          if (user) {
            next();
          } else {
            next('/login');
          }
        });
      } else {
        next();
      }
    });

  },
});