import { useState } from 'react';

function generateRandomId() {
  return Math.floor(Math.random() * 10000000);
}

export const useUniqueId = (prefix) => {
  const prefixString = prefix ? `${prefix}-` : '';
  const [id] = useState(() => `${prefixString}${generateRandomId()}`);
  return id;
};
