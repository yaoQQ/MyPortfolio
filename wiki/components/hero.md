# Hero

```tsx
// src/components/Hero.tsx
```

## 职责

作品集首页的"英雄区"（首屏大图/大标题区域），展示开发者姓名、身份标签和 CTA 按钮。

## Props

| Prop | 类型 | 默认值 | 说明 |
|---|---|---|---|
| 无 | — | — | 纯展示组件，数据硬编码在组件内 |

## 特性

- 全屏高度（`min-h-screen`）
- 响应式文字大小
- CTA 按钮指向下方内容区

## 代码要点

```tsx
<section className="relative min-h-screen flex items-center justify-center">
  <div className="text-center">
    <h1>Yao Qiang</h1>
    <p>Unity Game Developer</p>
    <button>了解更多</button>
  </div>
</section>
```
