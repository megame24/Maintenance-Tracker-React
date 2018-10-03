import { combineReducers } from 'redux';
import auth from './authReducer';
import { createRequest, userRequests, request } from './requestReducer';

export default combineReducers({
  auth,
  createRequest,
  userRequests,
  request,
});
