import axios, { AxiosInstance } from 'axios'

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: `${process.env.VITE_APP_API_URL}`,
    headers: {
        'Content-Type': 'application/json'
    },
})

export const loginDialog =  () => {
    return axiosInstance.get('/dialog/oauth?redirect_uri='+process.env.VITE_APP_REDIRECT_URI+'&scope='+process.env.VITE_APP_SCOPE+'&response_type='+process.env.VITE_APP_RESPONSE_TYPE+'&client_id='+process.env.VITE_APP_CLIENT_ID)
}