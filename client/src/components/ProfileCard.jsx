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
          <FaTrash size={13} />
        </button>

        {/* ── Banner + Avatar ── */}
        <div className="card-banner">
          <div className="card-banner-gradient" />
        </div>
        <div className="card-avatar-wrap">
          <img
            src={profile.photo}
            alt={profile.name}
            className="profile-image"
          />
          <span className="card-status-dot" />
        </div>

        {/* ── Identity ── */}
        <div className="card-identity">
          <h1>{profile.name}</h1>
          <h3>{profile.title}</h3>
        </div>

        {/* ── About ── */}
        <p className="about">{profile.description}</p>

        {/* ── Info ── */}
        <div className="info-section">
          <div className="info-item">
            <span className="info-icon">
              <FaPhone size={13} />
            </span>
            <span>{profile.phone}</span>
          </div>
          <div className="info-item">
            <span className="info-icon">
              <FaEnvelope size={13} />
            </span>
            <span>{profile.email}</span>
          </div>
          <div className="info-item">
            <span className="info-icon">
              <FaLocationDot size={13} />
            </span>
            <span>{profile.location}</span>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="card-divider" />

        {/* ── Social ── */}
        <div className="social-links">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* ── Actions ── */}
        <div className="action-buttons">
          <a href={`tel:${profile.phone}`}>
            <button className="btn-primary">
              <FaPhone size={12} /> Call
            </button>
          </a>
          <a href={`mailto:${profile.email}`}>
            <button className="btn-secondary">
              <FaEnvelope size={12} /> Email
            </button>
          </a>
          <Link to={`/edit-profile/${profile._id}`}>
            <button className="btn-ghost">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
