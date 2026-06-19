// src/pages/ReviewsManagement.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import reviewService from '../api/reviewService';
import './ReviewsManagement.css';

export default function ReviewsManagement() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadReviews = async () => {
    setLoading(true);
    try {
      const res = await reviewService.getAllReviews();
      setReviews(res.data.data);
    } catch (err) {
      setError('Failed to load reviews.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const handleApprove = async (id) => {
    try {
      await reviewService.approveReview(id);
      loadReviews();
    } catch (err) {
      setError('Failed to approve review.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this review?')) return;
    try {
      await reviewService.deleteReview(id);
      loadReviews();
    } catch (err) {
      setError('Failed to delete review.');
    }
  };

  return (
    <div className="reviews-management">
      <div className="reviews-header">
        <h2>Reviews Management</h2>
        <span className="reviews-count">{reviews.length} Total</span>
      </div>

      {error && <p className="reviews-error">{error}</p>}

      {loading ? (
        <p>Loading reviews...</p>
      ) : reviews.length === 0 ? (
        <p className="reviews-empty">No reviews yet.</p>
      ) : (
        <table className="reviews-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Review</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review.id}>
                <td>
                  <strong>{review.name}</strong>
                  <br />
                  <small>{review.role}</small>
                </td>
                <td>{'⭐'.repeat(review.rating)}</td>
                <td className="review-quote">{review.quote?.slice(0, 80)}...</td>
                <td>
                  <span className={`status-badge ${review.isApproved ? 'approved' : 'pending'}`}>
                    {review.isApproved ? '✅ Approved' : '⏳ Pending'}
                  </span>
                </td>
                <td>
                  {!review.isApproved && (
                    <button className="btn-approve" onClick={() => handleApprove(review.id)}>
                      Approve
                    </button>
                  )}
                  <button className="btn-delete" onClick={() => handleDelete(review.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}