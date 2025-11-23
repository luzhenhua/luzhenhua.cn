"use client";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { translate } from "@/lib/i18n";
import { Languages } from "lucide-react";
import { useEffect, useState } from "react";

export function LanguagePrompt() {
  const { showChinesePrompt, acceptChinesePrompt, dismissPrompt } = useLanguage();
  const title = translate("zh", "languagePromptTitle");
  const message = translate("zh", "languagePromptMessage");
  const confirmLabel = translate("zh", "languagePromptConfirm");
  const dismissLabel = translate("zh", "languagePromptDismiss");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    if (showChinesePrompt) {
      timer = window.setTimeout(() => setIsReady(true), 800);
    } else {
      setIsReady(false);
    }
    return () => {
      if (timer) {
        window.clearTimeout(timer);
      }
    };
  }, [showChinesePrompt]);

  if (!showChinesePrompt || !isReady) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 sm:bottom-auto sm:top-6 sm:inset-x-0 z-50 flex justify-center pointer-events-none animate-slideUp sm:animate-slideDown">
      <div
        className="pointer-events-auto w-full max-w-2xl rounded-lg sm:rounded-full border border-white/20 bg-background/90 px-5 py-5 sm:px-6 sm:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl flex flex-col gap-4 sm:gap-3 sm:flex-row sm:items-center animate-breathe"
        role="alertdialog"
        aria-labelledby="language-switch-title"
        aria-describedby="language-switch-description"
      >
        <div className="flex items-start sm:items-center gap-3">
          <div className="shrink-0 h-9 w-9 sm:h-10 sm:w-10 rounded-lg sm:rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <Languages className="size-4" />
          </div>
          <div className="space-y-1 sm:space-y-0.5 flex-1 min-w-0">
            <p id="language-switch-title" className="text-sm font-semibold text-foreground">
              {title}
            </p>
            <p
              id="language-switch-description"
              className="text-xs text-muted-foreground leading-relaxed"
            >
              {message}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-2 sm:ml-auto">
          <button
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "flex-1 sm:flex-none font-medium text-sm sm:text-xs h-9 sm:h-auto px-4 sm:px-3 sm:py-1.5 text-muted-foreground"
            )}
            onClick={dismissPrompt}
          >
            {dismissLabel}
          </button>
          <button
            className={cn(
              buttonVariants({ variant: "default" }),
              "flex-1 sm:flex-none font-medium text-sm sm:text-xs h-9 sm:h-auto px-4 sm:px-3 sm:py-1.5"
            )}
            onClick={acceptChinesePrompt}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translate(
              var(--tw-translate-x, 0),
              calc(var(--tw-translate-y, 0) - 20px)
            );
          }
          to {
            opacity: 1;
            transform: translate(
              var(--tw-translate-x, 0),
              var(--tw-translate-y, 0)
            );
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        :global(.animate-slideDown) {
          animation: slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        :global(.animate-slideUp) {
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media (min-width: 640px) {
          :global(.sm\\:animate-slideDown) {
            animation: slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        }
        @keyframes breathe {
          0% {
            transform: translate(
              var(--tw-translate-x, 0),
              var(--tw-translate-y, 0)
            );
          }
          50% {
            transform: translate(
              var(--tw-translate-x, 0),
              calc(var(--tw-translate-y, 0) + 2px)
            );
          }
          100% {
            transform: translate(
              var(--tw-translate-x, 0),
              var(--tw-translate-y, 0)
            );
          }
        }
        :global(.animate-breathe) {
          animation: breathe 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
