import React from "react";
import "../../styles/components/MemberCard.css";

function MemberCard({ member }) {
  return (
    <div className="member-card">
      <div className="member-card-image-container">
        <img 
          className="member-card-avatar" 
          src={member.avatar_url} 
          alt={member.name}
        />
      </div>
      <div className="member-card-info">
        {member.name && <h3 className="member-card-name">{member.name}</h3>}
        <p className="member-card-username">@{member.login}</p>
        {member.bio && (
          <p className="member-card-bio">{member.bio}</p>
        )}
        <a 
          href={member.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="member-card-button"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}

export default MemberCard;
