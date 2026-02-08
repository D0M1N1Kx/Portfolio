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
        "MVVM",
        "Repository pattern",
        "Firebase",
        "HTTP",
      ],
    },
    {
      title: "Web Development",
      items: ["React + Typescript", "Vite", "HTML/CSS"],
    },
    {
      title: "Backend",
      items: [
        "ASP NET Core Minimal API",
        "EF Core",
        "MSSQL",
        "PostgreSQL",
        "MySQL",
      ],
    },
  ];

  const projects = [
    {
      title: 'Vehicle Cost Tracker',
      description: 'It\'s an Android application, you can track your vehicles costs, repairs, costs.',
      img_path: '/images/mobile_app.jpg',
      link: 'https://github.com/D0M1N1Kx/Vehicle-Cost-Tracker',
    },
    {
      title: 'Vehicle Cost Tracker',
      description: 'It\'s an Android application, you can track your vehicles costs, repairs, costs.',
      img_path: '/images/mobile_app.jpg',
      link: 'https://github.com/D0M1N1Kx/Vehicle-Cost-Tracker',
    },
    {
      title: 'Vehicle Cost Tracker',
      description: 'It\'s an Android application, you can track your vehicles costs, repairs, costs.',
      img_path: '/images/mobile_app.jpg',
      link: 'https://github.com/D0M1N1Kx/Vehicle-Cost-Tracker',
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
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 list-none ml-6 mr-6" id="contact">
          {projects.map((project, index) => (
            <li key={index} className="text-center">
              <ProjectCard title={project.title} description={project.description} img_path={project.img_path} link={project.link}/>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
