import { useSelector } from "react-redux";

const Footer = () => {
  const translations = useSelector((state) => state.mode.translations);
  return (
    <div className="bg-[#f9f9f9] dark:bg-black w-full h-full pt-20 pb-28">
      <h1 className="text-5xl font-semibold text-[#1f2a36] dark:text-[#aebdce] mr-40 ml-36">
        {translations.footerText1}
      </h1>
      <h1 className="text-5xl font-semibold text-[#1f2a36] dark:text-[#aebdce] mr-40 ml-36">
        {translations.footerText2}
      </h1>
      <div className="flex justify-between items-center mt-16 ml-36 mr-48">
        <a
          href="mailto:mahmutaktas.m@gmail.com"
          className="text-[#af0c48] dark:text-[#b8b4e5] font-semibold flex items-center no-underline"
        >
          <span className="mr-2 no-underline">👉</span>{" "}
          <span className="underline">mahmutaktas.m@gmail.com</span>
        </a>
        <div>
          <a
            href="https://github.com/mhmtkts"
            className="text-[#00ab6b] dark:text-[#17d18b] font-semibold mr-4"
          >
            Github
          </a>
          <a
            href="https://linkedin.com/in/mahmutaktaş"
            className="text-[#0077b5] dark:text-[#0ba6f6] font-semibold"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
