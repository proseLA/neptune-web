import { Alert } from '@transferwise/components';
import PropTypes from 'prop-types';

import { contextModel, marginModel } from '../models';
import { getMarginBottom } from '../utils';

const legacy_mapContext = (context) => {
  switch (context) {
    case 'success':
      return 'positive';
    case 'failure':
      return 'negative';
    case 'warning':
      return 'warning';
    case 'info':
    case 'primary':
      return 'neutral';
    default:
      return context;
  }
};

const mapContextToAlertType = (context) => {
  if (!context || !['neutral', 'warning', 'negative', 'positive'].includes(context)) {
    return 'neutral';
  }
  return context;
};

const DynamicAlert = (props) => {
  const alert = props.component;

  const alertProps = {
    type: mapContextToAlertType(legacy_mapContext(alert.context)),
  };

  return (
    <Alert {...alertProps} className={getMarginBottom(alert.margin)} message={alert.markdown} />
  );
};

DynamicAlert.propTypes = {
  component: PropTypes.shape({
    markdown: PropTypes.string.isRequired,
    context: contextModel,
    margin: marginModel,
  }).isRequired,
};

export default DynamicAlert;
