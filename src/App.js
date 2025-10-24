import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global/App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Homepage from "./components/pages/Homepage";
import OurTeam from "./components/pages/ourTeam";
import Projectreso from "./components/pages/Projectreso";
import Projectinsti from "./components/pages/Projectinsti";
import Projectmessi from "./components/pages/Projectmessi";
import Projectnewbee from "./components/pages/Projectnewbee";

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
          <Route path="/resobin" element={<Projectreso />} />
          <Route path="/instiapp" element={<Projectinsti />} />
          <Route path="/messi" element={<Projectmessi />} />
          <Route path="/newbee" element={<Projectnewbee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
