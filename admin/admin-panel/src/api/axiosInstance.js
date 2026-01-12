const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  ADMIN: `${API_BASE_URL}/admin`,   
};

export { API_BASE_URL };
