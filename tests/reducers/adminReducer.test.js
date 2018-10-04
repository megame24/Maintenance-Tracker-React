import {
  allRequests, reqResolution, initialAllReqsState, initialReqResolutionState,
  trashRequest, initialTrashReqState
} from '../../src/reducers/adminReducer';
import types from '../../src/actions/actionTypes';

describe('Testing reqResolution', () => {
  it('should return the initial state if no action type is passed', () => {
    const state = reqResolution(initialReqResolutionState);
    expect(state).toEqual(initialReqResolutionState);
  });
  it('should return the initial state if no initial state is passed', () => {
    const state = reqResolution();
    expect(state).toEqual(initialReqResolutionState);
  });
  it('should return the initial state if no invalid action type is passed', () => {
    const state = reqResolution(initialReqResolutionState, { type: 'INVALID' });
    expect(state).toEqual(initialReqResolutionState);
  });
  it('should set success to false when RESET_SUCCESS is dispatched', () => {
    const action = {
      type: types.RESET_SUCCESS,
    }
    const state = reqResolution(initialReqResolutionState, action);
    expect(state.success).toEqual(false);
  });
  it('should reset the errors when CLEAR_ERRORS is dispatched', () => {
    const action = { type: types.CLEAR_ERRORS};
    const state = reqResolution(initialReqResolutionState, action);
    expect(state.errors.message).toEqual('');
  });
  it('should set success to true on create request success', () => {
    const action = {
      type: `${types.APPROVE_REQUEST}_SUCCESS`,
    }
    const state = reqResolution(initialReqResolutionState, action);
    expect(state.success).toEqual(true);
  });
  it('should set isLoading to true when LOGIN_LOADING is dispatched', () => {
    const action = { type: `${types.APPROVE_REQUEST}_LOADING`};
    const state = reqResolution(initialReqResolutionState, action);
    expect(state.isLoading).toEqual(true);
  });
  it('should save an error message to the state on failure', () => {
    const action = {
      type: `${types.APPROVE_REQUEST}_FAILURE`,
      payload: {
        message: 'ERROR!!'
      }
    }
    const state = reqResolution(initialReqResolutionState, action);
    expect(state.errors.message).toEqual(action.payload.message);
  });
  it('should set success to true on create request success', () => {
    const action = {
      type: `${types.DISAPPROVE_REQUEST}_SUCCESS`,
    }
    const state = reqResolution(initialReqResolutionState, action);
    expect(state.success).toEqual(true);
  });
  it('should set isLoading to true when LOGIN_LOADING is dispatched', () => {
    const action = { type: `${types.DISAPPROVE_REQUEST}_LOADING`};
    const state = reqResolution(initialReqResolutionState, action);
    expect(state.isLoading).toEqual(true);
  });
  it('should save an error message to the state on failure', () => {
    const action = {
      type: `${types.DISAPPROVE_REQUEST}_FAILURE`,
      payload: {
        message: 'ERROR!!'
      }
    }
    const state = reqResolution(initialReqResolutionState, action);
    expect(state.errors.message).toEqual(action.payload.message);
  });
  it('should set success to true on create request success', () => {
    const action = {
      type: `${types.RESOLVE_REQUEST}_SUCCESS`,
    }
    const state = reqResolution(initialReqResolutionState, action);
    expect(state.success).toEqual(true);
  });
  it('should set isLoading to true on loading', () => {
    const action = { type: `${types.RESOLVE_REQUEST}_LOADING`};
    const state = reqResolution(initialReqResolutionState, action);
    expect(state.isLoading).toEqual(true);
  });
  it('should save an error message to the state on failure', () => {
    const action = {
      type: `${types.RESOLVE_REQUEST}_FAILURE`,
      payload: {
        message: 'ERROR!!'
      }
    }
    const state = reqResolution(initialReqResolutionState, action);
    expect(state.errors.message).toEqual(action.payload.message);
  });
});

describe('Testing trashRequest', () => {
  it('should return the initial state if no action type is passed', () => {
    const state = trashRequest(initialTrashReqState);
    expect(state).toEqual(initialTrashReqState);
  });
  it('should return the initial state if no initial state is passed', () => {
    const state = trashRequest();
    expect(state).toEqual(initialTrashReqState);
  });
  it('should return the initial state if no invalid action type is passed', () => {
    const state = trashRequest(initialTrashReqState, { type: 'INVALID' });
    expect(state).toEqual(initialTrashReqState);
  });
  it('should set success to false when RESET_SUCCESS is dispatched', () => {
    const action = {
      type: types.RESET_SUCCESS,
    }
    const state = trashRequest(initialTrashReqState, action);
    expect(state.success).toEqual(false);
  });
  it('should reset the errors when CLEAR_ERRORS is dispatched', () => {
    const action = { type: types.CLEAR_ERRORS};
    const state = trashRequest(initialTrashReqState, action);
    expect(state.errors.message).toEqual('');
  });
  it('should set success to true on create request success', () => {
    const action = {
      type: `${types.TRASH_REQUEST}_SUCCESS`,
    }
    const state = trashRequest(initialTrashReqState, action);
    expect(state.success).toEqual(true);
  });
  it('should set isLoading to true on loading', () => {
    const action = { type: `${types.TRASH_REQUEST}_LOADING`};
    const state = trashRequest(initialTrashReqState, action);
    expect(state.isLoading).toEqual(true);
  });
  it('should save an error message to the state on failure', () => {
    const action = {
      type: `${types.TRASH_REQUEST}_FAILURE`,
      payload: {
        message: 'ERROR!!'
      }
    }
    const state = trashRequest(initialTrashReqState, action);
    expect(state.errors.message).toEqual(action.payload.message);
  });
});


describe('Testing allRequests', () => {
  it('should return the initial state if no action type is passed', () => {
    const state = allRequests(initialAllReqsState);
    expect(state).toEqual(initialAllReqsState);
  });
  it('should return the initial state if no initial state is passed', () => {
    const state = allRequests();
    expect(state).toEqual(initialAllReqsState);
  });
  it('should return the initial state if no invalid action type is passed', () => {
    const state = allRequests(initialAllReqsState, { type: 'INVALID' });
    expect(state).toEqual(initialAllReqsState);
  });
  it('should should store the requests on success', () => {
    const action = {
      type: `${types.GET_ALL_REQUESTS_FOR_ADMIN}_SUCCESS`,
      payload: {
        data: [{
          title: 'yo',
        }]
      }
    }
    const state = allRequests(initialAllReqsState, action);
    expect(state.requests).toEqual(action.payload.data);
  });
  it('should set isLoading to true on loading', () => {
    const action = { type: `${types.GET_ALL_REQUESTS_FOR_ADMIN}_LOADING`};
    const state = allRequests(initialAllReqsState, action);
    expect(state.isLoading).toEqual(true);
  });
  it('should save an error message to the state on failure', () => {
    const action = {
      type: `${types.GET_ALL_REQUESTS_FOR_ADMIN}_FAILURE`,
      payload: {
        message: 'ERROR!!'
      }
    }
    const state = allRequests(initialAllReqsState, action);
    expect(state.errors.message).toEqual(action.payload.message);
  });
  it('should reset the errors when CLEAR_ERRORS is dispatched', () => {
    const action = { type: types.CLEAR_ERRORS};
    const state = allRequests(initialAllReqsState, action);
    expect(state.errors.message).toEqual('');
  });
});
