import { Button } from '@transferwise/components';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { ArrayItemVariants, getListItemType } from '../../../common/schemaTypes/arraySchemaTypes';
import ArrayItemEdit from '../arrayItemEdit';
import ArrayItemSummary from '../arrayItemSummary';

import MultipleFileUploadSchema from './multipleFileUploadSchema';

const ArrayListSchema = (props) => {
  const { FILE } = ArrayItemVariants;
  const arrayItemType = getListItemType(props.schema);

  const [models, setModels] = useState([]);
  const [summaries, setSummaries] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const onChange = (index, newModel, triggerSchema, triggerModel) => {
    models[index] = newModel;

    const summary = summaries[index];

    if (triggerSchema.providesTitle) {
      summary.title = isOneOfConst(triggerSchema)
        ? findOneOfTitle(triggerSchema, newModel)
        : newModel;
    }
    if (triggerSchema.providesDescription) {
      summary.description = isOneOfConst(triggerSchema)
        ? findOneOfTitle(triggerSchema, newModel)
        : newModel;
    }

    // TODO icon

    summaries[index] = summary;

    setModels(models);
    setSummaries(summaries);
    setEditIndex(null);

    props.onChange(models, triggerSchema, triggerModel);
  };

  const onEdit = (index) => {
    setEditIndex(index);
  };

  if (arrayItemType === FILE) {
    return <MultipleFileUploadSchema {...props} />;
  }

  return (
    <div>
      {summaries.map((summary, index) => (
        <ArrayItemSummary key={summary} summary={summary} onEdit={() => onEdit(index)} />
      ))}
      <Button onClick={createNew}>Add new</Button>
      {editIndex !== null && (
        <ArrayItemEdit schema={props.schema.items} model={models[editIndex]} onChange={onChange} />
      )}
    </div>
  );
};

const isOneOfConst = (schema) => {
  return schema.oneOf && schema.oneOf[0].const;
};

const findOneOfTitle = (schema, value) => {
  return schema.oneOf.find((schema) => schema.const === value);
};

const createNew = () => {};

ArrayListSchema.propTypes = {
  schema: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string.isRequired,
    description: PropTypes.string,
    maxItems: PropTypes.number,
    minItems: PropTypes.number,
    addItemTitle: PropTypes.string,
    removeItemTitle: PropTypes.string,
    items: PropTypes.object.isRequired,
  }).isRequired,
  model: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.shape({}),
  ]),
  disabled: PropTypes.bool,
  errors: PropTypes.string,
  hideTitle: PropTypes.bool,
  locale: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  submitted: PropTypes.bool.isRequired,
  translations: PropTypes.shape({}),
};

ArrayListSchema.defaultProps = {
  translations: {},
  errors: null,
  required: false,
};

export default ArrayListSchema;
