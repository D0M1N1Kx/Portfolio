import { useState } from "react";
import { Github } from "react-bootstrap-icons";
import { useLanguage } from "../context/LanguageContext";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#070b14]/80 border-b border-slate-800/80 transition-all duration-300">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5">
        <div className="flex items-center justify-between">
          {/* Logo / Profile */}
          <a
            href="https://github.com/D0M1N1Kx"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
          >
            <div className="relative">
              <img
                src="https://avatars.githubusercontent.com/u/98649184?s=400&v=4"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/40 group-hover:ring-blue-400 transition-all duration-300"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-[#070b14]"></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-300 bg-clip-text text-transparent group-hover:to-cyan-300 transition-all">
                D0M1N1K_.
              </span>
              <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-medium">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            <ul className="flex items-center gap-1 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-300 hover:text-white px-3.5 py-1.5 rounded-lg hover:bg-slate-800/60 transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="w-px h-5 bg-slate-800 mx-2" />

            {/* Language Switcher */}
            <div className="flex items-center p-0.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  lang === "en"
                    ? "bg-blue-600 text-white shadow-sm font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("hu")}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  lang === "hu"
                    ? "bg-blue-600 text-white shadow-sm font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
                aria-label="Váltás magyarra"
              >
                HU
              </button>
            </div>

            <a
              href="https://github.com/D0M1N1Kx"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium px-3.5 py-1.5 rounded-lg bg-blue-950/40 border border-blue-800/50 text-blue-300 hover:bg-blue-900/50 hover:text-blue-200 hover:border-blue-600 transition-all duration-200 ml-1"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile Right Bar (Language Switcher + Hamburger) */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Language Switcher */}
            <div className="flex items-center p-0.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2 py-0.5 rounded-md transition-all ${
                  lang === "en"
                    ? "bg-blue-600 text-white shadow-sm font-bold"
                    : "text-slate-400"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("hu")}
                className={`px-2 py-0.5 rounded-md transition-all ${
                  lang === "hu"
                    ? "bg-blue-600 text-white shadow-sm font-bold"
                    : "text-slate-400"
                }`}
              >
                HU
              </button>
            </div>

            <button
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between items-center">
                <span
                  className={`w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-800/80 animate-fadeIn">
            <ul className="flex flex-col gap-1 pb-2 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              <li className="pt-2">
                <a
                  href="https://github.com/D0M1N1Kx"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-blue-950/50 border border-blue-800/50 text-blue-300 font-medium text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Github size={18} />
                  <span>{t.nav.viewGithub}</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}