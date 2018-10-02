import axiosInstance from '../services/axiosInstance';
import types from './actionTypes';

const signup = formData => ({
  type: types.SIGN_UP,
  payload: axiosInstance().post('/auth/signup/', formData),
});

const login = formData => ({
  type: types.LOGIN,
  payload: axiosInstance().post('/auth/login/', formData),
});

export default {
  signup,
  login,
};
