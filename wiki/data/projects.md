# projects.ts — 项目数据

```ts
// src/data/projects.ts
```

## 类型定义

```ts
export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  link: string
}
```

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `id` | `string` | 是 | 唯一标识，用于路由匹配 |
| `title` | `string` | 是 | 项目名称 |
| `description` | `string` | 是 | 项目描述 |
| `image` | `string` | 是 | 展示图片路径/URL |
| `tags` | `string[]` | 是 | 技术标签列表 |
| `category` | `string` | 是 | 分类（用于筛选） |
| `link` | `string` | 是 | 项目链接/跳转路径 |

## 使用场景

- `Projects` 组件按 `category` 筛选
- `ProjectCard` 渲染每个项目卡片
- `ProjectDetail` 页根据 URL 中的 `id` 匹配项目
