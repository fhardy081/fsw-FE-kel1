import axios from 'axios';
import config from '../config/api.json';

const api = axios.create({ baseURL: config.base_url });

api.interceptors.request.use((request) => {
    const token = localStorage.getItem('token');
    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
});
export default api;
