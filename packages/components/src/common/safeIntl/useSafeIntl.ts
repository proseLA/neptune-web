import { useIntl } from 'react-intl';
import { defaultIntl } from './intl';

export function useSafeIntl() {
  try {
    return useIntl();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error.toString(), `Falling back to "${defaultIntl.locale}".`);
    return defaultIntl;
  }
}
