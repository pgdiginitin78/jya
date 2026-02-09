import {
  AutoAwesome,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Close as CloseIcon,
  LocalHospital,
  People,
} from "@mui/icons-material";
import { Backdrop, Box, Fade, IconButton, Modal } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import aboutPageHeroBg from "../../asset/aboutMore/aboutPageHeroBg.jpg";
import SantoshSuryawanshi from "../../asset/aboutMore/founders/SantoshSuryawanshi.jpg";
import BhushanPuranik from "../../asset/aboutMore/founders/bhushanpuranik.jpg";
import {
  default as ManishaSuryawanshi,
  default as VaishaliHolmukhe,
} from "../../asset/aboutMore/founders/manishaSuryawanshi.png";
import SamruddhiPuranik from "../../asset/aboutMore/founders/samrudhhipuranik.jpg";

const pillars = [
  {
    title: "Mind-Body Balance",
    sanskrit: "Manas–Sharira Samya",
    subtitle:
      "Creating harmony between emotional health, mental clarity, and physical resilience.",
    includes: [
      "Emotional hygiene",
      "Stress detox",
      "Breathing sciences",
      "Mindful routines",
    ],
  },
  {
    title: "Seasonal & Biological Alignment",
    sanskrit: "Rutucharya + Dinacharya",
    subtitle: "Living in sync with nature's cycles",
    includes: [
      "Personalized daily routines",
      "Seasonal food patterns",
      "Circadian rhythm alignment",
    ],
  },
  {
    title: "Natural Nutrition & Gut Health",
    sanskrit: "Aahar–Agni Principle",
    subtitle: "Eating as per body type, season, and digestion.",
    includes: [
      "Real, unprocessed food",
      "Gut-strengthening habits",
      "Detox-friendly meals",
    ],
  },
  {
    title: "Movement, Strength & Longevity",
    sanskrit: "Vyayama + Kriya",
    subtitle: "Daily movement practices rooted in Yoga.",
    includes: [
      "Yogasanas for flexibility",
      "Strength-building kriyas",
      "Posture & mobility",
    ],
  },
  {
    title: "Healing Environment",
    sanskrit: "Nisarga–Sahavasa",
    subtitle: "Creating surroundings that support well-being.",
    includes: ["Nature connection", "Mindful community", "Reducing toxicity"],
  },
  {
    title: "Preventive Care",
    sanskrit: "Swasthyavrutta",
    subtitle: "Cultivating self-awareness to catch imbalances early.",
    includes: [
      "Preventive Ayurveda",
      "Panchakarma detox",
      "Lifestyle diagnostics",
    ],
  },
];

const founders = [
  {
    initials: "VS",
    image: SantoshSuryawanshi,
    title: "Vaidya Santosh Pandurang Suryawanshi, M.D. (Ayurveda), P.G.C.C.",
    desc: "Vaidya Santosh has been practicing Ayurveda, especially in preventive therapy, for the last 23 years.",
    education: [
      "Ayurvedacharya (B.A.M.S.) – Shivaji University, Kolhapur (1999)",
      "P.G.C.C. in Panchakarma Therapy – Tilak Ayurveda College, Pune University (2002)",
      "Ayurved Vachaspati (M.D. Ayurveda) – Bharati Vidyapeeth University, Pune (2005)",
    ],
    experience: [
      "Tarachand Ayurvedic Hospital, Tilak Ayurveda College, Pune – 2 years",
      "Bharati Ayurveda College and Hospital, Pune – 3 years",
    ],
    awards: [
      "Gitamrit Nisarga Yoga Ayurveda Dhanvantari Jivana Gaurava Puraskar – 2006",
      "Adarsha Vaidya Puraskar – 2012",
    ],
  },
  {
    initials: "MS",
    image: ManishaSuryawanshi,
    title: "Dr. Manisha Santosh Suryawanshi, M.B.B.S., D.Yed.",
    desc: "Dr. Manisha has been practicing Yoga Therapy for the last 23 years.",
    education: [
      "M.B.B.S. – Shivaji University, Kolhapur (2000)",
      "Post Graduate Diploma in Yoga Education (D.Yed.) – Kaivalyadham, Lonavala",
    ],
    specializations: [
      "Therapeutic Yoga",
      "Garbh Sanskar",
      "Major Illness Management",
    ],
  },
  {
    initials: "VH",
    image: VaishaliHolmukhe,
    title: "Dr. Vaishali Vasant Holmukhe, M.D. (Homeopathy)",
    desc: "A passionate classical homeopath with 13 years of experience.",
    education: ["B.H.M.S. (2005–2010)", "M.D. (Homeopathy) (2010–2013)"],
    certifications: ["CCAH", "MCH", "FHPC"],
  },
  {
    initials: "BP",
    image: BhushanPuranik,
    title: "Mr. Bhushan Puranik – CTO | Founder & Technology Architect",
    desc: "A seasoned technology entrepreneur with 17+ years of experience.",
    expertise: [
      "Product Architecture & Software Development",
      "Business Strategy & Growth",
      "Sales & Customer Acquisition",
    ],
  },
  {
    initials: "SP",
    image: SamruddhiPuranik,
    title: "Miss. Samruddhi Puranik – Strategist · Brand Architect",
    desc: "Strategist and brand architect with expertise in digital marketing.",
    expertise: [
      "Brand Strategy & Positioning",
      "Personal Branding",
      "Content Strategy",
    ],
  },
];

const AboutUs = () => {
  const [currentFounderPage, setCurrentFounderPage] = useState(0);
  const [currentPillarPage, setCurrentPillarPage] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFounder, setSelectedFounder] = useState(null);
  const [isManualControl, setIsManualControl] = useState(false);

  const foundersPerPage = 3;
  const founderPages = Math.ceil(founders.length / foundersPerPage);
  const pillarsPerPage = 3;
  const pillarPages = Math.ceil(pillars.length / pillarsPerPage);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPillarPage((prev) => (prev + 1) % pillarPages);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isManualControl) {
      const timeout = setTimeout(() => {
        setIsManualControl(false);
      }, 10000);
      return () => clearTimeout(timeout);
    }
  }, [isManualControl]);

  useEffect(() => {
    if (isManualControl) return;
    const interval = setInterval(() => {
      setCurrentFounderPage((prev) => (prev + 1) % founderPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [founderPages, isManualControl]);

  return (
    <div className=" text-gray-900">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${aboutPageHeroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/75 via-green-800/65 to-green-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10 animate-pulse" />

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-40 text-center text-white">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6"
          >
            <div>JYA</div>
            <div>Jyan Yog Ayu</div>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Bringing centuries-old Ayurvedic wisdom to modern life — guided
            ecosystem for 100-year living.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <button className="w-full sm:w-auto px-8 py-[18px] rounded-xl font-semibold bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 shadow-lg transform hover:scale-105 transition-all">
              Explore Our Philosophy
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold bg-white/20 backdrop-blur-md border-2 border-white/50 hover:bg-white/30 shadow-lg transform hover:scale-105 transition-all">
              Join The Movement
            </button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="px-4 lg:px-20 py-6"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-white rounded-3xl p-10 shadow-xl border hover:shadow-2xl transition-all">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              Our Philosophy
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                At JYA, we combine ancient Ayurvedic wisdom with modern
                understanding to offer holistic tools, learning, therapies, and
                community practices.
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-5">
                <li>Ancient knowledge made practical.</li>
                <li>Community-centered health ecosystems.</li>
                <li>Nature-first approaches for longevity.</li>
              </ul>
            </div>
          </div>

          <div className="bg-lime-600 text-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold mb-6">What We Offer</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle />
                <span>Holistic tools & learning</span>
              </li>
              <li className="flex items-start gap-3">
                <LocalHospital />
                <span>Therapies & Panchakarma</span>
              </li>
              <li className="flex items-start gap-3">
                <People />
                <span>Community practices</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="px-4 lg:px-20 py-6"
        id="founders"
      >
        <div className="w-full mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Founders & Team
          </h2>
          <div className="relative ">
            <button
              onClick={() =>
                setCurrentFounderPage(
                  (prev) => (prev - 1 + founderPages) % founderPages,
                )
              }
              className="absolute left-0 lg:-left-10 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-amber-800 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
            >
              <ChevronLeft />
            </button>

            <div className="py-3 px-4">
              <div className="w-full overflow-hidden">
                <motion.div
                  animate={{ x: `-${currentFounderPage * 100}%` }}
                  transition={{ type: "tween", duration: 0.7 }}
                  className="flex"
                >
                  {Array.from({ length: founderPages }).map((_, pageIdx) => (
                    <div key={pageIdx} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 py-3">
                        {founders
                          .slice(
                            pageIdx * foundersPerPage,
                            (pageIdx + 1) * foundersPerPage,
                          )
                          .map((founder, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: 100 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -100 }}
                              transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                              }}
                              whileHover={{ scale: 1.02, y: -6 }}
                              onClick={() => {
                                setSelectedFounder(founder);
                                setModalOpen(true);
                              }}
                              className="bg-white rounded-2xl border p-6 cursor-pointer flex flex-col justify-between hover:shadow-2xl transition-all"
                            >
                              <div className="flex items-center space-x-4 mb-4">
                                <div className="h-28 w-28 shrink-0">
                                  <img
                                    src={founder.image}
                                    alt={founder.initials}
                                    loading="lazy"
                                    className="h-full w-full rounded-full object-cover"
                                  />
                                </div>
                                <h3 className="font-bold text-base leading-tight text-gray-900">
                                  {founder.title}
                                </h3>
                              </div>
                              <p className="text-gray-600 text-sm">
                                {founder.desc}
                              </p>
                            </motion.div>
                          ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            <button
              onClick={() =>
                setCurrentFounderPage((prev) => (prev + 1) % founderPages)
              }
              className="absolute right-0 lg:-right-10 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-amber-800 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
            >
              <ChevronRight />
            </button>
          </div>

          <div className="flex justify-center gap-3 mt-4">
            {Array.from({ length: founderPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentFounderPage(idx)}
                className={`h-3 rounded-full transition-all ${
                  currentFounderPage === idx
                    ? "w-8 bg-amber-800"
                    : "w-3 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(8px)",
            },
          },
        }}
      >
        <Fade in={modalOpen}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              maxWidth: "896px",
              maxHeight: "90vh",
              bgcolor: "background.paper",
              borderRadius: "24px",
              boxShadow: 24,
              overflow: "auto",
              outline: "none",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#FFC3B8",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#FF5533",
                borderRadius: "4px",
                "&:hover": {
                  background: "#555",
                },
              },
            }}
          >
            {selectedFounder && (
              <>
                <IconButton
                  onClick={() => setModalOpen(false)}
                  sx={{
                    position: "sticky",
                    top: 16,
                    float: "right",
                    mr: 2,
                    bgcolor: "#fee2e2",
                    color: "#dc2626",
                    width: 40,
                    height: 40,
                    zIndex: 10,
                    "&:hover": {
                      bgcolor: "#fecaca",
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl  font-bold text-gray-900 mb-3">
                    {selectedFounder.title}
                  </h3>
                  <p className="text-base text-gray-600 mb-6">
                    {selectedFounder.desc}
                  </p>

                  {selectedFounder.education && (
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-amber-800 mb-3 flex items-center">
                        <span className="w-1.5 h-6 bg-amber-600 rounded-full mr-3"></span>
                        Education
                      </h4>
                      <ul className="space-y-2 ml-6 text-gray-700">
                        {selectedFounder.education.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedFounder.experience && (
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-amber-800 mb-3 flex items-center">
                        <span className="w-1.5 h-6 bg-amber-600 rounded-full mr-3"></span>
                        Professional Experience
                      </h4>
                      <ul className="space-y-2 ml-6 text-gray-700">
                        {selectedFounder.experience.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedFounder.awards && (
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-amber-800 mb-3 flex items-center">
                        <span className="w-1.5 h-6 bg-amber-600 rounded-full mr-3"></span>
                        Awards & Recognition
                      </h4>
                      <ul className="space-y-2 ml-6 text-gray-700">
                        {selectedFounder.awards.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedFounder.specializations && (
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-amber-800 mb-3 flex items-center">
                        <span className="w-1.5 h-6 bg-amber-600 rounded-full mr-3"></span>
                        Specializations
                      </h4>
                      <ul className="space-y-2 ml-6 text-gray-700">
                        {selectedFounder.specializations.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedFounder.certifications && (
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-amber-800 mb-3 flex items-center">
                        <span className="w-1.5 h-6 bg-amber-600 rounded-full mr-3"></span>
                        Certifications
                      </h4>
                      <ul className="space-y-2 ml-6 text-gray-700">
                        {selectedFounder.certifications.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedFounder.expertise && (
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-amber-800 mb-3 flex items-center">
                        <span className="w-1.5 h-6 bg-amber-600 rounded-full mr-3"></span>
                        Core Expertise
                      </h4>
                      <ul className="space-y-2 ml-6 text-gray-700">
                        {selectedFounder.expertise.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </>
            )}
          </Box>
        </Fade>
      </Modal>

      {/* Pillars Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="px-4 lg:px-20 py-6"
        id="framework"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4 text-green-800">
              JYA 100-Year Living Framework™
            </h1>
            <p className="text-xl mb-4 text-amber-800">
              A timeless blueprint for stress-free, balanced, and natural living
            </p>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              JYA's 100-Year Living Framework™ integrates ancient Ayurvedic
              wisdom, yogic principles, behavioral science, and modern medical
              understanding.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-center mb-4 text-green-800">
            THE SIX PILLARS OF 100-YEAR LIVING™
          </h2>

          <div className="relative">
            <button
              onClick={() =>
                setCurrentPillarPage(
                  (prev) => (prev - 1 + pillarPages) % pillarPages,
                )
              }
              className="absolute left-2 lg:-left-10 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-br from-amber-700 to-amber-900 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
            >
              <ChevronLeft />
            </button>

            <div className="py-3 px-4">
              <div className="w-full overflow-hidden">
                <motion.div
                  animate={{ x: `-${currentPillarPage * 100}%` }}
                  transition={{ type: "tween", duration: 0.7 }}
                  className="flex"
                >
                  {Array.from({ length: pillarPages }).map((_, pageIdx) => (
                    <div key={pageIdx} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 py-3">
                        {pillars
                          .slice(
                            pageIdx * pillarsPerPage,
                            (pageIdx + 1) * pillarsPerPage,
                          )
                          .map((pillar, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ scale: 1.02, y: -6 }}
                              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 min-h-[220px] flex flex-col justify-between"
                            >
                              <div>
                                <div className="inline-block px-3.5 py-1 rounded-full mb-2 bg-amber-100">
                                  <span className="text-lg font-bold text-green-800">
                                    {pageIdx * pillarsPerPage + idx + 1}
                                  </span>
                                </div>
                                <h3 className="text-xl font-bold text-green-800">
                                  {pillar.title}
                                </h3>
                                <p className="text-sm italic mb-2 text-amber-800">
                                  {pillar.sanskrit}
                                </p>
                                <p className="text-sm text-gray-700">
                                  {pillar.subtitle}
                                </p>
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold mt-4 mb-2 text-amber-800">
                                  Includes:
                                </h4>
                                <ul className="text-gray-700 text-sm space-y-1">
                                  {pillar.includes.map((item, i) => (
                                    <li key={i}>• {item}</li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            <button
              onClick={() =>
                setCurrentPillarPage((prev) => (prev + 1) % pillarPages)
              }
              className="absolute right-2 lg:-right-10 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-br from-amber-700 to-amber-900 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
            >
              <ChevronRight />
            </button>
          </div>

          <div className="flex justify-center gap-3 mt-4">
            {Array.from({ length: pillarPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPillarPage(idx)}
                className={`h-3 rounded-full transition-all ${
                  currentPillarPage === idx
                    ? "w-8 bg-amber-800"
                    : "w-3 bg-gray-300"
                }`}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-10 bg-white/90 rounded-3xl shadow-xl mt-6"
          >
            <div className="inline-flex items-center gap-2 bg-green-100 px-6 py-2 rounded-full mb-4">
              <AutoAwesome className="text-green-700 text-3xl" />
              <span className="text-lg font-semibold text-green-700">
                JYA PROMISE
              </span>
            </div>
            <p className="text-xl font-bold text-green-800">
              Live Better. Live Light. Live 100, Naturally.
            </p>
            <p className="text-gray-700 mt-3 max-w-3xl mx-auto">
              JYA's ecosystem includes guided routines, community programs,
              Ayurveda-based living tools, and nature-led interventions.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
