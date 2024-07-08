import axios from 'axios';
import secureStorage from '../../secureStorage.js';

const BACKEND_URL = 'http://54.81.238.82:8080'; //Spring Boot

const header = () => {
    const token = secureStorage.getItem('token');
    return {headers: {Authorization : `Bearer ${token}`}};
}

export const fetchRockie = async () => {
    const config = header();
    const response = await axios.get(`${BACKEND_URL}/rockie/info`, config);
    console.log(response);
    return response;
}

export const fetchRockieUpdate = async (body) => {
    const config = header();
    const response = await axios.patch(`${BACKEND_URL}/rockie/update`, body, config);
    console.log(response);
    return response;
}

export const getallaccesories = async () => {
    const config = header();
    const response = await axios.get(`${BACKEND_URL}/accessory/all`, config);
    console.log(response);
    return response;
}

export const buyAccessory = async (accessoryName) => {
    const config = header();
    const response = await axios.patch(`${BACKEND_URL}/accessory/buy/accessory`, {
        ...config,
        params: {
            accessory: accessoryName
        }
    });
    console.log(response);
    return response;
}
