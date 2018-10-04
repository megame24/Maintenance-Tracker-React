import {
  createRequest, initialCreateReqState,
  userRequests, initialUserReqsState,
  request, initialRequestState,
  editRequest, initialEditReqState,
  deleteRequest, initialDeleteReqState,
} from '../../src/reducers/requestReducer';
import types from '../../src/actions/actionTypes';

describe('Testing createRequest', () => {
  it('should return the initial state if no action type is passed', () => {
    const state = createRequest(initialCreateReqState);
    expect(state).toEqual(initialCreateReqState);
  });
  it('should return the initial state if no initial state is passed', () => {
    const state = createRequest();
    expect(state).toEqual(initialCreateReqState);
  });
  it('should return the initial state if no invalid action type is passed', () => {
    const state = createRequest(initialCreateReqState, { type: 'INVALID' });
    expect(state).toEqual(initialCreateReqState);
  });
  it('should set success to true on create request success', () => {
    const action = {
      type: `${types.CREATE_REQUEST}_SUCCESS`,
    }
    const state = createRequest(initialCreateReqState, action);
    expect(state.success).toEqual(true);
  });
  it('should set success to false when RESET_SUCCESS is dispatched', () => {
    const action = {
      type: types.RESET_SUCCESS,
    }
    const state = createRequest(initialCreateReqState, action);
    expect(state.success).toEqual(false);
  });
  it('should set isLoading to true when LOGIN_LOADING is dispatched', () => {
    const action = { type: `${types.CREATE_REQUEST}_LOADING`};
    const state = createRequest(initialCreateReqState, action);
    expect(state.isLoading).toEqual(true);
  });
  it('should save an error message to the state on failure', () => {
    const action = {
      type: `${types.CREATE_REQUEST}_FAILURE`,
      payload: {
        message: 'ERROR!!'
      }
    }
    const state = createRequest(initialCreateReqState, action);
    expect(state.errors.message).toEqual(action.payload.message);
  });
  it('should reset the errors when CLEAR_ERRORS is dispatched', () => {
    const action = { type: types.CLEAR_ERRORS};
    const state = createRequest(initialCreateReqState, action);
    expect(state.errors.message).toEqual('');
  });
});


describe('Testing userRequests', () => {
  it('should return the initial state if no action type is passed', () => {
    const state = userRequests(initialUserReqsState);
    expect(state).toEqual(initialUserReqsState);
  });
  it('should return the initial state if no initial state is passed', () => {
    const state = userRequests();
    expect(state).toEqual(initialUserReqsState);
  });
  it('should return the initial state if no invalid action type is passed', () => {
    const state = userRequests(initialUserReqsState, { type: 'INVALID' });
    expect(state).toEqual(initialUserReqsState);
  });
  it('should should store the requests on success', () => {
    const action = {
      type: `${types.GET_USER_REQUESTS}_SUCCESS`,
      payload: {
        data: [{
          title: 'yo',
        }]
      }
    }
    const state = userRequests(initialUserReqsState, action);
    expect(state.requests).toEqual(action.payload.data);
  });
  it('should set isLoading to true on loading', () => {
    const action = { type: `${types.GET_USER_REQUESTS}_LOADING`};
    const state = userRequests(initialUserReqsState, action);
    expect(state.isLoading).toEqual(true);
  });
  it('should save an error message to the state on failure', () => {
    const action = {
      type: `${types.GET_USER_REQUESTS}_FAILURE`,
      payload: {
        message: 'ERROR!!'
      }
    }
    const state = userRequests(initialUserReqsState, action);
    expect(state.errors.message).toEqual(action.payload.message);
  });
  it('should reset the errors when CLEAR_ERRORS is dispatched', () => {
    const action = { type: types.CLEAR_ERRORS};
    const state = userRequests(initialUserReqsState, action);
    expect(state.errors.message).toEqual('');
  });
});

describe('Testing request', () => {
  it('should return the initial state if no action type is passed', () => {
    const state = request(initialRequestState);
    expect(state).toEqual(initialRequestState);
  });
  it('should return the initial state if no initial state is passed', () => {
    const state = request();
    expect(state).toEqual(initialRequestState);
  });
  it('should return the initial state if no invalid action type is passed', () => {
    const state = request(initialRequestState, { type: 'INVALID' });
    expect(state).toEqual(initialRequestState);
  });
  it('should should store the requests on success', () => {
    const action = {
      type: `${types.GET_REQUEST}_SUCCESS`,
      payload: {
        data: {
          title: 'yo',
        }
      }
    }
    const state = request(initialRequestState, action);
    expect(state.request).toEqual(action.payload.data);
  });
  it('should set isLoading to true on loading', () => {
    const action = { type: `${types.GET_REQUEST}_LOADING`};
    const state = request(initialRequestState, action);
    expect(state.isLoading).toEqual(true);
  });
  it('should save an error message to the state on failure', () => {
    const action = {
      type: `${types.GET_REQUEST}_FAILURE`,
      payload: {
        message: 'ERROR!!'
      }
    }
    const state = request(initialRequestState, action);
    expect(state.errors.message).toEqual(action.payload.message);
  });
  it('should should store the requests on success', () => {
    const action = {
      type: `${types.GET_REQUEST_FOR_ADMIN}_SUCCESS`,
      payload: {
        data: {
          title: 'yo',
        }
      }
    }
    const state = request(initialRequestState, action);
    expect(state.request).toEqual(action.payload.data);
  });
  it('should set isLoading to true on loading', () => {
    const action = { type: `${types.GET_REQUEST_FOR_ADMIN}_LOADING`};
    const state = request(initialRequestState, action);
    expect(state.isLoading).toEqual(true);
  });
  it('should save an error message to the state on failure', () => {
    const action = {
      type: `${types.GET_REQUEST_FOR_ADMIN}_FAILURE`,
      payload: {
        message: 'ERROR!!'
      }
    }
    const state = request(initialRequestState, action);
    expect(state.errors.message).toEqual(action.payload.message);
  });
  it('should reset the errors when CLEAR_ERRORS is dispatched', () => {
    const action = { type: types.CLEAR_ERRORS};
    const state = request(initialRequestState, action);
    expect(state.errors.message).toEqual('');
  });
});

describe('Testing editRequest', () => {
  it('should return the initial state if no action type is passed', () => {
    const state = editRequest(initialEditReqState);
    expect(state).toEqual(initialEditReqState);
  });
  it('should return the initial state if no initial state is passed', () => {
    const state = editRequest();
    expect(state).toEqual(initialEditReqState);
  });
  it('should return the initial state if no invalid action type is passed', () => {
    const state = editRequest(initialEditReqState, { type: 'INVALID' });
    expect(state).toEqual(initialEditReqState);
  });
  it('should should store the request on get request success', () => {
    const action = {
      type: `${types.GET_REQUEST}_SUCCESS`,
      payload: {
        data: {
          title: 'yo',
        }
      }
    }
    const state = editRequest(initialEditReqState, action);
    expect(state.request).toEqual(action.payload.data);
  });
  it('should set isLoading to true on get request loading', () => {
    const action = { type: `${types.GET_REQUEST}_LOADING`};
    const state = editRequest(initialEditReqState, action);
    expect(state.isLoading).toEqual(true);
  });
  it('should save an error message to the state on get request failure', () => {
    const action = {
      type: `${types.GET_REQUEST}_FAILURE`,
      payload: {
        message: 'ERROR!!'
      }
    }
    const state = editRequest(initialEditReqState, action);
    expect(state.errors.message).toEqual(action.payload.message);
  });
  it('should set success to true on edit request success', () => {
    const action = {
      type: `${types.EDIT_REQUEST}_SUCCESS`,
    }
    const state = editRequest(initialEditReqState, action);
    expect(state.success).toEqual(true);
  });
  it('should set success to false when RESET_SUCCESS is dispatched', () => {
    const action = {
      type: types.RESET_SUCCESS,
    }
    const state = editRequest(initialEditReqState, action);
    expect(state.success).toEqual(false);
  });
  it('should set isLoading to true when LOGIN_LOADING is dispatched', () => {
    const action = { type: `${types.EDIT_REQUEST}_LOADING`};
    const state = editRequest(initialEditReqState, action);
    expect(state.isLoading).toEqual(true);
  });
  it('should save an error message to the state on failure', () => {
    const action = {
      type: `${types.EDIT_REQUEST}_FAILURE`,
      payload: {
        message: 'ERROR!!'
      }
    }
    const state = editRequest(initialEditReqState, action);
    expect(state.errors.message).toEqual(action.payload.message);
  });
  it('should reset the errors when CLEAR_ERRORS is dispatched', () => {
    const action = { type: types.CLEAR_ERRORS};
    const state = editRequest(initialEditReqState, action);
    expect(state.errors.message).toEqual('');
  });
  it('should update the request object when EDIT_INPUT_ON_CHANGE is dispatched with an event', () => {
    const action = {
      type: types.EDIT_INPUT_ON_CHANGE,
      payload: {
        target: {
          name: 'title',
          value: 'new value'
        }
      }
    }
    const state = editRequest(initialEditReqState, action);
    expect(state.request.title).toEqual(action.payload.target.value);
  });
});

describe('Testing deleteRequest', () => {
  it('should return the initial state if no action type is passed', () => {
    const state = deleteRequest(initialDeleteReqState);
    expect(state).toEqual(initialDeleteReqState);
  });
  it('should return the initial state if no initial state is passed', () => {
    const state = deleteRequest();
    expect(state).toEqual(initialDeleteReqState);
  });
  it('should return the initial state if no invalid action type is passed', () => {
    const state = deleteRequest(initialDeleteReqState, { type: 'INVALID' });
    expect(state).toEqual(initialDeleteReqState);
  });
  it('should set success to true on delete request success', () => {
    const action = {
      type: `${types.DELETE_REQUEST}_SUCCESS`,
    }
    const state = deleteRequest(initialDeleteReqState, action);
    expect(state.success).toEqual(true);
  });
  it('should set success to false when RESET_DELETE_REQ_SUCC is dispatched', () => {
    const action = {
      type: types.RESET_SUCCESS,
    }
    const state = deleteRequest(initialDeleteReqState, action);
    expect(state.success).toEqual(false);
  });
  it('should set isLoading to true on loading', () => {
    const action = { type: `${types.DELETE_REQUEST}_LOADING`};
    const state = deleteRequest(initialDeleteReqState, action);
    expect(state.isLoading).toEqual(true);
  });
  it('should save an error message to the state on failure', () => {
    const action = {
      type: `${types.DELETE_REQUEST}_FAILURE`,
      payload: {
        message: 'ERROR!!'
      }
    }
    const state = deleteRequest(initialDeleteReqState, action);
    expect(state.errors.message).toEqual(action.payload.message);
  });
  it('should reset the errors when CLEAR_ERRORS is dispatched', () => {
    const action = { type: types.CLEAR_ERRORS};
    const state = deleteRequest(initialDeleteReqState, action);
    expect(state.errors.message).toEqual('');
  });
});

