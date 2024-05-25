import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/":[
  "",
   {
    text: "Episode List",
    icon: "list",
    link: "/anime/",
    prefix: "anime/",
    activeMatch: "^/anime/$"
    //children: "structure",
    },
  ]
});
