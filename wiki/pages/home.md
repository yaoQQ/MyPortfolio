# Home 页面

```tsx
// src/pages/Home.tsx
```

## 职责

作品集首页，组合所有展示组件，构成完整的单页布局。

## 组件组合

```
Home
├── Hero                    ← 首屏英雄区
├── ScrollReveal
│   └── About               ← 关于我
├── ScrollReveal
│   └── Skills              ← 技能展示
├── ScrollReveal
│   └── Projects            ← 项目列表 + 筛选
├── ScrollReveal
│   └── Achievements        ← 成就时间线
└── Footer                  ← 页脚
```

## 路由

```
/  →  Home
```

## 细节

- 每个主要区块都包裹在 `ScrollReveal` 中，实现滚动入场动画
- 使用不同的 `direction` 和 `delay` 参数制造视觉层次感
- 不持有任何数据层引用，全部由子组件自行 import
