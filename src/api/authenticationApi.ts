import axios from 'axios';

const api = axios.create({
    baseURL: 
    `${process.env.API_BASE_AUTHENTICATION}:${process.env.API_PORT_AUTHENTICATION}` || 
    'http://localhost:3336'
})

export default api;