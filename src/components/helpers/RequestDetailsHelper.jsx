import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export const RequestDetail = ({ request, statusColor, statusMessage }) => (
  <div className="request-detail">
    <h2>{request.title}</h2>
    <p>{request.description}</p>
    <p>
      <strong>Request date:</strong>
      &nbsp;
      {new Date(Number(request.date)).toDateString()}
    </p>
    <div
      className={`status ${statusColor[request.status]}`}
    >
      {statusMessage[request.status]}
    </div>
    <div className="request-type">{request.type}</div>
  </div>
);

RequestDetail.propTypes = {
  statusColor: PropTypes.shape({}).isRequired,
  statusMessage: PropTypes.shape({}).isRequired,
  request: PropTypes.shape({
    title: PropTypes.string
  }).isRequired,
};

export const AdminFeedbackAndCtrlBtns = ({ request }) => (
  <div>
    <h4>Feedback from an admin</h4>
    <div className="feedback">
      <p>{request.feedback}</p>
    </div>
    {request.status === 'pending' && (
      <span>
        <Link
          to={`/users/requests/edit/${request.id}`}
          className="btn btn-tertiary"
        >
          Edit&nbsp;
          <i className="icon ion-edit" />
        </Link>
        &nbsp;&nbsp;
      </span>
    )}
    {
      (request.status === 'resolved'
        || request.status === 'disapproved'
        || request.status === 'pending')
      && (
        <a
          id="delete"
          className="btn btn-danger"
        >
          Delete&nbsp;
          <i className="icon ion-android-delete" />
        </a>
      )
    }
  </div>
);

AdminFeedbackAndCtrlBtns.propTypes = {
  request: PropTypes.shape({
    title: PropTypes.string
  }).isRequired,
};

export default {};
