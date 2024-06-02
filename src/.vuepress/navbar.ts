import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "Jadwal Release", icon: "clock", link: "/pages/schedule.html"},
  { text: "Anime List", icon: "folder", children: [{text: "Daftar Anime Style 1", icon: "folder", link: "/anime/"}, {text: "Daftar Anime Style 2", icon: "folder", link: "/pages/anime-gallery.html"}]},
  "/portfolio",
  { text: "Anime Database", icon: "book", link: "/anime-info.html"},
  /*{
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Apple",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "Apple1", icon: "pen-to-square", link: "1" },
          { text: "Apple2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "Banana",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "Banana 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "Banana 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "Cherry", icon: "pen-to-square", link: "cherry" },
      { text: "Dragon Fruit", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },*/
]);
