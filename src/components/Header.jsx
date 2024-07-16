import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
const Header = ({ skillsRef, projectsRef }) => {
  const darkMode = useSelector((state) => state.mode.darkMode);
  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-between items-center p-4 text-white">
      <div className={`relative w-16 h-16 flex items-center justify-center  ${darkMode ? 'bg-[#4731d3]' : 'bg-[#edecfe]'} rounded-full`}>
        <span className={`absolute text-2xl transform rotate-45 font-semibold ${darkMode ? 'text-[#746afa]' : 'text-[#8f88ff]'}`}>
          M
        </span>
      </div>
      <nav className="flex items-center space-x-20">
        <span
          className="cursor-pointer text-[#777777] font-semibold text-lg"
          onClick={scrollToSkills}
        >
          Skills
        </span>
        <span
          className="cursor-pointer text-[#777777] font-semibold text-lg"
          onClick={scrollToProjects}
        >
          Projects
        </span>
        <button className="bg-white text-[#3138a0] border-[#3138a0]/75 border-2  text-lg font-semibold px-4 py-2 w-[8.5rem] h-[3.25rem] rounded">
          Hire Me
        </button>
      </nav>
    </div>
  );
};
export default Header;
