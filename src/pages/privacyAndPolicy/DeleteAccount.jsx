import {
    Button,
    Checkbox,
    FormControlLabel,
    IconButton,
    InputAdornment,
    TextField,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import {
    AlertTriangle,
    CheckCircle,
    Eye,
    EyeOff,
    Info,
    Lock,
    Trash2,
    XCircle,
} from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../Actions";
import {
    errorAlert,
    successAlert,
} from "../../components/common/toast/CustomToast";
import { DeleteLoggedAccount } from "../../services/login/LoginServices";

export default function DeleteAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(null);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    if (!data?.password) {
      setDeleteStatus("error");
      return;
    }

    setIsDeleting(true);
    setDeleteStatus(null);

    try {
      const response = await DeleteLoggedAccount(data.password);
      if (response?.status >= 200 && response?.status < 300) {
        successAlert(response.data.message);
        setDeleteStatus("success");
        logoutUser();
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/");
        reset();
      }
    } catch (error) {
      console.error("Delete account error:", error);
      errorAlert(error);
    } finally {
      setIsDeleting(false);
    }
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

          <div className="p-6 md:p-8 space-y-6">
            <AnimatePresence>
              {deleteStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-green-50 border-l-4 border-green-500 p-5 rounded-lg"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-green-900 text-base mb-1">
                        Account Deleted Successfully
                      </h4>
                      <p className="text-green-800 text-sm">
                        Your account has been permanently deleted. You will be
                        redirected shortly.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {deleteStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg"
                >
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-red-900 text-base mb-1">
                        Deletion Failed
                      </h4>
                      <p className="text-red-800 text-sm">
                        Unable to delete account. Please check your password and
                        try again.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

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
              className="bg-amber-50 text-amber-900 border-amber-600 border border-l-4 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-2">Medical Disclaimer</h3>
              <ul className="list-disc">
                <li>
                  AyurMitra is a healthcare management platform that facilitates
                  appointment booking and access to medical records. The app
                  does not provide medical advice, diagnosis, or treatment.
                </li>
                <li>
                  All medical decisions should be made in consultation with a
                  qualified healthcare professional. In case of a medical
                  emergency, please contact your doctor or nearest medical
                  facility immediately.
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="text-green-900 flex items-center justify-center p-4"
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
                <ul className="list-disc px-4">
                  <li>
                    This Privacy Policy explains how AyurMitra collects, uses,
                    and protects user information while providing healthcare
                    appointment booking and medical record access services.
                  </li>

                  <li className="mt-2">
                    We may collect basic personal details, appointment data,
                    device information, and usage analytics to improve services
                    and maintain platform security.
                  </li>

                  <li className="mt-2">
                    AyurMitra does not provide medical advice or treatment.
                    Always consult qualified healthcare professionals for
                    medical decisions.
                  </li>

                  <li className="mt-2">
                    We implement reasonable security measures but cannot
                    guarantee complete protection of online data.
                  </li>
                </ul>
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
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Password is required",
                      minLength: {
                        value: 1,
                        message: "Password is required",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        label="Password"
                        variant="outlined"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        placeholder="Enter your password"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                              >
                                {showPassword ? (
                                  <EyeOff className="w-5 h-5" />
                                ) : (
                                  <Eye className="w-5 h-5" />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <Controller
                    name="confirmation"
                    control={control}
                    defaultValue={false}
                    rules={{
                      required: "You must confirm to proceed",
                    }}
                    render={({ field }) => (
                      <>
                        <FormControlLabel
                          control={
                            <Checkbox
                              {...field}
                              checked={field.value}
                              sx={{
                                color: errors.confirmation
                                  ? "#dc2626"
                                  : "#9ca3af",
                                "&.Mui-checked": {
                                  color: "#dc2626",
                                },
                              }}
                            />
                          }
                          label={
                            <span className="text-sm text-gray-800">
                              I understand that this action is{" "}
                              <strong className="text-red-600">
                                permanent
                              </strong>{" "}
                              and all my data will be deleted
                            </span>
                          }
                        />
                        {errors.confirmation && (
                          <p className="text-red-600 text-xs mt-1 ml-8 flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" />
                            {errors.confirmation.message}
                          </p>
                        )}
                      </>
                    )}
                  />
                </div>

                <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4">
                  <Button
                    variant="outlined"
                    fullWidth
                    size="large"
                    onClick={() => {
                      reset();
                      setDeleteStatus(null);
                    }}
                    sx={{
                      textTransform: "none",
                      fontWeight: 700,
                      fontSize: "1rem",
                      borderWidth: 2,
                      borderColor: "#d1d5db",
                      color: "#374151",
                      "&:hover": {
                        borderWidth: 2,
                        borderColor: "#9ca3af",
                        backgroundColor: "#f3f4f6",
                      },
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    disabled={isDeleting}
                    startIcon={
                      isDeleting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <Trash2 className="w-5 h-5" />
                      )
                    }
                    sx={{
                      textTransform: "none",
                      fontWeight: 700,
                      fontSize: "1rem",
                      background: "linear-gradient(to right, #dc2626, #b91c1c)",
                      "&:hover": {
                        background:
                          "linear-gradient(to right, #b91c1c, #991b1b)",
                      },
                      "&:disabled": {
                        background:
                          "linear-gradient(to right, #dc2626, #b91c1c)",
                        opacity: 0.5,
                      },
                    }}
                  >
                    {isDeleting ? "Deleting..." : "Yes, Delete My Account"}
                  </Button>
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
          Need help? Contact our support team at{" "}
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
