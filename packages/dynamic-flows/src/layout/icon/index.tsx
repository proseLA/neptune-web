import * as icons from '@transferwise/icons';
import React from 'react';

type Props = {
  type: string;
};

const DynamicIcon = (props: Props) => {
  const iconName = toCapitalisedCamelCase(props.type);

  if (!Object.keys(icons).includes(iconName)) {
    return <></>;
  }

  const Icon = (icons as Record<string, React.FC>)[iconName];

  return <Icon />;
};

function toCapitalisedCamelCase(value: string): string {
  return value.split('-').map(capitaliseFirstChar).join('');
}

function capitaliseFirstChar(value: string): string {
  return `${value[0]?.toUpperCase()}${value.slice(1)}`;
}

export default DynamicIcon;
