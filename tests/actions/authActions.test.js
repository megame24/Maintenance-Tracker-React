import authActions from '../../src/actions/authActions';
import types from '../../src/actions/actionTypes';

describe('Testing authActions', () => {
  it('should dispatch SIGN_UP when signup is called', () => {
    const action = authActions.signup();
    expect(action).toEqual({
      type: types.SIGN_UP,
      payload: 'post',
    })
  });
  it('should dispatch LOGIN when login is called', () => {
    const action = authActions.login();
    expect(action).toEqual({
      type: types.LOGIN,
      payload: 'post',
    })
  });
  it('should dispatch LOGOUT when logout is called', () => {
    const action = authActions.logout();
    expect(action).toEqual({
      type: types.LOGOUT,
    })
  });
});
