import adminActions from '../../src/actions/adminActions';
import types from '../../src/actions/actionTypes';

describe('Testing adminActions', () => {
  it('should dispatch GET_ALL_REQUESTS_FOR_ADMIN when getAllRequests is called', () => {
    const action = adminActions.getAllRequests();
    expect(action).toEqual({
      type: types.GET_ALL_REQUESTS_FOR_ADMIN,
      payload: 'get',
    })
  });
  it('should dispatch APPROVE_REQUEST when approveRequest is called', () => {
    const action = adminActions.approveRequest();
    expect(action).toEqual({
      type: types.APPROVE_REQUEST,
      payload: 'put',
    })
  });
  it('should dispatch DISAPPROVE_REQUEST when disapproveRequest is called', () => {
    const action = adminActions.disapproveRequest();
    expect(action).toEqual({
      type: types.DISAPPROVE_REQUEST,
      payload: 'put',
    })
  });
  it('should dispatch RESOLVE_REQUEST when resolveRequest is called', () => {
    const action = adminActions.resolveRequest();
    expect(action).toEqual({
      type: types.RESOLVE_REQUEST,
      payload: 'put',
    })
  });
  it('should dispatch DISAPPROVE_REQUEST when getRequestForAdmin is called', () => {
    const action = adminActions.getRequestForAdmin();
    expect(action).toEqual({
      type: types.GET_REQUEST_FOR_ADMIN,
      payload: 'get',
    })
  });
  it('should dispatch RESOLVE_REQUEST when trashRequest is called', () => {
    const action = adminActions.trashRequest();
    expect(action).toEqual({
      type: types.TRASH_REQUEST,
      payload: 'delete',
    })
  });
});
