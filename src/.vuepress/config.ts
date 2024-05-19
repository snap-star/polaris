import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path} from "vuepress/utils"


export default defineUserConfig({
  base: "/polar-stream/",

  lang: "en-US",
  title: "Polaris",
  description: "Sebuah SItus",
  //import theme.ts dan sidebarku
  theme,

  //catalog

  // Enable it with pwa
   shouldPrefetch: false,
   
   clientConfigFile: path.resolve(__dirname, "./client.ts"),

});
