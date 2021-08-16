import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';
import { Profile as ProfileIcon, Briefcase as BriefcaseIcon } from '@transferwise/icons';

import Avatar, { AvatarType } from '../avatar';
import AvatarWrapper from '../avatarWrapper';
import { ProfileType, Size } from '../common';
import Logo from '../logo';

import OverlayHeader from './OverlayHeader';

export default {
  component: OverlayHeader,
  title: 'OverlayHeader',
};

const avatarProfiles = {
  '': null,
  Business: <BriefcaseIcon />,
  Profile: <ProfileIcon />,
};

export const Basic = () => {
  const showAvatar = select('avatar', Object.keys(avatarProfiles), 'Profile');
  return (
    <OverlayHeader
      logo={<Logo />}
      avatar={
        <Avatar type={AvatarType.ICON} size={Size.MEDIUM}>
          {avatarProfiles[showAvatar]}
        </Avatar>
      }
      onClose={action('Close clicked')}
    />
  );
};

export const WithAvatarWrapper = () => {
  const avatarURL = text('avatarURL', 'https://github.com/transferwise.png');
  const profileType = select('profileType', Object.keys(ProfileType));
  return (
    <OverlayHeader
      logo={<Logo />}
      avatar={<AvatarWrapper url={avatarURL} profileType={profileType} />}
      onClose={action('Close clicked')}
    />
  );
};
