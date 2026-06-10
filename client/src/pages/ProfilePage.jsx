import React from "react";
import ProfileCard from "../components/ProfileCard.jsx";
import profileData from "../../../server/data/profileData.js";
import Navbar from "../navbar.jsx";
function ProfilePage() {
  return (
    <>
      <Navbar></Navbar>
      <div className="profiles-container">
        {profileData.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>
    </>
  );
}

export default ProfilePage;
