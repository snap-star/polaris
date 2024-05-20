import { getDirname, path } from "vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";
import type { ThemeOptions } from "vuepress-theme-hope";

const __dirname = getDirname(import.meta.url);

export default (options: ThemeOptions) => ({
  name: "vuepress-theme-local",

  extends: hopeTheme(options, { custom: true }),

  alias: {
    // You can override or add aliases here
    // For example, here we change the vuepress-theme-hope HomePage component to components/HomePage.vue under our own theme
    "@theme-hope/components/HomePage": path.resolve(
      __dirname,
      "./layouts/AnimeLayout.vue",
      "./components/AnimeDetail.vue",
      "./components/AnimeGallery.vue",
      "./components/AnimeGrid.vue",
      "./components/GraphQLPosts.vue",
      "./components/animeblog.vue",
      "./components/WordpressPost.vue",
    ),
  },
});
