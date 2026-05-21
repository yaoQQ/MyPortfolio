# SpaceMeteorBackground

```tsx
// src/components/SpaceMeteorBackground.tsx
```

## 职责

全屏流星粒子背景动画组件，替换了旧版 `ParticleBackground`。使用 Canvas API 实现粒子系统 + 流星效果。

## Props

| Prop | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `particleCount` | `number` | `80` | 粒子数量 |
| `meteorCount` | `number` | `3` | 同时出现的流星数 |
| `speed` | `number` | `1` | 动画速度倍率 |

## 技术实现

| 技术 | 用途 |
|---|---|
| **Canvas 2D API** | 渲染粒子、流星轨迹 |
| **requestAnimationFrame** | 动画循环（~60fps） |
| **粒子系统** | 位置、速度、透明度、大小随机 |
| **流星效果** | 尾部拖尾渐变 + 随机角度 |

## 特性

- **全屏自适应**：监听 `resize` 事件，自动调整 Canvas 尺寸
- **零依赖**：纯原生 Canvas，无第三方动画库
- **性能优化**：超出视口的粒子自动回收并重置到随机位置
- **暗色/亮色自适应**：根据当前主题切换粒子颜色

## 与 ParticleBackground 的区别

| 特性 | ParticleBackground (旧) | SpaceMeteorBackground (新) |
|---|---|---|
| 渲染方式 | DOM div | Canvas 2D |
| 性能 | 大量 DOM 节点 | 单个 Canvas，性能更优 |
| 视觉效果 | 静态粒子 | 动态流星拖尾 |
| 可配置性 | 低 | 高（3 个 Props） |
