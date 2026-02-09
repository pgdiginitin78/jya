import axios from "axios";
import { logoutUser } from "./Actions";

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });

  failedQueue = [];
};



// REQUEST INTERCEPTOR
AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);



// RESPONSE INTERCEPTOR
AxiosInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return AxiosInstance(originalRequest);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");

        const res = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}/refresh-token`,
          { refreshToken }
        );

        const { accessToken, refreshToken: newRefreshToken } = res.data;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", newRefreshToken);

        AxiosInstance.defaults.headers.Authorization =
          `Bearer ${accessToken}`;

        processQueue(null, accessToken);

        return AxiosInstance(originalRequest);

      } catch (err) {

        processQueue(err, null);

        logoutUser();
        localStorage.clear();
        window.location.href = "/";

        return Promise.reject(err);

      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error.response?.data || error.message);
  }
);

export default AxiosInstance;
