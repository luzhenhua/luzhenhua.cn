'use client';

import { useState, useEffect, useRef } from 'react';
import { DATA } from '@/data/resume';
import { motion } from 'motion/react';
import { JetBrains_Mono } from 'next/font/google';
import { useTheme } from 'next-themes';
import { Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
});

const ASCII_ART = `
███████╗██╗  ██╗███████╗███╗   ██╗██╗  ██╗██╗   ██╗ █████╗     ██╗     ██╗   ██╗
╚══███╔╝██║  ██║██╔════╝████╗  ██║██║  ██║██║   ██║██╔══██╗    ██║     ██║   ██║
  ███╔╝ ███████║█████╗  ██╔██╗ ██║███████║██║   ██║███████║    ██║     ██║   ██║
 ███╔╝  ██╔══██║██╔══╝  ██║╚██╗██║██╔══██║██║   ██║██╔══██║    ██║     ██║   ██║
███████╗██║  ██║███████╗██║ ╚████║██║  ██║╚██████╔╝██║  ██║    ███████╗╚██████╔╝
╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝    ╚══════╝ ╚═════╝
`;

const MOBILE_ASCII_ART = `
███████╗██╗  ██╗███████╗███╗   ██╗██╗  ██╗██╗   ██╗ █████╗     ██╗     ██╗   ██╗
╚══███╔╝██║  ██║██╔════╝████╗  ██║██║  ██║██║   ██║██╔══██╗    ██║     ██║   ██║
  ███╔╝ ███████║█████╗  ██╔██╗ ██║███████║██║   ██║███████║    ██║     ██║   ██║
 ███╔╝  ██╔══██║██╔══╝  ██║╚██╗██║██╔══██║██║   ██║██╔══██║    ██║     ██║   ██║
███████╗██║  ██║███████╗██║ ╚████║██║  ██║╚██████╔╝██║  ██║    ███████╗╚██████╔╝
╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝    ╚══════╝ ╚═════╝
`;

interface CliInterfaceProps {
  onGuiCommand: () => void;
}

const ALIASES = {
  ls: 'projects',
  h: 'help',
  v: 'version',
  g: 'gui',
  a: 'about',
  s: 'skills',
  e: 'exp',
  p: 'projects',
  c: 'contact',
  t: 'theme',
};

const COMMANDS = {
  help: '可用命令：\n\n' +
    'help       - 显示此帮助信息\n' +
    'about      - 显示关于我的信息\n' +
    'skills     - 列出我的技术技能\n' +
    'projects   - 列出我的项目\n' +
    'contact    - 显示联系方式\n' +
    'social     - 显示社交媒体链接\n' +
    'version    - 显示 CLI 版本\n' +
    'clear      - 清空终端\n' +
    'gui        - 切换到 GUI 模式\n\n' +
    '提示：使用 Tab 键自动补全命令，使用 ↑↓ 键浏览命令历史',
  about: () => `${DATA.name}\n${DATA.description}\n\n${DATA.summary}`,
  skills: () => `技能：\n${DATA.skills.join('、')}`,
  projects: () => DATA.projects.map(project =>
    `\n${project.title}\n${project.description}\n技术栈：${project.technologies.join('、')}\n`
  ).join('\n'),
  contact: () => `邮箱：${DATA.contact.email}`,
  social: () => Object.entries(DATA.contact.social)
    .map(([platform, data]) => `${platform}：${data.url}`)
    .join('\n'),
  version: () => 'luzhenhua.cn CLI v1.0.0',
  clear: 'CLEAR',
  gui: 'GUI',
};

type CommandType = keyof typeof COMMANDS;

function makeLinksClickable(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, i) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline cursor-pointer"
          onClick={(e) => e.stopPropagation()}
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

// Helper function to format command output
function formatCommandLine(line: string, currentTheme: string | undefined) {
  if (!line || !currentTheme) return line;
  if (line.startsWith('$')) {
    return (
      <>
        <span className={currentTheme === 'dark' ? 'text-fuchsia-500' : 'text-green-600 font-semibold'}>luzhenhua@dev:~</span>
        <span className={currentTheme === 'dark' ? 'text-green-400' : 'text-blue-600 font-semibold'}>$</span>
        {' '}{line.slice(1)}
      </>
    );
  }
  return makeLinksClickable(line);
}

export function CliInterface({ onGuiCommand }: CliInterfaceProps) {
  const [input, setInput] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [output, setOutput] = useState<string[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMounted, setIsMounted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    setIsMounted(true);
    // 手机端不显示艺术字
    setOutput([
      ...(isMobile ? [] : [ASCII_ART]),
      '',
      '欢迎来到我的作品集 CLI！👋',
      '输入 "help" 或 "?" 查看可用命令。',
      ''
    ]);

    return () => {
      window.removeEventListener('resize', checkMobile);
      setIsMounted(false);
    };
  }, [isMobile]);

  // Scroll to bottom when output changes
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [output]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const command = trimmedCmd.split(' ')[0];

    // Handle Chinese question mark separately
    let resolvedCmd = command;
    if (command === '？' || command === '?') {
      resolvedCmd = 'help';
    } else {
      resolvedCmd = ALIASES[command as keyof typeof ALIASES] || command;
    }
    
    if (resolvedCmd === 'clear') {
      setOutput([]);
      return;
    }

    if (resolvedCmd === 'gui') {
      setOutput(prev => [...prev, `$ ${cmd}`, '正在切换到 GUI 模式...', '']);
      setTimeout(onGuiCommand, 500);
      return;
    }

    if (resolvedCmd === 'theme' || resolvedCmd === 't') {
      setOutput(prev => [...prev, `$ ${cmd}`, '请使用底部导航栏切换主题', '']);
      return;
    }

    const result = COMMANDS[resolvedCmd as CommandType];

    if (!result) {
      setOutput(prev => [...prev, `$ ${cmd}`, `命令未找到：${cmd}。输入 "help" 查看可用命令。`, '']);
      return;
    }

    const response = typeof result === 'function' ? result() : result;
    setOutput(prev => [...prev, `$ ${cmd}`, response, '']);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setCommandHistory(prev => [input, ...prev]);
    setHistoryIndex(-1);
    handleCommand(input);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const availableCommands = [...Object.keys(COMMANDS), ...Object.keys(ALIASES)];
      const matches = availableCommands.filter(cmd => cmd.startsWith(input.toLowerCase()));
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Optional: Add some visual feedback
      const button = document.activeElement as HTMLButtonElement;
      if (button) {
        const originalText = button.innerHTML;
        button.innerHTML = 'Copied!';
        setTimeout(() => {
          button.innerHTML = originalText;
        }, 1000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (!isMounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed inset-0 bg-background ${jetbrainsMono.variable} font-mono overflow-hidden flex flex-col`}
    >
      {/* Terminal Content */}
      <div className="flex-1 overflow-y-auto" ref={outputRef}>
        <div className="max-w-3xl mx-auto p-4 md:px-8 space-y-4">
          {output.map((line, i) => {
            // Check if this line is part of ASCII art (Unicode block characters)
            const isAsciiArt = line.includes('█') || line.includes('╗') || line.includes('║') || line.includes('╚') || line.includes('═');

            return (
              <div
                key={i}
                className={cn(
                  "group relative whitespace-pre-wrap leading-relaxed selection:bg-blue-500/30",
                  isAsciiArt && "text-[0.45rem] md:text-[0.65rem] leading-tight"
                )}
              >
                <span className="text-foreground">
                  {line.startsWith('http') ? (
                    <a
                      href={line}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={theme === 'dark'
                        ? 'text-green-400 hover:text-green-300 [text-shadow:0_0_10px_theme(colors.green.400/40)] hover:[text-shadow:0_0_15px_theme(colors.green.400/60)] transition-all underline underline-offset-4'
                        : 'text-blue-600 hover:text-blue-700 transition-all underline underline-offset-4'
                      }
                    >
                      {line}
                    </a>
                  ) : (
                    formatCommandLine(line, theme)
                  )}
                </span>
                {line.trim() && (
                  <button
                    onClick={() => copyToClipboard(line)}
                    className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Copy to clipboard"
                  >
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
                )}
              </div>
            );
          })}
          <div ref={bottomRef} className="h-4" />

          {/* Terminal Input */}
          <form onSubmit={handleSubmit} className="flex items-center group sticky bottom-0 bg-background/80 backdrop-blur-sm py-2">
            <span className={theme === 'dark'
              ? 'text-fuchsia-500 [text-shadow:0_0_10px_theme(colors.fuchsia.500/40)] transition-all group-hover:[text-shadow:0_0_15px_theme(colors.fuchsia.500/60)]'
              : 'text-green-600 font-semibold'
            }>
              luzhenhua@dev:~
            </span>
            <span className={theme === 'dark' ? 'text-green-400' : 'text-blue-600 font-semibold'}>$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none ml-2 text-foreground caret-foreground selection:bg-blue-500/30"
              autoFocus
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
            />
          </form>
        </div>
      </div>
    </motion.div>
  );
} 