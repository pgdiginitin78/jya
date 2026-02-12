import AxiosInstance from "../../AxiosInstance";

//http://115.124.123.180:8095/api/locationList

export const getLocationList = () => {
  return AxiosInstance.get(`locationList`);
};

export const getClinicList = (LocationId) => {
  return AxiosInstance.get(`ClinicList?LocationId=${LocationId}`);
};

export const getDoctorsByClinicId = (clinicId) => {
  return AxiosInstance.get(`Doctors?ClinicFid=${clinicId}`);
};

export const getPatientDataByMobileNo = (contactNumber) => {
  return AxiosInstance.get(`Patients?contactNumber=${contactNumber}`);
};

export const getServicesByClinicId = (clinicId) => {
  return AxiosInstance.get(`Services?ClinicFid=${clinicId}`);
};

export const bookAppointment = (saveObj) => {
  return AxiosInstance.post(`bookAppointment`, saveObj);
};

export const getDoctorAvailableSlots = (doctorId, appointmentDate) => {
  return AxiosInstance.get(
    `DoctorAvailableSlots?doctorId=${doctorId}&appointmentDate=${appointmentDate}`,
  );
};

export const getPrescriptionsByPatient = (patientFid) => {
  return AxiosInstance.get(`PrescriptionsByPatient?patientFid=${patientFid}`);
};

export const getDoctorsProfile = (DoctorFid) => {
  return AxiosInstance.get(`DoctorsProfile?DoctorFid=${DoctorFid}`);
};

export const AddPatient = (saveObj) => {
  return AxiosInstance.post(`AddPatient`, saveObj);
};
