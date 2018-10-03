import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';

const LoginForm = (props) => {
  const {
    handleSubmit, formData, handleChange,
    isLoading, errors,
  } = props;
  return (
    <section id="login">
      <Loading isLoading={isLoading} />
      <div className="container">
        <ErrorMessage errors={errors} />
        <div className="form">
          <div className="form-icon-container">
            <div className="center form-icon blue">
              <i className="icon ion-person" />
            </div>
          </div>
          <h1 className="center">Create Account</h1>
          <form id="LoginForm" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={formData.usernameOrEmail}
              className="form-input"
              type="text"
              name="usernameOrEmail"
              id="email"
              placeholder="Email or Username"
              required
            />
            <input
              onChange={handleChange}
              value={formData.password}
              className="form-input"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
            <input
              className="form-input btn btn-primary"
              type="submit"
              id="submit-btn"
              value="Login"
            />
          </form>
          <div className="form-footer center">
            <p>
              Not a member? &nbsp;
              <Link to="/signup" className="blue">Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

LoginForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    password: PropTypes.string.isRequired
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    statusCode: PropTypes.number
  }),
};

LoginForm.defaultProps = {
  errors: {},
};

export default LoginForm;
