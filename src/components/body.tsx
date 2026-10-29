import { useState } from "react";
import { ProjectCard } from "./projectCard";
import { SkillCard, type SkillItem } from "./skillCard";
import {
  ArrowDown,
  CpuFill,
  FolderFill,
  ShieldCheck,
  LightningChargeFill,
} from "react-bootstrap-icons";

type SkillCategory = {
  title: string;
  badge?: string;
  isMain?: boolean;
  items: SkillItem[];
};

export function Body() {
  const [skillFilter, setSkillFilter] = useState<"all" | "fluent" | "familiar">("all");

  const skills: SkillCategory[] = [
    {
      title: "Backend",
      badge: "⭐ Main Stack",
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
      title: "Web Development",
      badge: "🌐 Full-Stack",
      items: [
        { name: "Blazor", fluent: true },
        { name: "HTML/CSS", fluent: true },
        { name: "Tailwind CSS", fluent: true },
        { name: "React + TypeScript", fluent: false },
        { name: "Vite", fluent: false },
      ],
    },
    {
      title: "Programming Languages",
      badge: "💻 Languages",
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
      title: "Mobile Development",
      badge: "📱 Projects",
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
      title: "Tools & Workflow",
      badge: "🛠️ Tools",
      items: [
        { name: "Rider", fluent: true },
        { name: "CLion", fluent: true },
        { name: "WebStorm", fluent: true },
        { name: "Git", fluent: true },
        { name: "GitHub", fluent: true },
        { name: "GitLab", fluent: true },
        { name: "Jenkins", fluent: true },
        { name: "DBeaver CE", fluent: true },
        { name: "Visual Studio Code", fluent: true },
        { name: "ClickUp", fluent: true },
      ],
    },
  ];

  const projects = [
    {
      title: "Vehicle Cost Tracker",
      description:
        "An Android application designed to track and manage vehicle expenses, repairs, refuels, and general costs.",
      img_path: "/images/vehicle-cost-tracker.png",
      source: "https://github.com/D0M1N1Kx/Vehicle-Cost-Tracker",
      items: ["Mobile App", "Flutter", "Dart"],
    },
    {
      title: "Courier App",
      description:
        "Courier management web system connected to an MTA server with real-time tracking and assignment features.",
      img_path: "/images/courier-app.png",
      source: "https://github.com/D0M1N1Kx/courier-app",
      link: "https://courier.zenithfactory.dev/",
      items: ["Web", "React + TypeScript", "NestJS", "PostgreSQL"],
    },
    {
      title: "Anonym Chat",
      description:
        "A real-time messaging application where users can create rooms and chat completely anonymously with others.",
      img_path: "/images/anonymchat.png",
      source: "https://github.com/D0M1N1Kx/AnonymChat",
      items: ["Mobile App", "Flutter", "Dart", "NestJS"],
    },
    {
      title: "Rycloon",
      description:
        "A dedicated social media platform designed for gamers with tailored community features. Working as full-stack developer.",
      img_path: "/images/rycloon.png",
      link: "https://rycloon.com/",
      items: ["Web", "React + TypeScript", "ASP.NET Core", "Node.js", "MySQL"],
    },
    {
      title: "Mines Game",
      description:
        "Modern, web-based Minesweeper game built using React and TypeScript with engaging visuals and smooth interactions.",
      img_path: "/images/mines-game.png",
      source: "https://github.com/ZenithFactory/mines-game",
      link: "https://minesgame.zenithfactory.dev/",
      items: ["Web", "React + TypeScript", "Node.js"],
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
          <span>Backend Developer • Full-Stack Capability</span>
        </div>

        {/* Profile Avatar with Sapphire Glow */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-full blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
          <img
            src="https://avatars.githubusercontent.com/u/98649184?s=400&v=4"
            alt="Milkovics Dominik"
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover ring-4 ring-[#070b14] shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>

        {/* Name & Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          Milkovics{" "}
          <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
            Dominik
          </span>
        </h1>

        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-8">
          Backend-focused developer specializing in high-performance architecture with{" "}
          <span className="text-blue-300 font-medium">C# & ASP.NET Core</span>.
          Experienced across the full stack with{" "}
          <span className="text-cyan-300 font-medium">Blazor & modern web technologies</span>,
          plus cross-platform client development in{" "}
          <span className="text-indigo-300 font-medium">Flutter & React</span>.
        </p>

        {/* Call-to-action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#skills"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Explore Skills & Tech Stack</span>
            <ArrowDown size={15} />
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-slate-500 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>View Projects</span>
          </a>
        </div>
      </section>

      {/* Subtle Divider */}
      <div className="w-full max-w-6xl mx-auto px-4 my-8">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      {/* Skills Section */}
      <section id="skills" className="py-12 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase mb-2">
            <CpuFill size={13} />
            <span>Tech Stack & Specialization</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
            Backend development is my primary focus, backed by solid full-stack web and cross-platform experience.
          </p>
        </div>

        {/* Interactive Filter & Legend */}
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
              All Skills ({allItemsCount})
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
              <span>Fluent / Core ({fluentCount})</span>
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
              <span>Project Experience ({familiarCount})</span>
            </button>
          </div>

          {/* Visual Legend Indicator */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)] shrink-0" />
              <span className="text-slate-300 font-medium">Blue Badge:</span>
              <span>Fluent / Main Stack (Daily driver, deep proficiency)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-500 shrink-0" />
              <span className="text-slate-300 font-medium">Gray Badge:</span>
              <span>Project Experience (Hands-on, built real projects)</span>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              items={skill.items}
              title={skill.title}
              badge={skill.badge}
              isMain={skill.isMain}
              filter={skillFilter}
            />
          ))}
        </div>
      </section>

      {/* Subtle Divider */}
      <div className="w-full max-w-6xl mx-auto px-4 my-12">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      {/* Projects Section */}
      <section id="projects" className="py-12 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase mb-2">
            <FolderFill size={13} />
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
            A showcase of backend-connected platforms, web services, and mobile applications I've built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              img_path={project.img_path}
              link={project.link}
              source={project.source}
              items={project.items}
            />
          ))}
        </div>
      </section>
    </div>
  );
}