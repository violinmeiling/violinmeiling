import { useEffect, useState, useRef } from "react";

import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import MultiTabSection from "./MultiTabSection";
import PreviousSideQuests from "./PreviousSideQuests";
import { useLocation } from "react-router-dom";
import { getScroll } from "./scrollMemory";
import useRevealOnScroll from "./useRevealOnScroll";

function Home() {
  const [showHero, setShowHero] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showExplore, setShowExplore] = useState(false);

  // refs for scroll reveal sections
 // const educationRef = useRef(null);
  //const workRef = useRef(null);
  //const multiTabRef = useRef(null);
  //const questsRef = useRef(null);

  //const [eduVisible, setEduVisible] = useState(false);
 // const [workVisible, setWorkVisible] = useState(false);
  //const [multiVisible, setMultiVisible] = useState(false);
  //const [questsVisible, setQuestsVisible] = useState(false);

  const [educationRef, eduVisible] = useRevealOnScroll();
const [workRef, workVisible] = useRevealOnScroll();
const [multiTabRef, multiVisible] = useRevealOnScroll();
const [questsRef, questsVisible] = useRevealOnScroll();

  const location = useLocation();

  useEffect(() => {
  const shouldRestore = location.state?.restoreScroll;

  if (!shouldRestore) {
    window.scrollTo(0, 0);
    return;
  }

  const y = getScroll("/");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, y);
    });
  });
}, [location.pathname]);

  // Hero + About entrance
  useEffect(() => {
    setShowHero(true);

    const t = setTimeout(() => {
      setShowAbout(true);
      setShowExplore(true);
    }, 1000);

    return () => clearTimeout(t);
  }, []);

  // Scroll reveal observer (once-only)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const target = entry.target;

          if (target === educationRef.current) {
            setEduVisible(true);
            observer.unobserve(target);
          }
          if (target === workRef.current) {
            setWorkVisible(true);
            observer.unobserve(target);
          }
          if (target === multiTabRef.current) {
            setMultiVisible(true);
            observer.unobserve(target);
          }
          if (target === questsRef.current) {
            setQuestsVisible(true);
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const refs = [
      educationRef.current,
      workRef.current,
      multiTabRef.current,
      questsRef.current,
    ];

    refs.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <>  
      {/* HERO */}
      <div className={`reveal ${showHero ? "visible" : ""}`}>
        <Hero />
      </div>

      {/* ABOUT */}
      <div className={`reveal ${showAbout ? "visible" : ""}`}>
        <About />
      </div>

      {/* EDUCATION */}
      <div
        ref={educationRef}
        className={`reveal ${eduVisible ? "visible" : ""}`}
      >
        <Education />
      </div>

      {/* WORK */}
      <div ref={workRef} className={`reveal ${workVisible ? "visible" : ""}`}>
        <WorkExperience />
      </div>

      {/* MULTI TAB */}
      <div
        ref={multiTabRef}
        className={`reveal ${multiVisible ? "visible" : ""}`}
      >
        <MultiTabSection />
      </div>

      {/* QUESTS */}
      <div
        ref={questsRef}
        className={`reveal ${questsVisible ? "visible" : ""}`}
      >
        <PreviousSideQuests />
      </div>
    </>
  );
}

export default Home;