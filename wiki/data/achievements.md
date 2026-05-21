# achievements.ts — 成就数据

```ts
// src/data/achievements.ts
```

## 类型定义

```ts
export interface Achievement {
  year: string
  title: string
  description: string
}
```

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `year` | `string` | 是 | 年份（如 '2020', '2018-2020'） |
| `title` | `string` | 是 | 成就名称/职位 |
| `description` | `string` | 是 | 详细描述 |

## 使用场景

- `Achievements` 组件按年份排序渲染时间线
- 年份用于时间线节点的定位
