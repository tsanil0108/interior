// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import dashboardService from '../api/DashboardServic';
import './Dashboard.css';

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadStats = async () => {
      try {
        const res = await dashboardService.getStats();
        setStats(res.data.data);
      } catch (err) {
        setError('Failed to load dashboard stats.');
      } finally {
        setLoading(false);
      }
    };
    loadStats();
  }, []);

  // Loading State
  if (loading) {
    return (
      <div className="dashboard-luxury">
        <div className="dashboard-loading-luxury">
          <div className="dashboard-loader" />
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="dashboard-luxury">
        <div className="dashboard-error-luxury">
          <span className="error-icon-luxury">!</span>
          <p>{error}</p>
          <button 
            className="error-retry-luxury"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Stats Data
  const statItems = [
    {
      label: 'Total Leads',
      value: stats?.totalLeads ?? 0,
      icon: '📋',
      color: 'gold',
      delay: 0.1,
    },
    {
      label: 'Total Projects',
      value: stats?.totalProjects ?? 0,
      icon: '🏗️',
      color: 'dark',
      delay: 0.2,
    },
  ];

  return (
    <div className="dashboard-luxury">
      {/* Header */}
      <motion.div 
        className="dashboard-header-luxury"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="dashboard-title-section">
          <h2>Dashboard</h2>
          <p className="dashboard-subtitle-luxury">
            Welcome back! Here's an overview of your interior design business.
          </p>
        </div>
        <div className="dashboard-date-luxury">
          <span className="date-icon">📅</span>
          <span>{new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="dashboard-stats-luxury">
        {statItems.map((item, index) => (
          <motion.div
            key={item.label}
            className={`stat-card-luxury stat-card-${item.color}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: item.delay }}
            whileHover={{ 
              y: -6,
              transition: { duration: 0.2 }
            }}
          >
            <div className="stat-card-icon-luxury">
              <span>{item.icon}</span>
            </div>
            <div className="stat-card-content-luxury">
              <span className="stat-number-luxury">{item.value}</span>
              <span className="stat-label-luxury">{item.label}</span>
            </div>
            <div className="stat-card-glow" />
            <div className="stat-card-line" />
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div 
        className="dashboard-actions-luxury"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="actions-title-luxury">Quick Actions</h3>
        <div className="actions-grid-luxury">
          <button className="action-btn-luxury" onClick={() => window.location.href = '/admin/projects'}>
            <span className="action-icon">➕</span>
            <span>Add New Project</span>
          </button>
          <button className="action-btn-luxury" onClick={() => window.location.href = '/admin/leads'}>
            <span className="action-icon">👤</span>
            <span>View Leads</span>
          </button>
          <button className="action-btn-luxury" onClick={() => window.location.href = '/admin/projects'}>
            <span className="action-icon">📊</span>
            <span>Manage Projects</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}