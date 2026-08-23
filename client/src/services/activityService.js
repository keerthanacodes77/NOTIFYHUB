import { api } from './api.js';

export const activityService = {
  getAll: (params) => api.get('/activity', params),
};
export default activityService;
