 import React, { useRef, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { Route, Routes, useLocation } from 'react-router-dom';

// Components
import NAV from './components/NAV';
import HeroSec from './components/HeroSec';
import Feautures from './components/Feautures';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';
import ResumeSkills from './components/ResumeSkills';
import Certification from './components/Certification';
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Only initialize once
    if (!scrollInstance.current) {
      scrollInstance.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1, // normal speed
        lerp: 0.08, // slightly faster, smoother feel
        class: 'is-revealed',
        getDirection: true,
        smartphone: {
          smooth: true,
          multiplier: 1,
          lerp: 0.08,
        },
        tablet: {
          smooth: true,
          multiplier: 1,
          lerp: 0.08,
        },
        reloadOnContextChange: true, // helps when route changes
        inertia: 0.9,
      });
    } else {
      // Update only if necessary
      scrollInstance.current.update();
    }

    return () => {
      if (scrollInstance.current) scrollInstance.current.destroy();
      scrollInstance.current = null;
    };
  }, [location]);

  return (
    <div className="flex flex-col md:flex-row overflow-x-hidden">
      <NAV />
      <ToastContainer position="top-right" autoClose={400} />

      <div className="w-full md:ml-[19vw] md:w-[81vw]" ref={scrollRef}>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/herosec" element={<HeroSec />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<ResumeSkills />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/features" element={<Feautures />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certification />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
