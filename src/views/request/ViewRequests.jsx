import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import requestActions from '../../actions/requestActions';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import generalActions from '../../actions/generalActions';
import { Table, NoRequests } from '../../components/helpers/ViewRequestsHelper';

/**
 * View requests component
 */
export class ViewRequests extends React.Component {
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
   * @return {undefined}
   */
  componentDidMount() {
    const { getUserRequests } = this.props;
    getUserRequests();
  }

  /**
   * @returns {undefined}
   */
  componentWillUnmount() {
    const { errors, clearErrors } = this.props;
    if (errors.message) clearErrors();
  }

  /**
   * @return {undefined}
   */
  render() {
    const { isLoading, errors, requests } = this.props;
    const { statusColor, statusMessage } = this.state;
    return (
      <section id="view-requests" className="min-height">
        <Loading isLoading={isLoading} />
        <div className="container">
          <ErrorMessage errors={errors} />
          <h2>All requests</h2>
          <hr />
          {
            requests.length ? (
              <Table
                statusColor={statusColor}
                statusMessage={statusMessage}
                requests={requests}
              />
            ) : <NoRequests />
          }
        </div>
      </section>
    );
  }
}

ViewRequests.propTypes = {
  clearErrors: PropTypes.func.isRequired,
  getUserRequests: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    statusCode: PropTypes.number
  }),
  isLoading: PropTypes.bool.isRequired,
  requests: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string
  })),
};

ViewRequests.defaultProps = {
  errors: {},
  requests: [],
};

export const mapStateToProps = (state) => {
  const { requests, isLoading, errors } = state.userRequests;
  return {
    requests,
    isLoading,
    errors,
  };
};

export default connect(mapStateToProps, {
  getUserRequests: requestActions.getUserRequests,
  clearErrors: generalActions.clearErrors,
})(ViewRequests);
