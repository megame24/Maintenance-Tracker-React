import React from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';

export const RequestForm = ({
  handleSubmit, title, description, type,
  handleChange,
}) => (
  <form id="make-request-form" onSubmit={handleSubmit}>
    <label htmlFor="title"> Request title</label>
    <input
      className="form-input"
      type="text"
      id="title"
      name="title"
      onChange={handleChange}
      value={title}
      placeholder="E.g. Broken side mirror"
      required
    />
    <label htmlFor="description">Request Description</label>
    <textarea
      className="form-input"
      type="text"
      id="description"
      name="description"
      value={description}
      onChange={handleChange}
      required
    />
    <label htmlFor="type">Request type</label>
    <span>
      <input
        type="radio"
        name="type"
        onChange={handleChange}
        value="maintenance"
        checked={type === 'maintenance'}
      />
      &nbsp;
      Maintenance
    </span>
    &nbsp; &nbsp;
    <span>
      <input
        type="radio"
        name="type"
        onChange={handleChange}
        value="repair"
        checked={type === 'repair'}
      />
      &nbsp;
      Repair
    </span>
    <hr />
    <input
      type="submit"
      id="submit-btn"
      value="Make Request"
      className="form-input btn btn-primary"
    />
  </form>
);

RequestForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
};

RequestForm.defaultProps = {
  title: '',
  description: '',
  type: 'repair',
};

export const CreateRequestForm = (props) => {
  const {
    handleSubmit, title, description, type,
    handleChange, isLoading, errors, success
  } = props;
  return (
    <section id="make-request" className="min-height">
      <Loading isLoading={isLoading} />
      <div className="container">
        <ErrorMessage errors={errors} />
        <div className="make-edit-request">
          <h2>Make a new request</h2>
          <hr />
          <RequestForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            title={title}
            description={description}
            type={type}
          />
        </div>
      </div>
      {
        success && <Redirect to="/users/requests/all" />
      }
    </section>
  );
};

CreateRequestForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    statusCode: PropTypes.number
  }),
};

CreateRequestForm.defaultProps = {
  errors: {},
};

export const EditRequestForm = (props) => {
  const {
    handleSubmit, title, description, type,
    handleChange, isLoading, errors, success
  } = props;
  return (
    <section id="make-request" className="min-height">
      <Loading isLoading={isLoading} />
      <div className="container">
        <ErrorMessage errors={errors} />
        <div className="make-edit-request">
          <h2>Make a new request</h2>
          <hr />
          <RequestForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            title={title}
            description={description}
            type={type}
          />
        </div>
      </div>
      {
        success && <Redirect to="/users/requests/all" />
      }
    </section>
  );
};

EditRequestForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  success: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    statusCode: PropTypes.number
  }),
};

EditRequestForm.defaultProps = {
  errors: {},
  title: '',
  description: '',
  type: 'repair',
};

export default {};
