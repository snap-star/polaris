import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { path } from "@vuepress/utils";
import animeListPlugin from "./plugins/anime-list/animelist.vue";

export default defineUserConfig({
    
  //head tag customize
  head: [
    //import custom font
    ["link",{ rel: "preconnect", href: "https://fonts.googleapis.com"}],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: ""},
    ],
    [
      "link",
       {
         href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Display:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Mono:wght@100..900&display=swap",
         rel: "stylesheet",
       },
    ],
  ],

   //custom plugins TODO: developing
 //  plugins: [
 //   animeListPlugin
 // ],

  //theme customize
  base: "/",
  lang: "en-US",
  title: "Polaris",
  description: "Template Anime Streaming Terbaru",
  theme: theme,
  // Enable it with pwa

  shouldPrefetch: false,
  clientConfigFile: path.resolve(__dirname, "./client.ts"),
});