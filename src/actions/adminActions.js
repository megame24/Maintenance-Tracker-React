import axiosInstance from '../services/axiosInstance';
import types from './actionTypes';

const {
  GET_ALL_REQUESTS_FOR_ADMIN, APPROVE_REQUEST, DISAPPROVE_REQUEST,
  RESOLVE_REQUEST, GET_REQUEST_FOR_ADMIN, TRASH_REQUEST,
} = types;

const getAllRequests = () => ({
  type: GET_ALL_REQUESTS_FOR_ADMIN,
  payload: axiosInstance().get('/requests'),
});

const approveRequest = (id, data) => ({
  type: APPROVE_REQUEST,
  payload: axiosInstance().put(`/requests/${id}/approve`, { ...data }),
});

const disapproveRequest = (id, data) => ({
  type: DISAPPROVE_REQUEST,
  payload: axiosInstance().put(`/requests/${id}/disapprove`, { ...data }),
});

const resolveRequest = (id, data) => ({
  type: RESOLVE_REQUEST,
  payload: axiosInstance().put(`/requests/${id}/resolve`, { ...data }),
});

const getRequestForAdmin = id => ({
  type: GET_REQUEST_FOR_ADMIN,
  payload: axiosInstance().get(`/requests/${id}`),
});

const trashRequest = id => ({
  type: TRASH_REQUEST,
  payload: axiosInstance().delete(`/requests/${id}`),
});

export default {
  getAllRequests,
  approveRequest,
  disapproveRequest,
  resolveRequest,
  getRequestForAdmin,
  trashRequest,
};
