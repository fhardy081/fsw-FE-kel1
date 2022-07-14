import config from "../config/api.json";
import axios from "axios";

const api = axios.create({baseURL:config.base_url})

api.interceptors.request.use(request => {
    const token = localStorage.getItem("token")
    if (token) {
        request.headers["Authorization"] = token
    }
    return request
})
export default api