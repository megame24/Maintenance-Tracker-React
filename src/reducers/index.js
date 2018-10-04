import { combineReducers } from 'redux';
import auth from './authReducer';
import {
  createRequest, userRequests, request,
  editRequest, deleteRequest
} from './requestReducer';
import {
  allRequests, reqResolution
} from './adminReducer';

export default combineReducers({
  auth,
  createRequest,
  userRequests,
  request,
  editRequest,
  deleteRequest,
  allRequests,
  reqResolution,
});
