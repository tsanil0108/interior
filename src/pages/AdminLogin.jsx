// src/pages/AdminLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import authService from '../services/AuthService';
import './AdminLogin.css';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await authService.login({ username, password });
      const { token, username: returnedUsername } = response.data.data;
      authService.saveSession(token, returnedUsername || username);
      navigate('/admin');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-luxury">
      {/* Background Decorations */}
      <div className="admin-login-bg-decoration" />
      <div className="admin-login-bg-decoration-2" />
      
      <motion.div 
        className="admin-login-container-luxury"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Logo */}
        <div className="admin-login-logo-luxury">
          <span className="logo-icon">✦</span>
          <h1>LUMI<span>ÈRE</span></h1>
          <p>Admin Panel</p>
        </div>

        {/* Form */}
        <form className="admin-login-form-luxury" onSubmit={handleSubmit}>
          <h2>Welcome Back</h2>
          <p className="admin-login-subtitle">Sign in to manage your interior design business</p>

          {error && (
            <motion.div 
              className="admin-login-error-luxury"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="error-icon">!</span>
              {error}
            </motion.div>
          )}

          <div className="admin-login-field-luxury">
            <label>
              <span className="field-label">Username</span>
              <div className="input-wrapper-luxury">
                <span className="input-icon">👤</span>
                <input 
                  type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  required 
                  placeholder="Enter your username"
                  autoFocus
                />
              </div>
            </label>
          </div>

          <div className="admin-login-field-luxury">
            <label>
              <span className="field-label">Password</span>
              <div className="input-wrapper-luxury">
                <span className="input-icon">🔒</span>
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                  placeholder="Enter your password"
                />
              </div>
            </label>
          </div>

          <motion.button 
            type="submit" 
            className="admin-login-btn-luxury"
            disabled={loading}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? (
              <>
                <span className="btn-loader" />
                Logging in...
              </>
            ) : (
              <>
                <span>Sign In</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </>
            )}
          </motion.button>

          <div className="admin-login-footer-luxury">
            <p>Secure admin access • v1.0</p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}