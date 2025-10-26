import React from "react";
import "../../styles/pages/Connect.css";
import logo from "../../assets/images/DC_logo.png";

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
                <a href="https://www.linkedin.com/company/nst-sdc/?viewAsMember=true" target="blank">
                  LinkedIn
                </a>
              </div>
              <div className="social-media Discord">
                <a href="https://discord.gg/ucCuH2XQ" target="blank">Discord</a>
              </div>
              <div className="social-media Instagram">
                <a href="https://www.instagram.com/devclub.nst/" target="blank">Instagram</a>
              </div>
              <div className="social-media Mail">
                <a href="support@nstsdc.org" target="blank">Mail</a>
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
