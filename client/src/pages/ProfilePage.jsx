import React from "react";
import { useEffect, useState } from "react";
import { getProfiles, deleteProfile } from "../api/profileApi";
import ProfileCard from "../components/ProfileCard.jsx";
import Navbar from "../navbar.jsx";

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-avatar" />
      <div className="skeleton-line short" />
      <div className="skeleton-line medium" />
      <div className="skeleton-line long" />
      <div className="skeleton-line long" />
      <div className="skeleton-actions">
        <div className="skeleton-btn" />
        <div className="skeleton-btn" />
      </div>
    </div>
  );
}

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
      <Navbar />

      <div className="page-header">
        <p className="page-header-eyebrow">Directory</p>
        <h2 className="page-header-title">All Profiles</h2>
        <p className="page-header-sub">
          {!loading &&
            `${profiles.length} member${profiles.length !== 1 ? "s" : ""}`}
        </p>
      </div>

      <div className="profiles-container">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
        ) : profiles.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">◎</div>
            <h3>No profiles yet</h3>
            <p>Create one to get started.</p>
          </div>
        ) : (
          profiles.map((profile) => (
            <ProfileCard
              key={profile._id}
              profile={profile}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </>
  );
}

export default ProfilePage;
