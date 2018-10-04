import types from '../actions/actionTypes';

const {
  CREATE_REQUEST, RESET_SUCCESS, GET_USER_REQUESTS,
  CLEAR_ERRORS, GET_REQUEST, EDIT_REQUEST,
  EDIT_INPUT_ON_CHANGE, DELETE_REQUEST,
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

export const initialDeleteReqState = {
  isLoading: false,
  errors: {
    statusCode: 0,
    message: '',
    response: {},
  },
  success: false,
};

export const initialEditReqState = {
  isLoading: false,
  errors: {
    statusCode: 0,
    message: '',
    response: {},
  },
  success: false,
  request: {},
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

export const initialRequestState = {
  isLoading: false,
  errors: {
    statusCode: 0,
    message: '',
    response: {},
  },
  requests: {},
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
  case RESET_SUCCESS:
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

export const editRequest = (state = initialEditReqState, action = {}) => {
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
  case RESET_SUCCESS:
    return {
      ...state,
      success: false,
    };
  case `${EDIT_REQUEST}_LOADING`:
    return {
      ...state,
      isLoading: true,
    };
  case `${GET_REQUEST}_LOADING`:
    return {
      ...state,
      isLoading: true,
    };
  case `${EDIT_REQUEST}_SUCCESS`:
    return {
      ...state,
      isLoading: false,
      errors: {
        message: '',
        response: {},
      },
      success: true,
    };
  case `${EDIT_REQUEST}_FAILURE`:
    return {
      ...state,
      isLoading: false,
      errors: {
        statusCode: action.payload.statusCode,
        message: action.payload.message,
        response: action.payload.response,
      }
    };
  case `${GET_REQUEST}_FAILURE`:
    return {
      ...state,
      isLoading: false,
      errors: {
        statusCode: action.payload.statusCode,
        message: action.payload.message,
        response: action.payload.response,
      }
    };
  case `${GET_REQUEST}_SUCCESS`:
    return {
      ...state,
      isLoading: false,
      errors: {
        message: '',
        response: {},
      },
      request: action.payload.data,
    };
  case EDIT_INPUT_ON_CHANGE:
    return {
      ...state,
      request: {
        ...state.request,
        [action.payload.target.name]: action.payload.target.value,
      },
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
export const request = (state = initialRequestState, action = {}) => {
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
  case `${GET_REQUEST}_LOADING`:
    return {
      ...state,
      isLoading: true,
    };
  case `${GET_REQUEST}_SUCCESS`:
    return {
      ...state,
      isLoading: false,
      errors: {
        message: '',
        response: {},
      },
      request: action.payload.data,
    };
  case `${GET_REQUEST}_FAILURE`:
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

export const deleteRequest = (state = initialDeleteReqState, action = {}) => {
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
  case RESET_SUCCESS:
    return {
      ...state,
      success: false,
    };
  case `${DELETE_REQUEST}_LOADING`:
    return {
      ...state,
      isLoading: true,
    };
  case `${DELETE_REQUEST}_SUCCESS`:
    return {
      ...state,
      isLoading: false,
      errors: {
        message: '',
        response: {},
      },
      success: true,
    };
  case `${DELETE_REQUEST}_FAILURE`:
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
