// src/pages/FeaturedProjects.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projectService from '../services/projectService';
import { getErrorMessage } from '../services/errorHandler';
import ProjectCard from '../components/ProjectCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await projectService.getAllProjects();
      const data = response.data?.data || [];
      setProjects(data.slice(0, 3));
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="featured-projects-luxury">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="featured-header-luxury"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="featured-tag-luxury">✦ Our Portfolio</span>
          <h2 className="featured-title-luxury">
            Featured <span className="gold-text">Projects</span>
          </h2>
          <p className="featured-subtitle-luxury">
            A glimpse into spaces we've transformed — each one a unique
            story of design, detail, and craftsmanship.
          </p>
          <div className="featured-header-line" />
        </motion.div>

        {/* Loading */}
        {loading && (
          <div className="featured-loader-wrapper">
            <Loader label="Loading featured projects..." />
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="featured-error-wrapper">
            <ErrorMessage message={error} onRetry={fetchProjects} />
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && projects.length === 0 && (
          <motion.div 
            className="featured-empty-luxury"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="empty-icon">🏗️</span>
            <p>No projects available yet. Check back soon.</p>
          </motion.div>
        )}

        {/* Projects Grid */}
        {!loading && !error && projects.length > 0 && (
          <motion.div 
            className="featured-projects-grid-luxury"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* CTA */}
        {!loading && !error && (
          <motion.div 
            className="featured-projects-cta-luxury"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link to="/projects" className="btn-cta-luxury">
              <span>View All Projects</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;