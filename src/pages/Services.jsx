// src/pages/Services.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './Services.css';

const Services = () => {
  return (
    <section className="services-luxury">
      <div className="container">
        <div className="section-header-luxury">
          <span className="section-tag-luxury">✦ Our Services</span>
          <h2 className="section-title-luxury">
            Comprehensive <span className="gold-text">Design</span> Solutions
          </h2>
          <p className="section-subtitle-luxury">
            From concept to completion — we deliver interiors that 
            <span className="gold-text"> elevate</span> your space and 
            <span className="gold-text"> inspire</span> your lifestyle.
          </p>
        </div>

        <motion.div 
          className="services-grid-luxury"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card-luxury"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="service-icon-wrapper">
                <span className="service-icon">{service.icon}</span>
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.shortDescription}</p>
              
              <Link to={`/services/${service.slug}`} className="service-link">
                Learn More
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </Link>
              
              <div className="service-gold-accent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;