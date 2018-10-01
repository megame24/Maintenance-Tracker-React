import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import SignupForm from '../../components/form/SignupForm';
import authActions from '../../actions/authActions';

/**
 * Signup Component
 * @returns {null} null
 */
export class Signup extends React.Component {
  /**
   * @returns {undefined}
   */
  constructor() {
    super();
    this.state = {
      formData: {
        fullname: '',
        password: '',
        username: '',
        email: '',
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
    const { signup } = this.props;
    const { formData } = this.state;
    signup(formData);
  }

  /**
   * render function
   * @returns {Function} jsx
   */
  render() {
    const { isLoading, errors } = this.props;
    const { formData } = this.state;
    return (
      <SignupForm
        isLoading={isLoading}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        formData={formData}
        errors={errors}
      />
    );
  }
}

Signup.propTypes = {
  signup: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    statusCode: PropTypes.number
  }),
};

Signup.defaultProps = {
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
  signup: authActions.signup
})(Signup);
