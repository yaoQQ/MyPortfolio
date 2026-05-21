# 数据层概览

项目的数据层集中在 `src/data/` 目录，使用纯 TypeScript 声明式数据。

## 设计理念

> **数据与展示分离** — 所有展示数据（技能、项目、成就）放在独立的 `data/` 文件里，页面和组件只负责渲染，不负责数据定义。

## 文件列表

| 文件 | 导出类型 | 导出数据 | 用途 |
|---|---|---|---|
| `skills.ts` | `Skill[]` | `skills` | 技能列表 |
| `projects.ts` | `Project[]` | `projects` | 项目作品列表 |
| `achievements.ts` | `Achievement[]` | `achievements` | 成就里程碑 |

## 统一模式

每个数据文件遵循相同的结构：

```ts
// 1. 类型定义
export interface SomeItem {
  id: string
  name: string
  // ...
}

// 2. 数据数组
export const items: SomeItem[] = [
  { id: '1', name: '...' },
  { id: '2', name: '...' },
]
```

## 为什么不使用 CMS / JSON / API

- 作品集数据量小（< 50 条），不需要外部存储
- TypeScript 类型安全 + IDE 自动补全
- 修改数据即改代码，走同一套 Code Review + CI 流程
- 无运行时依赖，零加载延迟

## 扩展方式

新增一组数据：

1. 在 `src/data/` 下创建 `new-items.ts`
2. 定义 `interface` + `export const` 数组
3. 在需要使用的组件中 import
4. 在 Wiki 的 `wiki/data/` 下添加文档
