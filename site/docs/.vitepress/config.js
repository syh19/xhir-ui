

export default {
  base: process.env.NODE_ENV === 'production' ? '/xhir-ui/' : '/',
  title: 'xhir-ui',
  description: 'xhir-ui 是一个简单的 UI 组件库',
  cleanUrls: true,
  themeConfig: {
    // siteTitle: false,
    logo: "/xhir-ui-logo.jpg",
    nav: [
      { text: "指南", link: "/guide/index" },
      { text: "组件", link: "/components/index" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/syh19" }],
    sidebar: {
      "/guide/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guide/installation",
            },
            {
              text: "快速开始",
              link: "/guide/quickstart",
            },
          ],
        },
        {
          text: "进阶",
          items: [
            {
              text: "xx",
              link: "/xx",
            },
          ],
        },
      ],
      "/components/": [
        {
          text: "基础组件",
          items: [
            {
              text: "Button按钮",
              link: "/components/button",
            },
            {
              text: "Icon图标",
              link: "/components/icon",
            },
          ],
        },
      ],
    },
  },
}
