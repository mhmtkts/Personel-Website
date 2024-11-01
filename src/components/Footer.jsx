import { useSelector } from "react-redux";

const Footer = () => {
  const translations = useSelector((state) => state.mode.translations);
  
  return (
    <div className="bg-[#f9f9f9] dark:bg-black w-full px-4 py-12 md:pt-20 md:pb-28">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-5xl font-semibold text-[#1f2a36] dark:text-[#aebdce] text-center md:text-left mb-4 md:mr-40 md:ml-36">
          {translations.footerText1}
        </h1>
        <h1 className="text-2xl md:text-5xl font-semibold text-[#1f2a36] dark:text-[#aebdce] text-center md:text-left mb-12 md:mr-40 md:ml-36">
          {translations.footerText2}
        </h1>
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:mt-16 md:ml-36 md:mr-48">
          {/* Email */}
          <a
            href="mailto:mahmutaktas.m@gmail.com"
            className="text-[#af0c48] dark:text-[#b8b4e5] font-semibold flex items-center no-underline"
          >
            <span className="mr-2 no-underline">👉</span>{" "}
            <span className="underline text-sm md:text-base">mahmutaktas.m@gmail.com</span>
          </a>
          
          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://github.com/mhmtkts"
              className="text-[#00ab6b] dark:text-[#17d18b] font-semibold text-sm md:text-base"
            >
              Github
            </a>
            <a
              href="https://linkedin.com/in/mahmutaktaş"
              className="text-[#0077b5] dark:text-[#0ba6f6] font-semibold text-sm md:text-base"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;