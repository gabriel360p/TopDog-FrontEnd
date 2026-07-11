import axios from 'axios'

const api = axios.create({
    baseURL: "https://topdog-backend.onrender.com"
})
console.log("API URL:", api.defaults.baseURL);
export default api;