// src/pages/WhyChooseUs.jsx
import { motion } from 'framer-motion';
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
  return (
    <section className="section why-choose-us-luxury">
      <div className="container why-grid-luxury">
        <motion.div 
          className="why-image-luxury"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=900"
            alt="Designer reviewing interior plans"
          />
          <div className="why-image-badge">✦ Since 2020</div>
        </motion.div>

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