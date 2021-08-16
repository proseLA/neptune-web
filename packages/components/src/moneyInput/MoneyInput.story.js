import { action } from '@storybook/addon-actions';
import { select, number } from '@storybook/addon-knobs';

import { Size } from '../common';

import MoneyInput from '.';

export default {
  component: MoneyInput,
  title: 'MoneyInput',
};

export const Basic = () => {
  const size = select('size', Object.values(Size), Size.LARGE);
  const amount = number('amount', 1000);
  const placeholder = number('placeholder', null);

  return (
    <>
      <label htmlFor="money-input">Money input label</label>
      <MoneyInput
        id="money-input"
        amount={amount}
        size={size}
        addon={null}
        placeholder={placeholder}
        searchPlaceholder="Type a currency or country"
        customActionLabel="Custom action label"
        currencies={[
          {
            header: 'Popular currencies',
          },
          {
            value: 'EUR',
            label: 'EUR',
            note: 'Euro',
            currency: 'eur',
            searchable: 'Spain, Germany, France, Austria',
          },
          {
            value: 'GBP',
            label: 'GBP',
            note: 'British pound',
            currency: 'gbp',
            searchable: 'England, Scotland, Wales',
          },
        ]}
        selectedCurrency={{
          value: 'EUR',
          label: 'EUR',
          note: 'Euro',
          currency: 'eur',
          searchable: 'Spain, Germany, France, Austria',
        }}
        onAmountChange={action('amount changed')}
        onCurrencyChange={action('currency changed')}
        onSearchChange={action('search query changed')}
        onCustomAction={action('Custom action')}
      />
    </>
  );
};
