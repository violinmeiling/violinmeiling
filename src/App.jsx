import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProjectBlue from "./pages/ProjectBlue";
import ProjectStride from "./pages/ProjectStride";
import ProjectSquishModel from "./pages/ProjectSquishModel";
import ProjectNUS from "./pages/ProjectNUS";
import ProjectMHP from "./pages/ProjectMHP";
import ProjectSparkInsight from "./pages/ProjectSparkInsight";
import ProjectHARK from "./pages/ProjectHARK";
import ProjectCarpalTunnel from "./pages/ProjectCarpalTunnel";
import ProjectChatbot from "./pages/ProjectChatbot";
import "./App.css";
import Navbar from "./Navbar";
import Music from "./music/Music";
import HighSchool from "./tonka/HighSchool";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.restoreScroll) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>

      <div className="app">
        <ScrollManager />
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/blue" element={<ProjectBlue />} />
          <Route path="/pages/stride" element={<ProjectStride />} />
          <Route path="/pages/squishmodel" element={<ProjectSquishModel />} />
          <Route path="/pages/nus" element={<ProjectNUS />} />
          <Route path="/pages/mhp" element={<ProjectMHP />} />
          <Route path="/pages/sparkinsight" element={<ProjectSparkInsight />} />
          <Route path="/pages/hark" element={<ProjectHARK />} />
          <Route path="/pages/carpal-tunnel" element={<ProjectCarpalTunnel />} />
          <Route path="/pages/chatbot" element={<ProjectChatbot />} />
          <Route path="/music" element={<Music />} />
          <Route path="/highschool" element={<HighSchool />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;