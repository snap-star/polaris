import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme(
  {
    //darkmode option
    darkmode: "toggle",
    //displaying fullscreen button
    fullscreen: true,
    //hostname untuk sitemap
    hostname: "https://ayanime.id/",
    //author info bawah post
    author: {
      name: "Chigusa",
      url: "https://ayanime.me/",
    },
    //icon setting global
    iconAssets: "fontawesome-with-brands",

    //logo setting
    logo: "/logo-black.svg",
    logoDark: "/logo-white.svg",
    //repository setting
    repo: "snap-star/polaris",
    //root project directory
    docsDir: "src",

    // navbar
    navbar,
    //navbar title
    navbarTitle: "",
    //editLink
    editLink: false,
    contributors: false,
    //post type

    // sidebar
    sidebar,

    footer:
      "Disclaimer : This site Ayanime does not store any files on its server. All contents are provided by non-affiliated third parties",

    displayFooter: true,

    encrypt: {
      config: {
        "/presentasi/encrypt.html": ["Hidden#1"],
      },
    },
    //blog options
    blogLocales: {
      slide: "Slides",
      original: "Original",
    },

    blog: {
      name: "Ayanime.id",
      description: "Ayanime - Tempat nonton anime gratis subtitle indonesia",
      intro: "/intro.html",
      medias: {
        Discord: "https://discord.com/channels/@me/170599167553437696",
        Email: "mailto:chigusa@ayanime.me",
        Facebook: "https://example.com",
        GitHub: "https://github.com/buffedcream",
        Telegram: "https://example.com",
        Rss: "https://ayanime.id/rss",
      },
    },

    // enable it to preview all changes in time
    hotReload: true,
    //blog options key,filter,frontmatter,path : digunakan untuk mengatur lokasi link anime dan anime yang akan terdeteksi oleh plugin blog
    plugins: {
      blog: {
        type: [
          {
            key: "Anime",
            filter: (page) => page.frontmatter.layout === "Anime",
            frontmatter: () => ({ title: "Anime" }),
            path: "/anime/",
          },
        ],
      },
      feed: {
        atom: true,
        rss: true,
        json: true,
      },

      // Install @waline/client before enabling it
      // Note: This is for testing ONLY!
      // You MUST generate and use your own comment service in production.
      // comment: {
      //  provider: "Waline",
      //   serverURL: "https://waline-test-ashen-chi.vercel.app/",
      // },
      search: true,
      components: {
        components: [
          "Badge",
          "VPCard",
          "ArtPlayer",
          "Share",
          "SiteInfo",
          "VPBanner",
          "VidStack",
        ],
      },
      // These features are enabled for demo, only preserve features you need here
      mdEnhance: {
        imgLazyload: true,
        figure: true,
        imgMark: true,
        imgSize: true,
        align: true,
        attrs: true,
        alert: true,
        codetabs: true,
        component: true,
        demo: true,
        hint: true,
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
        flowchart: true,

        // gfm requires mathjax-full to provide tex support
        // gfm: true,

        // install katex before enabling it
        // katex: true,

        // install mathjax-full before enabling it
        // mathjax: true,

        // install mermaid before enabling it
        //mermaid: true,

        // playground: {
        //   presets: ["ts", "vue", ],
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
        favicon: "/shuriken-purple.ico",
        cacheHTML: true,
        cacheImage: true,
        appendBase: true,
        apple: {
          icon: "/shuriken-white.svg",
          statusBarColor: "black",
        },
        msTile: {
          image: "/shuriken-purple.svg",
          color: "#ffffff",
        },
        showInstall: true,
        update: "hint",
        manifest: {
          icons: [
            {
              src: "/shuriken-purple.svg",
              sizes: "512x512",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/shuriken-purple.svg",
              sizes: "192x192",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/shuriken-purple.svg",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/shuriken-purple.svg",
              sizes: "192x192",
              type: "image/png",
            },
          ],
          shortcuts: [
            {
              name: "Anime",
              short_name: "Anime",
              url: "/pages/anime-gallery.html",
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
    toc: false,
  },
  { custom: true }
);
