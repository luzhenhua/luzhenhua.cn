'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

export function ForceDarkMode() {
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

        // 在动画开始时切换主题
        setTimeout(() => {
          setTheme('dark');
        }, 100);

        // 动画结束后隐藏过渡层
        setTimeout(() => {
          setShowTransition(false);
        }, 1200);
      } else {
        // 已经是深色模式，确保设置为深色
        setTheme('dark');
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

  // 华丽的切换效果
  return (
    <>
      {showTransition && (
        <div
          className="fixed inset-0 z-[9999] pointer-events-none"
          style={{
            animation: 'darkModeTransition 1.2s ease-in-out forwards',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-black/95 animate-gradient" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-2xl font-bold animate-pulse-scale">
              <div className="flex items-center gap-3 bg-black/40 px-6 py-4 rounded-2xl backdrop-blur-sm border border-white/20 shadow-2xl">
                <svg
                  className="w-6 h-6 animate-spin-slow"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                    fill="currentColor"
                    opacity="0.9"
                  />
                </svg>
                <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  切换至深色模式
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes darkModeTransition {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          15% {
            opacity: 1;
            transform: scale(1);
          }
          85% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.05);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes pulse-scale {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }

        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </>
  );
}
