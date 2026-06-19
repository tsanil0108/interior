// src/components/ProjectCard.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // ✅ Get images array from project
  const getImages = () => {
    if (project.images && typeof project.images === 'string' && project.images.length > 0) {
      const urls = project.images.split(',').filter(img => img.trim());
      if (urls.length > 0) {
        return urls;
      }
    }
    return [project.imageUrl];
  };

  const images = getImages();

  // ✅ Auto-slide effect
  useEffect(() => {
    if (images.length <= 1 || isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    
    return () => clearInterval(timer);
  }, [images.length, isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // ✅ Smooth crossfade variants - NO BLACK SCREEN
  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 0.97,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
        scale: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
      },
    },
    exit: {
      opacity: 0,
      scale: 1.03,
      transition: {
        opacity: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
        scale: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
      },
    },
  };

  return (
    <div 
      className="project-card-luxury"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="project-card-image-luxury">
        {/* ✅ Smooth Crossfade - No Black Screen */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={project.title}
            className="project-card-slide"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800';
            }}
          />
        </AnimatePresence>

        {/* Category Badge */}
        <div className="project-card-overlay-luxury">
          <span className="project-card-category-luxury">{project.category}</span>
        </div>

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="project-card-counter">
            {currentIndex + 1} / {images.length}
          </div>
        )}

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button 
              className="project-card-arrow project-card-prev"
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            >
              ‹
            </button>
            <button 
              className="project-card-arrow project-card-next"
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            >
              ›
            </button>
          </>
        )}

        {/* Hover Overlay */}
        <div className="project-card-hover-luxury">
          <span className="project-card-view-luxury">View Project</span>
        </div>
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div className="project-card-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`project-card-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}

      {/* Card Body */}
      <div className="project-card-body-luxury">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-card-line-luxury" />
      </div>
    </div>
  );
};

export default ProjectCard;