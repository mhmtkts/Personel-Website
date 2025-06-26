import profilePic from '../assets/profile.jpg';
import { NavLink,Link, useNavigate, useLocation  } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import { toggleDarkMode, setLanguage, setInitialState } from "../store/modeSlice";
import useLocalStorage from "../hooks/useLocalStorage";
import "../index.css";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

/* eslint-disable react/prop-types */
const Navbar = ({homeRef, aboutRef, projectsRef}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const translations = useSelector((state) => state.mode.translations);
  const darkMode = useSelector((state) => state.mode.darkMode);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.mode.language);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [storedDarkMode, setStoredDarkMode] = useLocalStorage("darkMode", false);
  const [storedLanguage, setStoredLanguage] = useLocalStorage("language", "en");

  const handleNavigation = (section) => {
    // Mobile menüyü kapat
    setIsMobileMenuOpen(false);
    
    if (location.pathname === '/') {
        let targetRef;
        if (section === 'home' && homeRef?.current) targetRef = homeRef;
        else if (section === 'about' && aboutRef?.current) targetRef = aboutRef;
        else if (section === 'projects' && projectsRef?.current) targetRef = projectsRef;

        if (targetRef) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
            return;
        }
    }
    
    navigate('/', { state: { scrollTo: section } });
  };

  const ThemeToggle = ({ darkMode, onToggle }) => (
    <button
      onClick={onToggle}
      className={`
        relative w-14 h-8 rounded-full p-1 transition-all duration-300 transform hover:scale-105
        ${darkMode 
          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-purple-500/25' 
          : 'bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg shadow-yellow-500/25'
        }
      `}
    >
      <div className={`
        w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center
        ${darkMode ? 'translate-x-6' : 'translate-x-0'}
      `}>
        {darkMode ? '🌙' : '☀️'}
      </div>
    </button>
  );

  const NavItem = ({ children, onClick, darkMode, mobile = false }) => (
    <motion.span 
      className={`cursor-pointer font-bold ${mobile ? 'text-lg py-4 block border-b border-gray-200 dark:border-gray-700' : 'text-sm'} relative group ${darkMode ? "text-gray-200" : "text-[#777777]"}`}
      onClick={onClick}
      whileHover={{ scale: mobile ? 1 : 1.05 }}
    >
      {children}
      {!mobile && <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${darkMode ? "bg-white" : "bg-[#3138a0]"} transition-all duration-300 group-hover:w-full`}></span>}
    </motion.span>
  );

  useEffect(() => {
    dispatch(setInitialState({ darkMode: storedDarkMode, language: storedLanguage }));
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setStoredDarkMode(darkMode);
  }, [darkMode]);

  useEffect(() => {
    setStoredLanguage(language);
  }, [language]);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const handleToggleLanguage = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    dispatch(setLanguage(newLanguage));
  };

  return (
    <>
      <nav className={`shadow-lg sticky top-0 z-50 ${darkMode ? "bg-[#252128]" : "bg-white"}`}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center group">
                <div className="relative overflow-hidden md:ml-6 rounded-lg p-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src={profilePic} 
                    alt="Mahmut Aktaş Logo" 
                    className="h-12 w-auto object-contain" 
                  />
                </div>
                <div className="ml-3">
                  <span className="text-base font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    MAHMUT AKTAŞ
                  </span>
                </div>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              <NavItem onClick={() => handleNavigation('home')} darkMode={darkMode}>
                {translations.home}
              </NavItem>
              <NavItem onClick={() => handleNavigation('about')} darkMode={darkMode}>
                {translations.about}
              </NavItem>
              <NavItem onClick={() => handleNavigation('projects')} darkMode={darkMode}>
                {translations.projects}
              </NavItem>
              <NavItem onClick={() => handleNavigation('contact')} darkMode={darkMode}>
                {translations.contact}
              </NavItem>

              <div className="flex items-center space-x-4 ml-4">
                <ThemeToggle darkMode={darkMode} onToggle={handleToggleDarkMode} />
                <span
                  className="text-[#777777] dark:text-gray-200 font-bold cursor-pointer hover:text-[#3e3ecf] transition-colors duration-200"
                  onClick={handleToggleLanguage}
                >
                  {language === "en" ? (
                    <span className="text-sm">
                      <span className="text-[#3e3ecf] dark:text-[#b8b4e5]">TÜRKÇE</span>
                      'YE GEÇ
                    </span>
                  ) : (
                    <span className="text-sm">
                      SWITCH TO{" "}
                      <span className="text-[#3e3ecf] dark:text-[#b8b4e5]">
                        ENGLISH
                      </span>
                    </span>
                  )}
                </span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} transition-colors duration-200`}
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-8 w-8" />
                ) : (
                  <Bars3Icon className="h-8 w-8" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu Sidebar */}
      <div className={`
        fixed top-0 right-0 h-full w-80 z-50 transform transition-transform duration-300 ease-in-out md:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        ${darkMode ? 'bg-[#252128]' : 'bg-white'}
        shadow-2xl
      `}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <img 
                src={profilePic} 
                alt="Mahmut Aktaş" 
                className="h-10 w-10 rounded-full object-cover" 
              />
              <div className="ml-3">
                <span className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  MAHMUT AKTAŞ
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className={`p-2 rounded-lg ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} transition-colors duration-200`}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 px-6 py-4">
            <div className="space-y-1">
              <NavItem onClick={() => handleNavigation('home')} darkMode={darkMode} mobile={true}>
                {translations.home}
              </NavItem>
              <NavItem onClick={() => handleNavigation('about')} darkMode={darkMode} mobile={true}>
                {translations.about}
              </NavItem>
              <NavItem onClick={() => handleNavigation('projects')} darkMode={darkMode} mobile={true}>
                {translations.projects}
              </NavItem>
              <NavItem onClick={() => window.location.href = 'mailto:mahmutaktas.m@gmail.com'} darkMode={darkMode} mobile={true}>
                {translations.contact}
              </NavItem>
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Theme
              </span>
              <ThemeToggle darkMode={darkMode} onToggle={handleToggleDarkMode} />
            </div>
            <button
              onClick={handleToggleLanguage}
              className={`w-full text-left py-2 px-3 rounded-lg font-medium transition-colors duration-200 ${
                darkMode 
                  ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {language === "en" ? "🇹🇷 Türkçe'ye Geç" : "🇺🇸 Switch to English"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;