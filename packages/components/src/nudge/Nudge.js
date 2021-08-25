import { Cross as CrossIcon } from '@transferwise/icons';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { useDirection } from '../common/hooks';

const Nudge = ({ media, title, link, href, onClick, onDismiss, id, className }) => {
  const { isRTL } = useDirection();

  return (
    <div className={classNames('tw-nudge media', className)} id={id}>
      <div className={classNames({ 'media-left': !isRTL, 'media-right': isRTL })}>{media}</div>
      <div className="media-body">
        <div className="tw-nudge__title media-heading h5">{title}</div>
        <a href={href} className="tw-nudge__link" onClick={onClick}>
          {link}
        </a>
      </div>
      <div className={classNames({ 'media-right': !isRTL, 'media-left': isRTL })}>
        <button type="button" className="close" aria-label="close" onClick={onDismiss}>
          <CrossIcon />
        </button>
      </div>
    </div>
  );
};

Nudge.propTypes = {
  media: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onDismiss: PropTypes.func.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
};

Nudge.defaultProps = {
  id: null,
  className: null,
  onClick: undefined,
};

export default Nudge;
