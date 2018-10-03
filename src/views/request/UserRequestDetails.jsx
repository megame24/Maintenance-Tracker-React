import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import requestActions from '../../actions/requestActions';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import {
  RequestDetail, AdminFeedbackAndCtrlBtns,
} from '../../components/helpers/RequestDetailsHelper';

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
  render() {
    const { request, isLoading, errors } = this.props;
    const { statusColor, statusMessage } = this.state;
    return (
      <section className="user-request-detail min-height admin-request-detail">
        <Loading isLoading={isLoading} />
        <div className="container">
          {
            errors.message
              ? (
                <div>
                  <ErrorMessage errors={errors} />
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
                  <AdminFeedbackAndCtrlBtns request={request} />
                </div>
              )
          }
        </div>
      </section>
    );
  }
}

UserRequestDetails.propTypes = {
  request: PropTypes.shape({
    title: PropTypes.string
  }),
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    message: PropTypes.string
  }),
  getRequest: PropTypes.func.isRequired,
};

UserRequestDetails.defaultProps = {
  request: {},
  errors: {},
};

export const mapStateToProps = (state) => {
  const { request, isLoading, errors } = state.request;
  return {
    request,
    isLoading,
    errors,
  };
};

export default connect(mapStateToProps, {
  getRequest: requestActions.getRequest,
})(UserRequestDetails);
