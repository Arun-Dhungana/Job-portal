import axios from "axios";
import { fromStorage } from "../lib";
import { toast } from "react-toastify";
const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
http.interceptors.request.use(
  (config) => {
    const token = fromStorage("token");
    if (token) {
      config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
    }
    return config;
  },
  (err) => Promise.reject(err)
);

http.interceptors.response.use(
  (response) => {
    if ("success" in response.data) {
      toast.success(response.data.success);
    }
    return response;
  },
  (err) => Promise.reject(err)
);

export default http;
