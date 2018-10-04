import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export const TitleColumn = ({ request }) => (
  <td className="dark-blue table-link">
    <Link to={`/admin/requests/${request.id}`}>
      {request.title}
    </Link>
  </td>
);

TitleColumn.propTypes = {
  request: PropTypes.shape({
    title: PropTypes.string
  }).isRequired
};

export const ApproveAndDisapproveColumn = ({
  request, approveRequest, disapproveRequest
}) => (
  <td>
    {request.status === 'pending' && (
      <span>
        <a
          onClick={() => approveRequest(request.id)}
          className="approve btn btn-small btn-primary"
        >
          Approve
        </a>
        &nbsp;&nbsp;&nbsp;
        <a
          onClick={() => disapproveRequest(request.id)}
          className="disapprove
          btn btn-small btn-danger"
        >
          Disapprove
        </a>
      </span>
    )}
    {(request.status === 'approved'
      || request.status === 'resolved') && 'Approved'}
    {request.status === 'disapproved' && 'Disapproved'}
  </td>
);

ApproveAndDisapproveColumn.propTypes = {
  request: PropTypes.shape({
    title: PropTypes.string
  }).isRequired,
  approveRequest: PropTypes.func.isRequired,
  disapproveRequest: PropTypes.func.isRequired,
};

export const ResolveColumn = ({ request, resolveRequest }) => (
  <td>
    {request.status === 'approved' && (
      <a
        onClick={() => resolveRequest(request.id)}
        className="resolve btn btn-small btn-success"
      >
        Resolve
      </a>
    )}
    {request.status === 'resolved' && 'Resolved'}
  </td>
);

ResolveColumn.propTypes = {
  request: PropTypes.shape({
    title: PropTypes.string
  }).isRequired,
  resolveRequest: PropTypes.func.isRequired,
};

export const Table = ({
  requests, approveRequest, disapproveRequest, resolveRequest,
}) => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th className="table-not-mobile">Type</th>
        <th>Approve / Disapprove</th>
        <th>Resolve</th>
      </tr>
    </thead>
    <tbody id="table-body">
      {requests
        .map(request => (
          <tr key={request.id}>
            <TitleColumn request={request} />
            <td className="table-not-mobile">{request.type}</td>
            <ApproveAndDisapproveColumn
              request={request}
              approveRequest={approveRequest}
              disapproveRequest={disapproveRequest}
            />
            <ResolveColumn
              request={request}
              resolveRequest={resolveRequest}
            />
          </tr>
        ))}
    </tbody>
  </table>
);

Table.propTypes = {
  requests: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string
  })),
  approveRequest: PropTypes.func.isRequired,
  disapproveRequest: PropTypes.func.isRequired,
  resolveRequest: PropTypes.func.isRequired,
};

Table.defaultProps = {
  requests: {}
};

export default {};
