import { sidebar } from "vuepress-theme-hope";

export const zhcnSidebar = sidebar({
  "/zh-cn/": [
    {
      text: "主页",
      icon: "ic:round-home",
      link: "/zh-cn/",
    },
    {
      text: "应用开发",
      icon: "tdesign:app",
      prefix: "application/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Binding 接口",
      icon: "ph:code-bold",
      prefix: "binding/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "框架开发",
      icon: "ion:build-outline",
      prefix: "framework/",
      collapsible: true,
      children: "structure",
    },
  ],
});
