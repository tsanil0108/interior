// src/pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import contactService from '../api/ContactService';

import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await contactService.submitInquiry(formData);
      console.log('Response:', response.data);
      
      setSuccess(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(err.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      details: [
        'Millennium Building, Shop No.10,',
        'Lokhandawala, Kandivali East,',
        'Mumbai - 400101'
      ],
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+91 7304603314', 'Mon - Sat: 10:00 AM - 7:00 PM'],
    },
    {
      icon: '✉',
      title: 'Email Us',
      details: ['dreamprospace108@gmail.com', 'We reply within 24 hours'],
    },
  ];

  return (
    <>
      <PageBanner 
        title="Contact Us" 
        subtitle="Let's start a conversation about your dream space"
        backgroundImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600"
      />

      <section className="contact-luxury">
        <div className="container">
          <div className="contact-grid-luxury">
            {/* Contact Info */}
            <motion.div 
              className="contact-info-luxury"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="contact-info-header">
                <span className="contact-tag-luxury">✦ Get in Touch</span>
                <h2 className="contact-title-luxury">
                  Let's Create Something <span className="gold-text">Beautiful</span>
                </h2>
                <p className="contact-description-luxury">
                  Have a project in mind? We'd love to hear about it. 
                  Reach out to us and let's bring your vision to life.
                </p>
              </div>

              <div className="contact-info-items">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    className="contact-info-item"
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="contact-info-icon">{item.icon}</div>
                    <div className="contact-info-text">
                      <h4>{item.title}</h4>
                      {item.details.map((detail, i) => (
                        <p key={i}>{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="contact-social-luxury">
                <span className="social-label">Follow Us</span>
                <div className="social-icons">
                  <a href="#" className="social-icon">f</a>
                  <a href="#" className="social-icon">ig</a>
                  <a href="#" className="social-icon">p</a>
                  <a href="#" className="social-icon">in</a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="contact-form-luxury"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="contact-form-header">
                <h3>Send a Message</h3>
                <p>Fill in the details and we'll get back to you shortly</p>
              </div>

              {success && (
                <motion.div 
                  className="contact-success-luxury"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span className="success-icon">✓</span>
                  <div>
                    <h4>Message Sent!</h4>
                    <p>Thank you for reaching out. We'll contact you soon.</p>
                  </div>
                </motion.div>
              )}

              {error && (
                <motion.div 
                  className="contact-error-luxury"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span className="error-icon">!</span>
                  <p>{error}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="contact-form-luxury-fields">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    className="form-textarea"
                    rows="5"
                  />
                </div>

                <button type="submit" className="contact-submit-btn" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="btn-loader" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Map Section - Updated with your new Google Maps link */}
          <motion.div 
            className="contact-map-luxury"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="map-container">
              <a 
                href="https://maps.app.goo.gl/UjTiiLqrp6WqkxB2A" 
                target="_blank" 
                rel="noopener noreferrer"
                className="map-link-button"
              >
                <div className="map-placeholder">
                  <span className="map-icon">🗺️</span>
                  <h4>Find Us on Google Maps</h4>
                  <p>Click to open location in Google Maps</p>
                  <span className="map-address">Millennium Building, Shop No.10, Kandivali East</span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;