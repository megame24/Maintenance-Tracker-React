import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import {
  RequestDetail, AdminWorkPlace,
} from '../../components/helpers/RequestDetailsHelper';
import generalActions from '../../actions/generalActions';
import adminActions from '../../actions/adminActions';

/**
 * Request details component
 */
export class AdminRequestDetails extends React.Component {
  /**
   * @return {undefined}
   */
  constructor() {
    super();
    this.state = {
      statusColor: {
        resolved: 'background-success',
        approved: 'background-primary',
        disapproved: 'background-danger',
        pending: 'background-tertiary',
      },
      statusMessage: {
        resolved: 'Resolved',
        approved: 'Work in progress',
        disapproved: 'Disapproved',
        pending: 'Approval pending',
      },
      formData: {
        feedback: '',
      },
    };
    this.id = null;
    this.trashRequest = this.trashRequest.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resolveRequest = this.resolveRequest.bind(this);
    this.approveRequest = this.approveRequest.bind(this);
    this.disapproveRequest = this.disapproveRequest.bind(this);
  }

  /**
   * @returns {undefined}
   */
  componentDidMount() {
    const { getRequestForAdmin } = this.props;
    const urlArray = window.location.href.split('/');
    const id = urlArray.pop();
    this.id = id;
    getRequestForAdmin(this.id);
  }

  /**
   * @returns {undefined}
   */
  componentWillUnmount() {
    const {
      resetSuccess, resolutionSuccess, errors, clearErrors,
      resolutionErrors, trashSuccess, trashErrors
    } = this.props;
    if (resolutionSuccess || trashSuccess) resetSuccess();
    if (errors.message
      || resolutionErrors.message
      || trashErrors) clearErrors();
  }

  /**
   * @param {Object} prevProps previous props
   * @returns {undefined}
   */
  componentDidUpdate(prevProps) {
    const { resolutionSuccess, getRequestForAdmin, resetSuccess } = this.props;
    if (resolutionSuccess !== prevProps.resolutionSuccess) {
      getRequestForAdmin(this.id);
      resetSuccess();
    }
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
   * Approve request
   * @param {Number} id request id
   * @returns {undefined}
   */
  approveRequest(id) {
    this.setState(state => ({
      ...state,
      formData: {
        ...state.formData,
        feedback: '',
      }
    }));
    const { approveRequest } = this.props;
    const { formData: { feedback } } = this.state;
    return approveRequest(id, {
      status: 'approve',
      feedback,
    });
  }

  /**
   * Disapprove request
   * @param {Number} id request id
   * @returns {undefined}
   */
  disapproveRequest(id) {
    this.setState(state => ({
      ...state,
      formData: {
        ...state.formData,
        feedback: '',
      }
    }));
    const { disapproveRequest } = this.props;
    const { formData: { feedback } } = this.state;
    return disapproveRequest(id, {
      status: 'disapprove',
      feedback,
    });
  }

  /**
   * Resolve request
   * @param {Number} id request id
   * @returns {undefined}
   */
  resolveRequest(id) {
    const { resolveRequest } = this.props;
    const { formData: { feedback } } = this.state;
    return resolveRequest(id, {
      status: 'resolve',
      feedback,
    });
  }

  /**
   * Delete request
   * @param {Number} id request id
   * @returns {undefined}
   */
  trashRequest(id) {
    const { trashRequest } = this.props;
    return trashRequest(id);
  }

  /**
   * @returns {undefined}
   */
  render() {
    const {
      request, isLoading, errors,
      resolutionErrors, trashSuccess, isLoadingResolution,
      trashErrors, isLoadingTrash,
    } = this.props;
    const { statusColor, statusMessage, formData: { feedback } } = this.state;
    return (
      <section className="min-height admin-request-detail">
        <Loading
          isLoading={
            isLoading || isLoadingResolution || isLoadingTrash
          }
        />
        <div className="container">
          {
            errors.message || resolutionErrors.message
            || trashErrors.message
              ? (
                <div>
                  <ErrorMessage errors={errors} />
                  <ErrorMessage errors={resolutionErrors} />
                  <ErrorMessage errors={trashErrors} />
                  <Link
                    to="/admin/dashboard"
                    className="btn btn-primary-ghost"
                  >
                    Dashboard
                  </Link>
                </div>
              ) : (
                <div className="request-detail-parent">
                  <RequestDetail
                    userRole="admin"
                    request={request}
                    statusColor={statusColor}
                    statusMessage={statusMessage}
                  />
                  <hr />
                  <AdminWorkPlace
                    request={request}
                    trashRequest={this.trashRequest}
                    handleChange={this.handleChange}
                    resolveRequest={this.resolveRequest}
                    approveRequest={this.approveRequest}
                    disapproveRequest={this.disapproveRequest}
                    feedback={feedback}
                  />
                </div>
              )
          }
        </div>
        {
          trashSuccess && <Redirect to="/admin/dashboard" />
        }
      </section>
    );
  }
}

AdminRequestDetails.propTypes = {
  approveRequest: PropTypes.func.isRequired,
  disapproveRequest: PropTypes.func.isRequired,
  resolveRequest: PropTypes.func.isRequired,
  request: PropTypes.shape({
    title: PropTypes.string
  }),
  isLoading: PropTypes.bool.isRequired,
  isLoadingResolution: PropTypes.bool.isRequired,
  isLoadingTrash: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    message: PropTypes.string
  }),
  resolutionSuccess: PropTypes.bool.isRequired,
  trashSuccess: PropTypes.bool.isRequired,
  resolutionErrors: PropTypes.shape({
    message: PropTypes.string
  }),
  trashErrors: PropTypes.shape({
    message: PropTypes.string
  }),
  getRequestForAdmin: PropTypes.func.isRequired,
  trashRequest: PropTypes.func.isRequired,
  resetSuccess: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

AdminRequestDetails.defaultProps = {
  request: {},
  errors: {},
  resolutionErrors: {},
  trashErrors: {},
};

export const mapStateToProps = (state) => {
  const { request, isLoading, errors } = state.request;
  const {
    success: resolutionSuccess,
    isLoading: isLoadingResolution,
    errors: resolutionErrors,
  } = state.reqResolution;
  const {
    success: trashSuccess,
    isLoading: isLoadingTrash,
    errors: trashErrors,
  } = state.trashRequest;
  return {
    request,
    isLoading,
    errors,
    resolutionErrors,
    resolutionSuccess,
    isLoadingResolution,
    trashSuccess,
    trashErrors,
    isLoadingTrash,
  };
};

export default connect(mapStateToProps, {
  getRequestForAdmin: adminActions.getRequestForAdmin,
  trashRequest: adminActions.trashRequest,
  approveRequest: adminActions.approveRequest,
  disapproveRequest: adminActions.disapproveRequest,
  resolveRequest: adminActions.resolveRequest,
  resetSuccess: generalActions.resetSuccess,
  clearErrors: generalActions.clearErrors,
})(AdminRequestDetails);
