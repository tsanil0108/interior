// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-luxury">
      <div className="container footer-grid-luxury">
        <motion.div 
          className="footer-col footer-brand-luxury"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="footer-logo-luxury">
            DREAM<span>PRO</span>SPACES
          </h3>
          <p>
            Premium interior design and contracting services. 
            From concept to completion — we create spaces that inspire.
          </p>
          <div className="footer-socials-luxury">
            <a href="#" aria-label="Facebook" className="social-link">f</a>
            <a href="#" aria-label="Instagram" className="social-link">ig</a>
            <a href="#" aria-label="Pinterest" className="social-link">p</a>
            <a href="#" aria-label="LinkedIn" className="social-link">in</a>
          </div>
        </motion.div>

        <motion.div 
          className="footer-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4>Our Services</h4>
          <ul>
            <li>Residential Interior</li>
            <li>Commercial Interior</li>
            <li>Modular Kitchen</li>
            <li>Office Interior</li>
            <li>Furniture Design</li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer-col footer-contact-luxury"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4>Contact</h4>
          <ul>
            <li className="contact-item">
              <span className="contact-icon">📍</span>
              <span>
                Millennium Building, Shop No.10,<br />
                Lokhandawala, Kandivali East,<br />
                Mumbai - 400101
              </span>
            </li>
            <li className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+91 7304603314</span>
            </li>
            <li className="contact-item">
              <span className="contact-icon">✉</span>
              <span>dreamprospace108@gmail.com</span>
            </li>
            <li className="contact-item">
              <span className="contact-icon">🕐</span>
              <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="footer-bottom-luxury">
        <div className="container footer-bottom-inner-luxury">
          <p>&copy; {year} DreamProSpaces. All rights reserved.</p>
          <p>Designed with passion for spaces that inspire.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;