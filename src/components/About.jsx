/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import { useSelector } from 'react-redux';

const About = forwardRef(({ projectsRef }, ref) => {
    const translations = useSelector((state) => state.mode.translations);
    const darkMode = useSelector((state) => state.mode.darkMode);



    const scrollToProjects = () => {
        if (projectsRef && projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    
    return (
        <section id="about" ref={ref} className='bg-gray-50 dark:bg-[#252128] py-28 max-md:py-20'>
            <div className='max-w-6xl w-11/12 m-auto'>
                <h2 className='mb-24 max-sm:mb-20  block text-xl  font-bold '>
                    <span className='block text-4xl uppercase tracking-[3px] text-center mb-14 relative text-[#111111] dark:text-white'> 
                        {translations.aboutMe || "Hakkımda"}
                        <span className="absolute top-[calc(100%+1.5rem)] left-1/2 h-[5px] w-12 -translate-x-1/2 bg-[#7843e9] rounded-[5px] content-['']"></span>
                    </span>
                    <span className={`block text-center ${darkMode ? "text-white" : "text-[#555]"}  text-lg max-sm:text-base font-normal max-w-3xl leading-relaxed m-auto`}>
                        {translations.aboutMeDetails1 || "Hakkımda açıklaması"}
                    </span>

                </h2>
                <div className='grid grid-cols-2 max-lg:grid-cols-1 max-lg:gap-16 gap-24 '>
                    <div>
                        <h3 className={`font-bold text-2xl max-md:text-xl mb-7`}>
                            {translations.aboutMeGetDetails2}
                        </h3>
                        <div>
                            <p className={`text-base ${darkMode ? "text-white" : "text-neutral-600"} max-w-3xl leading-loose mb-4`}>
                                {translations.aboutMeGetDetailP1.part1}
                                <strong>{translations.aboutMeGetDetailP1.strongPart}</strong>
                                {translations.aboutMeGetDetailP1.part2}
                                <span 
                                    onClick={scrollToProjects}
                                    className="text-[#7843E9] cursor-pointer hover:underline"
                                >
                                    <strong>{translations.aboutMeGetDetailP1.linkText}</strong>
                                </span>
                                {translations.aboutMeGetDetailP1.part3}
                            </p>
                            <p className={`text-base ${darkMode ? "text-white" : "text-neutral-600"} max-w-3xl leading-loose mb-4`}>
                                {translations.aboutMeGetDetailP2.part1}
                                <a href='https://github.com/mhmtkts' className='text-[#7843E9] hover:underline'><strong>{translations.aboutMeGetDetailP2.linkText1}</strong></a>
                                {translations.aboutMeGetDetailP2.part2}
                                <a href='https://www.linkedin.com/in/mahmutaktaş' className='text-[#7843E9] hover:underline'><strong>{translations.aboutMeGetDetailP2.linkText2}</strong></a>
                                {translations.aboutMeGetDetailP2.part3}
                            </p>
                            <p className={`text-base ${darkMode ? "text-white" : "text-neutral-600"} max-w-3xl leading-loose mb-10`}>
                                {translations.aboutMeGetDetailP3.part1}
                                <strong>{translations.aboutMeGetDetailP3.strongPart}</strong>
                                {translations.aboutMeGetDetailP3.part2}
                            </p>
                        </div>
                        <a href="mailto:mahmutaktas.m@gmail.com" className='py-3 px-10 text-base bg-[#7843E9] text-white uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-[3px]'>{translations.contact}</a>
                    </div>
                    <div>
                        <h3 className='font-bold text-2xl max-md:text-xl mb-7'>
                            {translations.skills || "Yeteneklerim"}
                        </h3>
                        <div className='flex flex-wrap'>
                           <div className={`mb-4 mr-4 text-base font-semibold ${darkMode ? "text-white" : "text-neutral-600"} px-4 py-2 bg-[rgba(153,153,153,0.2)] rounded-[5px]`}>JavaScript</div> 
                           <div className={`mb-4 mr-4 text-base font-semibold ${darkMode ? "text-white" : "text-neutral-600"} px-4 py-2 bg-[rgba(153,153,153,0.2)] rounded-[5px]`}>React</div> 
                           <div className={`mb-4 mr-4 text-base font-semibold ${darkMode ? "text-white" : "text-neutral-600"} px-4 py-2 bg-[rgba(153,153,153,0.2)] rounded-[5px]`}>Node.js</div> 
                           <div className={`mb-4 mr-4 text-base font-semibold ${darkMode ? "text-white" : "text-neutral-600"} px-4 py-2 bg-[rgba(153,153,153,0.2)] rounded-[5px]`}>Python</div> 
                           <div className={`mb-4 mr-4 text-base font-semibold ${darkMode ? "text-white" : "text-neutral-600"} px-4 py-2 bg-[rgba(153,153,153,0.2)] rounded-[5px]`}>Java</div> 
                           <div className={`mb-4 mr-4 text-base font-semibold ${darkMode ? "text-white" : "text-neutral-600"} px-4 py-2 bg-[rgba(153,153,153,0.2)] rounded-[5px]`}>CSS</div> 
                           <div className={`mb-4 mr-4 text-base font-semibold ${darkMode ? "text-white" : "text-neutral-600"} px-4 py-2 bg-[rgba(153,153,153,0.2)] rounded-[5px]`}>HTML</div> 
                           <div className={`mb-4 mr-4 text-base font-semibold ${darkMode ? "text-white" : "text-neutral-600"} px-4 py-2 bg-[rgba(153,153,153,0.2)] rounded-[5px]`}>Redux</div> 
                           <div className={`mb-4 mr-4 text-base font-semibold ${darkMode ? "text-white" : "text-neutral-600"} px-4 py-2 bg-[rgba(153,153,153,0.2)] rounded-[5px]`}>Spring Boot</div> 
                           <div className={`mb-4 mr-4 text-base font-semibold ${darkMode ? "text-white" : "text-neutral-600"} px-4 py-2 bg-[rgba(153,153,153,0.2)] rounded-[5px]`}>PostgreSQL</div> 
                           <div className={`mb-4 mr-4 text-base font-semibold ${darkMode ? "text-white" : "text-neutral-600"} px-4 py-2 bg-[rgba(153,153,153,0.2)] rounded-[5px]`}>Responsive Design</div> 
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
});
export default About;