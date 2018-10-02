import types from '../actions/actionTypes';

const { CREATE_REQUEST, RESET_CREATE_REQ_SUCC } = types;

export const initialState = {
  isLoading: false,
  errors: {
    statusCode: 0,
    message: '',
    response: {},
  },
  success: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case RESET_CREATE_REQ_SUCC:
    return {
      ...state,
      success: false,
    };
  case `${CREATE_REQUEST}_LOADING`:
    return {
      ...state,
      isLoading: true,
    };
  case `${CREATE_REQUEST}_SUCCESS`:
    return {
      ...state,
      isLoading: false,
      errors: {
        message: '',
        response: {},
      },
      success: true,
    };
  case `${CREATE_REQUEST}_FAILURE`:
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
