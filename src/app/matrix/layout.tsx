import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { ForceDarkMode } from "@/components/force-dark-mode";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matrix",
};

export default function MatrixLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <TooltipProvider delayDuration={0}>
          <ForceDarkMode />
          {children}
          <Analytics />
          <Navbar />
        </TooltipProvider>
      </ThemeProvider>
    </>
  );
}
