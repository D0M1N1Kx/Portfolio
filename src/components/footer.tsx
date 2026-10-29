import {
  Github,
  Linkedin,
  Facebook,
  EnvelopeFill,
  ChatDotsFill,
  GeoAltFill,
  MortarboardFill,
  BriefcaseFill,
} from "react-bootstrap-icons";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      id="contact"
      className="relative bg-[#050811] border-t border-slate-800/80 pt-16 pb-12 scroll-mt-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* About Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-blue-500 rounded-full"></span>
              <span>{t.footer.aboutTitle}</span>
            </h3>
            <ul className="space-y-3 text-sm text-slate-300 list-none">
              <li className="flex items-center gap-2.5 justify-center md:justify-start">
                <GeoAltFill className="text-blue-400 shrink-0" size={15} />
                <span>{t.footer.location}</span>
              </li>
              <li className="flex items-center gap-2.5 justify-center md:justify-start">
                <BriefcaseFill className="text-blue-400 shrink-0" size={15} />
                <span>{t.footer.role}</span>
              </li>
              <li className="flex items-center gap-2.5 justify-center md:justify-start">
                <MortarboardFill className="text-blue-400 shrink-0" size={15} />
                <span>{t.footer.degree}</span>
              </li>
              <li className="text-xs text-slate-400 pl-6 hidden md:block">
                {t.footer.school}
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-cyan-400 rounded-full"></span>
              <span>{t.footer.contactTitle}</span>
            </h3>
            <ul className="space-y-3 text-sm text-slate-300 list-none">
              <li>
                <a
                  href="mailto:milkovicsd32@gmail.com"
                  className="flex items-center gap-2.5 justify-center md:justify-start hover:text-blue-400 transition-colors"
                >
                  <EnvelopeFill className="text-cyan-400 shrink-0" size={15} />
                  <span className="break-all">milkovicsd32@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 justify-center md:justify-start text-slate-400">
                <ChatDotsFill className="text-cyan-400 shrink-0" size={15} />
                <span>Discord: dominik17_.</span>
              </li>
            </ul>
          </div>

          {/* Socials Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-indigo-500 rounded-full"></span>
              <span>{t.footer.connectTitle}</span>
            </h3>
            <p className="text-sm text-slate-400 mb-4 max-w-xs">
              {t.footer.connectDesc}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/D0M1N1Kx"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-950/40 hover:-translate-y-1 hover:shadow-[0_8px_20px_-4px_rgba(37,99,235,0.3)] transition-all duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/dominik-milkovics-ab0359341/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-950/40 hover:-translate-y-1 hover:shadow-[0_8px_20px_-4px_rgba(37,99,235,0.3)] transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/dominik.milkovics.2025/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Profile"
                className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-950/40 hover:-translate-y-1 hover:shadow-[0_8px_20px_-4px_rgba(37,99,235,0.3)] transition-all duration-200"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Milkovics Dominik. {t.footer.rights}</p>
          <p className="flex items-center gap-1.5">
            <span>{t.footer.craftedWith}</span>
            <span className="text-blue-400 font-medium">React</span>
            <span>+</span>
            <span className="text-blue-400 font-medium">TypeScript</span>
            <span>+</span>
            <span className="text-cyan-400 font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}