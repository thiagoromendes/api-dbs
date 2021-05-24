import axios from 'axios';

const api = axios.create({
    baseURL: 
    `${process.env.API_BASE_PRODUCT}:${process.env.API_PORT_PRODUCT}` || 
    'http://localhost:3334'
})

export default api;