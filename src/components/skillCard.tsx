type SkillCardParameters = {
  title: string;
  items: string[];
};

export function SkillCard({ title, items }: SkillCardParameters) {
  return (
    <>
      <div className="border-2 border-sky-700 w-86 h-40 bg-blue-600/15 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
        <h3 className="text-center font-bold text-blue-500 text-2xl">
          {title}
        </h3>
        <ul className="flex flex-wrap justify-center gap-3 mt-3">
          {items.map((item, index) => (
            <li
              key={index}
              className="border border-blue-700 text-blue-500 rounded-lg px-3 py-1 bg-blue-600/10"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
