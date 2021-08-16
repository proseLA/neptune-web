import { Search as SearchIcon } from '@transferwise/icons';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const SearchBox = forwardRef(({ classNames, onChange, onClick, placeholder, value }, reference) => {
  const style = (className) => classNames[className] || className;
  return (
    <li className={style('tw-dropdown-item--divider')}>
      <a className={`${style('tw-select-filter-link')} ${style('p-a-0')}`}>
        <div className={style('input-group')}>
          <span className={style('input-group-addon')}>
            <SearchIcon className={classnames(style('tw-icon'), style('tw-icon-search'))} />
          </span>
          <input
            ref={reference}
            type="text"
            className={classnames(style('tw-select-filter'), style('form-control'))}
            placeholder={placeholder}
            value={value}
            spellCheck="false"
            onChange={onChange}
            onClick={onClick}
          />
        </div>
      </a>
    </li>
  );
});

SearchBox.propTypes = {
  classNames: PropTypes.objectOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

SearchBox.defaultProps = {
  classNames: {},
  value: '',
  placeholder: undefined,
};

export default SearchBox;
