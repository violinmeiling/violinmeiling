import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getScroll } from "../components/scrollMemory";

import HighSchoolBio from "./HighSchoolBio";
import HighSchoolOrganizations from "./HighSchoolOrganizations";
import HighSchoolAwardsCourses from "./HighSchoolAwardsCourses";

function HighSchool() {
  const [showHeader, setShowHeader] = useState(false);

  const bioRef = useRef(null);
  const organizationsRef = useRef(null);
  const awardsCoursesRef = useRef(null);

  const [bioVisible, setBioVisible] = useState(false);
  const [organizationsVisible, setOrganizationsVisible] = useState(false);
  const [awardsCoursesVisible, setAwardsCoursesVisible] = useState(false);

  const location = useLocation();

  /* scroll restore */
  useEffect(() => {
    const shouldRestore = location.state?.restoreScroll;

    if (!shouldRestore) {
      window.scrollTo(0, 0);
      return;
    }

    const y = getScroll("/highschool");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo(0, y);
      });
    });
  }, [location.pathname]);

  /* page entrance */
  useEffect(() => {
    setShowHeader(true);
  }, []);

  /* scroll reveal */
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

          if (target === organizationsRef.current) {
            setOrganizationsVisible(true);
            observer.unobserve(target);
          }

          if (target === awardsCoursesRef.current) {
            setAwardsCoursesVisible(true);
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const refs = [
      bioRef.current,
      organizationsRef.current,
      awardsCoursesRef.current,
    ];

    refs.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* BIO */}
      <div
        ref={bioRef}
        className={`reveal ${bioVisible ? "visible" : ""}`}
      >
        <HighSchoolBio />
      </div>

      {/* ORGANIZATIONS */}
      <div
        ref={organizationsRef}
        className={`reveal ${organizationsVisible ? "visible" : ""}`}
      >
        <HighSchoolOrganizations />
      </div>

      {/* AWARDS + COURSES */}
      <div
        ref={awardsCoursesRef}
        className={`reveal ${awardsCoursesVisible ? "visible" : ""}`}
      >
        <HighSchoolAwardsCourses />
      </div>
    </>
  );
}

export default HighSchool;