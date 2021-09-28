import classNames from 'classnames';
import PropTypes from 'prop-types';
import requiredIf from 'react-required-if';

const Option = ({
  'aria-label': ariaLabel,
  as: Element,
  href,
  target,
  media,
  title,
  content,
  onClick,
  htmlFor,
  disabled,
  button,
  decision,
  complex,
  className,
  inverseMediaCircle,
  showMediaAtAllSizes,
  showMediaCircle,
}) => (
  <Element
    className={classNames('np-option', className, {
      'decision-complex': complex,
      decision,
      disabled,
      'np-option__sm-media': showMediaAtAllSizes,
    })}
    href={href}
    htmlFor={htmlFor}
    target={target}
    disabled={disabled && Element === 'button'}
    aria-label={ariaLabel}
    onClick={onClick}
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
        <div className="title-4">{title}</div>
        {content && <div className="decision__content">{content}</div>}
      </div>
      <div className="media-right">{button}</div>
    </div>
  </Element>
);

Option.propTypes = {
  'aria-label': PropTypes.string,
  media: PropTypes.node,
  htmlFor: PropTypes.string,
  title: PropTypes.node.isRequired,
  content: PropTypes.node,
  onClick: PropTypes.func,
  href: requiredIf(PropTypes.string, (props) => props.as === 'a'),
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  as: PropTypes.string,
  disabled: PropTypes.bool,
  button: PropTypes.node,
  decision: PropTypes.bool,
  complex: PropTypes.bool,
  inverseMediaCircle: PropTypes.bool,
  className: PropTypes.string,
  showMediaAtAllSizes: PropTypes.bool,
  showMediaCircle: PropTypes.bool,
};

Option.defaultProps = {
  'aria-label': undefined,
  as: 'label',
  media: '',
  content: null,
  htmlFor: null,
  disabled: false,
  button: null,
  onClick: null,
  href: null,
  target: undefined,
  decision: true,
  complex: false,
  inverseMediaCircle: true,
  className: null,
  showMediaAtAllSizes: false,
  showMediaCircle: true,
};

export default Option;
