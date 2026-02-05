export function Body() {
  return (
    <>
      <div className="bg-black min-h-screen w-full">
        <div className="h-2 bg-gray-600 w-full mb-3"></div>
        <div className="flex flex-col items-center justify-center gap-2 mt-8">
          <img
            src="https://avatars.githubusercontent.com/u/98649184?s=400&v=4"
            alt="Profile"
            className="w-52 h-52 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.9)] hover:shadow-[0_0_45px_rgba(59,130,246,0.9)] transition-shadow duration-300"
          /><br></br>
          <div>
            <h1 className="text-4xl font-bold mt-4 text-center">Milkovics Dominik</h1>
          </div>
        </div>
      </div>
    </>
  );
}
