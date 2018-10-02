import { combineReducers } from 'redux';
import auth from './authReducer';
import request from './requestReducer';

export default combineReducers({
  auth,
  request,
});
