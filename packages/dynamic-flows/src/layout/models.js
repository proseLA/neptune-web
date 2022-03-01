import PropTypes from 'prop-types';

const contextModel = PropTypes.oneOf(['neutral', 'warning', 'negative', 'positive']);

// TODO need to update these
const buttonTypes = PropTypes.oneOf(['primary', 'secondary', 'positive', 'negative', 'link']);

const actionModel = PropTypes.shape({
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  method: PropTypes.oneOf(['GET', 'POST', 'PUT', 'PATCH']),
  disabled: PropTypes.boolean,
  type: buttonTypes,
  // eslint-disable-next-line react/forbid-prop-types
  result: PropTypes.object,
  exit: PropTypes.boolean,
  $id: PropTypes.string,
});

const optionModel = PropTypes.shape({
  text: PropTypes.string,
  action: actionModel.isRequired,
  icon: PropTypes.string,
});

const definitionModel = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
});

const itemModel = PropTypes.shape({
  icon: PropTypes.string,
  components: PropTypes.arrayOf(PropTypes.object),
});

const sizeModel = PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']);
const alignModel = PropTypes.oneOf(['left', 'right', 'center']);
const marginModel = PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']);
const orientationModel = PropTypes.oneOf(['horizontal', 'vertical']);

const componentTypes = PropTypes.oneOf([
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

const componentModel = PropTypes.shape({
  type: componentTypes.isRequired,
  text: PropTypes.string,
  components: PropTypes.arrayOf(PropTypes.object),
  definitions: PropTypes.arrayOf(definitionModel),
  options: PropTypes.arrayOf(optionModel),
  items: PropTypes.arrayOf(itemModel),
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
