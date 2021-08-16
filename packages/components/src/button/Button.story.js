import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

import { Type, Priority, ControlType, Size } from '../common';

import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const Basic = () => {
  const size = select('size', Object.values(Size), Size.SMALL);
  const type = select(
    'type',
    ['accent', 'positive', 'negative', 'primary', 'pay', 'secondary', 'danger', 'link'],
    'primary',
  );
  const priority = select('priority', Object.values(Priority), Priority.PRIMARY);
  const htmlType = select('htmlType', ['button', 'submit', 'reset'], 'button');
  const disabled = boolean('disabled', false);
  const loading = boolean('loading', false);
  const block = boolean('block', false);
  const buttonText = text('buttonText', 'Button text');
  const background = select('theme', ['light', 'blue'], 'light');

  return (
    <div className={background === 'blue' && 'bg--dark p-a-3'}>
      <Button
        size={size}
        type={type}
        priority={priority}
        disabled={disabled}
        loading={loading}
        block={block}
        htmlType={htmlType}
        onClick={action('Button Clicked')}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export const variants = () => {
  const size = select('size', Object.values(Size), Size.SMALL);
  const htmlType = select('htmlType', ['button', 'submit', 'reset'], 'button');
  const disabled = boolean('disabled', false);
  const loading = boolean('loading', false);
  const block = boolean('block', false);
  const buttonText = text('buttonText', 'Button text');
  const background = select('theme', ['light', 'blue'], 'light');

  const commonProps = {
    children: buttonText,
    className: 'm-r-2',
    size,
    disabled,
    loading,
    block,
    htmlType,
    onClick: action('Button clicked'),
  };

  return (
    <div className={background === 'blue' && 'bg--dark p-a-3'}>
      <div className="m-b-2">
        <div className="h4 m-b-1">Accent</div>
        <Button priority={Priority.PRIMARY} type={Type.ACCENT} {...commonProps} />
        <Button priority={Priority.SECONDARY} type={ControlType.ACCENT} {...commonProps} />
        <Button priority={Priority.TERTIARY} type={ControlType.ACCENT} {...commonProps} />
      </div>
      <div className="m-b-2">
        <div className="h4 m-b-1">Positive</div>
        <Button priority={Priority.PRIMARY} type={ControlType.POSITIVE} {...commonProps} />
        <Button priority={Priority.SECONDARY} type={ControlType.POSITIVE} {...commonProps} />
      </div>
      <div className="m-b-2">
        <div className="h4 m-b-1">Negative</div>
        <Button priority={Priority.PRIMARY} type={ControlType.NEGATIVE} {...commonProps} />
        <Button priority={Priority.SECONDARY} type={ControlType.NEGATIVE} {...commonProps} />
      </div>
      <div className="m-b-2">
        <div className="h4 m-b-1">Disabled</div>
        <Button {...commonProps} disabled />
        <Button priority={Priority.SECONDARY} {...commonProps} disabled />
        <Button priority={Priority.TERTIARY} {...commonProps} disabled />
      </div>
    </div>
  );
};

export const deprecated = () => {
  const size = select('size', Object.values(Size), Size.SMALL);
  const htmlType = select('htmlType', ['button', 'submit', 'reset'], 'button');
  const disabled = boolean('disabled', false);
  const loading = boolean('loading', false);
  const block = boolean('block', false);
  const buttonText = text('buttonText', 'Button text');

  const commonProps = {
    children: buttonText,
    className: 'm-r-2',
    size,
    disabled,
    loading,
    block,
    htmlType,
    onClick: action('Button Clicked'),
  };

  return (
    <>
      <div className="m-b-2 m-t-4">
        <div className="h3 m-b-1">DEPRECATED</div>
        <div className="h4 m-b-1">Primary</div>
        <Button type={Type.PRIMARY} {...commonProps} />
      </div>
      <div className="m-b-2">
        <div className="h4 m-b-1">Secondary</div>
        <Button type={Type.SECONDARY} {...commonProps} />
      </div>
      <div className="m-b-2">
        <div className="h4 m-b-1">Pay</div>
        <Button type={Type.PAY} {...commonProps} />
      </div>
      <div className="m-b-2">
        <div className="h4 m-b-1">Danger</div>
        <Button type={Type.DANGER} {...commonProps} />
      </div>
      <div className="m-b-2">
        <div className="h4 m-b-1">Link</div>
        <Button type={Type.LINK} {...commonProps} />
      </div>
    </>
  );
};
