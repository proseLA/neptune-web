import React from 'react';
import PropTypes from 'prop-types';
import {
  CrossCircle as CrossCircleIcon,
  CheckCircle as CheckCircleIcon,
} from '@transferwise/icons';
import classNames from 'classnames';

import { useDirection } from '../common/hooks';

import './InstructionsList.css';

const InstructionsList = ({ dos, donts }) => {
  const { isRTL } = useDirection();
  const listItemClasses = classNames('m-b-0 text-primary', { 'm-l-2': !isRTL, 'm-r-2': isRTL });
  return (
    <div className="tw-instructions">
      {dos.map((doThis, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="instruction m-t-1" key={index}>
          <CheckCircleIcon size={24} className="do" />
          <p className={listItemClasses}>{doThis}</p>
        </div>
      ))}
      {donts.map((dont, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="instruction m-t-1" key={index}>
          <CrossCircleIcon size={24} className="dont" />
          <p className={listItemClasses}>{dont}</p>
        </div>
      ))}
    </div>
  );
};

InstructionsList.defaultProps = {
  dos: [],
  donts: [],
};

InstructionsList.propTypes = {
  dos: PropTypes.arrayOf(PropTypes.node),
  donts: PropTypes.arrayOf(PropTypes.node),
};

export default InstructionsList;
