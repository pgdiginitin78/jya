import { AlertTriangle, Info, Lock, Trash2, Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";

export default function DeleteAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    setIsDeleting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Delete account data:", data);
    setIsDeleting(false);
    // Handle account deletion logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-6 px-4 sm:px-6 lg:px-8 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-w-4xl max-w-7xl mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 md:p-8">
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="bg-white/20 p-3 rounded-xl backdrop-blur-sm"
              >
                <Trash2 className="w-7 h-7" />
              </motion.div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Delete Account
                </h1>
                <p className="text-red-100 text-sm mt-1">
                  AyurMitra (by Jnanayogayu) allows users to request permanent
                  deletion of their account and associated data.
                </p>
              </div>
            </div>
          </div>
          <motion.div
            className="bg-green-50 text-green-900 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-2">Medical Disclaimer</h3>

            <p>
              AyurMitra is a healthcare management platform that facilitates
              appointment booking and access to medical records. The app does
              not provide medical advice, diagnosis, or treatment.
            </p>

            <p className="mt-2">
              All medical decisions should be made in consultation with a
              qualified healthcare professional. In case of a medical emergency,
              please contact your doctor or nearest medical facility
              immediately.
            </p>
          </motion.div>

          <div className="p-6 md:p-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-red-900 text-base mb-1">
                    ⚠️ Warning: This action is permanent
                  </h4>
                  <p className="text-red-800 text-sm">
                    Once you delete your account, there is no going back. All
                    your data will be permanently removed. Please be certain.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="   text-green-900 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="max-w-3xl bg-green-100 border-green-300 rounded-xl shadow-md p-5 text-sm border leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <h1 className="text-xl font-semibold mb-3 text-center">
                  Privacy Policy – AyurMitra
                  <span className="block text-xs text-green-700">
                    by Jnanayogayu
                  </span>
                </h1>

                <p>
                  This Privacy Policy explains how AyurMitra collects, uses, and
                  protects user information while providing healthcare
                  appointment booking and medical record access services.
                </p>

                <p className="mt-2">
                  We may collect basic personal details, appointment data,
                  device information, and usage analytics to improve services
                  and maintain platform security.
                </p>

                <p className="mt-2">
                  AyurMitra does not provide medical advice or treatment. Always
                  consult qualified healthcare professionals for medical
                  decisions.
                </p>

                <p className="mt-2">
                  We implement reasonable security measures but cannot guarantee
                  complete protection of online data.
                </p>
              </motion.div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-50 rounded-xl p-5 border border-gray-200"
              >
                <h4 className="font-bold text-gray-900 text-base mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-600" />
                  What will be deleted:
                </h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  {[
                    {
                      title: "Personal Information",
                      desc: "Name, email, phone number, and address",
                    },
                    {
                      title: "Health Records",
                      desc: "All consultation history and assessments",
                    },
                    {
                      title: "Order History",
                      desc: "Purchase records and transactions",
                    },
                    {
                      title: "Preferences",
                      desc: "Saved settings and recommendations",
                    },
                    {
                      title: "Subscriptions",
                      desc: "Active subscriptions and benefits",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-red-500 mt-1 font-bold">•</span>
                      <span>
                        <strong className="text-gray-900">{item.title}:</strong>{" "}
                        {item.desc}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-amber-50 rounded-xl p-5 border border-amber-200"
              >
                <h4 className="font-bold text-gray-900 text-base mb-4 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-amber-600" />
                  What we may retain:
                </h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  {[
                    "Anonymized data for analytics and research",
                    "Transaction records for legal compliance",
                    "Backup data in systems for up to 30 days",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-amber-500 mt-1 font-bold">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200"
            >
              <h4 className="font-bold text-gray-900 text-base mb-2">
                📅 Deletion Timeline:
              </h4>
              <p className="text-sm text-gray-700">
                Your account will be deactivated immediately. Complete data
                deletion from all systems will be processed within{" "}
                <strong className="text-gray-900">30 days</strong>. You'll
                receive a confirmation email once the process is complete.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5"
            >
              <h4 className="font-bold text-blue-900 text-base mb-2">
                💡 Not ready for permanent deletion?
              </h4>
              <p className="text-sm text-blue-800 mb-3">
                Consider deactivating your account instead. You can take a break
                and reactivate anytime without losing your data.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-blue-700 bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                Switch to Deactivate Account →
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 mt-6"
            >
              <h4 className="font-bold text-gray-900 text-lg mb-2">
                Confirm Account Deletion
              </h4>
              <p className="text-sm text-gray-600 mb-6">
                Please enter your credentials to confirm this action
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Username or Email
                  </label>
                  <input
                    id="username"
                    type="text"
                    {...register("username", {
                      required: "Username or email is required",
                      minLength: {
                        value: 3,
                        message: "Username must be at least 3 characters",
                      },
                    })}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.username
                        ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                        : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                    }`}
                    placeholder="Enter your username or email"
                  />
                  <AnimatePresence>
                    {errors.username && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-600 text-xs mt-2 flex items-center gap-1"
                      >
                        <AlertTriangle className="w-3 h-3" />
                        {errors.username.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                      className={`w-full px-4 py-3 pr-12 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                        errors.password
                          ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                      }`}
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <AnimatePresence>
                    {errors.password && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-600 text-xs mt-2 flex items-center gap-1"
                      >
                        <AlertTriangle className="w-3 h-3" />
                        {errors.password.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      {...register("confirmation", {
                        required: "You must confirm to proceed",
                      })}
                      className="mt-1 w-4 h-4 text-red-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-red-500 cursor-pointer"
                    />
                    <span className="text-sm text-gray-800 group-hover:text-gray-900 transition-colors">
                      I understand that this action is{" "}
                      <strong className="text-red-600">permanent</strong> and
                      all my data will be deleted
                    </span>
                  </label>
                  <AnimatePresence>
                    {errors.confirmation && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-600 text-xs mt-2 ml-7 flex items-center gap-1"
                      >
                        <AlertTriangle className="w-3 h-3" />
                        {errors.confirmation.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gray-100 text-gray-700 px-6 py-3.5 rounded-lg font-bold text-base hover:bg-gray-200 transition-colors border-2 border-gray-300"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isDeleting}
                    className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3.5 rounded-lg font-bold text-base hover:from-red-700 hover:to-red-800 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isDeleting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Deleting...
                      </>
                    ) : (
                      <>
                        <Trash2 className="w-5 h-5" />
                        Yes, Delete My Account
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-sm text-gray-500 mt-6"
        >
          Need help? Contact our support team at
          <a
            href="mailto:support@ayurwellness.com"
            className="text-blue-600 hover:text-blue-800 font-semibold underline"
          >
            support@ayurwellness.com
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
}
