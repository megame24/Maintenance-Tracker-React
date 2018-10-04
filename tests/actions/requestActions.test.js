import requestActions from '../../src/actions/requestActions';
import types from '../../src/actions/actionTypes';

describe('Testing requestActions', () => {
  it('should dispatch CREATE_REQUEST when createRequest is called', () => {
    const action = requestActions.createRequest();
    expect(action).toEqual({
      type: types.CREATE_REQUEST,
      payload: 'post',
    })
  });
  it('should dispatch EDIT_REQUEST when editRequest is called', () => {
    const action = requestActions.editRequest();
    expect(action).toEqual({
      type: types.EDIT_REQUEST,
      payload: 'put',
    })
  });
  it('should dispatch DELETE_REQUEST when deleteRequest is called', () => {
    const action = requestActions.deleteRequest();
    expect(action).toEqual({
      type: types.DELETE_REQUEST,
      payload: 'delete',
    })
  });
  it('should dispatch GET_REQUEST when getRequest is called', () => {
    const action = requestActions.getRequest();
    expect(action).toEqual({
      type: types.GET_REQUEST,
      payload: 'get',
    })
  });
  it('should dispatch GET_USER_REQUESTS when getUserRequests is called', () => {
    const action = requestActions.getUserRequests();
    expect(action).toEqual({
      type: types.GET_USER_REQUESTS,
      payload: 'get',
    })
  });
  it('should dispatch EDIT_INPUT_ON_CHANGE when handleEditInputChange is called', () => {
    const action = requestActions.handleEditInputChange('yo');
    expect(action).toEqual({
      type: types.EDIT_INPUT_ON_CHANGE,
      payload: 'yo',
    })
  });
});
