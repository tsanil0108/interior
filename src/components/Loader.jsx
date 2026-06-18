// src/components/Loader.jsx
import React from 'react';
import './Loader.css';

const Loader = ({ 
  size = 'medium', 
  label = 'Loading...', 
  variant = 'default',
  fullScreen = false,
  color = 'gold'
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'dots': return 'loader-dots';
      case 'pulse': return 'loader-pulse';
      default: return 'loader-spinner';
    }
  };

  const getColorClass = () => {
    switch (color) {
      case 'white': return 'loader-white';
      case 'dark': return 'loader-dark';
      default: return 'loader-gold';
    }
  };

  const loaderContent = () => {
    if (variant === 'dots') {
      return (
        <div className="loader-dots-container">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      );
    }
    
    if (variant === 'pulse') {
      return (
        <div className="loader-pulse-container">
          <div className="pulse-ring"></div>
          <div className="pulse-ring"></div>
          <div className="pulse-ring"></div>
        </div>
      );
    }

    return <span className={`loader-spinner ${getColorClass()}`} />;
  };

  return (
    <div 
      className={`loader-wrapper-luxury loader-${size} ${fullScreen ? 'loader-fullscreen' : ''}`} 
      role="status" 
      aria-live="polite"
    >
      {loaderContent()}
      {label && (
        <span className={`loader-label-luxury ${getColorClass()}`}>
          {label}
          <span className="loader-dots-animated">...</span>
        </span>
      )}
    </div>
  );
};

export default Loader;