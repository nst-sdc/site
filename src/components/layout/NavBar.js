import React from "react";
import { useState, useEffect } from "react";
import "../../styles/components/NavBar.css";
import { Link as RouterLink } from "react-router-dom";
// import DevComLogo from "./DC 3.svg";

function NavBar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [blurAmount, setBlurAmount] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    const handleScroll = () => {
      const newBlur = Math.min(window.scrollY / 100, 4);
      setBlurAmount(newBlur);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && isNavOpen) {
      setIsNavOpen(false);
    }
  };

  return (
    <>
      <div className="top-bar" role="banner"></div>
      <div className="navbar-fixed">
        <nav
          className="navbar navbar-expand-md"
          style={{ backdropFilter: `blur(${blurAmount}px)` }}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/" aria-label="DevClub NST-Pune - Home">
              <span className="title">DevClub NST-Pune</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded={isNavOpen}
              aria-label={isNavOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={handleToggleNav}
              onKeyDown={handleKeyDown}
            >
              <span className="sr-only">
                {isNavOpen ? "Close navigation menu" : "Open navigation menu"}
              </span>
              {isNavOpen ? (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M2.79997 28.0001L-3.05176e-05 25.2001L11.2 14.0001L-3.05176e-05 2.80006L2.79997 6.10352e-05L14 11.2001L25.2 6.10352e-05L28 2.80006L16.8 14.0001L28 25.2001L25.2 28.0001L14 16.8001L2.79997 28.0001Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <g clipPath="url(#clip0_825_211)">
                    <path
                      d="M6 9.97949H42V13.9712H6V9.97949ZM6 21.9548H42V25.9465H6V21.9548ZM6 33.93H42V37.9218H6V33.93Z"
                      fill="#F2F2F2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_825_211">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </button>
            <div
              className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
              id="navbarNavAltMarkup"
              style={{
                height: screenWidth < 768 && isNavOpen ? "100vh" : "auto",
              }}
              aria-hidden={!isNavOpen}
            >
              <div
                style={{
                  backgroundColor:
                    screenWidth < 768 && isNavOpen ? "black" : "transparent",
                  height: screenWidth < 768 ? "100vh" : "",
                  width: "100%",
                }}
              >
                <ul className="navbar-nav" role="menubar">
                  <li role="none">
                    <RouterLink 
                      to="/#home" 
                      className="nav-link"
                      role="menuitem"
                      tabIndex={isNavOpen ? 0 : -1}
                      aria-label="Navigate to Home section"
                    >
                      Home
                    </RouterLink>
                  </li>
                  <li role="none">
                    <RouterLink 
                      to="/#about" 
                      className="nav-link"
                      role="menuitem"
                      tabIndex={isNavOpen ? 0 : -1}
                      aria-label="Navigate to About section"
                    >
                      About
                    </RouterLink>
                  </li>
                  <li role="none">
                    <RouterLink 
                      to="/#projects" 
                      className="nav-link"
                      role="menuitem"
                      tabIndex={isNavOpen ? 0 : -1}
                      aria-label="Navigate to Projects section"
                    >
                      Projects
                    </RouterLink>
                  </li>
                  <li role="none">
                    <RouterLink 
                      to="/#team" 
                      className="nav-link"
                      role="menuitem"
                      tabIndex={isNavOpen ? 0 : -1}
                      aria-label="Navigate to Team section"
                    >
                      Team
                    </RouterLink>
                  </li>
                  <li role="none">
                    <RouterLink 
                      to="/#connect" 
                      className="nav-link"
                      role="menuitem"
                      tabIndex={isNavOpen ? 0 : -1}
                      aria-label="Navigate to Connect section"
                    >
                      Connect
                    </RouterLink>
                  </li>
                </ul>
                {/* <div className="devcom-svg-container">
                  <img src={DevComLogo} alt="Devcom Logo" />
                </div> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
