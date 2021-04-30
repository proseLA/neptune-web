import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Profile as ProfileIcon, Briefcase as BriefcaseIcon } from '@transferwise/icons';
import Avatar, { AvatarType } from '../avatar';
import Badge from '../badge';
import { ProfileType, Size } from '../common';

const OptionalBadge = ({ url, children, ...rest }) =>
  url ? (
    <Badge badge={<img src={url} alt="" />} {...rest}>
      {children}
    </Badge>
  ) : (
    children
  );

OptionalBadge.propTypes = {
  url: PropTypes.string,
  children: PropTypes.node.isRequired,
};

OptionalBadge.defaultProps = {
  url: undefined,
};

const AvatarWrapper = ({ url, profileType, badgeUrl, name, avatarProps, badgeProps }) => {
  const [hasImageLoadError, setImageLoadError] = useState(false);
  const isBusinessProfile = profileType === ProfileType.BUSINESS;

  // Reset the errored state when url changes
  useEffect(() => setImageLoadError(false), [url]);

  const getAvatarProps = () => {
    if (url && !hasImageLoadError) {
      return {
        type: AvatarType.THUMBNAIL,
        children: <img src={url} alt="avatar" onError={() => setImageLoadError(true)} />,
        ...avatarProps,
      };
    }
    if (profileType) {
      return {
        type: AvatarType.ICON,
        children: isBusinessProfile ? <BriefcaseIcon /> : <ProfileIcon />,
        ...avatarProps,
      };
    }
    if (name) {
      return {
        type: AvatarType.INITIALS,
        children: <small>{getInitials(name)}</small>,
        ...avatarProps,
      };
    }
    return {
      type: AvatarType.ICON,
      children: <ProfileIcon />,
      ...avatarProps,
    };
  };

  return (
    <OptionalBadge url={badgeUrl} {...badgeProps}>
      <Avatar size={Size.MEDIUM} {...getAvatarProps()} />
    </OptionalBadge>
  );
};

function getInitials(name) {
  const allInitials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  if (allInitials.length === 1) {
    return allInitials[0];
  }

  return allInitials[0] + allInitials.slice(-1);
}

AvatarWrapper.defaultProps = {
  url: undefined,
  profileType: undefined,
  badgeUrl: undefined,
  name: undefined,
  avatarProps: {},
  badgeProps: {},
};

AvatarWrapper.propTypes = {
  url: PropTypes.string,
  profileType: PropTypes.oneOf(['PERSONAL', 'BUSINESS']),
  badgeUrl: PropTypes.string,
  name: PropTypes.string,
  avatarProps: PropTypes.shape({}),
  badgeProps: PropTypes.shape({}),
};

export default AvatarWrapper;
