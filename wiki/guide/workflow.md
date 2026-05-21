# 开发流程

## 新增页面

1. 在 `src/pages/` 下创建页面组件
2. 在 `src/App.tsx` 中添加路由
3. 在 `wiki/pages/` 下添加对应的 Wiki 文档

## 新增组件

1. 在 `src/components/` 下创建组件
2. 遵循现有命名规范：`PascalCase.tsx`
3. 如果组件需要动画，使用 `ScrollReveal` 包裹
4. 在 `wiki/components/` 下添加文档
5. 在 `wiki/.vitepress/config.ts` 中的 sidebar 添加导航

## 新增数据

1. 在 `src/data/` 下创建 TypeScript 文件
2. 导出类型定义 + 数据数组
3. 从页面/组件中引入并使用
4. 在 `wiki/data/` 下添加文档

## 部署

```bash
# 构建项目
npm run build
# 构建 Wiki
npm run wiki:build
# 提交到 main 分支
git add .
git commit -m "update"
git push
```

GitHub Pages 配置为从 `main` 分支的 `/docs` 目录部署。构建输出目标为 `docs/` 目录。
