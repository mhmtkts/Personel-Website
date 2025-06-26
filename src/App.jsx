import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Eğer darkMode App.jsx'te de gerekliyse

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsSection from './components/Projects'; // Projeler bölümü component'i
import Footer from './components/Footer'; // Footer'ı da App.jsx'e taşıyabilirsiniz
// ...diğer importlarınız

function App() {
    const location = useLocation();
    const navigate = useNavigate(); // Scroll sonrası state'i temizlemek için

    // Ana sayfadaki bölümler için referanslar
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);

    const darkMode = useSelector((state) => state.mode.darkMode); // Global dark mode

    useEffect(() => {
        const sectionToScroll = location.state?.scrollTo;
        if (sectionToScroll) {
            let targetRef;
            if (sectionToScroll === 'home') targetRef = homeRef;
            else if (sectionToScroll === 'about') targetRef = aboutRef;
            else if (sectionToScroll === 'projects') targetRef = projectsRef;

            if (targetRef?.current) {
                // Navbar yüksekliğini hesaba katmak için küçük bir gecikme veya offset eklenebilir
                setTimeout(() => {
                    const navbarHeight = document.querySelector('nav')?.offsetHeight || 64; // Navbar yüksekliğini al
                    const elementPosition = targetRef.current.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - navbarHeight;
                
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }, 100); // Sayfanın oturması için kısa bir gecikme

                // Scroll sonrası state'i temizle, böylece sayfa yenilendiğinde tekrar scroll olmaz
                navigate(location.pathname, { replace: true, state: {} });
            }
        } else if (location.hash) { // Eğer URL'de #about gibi bir hash varsa
            const id = location.hash.replace('#', '');
            let targetRef;
            if (id === 'home') targetRef = homeRef;
            else if (id === 'about') targetRef = aboutRef;
            else if (id === 'projects') targetRef = projectsRef;
            
            if (targetRef?.current) {
                 setTimeout(() => {
                    const navbarHeight = document.querySelector('nav')?.offsetHeight || 64;
                    const elementPosition = targetRef.current.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - navbarHeight;
                
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        }

    }, [location.state, location.hash, navigate]); // location.hash'i de dependency array'e ekleyin

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <Navbar
                homeRef={homeRef}
                aboutRef={aboutRef}
                projectsRef={projectsRef}
            />
            {/* HomeHero ref'i kendi içinde veya section'a atanabilir */}
            <div ref={homeRef}><Hero projectsRef={projectsRef} /></div>
            <div ref={aboutRef}><About projectsRef={projectsRef} /></div>
            <div ref={projectsRef}><ProjectsSection /></div>
            <Footer />
        </div>
    );
}

export default App;