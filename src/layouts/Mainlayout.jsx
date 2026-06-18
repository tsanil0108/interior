// src/layouts/MainLayout.jsx
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

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
    </div>
  );
};

export default MainLayout;