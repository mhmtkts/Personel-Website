import { useSelector} from 'react-redux';
import githubIcon from "../assets/github-ico.png";
import linkedinIcon from "../assets/linkedin-ico.png";
import linkedinDarkIcon from "../assets/linkedin-dark.svg";
import githubDarkIcon from "../assets/github-dark.svg";
import emailWhiteIcon from "../assets/gmail.png";
import emailIcon from "../assets/email-dark.png";


/* eslint-disable react/prop-types */
const Hero = ({projectsRef}) => {
    const translations = useSelector((state) => state.mode.translations);
    const darkMode = useSelector((state) => state.mode.darkMode);

    const scrollToProjects = () => {
        if (projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const backgroundStyle = {
        backgroundImage: darkMode 
            ? "linear-gradient(to right, rgba(17,24,39,0.85), rgba(17,24,39,0.85)), url('/common-bg.svg')"
            : "linear-gradient(to right, rgba(245,245,245,0.8), rgba(245,245,245,0.8)), url('/common-bg.svg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };


    return (
        <div className={`relative md:h-screen min-h-[40rem] max-h-[80rem]`} style={backgroundStyle}>
            <div className="max-sm:static max-sm:transform-none max-sm:py-24 max-sm:pb-24 max-sm:m-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-4xl w-[92%]">
                    <h1 className={`max-sm:text-[2rem] block text-[3.5rem] uppercase tracking-[3px] text-center ${darkMode ? "text-white" : "text-[#111]"} font-extrabold`}>{translations.name}</h1>
                    <div>
                        <p className={`max-sm:text-base block my-[1em] mx-0 [unicode-bidi:isolate] ${darkMode ? "text-white" : "text-[#333333]"} text-[1.3rem] text-center w-full leading-[1.6]`}>
                            {translations.journey}
                        </p>
                    </div>
                    <div className='mt-20 text-center'>
                    <button onClick={scrollToProjects} className='py-4 px-16 text-xl bg-[#7843E9] text-white uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-[3px]'>{translations.projects}</button>
                    </div>
            </div>
            <div className="hidden md:block absolute  top-1/2 transform -translate-y-1/2 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] p-2 ">
                <a className='w-[30px] h-[30px] mb-2 block  transition-colors duration-300 rounded-[5px] hover:bg-[rgba(120,67,233,0.2)]' href="https://github.com/mhmtkts">
                    <img  src={darkMode ? githubIcon : githubDarkIcon} alt="GitHub" />
                </a>
                <a className="w-[30px] h-[30px] mb-2 block  transition-colors duration-300 rounded-[5px] hover:bg-[rgba(120,67,233,0.2)]" href="https://www.linkedin.com/in/mahmutaktaş/">
                    <img  src={darkMode ? linkedinIcon : linkedinDarkIcon} alt="LinkedIn" />
                </a>
                <a className="w-[30px] h-[30px] block transition-colors duration-300 rounded-[5px] hover:bg-[rgba(120,67,233,0.2)]" href="mailto:mahmutaktas.m@gmail.com">
                    <img  src={darkMode ? emailWhiteIcon : emailIcon} alt="Email" />
                </a>
            </div>
            <div className='absolute bottom-[3%] left-1/2 transform -translate-x-1/2 text-center'>
                <div className={`hidden md:block w-[25px] h-[40px] border-2 ${darkMode ? 'border-gray-200' : 'border-gray-600'} rounded-full flex justify-center items-start pt-1`}>
                    <div className={`ml-2 w-1 h-2 ${darkMode ? 'bg-gray-200' : 'bg-gray-600'} rounded-full animate-scroll-wheel`}></div>
                </div>
            </div>
        </div>
    );
}

export default Hero;