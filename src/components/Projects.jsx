/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { useSelector } from "react-redux";

const Projects = forwardRef((props, ref) => {
  const darkMode = useSelector((state) => state.mode.darkMode);
  const translations = useSelector((state) => state.mode.translations);

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleLink = (url, event) => {
    // Check if middle mouse button (which is button 1) or left click
    if (event.button === 0 || event.button === 1) {
      event.preventDefault(); // Prevent default behavior
      openLink(url);
    }
  };

  return (
    <div ref={ref} id="projects" className="flex flex-col p-8 mb-20">
      <h1 className="text-5xl font-semibold text-[#1f2a36] dark:text-[#aebdce] mb-8">
        {translations.projects}
      </h1>
      <div className="flex flex-wrap justify-evenly gap-8">
        <div className="w-80">
          <img
            src="https://i.imgur.com/CPcKpHr.png"
            className=" h-64 overflow-hidden rounded-xl shadow-lg object-cover "
          />
          <h2 className="text-2xl font-semibold text-[#3e3ecf] dark:text-[#b8b4e5] mb-2 mt-4">
            Challenge Pizza
          </h2>
          <p className="text-[#777777] dark:text-[white] text-lg">
            {translations.challengePizza}
          </p>
          <div className="flex mb-4 justify-start">
            <span className={`flex mt-5 mr-4 justify-center bg-white dark:bg-[#383838] ${darkMode ? "text-[#8f88ff]" : "text-[#3138a0]"}  ${darkMode ? "border-[#8f88ff]" : "border-[#3138a0]"} border-2 text-lg font-semibold px-4 w-20 rounded-md`}>
              react
            </span>
            <span className={`flex mt-5 mr-4  justify-center bg-white dark:bg-[#383838] ${darkMode ? "text-[#8f88ff]" : "text-[#3138a0]"}  ${darkMode ? "border-[#8f88ff]" : "border-[#3138a0]"} border-2 text-lg font-semibold px-4 w-20 rounded-md`}>
              js
            </span>
            <span className={`flex mt-5  justify-center bg-white dark:bg-[#383838] ${darkMode ? "text-[#8f88ff]" : "text-[#3138a0]"}  ${darkMode ? "border-[#8f88ff]" : "border-[#3138a0]"} border-2 text-lg font-semibold px-4 w-20 rounded-md`}>
              axios
            </span>
          </div>
          <div className="flex justify-between ">
            <span 
              className={`${darkMode ? "text-[#e0e2fe]" : "text-[#3138a0]"} font-semibold text-lg underline  underline-offset-4 cursor-pointer`} 
              onMouseDown={(e) => handleLink("https://github.com/mhmtkts/challenge-pizza", e)}
            >
              Github
            </span>
            <span 
              className={`${darkMode ? "text-[#e0e2fe]" : "text-[#3138a0]"} font-semibold text-lg underline  underline-offset-4 cursor-pointer`} 
              onMouseDown={(e) => handleLink("https://challenge-pizza-five.vercel.app/", e)}
            >
              View Site
            </span>
          </div>
        </div>

        <div className="w-80">
          <img
            src="https://i.imgur.com/kyKGUd7.png"
            className=" h-64 overflow-hidden rounded-xl shadow-lg object-cover "
          />
          <h2 className="text-2xl font-semibold text-[#3e3ecf] dark:text-[#b8b4e5] mb-2 mt-4">
            Netflix Mockup
          </h2>
          <p className="text-[#777777] dark:text-[white] text-lg">
            {translations.netflixMockup}
          </p>
          <div className="flex mb-4 justify-start">
            <span className={`flex mt-5 mr-4 justify-center bg-white dark:bg-[#383838] ${darkMode ? "text-[#8f88ff]" : "text-[#3138a0]"}  ${darkMode ? "border-[#8f88ff]" : "border-[#3138a0]"} border-2 text-lg font-semibold px-4 w-20 rounded-md`}>
              react
            </span>
            <span className={`flex mt-5 mr-4  justify-center bg-white dark:bg-[#383838] ${darkMode ? "text-[#8f88ff]" : "text-[#3138a0]"}  ${darkMode ? "border-[#8f88ff]" : "border-[#3138a0]"} border-2 text-lg font-semibold px-4 w-20 rounded-md`}>
              js
            </span>
            <span className={`flex mt-5  justify-center bg-white dark:bg-[#383838] ${darkMode ? "text-[#8f88ff]" : "text-[#3138a0]"}  ${darkMode ? "border-[#8f88ff]" : "border-[#3138a0]"} border-2 text-lg font-semibold px-4 w-20 rounded-md`}>
              cypress
            </span>
          </div>
          <div className="flex justify-between ">
            <span 
              className={`${darkMode ? "text-[#e0e2fe]" : "text-[#3138a0]"} font-semibold text-lg underline  underline-offset-4 cursor-pointer`} 
              onMouseDown={(e) => handleLink("https://github.com/mhmtkts/netflix-mockup", e)}
            >
              Github
            </span>
            <span 
              className={`${darkMode ? "text-[#e0e2fe]" : "text-[#3138a0]"} font-semibold text-lg underline  underline-offset-4 cursor-pointer`} 
              onMouseDown={(e) => handleLink("https://netflix-mockup-chi.vercel.app/", e)}
            >
              View Site
            </span>
          </div>
        </div>

        <div className="w-80">
          <img
            src="https://i.imgur.com/C4CiPFg.png"
            className=" h-64 overflow-hidden rounded-xl shadow-lg object-cover "
          />
          <h2 className="text-2xl font-semibold text-[#3e3ecf] dark:text-[#b8b4e5] mb-2 mt-4">
            Personel Website
          </h2>
          <p className="text-[#777777] dark:text-[white] text-lg">
            {translations.personalWebsite}
          </p>
          <div className="flex mb-4 justify-start">
            <span className={`flex mt-5 mr-4 justify-center bg-white dark:bg-[#383838] ${darkMode ? "text-[#8f88ff]" : "text-[#3138a0]"}  ${darkMode ? "border-[#8f88ff]" : "border-[#3138a0]"} border-2 text-lg font-semibold px-4 w-20 rounded-md`}>
              react
            </span>
            <span className={`flex mt-5 mr-4  justify-center bg-white dark:bg-[#383838] ${darkMode ? "text-[#8f88ff]" : "text-[#3138a0]"}  ${darkMode ? "border-[#8f88ff]" : "border-[#3138a0]"} border-2 text-lg font-semibold px-4 w-20 rounded-md`}>
              js
            </span>
            <span className={`flex mt-5  justify-center bg-white dark:bg-[#383838] ${darkMode ? "text-[#8f88ff]" : "text-[#3138a0]"}  ${darkMode ? "border-[#8f88ff]" : "border-[#3138a0]"} border-2 text-lg font-semibold px-4 w-20 rounded-md`}>
              tailwind
            </span>
          </div>
          <div className="flex justify-between ">
            <span 
              className={`${darkMode ? "text-[#e0e2fe]" : "text-[#3138a0]"} font-semibold text-lg underline  underline-offset-4 cursor-pointer`} 
              onMouseDown={(e) => handleLink("https://github.com/mhmtkts/Personel-Website", e)}
            >
              Github
            </span>
            <span 
              className={`${darkMode ? "text-[#e0e2fe]" : "text-[#3138a0]"} font-semibold text-lg underline  underline-offset-4 cursor-pointer`} 
              onMouseDown={(e) => handleLink("https://aktas.me", e)}
            >
              View Site
            </span>
          </div>
        </div>

        <div className="w-80">
          <img
            src="https://imgur.com/yA5YmZU.png"
            className=" h-64 overflow-hidden rounded-xl shadow-lg object-cover "
          />
          <h2 className="text-2xl font-semibold text-[#3e3ecf] dark:text-[#b8b4e5] mb-2 mt-4">
            Product List
          </h2>
          <p className="text-[#777777] dark:text-[white] text-lg">
            {translations.productList}
          </p>
          <div className="flex mb-4 justify-start">
            <span className={`flex mt-5 mr-4 justify-center bg-white dark:bg-[#383838] ${darkMode ? "text-[#8f88ff]" : "text-[#3138a0]"}  ${darkMode ? "border-[#8f88ff]" : "border-[#3138a0]"} border-2 text-lg font-semibold px-4 w-20 rounded-md`}>
              react
            </span>
            <span className={`flex mt-5 mr-4  justify-center bg-white dark:bg-[#383838] ${darkMode ? "text-[#8f88ff]" : "text-[#3138a0]"}  ${darkMode ? "border-[#8f88ff]" : "border-[#3138a0]"} border-2 text-lg font-semibold px-4 w-20 rounded-md`}>
              redux
            </span>
            <span className={`flex mt-5  justify-center bg-white dark:bg-[#383838] ${darkMode ? "text-[#8f88ff]" : "text-[#3138a0]"}  ${darkMode ? "border-[#8f88ff]" : "border-[#3138a0]"} border-2 text-lg font-semibold px-4 w-20 rounded-md`}>
              tailwind
            </span>
          </div>
          <div className="flex justify-between ">
            <span 
              className={`${darkMode ? "text-[#e0e2fe]" : "text-[#3138a0]"} font-semibold text-lg underline  underline-offset-4 cursor-pointer`} 
              onMouseDown={(e) => handleLink("https://github.com/mhmtkts/product-list", e)}
            >
              Github
            </span>
            <span 
              className={`${darkMode ? "text-[#e0e2fe]" : "text-[#3138a0]"} font-semibold text-lg underline  underline-offset-4 cursor-pointer`} 
              onMouseDown={(e) => handleLink("https://product-list-ten-mu.vercel.app/", e)}
            >
              View Site
            </span>
          </div>
        </div>

        <div className="w-80">
          <img
            src="https://imgur.com/rV2MzzI.png"
            className="h-64 overflow-hidden rounded-xl shadow-lg object-cover"
          />
          <h2 className="text-2xl font-semibold text-[#3e3ecf] dark:text-[#b8b4e5] mb-2 mt-4">
            Budget Tracker
          </h2>
          <p className="text-[#777777] dark:text-[white] text-lg">
            {translations.budgetTracker}
          </p>
          <div className="flex mb-4 justify-start">
            <span className={`flex mt-5 mr-4 justify-center bg-white dark:bg-[#383838] ${darkMode ? "text-[#8f88ff]" : "text-[#3138a0]"}  ${darkMode ? "border-[#8f88ff]" : "border-[#3138a0]"} border-2 text-lg font-semibold px-4 w-20 rounded-md`}>
              react
            </span>
            <span className={`flex mt-5 mr-4  justify-center bg-white dark:bg-[#383838] ${darkMode ? "text-[#8f88ff]" : "text-[#3138a0]"}  ${darkMode ? "border-[#8f88ff]" : "border-[#3138a0]"} border-2 text-lg font-semibold px-4 w-20 rounded-md`}>
              redux
            </span>
            <span className={`flex mt-5  justify-center bg-white dark:bg-[#383838] ${darkMode ? "text-[#8f88ff]" : "text-[#3138a0]"}  ${darkMode ? "border-[#8f88ff]" : "border-[#3138a0]"} border-2 text-lg font-semibold px-4 w-20 rounded-md`}>
              tailwind
            </span>
          </div>
          <div className="flex justify-between">
            <span 
              className={`${darkMode ? "text-[#e0e2fe]" : "text-[#3138a0]"} font-semibold text-lg underline  underline-offset-4 cursor-pointer`} 
              onMouseDown={(e) => handleLink("https://github.com/mhmtkts/budget-tracker", e)}
            >
              Github
            </span>
            <span 
              className={`${darkMode ? "text-[#e0e2fe]" : "text-[#3138a0]"} font-semibold text-lg underline  underline-offset-4 cursor-pointer`} 
              onMouseDown={(e) => handleLink("https://budget-tracker-phi-seven.vercel.app/", e)}
            >
              View Site
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Projects;