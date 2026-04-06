import { yupResolver } from "@hookform/resolvers/yup";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import JYALogoImg from "../../asset/JnanaYogAyuLogo.png";
import CancelButtonModal from "../../components/common/button/CancelButtonModal";
import ConfirmationModal from "../../components/common/ConfirmationModal";
import {
  errorAlert,
  successAlert,
} from "../../components/common/toast/CustomToast";
import { forgotPassword, userLogin } from "../../services/login/LoginServices";
import SignUp from "./SignUp";
import { useLoader } from "../../components/common/commonLoader/LoaderContext";
import { useAuth } from "../../context/AuthContext";
import CommonButton from "../../components/common/button/CommonButton";

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
  password: yup.string().min(1, "Min 1 chars").required("Password required"),
});

function LoginPage({
  open,
  handleClose,
  setOpenLogin,
  setOpenSuccessDialog,
  setSuccessMessage,
  setSuccessTitle,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(null);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  const { showLoader, hideLoader } = useLoader();
  const { login } = useAuth();

  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [openForgotModal, setOpenForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotEmailError, setForgotEmailError] = useState("");

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
      showLoader();
      setOpenConfirmationModal(false);

      const response = await userLogin(formData);
      const { data, status } = response;

      if (status === 200 && data?.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("expiresIn", data.expiresIn);
        localStorage.setItem("tokenSetTime", Date.now());
        login(data.user);
        successAlert(data.message);
        handleClose();
        reset();
      } else {
        throw new Error(data?.message || "Invalid login credentials");
      }
    } catch (error) {
      errorAlert(
        error?.response?.data?.message || "Invalid username or password",
      );
    } finally {
      hideLoader();
    }
  };

  const handleForgotPassword = async () => {
    if (!forgotEmail) {
      setForgotEmailError("Please enter your email");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(forgotEmail)) {
      setForgotEmailError("Please enter a valid email address");
      return;
    }
    setForgotEmailError("");

    try {
      showLoader();
      const response = await forgotPassword({ email: forgotEmail });
      if (response.status === 200) {
        successAlert(response.data?.message || "Password reset email sent!");
        setOpenForgotModal(false);
        setForgotEmail("");
        setForgotEmailError("");
      } else {
        errorAlert(response.data?.message || "Something went wrong");
      }
    } catch (error) {
      errorAlert(
        error?.response?.data?.message || "Failed to send reset email",
      );
    } finally {
      hideLoader();
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
            <CancelButtonModal onClick={handleModalClose} />
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

                  mt: { xs: 1, sm: 0 },
                }}
              >
                <img
                  src={JYALogoImg}
                  alt="JYA Logo"
                  className="w-[30%] mx-auto"
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
              <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
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
                        FormHelperTextProps={{
                          sx: {
                            background:
                              "linear-gradient(135deg,#c7e8b4 0%,#7fb069 100%)",
                            color: "#1f2d1f !important",
                            fontWeight: 600,
                            fontSize: "0.8rem",
                            mx: 0,
                            px: 1.5,
                            py: 0.4,
                            borderRadius: "0 0 8px 8px",
                          },
                        }}
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
                        FormHelperTextProps={{
                          sx: {
                            background:
                              "linear-gradient(135deg,#c7e8b4 0%,#7fb069 100%)",
                            color: "#1f2d1f !important",
                            fontWeight: 600,
                            fontSize: "0.8rem",
                            mx: 0,
                            px: 1.5,
                            py: 0.4,
                            borderRadius: "0 0 8px 8px",
                          },
                        }}
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
                                {showPassword === false ? (
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
                    onClick={() => setOpenForgotModal(true)}
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

      {openSignUpModal && (
        <SignUp
          open={openSignUpModal}
          handleClose={() => setOpenSignUpModal(false)}
          setOpenLogin={setOpenLogin}
          setOpenSuccessDialog={setOpenSuccessDialog}
          setSuccessMessage={setSuccessMessage}
        />
      )}

      <Modal open={openForgotModal}>
        <Box sx={modalStyle}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "400px",
              bgcolor: "#f8fbf6",
              borderRadius: 3,
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
              border: "1px solid #e6efe3",
              p: 3,
            }}
          >
            <CancelButtonModal
              onClick={() => {
                setOpenForgotModal(false);
                setForgotEmailError("");
              }}
            />
            <Typography
              variant="h6"
              sx={{ mb: 2, fontWeight: 700, color: "#2f3e2e" }}
            >
              Forgot Password
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, color: "#6b7d6a" }}>
              Enter your email address to reset your password.
            </Typography>
            <TextField
              fullWidth
              label="Email Address"
              value={forgotEmail}
              size="small"
              error={!!forgotEmailError}
              FormHelperTextProps={{
                sx: {
                  background: "linear-gradient(135deg,#c7e8b4 0%,#7fb069 100%)",
                  color: "#1f2d1f !important",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  mx: 0,
                  px: 1.5,
                  py: 0.4,
                  borderRadius: "0 0 8px 8px",
                },
              }}
              onChange={(e) => {
                setForgotEmail(e.target.value);
                if (forgotEmailError) setForgotEmailError("");
              }}
              variant="outlined"
              sx={{
                mb: forgotEmailError ? 1 : 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#ffffff",
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                width: "100%",
                gap: 2,
              }}
            >
              <CommonButton
                type="button"
                onClick={() => {
                  setForgotEmail("");
                  setForgotEmailError("");
                }}
                label="Reset"
                className={
                  "border border-red-600 text-red-600 hover:bg-red-100 w-full"
                }
              />

              <CommonButton
                type="button"
                onClick={handleForgotPassword}
                label="Confirm"
                className={" bg-green-600 text-white  w-full"}
              />
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default LoginPage;
