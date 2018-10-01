import store from '../src/store';
import types from '../src/actions/actionTypes';

describe('Testing the redux store', () => {
  it('should store state on success', () => {
    store.dispatch({ type: `${types.SIGN_UP}_SUCCESS`, payload:
      { data: { token: 'token' } }
    });
    const state = store.getState();
    const { token } = state.auth;
    expect(token).toEqual('token');
  });
});
