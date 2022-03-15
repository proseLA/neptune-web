import { Button } from '@transferwise/components';
import PropTypes from 'prop-types';

import GenericSchema from '../../genericSchema';

const ArrayItemEdit = (props) => {
  return (
    <div>
      <GenericSchema {...props} />
      <Button onClick={props.onChange}>Save</Button>
    </div>
  );
};

ArrayItemEdit.propTypes = {
  schema: PropTypes.shape({
    type: PropTypes.oneOf(['object']).isRequired,
    alert: PropTypes.shape({
      context: PropTypes.string,
      markdown: PropTypes.string,
    }),
    properties: PropTypes.shape({}).isRequired,
    required: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    description: PropTypes.string,
    width: PropTypes.oneOf(['sm', 'md', 'lg']),
    displayOrder: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  model: PropTypes.shape({}),
  errors: PropTypes.shape({}),
  locale: PropTypes.string,
  translations: PropTypes.shape({}),
  onChange: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
  hideTitle: PropTypes.bool,
  disabled: PropTypes.bool,
  onPersistAsync: PropTypes.func.isRequired,
};

ArrayItemEdit.defaultProps = {
  model: null,
  errors: null,
  locale: 'en-GB',
  translations: {},
  hideTitle: false,
  disabled: false,
};

export default ArrayItemEdit;
