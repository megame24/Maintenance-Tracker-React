import axiosInstance from '../services/axiosInstance';
import types from './actionTypes';

const { CREATE_REQUEST, RESET_CREATE_REQ_SUCC, GET_USER_REQUESTS } = types;

const createRequest = formData => ({
  type: CREATE_REQUEST,
  payload: axiosInstance().post('/users/requests/', formData),
});

const resetCreateReqSucc = () => ({
  type: RESET_CREATE_REQ_SUCC,
});

const getUserRequests = () => ({
  type: GET_USER_REQUESTS,
  payload: axiosInstance().get('/users/requests'),
});

export default {
  createRequest,
  resetCreateReqSucc,
  getUserRequests,
};
