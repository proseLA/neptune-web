import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Profile as ProfileIcon, Briefcase as BriefcaseIcon } from '@transferwise/icons';
import OverlayHeader from './OverlayHeader';
import Avatar, { AvatarType } from '../avatar';
import AvatarWrapper from '../avatarWrapper';
import { ProfileType, Size } from '../common';
import Logo from '../logo';

export default {
  component: OverlayHeader,
  title: 'OverlayHeader',
};

const avatarProfiles = {
  '': null,
  Business: <BriefcaseIcon />,
  Profile: <ProfileIcon />,
};

export const basic = () => {
  const showAvatar = select('avatar', Object.keys(avatarProfiles), 'Profile');
  return (
    <OverlayHeader
      logo={<Logo />}
      onClose={action('Close clicked')}
      avatar={
        <Avatar type={AvatarType.ICON} size={Size.MEDIUM}>
          {avatarProfiles[showAvatar]}
        </Avatar>
      }
    />
  );
};

export const withAvatarWrapper = () => {
  const avatarURL = text('avatarURL', 'https://github.com/transferwise.png');
  const profileType = select('profileType', Object.keys(ProfileType));
  return (
    <OverlayHeader
      logo={<Logo />}
      onClose={action('Close clicked')}
      avatar={<AvatarWrapper url={avatarURL} profileType={profileType} />}
    />
  );
};
