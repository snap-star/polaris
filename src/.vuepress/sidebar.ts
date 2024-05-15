import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/":[
  "",
   {
    text: "Daftar Anime",
    icon: "book",
    link: "/anime/",
    prefix: "anime/",
    //activeMatch: "^/anime/(?:(?!a/|b/).*)?$",
    children: "structure",
    },
  ]
});
