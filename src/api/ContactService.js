// src/api/contactService.js
import axiosInstance from './axiosInstance';

const contactService = {
  /**
   * Submit a contact inquiry from the Contact Us page (public)
   * @param {{name: string, phone: string, email: string, message: string}} payload
   */
  submitInquiry: (payload) => axiosInstance.post('/contacts', payload),

  /**
   * Fetch all inquiries (admin only)
   */
  getAllInquiries: () => axiosInstance.get('/contacts'),

  /**
   * Fetch a single inquiry by id (admin only)
   */
  getInquiryById: (id) => axiosInstance.get(`/contacts/${id}`),

  /**
   * Delete an inquiry by id (admin only)
   */
  deleteInquiry: (id) => axiosInstance.delete(`/contacts/${id}`),
};

export default contactService;