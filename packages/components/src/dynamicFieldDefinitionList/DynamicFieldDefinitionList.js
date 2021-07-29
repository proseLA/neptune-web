import PropTypes from 'prop-types';

import DefinitionList from '../definitionList';
import { prepFields } from '../common/requirements';
import createDefinitions from './utils/createDefinitions';

import { Layout } from '../common';

const DynamicFieldDefinitionList = ({ model, title, layout, fields }) => (
  <>
    {title && (
      <div className="m-t-1">
        <div className="p-t-3 h4">{title}</div>
      </div>
    )}

    <DefinitionList layout={layout} definitions={createDefinitions(prepFields(fields), model)} />
  </>
);

DynamicFieldDefinitionList.propTypes = {
  model: PropTypes.shape({}).isRequired,
  fields: PropTypes.shape({}).isRequired,
  title: PropTypes.string,
  layout: PropTypes.oneOf([
    'VERTICAL_TWO_COLUMN',
    'VERTICAL_ONE_COLUMN',
    'HORIZONTAL_JUSTIFIED',
    'HORIZONTAL_LEFT_ALIGNED',
  ]),
};

DynamicFieldDefinitionList.defaultProps = {
  title: null,
  layout: Layout.VERTICAL_TWO_COLUMN,
};

export default DynamicFieldDefinitionList;
