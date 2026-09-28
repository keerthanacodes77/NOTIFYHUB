import { api } from './api.js';

export const eventService = {
  getAll: (params) => api.get('/events', params),
  getById: (id) => api.get(`/events/${id}`),
  create: (formData) => api.post('/events', formData),
  update: (id, formData) => api.put(`/events/${id}`, formData),
  delete: (id) => api.delete(`/events/${id}`),
};
