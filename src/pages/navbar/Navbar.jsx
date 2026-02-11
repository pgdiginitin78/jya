import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import MenuIcon from "@mui/icons-material/Menu";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LogoutIcon from "@mui/icons-material/Logout";
import { Tooltip } from "@mui/material";

import JYALogoImg from "../../asset/jyaLogo.png";
import LoginPage from "../login/LoginPage";
import SignUp from "../login/SignUp";
import { logoutUser } from "../../Actions";

const dropdownMotion = {
  initial: { opacity: 0, y: -10, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const mobilePanelMotion = {
  initial: { opacity: 0, height: 0 },
  animate: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

export default function ModernNavbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileWellnessOpen, setMobileWellnessOpen] = useState(false);
  const [mobileCommunityOpen, setMobileCommunityOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [scrolled, setScrolled] = useState(false);

  const userString = localStorage.getItem("user");
  const user =
    userString && userString !== "undefined" ? JSON.parse(userString) : null;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const getUserInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const nav = useMemo(
    () => ({
      about: [
        { label: "Origin of JYA", to: "/aboutUs" },
        { label: "Founders & Values", to: "/aboutUs#founders" },
        { label: "The 100-Year Lifestyle Framework", to: "/aboutUs#framework" },
      ],
      services: {
        wellness: [
          {
            label: "Individual Healing Retreats",
            to: "/services",
          },
          {
            label: "Corporate/Group Mindfulness Retreats",
            to: "/services#services",
          },
          {
            label: "Spiritual & Yogic Retreats",
            to: "/services#courses",
          },
        ],

        community: [
          {
            label: "Long-term sustainable living projects",
            to: "/services/community",
          },
          { label: "Experience-based programs", to: "/services/community" },
          {
            label: "Investment & affiliation options",
            to: "/services/community",
          },
        ],
        flat: [
          { label: "Barter Exchange", to: "/services" },
          { label: "Eco/Agro Tourism", to: "/services" },
          { label: "Learning & Courses", to: "/services/learning" },
        ],
      },
      resources: [
        { label: "Blogs", to: "/resources/blogs" },
        { label: "Podcast", to: "/resources/blogs" },
        { label: "Book Publications", to: "/resources/blogs" },
        { label: "Gallery", to: "/resources/gallery" },
        { label: "FAQ's", to: "/resources/faq" },
        { label: "PR releases", to: "/resources/blogs" },
      ],
    }),
    [],
  );

  return (
    <>
      <style jsx>{`
        .frosted-glass-navbar {
          background: #e6f2e3;
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .frosted-glass-navbar.scrolled {
          background: rgba(144, 186, 136, 0.85);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .nav-link {
          position: relative;
          color: #1a2e1a;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .nav-link:hover {
          background: rgba(255, 255, 255, 0.4);
          color: #0f1f0f;
        }

        .nav-link.active {
          background: rgba(255, 255, 255, 0.5);
          color: #0f1f0f;
          font-weight: 600;
        }

        .dropdown-menu {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(38, 61, 33, 0.1);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        }

        .dropdown-item {
          color: #263d21;
          padding: 0.75rem 1rem;
          transition: all 0.2s ease;
          border-radius: 0.375rem;
          margin: 0.125rem 0.5rem;
        }

        .dropdown-item:hover {
          background: rgba(144, 186, 136, 0.2);
          color: #1a2e1a;
          font-weight: 600;
        }

        .dropdown-wrapper {
          position: absolute;
          left: 0;
          top: 100%;
          padding-top: 0.5rem;
          opacity: 0;
          visibility: hidden;
          transition:
            opacity 0.2s ease,
            visibility 0.2s ease;
        }

        .nav-item:hover .dropdown-wrapper,
        .dropdown-wrapper:hover {
          opacity: 1;
          visibility: visible;
        }

        .submenu-wrapper {
          position: absolute;
          left: 100%;
          top: 0;
          padding-left: 0.5rem;
          opacity: 0;
          visibility: hidden;
          transition:
            opacity 0.2s ease,
            visibility 0.2s ease;
        }

        .dropdown-item-parent:hover .submenu-wrapper,
        .submenu-wrapper:hover {
          opacity: 1;
          visibility: visible;
        }

        .mobile-drawer {
          background: linear-gradient(135deg, #ffffff 0%, #f8faf9 100%);
        }

        .user-avatar {
          border: 2px solid rgba(38, 61, 33, 0.3);
          transition: all 0.3s ease;
        }

        .user-avatar:hover {
          border-color: rgba(38, 61, 33, 0.6);
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .nav-link {
            font-size: 0.9rem;
            padding: 0.5rem 0.75rem;
          }
        }
      `}</style>

      <header
        className={`fixed w-full top-0 z-50 frosted-glass-navbar ${scrolled ? "scrolled" : ""}`}
      >
        <nav className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <div className="bg-white rounded-xl px-3 py-2 shadow-sm hover:shadow-md transition-all duration-300">
                  <img
                    src={JYALogoImg}
                    alt="JYA Logo"
                    className="h-12 md:h-14 w-auto"
                    loading="lazy"
                  />
                </div>
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              <div>
                <Link to="/">
                  <button className="nav-link flex items-center gap-1">
                    <span>Home</span>
                  </button>
                </Link>
              </div>
              <div className="relative nav-item">
                <button className="nav-link flex items-center gap-1">
                  <span>About Us</span>
                  <KeyboardArrowDownRoundedIcon fontSize="small" />
                </button>

                <div className="dropdown-wrapper w-64">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="dropdown-menu rounded-xl py-2"
                  >
                    {nav.about.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        className="dropdown-item block"
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </motion.div>
                </div>
              </div>

              <div className="relative nav-item">
                <button className="nav-link flex items-center gap-1">
                  <span>Our Services</span>
                  <KeyboardArrowDownRoundedIcon fontSize="small" />
                </button>

                <div className="dropdown-wrapper w-72">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="dropdown-menu rounded-xl py-2"
                  >
                    <div className="relative dropdown-item-parent">
                      <NavLink
                        to="/services/wellness"
                        className="dropdown-item flex items-center justify-between"
                      >
                        <span>Wellness & Retreats</span>
                        <KeyboardArrowRightRoundedIcon fontSize="small" />
                      </NavLink>

                      <div className="submenu-wrapper w-72">
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="dropdown-menu rounded-xl py-2"
                        >
                          {nav.services.wellness.map((item) => (
                            <NavLink
                              key={item.label}
                              to={item.to}
                              className="dropdown-item block text-sm"
                            >
                              {item.label}
                            </NavLink>
                          ))}
                        </motion.div>
                      </div>
                    </div>

                    {nav.services.flat.slice(0, 2).map((item) => (
                      <NavLink
                        key={item.label}
                        to={item.to}
                        className="dropdown-item block"
                      >
                        {item.label}
                      </NavLink>
                    ))}

                    {/* Community Living Submenu */}
                    <div className="relative dropdown-item-parent">
                      <NavLink
                        to="/services/community"
                        className="dropdown-item flex items-center justify-between"
                      >
                        <span>Community Living</span>
                        <KeyboardArrowRightRoundedIcon fontSize="small" />
                      </NavLink>

                      <div className="submenu-wrapper w-72">
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="dropdown-menu rounded-xl py-2"
                        >
                          {nav.services.community.map((item) => (
                            <NavLink
                              key={item.label}
                              to={item.to}
                              className="dropdown-item block text-sm"
                            >
                              {item.label}
                            </NavLink>
                          ))}
                        </motion.div>
                      </div>
                    </div>

                    <NavLink
                      to="/services/learning"
                      className="dropdown-item block"
                    >
                      Learning & Courses
                    </NavLink>
                  </motion.div>
                </div>
              </div>

              <div className="relative nav-item">
                <button className="nav-link flex items-center gap-1">
                  <span>Resources</span>
                  <KeyboardArrowDownRoundedIcon fontSize="small" />
                </button>

                <div className="dropdown-wrapper w-56">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="dropdown-menu rounded-xl py-2"
                  >
                    {nav.resources.map((item) => (
                      <NavLink
                        key={item.label}
                        to={item.to}
                        className="dropdown-item block"
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </motion.div>
                </div>
              </div>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Contact Us
              </NavLink>
            </div>

            {/* Right Side - User/Auth Buttons */}
            <div className="flex items-center gap-3">
              {user?.userName ? (
                <Box
                  sx={{
                    display: { xs: "none", lg: "flex" },
                    alignItems: "center",
                    gap: 1.5,
                    px: 2,
                    py: 1,
                    borderRadius: "12px",
                    background: "rgba(255, 255, 255, 0.3)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "rgba(255, 255, 255, 0.4)",
                    },
                  }}
                >
                  <Avatar
                    src={user?.avatar}
                    alt={user?.userName}
                    className="user-avatar"
                    sx={{
                      width: 38,
                      height: 38,
                      bgcolor: "#263d21",
                      color: "#ffffff",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    {getUserInitials(user?.userName)}
                  </Avatar>
                  <Box sx={{ display: { xs: "none", xl: "block" } }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#1a2e1a",
                        fontWeight: 600,
                        lineHeight: 1.2,
                      }}
                    >
                      {user?.firstName}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#2d4a2d",
                        lineHeight: 1,
                      }}
                    >
                      {user?.lastName}
                    </Typography>
                  </Box>
                  <Tooltip title="Log Out">
                    <IconButton
                      onClick={() => {
                        logoutUser();
                        localStorage.removeItem("user");
                        localStorage.removeItem("accessToken");
                        localStorage.removeItem("refreshToken");
                      }}
                      sx={{
                        color: "#1a2e1a",
                        "&:hover": {
                          background: "rgba(255, 255, 255, 0.4)",
                        },
                      }}
                    >
                      <LogoutIcon sx={{ fontSize: 20 }} />
                    </IconButton>
                  </Tooltip>
                </Box>
              ) : (
                <div className="hidden lg:flex items-center gap-2">
                  <button
                    onClick={() => setOpenLogin(true)}
                    className="px-5 py-2 rounded-lg text-sm font-medium text-[#1a2e1a] border-2 border-[#263d21] hover:bg-white/40 transition-all duration-300"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setOpenSignUpModal(true)}
                    className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#263d21] text-white hover:bg-[#1f321a] transition-all duration-300 shadow-lg"
                  >
                    Register
                  </button>
                </div>
              )}

              {/* Mobile Menu Button */}
              <IconButton
                onClick={() => setMobileOpen(true)}
                sx={{
                  display: { lg: "none" },
                  color: "#1a2e1a",
                  background: "rgba(255, 255, 255, 0.3)",
                  borderRadius: "12px",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.5)",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: "100%", sm: 400 },
            background: "linear-gradient(135deg, #ffffff 0%, #f8faf9 100%)",
          },
        }}
      >
        <div className="h-full flex flex-col mobile-drawer">
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-gradient-to-r from-[#90ba88] to-[#a8d0a0]">
            <div className="font-bold text-xl text-[#1a2e1a]">Menu</div>
            <IconButton
              onClick={() => setMobileOpen(false)}
              sx={{ color: "#1a2e1a" }}
            >
              <CloseIcon />
            </IconButton>
          </div>

          <div className="px-4 py-4 space-y-2 overflow-auto flex-1">
            {/* User Info (Mobile) */}
            {user?.userName && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 2.5,
                    borderRadius: "16px",
                    background:
                      "linear-gradient(135deg, #90ba88 0%, #a8d0a0 100%)",
                    mb: 2,
                  }}
                >
                  <Avatar
                    src={user?.avatar}
                    alt={user?.userName}
                    sx={{
                      width: 52,
                      height: 52,
                      bgcolor: "#263d21",
                      color: "#ffffff",
                      fontSize: "18px",
                      fontWeight: 600,
                      border: "3px solid rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    {getUserInitials(user?.userName)}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#1a2e1a",
                        fontWeight: 600,
                        lineHeight: 1.3,
                      }}
                    >
                      {user?.firstName} {user?.lastName}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#2d4a2d",
                        lineHeight: 1,
                      }}
                    >
                      Member
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    px: 2.5,
                    py: 2,
                    borderRadius: "12px",
                    backgroundColor: "#f0f4f0",
                    mb: 3,
                  }}
                >
                  <AccessTimeIcon sx={{ fontSize: 20, color: "#263d21" }} />
                  <Typography
                    variant="body2"
                    sx={{ color: "#263d21", fontWeight: 600 }}
                  >
                    {formattedTime}
                  </Typography>
                </Box>
              </>
            )}

            {/* Login/Register Buttons (Mobile) */}
            {!user?.userName && (
              <div className="flex gap-2 mb-4">
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => {
                    setMobileOpen(false);
                    setOpenLogin(true);
                  }}
                  sx={{
                    borderColor: "#263d21",
                    color: "#263d21",
                    textTransform: "none",
                    borderRadius: "12px",
                    fontWeight: 600,
                    py: 1.5,
                    "&:hover": {
                      borderColor: "#263d21",
                      background: "rgba(38, 61, 33, 0.05)",
                    },
                  }}
                >
                  Login
                </Button>

                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    setMobileOpen(false);
                    setOpenSignUpModal(true);
                  }}
                  sx={{
                    backgroundColor: "#263d21",
                    textTransform: "none",
                    borderRadius: "12px",
                    fontWeight: 600,
                    py: 1.5,
                    "&:hover": { backgroundColor: "#1f321a" },
                  }}
                >
                  Register
                </Button>
              </div>
            )}

            <Divider className="!my-4" />

            {/* Mobile Navigation Links */}
            <NavLink
              to="/"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-[#263d21] font-medium hover:bg-green-50 transition-all ${
                  isActive ? "bg-[#263d21] text-white font-semibold" : ""
                }`
              }
            >
              Home
            </NavLink>

            {/* About Us Accordion */}
            <div>
              <button
                onClick={() => setMobileAboutOpen((s) => !s)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[#263d21] font-medium hover:bg-green-50 transition-all"
              >
                <span>About Us</span>
                <motion.span
                  animate={{ rotate: mobileAboutOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <KeyboardArrowDownRoundedIcon />
                </motion.span>
              </button>

              <AnimatePresence>
                {mobileAboutOpen && (
                  <motion.div
                    {...mobilePanelMotion}
                    className="ml-3 mt-1 space-y-1 overflow-hidden"
                  >
                    {nav.about.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2.5 rounded-lg text-sm text-[#263d21] hover:bg-green-50 ml-3 border-l-2 border-green-200"
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((s) => !s)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[#263d21] font-medium hover:bg-green-50 transition-all"
              >
                <span>Our Services</span>
                <motion.span
                  animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <KeyboardArrowDownRoundedIcon />
                </motion.span>
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    {...mobilePanelMotion}
                    className="ml-3 mt-1 space-y-1 overflow-hidden"
                  >
                    {/* Wellness Submenu */}
                    <div>
                      <button
                        onClick={() => setMobileWellnessOpen((s) => !s)}
                        className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm text-[#263d21] hover:bg-green-50 ml-3 border-l-2 border-green-200"
                      >
                        <span>Wellness & Retreats</span>
                        <motion.span
                          animate={{ rotate: mobileWellnessOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <KeyboardArrowDownRoundedIcon fontSize="small" />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {mobileWellnessOpen && (
                          <motion.div
                            {...mobilePanelMotion}
                            className="ml-6 mt-1 space-y-1 overflow-hidden"
                          >
                            {nav.services.wellness.map((item) => (
                              <NavLink
                                key={item.label}
                                to={item.to}
                                onClick={() => setMobileOpen(false)}
                                className="block px-4 py-2 rounded-lg text-xs text-[#263d21] hover:bg-green-50 ml-3 border-l-2 border-green-100"
                              >
                                {item.label}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {nav.services.flat.slice(0, 2).map((item) => (
                      <NavLink
                        key={item.label}
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2.5 rounded-lg text-sm text-[#263d21] hover:bg-green-50 ml-3 border-l-2 border-green-200"
                      >
                        {item.label}
                      </NavLink>
                    ))}

                    {/* Community Submenu */}
                    <div>
                      <button
                        onClick={() => setMobileCommunityOpen((s) => !s)}
                        className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm text-[#263d21] hover:bg-green-50 ml-3 border-l-2 border-green-200"
                      >
                        <span>Community Living</span>
                        <motion.span
                          animate={{ rotate: mobileCommunityOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <KeyboardArrowDownRoundedIcon fontSize="small" />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {mobileCommunityOpen && (
                          <motion.div
                            {...mobilePanelMotion}
                            className="ml-6 mt-1 space-y-1 overflow-hidden"
                          >
                            {nav.services.community.map((item) => (
                              <NavLink
                                key={item.label}
                                to={item.to}
                                onClick={() => setMobileOpen(false)}
                                className="block px-4 py-2 rounded-lg text-xs text-[#263d21] hover:bg-green-50 ml-3 border-l-2 border-green-100"
                              >
                                {item.label}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <NavLink
                      to="/services/learning"
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2.5 rounded-lg text-sm text-[#263d21] hover:bg-green-50 ml-3 border-l-2 border-green-200"
                    >
                      Learning & Courses
                    </NavLink>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Accordion */}
            <div>
              <button
                onClick={() => setMobileResourcesOpen((s) => !s)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[#263d21] font-medium hover:bg-green-50 transition-all"
              >
                <span>Resources</span>
                <motion.span
                  animate={{ rotate: mobileResourcesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <KeyboardArrowDownRoundedIcon />
                </motion.span>
              </button>

              <AnimatePresence>
                {mobileResourcesOpen && (
                  <motion.div
                    {...mobilePanelMotion}
                    className="ml-3 mt-1 space-y-1 overflow-hidden"
                  >
                    {nav.resources.map((item) => (
                      <NavLink
                        key={item.label}
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2.5 rounded-lg text-sm text-[#263d21] hover:bg-green-50 ml-3 border-l-2 border-green-200"
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-[#263d21] font-medium hover:bg-green-50 transition-all ${
                  isActive ? "bg-[#263d21] text-white font-semibold" : ""
                }`
              }
            >
              Contact Us
            </NavLink>

            {/* Logout Button (Mobile) */}
            {user?.userName && (
              <>
                <Divider className="!my-4" />
                <button
                  onClick={() => {
                    logoutUser();
                    localStorage.removeItem("user");
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    setMobileOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 font-medium transition-all"
                >
                  <LogoutIcon sx={{ fontSize: 20 }} />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </Drawer>

      {openLogin && (
        <LoginPage open={openLogin} handleClose={() => setOpenLogin(false)} setOpenLogin={setOpenLogin}/>
      )}
      {openSignUpModal && (
        <SignUp
          open={openSignUpModal}
          handleClose={() => setOpenSignUpModal(false)}
          setOpenLogin={setOpenLogin}
        />
      )}
    </>
  );
}
