import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import adminActions from '../../actions/adminActions';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import generalActions from '../../actions/generalActions';
import { Table } from '../../components/helpers/DashboardHelper';

/**
 * Dashboard component
 */
export class Dashboard extends React.Component {
  /**
   * @returns {undefined}
   */
  constructor() {
    super();
    this.approveRequest = this.approveRequest.bind(this);
    this.disapproveRequest = this.disapproveRequest.bind(this);
    this.resolveRequest = this.resolveRequest.bind(this);
  }

  /**
   * @return {undefined}
   */
  componentDidMount() {
    const { getAllRequests } = this.props;
    getAllRequests();
  }

  /**
   * @returns {undefined}
   */
  componentWillUnmount() {
    const {
      errors, clearErrors, resolutionSuccess, resetSuccess,
      resolutionErrors,
    } = this.props;
    if (errors.message || resolutionErrors.message) clearErrors();
    if (resolutionSuccess) resetSuccess();
  }

  /**
   * @param {Object} prevProps previous props
   * @returns {undefined}
   */
  componentDidUpdate(prevProps) {
    const { resolutionSuccess, getAllRequests, resetSuccess } = this.props;
    if (resolutionSuccess !== prevProps.resolutionSuccess) {
      getAllRequests();
      resetSuccess();
    }
  }

  /**
   * Approve request
   * @param {Number} id request id
   * @returns {undefined}
   */
  approveRequest(id) {
    const { approveRequest } = this.props;
    return approveRequest(id, 'approve');
  }

  /**
   * Disapprove request
   * @param {Number} id request id
   * @returns {undefined}
   */
  disapproveRequest(id) {
    const { disapproveRequest } = this.props;
    return disapproveRequest(id, 'disapprove');
  }

  /**
   * Resolve request
   * @param {Number} id request id
   * @returns {undefined}
   */
  resolveRequest(id) {
    const { resolveRequest } = this.props;
    return resolveRequest(id, 'resolve');
  }

  /**
   * @return {undefined}
   */
  render() {
    const {
      isLoading, errors, requests,
      isLoadingResolution, resolutionErrors,
    } = this.props;
    return (
      <section id="admin-dashboard" className="min-height">
        <Loading isLoading={isLoading || isLoadingResolution} />
        <div className="container">
          <ErrorMessage errors={errors} />
          <ErrorMessage errors={resolutionErrors} />
          <div className="admin-dashboard">
            <h2>Manage requests</h2>
            <div className="clearfix" />
            <hr />
            <Table
              requests={requests}
              resolveRequest={this.resolveRequest}
              disapproveRequest={this.disapproveRequest}
              approveRequest={this.approveRequest}
            />
          </div>
        </div>
      </section>
    );
  }
}

Dashboard.propTypes = {
  getAllRequests: PropTypes.func.isRequired,
  approveRequest: PropTypes.func.isRequired,
  disapproveRequest: PropTypes.func.isRequired,
  resolveRequest: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  resetSuccess: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    statusCode: PropTypes.number
  }),
  isLoading: PropTypes.bool.isRequired,
  requests: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string
  })),
  isLoadingResolution: PropTypes.bool.isRequired,
  resolutionErrors: PropTypes.shape({
    statusCode: PropTypes.number
  }),
  resolutionSuccess: PropTypes.bool.isRequired,
};

Dashboard.defaultProps = {
  errors: {},
  requests: [],
  resolutionErrors: {},
};

export const mapStateToProps = ({
  allRequests: { isLoading, errors, requests },
  reqResolution: {
    isLoading: isLoadingResolution,
    errors: resolutionErrors,
    success: resolutionSuccess,
  }
}) => ({
  isLoading,
  errors,
  requests,
  isLoadingResolution,
  resolutionErrors,
  resolutionSuccess,
});

export default connect(mapStateToProps, {
  getAllRequests: adminActions.getAllRequests,
  clearErrors: generalActions.clearErrors,
  resetSuccess: generalActions.resetSuccess,
  approveRequest: adminActions.approveRequest,
  disapproveRequest: adminActions.disapproveRequest,
  resolveRequest: adminActions.resolveRequest,
})(Dashboard);
