// src/pages/LoginPage.jsx
import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const handleLogin = () => {
    // Puedes redirigir al usuario después de iniciar sesión correctamente
    window.location.href = '/pacientes'; // Redirige a la lista de pacientes
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
