import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import vector from "./Homepage_vector.png";
import cube from "./Black cube 2-02 1.png";
import NavBar from "./NavBar";

function Home() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // const [blurAmount, setBlurAmount] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // const handleScroll = () => {
    //   const newBlur = Math.min(window.scrollY / 100, 4);
    //   setBlurAmount(newBlur);
    // };

    window.addEventListener("resize", handleResize);
    // window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      // window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imageUrl = screenWidth < 768 ? cube : vector;

  return (
    <>
      <NavBar></NavBar>
      <div className="container Home-page-content">
        <p className="motto">Build Cool</p>
        <p className="motto">Stuff</p>
        <img className="Home-image" src={imageUrl} alt="keyboard image" />
      </div>
    </>
  );
}

export default Home;
