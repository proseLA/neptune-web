import React from 'react';
import PropTypes from 'prop-types';
import { formatMoney } from '@transferwise/formatting';
import { useSafeIntl } from '../common';

const Money = ({ amount, currency }) => {
  const { locale } = useSafeIntl();
  return <>{formatMoney(amount, currency, locale)}</>;
};

Money.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Money;
