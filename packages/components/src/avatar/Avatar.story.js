import { boolean, radios, text, select } from '@storybook/addon-knobs';

import { Size } from '../common';

import Avatar, { AvatarType } from '.';

export default {
  component: Avatar,
  title: 'Avatar',
};

export const Basic = () => {
  const type = radios(
    'type',
    {
      Thumbnail: AvatarType.THUMBNAIL,
      Initials: AvatarType.INITIALS,
      Icon: AvatarType.ICON,
      Emoji: AvatarType.EMOJI,
    },
    AvatarType.EMOJI,
  );
  const size = radios(
    'size',
    {
      Small: Size.SMALL,
      Medium: Size.MEDIUM,
      Large: Size.LARGE,
    },
    Size.MEDIUM,
  );
  const outlined = boolean('outlined', true);
  const backgroundColor = text('Background colour', '');
  const avatarContent = text('avatarContent', '✈️');
  const sampleImage = boolean('Use image as content?', false);
  const sampleImageUrl = text(
    'Image URL',
    'https://wise.com/public-resources/assets/flags/square/gbp.svg',
  );

  return (
    <Avatar size={size} type={type} outlined={outlined} backgroundColor={backgroundColor}>
      {sampleImage ? <img src={sampleImageUrl} alt="" /> : avatarContent}
    </Avatar>
  );
};

export const table = () => {
  const flag = select('Flag', ['gbp', 'jpy', 'eur'], 'gbp');

  const flagResource = `https://wise.com/public-resources/assets/flags/square/${flag}.svg`;
  return (
    <div style={{ padding: '50px' }}>
      <table>
        <tr>
          <td>
            <Avatar size={Size.LARGE} type={AvatarType.THUMBNAIL} outlined>
              <img src={flagResource} alt="" />
            </Avatar>
          </td>
          <td>
            <Avatar size={Size.MEDIUM} type={AvatarType.THUMBNAIL} outlined>
              <img src={flagResource} alt="" />
            </Avatar>
          </td>
          <td>
            <Avatar size={Size.SMALL} type={AvatarType.THUMBNAIL} outlined>
              <img src={flagResource} alt="" />
            </Avatar>
          </td>
        </tr>
        <tr>
          <td>
            <Avatar size={Size.LARGE} type={AvatarType.THUMBNAIL}>
              <img src={flagResource} alt="" />
            </Avatar>
          </td>
          <td>
            <Avatar size={Size.MEDIUM} type={AvatarType.THUMBNAIL}>
              <img src={flagResource} alt="" />
            </Avatar>
          </td>
          <td>
            <Avatar size={Size.SMALL} type={AvatarType.THUMBNAIL}>
              <img src={flagResource} alt="" />
            </Avatar>
          </td>
        </tr>
        <tr>
          <td>
            <Avatar size={Size.LARGE} type={AvatarType.EMOJI}>
              <img
                style={{ width: 44, height: 44 }}
                src="https://wise.com/public-resources/assets/balances/savings-emoji/google/✈️.png"
                alt=""
              />
            </Avatar>
          </td>
          <td>
            <Avatar size={Size.MEDIUM} type={AvatarType.EMOJI}>
              <img
                style={{ width: 30, height: 30 }}
                src="https://wise.com/public-resources/assets/balances/savings-emoji/google/✈️.png"
                alt=""
              />
            </Avatar>
          </td>
          <td>
            <Avatar size={Size.SMALL} type={AvatarType.EMOJI}>
              <img
                style={{ width: 16, height: 16 }}
                src="https://wise.com/public-resources/assets/balances/savings-emoji/google/✈️.png"
                alt=""
              />
            </Avatar>
          </td>
        </tr>
        <tr>
          <td>
            <Avatar size={Size.LARGE} type={AvatarType.EMOJI} backgroundColor="#D6F5E3">
              <img
                style={{ width: 44, height: 44 }}
                src="https://wise.com/public-resources/assets/balances/savings-emoji/google/🌱.png"
                alt=""
              />
            </Avatar>
          </td>
          <td>
            <Avatar size={Size.MEDIUM} type={AvatarType.EMOJI} backgroundColor="#D6F5E3">
              <img
                style={{ width: 30, height: 30 }}
                src="https://wise.com/public-resources/assets/balances/savings-emoji/google/🌱.png"
                alt=""
              />
            </Avatar>
          </td>
          <td>
            <Avatar size={Size.SMALL} type={AvatarType.EMOJI} backgroundColor="#D6F5E3">
              <img
                style={{ width: 16, height: 16 }}
                src="https://wise.com/public-resources/assets/balances/savings-emoji/google/🌱.png"
                alt=""
              />
            </Avatar>
          </td>
        </tr>
      </table>
    </div>
  );
};
