// src/pages/BlogPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Blogpage.css';

const posts = [
  {
    cat: 'Kitchen Design',
    title: '10 Modular Kitchen Trends Dominating Indian Homes in 2025',
    excerpt: 'From handleless cabinets to smart storage solutions — discover what\'s shaping the modern Indian kitchen this year.',
    date: 'May 12, 2025',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80',
    featured: true,
  },
  {
    cat: 'Bedroom',
    title: 'How to Choose the Perfect Colour Palette for Your Master Bedroom',
    excerpt: 'Colour is emotion. We break down the psychology of tones and how to pick what works for rest and luxury.',
    date: 'Apr 28, 2025',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80',
    featured: false,
  },
  {
    cat: 'Expert Advice',
    title: 'False Ceilings: Types, Costs & When You Actually Need One',
    excerpt: 'A comprehensive guide to gypsum, POP, and wooden false ceilings — and how they transform a room\'s feel.',
    date: 'Apr 10, 2025',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=700&q=80',
    featured: false,
  },
  {
    cat: 'Living Room',
    title: 'Small Living Room? 8 Space-Saving Design Tricks That Actually Work',
    excerpt: 'Multi-functional furniture, mirrors, and vertical storage — smart ideas for compact Mumbai and Delhi apartments.',
    date: 'Mar 22, 2025',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80',
    featured: false,
  },
  {
    cat: 'Materials',
    title: 'Marble vs Quartz: Which Countertop is Right for Your Kitchen?',
    excerpt: 'We put India\'s two most popular countertop materials head-to-head on durability, aesthetics, and budget.',
    date: 'Mar 5, 2025',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=700&q=80',
    featured: false,
  },
  {
    cat: 'Vastu Tips',
    title: 'Vastu-Compliant Interiors That Don\'t Compromise on Style',
    excerpt: 'Blending ancient wisdom with contemporary design — how Lumière creates homes that are both beautiful and balanced.',
    date: 'Feb 18, 2025',
    readTime: '7 min read',
    img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80',
    featured: false,
  },
];

export default function BlogPage() {
  const featured = posts.find(p => p.featured);
  const rest = posts.filter(p => !p.featured);

  return (
    <section className="blog-luxury" id="blog">
      <div className="container">

        {/* Header */}
        <div className="blog__header-luxury reveal">
          <span className="blog__tag-luxury">✦ Stories & Advice</span>
          <h2 className="blog__title-luxury">
            Design <span className="gold-text">Magazine</span>
          </h2>
          <p className="blog__sub-luxury">
            Expert tips, trend guides, and inspiration for your dream home.
          </p>
          <div className="blog__header-line" />
        </div>

        {/* Featured Post */}
        <motion.div 
          className="blog__featured-luxury reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="blog__featured-img-wrap-luxury">
            <img src={featured.img} alt={featured.title} className="blog__featured-img-luxury" />
            <span className="blog__featured-badge-luxury">✦ Featured</span>
            <div className="blog__featured-overlay-luxury" />
          </div>
          <div className="blog__featured-content-luxury">
            <span className="blog__cat-luxury">{featured.cat}</span>
            <h3 className="blog__featured-title-luxury">{featured.title}</h3>
            <p className="blog__featured-excerpt-luxury">{featured.excerpt}</p>
            <div className="blog__meta-luxury">
              <span>{featured.date}</span>
              <span className="blog__dot-luxury">·</span>
              <span>{featured.readTime}</span>
            </div>
            <button className="blog__read-btn-luxury">
              Read Article
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="blog__grid-luxury">
          {rest.map((post, i) => (
            <motion.div
              key={i}
              className="blog__card-luxury reveal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="blog__card-img-wrap-luxury">
                <img src={post.img} alt={post.title} className="blog__card-img-luxury" />
                <div className="blog__card-overlay-luxury">
                  <span className="blog__card-read">Read More</span>
                </div>
              </div>
              <div className="blog__card-content-luxury">
                <span className="blog__cat-luxury">{post.cat}</span>
                <h3 className="blog__card-title-luxury">{post.title}</h3>
                <p className="blog__card-excerpt-luxury">{post.excerpt}</p>
                <div className="blog__meta-luxury">
                  <span>{post.date}</span>
                  <span className="blog__dot-luxury">·</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="blog__card-line" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="blog__footer-luxury reveal">
          <button className="btn-outline-luxury-blog">
            View All Articles
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}