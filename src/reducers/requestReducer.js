import types from '../actions/actionTypes';

const {
  CREATE_REQUEST, RESET_CREATE_REQ_SUCC, GET_USER_REQUESTS,
  CLEAR_ERRORS,
} = types;

export const initialCreateReqState = {
  isLoading: false,
  errors: {
    statusCode: 0,
    message: '',
    response: {},
  },
  success: false,
};


export const initialUserReqsState = {
  isLoading: false,
  errors: {
    statusCode: 0,
    message: '',
    response: {},
  },
  requests: [],
};

export const createRequest = (state = initialCreateReqState, action = {}) => {
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


export const userRequests = (state = initialUserReqsState, action = {}) => {
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
  case `${GET_USER_REQUESTS}_LOADING`:
    return {
      ...state,
      isLoading: true,
    };
  case `${GET_USER_REQUESTS}_SUCCESS`:
    return {
      ...state,
      isLoading: false,
      errors: {
        message: '',
        response: {},
      },
      requests: action.payload.data,
    };
  case `${GET_USER_REQUESTS}_FAILURE`:
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

export default {};