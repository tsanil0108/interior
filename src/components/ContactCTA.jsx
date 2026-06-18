// src/components/ContactCTA.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ContactCTA.css';

const ContactCTA = () => {
  return (
    <section className="contact-cta-luxury">
      <div className="container">
        <motion.div 
          className="contact-cta-inner-luxury"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="contact-cta-text">
            <h2>Ready to Transform Your Space?</h2>
            <p>Schedule a free consultation with our design team and bring your vision to life.</p>
          </div>
          <Link to="/contact" className="btn btn-gold">
            <span>Get in Touch</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;