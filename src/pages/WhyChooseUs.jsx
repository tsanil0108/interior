// src/pages/WhyChooseUs.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: '✦',
    title: 'Bespoke Design Approach',
    description: 'Every project is tailored to your taste, budget, and the way you actually live or work.',
  },
  {
    icon: '◆',
    title: 'Experienced Design Team',
    description: 'A decade-plus of expertise across residential, commercial, and hospitality interiors.',
  },
  {
    icon: '●',
    title: 'Transparent Process',
    description: 'Clear timelines, transparent pricing, and regular updates from concept to handover.',
  },
  {
    icon: '▲',
    title: 'Premium Quality Materials',
    description: 'We source only from trusted vendors to ensure long-lasting finishes and furniture.',
  },
];

const WhyChooseUs = () => {
  // ✅ 6-10 images for automatic slider
  const images = [
    'https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=900',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=900',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=900',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=900',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=900',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=900',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=900',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto-slide effect - changes every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  // ✅ Smooth slide variants
  const slideVariants = {
    enter: {
      x: '100%',
      opacity: 0.6,
      scale: 0.95,
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
        opacity: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
        scale: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
      },
    },
    exit: {
      x: '-30%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
        opacity: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
        scale: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
      },
    },
  };

  // ✅ Next image for secondary overlay
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <section className="why-choose-us-luxury">
      <div className="container why-grid-luxury">
        {/* ── Image Slider Section ── */}
        <motion.div 
          className="why-image-luxury"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="why-slider-container">
            {/* ✅ Main Image with Auto Animation */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Interior design ${currentIndex + 1}`}
                className="why-slider-image"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              />
            </AnimatePresence>

            {/* ✅ Overlay Gradient */}
            <div className="why-slider-overlay" />

            {/* ✅ Image Counter */}
            <div className="why-slider-counter">
              {currentIndex + 1} / {images.length}
            </div>

            {/* ✅ Navigation Arrows */}
            <button 
              className="why-slider-arrow why-slider-prev"
              onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev - 1 + images.length) % images.length); }}
            >
              ‹
            </button>
            <button 
              className="why-slider-arrow why-slider-next"
              onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev + 1) % images.length); }}
            >
              ›
            </button>

            {/* ✅ Dots Indicator */}
            <div className="why-slider-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`why-slider-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            {/* ✅ Badge */}
            <div className="why-image-badge">✦ Since 2020</div>
          </div>
        </motion.div>

        {/* ── Content Section ── */}
        <motion.div 
          className="why-content-luxury"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="section-tag-luxury">✦ Why Choose Us</span>
          <h2 className="section-title-luxury">
            The <span className="gold-text">DreamProSpaces</span> Difference
          </h2>
          <p className="section-subtitle-luxury why-subtitle-luxury">
            We don't just design interiors — we craft experiences that
            elevate the way you live, work, and feel within your space.
          </p>

          <div className="why-reasons-luxury">
            {reasons.map((reason, index) => (
              <motion.div 
                className="why-reason-luxury" 
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
              >
                <span className="why-reason-icon-luxury">{reason.icon}</span>
                <div>
                  <h4>{reason.title}</h4>
                  <p>{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;