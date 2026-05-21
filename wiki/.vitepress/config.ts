import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'MyPortfolio Wiki',
  description: 'Yao Qiang (姚强) — Unity 游戏开发者作品集 Wiki',
  lang: 'zh-CN',
  base: '/wiki/',
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'MyPortfolio',
    logo: false,
    nav: [
      { text: '首页', link: '/' },
      { text: '引导', link: '/guide/getting-started' },
      { text: '组件', link: '/components/overview' },
      { text: 'Hooks', link: '/hooks/useTheme' },
      { text: '数据层', link: '/data/overview' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '入门',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '项目结构', link: '/guide/project-structure' },
            { text: '开发流程', link: '/guide/workflow' },
          ],
        },
      ],
      '/components/': [
        {
          text: '组件总览',
          items: [
            { text: '组件概览', link: '/components/overview' },
            { text: 'Hero', link: '/components/hero' },
            { text: 'Navbar', link: '/components/navbar' },
            { text: 'About', link: '/components/about' },
            { text: 'Skills', link: '/components/skills' },
            { text: 'Projects', link: '/components/projects' },
            { text: 'ProjectCard', link: '/components/project-card' },
            { text: 'Achievements', link: '/components/achievements' },
            { text: 'Footer', link: '/components/footer' },
            { text: 'ScrollReveal', link: '/components/scroll-reveal' },
            { text: 'SpaceMeteorBackground', link: '/components/space-meteor-bg' },
            { text: 'Empty', link: '/components/empty' },
          ],
        },
      ],
      '/hooks/': [
        {
          text: 'Hooks',
          items: [
            { text: 'useTheme', link: '/hooks/useTheme' },
          ],
        },
      ],
      '/pages/': [
        {
          text: '页面',
          items: [
            { text: 'Home', link: '/pages/home' },
            { text: 'ProjectDetail', link: '/pages/project-detail' },
          ],
        },
      ],
      '/data/': [
        {
          text: '数据层',
          items: [
            { text: '数据层概览', link: '/data/overview' },
            { text: 'skills.ts', link: '/data/skills' },
            { text: 'projects.ts', link: '/data/projects' },
            { text: 'achievements.ts', link: '/data/achievements' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yaoQQ/MyPortfolio' },
    ],
    footer: {
      message: '基于 VitePress 构建的本地 Wiki 体系',
      copyright: 'Copyright © 2025 Yao Qiang',
    },
  },
})
