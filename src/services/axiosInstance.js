import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://18.212.39.82:5000/api',
});

export default axiosInstance;