import { useSelector } from "react-redux";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const darkMode = useSelector((state) => state.mode.darkMode);
  const translations = useSelector((state) => state.mode.translations);
  const handleHireMeClick = () => {
    window.location.href = "mailto:mahmutaktas.m@gmail.com";
  };
  const handleGithubClick = () => {
    window.location.href = "https://github.com/mhmtkts";
  };

  const handleLinkedinClick = () => {
    window.location.href = "https://www.linkedin.com/in/mahmutaktaş/";
  };
  return (
    <div className="flex flex-col md:flex-row justify-between items-start mt-8 md:mt-16 p-4 md:p-8">
      <div className="w-full md:w-1/2 space-y-4 md:space-y-6 mb-8 md:mb-0">
        <div className="flex items-center space-x-4">
          <div className="border-b-2 border-[#3e3ecf] w-16 md:w-20 dark:border-[#b8b4e5]"></div>
          <h2 className="text-[#3e3ecf] dark:text-[#b8b4e5] text-base md:text-lg">
            {translations.name}
          </h2>
        </div>
        <div className="space-y-1 md:space-y-2">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#1f2a36] dark:text-[#aebdce] leading-tight">
            {translations.creativeThinker}
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#1f2a36] dark:text-[#aebdce] leading-tight">
            {translations.minimalismLover}
          </h1>
        </div>
        <p className="text-base md:text-lg text-[#777777] dark:text-[white] max-w-xl">
          {translations.intro}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 md:mt-6">
          <button
            onClick={handleHireMeClick}
            className={`w-full sm:w-auto bg-[#3138a0] dark:bg-[#e0e2fe] text-white dark:text-black 
              ${darkMode ? "border-transparent" : "border-[#3138a0]"} 
              border-2 text-base md:text-lg font-semibold px-4 py-2.5 md:py-3 rounded-md
              min-w-[128px] hover:opacity-90 transition-opacity`}
          >
            {translations.hireMe}
          </button>
          <button
            onClick={handleGithubClick}
            className={`w-full sm:w-auto flex items-center justify-center bg-white dark:bg-[#383838] 
              ${darkMode ? "text-[#e0e2fe]" : "text-[#3138a0]"}  
              ${darkMode ? "border-[#b8b4e5]" : "border-[#3138a0]"} 
              border-2 text-base md:text-lg font-semibold px-4 py-2.5 md:py-3 rounded-md
              min-w-[128px] hover:opacity-90 transition-opacity`}
          >
            <FaGithub size={20} className="mr-2" /> {translations.github}
          </button>
          <button
            onClick={handleLinkedinClick}
            className={`w-full sm:w-auto flex items-center justify-center bg-white dark:bg-[#383838] 
              ${darkMode ? "text-[#e0e2fe]" : "text-[#3138a0]"}  
              ${darkMode ? "border-[#b8b4e5]" : "border-[#3138a0]"} 
              border-2 text-base md:text-lg font-semibold px-4 py-2.5 md:py-3 rounded-md
              min-w-[144px] hover:opacity-90 transition-opacity`}
          >
            <FaLinkedin size={20} className="mr-2" /> {translations.linkedin}
          </button>
        </div>
      </div>
      <div className="w-full md:w-[42%] h-56 sm:h-64 md:h-96 overflow-hidden rounded-xl shadow-lg">
        <img
          src="https://i.pinimg.com/originals/ee/fe/0e/eefe0e32d21b59933e319ba01ba78554.jpg"
          alt={translations.name}
          className="object-cover object-bottom w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
