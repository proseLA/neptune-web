import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Position } from '../common';

function getTooltipStyle(parent, tooltip, position, offset) {
  switch (position) {
    case Position.TOP:
      return {
        top: `${parent.offsetTop - tooltip.offsetHeight - offset}px`,
        left: `${parent.offsetLeft + parent.offsetWidth / 2 - tooltip.offsetWidth / 2}px`,
      };
    case Position.LEFT:
      return {
        top: `${parent.offsetTop + parent.offsetHeight / 2 - tooltip.offsetHeight / 2}px`,
        left: `${parent.offsetLeft - tooltip.offsetWidth - offset}px`,
      };
    case Position.RIGHT:
      return {
        top: `${parent.offsetTop + parent.offsetHeight / 2 - tooltip.offsetHeight / 2}px`,
        left: `${parent.offsetLeft + parent.offsetWidth + offset}px`,
      };
    case Position.BOTTOM:
      return {
        top: `${parent.offsetTop + parent.offsetHeight + offset}px`,
        left: `${parent.offsetLeft + parent.offsetWidth / 2 - tooltip.offsetWidth / 2}px`,
      };
    default:
      return {};
  }
}

class Tooltip extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      tooltipId: null,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      tooltipId: Math.random().toString(36).substring(7),
    });
  }

  show() {
    this.setState(() => ({ show: true }));
  }

  hide() {
    this.setState(() => ({ show: false }));
  }

  ensureHidden = (event) => {
    if (!this.state.show) {
      event.stopPropagation();
      this.hide();
    }
  };

  render() {
    const { tooltipId } = this.state;
    const { position, children, label, offset } = this.props;
    const tooltipStyle =
      this.elementReference && this.tooltipReference
        ? getTooltipStyle(this.elementReference, this.tooltipReference, position, offset)
        : {};
    return (
      <span
        onMouseOver={() => this.show()}
        onFocus={() => this.show()}
        onMouseOut={() => this.hide()}
        onBlur={() => this.hide()}
        ref={(elementReference) => {
          this.elementReference = elementReference;
        }}
        aria-describedby={tooltipId}
        className="tw-tooltip-container"
      >
        <div
          onMouseOver={this.ensureHidden}
          onFocus={this.ensureHidden}
          className={`tooltip fade ${position} ${this.state.show ? 'in' : ''}`}
          role="tooltip"
          style={tooltipStyle}
          ref={(tooltipReference) => {
            this.tooltipReference = tooltipReference;
          }}
          id={tooltipId}
        >
          <div className="tooltip-arrow" />
          <div className="tooltip-inner">{label}</div>
        </div>
        {children}
      </span>
    );
  }
}

Tooltip.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]).isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  label: PropTypes.node.isRequired,
  offset: PropTypes.number,
};

Tooltip.defaultProps = {
  position: Position.TOP,
  offset: 0,
};

export default Tooltip;
