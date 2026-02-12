import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : "https://chatsphere-1-5xw8.onrender.com/api",
  withCredentials: true,
});

