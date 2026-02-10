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
    <div className="max-w-7xl mx-auto px-4 py-6">
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
    const expiresIn = localStorage.getItem("expiresIn");
    console.log("No refresh token found", expiresIn);
    const refreshTokenApi = async () => {
      try {
        const refreshToken = localStorage.getItem("refreshToken");

        if (!refreshToken) {
          return;
        }
        console.log("Calling refresh token API...");
        const res = await API.post("refresh-token", {
          refreshToken: refreshToken,
        });
        const apiData = res.data;
        localStorage.setItem("accessToken", apiData.accessToken);
        localStorage.setItem("refreshToken", apiData.refreshToken);
        localStorage.setItem("expiresIn", apiData.expiresIn);

        console.log("Token refreshed successfully");
      } catch (err) {
        console.error("Token refresh failed:", err);

        if (err.response?.status === 401 || err.response?.status === 403) {
          localStorage.clear();
          window.location.href = "/";
        }
      }
    };

    refreshTokenApi();
    const interval = setInterval(refreshTokenApi, expiresIn * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="App  bg-[#f0f6ec] overflow-hidden">
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
