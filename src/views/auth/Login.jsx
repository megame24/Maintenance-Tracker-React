import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import LoginForm from '../../components/form/LoginForm';
import authActions from '../../actions/authActions';

/**
 * Login Component
 * @returns {null} null
 */
export class Login extends React.Component {
  /**
   * @returns {undefined}
   */
  constructor() {
    super();
    this.state = {
      formData: {
        password: '',
        usernameOrEmail: '',
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * @returns {undefined}
   */
  componentDidMount() {
    document.body.style.backgroundColor = '#e2e2e2';
  }

  /**
   * @returns {undefined}
   */
  componentWillUnmount() {
    document.body.style.backgroundColor = '#fff';
  }

  /**
   * handle change on form fields
   * @param {Object} event event object
   * @returns {undefined}
   */
  handleChange(event) {
    event.persist();
    this.setState(state => (
      {
        ...state,
        formData: {
          ...state.formData, [event.target.name]: event.target.value
        },
      }
    ));
  }

  /**
   * handle form submit
   * @param {Object} event event object
   * @returns {undefined}
   */
  handleSubmit(event) {
    event.preventDefault();
    const { login } = this.props;
    const { formData } = this.state;
    login(formData);
  }

  /**
   * render function
   * @returns {Function} jsx
   */
  render() {
    const { isLoading, errors } = this.props;
    const { formData } = this.state;
    return (
      <LoginForm
        isLoading={isLoading}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        formData={formData}
        errors={errors}
      />
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    statusCode: PropTypes.number
  }),
};

Login.defaultProps = {
  errors: {},
};

export const mapStateToProps = (state) => {
  const { isLoading, errors } = state.auth;
  return {
    isLoading,
    errors,
  };
};

export default connect(mapStateToProps, {
  login: authActions.login
})(Login);
