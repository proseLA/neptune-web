import PropTypes from 'prop-types';
import classNames from 'classnames';
import { LogoType } from './logoTypes';
import './Logo.css';

const baseUrl = 'https://wise.com/public-resources/assets/logos/wise/';

const logoPaths = {
  WISE: 'brand_logo.svg',
  WISE_BUSINESS: 'brand_logo_business.svg',
  WISE_INVERSE: 'brand_logo_inverse.svg',
  WISE_BUSINESS_INVERSE: 'brand_logo_business_inverse.svg',
};

const Logo = ({ className, inverse, type }) => {
  const path = logoPaths[`${type}${inverse ? '_INVERSE' : ''}`];
  return (
    <img
      className={classNames('np-logo', className)}
      alt={type === LogoType.WISE ? 'Wise' : 'Wise business'}
      src={`${baseUrl}${path}`}
    />
  );
};

Logo.propTypes = {
  /** Extra classes applied to Logo */
  className: PropTypes.string,
  /** If true, will use dark colours for dark on light theme */
  inverse: PropTypes.bool,
  /** What type of logo to display */
  type: PropTypes.oneOf(['WISE', 'WISE_BUSINESS']),
};

Logo.defaultProps = {
  className: undefined,
  inverse: false,
  type: LogoType.WISE,
};

export default Logo;
