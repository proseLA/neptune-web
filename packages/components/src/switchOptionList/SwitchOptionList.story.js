import React, { useState } from 'react';

import SwitchOptionList from '.';
import SwitchOption from '../switchOption';

export default {
  component: SwitchOptionList,
  title: 'SwitchOptionList',
};

export const basic = () => {
  const [optionOneChecked, setOptionOneChecked] = useState(false);
  const [optionTwoChecked, setOptionTwoChecked] = useState(false);

  return (
    <SwitchOptionList>
      <SwitchOption
        id="switch-option-one"
        title="Switch One"
        onChange={setOptionOneChecked}
        checked={optionOneChecked}
      />
      <SwitchOption
        id="switch-option-two"
        title="Switch Two"
        onChange={setOptionTwoChecked}
        checked={optionTwoChecked}
      />
    </SwitchOptionList>
  );
};
