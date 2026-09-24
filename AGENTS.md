# AGENTS.md

本文件是 AI Agent 在本仓库中的协作入口。页面元数据规则以 `CONTENT_GUIDE.md` 为准。

## 项目定位

- 布吉岛电商指南，帮助个人卖家和小团队发现平台机会，通过选品、供货、获客与履约经营自己的电商生意。
- 使用 VitePress + Markdown，由 pnpm 管理。保留文档站架构。
- 视觉参考 `D:\develop\project\seo`，沿用简洁浅色布局和首页卡片结构；图标与插画使用电商主题。

## 开发与运行

- Node.js 20+、pnpm 10+。
- `pnpm docs:dev`：本地开发服务 `http://localhost:5182/`。
- `pnpm docs:build`：构建到 `docs/.vitepress/dist/`。
- `pnpm docs:preview -- --port 5182 --strictPort`：预览构建结果。
- 5182 是本项目端口。不要占用或停止 5173（`D:\develop\aiagentguide`）或 5181（SEO 指南）。
- 修改 VitePress 配置、SEO 逻辑或页面结构后运行 `pnpm docs:build`。

## 页面与 SEO

- 栏目入口由各目录下的 `index.md` 承载，保持简短概览；侧栏只列当前栏目和“概览”。
- 栏目路由：`/getting-started/`、`/marketplace/`、`/resale/`、`/group-buying/`、`/short-video/`、`/cross-border/`、`/cases/`、`/tools/`。
- 每页填写唯一 `title` 和 `description`；SEO head 标签集中在 `docs/.vitepress/seo.ts`。
- 正式域名为 `https://ecom.itkdm.com`，生产构建通过 `SITE_URL` 注入。
- 默认分享图位于 `docs/public/social/default-share.png`，不要求每篇文章单独准备图片。

## 资源与协作

- 页面内容放在 `docs/`，公开图片和图标放在 `docs/public/`。
- 页面改名时同步检查侧栏、站内链接和 canonical 路由。
- 不提交 `.env`、密钥、`node_modules/` 或构建输出。
- 未经用户在当前任务中明确要求，不要提交、推送或发布。用户最近明确表示后续不需要部署，除非再次明确要求。
