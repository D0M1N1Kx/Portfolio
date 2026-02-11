import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/10 backdrop-blur-md sticky text-white top-1 z-50">
      <nav className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-4"
            onClick={() => window.open("https://github.com/D0M1N1Kx")}
          >
            <img
              src="https://avatars.githubusercontent.com/u/98649184?s=400&v=4"
              alt="Profile"
              className="w-12 h-12 rounded-full border-0"
            />
            <div>
              <h1 className="text-xl font-bold">D0M1N1K_.</h1>
            </div>
          </div>

          <ul className="hidden md:flex gap-12 mr-20">
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

          <button
            className="md:hidden flex flex-col gap-1.5 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        <div
          className={`md:hidden fixed right-0 top-0 h-fit w-fit px-6 py-4 bg-black border-l border-blue-600 shadow-2xl transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ top: "80px" }}
        >
          <ul className="flex flex-col items-center gap-8 pt-12">
            <li>
              <a
                href="#home"
                className="text-2xl hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-2xl hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-2xl hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-2xl hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
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
