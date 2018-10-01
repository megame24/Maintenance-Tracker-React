import axiosInstance from '../../src/services/axiosInstance';

describe('Testing axiosInstance', () => {
  it('should create an axios instance when called', () => {
    const instance = axiosInstance();
    expect(instance).toEqual({
      baseURL: 'https://in-maintenance-tracker.herokuapp.com/api/v1',
      headers: { 'Content-Type': 'application/json', Authorization: '' }
    });
  });
});
