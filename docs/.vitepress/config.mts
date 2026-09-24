import { defineConfig } from 'vitepress'
import { createSeoHead } from './seo'

const siteUrl = process.env.SITE_URL

export default defineConfig({
  lang: 'zh-CN',
  title: '布吉岛电商指南',
  description: '从选品、建店到运营增长，陪你把电商想法一步步做成能持续经营的生意。',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#f7f7f2' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],
  transformHead({ pageData, siteData, title, description }) {
    return createSeoHead({ pageData, siteData, title, description, siteUrl })
  },
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: '布吉岛电商指南',
    nav: [
      { text: '入门', link: '/getting-started/' },
      { text: '选品', link: '/products/' },
      { text: '搭店', link: '/store/' },
      { text: '运营', link: '/operations/' },
      { text: '流量', link: '/growth/' },
      { text: '实战案例', link: '/cases/' },
      { text: '工具资源', link: '/tools/' }
    ],
    sidebar: {
      '/getting-started/': [{ text: '入门', items: [{ text: '概览', link: '/getting-started/' }] }],
      '/products/': [{ text: '选品', items: [{ text: '概览', link: '/products/' }] }],
      '/store/': [{ text: '搭店', items: [{ text: '概览', link: '/store/' }] }],
      '/operations/': [{ text: '运营', items: [{ text: '概览', link: '/operations/' }] }],
      '/growth/': [{ text: '流量', items: [{ text: '概览', link: '/growth/' }] }],
      '/cases/': [{ text: '实战案例', items: [{ text: '概览', link: '/cases/' }] }],
      '/tools/': [{ text: '工具资源', items: [{ text: '概览', link: '/tools/' }] }]
    },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新于' },
    footer: { message: '选好产品，服务好每一位顾客。', copyright: 'Copyright © 2026 布吉岛' }
  }
})
