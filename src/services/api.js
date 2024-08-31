import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchGrievanceTrends = () => api.get('/grievance-trends');
export const fetchDepartmentDistribution = () => api.get('/department-distribution');
export const fetchGrievances = () => api.get('/grievances');



export default api;
