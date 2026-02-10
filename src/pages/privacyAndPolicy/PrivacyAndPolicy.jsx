import React, { useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { Modal, Box, Fade, Backdrop } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PrivacyAndPolicy() {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const navigate = useNavigate()

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
      transition: {
        staggerChildren: 0.15,
      },
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
      icon: <Shield className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you book consultations, purchase Ayurvedic products, or create an account, we collect your name, email address, phone number, shipping address, and health-related information necessary for personalized Ayurvedic treatments.",
        },
        {
          subtitle: "Health Data",
          text: "With your explicit consent, we may collect information about your Prakriti (body constitution), Vikriti (current imbalances), dietary preferences, lifestyle habits, and previous Ayurvedic treatments to provide personalized wellness recommendations.",
        },
        {
          subtitle: "Usage Information",
          text: "We automatically collect information about your interactions with our website, including pages visited, time spent, and browsing patterns to improve our services.",
        },
      ],
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Personalized Ayurvedic Care",
          text: "We use your health information to provide customized Ayurvedic consultations, recommend appropriate herbs and treatments, and create personalized wellness plans based on your unique constitution.",
        },
        {
          subtitle: "Order Processing",
          text: "Your personal and payment information is used to process orders for Ayurvedic products, herbs, and wellness packages, and to communicate about order status and delivery.",
        },
        {
          subtitle: "Communication",
          text: "We send you appointment reminders, seasonal wellness tips, Ayurvedic health advice, and updates about our services with your permission.",
        },
        {
          subtitle: "Service Improvement",
          text: "We analyze usage patterns to enhance our website functionality, develop new Ayurvedic offerings, and improve overall user experience.",
        },
      ],
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Data Protection & Security",
      content: [
        {
          subtitle: "Encryption & Security",
          text: "All sensitive data, including health information and payment details, is encrypted using industry-standard SSL/TLS protocols. We implement strict security measures to protect your information from unauthorized access.",
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
      icon: <Users className="w-6 h-6" />,
      title: "Information Sharing",
      content: [
        {
          subtitle: "Third-Party Sharing",
          text: "We do not sell your personal or health information to third parties. We may share limited information with trusted service providers (payment processors, shipping partners) who assist in delivering our services.",
        },
        {
          subtitle: "Ayurvedic Practitioners",
          text: "When you book a consultation, relevant health information is shared with your assigned Ayurvedic practitioner to provide appropriate care and treatment recommendations.",
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose information when required by law or to protect the rights, property, or safety of our business, customers, or others.",
        },
      ],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Your Rights & Choices",
      content: [
        {
          subtitle: "Access & Correction",
          text: "You have the right to access, update, or correct your personal and health information at any time through your account settings or by contacting us.",
        },
        {
          subtitle: "Data Deletion",
          text: "You may request deletion of your account and associated data. Please note that we may retain certain information for legal compliance and record-keeping purposes.",
        },
        {
          subtitle: "Marketing Preferences",
          text: "You can opt-out of marketing communications at any time while still receiving essential service-related messages about appointments and orders.",
        },
        {
          subtitle: "Cookie Control",
          text: "You can manage cookie preferences through your browser settings and control how we collect usage data.",
        },
      ],
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Cookies & Tracking",
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
      icon: <Mail className="w-6 h-6" />,
      title: "Children's Privacy",
      content: [
        {
          subtitle: "Age Restriction",
          text: "Our services are not intended for children under 13. We do not knowingly collect information from children. For minors aged 13-18, parental consent is required for Ayurvedic consultations.",
        },
      ],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "International Data Transfers",
      content: [
        {
          subtitle: "Cross-Border Transfers",
          text: "If you access our services from outside our primary operating country, your information may be transferred and processed internationally. We ensure appropriate safeguards are in place to protect your data.",
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
            Last Updated: February 2026
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto px-4 py-8 md:py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="bg-white rounded-xl shadow-lg p-5 md:p-7 border-t-4 border-green-600">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
            Welcome to Our Privacy Policy
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            At our Ayurvedic wellness center, we honor the ancient principle of
            confidentiality inherent in the healing arts. This Privacy Policy
            explains how we collect, use, protect, and share your information
            when you use our website, book consultations, or purchase Ayurvedic
            products and services. We encourage you to read this policy
            carefully to understand our practices regarding your personal and
            health information.
          </p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 pb-10 md:pb-12">
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
                <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
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
                    transition={{ delay: idx * 0.08 }}
                  >
                    <h3 className="text-base md:text-lg font-semibold text-green-700 mb-1.5">
                      {item.subtitle}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-4 pb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl shadow-lg p-5 md:p-7 border-l-4 border border-slate-500">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Shield className="w-6 h-6 text-slate-600" />
            Account Management
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5 text-sm">
            You have full control over your account. Choose to temporarily pause
            your account or permanently delete all your data.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <PauseCircle className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-base mb-1">
                    Deactivate Account
                  </h3>
                  <p className="text-xs text-gray-600">
                    Temporarily pause your account. You can reactivate anytime.
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
                <div className="bg-red-100 p-2 rounded-lg">
                  <Trash2 className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-base mb-1">
                    Delete Account
                  </h3>
                  <p className="text-xs text-gray-600">
                    Permanently remove all your data. This action cannot be
                    undone.
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                // onClick={() => handleOpenModal("delete")}
                onClick={()=>{
                  navigate("/deleteAccount")
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
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-5 md:p-6 sticky top-0 z-10 ">
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
                          Once you delete your account, there is no going back.
                          Please be certain.
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
                          <strong>Order History:</strong> Purchase records and
                          transaction details
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>
                          <strong>Preferences:</strong> Saved settings, wellness
                          goals, and personalized recommendations
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
                      data deletion from all systems will be processed within 30
                      days. You'll receive a confirmation email once the process
                      is complete.
                    </p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 text-sm mb-2">
                      Not ready for permanent deletion?
                    </h4>
                    <p className="text-xs text-blue-800 mb-2">
                      Consider deactivating your account instead. You can take a
                      break and reactivate anytime without losing your data.
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
                          You won't receive any email notifications or wellness
                          tips
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>
                          Active subscriptions will be paused (no charges during
                          deactivation)
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
                          <strong>All your data:</strong> Personal info, health
                          records, and consultation history
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
                      reactivate your account. Everything will be exactly as you
                      left it - your health records, preferences, and order
                      history will be immediately available.
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

      {/* Updates Section */}
      <motion.div
        className="max-w-6xl mx-auto px-4 pb-10"
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
            provide additional notice through email or prominent website
            notifications.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm">
            We encourage you to review this Privacy Policy regularly to stay
            informed about how we protect your information.
          </p>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-8 md:py-10 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <Mail className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Contact Us</h2>
          <p className="text-base md:text-lg text-green-100 mb-5 leading-relaxed">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or how we handle your information, please don't
            hesitate to reach out to us.
          </p>
          <div className="space-y-2 text-sm md:text-base">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              <Mail className="w-4 h-4" />
              <span>Email: privacy@ayurvedawellness.com</span>
            </p>
            <p className="flex items-center justify-center gap-2 flex-wrap">
              <Globe className="w-4 h-4" />
              <span>Website: www.ayurvedawellness.com</span>
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-white text-green-700 px-6 py-2.5 rounded-full font-semibold text-sm md:text-base shadow-lg hover:bg-green-50 transition-colors duration-300"
          >
            Contact Privacy Team
          </motion.button>
        </div>
      </motion.div>

      {/* Footer Note */}
      <motion.div
        className="max-w-6xl mx-auto px-4 py-6 text-center"
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
