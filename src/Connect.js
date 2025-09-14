import React from "react";
import "./Connect.css";
import logo from "./DC_logo.png";

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
              <div className="social-media Twitter">
                <a href="https://twitter.com/devcom_iitb">Twitter</a>
              </div>
              <div className="social-media Instagram">
                <a href="https://www.instagram.com/devcom.iitb/">Instagram</a>
              </div>
              <div className="social-media LinkedIn">
                <a href="https://www.linkedin.com/company/devcom-iit-bombay/mycompany/">
                  LinkedIn
                </a>
              </div>
              <div className="social-media Mail">
                <a href="mailto:devcom@iitb.ac.in">Mail</a>
              </div>
            </div>
            <div className="project-handles">
              <div className="projects-link InstiApp">
                <a href="https://insti.app/feed">InstiApp</a>
              </div>
              <div className="projects-link Resobin">
                <a href="https://resobin.gymkhana.iitb.ac.in/">Resobin</a>
              </div>
              <div className="projects-link Mess-I">
                <a href="https://instamess.gymkhana.iitb.ac.in/">Mess-I</a>
              </div>
              <div className="projects-link NewBee">
                <a href="https://gymkhana.iitb.ac.in/newbee/">NewBee</a>
              </div>
            </div>
          </div>
          <div className="remark-box">
            <p className="remark">
              Easing student life at IIT Bombay since 2018
            </p>
          </div>
        </div>
        <div className="row connect-section-footer">
          <img className="dc-logo" src={logo} alt="DevCom logo" />
        </div>
      </div>
    </div>
  );
}

export default Connect;
