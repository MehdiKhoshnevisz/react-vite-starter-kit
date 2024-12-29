import axios from 'axios';

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL // Replace with your API base URL
});

export default request;
