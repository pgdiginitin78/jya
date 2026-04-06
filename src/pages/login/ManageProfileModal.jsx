import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Divider,
  Modal,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import JYALogoImg from "../../asset/JnanaYogAyuLogo.png";
import CancelButtonModal from "../../components/common/button/CancelButtonModal";
import ConfirmationModal from "../../components/common/ConfirmationModal";
import DatePickerField from "../../components/common/formFields/DatePickerField";
import InputArea from "../../components/common/formFields/InputArea";
import InputField from "../../components/common/formFields/InputField";
import RadioField from "../../components/common/formFields/RadioField";
import {
  errorAlert,
  successAlert,
} from "../../components/common/toast/CustomToast";
import { getUserDetails, signupJYA } from "../../services/login/LoginServices";
import { useAuth } from "../../context/AuthContext";
import CommonButton from "../../components/common/button/CommonButton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLoader } from "../../components/common/commonLoader/LoaderContext";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  outline: "none",
  maxHeight: "95vh",
  width: "100%",
  maxWidth: "600px",
  overflowY: "auto",
};

const genderOptions = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Other", value: "Other" },
];

const schema = yup.object().shape({
  FirstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  dob: yup.date().nullable().required("Date of birth is required"),
  age: yup.number().typeError("Age is required").required("Age is required"),
  mobileNo: yup
    .string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Must be 10 digits"),
  whatsappNo: yup.string().nullable(),
  emailId: yup.string().required("Email is required").email("Invalid format"),
  pinCode: yup
    .string()
    .required("Pincode is required")
    .matches(/^[0-9]{6}$/, "Must be 6 digits"),
  address: yup.string().required("Address is required"),
  locality: yup.string().required("Locality is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
  userName: yup.string().required("Username is required"),
  occupation: yup.string().nullable(),
  gender: yup.string().required("Gender is required"),
});

export default function ManageProfileModal({ open, handleClose, user }) {
  const { updateUser } = useAuth();
  const [avatarPreview, setAvatarPreview] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { showLoader, hideLoader } = useLoader();
  
  const {
    control,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      FirstName: "",
      lastName: "",
      mobileNo: "",
      whatsappNo: "",
      emailId: "",
      dob: null,
      gender: "",
      age: "",
      address: "",
      city: "",
      state: "",
      pinCode: "",
      locality: "",
      country: "India",
      userName: "",
      occupation: "",
    },
  });

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIpAddress(data.ip))
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    if (open && user?.userId) {
      getUserDetails(user.userId)
        .then((res) => {
          const userData = res?.data?.data;
          if (userData) {
            setValue("FirstName", userData.firstName || "");
            setValue("lastName", userData.lastName || "");
            setValue("mobileNo", userData.whatsappNo || "");
            setValue("whatsappNo", userData.whatsappNo || "");
            setValue("emailId", userData.emailId || "");
            if (userData.dob) setValue("dob", new Date(userData.dob));
            const filterGender = genderOptions.find(
              (item) =>
                item.label?.toLowerCase() === userData?.gender?.toLowerCase(),
            );

            if (filterGender) {
              setValue("gender", filterGender.value);
            }
            setValue("age", userData.age || "");
            setValue("address", userData.address || "");
            setValue("city", userData.city || "");
            setValue("state", userData.state || "");
            setValue("pinCode", userData.pinCode || "");
            setValue("locality", userData.locality || "");
            setValue("country", userData.country || "India");
            setValue("userName", userData.userName || "");
            setValue("occupation", userData.occupation || "");

            if (userData.avatar) setAvatarPreview(userData.avatar);
          }
        })
        .catch((err) => {
          console.error("Failed to fetch user details:", err);
          errorAlert("Failed to fetch user details.");
        });
    }
  }, [open, user, setValue]);

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      dob: data.dob ? format(new Date(data.dob), "yyyy-MM-dd") : "",
      macIp: ipAddress,
      userId: user?.userId,
    };
    setFormData(formattedData);
    setOpenConfirmationModal(true);
  };

  const handleUserSignup = async () => {
    try {
      setOpenConfirmationModal(false);
      setIsLoading(true);
      const response = await signupJYA(formData);
      const apiData = response?.data;
      if (response.status === 200 && apiData) {
        successAlert(apiData?.message || "Profile updated successfully!");
        if (apiData.user) {
          updateUser(apiData.user);
        } else {
          const updatedUser = { ...user, ...formData };
          updateUser(updatedUser);
        }

        handleClose();
        reset();
      } else {
        errorAlert("Update failed");
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error?.message;
      errorAlert(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={modalStyle}
          className="bg-white rounded-xl shadow-2xl p-0 overflow-hidden"
        >
          <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={JYALogoImg}
                alt="Logo"
                className="w-10 h-10 object-contain"
              />
              <Typography
                variant="h6"
                className="font-bold text-gray-800 text-sm sm:text-base"
              >
                Manage Profile
              </Typography>
            </div>
            <CancelButtonModal onClick={handleClose} />
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-4 sm:p-5 space-y-4">
              <div className="flex flex-col items-center gap-1 mb-2">
                <Avatar
                  src={avatarPreview}
                  sx={{
                    width: 64,
                    height: 64,
                    bgcolor: "#263d21",
                    border: "2px solid #e5e7eb",
                  }}
                >
                  {user?.userName?.[0]?.toUpperCase()}
                </Avatar>
                <Typography
                  variant="caption"
                  className="text-gray-500 font-medium"
                >
                  Profile Picture
                </Typography>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                <div className="sm:col-span-2">
                  <Divider className="!mb-2">
                    <Typography
                      variant="caption"
                      className="font-bold text-green-700 tracking-wider"
                    >
                      PERSONAL INFORMATION
                    </Typography>
                  </Divider>
                </div>
                <InputField
                  control={control}
                  name="FirstName"
                  label="First Name"
                  error={errors.FirstName}
                />
                <InputField
                  control={control}
                  name="lastName"
                  label="Last Name"
                  error={errors.lastName}
                />
                <DatePickerField
                  control={control}
                  name="dob"
                  label="Date of Birth"
                  error={errors.dob}
                />
                <InputField
                  control={control}
                  name="age"
                  label="Age"
                  type="number"
                  error={errors.age}
                />
                <div className="sm:col-span-2 -mt-1">
                  <RadioField
                    control={control}
                    name="gender"
                    label="Gender"
                    dataArray={genderOptions.map((g) => ({
                      ...g,
                      id: g.value,
                    }))}
                  />
                </div>
                <div className="sm:col-span-2">
                  <InputField
                    control={control}
                    name="occupation"
                    label="Occupation"
                    error={errors.occupation}
                  />
                </div>

                <div className="sm:col-span-2 mt-1">
                  <Divider className="!mb-2">
                    <Typography
                      variant="caption"
                      className="font-bold text-green-700 tracking-wider"
                    >
                      CONTACT DETAILS
                    </Typography>
                  </Divider>
                </div>
                <InputField
                  control={control}
                  name="mobileNo"
                  label="Mobile No"
                  error={errors.mobileNo}
                />
                <InputField
                  control={control}
                  name="whatsappNo"
                  label="WhatsApp No"
                  error={errors.whatsappNo}
                />
                <div className="sm:col-span-2">
                  <InputField
                    control={control}
                    name="emailId"
                    label="Email Address"
                  />
                </div>

                <div className="sm:col-span-2 mt-1">
                  <Divider className="!mb-2">
                    <Typography
                      variant="caption"
                      className="font-bold text-green-700 tracking-wider"
                    >
                      ADDRESS INFORMATION
                    </Typography>
                  </Divider>
                </div>
                <InputField
                  control={control}
                  name="pinCode"
                  label="Pin Code"
                  error={errors.pinCode}
                />
                <InputField
                  control={control}
                  name="locality"
                  label="Locality"
                  error={errors.locality}
                />
                <InputField
                  control={control}
                  name="city"
                  label="City"
                  error={errors.city}
                />
                <InputField
                  control={control}
                  name="state"
                  label="State"
                  error={errors.state}
                />
                <InputField
                  control={control}
                  name="country"
                  label="Country"
                  error={errors.country}
                />
                <div className="sm:col-span-2">
                  <InputArea
                    control={control}
                    name="address"
                    label="Full Address"
                    minRows={2}
                    error={errors.address}
                  />
                </div>

                <div className="sm:col-span-2 mt-1">
                  <Divider className="!mb-2">
                    <Typography
                      variant="caption"
                      className="font-bold text-green-700 tracking-wider"
                    >
                      ACCOUNT DETAILS
                    </Typography>
                  </Divider>
                </div>
                <div className="sm:col-span-2">
                  <InputField
                    control={control}
                    name="userName"
                    label="Username"
                    disabled
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t sticky bottom-0 bg-white">
                <CommonButton
                  type="button"
                  label="Reset"
                  onClick={() => reset()}
                  className={"border border-red-600 text-red-600"}
                  disabled={isLoading}
                />
                <CommonButton
                  type="submit"
                  label={
                    isLoading ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      "Update Profile"
                    )
                  }
                  className="bg-gradient-to-r from-emerald-500 to-green-500 text-white transition-all duration-200"
                  disabled={isLoading}
                />
              </div>
            </div>
          </form>
        </Box>
      </Modal>

      <ConfirmationModal
        confirmationOpen={openConfirmationModal}
        confirmationHandleClose={() => setOpenConfirmationModal(false)}
        confirmationSubmitFunc={handleUserSignup}
        confirmationLabel="Confirm Registration"
        confirmationMsg="Are you sure you want to upadte this account profile"
        confirmationButtonMsg="Confirm"
      />
    </>
  );
}
