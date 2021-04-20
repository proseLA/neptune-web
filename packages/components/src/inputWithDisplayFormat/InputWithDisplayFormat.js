import React from 'react';
import PropTypes from 'prop-types';
import WithDisplayFormat from '../withDisplayFormat';

const InputWithDisplayFormat = (props) => (
  <WithDisplayFormat {...props} render={(renderProps) => <input {...renderProps} />} />
);

InputWithDisplayFormat.propTypes = {
  displayPattern: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputWithDisplayFormat;
