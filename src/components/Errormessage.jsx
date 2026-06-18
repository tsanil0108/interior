// src/components/ErrorMessage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './ErrorMessage.css';

const ErrorMessage = ({ 
  message = 'Something went wrong.', 
  onRetry, 
  variant = 'default',
  title = 'Oops!',
  icon = '!',
  showIcon = true
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'warning': return 'error-warning';
      case 'info': return 'error-info';
      case 'success': return 'error-success';
      default: return 'error-default';
    }
  };

  const getIconEmoji = () => {
    switch (variant) {
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      case 'success': return '✅';
      default: return icon;
    }
  };

  return (
    <motion.div 
      className={`error-message-luxury ${getVariantClass()}`}
      role="alert"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      {showIcon && (
        <motion.div 
          className="error-icon-luxury"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1, type: 'spring', stiffness: 200 }}
        >
          {getIconEmoji()}
        </motion.div>
      )}

      <div className="error-content-luxury">
        {title && <h3 className="error-title-luxury">{title}</h3>}
        <p className="error-message-text-luxury">{message}</p>
      </div>

      <div className="error-actions-luxury">
        {onRetry && (
          <motion.button 
            className="error-retry-btn-luxury"
            onClick={onRetry}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 4v6h6" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
            Try Again
          </motion.button>
        )}
      </div>

      <div className="error-decorative-line" />
    </motion.div>
  );
};

export default ErrorMessage;