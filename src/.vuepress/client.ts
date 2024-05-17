import { defineClientConfig } from "vuepress/client";
import axios from 'axios';
import WordpressPost from './components/WordpressPost.vue';
import wpost from './components/wpost.vue';

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("WordpressPost", WordpressPost);
    app.component("wpost", wpost);
  },
});