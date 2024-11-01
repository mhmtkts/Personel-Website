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
      <div className="w-full md:w-1/2 space-y-6 mb-8 md:mb-0">
        <div className="flex items-center space-x-4">
          <div className="border-b-2 border-[#3e3ecf] w-20 dark:border-[#b8b4e5]"></div>
          <h2 className="text-[#3e3ecf] dark:text-[#b8b4e5] text-lg">
            {translations.name}
          </h2>
        </div>
        <div className="space-y-2">
          <h1 className="text-7xl font-bold text-[#1f2a36] dark:text-[#aebdce]">
            {translations.creativeThinker}
          </h1>
          <h1 className="text-7xl font-bold text-[#1f2a36] dark:text-[#aebdce]">
            {translations.minimalismLover}
          </h1>
        </div>
        <p className="text-lg  text-[#777777] dark:text-[white]  ">
          {translations.intro}
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button
            onClick={handleHireMeClick}
            className={`w-full md:w-32 bg-[#3138a0] dark:bg-[#e0e2fe] text-[white] dark:text-[black]  ${darkMode ? "border-transparent" : "border-[#3138a0]"} w-32 border-2 text-lg font-semibold  px-4 py-3 rounded-md`}
          >
            {translations.hireMe}
          </button>
          <button
            onClick={handleGithubClick}
            className={`w-full md:w-32 flex items-center justify-center bg-white dark:bg-[#383838] ${darkMode ? "text-[#e0e2fe]" : "text-[#3138a0]"}  ${darkMode ? "border-[#b8b4e5]" : "border-[#3138a0]"} border-2 text-lg font-semibold px-4 w-32 rounded-md`}
          >
            <FaGithub size={24} className="mr-2" /> {translations.github}
          </button>
          <button
            onClick={handleLinkedinClick}
            className={`w-full md:w-36 flex items-center justify-center bg-white dark:bg-[#383838] ${darkMode ? "text-[#e0e2fe]" : "text-[#3138a0]"}  ${darkMode ? "border-[#b8b4e5]" : "border-[#3138a0]"} border-2 text-lg font-semibold px-4 w-36 rounded-md`}
          >
            <FaLinkedin size={24} className="mr-2 " /> {translations.linkedin}
          </button>
        </div>
      </div>
      <div className="w-full md:w-[42%] h-64 md:h-96 overflow-hidden rounded-xl shadow-lg">
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
