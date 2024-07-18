/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { useSelector } from "react-redux";

const Skills = forwardRef((props, ref) => {
  const translations = useSelector((state) => state.mode.translations);

  return (
    <div ref={ref} id="skills" className="flex flex-col  mt-16 p-8">
      <h1 className="text-5xl font-semibold text-[#1f2a36] dark:text-[#aebdce] mb-8">
        {translations.skills}
      </h1>
      <div className="flex space-x-16">
        <div>
          <h2 className="text-3xl font-semibold text-[#3e3ecf] dark:text-[#b8b4e5] mb-4">
            Java Script
          </h2>
          <p className="text-[#777777] dark:text-[white]">
            {translations.jsDesc}
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-[#3e3ecf] dark:text-[#b8b4e5] mb-4">
            React.Js
          </h2>
          <p className="text-[#777777] dark:text-[white]">
            {translations.reactDesc}
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-[#3e3ecf] dark:text-[#b8b4e5] mb-4">
            Node.Js
          </h2>
          <p className="text-[#777777] dark:text-[white]">
            {translations.nodeDesc}
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-[#3e3ecf] dark:text-[#b8b4e5] mb-4">
            Python
          </h2>
          <p className="text-[#777777] dark:text-[white]  ">
            {translations.pythonDesc}
          </p>
        </div>
      </div>
      <div className="border-b-2 border-[#3e3ecf] w-full mt-12 dark:border-[#b8b4e5]"></div>
    </div>
  );
});

export default Skills;
