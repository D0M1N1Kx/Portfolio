export type Language = "en" | "hu";

export const translations = {
  en: {
    nav: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      viewGithub: "View GitHub Profile",
    },
    hero: {
      status: "Backend Developer • Full-Stack Capability",
      titlePrefix: "Milkovics",
      titleSuffix: "Dominik",
      bio: "Backend-focused developer specializing in high-performance architecture with C# & ASP.NET Core. Experienced across the full stack with Blazor & modern web technologies, plus cross-platform client development in Flutter & React.",
      exploreSkills: "Explore Skills & Tech Stack",
      viewProjects: "View Projects",
    },
    skills: {
      tag: "Tech Stack & Specialization",
      title: "Skills & Competencies",
      subtitle: "Backend development is my primary focus, backed by solid full-stack web and cross-platform experience.",
      filterAll: "All Skills",
      filterFluent: "Fluent / Core",
      filterFamiliar: "Project Experience",
      legendBlueLabel: "Blue Badge:",
      legendBlueText: "Fluent / Main Stack (Daily driver, deep proficiency)",
      legendGrayLabel: "Gray Badge:",
      legendGrayText: "Project Experience (Hands-on, built real projects)",
      emptyFilter: "No technologies match this filter.",
      categories: {
        backend: {
          title: "Backend",
          badge: "⭐ Main Stack",
        },
        web: {
          title: "Web Development",
          badge: "🌐 Full-Stack",
        },
        languages: {
          title: "Programming Languages",
          badge: "💻 Languages",
        },
        mobile: {
          title: "Mobile Development",
          badge: "📱 Projects",
        },
        tools: {
          title: "Tools & Workflow",
          badge: "🛠️ Tools",
        },
      },
    },
    projects: {
      tag: "Portfolio Highlights",
      title: "Featured Projects",
      subtitle: "A showcase of backend-connected platforms, web services, and mobile applications I've built.",
      sourceBtn: "Source",
      liveDemoBtn: "Live Demo",
      items: {
        vehicleCostTracker: {
          title: "Vehicle Cost Tracker",
          description: "An Android application designed to track and manage vehicle expenses, repairs, refuels, and general costs.",
          tags: ["Mobile App", "Flutter", "Dart"],
        },
        courierApp: {
          title: "Courier App",
          description: "Courier management web system connected to an MTA server with real-time tracking and assignment features.",
          tags: ["Web", "React + TypeScript", "NestJS", "PostgreSQL"],
        },
        anonymChat: {
          title: "Anonym Chat",
          description: "A real-time messaging application where users can create rooms and chat completely anonymously with others.",
          tags: ["Mobile App", "Flutter", "Dart", "NestJS"],
        },
        rycloon: {
          title: "Rycloon",
          description: "A dedicated social media platform designed for gamers with tailored community features. Working as full-stack developer.",
          tags: ["Web", "React + TypeScript", "ASP.NET Core", "Node.js", "MySQL"],
        },
        minesGame: {
          title: "Mines Game",
          description: "Modern, web-based Minesweeper game built using React and TypeScript with engaging visuals and smooth interactions.",
          tags: ["Web", "React + TypeScript", "Node.js"],
        },
      },
    },
    footer: {
      aboutTitle: "About Me",
      location: "Subotica, Serbia",
      role: "Backend & Full-Stack Developer",
      degree: "Electronics & IT Technician",
      school: 'Technical School "Ivan Sarić"',
      contactTitle: "Get In Touch",
      connectTitle: "Connect",
      connectDesc: "Feel free to connect on social media or check out my open-source repositories.",
      rights: "All rights reserved.",
      craftedWith: "Crafted with",
    },
  },
  hu: {
    nav: {
      home: "Főoldal",
      skills: "Képességek",
      projects: "Projektek",
      contact: "Kapcsolat",
      viewGithub: "GitHub Profil Megtekintése",
    },
    hero: {
      status: "Backend Fejlesztő • Full-Stack Képességek",
      titlePrefix: "Milkovics",
      titleSuffix: "Dominik",
      bio: "Backend-fókuszú fejlesztő, aki nagy teljesítményű architektúrákra specializálódott C# és ASP.NET Core alapokon. Tapasztalt a teljes stacken Blazorral és modern webes technológiákkal, valamint cross-platform kliensfejlesztéssel Flutterben és Reactben.",
      exploreSkills: "Képességek & Tech Stack",
      viewProjects: "Projektek Megtekintése",
    },
    skills: {
      tag: "Tech Stack & Specializáció",
      title: "Képességek & Kompetenciák",
      subtitle: "Elsődleges fókuszom a backend fejlesztés, amelyet szilárd full-stack webes és cross-platform tapasztalat egészít ki.",
      filterAll: "Minden Skill",
      filterFluent: "Fluent / Fő Stack",
      filterFamiliar: "Projekt Tapasztalat",
      legendBlueLabel: "Kék jelvény:",
      legendBlueText: "Fő Stack & Fluent (Napi szintű, mély tudás)",
      legendGrayLabel: "Szürke jelvény:",
      legendGrayText: "Projekt Tapasztalat (Gyakorlati, valós projektek)",
      emptyFilter: "Nincs megjelenítendő elem ebben a szűrőben.",
      categories: {
        backend: {
          title: "Backend",
          badge: "⭐ Fő Stack",
        },
        web: {
          title: "Webfejlesztés",
          badge: "🌐 Full-Stack",
        },
        languages: {
          title: "Programozási Nyelvek",
          badge: "💻 Nyelvek",
        },
        mobile: {
          title: "Mobilfejlesztés",
          badge: "📱 Projektek",
        },
        tools: {
          title: "Eszközök & Munkafolyamat",
          badge: "🛠️ Eszközök",
        },
      },
    },
    projects: {
      tag: "Kiemelt Munkák",
      title: "Kiemelt Projektek",
      subtitle: "Válogatás backend-kapcsolatú platformokból, webszolgáltatásokból és mobilalkalmazásokból, amelyeket építettem.",
      sourceBtn: "Forráskód",
      liveDemoBtn: "Élő Demó",
      items: {
        vehicleCostTracker: {
          title: "Vehicle Cost Tracker",
          description: "Android alkalmazás járművek költségeinek, szervizeléseinek, üzemanyag-fogyasztásának és általános kiadásainak nyomon követésére.",
          tags: ["Mobil App", "Flutter", "Dart"],
        },
        courierApp: {
          title: "Courier App",
          description: "Futárkezelő webes rendszer MTA szerverhez kapcsolva, valós idejű követési és feladatkiosztási funkciókkal.",
          tags: ["Web", "React + TypeScript", "NestJS", "PostgreSQL"],
        },
        anonymChat: {
          title: "Anonym Chat",
          description: "Valós idejű üzenetküldő alkalmazás, ahol a felhasználók szobákat hozhatnak létre és teljesen névtelenül cseveghetnek másokkal.",
          tags: ["Mobil App", "Flutter", "Dart", "NestJS"],
        },
        rycloon: {
          title: "Rycloon",
          description: "Kifejezetten gamerek számára tervezett közösségi média platform testreszabott funkciókkal. Full-stack fejlesztőként dolgozom a projekten.",
          tags: ["Web", "React + TypeScript", "ASP.NET Core", "Node.js", "MySQL"],
        },
        minesGame: {
          title: "Mines Game",
          description: "Modern, webes Aknakereső játék React és TypeScript alapokon, látványos megjelenéssel és gördülékeny játékmenettel.",
          tags: ["Web", "React + TypeScript", "Node.js"],
        },
      },
    },
    footer: {
      aboutTitle: "Rólam",
      location: "Szabadka, Szerbia",
      role: "Backend & Full-Stack Fejlesztő",
      degree: "Elektronikai & Informatikai Technikus",
      school: 'Műszaki Iskola "Ivan Sarić"',
      contactTitle: "Kapcsolatfelvétel",
      connectTitle: "Közösségi Média",
      connectDesc: "Lépj kapcsolatba velem közösségi felületeken vagy tekintsd meg a nyílt forráskódú projektjeimet.",
      rights: "Minden jog fenntartva.",
      craftedWith: "Készült:",
    },
  },
};
