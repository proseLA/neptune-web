/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import classNames from 'classnames';

import hightlight from '../util/highlight';

const Option = (props) => {
  const { option, selected, onClick, query } = props;
  const { label, note, secondary } = option;

  return (
    <li
      role="option"
      aria-selected="false"
      className={classNames('typeahead__option tw-dropdown-item tw-dropdown-item--clickable', {
        'tw-dropdown-item--focused': selected,
      })}
    >
      <a className="dropdown-item" href="#" onClick={onClick}>
        <span>{hightlight(label, query)}</span>
        {note && <span className="small m-l-1">{note}</span>}
        {secondary && <span className="small text-ellipsis">{secondary}</span>}
      </a>
    </li>
  );
};

Option.propTypes = {
  option: PropTypes.shape({
    label: PropTypes.string.isRequired,
    note: PropTypes.string,
    secondary: PropTypes.string,
  }).isRequired,
  query: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

Option.defaultProps = {
  selected: false,
  query: '',
  onClick: () => {},
};

export default Option;
