import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/profiles",
});

export const getProfiles = () => API.get("/");

export const getProfile = (id) => API.get(`/${id}`);

export const createProfile = (data) => API.post("/", data);

export const updateProfile = (id, data) => API.put(`/${id}`, data);

export const deleteProfile = (id) => API.delete(`/${id}`);
