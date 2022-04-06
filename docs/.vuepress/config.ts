import { defineHopeConfig } from "vuepress-theme-hope";

const hostname =
  process.env.HOSTNAME || "https://wikimimo.g1san.cn";

export default defineHopeConfig({
  lang: 'zh-CN',
  title: 'WikiMimo',
  description: 'A personal wiki by imgradeone',
  theme: "hope",
  themeConfig: {
    hostname,
    plugins: {
      blog: false,
    },
    themeColor: false,
    fullscreen: false,
  },
});