import { defineMessages } from 'react-intl';

export default defineMessages({
  minItemsError: {
    id: 'dynamicFlows.ArraySchema.minItemsError',
    defaultMessage: 'Please add at least {minItems}.',
    description: 'Customer inputs less than the expected number of values',
  },
  maxItemsError: {
    id: 'dynamicFlows.ArraySchema.maxItemsError',
    defaultMessage: 'Please add {maxItems} or fewer.',
    description: 'Customer inputs more than the allowed number of values',
  },
});
