import types from '../actions/actionTypes';

const {
  GET_ALL_REQUESTS_FOR_ADMIN, CLEAR_ERRORS, APPROVE_REQUEST,
  DISAPPROVE_REQUEST, RESOLVE_REQUEST, RESET_SUCCESS,
} = types;

export const initialAllReqsState = {
  isLoading: false,
  errors: {
    statusCode: 0,
    message: '',
    response: {},
  },
  requests: [],
};

export const initialReqResolutionState = {
  isLoading: false,
  errors: {
    statusCode: 0,
    message: '',
    response: {},
  },
  success: false,
};

export const allRequests = (state = initialAllReqsState, action = {}) => {
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
  case `${GET_ALL_REQUESTS_FOR_ADMIN}_LOADING`:
    return {
      ...state,
      isLoading: true,
    };
  case `${GET_ALL_REQUESTS_FOR_ADMIN}_SUCCESS`:
    return {
      ...state,
      isLoading: false,
      errors: {
        message: '',
        response: {},
      },
      requests: action.payload.data,
    };
  case `${GET_ALL_REQUESTS_FOR_ADMIN}_FAILURE`:
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

export const reqResolution = (state = initialReqResolutionState, action = {
}) => {
  switch (action.type) {
  case RESET_SUCCESS:
    return {
      ...state,
      success: false,
    };
  case CLEAR_ERRORS:
    return {
      ...state,
      isLoading: false,
      errors: {
        message: '',
        response: {},
      },
    };
  case `${APPROVE_REQUEST}_LOADING`:
    return {
      ...state,
      isLoading: true,
    };
  case `${APPROVE_REQUEST}_SUCCESS`:
    return {
      ...state,
      isLoading: false,
      errors: {
        message: '',
        response: {},
      },
      success: true,
    };
  case `${APPROVE_REQUEST}_FAILURE`:
    return {
      ...state,
      isLoading: false,
      errors: {
        statusCode: action.payload.statusCode,
        message: action.payload.message,
        response: action.payload.response,
      }
    };
  case `${RESOLVE_REQUEST}_LOADING`:
    return {
      ...state,
      isLoading: true,
    };
  case `${RESOLVE_REQUEST}_SUCCESS`:
    return {
      ...state,
      isLoading: false,
      errors: {
        message: '',
        response: {},
      },
      success: true,
    };
  case `${RESOLVE_REQUEST}_FAILURE`:
    return {
      ...state,
      isLoading: false,
      errors: {
        statusCode: action.payload.statusCode,
        message: action.payload.message,
        response: action.payload.response,
      }
    };
  case `${DISAPPROVE_REQUEST}_LOADING`:
    return {
      ...state,
      isLoading: true,
    };
  case `${DISAPPROVE_REQUEST}_SUCCESS`:
    return {
      ...state,
      isLoading: false,
      errors: {
        message: '',
        response: {},
      },
      success: true,
    };
  case `${DISAPPROVE_REQUEST}_FAILURE`:
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
