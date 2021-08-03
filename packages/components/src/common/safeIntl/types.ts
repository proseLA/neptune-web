import { IntlShape } from 'react-intl';

export type SafeIntlShape = Pick<IntlShape, 'locale' | 'formatMessage'>;
