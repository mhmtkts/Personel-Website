import { useSelector } from 'react-redux';
import githubIcon from "../assets/github-ico.png";
import linkedinIcon from "../assets/linkedin-ico.png";
import linkedinDarkIcon from "../assets/linkedin-dark.svg";
import githubDarkIcon from "../assets/github-dark.svg";
import emailWhiteIcon from "../assets/gmail.png";
import emailIcon from "../assets/email-dark.png";


const Footer = () => {
    const translations = useSelector((state) => state.mode.translations);
    const darkMode = useSelector((state) => state.mode.darkMode);
    return (
        <footer className={`${darkMode ? "bg-black" : "bg-gray-100"}`}>
        <div className="max-w-6xl w-11/12 m-auto">
            <div className='flex max-sm:block max-sm:py-14 justify-between py-20'>
                <div className='order-2 max-lg:mb-11'>
                    <h2 className='text-xl font-bold uppercase tracking-[1px]'>
                        <span>{translations.footerSocial}</span>
                    </h2>
                    <div className='mt-4 flex flex-wrap'>
                    <a className='text-inherit no-underline' href="https://github.com/mhmtkts">
                        <img className='mr-2 w-6 overflow-clip [overflow-clip-margin:content-box]' src={darkMode ? githubIcon : githubDarkIcon} alt="GitHub" />
                    </a>
                    <a className='text-inherit no-underline' href="https://www.linkedin.com/in/mahmutaktaş/">
                        <img className='mr-2 w-6 overflow-clip [overflow-clip-margin:content-box]' src={darkMode ? linkedinIcon : linkedinDarkIcon} alt="LinkedIn" />
                    </a>
                    <a className='text-inherit no-underline' href="mailto:mahmutaktas.m@gmail.com">
                        <img className='mr-2 w-6 overflow-clip [overflow-clip-margin:content-box]' src={darkMode ? emailWhiteIcon : emailIcon} alt="Email" />
                    </a>
                    </div>
                </div>
                <div className='order-1 w-2/5 max-lg:w-full max-w-lg'>
                    <h2 className='text-xl font-bold uppercase tracking-[1px]'>
                        MAHMUT AKTAŞ
                    </h2>
                    <p className='mt-4 text-sm leading-[1.7]'>
                        {translations.footerText}
                    </p>
                </div>
            </div>
            <div className=' text-xs text-center py-10 border-t border-t-[#444444]'>
                <span>© Copyright {new Date().getFullYear()}.  Made by Mahmut Aktaş.</span>

            </div>
        </div>
    </footer>
  );
}

export default Footer;
