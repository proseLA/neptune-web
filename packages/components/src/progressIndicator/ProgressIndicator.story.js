import { Sentiment } from '../common';

import ProgressIndicator from './ProgressIndicator';

export default {
  component: ProgressIndicator,
  title: 'ProgressIndicator',
};

export const Basic = () => (
  <ProgressIndicator
    progress="80%"
    description="You have 3 days to reach your goal."
    title="Send 5,550 GBP"
    value="200 GBP to go"
  />
);
