// src/components/LoginForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/token/', credentials);
      localStorage.setItem('token', response.data.access); // Almacena el token de acceso
      onLogin(); // Llama a la función pasada como prop para indicar que el usuario está autenticado
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Correo Electrónico" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default LoginForm;
