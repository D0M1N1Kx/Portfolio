import { Github, Linkedin, Facebook } from 'react-bootstrap-icons';

export function Footer() {
  return (
    <>
      <footer className="bg-black pb-4 pt-4 border-t border-blue-600">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-evenly px-4 md:px-8">
          <div className="text-center">
            <h1 className="text-xl md:text-2xl font-bold text-blue-500">About Me</h1>
            <div className="mt-1 space-y-2">
              <span>📍 Subotica, Serbia</span><br/>
              <span>🎓 Electronics and Information Technology Technician</span><br/>
              <span>🏫 Ivan Saric Technicka Skola</span><br/>
              <span>💼 Full-Stack Developer</span><br/>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-xl md:text-2xl font-bold text-blue-500">Contact</h1>
            <div className="mt-1 space-y-2">
              <span className="break-all">✉️ milkovicsd32@gmail.com</span><br/>
              <span>📱 +381 69 123 8859</span><br/>
              <span>💬 dominik17_.</span><br/>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-xl md:text-2xl font-bold text-blue-500">Follow Me</h1>
            <div className="flex flex-row gap-4 justify-center mt-1">
              <a
                  href="https://github.com/D0M1N1Kx"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-blue-600/10 border border-blue-700 text-blue-500 rounded-full hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Github size={22} />
              </a>
              <a
                  href="https://www.linkedin.com/in/dominik-milkovics-ab0359341/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-blue-600/10 border border-blue-700 text-blue-500 rounded-full hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={22} />
              </a>
              <a
                  href="https://www.facebook.com/dominik.milkovics.2025/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-blue-600/10 border border-blue-700 text-blue-500 rounded-full hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Facebook size={22} />
              </a>
            </div>
            <br />
          </div>
        </div>
        <div className="h-0.5 bg-blue-800 mx-8 mb mt-10"></div>
        <br />
        <p className="text-gray-600 text-center">
          © 2025 Milkovics Dominik. Built with React + TypeScript{" "}
        </p>
      </footer>
    </>
  );
}
