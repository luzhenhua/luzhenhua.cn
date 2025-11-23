"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { useLanguage, useTranslations } from "@/components/language-provider";

const BLUR_FADE_DELAY = 0.04;

export function ProjectsPageContent() {
  const { data } = useLanguage();
  const t = useTranslations();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium font-dingtalk text-2xl mb-8 tracking-tighter">
          {t("projectsPageHeading")}
        </h1>
      </BlurFade>
      <div className="grid gap-4 sm:grid-cols-2">
        {data.projects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 2 + id * 0.05}
          >
            <ProjectCard {...project} tags={Array.from(project.technologies)} />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
