import Types from 'prop-types';

const contextModel = Types.oneOf(['neutral', 'warning', 'negative', 'positive']);

// TODO need to update these
const buttonTypes = Types.oneOf(['primary', 'secondary', 'positive', 'negative', 'link']);

const actionModel = Types.shape({
  title: Types.string.isRequired,
  url: Types.string,
  method: Types.oneOf(['GET', 'POST', 'PUT', 'PATCH']),
  disabled: Types.boolean,
  type: buttonTypes,
  // eslint-disable-next-line react/forbid-prop-types
  result: Types.object,
  exit: Types.boolean,
  $id: Types.string,
});

const optionModel = Types.shape({
  text: Types.string,
  action: actionModel.isRequired,
  icon: Types.string,
});

const definitionModel = Types.shape({
  label: Types.string.isRequired,
  value: Types.string.isRequired,
});

const itemModel = Types.shape({
  icon: Types.string,
  components: Types.arrayOf(Types.object),
});

const sizeModel = Types.oneOf(['xs', 'sm', 'md', 'lg', 'xl']);
const alignModel = Types.oneOf(['left', 'right', 'center']);
const marginModel = Types.oneOf(['xs', 'sm', 'md', 'lg', 'xl']);
const orientationModel = Types.oneOf(['horizontal', 'vertical']);

const componentTypes = Types.oneOf([
  'alert',
  'box',
  'button',
  'columns',
  'decision',
  'divider',
  'form',
  'heading',
  'info',
  'image',
  'paragraph',
  'review',
  'final',
]);

const componentModel = Types.shape({
  type: componentTypes.isRequired,
  text: Types.string,
  components: Types.arrayOf(Types.object),
  definitions: Types.arrayOf(definitionModel),
  options: Types.arrayOf(optionModel),
  items: Types.arrayOf(itemModel),
  size: sizeModel,
  margin: marginModel,
  context: contextModel,
  align: alignModel,
  action: actionModel,
});

export {
  actionModel,
  sizeModel,
  alignModel,
  marginModel,
  contextModel,
  orientationModel,
  optionModel,
  itemModel,
  componentModel,
};
