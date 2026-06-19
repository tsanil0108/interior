// src/App.jsx
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Layouts
import MainLayout from './layouts/MainLayout.jsx'
import AdminLayout from './layouts/AdminLayout.jsx'

// Pages
import Hero from './pages/Hero.jsx'
import Intro from './pages/Intro.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'
import Services from './pages/Services.jsx'
import WhyChooseUs from './pages/WhyChooseUs.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Blogpage from './pages/Blogpage.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ProjectsManagement from './pages/ProjectsManagement.jsx'
import LeadsManagement from './pages/LeadsManagement.jsx'
import ReviewsManagement from './pages/ReviewsManagement.jsx'  // ✅ ADDED

// Components
import FeaturedProjects from './pages/FeaturedProjects.jsx'
import ServicesSection from './components/ServicesSection.jsx'
import ContactCTA from './components/ContactCTA.jsx'

function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <ContactCTA />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      {/* Public site */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blogpage />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Admin login (public) */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Admin panel (protected by AdminLayout) */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<ProjectsManagement />} />
        <Route path="leads" element={<LeadsManagement />} />
        <Route path="reviews" element={<ReviewsManagement />} />  {/* ✅ ADDED */}
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}