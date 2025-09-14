import React from "react";
import "./Teammember.css";

function TeamMember({ name, imageSrc }) {
  return (
    <div className="member-box">
      <img className="member-img" src={imageSrc} alt={`${name}'s image`} />
      <div className="hover-info">
        <p className="member-name">{name}</p>
      </div>
    </div>
  );
}

export default TeamMember;
