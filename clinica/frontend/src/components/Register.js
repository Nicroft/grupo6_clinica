import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    full_name: '',
    phone_number: '',
    birth_date: '',
    address: '',
    role: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/User/', formData); // Cambia aquí la URL
      navigate('/login'); // Redirige al login después del registro
    } catch (error) {
      console.error('Error during registration', error);
    }
  };
 
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            name="username"
            value={formData.username} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Full Name:</label>
          <input 
            type="text" 
            name="full_name"
            value={formData.full_name}
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input 
            type="text" 
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Birth Date:</label>
          <input 
            type="date" 
            name="birth_date"
            value={formData.birth_date}
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Address:</label>
          <input 
            type="text" 
            name="address"
            value={formData.address}
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Role:</label>
          <select 
            name="role"
            value={formData.role}
            onChange={handleChange} 
            required
          >
            <option value="">Select Role</option>
            <option value="Médico">Médico</option>
            <option value="Enfermera">Enfermera</option>
            <option value="Administrativo">Administrativo</option>
          </select>
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
