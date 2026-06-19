// src/components/ImageUpload.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ImageUpload.css';

const ImageUpload = ({ 
  onImagesChange, 
  maxImages = 10,
  existingImages = [],
  label = 'Upload Images'
}) => {
  const [images, setImages] = useState(existingImages);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState('');

  const handleFileSelect = async (files) => {
    if (!files || files.length === 0) return;
    
    const fileArray = Array.from(files);
    setUploading(true);
    setError('');
    
    const formData = new FormData();
    fileArray.forEach(file => {
      formData.append('files', file);
    });

    try {
      const response = await fetch('http://localhost:8080/api/upload/images', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`Upload failed: ${response.status}`);
      }
      
      const data = await response.json();
      if (data.success) {
        const uploadedUrls = data.data || [];
        const updatedImages = [...images, ...uploadedUrls];
        setImages(updatedImages);
        onImagesChange(updatedImages);
      } else {
        setError(data.message || 'Upload failed');
      }
    } catch (err) {
      console.error('Upload failed:', err);
      setError('Failed to upload images. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    handleFileSelect(files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    handleFileSelect(files);
  };

  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    onImagesChange(updatedImages);
  };

  return (
    <div className="image-upload-container">
      <label className="image-upload-label">{label}</label>
      
      {error && (
        <div className="image-upload-error">
          <span>⚠️</span> {error}
        </div>
      )}
      
      <div 
        className={`image-upload-area ${dragOver ? 'drag-over' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => document.getElementById('fileInput')?.click()}
      >
        <input
          id="fileInput"
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileInput}
          style={{ display: 'none' }}
        />
        
        {uploading ? (
          <div className="image-upload-loading">
            <div className="image-upload-spinner" />
            <span>Uploading...</span>
          </div>
        ) : (
          <div className="image-upload-placeholder">
            <span className="upload-icon">📸</span>
            <span className="upload-text">Click or drag images here</span>
            <span className="upload-subtext">PNG, JPG, WEBP (Max {maxImages} images)</span>
          </div>
        )}
      </div>

      {images.length > 0 && (
        <div className="image-preview-grid">
          <AnimatePresence>
            {images.map((url, index) => (
              <motion.div
                key={index}
                className="image-preview-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <img src={url} alt={`Upload ${index + 1}`} />
                <button 
                  className="image-preview-remove"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeImage(index);
                  }}
                >
                  ×
                </button>
                <span className="image-preview-number">{index + 1}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;