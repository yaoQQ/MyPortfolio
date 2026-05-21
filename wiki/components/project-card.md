# ProjectCard

```tsx
// src/components/ProjectCard.tsx
```

## 职责

单个项目的展示卡片，用于项目网格和详情页。

## Props

| Prop | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `project` | `Project` | 必填 | 项目数据对象 |
| `detailed` | `boolean` | `false` | 是否为详情模式 |

## 数据依赖

```ts
interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  link: string
}
```

## 特性

- **网格模式**：缩略图 + 标题 + 简短描述 + 标签
- **详情模式**（`detailed=true`）：大图 + 完整描述 + 技术亮点
- 悬停效果：图片放大 + 阴影变化
- 标签颜色按类别区分

## 使用示例

```tsx
// 网格模式
<ProjectCard project={project} />

// 详情模式
<ProjectCard project={project} detailed={true} />
```
