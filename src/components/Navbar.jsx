// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact Us', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`navbar-luxury ${isScrolled ? 'navbar-scrolled-luxury' : ''}`}>
      <div className="container navbar-inner-luxury">
        <Link to="/" className="navbar-logo-luxury" onClick={closeMenu}>
          <span className="logo-main">DREAM<span>PRO</span>SPACES</span>
          <span className="logo-sub">Interior Work</span>
        </Link>

        <nav className={`navbar-links-luxury ${isMenuOpen ? 'navbar-links-open-luxury' : ''}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'nav-link-luxury active' : 'nav-link-luxury')}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.span 
                  className="nav-link-indicator"
                  layoutId="navIndicator"
                  transition={{ duration: 0.3 }}
                />
              )}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-gold navbar-cta-luxury" onClick={closeMenu}>
            <span>Get a Quote</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </Link>
        </nav>

        <button
          className={`navbar-toggle-luxury ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;