import React from "react";
import ProfileCard from "../components/ProfileCard.jsx";
import profileData from "../data/profileData";
function ProfilePage() {
  return (
    <div className="profiles-container">
      {profileData.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </div>
  );
}

export default ProfilePage;
