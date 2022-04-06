import { select } from '@storybook/addon-knobs';

import Logo, { LogoType } from '.';

export default {
  component: Logo,
  title: 'Logo',
};

export const Basic = () => {
  const type = select('Type', [LogoType.WISE, LogoType.WISE_BUSINESS]);

  return (
    <div className="p-a-3">
      <Logo type={type} />
    </div>
  );
};
