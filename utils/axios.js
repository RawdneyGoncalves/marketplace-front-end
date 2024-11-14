import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://0.0.0.0:3333',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api; 
