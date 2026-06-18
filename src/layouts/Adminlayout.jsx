// src/layouts/AdminLayout.jsx
import { Outlet, NavLink, useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import authService from '../services/authService';
import './AdminLayout.css';

const AdminLayout = () => {
  const navigate = useNavigate();

  if (!authService.isAuthenticated()) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = () => {
    authService.logout();
    navigate('/admin/login');
  };

  const navItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/admin/projects', label: 'Projects Management', icon: '🏗️' },
    { path: '/admin/leads', label: 'Leads Management', icon: '📋' },
  ];

  return (
    <div className="admin-layout-luxury">
      {/* Sidebar */}
      <aside className="admin-sidebar-luxury">
        {/* Logo */}
        <div className="admin-sidebar-logo-luxury">
          <div className="logo-icon">✦</div>
          <div className="logo-text">
            LUMI<span>ÈRE</span>
            <small>Admin Panel</small>
          </div>
        </div>

        {/* Navigation */}
        <nav className="admin-nav-luxury">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                isActive ? 'admin-nav-link-luxury active' : 'admin-nav-link-luxury'
              }
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              {({ isActive }) => isActive && (
                <motion.span 
                  className="nav-active-dot"
                  layoutId="activeDot"
                  transition={{ duration: 0.3 }}
                />
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="admin-sidebar-footer-luxury">
          <div className="admin-user-info">
            <div className="admin-avatar">
              {authService.getUsername()?.charAt(0)?.toUpperCase() || 'A'}
            </div>
            <div className="admin-user-details">
              <span className="admin-username">{authService.getUsername()}</span>
              <span className="admin-role">Administrator</span>
            </div>
          </div>
          <button onClick={handleLogout} className="admin-logout-btn-luxury">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Logout
          </button>
        </div>

        {/* Sidebar Decoration */}
        <div className="admin-sidebar-decoration" />
      </aside>

      {/* Main Content */}
      <main className="admin-content-luxury">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="admin-content-inner"
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
};

export default AdminLayout;