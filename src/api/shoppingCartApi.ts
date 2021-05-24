import axios from 'axios';

const api = axios.create({
    baseURL: 
        `${process.env.API_BASE_SHOPPING_CART}:${process.env.API_PORT_SHOPPING_CART}` || 
        'http://localhost:3335'
})

export default api;