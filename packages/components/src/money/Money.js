import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { formatMoney } from '@transferwise/formatting';

const Money = ({ amount, currency }) => {
  const { locale } = useIntl();
  return <>{formatMoney(amount, currency, locale)}</>;
};

Money.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Money;
