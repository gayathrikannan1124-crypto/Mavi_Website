import axios from "axios";

// Base URL for all API calls — change this once if backend port changes
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default API;
