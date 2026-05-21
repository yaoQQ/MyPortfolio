# 快速开始

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 启动 Wiki（本文档）
npm run wiki:dev
```

## 构建上线

```bash
# 构建项目
npm run build

# 构建 Wiki
npm run wiki:build

# 预览生产版本
npm run preview
```

项目构建输出到 `docs/` 目录，配置为 GitHub Pages `docs` 文件夹部署。

## 技术栈

| 层 | 技术 |
|---|---|
| 框架 | React 18 + TypeScript |
| 构建 | Vite 6 |
| 样式 | Tailwind CSS 3 + clsx + tailwind-merge |
| 路由 | react-router-dom v7 |
| 状态 | Zustand 5 |
| 图标 | Lucide React |
| 文档 | VitePress |
