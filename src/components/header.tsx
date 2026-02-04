export function Header() {
  return (
    <header className="bg-black sticky text-white top-1 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://avatars.githubusercontent.com/u/98649184?s=400&v=4"
              alt="Profile"
              className="w-12 h-12 rounded-full border-0"
            />
            <div>
                <h1 className="text-xl font-bold">D0M1N1K_.</h1>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
