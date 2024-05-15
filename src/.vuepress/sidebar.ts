import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",{
text: "Anime",
icon: "film",
prefix: "anime/",
link: "anime/",
children: "structure"},
{
text: "Posts",
icon: "book",
prefix:	"posts/",
link: "posts/",
children: "structure"},
{
text: "Daftar Anime",
icon: "list",
prefix: "anime/daftar-anime/",
link : "anime/daftar-anime/",
children: "structure"},
    {
      text: "Demo",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Articles",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    {
      text: "Slides",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/guide/content/revealjs/demo.html",
    }
  ],
});
