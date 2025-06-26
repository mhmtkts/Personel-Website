import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector } from 'react-redux';


const Project3 = () => {
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
            <div className="pt-40 pb-40 max-w-3xl w-11/12 m-auto">
                <h1 className="text-6xl uppercase tracking-[3px] text-center font-extrabold  pb-2">
                    {translations.productList}
                </h1>
                <div className="mt-8 max-w-7xl">
                    <p className="text-xl text-center w-full leading-[1.6]">
                        {translations.productListBannerDesc}
                    </p>
                </div>
                <div className="mt-14 text-center">
                    <button onClick={() => window.open('https://product-list-ten-mu.vercel.app/', '_blank')} className="py-4 px-16 text-xl bg-[#7843E9] text-white uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform duration-300">
                        {translations.liveLink}
                    </button>

                </div>
            </div>
        </section>
        <section>
            <div className="max-w-6xl w-11/12 m-auto">
                <div className="py-14 px-0 max-w-4xl m-auto ">
                    <div className="w-full mb-10">
                        <img src="/src/assets/Group-4.png" alt="Project 1" className="" />
                    </div>
                    <div className="w-full max-w-3xl m-auto">
                        <div className="mb-16">
                            <h2 className="font-bold text-3xl mb-6">
                                {translations.projectOverview}
                            </h2>
                            <p className={`text-lg leading-[1.7] mb-4 ${darkMode ? "text-white" : "text-neutral-600"}`}>
                                {translations.productListDesc1}
                            </p>
                            <p className={`text-lg leading-[1.7] mb-4 ${darkMode ? "text-white" : "text-neutral-600"}`}>
                                {translations.productListDesc2}
                            </p>
                            <p className={`text-lg leading-[1.7] mb-4 ${darkMode ? "text-white" : "text-neutral-600"}`}>
                                {translations.productListDesc3}
                            </p>
                        </div>
                        <div className="mb-16">
                            <h2 className="font-bold text-2xl mb-7">
                                {translations.tools}
                            </h2>
                            <div className="flex flex-wrap">
                                <div className={`px-5 py-2 mr-4 mb-4 text-base bg-[rgba(153,153,153,0.2)] rounded-[5px] font-semibold ${darkMode ? "text-white" : "text-[#666]"}`}>
                                    React
                                </div>
                                <div className={`px-5 py-2 mr-4 mb-4 text-base bg-[rgba(153,153,153,0.2)] rounded-[5px] font-semibold ${darkMode ? "text-white" : "text-[#666]"}`}>
                                    Redux
                                </div>
                                <div className={`px-5 py-2 mr-4 mb-4 text-base bg-[rgba(153,153,153,0.2)] rounded-[5px] font-semibold ${darkMode ? "text-white" : "text-[#666]"}`}>
                                    Tailwind CSS
                                </div>
                                <div className={`px-5 py-2 mr-4 mb-4 text-base bg-[rgba(153,153,153,0.2)] rounded-[5px] font-semibold ${darkMode ? "text-white" : "text-[#666]"}`}>
                                    JavaScript 
                                </div>
                                <div className={`px-5 py-2 mr-4 mb-4 text-base bg-[rgba(153,153,153,0.2)] rounded-[5px] font-semibold ${darkMode ? "text-white" : "text-[#666]"}`}>
                                    React Router
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-bold text-2xl mb-7">
                                {translations.live}
                            </h2>
                            <a className='py-4 px-12 mr-5 text-base bg-[#7843E9] text-white uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform duration-300' href="https://product-list-ten-mu.vercel.app/" target="_blank" rel="noopener noreferrer">
                                {translations.liveLink}
                            </a>
                            <a className={`text-base bg-white border-2 border-[#7843E9] shadow-none py-4 px-12 font-bold rounded-[5px] tracking-[1px] ${darkMode ? 'text-white bg-gray-800' : 'text-[#111] bg-white'}`} href="/">
                                {translations.goBack}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );
}

export default Project3;
