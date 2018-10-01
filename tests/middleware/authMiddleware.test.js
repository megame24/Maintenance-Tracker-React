import authMiddleware from '../../src/middleware/authMiddleware';

describe('Testing authMiddleware', () => {
  const next = action => action;
  it('should decongest the nested response on login success', () => {
    const action = {
      type: 'SIGN_UP_SUCCESS',
      payload: {
        data: {
          token: 'nested_token'
        }
      }
    }
    const result = authMiddleware()(next)(action);
    expect(result.payload.token).toEqual(action.payload.data.token);
  });
  it('should call next for every other action type', () => {
    const action = {
      type: 'LOGIN_FAILURE',
      payload: {
        response: {
          data: {
            error: {
              message: 'nested_error'
            }
          }
        }
      }
    }
    const result = authMiddleware()(next)(action);
    expect(result.payload.response.data.error.message).toEqual(action.payload.response.data.error.message);
  });
});
