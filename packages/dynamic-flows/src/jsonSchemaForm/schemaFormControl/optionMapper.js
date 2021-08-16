import { Avatar, AvatarType } from '@transferwise/components';
import { Bank } from '@transferwise/icons';
import { isNull, isUndefined } from '@transferwise/neptune-validation';

import { getCurrencyFlag } from './availableCurrencyFlags';

export const mapConstSchemaToOption = (schema) => {
  return {
    label: schema.title,
    value: !isUndefined(schema.const) ? schema.const : schema.enum[0],
    ...getOptionDescription(schema.title, schema.description),
    ...mapIcon(schema.icon),
    ...mapCurrency(schema.icon),
    ...mapAvatar(schema.image),
    ...getDisabled(schema.disabled),
  };
};

const mapCurrency = (icon) => (icon ? getCurrencyFlag(icon.name) : null);

export const mapIcon = (icon) => {
  if (icon?.name === 'bank') {
    return {
      avatar: (
        <Avatar type={AvatarType.ICON}>
          <Bank />
        </Avatar>
      ),
    };
  }
  return null;
};

export const mapAvatar = (image) => {
  return image && image.url
    ? {
        avatar: (
          <Avatar type={AvatarType.THUMBNAIL}>
            <img src={image.url} alt="User avatar" />
          </Avatar>
        ),
      }
    : null;
};

const getOptionDescription = (title, description) => {
  if (title && description) {
    const keyForDescription = (title + description).length > 30 ? 'secondary' : 'note';
    return { [keyForDescription]: description };
  }
  return undefined;
};

const getDisabled = (disabled) => {
  if (!isUndefined(disabled) && !isNull(disabled)) {
    return { disabled };
  }
  return undefined;
};
