import types from '../actions/actionTypes';

const { SIGN_UP, PERSIST_LOGIN } = types;

export const initialState = {
  isLoading: false,
  errors: {
    statusCode: 0,
    message: '',
    response: {},
  },
  token: '',
  user: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case PERSIST_LOGIN:
    return {
      ...state,
      token: action.payload.token,
      user: action.payload.user,
    };
  case `${SIGN_UP}_LOADING`:
    return {
      ...state,
      isLoading: true,
    };
  case `${SIGN_UP}_SUCCESS`:
    return {
      ...state,
      isLoading: false,
      errors: {
        message: '',
        response: {},
      },
      token: action.payload.token,
      user: action.payload.user,
    };
  case `${SIGN_UP}_FAILURE`:
    return {
      ...state,
      isLoading: false,
      errors: {
        statusCode: action.payload.statusCode,
        message: action.payload.message,
        response: action.payload.response,
      }
    };
  default:
    return state;
  }
};
