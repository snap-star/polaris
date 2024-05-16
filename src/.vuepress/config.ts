import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { nprogressPlugin } from '@vuepress/plugin-nprogress';
import apiFetch from '@wordpress/api-fetch';
import axios from 'axios';
import { getDirname, path} from "vuepress/utils"


export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Polaris",
  description: "Sebuah SItus",
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
   
   clientConfigFile: path.resolve(__dirname, "./client.ts"),
});
