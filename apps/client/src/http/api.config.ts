export const API_PREFIX = import.meta.env.VITE_API_PREFIX || 'api'
export const API_PORT = parseInt(import.meta.env.VITE_API_PORT, 10) || 3000;
export const API_HOST = import.meta.env.VITE_API_HOST || 'localhost'
export const API_URL = `http://${API_HOST}:${API_PORT}/${API_PREFIX}`