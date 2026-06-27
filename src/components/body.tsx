import { ProjectCard } from "./projectCard";
import { SkillCard } from "./skillCard";

export function Body() {
  const skills = [
    {
      title: "Mobile Development",
      items: [
        "Flutter",
        "Dart",
        "Provider",
        "Riverpod",
        "MVVM",
        "Dio",
        "HTTP",
      ],
    },
    {
      title: "Web Development",
      items: ["React + Typescript", "Vite", "HTML/CSS", "Tailwind CSS"],
    },
    {
      title: "Backend",
      items: [
        "ASP NET Core Minimal API",
        "EF Core",
        "NestJs",
        "Node.js",
        "JWT Bearer",
        "MSSQL",
        "PostgreSQL",
        "MySQL",
      ],
    },
    {
      title: "Programming Languages",
      items: [
        "C#",
        "Typescript",
        "Dart",
        "Javascript",
        "Python",
        "C",
      ],
    },
    {
      title: "Tools",
      items: [
        "Git",
        "GitHub",
        "GitLab",
        "DBeaver CE",
        "Rider",
        "WebStorm",
        "Visual Studio Code",
        "ClickUp",
      ],
    },
    {
      title: "Operating Systems",
      items: [
          "Windows 11",
          "Windows 10",
          "Ubuntu",
          "Kubuntu",
          "Fedora",
          "Nobara"
      ],
    }
  ];

  const projects = [
    {
      title: 'Vehicle Cost Tracker',
      description: 'It\'s an Android application, you can track your vehicles costs, repairs, costs.',
      img_path: '/images/vehicle-cost-tracker.png',
      source: 'https://github.com/D0M1N1Kx/Vehicle-Cost-Tracker',
      items: [
          "Mobile App",
          "Flutter",
          "Dart",
      ]
    },
    {
      title: 'Courier App',
      description: 'Courier management system connected to an MTA server.',
      img_path: '/images/courier-app.png',
      source: 'https://github.com/D0M1N1Kx/courier-app',
      link: 'https://courier.zenithfactory.dev/',
      items: [
        "Web",
          "React + Typescript",
          "NestJs",
          "PostgreSQL",
      ]
    },
    {
      title: 'Anonym Chat',
      description: 'A chat application where you can open and share a chat with others with whom you can chat anonymously.',
      img_path: '/images/anonymchat.png',
      source: 'https://github.com/D0M1N1Kx/AnonymChat',
      items: [
        "Mobile App",
        "Flutter",
        "Dart",
        "NestJs",
      ]
    },
    {
      title: 'Rycloon',
      description: 'A social media platform designed for gamers with tailored features, where I work as a full-stack developer.',
      img_path: '/images/rycloon.png',
      link: 'https://rycloon.com/',
      items: [
        "Web",
          "React + Typescript",
          "ASP NET Core",
          "Node.js",
          "MySQL",
      ]
    },
    {
      title: 'Mines Game',
      description: 'Modern, web-based Minesweeper game built using React and TypeScript.',
      img_path: '/images/mines-game.png',
      source: 'https://github.com/ZenithFactory/mines-game',
      link: 'https://minesgame.zenithfactory.dev/',
      items: [
        "Web",
        "React + Typescript",
        "Node.js",
      ]
    }
  ];

  return (
    <>
      <div className="w-full pb bg-gradient-to-r from-gray-800/25 to-blue-700/25" id="home">
        <div className="h-2 bg-transparent w-full mb-3"></div>
        <div className="flex flex-col items-center justify-center gap-2 mt-8">
          <img
            src="https://avatars.githubusercontent.com/u/98649184?s=400&v=4"
            alt="Profile"
            className="w-52 h-52 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.9)] hover:shadow-[0_0_45px_rgba(59,130,246,0.9)] transition-shadow duration-300 animate-bounce-small"
          />
          <br></br>
          <div>
            <h1 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold text-sky-600 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)] hover:drop-shadow-[0_0_30px_rgba(96,165,250,0.85)] transition-all duration-300 mt-2" id="skills">
              Milkovics Dominik
            </h1>
          </div>
        </div>
        <div className="h-0.5 bg-blue-800 w-full mb-3 mt-10"></div>
        <h1 className="text-sky-600 font-bold text-4xl text-center mt-4">
          Skills
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 list-none ml-6 mr-6 mb-8" id="projects">
          {skills.map((skill, index) => (
            <li key={index} className="text-center">
              <SkillCard items={skill.items} title={skill.title}/>
            </li>
          ))}
        </ul>
        <div className="h-0.5 bg-blue-800 w-full mb-3 mt-10"></div>
        <h1 className="text-sky-600 font-bold text-4xl text-center mt-4">
          Projects
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center gap-4 mt-8 list-none mx-6" id="contact">
          {projects.map((project, index) => (
            <li key={index} className="w-full flex text-center">
              <ProjectCard title={project.title} description={project.description} img_path={project.img_path} link={project.link} source={project.source} items={project.items} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
