import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  Modal,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import JYALogoImg from "../../asset/jyaLogo.png";

import axios from "axios";
import CommonLoader from "../../components/common/commonLoader/CommonLoader";
import ConfirmationModal from "../../components/common/ConfirmationModal";
import DatePickerField from "../../components/common/formFields/DatePickerField";
import InputArea from "../../components/common/formFields/InputArea";
import InputField from "../../components/common/formFields/InputField";
import RadioField from "../../components/common/formFields/RadioField";
import {
  errorAlert,
  successAlert,
} from "../../components/common/toast/CustomToast";
import {signupJYA} from "../../services/login/LoginServices"

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  outline: "none",
  maxHeight: "90vh",
  overflowY: "auto",
};

// Validation Schema
const signupValidationSchema = yup.object().shape({
  FirstName: yup
    .string()
    .required("First name is required")
    .min(2, "Min 2 characters")
    .max(50, "Max 50 characters")
    .matches(/^[a-zA-Z\s]+$/, "Only letters allowed"),

  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Min 2 characters")
    .max(50, "Max 50 characters")
    .matches(/^[a-zA-Z\s]+$/, "Only letters allowed"),

  dob: yup
    .date()
    .required("Date of birth is required")
    .max(new Date(), "Cannot be in future"),
  age: yup
    .number()
    .required("Age is required")
    .positive("Must be positive")
    .integer("Must be integer"),

  mobileNo: yup
    .string()
    .required("Mobile required")
    .matches(/^[0-9]{10}$/, "Must be 10 digits"),

  whatsappNo: yup
    .string()
    .required("WhatsApp required")
    .matches(/^[0-9]{10}$/, "Must be 10 digits"),

  emailId: yup
    .string()
    .required("Email is required")
    .email("Invalid email format")
    .matches(/^[^\s@]+@[^\s@]+\.(com|in)$/i, "Email must end with .com or .in"),

  pinCode: yup
    .string()
    .required("Pin code required")
    .matches(/^[0-9]{6}$/, "Must be 6 digits"),

  address: yup
    .string()
    .required("Address required")
    .min(10, "Min 10 characters")
    .max(200, "Max 200 characters"),

  locality: yup
    .string()
    .required("Locality required")
    .min(2, "Min 2 characters"),

  city: yup.string().required("City required").min(2, "Min 2 characters"),

  state: yup.string().required("State required").min(2, "Min 2 characters"),

  country: yup.string().required("Country required").min(2, "Min 2 characters"),

  landmark: yup.string().optional().max(100, "Max 100 characters"),

  userName: yup
    .string()
    .required("Username required")
    .min(4, "Min 4 characters")
    .max(20, "Max 20 characters")
    .matches(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, underscore"),

  passWord: yup
    .string()
    .required("Password required")
    .min(4, "Minimum 4 characters required"),

  confirmPassword: yup
    .string()
    .required("Confirm password")
    .oneOf([yup.ref("passWord"), null], "Passwords must match"),

  agreeToTerms: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});

function SignUp({ open, handleClose, setOpenLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState(null);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(signupValidationSchema),
    defaultValues: {
      FirstName: "",
      lastName: "",
      dob: "",
      age: "",
      gender: "Male",
      mobileNo: "",
      whatsappNo: "",
      emailId: "",
      pinCode: "",
      address: "",
      locality: "",
      city: "",
      state: "",
      country: "",
      landmark: "",
      userName: "",
      passWord: "",
      confirmPassword: "",
      macId: "",
      macIp: "",
      agreeToTerms: false,
    },
  });

  const dob = watch("dob");
  const pinCodeValue = watch("pinCode");
  const agreeToTerms = watch("agreeToTerms");

  console.log("signUpError", errors);

  React.useEffect(() => {
    if (dob) {
      const birthDate = new Date(dob);
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        calculatedAge--;
      }

      if (calculatedAge >= 0) {
        setValue("age", calculatedAge);
      }
    }
  }, [dob, setValue]);

  const onSubmit = (data) => {
    setFormData(data);
    setOpenConfirmationModal(true);
  };

  const handleUserSignup = async () => {
    try {
      setOpenConfirmationModal(false);
      setLoading(true);
      const response = await signupJYA(formData);

      const apiData = response?.data;
      console.log("apiData", apiData);

      if (response.status === 200 && apiData) {
        successAlert(apiData.message || "Login successful");

        setTimeout(() => {
          handleClose();
          reset();
        }, 1000);
      } else {
        errorAlert("Login failed");
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

  useEffect(() => {
    const fetchPinData = async () => {
      if (pinCodeValue.length !== 6) return;
      try {
        const res = await axios.get(
          `https://api.postalpincode.in/pincode/${pinCodeValue}`,
        );
        const pinCodeData = res.data[0]?.PostOffice[0];

        setValue("pinCode", pinCodeData.Pincode);
        setValue("locality", pinCodeData.Name);
        setValue("city", pinCodeData.District);
        setValue("state", pinCodeData.State);
        setValue("country", pinCodeData.Country);

        console.log("PinCodeBasedData", pinCodeData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPinData();
  }, [pinCodeValue]);

  return (
    <>
      <Modal open={open}>
        <Box sx={modalStyle}>
          <Box
            className="w-[95vw] sm:w-[650px] md:w-[750px] rounded-2xl p-4 sm:p-5"
            sx={{
              bgcolor: "#f8fbf6",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              border: "1px solid #e6efe3",
            }}
          >
            <IconButton
              onClick={handleModalClose}
              sx={{ position: "absolute", right: 8, top: 8, zIndex: 10 }}
              size="small"
            >
              <CloseIcon fontSize="small" />
            </IconButton>

            <Box className="text-center mb-3">
              <img
                src={JYALogoImg}
                className="w-12 mx-auto mb-1"
                alt="Logo"
                loading="lazy"
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "#2f3e2e", fontSize: "1.15rem" }}
              >
                Create Your Account
              </Typography>
              <Typography variant="caption" sx={{ color: "#6b7d6a" }}>
                Join us on your wellness journey
              </Typography>
            </Box>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="">
                <div className="border rounded-xl bg-white">
                  <h4 className="font-semibold text-xl bg-[#c7e8b4] pl-2 rounded-t-xl py-1">
                    Personal Information
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 p-2 pt-3">
                    <div>
                      <InputField
                        control={control}
                        name="FirstName"
                        label={"First Name *"}
                        error={errors.FirstName}
                      />
                    </div>

                    <div>
                      <InputField
                        control={control}
                        name="lastName"
                        label={"Last Name"}
                        error={errors.lastName}
                      />
                    </div>

                    <div item xs={12} sm={5}>
                      <DatePickerField
                        control={control}
                        name="dob"
                        label="Date Of Birth"
                        disableFuture={true}
                        inputFormat={"dd-MM-yyyy"}
                        error={errors.dob}
                      />
                    </div>

                    <div item xs={6} sm={2}>
                      <InputField
                        control={control}
                        name="age"
                        label={"Age *"}
                        error={errors.age}
                      />
                    </div>

                    <div item xs={6} sm={5}>
                      <RadioField
                        control={control}
                        name="gender"
                        label="Gender *"
                        dataArray={[
                          {
                            id: "Male",
                            value: "Male",
                            label: "Male",
                          },
                          {
                            id: "Female",
                            value: "Female",
                            label: "Female",
                          },
                          {
                            id: "Other",
                            value: "Other",
                            label: "Other",
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>

                <div className="border rounded-xl bg-white mt-2">
                  <h4 className="font-semibold text-xl bg-amber-200 pl-2 rounded-t-xl py-1">
                    Contact Information
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 p-2 pt-3">
                    <div>
                      <InputField
                        control={control}
                        name="mobileNo"
                        label={"Mobile Number *"}
                        error={errors.mobileNo}
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            onChange={(e) => {
                              if (e.target.checked) {
                                setValue("whatsappNo", watch("mobileNo"));
                              }
                            }}
                            sx={{
                              "& .MuiSwitch-switchBase.Mui-checked": {
                                color: "#16a34a",
                              },
                              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                                {
                                  backgroundColor: "lightgreen",
                                },
                            }}
                          />
                        }
                        label="Same as Mobile Number"
                        sx={{
                          marginTop: 1,
                          "& .MuiFormControlLabel-label": {
                            fontSize: "0.875rem",
                            color: "#4b5563",
                          },
                        }}
                      />
                    </div>

                    <div className="">
                      <InputField
                        control={control}
                        name="whatsappNo"
                        label={"Whatsapp Number *"}
                        error={errors.whatsappNo}
                      />
                    </div>

                    <div>
                      <InputField
                        control={control}
                        type={"email"}
                        name="emailId"
                        label={"Email *"}
                        error={errors.emailId}
                      />
                    </div>
                  </div>
                </div>
                <div className="border rounded-xl bg-white mt-2">
                  <h4 className="font-semibold text-xl bg-teal-200 pl-2 rounded-t-xl py-1">
                    Address Information
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 p-2 pt-3">
                    <div>
                      <InputField
                        control={control}
                        name="country"
                        label={"Country *"}
                        error={errors.country}
                      />
                    </div>
                    <div>
                      <InputField
                        control={control}
                        name="state"
                        label={"State *"}
                        error={errors.state}
                      />
                    </div>
                    <div>
                      <InputField
                        control={control}
                        name="city"
                        label={"City *"}
                        error={errors.city}
                      />
                    </div>

                    <div>
                      <InputField
                        control={control}
                        name="pinCode"
                        label={"Pin Code *"}
                        error={errors.pinCode}
                      />
                    </div>
                    <div>
                      <InputField
                        control={control}
                        name="locality"
                        label={"Locality *"}
                        error={errors.locality}
                      />
                    </div>

                    <div>
                      <InputField
                        control={control}
                        name="landmark"
                        label={"Landmark *"}
                        error={errors.landmark}
                      />
                    </div>

                    <div className="col-span-2">
                      <InputArea
                        control={control}
                        name="address"
                        label={"Address *"}
                        error={errors.address}
                        minRows={2}
                        maxRows={3}
                      />
                    </div>
                  </div>
                </div>
                <div className="border rounded-xl bg-white mt-2">
                  <h4 className="font-semibold text-xl bg-green-200 pl-2 rounded-t-xl py-1">
                    Account Information
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 p-2 pt-3">
                    <div item xs={12}>
                      <Controller
                        name="userName"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            size="small"
                            label="Username"
                            error={!!errors.userName}
                            helperText={errors.userName?.message}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <PersonIcon
                                    sx={{ color: "#7aa874", fontSize: 18 }}
                                  />
                                </InputAdornment>
                              ),
                            }}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                borderRadius: 2,
                                bgcolor: "#ffffff",
                              },
                            }}
                          />
                        )}
                      />
                    </div>

                    <div item xs={12} sm={6}>
                      <Controller
                        name="passWord"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            size="small"
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            error={!!errors.passWord}
                            helperText={errors.passWord?.message}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <LockIcon
                                    sx={{ color: "#7aa874", fontSize: 18 }}
                                  />
                                </InputAdornment>
                              ),
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    size="small"
                                    onClick={() =>
                                      setShowPassword(!showPassword)
                                    }
                                  >
                                    {showPassword ? (
                                      <VisibilityOffIcon
                                        sx={{ fontSize: 18 }}
                                      />
                                    ) : (
                                      <VisibilityIcon sx={{ fontSize: 18 }} />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                borderRadius: 2,
                                bgcolor: "#ffffff",
                              },
                            }}
                          />
                        )}
                      />
                    </div>

                    <div item xs={12} sm={6}>
                      <Controller
                        name="confirmPassword"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            size="small"
                            label="Confirm Password"
                            type={showConfirmPassword ? "text" : "password"}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword?.message}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <LockIcon
                                    sx={{ color: "#7aa874", fontSize: 18 }}
                                  />
                                </InputAdornment>
                              ),
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    size="small"
                                    onClick={() =>
                                      setShowConfirmPassword(
                                        !showConfirmPassword,
                                      )
                                    }
                                  >
                                    {showConfirmPassword ? (
                                      <VisibilityOffIcon
                                        sx={{ fontSize: 18 }}
                                      />
                                    ) : (
                                      <VisibilityIcon sx={{ fontSize: 18 }} />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                borderRadius: 2,
                                bgcolor: "#ffffff",
                              },
                            }}
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  border: "1px solid #e6efe3",
                  borderRadius: 2,
                  bgcolor: "#ffffff",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    color: "#2f3e2e",
                    mb: 1,
                  }}
                >
                  Terms and Conditions
                </Typography>
                <Box
                  sx={{
                    maxHeight: "150px",
                    overflowY: "auto",
                    p: 1.5,
                    bgcolor: "#f8fbf6",
                    borderRadius: 1,
                    border: "1px solid #e6efe3",
                    fontSize: "0.8rem",
                    color: "#4b5563",
                    lineHeight: 1.6,
                    "&::-webkit-scrollbar": {
                      width: "6px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "#f1f1f1",
                      borderRadius: "3px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "#7aa874",
                      borderRadius: "3px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      background: "#6fa55b",
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ mb: 1, fontSize: "0.8rem" }}
                  >
                    <strong>1. Acceptance of Terms</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 1.5, fontSize: "0.8rem" }}
                  >
                    By creating an account with JYA (Join Your Ayurveda), you
                    agree to embark on a holistic wellness journey. These terms
                    govern your use of our Ayurvedic wellness platform and
                    services. If you do not agree with any part of these terms,
                    please do not register.
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ mb: 1, fontSize: "0.8rem" }}
                  >
                    <strong>2. Wellness Services & Consultation</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 1.5, fontSize: "0.8rem" }}
                  >
                    Our platform provides Ayurvedic consultations, wellness
                    guidance, herbal product recommendations, and holistic
                    health resources. All advice is based on traditional
                    Ayurvedic principles and should complement, not replace,
                    conventional medical care. Always consult qualified
                    healthcare professionals for medical conditions.
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ mb: 1, fontSize: "0.8rem" }}
                  >
                    <strong>3. Health Information & Privacy</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 1.5, fontSize: "0.8rem" }}
                  >
                    We collect your health information, dosha profile, lifestyle
                    habits, and wellness goals to provide personalized Ayurvedic
                    recommendations. Your health data is confidential and
                    processed in accordance with our Privacy Policy and
                    applicable health data protection regulations.
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ mb: 1, fontSize: "0.8rem" }}
                  >
                    <strong>4. Accurate Health Information</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 1.5, fontSize: "0.8rem" }}
                  >
                    You agree to provide accurate and complete health
                    information including medical history, allergies, current
                    medications, and health conditions. Accurate information is
                    crucial for safe and effective Ayurvedic recommendations.
                    Update your health profile whenever your condition changes.
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ mb: 1, fontSize: "0.8rem" }}
                  >
                    <strong>5. Product Usage & Responsibility</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 1.5, fontSize: "0.8rem" }}
                  >
                    Ayurvedic products and remedies recommended through our
                    platform should be used as directed. You are responsible for
                    checking ingredient lists for potential allergens.
                    Discontinue use and consult a healthcare provider if you
                    experience adverse reactions. Pregnant or nursing women
                    should seek medical advice before using any herbal products.
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ mb: 1, fontSize: "0.8rem" }}
                  >
                    <strong>6. Account Security & Usage</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 1.5, fontSize: "0.8rem" }}
                  >
                    You are responsible for maintaining the confidentiality of
                    your account credentials. Do not share your account with
                    others as it contains personal health information. We
                    reserve the right to suspend accounts that violate our
                    community guidelines or misuse our wellness services.
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ mb: 1, fontSize: "0.8rem" }}
                  >
                    <strong>7. Limitation of Liability</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 1.5, fontSize: "0.8rem" }}
                  >
                    While we strive to provide authentic Ayurvedic guidance,
                    individual results may vary. We are not liable for any
                    adverse effects from following wellness recommendations or
                    using products. Our services are educational and
                    complementary in nature, not a substitute for professional
                    medical diagnosis or treatment.
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ mb: 1, fontSize: "0.8rem" }}
                  >
                    <strong>8. Intellectual Property</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 1.5, fontSize: "0.8rem" }}
                  >
                    All content including Ayurvedic recipes, dosha assessments,
                    wellness plans, and educational materials are proprietary to
                    JYA. You may use them for personal wellness purposes but may
                    not reproduce, distribute, or commercialize our content
                    without permission.
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ mb: 1, fontSize: "0.8rem" }}
                  >
                    <strong>9. Changes to Terms</strong>
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    We reserve the right to modify these terms to better serve
                    your wellness journey. Continued use of our platform after
                    changes constitutes acceptance of the modified terms. We
                    will notify users of significant changes via email or
                    platform notifications.
                  </Typography>
                </Box>

                <Controller
                  name="agreeToTerms"
                  control={control}
                  render={({ field }) => (
                    <Box>
                      <FormControlLabel
                        control={
                          <Checkbox
                            {...field}
                            checked={field.value}
                            sx={{
                              color: errors.agreeToTerms
                                ? "#d32f2f"
                                : "#7aa874",
                              "&.Mui-checked": {
                                color: "#7aa874",
                              },
                            }}
                          />
                        }
                        label={
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: "0.85rem",
                              color: errors.agreeToTerms
                                ? "#d32f2f"
                                : "#4b5563",
                            }}
                          >
                            I have read and agree to the Terms and Conditions *
                          </Typography>
                        }
                        sx={{ mt: 1 }}
                      />
                      {errors.agreeToTerms && (
                        <FormHelperText error sx={{ ml: 2 }}>
                          {errors.agreeToTerms.message}
                        </FormHelperText>
                      )}
                    </Box>
                  )}
                />
              </Box>

              <Button
                type="submit"
                fullWidth
                disabled={!agreeToTerms}
                sx={{
                  borderRadius: 2,
                  py: 0.9,
                  mt: 2,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  background: agreeToTerms
                    ? "linear-gradient(135deg,#c7e8b4 0%,#7fb069 100%)"
                    : "#e0e0e0",
                  color: agreeToTerms ? "#1f2d1f" : "#9e9e9e",
                  "&:hover": {
                    background: agreeToTerms
                      ? "linear-gradient(135deg,#b9dea6 0%,#6fa55b 100%)"
                      : "#e0e0e0",
                  },
                  "&:disabled": {
                    cursor: "not-allowed",
                  },
                }}
              >
                Sign Up
              </Button>

              <Divider sx={{ my: 1.5 }}>
                <Typography
                  variant="caption"
                  sx={{ color: "#6b7d6a", fontSize: "0.7rem" }}
                >
                  OR
                </Typography>
              </Divider>

              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  color: "#6b7d6a",
                  fontSize: "0.85rem",
                }}
              >
                Already have an account?{" "}
                <span
                  style={{
                    fontWeight: 600,
                    cursor: "pointer",
                    color: "#5d8c57",
                  }}
                  onClick={() => {
                    handleClose();
                    setOpenLogin(true);
                  }}
                >
                  Login
                </span>
              </Typography>
            </form>
          </Box>
        </Box>
      </Modal>
      <CommonLoader isLoading={loading} />
      <ConfirmationModal
        confirmationOpen={openConfirmationModal}
        confirmationHandleClose={() => setOpenConfirmationModal(false)}
        confirmationSubmitFunc={handleUserSignup}
        confirmationLabel="Confirm Registration"
        confirmationMsg="Are you sure you want to create this account?"
        confirmationButtonMsg="Confirm"
      />
    </>
  );
}

export default SignUp;
