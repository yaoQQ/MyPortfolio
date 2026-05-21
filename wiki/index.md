---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "MyPortfolio"
  text: "Yao Qiang · 姚强"
  tagline: Unity 游戏开发者 · 10年+经验 | DOTS/ECS · 多人网络 · AR/XR
  actions:
    - theme: brand
      text: 📖 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 🧩 组件概览
      link: /components/overview
    - theme: alt
      text: GitHub
      link: https://github.com/yaoQQ/MyPortfolio

features:
  - title: 🎯 组件化架构
    details: React + TypeScript + Tailwind CSS 构建的组件化作品集，每个组件职责清晰、可复用、可独立维护。
  - title: 🌠 动态视觉系统
    details: SpaceMeteorBackground 粒子动画背景 + ScrollReveal 滚动入场动画，打造沉浸式浏览体验。
  - title: 📦 声明式数据层
    details: 所有展示数据（技能、项目、成就）集中在 data/ 目录，与展示逻辑彻底解耦，方便维护和扩展。
  - title: 🌗 主题切换
    details: 自定义 useTheme Hook 实现亮色/暗色主题切换，全站 Tailwind dark mode 无缝适配。
  - title: 🚀 全栈工作流
    details: Vite 构建 + GitHub Pages (/docs) 部署，开发到上线零配置成本。
  - title: 📚 本地 Wiki
    details: 本文档基于 VitePress 构建，与源码同仓库管理，实现"文档即代码"的 Google Code Wiki 实践。
---
