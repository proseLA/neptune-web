import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Cross as CrossIcon } from '@transferwise/icons';

import './Nudge.css';

const Nudge = ({ media, title, link, href, onDismiss, id, className }) => (
  <div className={classNames('tw-nudge media', className)} id={id}>
    <div className="media-left">{media}</div>
    <div className="media-body">
      <div className="tw-nudge__title media-heading h5">{title}</div>
      <a href={href} className="tw-nudge__link">
        {link}
      </a>
    </div>
    <div className="media-right">
      <button type="button" className="close" onClick={onDismiss} aria-label="close">
        <CrossIcon />
      </button>
    </div>
  </div>
);

Nudge.propTypes = {
  media: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
};

Nudge.defaultProps = {
  id: null,
  className: null,
};

export default Nudge;
