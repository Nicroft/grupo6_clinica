// src/components/PatientList.jsx
import React, { useEffect, useState } from 'react';
import { fetchPatients } from '../api/patientApi';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const getPatients = async () => {
      try {
        const data = await fetchPatients();
        setPatients(data);
      } catch (error) {
        console.error('Error al obtener pacientes:', error);
      }
    };

    getPatients();
  }, []);

  return (
    <div>
      <h2>Lista de Pacientes</h2>
      <ul>
        {patients.length > 0 ? (
          patients.map((patient) => (
            <li key={patient.id}>
              {patient.fullName} - {patient.email} - {patient.phoneNumber}
            </li>
          ))
        ) : (
          <p>No hay pacientes registrados.</p>
        )}
      </ul>
    </div>
  );
};

export default PatientList;
