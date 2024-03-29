import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

const hostname =
  process.env.HOSTNAME || "https://wiki.g1san.cn" || "https://wiki.imgradeone.com" || "https://wiki-preview.g1san.cn" || "https://www.wikimimo.com" || "https://preview.wikimimo.com";

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'WikiMimo',
  description: 'A personal wiki by imgradeone',
  head:[
    [
      "link",
      {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/logo-white.png",
      },
    ],
  ],

  theme: hopeTheme({
    hostname,
    pageInfo: false,

    logo: "logo.svg",

    plugins: {
      blog: false,
      copyright: true,
      mdEnhance: {
        footnote: true,
        align: true,
      },
    },

    themeColor: {
      pink: "#fa408b",
      purple: "#ac2cd4",
      orange: "#fb8f06",
    },
    fullscreen: false,
    displayFooter: true,
    footer: "© 2022 imgradeone & WikiMimo | Powered by VuePress | Hosted on Vercel",
    copyright: "动态协议授权，以各页面为准",
    iconPrefix: "fa-solid fa-",

    author: "imgradeone & WikiMimo",

    repo: "imgradeone/wikimimo",
    repoLabel: "GitHub",
    repoDisplay: true,
    docsBranch: "preview",
    docsDir: "docs",

    navbar: [
      {
        text: "主页",
        link: "/",
        icon: "house",
      },
      {
        text: "板块",
        icon: "grip",
        children: ["/tv-broadcasting/", "/neavetv/", "/web-fair/"],
      },
      {
        text: "分支",
        icon: "code-branch",
        children: [
          {
            text: "主站",
            link: "https://www.wikimimo.com/",
          },
          {
            text: "预览",
            link: "https://preview.wikimimo.com/",
          },
        ],
      },
    ],

    sidebar: {
      "/tv-broadcasting/": "structure",
      "/neavetv/": "structure",
      "/web-fair/": "structure",
      // fallback
      "/": [
        "" /* / */,
      ],
    },
  },),
});
