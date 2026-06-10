import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";
import profileImg from "/ujjwal.jpg";
function ProfileCard({ profile }) {
  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <img src={profile.image} alt={profile.name} className="profile-image" />

        <h1>{profile.name}</h1>

        <h3>{profile.title}</h3>

        <p className="about">{profile.about}</p>

        <div className="info-section">
          <div className="info-item">
            <FaPhone />
            <span>{profile.phone}</span>
          </div>

          <div className="info-item">
            <FaEnvelope />
            <span>{profile.email}</span>
          </div>

          <div className="info-item">
            <FaLocationDot />
            <span>{profile.location}</span>
          </div>
        </div>

        <div className="social-links">
          <a href={profile.linkedin}>
            <FaLinkedin />
          </a>

          <a href={profile.instagram}>
            <FaInstagram />
          </a>

          <a href={profile.github}>
            <FaGithub />
          </a>
        </div>

        <div className="action-buttons">
          <a href={`tel:${profile.phone}`}>
            <button>Call</button>
          </a>
          <a href={`mailto:${profile.email}`}>
            <button>Email</button>
          </a>
          <a href={profile.linkedin} target="_blank">
            <button>Open Profile</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
