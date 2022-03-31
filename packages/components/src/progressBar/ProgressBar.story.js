import { Sentiment } from '../common';

import ProgressBar from './ProgressBar';

export default {
  component: ProgressBar,
  title: 'ProgressBar',
};

export const Basic = () => (
  <ProgressBar
    description="You have 3 days to reach your goal."
    id="progress-bar-id"
    label="Send 5,550 GBP"
    progress={50}
    value="200 GBP to go"
  />
);
