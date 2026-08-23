import { api } from './api.js';

export const healthService = {
  getHealth: () => api.get('/health'),
};
export default healthService;
