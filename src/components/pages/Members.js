import React, { useState, useEffect } from "react";
import "../../styles/pages/Members.css";
import MemberCard from "../ui/MemberCard";
import NavBar from "../layout/NavBar";
import { fetchOrganizationMembers } from "../../services/githubApi";

function Members() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMembers = async () => {
      try {
        setLoading(true);
        const data = await fetchOrganizationMembers();
        setMembers(data);
        setError(null);
      } catch (err) {
        setError("Failed to load members. Please try again later.");
        console.error("Error loading members:", err);
      } finally {
        setLoading(false);
      }
    };

    loadMembers();
  }, []);

  return (
    <>
      <NavBar />
      <div className="outer-members-container">
        <div className="members-head-section">
          <div className="members-heading">
            <p className="members-headings">Our Members</p>
          </div>
        </div>
        <div className="members-body-section">
          {loading && (
            <div className="members-loading">
              <p>Loading members...</p>
            </div>
          )}

          {error && (
            <div className="members-error">
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && members.length === 0 && (
            <div className="members-empty">
              <p>No members found.</p>
            </div>
          )}

          {!loading && !error && members.length > 0 && (
            <div className="members-grid">
              {members.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Members;
