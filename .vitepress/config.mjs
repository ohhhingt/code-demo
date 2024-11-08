import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: '../imgaes/1.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Home', items:[
        { text: 'Home', link: '/' },
        { text: '算法', link: '../code/算法.md' }
      ]},
    ],

    sidebar: [
      {
        text: 'code',
        items: [
          { text: '算法', link: '../code/算法.md' },
          { text: 'css学习', link: '../code/css学习.md' },
          { text: 'node安装', link: '../code/node安装.md' },
          { text: '编程技术问题', link: '../code/编程技术问题.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      copyright: "Copyright@ 2024 Zheng He Sheng"
    },

    // 代替On this page
    outlineTitle: '文章目录',
    // 标题级别
    outline: [2, 6],


    base: "/docs-demo/"

  }
})


