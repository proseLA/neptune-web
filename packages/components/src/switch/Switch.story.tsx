import { useState } from 'react';

import Switch from './Switch';

export default {
  component: Switch,
  title: 'Switch',
};

export const Basic = () => {
  const [checked, setCheck] = useState(false);

  return (
    <div className="d-flex flex-column">
      <label id="labelID" htmlFor="switchId">
        A switch with a label
      </label>
      <Switch
        checked={checked}
        className="a-class-name"
        aria-labelledby="labelID"
        id="switchId"
        onClick={() => setCheck(!checked)}
      />

      <Switch
        checked={checked}
        className="a-class-name m-t-4"
        aria-label="I'm a switch without label"
        onClick={() => setCheck(!checked)}
      />
    </div>
  );
};
