import "./HighSchoolBio.css";
import { Cat, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

function HighSchoolBio() {
  const [showHint, setShowHint] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    // delay appearance
    const t = setTimeout(() => {
      setShowHint(true);
    }, 1500);

    // track scroll position
    const onScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const shouldShowArrow = showHint && isAtTop;

  return (
    <section className="highschool-header" id="highschool-header">
      <div className="site-bg">
        {/* stars */}
        <div className="star s1" />
        <div className="star s2" />
        <div className="star s3" />
        <div className="star s4" />
        <div className="star s5" />
        <div className="star s6" />
        <div className="star s7" />
        <div className="star s8" />
        <div className="star s9" />
        <div className="star s10" />
        <div className="star s11" />
        <div className="star s12" />
        <div className="star s13" />
        <div className="star s14" />
        <div className="star s15" />
        <div className="star s16" />
        <div className="star s17" />
        <div className="star s18" />
        <div className="star s19" />
        <div className="star s20" />
        <div className="star s21" />

        {/* cats */}
        <Cat className="cat c1" />
        <Cat className="cat c2" />
        <Cat className="cat c3" />
        <Cat className="cat c4" />
        <Cat className="cat c5" />
        <Cat className="cat c6" />
      </div>

      <div className="highschool-header-content">
        <p className="highschool-header-name">Minnetonka High School</p>
        <p className="highschool-header-title">2019 - 2023</p>
        <p className="highschool-header-title">
          GPA: 4.65 | Summa cum laude
        </p>
      </div>

      <div className={`scroll-hint ${shouldShowArrow ? "show" : ""}`}>
        <ChevronDown className="scroll-arrow" />
      </div>
    </section>
  );
}

export default HighSchoolBio;