// src/api/reviewService.js
import axiosInstance from './axiosInstance';

const reviewService = {
  /**
   * Submit a new review (public)
   */
  submitReview: (payload) => axiosInstance.post('/reviews', payload),

  /**
   * Get all approved reviews (public)
   */
  getApprovedReviews: () => axiosInstance.get('/reviews'),

  /**
   * Get all reviews including pending (admin only)
   */
  getAllReviews: () => axiosInstance.get('/reviews/all'),

  /**
   * Approve a review (admin only)
   */
  approveReview: (id) => axiosInstance.put(`/reviews/${id}/approve`),

  /**
   * Delete a review (admin only)
   */
  deleteReview: (id) => axiosInstance.delete(`/reviews/${id}`),

  /**
   * Get approved review count (public)
   */
  getReviewCount: () => axiosInstance.get('/reviews/count'),
};

export default reviewService;