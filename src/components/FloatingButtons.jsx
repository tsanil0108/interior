// src/components/FloatingButtons.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const phoneNumber = '917304603314';
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const callLink = `tel:+${phoneNumber}`;

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="floating-buttons"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
        >
          {/* WhatsApp Button */}
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-btn floating-whatsapp"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="floating-icon">💬</span>
            <span className="floating-label">WhatsApp</span>
          </motion.a>

          {/* Call Button */}
          <motion.a
            href={callLink}
            className="floating-btn floating-call"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="floating-icon">📞</span>
            <span className="floating-label">Call Now</span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingButtons;