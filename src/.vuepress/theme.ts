import { hopeTheme } from "vuepress-theme-hope";
import { zhcnNavbar, enusNavbar } from "./navbar/index";
import { zhcnSidebar, enusSidebar } from "./sidebar/index";

export default hopeTheme({
  hostname: "https://maafw.xyz",
  author: "MaaFramework",
  license: "LGPL-3.0",
  repo: "MaaXYZ/MaaFramework",
  docsBranch: "main",
  docsDir: "/docs",

  lastUpdated: false,
  contributors: false,

  sidebarSorter: "filename",

  locales: {
    "/zh-cn/": {
      navbar: zhcnNavbar,
      sidebar: zhcnSidebar,
      displayFooter: false,
      metaLocales: {
        editLink: "在 Github 上编辑此页面",
      },
    },
    "/en-us/": {
      navbar: enusNavbar,
      sidebar: enusSidebar,
      displayFooter: false,
      metaLocales: {
        editLink: "Edit this page on Github",
      },
    },
  },

  markdown: {
    align: true,
    codeTabs: true,
    //echarts: true,
    footnote: true,
    gfm: true,
    hint: true,
    imgLazyload: true,
    imgMark: true,
    imgSize: true,
    mark: true,
    //mermaid: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    highlighter: {
      'type': 'shiki',
      themes: {
        light: "light-plus",
        dark: "nord",
      }
    },
  },

  plugins: {
    redirect: {
      defaultLocale: "/en-us/",
      defaultBehavior: "defaultLocale",
      autoLocale: true,
      localeConfig: {
        "/en-us/": ["en-US", "en-UK", "en"],
        "/zh-cn/": ["zh-CN", "zh-TW", "zh"],
      },
      switchLocale: "modal",
    },

    icon: {
      assets: "iconify",
    },

    sitemap: true,
    seo: true,

    notice: [
      {
        path: "/en-us/",
        title: "Translation Warning",
        content: "MaaFramework's documents are mainly in Simplified Chinese. Documents in other languages may be of low quality or not yet translated. Please understand.",
        fullscreen: true,
        confirm: true,
        showOnce: true,
        actions: [
          {
            text: "Okay",
            type: "primary",
          },
          {
            text: "Take me to zh-CN",
            link: "/zh-cn/",
          },
        ],
      }
    ],
  },
}, { custom: true });
