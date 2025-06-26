/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { useSelector } from "react-redux";
import project1Img from "../assets/Group-1.png";
import project2Img from "../assets/Group-2.png";
import project3Img from "../assets/Group-3.png";
import project4Img from "../assets/Group-4.png"; 


const Projects = forwardRef((props, ref) => {
    const translations = useSelector((state) => state.mode.translations);
    const darkMode = useSelector((state) => state.mode.darkMode);

    return (
        <section id="projects" ref={ref} className='bg-white dark:bg-[#252128] py-28 max-md:py-12'>
            <div className='max-w-6xl w-11/12 m-auto'>
                <h2 className='mb-36 max-sm:mb-16 block text-xl my-[0.83em] font-bold '>
                    <span className='block text-4xl uppercase tracking-[3px] text-center mb-14 relative text-[#111111] dark:text-white'> 
                        {translations.projects}
                        <span className="absolute top-[calc(100%+1.5rem)] left-1/2 h-[5px] w-12 -translate-x-1/2 bg-[#7843e9] rounded-[5px] content-['']"></span>
                    </span>
                    <span className={`block text-center ${darkMode ? "text-white" : "text-[#555]"}  text-lg max-sm:text-base  font-normal max-w-3xl leading-relaxed m-auto`}>
                        {translations.projectsDetail1}
                    </span>
                </h2>
                <div>
                    <div className="grid grid-cols-[3fr_2fr] max-lg:grid-cols-1 max-lg:gap-4 max-lg:mb-16 max-lg:text-center gap-12 mb-28">
                        <div className="overflow-hidden">
                            <img className="w-full block object-cover" src={project1Img} alt="Software Screenshot" loading="lazy"/>
                        </div>
                        <div className="max-lg:items-center py-4 flex flex-col justify-center items-start">
                            <h3 className="font-bold text-2xl max-md:text-xl mb-5">
                                {translations.portfolyo}
                            </h3>
                            <p className={`text-base max-md:text-sm ${darkMode ? "text-white" : "text-neutral-600"} max-w-xl leading-[1.7] mb-7`}>
                                {translations.personalWebsite}
                            </p>
                            <a className='py-3 px-10 text-base bg-[#7843E9] text-white uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-[3px]' href="/project-1" target="_blank" rel="noopener noreferrer">
                                {translations.projectButton}
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-[3fr_2fr] max-lg:grid-cols-1 max-lg:gap-4 max-lg:mb-16 max-lg:text-center gap-12 mb-28">
                        <div className="overflow-hidden">
                            <img className="w-full block object-cover" src={project2Img} alt="Software Screenshot" loading="lazy"/>
                        </div>
                        <div className="max-lg:items-center py-4 flex flex-col justify-center items-start">
                            <h3 className="font-bold text-2xl max-md:text-xl mb-5">
                                {translations.exerciseGuide}
                            </h3>
                            <p className={`text-base max-md:text-sm ${darkMode ? "text-white" : "text-neutral-600"} max-w-xl leading-[1.7] mb-7`}>
                                {translations.exerciseDesc}
                            </p>
                            <a className='py-3 px-10 text-base bg-[#7843E9] text-white uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-[3px]' href="/project-2" target="_blank" rel="noopener noreferrer">
                                {translations.projectButton}
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-[3fr_2fr] max-lg:grid-cols-1 max-lg:gap-4 max-lg:mb-16 max-lg:text-center gap-12 mb-28">
                        <div className="overflow-hidden">
                            <img className="w-full block object-cover" src={project3Img} alt="Software Screenshot" loading="lazy"/>
                        </div>
                        <div className="max-lg:items-center py-4 flex flex-col justify-center items-start">
                            <h3 className="font-bold text-2xl max-md:text-xl mb-5">
                                {translations.budgetTracker}
                            </h3>
                            <p className={`text-base max-md:text-sm ${darkMode ? "text-white" : "text-neutral-600"} max-w-xl leading-[1.7] mb-7`}>
                                {translations.budgetTrackerDesc}
                            </p>
                            <a className='py-3 px-10 text-base bg-[#7843E9] text-white uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-[3px]' href="/project-3" target="_blank" rel="noopener noreferrer">
                                {translations.projectButton}
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-[3fr_2fr] max-lg:grid-cols-1 max-lg:gap-4 max-lg:mb-16 max-lg:text-center gap-12 mb-28">
                        <div className="overflow-hidden">
                            <img className="w-full block object-cover" src={project4Img} alt="Software Screenshot" loading="lazy"/>
                        </div>
                        <div className="max-lg:items-center py-4 flex flex-col justify-center items-start">
                            <h3 className="font-bold text-2xl max-md:text-xl mb-5">
                                {translations.productList}
                            </h3>
                            <p className={`text-base max-md:text-sm ${darkMode ? "text-white" : "text-neutral-600"} max-w-xl leading-[1.7] mb-7`}>
                                {translations.productListDesc}
                            </p>
                            <a className='py-3 px-10 text-base bg-[#7843E9] text-white uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-[3px]' href="/project-4" target="_blank" rel="noopener noreferrer">
                                {translations.projectButton}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Projects;