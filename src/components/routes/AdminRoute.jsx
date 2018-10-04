import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const AdminRoute = ({
  token, component: Component, role, ...rest
}) => (
  <Route
    {...rest}
    render={
      props => (
        token && role === 'admin' ? <Component {...props} />
          : <Redirect to="/users/requests/all" />
      )}
  />
);
export const mapStateToProps = (state) => {
  const { token, user: { role } } = state.auth;
  return {
    token,
    role,
  };
};
AdminRoute.propTypes = {
  token: PropTypes.string,
  component: PropTypes.func.isRequired,
  role: PropTypes.string,
};
AdminRoute.defaultProps = {
  token: '',
  role: '',
};

export default connect(mapStateToProps)(AdminRoute);
