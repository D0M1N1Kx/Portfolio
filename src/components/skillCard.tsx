export type SkillItem = {
  name: string;
  fluent?: boolean;
};

type SkillCardParameters = {
  title: string;
  badge?: string;
  isMain?: boolean;
  items: SkillItem[];
  filter?: "all" | "fluent" | "familiar";
  emptyMessage?: string;
};

export function SkillCard({
  title,
  badge,
  isMain = false,
  items,
  filter = "all",
  emptyMessage = "No technologies match this filter.",
}: SkillCardParameters) {
  const filteredItems = items.filter((item) => {
    if (filter === "fluent") return item.fluent;
    if (filter === "familiar") return !item.fluent;
    return true;
  });

  return (
    <div
      className={`h-full flex flex-col p-5 sm:p-6 rounded-2xl backdrop-blur-md transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_14px_32px_-10px_rgba(37,99,235,0.25)] text-left ${
        isMain
          ? "bg-gradient-to-b from-blue-950/40 via-slate-900/70 to-slate-900/80 border border-blue-500/50 shadow-[0_0_24px_-6px_rgba(37,99,235,0.25)]"
          : "bg-slate-900/50 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900/80"
      }`}
    >
      {/* Header with Title and Badge (never awkward line wrap) */}
      <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800/60 min-h-[38px]">
        <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-blue-400 transition-colors truncate">
          {title}
        </h3>
        {badge && (
          <span
            className={`shrink-0 whitespace-nowrap text-[11px] font-mono px-2.5 py-1 rounded-full font-medium leading-none ${
              isMain
                ? "bg-blue-500/20 text-cyan-300 border border-blue-500/40 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                : "bg-slate-800/80 text-slate-400 border border-slate-700/80"
            }`}
          >
            {badge}
          </span>
        )}
      </div>

      {filteredItems.length === 0 ? (
        <p className="text-xs text-slate-500 italic mt-2">{emptyMessage}</p>
      ) : (
        <ul className="flex flex-wrap gap-2 list-none">
          {filteredItems.map((item, index) => {
            const isFluent = item.fluent;
            return (
              <li
                key={index}
                className={`inline-flex items-center gap-1.5 text-xs sm:text-sm px-3 py-1.5 rounded-lg transition-all duration-200 cursor-default ${
                  isFluent
                    ? "bg-blue-950/70 border border-blue-500/45 text-blue-100 font-semibold shadow-[0_0_12px_rgba(59,130,246,0.18)] hover:border-blue-400 hover:text-white"
                    : "bg-slate-800/40 border border-slate-700/50 text-slate-400 hover:text-slate-200 hover:border-slate-600 font-normal"
                }`}
              >
                {isFluent && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.9)] shrink-0" />
                )}
                <span>{item.name}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}