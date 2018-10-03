import { combineReducers } from 'redux';
import auth from './authReducer';
import { createRequest, userRequests } from './requestReducer';

export default combineReducers({
  auth,
  createRequest,
  userRequests,
});
