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

export const test = () => {
  return axiosInstance2.post("/oauth/token", {
    grant_type: "client_credentials",
  });
};
export const loginDialog = () => {
  return axiosInstance.get(
    "/dialog/oauth?redirect_uri=" +
      process.env.VITE_APP_REDIRECT_URI +
      "&scope=" +
      process.env.VITE_APP_SCOPE +
      "&response_type=" +
      process.env.VITE_APP_RESPONSE_TYPE +
      "&client_id=" +
      process.env.VITE_APP_CLIENT_ID
  );
};
