// src/pages/LeadsManagement.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import contactService from '../api/contactService';
import './LeadsManagement.css';

export default function LeadsManagement() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedLead, setSelectedLead] = useState(null);

  const loadLeads = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await contactService.getAllInquiries();
      setLeads(res.data.data);
    } catch (err) {
      setError('Failed to load leads.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeads();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this inquiry?')) return;
    try {
      await contactService.deleteInquiry(id);
      setLeads((prev) => prev.filter((l) => l.id !== id));
      if (selectedLead?.id === id) setSelectedLead(null);
    } catch (err) {
      setError('Failed to delete inquiry.');
    }
  };

  return (
    <div className="leads-management-luxury">
      {/* Header */}
      <motion.div 
        className="lm-header-luxury"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="lm-title-section">
          <h2>Leads Management</h2>
          <p className="lm-subtitle-luxury">
            Manage and track all your client inquiries
          </p>
        </div>
        <div className="lm-stats-luxury">
          <span className="lm-stat-badge">
            <span className="stat-number">{leads.length}</span>
            <span className="stat-label">Total Leads</span>
          </span>
        </div>
      </motion.div>

      {/* Error */}
      {error && (
        <motion.div 
          className="lm-error-luxury"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="error-icon">!</span>
          {error}
        </motion.div>
      )}

      {/* Loading */}
      {loading && (
        <div className="lm-loading-luxury">
          <div className="lm-loader" />
          <p>Loading leads...</p>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && leads.length === 0 && (
        <motion.div 
          className="lm-empty-luxury"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="empty-icon">📋</span>
          <h3>No inquiries yet</h3>
          <p>When clients contact you, their information will appear here.</p>
        </motion.div>
      )}

      {/* Table */}
      {!loading && !error && leads.length > 0 && (
        <motion.div 
          className="lm-table-wrapper-luxury"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <table className="lm-table-luxury">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => (
                <motion.tr 
                  key={lead.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ backgroundColor: 'rgba(192, 160, 98, 0.04)' }}
                >
                  <td>
                    <div className="lm-name-cell">
                      <span className="lm-avatar">{lead.name.charAt(0)}</span>
                      {lead.name}
                    </div>
                  </td>
                  <td>{lead.phone}</td>
                  <td>{lead.email}</td>
                  <td>
                    <button 
                      className="lm-btn-view" 
                      onClick={() => setSelectedLead(lead)}
                    >
                      View
                    </button>
                    <button 
                      className="lm-btn-delete" 
                      onClick={() => handleDelete(lead.id)}
                    >
                      Delete
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedLead && (
          <motion.div 
            className="lm-modal-overlay-luxury"
            onClick={() => setSelectedLead(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="lm-modal-luxury"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="lm-modal-header-luxury">
                <div className="lm-modal-avatar">
                  {selectedLead.name.charAt(0)}
                </div>
                <h3>{selectedLead.name}</h3>
                <button 
                  className="lm-modal-close"
                  onClick={() => setSelectedLead(null)}
                >
                  ✕
                </button>
              </div>
              
              <div className="lm-modal-body-luxury">
                <div className="lm-modal-field">
                  <span className="field-icon">📞</span>
                  <div>
                    <label>Phone</label>
                    <p>{selectedLead.phone}</p>
                  </div>
                </div>
                <div className="lm-modal-field">
                  <span className="field-icon">✉</span>
                  <div>
                    <label>Email</label>
                    <p>{selectedLead.email}</p>
                  </div>
                </div>
                <div className="lm-modal-field full-width">
                  <span className="field-icon">💬</span>
                  <div>
                    <label>Message</label>
                    <p className="lm-modal-message">{selectedLead.message}</p>
                  </div>
                </div>
              </div>

              <div className="lm-modal-footer-luxury">
                <button 
                  className="lm-modal-btn-close"
                  onClick={() => setSelectedLead(null)}
                >
                  Close
                </button>
                <button 
                  className="lm-modal-btn-delete"
                  onClick={() => {
                    handleDelete(selectedLead.id);
                    setSelectedLead(null);
                  }}
                >
                  Delete Lead
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}