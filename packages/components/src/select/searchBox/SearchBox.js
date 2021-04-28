import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Search as SearchIcon } from '@transferwise/icons';
import classnames from 'classnames';

const SearchBox = forwardRef(
  ({ classNames, handleSearchChange, onClick, searchPlaceholder, value }, ref) => {
    const style = (className) => classNames[className] || className;
    return (
      <li className={style('tw-dropdown-item--divider')}>
        <button
          type="button"
          className={classnames(style('tw-select-filter-link'), style('p-a-0'), 'btn-link')}
        >
          <div className={style('input-group')}>
            <span className={style('input-group-addon')}>
              <SearchIcon className={classnames(style('tw-icon'), style('tw-icon-search'))} />
            </span>
            <input
              type="text"
              className={classnames(style('tw-select-filter'), style('form-control'))}
              placeholder={searchPlaceholder}
              onChange={handleSearchChange}
              onClick={onClick}
              value={value}
              ref={ref}
              spellCheck="false"
            />
          </div>
        </button>
      </li>
    );
  },
);

SearchBox.propTypes = {
  classNames: PropTypes.objectOf(PropTypes.string),
  handleSearchChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  searchPlaceholder: PropTypes.string,
  value: PropTypes.string,
};

SearchBox.defaultProps = {
  classNames: {},
  searchPlaceholder: 'Search...',
  value: '',
};

export default SearchBox;
