// src/pages/Services.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { servicesData } from '../assets/servicesData';
import './Services.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const Services = () => {
  return (
    <>
      <PageBanner 
        title="Our Services" 
        subtitle="Design • Contract • Execute — Complete Interior Solutions"
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600"
      />

      <section className="services-page-luxury">
        <div className="container">
          {/* Header */}
          <motion.div 
            className="services-page-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-tag-luxury">✦ What We Offer</span>
            <h1 className="services-page-title">
              <span className="gold-text">Design</span> • <span className="gold-text">Contract</span> • <span className="gold-text">Execute</span>
            </h1>
            <p className="services-page-subtitle">
              Comprehensive interior design and contracting solutions tailored to every space — 
              from intimate homes to large-scale commercial environments.
            </p>
            <div className="services-page-line" />
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="services-page-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-page-card"
                variants={fadeInUp}
                whileHover={{ y: -12 }}
              >
                <div className="service-page-card-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-page-card-overlay">
                    <span className="service-page-card-icon">{service.icon}</span>
                  </div>
                  <div className="service-page-card-badge">
                    <span>✦ Premium</span>
                  </div>
                </div>
                
                <div className="service-page-card-content">
                  <h3 className="service-page-card-title">{service.title}</h3>
                  <p className="service-page-card-description">{service.shortDescription}</p>
                  
                  <div className="service-page-card-features">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="service-page-card-feature">
                        <span className="feature-check">✓</span>
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Link to={`/services/${service.slug}`} className="service-page-card-link">
                    <span>Learn More</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            className="services-page-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="services-page-cta-content">
              <h3>Ready to Transform Your Space?</h3>
              <p>Let's discuss your project and create something extraordinary.</p>
              <Link to="/contact" className="btn-cta-services-page">
                <span>Get a Free Consultation</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;