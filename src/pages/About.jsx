// src/pages/About.jsx
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import ContactCTA from '../components/ContactCTA';
import './About.css';

const teamMembers = [
  {
    name: 'Aarav Singhania',
    role: 'Founder & Principal Designer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500',
  },
  {
    name: 'Neha Bhatt',
    role: 'Head of Residential Design',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500',
  },
  {
    name: 'Karan Oberoi',
    role: 'Lead Commercial Designer',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=500',
  },
];

const values = [
  { title: 'Integrity', description: 'Transparent communication and honest timelines, always.' },
  { title: 'Craftsmanship', description: 'Meticulous attention to every joint, finish, and detail.' },
  { title: 'Innovation', description: 'Blending timeless design principles with modern techniques.' },
  { title: 'Client-Centricity', description: 'Your vision and comfort guide every design decision we make.' },
];

const About = () => {
  return (
    <>
      <PageBanner title="About Us" />

      <section className="section about-story-luxury">
        <div className="container about-story-grid-luxury">
          <motion.div 
            className="about-story-image-luxury"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900"
              alt="Lumière Interiors design studio"
            />
          </motion.div>
          <motion.div 
            className="about-story-content-luxury"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="section-tag-luxury">✦ Our Story</span>
            <h2 className="section-title-luxury">
              A Decade of Crafting <span className="gold-text">Beautiful</span> Spaces
            </h2>
            <p>
              Founded in 2013, Lumière Interiors began with a simple belief:
              that great design should feel personal. What started as a
              small residential design studio has grown into a full-service
              interior design firm spanning homes, offices, retail spaces,
              and hospitality venues across the country.
            </p>
            <p>
              Today, our multidisciplinary team of designers, architects,
              and project managers work hand-in-hand with clients to deliver
              interiors that are as functional as they are visually
              striking — always grounded in quality craftsmanship and
              thoughtful detail.
            </p>
            <div className="about-story-line" />
          </motion.div>
        </div>
      </section>

      <section className="section about-mission-luxury">
        <div className="container about-mission-grid-luxury">
          <motion.div 
            className="mission-card-luxury"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mission-card-icon">✦</div>
            <h3>Our Mission</h3>
            <p>
              To design interiors that enhance the way people live and work —
              blending functionality, beauty, and lasting quality in every
              project we undertake.
            </p>
          </motion.div>
          <motion.div 
            className="mission-card-luxury highlight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mission-card-icon">✦</div>
            <h3>Our Vision</h3>
            <p>
              To be the most trusted name in interior design, recognized for
              our craftsmanship, integrity, and ability to turn client
              visions into reality.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section about-values-luxury">
        <div className="container">
          <div className="section-header-luxury">
            <span className="section-tag-luxury">✦ What Drives Us</span>
            <h2 className="section-title-luxury">
              Our <span className="gold-text">Core</span> Values
            </h2>
          </div>
          <div className="values-grid-luxury">
            {values.map((value, index) => (
              <motion.div 
                className="value-card-luxury" 
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="value-number">{String(index + 1).padStart(2, '0')}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-team-luxury">
        <div className="container">
          <div className="section-header-luxury">
            <span className="section-tag-luxury">✦ Meet The Team</span>
            <h2 className="section-title-luxury">
              The People Behind <span className="gold-text">The Design</span>
            </h2>
          </div>
          <div className="team-grid-luxury">
            {teamMembers.map((member, index) => (
              <motion.div 
                className="team-card-luxury" 
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="team-card-image-luxury">
                  <img src={member.image} alt={member.name} />
                  <div className="team-card-social">
                    <span>✦</span>
                  </div>
                </div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
                <div className="team-card-line" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default About;