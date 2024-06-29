import { hopeTheme } from "vuepress-theme-hope";


export default {
  // site config
  lang: "en-US",
  title: "Ayanime",
  description: "Nonton Anime Sub Indonesia",

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
      //... isi kode
    },
    //komponen register plugin
    plugins: [
      [
        '@vuepress/plugin-register-components',
        {
          componentsDir: __dirname + '/src/components'
        }
      ]
    ],

    //register komponen googledriveplayer todo: masih error on load
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