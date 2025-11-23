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
      timer = window.setTimeout(() => setIsReady(true), 180);
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
    <div className="fixed inset-x-4 top-4 sm:top-6 sm:left-1/2 sm:-translate-x-1/2 z-50 flex justify-center pointer-events-none animate-slideDown">
      <div
        className="pointer-events-auto w-full max-w-2xl rounded-full border border-white/20 bg-background/80 px-4 py-3 sm:px-6 shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur-xl flex flex-col gap-3 sm:flex-row sm:items-center animate-breathe"
        role="alertdialog"
        aria-labelledby="language-switch-title"
        aria-describedby="language-switch-description"
      >
        <div className="flex items-center gap-3">
          <div className="shrink-0 h-10 w-10 rounded-full bg-primary/15 text-primary flex items-center justify-center shadow-inner">
            <Languages className="size-4" />
          </div>
          <div className="space-y-0.5">
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
        <div className="flex items-center gap-2 sm:ml-auto">
          <button
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "font-medium text-xs px-3 py-1.5 text-muted-foreground"
            )}
            onClick={dismissPrompt}
          >
            {dismissLabel}
          </button>
          <button
            className={cn(
              buttonVariants({ variant: "default" }),
              "font-medium text-xs px-3 py-1.5"
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
        :global(.animate-slideDown) {
          animation: slideDown 0.5s ease forwards;
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
