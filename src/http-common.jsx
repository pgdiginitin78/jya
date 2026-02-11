import axios from "axios";

export const API_BASE_URL = 'http://115.124.123.180:8095/api/';


export const API = axios.create({
    baseURL: API_BASE_URL,
    // withCredentials: true,
});