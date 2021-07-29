import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableLink extends PureComponent {
  onClick = (event) => {
    event.preventDefault();
    if (!this.props.disabled) {
      this.props.onClick(this.props.item);
    }
  };

  render() {
    const { item, type, title, longTitle, active, disabled, today } = this.props;
    return (
      <>
        <button
          type="button"
          onClick={this.onClick}
          className={`tw-date-lookup-${type}-option ${active ? 'active' : ''} ${
            today ? 'today' : ''
          }`}
          disabled={disabled}
          aria-label={longTitle}
        >
          {title || item}
        </button>
      </>
    );
  }
}

TableLink.propTypes = {
  item: PropTypes.number.isRequired, // day (1-31), month (0-11) or year (2018 etc)
  type: PropTypes.oneOf(['day', 'month', 'year']).isRequired,
  title: PropTypes.string,
  longTitle: PropTypes.string,
  active: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  today: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

TableLink.defaultProps = {
  title: null,
  longTitle: null,
};

export default TableLink;
