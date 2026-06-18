// src/pages/Intro.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Intro.css';

const Intro = () => {
  return (
    <section className="section intro-luxury">
      <div className="container intro-grid-luxury">
        <motion.div 
          className="intro-images-luxury"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            className="intro-img-main-luxury"
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=900"
            alt="Elegant interior design detail"
          />
          <img
            className="intro-img-secondary-luxury"
            src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=700"
            alt="Modern furniture styling"
          />
          <div className="intro-badge-luxury">
            <h4>12+</h4>
            <p>Years of Excellence</p>
          </div>
        </motion.div>

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
            At Lumière Interiors, we believe a space should feel as good as
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