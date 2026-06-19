// src/layouts/MainLayout.jsx
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import FloatingButtons from '../components/FloatingButtons'; // ✅ Add this import
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="main-layout-luxury">
      <Navbar />
      
      <motion.main 
        className="main-content-luxury"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <PageTransition />
      </motion.main>
      
      <Footer />
      
      {/* ✅ Floating WhatsApp & Call Buttons - Shows on every page */}
      <FloatingButtons />
    </div>
  );
};

export default MainLayout;