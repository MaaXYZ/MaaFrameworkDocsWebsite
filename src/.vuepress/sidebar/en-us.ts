import { sidebar } from "vuepress-theme-hope";

export const enusSidebar = sidebar({
  "/en-us/": [
    {
      text: "Home",
      icon: "ic:round-home",
      link: "/zh-cn/",
    },
    {
      text: "Application Dev",
      icon: "tdesign:app",
      prefix: "application/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Binding Interface",
      icon: "ph:code-bold",
      prefix: "binding/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Framework Dev",
      icon: "ion:build-outline",
      prefix: "framework/",
      collapsible: true,
      children: "structure",
    },
  ],
});
