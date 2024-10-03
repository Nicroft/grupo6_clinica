// src/pages/PatientsPage.jsx
import React from 'react';
import PatientForm from '../components/PatientForm';
import PatientList from '../components/PatientList';

const PatientsPage = () => {
  return (
    <div>
      <h1>Gestión de Pacientes</h1>
      <PatientForm />
      <PatientList />
    </div>
  );
};

export default PatientsPage;
