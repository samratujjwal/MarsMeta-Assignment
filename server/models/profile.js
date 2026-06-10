import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    location: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      default: "",
    },

    linkedin: {
      type: String,
      default: "",
    },

    github: {
      type: String,
      default: "",
    },

    instagram: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
