import { isObject, isArray } from 'util';

const cleanValue = (value) => {
  let newValue = value;
  if (typeof value === 'object') {
    newValue = Object.values(value)[0];
  }
  return newValue && typeof newValue === 'string' ? newValue.replace(/"|'/gi, '') : newValue;
};

const parsePropsForTable = ({
  defaultValue,
  description,
  displayName,
  propName,
  required,
  type,
}) => {
  const getAllowedValues = (propertyType) => {
    switch (propertyType.name) {
      case 'arrayOf':
        if (propertyType.value.value) {
          return `{${Object.keys(propertyType.value.value).join(', ')}}`;
        }
        return `{${Object.keys(propertyType.value).join(', ')}}`;

      case 'enum':
        if (isArray(propertyType.value)) {
          return propertyType.value.map(({ value }) => cleanValue(value));
        }
        return cleanValue(propertyType.value) || '–';

      case 'union':
        if (isArray(propertyType.value)) {
          return propertyType.value.map(({ name }) => name);
        }
        return cleanValue(propertyType.value) || '–';

      case 'shape':
        if (isObject(propertyType.value)) {
          return JSON.stringify(
            Object.keys(propertyType.value).map((key) => ({
              [key]: cleanValue(propertyType.value[key].name),
            })),
          );
        }
        return cleanValue(propertyType.value) || '–';

      default:
        return cleanValue(propertyType.value) || '–';
    }
  };

  return {
    allowedValues: getAllowedValues(type),
    defaultValue: (defaultValue && cleanValue(defaultValue.value)) || '–',
    description,
    displayName,
    propName,
    required,
    type: type.name || '–',
  };
};

export default parsePropsForTable;
