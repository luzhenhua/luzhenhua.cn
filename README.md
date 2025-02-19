# 个人作品集网站

基于 Next.js 15 构建的现代化响应式个人作品集网站，使用 TypeScript、Tailwind CSS 和 Framer Motion。

## 🌟 功能特性

- **响应式设计**: 完美适配所有设备
- **深色/浅色模式**: 根据系统偏好自动切换主题
- **动画效果**: 流畅的页面过渡和微交互
- **GitHub 集成**: 实时 GitHub 贡献日历
- **SEO 优化**: 支持 Meta 标签和 OpenGraph
- **性能优先**: 优化核心网页指标

## 🚀 技术栈

- **框架**: [Next.js 15](https://nextjs.org/)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **UI 组件**: [shadcn/ui](https://ui.shadcn.com/)
- **动画**: [Framer Motion](https://www.framer.com/motion/)
- **内容管理**: [MDX](https://mdxjs.com/)
- **部署**: [Vercel](https://vercel.com)

## 📦 安装指南

1. 克隆仓库：

```bash
git clone https://github.com/hellokaton/hellokaton.me
```

2. 安装依赖：

```bash
pnpm install
```

3. 启动开发服务器：

```bash
pnpm run dev
```

4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 🔧 配置说明

1. 在 `src/data/resume.tsx` 中更新个人信息
2. 更新 `src/data/products.ts` 来添加推荐产品
3. 在 `tailwind.config.ts` 中自定义主题颜色

## 📁 项目结构

```
├── public/           # 静态资源
├── src/
│   ├── app/         # Next.js 应用路由页面
│   ├── components/  # React 组件
│   ├── data/        # 数据文件和类型定义
│   └── lib/         # 工具函数
```

## 🎨 自定义主题

在 `tailwind.config.ts` 中自定义主题：

```ts
theme: {
  extend: {
    colors: {
      primary: {...},
      secondary: {...},
    }
  }
}
```

## 🛠️ 开发命令

```bash
# 启动开发服务器
pnpm run dev

# 生产环境构建
pnpm run build

# 启动生产服务器
pnpm start

# 代码检查
pnpm run lint
```

## 📱 渐进式网页应用

本网站支持 PWA 功能：

- Service Worker 支持
- 离线访问功能
- 安装提示
- 应用清单

## 📄 开源协议

[MIT](LICENSE)

## 🙏 致谢

- [StarKnightt/prasendev](https://github.com/StarKnightt/prasendev) 提供的项目模板
