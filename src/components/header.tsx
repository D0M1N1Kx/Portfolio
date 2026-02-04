export function Header() {
  return (
    <header className="bg-black sticky text-white top-1 z-50">
      <nav className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://avatars.githubusercontent.com/u/98649184?s=400&v=4"
              alt="Profile"
              className="w-12 h-12 rounded-full border-0"
            />
            <div>
              <h1 className="text-xl font-bold">D0M1N1K_.</h1>
            </div>
          </div>

          <ul className="flex gap-12 mr-20">
            <li>
              <a
                href="#home"
                className="hover:text-blue-500 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-blue-500 transition duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-500 transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-500 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
