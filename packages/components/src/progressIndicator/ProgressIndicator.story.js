import { Sentiment } from '../common';
import ProgressIndicator from './ProgressIndicator';

export default {
  component: ProgressIndicator,
  title: 'ProgressIndicator',
  parameters: {
    knobs: {
      status: false,
    },
  },
};

export const Basic = () => {
  return (
    <>
      <span className="small">Dec 1 - Dec 31</span>
      <span className="h2 m-t-1" style={{ color: 'var(--color-positive)' }}>
        5,550 GBP
      </span>
      <ProgressIndicator
        status={Sentiment.POSITIVE}
        width={'80%'}
        limits={[0, 6000]}
        outro={`Make one or more transfers to another currency worth more than $6,000 USD between the 1st
        and 31st of December and you’ll earn a free transfer of up to $1,300 USD.`}
      />
      <span className="small m-t-2">Dec 1 - Dec 31</span>
      <span className="h2 m-t-1" style={{ color: 'var(--color-warning)' }}>
        5,550 GBP
      </span>
      <ProgressIndicator
        status={Sentiment.WARNING}
        width={'60%'}
        limits={[0, '6,000']}
        outro={`Make one or more transfers to another currency worth more than $6,000 USD between the 1st
        and 31st of December and you’ll earn a free transfer of up to $1,300 USD.`}
      />
      <span className="small m-t-2">Dec 1 - Dec 31</span>
      <span className="h2 m-t-1" style={{ color: 'var(--color-negative)' }}>
        5,550 GBP
      </span>
      <ProgressIndicator
        status={Sentiment.NEGATIVE}
        width={'40%'}
        limits={[0, '6,000']}
        outro={`Make one or more transfers to another currency worth more than $6,000 USD between the 1st
        and 31st of December and you’ll earn a free transfer of up to $1,300 USD.`}
      />
      <p className="m-t-1 small"></p>
    </>
  );
};
