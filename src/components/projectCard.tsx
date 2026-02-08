type projectCardParameters = {
  title: string;
  description: string;
  img_path: string;
  link: string;
};

export function ProjectCard({
  title,
  description,
  img_path,
  link,
}: projectCardParameters) {
  return (
    <>
      <div className="border-b-2 border-sky-700 w-86 h-fit bg-blue-600/15 rounded-lg mb-4 hover:border-b-4 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
        <img src={img_path} width={400} height={180} className="rounded-t-lg w-full"/>
        <h1 className="text-center font-bold text-2xl mt-1 mb-1">{title}</h1>
        <span className="font-bold text-base">{description}</span>
        <br></br>
        <button
          className="rounded-2xl px-4 py-2 mt-4 mb-3 font-semibold bg-blue-600 text-white border-blue-700 hover:bg-blue-700/90 hover:scale-105 transition-all duration-300"
          onClick={() => {
            window.open(link);
          }}
        >
          Source
        </button>
      </div>
    </>
  );
}
