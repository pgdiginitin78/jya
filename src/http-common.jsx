import axios from "axios";

export const API_BASE_URL = "/WellnessAPI/api/";

export const API = axios.create({
  baseURL: "/WellnessAPI/api",
  withCredentials: true,
});
