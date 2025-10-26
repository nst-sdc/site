import React from "react";
import { Link } from "react-router-dom";
import "../../styles/pages/Team.css";
import ktm from "../../assets/images/main.jpg";

function Team() {
  return (
    <div className="container team-container">
      <div className="row team-section-head">
        <div className="team">
          <p className="teams">Team</p>
        </div>
        <div className="team-desc-button-box">
          <Link to="/ourteam">
            <button className="team-desc-button">Know the team</button>
          </Link>
        </div>
      </div>
      <div className="row team-section-body">
        <img src={ktm} alt="DevCom Team" />
      </div>
    </div>
  );
}

export default Team;
