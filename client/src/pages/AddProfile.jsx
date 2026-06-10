import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { createProfile } from "../api/profileApi";

// import "./EditProfile.css";

function AddProfile() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
    phone: "",
    email: "",
    location: "",
    photo: "",
    linkedin: "",
    github: "",
    instagram: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProfile(formData);

      alert("Profile Created Successfully");

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Failed to create profile");
    }
  };

  return (
    <div className="edit-container">
      <form className="edit-form" onSubmit={handleSubmit}>
        <h1>Add New Profile</h1>

        <div className="form-grid">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />

          <input
            type="text"
            name="photo"
            placeholder="Profile Image URL"
            value={formData.photo}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="description"
          placeholder="About Yourself"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn URL"
          value={formData.linkedin}
          onChange={handleChange}
        />

        <input
          type="text"
          name="github"
          placeholder="GitHub URL"
          value={formData.github}
          onChange={handleChange}
        />

        <input
          type="text"
          name="instagram"
          placeholder="Instagram URL"
          value={formData.instagram}
          onChange={handleChange}
        />

        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
}

export default AddProfile;
