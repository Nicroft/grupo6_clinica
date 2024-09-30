// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/'; // Cambia esto según tu configuración

export const registerUser = (userData) => {
    return axios.post(`${API_URL}register/`, userData);
};

export const loginUser = (credentials) => {
    return axios.post(`${API_URL}login/`, credentials);
};

export const changePassword = (oldPassword, newPassword, token) => {
    return axios.post(`${API_URL}change-password/`, { old_password: oldPassword, new_password: newPassword }, {
        headers: {
            Authorization: `Token ${token}`
        }
    });
};
