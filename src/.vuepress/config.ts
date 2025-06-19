import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { viteBundler } from "@vuepress/bundler-vite";
import Theme from "./theme";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/MaaFramework-Docs-Website/",
  lang: "en-US",
  title: "MaaFramework",
  description: "MaaFramework Docs",
  port: 3001,

  locales: {
    "/zh-cn/": {
      lang: "zh-CN",
      description: "基于图像识别的自动化黑盒测试框架",
    },
    "/en-us/": {
      lang: "en-US",
      description: "MaaFramework",
    },
  },

  markdown: {
    headers: {
      level: [2, 3, 4, 5],
    },
  },

  theme: Theme,

  alias: {
    "@theme-hope/modules/navbar/components/LanguageDropdown": path.resolve(
      __dirname,
      "./components/LanguageDropdown.ts",
    ),
  },

  plugins: [],

  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100..900&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200..900&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap",
        rel: "stylesheet",
      },
    ],
  ],

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
});
