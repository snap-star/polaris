import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import { MR_HOPE_AVATAR } from "./logo.js";

export default hopeTheme({
  hostname: "#",
  author: {
    name: "Chigusa",
    url: "https://ayanime.me/",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "https://ayanime.me/wp-content/uploads/2024/03/cropped-Ayanime-Logo-512.png",

  repo: "buffedcream/polar-stream",

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar: {
		"/anime/" :"structure",
		"/posts/" :"structure",
		"/demo/"  :"structure",
  },

  footer: "Default footer",

  displayFooter: true,

  encrypt: {
    config: {
      "/demo/encrypt.html": ["Hidden#1"],
    },
  },

  blog: {
    description: "Just love anime",
    intro: "/intro.html",
    medias: {
      Discord: "https://example.com",
      Email: "mailto:info@example.com",
      Facebook: "https://example.com",
      GitHub: "https://example.com",
      Gmail: "mailto:info@example.com",
      Instagram: "https://example.com",
      Lines: "https://example.com",
      Linkedin: "https://example.com",
      Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      Whatsapp: "https://example.com",
    },
  },

  metaLocales: {
    editLink: "Edit this page on GitHub",
  },

  // enable it to preview all changes in time
   hotReload: true,

  plugins: {
    blog: true,

    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },
	
	search: true,
		search: {
		searchMaxSuggestions: 10
    },
    components: {
      components: ["Badge", "VPCard"],
    },

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
       revealJs: {
         plugins: ["highlight", "math", "search", "notes", "zoom"],
       },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
     pwa: {
       favicon: "/favicon.ico",
       cacheHTML: true,
       cacheImage: true,
       appendBase: true,
       apple: {
         icon: "/assets/icon/apple-icon-152.png",
         statusBarColor: "black",
       },
       msTile: {
         image: "/assets/icon/ms-icon-144.png",
         color: "#ffffff",
       },
       manifest: {
         icons: [
           {
             src: "/assets/icon/chrome-mask-512.png",
             sizes: "512x512",
             purpose: "maskable",
             type: "image/png",
           },
           {
             src: "/assets/icon/chrome-mask-192.png",
             sizes: "192x192",
             purpose: "maskable",
             type: "image/png",
           },
           {
             src: "/assets/icon/chrome-512.png",
             sizes: "512x512",
             type: "image/png",
           },
          {
            src: "/assets/icon/chrome-192.png",
             sizes: "192x192",
            type: "image/png",
           },
         ],
         shortcuts: [
           {
             name: "Demo",
             short_name: "Demo",
             url: "/demo/",
             icons: [
               {
                 src: "/assets/icon/guide-maskable.png",
                 sizes: "192x192",
                purpose: "maskable",
                 type: "image/png",
              },
             ],
           },
         ],
       },
     },
  },
  //TOC
  toc : false,
});
