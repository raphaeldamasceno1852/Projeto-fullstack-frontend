import axios from "axios"

export const api = axios.create({
    baseURL: "https://client-list-backend.onrender.com",
    timeout: 5000,
})

