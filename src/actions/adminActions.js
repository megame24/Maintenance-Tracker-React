import axiosInstance from '../services/axiosInstance';
import types from './actionTypes';

const {
  GET_ALL_REQUESTS_FOR_ADMIN, APPROVE_REQUEST, DISAPPROVE_REQUEST,
  RESOLVE_REQUEST,
} = types;

const getAllRequests = () => ({
  type: GET_ALL_REQUESTS_FOR_ADMIN,
  payload: axiosInstance().get('/requests'),
});

const approveRequest = (id, status) => ({
  type: APPROVE_REQUEST,
  payload: axiosInstance().put(`/requests/${id}/approve`, { status }),
});

const disapproveRequest = (id, status) => ({
  type: DISAPPROVE_REQUEST,
  payload: axiosInstance().put(`/requests/${id}/disapprove`, { status }),
});

const resolveRequest = (id, status) => ({
  type: RESOLVE_REQUEST,
  payload: axiosInstance().put(`/requests/${id}/resolve`, { status }),
});

export default {
  getAllRequests,
  approveRequest,
  disapproveRequest,
  resolveRequest,
};
