import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import requestActions from '../../actions/requestActions';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import {
  RequestDetail, AdminFeedbackAndCtrlBtns,
} from '../../components/helpers/RequestDetailsHelper';
import generalActions from '../../actions/generalActions';

/**
 * Request details component
 */
export class UserRequestDetails extends React.Component {
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
    };
    this.deleteRequest = this.deleteRequest.bind(this);
  }

  /**
   * @returns {undefined}
   */
  componentDidMount() {
    const { getRequest } = this.props;
    const urlArray = window.location.href.split('/');
    const id = urlArray.pop();
    getRequest(id);
  }

  /**
   * @returns {undefined}
   */
  componentWillUnmount() {
    const {
      resetDeleteReqSucc, deleteSuccess, errors, clearErrors,
      deleteErrors,
    } = this.props;
    if (deleteSuccess) resetDeleteReqSucc();
    if (errors.message || deleteErrors.message) clearErrors();
  }

  /**
   * Delete request
   * @param {Number} id request id
   * @returns {undefined}
   */
  deleteRequest(id) {
    const { deleteRequest } = this.props;
    return deleteRequest(id);
  }

  /**
   * @returns {undefined}
   */
  render() {
    const {
      request, isLoading, errors,
      deleteErrors, deleteSuccess, isLoadingDelete,
    } = this.props;
    const { statusColor, statusMessage } = this.state;
    return (
      <section className="user-request-detail min-height admin-request-detail">
        <Loading isLoading={isLoading || isLoadingDelete} />
        <div className="container">
          {
            errors.message || deleteErrors.message
              ? (
                <div>
                  <ErrorMessage errors={errors} />
                  <ErrorMessage errors={deleteErrors} />
                  <Link
                    to="/users/requests/all"
                    className="btn btn-primary-ghost"
                  >
                    All requests
                  </Link>
                </div>
              ) : (
                <div className="request-detail-parent">
                  <RequestDetail
                    request={request}
                    statusColor={statusColor}
                    statusMessage={statusMessage}
                  />
                  <hr />
                  <AdminFeedbackAndCtrlBtns
                    request={request}
                    deleteRequest={this.deleteRequest}
                  />
                </div>
              )
          }
        </div>
        {
          deleteSuccess && <Redirect to="/users/requests/all" />
        }
      </section>
    );
  }
}

UserRequestDetails.propTypes = {
  request: PropTypes.shape({
    title: PropTypes.string
  }),
  isLoading: PropTypes.bool.isRequired,
  isLoadingDelete: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    message: PropTypes.string
  }),
  deleteSuccess: PropTypes.bool.isRequired,
  deleteErrors: PropTypes.shape({
    message: PropTypes.string
  }),
  getRequest: PropTypes.func.isRequired,
  deleteRequest: PropTypes.func.isRequired,
  resetDeleteReqSucc: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

UserRequestDetails.defaultProps = {
  request: {},
  errors: {},
  deleteErrors: {},
};

export const mapStateToProps = (state) => {
  const { request, isLoading, errors } = state.request;
  const {
    success: deleteSuccess, isLoading: isLoadingDelete, errors: deleteErrors
  } = state.deleteRequest;
  return {
    request,
    isLoading,
    errors,
    deleteErrors,
    deleteSuccess,
    isLoadingDelete,
  };
};

export default connect(mapStateToProps, {
  getRequest: requestActions.getRequest,
  deleteRequest: requestActions.deleteRequest,
  resetDeleteReqSucc: requestActions.resetDeleteReqSucc,
  clearErrors: generalActions.clearErrors,
})(UserRequestDetails);
