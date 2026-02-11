import {
  ArrowForward,
  AutoAwesome,
  CheckCircle,
  Close,
  Groups3,
  LocalFlorist,
  MenuBook,
  Park,
  SelfImprovement,
  Spa,
  Sync,
  TrendingFlat,
} from "@mui/icons-material";
import { Box, Modal } from "@mui/material";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import CancelButtonModal from "../../components/common/button/CancelButtonModal";
import { MdEco } from "react-icons/md";
import cowShedIcon from "../../asset/ourServices/ourCourses/cowShed.png";
import FacilityIcon from "../../asset/ourServices/ourCourses/Facility.png";
import MassageWellnessIcon from "../../asset/ourServices/ourCourses/MassageWellness.png";
import OrganicFarmingIcon from "../../asset/ourServices/ourCourses/OrganicFarming.png";

//./asset/ourServices//ourCourses/cowShed.png

export default function OurServices() {
  const { scrollYProgress } = useScroll();
  const [activeService, setActiveService] = useState(null);
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const services = [
    {
      id: 1,
      title: "Wellness Retreats",
      subtitle: "Transform Your Inner Self",
      icon: SelfImprovement,
      color: "turmeric",
      features: [
        "Individual Healing Retreats",
        "Corporate/Group Mindfulness Retreats",
        "Spiritual & Yogic Retreats",
      ],
      stats: {
        duration: "3-14 Days",
        participants: "1-50",
        level: "All Levels",
      },
    },
    {
      id: 2,
      title: "Barter Exchange",
      subtitle: "Value Beyond Currency",
      icon: Sync,
      color: "sage",
      features: [
        "For Suppliers : Upload your products and connect with buyers directly",
        "For Buyers : Browse and purchase through our seamless e-commerce platform",
      ],
      stats: { products: "500+", traders: "200+", savings: "30%" },
    },
    {
      id: 3,
      title: "Eco Tourism",
      subtitle: "Nature's Authentic Call",
      icon: Park,
      color: "neem",
      features: [
        "Direct routing to Swagram and eco-tourism websites",
        "Integrated booking system with JYA",
        "Real-time availability calendar",
        "Comprehensive package details",
      ],
      stats: { locations: "12+", activities: "25+", rating: "4.9/5" },
    },
    {
      id: 4,
      title: "Community Living",
      subtitle: "Build Together, Grow Together",
      icon: Groups3,
      color: "lotus",
      features: [
        "Sustainable Living Projects",
        "Experience Programs",
        "Investment & Affiliation",
      ],
      stats: { members: "150+", projects: "8", growth: "+45%" },
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Cow Shed Management",
      category: "Agriculture",
      duration: "6 Weeks",
      level: "Beginner",
      icon: cowShedIcon,
      gradient: "from-amber-200 via-yellow-200 to-orange-200",
    },
    {
      id: 2,
      title: "Facility & Hospitality",
      category: "Management",
      duration: "8 Weeks",
      level: "Intermediate",
      icon: FacilityIcon,
      gradient: "from-green-200 via-emerald-200 to-teal-200",
    },
    {
      id: 3,
      title: "Massage & Wellness",
      category: "Health",
      duration: "12 Weeks",
      level: "Professional",
      icon: MassageWellnessIcon,
      gradient: "from-purple-200 via-pink-200 to-rose-200",
    },
    {
      id: 4,
      title: "Organic Farming",
      category: "Agriculture",
      duration: "10 Weeks",
      level: "Advanced",
      icon: OrganicFarmingIcon,
      gradient: "from-lime-200 via-green-200 to-emerald-200",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden">
      <div className="fixed inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(251, 191, 36, 0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="fixed inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          >
            <MdEco className="text-green-300 text-2xl" />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 z-50 origin-left shadow-lg"
        style={{ scaleX: scrollYProgress }}
      />

      <HeroSection />

      <div
        id="services"
        className="relative z-10 max-w-[95rem] mx-auto  py-6 sm:py-8 space-y-12"
      >
        <ServicesGrid
          services={services}
          activeService={activeService}
          setActiveService={setActiveService}
        />
      </div>
      <div
        id="courses"
        className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-14 py-6 sm:py-8 space-y-12"
      >
        <CoursesShowcase
          courses={courses}
          hoveredCourse={hoveredCourse}
          setHoveredCourse={setHoveredCourse}
        />
      </div>

      {activeService && (
        <ServiceModal
          open={activeService}
          service={
            activeService ? services.find((s) => s.id === activeService) : null
          }
          onClose={() => setActiveService(null)}
        />
      )}
    </div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <motion.section ref={ref} style={{ opacity, y }} className=" mt-40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex justify-center mb-4"
        >
          <div className="relative">
            <LocalFlorist className="text-amber-600" sx={{ fontSize: 60 }} />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 leading-tight">
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent">
              Elevate Your
            </span>
            <br />
            <span className="text-amber-900">Conscious Living</span>
          </h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-amber-800/80 max-w-2xl mx-auto leading-relaxed"
          >
            Ancient wisdom meets modern sustainability. Discover transformative
            experiences for mindful growth.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-6 py-3 rounded-full font-semibold overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30 w-full sm:w-auto"
          >
            <span className="relative flex items-center justify-center gap-2">
              Explore Services
              <ArrowForward className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 rounded-full font-semibold border-2 border-amber-600/40 text-amber-700 hover:bg-amber-100 transition-all w-full sm:w-auto"
          >
            View Courses
          </motion.button>
        </motion.div>

        {/* Compact Stats */}
        {/* <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-3 gap-4 max-w-xl mx-auto"
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "50+", label: "Programs" },
            { value: "98%", label: "Satisfaction" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-3 border border-amber-200/50 shadow-sm"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-amber-700/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </motion.section>
  );
}

function ServicesGrid({ services, activeService, setActiveService }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-200/50 mb-3">
          <AutoAwesome className="text-amber-600" sx={{ fontSize: 20 }} />
          <span className="text-sm font-semibold text-amber-700">
            Our Services
          </span>
        </div>
        <h2 className="text-3xl font-bold text-amber-900 mb-2">
          Core Offerings
        </h2>
        <p className="text-amber-800/70 max-w-2xl mx-auto">
          Comprehensive solutions for sustainable living and personal growth
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, idx) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={idx}
            isInView={isInView}
            onClick={() => setActiveService(service.id)}
          />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ service, index, isInView, onClick }) {
  const Icon = service.icon;

  const colorMap = {
    turmeric: {
      bg: "from-amber-100 to-yellow-100",
      border: "border-amber-300/50 hover:border-amber-400",
      icon: "from-amber-400 to-orange-500",
      text: "text-amber-600",
      shadow: "shadow-amber-200",
    },
    sage: {
      bg: "from-green-100 to-emerald-100",
      border: "border-green-300/50 hover:border-green-400",
      icon: "from-green-400 to-emerald-500",
      text: "text-green-600",
      shadow: "shadow-green-200",
    },
    neem: {
      bg: "from-lime-100 to-green-100",
      border: "border-lime-300/50 hover:border-lime-400",
      icon: "from-lime-400 to-green-500",
      text: "text-lime-700",
      shadow: "shadow-lime-200",
    },
    lotus: {
      bg: "from-pink-100 to-rose-100",
      border: "border-pink-300/50 hover:border-pink-400",
      icon: "from-pink-400 to-rose-500",
      text: "text-pink-600",
      shadow: "shadow-pink-200",
    },
  };

  const colors = colorMap[service.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-2xl cursor-pointer
        bg-gradient-to-br ${colors.bg}
        border-2 ${colors.border}
        transition-all duration-300 p-5 group
        shadow-md hover:shadow-xl ${colors.shadow}
      `}
    >
      <motion.div
        whileHover={{ rotate: 10, scale: 1.1 }}
        className={`
          w-12 h-12 rounded-xl 
          bg-gradient-to-br ${colors.icon}
          flex items-center justify-center mb-4
          shadow-md
        `}
      >
        <Icon className="text-white" sx={{ fontSize: 24 }} />
      </motion.div>

      <div className="mb-4">
        <h3 className="text-lg font-bold text-amber-900 mb-1">
          {service.title}
        </h3>
        <p className="text-xs text-amber-700/70">{service.subtitle}</p>
      </div>

      <ul className="space-y-1.5 mb-4">
        {service.features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-xs text-amber-800"
          >
            <CheckCircle
              className={colors.text}
              sx={{ fontSize: 14, marginTop: "2px" }}
            />
            <span className="line-clamp-1">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between pt-3 border-t border-amber-900/10">
        {Object.entries(service.stats).map(([key, value], idx) => (
          <div key={idx} className="text-center">
            <div className={`text-sm font-bold ${colors.text}`}>{value}</div>
            <div className="text-[10px] text-amber-700/60 capitalize">
              {key}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center border border-amber-200/50">
        <span className="text-xs font-bold text-amber-600">0{service.id}</span>
      </div>

      <motion.div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <div
          className={`w-8 h-8 rounded-full bg-gradient-to-br ${colors.icon} flex items-center justify-center shadow-md`}
        >
          <ArrowForward className="text-white" sx={{ fontSize: 16 }} />
        </div>
      </motion.div>
    </motion.div>
  );
}

function CoursesShowcase({ courses, hoveredCourse, setHoveredCourse }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="mb-8"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-200/50 mb-2">
              <MenuBook className="text-orange-600" sx={{ fontSize: 20 }} />
              <span className="text-sm font-semibold text-orange-700">
                Learning Programs
              </span>
            </div>
            <h2 className="text-3xl font-bold text-amber-900 mb-1">
              Master New Skills
            </h2>
            <p className="text-amber-800/70">
              Practical courses for sustainable living
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2.5 rounded-full border-2 border-orange-400/50 text-orange-700 hover:bg-orange-100 transition-all text-sm font-semibold"
          >
            View All Courses
          </motion.button>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.map((course, idx) => (
          <CourseCard
            key={course.id}
            course={course}
            index={idx}
            isInView={isInView}
            isHovered={hoveredCourse === course.id}
            onHover={() => setHoveredCourse(course.id)}
            onLeave={() => setHoveredCourse(null)}
          />
        ))}
      </div>
    </div>
  );
}

function CourseCard({ course, index, isInView, isHovered, onHover, onLeave }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-amber-200/50 hover:border-amber-300 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-amber-200/50">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-40 group-hover:opacity-60 transition-opacity`}
        />

        <div className="relative z-10 p-5">
          <div className="flex justify-center flex-col items-center">
            <motion.div
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0,
              }}
              className="text-5xl mb-3"
            >
              <img src={course.icon} className="h-12 w-12" loading="lazy" />
            </motion.div>
            <div className="inline-block px-3 py-1 rounded-full bg-white/80 border border-amber-300/50 mb-2">
              <span className="text-xs text-amber-700 font-semibold">
                {course.category}
              </span>
            </div>
          </div>

          <h3 className="text-base font-bold text-center text-amber-900 mb-1 line-clamp-2 min-h-[2rem]">
            {course.title}
          </h3>

          <div className="flex items-center justify-center gap-3 mb-4 text-xs text-amber-700/70">
            <div className="flex items-center gap-1">
              <span>⏱</span>
              <span>{course.duration}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-amber-400/50" />
            <div className="flex items-center gap-1">
              <span>📊</span>
              <span>{course.level}</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2"
          >
            Enroll Now
            <TrendingFlat
              className="group-hover:translate-x-1 transition-transform"
              sx={{ fontSize: 18 }}
            />
          </motion.button>
        </div>
        <motion.div
          animate={{
            x: isHovered ? ["-100%", "100%"] : "-100%",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          style={{ width: "50%" }}
        />
      </div>
    </motion.div>
  );
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
};

function ServiceModal({ open, service, onClose }) {
  if (!service) return null;

  const Icon = service.icon;

  return (
    <AnimatePresence>
      <Modal open={open}>
        <Box
          sx={modalStyle}
          className="w-[90vw] sm:w-[500px] p-0 rounded-xl overflow-y-auto"
        >
          <div className="relative p-4 sm:p-6  bg-gradient-to-br from-amber-100 to-yellow-100">
            <CancelButtonModal onClick={onClose} />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              <div className="w-14 h-14  rounded-xl bg-amber-500 flex items-center justify-center shadow">
                <Icon sx={{ color: "#fff", fontSize: 30 }} />
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-900">
                  {service.title}
                </h2>
                <p className="text-sm sm:text-base text-amber-700">
                  {service.subtitle}
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2 text-amber-900">
              <CheckCircle fontSize="medium text-green-500" />
              What's Included
            </h3>

            <ul className="space-y-2 sm:space-y-3 mb-6">
              {service.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm sm:text-base leading-relaxed"
                >
                  <CheckCircle
                    fontSize="small"
                    className="text-green-500 mt-1 flex-shrink-0"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 sm:py-4 rounded-xl bg-amber-500 text-white font-semibold text-base sm:text-lg shadow-lg"
            >
              Get Started Now
            </motion.button>
          </div>
        </Box>
      </Modal>
    </AnimatePresence>
  );
}
