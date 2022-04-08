import classNames from 'classnames';
import PropTypes from 'prop-types';
import { createRef, useState, useEffect, useRef } from 'react';

import Button from '../button';
import Chevron from '../chevron';
import { Position, Size, Priority, stopPropagation } from '../common';
import BottomSheet from '../common/bottomSheet';
import { useLayout } from '../common/hooks';
import KeyCodes from '../common/keyCodes';
import Dropdown from '../common/panel';
import Drawer from '../drawer';

import messages from './Select.messages';
import Option from './option';
import SearchBox from './searchBox';

function clamp(from, to, value) {
  return Math.max(Math.min(to, value), from);
}

function isActionableOption({ header, separator, disabled }) {
  return !header && !separator && !disabled;
}

const isFunction = (functionToCheck) =>
  functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';

const DEFAULT_SEARCH_VALUE = '';

const OPTIONS_PAGE_SIZE = 100;

const includesString = (string1, string2) => string1.toLowerCase().includes(string2.toLowerCase());

const arrayIncludesString = (arrayToSearch, keyword) =>
  arrayToSearch.some((string) => includesString(string, keyword));

const defaultFilterFunction = (option, keyword) =>
  (option.label && includesString(option.label, keyword)) ||
  (option.note && includesString(option.note, keyword)) ||
  (option.secondary && includesString(option.secondary, keyword)) ||
  (option.currency && includesString(option.currency, keyword)) ||
  (option.searchStrings && arrayIncludesString(option.searchStrings, keyword));

export default function Select(props) {
  const s = (className) => props.classNames[className] || className;
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(DEFAULT_SEARCH_VALUE);
  const [keyboardFocusedOptionIndex, setKeyboardFocusedOptionIndex] = useState(null);
  const previousKeyboardFocusedOptionIndex = useRef();
  const [numberOfOptionsShown, setNumberOfOptionsShown] = useState(OPTIONS_PAGE_SIZE);
  const searchBoxReference = createRef();
  const dropdownMenuReference = createRef();
  const isSearchEnabled = !!props.onSearchChange || !!props.search;

  const { isMobile } = useLayout();

  const handleOnClick = () => {
    setOpen(true);
  };

  const handleTouchStart = (event) => {
    if (event.currentTarget === event.target && open) {
      handleCloseOptions();
    }
  };

  const handleOnFocus = (event) => props.onFocus && props.onFocus(event);

  const handleOnBlur = (event) => {
    const { onBlur } = props;
    const { nativeEvent } = event;
    if (nativeEvent) {
      const elementReceivingFocus = nativeEvent.relatedTarget;
      const select = event.currentTarget;
      if (select && elementReceivingFocus && select.contains(elementReceivingFocus)) {
        return;
      }
    }

    if (onBlur) {
      onBlur(event);
    }
  };

  const getOptions = (options = props.options) => {
    const { search } = props;

    if (!search || !searchValue) {
      return options;
    }

    const filterFunction = isFunction(search) ? search : defaultFilterFunction;

    return options.filter((option) => filterFunction(option, searchValue));
  };

  const handleSearchChange = (event) => {
    setNumberOfOptionsShown(OPTIONS_PAGE_SIZE);
    if (props.onSearchChange) {
      props.onSearchChange(event.target.value);
    } else {
      setSearchValue(event.target.value);
    }
  };

  const handleKeyDown = (event) => {
    console.log('handleKeyDown');
    switch (event.keyCode) {
      case KeyCodes.UP:
        if (open) {
          moveFocusWithDifference(-1);
        } else {
          setOpen(true);
        }
        event.preventDefault();
        break;
      case KeyCodes.DOWN:
        if (open) {
          moveFocusWithDifference(1);
        } else {
          setOpen(true);
        }
        event.preventDefault();
        break;
      case KeyCodes.SPACE:
        if (event.target !== searchBoxReference.current) {
          if (open) {
            selectKeyboardFocusedOption();
          } else {
            setOpen(true);
          }
          event.preventDefault();
        }
        break;
      case KeyCodes.ENTER:
        if (open) {
          selectKeyboardFocusedOption();
        } else {
          setOpen(true);
        }
        event.preventDefault();
        break;
      case KeyCodes.ESCAPE:
        handleCloseOptions();
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

  function selectKeyboardFocusedOption() {
    if (keyboardFocusedOptionIndex !== null) {
      selectOption(getOptions().filter(isActionableOption)[keyboardFocusedOptionIndex]);
    }
  }

  function moveFocusWithDifference(difference) {
    console.log('moveFocusWithDifference', difference);
    const optionsWithoutHeaders = getOptions(props.options).filter(isActionableOption);
    const selectedOptionIndex = optionsWithoutHeaders.reduce((optionIndex, current, index) => {
      if (optionIndex !== null) {
        return optionIndex;
      }
      if (props.selected && props.selected.value === current.value) {
        return index;
      }
      return null;
    }, null);
    const previousFocusedIndex = previousKeyboardFocusedOptionIndex.current;
    let indexToStartMovingFrom = previousFocusedIndex;
    if (previousFocusedIndex === null && selectedOptionIndex === null) {
      setKeyboardFocusedOptionIndex(0);
    }
    if (previousFocusedIndex === null && selectedOptionIndex !== null) {
      indexToStartMovingFrom = selectedOptionIndex;
    }
    const unClampedNewIndex = indexToStartMovingFrom + difference;
    const newIndex = clamp(0, optionsWithoutHeaders.length - 1, unClampedNewIndex);
    setKeyboardFocusedOptionIndex(newIndex);
  }

  useEffect(() => {
    previousKeyboardFocusedOptionIndex.current = keyboardFocusedOptionIndex;
  }, [keyboardFocusedOptionIndex]);

  useEffect(() => {
    const isTouchDevice = !!window?.matchMedia('(pointer: coarse)').matches;
    const searchable = !!props.onSearchChange || !!props.search;
    if (!isTouchDevice && searchable && searchBoxReference.current) {
      searchBoxReference.current.focus();
    }
  }, [open, props.onSearchChange, props.search, searchBoxReference]);

  const handleCloseOptions = () => {
    setOpen(false);
    setKeyboardFocusedOptionIndex(null);
  };

  function createSelectHandlerForOption(option) {
    return (event) => {
      stopPropagation(event);
      selectOption(option);
    };
  }

  function selectOption(option) {
    props.onChange(!option?.placeholder ? option : null);
    handleCloseOptions();
  }

  function Options() {
    const { dropdownWidth, placeholder, required, searchPlaceholder } = props;

    const dropdownClass = classNames(s('np-dropdown-menu'), {
      [s(`np-dropdown-menu-${dropdownWidth}`)]: !isMobile,
    });

    return (
      <ul className={dropdownClass}>
        {!required && !isSearchEnabled && placeholder && <PlaceHolderOption />}
        {isSearchEnabled && (
          <SearchBox
            ref={searchBoxReference}
            classNames={props.classNames}
            value={props.searchValue || searchValue}
            placeholder={searchPlaceholder || messages.searchPlaceholder}
            onChange={handleSearchChange}
            onClick={stopPropagation}
          />
        )}
        {getOptions().slice(0, numberOfOptionsShown).map(renderOption)}
        {numberOfOptionsShown < getOptions().length && <ShowMoreOption />}
      </ul>
    );
  }

  function ShowMoreOption() {
    function handleOnClick(event) {
      stopPropagation(event);
      setNumberOfOptionsShown(numberOfOptionsShown + OPTIONS_PAGE_SIZE);
    }
    return (
      /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */
      <li
        className={classNames(s('clickable'), s('border-bottom'), s('show-more'))}
        onClick={handleOnClick}
        onKeyPress={handleOnClick}
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>...</a>
      </li>
    );
  }

  function PlaceHolderOption() {
    const { placeholder } = props;
    return (
      /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */
      <li
        className={classNames(s('clickable'), s('border-bottom'))}
        onClick={createSelectHandlerForOption({ placeholder })}
        onKeyPress={createSelectHandlerForOption({ placeholder })}
      >
        <a>{placeholder}</a>
      </li>
    );
  }

  // eslint-disable-next-line react/prop-types
  function SeparatorOption({ index }) {
    return <li key={index} className={s('np-separator')} />;
  }

  // eslint-disable-next-line react/prop-types
  function HeaderOption({ index, children }) {
    return (
      <li // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions
        key={index}
        className={s('np-dropdown-header')}
        onClick={stopPropagation}
        onKeyPress={stopPropagation}
      >
        {children}
      </li>
    );
  }

  const renderOption = (option, index) => {
    if (option.separator) {
      return <SeparatorOption index={index} />;
    }
    if (option.header) {
      return <HeaderOption />;
    }

    const isActive = props.selected && props.selected.value === option.value;
    const isFocusedWithKeyboard =
      !option.disabled &&
      keyboardFocusedOptionIndex === getIndexWithoutHeadersForIndexWithHeaders(index);

    const className = classNames(s('np-dropdown-item'), s('clickable'), {
      [s('active')]: isActive,
      [s('np-dropdown-item--focused')]: isFocusedWithKeyboard,
      [s('disabled')]: option.disabled,
    });

    const handleOnClick = option.disabled ? stopPropagation : createSelectHandlerForOption(option);

    return (
      /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */
      <li key={index} className={className} onClick={handleOnClick} onKeyPress={handleOnClick}>
        <a disabled={option.disabled}>
          <Option {...option} classNames={props.classNames} />
        </a>
      </li>
    );
  };

  function getIndexWithoutHeadersForIndexWithHeaders(index) {
    return getOptions().reduce((sum, option, currentIndex) => {
      if (currentIndex < index && isActionableOption(option)) {
        return sum + 1;
      }
      return sum;
    }, 0);
  }

  const {
    disabled,
    selected,
    size,
    block,
    id,
    dropdownUp,
    searchPlaceholder,
    placeholder,
    inverse,
  } = props;

  const groupClass = classNames(s('np-select'), {
    // [s('btn-block')]: block,
  });

  const hasActiveOptions = !!props.options.length;
  if (open && (props.searchValue !== '' || searchValue !== '')) {
    if (hasActiveOptions && keyboardFocusedOptionIndex === null) {
      setKeyboardFocusedOptionIndex(0);
    }
    if (!hasActiveOptions && keyboardFocusedOptionIndex !== null) {
      setKeyboardFocusedOptionIndex(null);
    }
  }

  return (
    <div // eslint-disable-line jsx-a11y/no-static-element-interactions
      ref={dropdownMenuReference}
      className={groupClass}
      onKeyDown={handleKeyDown}
      onTouchMove={handleTouchStart}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    >
      <Button
        id={id}
        block={block}
        size={size}
        htmlType="button"
        className={classNames(s('np-dropdown-toggle'), { inverse })}
        priority={Priority.TERTIARY}
        disabled={disabled}
        aria-expanded={open}
        onClick={handleOnClick}
      >
        {selected ? (
          <Option {...selected} classNames={props.classNames} selected />
        ) : (
          <span className={s('form-control-placeholder')}>{placeholder}</span>
        )}
        <Chevron
          disabled={disabled}
          className={`${s('tw-icon')} ${s('tw-chevron-up-icon')} ${s('tw-chevron')} ${s(
            'bottom',
          )} ${s('np-select-chevron')}`}
        />
      </Button>
      {isMobile ? (
        isSearchEnabled ? (
          <Drawer
            headerTitle={searchPlaceholder || messages.searchPlaceholder}
            open={open}
            onClose={handleCloseOptions}
          >
            <Options />
          </Drawer>
        ) : (
          <BottomSheet open={open} onClose={handleCloseOptions}>
            <Options />
          </BottomSheet>
        )
      ) : (
        <Dropdown
          anchorRef={dropdownMenuReference}
          open={open}
          position={dropdownUp ? Position.TOP : Position.BOTTOM}
          onClose={handleCloseOptions}
        >
          <Options />
        </Dropdown>
      )}
    </div>
  );
}

Select.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  inverse: PropTypes.bool,
  dropdownWidth: PropTypes.oneOf(['sm', 'md', 'lg']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  block: PropTypes.bool,
  selected: PropTypes.shape({
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
  size: Size.MEDIUM,
  dropdownWidth: Size.MEDIUM,
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
  searchPlaceholder: null,
  classNames: {},
  dropdownUp: false,
};
