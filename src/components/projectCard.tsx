import { Github, BoxArrowUpRight } from "react-bootstrap-icons";

type ProjectCardParameters = {
  title: string;
  description: string;
  img_path: string;
  link?: string;
  source?: string;
  items: string[];
};

export function ProjectCard({
  title,
  description,
  img_path,
  link,
  source,
  items,
}: ProjectCardParameters) {
  return (
    <div className="group flex flex-col justify-between w-full h-full bg-slate-900/50 backdrop-blur-md border border-slate-800/80 hover:border-blue-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_-10px_rgba(37,99,235,0.25)] text-left">
      <div>
        {/* Thumbnail with overlay & hover zoom */}
        <div className="relative w-full aspect-video overflow-hidden bg-slate-950/80">
          <img
            src={img_path}
            alt={title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent pointer-events-none" />
        </div>

        {/* Info */}
        <div className="p-5 pb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-slate-300 mt-2 line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* Tech stack tags */}
          <ul className="flex flex-wrap gap-1.5 mt-4 list-none">
            {items.map((item, index) => (
              <li
                key={index}
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-blue-950/40 border border-blue-800/40 text-blue-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-5 pt-3 flex items-center gap-3">
        {source && (
          <button
            type="button"
            className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 text-xs sm:text-sm font-medium rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700/80 hover:border-slate-500 transition-all duration-200 focus:outline-none"
            onClick={() => window.open(source, "_blank", "noreferrer")}
          >
            <Github size={16} />
            <span>Source</span>
          </button>
        )}

        {link && (
          <button
            type="button"
            className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 text-xs sm:text-sm font-medium rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-600/20 hover:shadow-blue-500/35 transition-all duration-200 focus:outline-none"
            onClick={() => window.open(link, "_blank", "noreferrer")}
          >
            <BoxArrowUpRight size={14} />
            <span>Live Demo</span>
          </button>
        )}
      </div>
    </div>
  );
}
