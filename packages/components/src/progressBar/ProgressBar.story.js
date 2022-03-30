import { Sentiment } from '../common';

import ProgressBar from './ProgressBar';

export default {
  component: ProgressBar,
  title: 'ProgressBar',
};

export const Basic = () => (
  <ProgressBar
    progress="80%"
    description="You have 3 days to reach your goal."
    title="Send 5,550 GBP"
    value="200 GBP to go"
  />
);
