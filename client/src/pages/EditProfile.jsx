import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { getProfile, updateProfile } from "../api/profileApi";

function EditProfile() {
  const { id } = useParams();

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

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await getProfile(id);

      setFormData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(id, formData);

      alert("Profile Updated Successfully");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="edit-container">
      <form className="edit-form" onSubmit={handleSubmit}>
        <h1>Edit Profile</h1>

        <div className="form-grid">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Job Title"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
          />

          <input
            type="text"
            name="photo"
            value={formData.photo}
            onChange={handleChange}
            placeholder="Photo URL"
          />
        </div>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="About Yourself"
        />

        <input
          type="text"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="LinkedIn URL"
        />

        <input
          type="text"
          name="github"
          value={formData.github}
          onChange={handleChange}
          placeholder="GitHub URL"
        />

        <input
          type="text"
          name="instagram"
          value={formData.instagram}
          onChange={handleChange}
          placeholder="Instagram URL"
        />

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default EditProfile;
