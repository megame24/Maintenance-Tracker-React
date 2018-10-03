import {
  createRequest, initialCreateReqState,
  userRequests, initialUserReqsState,
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
  it('should set success to false when RESET_CREATE_REQ_SUCC is dispatched', () => {
    const action = {
      type: types.RESET_CREATE_REQ_SUCC,
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
