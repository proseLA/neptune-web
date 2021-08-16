import PropTypes from 'prop-types';

import WithDisplayFormat from '../withDisplayFormat';

const TextareaWithDisplayFormat = (props) => (
  <WithDisplayFormat {...props} render={(renderProps) => <textarea {...renderProps} />} />
);

TextareaWithDisplayFormat.propTypes = {
  displayPattern: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextareaWithDisplayFormat;
