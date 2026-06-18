// src/api/DashboardServic.js
import axiosInstance from './axiosInstance';

const dashboardService = {
  /**
   * Fetch dashboard summary stats: total leads, total projects (admin only)
   */
  getStats: () => axiosInstance.get('/admin/dashboard/stats'),
};

export default dashboardService;