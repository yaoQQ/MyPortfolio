# useTheme

```tsx
// src/hooks/useTheme.ts
```

## 职责

自定义 Hook，管理亮色/暗色主题切换。支持 localStorage 持久化和系统偏好检测。

## API

```ts
interface UseThemeReturn {
  theme: 'light' | 'dark'
  toggleTheme: () => void
  setTheme: (theme: 'light' | 'dark') => void
}
```

| 返回值 | 类型 | 说明 |
|---|---|---|
| `theme` | `'light' \| 'dark'` | 当前主题 |
| `toggleTheme` | `() => void` | 切换主题 |
| `setTheme` | `(theme) => void` | 强制设置主题 |

## 实现要点

```ts
function useTheme(): UseThemeReturn {
  // 1. 读取 localStorage 中的偏好
  // 2. 若无偏好，检测系统色系 (prefers-color-scheme)
  // 3. 切换时写入 localStorage + 更新 <html> class
  // 4. Tailwind dark mode 基于 class 策略
}
```

## 技术细节

| 技术 | 用途 |
|---|---|
| `localStorage` | 持久化用户主题偏好 |
| `matchMedia('prefers-color-scheme: dark')` | 检测系统暗色模式 |
| `document.documentElement.classList` | 操作 `<html class="dark">` |
| Tailwind `darkMode: 'class'` | 基于 class 的暗色模式 |

## 使用示例

```tsx
const { theme, toggleTheme } = useTheme()

return (
  <button onClick={toggleTheme}>
    {theme === 'dark' ? <Sun /> : <Moon />}
  </button>
)
```
