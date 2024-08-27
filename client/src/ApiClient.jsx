// src/apiClient.js

import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Base URL from environment variable
  headers: {
    "Content-Type": "application/json",
    // Add any other common headers here
  },
});

export default apiClient;
