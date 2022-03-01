import { Markdown } from '@transferwise/components';
import PropTypes from 'prop-types';

import { marginModel } from '../models';
import { getTextAlignmentAndMargin } from '../utils';

const DynamicInfo = ({ component }) => {
  return (
    <div className={getTextAlignmentAndMargin(component)}>
      <Markdown>{component.markdown}</Markdown>
    </div>
  );
};

DynamicInfo.propTypes = {
  component: PropTypes.shape({
    markdown: PropTypes.string.isRequired,
    margin: marginModel,
  }).isRequired,
};

export default DynamicInfo;
