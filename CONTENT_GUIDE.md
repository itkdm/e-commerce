# 页面元数据规范

每个公开页面都要填写唯一的 `title` 和准确的 `description`。canonical、Open Graph、Twitter Card 和结构化数据由 VitePress 配置生成。

按需填写 `date`（发布日期明确时）、`author`、`ogImage`、`ogImageAlt`、`noindex: true`。默认分享图为 `docs/public/social/default-share.png`；更新时间默认由 Git 提交时间提供。

不使用 `keywords` 生成 `<meta name="keywords">`。搜索词应通过页面主题和正文自然覆盖。

正式域名为 `https://ecom.itkdm.com`。设置 `SITE_URL` 后构建可生成 canonical、绝对分享图地址和结构化数据。
