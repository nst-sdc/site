import React from "react";
import "../../styles/pages/Connect.css";
import LINKS from "../../assets/data/links";

function Connect() {
  return (
    <div className="outer-container">
      <div className="container connect-container">
        <div className="row connect-section-head">
          <div className="connects">
            <p className="connect">Connect</p>
          </div>
        </div>

        <div className="row connect-section-body">
          <div className="links">
            <div className="social-handles">
              <div className="social-media LinkedIn">
                <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
              <div className="social-media Discord">
                <a href={LINKS.discord} target="_blank" rel="noopener noreferrer">Discord</a>
              </div>
              <div className="social-media Instagram">
                <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
              <div className="social-media Mail">
                <a href={LINKS.email}>Mail</a>
              </div>
            </div>
            <div className="project-handles">
            </div>
          </div>
          <div className="remark-box">
            <p className="remark">
              Easing student life at NST-Pune since 2024
            </p>
          </div>
        </div>
        {/* <div className="row connect-section-footer">
          <img className="dc-logo" src={logo} alt="DevClub NST-Pune logo" />
        </div> */}
      </div>
    </div>
  );
}

export default Connect;
