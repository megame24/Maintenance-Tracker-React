import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';

const SignupForm = (props) => {
  const {
    handleSubmit, formData, handleChange,
    isLoading, errors,
  } = props;
  return (
    <section id="register">
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
          <form id="signupForm" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={formData.name}
              className="form-input"
              name="fullname"
              type="text"
              id="name"
              placeholder="Full Name"
              required
            />
            <input
              onChange={handleChange}
              value={formData.email}
              className="form-input"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <input
              onChange={handleChange}
              value={formData.username}
              className="form-input"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
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
              value="Create Account"
            />
          </form>
          <div className="form-footer center">
            <p>
              Already a member? &nbsp;
              <Link to="/login" className="blue">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

SignupForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    email: PropTypes.string.isRequired
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    statusCode: PropTypes.number
  }),
};

SignupForm.defaultProps = {
  errors: {},
};

export default SignupForm;
