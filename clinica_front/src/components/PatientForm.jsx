// src/components/PatientForm.jsx
import React, { useState } from 'react';
import { createPatient } from '../api/patientApi';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    birthDate: '',
    phoneNumber: '',
    address: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPatient(formData);
      alert('Paciente registrado exitosamente');
    } catch (error) {
      console.error('Error al crear paciente:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="fullName" placeholder="Nombre Completo" onChange={handleChange} required />
      <input type="date" name="birthDate" onChange={handleChange} required />
      <input type="text" name="phoneNumber" placeholder="Número de Teléfono" onChange={handleChange} required />
      <input type="text" name="address" placeholder="Dirección" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Correo Electrónico" onChange={handleChange} required />
      <button type="submit">Guardar Paciente</button>
    </form>
  );
};

export default PatientForm;
