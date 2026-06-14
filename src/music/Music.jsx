import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getScroll } from "../components/scrollMemory";

import Bio from "./Bio";
import MusicTabs from "./MusicTabs";
import Ensembles from "./Ensembles";
import MusicHeader from "./MusicHeader";

function Music() {
  const [showIntro, setShowIntro] = useState(false);
    const [showExplore, setShowExplore] = useState(false);
    const [showMusicHeader, setShowMusicHeader] = useState(false);

  const bioRef = useRef(null);
  const tabsRef = useRef(null);
  const ensemblesRef = useRef(null);

  const [bioVisible, setBioVisible] = useState(false);
  const [tabsVisible, setTabsVisible] = useState(false);
  const [ensemblesVisible, setEnsemblesVisible] = useState(false);

  const location = useLocation();

  // scroll restore (same logic as Home)
  useEffect(() => {
    const shouldRestore = location.state?.restoreScroll;

    if (!shouldRestore) {
      window.scrollTo(0, 0);
      return;
    }

    const y = getScroll("/music");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo(0, y);
      });
    });
  }, [location.pathname]);


  useEffect(() => {
    setShowMusicHeader(true);

    const t = setTimeout(() => {
      setShowIntro(true);
      setShowExplore(true);
    }, 1000);

    return () => clearTimeout(t);
  }, []);

  // intersection observer (same pattern as Home)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const target = entry.target;

          if (target === bioRef.current) {
            setBioVisible(true);
            observer.unobserve(target);
          }

          if (target === tabsRef.current) {
            setTabsVisible(true);
            observer.unobserve(target);
          }

          if (target === ensemblesRef.current) {
            setEnsemblesVisible(true);
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const refs = [bioRef.current, tabsRef.current, ensemblesRef.current];

    refs.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HEADER */}
      <div className={`reveal ${showMusicHeader ? "visible" : ""}`}>
        <MusicHeader />
      </div>

      {/* BIO */}
      <div
        ref={bioRef}
        className={`reveal ${bioVisible ? "visible" : ""}`}
      >
        <Bio />
      </div>

      {/* MULTI TAB (Awards + Repertoire) */}
      <div
        ref={tabsRef}
        className={`reveal ${tabsVisible ? "visible" : ""}`}
      >
        <MusicTabs />
      </div>

      {/* ENSEMBLES */}
      <div
        ref={ensemblesRef}
        className={`reveal ${ensemblesVisible ? "visible" : ""}`}
      >
        <Ensembles />
      </div>
    </>
  );
}

export default Music;