// src/pages/LeadsManagement.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import contactService from '../api/contactService';  // ✅ Correct import path
import './LeadsManagement.css';

export default function LeadsManagement() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedLead, setSelectedLead] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const loadLeads = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await contactService.getAllInquiries();  // ✅ Correct method
      setLeads(res.data.data || []);
    } catch (err) {
      setError('Failed to load leads.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeads();
  }, []);

  const handleViewLead = (lead) => {
    setSelectedLead(lead);
    setShowModal(true);
  };

  const handleDeleteLead = async (id) => {
    if (!window.confirm('Delete this lead?')) return;
    try {
      await contactService.deleteInquiry(id);  // ✅ Correct method
      loadLeads();
      if (selectedLead?.id === id) {
        setShowModal(false);
        setSelectedLead(null);
      }
    } catch (err) {
      setError('Failed to delete lead.');
    }
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
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
            Manage all inquiries from your contact form
          </p>
        </div>
        <div className="lm-stats-luxury">
          <div className="lm-stat-badge">
            <span className="stat-number">{leads.length}</span>
            <span className="stat-label">Total Leads</span>
          </div>
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

      {/* Table */}
      {!loading && (
        <motion.div 
          className="lm-table-wrapper-luxury"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {leads.length === 0 ? (
            <div className="lm-empty-luxury">
              <span className="empty-icon">📭</span>
              <h3>No leads yet</h3>
              <p>Contact form submissions will appear here.</p>
            </div>
          ) : (
            <table className="lm-table-luxury">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>Date</th>
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
                        <div className="lm-avatar">
                          {getInitials(lead.name)}
                        </div>
                        <span>{lead.name}</span>
                      </div>
                    </td>
                    <td>
                      <a 
                        href={`mailto:${lead.email}`} 
                        style={{ color: 'var(--color-gold-dark)', textDecoration: 'none' }}
                      >
                        {lead.email}
                      </a>
                    </td>
                    <td>
                      <a 
                        href={`tel:${lead.phone}`} 
                        style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}
                      >
                        {lead.phone}
                      </a>
                    </td>
                    <td>
                      <span style={{ 
                        display: 'inline-block',
                        maxWidth: '200px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {lead.message}
                      </span>
                    </td>
                    <td style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                      {formatDate(lead.createdAt)}
                    </td>
                    <td>
                      <button 
                        className="lm-btn-view" 
                        onClick={() => handleViewLead(lead)}
                      >
                        View
                      </button>
                      <button 
                        className="lm-btn-delete" 
                        onClick={() => handleDeleteLead(lead.id)}
                      >
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

      {/* Modal */}
      <AnimatePresence>
        {showModal && selectedLead && (
          <motion.div 
            className="lm-modal-overlay-luxury"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div 
              className="lm-modal-luxury"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lm-modal-header-luxury">
                <div className="lm-modal-avatar">
                  {getInitials(selectedLead.name)}
                </div>
                <h3>{selectedLead.name}</h3>
                <button 
                  className="lm-modal-close" 
                  onClick={() => setShowModal(false)}
                >
                  ✕
                </button>
              </div>

              <div className="lm-modal-body-luxury">
                <div className="lm-modal-field">
                  <span className="field-icon">📧</span>
                  <div>
                    <label>Email</label>
                    <p>
                      <a 
                        href={`mailto:${selectedLead.email}`} 
                        style={{ color: 'var(--color-gold-dark)', textDecoration: 'none' }}
                      >
                        {selectedLead.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="lm-modal-field">
                  <span className="field-icon">📱</span>
                  <div>
                    <label>Phone</label>
                    <p>
                      <a 
                        href={`tel:${selectedLead.phone}`} 
                        style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}
                      >
                        {selectedLead.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="lm-modal-field">
                  <span className="field-icon">📅</span>
                  <div>
                    <label>Submitted</label>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>
                      {formatDate(selectedLead.createdAt)}
                    </p>
                  </div>
                </div>

                <div className="lm-modal-field full-width">
                  <span className="field-icon">💬</span>
                  <div style={{ width: '100%' }}>
                    <label>Message</label>
                    <div className="lm-modal-message">
                      {selectedLead.message}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lm-modal-footer-luxury">
                <button 
                  className="lm-modal-btn-close" 
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button 
                  className="lm-modal-btn-delete" 
                  onClick={() => handleDeleteLead(selectedLead.id)}
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