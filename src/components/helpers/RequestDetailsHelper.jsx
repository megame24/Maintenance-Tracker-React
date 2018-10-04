import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export const RequestDetail = ({
  request, statusColor, statusMessage, userRole,
}) => (
  <div className="request-detail">
    <h2>{request.title}</h2>
    <p>{request.description}</p>
    {userRole === 'admin' && (
      <p>
        <strong>Requested by:</strong>
        &nbsp;
        {request.owner}
      </p>
    )}
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
  userRole: PropTypes.string,
  statusColor: PropTypes.shape({}).isRequired,
  statusMessage: PropTypes.shape({}).isRequired,
  request: PropTypes.shape({
    title: PropTypes.string
  }).isRequired,
};

RequestDetail.defaultProps = {
  userRole: 'user',
};

export const AdminFeedbackAndCtrlBtns = ({ request, deleteRequest }) => (
  <div>
    <h4>Feedback from an admin</h4>
    <div className="feedback">
      <p>{request.feedback}</p>
    </div>
    {request.status === 'pending' && (
      <span>
        <Link
          to={`/users/requests/${request.id}/edit`}
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
          onClick={() => deleteRequest(request.id)}
        >
          Delete&nbsp;
          <i className="icon ion-android-delete" />
        </a>
      )
    }
  </div>
);

AdminFeedbackAndCtrlBtns.propTypes = {
  deleteRequest: PropTypes.func.isRequired,
  request: PropTypes.shape({
    title: PropTypes.string
  }).isRequired,
};

export const AdminWorkPlace = ({
  request, trashRequest, handleChange, resolveRequest,
  approveRequest, disapproveRequest, feedback
}) => (
  <div>
    {(request.status === 'resolved'
      || request.status === 'disapproved')
      && (
        <a
          onClick={() => trashRequest(request.id)}
          id="trash"
          className="btn btn-danger"
        >
          Trash&nbsp;
          <i className="icon ion-android-delete" />
        </a>
      )}
    {request.status === 'approved' && (
      <div>
        <label htmlFor="feedback">Provide feedback</label>
        <textarea
          onChange={handleChange}
          value={feedback}
          name="feedback"
          id="feedback"
          className="form-input"
        />
        <input
          onClick={() => resolveRequest(request.id)}
          type="submit"
          id="resolve"
          className="btn btn-success form-input"
          value="Resolve"
        />
      </div>
    )}
    {request.status === 'pending' && (
      <div>
        <label htmlFor="feedback">Provide feedback</label>
        <textarea
          onChange={handleChange}
          value={feedback}
          name="feedback"
          id="feedback"
          className="form-input"
        />
        <input
          onClick={() => approveRequest(request.id)}
          type="submit"
          id="approve"
          className="btn btn-primary form-input"
          value="Approve"
        />
        <input
          onClick={() => disapproveRequest(request.id)}
          type="submit"
          id="disapprove"
          className="btn btn-danger form-input"
          value="Disapprove"
        />
      </div>
    )}
  </div>
);

AdminWorkPlace.propTypes = {
  handleChange: PropTypes.func.isRequired,
  feedback: PropTypes.string,
  approveRequest: PropTypes.func.isRequired,
  disapproveRequest: PropTypes.func.isRequired,
  resolveRequest: PropTypes.func.isRequired,
  request: PropTypes.shape({
    title: PropTypes.string
  }),
  trashRequest: PropTypes.func.isRequired,
};

AdminWorkPlace.defaultProps = {
  request: {},
  feedback: '',
};

export default {};
