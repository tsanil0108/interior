// src/services/AuthService.js
import axiosInstance from '../api/axiosInstance';

const authService = {
  /**
   * Admin login
   * @param {{username: string, password: string}} payload
   */
  login: (payload) => axiosInstance.post('/auth/login', payload),

  logout: () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_username');
  },

  isAuthenticated: () => !!localStorage.getItem('admin_token'),

  getUsername: () => localStorage.getItem('admin_username'),

  saveSession: (token, username) => {
    localStorage.setItem('admin_token', token);
    localStorage.setItem('admin_username', username);
  },
};

export default authService;