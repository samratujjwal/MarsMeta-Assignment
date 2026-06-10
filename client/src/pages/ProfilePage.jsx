import React from "react";
import { useEffect, useState } from "react";
import { getProfiles, deleteProfile } from "../api/profileApi";
import ProfileCard from "../components/ProfileCard.jsx";
import Navbar from "../navbar.jsx";
function ProfilePage() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const res = await getProfiles();

      setProfiles(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this profile?");

    if (!confirmDelete) return;

    try {
      await deleteProfile(id);

      setProfiles((prev) => prev.filter((profile) => profile._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="profiles-container">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile._id}
            profile={profile}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
}

export default ProfilePage;
