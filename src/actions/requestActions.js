import axiosInstance from '../services/axiosInstance';
import types from './actionTypes';

const {
  CREATE_REQUEST, RESET_CREATE_REQ_SUCC, GET_USER_REQUESTS,
  GET_REQUEST, EDIT_REQUEST, RESET_EDIT_REQ_SUCC,
  EDIT_INPUT_ON_CHANGE
} = types;

const createRequest = formData => ({
  type: CREATE_REQUEST,
  payload: axiosInstance().post('/users/requests/', formData),
});

const editRequest = (id, formData) => ({
  type: EDIT_REQUEST,
  payload: axiosInstance().put(`/users/requests/${id}`, formData),
});

const resetCreateReqSucc = () => ({
  type: RESET_CREATE_REQ_SUCC,
});

const resetEditReqSucc = () => ({
  type: RESET_EDIT_REQ_SUCC,
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

export default {
  createRequest,
  resetCreateReqSucc,
  getUserRequests,
  getRequest,
  editRequest,
  resetEditReqSucc,
  handleEditInputChange,
};
