import { useState } from "react";
import { ProjectCard } from "./projectCard";
import { SkillCard, type SkillItem } from "./skillCard";
import { ScrollReveal } from "./scrollReveal";
import {
  ArrowDown,
  CpuFill,
  FolderFill,
  ShieldCheck,
  LightningChargeFill,
} from "react-bootstrap-icons";
import { useLanguage } from "../context/LanguageContext";

type SkillCategory = {
  title: string;
  badge?: string;
  isMain?: boolean;
  items: SkillItem[];
};

export function Body() {
  const { lang, t } = useLanguage();
  const [skillFilter, setSkillFilter] = useState<"all" | "fluent" | "familiar">("all");

  const skills: SkillCategory[] = [
    {
      title: t.skills.categories.backend.title,
      badge: t.skills.categories.backend.badge,
      isMain: true,
      items: [
        { name: "ASP.NET Core Minimal API", fluent: true },
        { name: "EF Core", fluent: true },
        { name: "C#", fluent: true },
        { name: "JWT Bearer", fluent: true },
        { name: "SignalR", fluent: true },
        { name: "MSSQL", fluent: true },
        { name: "PostgreSQL", fluent: true },
        { name: "MySQL", fluent: true },
      ],
    },
    {
      title: t.skills.categories.web.title,
      badge: t.skills.categories.web.badge,
      items: [
        { name: "Blazor", fluent: true },
        { name: "HTML/CSS", fluent: true },
        { name: "Tailwind CSS", fluent: true },
        { name: "React + TypeScript", fluent: false },
        { name: "Vite", fluent: false },
      ],
    },
    {
      title: t.skills.categories.languages.title,
      badge: t.skills.categories.languages.badge,
      items: [
        { name: "C#", fluent: true },
        { name: "C", fluent: true },
        { name: "C++", fluent: true },
        { name: "TypeScript", fluent: false },
        { name: "JavaScript", fluent: false },
        { name: "Dart", fluent: false },
      ],
    },
    {
      title: t.skills.categories.mobile.title,
      badge: t.skills.categories.mobile.badge,
      items: [
        { name: "Flutter", fluent: false },
        { name: "Dart", fluent: false },
        { name: "Provider", fluent: false },
        { name: "Riverpod", fluent: false },
        { name: "MVVM", fluent: false },
        { name: "Dio", fluent: false },
        { name: "HTTP", fluent: false },
      ],
    },
    {
      title: t.skills.categories.tools.title,
      badge: t.skills.categories.tools.badge,
      items: [
        { name: "Rider", fluent: true },
        { name: "Git", fluent: true },
        { name: "GitHub", fluent: true },
        { name: "GitLab", fluent: true },
        { name: "DBeaver CE", fluent: true },
        { name: "Visual Studio Code", fluent: true },
        { name: "CLion", fluent: true },
        { name: "WebStorm", fluent: false },
        { name: "ClickUp", fluent: true },
      ],
    },
  ];

  const projects = [
    {
      title: t.projects.items.vehicleCostTracker.title,
      description: t.projects.items.vehicleCostTracker.description,
      img_path: "/images/vehicle-cost-tracker.png",
      source: "https://github.com/D0M1N1Kx/Vehicle-Cost-Tracker",
      items: t.projects.items.vehicleCostTracker.tags,
    },
    {
      title: t.projects.items.courierApp.title,
      description: t.projects.items.courierApp.description,
      img_path: "/images/courier-app.png",
      source: "https://github.com/D0M1N1Kx/courier-app",
      link: "https://courier.zenithfactory.dev/",
      items: t.projects.items.courierApp.tags,
    },
    {
      title: t.projects.items.anonymChat.title,
      description: t.projects.items.anonymChat.description,
      img_path: "/images/anonymchat.png",
      source: "https://github.com/D0M1N1Kx/AnonymChat",
      items: t.projects.items.anonymChat.tags,
    },
    {
      title: t.projects.items.rycloon.title,
      description: t.projects.items.rycloon.description,
      img_path: "/images/rycloon.png",
      link: "https://rycloon.com/",
      items: t.projects.items.rycloon.tags,
    },
    {
      title: t.projects.items.minesGame.title,
      description: t.projects.items.minesGame.description,
      img_path: "/images/mines-game.png",
      source: "https://github.com/ZenithFactory/mines-game",
      link: "https://minesgame.zenithfactory.dev/",
      items: t.projects.items.minesGame.tags,
    },
  ];

  const allItemsCount = skills.flatMap((s) => s.items).length;
  const fluentCount = skills.flatMap((s) => s.items).filter((i) => i.fluent).length;
  const familiarCount = allItemsCount - fluentCount;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/50 border border-blue-800/50 text-blue-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{t.hero.status}</span>
        </div>

        {/* Profile Avatar with Sapphire Glow & Clean Floating Bounce */}
        <div className="relative mb-6 group animate-clean-bounce">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-full blur-xl opacity-45 group-hover:opacity-80 transition duration-500" />
          <img
            src="https://avatars.githubusercontent.com/u/98649184?s=400&v=4"
            alt="Milkovics Dominik"
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover ring-4 ring-[#070b14] shadow-2xl transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>

        {/* Name & Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          {t.hero.titlePrefix}{" "}
          <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
            {t.hero.titleSuffix}
          </span>
        </h1>

        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-8">
          {lang === "en" ? (
            <>
              Backend-focused developer specializing in high-performance architecture with{" "}
              <span className="text-blue-300 font-medium">C# & ASP.NET Core</span>.
              Experienced across the full stack with{" "}
              <span className="text-cyan-300 font-medium">Blazor & modern web technologies</span>,
              plus cross-platform client development in{" "}
              <span className="text-indigo-300 font-medium">Flutter & React</span>.
            </>
          ) : (
            <>
              Backend-fókuszú fejlesztő, aki nagy teljesítményű architektúrákra specializálódott{" "}
              <span className="text-blue-300 font-medium">C# és ASP.NET Core</span> alapokon.
              Tapasztalt a teljes stacken{" "}
              <span className="text-cyan-300 font-medium">Blazorral és modern webes technológiákkal</span>,
              valamint cross-platform kliensfejlesztéssel{" "}
              <span className="text-indigo-300 font-medium">Flutterben és Reactben</span>.
            </>
          )}
        </p>

        {/* Call-to-action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#skills"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>{t.hero.exploreSkills}</span>
            <ArrowDown size={15} />
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-slate-500 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>{t.hero.viewProjects}</span>
          </a>
        </div>
      </section>

      {/* Subtle Divider */}
      <div className="w-full max-w-6xl mx-auto px-4 my-8">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      {/* Skills Section */}
      <section id="skills" className="py-12 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
        <ScrollReveal>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase mb-2">
              <CpuFill size={13} />
              <span>{t.skills.tag}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {t.skills.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
              {t.skills.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Filter & Legend */}
        <ScrollReveal delayMs={100}>
          <div className="flex flex-col items-center justify-center gap-4 mb-10">
            <div className="inline-flex p-1 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setSkillFilter("all")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  skillFilter === "all"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {t.skills.filterAll} ({allItemsCount})
              </button>
              <button
                type="button"
                onClick={() => setSkillFilter("fluent")}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  skillFilter === "fluent"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold"
                    : "text-blue-300 hover:text-white"
                }`}
              >
                <LightningChargeFill size={13} className="text-cyan-300" />
                <span>{t.skills.filterFluent} ({fluentCount})</span>
              </button>
              <button
                type="button"
                onClick={() => setSkillFilter("familiar")}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  skillFilter === "familiar"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <ShieldCheck size={14} className="text-slate-400" />
                <span>{t.skills.filterFamiliar} ({familiarCount})</span>
              </button>
            </div>

            {/* Visual Legend Indicator */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)] shrink-0" />
                <span className="text-slate-300 font-medium">{t.skills.legendBlueLabel}</span>
                <span>{t.skills.legendBlueText}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-500 shrink-0" />
                <span className="text-slate-300 font-medium">{t.skills.legendGrayLabel}</span>
                <span>{t.skills.legendGrayText}</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Skills Grid with Staggered Cascading Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <ScrollReveal
              key={index}
              delayMs={(index % 3) * 100}
              className="h-full"
            >
              <SkillCard
                items={skill.items}
                title={skill.title}
                badge={skill.badge}
                isMain={skill.isMain}
                filter={skillFilter}
                emptyMessage={t.skills.emptyFilter}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Subtle Divider */}
      <div className="w-full max-w-6xl mx-auto px-4 my-12">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      {/* Projects Section */}
      <section id="projects" className="py-12 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase mb-2">
              <FolderFill size={13} />
              <span>{t.projects.tag}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {t.projects.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
              {t.projects.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid with Staggered Cascading Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal
              key={index}
              delayMs={(index % 3) * 120}
              className="h-full"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                img_path={project.img_path}
                link={project.link}
                source={project.source}
                items={project.items}
                sourceBtnText={t.projects.sourceBtn}
                liveBtnText={t.projects.liveDemoBtn}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}