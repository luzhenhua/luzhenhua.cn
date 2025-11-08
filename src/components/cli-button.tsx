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

export function CliButton() {
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
          <span className="sr-only">CLI Mode</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent sideOffset={4}>
        <p>CLI Mode</p>
      </TooltipContent>
    </Tooltip>
  );
} 