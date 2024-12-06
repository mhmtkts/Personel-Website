/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { useSelector } from "react-redux";

const Skills = forwardRef((props, ref) => {
  const translations = useSelector((state) => state.mode.translations);

  return (
    <div ref={ref} id="skills" className="flex flex-col mt-8 md:mt-16 p-4 md:p-8">
      <h1 className="text-4xl md:text-5xl font-semibold text-[#1f2a36] dark:text-[#aebdce] mb-6 md:mb-8">
        {translations.skills}
      </h1>
      
      {/* Grid container for skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {/* JavaScript Skill */}
        <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-300">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#3e3ecf] dark:text-[#b8b4e5] mb-3">
            Java Script
          </h2>
          <p className="text-base md:text-lg text-[#777777] dark:text-[white] leading-relaxed">
            {translations.jsDesc}
          </p>
        </div>

        {/* React.Js Skill */}
        <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-300">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#3e3ecf] dark:text-[#b8b4e5] mb-3">
            React.Js
          </h2>
          <p className="text-base md:text-lg text-[#777777] dark:text-[white] leading-relaxed">
            {translations.reactDesc}
          </p>
        </div>

        {/* Java Skill */}
        <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-300">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#3e3ecf] dark:text-[#b8b4e5] mb-3">
            Java
          </h2>
          <p className="text-base md:text-lg text-[#777777] dark:text-[white] leading-relaxed">
            {translations.javaDesc}
          </p>
        </div>

        {/* Python Skill */}
        <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-300">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#3e3ecf] dark:text-[#b8b4e5] mb-3">
            Python
          </h2>
          <p className="text-base md:text-lg text-[#777777] dark:text-[white] leading-relaxed">
            {translations.pythonDesc}
          </p>
        </div>
      </div>

      {/* Bottom border */}
      <div className="border-b-2 border-[#3e3ecf] w-full mt-8 md:mt-12 dark:border-[#b8b4e5]"></div>
    </div>
  );
});

export default Skills;
