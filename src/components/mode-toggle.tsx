"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useTranslations } from "@/components/language-provider";

interface ModeToggleProps {
  disabled?: boolean;
}

export function ModeToggle({ disabled = false }: ModeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const t = useTranslations();

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="px-2"
      disabled={disabled}
      onClick={() => {
        if (!disabled) {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
        }
      }}
      aria-label={disabled ? t("modeToggleAriaDisabled") : t("modeToggleAria")}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
