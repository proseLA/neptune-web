import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Freeze, Plus, Whatsapp } from '@transferwise/icons';

import { Priority, ControlType } from '../common';

import CircularButton from './CircularButton';

export default {
  component: CircularButton,
  title: 'CircularButton',
};

const icons = {
  plus: <Plus />,
  freeze: <Freeze />,
  whatsapp: <Whatsapp />,
};

export const Basic = () => {
  const icon = select('icon', ['freeze', 'plus', 'whatsapp'], 'freeze');
  const priority = select('priority', Object.values(Priority));
  const type = select('type', Object.values(ControlType), ControlType.PRIMARY);
  const disabled = boolean('disabled', false);
  const label = text('label', 'Button text');
  const background = select('theme', ['light', 'blue'], 'light');
  return (
    <div className={background === 'blue' ? 'bg--dark p-a-3' : ''}>
      <CircularButton
        icon={icons[icon]}
        priority={priority}
        type={type}
        disabled={disabled}
        onClick={action('Button Clicked')}
      >
        {label}
      </CircularButton>
    </div>
  );
};

export const variants = () => {
  const icon = select('icon', ['freeze', 'plus', 'whatsapp'], 'freeze');
  const disabled = boolean('disabled', false);
  const label = text('label', 'Button text');
  const background = select('theme', ['light', 'blue'], 'light');

  const commonProps = {
    label,
    className: 'm-r-2',
    disabled,
    icon: icons[icon],
    onClick: action('Button Clicked'),
  };

  return (
    <div className={background === 'blue' ? 'bg--dark p-a-3' : ''}>
      <div className="m-b-2">
        <div className="title-4 m-b-1">Accent</div>
        <CircularButton priority={Priority.PRIMARY} type={ControlType.ACCENT} {...commonProps}>
          {label}
        </CircularButton>
        <CircularButton priority={Priority.SECONDARY} type={ControlType.ACCENT} {...commonProps}>
          {label}
        </CircularButton>
      </div>
      <div className="m-b-2">
        <div className="title-4 m-b-1">Positive</div>
        <CircularButton priority={Priority.PRIMARY} type={ControlType.POSITIVE} {...commonProps}>
          {label}
        </CircularButton>

        <CircularButton priority={Priority.SECONDARY} type={ControlType.POSITIVE} {...commonProps}>
          {label}
        </CircularButton>
      </div>
      <div className="m-b-2">
        <div className="title-4 m-b-1">Negative</div>
        <CircularButton priority={Priority.PRIMARY} type={ControlType.NEGATIVE} {...commonProps}>
          {label}
        </CircularButton>
        <CircularButton priority={Priority.SECONDARY} type={ControlType.NEGATIVE} {...commonProps}>
          {label}
        </CircularButton>
      </div>
      <div className="m-b-2">
        <div className="title-4 m-b-1">Disabled</div>
        <CircularButton {...commonProps} disabled>
          {label}
        </CircularButton>
        <CircularButton {...commonProps} priority={Priority.SECONDARY} disabled>
          {label}
        </CircularButton>
      </div>
    </div>
  );
};
