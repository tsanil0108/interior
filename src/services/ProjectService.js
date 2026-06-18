import axiosInstance from '../api/axiosInstance';

const projectService = {
  /**
   * Fetch all projects (public). Optionally filter by category.
   * @param {string} [category]
   */
  getAllProjects: (category) =>
    axiosInstance.get('/projects', { params: category ? { category } : {} }),

  /**
   * Fetch a single project by id (public)
   */
  getProjectById: (id) => axiosInstance.get(`/projects/${id}`),

  /**
   * Add a new project (admin only)
   * @param {{title: string, category: string, imageUrl: string, description: string}} payload
   */
  addProject: (payload) => axiosInstance.post('/projects', payload),

  /**
   * Update an existing project (admin only)
   */
  updateProject: (id, payload) => axiosInstance.put(`/projects/${id}`, payload),

  /**
   * Delete a project (admin only)
   */
  deleteProject: (id) => axiosInstance.delete(`/projects/${id}`),
};

export default projectService;