# Projects

```tsx
// src/components/Projects.tsx
```

## 职责

项目作品展示区，支持按类别筛选，以卡片网格形式展示所有项目。

## Props

| Prop | 类型 | 默认值 | 说明 |
|---|---|---|---|
| 无 | — | — | 数据从 `data/projects` 直接 import |

## 数据源

```ts
// src/data/projects.ts
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

## 内部状态

| 状态 | 类型 | 说明 |
|---|---|---|
| `activeCategory` | `string` | 当前选中的分类筛选，`'all'` 表示全部 |

## 特性

- 分类筛选按钮组
- 选择分类时卡片切换动画（由 `ScrollReveal` 实现）
- 空结果时显示 `Empty` 组件
- 点击卡片跳转到 `ProjectCard.link`
