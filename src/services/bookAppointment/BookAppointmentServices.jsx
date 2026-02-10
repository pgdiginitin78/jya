

//clinics

import AxiosInstance from "../../AxiosInstance"

export const getClinicList = ()=>{
  return AxiosInstance.get(`/clinics`)
}

export const getDoctorsData = (clinicId)=>{
  return AxiosInstance.get(`/Doctors?ClinicFid=${clinicId}`)
}