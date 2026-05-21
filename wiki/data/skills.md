# skills.ts — 技能数据

```ts
// src/data/skills.ts
```

## 类型定义

```ts
export interface Skill {
  name: string
  category: string
  level?: number
}
```

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `name` | `string` | 是 | 技能名称 |
| `category` | `string` | 是 | 分类（如 Engine, Language, Tool） |
| `level` | `number` | 否 | 熟练度 1-10 |

## 数据示例

```ts
export const skills: Skill[] = [
  { name: 'Unity', category: 'Engine', level: 10 },
  { name: 'C#', category: 'Language', level: 10 },
  { name: 'React', category: 'Web', level: 7 },
  // ...
]
```

## 使用场景

- `Skills` 组件按 `category` 分组展示
- `level` 字段用于进度条可视化
