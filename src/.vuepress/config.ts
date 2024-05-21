import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path} from "vuepress/utils"

export default defineUserConfig({
  // src/.vuepress/config.js
...
head : [
  ....,
  ["script", {src : "https://cdn.auth0.com/js/auth0-spa-js/1.13/auth0-spa-js.production.js"}]
],
  base: "/",

  lang: "en-US",
  title: "Polaris",
  description: "Sebuah SItus",
  //theme
  theme,

  // Enable it with pwa
   shouldPrefetch: false,
   clientConfigFile: path.resolve(__dirname, "./client.ts"),

});
