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

  return (
    <>
      <div className="bg-black min-h-screen w-full">
        <div className="h-2 bg-gray-600 w-full mb-3"></div>
        <div className="flex flex-col items-center justify-center gap-2 mt-8">
          <img
            src="https://avatars.githubusercontent.com/u/98649184?s=400&v=4"
            alt="Profile"
            className="w-52 h-52 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.9)] hover:shadow-[0_0_45px_rgba(59,130,246,0.9)] transition-shadow duration-300"
          />
          <br></br>
          <div>
            <h1 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold text-sky-600 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)] hover:drop-shadow-[0_0_30px_rgba(96,165,250,0.85)] transition-all duration-300 mt-2">
              Milkovics Dominik
            </h1>
          </div>
        </div>
        <div className="h-0.5 bg-blue-800 w-full mb-3 mt-10"></div>
        <h1 className="text-sky-600 font-bold text-4xl text-center mt-4">
          Skills
        </h1>
      </div>
    </>
  );
}
