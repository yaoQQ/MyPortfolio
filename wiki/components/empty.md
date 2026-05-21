# Empty

```tsx
// src/components/Empty.tsx
```

## 职责

空状态占位组件，当列表/搜索结果为空时展示友好的提示信息。

## Props

| Prop | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `text` | `string` | `'暂无数据'` | 空状态提示文字 |
| `icon` | `ReactNode` | — | 可选的自定义图标 |

## 使用场景

- 项目筛选无匹配结果
- 数据加载完成但内容为空
- 通用占位状态

## 使用示例

```tsx
{filteredProjects.length === 0 && (
  <Empty text="该分类下暂无项目" />
)}
```
