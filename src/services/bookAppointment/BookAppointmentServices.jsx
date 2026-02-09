

//clinics

import AxiosInstance from "../../AxiosInstance"

export const getClinicList = ()=>{
  return AxiosInstance.get(`/clinics`)
}