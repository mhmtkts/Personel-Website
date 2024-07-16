/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode, setLanguage } from '../store/modeSlice';
import '../index.css';

const ModeSwitch = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.mode.darkMode);
  const language = useSelector((state) => state.mode.language);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const handleToggleLanguage = () => {
    const newLanguage = language === 'en' ? 'tr' : 'en';
    dispatch(setLanguage(newLanguage));
  };

  return (
    <div className="flex m-4 justify-end">
      <div className="flex items-center space-x-4">
        <div
          className={`w-12 h-5 flex items-center rounded-full p-1 cursor-pointer ${darkMode ? 'bg-[#3a3a3a]' : 'bg-[#3e3ecf]'}`}
          onClick={handleToggleDarkMode}
        >
          <div
            className={`bg-[#ffe578] w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${darkMode ? '' : 'translate-x-6'}`}
          >
            {darkMode && <div className="hilal"></div>}
          </div>
        </div>
        <span className="text-[#777777] dark:text-gray-200 font-display font-semibold">
          {darkMode ? 'LIGHT MODE |' : 'DARK MODE  |'}
        </span>
        <span
          className="text-[#777777] dark:text-gray-200 font-display font-semibold cursor-pointer"
          onClick={handleToggleLanguage}
        >
          {language === 'en' ? (
            <span className="text-[#777777]">
              <span className="text-[#3e3ecf] dark:text-[#b8b4e5]">TÜRKÇE</span> 'YE GEÇ
            </span>
          ) : (
            <span>
              SWITCH TO <span className="text-[#3e3ecf] dark:text-[#b8b4e5]">ENGLISH</span>
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

export default ModeSwitch;
