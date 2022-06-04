import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

const { redirectPlugin } = require("vuepress-plugin-redirect");

const hostname =
  process.env.HOSTNAME || "https://www.wikimimo.com" || "https://preview.wikimimo.com" || "https://wiki.g1san.cn" || "https://wiki.imgradeone.com" || "https://wiki-preview.g1san.cn";

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

  plugins: [
    redirectPlugin({
      config: {
        "/tv-broadcasting/weirdo/": "/web-fair/tv-broadcasting-weirdo/",
      },
    }),
  ],

  theme: hopeTheme({
    hostname,

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
    footer: "© 2022 imgradeone & WikiMimo | Powered by VuePress | Hosted on Vercel | <a href=\"https://icp.gov.moe/?keyword=20226466\" target=\"_blank\">萌ICP备20226466号</a>",
    copyright: "动态协议授权，以各页面为准",
    iconPrefix: "fa-solid fa-",

    author: "imgradeone & WikiMimo",
    pageInfo: false,

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
        text: "版块",
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
      {
        text: "关于",
        link: "/about/",
        icon: "circle-info",
      },
    ],

    sidebar: {
      "/tv-broadcasting/": "structure",
      "/neavetv/": "structure",
      "/web-fair/": "structure",
      "/about/": "structure",
      // fallback
      "/": [
        "" /* / */,
      ],
    },
  },),
});
