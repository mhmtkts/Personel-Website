import { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import ModeSwitch from "./components/ModeSwitch ";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  
  return (
    <>
    <div className="mr-4 md:mr-40 ml-4 md:ml-28 mt-8">
      <ModeSwitch />
      <Header skillsRef={skillsRef} projectsRef={projectsRef}/>
      <Hero/>
      <Skills ref={skillsRef} id="skills"/>
      <Profile/>
      <Projects ref={projectsRef} id="projects"/>
      
    </div>
      <Footer/>
      </>
  );
}

export default App;
