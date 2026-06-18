// src/pages/Projects.jsx
import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import ProjectCard from '../components/ProjectCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import projectService from '../services/projectService';
import { getErrorMessage } from '../services/errorHandler';
import './Projects.css';

const CATEGORY_OPTIONS = [
  'All',
  'Residential Interior',
  'Commercial Interior',
  'Modular Kitchen',
  'Office Interior',
  'Furniture Design',
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const fetchProjects = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await projectService.getAllProjects();
      setProjects(response.data?.data || []);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(
      (p) => p.category?.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [projects, activeCategory]);

  // Get project count by category
  const getCategoryCount = (category) => {
    if (category === 'All') return projects.length;
    return projects.filter(p => p.category?.toLowerCase() === category.toLowerCase()).length;
  };

  return (
    <>
      <PageBanner 
        title="Our Projects" 
        subtitle="Explore our portfolio of luxury interiors"
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600"
      />

      <section className="projects-luxury">
        <div className="container">
          {/* Header */}
          <motion.div 
            className="projects-header-luxury"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="projects-tag-luxury">✦ Portfolio</span>
            <h2 className="projects-title-luxury">
              Explore Our <span className="gold-text">Completed</span> Projects
            </h2>
            <p className="projects-subtitle-luxury">
              Browse through our portfolio of residential, commercial, and
              custom interior projects that showcase our craftsmanship.
            </p>
            <div className="projects-header-line" />
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="projects-filter-luxury"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {CATEGORY_OPTIONS.map((category) => (
              <button
                key={category}
                className={`filter-btn-luxury ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                <span className="filter-label">{category}</span>
                <span className="filter-count">{getCategoryCount(category)}</span>
              </button>
            ))}
          </motion.div>

          {/* Loading */}
          {loading && (
            <div className="projects-loader-wrapper">
              <Loader label="Loading projects..." />
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="projects-error-wrapper">
              <ErrorMessage message={error} onRetry={fetchProjects} />
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && filteredProjects.length === 0 && (
            <motion.div 
              className="projects-empty-luxury"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="empty-icon">🏗️</span>
              <h3>No projects in this category</h3>
              <p>Check back soon for new projects in the "{activeCategory}" category.</p>
            </motion.div>
          )}

          {/* Projects Grid */}
          {!loading && !error && filteredProjects.length > 0 && (
            <motion.div 
              className="projects-grid-luxury"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Results Count */}
          {!loading && !error && filteredProjects.length > 0 && (
            <motion.div 
              className="projects-results-luxury"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="results-count">
                Showing <strong>{filteredProjects.length}</strong> projects
                {activeCategory !== 'All' && ` in "${activeCategory}"`}
              </span>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;