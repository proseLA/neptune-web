import { Markdown, Info } from '@transferwise/components';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import messages from './Help.messages';

const Help = (props) => {
  const intl = useIntl();

  return (
    <Info
      className="m-l-1"
      content={<Markdown>{props.help.markdown}</Markdown>}
      presentation="POPOVER"
      size="sm"
      aria-label={intl.formatMessage(messages.helpAria)}
    />
  );
};

Help.propTypes = {
  help: PropTypes.shape({ markdown: PropTypes.string }).isRequired,
};

export default Help;
