import { getFileType } from '../getFileType';

export const isTypeValid = (file, rule, file64) => {
  if (!file || !rule) {
    return false;
  }

  const allowedTypes = rule.replace(/\s/g, '').split(',');
  const fileType = getFileType(file, file64);

  if (rule === '*' || allowedTypes.includes(fileType)) {
    return true;
  }

  return allowedTypes.some((type) => {
    const splittedRule = type.split('/');
    const typeAllowed = splittedRule[0];
    const extensionAllowed = splittedRule[1];

    if (extensionAllowed !== '*') {
      return false;
    }

    return fileType.includes(typeAllowed);
  });
};
