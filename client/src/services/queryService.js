import { api } from './api.js';

export const queryService = {
  getAll: (params) => api.get('/queries', params),
  getById: (id) => api.get(`/queries/${id}`),
  create: (data) => api.post('/queries', data),
  reply: (id, data) => api.post(`/queries/${id}/reply`, data),
  updateStatus: (id, data) => api.put(`/queries/${id}/status`, data),
  delete: (id) => api.delete(`/queries/${id}`),
};
