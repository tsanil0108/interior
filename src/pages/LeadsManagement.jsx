// src/pages/ProjectsManagement.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectService from '../services/projectService';
import ImageUpload from '../components/ImageUpload';  // ✅ Import ImageUpload
import './ProjectsManagement.css';

const emptyForm = { 
  title: '', 
  category: '', 
  imageUrl: '', 
  description: '',
  images: ''  // Store as comma-separated string
};

export default function ProjectsManagement() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);

  const loadProjects = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await projectService.getAllProjects();
      setProjects(res.data.data);
    } catch (err) {
      setError('Failed to load projects.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImagesChange = (images) => {
    setUploadedImages(images);
    // Store images as comma-separated string
    setForm({ ...form, images: images.join(',') });
  };

  const resetForm = () => {
    setForm(emptyForm);
    setUploadedImages([]);
    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Set the main image as the first uploaded image or fallback
      const imageUrl = uploadedImages.length > 0 ? uploadedImages[0] : form.imageUrl;
      const payload = { ...form, imageUrl };
      
      if (editingId) {
        await projectService.updateProject(editingId, payload);
      } else {
        await projectService.addProject(payload);
      }
      resetForm();
      loadProjects();
    } catch (err) {
      setError('Failed to save project.');
    }
  };

  const handleEdit = (project) => {
    // Parse images string back to array
    const images = project.images ? project.images.split(',').filter(img => img.trim()) : [];
    setUploadedImages(images);
    
    setForm({
      title: project.title,
      category: project.category,
      imageUrl: project.imageUrl,
      description: project.description,
      images: project.images || '',
    });
    setEditingId(project.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this project?')) return;
    try {
      await projectService.deleteProject(id);
      loadProjects();
    } catch (err) {
      setError('Failed to delete project.');
    }
  };

  return (
    <div className="projects-management-luxury">
      {/* Header */}
      <motion.div 
        className="pm-header-luxury"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="pm-title-section">
          <h2>Projects Management</h2>
          <p className="pm-subtitle-luxury">
            Manage your interior design portfolio
          </p>
        </div>
        <div className="pm-header-actions">
          <span className="pm-count-badge">
            {projects.length} Projects
          </span>
          <button 
            className="pm-add-btn-luxury"
            onClick={() => { resetForm(); setShowForm(true); }}
          >
            <span className="btn-icon">+</span>
            Add Project
          </button>
        </div>
      </motion.div>

      {/* Error */}
      {error && (
        <motion.div 
          className="pm-error-luxury"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="error-icon">!</span>
          {error}
        </motion.div>
      )}

      {/* Form */}
      <AnimatePresence>
        {showForm && (
          <motion.form 
            className="pm-form-luxury" 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pm-form-header">
              <h3>{editingId ? 'Edit Project' : 'Add New Project'}</h3>
              <button type="button" className="pm-form-close" onClick={resetForm}>✕</button>
            </div>
            
            <div className="pm-form-grid">
              <input 
                name="title" 
                placeholder="Project Title" 
                value={form.title} 
                onChange={handleChange} 
                required 
                className="pm-input"
              />
              <input 
                name="category" 
                placeholder="Category" 
                value={form.category} 
                onChange={handleChange} 
                required 
                className="pm-input"
              />
              
              {/* ✅ IMAGE UPLOAD COMPONENT - This adds the upload option */}
              <div className="pm-input full-width">
                <ImageUpload 
                  onImagesChange={handleImagesChange}
                  existingImages={uploadedImages}
                  maxImages={10}
                  label="Project Images (Upload multiple photos)"
                />
              </div>
              
              <textarea 
                name="description" 
                placeholder="Project Description" 
                value={form.description} 
                onChange={handleChange} 
                required 
                className="pm-textarea"
              />
            </div>
            
            <div className="pm-form-actions-luxury">
              <button type="submit" className="pm-btn-submit">
                {editingId ? 'Update Project' : 'Add Project'}
              </button>
              <button type="button" className="pm-btn-cancel" onClick={resetForm}>
                Cancel
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Loading */}
      {loading && (
        <div className="pm-loading-luxury">
          <div className="pm-loader" />
          <p>Loading projects...</p>
        </div>
      )}

      {/* Table */}
      {!loading && (
        <motion.div 
          className="pm-table-wrapper-luxury"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {projects.length === 0 ? (
            <div className="pm-empty-luxury">
              <span className="empty-icon">🏗️</span>
              <h3>No projects yet</h3>
              <p>Add your first project to showcase your portfolio.</p>
            </div>
          ) : (
            <table className="pm-table-luxury">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Images</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p, index) => (
                  <motion.tr 
                    key={p.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ backgroundColor: 'rgba(192, 160, 98, 0.04)' }}
                  >
                    <td>
                      <img 
                        src={p.imageUrl} 
                        alt={p.title} 
                        className="pm-thumb-luxury" 
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800';
                        }}
                      />
                    </td>
                    <td className="pm-title-cell">{p.title}</td>
                    <td>
                      <span className="pm-category-badge">{p.category}</span>
                    </td>
                    <td>
                      {p.images && p.images.split(',').length > 0 ? (
                        <span className="pm-images-count">
                          📸 {p.images.split(',').length}
                        </span>
                      ) : (
                        <span className="pm-images-count">📸 1</span>
                      )}
                    </td>
                    <td>
                      <button className="pm-btn-edit" onClick={() => handleEdit(p)}>
                        Edit
                      </button>
                      <button className="pm-btn-delete" onClick={() => handleDelete(p.id)}>
                        Delete
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          )}
        </motion.div>
      )}
    </div>
  );
}