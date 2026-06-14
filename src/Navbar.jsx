import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { Cat } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { saveScroll } from "./components/scrollMemory";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  // Save scroll position on home scroll
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      saveScroll("/");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Detect bottom of page (all routes)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      const nearBottom = scrollY + viewportHeight >= fullHeight - 300;
      setAtBottom(nearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize on route change

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const handleMainClick = () => {
    if (isHome) {
      setOpen((prev) => !prev);
    } else {
      saveScroll(location.pathname);
      navigate("/", { state: { restoreScroll: true } });
    }
  };

  // close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="floating-nav" ref={menuRef}>
      {/* MAIN BUTTON */}
      <button
        className={`nav-fab ${atBottom && !isHome ? "glow" : ""}`}
        onClick={handleMainClick}
      >
        <Cat size={18} />
        <span>{isHome ? "Explore" : "Home"}</span>
      </button>

      {/* MENU ONLY ON HOME */}
      {isHome && (
        <div className={`nav-panel ${open ? "open" : ""}`}>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("education")}>Education</button>
          <button onClick={() => scrollToSection("work")}>Work</button>
          <button onClick={() => scrollToSection("tabs")}>Quests</button>
          <button onClick={() => navigate("/highschool")}>Tonka</button>
          <button onClick={() => navigate("/music")}>Music</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;