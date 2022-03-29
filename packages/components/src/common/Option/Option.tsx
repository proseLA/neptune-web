import classNames from 'classnames';
import { MouseEvent, forwardRef, HTMLAttributes, ReactNode, ElementType } from 'react';

interface BaseOptionProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  'aria-label'?: string;
  media?: ReactNode;
  htmlFor?: string;
  title: ReactNode;
  content?: ReactNode;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  as?: ElementType;
  disabled?: boolean;
  button?: ReactNode;
  decision?: boolean;
  complex?: boolean;
  inverseMediaCircle?: boolean;
  className?: string;
  showMediaAtAllSizes?: boolean;
  showMediaCircle?: boolean;
}

interface AnchorOptionProps extends BaseOptionProps {
  as: 'a';
  href: string;
  target: '_self' | '_blank' | '_parent' | '_top';
}

export type OptionProps = BaseOptionProps | AnchorOptionProps;

export type ReferenceType = HTMLElement | HTMLAnchorElement;

const Option = forwardRef<ReferenceType, OptionProps>(
  (
    {
      media = '',
      title,
      content,
      as: component,
      button,
      decision = true,
      disabled = false,
      complex,
      inverseMediaCircle = true,
      className,
      showMediaAtAllSizes,
      showMediaCircle = true,
      ...rest
    },
    reference,
  ) => {
    const Element = (component as ElementType) ?? 'label';

    return (
      <Element
        {...rest}
        ref={reference}
        className={classNames('np-option', className, {
          'decision-complex': complex,
          decision,
          disabled,
          'np-option__sm-media': showMediaAtAllSizes,
        })}
        disabled={disabled && Element === 'button'}
      >
        <div className="media">
          {media && (
            <div className="media-left">
              {showMediaCircle ? (
                <div
                  className={classNames('circle circle-sm text-primary', {
                    'circle-inverse': inverseMediaCircle,
                  })}
                >
                  {media}
                </div>
              ) : (
                <div className="np-option__no-media-circle">{media}</div>
              )}
            </div>
          )}
          <div className="media-body">
            <div className="decision__title">{title}</div>
            {content && <div className="decision__content">{content}</div>}
          </div>
          <div className="media-right">{button}</div>
        </div>
      </Element>
    );
  },
);

export default Option;
