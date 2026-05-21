# Navbar

```tsx
// src/components/Navbar.tsx
```

## 职责

固定顶部的导航栏，包含站点 Logo、导航链接和暗色/亮色主题切换按钮。

## Props

| Prop | 类型 | 默认值 | 说明 |
|---|---|---|---|
| 无 | — | — | 使用 `useTheme` Hook 读取/切换主题 |

## 依赖

| 依赖 | 用途 |
|---|---|
| `useTheme` | 获取当前主题状态 + toggle 方法 |
| `lucide-react` (Sun / Moon) | 主题图标 |

## 特性

- `position: fixed` 固定在页面顶部
- 滚动时添加背景模糊效果（`backdrop-blur`）
- 亮色/暗色主题图标切换
- 响应式：移动端折叠为汉堡菜单
