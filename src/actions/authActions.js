import axiosInstance from '../services/axiosInstance';
import types from './actionTypes';

const signup = formData => ({
  type: types.SIGN_UP,
  payload: axiosInstance().post('/auth/signup/', formData),
});

export default {
  signup
};
