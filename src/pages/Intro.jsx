// src/pages/Intro.jsx
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Intro.css';

const Intro = () => {
  // ✅ Add your images here (5-8 images)
  const images = [
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=900',
    'https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=700',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=900',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto-slide effect - changes every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    
    return () => clearInterval(timer);
  }, [images.length]);

  // ✅ Smooth slide variants
  const slideVariants = {
    enter: {
      x: '100%',
      opacity: 0.5,
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

  // ✅ Get next image for secondary preview
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <section className="section intro-luxury">
      <div className="container intro-grid-luxury">
        {/* ── Image Slider Section ── */}
        <motion.div 
          className="intro-images-luxury"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* ✅ Main Slider with Auto Animation */}
          <div className="intro-slider-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="intro-slide-wrapper"
              >
                <img
                  src={images[currentIndex]}
                  alt={`Interior design ${currentIndex + 1}`}
                  className="intro-img-main-luxury"
                />
              </motion.div>
            </AnimatePresence>

            {/* ✅ Slide Counter */}
            <div className="intro-slider-counter">
              {currentIndex + 1} / {images.length}
            </div>

            {/* ✅ Navigation Arrows */}
            <button 
              className="intro-slider-arrow intro-slider-prev"
              onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
            >
              ‹
            </button>
            <button 
              className="intro-slider-arrow intro-slider-next"
              onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
            >
              ›
            </button>

            {/* ✅ Dots Indicator */}
            <div className="intro-slider-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`intro-slider-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* ✅ Secondary Image (shows next image) */}
          <img
            className="intro-img-secondary-luxury"
            src={images[nextIndex]}
            alt="Next design preview"
          />

          {/* ✅ Badge */}
          <div className="intro-badge-luxury">
            <h4>5+</h4>
            <p>Years of Excellence</p>
          </div>
        </motion.div>

        {/* ── Content Section ── */}
        <motion.div 
          className="intro-content-luxury"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="section-tag-luxury">✦ Who We Are</span>
          <h2 className="section-title-luxury">
            Designing Interiors That <span className="gold-text">Reflect</span> Your Vision
          </h2>
          <p className="intro-text-luxury">
            At DreamProSpaces, we believe a space should feel as good as
            it looks. For over a decade, our team of designers and craftsmen
            have partnered with homeowners and businesses to create interiors
            that are functional, elegant, and entirely personal — from
            concept sketches to the final styled photograph.
          </p>

          <ul className="intro-points-luxury">
            <li>
              <strong>Personalized Design Process</strong>
              <span>Every project begins with understanding how you live and work.</span>
            </li>
            <li>
              <strong>End-to-End Execution</strong>
              <span>From planning and 3D visualization to on-site execution.</span>
            </li>
            <li>
              <strong>Premium Materials & Craftsmanship</strong>
              <span>We partner only with trusted vendors and skilled artisans.</span>
            </li>
          </ul>

          <Link to="/about" className="btn btn-outline-dark intro-btn">Learn More About Us</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;