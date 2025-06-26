import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector } from 'react-redux';
import project2Img from "../assets/Group-2.png";


const Project2 = () => {
    const darkMode = useSelector((state) => state.mode.darkMode);
    const translations = useSelector((state) => state.mode.translations);

    const backgroundStyle = {
        backgroundImage: darkMode 
            ? "linear-gradient(to right, rgba(17,24,39,0.85), rgba(17,24,39,0.85)), url('/common-bg.svg')"
            : "linear-gradient(to right, rgba(245,245,245,0.8), rgba(245,245,245,0.8)), url('/common-bg.svg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <>
        <Navbar/>
        <section className="relative max-h-[120rem]" style={backgroundStyle}>
            <div className="max-sm:static max-sm:py-24 max-sm:translate-x-0 max-sm:translate-y-0 pt-40 pb-40 max-w-3xl w-11/12 m-auto">
                <h1 className="text-6xl max-sm:text-4xl uppercase tracking-[3px] text-center font-extrabold pb-2">
                    {translations.exerciseGuide}
                </h1>
                <div className="mt-8 max-w-7xl">
                    <p className={`${darkMode ? "text-white" : "text-[#333333]"} text-xl max-sm:text-lg text-center w-full leading-[1.6]`}>
                        {translations.exerciseWebsiteBannerDesc}
                    </p>
                </div>
                <div className="mt-14 text-center">
                    <button onClick={() => window.open('https://egzersiz-rehberi-uygulamasi.vercel.app/', '_blank')} className="py-4 px-16 text-xl bg-[#7843E9] text-white uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform duration-300">
                        {translations.liveLink}
                    </button>

                </div>
            </div>
        </section>
        <section>
            <div className="max-w-6xl w-11/12 m-auto">
                <div className="py-14 px-0 max-w-4xl m-auto ">
                    <div className="w-full mb-10">
                        <img src={project2Img} alt="Project 1" className="" />
                    </div>
                    <div className="w-full max-w-3xl m-auto">
                        <div className="mb-16">
                            <h2 className="font-bold text-3xl max-sm:text-xl mb-6">
                                {translations.projectOverview}
                            </h2>
                            <p className={`text-lg max-sm:text-base leading-[1.7] mb-4 ${darkMode ? "text-white" : "text-neutral-600"}`}>
                                {translations.exerciseWebsiteDesc1}
                            </p>
                            <p className={`text-lg max-sm:text-base leading-[1.7] mb-4 ${darkMode ? "text-white" : "text-neutral-600"}`}>
                                {translations.exerciseWebsiteDesc2}
                            </p>
                            <p className={`text-lg max-sm:text-base leading-[1.7] mb-4 ${darkMode ? "text-white" : "text-neutral-600"}`}>
                                {translations.exerciseWebsiteDesc3}
                            </p>
                        </div>
                        <div className="mb-16">
                            <h2 className="font-bold text-2xl max-sm:text-xl mb-7">
                                {translations.tools}
                            </h2>
                            <div className="flex flex-wrap">
                                <div className={`px-5 py-2 mr-4 mb-4 text-base bg-[rgba(153,153,153,0.2)] rounded-[5px] font-semibold ${darkMode ? "text-white" : "text-[#666]"}`}>
                                    React
                                </div>
                                <div className={`px-5 py-2 mr-4 mb-4 text-base bg-[rgba(153,153,153,0.2)] rounded-[5px] font-semibold ${darkMode ? "text-white" : "text-[#666]"}`}>
                                    TypeScript
                                </div>
                                <div className={`px-5 py-2 mr-4 mb-4 text-base bg-[rgba(153,153,153,0.2)] rounded-[5px] font-semibold ${darkMode ? "text-white" : "text-[#666]"}`}>
                                    Tailwind CSS
                                </div>
                                <div className={`px-5 py-2 mr-4 mb-4 text-base bg-[rgba(153,153,153,0.2)] rounded-[5px] font-semibold ${darkMode ? "text-white" : "text-[#666]"}`}>
                                    Axios
                                </div>
                                <div className={`px-5 py-2 mr-4 mb-4 text-base bg-[rgba(153,153,153,0.2)] rounded-[5px] font-semibold ${darkMode ? "text-white" : "text-[#666]"}`}>
                                    React Query
                                </div>
                                <div className={`px-5 py-2 mr-4 mb-4 text-base bg-[rgba(153,153,153,0.2)] rounded-[5px] font-semibold ${darkMode ? "text-white" : "text-[#666]"}`}>
                                    Formik
                                </div>
                                <div className={`px-5 py-2 mr-4 mb-4 text-base bg-[rgba(153,153,153,0.2)] rounded-[5px] font-semibold ${darkMode ? "text-white" : "text-[#666]"}`}>
                                    Yup
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-bold text-2xl max-sm:text-xl mb-7">
                                {translations.live}
                            </h2>
                            <div className="max-sm:flex max-sm:flex-col max-sm:space-y-4">
                                <a className='max-sm:w-2/3 py-4 px-12 mr-5 max-sm:mr-0 text-base bg-[#7843E9] text-white uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-[3px] text-center' href="https://egzersiz-rehberi-uygulamasi.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    {translations.liveLink}
                                </a>
                                <a className={`max-sm:w-2/3 text-base border-2 border-[#7843E9] shadow-none py-4 px-12 font-bold rounded-[5px] tracking-[1px] ${darkMode ? 'text-white bg-gray-800' : 'text-[#111] bg-white'} transition-transform duration-300 hover:-translate-y-[3px] text-center inline-block`} href="/">
                                    {translations.goBack}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );
}

export default Project2;
