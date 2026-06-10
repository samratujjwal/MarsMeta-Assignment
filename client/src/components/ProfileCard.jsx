import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaTrash,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

function ProfileCard({ profile, onDelete }) {
  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <button className="delete-btn" onClick={() => onDelete(profile._id)}>
          <FaTrash />
        </button>

        <img src={profile.photo} alt={profile.name} className="profile-image" />

        <h1>{profile.name}</h1>

        <h3>{profile.title}</h3>

        <p className="about">{profile.description}</p>

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

          <Link to={`/edit-profile/${profile._id}`}>
            <button>Edit Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
