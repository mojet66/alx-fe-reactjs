import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_ASE_URL,
  headers: {
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    Accept: "application/vnd.github+json",
  },
});

export default api;
