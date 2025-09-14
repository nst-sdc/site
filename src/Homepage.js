import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Element, scroller } from "react-scroll";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Team from "./Team";
import Connect from "./Connect";

function Homepage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      scroller.scrollTo(location.hash.slice(1), {
        duration: 80,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location]);

  return (
    <>
      <Home />
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="team">
        <Team />
      </Element>
      <Element name="connect">
        <Connect />
      </Element>
    </>
  );
}

export default Homepage;
