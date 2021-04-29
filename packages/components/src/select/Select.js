import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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

const clamp = (from, to, value) => Math.max(Math.min(to, value), from);

const actionableOption = (option) => !option.header && !option.separator && !option.disabled;

const defer = (fn) => setTimeout(fn, 0);

export default class Select extends Component {
  static getDerivedStateFromProps(props, state) {
    const hasActiveOptions = !!props.options.length;

    if (state.open && (props.searchValue !== '' || state.searchValue !== '')) {
      if (hasActiveOptions && state.keyboardFocusedOptionIndex === null) {
        return {
          keyboardFocusedOptionIndex: 0,
        };
      }
      if (!hasActiveOptions && state.keyboardFocusedOptionIndex !== null) {
        return {
          keyboardFocusedOptionIndex: null,
        };
      }
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      searchValue: '',
      keyboardFocusedOptionIndex: null,
    };
    this.searchBoxRef = createRef();
    this.dropdownMenuRef = createRef();
  }

  componentWillUnmount() {
    this.close();
  }

  getIndexWithoutHeadersForIndexWithHeaders = (index) => {
    return this.getOptions().reduce((sum, option, currentIndex) => {
      if (currentIndex < index && actionableOption(option)) {
        return sum + 1;
      }
      return sum;
    }, 0);
  };

  handleOnFocus = (event) => this.props.onFocus && this.props.onFocus(event);

  handleOnBlur = (event) => {
    const { onBlur } = this.props;
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

  getOptions = (options = this.props.options) => {
    const { search } = this.props;

    if (!search || !this.state.searchValue) {
      return options;
    }

    const filterFunction = isBoolean(search) ? defaultFilterFunction : search;

    return options.filter((option) => filterFunction(option, this.state.searchValue));
  };

  handleSearchChange = (event) => {
    if (this.props.onSearchChange) {
      this.props.onSearchChange(event.target.value);
    } else {
      this.setState({
        searchValue: event.target.value,
      });
    }
  };

  handleKeyDown = (event) => {
    const { open } = this.state;
    switch (event.keyCode) {
      case KeyCodes.UP:
        if (open) {
          this.moveFocusWithDifference(-1);
        } else {
          this.open();
        }
        event.preventDefault();
        break;
      case KeyCodes.DOWN:
        if (open) {
          this.moveFocusWithDifference(1);
        } else {
          this.open();
        }
        event.preventDefault();
        break;
      case KeyCodes.SPACE:
        if (event.target !== this.searchBoxRef.current) {
          if (open) {
            this.selectKeyboardFocusedOption();
          } else {
            this.open();
          }
          event.preventDefault();
        }
        break;
      case KeyCodes.ENTER:
        if (open) {
          this.selectKeyboardFocusedOption();
        } else {
          this.open();
        }
        event.preventDefault();
        break;
      case KeyCodes.ESCAPE:
        this.close();
        event.preventDefault();
        break;
      case KeyCodes.TAB:
        if (open) {
          this.selectKeyboardFocusedOption();
        }
        break;
      default:
        break;
    }
  };

  selectKeyboardFocusedOption() {
    if (this.state.keyboardFocusedOptionIndex !== null) {
      const index = this.state.keyboardFocusedOptionIndex;
      this.selectOption(this.getOptions().filter(actionableOption)[index]);
    }
  }

  moveFocusWithDifference(difference) {
    this.setState((previousState, previousProps) => {
      const optionsWithoutHeaders = this.getOptions(previousProps.options).filter(actionableOption);
      const selectedOptionIndex = optionsWithoutHeaders.reduce((optionIndex, current, index) => {
        if (optionIndex !== null) {
          return optionIndex;
        }
        if (previousProps.selected && previousProps.selected.value === current.value) {
          return index;
        }
        return null;
      }, null);
      const previousFocusedIndex = previousState.keyboardFocusedOptionIndex;
      let indexToStartMovingFrom = previousFocusedIndex;
      if (previousFocusedIndex === null && selectedOptionIndex === null) {
        return { keyboardFocusedOptionIndex: 0 };
      }
      if (previousFocusedIndex === null && selectedOptionIndex !== null) {
        indexToStartMovingFrom = selectedOptionIndex;
      }
      const unClampedNewIndex = indexToStartMovingFrom + difference;
      const newIndex = clamp(0, optionsWithoutHeaders.length - 1, unClampedNewIndex);
      return { keyboardFocusedOptionIndex: newIndex };
    });
  }

  open() {
    // TODO: should also add breakpoint-specific overflow:hidden class to body
    this.setState({ open: true }, () => {
      const isTouchDevice =
        typeof window !== 'undefined' &&
        window.matchMedia &&
        !!window.matchMedia('(pointer: coarse)').matches;
      const searchable = !!this.props.onSearchChange || !!this.props.search;

      defer(() => {
        if (!isTouchDevice && searchable && this.searchBoxRef.current) {
          this.searchBoxRef.current.focus();
        }
      });
    });

    addClickClassToDocumentOnIos();
    document.addEventListener('click', this.handleDocumentClick, false);
  }

  close() {
    this.setState({ open: false, keyboardFocusedOptionIndex: null });

    removeClickClassFromDocumentOnIos();
    document.removeEventListener('click', this.handleDocumentClick, false);
  }

  handleButtonClick = () => {
    if (!this.props.disabled) {
      this.open();
    }
  };

  handleDocumentClick = () => {
    if (this.state.open) {
      this.close();
    }
  };

  handleTouchStart = (event) => {
    if (event.currentTarget === event.target && this.state.open) {
      this.close();
    }
  };

  createSelectHandlerForOption = (option) => (event) => {
    stopPropagation(event);
    this.selectOption(option);
  };

  selectOption(option) {
    if (option && !option.placeholder) {
      this.props.onChange(option);
    } else {
      this.props.onChange(null);
    }
    this.close();
  }

  style = (className) => this.props.classNames[className] || className;

  renderOptionsList() {
    const {
      dropdownRight,
      dropdownWidth,
      onSearchChange,
      placeholder,
      required,
      search,
      searchValue,
      searchPlaceholder,
    } = this.props;
    const { open } = this.state;
    const s = this.style;

    const canSearch = !!onSearchChange || !!search;

    const dropdownClass = classNames(s('tw-select'), s('dropdown-menu'), {
      [s(`dropdown-menu-${dropdownRight}-right`)]: dropdownRight,
      [s(`dropdown-menu-${dropdownWidth}`)]: dropdownWidth,
      [s(`dropdown-menu--open`)]: open,
    });

    const list = (
      <ul className={dropdownClass} role="menu">
        {!required && !canSearch && placeholder ? this.renderPlaceHolderOption() : ''}
        {canSearch && (
          <SearchBox
            classNames={this.props.classNames}
            handleSearchChange={this.handleSearchChange}
            onClick={stopPropagation}
            value={searchValue || this.state.searchValue}
            ref={this.searchBoxRef}
            searchPlaceholder={searchPlaceholder}
          />
        )}
        <Options
          options={this.getOptions()}
          stopPropagation={stopPropagation}
          createSelectHandlerForOption={this.createSelectHandlerForOption}
          keyboardFocusedOptionIndex={this.state.keyboardFocusedOptionIndex}
          selected={this.props.selected}
          classNames={this.props.classNames}
        />
      </ul>
    );

    return list;
  }

  renderPlaceHolderOption() {
    const { placeholder } = this.props;
    return (
      /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */
      <li
        onClick={this.createSelectHandlerForOption({ placeholder })}
        onKeyPress={this.createSelectHandlerForOption({ placeholder })}
        className={classNames(
          this.style('tw-dropdown-item--clickable'),
          this.style('tw-dropdown-item--divider'),
        )}
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>{placeholder}</a>
      </li>
    );
  }

  renderButtonInternals() {
    const { selected, placeholder } = this.props;
    if (selected) {
      return <Option {...selected} classNames={this.props.classNames} selected />;
    }
    return <span className={this.style('form-control-placeholder')}>{placeholder}</span>;
  }

  render() {
    const { disabled, size, block, id, dropdownUp, inverse } = this.props;
    const { open } = this.state;
    const s = this.style;

    const groupClass = classNames(s('tw-select'), s('btn-group'), {
      [s('btn-block')]: block,
      [s('dropup')]: dropdownUp,
      [s('dropdown')]: !dropdownUp,
    });

    const buttonClass = classNames(
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
      // A transition is used here in order to mount and unmount the dropdown menu while retaining animations
      <div // eslint-disable-line jsx-a11y/no-static-element-interactions
        className={groupClass}
        ref={this.dropdownMenuRef}
        onKeyDown={this.handleKeyDown}
        onTouchMove={this.handleTouchStart}
        onFocus={this.handleOnFocus}
        onBlur={this.handleOnBlur}
      >
        <button
          disabled={disabled}
          className={buttonClass}
          type="button"
          id={id}
          aria-expanded={open}
          onClick={this.handleButtonClick}
        >
          {this.renderButtonInternals()}
          <Chevron
            disabled={disabled}
            className={`${s('tw-icon')} ${s('tw-chevron-up-icon')} ${s('tw-chevron')} ${s(
              'chevron-color',
            )} ${s('bottom')} ${s('tw-select-chevron')}`}
          />
        </button>

        <ResponsivePanel
          open={open}
          anchorRef={this.dropdownMenuRef}
          position={ResponsivePanel.Position.BOTTOM}
          onClose={() => this.close()}
        >
          <div className="open">{this.renderOptionsList()}</div>
        </ResponsivePanel>
      </div>
    );
  }
}

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
