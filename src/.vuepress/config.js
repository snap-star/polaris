import { hopeTheme } from "vuepress-theme-hope";

export default {
  // site config
  lang: "en-US",
  title: "Polaris",
  description: "Anime Streaming Template",

  // theme
  theme: hopeTheme({
    // theme config
    plugin: {
      activeHeaderLinks: false,
    },
  }),
};

module.exports = {
    themeConfig: {
      // ...
    },
    plugins: [
      [
        '@vuepress/plugin-register-components',
        {
          componentsDir: __dirname + '/src/components'
        }
      ]
    ],
    chainWebpack: (config, isServer) => {
      if (!isServer) {
        config.plugin('register-components').use_(registerComponents);
      }
        config.plugin('vue').use(require('vue-router'), [{
        routes: [
          {
            path: '/anime/',
            component: 'GoogleDrivePlayer'
          },
        ]
      }]);
    }
  };