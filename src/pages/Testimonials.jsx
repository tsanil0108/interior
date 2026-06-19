// src/pages/Testimonials.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import reviewService from '../api/reviewService';
import './Testimonials.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    quote: '',
    rating: 5,
    project: '',
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  // ✅ Fetch reviews from backend
  const fetchReviews = async () => {
    try {
      const response = await reviewService.getApprovedReviews();
      const data = response.data?.data || [];
      if (data.length > 0) {
        setTestimonials(data);
      } else {
        // Fallback default reviews if no data
        setTestimonials([
          {
            id: 1,
            name: 'Mr. & Mrs. Rajesh Kumar',
            role: 'Homeowners, Kandivali East',
            quote: 'DreamProSpaces did an excellent job with our 2BHK apartment renovation. The modular kitchen is exactly what we wanted — spacious, modern, and very functional.',
            rating: 5,
            project: 'Residential Interior & Modular Kitchen',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500',
            createdAt: '2025-03-15',
          },
          {
            id: 2,
            name: 'Sneha Patel',
            role: 'Business Owner, Andheri',
            quote: 'I hired DreamProSpaces for my boutique showroom interior. They understood my brand perfectly and created a space that attracts customers. Very professional team!',
            rating: 5,
            project: 'Commercial Interior',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500',
            createdAt: '2025-02-10',
          },
          {
            id: 3,
            name: 'Amit Singh',
            role: 'Homeowner, Borivali',
            quote: 'We got our 3BHK flat interiors done by DreamProSpaces and the experience was fantastic. The final result exceeded our expectations.',
            rating: 5,
            project: 'Residential Interior',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500',
            createdAt: '2025-01-20',
          },
          {
            id: 4,
            name: 'Monica Jain',
            role: 'Homeowner, Powai',
            quote: 'DreamProSpaces transformed our house into a home. The false ceiling design is elegant and the modular furniture fits perfectly.',
            rating: 5,
            project: 'Residential Interior & False Ceiling',
            image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=500',
            createdAt: '2024-12-05',
          },
          {
            id: 5,
            name: 'Vikram Reddy',
            role: 'Restaurant Owner, Kandivali West',
            quote: 'The ambiance they created is inviting and the space planning is excellent. Our customers love the new look!',
            rating: 5,
            project: 'Commercial Interior',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500',
            createdAt: '2024-11-15',
          },
          {
            id: 6,
            name: 'Dr. Anjali Joshi',
            role: 'Homeowner, Powai',
            quote: 'The attention to detail in our home renovation was remarkable. DreamProSpaces made our dream home a reality.',
            rating: 5,
            project: 'Residential Interior',
            image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=500',
            createdAt: '2024-10-25',
          },
        ]);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // ✅ Auto-play testimonials
  useEffect(() => {
    if (!isAutoPlaying || testimonials.length === 0) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  const goTo = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };


  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: '', message: '' });

    try {
      await reviewService.submitReview(formData);
      setFormStatus({
        type: 'success',
        message: 'Thank you! Your review has been submitted for approval.',
      });
      setFormData({ name: '', role: '', quote: '', rating: 5, project: '' });
      setTimeout(() => {
        setShowReviewForm(false);
        setFormStatus({ type: '', message: '' });
      }, 3000);
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to submit review. Please try again.',
      });
    }
  };

  const active = testimonials[activeIndex] || testimonials[0];

  return (
    <section className="testimonials-luxury">
      <div className="container">
        {/* ── Header ── */}
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="testimonials-tag">✦ Client Stories</span>
          <h2 className="testimonials-title">
            What Our <span className="gold-text">Clients</span> Say
          </h2>
          <p className="testimonials-subtitle">
            Real experiences from people who trusted us with their spaces
          </p>

          {/* ✅ Add Review Button */}
          <button 
            className="add-review-btn"
            onClick={() => setShowReviewForm(!showReviewForm)}
          >
            <span>✍️</span> Write a Review
          </button>
        </motion.div>

        {/* ── Review Form ── */}
        {showReviewForm && (
          <motion.div 
            className="review-form-container"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="review-form-header">
              <h3>Share Your Experience</h3>
              <button 
                className="review-form-close"
                onClick={() => setShowReviewForm(false)}
              >
                ×
              </button>
            </div>

            {formStatus.message && (
              <div className={`review-form-status ${formStatus.type}`}>
                {formStatus.message}
              </div>
            )}

            <form className="review-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="e.g., Rajesh Kumar"
                  required
                />
              </div>

              <div className="form-group">
                <label>Your Role / Location</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleFormChange}
                  placeholder="e.g., Homeowner, Kandivali East"
                  required
                />
              </div>

              <div className="form-group">
                <label>Project Type</label>
                <input
                  type="text"
                  name="project"
                  value={formData.project}
                  onChange={handleFormChange}
                  placeholder="e.g., Residential Interior, Modular Kitchen"
                />
              </div>

              <div className="form-group">
                <label>Rating</label>
                <div className="rating-select">
                  {[5, 4, 3, 2, 1].map((num) => (
                    <button
                      key={num}
                      type="button"
                      className={`rating-star ${formData.rating >= num ? 'active' : ''}`}
                      onClick={() => setFormData({ ...formData, rating: num })}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group full-width">
                <label>Your Review</label>
                <textarea
                  name="quote"
                  value={formData.quote}
                  onChange={handleFormChange}
                  placeholder="Share your experience with DreamProSpaces..."
                  rows="4"
                  required
                />
              </div>

              <button type="submit" className="review-submit-btn">
                Submit Review
              </button>
            </form>
          </motion.div>
        )}

        {/* ── Testimonial Card ── */}
        {!loading && testimonials.length > 0 && (
          <>
            <div className="testimonial-card-luxury">
              <div className="testimonial-card-inner">
                <div className="testimonial-client-image">
                  <img src={active.image} alt={active.name} />
                  <div className="testimonial-client-badge">
                    <span>{active.project || 'DreamProSpaces'}</span>
                  </div>
                </div>

                <div className="testimonial-content">
                  <span className="testimonial-quote-mark">"</span>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="testimonial-text-wrapper"
                    >
                      <div className="testimonial-stars">
                        {'★'.repeat(active.rating)}
                        <span className="testimonial-rating">({active.rating}.0)</span>
                      </div>
                      <p className="testimonial-text">"{active.quote}"</p>
                      <h4 className="testimonial-name">{active.name}</h4>
                      <p className="testimonial-role">{active.role}</p>
                      {active.project && (
                        <div className="testimonial-project-tag">{active.project}</div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* ── Controls ── */}
            <div className="testimonial-controls">
              <button onClick={goPrev} className="testimonial-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="testimonial-dots">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    className={`testimonial-dot ${i === activeIndex ? 'active' : ''}`}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>

              <button onClick={goNext} className="testimonial-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* ── Progress Bar ── */}
            <div className="testimonial-progress">
              <div 
                className="testimonial-progress-bar"
                style={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
              />
            </div>

            {/* ── Counter ── */}
            <div className="testimonial-counter">
              <span className="counter-current">{String(activeIndex + 1).padStart(2, '0')}</span>
              <span className="counter-divider">/</span>
              <span className="counter-total">{String(testimonials.length).padStart(2, '0')}</span>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Testimonials;