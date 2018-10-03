import React from 'react';
import { PropTypes } from 'prop-types';

const ErrorMessage = ({ errors }) => (
  errors.message
    ? (
      <div className="message error-message">
        {errors.message}
      </div>
    ) : null
);

ErrorMessage.propTypes = {
  errors: PropTypes.shape({
    statusCode: PropTypes.number
  }),
};

ErrorMessage.defaultProps = {
  errors: {},
};

export default ErrorMessage;
