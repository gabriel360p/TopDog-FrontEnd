import axios from 'axios'

const api = axios.create({
    baseURL: "https://topdog-backend.onrender.com"
})

export default api;