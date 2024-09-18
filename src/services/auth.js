// src/services/auth.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Remplacez par l'URL de votre API

export const register = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/register`, { email, password });
  return response.data;
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  const { token } = response.data;
  localStorage.setItem('token', token);
  return response.data;
};

export const logout = (updateAuthState) => {
  localStorage.removeItem('token');
  if (updateAuthState) {
    updateAuthState(false); // Met à jour l'état global pour refléter la déconnexion
  }
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};
