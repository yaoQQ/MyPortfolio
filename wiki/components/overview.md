# 组件概览

项目采用 **原子化 + 组合式** 组件设计。所有组件均为展示型（Presentational），不直接持有数据层引用。

## 组件一览

| 组件 | 职责 | 状态管理 | 路由参数 |
|---|---|---|---|
| Hero | 首屏英雄区 | 无 | 无 |
| Navbar | 顶部导航 | useTheme (外部) | 无 |
| About | 个人简介 | 无 | 无 |
| Skills | 技能标签云 | 无 | 无 |
| Projects | 项目网格 + 筛选 | useState (内部) | 无 |
| ProjectCard | 单项目卡片 | 无 | link prop |
| Achievements | 成就时间线 | 无 | 无 |
| Footer | 页脚 | 无 | 无 |
| ScrollReveal | 滚动入场动画容器 | IntersectionObserver | 无 |
| SpaceMeteorBackground | 流星粒子背景动画 | Canvas + requestAnimationFrame | 无 |
| Empty | 空状态占位 | 无 | text prop |

## 组件层级

```
App
├── Navbar
├── SpaceMeteorBackground        ← 全局背景
└── Routes
    ├── Home
    │   ├── Hero
    │   ├── ScrollReveal > About
    │   ├── ScrollReveal > Skills
    │   ├── ScrollReveal > Projects
    │   │   └── ProjectCard × N
    │   ├── ScrollReveal > Achievements
    │   └── Footer
    └── ProjectDetail
        ├── ScrollReveal > ProjectCard (detail mode)
        └── Footer
```

## 编码规范

- 使用 `clsx` + `tailwind-merge` 处理样式合并
- 动画统一走 `ScrollReveal` 容器，不直接在组件内写入场动画
- 所有组件文件使用 `.tsx` 后缀，`PascalCase` 命名
