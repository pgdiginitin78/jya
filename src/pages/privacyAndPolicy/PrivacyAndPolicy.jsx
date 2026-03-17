import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Users,
  Bell,
  Mail,
  Globe,
  Trash2,
  PauseCircle,
  X,
  AlertTriangle,
  Info,
  BookOpen,
  Database,
  Smartphone,
  RefreshCw,
  HeartPulse,
  Phone,
  UserCheck,
  Settings,
} from "lucide-react";
import { Modal, Box, Fade, Backdrop } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PrivacyAndPolicy() {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const navigate = useNavigate();

  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const inView0 = useInView(ref0, { once: true, margin: "-60px" });
  const inView1 = useInView(ref1, { once: true, margin: "-60px" });
  const inView2 = useInView(ref2, { once: true, margin: "-60px" });
  const inView3 = useInView(ref3, { once: true, margin: "-60px" });

  const PrivacyForAyurMitra = [
    {
      ref: ref0,
      inView: inView0,
      title: "About This Policy",
      content: (
        <p>
          This Privacy Policy applies to the mobile application&nbsp;
          <strong className="text-emerald-900 font-semibold">
            "AyurMitra"
          </strong>
          ,&nbsp; which is developed and published by&nbsp;
          <strong className="text-emerald-900 font-semibold">
            Jnanayogayu
          </strong>
          .
        </p>
      ),
    },
    {
      ref: ref1,
      inView: inView1,
      title: "What is AyurMitra?",
      content: (
        <p>
          AyurMitra is a digital platform created by&nbsp;
          <strong className="text-emerald-900 font-semibold">
            Jnanayogayu
          </strong>
          &nbsp; to provide <em className="italic">Ayurvedic guidance</em>&nbsp;
          and related services — bringing the wisdom of ancient wellness
          traditions to your fingertips.
        </p>
      ),
    },
    {
      ref: ref2,
      inView: inView2,
      title: "Relationship Statement",
      content: (
        <p>
          AyurMitra is a product of&nbsp;
          <strong className="text-emerald-900 font-semibold">
            Jnanayogayu
          </strong>
          &nbsp; and is available on the <br />
          <span className="bg-emerald-100 border border-emerald-300 rounded-md px-2 py-0.5 font-semibold text-emerald-800 text-sm">
            Google Play Store
          </span>
        </p>
      ),
    },
    {
      ref: ref3,
      inView: inView3,
      title: "Development Credit",
      content: (
        <blockquote className="bg-emerald-50/60 rounded-xl px-5 py-4 italic text-emerald-800 border border-emerald-200/50">
          "The AyurMitra mobile application is developed by&nbsp;
          <strong className="text-emerald-900 not-italic font-semibold">
            Probus Software Solutions&nbsp;
          </strong>
          for&nbsp;
          <strong className="text-emerald-900 not-italic font-semibold">
            Jnanayogayu
          </strong>
          ."
        </blockquote>
      ),
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const handleOpenModal = (type) => {
    setModalType(type);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleDeleteAccount = () => {
    console.log("Account deletion confirmed");
    handleCloseModal();
  };

  const handleDeactivateAccount = () => {
    console.log("Account deactivation confirmed");
    handleCloseModal();
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: "85%", md: "600px" },
    maxHeight: { xs: "90vh", sm: "85vh" },
    bgcolor: "background.paper",
    borderRadius: "16px",
    boxShadow: 24,
    overflow: "auto",
    outline: "none",
  };

  const sections = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "1. Introduction",
      content: [
        {
          subtitle: "",
          text: 'This Privacy Policy describes how your information is collected, used, shared, and protected when you use the "AyurMitra" mobile application (referred to as the "App"). This App is developed and published by Jnanayogayu.',
        },
        {
          subtitle: "",
          text: "By using the App or registering for an account, you agree to the terms of this Privacy Policy.",
        },
      ],
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "2. About Us (Who We Are)",
      content: [
        {
          subtitle: "Publisher",
          text: "Jnanayogayu",
        },
        {
          subtitle: "Developer",
          text: "The AyurMitra mobile application is developed by Probus Software Solutions for Jnanayogayu.",
        },
        {
          subtitle: "Contact Email",
          text: "swagrama.lavale@gmail.com",
        },
      ],
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "3. What is AyurMitra? (App Functionality)",
      content: [
        {
          subtitle: "",
          text: "AyurMitra is a digital platform created by Jnanayogayu to provide Ayurvedic guidance and related services. Its core functionality allows users to:",
        },
        {
          subtitle: "Account Creation",
          text: "Create a user account using email verification.",
        },
        {
          subtitle: "Browse Doctors",
          text: "Browse departments and doctors based on manually selected location.",
        },
        {
          subtitle: "Doctor Profiles",
          text: "View detailed doctor profiles.",
        },
        {
          subtitle: "Book Appointments",
          text: "Book appointments for themselves or their family members.",
        },
        {
          subtitle: "Upload Medical Files",
          text: "Upload medical reports, prescriptions, or health-related images for doctor consultation.",
        },
        {
          subtitle: "Appointment Management",
          text: "View their list of booked appointments.",
        },
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "4. What Information Do We Collect?",
      content: [
        {
          subtitle: "A. Information You Give Us Directly",
          text: "",
          isGroupHeader: true,
        },
        {
          subtitle: "Account Information",
          text: "To use the App, you must create an account. We collect your Name, mobile number, and Email Address. Email verification is mandatory to activate your account. This is used for identification and account security.",
        },
        {
          subtitle: "Family Member Information",
          text: "If you wish to book appointments for your family members, you can use the 'Add New Patient' option. You may choose to add their Names. This information is only used to book appointments on their behalf. By adding their details, you confirm that you have their consent.",
        },
        {
          subtitle: "Uploaded Content (Medical Reports / Photos)",
          text: "If you choose to upload any files, reports, prescriptions, or images for consultation purposes, we collect and store these files. This is considered sensitive health information.",
        },
        {
          subtitle: "B. Information Collected Automatically",
          text: "",
          isGroupHeader: true,
        },
        {
          subtitle: "Manually Selected Location",
          text: "To show you relevant doctors and Ayurvedic centers, the App asks you to manually select your preferred location (such as your city or area) from a provided list. We do not automatically track your device's real-time GPS location. This selected location is stored with your account preferences.",
        },
        {
          subtitle: "Usage Data",
          text: "We collect information on how you use the App, such as which departments you view or which doctor profiles you check. This helps us improve the App.",
        },
        {
          subtitle: "Device Information",
          text: "We may collect information about your mobile device, including the model and operating system version, to fix technical issues.",
        },
        {
          subtitle: "C. Appointment Information",
          text: "",
          isGroupHeader: true,
        },
        {
          subtitle: "",
          text: "When you book an appointment, we collect the following details necessary to fulfill the service:",
        },
        {
          subtitle: "Patient Name",
          text: "Your name (or the selected family member's name).",
        },
        {
          subtitle: "Service / Department",
          text: "The selected service or department.",
        },
        {
          subtitle: "Date & Time Slot",
          text: "The selected date and time slot.",
        },
        {
          subtitle: "Doctor Name",
          text: "The name of the selected doctor.",
        },
        {
          subtitle: "Uploaded Files",
          text: "Any uploaded files or reports related to the appointment.",
        },
      ],
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "5. How Do We Use Your Information?",
      content: [
        {
          subtitle: "Account Management",
          text: "To create and manage your user account.",
        },
        {
          subtitle: "Identity Verification",
          text: "To verify your identity (via email verification).",
        },
        {
          subtitle: "Location-Based Services",
          text: "To display nearby doctors and services based on your selected location.",
        },
        {
          subtitle: "Appointment Processing",
          text: "To process, confirm, and manage your appointment bookings.",
        },
        {
          subtitle: "Medical Consultation",
          text: "To share uploaded medical reports or files with your selected doctor for better consultation and treatment.",
        },
        {
          subtitle: "Service Communications",
          text: "To send you important service-related communications (e.g., appointment reminders or confirmations).",
        },
        {
          subtitle: "App Improvement",
          text: "To improve the App's functionality, fix bugs, and analyze usage patterns.",
        },
        {
          subtitle: "Platform Security",
          text: "To ensure the security of our platform.",
        },
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "6. Do We Share Your Information?",
      content: [
        {
          subtitle: "",
          text: "We value your trust and do not sell your personal information (name, email, medical reports) to any third party for marketing purposes. However, we need to share specific information to provide our service:",
        },
        {
          subtitle: "With Doctors / Ayurvedic Centers",
          text: "To complete your appointment booking and enable proper consultation, necessary details (your name, date, time, and any uploaded medical reports or files) are shared with the relevant doctor or center.",
        },
        {
          subtitle: "With Service Providers — Google Analytics",
          text: "To understand how users interact with the App. This data is anonymized.",
        },
        {
          subtitle: "With Service Providers — Cloud Storage Providers",
          text: "To securely store your uploaded files and reports (e.g., Google Firebase or similar secure cloud services).",
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose information when required by law or to protect the rights, property, or safety of our business, customers, or others.",
        },
      ],
    },
    {
      icon: <HeartPulse className="w-6 h-6" />,
      title: "7. Special Note on Medical Reports and Files (Sensitive Data)",
      content: [
        {
          subtitle: "Sensitive Data",
          text: "Any health-related information you upload (reports, prescriptions, images) is treated as sensitive personal data with special care.",
        },
        {
          subtitle: "Purpose Limitation",
          text: "This data is used only for your consultation with the selected doctor and is not used for any other purpose.",
        },
        {
          subtitle: "Access",
          text: "Only you and the doctor/center you book an appointment with can view these files.",
        },
        {
          subtitle: "Storage",
          text: "These files are stored securely with encryption.",
        },
        {
          subtitle: "Consent",
          text: "By uploading health information, you provide explicit consent to share it with your chosen healthcare provider.",
        },
      ],
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "8. Data Protection & Security",
      content: [
        {
          subtitle: "Encryption & Security",
          text: "All sensitive data, including health information and payment details, is encrypted using industry-standard SSL/TLS protocols and HTTPS encryption. We implement strict security measures to protect your information from unauthorized access. Uploaded medical reports are stored in secure, encrypted cloud storage.",
        },
        {
          subtitle: "Confidentiality",
          text: "Your health consultations and Ayurvedic treatment details are kept strictly confidential, following traditional Ayurvedic ethics and modern privacy standards.",
        },
        {
          subtitle: "Limited Access",
          text: "Only authorized Ayurvedic practitioners and necessary staff members have access to your health information, and only when required to provide services to you.",
        },
      ],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "9. Data Retention",
      content: [
        {
          subtitle: "Account Data",
          text: "We retain your personal data for as long as your account is active.",
        },
        {
          subtitle: "Medical Reports / Uploaded Files",
          text: "These files are retained as long as your account is active or as long as necessary for medical/legal purposes. You can delete individual files anytime.",
        },
        {
          subtitle: "Upon Account Deletion",
          text: "If you delete your account, we will permanently delete your information and uploaded files from our active systems. Information may be retained only as necessary for legal obligations or legitimate business purposes (like backups).",
        },
      ],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "10. Your Rights & Choices",
      content: [
        {
          subtitle: "Access",
          text: "You have the right to know what information we hold about you.",
        },
        {
          subtitle: "Access & Correction",
          text: "You have the right to access, update, or correct your personal and health information at any time through your account settings or by contacting us.",
        },
        {
          subtitle: "Data Deletion",
          text: "You have the right to request the deletion of your account and all personal data. Please note that we may retain certain information for legal compliance and record-keeping purposes.",
        },
        {
          subtitle: "Marketing Preferences",
          text: "You can opt-out of marketing communications at any time while still receiving essential service-related messages about appointments and orders.",
        },
        {
          subtitle: "Cookie Control",
          text: "You can manage cookie preferences through your browser settings and control how we collect usage data.",
        },
        {
          subtitle: "How to Exercise Your Rights",
          text: "To exercise these rights, please use the in-app features or contact us using the information in Section 17.",
        },
      ],
    },
    {
      icon: <Trash2 className="w-6 h-6" />,
      title: "11. How to Delete Your Account",
      content: [
        {
          subtitle: "",
          text: "You can manage your data directly within the App. To Delete Your Entire Account, follow these steps:",
        },
        {
          subtitle: "Step 1",
          text: "Open the App and log in.",
        },
        {
          subtitle: "Step 2",
          text: "Go to the 'Settings' section.",
        },
        {
          subtitle: "Step 3",
          text: "Look for the 'Delete Account' option.",
        },
        {
          subtitle: "Step 4",
          text: "Confirm your choice. Once confirmed, your account and all associated data (including your profile, appointment history, and all uploaded medical reports) will be permanently deleted and cannot be recovered.",
        },
        {
          subtitle: "Important Note",
          text: "Account deletion is permanent and irreversible.",
        },
      ],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "12. Children's Privacy",
      content: [
        {
          subtitle: "Age Restriction",
          text: "Our App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.",
        },
        {
          subtitle: "Minors Aged 13–18",
          text: "For minors aged 13–18, parental consent is required for Ayurvedic consultations.",
        },
      ],
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "13. Cookies & Tracking",
      content: [
        {
          subtitle: "Essential Cookies",
          text: "We use necessary cookies to enable core functionality like secure login, shopping cart, and appointment booking systems.",
        },
        {
          subtitle: "Analytics",
          text: "Analytics cookies help us understand how visitors interact with our website, allowing us to improve our Ayurvedic resources and user experience.",
        },
        {
          subtitle: "Personalization",
          text: "We use cookies to remember your preferences and provide personalized content related to your dosha type and wellness interests.",
        },
      ],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "14. International Data Transfers",
      content: [
        {
          subtitle: "Cross-Border Transfers",
          text: "If you access our services from outside our primary operating country, your information may be transferred and processed internationally. We ensure appropriate safeguards are in place to protect your data.",
        },
      ],
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "15. App Permissions",
      content: [
        {
          subtitle: "",
          text: "The App may request the following device permissions to function properly:",
        },
        {
          subtitle: "Internet Permission",
          text: "Required to fetch data (like the doctor list) from our servers and to book appointments.",
        },
        {
          subtitle: "Storage / Media Permission",
          text: "Required only if you choose to upload medical reports, prescriptions, or images from your device. This permission is only used when you actively select a file to upload.",
        },
        {
          subtitle: "Note on GPS / Location",
          text: "The app does not require GPS location access. Location is manually selected from a list.",
        },
      ],
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "16. Changes to This Policy",
      content: [
        {
          subtitle: "",
          text: "We may update this Privacy Policy from time to time. If we make significant changes, we will notify you by posting a notice within the App or by sending you an email (if feasible). We encourage you to review this policy periodically.",
        },
        {
          subtitle: "Last Updated Date",
          text: 'The "Last Updated" date at the top of this policy indicates when it was last revised.',
        },
      ],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "17. Contact Us",
      content: [
        {
          subtitle: "",
          text: "If you have any questions about this Privacy Policy or your data, please contact us at:",
        },
        {
          subtitle: "Email",
          text: "privacy@ayurmitra.com",
        },
        {
          subtitle: "Response Time",
          text: "We will respond to your query within 48 hours.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-amber-50">
      <motion.div
        className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-10 md:py-40 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-block mb-4"
          >
            <Shield className="w-12 h-12 md:w-14 md:h-14 mx-auto" />
          </motion.div>
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Privacy & Policy
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-green-100 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Your trust is sacred to us. We are committed to protecting your
            personal and health information with the highest standards of
            confidentiality and care.
          </motion.p>
          <motion.p
            className="text-xs md:text-sm text-green-200 mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Last Updated: March 15, 2026
          </motion.p>
        </div>
      </motion.div>

      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');
          .font-serif { font-family: 'Lora', Georgia, serif !important; }
          .font-display { font-family: 'Cormorant Garamond', Georgia, serif !important; }
        `}</style>

        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 px-4 sm:px-8 py-10 md:py-16 relative overflow-hidden">
          <div className="fixed top-[-10%] right-[-10%] w-96 h-96 rounded-full bg-green-300/10 pointer-events-none" />
          <div className="fixed bottom-[5%] left-[-8%] w-72 h-72 rounded-full bg-emerald-800/8 pointer-events-none" />
          <div className="fixed top-[40%] right-[5%] w-48 h-48 rounded-full bg-green-400/6 pointer-events-none" />

          <div className="mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-12 md:mb-16"
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="font-display text-4xl md:text-6xl font-bold text-emerald-950 tracking-[0.12em] uppercase mb-2"
              >
                AyurMitra
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "7rem" }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto my-3"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="font-serif italic text-base md:text-lg text-emerald-600 tracking-widest"
              >
                Privacy Policy
              </motion.p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-4">
              {PrivacyForAyurMitra.map((s, i) => (
                <motion.div
                  key={s.title}
                  ref={s.ref}
                  initial={{ opacity: 0, y: 40 }}
                  animate={
                    s.inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                  }
                  transition={{
                    duration: 0.7,
                    delay: i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative bg-white/55 backdrop-blur-lg border border-emerald-200/40 rounded-2xl p-4 mb-3 shadow-sm overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-green-800 rounded-l-2xl" />
                  <h2 className="font-serif text-lg md:text-xl font-bold text-emerald-950 tracking-wide mb-4">
                    {s.title}
                  </h2>
                  <div className="font-serif text-sm md:text-base text-emerald-800 leading-relaxed">
                    {s.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </>

      <motion.div
        className="max-w-[95rem] mx-auto px-4 lg:px-10 2xl:px-0 py-8 md:py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="bg-white rounded-xl shadow-lg p-5 md:p-7 border-t-4 border-green-600">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
            Our Privacy Policy
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            At AyurMitra, we honor the ancient principle of confidentiality
            inherent in the healing arts. This Privacy Policy explains how we
            collect, use, protect, and share your information when you use our
            App, book consultations, or access Ayurvedic health services. We
            encourage you to read this policy carefully to understand our
            practices regarding your personal and health information.
          </p>
        </div>
      </motion.div>

      <div className="max-w-[95rem] mx-auto px-4 lg:px-10 2xl:px-0 pb-10 md:pb-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 md:p-5 flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm flex-shrink-0">
                  {section.icon}
                </div>
                <h2 className="text-lg md:text-xl font-bold">
                  {section.title}
                </h2>
              </div>

              <div className="p-4 md:p-6 space-y-4">
                {section.content.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
                  >
                    {item.isGroupHeader ? (
                      <div className="flex items-center gap-2 mt-3 mb-1">
                        <div className="h-px flex-1 bg-green-100" />
                        <span className="text-xs font-bold uppercase tracking-widest text-green-600 bg-green-50 border border-green-200 px-3 py-1 rounded-full whitespace-nowrap">
                          {item.subtitle}
                        </span>
                        <div className="h-px flex-1 bg-green-100" />
                      </div>
                    ) : (
                      <>
                        {item.subtitle && (
                          <h3 className="text-base md:text-lg font-semibold text-green-700 mb-1.5">
                            {item.subtitle}
                          </h3>
                        )}
                        {item.text && (
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {item.text}
                          </p>
                        )}
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="max-w-[95rem] mx-auto px-4 lg:px-10 2xl:px-0 pb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl shadow-lg p-5 md:p-7 border-l-4 border border-slate-500">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Settings className="w-6 h-6 text-slate-600" />
            Account Management
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5 text-sm">
            You have full control over your account. Choose to temporarily pause
            your account or permanently delete all your data. You can also
            manage your account directly from within the App by navigating to
            the Settings section and selecting the appropriate option.
          </p>
          <div className=" mx-auto py-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                  Delete Your AyurMitra Account
                </h1>
                <p className="text-gray-600 text-sm sm:text-base">
                  AyurMitra, developed by Jnanayogayu, allows you to permanently
                  delete your account and all associated personal data directly
                  within the app.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-medium text-gray-900">
                  Data That Will Be Deleted
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm sm:text-base">
                  <li>Your profile information (name, email, mobile number)</li>
                  <li>Family member details added for appointments</li>
                  <li>All booked appointment history</li>
                  <li>
                    Uploaded medical reports, prescriptions, images, or other
                    files
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                <p className="text-red-700 text-sm sm:text-base">
                  <span className="font-medium">Important:</span> Account
                  deletion is permanent and irreversible. Once deleted, you will
                  lose access to your appointment history and uploaded files.
                </p>
                <p className="text-red-600 text-sm mt-2">
                  Some data may be retained temporarily in backups or as
                  required by law (for legal compliance or dispute resolution),
                  but it will not be accessible or used in the app.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-medium text-gray-900">
                  How to Delete Your Account
                </h2>
                <ol className="list-decimal pl-5 space-y-2 text-gray-600 text-sm sm:text-base">
                  <li>Open the AyurMitra app and log in to your account</li>
                  <li>
                    Go to the <span className="font-medium">Settings</span>{" "}
                    section
                  </li>
                  <li>
                    Select the{" "}
                    <span className="font-medium">Delete Account</span> option
                  </li>
                  <li>Read the confirmation message carefully</li>
                  <li>
                    Confirm your choice to permanently delete your account
                  </li>
                </ol>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                <h2 className="text-lg font-medium text-gray-900">
                  Need Help?
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  If you face any difficulty, contact us at:
                </p>
                <a
                  href="mailto:swagrama.lavale@gmail.com"
                  className="text-emerald-600 font-medium break-all"
                >
                  swagrama.lavale@gmail.com
                </a>
                <p className="text-gray-500 text-sm">
                  Note: For security reasons, account deletion must be completed
                  within the app.
                </p>
              </div>

              <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
                <p>
                  For more details, see our{" "}
                  <a
                    href="https://ayurmitra.com/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 font-medium"
                  >
                    Privacy Policy
                  </a>
                </p>
                <p className="text-gray-400">Last updated: March 2026</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                  <PauseCircle className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-base mb-1">
                    Deactivate Account
                  </h3>
                  <p className="text-xs text-gray-600">
                    Temporarily pause your account. Your data is preserved and
                    you can reactivate anytime by logging back in.
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleOpenModal("deactivate")}
                className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <PauseCircle className="w-4 h-4" />
                Deactivate Account
              </motion.button>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-red-200 hover:border-red-400 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                  <Trash2 className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-base mb-1">
                    Delete Account
                  </h3>
                  <p className="text-xs text-gray-600">
                    Permanently remove all your data including profile,
                    appointment history, and all uploaded medical reports. This
                    action cannot be undone.
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  navigate("/deleteAccount");
                }}
                className="w-full bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow hover:bg-red-700 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Delete Account
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {openModal && (
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
              sx: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
            },
          }}
        >
          <Fade in={openModal}>
            <Box sx={modalStyle}>
              {modalType === "delete" ? (
                <div className="relative">
                  <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-5 md:p-6 sticky top-0 z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-white/20 p-2 rounded-lg">
                          <Trash2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold">
                          Delete Account
                        </h3>
                      </div>
                      <button
                        onClick={handleCloseModal}
                        className="bg-white/20 hover:bg-white/30 p-1.5 rounded-lg transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="p-5 md:p-6 space-y-5">
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-red-900 text-sm mb-1">
                            Warning: This action is permanent
                          </h4>
                          <p className="text-red-800 text-xs">
                            Once you delete your account, there is no going
                            back. Please be certain.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-base mb-3 flex items-center gap-2">
                        <Info className="w-5 h-5 text-blue-600" />
                        What will be deleted:
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>
                            <strong>Personal Information:</strong> Name, email,
                            phone number, and address
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>
                            <strong>Health Records:</strong> All consultation
                            history, Prakriti/Vikriti assessments, and treatment
                            plans
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>
                            <strong>Uploaded Medical Reports:</strong> All
                            files, prescriptions, and images uploaded for
                            consultations
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>
                            <strong>Appointment History:</strong> All past and
                            pending appointment records
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>
                            <strong>Order History:</strong> Purchase records and
                            transaction details
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>
                            <strong>Preferences:</strong> Saved settings,
                            wellness goals, and personalized recommendations
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>
                            <strong>Subscriptions:</strong> Active subscriptions
                            and membership benefits
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-base mb-3 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-amber-600" />
                        What we may retain:
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500 mt-1">•</span>
                          <span>
                            Anonymized data for analytics and research purposes
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500 mt-1">•</span>
                          <span>
                            Transaction records required for legal and tax
                            compliance
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500 mt-1">•</span>
                          <span>
                            Backup data in our systems for up to 30 days
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 text-sm mb-2">
                        Deletion Timeline:
                      </h4>
                      <p className="text-xs text-gray-600">
                        Your account will be deactivated immediately. Complete
                        data deletion from all systems will be processed within
                        30 days. You'll receive a confirmation email once the
                        process is complete.
                      </p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 text-sm mb-2">
                        Not ready for permanent deletion?
                      </h4>
                      <p className="text-xs text-blue-800 mb-2">
                        Consider deactivating your account instead. You can take
                        a break and reactivate anytime without losing your data.
                      </p>
                      <button
                        onClick={() => {
                          handleCloseModal();
                          setTimeout(() => handleOpenModal("deactivate"), 300);
                        }}
                        className="text-blue-600 hover:text-blue-800 text-xs font-semibold underline"
                      >
                        Switch to Deactivate Account
                      </button>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-5 md:p-6 rounded-b-2xl border-t sticky bottom-0">
                    <div className="flex flex-col-reverse sm:flex-row gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleCloseModal}
                        className="flex-1 bg-gray-200 text-gray-700 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-300 transition-colors"
                      >
                        Cancel
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleDeleteAccount}
                        className="flex-1 bg-red-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        Yes, Delete My Account
                      </motion.button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-5 md:p-6 sticky top-0 z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-white/20 p-2 rounded-lg">
                          <PauseCircle className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold">
                          Deactivate Account
                        </h3>
                      </div>
                      <button
                        onClick={handleCloseModal}
                        className="bg-white/20 hover:bg-white/30 p-1.5 rounded-lg transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="p-5 md:p-6 space-y-5">
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-orange-900 text-sm mb-1">
                            Temporary Account Pause
                          </h4>
                          <p className="text-orange-800 text-xs">
                            Your account will be hidden but can be reactivated
                            anytime by logging back in.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-base mb-3 flex items-center gap-2">
                        <PauseCircle className="w-5 h-5 text-orange-600" />
                        While your account is deactivated:
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>
                            Your profile will be hidden from public view
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>
                            You won't receive any email notifications or
                            wellness tips
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>
                            Active subscriptions will be paused (no charges
                            during deactivation)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>
                            You cannot book new consultations or make purchases
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>
                            Scheduled appointments will need to be rescheduled
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-base mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-600" />
                        What stays safe and preserved:
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>
                            <strong>All your data:</strong> Personal info,
                            health records, and consultation history
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>
                            <strong>Uploaded medical reports:</strong> All files
                            remain intact and accessible upon reactivation
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>
                            <strong>Order history:</strong> Past purchases and
                            transaction records
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>
                            <strong>Preferences:</strong> Saved settings and
                            wellness goals
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>
                            <strong>Membership status:</strong> Your tier and
                            benefits remain intact
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 text-sm mb-2">
                        Easy Reactivation:
                      </h4>
                      <p className="text-xs text-green-800">
                        Simply log in with your email and password anytime to
                        reactivate your account. Everything will be exactly as
                        you left it — your health records, preferences, and
                        order history will be immediately available.
                      </p>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-semibold text-red-900 text-sm mb-2">
                        Need to permanently delete?
                      </h4>
                      <p className="text-xs text-red-800 mb-2">
                        If you want to completely remove all your data from our
                        systems, you can choose to delete your account instead.
                      </p>
                      <button
                        onClick={() => {
                          handleCloseModal();
                          setTimeout(() => handleOpenModal("delete"), 300);
                        }}
                        className="text-red-600 hover:text-red-800 text-xs font-semibold underline"
                      >
                        Switch to Delete Account
                      </button>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-5 md:p-6 rounded-b-2xl border-t sticky bottom-0">
                    <div className="flex flex-col-reverse sm:flex-row gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleCloseModal}
                        className="flex-1 bg-gray-200 text-gray-700 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-300 transition-colors"
                      >
                        Cancel
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleDeactivateAccount}
                        className="flex-1 bg-orange-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <PauseCircle className="w-4 h-4" />
                        Yes, Deactivate My Account
                      </motion.button>
                    </div>
                  </div>
                </div>
              )}
            </Box>
          </Fade>
        </Modal>
      )}

      <motion.div
        className="max-w-[95rem] mx-auto px-4 lg:px-10 2xl:px-0 pb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl shadow-lg p-5 md:p-7 border-l-4 border border-amber-500">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Bell className="w-6 h-6 text-amber-600" />
            Policy Updates
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3 text-sm">
            We may update this Privacy Policy periodically to reflect changes in
            our practices, services, or legal requirements. We will notify you
            of any material changes by posting the new policy on this page and
            updating the "Last Updated" date. For significant changes, we will
            provide additional notice through email or prominent App
            notifications.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm">
            We encourage you to review this Privacy Policy regularly to stay
            informed about how we protect your information.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="max-w-[95rem] mx-auto px-4 lg:px-10 2xl:px-0 py-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 text-xs md:text-sm italic">
          "In Ayurveda, trust between healer and patient is the foundation of
          healing. We honor this sacred trust by protecting your privacy with
          utmost care."
        </p>
      </motion.div>
    </div>
  );
}

export default PrivacyAndPolicy;
