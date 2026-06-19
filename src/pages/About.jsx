// src/pages/About.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import ContactCTA from '../components/ContactCTA';
import shreeImage from '../assets/shree.png';
import './About.css';

// ── Animation Variants ──
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
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

// ── Data ──
const values = [
  { title: 'Quality Craftsmanship', description: 'Uncompromising attention to every detail — from design to execution.' },
  { title: 'Innovation', description: 'Blending creative design with modern construction techniques.' },
  { title: 'Trust & Transparency', description: 'Clear communication, honest pricing, and timely delivery.' },
  { title: 'Customer Satisfaction', description: 'Your vision guides every decision we make.' },
];

const whyChooseUs = [
  { icon: '🎨', title: 'Complete Design Solutions', desc: 'Creative design tailored to your taste and lifestyle.' },
  { icon: '🏗️', title: 'Full-Scale Contracting', desc: 'From procurement to construction — we handle it all.' },
  { icon: '✨', title: 'Premium Quality Materials', desc: 'Only the finest materials from trusted partners.' },
  { icon: '👷', title: 'Skilled Execution Team', desc: 'Experienced designers, contractors, and craftsmen.' },
  { icon: '⏰', title: 'On-Time Delivery', desc: 'Projects delivered on schedule, every time.' },
  { icon: '🔧', title: 'End-to-End Execution', desc: 'Design, procurement, construction, and finishing.' },
];

const servicesList = [
  'Residential Interior Design & Contracting',
  'Commercial & Office Interiors',
  'Modular Kitchen Design & Installation',
  'Custom Furniture & Joinery',
  'False Ceiling & Lighting Solutions',
  'Flooring & Wall Finishes',
  'Plumbing & Electrical Works',
  'HVAC & AC Ducting',
  'Painting & Polishing',
  'Complete Turnkey Project Execution'
];

const materialFeatures = [
  'Plywood & Block Boards',
  'Laminates & Veneers',
  'MDF & HDF Boards',
  'Hardware & Fittings',
  'Modular Accessories',
  'Door Fittings & Frames',
  'Flooring Materials',
  'Construction Materials'
];

// ✅ 8 Interior Images for Slider
const interiorImages = [
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800',
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800',
];

// ── Component ──
const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % interiorImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // ✅ Smooth slide variants
  const slideVariants = {
    enter: {
      x: '100%',
      opacity: 0.6,
    },
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
        opacity: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
      },
    },
    exit: {
      x: '-30%',
      opacity: 0,
      transition: {
        x: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
        opacity: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
      },
    },
  };

  return (
    <>
      <PageBanner 
        title="About Us" 
        subtitle="Design • Contract • Execute — Since 2020"
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600"
      />

      {/* ── HERO SECTION ── */}
      <section className="about-hero-luxury">
        <div className="container">
          <motion.div 
            className="about-hero-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeInLeft} className="about-hero-content">
              <span className="section-tag-luxury">✦ About DreamProSpaces</span>
              <h1 className="about-hero-title">
                <span className="gold-text">Design</span> • <span className="gold-text">Contract</span> • <span className="gold-text">Execute</span>
                <span className="about-hero-sub">Complete Interior Solutions Since 2020</span>
              </h1>
              <p className="about-hero-text">
                DreamProSpaces is a premier interior design and contracting company 
                based in Mumbai. We specialize in complete turnkey interior solutions — 
                from creative design and material procurement to full-scale construction 
                and finishing.
              </p>
              <div className="about-hero-stats">
                <div className="hero-stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years of Excellence</span>
                </div>
                <div className="hero-stat-divider" />
                <div className="hero-stat">
                  <span className="stat-number">150+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="hero-stat-divider" />
                <div className="hero-stat">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="about-hero-image">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900"
                alt="DreamProSpaces Interior Design & Contracting"
              />
              <div className="about-hero-badge">✦ Since 2020</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── COMPANY STORY ── */}
      <section className="about-story-luxury">
        <div className="container">
          <motion.div 
            className="about-story-grid-luxury"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeInLeft} className="about-story-image-luxury">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=900"
                alt="DreamProSpaces design studio"
              />
              <div className="about-story-badge">✦ Our Journey</div>
            </motion.div>
            <motion.div variants={fadeInRight} className="about-story-content-luxury">
              <span className="section-tag-luxury">✦ Our Story</span>
              <h2 className="section-title-luxury">
                Transforming <span className="gold-text">Ordinary</span> Spaces Into 
                <span className="gold-text"> Extraordinary</span> Environments
              </h2>
              <p>
                DreamProSpaces was founded in 2020 with a simple yet powerful vision: 
                to provide complete interior design and contracting services under one roof. 
                What began as a passionate design venture has grown into a full-service 
                turnkey interior company.
              </p>
              <p>
                Today, our multidisciplinary team of designers, architects, and 
                project managers work hand-in-hand with clients to deliver interiors 
                that are as functional as they are visually striking — always grounded 
                in quality craftsmanship and thoughtful detail.
              </p>
              <div className="about-story-timeline">
                <div className="timeline-item">
                  <span className="timeline-year">2020</span>
                  <span className="timeline-text">Founded DreamProSpaces</span>
                </div>
                <div className="timeline-item">
                  <span className="timeline-year">2022</span>
                  <span className="timeline-text">Expanded to Contracting Services</span>
                </div>
                <div className="timeline-item">
                  <span className="timeline-year">2024</span>
                  <span className="timeline-text">150+ Projects Delivered</span>
                </div>
              </div>
              <div className="about-story-line" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="about-mission-luxury">
        <div className="container about-mission-grid-luxury">
          <motion.div 
            className="mission-card-luxury"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="mission-card-icon">✦</div>
            <h3>Our Mission</h3>
            <p>
              To deliver exceptional interior design and contracting services that 
              enhance the way people live and work — blending creativity, functionality, 
              and lasting quality in every project.
            </p>
          </motion.div>
          <motion.div 
            className="mission-card-luxury highlight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="mission-card-icon">✦</div>
            <h3>Our Vision</h3>
            <p>
              To be the most trusted name in interior design and contracting, 
              recognized for our craftsmanship, integrity, and ability to turn 
              client visions into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="about-values-luxury">
        <div className="container">
          <motion.div 
            className="section-header-luxury"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-tag-luxury">✦ What Drives Us</span>
            <h2 className="section-title-luxury">
              Our <span className="gold-text">Core</span> Values
            </h2>
          </motion.div>
          <motion.div 
            className="values-grid-luxury"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {values.map((value, index) => (
              <motion.div 
                className="value-card-luxury" 
                key={value.title}
                variants={fadeInUp}
                whileHover={{ y: -8, borderColor: 'var(--color-gold)' }}
              >
                <div className="value-number">{String(index + 1).padStart(2, '0')}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES WE PROVIDE ── */}
      <section className="about-services-luxury">
        <div className="container">
          <motion.div 
            className="section-header-luxury"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-tag-luxury">✦ What We Do</span>
            <h2 className="section-title-luxury">
              Our <span className="gold-text">Services</span>
            </h2>
          </motion.div>

          <motion.div 
            className="services-grid-luxury"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {servicesList.map((service, index) => (
              <motion.div 
                className="service-item-luxury"
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 4 }}
              >
                <span className="service-check">✓</span>
                {service}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MATERIAL PARTNER ── */}
      <section className="about-partner-luxury">
        <div className="container">
          <motion.div 
            className="partner-header-luxury"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-tag-luxury">✦ Trusted Partner</span>
            <h2 className="section-title-luxury">
              <span className="gold-text">Shree Radhe</span> Enterprises
            </h2>
            <p className="partner-subtitle">
              Stockist of Premium Quality Plywood & Laminates
            </p>
          </motion.div>

          <div className="partner-grid-luxury">
            <motion.div 
              className="partner-image-luxury"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src={shreeImage}
                alt="Shree Radhe Enterprises - Premium Plywood & Laminates"
              />
              <div className="partner-image-badge">✦ Premium Quality</div>
            </motion.div>

            <motion.div 
              className="partner-content-luxury"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* ── Partner Business Card ── */}
              <div className="partner-business-card">
                <div className="partner-card-header">
                  <h3>SHREE RADHE <span>ENTERPRISES</span></h3>
                  <p className="partner-card-sub">श्री राधे इंटरप्रायजें</p>
                </div>

                <div className="partner-card-body">
                  <div className="partner-card-row">
                    <span className="card-label">📞 Contact:</span>
                    <span className="card-value">9702343247</span>
                  </div>
                  <div className="partner-card-row">
                    <span className="card-label">🏢 Stockist of:</span>
                    <span className="card-value">PLYWOOD, LAMINATE,HARDWERE </span>
                  </div>
                  <div className="partner-card-row">
                    <span className="card-label">📍 Address:</span>
                    <span className="card-value">Millennium Building, Shop No.10, Lokhandwala, Kandivali East, Mumbai - 400101</span>
                  </div>
                </div>

                <div className="partner-card-footer">
                  <a 
                    href="https://wa.me/919702343247" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="partner-whatsapp-btn"
                  >
                    💬 WhatsApp
                  </a>
                  <a 
                    href="tel:+919702343247" 
                    className="partner-call-btn"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              {/* ── Description ── */}
              <p className="partner-description">
                Shree Radhe Enterprises is our trusted material partner, providing 
                premium quality materials that form the foundation of every 
                DreamProSpaces project. With years of experience in the industry, 
                they ensure that every material meets our rigorous standards of 
                quality and durability.
              </p>

              <div className="partner-features-grid">
                {materialFeatures.map((feature, index) => (
                  <motion.div 
                    className="partner-feature-item"
                    key={feature}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className="feature-check">✓</span>
                    {feature}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INTERIOR IMAGE SLIDER ── */}
      <section className="about-slider-luxury">
        <div className="container">
          <motion.div 
            className="slider-header-luxury"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-tag-luxury">✦ Our Work</span>
            <h2 className="section-title-luxury">
              Recent <span className="gold-text">Interior</span> Projects
            </h2>
          </motion.div>

          <div className="about-slider-container">
            <div className="about-slider-wrapper">
              <motion.img
                key={currentIndex}
                src={interiorImages[currentIndex]}
                alt={`Interior project ${currentIndex + 1}`}
                className="about-slider-image"
                initial="enter"
                animate="center"
                exit="exit"
                variants={slideVariants}
              />
              <div className="about-slider-overlay" />
              <div className="about-slider-counter">
                {currentIndex + 1} / {interiorImages.length}
              </div>
            </div>

            {/* ── Slider Dots ── */}
            <div className="about-slider-dots">
              {interiorImages.map((_, index) => (
                <button
                  key={index}
                  className={`about-slider-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="about-why-luxury">
        <div className="container">
          <motion.div 
            className="section-header-luxury"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-tag-luxury">✦ Why Choose Us</span>
            <h2 className="section-title-luxury">
              The <span className="gold-text">DreamProSpaces</span> Advantage
            </h2>
          </motion.div>

          <motion.div 
            className="why-grid-luxury"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {whyChooseUs.map((item) => (
              <motion.div 
                className="why-item-luxury"
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -8, boxShadow: 'var(--shadow-luxury)' }}
              >
                <span className="why-item-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="about-cta-luxury">
        <div className="container">
          <motion.div 
            className="about-cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Create Your <span className="gold-text">Dream Space</span>?</h2>
            <p>Let's bring your vision to life with our premium interior design & contracting services.</p>
            <Link to="/contact" className="btn-cta-about">
              <span>Start Your Journey</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default About;