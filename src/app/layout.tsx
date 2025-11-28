import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { PageBackground } from "@/components/page-background";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import Script from "next/script";
import { LanguageProvider } from "@/components/language-provider";
import { LanguagePrompt } from "@/components/language-prompt";
import { LanguageContentWrapper } from "@/components/language-content-wrapper";
import { LoadingOverlay } from "@/components/loading-overlay";
import { ChunkReloadListener } from "@/components/chunk-reload-listener";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const dingTalkFont = localFont({
  src: "../fonts/DingTalk_JinBuTi.ttf",
  variable: "--font-dingtalk",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} / Full Stack Developer`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    DATA.name,
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Web Developer",
    "Software Engineer",
  ],
  authors: [{ name: DATA.name }],
  creator: DATA.name,
  publisher: DATA.name,
  alternates: {
    canonical: DATA.url,
  },
  openGraph: {
    title: `${DATA.name} / Full Stack Developer`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name} - Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${DATA.url}/images/suoluetu.webp`,
        width: 1200,
        height: 630,
        alt: `${DATA.name} - Full Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} | Full Stack Developer`,
    description: DATA.description,
    images: [`${DATA.url}/images/suoluetu.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: DATA.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative min-h-screen font-sans antialiased",
          fontSans.variable,
          dingTalkFont.variable
        )}
      >
        {/* Background container */}
        <div className="fixed inset-0 z-[-1]">
          <PageBackground />
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-2xl mx-auto py-12 sm:py-24 px-6">
          <JsonLd />
          <ThemeProvider attribute="class" defaultTheme="dark">
            <TooltipProvider delayDuration={0}>
              <LanguageProvider>
                <ChunkReloadListener />
                <LoadingOverlay />
                <LanguageContentWrapper>
                  {children}
                  <LanguagePrompt />
                  <Analytics />
                  <Script
                    id="clarity-script"
                    strategy="afterInteractive"
                  >
                    {`
                      (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                      })(window, document, "clarity", "script", "ud71c4ycs0");
                    `}
                  </Script>
                  <Navbar />
                </LanguageContentWrapper>
              </LanguageProvider>
            </TooltipProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
