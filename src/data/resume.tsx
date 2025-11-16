import { Icons } from "@/components/icons";
import { HomeIcon, FolderIcon } from "lucide-react";

export const DATA = {
  name: "卢振华",
  username: "卢振华 Zhenhua Lu",
  initials: "ZL",
  url: "https://luzhenhua.cn",
  location: "China",
  locationLink: "https://www.google.com/maps/place/china",
  description: "一个喜欢折腾的全栈开发者",
  summary:
    ">>\n\n" +
    "**我**  \n" +
    "一个喜欢折腾的全栈开发者，在学习的路上，也在创造属于自己的作品。\n\n" +
    ">>\n\n" +
    "**我做过的事**  \n" +
    "- 2021 年所运营的「大户爱云任务」，累计服务超 20k 用户的免费自动化助手\n" +
    "- 2022 年和朋友一起上线「不是 Ai」，注册用户近 85k，公众号粉丝近 33k\n" +
    "- NCE Flow 开源项目发布三周获得 1k+ Stars，被阮一峰《科技爱好者周刊》第 369 期收录\n" +
    "- 历史作品被 X、抖音、微博、哔哩哔哩上的多名技术博主转载推荐\n" +
    "\n" +
    "**我喜欢的领域**  \n" +
    ">\n\n" +
    "我喜欢写代码，也喜欢运动和音乐，我从 16 岁开始健身，已经成了习惯。弹琴、听周杰伦，会让我放松下来。我认为最伟大，也是我最喜欢的组织是 Google，其次是 Apple 和 OpenAi，它们让我相信，做好一件事，比说什么都重要。\n" +
    "\n" +
    "🤝 我相信多元与包容，能遇见志同道合的人，对我来说就是件开心的事！",
  avatarUrl: "https://q.qlogo.cn/headimg_dl?dst_uin=3235728982&spec=640&img_type=jpg",
  skills: [
    "Python",
    "Mysql",
    "Cursor",
    "Trae",
    "Claude Code",
    "Code X",
    "PHP",
    "HTML",
    "JS",
    "TypeScript",
    "Node.js",
    "Git",
    "Docker",
    "运维",
    "健身",
    "吉他",
    "钢琴",
    "尤克里里",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "首页" },
    { href: "/projects", icon: FolderIcon, label: "作品" },
  ],
  contact: {
    email: "luzhenhuadev@qq.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/luzhenhua",
        icon: Icons.github,
        navbar: true,
      },
      Bilibili: {
        name: "Bilibili",
        url: "https://space.bilibili.com/1189276682",
        icon: Icons.bilibili,
        navbar: true,
      },
      Douyin: {
        name: "抖音",
        url: "https://www.douyin.com/user/MS4wLjABAAAAe_UbKX_yOC03iIH10AmzlJJSnt_O0CecI1naUtR5qjNKNKd4Gqg8Hw1tyOfeHRLA?from_tab_name=main",
        icon: Icons.douyin,
        navbar: true,
      },
      Xiaohongshu: {
        name: "小红书",
        url: "https://www.xiaohongshu.com/user/profile/6554bb560000000002035357",
        icon: Icons.xiaohongshu,
        navbar: true,
      },
      NetEase: {
        name: "网易云音乐",
        url: "https://music.163.com/#/user/home?id=334469730",
        icon: Icons.netease,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:luzhenhuadev@qq.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  beian: {
    icp: "豫ICP备2023006326号",
    police: "豫公网安备41070202001451号",
  },

  projects: [
    {
      title: "NCE Flow",
      href: "https://nce.luzhenhua.cn",
      dates: "2025",
      active: true,
      description:
        "新概念英语在线点读，点句即读、连续播放，支持 EN / EN+CN / CN。",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Shell",
        "Dockerfile",
      ],
      links: [
        {
          type: "网站",
          href: "https://nce.luzhenhua.cn",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "源码",
          href: "https://github.com/luzhenhua/NCE-Flow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/nce.webp",
      video: "",
    },
    {
      title: "Lyrics Card",
      href: "https://card.luzhenhua.cn",
      dates: "2025",
      active: true,
      description:
        "制作精美的 Apple Music 风格歌词卡片。",
      technologies: ["JavaScript", "CSS", "PHP", "HTML"],
      links: [
        {
          type: "网站",
          href: "https://card.luzhenhua.cn",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "源码",
          href: "https://github.com/luzhenhua/LyricsCard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/card.webp",
      video: "",
    },
    {
      title: "Heart Notes",
      href: "https://notes.luzhenhua.cn",
      dates: "2025",
      active: true,
      description:
        "一个优雅的交互式便签墙。",
      technologies: ["JavaScript", "CSS", "HTML"],
      links: [
        {
          type: "网站",
          href: "https://notes.luzhenhua.cn",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "源码",
          href: "https://github.com/luzhenhua/Heart-Notes",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/notes.webp",
      video: "",
    },
    {
      title: "喜茶Diy杯贴",
      href: "https://diy.luzhenhua.cn",
      dates: "2025",
      active: true,
      description:
        "喜茶自定义 Diy 杯贴网页版工具。",
      technologies: [
        "TypeScript 91.1%",
        "JavaScript 6.9%",
        "CSS 2.0%",
      ],
      links: [
        {
          type: "网站",
          href: "https://diy.luzhenhua.cn",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "源码",
          href: "https://github.com/luzhenhua/heytea",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "原帖",
          href: "http://xhslink.com/o/4NUYhjXmUUv",
          icon: <Icons.xiaohongshu className="size-3" />,
        },
      ],
      image: "/images/diy.webp",
      video: "",
    },
  ],
} as const;
