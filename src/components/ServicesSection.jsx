// src/components/ServicesSection.jsx
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../assets/servicesData';
import ServiceCard from './ServiceCard';
import './ServicesSection.css';

const ServicesSection = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="services-section-luxury">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="services-header-luxury"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="services-tag-luxury">✦ What We Offer</span>
          <h2 className="services-title-luxury">
            Our <span className="gold-text">Interior Design</span> Services
          </h2>
          <p className="services-subtitle-luxury">
            Comprehensive design solutions tailored to every space — from
            intimate homes to large-scale commercial environments.
          </p>
          <div className="services-header-line" />
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="services-grid-luxury"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {servicesData.map((service) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              className="service-item-wrapper"
            >
              <ServiceCard
                service={service}
                onClick={() => navigate('/services', { state: { scrollTo: service.slug } })}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="services-cta-luxury"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link to="/services" className="btn-cta-services-luxury">
            <span>View All Services</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;