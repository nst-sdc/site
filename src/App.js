import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Homepage from "./Homepage";
import OurTeam from "./ourTeam";
import Projectreso from "./Projectreso";
import Projectinsti from "./Projectinsti";
import Projectmessi from "./Projectmessi";
import Projectnewbee from "./Projectnewbee";

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
