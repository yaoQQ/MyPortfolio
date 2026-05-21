# ScrollReveal

```tsx
// src/components/ScrollReveal.tsx
```

## 职责

通用的滚动入场动画容器组件。当元素进入视口时，触发入场动画。

## Props

| Prop | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `children` | `ReactNode` | 必填 | 需要动画的子元素 |
| `direction` | `'up' \| 'down' \| 'left' \| 'right'` | `'up'` | 动画方向 |
| `delay` | `number` | `0` | 延迟时间（ms） |
| `className` | `string` | `''` | 附加样式类 |

## 技术实现

- 使用 **IntersectionObserver API** 监听元素进入视口
- 进入视口后添加 CSS 过渡类，触发变换
- 支持四种方向动画：上下左右
- **只触发一次**（`threshold: 0.1`，不再退场）

## 使用示例

```tsx
<ScrollReveal direction="up" delay={200}>
  <About />
</ScrollReveal>

<ScrollReveal direction="left" delay={400}>
  <Skills />
</ScrollReveal>
```

## 性能

- 使用 `useRef` + `useEffect`，避免不必要的重渲染
- IntersectionObserver 不会触发重排（reflow），性能优于 scroll 事件监听
