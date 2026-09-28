import { defineConfig, type HeadConfig } from 'vitepress'
import { createSeoHead } from './seo'

const siteUrl = process.env.SITE_URL
const siteOrigin = new URL(siteUrl || 'https://ecom.itkdm.com').origin
const measurementId = process.env.GA_MEASUREMENT_ID
const analyticsHead: HeadConfig[] = measurementId && /^G-[A-Z0-9]+$/.test(measurementId)
  ? [
      ['script', { async: '', src: `https://www.googletagmanager.com/gtag/js?id=${measurementId}` }],
      ['script', {}, `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${measurementId}');`]
    ]
  : []

export default defineConfig({
  lang: 'zh-CN',
  title: '布吉岛电商经营指南',
  description: '关注不同电商平台的经营机会，拆解选品、供货、获客与利润，让电商想法逐步变成自己的生意。',
  cleanUrls: true,
  sitemap: { hostname: siteOrigin },
  lastUpdated: true,
  head: [
    ...analyticsHead,
    ['meta', { name: 'theme-color', content: '#faf6ef' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '128x128', href: '/favicon.png' }],
    ['link', { rel: 'describedby', href: '/llms.txt' }]
  ],
  transformHead({ pageData, siteData, title, description }) {
    return createSeoHead({ pageData, siteData, title, description, siteUrl })
  },
  themeConfig: {
    logo: { src: '/favicon.svg', alt: '布吉岛电商经营指南标志' },
    siteTitle: '布吉岛电商经营指南',
    nav: [
      { text: '机会入门', link: '/getting-started/' },
      { text: '京东', link: '/marketplace/' },
      { text: '闲鱼', link: '/resale/' },
      { text: '拼多多', link: '/group-buying/' },
      { text: '抖店', link: '/short-video/' },
      { text: '跨境电商', link: '/cross-border/' },
      { text: '实战案例', link: '/cases/' },
      { text: '工具资源', link: '/tools/' }
    ],
    sidebar: {
      '/getting-started/': [{ text: '机会入门', items: [{ text: '概览', link: '/getting-started/' }] }],
      '/marketplace/': [{ text: '京东', items: [{ text: '概览', link: '/marketplace/' }] }],
      '/resale/': [{ text: '闲鱼', items: [{ text: '概览', link: '/resale/' }] }],
      '/group-buying/': [{ text: '拼多多', items: [{ text: '概览', link: '/group-buying/' }] }],
      '/short-video/': [{ text: '抖店', items: [{ text: '概览', link: '/short-video/' }] }],
      '/cross-border/': [{ text: '跨境电商', items: [{ text: '概览', link: '/cross-border/' }] }],
      '/cases/': [{ text: '实战案例', items: [{ text: '概览', link: '/cases/' }] }],
      '/tools/': [{ text: '工具资源', items: [{ text: '概览', link: '/tools/' }] }]
    },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新于' },
    footer: { message: '看懂平台变化，把握经营机会。本站为独立内容站，与文中提及的平台无隶属关系。', copyright: 'Copyright © 2026 布吉岛' }
  }
})
