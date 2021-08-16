import { formatMoney } from '@transferwise/formatting';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

const Money = ({ amount, currency }) => {
  const { locale } = useIntl();
  return <>{formatMoney(amount, currency, locale)}</>;
};

Money.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Money;
