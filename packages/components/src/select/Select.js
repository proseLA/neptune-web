import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isBoolean } from '@transferwise/neptune-validation';

import SearchBox from './searchBox';
import ResponsivePanel from '../common/responsivePanel';
import Option from './option';
import Options from './options';
import Chevron from '../chevron';
import KeyCodes from '../common/keyCodes';
import { stopPropagation, defaultFilterFunction } from './utils';

import {
  addClickClassToDocumentOnIos,
  removeClickClassFromDocumentOnIos,
} from '../common/domHelpers';

import './Select.css';

const actionableOption = (option) => !option.header && !option.separator && !option.disabled;

const Select = ({
  block,
  classNames,
  disabled,
  dropdownRight,
  dropdownUp,
  dropdownWidth,
  id,
  inverse,
  onBlur,
  onChange,
  onFocus,
  onSearchChange,
  options,
  placeholder,
  required,
  search,
  searchPlaceholder,
  searchValue: intialSearchValue,
  selected,
  size,
}) => {
  const searchBoxRef = useRef(null);
  const dropdownMenuRef = useRef(null);

  const [searchValue, setSearchValue] = useState(intialSearchValue);
  const [open, setOpen] = useState(false);
  const [keyboardFocusedOptionIndex, setKeyboardFocusedOptionIndex] = useState(null);

  const handleOnFocus = (event) => onFocus && onFocus(event);

  const handleOnBlur = (event) => {
    const { nativeEvent, currentTarget } = event;
    if (nativeEvent) {
      if (
        currentTarget &&
        nativeEvent.relatedTarget &&
        currentTarget.contains(nativeEvent.relatedTarget)
      ) {
        return;
      }
    }

    if (onBlur) {
      onBlur(event);
    }
  };

  const getOptions = (newOptions = options) => {
    if (!search || !searchValue) {
      return newOptions;
    }

    const filterFunction = isBoolean(search) ? defaultFilterFunction : search;

    return newOptions.filter((option) => filterFunction(option, searchValue));
  };

  const handleSearchChange = (event) =>
    onSearchChange ? onSearchChange(event.target.value) : setSearchValue(event.target.value);

  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case KeyCodes.UP:
        if (open) {
          moveFocusWithDifference(-1);
        } else {
          handleOpen();
        }
        event.preventDefault();
        break;
      case KeyCodes.DOWN:
        if (open) {
          moveFocusWithDifference(1);
        } else {
          handleOpen();
        }
        event.preventDefault();
        break;
      case KeyCodes.SPACE:
        if (event.target !== searchBoxRef.current) {
          if (open) {
            selectKeyboardFocusedOption();
          } else {
            handleOpen();
          }
          event.preventDefault();
        }
        break;
      case KeyCodes.ENTER:
        if (open) {
          selectKeyboardFocusedOption();
        } else {
          handleOpen();
        }
        event.preventDefault();
        break;

      case KeyCodes.TAB:
        if (open) {
          selectKeyboardFocusedOption();
        }
        break;
      default:
        break;
    }
  };

  const selectKeyboardFocusedOption = () => {
    if (keyboardFocusedOptionIndex !== null) {
      const index = keyboardFocusedOptionIndex;
      selectOption(getOptions().filter(actionableOption)[index]);
    }
  };

  const moveFocusWithDifference = (difference) => {
    const optionsWithoutHeaders = getOptions(options).filter(actionableOption);
    const selectedOptionIndex = optionsWithoutHeaders.reduce((optionIndex, current, index) => {
      if (optionIndex !== null) {
        return optionIndex;
      }
      if (selected && selected.value === current.value) {
        return index;
      }
      return null;
    }, null);

    const previousFocusedIndex = keyboardFocusedOptionIndex;
    let indexToStartMovingFrom = previousFocusedIndex;
    if (previousFocusedIndex === null && selectedOptionIndex === null) {
      setKeyboardFocusedOptionIndex(0);
    }

    if (previousFocusedIndex === null && selectedOptionIndex !== null) {
      indexToStartMovingFrom = selectedOptionIndex;
    }
    const unClampedNewIndex = indexToStartMovingFrom + difference;

    const newIndex = Math.max(Math.min(optionsWithoutHeaders.length - 1, unClampedNewIndex), 0);
    setKeyboardFocusedOptionIndex(newIndex);
  };

  useEffect(() => {
    const isTouchDevice =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      !!window.matchMedia('(pointer: coarse)').matches;
    const searchable = !!onSearchChange || !!search;

    setTimeout(() => {
      if (!isTouchDevice && searchable && searchBoxRef.current) {
        searchBoxRef.current.focus();
      }
    }, 0);
  }, [open]);

  const handleOpen = () => {
    // TODO: should also add breakpoint-specific overflow:hidden class to body
    setOpen(true);

    addClickClassToDocumentOnIos();
  };

  const close = () => {
    setOpen(false);
    setKeyboardFocusedOptionIndex(null);

    removeClickClassFromDocumentOnIos();
  };

  const handleButtonClick = () => !disabled && handleOpen();

  const handleTouchStart = (event) => event.currentTarget === event.target && open && close();

  const createSelectHandlerForOption = (option) => (event) => {
    stopPropagation(event);
    selectOption(option);
  };

  const selectOption = (option) => {
    if (option && !option.placeholder) {
      onChange(option);
    } else {
      onChange(null);
    }
    close();
  };

  const style = (className) => classNames[className] || className;

  const renderOptionsList = () => {
    const s = style;

    const canSearch = !!onSearchChange || !!search;

    const dropdownClass = classnames(s('tw-select'), s('dropdown-menu'), {
      [s(`dropdown-menu-${dropdownRight}-right`)]: dropdownRight,
      [s(`dropdown-menu-${dropdownWidth}`)]: dropdownWidth,
      [s(`dropdown-menu--open`)]: open,
    });

    const list = (
      <ul className={dropdownClass} role="menu">
        {!required && !canSearch && placeholder ? renderPlaceHolderOption() : ''}
        {canSearch && (
          <SearchBox
            classNames={classNames}
            handleSearchChange={handleSearchChange}
            onClick={stopPropagation}
            value={searchValue || searchValue}
            ref={searchBoxRef}
            searchPlaceholder={searchPlaceholder}
          />
        )}
        <Options
          options={getOptions()}
          stopPropagation={stopPropagation}
          createSelectHandlerForOption={createSelectHandlerForOption}
          keyboardFocusedOptionIndex={keyboardFocusedOptionIndex}
          selected={selected}
          classNames={classNames}
        />
      </ul>
    );

    return list;
  };

  const renderPlaceHolderOption = () => {
    return (
      /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */
      <li
        onClick={createSelectHandlerForOption({ placeholder })}
        onKeyPress={createSelectHandlerForOption({ placeholder })}
        className={classnames(
          style('tw-dropdown-item--clickable'),
          style('tw-dropdown-item--divider'),
        )}
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>{placeholder}</a>
      </li>
    );
  };

  const renderButtonInternals = () =>
    selected ? (
      <Option {...selected} classNames={classNames} selected />
    ) : (
      <span className={style('form-control-placeholder')}>{placeholder}</span>
    );

  const s = style;

  const groupClass = classnames(s('tw-select'), s('btn-group'), {
    [s('btn-block')]: block,
    [s('dropup')]: dropdownUp,
    [s('dropdown')]: !dropdownUp,
  });

  const buttonClass = classnames(
    s('btn'),
    s('btn-input'),
    {
      [`${s('btn-input-inverse')} ${s('btn-addon')}`]: inverse,
      [s('btn-xs')]: size === 'xs',
      [s('btn-sm')]: size === 'sm',
      [s('btn-md')]: size === 'md',
      [s('btn-lg')]: size === 'lg',
    },
    s('dropdown-toggle'),
  );

  return (
    <div // eslint-disable-line jsx-a11y/no-static-element-interactions
      className={groupClass}
      ref={dropdownMenuRef}
      onKeyDown={handleKeyDown}
      onTouchMove={handleTouchStart}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    >
      <button
        disabled={disabled}
        className={buttonClass}
        type="button"
        id={id}
        aria-expanded={open}
        onClick={handleButtonClick}
      >
        {renderButtonInternals()}
        <Chevron
          disabled={disabled}
          className={`${s('tw-icon')} ${s('tw-chevron-up-icon')} ${s('tw-chevron')} ${s(
            'chevron-color',
          )} ${s('bottom')} ${s('tw-select-chevron')}`}
        />
      </button>

      <ResponsivePanel
        open={open}
        anchorRef={dropdownMenuRef}
        position={ResponsivePanel.Position.BOTTOM}
        onClose={() => close()}
      >
        <div className="open">{renderOptionsList()}</div>
      </ResponsivePanel>
    </div>
  );
};

Select.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  inverse: PropTypes.bool,
  dropdownRight: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  dropdownWidth: PropTypes.oneOf(['sm', 'md', 'lg']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  block: PropTypes.bool,
  selected: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.any.isRequired,
    label: PropTypes.node,
    icon: PropTypes.node,
    currency: PropTypes.string,
    note: PropTypes.node,
    secondary: PropTypes.node,
  }),
  /**
   * Search toggle
   * if `true` default search functionality being enabled (not case sensitive search in option labels & currency props)
   * if `function` you can define your own search function to implement custom search experience. This search function used while filtering the options array. The custom search function takes two parameters. First is the option the second is the keyword.
   */
  search: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      // eslint-disable-next-line react/forbid-prop-types
      value: PropTypes.any,
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
  /**
   * To have full control of your search value and response use `onSearchChange` function combined with `searchValue` and custom filtering on the options array.
   * DO NOT USE TOGETHER WITH `search` PROPERTY
   */
  onSearchChange: PropTypes.func,
  searchValue: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  classNames: PropTypes.objectOf(PropTypes.string),
  dropdownUp: PropTypes.bool,
};

Select.defaultProps = {
  id: undefined,
  placeholder: undefined,
  size: 'md',
  dropdownRight: null,
  dropdownWidth: null,
  inverse: false,
  required: false,
  disabled: false,
  block: true,
  selected: null,
  onFocus: null,
  onBlur: null,
  onSearchChange: undefined,
  search: false,
  searchValue: '',
  searchPlaceholder: 'Search...',
  classNames: {},
  dropdownUp: false,
};

export default Select;
