export const SUPPORTED_LOCALES = ["en", "zh"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

const translations = {
  en: {
    heroGreeting: "👋 Hey, I'm {name}",
    aboutHeading: "About",
    socialHeading: "Social Media 💬",
    skillsHeading: "Tags",
    contributionsHeading: "GitHub Contributions",
    projectsHeading: "Featured Projects",
    projectsSeeAll: "See all projects →",
    contactHeading: "Contact",
    contactSubheading: "Have an idea? Send me an email.",
    sitemapLabel: "Sitemap",
    themeToggleLocked: "Dark mode locked",
    themeLabel: "Theme",
    cliModeLabel: "CLI Mode",
    modeToggleAria: "Toggle theme",
    modeToggleAriaDisabled: "Theme toggle disabled",
    languageToggleTooltip: "Switch language",
    languageToggleButton: "EN / 中文",
    languageToggleAria: "Toggle site language",
    languagePromptTitle: "Chinese language detected",
    languagePromptMessage:
      "We detected that your device language is set to Chinese. Would you like to view the site in Chinese?",
    languagePromptConfirm: "Switch to Chinese",
    languagePromptDismiss: "Keep English",
    liveAgeText: "So far I've been on Earth for {years} years",
    projectsPageHeading: "Projects",
    cliWelcomeLineOne: "Welcome to my portfolio CLI! 👋",
    cliWelcomeLineTwo: 'Type "help" or "?" to see the available commands.',
    cliHelp:
      "Available commands:\n\n" +
      "help       - Show this help\n" +
      "about      - Learn more about me\n" +
      "skills     - List my skills\n" +
      "projects   - List my projects\n" +
      "contact    - Display contact info\n" +
      "social     - Show social links\n" +
      "version    - Display CLI version\n" +
      "clear      - Clear the terminal\n" +
      "gui        - Go back to the GUI\n\n" +
      "Tip: Use Tab for autocomplete and ↑↓ to browse history.",
    cliSkillsHeading: "Tags",
    cliProjectsTechLabel: "Stack",
    cliContactLabel: "Email",
    cliCommandNotFound: 'Command not found: {command}. Type "help" for assistance.',
    cliSwitchingGui: "Switching to the GUI...",
    cliThemeLockedMessage: "Use the dock to toggle the theme",
    forceDarkModeLabel: "Dark mode",
  },
  zh: {
    heroGreeting: "👋 嘿，我是 {name}",
    aboutHeading: "关于",
    socialHeading: "社交媒体 💬",
    skillsHeading: "标签",
    contributionsHeading: "GitHub 贡献",
    projectsHeading: "个人作品",
    projectsSeeAll: "全部作品 →",
    contactHeading: "联系方式",
    contactSubheading: "有想法？发邮件给我吧",
    sitemapLabel: "站点地图",
    themeToggleLocked: "深色模式已锁定",
    themeLabel: "主题",
    cliModeLabel: "CLI 模式",
    modeToggleAria: "切换主题",
    modeToggleAriaDisabled: "主题切换已禁用",
    languageToggleTooltip: "切换站点语言",
    languageToggleButton: "中 / EN",
    languageToggleAria: "切换站点语言",
    languagePromptTitle: "检测到中文环境",
    languagePromptMessage: "检测到你的系统语言为中文，是否切换为中文显示？",
    languagePromptConfirm: "切换为中文",
    languagePromptDismiss: "继续使用英文",
    liveAgeText: "截至目前，我来到地球已经 {years} 年",
    projectsPageHeading: "个人作品",
    cliWelcomeLineOne: "欢迎来到我的作品集 CLI！👋",
    cliWelcomeLineTwo: '输入 "help" 或 "?" 查看可用命令。',
    cliHelp:
      "可用命令：\n\n" +
      "help       - 显示帮助信息\n" +
      "about      - 查看关于我的介绍\n" +
      "skills     - 列出技能\n" +
      "projects   - 列出项目\n" +
      "contact    - 显示联系方式\n" +
      "social     - 显示社交媒体链接\n" +
      "version    - 查看 CLI 版本\n" +
      "clear      - 清空终端\n" +
      "gui        - 返回 GUI\n\n" +
      "提示：使用 Tab 自动补全，使用 ↑↓ 浏览历史。",
    cliSkillsHeading: "标签",
    cliProjectsTechLabel: "技术栈",
    cliContactLabel: "邮箱",
    cliCommandNotFound: '命令未找到：{command}。输入 "help" 查看可用命令。',
    cliSwitchingGui: "正在切换到 GUI...",
    cliThemeLockedMessage: "请使用底部导航栏切换主题",
    forceDarkModeLabel: "深色模式",
  },
} as const;

export type TranslationKey = keyof (typeof translations)[typeof DEFAULT_LOCALE];

export function translate(
  locale: Locale,
  key: TranslationKey,
  params?: Record<string, string | number>
): string {
  const messages = translations[locale] ?? translations[DEFAULT_LOCALE];
  const template = messages[key] ?? translations[DEFAULT_LOCALE][key];
  if (!params) {
    return template;
  }

  return Object.keys(params).reduce((acc, paramKey) => {
    const value = String(params[paramKey]);
    return acc.replaceAll(`{${paramKey}}`, value);
  }, template);
}
