import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';

import Avatar from '../avatar';
import { Size } from '../common';

import Decision, { DecisionPresentation, DecisionType } from '.';

export default {
  component: Decision,
  title: 'Decision',
};

export const Basic = () => {
  const presentation = select(
    'presentation',
    DecisionPresentation,
    DecisionPresentation.LIST_BLOCK,
  );
  const disabled = boolean('disabled', false);
  const showMediaCircleInList = boolean('showMediaCircleInList', true);
  const size = select('size', [Size.MEDIUM, Size.SMALL]);

  return (
    <>
      <Decision
        options={[
          {
            description:
              "Click here to send money to Hank Miller. Money will be sent directly to Hank Miller's multi-currency account.",
            onClick: action('clicked'),
            href: '#href1',
            disabled,
            media: {
              block: (
                <img
                  src="https://wise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
                  alt="alt"
                />
              ),
              list: (
                <Avatar size="md" type="initials">
                  HM
                </Avatar>
              ),
            },
            title: 'Hank Miller',
          },
          {
            description:
              "Click here to send money to Hank Miller. Money will be sent directly to Han Miller's multi-currency account.",
            onClick: action('clicked'),
            disabled,
            href: '#href2',
            media: {
              block: (
                <img
                  src="https://wise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
                  alt="alt"
                />
              ),
              list: (
                <Avatar size="md" type="initials">
                  HM
                </Avatar>
              ),
            },
            title: 'Hank Miller',
          },
          {
            description:
              "Click here to send money to Hank Miller. Money will be sent directly to Han Miller's multi-currency account.",
            onClick: action('clicked'),
            href: '#href3',
            media: {
              block: (
                <img
                  src="https://wise.com/public-resources/assets/illustrations/business_account_web_small.svg"
                  alt="alt"
                  width="100"
                />
              ),
              list: (
                <img
                  src="https://wise.com/public-resources/assets/illustrations/business_account_web_small.svg"
                  alt="alt"
                  width="100"
                />
              ),
            },
            disabled,
            title: 'Hank Miller',
          },
        ]}
        presentation={presentation}
        type={DecisionType.NAVIGATION}
        size={size}
        showMediaCircleInList={showMediaCircleInList}
      />
    </>
  );
};

export const grid = () => {
  const presentation = select(
    'presentation',
    DecisionPresentation,
    DecisionPresentation.LIST_BLOCK_GRID,
  );
  const disabled = boolean('disabled', false);
  const size = select('size', [Size.MEDIUM, Size.SMALL]);

  return (
    <>
      <Decision
        options={[
          {
            description:
              "Click here to send money to Hank Miller. Money will be sent directly to Hank Miller's multi-currency account.",
            onClick: action('clicked'),
            href: '#href1',
            disabled,
            media: {
              block: (
                <img
                  src="https://wise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
                  alt="alt"
                />
              ),
              list: (
                <Avatar size="md" type="initials">
                  HM
                </Avatar>
              ),
            },
            title: 'Hank Miller',
          },
          {
            description:
              "Click here to send money to Hank Miller. Money will be sent directly to Han Miller's multi-currency account.",
            onClick: action('clicked'),
            disabled,
            href: '#href2',
            media: {
              block: (
                <img
                  src="https://wise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
                  alt="alt"
                />
              ),
              list: (
                <Avatar size="md" type="initials">
                  HM
                </Avatar>
              ),
            },
            title: 'Hank Miller',
          },
          {
            description:
              "Click here to send money to Hank Miller. Money will be sent directly to Han Miller's multi-currency account.",
            onClick: action('clicked'),
            href: '#href3',
            media: {
              block: (
                <img
                  src="https://wise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
                  alt="alt"
                />
              ),
              list: (
                <Avatar size="md" type="initials">
                  HM
                </Avatar>
              ),
            },
            disabled,
            title: 'Hank Miller',
          },
          {
            description:
              "Click here to send money to Hank Miller. Money will be sent directly to Hank Miller's multi-currency account.",
            onClick: action('clicked'),
            href: '#href1',
            disabled,
            media: {
              block: (
                <img
                  src="https://wise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
                  alt="alt"
                />
              ),
              list: (
                <Avatar size="md" type="initials">
                  HM
                </Avatar>
              ),
            },
            title: 'Hank Miller',
          },
          {
            description:
              "Click here to send money to Hank Miller. Money will be sent directly to Hank Miller's multi-currency account.",
            onClick: action('clicked'),
            href: '#href1',
            disabled,
            media: {
              block: (
                <img
                  src="https://wise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
                  alt="alt"
                />
              ),
              list: (
                <Avatar size="md" type="initials">
                  HM
                </Avatar>
              ),
            },
            title: 'Hank Miller',
          },
          {
            description:
              "Click here to send money to Hank Miller. Money will be sent directly to Hank Miller's multi-currency account.",
            onClick: action('clicked'),
            href: '#href1',
            disabled,
            media: {
              block: (
                <img
                  src="https://wise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
                  alt="alt"
                />
              ),
              list: (
                <Avatar size="md" type="initials">
                  HM
                </Avatar>
              ),
            },
            title: 'Hank Miller',
          },
          {
            description:
              "Click here to send money to Hank Miller. Money will be sent directly to Hank Miller's multi-currency account.",
            onClick: action('clicked'),
            href: '#href1',
            disabled,
            media: {
              block: (
                <img
                  src="https://wise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
                  alt="alt"
                />
              ),
              list: (
                <Avatar size="md" type="initials">
                  HM
                </Avatar>
              ),
            },
            title: 'Hank Miller',
          },
        ]}
        presentation={presentation}
        type={DecisionType.NAVIGATION}
        size={size}
      />
    </>
  );
};
