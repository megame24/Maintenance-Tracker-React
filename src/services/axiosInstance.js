import axios from 'axios';

/**
 * Creates an axios instance
 * @returns {Object} an instance of axios
 */
const axiosInstance = () => {
  let apiUrl = 'https://in-maintenance-tracker.herokuapp.com/api/v1';
  if (process.env.NODE_ENV === 'development') {
    apiUrl = 'http://localhost:8080/api/v1';
  }

  let token = '';
  if (localStorage.getItem('token')) {
    token = localStorage.getItem('token');
  }
  const instanceCreate = axios
    .create({
      baseURL: apiUrl,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
  return instanceCreate;
};

export default axiosInstance;
