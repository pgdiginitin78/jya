import AxiosInstance from "../../AxiosInstance";
import { API } from "../../http-common";

export const userLogin = (postObj) => {
  return API.post(`loginJYA`, postObj);
};

export const signupJYA = (postObj) => {
  return API.post(`/signupJYA`, postObj);
};

export const DeleteLoggedAccount = (password) => {
  return AxiosInstance.post(`DeleteAccount?password=${password}`);
};


export const getUserDetails = (userId) => {
  return AxiosInstance.get(`/UserDetails?userId=${userId}`);
};

export const forgotPassword = (postObj) => {
  return API.post(`/forgot-password`, postObj);
};

export const resetPassword = (postObj) => {
  return API.post(`/reset-password`, postObj);
};