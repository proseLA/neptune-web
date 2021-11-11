import PropTypes from 'prop-types';

import { Layout } from '../common';
import { prepFields } from '../common/requirements';
import DefinitionList from '../definitionList';

import createDefinitions from './utils/createDefinitions';

const DynamicFieldDefinitionList = ({ model, title, layout, fields }) => (
  <>
    {title && (
      <div className="m-t-1">
        <div className="p-t-3 title-4">{title}</div>
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
