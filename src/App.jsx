import { Skeleton } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "./pages/aboutUs/AboutUs";
import BlogDetail from "./pages/blogs/BlogDetail";
import AyurvedaBlog from "./pages/blogs/Blogs";
import ContactUs from "./pages/contactUs/ContactUs";
import Footer from "./pages/footer/Footer";
import Gallary from "./pages/gallary/Gallary";
import HomePage from "./pages/homePage/HomePage";
import ResetPassword from "./pages/login/ResetPassword";
import Navbar from "./pages/navbar/Navbar";
import OurServices from "./pages/OurServices/OurServices";
import DeleteAccount from "./pages/privacyAndPolicy/DeleteAccount";
import PrivacyAndPolicy from "./pages/privacyAndPolicy/PrivacyAndPolicy";
import ScrollToHash from "./ScrollToHash";
import ScrollToTopButton from "./ScrollToTopButton";
import { useTokenRefresh } from "./useTokenRefresh";

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
  useTokenRefresh();

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
              <Routes location={location} key={location.pathname.startsWith('/blog/') ? '/blog' : location.pathname}>
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
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/reset-password" element={<ResetPassword />} />
            
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
