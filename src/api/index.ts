import axios, { AxiosInstance } from "axios";

const client_id = process.env.VITE_APP_CLIENT_ID;
const client_secret = process.env.VITE_APP_CLIENT_SECRET;
const Auth = "Basic " + client_id + ":" + client_secret;
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${process.env.VITE_APP_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosInstance2: AxiosInstance = axios.create({
  baseURL: `${process.env.VITE_APP_API_URL}`,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: Auth,
  },
});

