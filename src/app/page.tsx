import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { PersonSchema } from "@/components/schema/person-schema";
import { Metadata } from "next";
import { Icons } from "@/components/icons";
import ShinyButton from "@/components/ui/shiny-button";
import { SocialIconLink } from "@/components/social-icon-link";
import { GithubContributions } from "@/components/github-calendar";
import { Suspense } from "react";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  title: DATA.username,
  description: DATA.description,
  openGraph: {
    title: DATA.username,
    description: DATA.description,
    url: DATA.url,
    siteName: DATA.username,
    images: [
      {
        url: `${DATA.url}/portfolio.png`,
        width: 1200,
        height: 630,
        alt: `${DATA.username}'s Portfolio`,
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DATA.username,
    description: DATA.description,
    creator: "@" + "hellokaton",
    images: [`${DATA.url}/portfolio.png`],
  },
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <PersonSchema />
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-dingtalk font-bold tracking-tighter sm:text-5xl xl:text-6xl/none dark:text-slate-200"
                yOffset={8}
                text={`👋 嘿，我是 ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl mt-2 dark:text-slate-300"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="profile-wrapper">
                <Avatar className="size-28 relative z-10">
                  <AvatarImage
                    alt={DATA.username}
                    src={DATA.avatarUrl}
                    width={112}
                    height={112}
                    loading="eager"
                  />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold font-dingtalk">关于</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id="connect">
        <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-dingtalk">社交媒体 💬</h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
              {Object.entries(DATA.contact.social).map(
                ([name, social], idx) => (
                  <SocialIconLink
                    key={name}
                    name={social.name}
                    url={social.url}
                    icon={<social.icon />}
                    delay={BLUR_FADE_DELAY * 5 + idx * 0.05}
                  />
                )
              )}
            </div>
          </div>
        </BlurFade>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold font-dingtalk">技能</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="contributions">
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <h2 className="text-xl font-bold font-dingtalk">GitHub 贡献</h2>
          <Suspense
            fallback={
              <div className="h-[200px] animate-pulse bg-muted rounded-lg" />
            }
          >
            <GithubContributions />
          </Suspense>
        </BlurFade>
      </section>
      <section id="projects">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold font-dingtalk">个人作品</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="grid gap-4 sm:grid-cols-2">
              {DATA.projects.slice(0, 4).map((project) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  tags={Array.from(project.technologies)}
                />
              ))}
            </div>
            <Link href="/projects" className="mt-4 block">
              <ShinyButton className="w-full sm:w-auto group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] font-bold font-dingtalk">
                全部作品 →
              </ShinyButton>
            </Link>
          </BlurFade>
        </div>
      </section>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-4">
            <h2 className="text-xl font-medium font-dingtalk">联系方式</h2>
            <h2 className="text-md font-medium">有想法？发邮件给我吧</h2>
            <a
              href="mailto:hellokaton@gmail.com"
              className="flex items-center gap-2 underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              <Icons.email className="size-4" />
              hellokaton@gmail.com
            </a>

            <div className="mt-8">
              <h2 className="text-md font-medium font-dingtalk">
                或者来 X 上和我聊聊天
              </h2>

              <a
                href={DATA.contact.social.X.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 rounded-md bg-foreground text-background hover:opacity-90 transition-opacity"
              >
                关注 𝕏
              </a>
            </div>
          </div>
        </BlurFade>
      </section>
      <footer className="mt-20 border-t py-8">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-muted-foreground">
                Copyright &copy; {new Date().getFullYear()} {DATA.username}. All
                rights reserved.
              </div>
              <div className="flex space-x-4">
                <Link
                  href="/sitemap.xml"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  站点地图
                </Link>
              </div>
            </div>
          </div>
        </BlurFade>
      </footer>
    </main>
  );
}
