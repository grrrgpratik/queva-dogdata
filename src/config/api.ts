export const API_CONFIG = {
  development: {
    baseUrl: '/api/queva',
    apiUrl: 'https://api-queva-prod.azurewebsites.net/api/v1/dev'
  },
  production: {
    baseUrl: '/.netlify/functions/queva-proxy',
    apiUrl: 'https://api-queva-prod.azurewebsites.net/api/v1/dev'
  }
};