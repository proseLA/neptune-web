import { text, select } from '@storybook/addon-knobs';

import Avatar, { AvatarType } from '../avatar';
import { Size, Theme } from '../common';

import Badge from './Badge';

export default {
  component: Badge,
  title: 'Badge',
  excludeStories: ['ExampleBadgeCss'],
};

export const ExampleBadgeCss = {
  background: 'var(--color-positive)',
  width: '100%',
  height: '100%',
  color: 'white',
  fontSize: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const Basic = () => {
  const BadgeInnerText = text('Badge Inner Text', 'Content');
  const BadgeText = text('BadgeText', 'B');
  const border = select('Border', [null, Theme.LIGHT, Theme.DARK]);
  const size = select('Size', [null, Size.SMALL, Size.MEDIUM, Size.LARGE]);

  return (
    <Badge badge={<div style={ExampleBadgeCss}>{BadgeText}</div>} border={border} size={size}>
      <div style={{ background: 'var(--color-secondary)', color: 'white', padding: '0.5em 1em' }}>
        {BadgeInnerText}
      </div>
    </Badge>
  );
};

export const avatar = () => {
  const BadgeText = text('BadgeText', 'B');
  const border = select('Border', [null, Theme.LIGHT, Theme.DARK]);
  const size = select('Size', [null, Size.SMALL, Size.MEDIUM, Size.LARGE]);

  return (
    <Badge badge={<div style={ExampleBadgeCss}>{BadgeText}</div>} border={border} size={size}>
      <Avatar type={AvatarType.INITIALS} size={Size.LARGE}>
        AA
      </Avatar>
    </Badge>
  );
};
