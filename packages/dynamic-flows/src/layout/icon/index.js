import * as icons from '@transferwise/icons';
import Types from 'prop-types';

const DynamicIcon = (props) => {
  const iconName = `${props.type[0]?.toUpperCase()}${props.type.slice(1)}`;

  if (!Object.keys(icons).includes(iconName)) {
    return <></>;
  }

  const Icon = icons[iconName];

  return <Icon />;
};

DynamicIcon.propTypes = {
  type: Types.string.isRequired,
};

DynamicIcon.defaultProps = {
  type: 'transferwise',
};

export default DynamicIcon;
