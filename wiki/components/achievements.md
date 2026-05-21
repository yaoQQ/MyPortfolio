# Achievements

```tsx
// src/components/Achievements.tsx
```

## 职责

成就/荣誉展示区，以时间线（Timeline）形式展示职业生涯中的里程碑。

## Props

| Prop | 类型 | 默认值 | 说明 |
|---|---|---|---|
| 无 | — | — | 数据从 `data/achievements` 直接 import |

## 数据源

```ts
// src/data/achievements.ts
export interface Achievement {
  year: string
  title: string
  description: string
  icon?: string
}
```

## 特性

- 垂直时间线布局
- 每个节点包含年份、标题、描述
- 左右交替排列（桌面端），单侧排列（移动端）
- 节点可用图标/颜色区分类型

## 代码要点

时间线通过 Tailwind 伪元素 + 定位实现：

```
left line:    border-l-2 + before:absolute (dot)
alternate:    md:even:flex-row-reverse
```
