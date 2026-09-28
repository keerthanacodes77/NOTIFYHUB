import { api } from './api.js';

export const announcementService = {
  getAll: (params) => api.get('/announcements', params),
  getById: (id) => api.get(`/announcements/${id}`),
  create: (formData) => api.post('/announcements', formData),
  update: (id, formData) => api.put(`/announcements/${id}`, formData),
  delete: (id) => api.delete(`/announcements/${id}`),
};
