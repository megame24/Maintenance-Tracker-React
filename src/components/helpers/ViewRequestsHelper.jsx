import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export const TableRow = ({ request, statusColor, statusMessage }) => (
  <tr>
    <td className="dark-blue table-link">
      <Link to={`/users/requests/${request.id}`}>
        {request.title}
      </Link>
    </td>
    <td>{request.type}</td>
    <td
      className={statusColor[request.status]}
    >
      {statusMessage[request.status]}
    </td>
  </tr>
);

TableRow.propTypes = {
  statusColor: PropTypes.shape({}).isRequired,
  statusMessage: PropTypes.shape({}).isRequired,
  request: PropTypes.shape({
    title: PropTypes.string
  }).isRequired,
};

export const Table = ({ requests, statusColor, statusMessage }) => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Type</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody id="table-body">
      {
        requests
          .map(request => (
            <TableRow
              key={request.id}
              request={request}
              statusColor={statusColor}
              statusMessage={statusMessage}
            />
          ))
      }
    </tbody>
  </table>
);

Table.propTypes = {
  statusColor: PropTypes.shape({}).isRequired,
  statusMessage: PropTypes.shape({}).isRequired,
  requests: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string
  })),
};

Table.defaultProps = {
  requests: [],
};

export const NoRequests = () => (
  <div className="no-requests">
    <i className="ion-plus-circled icon" />
    <br />
    <br />
    <p>
      You have no requests at the moment,
      <Link
        to="/users/requests/create"
        className="btn btn-primary btn-small"
      >
        click here
      </Link>
      to make a request
    </p>
  </div>
);

export default {};
