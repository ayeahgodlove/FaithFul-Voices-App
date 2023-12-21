import axios, { AxiosInstance } from "axios";

const token = localStorage.getItem("token");

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${process.env.VITE_APP_API_URL}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `${token}`,
  },
});

export const tokenService = {
  getToken: (): Promise<any> => axiosInstance.get("/token"),
};

export const podcastService = {
  getPodcast: (): Promise<any> => axiosInstance.get("/podcasts"),
};

export const episodeService = {
  getEpisode: (): Promise<any> => axiosInstance.get(`/episodes?token=${token}`),
};
