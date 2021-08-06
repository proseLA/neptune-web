import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ArrowPosition } from './alertArrowPositions';

function withArrow(Alert, arrow) {
  const AlertWithArrow = (props) => (
    <Alert
      {...props}
      className={classNames(props.className, arrowClasses(arrow))}
      arrow={undefined}
    />
  );

  AlertWithArrow.propTypes = {
    className: PropTypes.string,
  };

  AlertWithArrow.defaultProps = {
    className: undefined,
  };

  return AlertWithArrow;
}

function arrowClasses(arrow) {
  if (arrow) {
    const classes = ['arrow'];
    const { BOTTOM, BOTTOM_LEFT, BOTTOM_RIGHT, TOP, TOP_RIGHT, TOP_LEFT } = ArrowPosition;

    switch (arrow) {
      case BOTTOM:
        return classes.concat('arrow-bottom', 'arrow-center');
      case BOTTOM_LEFT:
        return classes.concat('arrow-bottom', 'arrow-left');
      case BOTTOM_RIGHT:
        return classes.concat('arrow-bottom', 'arrow-right');
      case TOP:
        return classes.concat('arrow-center');
      case TOP_RIGHT:
        return classes.concat('arrow-right');
      case TOP_LEFT:
      default:
        return classes;
    }
  }
  return '';
}

export default withArrow;
