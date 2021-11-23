import { Button } from '@transferwise/components';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import messages from './NoCameraAccess.messages';

const NoCameraAccess = ({ onAction, hidden }) => {
  const intl = useIntl();

  return (
    <div id="no-camera-access" className={hidden ? 'hidden' : ''}>
      <div className="container p-t-5">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <img
              src="/public-resources/assets/illustrations/general_error_bob_and_naina.svg"
              alt=""
              className="center-block m-b-5"
            />
            <h2 className="text-xs-center m-b-3">{intl.formatMessage(messages.title)}</h2>
            <p className="text-xs-center m-b-5">{intl.formatMessage(messages.paragraph)}</p>
            <Button block onClick={onAction}>
              {intl.formatMessage(messages.action)}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

NoCameraAccess.propTypes = {
  hidden: PropTypes.bool,
  onAction: PropTypes.func.isRequired,
};

NoCameraAccess.defaultProps = {
  hidden: false,
};

export default NoCameraAccess;
