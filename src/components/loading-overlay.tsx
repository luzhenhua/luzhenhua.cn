"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function LoadingOverlay() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    const timer = window.setTimeout(() => setIsVisible(false), 500);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-400",
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="absolute inset-0 bg-background/85 backdrop-blur-2xl" />
      <div className="relative flex flex-col items-center gap-3">
        <div className="relative h-10 w-10 text-white/80">
          <svg className="h-full w-full animate-spin-slow" viewBox="0 0 24 24">
            <circle
              className="opacity-30"
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="1.4"
              fill="none"
            />
            <path
              d="M21 12a9 9 0 0 1-9 9"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
        <span className="text-[0.65rem] uppercase tracking-[0.4em] text-white/60">
          Loading
        </span>
      </div>
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 1.6s ease-in-out infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
