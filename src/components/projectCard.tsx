type projectCardParameters = {
  title: string;
  description: string;
  img_path: string;
  link: string;
};

export function ProjectCard({title, description, img_path, link}: projectCardParameters)
{
  return (
      <>
        <div className="flex flex-col justify-between border-b-2 border-sky-700 w-full sm:w-86 min-h-[440px] m-1 bg-blue-600/15 rounded-lg mb-4 hover:border-b-4 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden">

          <div>
            <div className="w-full aspect-video overflow-hidden bg-black/20">
              <img
                  src={img_path}
                  className="rounded-t-lg w-full h-full object-cover"
              />
            </div>

            <div className="p-4">
              <h1 className="text-center font-bold text-2xl mb-2">{title}</h1>
              <p className="text-base text-gray-200 line-clamp-3">{description}</p>
            </div>
          </div>

          <div className="px-4 pb-4">
            <button
                className="w-full sm:w-auto rounded-2xl px-4 py-2 font-semibold bg-blue-600 text-white border-blue-700 hover:bg-blue-700/90 hover:scale-105 transition-all duration-300"
                onClick={() => {
                  window.open(link);
                }}
            >
              Source
            </button>
          </div>

        </div>
      </>
  );
}
