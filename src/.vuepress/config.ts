import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/<repo>/",

  lang: "en-US",
  title: "Ayanime",
  description: "Nonton Streaming Anime Subtitle Indonesia Gratis",

  theme,

  // Enable it with pwa
   shouldPrefetch: false,
   
});
