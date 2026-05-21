# ProjectDetail 页面

```tsx
// src/pages/ProjectDetail.tsx
```

## 职责

项目详情页，展示单个项目的完整信息和详情。

## 路由

```
/project/:id  →  ProjectDetail
```

## 参数

| 参数 | 来源 | 说明 |
|---|---|---|
| `id` | `useParams()` (react-router-dom) | 从 URL 获取项目 ID |
| `project` | 从 `data/projects` 查找 | 根据 ID 匹配项目数据 |

## 组件组合

```
ProjectDetail
├── ScrollReveal
│   └── ProjectCard (detailed=true)  ← 详情模式卡片
└── Footer
```

## 逻辑

1. 从 URL 获取 `id` 参数
2. 在 `projects` 数据中查找匹配项目
3. 找到 → 渲染 `ProjectCard` 详情模式
4. 未找到 → 渲染 `Empty` 组件 + 返回按钮
