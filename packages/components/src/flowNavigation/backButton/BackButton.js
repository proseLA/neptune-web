import { ArrowLeft as ArrowLeftIcon } from '@transferwise/icons';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const BackButton = ({ label, className, onClick }) => (
  <button
    type="button"
    className={classNames('np-back-button', 'align-items-center', 'btn-unstyled', className)}
    onClick={onClick}
  >
    <ArrowLeftIcon size={24} />
    {label}
  </button>
);

BackButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.element,
  onClick: PropTypes.func.isRequired,
};

BackButton.defaultProps = {
  className: undefined,
  label: undefined,
};

export default BackButton;
