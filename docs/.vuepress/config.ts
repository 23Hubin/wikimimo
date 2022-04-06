import { defineHopeConfig } from "vuepress-theme-hope";

const hostname =
  process.env.HOSTNAME || "https://wiki.g1san.cn" || "https://wiki.imgradeone.com" || "https://wiki-preview.g1san.cn";

export default defineHopeConfig({
  lang: 'zh-CN',
  title: 'WikiMimo',
  description: 'A personal wiki by imgradeone',
  theme: "hope",
  themeConfig: {
    hostname,
    pageInfo: false,

    plugins: {
      blog: false,
      mdEnhance: {
        footnote: true,
      },
    },

    themeColor: false,
    fullscreen: false,
    displayFooter: true,
    footer: "© 2022 imgradeone & WikiMimo | Powered by VuePress & Font Awesome | Hosted on Vercel",
    copyright: "动态协议授权，以各页面为准",
    iconPrefix: "fa-solid fa-",

    author: "imgradeone & WikiMimo",

    repo: "imgradeone/wikimimo",
    repoLabel: "GitHub",
    repoDisplay: true,

    navbar: [
      {
        text: "主页",
        link: "/",
        icon: "house",
      },
      {
        text: "板块",
        icon: "grip",
        children: ["/tv-broadcasting/"],
      },
    ],

    sidebar: {
      "/tv-broadcasting/": "structure",

      // fallback
      "/": [
        "" /* / */,
      ],
    },
  },
});