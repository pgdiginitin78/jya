import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import InputField from "../../components/common/formFields/InputField";
import CommonButton from "../../components/common/button/CommonButton";
import { resetPassword } from "../../services/login/LoginServices";
import {
  successAlert,
  errorAlert,
} from "../../components/common/toast/CustomToast";
import { useNavigate, useSearchParams } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, Typography, Box } from "@mui/material";
import LockResetIcon from "@mui/icons-material/LockReset";
import JYALogoImg from "../../asset/JnanaYogAyuLogo.png";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const schema = yup.object().shape({
  password: yup
    .string()
    .required("New password is required")
    .min(4, "Password must be at least 4 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token") || "";
  console.log("searchParams", token);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const postObj = {
        token: token,
        NewPassword: data.password,
        ConfirmPassword: data.confirmPassword,
      };
      const response = await resetPassword(postObj);
      if (response.status === 200 || response.status === 201) {
        successAlert(response.data.message || "Password reset successfully!");
        setTimeout(() => navigate("/"), 2000);
      } else {
        errorAlert(response.data.message || "Something went wrong!");
      }
    } catch (error) {
      errorAlert(error.response?.data?.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  const handleResetForm = () => {
    reset();
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lime-50 via-green-50 to-white overflow-hidden relative p-4 mt-20 lg:mt-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[440px] 2xl:max-w-[420px] w-full bg-[#f8fbf6]/80 backdrop-blur-md p-8 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-[#e6efe3] relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-5">
          <img
            src={JYALogoImg}
            alt="JYA Logo"
            className="w-24 mx-auto mb-2 hover:scale-105 transition-transform duration-300"
          />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#2f3e2e",
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
              mb: 1,
            }}
          >
            Create New Password
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#6b7d6a",
              fontSize: "0.875rem",
            }}
          >
            Your wellness journey awaits. Secure your account.
          </Typography>
        </motion.div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <motion.div variants={itemVariants} className="space-y-4">
            <InputField
              name="password"
              label="New Password"
              type={showPassword ? "text" : "password"}
              control={control}
              error={errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOpenIcon sx={{ color: "#7aa874" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#ffffff",
                  "&.Mui-focused fieldset": {
                    borderColor: "#7aa874",
                  },
                },
              }}
            />

            <InputField
              name="confirmPassword"
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              control={control}
              error={errors.confirmPassword}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOpenIcon sx={{ color: "#7aa874" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      edge="end"
                      size="small"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#ffffff",
                  "&.Mui-focused fieldset": {
                    borderColor: "#7aa874",
                  },
                },
              }}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="flex  gap-4 pt-2">
            <CommonButton
              type="button"
              onClick={handleResetForm}
              label="Reset"
              className="flex-1 border border-red-600 text-red-600 hover:bg-red-100  transition-all duration-300"
            />
            <CommonButton
              type="submit"
              label={loading ? "Updating..." : "Confirm"}
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-[#7aa874] to-[#c7e8b4] text-[#1f2d1f]  transition-all duration-300 font-semibold"
            />
          </motion.div>
        </form>

        <motion.div variants={itemVariants} className="mt-8 text-center">
          <p className="text-xs text-[#6b7d6a]/60">
            &copy; {new Date().getFullYear()} Jnana Yog Ayu. All rights
            reserved.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
