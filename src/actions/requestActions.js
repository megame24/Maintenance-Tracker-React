import axiosInstance from '../services/axiosInstance';
import types from './actionTypes';

const {
  CREATE_REQUEST, GET_USER_REQUESTS,
  GET_REQUEST, EDIT_REQUEST,
  EDIT_INPUT_ON_CHANGE, DELETE_REQUEST,
} = types;

const createRequest = formData => ({
  type: CREATE_REQUEST,
  payload: axiosInstance().post('/users/requests/', formData),
});

const editRequest = (id, formData) => ({
  type: EDIT_REQUEST,
  payload: axiosInstance().put(`/users/requests/${id}`, formData),
});

const getUserRequests = () => ({
  type: GET_USER_REQUESTS,
  payload: axiosInstance().get('/users/requests'),
});

const getRequest = id => ({
  type: GET_REQUEST,
  payload: axiosInstance().get(`/users/requests/${id}`),
});

const handleEditInputChange = event => ({
  type: EDIT_INPUT_ON_CHANGE,
  payload: event,
});

const deleteRequest = id => ({
  type: DELETE_REQUEST,
  payload: axiosInstance().delete(`/users/requests/${id}`),
});

export default {
  createRequest,
  getUserRequests,
  getRequest,
  editRequest,
  handleEditInputChange,
  deleteRequest,
};
