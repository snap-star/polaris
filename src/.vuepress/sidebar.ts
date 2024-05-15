import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/":[
  "",
   {
    text: "Presentasi",
    icon: "laptop",
    link: "/presentasi/",
    prefix: "presentasi/",
    //activeMatch: "^/anime/(?:(?!a/|b/).*)?$",
    children: "structure",
    },
  ]
});
