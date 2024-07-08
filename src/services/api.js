import axios from 'axios';


const BACKEND_URL = 'http://54.81.238.82:8080'; //Spring Boot

const header = () => {
    const token = localStorage.getItem('token');
    return {headers: {Authorization : `Bearer ${token}`}};
}

const paginacion = (page, size) => {
    let config = header();
    config = {
        ...config,
        params:{
            page,
            size
        }
    };
    return config;
}

export const fetchGetPages = async (page, size) => {
    let config = paginacion(page, size);
    return await axios.get('', config);
}

export const fetchLogin = async (body) => {
    const response = await axios.post(`${BACKEND_URL}/auth/login`, body);
    console.log(response);
    return response;
}
export const fetchRegister = async (body) => {
    const response = await axios.post(`${BACKEND_URL}/auth/signup`, body);
    console.log(response);
    return response;
}
export const fetchGetAlgo = async () => {
    const config = header();
    return await axios.get(``, config);
}

export const fetchUpdate = async (body) => {
    const config = header();
    return await axios.put('',body, config)
}