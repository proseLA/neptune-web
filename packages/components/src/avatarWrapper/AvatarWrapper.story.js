import { boolean, object, select, text } from '@storybook/addon-knobs';
import AvatarWrapper from './AvatarWrapper';
import { ProfileType } from '../common';

export default {
  component: AvatarWrapper,
  title: 'AvatarWrapper',
};

export const basic = () => {
  const showAvatar = boolean('Show avatar', false);
  const showBadge = boolean('Show badge', true);
  const profileType = select('Profile type', {
    PERSONAL: ProfileType.PERSONAL,
    BUSINESS: ProfileType.BUSINESS,
    undefined,
  });
  const name = text('Name', 'Chris P Bacon');
  const avatarProps = object('Avatar props', {});

  return (
    <AvatarWrapper
      url={showAvatar ? 'https://wise.com/public-resources/assets/flags/square/gbp.svg' : undefined}
      profileType={profileType || undefined}
      badgeUrl={
        showBadge ? 'https://wise.com/public-resources/assets/brand/fast_flag_badge.svg' : undefined
      }
      name={name}
      avatarProps={avatarProps}
    />
  );
};
