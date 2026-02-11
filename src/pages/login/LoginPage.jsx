import {
  Box,
  Modal,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import CloseIcon from "@mui/icons-material/Close";
import JYALogoImg from "../../asset/jyaLogo.png";
import { userLogin } from "../../services/login/LoginServices";
import ConfirmationModal from "../../components/common/ConfirmationModal";
import {
  errorAlert,
  successAlert,
} from "../../components/common/toast/CustomToast";
import CommonLoader from "../../components/common/commonLoader/CommonLoader";
import axios from "axios";
import SignUp from "./SignUp";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  outline: "none",
  width: "100%",
  maxWidth: "100vw",
  height: { xs: "100%", sm: "auto" },
  maxHeight: { xs: "100vh", sm: "95vh" },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  p: 1,
};

const loginValidationSchema = yup.object().shape({
  userName: yup.string().required("Email or Mobile required"),
  password: yup.string().min(4, "Min 4 chars").required("Password required"),
});

function LoginPage({ open, handleClose, setOpenLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(null);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginValidationSchema),
    defaultValues: { userName: "", password: "" },
  });

  const onSubmit = (data) => {
    setFormData(data);
    setOpenConfirmationModal(true);
  };

  const handleUserLogin = async () => {
    try {
      setLoading(true);
      setOpenConfirmationModal(false);

      const { data, status } = await userLogin(formData);

      if (status === 200 && data?.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("expiresIn", data.expiresIn);

        successAlert(data.message || "Login successful");

        setTimeout(() => {
          handleClose();
          reset();
        }, 800);
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      errorAlert(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    reset();
    handleClose();
  };

  return (
    <>
      <Modal open={open} disableScrollLock={false}>
        <Box sx={modalStyle}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: { xs: "100%", sm: "440px", md: "460px", lg: "480px" },
              height: { xs: "90vh", sm: "auto" },
              maxHeight: {
                xs: "100vh",
                sm: "92vh",
                lg: "85vh",
                xl: "fit-content",
              },

              bgcolor: "#f8fbf6",
              borderRadius: 3,
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
              border: "1px solid #e6efe3",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <IconButton
              onClick={handleModalClose}
              sx={{
                position: "absolute",
                right: { xs: 8, sm: 12 },
                top: { xs: 8, sm: 12 },
                zIndex: 10,
                bgcolor: "rgba(255,255,255,0.8)",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.95)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
            <Box
              sx={{
                overflowY: "auto",
                overflowX: "hidden",
                flex: { xs: 1, xl: "0 1 auto" },
                px: 3,
                py: 3,
                "&::-webkit-scrollbar": {
                  width: "6px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "transparent",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#7aa874",
                  borderRadius: "10px",
                  "&:hover": {
                    background: "#6fa55b",
                  },
                },
                scrollbarWidth: "thin",
                scrollbarColor: "#7aa874 transparent",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  mb: { xs: 3, sm: 3.5, md: 4, lg: 4.5, xl: 3.5 },
                  mt: { xs: 1, sm: 0 },
                }}
              >
                <img
                  src={JYALogoImg}
                  alt="JYA Logo"
                  style={{
                    width: "52px",
                    height: "auto",
                    margin: "0 auto 6px",
                  }}
                  loading="lazy"
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "#2f3e2e",
                    fontSize: { xs: "1.25rem", sm: "1.4rem", lg: "1.5rem" },
                    mb: 0.5,
                  }}
                >
                  Welcome Back
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#6b7d6a",
                    fontSize: { xs: "0.875rem", sm: "0.875rem" },
                  }}
                >
                  Login to continue your wellness journey
                </Typography>
              </Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                  }}
                >
                  <Controller
                    name="userName"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Email / Mobile No."
                        error={!!errors.userName}
                        helperText={errors.userName?.message}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailIcon sx={{ color: "#7aa874" }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            bgcolor: "#ffffff",
                            height: "46px",
                          },
                          "& .MuiInputBase-input": {
                            fontSize: { xs: "0.875rem", sm: "1rem" },
                          },
                        }}
                      />
                    )}
                  />
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockIcon sx={{ color: "#7aa874" }} />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOffIcon />
                                ) : (
                                  <VisibilityIcon />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            bgcolor: "#ffffff",
                            height: "46px",
                          },
                          "& .MuiInputBase-input": {
                            fontSize: { xs: "0.875rem", sm: "1rem" },
                          },
                        }}
                      />
                    )}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "right",
                      color: "#6b7d6a",
                      cursor: "pointer",
                      fontSize: { xs: "0.813rem", sm: "0.875rem" },
                      "&:hover": {
                        color: "#5d8c57",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Forgot Password?
                  </Typography>
                  <Button
                    type="submit"
                    fullWidth
                    sx={{
                      borderRadius: 3,
                      py: { xs: 1.2, sm: 1.3, xl: 1.2 },
                      textTransform: "none",
                      fontWeight: 600,
                      fontSize: { xs: "0.938rem", sm: "1rem" },
                      background:
                        "linear-gradient(135deg,#c7e8b4 0%,#7fb069 100%)",
                      color: "#1f2d1f",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg,#b9dea6 0%,#6fa55b 100%)",
                      },
                    }}
                  >
                    Login
                  </Button>
                  <Divider
                    sx={{
                      my: { xs: 1, sm: 1.5, xl: 1 },
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                    }}
                  >
                    OR
                  </Divider>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "center",
                      color: "#6b7d6a",
                      fontSize: { xs: "0.813rem", sm: "0.875rem" },
                      mb: { xs: 1, sm: 0 },
                    }}
                  >
                    Don't have an account?
                    <button
                      type="button"
                      style={{
                        fontWeight: 600,
                        cursor: "pointer",
                        color: "#5d8c57",
                      }}
                      onClick={() => setOpenSignUpModal(true)}
                    >
                      Sign Up
                    </button>
                  </Typography>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Modal>
      <ConfirmationModal
        confirmationOpen={openConfirmationModal}
        confirmationHandleClose={() => setOpenConfirmationModal(false)}
        confirmationSubmitFunc={handleUserLogin}
        confirmationLabel="Confirmation"
        confirmationMsg="Are you sure you want to log in?"
        confirmationButtonMsg="Confirm"
      />

 <CommonLoader />

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

export default LoginPage;
