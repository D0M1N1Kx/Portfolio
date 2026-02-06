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
      <div className="border-b-2 border-sky-700 w-86 h-fit bg-blue-600/15 rounded-lg mb-4">
        <img src={img_path} width={400} height={180} />
        <h1 className="text-center font-bold text-2xl mt-1 mb-1">{title}</h1>
        <span className="font-bold text-base">{description}</span>
        <br></br>
        <button
          className="border rounded-lg bg-blue-500 border-blue-600 px-1 py-1 mt-4 mb-3"
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
