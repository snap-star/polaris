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
    },
    {
      text: "Date A Live V",
      link: "/anime/date_a_live_v/",
      prefix: "anime/date_a_live_v",
      activeMatch: "^/anime/date_a_live_v/$",
    },
  ]
});
