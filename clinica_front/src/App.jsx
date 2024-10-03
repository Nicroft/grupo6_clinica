// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PatientsPage from './pages/PatientsPage';

function App() {
  return (
    <Router>
      <div>
        <h1>Clínica - Sistema de Gestión</h1>
        <nav>
          <ul>
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
            <li>
              <Link to="/pacientes">Pacientes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/pacientes" element={<PatientsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
