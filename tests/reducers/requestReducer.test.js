import requestReducer, { initialState } from '../../src/reducers/requestReducer';
import actions from '../../src/actions/actionTypes';

describe('Testing requestReducer', () => {
  it('should return the initial state if no action type is passed', () => {
    const state = requestReducer(initialState);
    expect(state).toEqual(initialState);
  });
  it('should return the initial state if no initial state is passed', () => {
    const state = requestReducer();
    expect(state).toEqual(initialState);
  });
  it('should return the initial state if no invalid action type is passed', () => {
    const state = requestReducer(initialState, { type: 'INVALID' });
    expect(state).toEqual(initialState);
  });
  it('should set success to true on create request success', () => {
    const action = {
      type: `${actions.CREATE_REQUEST}_SUCCESS`,
    }
    const state = requestReducer(initialState, action);
    expect(state.success).toEqual(true);
  });
  it('should set success to false when RESET_CREATE_REQ_SUCC is dispatched', () => {
    const action = {
      type: actions.RESET_CREATE_REQ_SUCC,
    }
    const state = requestReducer(initialState, action);
    expect(state.success).toEqual(false);
  });
  it('should set isLoading to true when LOGIN_LOADING is dispatched', () => {
    const action = { type: `${actions.CREATE_REQUEST}_LOADING`};
    const state = requestReducer(initialState, action);
    expect(state.isLoading).toEqual(true);
  });
  it('should save an error message to the state when LOGIN_FAILURE is dispatched', () => {
    const action = {
      type: `${actions.CREATE_REQUEST}_FAILURE`,
      payload: {
        message: 'ERROR!!'
      }
    }
    const state = requestReducer(initialState, action);
    expect(state.errors.message).toEqual(action.payload.message);
  });
});
