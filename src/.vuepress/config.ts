import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { nprogressPlugin } from '@vuepress/plugin-nprogress';
import apiFetch from '@wordpress/api-fetch';
import axios from 'axios';


export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Ayanime",
  description: "Nonton Streaming Anime Subtitle Indonesia Gratis",
  //import theme.ts dan sidebarku
  theme,
  //prismjs
  prismjs: {
    light: "material-light",
    dark: "material-dark",
  },
  //catalog

  // Enable it with pwa
   shouldPrefetch: false,
});
