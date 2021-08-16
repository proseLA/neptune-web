import { keyMap } from '../common/keyMap';
import { isArray } from '../type-validators';

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
    return isArray(keyDef.key) ? keyDef.key.includes(key) : key === keyDef.key;
  }

  return keyCode === keyDef.keyCode;
};

export default isKey;
