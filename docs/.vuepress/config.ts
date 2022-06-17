import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

const { redirectPlugin } = require("vuepress-plugin-redirect");

const hostname =
  process.env.HOSTNAME || "https://www.wikimimo.com" || "https://preview.wikimimo.com" || "https://wiki.g1san.cn" || "https://wiki.imgradeone.com" || "https://wiki-preview.g1san.cn";

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'WikiMimo',
  description: 'A personal wiki by imgradeone',
  head: [
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

    }),
  ],

  theme: hopeTheme({
    hostname,
    
    locales: {
      "/": {
        routeLocales: {
          "404msg": [
            "这个页面被某只飞行矮堇瓜吃……啊呸，被 imgradeone 漏掉了。",
            "404 小贴士：毁掉一个人的方式就是直接无脑对骂被害者。",
            "404 小贴士：有时候在这个鬼页面刷新，可以跳转到你该去的地方。",
            "终有一日会寻找到的。",
            "404 小贴士：旧链接突然变成 deadlink 这回事，可以试试这几个方法：把链接里的“tv-broadcasting”换成“broadcasting”。",
            "可是，WikiMimo 又不仅仅是“放送文化”Wiki 啊……但还是找不到页面就是了。",
            "404 小贴士：如果原来这里好端端的，那就是我摆烂了，懒得做重定向。",
            "虽然是 404，但，恕我甩一句话：放圈反黑，越反越黑。",
            "真的有人会不断刷新，收集 404 文案吗？"
          ],
        },
      }
    },

    logo: "logo.svg",

    plugins: {
      blog: false,
      copyright: true,
      mdEnhance: {
        footnote: true,
        align: true,
        imageSize: true,
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

    notFound: ["这个页面被派蒙吃……啊呸，被 imgradeone 漏掉了。", "404 小贴士：毁掉一个人的方式就是直接无脑对骂被害者", "有时候在这个鬼页面刷新，可以跳转到你该去的地方。"],

    navbar: [
      {
        text: "主页",
        link: "/",
        icon: "house",
      },
      {
        text: "版块",
        icon: "grip",
        children: ["/broadcasting/", "/neavetv/", "/web-fair/"],
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
      {
        text: "项目",
        icon: "diagram-project",
        children: [
          {
            text: "WikiMimo Archive",
            icon: "box-archive",
            link: "https://archive.wikimimo.com/",
          },
        ],
      },
    ],

    sidebar: {
      "/broadcasting/": "structure",
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

