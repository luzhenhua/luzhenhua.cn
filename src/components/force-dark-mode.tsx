'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

interface ForceDarkModeProps {
  onReady?: () => void;
}

export function ForceDarkMode({ onReady }: ForceDarkModeProps) {
  const { theme, setTheme } = useTheme();
  const [showTransition, setShowTransition] = useState(false);
  const isInitialMount = useRef(true);

  useEffect(() => {
    // 首次挂载时，如果不是深色主题，显示切换效果
    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (theme && theme !== 'dark') {
        // 触发切换动画
        setShowTransition(true);

        // 在动画开始后切换主题
        setTimeout(() => {
          setTheme('dark');
        }, 300);

        // 动画持续1秒，然后通知父组件可以显示内容
        setTimeout(() => {
          setShowTransition(false);
          onReady?.();
        }, 1000);
      } else {
        // 已经是深色模式，确保设置为深色，立即通知准备就绪
        setTheme('dark');
        onReady?.();
      }
    }

    // 强制保持深色模式，监听主题变化
    const interval = setInterval(() => {
      if (theme !== 'dark') {
        setTheme('dark');
      }
    }, 100);

    return () => {
      clearInterval(interval);
      // 退出时保持深色模式，不恢复之前的主题
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  // 简洁优雅的切换效果
  return (
    <>
      {showTransition && (
        <div
          className="fixed inset-0 z-[9999] pointer-events-none"
          style={{
            animation: 'fadeInOut 1s ease-in-out forwards',
          }}
        >
          {/* Glass morphism 背景 */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

          {/* 简洁的提示 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/10 dark:bg-black/20 backdrop-blur-xl backdrop-saturate-150 border border-white/20 dark:border-white/10 shadow-2xl"
              style={{
                animation: 'slideUp 0.6s ease-out forwards',
              }}
            >
              <svg
                className="w-5 h-5 text-white/90"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-sm font-medium text-white/90">
                深色模式
              </span>
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          20% {
            opacity: 1;
            transform: translateY(0);
          }
          80% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-5px);
          }
        }
      `}</style>
    </>
  );
}
