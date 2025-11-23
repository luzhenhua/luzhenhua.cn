"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Markdown from "react-markdown";
import { Icons } from "@/components/icons";
import ShinyButton from "@/components/ui/shiny-button";
import { SocialIconLink } from "@/components/social-icon-link";
import { GithubContributions } from "@/components/github-calendar";
import { LiveAge } from "@/components/live-age";
import { useLanguage, useTranslations } from "@/components/language-provider";

const BLUR_FADE_DELAY = 0.04;

export function HomePageContent() {
  const { data } = useLanguage();
  const t = useTranslations();

  const firstName = data.name.split(" ")[0];

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-dingtalk font-bold tracking-tighter sm:text-5xl xl:text-6xl/none dark:text-slate-200"
                yOffset={8}
                text={t("heroGreeting", { name: firstName })}
              />
              <BlurFade
                delay={BLUR_FADE_DELAY}
                className="max-w-[600px] md:text-xl mt-2 dark:text-slate-300"
              >
                <LiveAge />
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="profile-wrapper">
                <Avatar className="size-28 relative z-10">
                  <AvatarImage
                    alt={data.username}
                    src={data.avatarUrl}
                    width={112}
                    height={112}
                    loading="eager"
                  />
                  <AvatarFallback>{data.initials}</AvatarFallback>
                </Avatar>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold font-dingtalk">
            {t("aboutHeading")}
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {data.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id="connect">
        <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-dingtalk">
              {t("socialHeading")}
            </h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
              {Object.entries(data.contact.social).map(([name, social], idx) => (
                <SocialIconLink
                  key={name}
                  name={social.name}
                  url={social.url}
                  icon={<social.icon />}
                  delay={BLUR_FADE_DELAY * 5 + idx * 0.05}
                />
              ))}
            </div>
          </div>
        </BlurFade>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold font-dingtalk">
              {t("skillsHeading")}
            </h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {data.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="contributions">
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <h2 className="text-xl font-bold font-dingtalk">
            {t("contributionsHeading")}
          </h2>
          <GithubContributions />
        </BlurFade>
      </section>

      <section id="projects">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold font-dingtalk">
              {t("projectsHeading")}
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="grid gap-4 sm:grid-cols-2">
              {data.projects.slice(0, 4).map((project) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  tags={Array.from(project.technologies)}
                />
              ))}
            </div>
            <Link href="/projects" className="mt-4 block">
              <ShinyButton className="w-full sm:w-auto group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] font-bold font-dingtalk">
                {t("projectsSeeAll")}
              </ShinyButton>
            </Link>
          </BlurFade>
        </div>
      </section>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-4">
            <h2 className="text-xl font-medium font-dingtalk">
              {t("contactHeading")}
            </h2>
            <h2 className="text-md font-medium">
              {t("contactSubheading")}
            </h2>
            <a
              href={`mailto:${data.contact.email}`}
              className="flex items-center gap-2 underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              <Icons.email className="size-4" />
              {data.contact.email}
            </a>
          </div>
        </BlurFade>
      </section>
      <footer className="mt-20 border-t py-8">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-4">
              <div className="text-sm text-muted-foreground">
                Copyright &copy; {new Date().getFullYear()} {data.username}. All
                rights reserved.
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-muted-foreground">
                <a
                  href="https://beian.miit.gov.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors duration-200"
                >
                  {data.beian.icp}
                </a>
                <span className="hidden sm:inline">|</span>
                <a
                  href="https://beian.mps.gov.cn/#/query/webSearch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors duration-200"
                >
                  {data.beian.police}
                </a>
              </div>
              <div className="flex space-x-4">
                <Link
                  href="/sitemap.xml"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {t("sitemapLabel")}
                </Link>
              </div>
            </div>
          </div>
        </BlurFade>
      </footer>
    </main>
  );
}
