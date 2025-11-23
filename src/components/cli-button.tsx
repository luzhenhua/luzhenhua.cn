'use client';

import { Terminal } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTranslations } from "@/components/language-provider";

export function CliButton() {
  const t = useTranslations();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href="/cli"
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "relative size-12 transition-colors hover:bg-white/20 dark:hover:bg-white/10"
          )}
        >
          <Terminal className="size-4" />
          <span className="sr-only">{t("cliModeLabel")}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent sideOffset={4}>
        <p>{t("cliModeLabel")}</p>
      </TooltipContent>
    </Tooltip>
  );
}
