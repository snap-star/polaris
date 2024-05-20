import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/":[
  "",
   {
    text: "List",
    icon: "list",
    link: "/anime/",
    prefix: "anime/",
    //activeMatch: "^/anime/(?:(?!a/|b/).*)?$",
    children: "structure",
    },
  ]
});
