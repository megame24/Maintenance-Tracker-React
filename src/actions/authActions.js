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

const logout = () => ({
  type: types.LOGOUT,
});

export default {
  signup,
  login,
  logout,
};
