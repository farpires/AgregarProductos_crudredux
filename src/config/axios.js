import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'http://localhost:4000/'
    // http://localhost:4000/productos
});

export default clienteAxios;