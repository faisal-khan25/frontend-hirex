import axios from 'axios';

//  const BACKEND_URL = import.meta.env.VITE_API_URL='http://localhost:8080'
// //  'https://backend-7aoi.onrender.com';

const BACKEND_URL =
  import.meta.env.VITE_API_URL || "https://backend-7aoi.onrender.com";



const api = axios.create({
  baseURL: BACKEND_URL,
  timeout: 30000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.clear();
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

export default api;
