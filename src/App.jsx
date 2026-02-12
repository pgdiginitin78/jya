import { Skeleton } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { API } from "./http-common";
import AboutUs from "./pages/aboutUs/AboutUs";
import AyurvedaBlog from "./pages/blogs/Blogs";
import ContactUs from "./pages/contactUs/ContactUs";
import Footer from "./pages/footer/Footer";
import Gallary from "./pages/gallary/Gallary";
import HomePage from "./pages/homePage/HomePage";
import Navbar from "./pages/navbar/Navbar";
import OurServices from "./pages/OurServices/OurServices";
import PrivacyAndPolicy from "./pages/privacyAndPolicy/PrivacyAndPolicy";
import ScrollToHash from "./ScrollToHash";
import ScrollToTopButton from "./ScrollToTopButton";
import DeleteAccount from "./pages/privacyAndPolicy/DeleteAccount";

function PageSkeleton() {
  return (
    <div className="w-full mx-auto px-4 py-6">
      <Skeleton variant="rectangular" height={260} sx={{ borderRadius: 2 }} />
      <Skeleton height={48} sx={{ mt: 2 }} />
      <Skeleton height={32} width="60%" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <Skeleton variant="rectangular" height={180} sx={{ borderRadius: 2 }} />
        <Skeleton variant="rectangular" height={180} sx={{ borderRadius: 2 }} />
        <Skeleton variant="rectangular" height={180} sx={{ borderRadius: 2 }} />
      </div>
    </div>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    let interval;

    const refreshTokenApi = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const expiresIn = localStorage.getItem("expiresIn");

        if (!accessToken) {
          console.log("No refresh token found");
          return;
        }

        console.log("Calling refresh token API...", accessToken);
        const res = await API.post("refresh-token", {
          refreshToken: accessToken,
        });

        const apiData = res.data;
        localStorage.setItem("accessToken", apiData.accessToken);
        localStorage.setItem("refreshToken", apiData.refreshToken);
        localStorage.setItem("expiresIn", apiData.expiresIn);
        localStorage.setItem("tokenSetTime", Date.now()); 

        console.log("Token refreshed successfully");

        if (interval) {
          clearInterval(interval);
        }

        const expiresInMs = (parseInt(apiData.expiresIn) - expiresIn) * 1000;
        interval = setInterval(refreshTokenApi, expiresInMs);
      } catch (err) {
        console.error("Token refresh failed:", err);

        if (err.response?.status === 401 || err.response?.status === 403) {
          // localStorage.clear();
          // window.location.href = "/";
        }
      }
    };

    const accessToken = localStorage.getItem("accessToken");
    const expiresIn = localStorage.getItem("expiresIn");
    const tokenSetTime = localStorage.getItem("tokenSetTime");

    if (accessToken) {
      if (tokenSetTime && expiresIn) {
        const currentTime = Date.now();
        const timeElapsed = (currentTime - parseInt(tokenSetTime)) / 1000;

        if (timeElapsed >= parseInt(expiresIn)) {
          console.log("Token expired, calling refresh API");
          refreshTokenApi();
        }
      } else {
        refreshTokenApi();
      }
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  return (
    <>
      <div className="App bg-gradient-to-br from-lime-50 via-green-50 to-white overflow-hidden">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Suspense fallback={<PageSkeleton />}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage title="Home" />} />
                <Route
                  path="/privacyAndPolicy"
                  element={<PrivacyAndPolicy title="Privacy & Policy" />}
                />
                <Route path="/aboutUs" element={<AboutUs title="About Us" />} />
                <Route path="/resources/blogs" element={<AyurvedaBlog />} />
                <Route path="/services" element={<OurServices />} />
                <Route path="/resources/gallery" element={<Gallary />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/deleteAccount" element={<DeleteAccount />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
        <Footer />
      </div>
      <ScrollToTopButton />
      <ScrollToHash />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
