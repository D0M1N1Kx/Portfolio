import { SocialCard } from "./socialCard";

export function Footer() {
  return (
    <>
      <footer className="bg-black pb-4 pt-4 border-t border-blue-600">
        <div className="flex gap-12 justify-evenly px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-blue-500">About Me</h1>
            <br />
            <span>📍 Subotica, Serbia</span>
            <br />
            <span>🎓 Electronics and Information Technology Technician</span>
            <br />
            <span>🏫 Ivan Saric Technicka Skola</span>
            <br />
            <span>💼 Full-Stack Developer</span>
            <br />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-blue-500">Contact</h1>
            <br />
            <span>✉️ milkovicd32@gmail.com</span>
            <br />
            <span>📱 +381 69 123 8859</span>
            <br />
            <span>💬 dominik17_.</span>
            <br />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-blue-500">Follow Me</h1>
            <br />
            <div className="flex flex-row gap-2">
              <SocialCard
                img_path="src/assets/github-sign.png"
                link="https://github.com/D0M1N1Kx"
              />
              <br />
              <SocialCard
                img_path="src/assets/linkedin.png"
                link="https://www.linkedin.com/in/dominik-milkovics-ab0359341/"
              />
              <br />
              <SocialCard
                img_path="src/assets/facebook.png"
                link="https://www.facebook.com/dominik.milkovics.2025/"
              />
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
