import { Icons } from "@/components/icons";
import { HomeIcon, FolderIcon } from "lucide-react";

export const DATA = {
  name: "katon",
  username: "hellokaton",
  initials: "PN",
  url: "https://hellokaton.me",
  location: "China",
  locationLink: "https://www.google.com/maps/place/china",
  description: "全栈开发者 × 技术分享者，探索独立开发。",
  summary:
    ">\n\n" +
    "💻 专注于构建实用的工具和数字化解决方案\n" +
    "\n" +
    "**技术积累**  \n" +
    "- 开发多个开源项目，GitHub 累计获得 10k+ stars\n" +
    "- 在 YouTube 分享技术教程，20k+开发者受益\n" +
    "- 在 Twitter/X 持续输出技术见解和经验分享\n" +
    "\n" +
    "**工程实践**  \n" +
    ">\n\n" +
    "- 主导设计金融交易系统架构，解决百万级流量挑战\n" +
    "- 主导财税 SaaS 平台研发，服务超10万商户的发票管理与税务合规\n" +
    "- 设计集成式开放平台，解决企业接口对接统一总线问题\n" +
    "\n" +
    "**近期项目**  \n" +
    ">\n\n" +
    "- 🚀 bioify.co —— 帮助社交媒体用户打造个性化简介\n" +
    "- 🎉 荧数 —— 帮助社交影响者创建关注里程碑动画\n" +
    "- 🧪 namesage —— 帮助非中文母语人士创建适宜的中文名\n" +
    "\n" +
    "乐观主义。坚持终身学习，相信科技让工作更高效、生活更美好。\n\n" +
    "🤝 欢迎交流：技术讨论 / 项目合作 / 经验分享",
  avatarUrl: "/hi.webp",
  skills: [
    "React",
    "Next.js",
    "Vue.js",
    "Typescript",
    "Node.js",
    "Java",
    "SpringBoot",
    "Python",
    "FastAPI",
    "Golang",
    "Gin",
    "Postgres",
    "Git",
    "Linux",
    "RestAPI",
    "AI API",
    "SEO",
  ],
  videos: [],
  navbar: [
    { href: "/", icon: HomeIcon, label: "首页" },
    { href: "/projects", icon: FolderIcon, label: "作品" },
  ],
  contact: {
    email: "hellokaton@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hellokaton",
        icon: Icons.github,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/hellokaton",
        icon: Icons.x,

        navbar: true,
      },
      Zhihu: {
        name: "知乎",
        url: "https://www.zhihu.com/people/hellokaton",
        icon: Icons.zhihu,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@hellokaton",
        icon: Icons.youtube,
        navbar: true,
      },
      buyMeACoffee: {
        name: "buyMeACoffee",
        url: "https://buymeacoffee.com/hellokaton",
        icon: Icons.buyMeACoffee,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hellokaton@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [],

  projects: [
    {
      title: "Bioify",
      href: "https://bioify.co",
      dates: "",
      active: true,
      description:
        "Bioify是一款AI驱动的个人简介生成工具，支持多平台、多语言、多风格的简介定制。一键生成Twitter、Instagram、Tiktok等平台的个性化简介，让你的社交档案脱颖而出。智能AI写作助手，让简介创作更轻松、更专业。",
      technologies: [
        "Next.js",
        "ShadcnUI",
        "Frame motion",
        "React Query",
        "@ai-sdk",
        "hono",
      ],
      links: [
        {
          type: "网站",
          href: "https://bioify.co",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "源码",
        //   href: "https://github.com/StarKnightt/ResumeBuilder",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],

      image: "",
      video: "https://static.hellokaton.me/video/bioify.mp4",
    },
    {
      title: "荧数",
      href: "https://yingshu.hellokaton.me",
      dates: "2025/02",
      active: true,
      description:
        "一个帮助社交媒体影响者创建关注者达成的里程碑动画，支持多种效果、自定义背景和用户信息。",
      technologies: ["Next.js", "OriginUI", "MagicUI", "canvas-"],
      links: [
        {
          type: "网址",
          href: "https://yingshu.hellokaton.me",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/yingshu_hero.png",
      video: "",
    },
    {
      title: "NameSage",
      href: "https://namesage.hellokaton.me",
      dates: "2025/01",
      active: true,
      description:
          "一个现代的 Web 应用，帮助非中文母语者创建有意义且文化适宜的中文名字，使用Next.js构建，采用新野蛮主义设计风格。",
      technologies: [
        "Next.js",
        "neobrutalism",
        "framer-motion",
        "react-hook-form",
        "@ai-sdk",
      ],
      links: [
        {
          type: "网站",
          href: "https://namesage.hellokaton.me",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "源码",
          href: "https://github.com/hellokaton/namesage",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://static.hellokaton.me/video/namesage.mp4",
    },
    {
      title: "Pixiv 插画下载器",
      href: "https://github.com/hellokaton/pixiv-helper",
      dates: "2024/12",
      active: true,
      description:
        "一个基于 WXT 和 shadcn/ui 构建的 Chrome 扩展，帮助您通过 Alist 下载并同步 Pixiv 插画到云存储。支持不同画质选项的下载，让您轻松管理喜爱的作品。",
      technologies: [
        "React.js",
        "font-awesome",
        "react-icons",
        "react-dom",
        "CSS3",
        "Vite",
        "Git",
      ],
      links: [
        {
          type: "网站",
          href: "https://github.com/hellokaton/pixiv-helper",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "源码",
          href: "https://github.com/hellokaton/pixiv-helper",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://static.hellokaton.me/video/pixiv_helper.mp4",
    },
    {
      title: "字符画生成器",
      href: "https://nes-ascii-app.vercel.app",
      dates: "2025/02",
      active: true,
      description:
        "ASCII 字符画生成器是一款现代化的网页应用，能够将文本转换为精美的 ASCII 艺术字符画。通过四种独特的风格和 AI 驱动的生成技术，为您创造出适合社交媒体、聊天消息或任何文本平台的视觉艺术作品。",
      technologies: ["Nuxt", "nes.css", "@ai-sdk"],
      links: [
        {
          type: "网站",
          href: "https://nes-ascii-app.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "源码",
          href: "https://github.com/hellokaton/nes-ascii-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://static.hellokaton.me/video/nes_app.mp4",
    },
    {
      title: "Text Polish - 浏览器文本润色扩展",
      href: "https://github.com/hellokaton/text-polish-chrome-extension",
      dates: "December 2024 - January 2025",
      active: true,
      description:
        "基于 WXT 和 shadcn/ui 构建的 Chrome 扩展，提供 AI 文本处理能力。选中网页文本即可通过浮动菜单进行翻译、解释或快速复制。",
      technologies: [
        "WXT",
        "shadcn/ui",
        "Lucide React",
        "React Hooks",
        "ofetch",
      ],
      links: [
        {
          type: "网站",
          href: "https://github.com/hellokaton/text-polish-chrome-extension",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "源码",
          href: "https://github.com/hellokaton/text-polish-chrome-extension",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/text_polish.jpg",
      video: "",
    },
    {
      title: "gorm 分页库",
      href: "https://github.com/hellokaton/text-polish-chrome-extension",
      dates: "2018",
      active: false,
      description: "为 Gin 和 gorm 框架做的分页集成。",
      technologies: ["golang", "gin", "gorm"],
      links: [
        {
          type: "源码",
          href: "https://github.com/hellokaton/gorm-paginator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/gorm_paginator.png",
      video: "",
    },
    {
      title: "30 seconds of java8",
      href: "https://github.com/hellokaton/30-seconds-of-java8",
      dates: "2017",
      active: false,
      description: "你可以在30秒或更短时间内收集有用的Java8代码片段。",
      technologies: ["Java8"],
      links: [
        {
          type: "源码",
          href: "https://github.com/hellokaton/30-seconds-of-java8",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/30_seconds_of_java8.png",
      video: "",
    },
    {
      title: "文本审核 API 服务",
      href: "try.hono.my/api/check?text=hi",
      dates: "2024",
      active: false,
      description:
        "基于 Hono 和 OpenAI 的文本审核 API 服务，使用了 千问大模型，能够高效、准确地对文本内容进行审核和分类。此服务支持识别色情、暴力、涉政等敏感内容，并可根据上下文进行语境判断，适合需要高精度文本审核的场景。",
      technologies: ["Hono", "OpenAI", "Cloudflare Workers"],
      links: [
        {
          type: "源码",
          href: "https://github.com/hellokaton/text-moderation-api",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/text_moderation.jpg",
      video: "",
    },
    {
      title: "SimplePaddleOCRApi",
      href: "https://github.com/hellokaton/ppocr-api",
      dates: "2023",
      active: false,
      description:
        "一个可 Docker(compose) 部署的, 基于 FastAPI 的简易版 Paddle OCR Web API.",
      technologies: ["Python", "FastAPI", "Paddle OCR", "Docker"],
      links: [
        {
          type: "源码",
          href: "https://github.com/hellokaton/ppocr-api",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/ppocr_api.png",
      video: "",
    },
    {
      title: "anima",
      href: "https://github.com/hellokaton/anima/wiki",
      dates: "2018",
      active: false,
      description:
        "Anima 允许您像使用 SQL 和 Stream 一样查询数据库。它采用简单的 DSL 语法，支持多种数据库，与 Java8 集成良好，支持多种关系映射，是一个数据库操作工具。",
      technologies: ["Java8", "PostgreSQL", "MySQL", "Docker"],
      links: [
        {
          type: "源码",
          href: "https://github.com/hellokaton/anima",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/anima.png",
      video: "",
    },
    {
      title: "oh-my-email",
      href: "https://github.com/hellokaton/oh-my-email",
      dates: "2017",
      active: false,
      description:
        "可能是最小的 Java 邮件发送库了，支持抄送、附件、模板等功能。",
      technologies: ["Java8", "Javax Mail"],
      links: [
        {
          type: "源码",
          href: "https://github.com/hellokaton/oh-my-email",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/oh_my_email.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
