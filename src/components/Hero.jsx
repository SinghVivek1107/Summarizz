import { logo } from "../assets";

function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="summarizz" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/SinghVivek1107/Summarizz")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Rizz  Articles with <br className="max-md:hiden" />
        <span className="orange_gradient">AI</span>
      </h1>
      <h2 className="desc">
        Summarizz is your go-to tool for turning lengthy articles into concise,
        easy-to-read summaries. Save time and get the key points quickly with
        our advanced algorithms, perfect for students, professionals, and avid
        readers.
      </h2>
    </header>
  );
}

export default Hero;
