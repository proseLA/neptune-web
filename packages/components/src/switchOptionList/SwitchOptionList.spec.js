import React from 'react';
import { render } from '@testing-library/react';

import SwitchOptionList from '.';
import SwitchOption from '../navigationOption';

describe('SwitchOptionList', () => {
  it('renders the children in a list', () => {
    const { container } = render(
      <SwitchOptionList>
        <SwitchOption title="1" />
        <SwitchOption title="2" />
      </SwitchOptionList>,
    );

    expect(container.querySelectorAll('li')).toHaveLength(2);
  });
});
