"use client";

import React from "react";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { DATA } from "@/data/resume";

export function GithubContributions() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const username = React.useMemo(() => {
    try {
      const url = DATA.contact.social.GitHub.url;
      const match = url.match(/github\.com\/(.+?)(?:$|\/)/i);
      return match?.[1] || "luzhenhua";
    } catch {
      return "luzhenhua";
    }
  }, []);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // 滚动到最新的月份（最右边）
  React.useEffect(() => {
    if (mounted && containerRef.current) {
      // 使用 setTimeout 确保 DOM 已完全渲染
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.scrollLeft = containerRef.current.scrollWidth;
        }
      }, 100);
    }
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="w-full h-[160px] rounded-xl bg-muted animate-pulse" />
    );
  }

  return (
    <motion.div
      ref={containerRef}
      className="w-full overflow-x-auto overflow-y-hidden rounded-xl bg-card hover:shadow-lg transition-shadow duration-300 py-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-4 hover:scale-[1.02] transition-transform duration-300 min-w-fit">
        <GitHubCalendar
          username={username}
          colorScheme={resolvedTheme as "light" | "dark"}
          fontSize={12}
          blockSize={12}
          blockMargin={4}
        />
      </div>
    </motion.div>
  );
}
