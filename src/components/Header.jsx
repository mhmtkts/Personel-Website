/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import "../index.css";
import useLocalStorage from "../hooks/useLocalStorage";

const Header = () => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", false);
  const [language, setLanguage] = useLocalStorage("language", "en");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en");
    document.documentElement.lang = language === "en" ? "tr" : "en";
  };

  return (
    <div className="fixed top-0 right-0 m-4">
      <div className="flex items-center space-x-4">
        <div
          className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${darkMode ? "bg-[#3a3a3a]" : "bg-[#3e3ecf]"}`}
          onClick={toggleDarkMode}
        >
          <div
            className={`bg-[#ffe578] w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${darkMode ? "" : "translate-x-6"}`}
          >
            {darkMode && <div className="hilal"></div>}
          </div>
        </div>
        <span className="text-[#777777] dark:text-gray-200 font-display font-semibold">
          {darkMode ? "LIGHT MODE |" : "DARK MODE  |"}
        </span>
        <span
          className="text-[#777777] dark:text-gray-200 font-display font-semibold cursor-pointer"
          onClick={toggleLanguage}
        >
          {language === "en" ? (
            <span>
              <span className="text-[#3e3ecf]  dark:text-[#b8b4e5]">
                TÜRKÇE
              </span>
              'YE GEÇ
            </span>
          ) : (
            <span>
              SWITCH TO{" "}
              <span className="text-[#3e3ecf]  dark:text-[#b8b4e5]">
                ENGLISH
              </span>
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
