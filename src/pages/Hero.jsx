// src/pages/Hero.jsx
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from '../components/AnimatedCounter';
import './Hero.css';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section className="hero-luxury" ref={ref}>
      <motion.div className="hero-bg-luxury" style={{ y: bgY }}>
        <div className="hero-gradient-overlay" />
        <div className="hero-pattern-overlay" />
      </motion.div>

      <motion.div className="container hero-content-luxury" style={{ opacity: contentOpacity }}>
        <motion.div 
          className="hero-accent-line"
          initial={{ width: 0 }}
          animate={{ width: '80px' }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />

        <motion.p
          className="hero-tag-luxury"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="tag-dot">✦</span> DreamProSpaces — Crafting Timeless Elegance
        </motion.p>

        <motion.h1
          className="hero-title-luxury"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <span className="title-dream">DREAM</span>
          <span className="title-pro">PRO</span>
          <span className="title-spaces">SPACES</span>
          <span className="title-sub">Interior Works</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle-luxury"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Bespoke residential and commercial interiors that blend 
          <span className="highlight-gold"> timeless sophistication</span> 
          with <span className="highlight-gold">modern functionality</span>.
        </motion.p>

        <motion.div
          className="hero-actions-luxury"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <Link to="/contact" className="btn btn-gold hero-btn">
            <span>Schedule Consultation</span>
            <svg className="btn-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </Link>
          <Link to="/projects" className="btn-outline-luxury">Explore Portfolio</Link>
        </motion.div>

        <motion.div
          className="hero-stats-luxury"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="stat-item-luxury">
            <h3><AnimatedCounter to={12} suffix="+" /></h3>
            <p>Years of Excellence</p>
          </div>
          <div className="stat-divider-luxury" />
          <div className="stat-item-luxury">
            <h3><AnimatedCounter to={450} suffix="+" /></h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat-divider-luxury" />
          <div className="stat-item-luxury">
            <h3><AnimatedCounter to={98} suffix="%" /></h3>
            <p>Client Satisfaction</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="hero-scroll-luxury"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span>Scroll</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
};

export default Hero;