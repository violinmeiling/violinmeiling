import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { Cat } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { saveScroll, getScroll } from "./components/scrollMemory";

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

useEffect(() => {
  if (location.pathname !== "/") return;

  const handleScroll = () => {
    saveScroll("/");
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, [location.pathname]);

  const isHome = location.pathname === "/";

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
    const fromPath = location.pathname;

    saveScroll(fromPath); // save current before leaving
    

    navigate("/", { state: { restoreScroll: true } });
    //navigate(-1);
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
      {/* MAIN BUTTON (always visible) */}
      <button className="nav-fab" onClick={handleMainClick}>
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