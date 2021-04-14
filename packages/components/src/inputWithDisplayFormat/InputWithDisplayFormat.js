import React from 'react';
import PropTypes from 'prop-types';
import WithDisplayFormat from '../withDisplayFormat';
import { useDirection } from '../common/hooks';

const InputWithDisplayFormat = (props) => {
  const { isRTL } = useDirection();
  const alignRight = isRTL && 'text-xs-right';
  return (
    <WithDisplayFormat
      {...props}
      render={(renderProps) => <input {...renderProps} />}
      className={alignRight}
    />
  );
};

InputWithDisplayFormat.propTypes = {
  displayPattern: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputWithDisplayFormat;
