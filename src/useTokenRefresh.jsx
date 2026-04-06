import { useEffect, useRef } from "react";
import axios from "axios";
import { API_BASE_URL } from "./http-common";
import { toast } from "react-toastify";
import { callAuthLogout } from "./context/AuthContext";
import { errorAlert } from "./components/common/toast/CustomToast";


export function useTokenRefresh() {
  const intervalRef = useRef(null);
  const isRefreshingRef = useRef(false);

  useEffect(() => {
    intervalRef.current = setInterval(checkAndRefresh, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  function checkAndRefresh() {
    const refreshToken = localStorage.getItem("refreshToken");
    const tokenSetTimeRaw = localStorage.getItem("tokenSetTime");
    const expiresInRaw = localStorage.getItem("expiresIn");

    if (!refreshToken || !tokenSetTimeRaw || !expiresInRaw) return;

    const tokenSetTime = Number(tokenSetTimeRaw);
    const expiresIn = Number(expiresInRaw);

    if (!tokenSetTime || !expiresIn) return;

    const expiryTime = tokenSetTime + expiresIn * 1000;
    const now = Date.now();
    if (now >= expiryTime) {
      doRefresh(refreshToken);
    }
  }

  async function doRefresh(refreshToken) {
    if (isRefreshingRef.current) return;
    isRefreshingRef.current = true;

    try {
      const res = await axios.post(`${API_BASE_URL}refresh-token`, {
        refreshToken,
      });

      const {
        accessToken,
        refreshToken: newRefreshToken,
        expiresIn,
      } = res.data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", newRefreshToken);
      localStorage.setItem("expiresIn", String(expiresIn));
      localStorage.setItem("tokenSetTime", String(Date.now()));
    } catch (err) {
      console.error("Background token refresh failed:", err);
      localStorage.clear();
      callAuthLogout();
      errorAlert("Session expired, please login again.");
      window.location.href = "/";
    } finally {
      isRefreshingRef.current = false;
    }
  }
}
