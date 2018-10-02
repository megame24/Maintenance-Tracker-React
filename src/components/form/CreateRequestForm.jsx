import React from 'react';
import { PropTypes } from 'prop-types';
import { Dimmer, Loader } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

const CreateRequestForm = (props) => {
  const {
    handleSubmit, title, description, type,
    handleChange, isLoading, errors, success
  } = props;
  return (
    <section id="make-request" className="min-height">
      <Dimmer
        page
        active={isLoading}
      >
        <Loader size="medium" />
      </Dimmer>
      <div className="container">
        {
          errors.message
          && (
            <div className="message error-message">
              {errors.message}
            </div>
          )
        }
        <div className="make-edit-request">
          <h2>Make a new request</h2>
          <hr />
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
                onClick={handleChange}
                value="maintenance"
                defaultChecked={type === 'maintenance'}
              />
              &nbsp;
              Maintenance
            </span>
            &nbsp; &nbsp;
            <span>
              <input
                type="radio"
                name="type"
                onClick={handleChange}
                value="repair"
                defaultChecked={type === 'repair'}
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
        </div>
      </div>
      {
        success && <Redirect to="/view-requests" />
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

export default CreateRequestForm;
