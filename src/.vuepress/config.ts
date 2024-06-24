import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { path } from "@vuepress/utils";

export default defineUserConfig({
    
  //head tag customize start
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
    //import tailwind
    ['link', { rel: 'stylesheet', href: './vuepress/styles/index.css' }],
    //import bootstrap style
    //['link', { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' }]
  ],
  //head tag customize end


  //bagian plugin start
//    custom plugins TODO: developing
//     plugins: [
//     animeListPlugin
//  ],
  //bagian plugin end

  //theme customize start
  base: "/", //root
  lang: "en-US", //bahasa yang dipakai
  title: "Ayanime.id", //judul program
  description: "Template Anime Streaming Terbaru", //deskripsi program
  theme: theme,
    //syntax mereplace komponen
    // alias: {
    //   //isi code komponen
    //   //komponen sidebar asli dan path -> custom sidebar
    //   "@theme-hope/components/Sidebar": path.resolve( __dirname, /* path ke custom sidebar*/, ),
    // },
  // Enable it with pwa
  shouldPrefetch: false, //pwa
  clientConfigFile: path.resolve(__dirname, "./client.ts"), //client config
});