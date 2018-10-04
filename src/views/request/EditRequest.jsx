import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import requestActions from '../../actions/requestActions';
import { EditRequestForm } from '../../components/form/RequestForms';
import generalActions from '../../actions/generalActions';

/**
 * EditRequest Component
 * @returns {null} null
 */
export class EditRequest extends React.Component {
  /**
   * @returns {undefined}
   */
  constructor() {
    super();
    this.id = null;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * @returns {undefined}
   */
  componentDidMount() {
    const { getRequest } = this.props;
    const urlArray = window.location.href.split('/');
    const id = urlArray[urlArray.length - 2];
    this.id = id;
    getRequest(this.id);
  }

  /**
   * @returns {undefined}
   */
  componentWillUnmount() {
    const {
      resetSuccess, success, errors, clearErrors,
    } = this.props;
    if (success) resetSuccess();
    if (errors.message) clearErrors();
  }

  /**
   * handle change on form fields
   * @param {Object} event event object
   * @returns {undefined}
   */
  handleChange = (event) => {
    event.persist();
    const { handleEditInputChange } = this.props;
    return handleEditInputChange(event);
  }

  /**
   * handle form submit
   * @param {Object} event event object
   * @returns {undefined}
   */
  handleSubmit(event) {
    event.preventDefault();
    const { editRequest, request } = this.props;
    return editRequest(this.id, request);
  }

  /**
   * render function
   * @returns {Function} jsx
   */
  render() {
    const {
      errors, isLoading, success,
      request: { title, description, type }
    } = this.props;
    return (
      <EditRequestForm
        formType="edit"
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

EditRequest.propTypes = {
  handleEditInputChange: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  editRequest: PropTypes.func.isRequired,
  getRequest: PropTypes.func.isRequired,
  resetSuccess: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    statusCode: PropTypes.number
  }),
  request: PropTypes.shape({
    title: PropTypes.string
  }),
  isLoading: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
};

EditRequest.defaultProps = {
  errors: {},
  request: {},
};

export const mapStateToProps = (state) => {
  const { errors, isLoading, success, request } = state.editRequest;
  return {
    errors,
    isLoading,
    success,
    request,
  };
};

export default connect(mapStateToProps, {
  editRequest: requestActions.editRequest,
  getRequest: requestActions.getRequest,
  resetSuccess: generalActions.resetSuccess,
  clearErrors: generalActions.clearErrors,
  handleEditInputChange: requestActions.handleEditInputChange,
})(EditRequest);
