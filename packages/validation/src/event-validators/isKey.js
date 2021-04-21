import { isArray } from '../type-validators';
import { keyMap } from '../common/keyMap';

const isKey = ({ keyType, event }) => {
  if (!keyType || !event) {
    return false;
  }

  const upperCaseKeyType = keyType.toUpperCase();
  const keyDef = keyMap[upperCaseKeyType];
  if (!keyDef) {
    return false;
  }

  const { key, keyCode } = event;

  if (key) {
    return isArray(keyDef.key) ? keyDef.key.indexOf(key) > -1 : key === keyDef.key;
  }

  return keyCode === keyDef.keyCode;
};

export default isKey;
