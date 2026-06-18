import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './PageBanner.css';

const PageBanner = ({ title, breadcrumb, backgroundImage, subtitle }) => {
  return (
    <section
      className="page-banner-luxury"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <div className="page-banner-overlay-luxury" />
      <div className="page-banner-accent" />
      
      <div className="container page-banner-content-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="page-banner-tag-luxury">✦ {title}</span>
          <h1 className="page-banner-title-luxury">{title}</h1>
          {subtitle && (
            <p className="page-banner-subtitle-luxury">{subtitle}</p>
          )}
          <div className="page-banner-breadcrumb-luxury">
            <Link to="/" className="breadcrumb-link">
              <span className="breadcrumb-home-icon">🏠</span>
              Home
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{breadcrumb || title}</span>
          </div>
        </motion.div>
      </div>
      
      <div className="page-banner-scroll-luxury">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default PageBanner;