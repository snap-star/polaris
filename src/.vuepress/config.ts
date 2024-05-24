import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path} from "vuepress/utils"
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Polaris",
  description: "Template Anime Streaming Terbaru",
  //theme
  theme,
    // Enable it with pwa
    shouldPrefetch: false,
    clientConfigFile: path.resolve(__dirname, "./client.ts"),
    
});