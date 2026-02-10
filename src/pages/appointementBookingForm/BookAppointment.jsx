import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CancelButtonModal from "../../components/common/button/CancelButtonModal";
import CommonButton from "../../components/common/button/CommonButton";
import DatePickerField from "../../components/common/formFields/DatePickerField";
import DropdownField from "../../components/common/formFields/DropdownField";
import InputField from "../../components/common/formFields/InputField";
import {
  getClinicList,
  getDoctorsData,
} from "../../services/bookAppointment/BookAppointmentServices";
import { errorAlert } from "../../components/common/toast/CustomToast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

export default function BookAppointment({ open, handleClose }) {
  const [clinicsOptions, setClinicOptions] = useState([]);
  const [doctorOptions, setDoctorOptions] = useState([]);

  const {
    register,
    handleSubmit,
    control,
    watch,
    trigger,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
    defaultValues: {
      clinicFid: null,
      patientFid: null,
      doctorFid: null,
      serviceFid: null,
      appoinmentDate: null,
      Status: "",
      SloteEndTime: null,
      SloteStartTime: null,
      ServiceDetails: "",
      taxDeatils: "",
      EncounterStatus: "",
    },
    mode: "onChange",
  });

  const clinicFidValue = watch("clinicFid");
  //     {
  //     "macId":"22.22",
  //     "macIp":"12.2",
  //     "clinicFid":1,
  //     "patientFid":1,
  //     "doctorFid":1,
  //     "serviceFid":"1",
  //     "appoinmentDate":"2026-02-07",
  //     "Status":"checkin",
  //     "SloteEndTime":"9:20 AM",
  //     "SloteStartTime":"9:00 AM",
  //     "ServiceDetails":"consultation- Rs 800 /-",
  //     "taxDeatils":"",
  //     "EncounterStatus":""
  // }

  const handleBookAppointment = (dataObj) => {};

  useEffect(() => {
    getClinicList()
      .then((res) => {
        const data = res?.data?.data;
        if (data?.length) {
          setClinicOptions(
            data.map((item) => ({
              ...item,
              id: item.fid,
              value: item.fid,
              label: item.clinicName,
            })),
          );
        }
      })
      .catch((err) => console.log(err.message || "Failed to fetch clinics"));
  }, []);

  useEffect(() => {
    if (clinicFidValue?.id > 0) {
      getDoctorsData(clinicFidValue?.id)
        .then((res) => {
          setDoctorOptions(res.data.data);
        })
        .catch((error) => error);
    }
  }, [clinicFidValue]);

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="w-[95%] md:w-[85%] h-[90%] lg:h-[55%] rounded-xl bg-white  overflow-y-auto"
        >
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-lime-300 flex items-center justify-center shadow-lg"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </motion.div>
            <h1 className="text-xl md:text-2xl text-green-600 font-bold ">
              Book Appointment
            </h1>
          </div>
          <CancelButtonModal onClick={handleClose} />
          <Divider
            sx={{
              height: "2px",
              background:
                "linear-gradient(to right, transparent, #10b981, transparent)",
              border: "none",
              my: 2,
            }}
          />

          <form
            action=""
            onSubmit={handleSubmit(handleBookAppointment)}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <div>
              <DropdownField
                control={control}
                name="clinicFid"
                placeholder={"Clinic"}
                dataArray={clinicsOptions}
              />
            </div>
               <div>
              <DropdownField
                control={control}
                name="doctorFid"
                placeholder={"Select Doctor"}
                dataArray={doctorOptions}
              />
            </div>
            <div>
              <DropdownField
                control={control}
                name="patientFid"
                placeholder={"Select Patient"}
                dataArray={[]}
              />
            </div>
         
            <div>
              <DropdownField
                control={control}
                name="serviceFid"
                placeholder={"Select Service"}
                dataArray={[]}
              />
            </div>
            <div>
              <DatePickerField
                control={control}
                name="appoinmentDate"
                label={"Appoinment Date"}
                inputFormat={"dd-MM-yyyy"}
                disablePast={true}
              />
            </div>
            <div>
              <DropdownField
                control={control}
                name="Status"
                placeholder={"Status"}
              />
            </div>
            <div>
              <InputField
                control={control}
                name="ServiceDetails"
                label="Service Details"
              />
            </div>
            <div>
              <InputField
                control={control}
                name="taxDeatils"
                label={"Tax Deatils"}
              />
            </div>
            <div>
              <InputField
                control={control}
                name="EncounterStatus"
                label="EncounterStatus"
              />
            </div>
            <div className="md:col-span-2 lg:col-span-3 flex justify-end items-center space-x-2">
              <CommonButton
                type="button"
                label="Reset"
                className={"border border-red-600 text-red-600"}
              />
              <CommonButton
                type="submit"
                label="Book Appointment"
                className={"bg-green-600 text-white"}
              />
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
