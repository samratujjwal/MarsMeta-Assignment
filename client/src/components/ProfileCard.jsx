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
  // const profile = {
  //   image: profileImg,
  //   name: "John Doe",
  //   title: "Frontend Developer",
  //   about:
  //     "Passionate React developer focused on creating beautiful, responsive, and user-friendly web applications.",
  //   phone: "+91 9876543210",
  //   email: "john@example.com",
  //   location: "New Delhi, India",
  // };

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
          <a href="#">
            <FaLinkedin />
          </a>

          <a href="#">
            <FaInstagram />
          </a>

          <a href="#">
            <FaGithub />
          </a>
        </div>

        <div className="action-buttons">
          <button>Call</button>
          <button>Email</button>
          <button>Profile</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
