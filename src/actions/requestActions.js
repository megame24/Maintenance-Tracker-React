import axiosInstance from '../services/axiosInstance';
import types from './actionTypes';

const { CREATE_REQUEST, RESET_CREATE_REQ_SUCC } = types;

const createRequest = formData => ({
  type: CREATE_REQUEST,
  payload: axiosInstance().post('/users/requests/', formData),
});

const resetCreateReqSucc = () => ({
  type: RESET_CREATE_REQ_SUCC,
});

export default {
  createRequest,
  resetCreateReqSucc,
};
