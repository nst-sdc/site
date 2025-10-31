import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global/App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Homepage from "./components/pages/Homepage";
import OurTeam from "./components/pages/ourTeam";
import ProjectDetail from "./components/pages/ProjectDetail";
import Members from "./components/pages/Members";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/members" element={<Members />} />
          <Route path="/project/:repoName" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
