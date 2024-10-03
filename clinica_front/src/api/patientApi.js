// src/api/patientApi.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Cambia según tu configuración

// Obtener todos los pacientes
export const fetchPatients = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/Patient/`); // Cambia 'pacientes' a 'patients'
    return response.data;
  } catch (error) {
    console.error('Error al obtener pacientes:', error);
    throw error;
  }
};

// Crear un nuevo paciente
export const createPatient = async (patientData) => {
    const token = localStorage.getItem('token'); // Obtén el token del almacenamiento local
    try {
      const response = await axios.post(`${API_BASE_URL}/Patient/`, patientData, {
        headers: {
          Authorization: `Bearer ${token}`, // Incluye el token en el encabezado
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error al crear paciente:', error);
      throw error;
    }
  };

