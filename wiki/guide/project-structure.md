# 项目结构

```
WebPro/
├── docs/                    # GitHub Pages 构建输出
├── public/                  # 静态资源
├── src/
│   ├── components/          # UI 组件
│   │   ├── Hero.tsx         # 首屏英雄区
│   │   ├── Navbar.tsx       # 导航栏
│   │   ├── About.tsx        # 关于我
│   │   ├── Skills.tsx       # 技能展示
│   │   ├── Projects.tsx     # 项目列表
│   │   ├── ProjectCard.tsx  # 项目卡片
│   │   ├── Achievements.tsx # 成就展示
│   │   ├── Footer.tsx       # 页脚
│   │   ├── ScrollReveal.tsx # 滚动入场动画容器
│   │   ├── SpaceMeteorBackground.tsx  # 流星粒子背景
│   │   ├── ParticleBackground.tsx     # (已废弃) 旧粒子背景
│   │   └── Empty.tsx        # 空状态占位
│   ├── data/                # 数据层（声明式数据）
│   │   ├── skills.ts        # 技能数据
│   │   ├── projects.ts      # 项目数据
│   │   └── achievements.ts  # 成就数据
│   ├── hooks/               # 自定义 Hook
│   │   └── useTheme.ts      # 主题切换
│   ├── pages/               # 页面组件
│   │   ├── Home.tsx         # 首页
│   │   └── ProjectDetail.tsx # 项目详情页
│   ├── lib/
│   │   └── utils.ts         # 工具函数
│   ├── App.tsx              # 根组件 + 路由
│   ├── main.tsx             # 入口文件
│   └── index.css            # 全局样式 + Tailwind
├── wiki/                    # 本文档
├── index.html               # HTML 入口
├── vite.config.ts           # Vite 配置
├── tailwind.config.js       # Tailwind 配置
├── tsconfig.json            # TypeScript 配置
└── package.json             # 依赖管理
```

## 架构分层

```
┌─────────────────────────────┐
│        页面 (pages/)        │  ← 路由入口，组合组件
├─────────────────────────────┤
│       组件 (components/)     │  ← UI 展示，无直接数据依赖
├─────────────────────────────┤
│      数据层 (data/)          │  ← 声明式数据，纯 TypeScript
├─────────────────────────────┤
│     Hooks / Lib             │  ← 逻辑复用层
└─────────────────────────────┘
```
