// src/components/ServiceCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './ServiceCard.css';

const ServiceCard = ({ service, onClick }) => {
  return (
    <motion.div 
      className="service-card-luxury"
      onClick={onClick}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Icon */}
      <div className="service-card-icon-luxury">
        <span className="service-icon">{service.icon}</span>
        <div className="service-card-glow" />
      </div>
      
      {/* Title */}
      <h3 className="service-card-title-luxury">{service.title}</h3>
      
      {/* Description */}
      <p className="service-card-description-luxury">{service.shortDescription}</p>
      
      {/* Footer with Learn More */}
      <div className="service-card-footer-luxury">
        <span className="service-card-link-luxury">
          Learn More
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </span>
      </div>
      
      {/* Decorative Accent */}
      <div className="service-card-accent" />
    </motion.div>
  );
};

export default ServiceCard;