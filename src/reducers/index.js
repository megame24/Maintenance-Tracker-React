import { combineReducers } from 'redux';
import auth from './authReducer';
import {
  createRequest, userRequests, request,
  editRequest,
} from './requestReducer';

export default combineReducers({
  auth,
  createRequest,
  userRequests,
  request,
  editRequest,
});
