// src/pages/Testimonials.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Ananya Kapoor',
    role: 'Homeowner, Bandra West',
    quote:
      'Lumière transformed our apartment into something we genuinely look forward to coming home to every day. The attention to detail was beyond anything we expected.',
    rating: 5,
  },
  {
    name: 'Rohan Mehta',
    role: 'Founder, Studio Mehta',
    quote:
      'Our office redesign completely changed how the team feels about coming to work. Professional, on schedule, and the final result speaks for itself.',
    rating: 5,
  },
  {
    name: 'Priya & Arjun Shah',
    role: 'Homeowners, Powai',
    quote:
      'From our modular kitchen to the living room furniture, every choice felt thoughtful and personal. Highly recommend their residential design team.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index) => setActiveIndex(index);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const active = testimonials[activeIndex];

  return (
    <section className="section testimonials-luxury">
      <div className="container">
        <div className="section-header-luxury">
          <span className="section-tag-luxury" style={{ color: 'var(--color-gold-light)' }}>✦ Client Stories</span>
          <h2 className="section-title-luxury" style={{ color: 'var(--color-white)' }}>
            What Our <span className="gold-text">Clients</span> Say
          </h2>
        </div>

        <div className="testimonial-card-luxury">
          <span className="testimonial-quote-mark-luxury">"</span>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="testimonial-stars-luxury">{'★'.repeat(active.rating)}</div>
              <p className="testimonial-text-luxury">{active.quote}</p>
              <h4 className="testimonial-name-luxury">{active.name}</h4>
              <p className="testimonial-role-luxury">{active.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="testimonial-controls-luxury">
          <button onClick={goPrev} aria-label="Previous testimonial" className="testimonial-btn-luxury">
            ←
          </button>
          <div className="testimonial-dots-luxury">
            {testimonials.map((t, i) => (
              <span
                key={t.name}
                className={`testimonial-dot-luxury ${i === activeIndex ? 'active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button onClick={goNext} aria-label="Next testimonial" className="testimonial-btn-luxury">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;