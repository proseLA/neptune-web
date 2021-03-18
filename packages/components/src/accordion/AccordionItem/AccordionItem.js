import React, { cloneElement } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { isString } from '@transferwise/neptune-validation';

import Chevron from '../../chevron';

const AccordionItem = ({ id, title, content, onClick, open, icon }) => {
  const iconEl = icon ? cloneElement(icon, { size: 24 }) : null;

  return (
    <div
      id={id}
      className={classNames('tw-accordion-item decision p-a-0', {
        closed: !open,
      })}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={onClick}
        className={classNames('tw-accordion-item btn btn-link p-x-0 text-no-decoration p-t-3', {
          'p-b-3': !open,
          'p-b-2': open,
        })}
      >
        <div className="media">
          {icon && <div className="media-left hidden-xs hidden-sm p-r-2">{iconEl}</div>}
          <div className="media-body text-xs-left title">
            {isString(title) ? <span className="h5">{title}</span> : title}
          </div>
          <div className="media-right d-flex align-items-center">
            <Chevron orientation={open ? Chevron.Orientation.TOP : Chevron.Orientation.BOTTOM} />
          </div>
        </div>
      </button>
      <div className="accordion-content media ">
        <div
          className={classNames('media-body m-r-5 p-b-3', { 'm-l-5': icon })}
          aria-hidden={!open}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  content: Types.node.isRequired,
  icon: Types.node,
  id: Types.string,
  open: Types.bool.isRequired,
  onClick: Types.func.isRequired,
  title: Types.node.isRequired,
};

AccordionItem.defaultProps = {
  icon: null,
  id: null,
};

export default AccordionItem;
