# MyWebSkill - 个人作品集网站工作流文档

## 一、项目概述

| 项目属性 | 内容 |
|---------|------|
| 项目名称 | MyPortfolio - 个人作品集网站 |
| 项目类型 | 前端单页应用（SPA） |
| 访问地址 | https://yaoqq.github.io/MyPortfolio/ |
| GitHub仓库 | https://github.com/yaoQQ/MyPortfolio |
| 部署方式 | GitHub Pages（从 `main` 分支 `/docs` 目录服务） |
| 作者 | 姚强（yaoQQ） |

---

## 二、工作流程图

```
┌─────────────────────────────────────────────────────────────────┐
│                     MyPortfolio 完整工作流                        │
└─────────────────────────────────────────────────────────────────┘

[阶段1: 项目初始化]
    │
    ├── 1.1 创建项目目录
    │       └── mkdir 作品集网站1 && cd 作品集网站1
    │
    ├── 1.2 初始化 Vite + React + TypeScript 项目
    │       └── npm create vite@latest . -- --template react-ts
    │
    ├── 1.3 安装核心依赖
    │       ├── npm install react-router-dom@7
    │       ├── npm install lucide-react clsx tailwind-merge zustand
    │       └── npm install -D tailwindcss@3 postcss autoprefixer
    │           npx tailwindcss init -p
    │
    └── 1.4 配置项目基础文件
            ├── vite.config.ts    → base:'./', outDir:'docs', alias:'@/'
            ├── tsconfig.json     → paths: '@/*' → './src/*'
            ├── tailwind.config.js → 自定义颜色/字体/动画
            ├── postcss.config.js → tailwindcss + autoprefixer
            ├── .gitignore        → 排除 node_modules/dist/等
            └── index.html        → 字体预加载、favicon相对路径

            ▼

[阶段2: 源代码开发]
    │
    ├── 2.1 数据层（src/data/）
    │       ├── projects.ts    → 9个项目数据（标题/描述/技术栈/图片）
    │       ├── skills.ts      → 技能分类数据
    │       └── achievements.ts → 成就与荣誉数据
    │
    ├── 2.2 组件层（src/components/）
    │       ├── Navbar.tsx           → 导航栏（响应式+移动端菜单）
    │       ├── Hero.tsx             → 首屏英雄区（粒子背景+CTA）
    │       ├── ParticleBackground.tsx → Canvas粒子动画
    │       ├── Skills.tsx           → 核心技能概览（标签式展示）
    │       ├── Projects.tsx         → 项目案例列表
    │       ├── ProjectCard.tsx      → 项目卡片（悬浮发光效果）
    │       ├── About.tsx            → 个人简介
    │       ├── Achievements.tsx     → 技术贡献与荣誉
    │       ├── ScrollReveal.tsx     → 滚动渐入动画封装
    │       ├── Footer.tsx           → 页脚（GitHub链接）
    │       └── Empty.tsx            → 空状态组件
    │
    ├── 2.3 页面层（src/pages/）
    │       ├── Home.tsx             → 首页（组合所有组件）
    │       └── ProjectDetail.tsx    → 项目详情（图片灯箱+加载动画）
    │
    ├── 2.4 工具层（src/lib/ + src/hooks/）
    │       ├── utils.ts             → cn() 样式合并工具
    │       └── useTheme.ts          → 主题Hook
    │
    ├── 2.5 路由配置（src/App.tsx）
    │       └── HashRouter → "/" → Home
    │                    → "/project/:id" → ProjectDetail
    │
    └── 2.6 入口文件
            ├── src/main.tsx   → React根渲染
            ├── src/index.css  → Tailwind指令+全局样式
            └── src/App.tsx    → 路由定义

            ▼

[阶段3: 静态资源处理]
    │
    ├── 3.1 图片资源（public/images/）
    │       ├── image1~5.jpg       → 我要当老祖
    │       ├── image6~7           → 优优电竞
    │       ├── image8~12          → 笑傲仙途
    │       ├── image13~15         → 萌想三国
    │       ├── image16~20         → 斗战封神
    │       ├── image21~24         → 银河掠夺者
    │       ├── image25~33         → 独立游戏
    │       └── image_40~42        → 英雄王座
    │
    ├── 3.2 图标资源
    │       └── public/favicon.svg → 渐变YQ图标
    │
    └── 3.3 图片路径规范
            ├── 开发引用: "./images/xxx.jpg"（相对路径）
            └── ⚠️ 禁止使用 "/images/xxx.jpg"（绝对路径在GitHub Pages子路径下失效）

            ▼

[阶段4: 构建与部署]
    │
    ├── 4.1 本地构建验证
    │       └── npm run dev → http://localhost:5173
    │
    ├── 4.2 生产构建
    │       └── npx vite build → 输出到 docs/ 目录
    │           ├── docs/index.html
    │           ├── docs/assets/index-xxx.js   (JS包)
    │           ├── docs/assets/index-xxx.css  (CSS包)
    │           ├── docs/images/               (36张图片)
    │           ├── docs/favicon.svg
    │           └── docs/.nojekyll             (防止Jekyll处理)
    │
    ├── 4.3 GitHub仓库操作
    │       ├── git init
    │       ├── git add -A
    │       ├── git commit -m "描述信息"
    │       └── git push origin main
    │
    └── 4.4 GitHub Pages配置
            ├── 仓库Settings → Pages
            ├── Source: Deploy from a branch
            ├── Branch: main
            ├── Folder: /docs
            └── 等待1~3分钟自动构建部署

            ▼

[阶段5: 验证与维护]
    │
    ├── 5.1 验证网站可访问
    │       └── 浏览器打开 https://yaoqq.github.io/MyPortfolio/
    │           ⚠️ 不可使用iframe预览（GitHub Pages发送X-Frame-Options:DENY）
    │
    ├── 5.2 更新内容流程
    │       ├── 修改 src/ 下的源代码
    │       ├── npx vite build（重新构建）
    │       ├── git add -A && git commit && git push
    │       └── 等待GitHub Pages自动重新部署
    │
    └── 5.3 常见问题排查
            ├── 图片加载失败 → 检查路径是否为 "./images/" 而非 "/images/"
            ├── 页面空白     → 检查是否使用 HashRouter 而非 BrowserRouter
            ├── assets缺失   → 检查 .gitignore 是否排除了 docs/assets/
            └── ERR_ABORTED  → iframe中无法预览GitHub Pages（正常现象）
```

---

## 三、技术栈详解

### 3.1 核心框架

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 18.3.1 | UI框架，组件化开发 |
| TypeScript | 5.8.3 | 类型安全，提升代码质量 |
| Vite | 6.3.5 | 构建工具，快速HMR与打包 |
| Tailwind CSS | 3.4.17 | 原子化CSS框架，快速样式开发 |

### 3.2 路由与状态

| 技术 | 版本 | 用途 |
|------|------|------|
| react-router-dom | 7.3.0 | 客户端路由（使用HashRouter兼容GitHub Pages） |
| zustand | 5.0.3 | 轻量级状态管理 |

### 3.3 UI工具库

| 技术 | 版本 | 用途 |
|------|------|------|
| lucide-react | 0.511.0 | 图标库（Mail/Phone/MapPin/Github等） |
| clsx | 2.1.1 | 条件类名拼接 |
| tailwind-merge | 3.0.2 | Tailwind类名智能合并（解决冲突） |

### 3.4 开发工具

| 技术 | 版本 | 用途 |
|------|------|------|
| ESLint | 9.25.0 | 代码质量检查 |
| PostCSS | 8.5.3 | CSS后处理（配合Tailwind） |
| Autoprefixer | 10.4.21 | CSS自动添加浏览器前缀 |

---

## 四、Skill组件清单

### 4.1 页面组件

| 组件 | 文件路径 | 功能描述 | 调用条件 | 关键参数 |
|------|---------|---------|---------|---------|
| Home | src/pages/Home.tsx | 首页，组合所有Section组件 | 路由 path="/" | 无 |
| ProjectDetail | src/pages/ProjectDetail.tsx | 项目详情页，含图片灯箱 | 路由 path="/project/:id" | URL参数: id |

### 4.2 布局组件

| 组件 | 文件路径 | 功能描述 | 调用条件 | 关键参数 |
|------|---------|---------|---------|---------|
| Navbar | src/components/Navbar.tsx | 固定顶部导航栏，响应式移动端菜单 | 始终显示 | 无 |
| Footer | src/components/Footer.tsx | 页脚，含GitHub链接 | 始终显示 | 无 |
| ScrollReveal | src/components/ScrollReveal.tsx | IntersectionObserver滚动渐入动画 | 包裹需要动画的元素 | children, className |

### 4.3 功能组件

| 组件 | 文件路径 | 功能描述 | 调用条件 | 关键参数 |
|------|---------|---------|---------|---------|
| Hero | src/components/Hero.tsx | 首屏英雄区，Canvas粒子背景+CTA按钮 | Home页面 | 无 |
| ParticleBackground | src/components/ParticleBackground.tsx | Canvas粒子连线动画背景 | Hero组件内 | 无 |
| Skills | src/components/Skills.tsx | 核心技能概览，标签式展示（无进度条） | Home页面#skills | 无 |
| Projects | src/components/Projects.tsx | 项目案例网格列表，点击跳转详情 | Home页面#projects | 无 |
| ProjectCard | src/components/ProjectCard.tsx | 单个项目卡片，悬浮发光效果 | Projects组件内 | project: Project |
| About | src/components/About.tsx | 个人简介区域 | Home页面 | 无 |
| Achievements | src/components/Achievements.tsx | 技术贡献与荣誉展示 | Home页面 | 无 |
| Empty | src/components/Empty.tsx | 空状态占位组件 | 无数据时 | message: string |

### 4.4 数据模块

| 模块 | 文件路径 | 功能描述 | 数据结构 |
|------|---------|---------|---------|
| projects | src/data/projects.ts | 9个项目的完整数据 | Project[] (id/title/subtitle/category/status/description/techStack/highlights/images/coverImage) |
| skills | src/data/skills.ts | 技能分类数据 | SkillCategory[] |
| achievements | src/data/achievements.ts | 成就与荣誉数据 | Achievement[] |

### 4.5 工具模块

| 模块 | 文件路径 | 功能描述 | 导出接口 |
|------|---------|---------|---------|
| utils | src/lib/utils.ts | cn()样式合并工具（clsx+tailwind-merge） | cn(...inputs) |
| useTheme | src/hooks/useTheme.ts | 主题状态管理Hook | useTheme() |

---

## 五、关键配置说明

### 5.1 Vite配置（vite.config.ts）

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  base: './',          // ⚠️ 关键：相对路径，GitHub Pages子路径必需
  build: {
    outDir: 'docs',    // 输出到docs/，GitHub Pages从此目录服务
    emptyOutDir: true, // 每次构建清空输出目录
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),  // @/ 路径别名
    },
  },
})
```

**关键决策说明：**
- `base: './'`：必须使用相对路径。GitHub Pages部署在 `/MyPortfolio/` 子路径下，绝对路径 `/` 会导致资源加载失败
- `outDir: 'docs'`：GitHub Pages配置为从 `/docs` 目录服务，构建产物直接输出到该目录
- 使用 `fileURLToPath` 而非 `path.resolve`：解决中文路径下的编码问题

### 5.2 路由配置（src/App.tsx）

```typescript
import { HashRouter as Router, Routes, Route } from "react-router-dom";
```

**关键决策说明：**
- 必须使用 `HashRouter` 而非 `BrowserRouter`
- `BrowserRouter` 依赖HTML5 History API，需要服务器端配置支持
- GitHub Pages是纯静态文件服务器，不支持URL重写
- `HashRouter` 使用URL hash（`#/`）路由，无需服务器端支持
- 访问地址格式：`https://yaoqq.github.io/MyPortfolio/#/project/wo-yao-dang-lao-zu`

### 5.3 图片路径规范

```typescript
// ✅ 正确：相对路径
images: ["./images/image1.jpg"]
coverImage: "./images/image1.jpg"

// ❌ 错误：绝对路径（在GitHub Pages子路径下会解析到错误位置）
images: ["/images/image1.jpg"]
```

### 5.4 .gitignore 关键规则

```
node_modules     # 依赖目录
dist             # 开发构建输出
.trae            # IDE配置
*.py             # 部署脚本
.vite            # Vite缓存
```

**⚠️ 重要：`docs/` 和 `docs/assets/` 不能出现在 .gitignore 中！** 否则构建产物不会被推送到GitHub，导致网站无法加载。

### 5.5 .nojekyll 文件

在 `docs/` 目录下放置空的 `.nojekyll` 文件，防止GitHub Pages使用Jekyll处理站点。这确保以下划线开头的文件和目录能正常服务。

---

## 六、完整执行步骤

### 步骤1：环境准备

```bash
# 确认Node.js版本（需要18+）
node -v

# 确认npm版本
npm -v
```

### 步骤2：项目初始化

```bash
# 创建项目
npm create vite@latest MyPortfolio -- --template react-ts
cd MyPortfolio

# 安装核心依赖
npm install react-router-dom@7 lucide-react clsx tailwind-merge zustand

# 安装开发依赖
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

### 步骤3：配置项目

按第五节的配置说明，依次配置：
1. `vite.config.ts` - 构建配置
2. `tsconfig.json` - TypeScript配置（路径别名）
3. `tailwind.config.js` - Tailwind自定义主题
4. `.gitignore` - Git忽略规则
5. `index.html` - HTML入口

### 步骤4：开发源代码

按第二节的组件结构，依次开发：
1. 数据层 → `src/data/` 下的数据文件
2. 工具层 → `src/lib/utils.ts`, `src/hooks/useTheme.ts`
3. 组件层 → `src/components/` 下的UI组件
4. 页面层 → `src/pages/` 下的页面组件
5. 路由层 → `src/App.tsx` 路由配置
6. 入口层 → `src/main.tsx`, `src/index.css`

### 步骤5：添加静态资源

1. 将项目图片放入 `public/images/` 目录
2. 确保图片文件名与 `projects.ts` 中的路径一致
3. 放置 `public/favicon.svg`

### 步骤6：本地验证

```bash
# 启动开发服务器
npm run dev

# 浏览器打开 http://localhost:5173
# 验证所有页面、路由、图片是否正常
```

### 步骤7：生产构建

```bash
# 构建（输出到docs/目录）
npx vite build

# 添加.nojekyll文件
echo. > docs\.nojekyll    # Windows
# 或 touch docs/.nojekyll # Linux/Mac

# 验证构建产物
# docs/index.html        - 必须存在
# docs/assets/index-xxx.js - 必须存在（JS包）
# docs/assets/index-xxx.css - 必须存在（CSS包）
# docs/images/           - 必须存在（图片目录）
```

### 步骤8：GitHub部署

```bash
# 初始化Git仓库
git init
git config user.email "your-email@example.com"
git config user.name "your-username"

# 提交代码
git add -A
git commit -m "Portfolio website - initial deployment"

# 推送到GitHub
git remote add origin https://github.com/yaoQQ/MyPortfolio.git
git branch -M main
git push -u origin main
```

### 步骤9：配置GitHub Pages

1. 打开 https://github.com/yaoQQ/MyPortfolio/settings/pages
2. Source 选择 "Deploy from a branch"
3. Branch 选择 "main"
4. Folder 选择 "/docs"
5. 点击 Save
6. 等待1~3分钟自动构建

### 步骤10：验证部署

1. 在浏览器（非iframe）打开 https://yaoqq.github.io/MyPortfolio/
2. 验证首页加载正常
3. 验证项目案例图片显示
4. 验证项目详情页路由跳转
5. 验证GitHub链接跳转

---

## 七、维护更新指南

### 7.1 更新项目内容

```bash
# 1. 修改 src/data/ 下的数据文件
# 2. 如有新图片，放入 public/images/

# 3. 重新构建
npx vite build

# 4. 添加.nojekyll
echo. > docs\.nojekyll

# 5. 提交推送
git add -A
git commit -m "Update: 描述更新内容"
git push origin main
```

### 7.2 更新依赖

```bash
# 查看过时依赖
npm outdated

# 更新指定依赖
npm install package-name@latest

# 更新后重新构建验证
npx vite build
```

### 7.3 常见问题排查

| 问题 | 原因 | 解决方案 |
|------|------|---------|
| 网站空白 | BrowserRouter不兼容GitHub Pages | 改用HashRouter |
| 图片加载失败 | 绝对路径 `/images/` 在子路径下失效 | 改为 `./images/` |
| JS/CSS 404 | .gitignore排除了docs/assets/ | 修改.gitignore，确保docs/不被忽略 |
| ERR_ABORTED | GitHub Pages发送X-Frame-Options:DENY | 使用浏览器直接访问，不用iframe预览 |
| 构建失败-路径编码 | 中文路径下path.resolve编码错误 | 使用fileURLToPath+URL替代 |
| favicon不显示 | href="/favicon.svg"绝对路径 | 改为href="./favicon.svg" |

---

## 八、项目目录结构

```
MyPortfolio/
├── docs/                          # GitHub Pages服务目录（构建产物）
│   ├── assets/
│   │   ├── index-xxx.js           # JS打包文件
│   │   └── index-xxx.css          # CSS打包文件
│   ├── images/                    # 项目图片（36张）
│   ├── .nojekyll                  # 防止Jekyll处理
│   ├── favicon.svg                # 网站图标
│   └── index.html                 # 入口HTML
├── public/                        # 静态资源源文件
│   ├── images/                    # 项目图片（构建时复制到docs/）
│   └── favicon.svg                # 网站图标
├── src/                           # 源代码
│   ├── assets/                    # React资源
│   ├── components/                # UI组件（11个）
│   ├── data/                      # 数据模块（3个）
│   ├── hooks/                     # 自定义Hook
│   ├── lib/                       # 工具函数
│   ├── pages/                     # 页面组件（2个）
│   ├── App.tsx                    # 路由配置
│   ├── index.css                  # 全局样式
│   ├── main.tsx                   # 入口文件
│   └── vite-env.d.ts              # Vite类型声明
├── .gitignore                     # Git忽略规则
├── eslint.config.js               # ESLint配置
├── index.html                     # HTML入口模板
├── package.json                   # 项目依赖
├── postcss.config.js              # PostCSS配置
├── tailwind.config.js             # Tailwind配置
├── tsconfig.json                  # TypeScript配置
└── vite.config.ts                 # Vite构建配置
```
