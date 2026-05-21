# Skills

```tsx
// src/components/Skills.tsx
```

## 职责

技能展示区，从 `data/skills.ts` 读取技能数据，以标签或卡片形式可视化展示。

## Props

| Prop | 类型 | 默认值 | 说明 |
|---|---|---|---|
| 无 | — | — | 数据从 `data/skills` 直接 import |

## 数据源

```ts
// src/data/skills.ts
export interface Skill {
  name: string
  category: string
  level?: number
}

export const skills: Skill[] = [
  { name: 'Unity', category: 'Engine', level: 10 },
  { name: 'C#', category: 'Language', level: 10 },
  // ...
]
```

## 特性

- 按类别分组展示
- 支持等级进度条可视化
- 响应式网格布局
