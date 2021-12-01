import classNames from 'classnames';

import Button from '../button';
import {
  AriaLabelProperty,
  OnClickHandler,
  CommonProps,
  Heading,
  LinkProps,
  Priority,
} from '../common';
import Link from '../link';

type ActionProps = AriaLabelProperty & {
  text: string;
};

type ButtonActionProps = ActionProps & OnClickHandler;

type LinkActionProps = ActionProps & LinkProps;

export type HeaderProps = CommonProps & {
  /**
   * When the `href` property is provided to the `action`, we will render a `Link` instead of a `Button`.
   *
   */
  action?: ButtonActionProps | LinkActionProps;
  /**
   * Override the heading element rendered for the title, useful to specify the semantics of your header.
   *
   * @default "h5"
   */
  as?: Heading;
  title: string;
};

const HeaderAction = ({ action }: { action: ButtonActionProps | LinkActionProps }) => {
  const props = {
    'aria-label': action['aria-label'],
    className: 'np-header__action',
  };

  if ('href' in action) {
    return (
      <Link href={action.href} target={action.target} {...props}>
        {action.text}
      </Link>
    );
  }

  return (
    <Button priority={Priority.TERTIARY} onClick={action.onClick} {...props}>
      {action.text}
    </Button>
  );
};

/**
 *
 * Neptune Web: https://transferwise.github.io/neptune-web/components/content/Header
 *
 */
export const Header = ({ action, as: Element = 'h5', title, className }: HeaderProps) => {
  return (
    <div className={classNames('np-header', className)}>
      <Element className="np-header__title h5">{title}</Element>
      {action && <HeaderAction action={action} />}
    </div>
  );
};

export default Header;
