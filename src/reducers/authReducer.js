import types from '../actions/actionTypes';

const { SIGN_UP, PERSIST_LOGIN, LOGIN, CLEAR_ERRORS } = types;

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
  case CLEAR_ERRORS:
    return {
      ...state,
      isLoading: false,
      errors: {
        message: '',
        response: {},
      },
    };
  case types.LOGOUT:
    return {
      ...state,
      token: '',
      user: {},
    };
  case PERSIST_LOGIN:
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
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
      user: action.payload.user,
      token: action.payload.token,
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
  case `${LOGIN}_LOADING`:
    return {
      ...state,
      isLoading: true,
    };
  case `${LOGIN}_SUCCESS`:
    return {
      ...state,
      isLoading: false,
      errors: {
        message: '',
        response: {},
      },
      user: action.payload.user,
      token: action.payload.token,
    };
  case `${LOGIN}_FAILURE`:
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
