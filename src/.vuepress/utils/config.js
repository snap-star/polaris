import { getDirname, path } from "vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default {
  alias: {
    "@GoogleDrivePlayer": path.resolve(__dirname, "./vuepress/components/GoogleDrivePlayer.vue"),
  },
};
