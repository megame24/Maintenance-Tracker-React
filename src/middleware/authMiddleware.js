import decode from 'jwt-decode';
import types from '../actions/actionTypes';

/**
 * authentication middleware that parses responses
 * and stores the token on success
 * @returns {Function} next
 */
const authMiddleware = () => next => (action) => {
  if (!action) return;
  if (action.type === `${types.LOGIN}_SUCCESS`
    || action.type === `${types.SIGN_UP}_SUCCESS`) {
    const payloadData = action.payload.data;
    const { token } = payloadData;
    action.payload.token = token;
    localStorage.setItem('token', token);
    const decoded = decode(token);
    action.payload.user = {
      id: decoded.id,
      fullname: decoded.fullname,
      username: decoded.username,
      role: decoded.role,
    };
  }
  if (action.type === types.LOGOUT) {
    localStorage.removeItem('token');
  }
  return next(action);
};

export default authMiddleware;
