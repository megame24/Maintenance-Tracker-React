import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import requestActions from '../../actions/requestActions';
import CreateRequestForm from '../../components/form/CreateRequestForm';

/**
 * CreateRequest Component
 * @returns {null} null
 */
export class CreateRequest extends React.Component {
  /**
   * @returns {undefined}
   */
  constructor() {
    super();
    this.state = {
      formData: {
        title: '',
        description: '',
        type: 'repair',
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * @returns {undefined}
   */
  componentWillUnmount() {
    const { resetCreateReqSucc, success } = this.props;
    if (success) resetCreateReqSucc();
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
    const { formData } = this.state;
    const { createRequest } = this.props;
    createRequest(formData);
  }

  /**
   * render function
   * @returns {Function} jsx
   */
  render() {
    const { formData: { title, description, type } } = this.state;
    const { errors, isLoading, success } = this.props;
    return (
      <CreateRequestForm
        title={title}
        description={description}
        type={type}
        errors={errors}
        isLoading={isLoading}
        success={success}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

CreateRequest.propTypes = {
  createRequest: PropTypes.func.isRequired,
  resetCreateReqSucc: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    statusCode: PropTypes.number
  }),
  isLoading: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
};

CreateRequest.defaultProps = {
  errors: {}
};

export const mapStateToProps = (state) => {
  const { errors, isLoading, success } = state.request;
  return {
    errors,
    isLoading,
    success,
  };
};

export default connect(mapStateToProps, {
  createRequest: requestActions.createRequest,
  resetCreateReqSucc: requestActions.resetCreateReqSucc,
})(CreateRequest);
