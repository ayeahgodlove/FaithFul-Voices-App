import axios from 'axios'

export const api = axios.create({
    baseURL: `${process.env.VITE_APP_API_URL}`,
    headers: {
        'Content-Type': 'application/json'
    },
})