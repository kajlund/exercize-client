import axios from 'axios';

const API_URL = 'http://localhost:4000/api/v1';
const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

async function fetchActivities() {
  try {
    const response = await apiClient.get('/activities');
    return response.data;
  } catch (error) {
    console.error('Error fetching activities:', error);
    throw error;
  }
}

async function fetchActivity(id) {
  try {
    const response = await apiClient.get(`/activities/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching activity:', error);
    throw error;
  }
}


export default {
  fetchActivities,
  fetchActivity,
}

