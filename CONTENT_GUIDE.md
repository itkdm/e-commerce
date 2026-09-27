# 页面元数据规范

每个公开页面都要填写唯一的 `title` 和准确的 `description`。canonical、Open Graph、Twitter Card 和结构化数据由 VitePress 配置生成。

按需填写 `date`（发布日期明确时）、`author`、`ogImage`、`ogImageAlt`、`noindex: true`。默认分享图为 `docs/public/social/default-share-v3.jpg`（1200 × 630），使用真实经营场景照片且不嵌入标题；分享标题和摘要由页面元数据提供。更新时间默认由 Git 提交时间提供。

不使用 `keywords` 生成 `<meta name="keywords">`。搜索词应通过页面主题和正文自然覆盖。

## 站点级 SEO

VitePress 内建 sitemap 由 `docs/.vitepress/config.mts` 中的 `sitemap.hostname` 启用。`docs/public/robots.txt` 允许通用爬虫、搜索爬虫和 AI 搜索/训练爬虫访问，并声明 sitemap。`docs/public/llms.txt` 只维护人工精选的核心入口，不复制全站 sitemap；站点 head 通过 `rel="describedby"` 提供发现入口。

正式域名为 `https://ecom.itkdm.com`。设置 `SITE_URL` 后构建可生成 canonical、绝对分享图地址和结构化数据。
