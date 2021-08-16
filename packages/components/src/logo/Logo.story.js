import { boolean, select } from '@storybook/addon-knobs';

import Logo, { LogoType } from '.';

export default {
  component: Logo,
  title: 'Logo',
};

export const Basic = () => {
  const type = select('Type', [LogoType.WISE, LogoType.WISE_BUSINESS]);
  const inverse = boolean('Inverse', false);

  return (
    <div className={`${inverse && 'bg--dark'} p-a-3`}>
      <Logo type={type} inverse={inverse} />
    </div>
  );
};
