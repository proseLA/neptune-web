/* eslint-disable jsx-a11y/no-noninteractive-element-interactions  */
/* eslint-disable react/no-array-index-key  */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Option from '../option';
import { stopPropagation } from '../utils';

const Options = ({
  classNames,
  createSelectHandlerForOption,
  keyboardFocusedOptionIndex,
  options,
  selected,
}) => {
  const style = (className) => classNames[className] || className;

  const getIndexWithoutHeadersForIndexWithHeaders = (index) =>
    options.reduce((sum, option, currentIndex) => {
      const { header, separator, disabled } = option;
      return currentIndex < index && !header && !separator && !disabled ? sum + 1 : sum;
    }, 0);

  return options.map((option, index) => {
    const { separator, disabled, header, value } = option;
    if (separator) {
      return <li key={separator} className={style('divider')} />;
    }

    if (header) {
      return (
        <li
          key={index}
          onClick={stopPropagation}
          onKeyPress={stopPropagation}
          className={style('dropdown-header')}
        >
          {header}
        </li>
      );
    }

    const isActive = selected && selected.value === value;
    const isFocusedWithKeyboard =
      keyboardFocusedOptionIndex === getIndexWithoutHeadersForIndexWithHeaders(index);

    const className = classnames(style('tw-dropdown-item'), style('tw-dropdown-item--clickable'), {
      [style('active')]: isActive,
      [style('tw-dropdown-item--focused')]: isFocusedWithKeyboard && !disabled,
      [style('disabled')]: disabled,
    });
    return (
      <li
        key={index}
        onClick={disabled ? stopPropagation : createSelectHandlerForOption(option)}
        onKeyPress={disabled ? stopPropagation : createSelectHandlerForOption(option)}
        className={className}
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a disabled={disabled}>
          <Option {...option} classNames={classNames} />
        </a>
      </li>
    );
  });
};

Options.propTypes = {
  classNames: PropTypes.objectOf(PropTypes.string),
  createSelectHandlerForOption: PropTypes.func,
  keyboardFocusedOptionIndex: PropTypes.number,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
      label: PropTypes.node,
      header: PropTypes.node,
      icon: PropTypes.node,
      currency: PropTypes.string,
      note: PropTypes.node,
      secondary: PropTypes.node,
      separator: PropTypes.bool,
      disabled: PropTypes.bool,
      searchStrings: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  selected: PropTypes.shape({
    value: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
    label: PropTypes.node,
    icon: PropTypes.node,
    currency: PropTypes.string,
    note: PropTypes.node,
    secondary: PropTypes.node,
  }),
};

Options.defaultProps = {
  keyboardFocusedOptionIndex: 0,
  selected: null,
  classNames: {},
};

export default Options;
