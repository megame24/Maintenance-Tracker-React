import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const UserRoute = ({
  token, component: Component, role, ...rest
}) => (
  <Route
    {...rest}
    render={
      props => (
        token && role === 'user' ? <Component {...props} />
          : <Redirect to="/" />
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
UserRoute.propTypes = {
  token: PropTypes.string,
  component: PropTypes.func.isRequired,
  role: PropTypes.string,
};
UserRoute.defaultProps = {
  token: '',
  role: '',
};

export default connect(mapStateToProps)(UserRoute);
